import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/components/Button';

export default class SettingsPage extends ExtensionPage {
  oninit(attrs) {
    super.oninit(attrs);
  }

  content() {
    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          {this.buildSettingComponent({
            type: 'switch',
            setting: 'moneyTransfer.moneyTransferClient1Customization',
            label: app.translator.trans('ziven-transfer-money.admin.transfer-money-client-customization'),
            help:app.translator.trans('ziven-transfer-money.admin.transfer-money-client-customization-help')
          })}

          <div className="Form-group">{this.submitButton()}</div>
        </div>
      </div>
    );
  }

}
