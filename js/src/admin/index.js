import {extend, override} from 'flarum/extend';

app.initializers.add('ziven-money-transfer', () => {
  app.extensionData.for('ziiven-money-transfer')
  .registerPermission(
    {
      icon: 'fas fa-exchange-alt',
      label: app.translator.trans('ziven-transfer-money.admin.permission.allow_use_transfer_money'),
      permission: 'transferMoney.allowUseTranferMoney',
    },
    'moderate',
    90
  )
});
