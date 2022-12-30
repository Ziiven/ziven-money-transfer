(()=>{var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const r=flarum.core.compat.extend,n=flarum.core.compat["utils/UserControls"];var s=t.n(n);const o=flarum.core.compat["components/NotificationGrid"];var a=t.n(o);const i=flarum.core.compat["forum/components/SessionDropdown"];var c=t.n(i);const u=flarum.core.compat["components/Button"];var l=t.n(u);function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function p(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,f(t,e)}const d=flarum.core.compat.Model;var h=t.n(d),y=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e}(h());Object.assign(y.prototype,{id:h().attribute("id"),transferMoney:h().attribute("transfer_money_value"),notes:h().attribute("notes"),assignedAt:h().attribute("assigned_at"),fromUser:h().hasOne("fromUser"),targetUser:h().hasOne("targetUser")});const v=flarum.core.compat["forum/app"];var g=t.n(v);const b=flarum.core.compat["components/Modal"];var N=t.n(b);const S=flarum.core.compat["forum/states/SearchState"];var M=t.n(S);const z=flarum.core.compat["common/utils/ItemList"];var x=t.n(z);const R=flarum.core.compat["common/utils/Stream"];var U=t.n(R);const w=flarum.core.compat["common/components/Alert"];var T=t.n(w);const k=flarum.core.compat["forum/components/Search"];var I=t.n(k);function O(){return O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},O.apply(this,arguments)}const _=flarum.core.compat["common/helpers/highlight"];var B=t.n(_);const H=flarum.core.compat["common/helpers/avatar"];var j=t.n(H);const C=flarum.core.compat["common/helpers/username"];var F=t.n(C),V=function(){function t(){}var e=t.prototype;return e.view=function(t){var e=this;if(!(t.length<3||this.loading)){g().cache.userSearchResults||(g().cache.userSearchResults=[]),this.query=t;var r=g().session.user.id();if(g().cache.userSearchResults[this.query])return[m("li",{className:"Dropdown-header"},g().translator.trans("ziven-transfer-money.forum.search_user_header")),g().cache.userSearchResults[this.query].map((function(t){if(r!=t.id()){var n=F()(t),s=[B()(n.text,e.query)];return m("li",{className:"SearchResult","data-index":"users:"+t.id()},m("a",{"data-index":"users:"+t.id()},j()(t),O({},n,{text:void 0,children:s})))}}))];this.loading=!0,g().cache.userSearchResults[this.query]=[],g().store.find("users",{filter:{q:this.query+" allows-pd"},page:{limit:5}}).then(this.pushResults.bind(this))}},e.pushResults=function(t){var e=this;t.payload.data.map((function(t){var r=g().store.getById("users",t.id);g().cache.userSearchResults[e.query].push(r)})),this.loading=!1,m.redraw()},t}();const q=flarum.core.compat["common/utils/classList"];var P=t.n(q);const A=flarum.core.compat["common/utils/extractText"];var D=t.n(A);const L=flarum.core.compat["common/components/LoadingIndicator"];var G=t.n(L);flarum.core.compat["common/models/User"];var J=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).inputUuid=void 0,e}p(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.inputUuid=Math.random().toString(36).substring(2)},r.oncreate=function(e){var r=this;t.prototype.oncreate.call(this,e);var n=this;this.$(".Search-results").on("click",(function(t){var e=r.$(".SearchResult.active");n.addRecipient(e.data("index")),n.$(".RecipientsInput").focus()})),this.$(".Search-results").on("touchstart",(function(t){var e=r.$(t.target.parentNode);n.addRecipient(e.data("index")),n.$(".RecipientsInput").focus()})),$(".RecipientsInput").on("input",(function(){clearTimeout(r.typingTimer),r.doSearch=!1,r.typingTimer=setTimeout((function(){r.doSearch=!0,m.redraw()}),900)})).on("keydown",(function(){clearTimeout(r.typingTimer)})),t.prototype.oncreate.call(this,e)},r.view=function(){var t=this;void 0===this.searchState.getValue()&&this.searchState.setValue("");var e=this.searchState.getValue()&&this.searchState.getValue().length>=3;this.sources||(this.sources=this.sourceItems().toArray());var r=this.attrs.selected().toArray();return m("div",{role:"search",className:"Search"},m("div",{className:"RecipientsInput-selected RecipientsLabel","aria-live":"polite"},m("div",{style:"padding-bottom:10px;font-weight:bold;font-size: 14px;color: var(--text-color);"},g().translator.trans("ziven-transfer-money.forum.transfer-money-to-user")),0===r.length&&m("div",{style:"height:34px;cursor: default !important;",class:"transferSearchUserContainer"},g().translator.trans("ziven-transfer-money.forum.transfer-money-no-user-selected")),this.attrs.selected().toArray().map((function(e){var r=F()(e),n=j()(e),s=e.data.id;return t.attrs.selectedUsers[s]=1,m("div",{class:"transferSearchUserContainer",onclick:function(r){return t.removeRecipient(e,r)}},m("span",{class:"transferSearchUser"},n)," ",r)}))),m("div",{className:"Form-group"},m("label",{for:"transfer-money-user-search-input-"+this.inputUuid},g().translator.trans("ziven-transfer-money.forum.transfer-money-search-user")),m("div",{className:"AddRecipientModal-form-input Search-input"},m("input",{id:"transfer-money-user-search-input-"+this.inputUuid,className:P()("RecipientsInput","FormControl",{open:!!this.searchState.getValue(),focused:!!this.searchState.getValue(),active:!!this.searchState.getValue(),loading:!!this.loadingSources}),type:"search",placeholder:D()(g().translator.trans("ziven-transfer-money.forum.transfer-money-search-user-placeholder")),value:this.searchState.getValue(),oninput:function(e){return t.searchState.setValue(e.target.value)},onfocus:function(){return t.hasFocus=!0},onblur:function(){return t.hasFocus=!1}}),m("ul",{className:P()("Dropdown-menu","Search-results","fade",{in:!!e})},this.doSearch?this.sources.map((function(e){return e.view(t.searchState.getValue())})):G().component({size:"tiny",className:"Button Button--icon Button--link"})))))},r.sourceItems=function(){var t=new(x());return t.add("users",new V),t},r.addRecipient=function(t){var e=t.split(":"),r=e[0],n=e[1],s=this.findRecipient(r,n),o=s.data.id;this.attrs.selected().add(t,s),this.attrs.selectedUsers[o]=1,this.searchState.clear(),this.attrs.needMoney(this.getNeedMoney()),this.attrs.callback()},r.removeRecipient=function(t,e){e.preventDefault();var r=t.data.id;delete this.attrs.selectedUsers[r],this.attrs.selected().remove("users:"+t.id()),this.attrs.needMoney(this.getNeedMoney()),this.attrs.callback()},r.getNeedMoney=function(){return $("#moneyTransferInput").val()*Object.keys(this.attrs.selectedUsers).length},r.findRecipient=function(t,e){return g().store.getById(t,e)},e}(I());const E=flarum.core.compat["common/components/Modal"];var K=t.n(E);const Q=flarum.core.compat["common/components/Button"];var W=t.n(Q),X=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.className=function(){return"Modal--small"},r.title=function(){return g().translator.trans("ziven-transfer-money.forum.transfer-money-success")},r.content=function(){return[m("div",{className:"Modal-body"},m("div",{style:"text-align:center"},W().component({style:"width:66px",className:"Button Button--primary",onclick:function(){location.reload()}},g().translator.trans("ziven-transfer-money.forum.ok"))))]},e}(K());X.isDismissible=!1;var Y=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.selected=U()(new(x())),this.selectedUsers={},this.moneyName=g().forum.attribute("antoinefr-money.moneyname")||"[money]";var r=this.attrs.user;r&&(this.selected().add("users:"+r.id(),r),this.selectedUsers[r.id()]),this.recipientSearch=new(M()),this.needMoney=U()(0)},r.className=function(){return"Modal--small"},r.title=function(){return g().translator.trans("ziven-transfer-money.forum.transfer-money")},r.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{style:"padding-bottom:20px;",className:"TransferMoneyModal-form"},J.component({state:this.recipientSearch,selected:this.selected,selectedUsers:this.selectedUsers,needMoney:this.needMoney,callback:function(){m.redraw()}})),m("div",{className:"Form-group"},m("label",null,g().translator.trans("ziven-transfer-money.forum.current-money-amount"),this.moneyName.replace("[money]",g().session.user.attribute("money"))),m("input",{id:"moneyTransferInput",placeholder:g().translator.trans("ziven-transfer-money.forum.transfer-money-input-placeholder"),required:!0,className:"FormControl",type:"number",step:"any",min:"0",oninput:function(e){return t.moneyTransferChanged()}}),m("div",{style:"padding-top:10px"},g().translator.trans("ziven-transfer-money.forum.need-money-amount"),m("span",{id:"needMoneyContainer"},this.moneyName.replace("[money]",this.needMoney())))),m("div",{className:"Form-group"},m("label",null,g().translator.trans("ziven-transfer-money.forum.transfer-money-notes")),m("textarea",{id:"moneyTransferNotesInput",maxlength:"255",className:"FormControl"})),m("div",{className:"Form-group",style:"text-align: center;"},l().component({className:"Button Button--primary",type:"submit",loading:this.loading},g().translator.trans("ziven-transfer-money.forum.ok"))," ",l().component({className:"Button transferMoneyButton--gray",loading:this.loading,onclick:function(){t.hide()}},g().translator.trans("ziven-transfer-money.forum.cancel")))))},r.getTotalNeedMoney=function(){var t=parseFloat($("#moneyTransferInput").val());return isNaN(t)&&(t=0),Object.keys(this.selectedUsers).length*t},r.moneyTransferChanged=function(){var t=this.getTotalNeedMoney(),e=this.moneyName.replace("[money]",t);$("#needMoneyContainer").text(e)},r.onsubmit=function(t){var e=this;t.preventDefault();var r=g().session.user.attribute("money"),n=parseFloat($("#moneyTransferInput").val()),s=this.getTotalNeedMoney(),o=$("#moneyTransferNotesInput").val();if(s>r)g().alerts.show(T(),{type:"error"},g().translator.trans("ziven-transfer-money.forum.transfer-error-insufficient-fund"));else if(0!==Object.keys(this.selectedUsers).length){if(n>0){var a={moneyTransfer:n,moneyTransferNotes:o,selectedUsers:JSON.stringify(Object.keys(this.selectedUsers))};this.loading=!0,g().store.createRecord("transferMoney").save(a).then((function(t){g().store.pushPayload(t),g().modal.show(X),e.loading=!1})).catch((function(t){e.loading=!1}))}}else g().alerts.show(T(),{type:"error"},g().translator.trans("ziven-transfer-money.forum.transfer-error-no-target-user-selected"))},e}(N());Y.isDismissible=!1;const Z=flarum.core.compat["components/Notification"];var tt=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var r=e.prototype;return r.icon=function(){return"fas fa-money-bill"},r.href=function(){return g().route("user.transferHistory",{username:g().session.user.username()})},r.content=function(){var t=this.attrs.notification.fromUser();return g().translator.trans("ziven-transfer-money.forum.notifications.user-transfer-money-to-you",{user:t})},r.excerpt=function(){var t=this.attrs.notification.subject(),e=t.attribute("transfer_money_value"),r=t.attribute("id"),n=(g().forum.attribute("antoinefr-money.moneyname")||"[money]").replace("[money]",e);return g().translator.trans("ziven-transfer-money.forum.notifications.user-transfer-money-details",{cost:n,id:r})},e}(t.n(Z)());const et=flarum.core.compat["components/UserPage"];var rt=t.n(et);const nt=flarum.core.compat["components/LinkButton"];var st=t.n(nt);const ot=flarum.core.compat.Component;var at=t.n(ot);const it=flarum.core.compat.app;var ct=t.n(it);const ut=flarum.core.compat["components/LoadingIndicator"];var lt=t.n(ut);const mt=flarum.core.compat["components/Link"];var ft=t.n(mt);const pt=flarum.core.compat["helpers/avatar"];var dt=t.n(pt);const ht=flarum.core.compat["helpers/username"];var yt=t.n(ht),vt=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.view=function(){var t=this.attrs.transferHistory,e=app.session.user.id(),r=t.attribute("from_user_id"),n=t.assignedAt(),s=t.fromUser(),o=t.targetUser(),a=t.transferMoney(),i=t.notes(),c=i||app.translator.trans("ziven-transfer-money.forum.transfer-list-transfer-notes-none"),u=t.id(),l=app.translator.trans(e==r?"ziven-transfer-money.forum.transfer-money-out":"ziven-transfer-money.forum.transfer-money-in"),f=e==r?"color:red":"color:green",p=(app.forum.attribute("antoinefr-money.moneyname")||"[money]").replace("[money]",a);return m("div",{className:"transferHistoryContainer"},m("div",{style:"padding-top: 5px;"},m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-type"),": "),m("span",{style:f},l)," | ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-assign-at"),": "),n),m("div",{style:"padding-top: 5px;"},m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-id"),": "),u," | ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-from-user"),": "),m(ft(),{href:s?app.route.user(s):"#",className:"transferHistoryUser",style:"color:var(--heading-color)"},dt()(s)," ",yt()(s))," | ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-target-user"),": "),m(ft(),{href:o?app.route.user(o):"#",className:"transferHistoryUser",style:"color:var(--heading-color)"},dt()(o)," ",yt()(o))," | ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-transfer-amount"),": "),p," ",i&&m("span",null,"| ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-transfer-notes"),": "),c)))},e}(at()),gt=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.moreResults=!1,this.transferHistory=[],this.user=this.attrs.params.user,this.loadResults()},r.view=function(){var t=this;return this.loading&&lt().component({size:"large"}),m("div",null,m("div",{style:"padding-bottom:10px; font-size: 24px;font-weight: bold;"},ct().translator.trans("ziven-transfer-money.forum.transfer-money-history")),m("ul",{style:"margin: 0;padding: 0;list-style-type: none;position: relative;"},this.transferHistory.map((function(t){return m("li",{style:"padding-top:5px",key:t.id(),"data-id":t.id()},vt.component({transferHistory:t}))}))),!this.loading&&0===this.transferHistory.length&&m("div",null,m("div",{style:"font-size:1.4em;color: var(--muted-more-color);text-align: center;height: 300px;line-height: 100px;"},ct().translator.trans("ziven-transfer-money.forum.transfer-list-empty"))),this.hasMoreResults()&&m("div",{style:"text-align:center;padding:20px"},m(l(),{className:"Button Button--primary",disabled:this.loading,loading:this.loading,onclick:function(){return t.loadMore()}},ct().translator.trans("ziven-transfer-money.forum.transfer-list-load-more"))))},r.loadMore=function(){this.loading=!0,this.loadResults(this.transferHistory.length).then(this.parseResults.bind(this))},r.parseResults=function(t){return this.moreResults=!!t.payload.links&&!!t.payload.links.next,[].push.apply(this.transferHistory,t),this.loading=!1,m.redraw(),t},r.hasMoreResults=function(){return this.moreResults},r.loadResults=function(t){return void 0===t&&(t=0),ct().store.find("transferHistory",{filter:{user:this.user.id()},page:{offset:t}}).catch((function(){})).then(this.parseResults.bind(this))},e}(at()),bt=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.loadUser(m.route.param("username"))},r.content=function(){return m("div",{className:"TransferHistoryPage"},gt.component({params:{user:this.user}}))},e}(rt());app.initializers.add("ziven-money-transfer",(function(){app.store.models.transferMoney=y,app.notificationComponents.transferMoney=tt,app.routes["user.transferHistory"]={path:"/u/:username/transferHistory",component:bt},(0,r.extend)(rt().prototype,"navItems",(function(t,e){app.session.user&&app.session.user.id()==this.user.id()&&t.add("transferMoney",st().component({href:app.route("user.transferHistory",{username:this.user.username()}),icon:"fas fa-money-bill"},[app.translator.trans("ziven-transfer-money.forum.transfer-money-history")]),10)})),(0,r.extend)(a().prototype,"notificationTypes",(function(t){t.add("transferMoney",{name:"transferMoney",icon:"fas fa-dollar-sign",label:app.translator.trans("ziven-transfer-money.forum.receive-transfer-from-user")})})),(0,r.extend)(s(),"moderationControls",(function(t,e){var r=app.forum.attribute("allowUseTranferMoney");app.session.user&&r&&app.session.user.id()!==e.id()&&t.add("transferMoney",l().component({icon:"fas fa-money-bill",onclick:function(){return app.modal.show(Y,{user:e})}},app.translator.trans("ziven-transfer-money.forum.transfer-money")))})),(0,r.extend)(c().prototype,"items",(function(t){app.session.user&&t.add("transferMoney",l().component({icon:"fas fa-money-bill",onclick:function(){app.modal.show(Y)}},app.translator.trans("ziven-transfer-money.forum.transfer-money")),-1)}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map