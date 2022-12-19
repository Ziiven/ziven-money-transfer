<?php

namespace Ziven\transferMoney\Controller;

use Ziven\transferMoney\Serializer\TransferMoneySerializer;
use Ziven\transferMoney\Model\TransferMoney;
use Ziven\transferMoney\Notification\TransferMoneyBlueprint;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\User;
use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Flarum\Notification\NotificationSyncer;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Illuminate\Support\Carbon;

class TransferMoneyController extends AbstractCreateController{
    public $serializer = TransferMoneySerializer::class;
    protected $settings;
    protected $notifications;
    protected $translator;

    public function __construct(NotificationSyncer $notifications, Translator $translator,SettingsRepositoryInterface $settings){
        $this->settings = $settings;
        $this->notifications = $notifications;
        $this->translator = $translator;
    }

    protected function data(ServerRequestInterface $request, Document $document){
        $requestData = $request->getParsedBody()['data']['attributes'];
        $moneyTransfer = $requestData['moneyTransfer'];
        $targetUserID = $requestData['targetUserID'];
        $currentUserID = $request->getAttribute('actor')->id;
        $errorMessage = "";

        if(!isset($moneyTransfer) || $targetUserID==$currentUserID || $moneyTransfer<=0){
            $errorMessage = 'ziven-transfer-money.forum.transfer-error';
        }else{
            $currentUserData = User::find($currentUserID);
            $allowUseTranferMoney = $request->getAttribute('actor')->can('transferMoney.allowUseTranferMoney', $currentUserData);

            if($allowUseTranferMoney){
                $currentUserMoneyRemain = $currentUserData->money-$moneyTransfer;
                $targetUserData = User::find($targetUserID);

                if($currentUserMoneyRemain<0){
                    $errorMessage = 'ziven-transfer-money.forum.transfer-error-insufficient-fund';
                }else{
                    $transferMoney = new TransferMoney();
                    $transferMoney->from_user_id = $currentUserID;
                    $transferMoney->target_user_id = $targetUserID;
                    $transferMoney->transfer_money_value = $moneyTransfer;
                    $transferMoney->assigned_at = Carbon::now('Asia/Shanghai');
                    $transferMoney->save();

                    $currentUserData->money = $currentUserMoneyRemain;
                    $currentUserData->save();

                    $targetUserData = User::find($targetUserID);
                    $targetUserData->money+=$moneyTransfer;
                    $targetUserData->save();

                    $this->notifications->sync(new TransferMoneyBlueprint($transferMoney),[$targetUserData]);

                    return $transferMoney;
                }
            }else{
                $errorMessage = 'ziven-transfer-money.forum.transfer-error-no-permission';
            }
        }

        if($errorMessage!==""){
            throw new ValidationException(['message' => $this->translator->trans($errorMessage)]); 
        }
    }
}
