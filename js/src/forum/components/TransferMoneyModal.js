import app from 'flarum/forum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import TransferMoneySuccessModal from './TransferMoneySuccessModal';

export default class TransferMoneyModal extends Modal {
  static isDismissible = false;

  oninit(vnode) {
    super.oninit(vnode);
  }

  className() {
    return 'Modal--small';
  }

  title() {
    return app.translator.trans('ziven-transfer-money.forum.transfer-money-to', {user: this.attrs.user});
  }

  content() {
    const moneyName = app.forum.attribute('antoinefr-money.moneyname') || '[money]';

    return (
      <div className="Modal-body">
        <div className="Form">
          <div className="Form-group">
            <label>{app.translator.trans('ziven-transfer-money.forum.current-money-amount')} {moneyName.replace('[money]', app.session.user.attribute("money"))}</label>
            <input id="moneyTransferInput" required className="FormControl" type="number" step="any" min="0" value="0" />
          </div>
          <div className="Form-group" style="text-align: center;">
            {Button.component(
              {
                className: 'Button Button--primary',
                type: 'submit',
                loading: this.loading,
              },
              app.translator.trans('ziven-transfer-money.forum.ok')
            )}&nbsp;
            {Button.component(
              {
                className: 'Button transferMoneyButton--gray',
                loading: this.loading,
                onclick: () => {
                  this.hide();
                }
              },
              app.translator.trans('ziven-transfer-money.forum.cancel')
            )}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    const moneyTransferValue = $("#moneyTransferInput").val();
    const targetUserID = this.attrs.user.id();

    if(moneyTransferValue>0){
      const moneyTransferData = {
        moneyTransfer:moneyTransferValue,
        targetUserID:targetUserID
      };

      this.loading = true;

      app.store
        .createRecord("transferMoney")
        .save(moneyTransferData)
        .then(
          (payload) => {
            app.store.pushPayload(payload);
            app.modal.show(TransferMoneySuccessModal);
            this.loading = false;
          }
        )
        .catch((e) => {
          this.loading = false;
        });
    }
  }
}
