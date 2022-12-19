import Model from "flarum/Model";

export default class TransferMoney extends Model {}
Object.assign(TransferMoney.prototype, {
  id: Model.attribute("id"),
  transferMoney: Model.attribute("transfer_money_value"),
  assignedAt: Model.attribute("assigned_at"),
  fromUser: Model.hasOne("fromUser"),
  targetUser: Model.hasOne("targetUser"),
});
