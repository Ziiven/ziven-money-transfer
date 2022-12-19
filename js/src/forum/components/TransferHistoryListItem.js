import Component from "flarum/Component";
import Link from "flarum/components/Link";
import avatar from "flarum/helpers/avatar";
import username from "flarum/helpers/username";

export default class TransferHistoryListItem extends Component {
  view() {
    const {transferHistory} = this.attrs;
    const currentUserID = app.session.user.id();
    const fromUserID = transferHistory.attribute("from_user_id");
    const assignedAt = transferHistory.assignedAt();
    const fromUser = transferHistory.fromUser();
    const targetUser = transferHistory.targetUser();
    const transferMoney = transferHistory.transferMoney();
    const transferID = transferHistory.id();
    const transferType = app.translator.trans(currentUserID==fromUserID?"ziven-transfer-money.forum.transfer-money-out":"ziven-transfer-money.forum.transfer-money-in");
    const transferTypeStyle = currentUserID==fromUserID?"color:red":"color:green";

    const moneyName = app.forum.attribute('antoinefr-money.moneyname') || '[money]';
    const transferMoneyText = moneyName.replace('[money]', transferMoney);

    return (
      <div className="transferHistoryContainer">
        <div style="display: flex;">
          <div style="width:70px">{transferID}</div>
          <div style="width:85px;">
            <span style={transferTypeStyle}>{transferType}</span>
          </div>
          <div style="width:190px">
            <Link href={fromUser ? app.route.user(fromUser) : "#"} className="transferHistoryUser" style="color:var(--heading-color)">
              {avatar(fromUser)} {username(fromUser)}
            </Link>
          </div>
          <div style="width:190px">
            <Link href={targetUser ? app.route.user(targetUser) : "#"} className="transferHistoryUser" style="color:var(--heading-color)">
              {avatar(targetUser)} {username(targetUser)}
            </Link>
          </div>
          <div style="width:190px">
            {assignedAt}
          </div>
          <div style="width:85px">
            {transferMoneyText}
          </div>
        </div>
      </div>
    );
  }
}
