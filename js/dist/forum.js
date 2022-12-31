(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const n=flarum.core.compat.extend,r=flarum.core.compat["utils/UserControls"];var a=e.n(r);const o=flarum.core.compat["components/NotificationGrid"];var s=e.n(o);const i=flarum.core.compat["forum/components/SessionDropdown"];var c=e.n(i);const l=flarum.core.compat["components/Button"];var u=e.n(l);function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t)}const d=flarum.core.compat.Model;var y=e.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return f(t,e),t}(y());Object.assign(h.prototype,{id:y().attribute("id"),transferMoney:y().attribute("transfer_money_value"),notes:y().attribute("notes"),assignedAt:y().attribute("assigned_at"),fromUser:y().hasOne("fromUser"),targetUser:y().hasOne("targetUser")});const v=flarum.core.compat["forum/app"];var g=e.n(v);const b=flarum.core.compat["components/Modal"];var M=e.n(b);const N=flarum.core.compat["forum/states/SearchState"];var z=e.n(N);const x=flarum.core.compat["common/utils/ItemList"];var S=e.n(x);const C=flarum.core.compat["common/utils/Stream"];var T=e.n(C);const w=flarum.core.compat["common/components/Alert"];var I=e.n(w);const R=flarum.core.compat["forum/components/Search"];var U=e.n(R);function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}const H=flarum.core.compat["common/helpers/highlight"];var B=e.n(H);const O=flarum.core.compat["common/helpers/avatar"];var P=e.n(O);const _=flarum.core.compat["common/helpers/username"];var j=e.n(_),L=function(){function e(){}var t=e.prototype;return t.view=function(e){var t=this;if(!(e.length<3||this.loading)){g().cache.userSearchResults||(g().cache.userSearchResults=[]),this.query=e;var n=g().session.user.id();if(g().cache.userSearchResults[this.query])return[m("li",{className:"Dropdown-header"},g().translator.trans("ziven-transfer-money.forum.search_user_header")),g().cache.userSearchResults[this.query].map((function(e){if(n!=e.id()){var r=j()(e),a=[B()(r.text,t.query)];return m("li",{className:"SearchResult","data-index":"users:"+e.id()},m("a",{"data-index":"users:"+e.id()},P()(e),k({},r,{text:void 0,children:a})))}}))];this.loading=!0,g().cache.userSearchResults[this.query]=[],g().store.find("users",{filter:{q:this.query+" allows-pd"},page:{limit:5}}).then(this.pushResults.bind(this))}},t.pushResults=function(e){var t=this;e.payload.data.map((function(e){var n=g().store.getById("users",e.id);g().cache.userSearchResults[t.query].push(n)})),this.loading=!1,m.redraw()},e}();const F=flarum.core.compat["common/utils/classList"];var A=e.n(F);const D=flarum.core.compat["common/utils/extractText"];var V=e.n(D);const q=flarum.core.compat["common/components/LoadingIndicator"];var E=e.n(q);flarum.core.compat["common/models/User"];var G=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).inputUuid=void 0,t}f(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.inputUuid=Math.random().toString(36).substring(2)},n.oncreate=function(t){var n=this;e.prototype.oncreate.call(this,t);var r=this;this.$(".Search-results").on("click",(function(e){var t=n.$(".SearchResult.active");r.addRecipient(t.data("index")),r.$(".RecipientsInput").focus()})),this.$(".Search-results").on("touchstart",(function(e){var t=n.$(e.target.parentNode);r.addRecipient(t.data("index")),r.$(".RecipientsInput").focus()})),$(".RecipientsInput").on("input",(function(){clearTimeout(n.typingTimer),n.doSearch=!1,n.typingTimer=setTimeout((function(){n.doSearch=!0,m.redraw()}),900)})).on("keydown",(function(){clearTimeout(n.typingTimer)})),e.prototype.oncreate.call(this,t)},n.view=function(){var e=this;void 0===this.searchState.getValue()&&this.searchState.setValue("");var t=this.searchState.getValue()&&this.searchState.getValue().length>=3;this.sources||(this.sources=this.sourceItems().toArray());var n=this.attrs.selected().toArray();return m("div",{role:"search",className:"Search"},m("div",{className:"RecipientsInput-selected RecipientsLabel","aria-live":"polite"},m("div",{style:"padding-bottom:10px;font-weight:bold;font-size: 14px;color: var(--text-color);"},g().translator.trans("ziven-transfer-money.forum.transfer-money-to-user")),0===n.length&&m("div",{style:"height:34px;cursor: default !important;",class:"transferSearchUserContainer"},g().translator.trans("ziven-transfer-money.forum.transfer-money-no-user-selected")),this.attrs.selected().toArray().map((function(t){var n=j()(t),r=P()(t),a=t.data.id;return e.attrs.selectedUsers[a]=1,m("div",{class:"transferSearchUserContainer",onclick:function(n){return e.removeRecipient(t,n)}},m("span",{class:"transferSearchUser"},r)," ",n)}))),m("div",{className:"Form-group"},m("label",{for:"transfer-money-user-search-input-"+this.inputUuid},g().translator.trans("ziven-transfer-money.forum.transfer-money-search-user")),m("div",{className:"AddRecipientModal-form-input Search-input"},m("input",{id:"transfer-money-user-search-input-"+this.inputUuid,className:A()("RecipientsInput","FormControl",{open:!!this.searchState.getValue(),focused:!!this.searchState.getValue(),active:!!this.searchState.getValue(),loading:!!this.loadingSources}),type:"search",placeholder:V()(g().translator.trans("ziven-transfer-money.forum.transfer-money-search-user-placeholder")),value:this.searchState.getValue(),oninput:function(t){return e.searchState.setValue(t.target.value)},onfocus:function(){return e.hasFocus=!0},onblur:function(){return e.hasFocus=!1}}),m("ul",{className:A()("Dropdown-menu","Search-results","fade",{in:!!t})},this.doSearch?this.sources.map((function(t){return t.view(e.searchState.getValue())})):E().component({size:"tiny",className:"Button Button--icon Button--link"})))))},n.sourceItems=function(){var e=new(S());return e.add("users",new L),e},n.addRecipient=function(e){var t=e.split(":"),n=t[0],r=t[1],a=this.findRecipient(n,r),o=a.data.id;this.attrs.selected().add(e,a),this.attrs.selectedUsers[o]=1,this.searchState.clear(),this.attrs.needMoney(this.getNeedMoney()),this.attrs.callback()},n.removeRecipient=function(e,t){t.preventDefault();var n=e.data.id;delete this.attrs.selectedUsers[n],this.attrs.selected().remove("users:"+e.id()),this.attrs.needMoney(this.getNeedMoney()),this.attrs.callback()},n.getNeedMoney=function(){return $("#moneyTransferInput").val()*Object.keys(this.attrs.selectedUsers).length},n.findRecipient=function(e,t){return g().store.getById(e,t)},t}(U());const J=flarum.core.compat["common/components/Modal"];var K=e.n(J);const Q=flarum.core.compat["common/components/Button"];var W=e.n(Q),X=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t)},n.className=function(){return"Modal--small"},n.title=function(){return g().translator.trans("ziven-transfer-money.forum.transfer-money-success")},n.content=function(){return[m("div",{className:"Modal-body"},m("div",{style:"text-align:center"},W().component({style:"width:66px",className:"Button Button--primary",onclick:function(){location.reload()}},g().translator.trans("ziven-transfer-money.forum.ok"))))]},t}(K());X.isDismissible=!1;var Y=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.selected=T()(new(S())),this.selectedUsers={},this.moneyName=g().forum.attribute("antoinefr-money.moneyname")||"[money]";var n=this.attrs.user;n&&(this.selected().add("users:"+n.id(),n),this.selectedUsers[n.id()]),this.recipientSearch=new(z()),this.needMoney=T()(0)},n.className=function(){return"Modal--small"},n.title=function(){return g().translator.trans("ziven-transfer-money.forum.transfer-money")},n.content=function(){var e=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{style:"padding-bottom:20px;",className:"TransferMoneyModal-form"},G.component({state:this.recipientSearch,selected:this.selected,selectedUsers:this.selectedUsers,needMoney:this.needMoney,callback:function(){m.redraw()}})),m("div",{className:"Form-group"},m("label",null,g().translator.trans("ziven-transfer-money.forum.current-money-amount"),this.moneyName.replace("[money]",g().session.user.attribute("money"))),m("input",{id:"moneyTransferInput",placeholder:g().translator.trans("ziven-transfer-money.forum.transfer-money-input-placeholder"),required:!0,className:"FormControl",type:"number",step:"any",min:"0",oninput:function(t){return e.moneyTransferChanged()}}),m("div",{style:"padding-top:10px"},g().translator.trans("ziven-transfer-money.forum.need-money-amount"),m("span",{id:"needMoneyContainer"},this.moneyName.replace("[money]",this.needMoney())))),m("div",{className:"Form-group"},m("label",null,g().translator.trans("ziven-transfer-money.forum.transfer-money-notes")),m("textarea",{id:"moneyTransferNotesInput",maxlength:"255",className:"FormControl"})),m("div",{className:"Form-group",style:"text-align: center;"},u().component({className:"Button Button--primary",type:"submit",loading:this.loading},g().translator.trans("ziven-transfer-money.forum.ok"))," ",u().component({className:"Button transferMoneyButton--gray",loading:this.loading,onclick:function(){e.hide(),"function"==typeof e.attrs.callback&&e.attrs.callback()}},g().translator.trans("ziven-transfer-money.forum.cancel")))))},n.getTotalNeedMoney=function(){var e=parseFloat($("#moneyTransferInput").val());return isNaN(e)&&(e=0),Object.keys(this.selectedUsers).length*e},n.moneyTransferChanged=function(){var e=this.getTotalNeedMoney(),t=this.moneyName.replace("[money]",e);$("#needMoneyContainer").text(t)},n.onsubmit=function(e){var t=this;e.preventDefault();var n=g().session.user.attribute("money"),r=parseFloat($("#moneyTransferInput").val()),a=this.getTotalNeedMoney(),o=$("#moneyTransferNotesInput").val();if(a>n)g().alerts.show(I(),{type:"error"},g().translator.trans("ziven-transfer-money.forum.transfer-error-insufficient-fund"));else if(0!==Object.keys(this.selectedUsers).length){if(r>0){var s={moneyTransfer:r,moneyTransferNotes:o,selectedUsers:JSON.stringify(Object.keys(this.selectedUsers))};this.loading=!0,g().store.createRecord("transferMoney").save(s).then((function(e){g().store.pushPayload(e),g().modal.show(X),t.loading=!1,"function"==typeof t.attrs.callback&&t.attrs.callback()})).catch((function(e){t.loading=!1}))}}else g().alerts.show(I(),{type:"error"},g().translator.trans("ziven-transfer-money.forum.transfer-error-no-target-user-selected"))},t}(M());Y.isDismissible=!1;const Z=flarum.core.compat["components/Notification"];var ee=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var n=t.prototype;return n.icon=function(){return"fas fa-money-bill"},n.href=function(){return g().route("user.transferHistory",{username:g().session.user.username()})},n.content=function(){var e=this.attrs.notification.fromUser();return g().translator.trans("ziven-transfer-money.forum.notifications.user-transfer-money-to-you",{user:e})},n.excerpt=function(){var e=this.attrs.notification.subject(),t=e.attribute("transfer_money_value"),n=e.attribute("id"),r=(g().forum.attribute("antoinefr-money.moneyname")||"[money]").replace("[money]",t);return g().translator.trans("ziven-transfer-money.forum.notifications.user-transfer-money-details",{cost:r,id:n})},t}(e.n(Z)());const te=flarum.core.compat["components/UserPage"];var ne=e.n(te);const re=flarum.core.compat["components/LinkButton"];var ae=e.n(re);const oe=flarum.core.compat.Component;var se=e.n(oe);const ie=flarum.core.compat.app;var ce=e.n(ie);const le=flarum.core.compat["components/LoadingIndicator"];var ue=e.n(le);const me=flarum.core.compat["components/Link"];var pe=e.n(me);const fe=flarum.core.compat["helpers/avatar"];var de=e.n(fe);const ye=flarum.core.compat["helpers/username"];var he=e.n(ye),ve=function(e){function t(){return e.apply(this,arguments)||this}return f(t,e),t.prototype.view=function(){var e=this.attrs.transferHistory,t=app.session.user.id(),n=e.attribute("from_user_id"),r=e.assignedAt(),a=e.fromUser(),o=e.targetUser(),s=e.transferMoney(),i=e.notes(),c=i||app.translator.trans("ziven-transfer-money.forum.transfer-list-transfer-notes-none"),l=e.id(),u=app.translator.trans(t==n?"ziven-transfer-money.forum.transfer-money-out":"ziven-transfer-money.forum.transfer-money-in"),p=t==n?"color:red":"color:green",f=(app.forum.attribute("antoinefr-money.moneyname")||"[money]").replace("[money]",s);return m("div",{className:"transferHistoryContainer"},m("div",{style:"padding-top: 5px;"},m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-type"),": "),m("span",{style:p},u)," | ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-assign-at"),": "),r),m("div",{style:"padding-top: 5px;"},m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-id"),": "),l," | ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-from-user"),": "),m(pe(),{href:a?app.route.user(a):"#",className:"transferHistoryUser",style:"color:var(--heading-color)"},de()(a)," ",he()(a))," | ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-target-user"),": "),m(pe(),{href:o?app.route.user(o):"#",className:"transferHistoryUser",style:"color:var(--heading-color)"},de()(o)," ",he()(o))," | ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-transfer-amount"),": "),f," ",i&&m("span",null,"| ",m("b",null,app.translator.trans("ziven-transfer-money.forum.transfer-list-transfer-notes"),": "),c)))},t}(se()),ge=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.loading=!0,this.moreResults=!1,this.transferHistory=[],this.user=this.attrs.params.user,this.loadResults()},n.view=function(){var e=this;return this.loading&&ue().component({size:"large"}),m("div",null,m("div",{style:"padding-bottom:10px; font-size: 24px;font-weight: bold;"},ce().translator.trans("ziven-transfer-money.forum.transfer-money-history")),m("ul",{style:"margin: 0;padding: 0;list-style-type: none;position: relative;"},this.transferHistory.map((function(e){return m("li",{style:"padding-top:5px",key:e.id(),"data-id":e.id()},ve.component({transferHistory:e}))}))),!this.loading&&0===this.transferHistory.length&&m("div",null,m("div",{style:"font-size:1.4em;color: var(--muted-more-color);text-align: center;height: 300px;line-height: 100px;"},ce().translator.trans("ziven-transfer-money.forum.transfer-list-empty"))),this.hasMoreResults()&&m("div",{style:"text-align:center;padding:20px"},m(u(),{className:"Button Button--primary",disabled:this.loading,loading:this.loading,onclick:function(){return e.loadMore()}},ce().translator.trans("ziven-transfer-money.forum.transfer-list-load-more"))))},n.loadMore=function(){this.loading=!0,this.loadResults(this.transferHistory.length).then(this.parseResults.bind(this))},n.parseResults=function(e){return this.moreResults=!!e.payload.links&&!!e.payload.links.next,[].push.apply(this.transferHistory,e),this.loading=!1,m.redraw(),e},n.hasMoreResults=function(){return this.moreResults},n.loadResults=function(e){return void 0===e&&(e=0),ce().store.find("transferHistory",{filter:{user:this.user.id()},page:{offset:e}}).catch((function(){})).then(this.parseResults.bind(this))},t}(se()),be=function(e){function t(){return e.apply(this,arguments)||this}f(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.loadUser(m.route.param("username"))},n.content=function(){return m("div",{className:"TransferHistoryPage"},ge.component({params:{user:this.user}}))},t}(ne());const Me=flarum.core.compat["forum/components/IndexPage"];var Ne=e.n(Me);app.initializers.add("ziven-money-transfer",(function(){app.store.models.transferMoney=h,app.notificationComponents.transferMoney=ee,app.routes["user.transferHistory"]={path:"/u/:username/transferHistory",component:be},(0,n.extend)(ne().prototype,"navItems",(function(e,t){app.session.user&&app.session.user.id()==this.user.id()&&e.add("transferMoney",ae().component({href:app.route("user.transferHistory",{username:this.user.username()}),icon:"fas fa-money-bill"},[app.translator.trans("ziven-transfer-money.forum.transfer-money-history")]),10)})),(0,n.extend)(c().prototype,"view",(function(e){if(app.session.user){var t=app.current.get("routeName");t&&("tags"!==t?function(){if("1"===app.forum.attribute("moneyTransferClient1Customization")){var e=document.getElementById("transferMoneyLabelContainer");null!==e&&$(e).remove()}}():function(e,t){var n="hidden"===$("#drawer").css("visibility"),r=app.forum.attribute("moneyTransferClient1Customization");if(!1!==n&&"1"===r){$("#content .IndexPage-nav .item-nav").remove(),$("#content .IndexPage-nav .item-newDiscussion").remove();var a=setInterval((function(){if(e.dom&&(clearInterval(a),void 0!==e.dom)){$("#content .IndexPage-nav .item-nav").remove(),$("#content .IndexPage-nav .item-newDiscussion").remove();var t=document.getElementById("transferMoneyLabelContainer");if(null!==t)return;$("#itemNavClone").remove(),$("#content .IndexPage-nav .item-nav .ButtonGroup").removeClass("App-titleControl"),$("#content .IndexPage-nav .item-nav .ButtonGroup button").addClass("Button--link");var n=$("#content .IndexPage-nav .item-nav").clone();$(n).attr("id","itemNavClone"),$("#header-secondary .Header-controls").prepend(n);var r=document.getElementById("app-navigation"),o=(app.forum.attribute("antoinefr-money.moneyname")||"[money]").replace("[money]",app.session.user.attribute("money"));(t=document.createElement("div")).id="transferMoneyLabelContainer",t.className="clientCustomizeTransferMoneyButtonContainer";var s=document.createElement("div");s.className="clientCustomizeTransferMoneyHeaderItems clientCustomizeTransferMoneyHeaderTotalMoney";var i=document.createElement("div");i.innerHTML='<span style="font-size:16px;"><i class="fab fa-bitcoin" style="padding-right: 8px;color: gold;"></i></span>'+o,i.className="clientCustomizeTransferMoneyHeaderText";var c=document.createElement("div");c.innerHTML='<i class="fas fa-wallet"></i>',c.className="clientCustomizeTransferMoneyHeaderIcon",s.appendChild(i),s.appendChild(c);var l=document.createElement("div");l.innerHTML=app.translator.trans("ziven-transfer-money.forum.transfer-money"),l.className="clientCustomizeTransferMoneyHeaderItems clientCustomizeTransferMoneyHeaderTansferMoney",$(l).click((function(){app.modal.show(Y)}));var u=document.createElement("div");u.className="clientCustomizeTransferMoneyHeaderItems clientCustomizeTransferMoneyHeaderUser";var m=$("#header-secondary .item-session .SessionDropdown").clone();$(m).attr("id","avatarClone"),$(m).addClass("App-primaryControl"),$(u).html(m);var p="";$(m).on("click",(function(){p=""===p?"none":"",$("#content .IndexPage-nav").css("display",p)})),t.appendChild(s),t.appendChild(l),t.appendChild(u),r.appendChild(t)}}),10)}}(e,this.attrs.user))}})),(0,n.extend)(Ne().prototype,"view",(function(e){app.session.user})),(0,n.extend)(s().prototype,"notificationTypes",(function(e){e.add("transferMoney",{name:"transferMoney",icon:"fas fa-dollar-sign",label:app.translator.trans("ziven-transfer-money.forum.receive-transfer-from-user")})})),(0,n.extend)(a(),"moderationControls",(function(e,t){var n=app.forum.attribute("allowUseTranferMoney");app.session.user&&n&&app.session.user.id()!==t.id()&&e.add("transferMoney",u().component({icon:"fas fa-money-bill",onclick:function(){return app.modal.show(Y,{user:t})}},app.translator.trans("ziven-transfer-money.forum.transfer-money")))})),(0,n.extend)(c().prototype,"items",(function(e){app.session.user&&e.add("transferMoney",u().component({icon:"fas fa-money-bill",onclick:function(){app.modal.show(Y)}},app.translator.trans("ziven-transfer-money.forum.transfer-money")),-1)}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map