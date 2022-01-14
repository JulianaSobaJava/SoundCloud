if (self.CavalryLogger) { CavalryLogger.start_js(["NlfnHjt"]); }

__d("MWChatStateV2IsFlyoutOpen.bs",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.openFlyoutWatermark!==0}f.isFlyoutOpen=a}),null);
__d("MWV2ChatHeadButton.bs",["CometPressable.react","bs_caml_option","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={button:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",backgroundColor:"g5ia77u1",appearance:"dwo3fsh8",width:"tmrshh9y",height:"m7zwrmfr",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",transitionDuration:"ebpj63zs",transitionProperty:"flx89l3n",transitionTimingFunction:"msbwk0y7"},container:{position:"pmk7jnqg",display:"j83agx80",alignItems:"bp9cbjyn",justifyContent:"taijpn5t",width:"tmrshh9y",height:"m7zwrmfr",marginBottom:"oud54xpy"}};function a(a){var c=a.children;a=a.style;return i.jsx("div",{className:(h||(h=b("stylex")))(j.container),style:a,children:c})}d={make:a};function c(a,c){var d=a.onPress,e=a.onHoverChange,f=a.onHoverIn,g=a.onHoverOut,h=a.onFocusChange,k=a.ariaLabel,l=a.ariaDescribedBy,m=a.children;a=a.testid;m={overlayDisabled:!0,xstyle:function(a){return[j.button]},children:m};k!==void 0&&(m["aria-label"]=b("bs_caml_option").valFromOption(k));k=c==null?void 0:b("bs_caml_option").some(c);k!==void 0&&(m.ref=b("bs_caml_option").valFromOption(k));a!==void 0&&(m.testid=b("bs_caml_option").valFromOption(a));e!==void 0&&(m.onHoverChange=b("bs_caml_option").valFromOption(e));f!==void 0&&(m.onHoverIn=b("bs_caml_option").valFromOption(f));g!==void 0&&(m.onHoverOut=b("bs_caml_option").valFromOption(g));h!==void 0&&(m.onFocusChange=b("bs_caml_option").valFromOption(h));d!==void 0&&(m.onPress=b("bs_caml_option").valFromOption(d));l!==void 0&&(m["aria-describedby"]=b("bs_caml_option").valFromOption(l));return i.jsx(b("CometPressable.react"),m)}e=i.forwardRef(c);f.styles=j;f.Container=d;f.make=e}),null);
__d("MWV2ChatHeadCloseButton.bs",["fbt","ix","CometPressable.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react"),k={closeButton:{position:"pmk7jnqg",top:"pixltzyo",end:"aew9gpjp",display:"j83agx80",alignItems:"bp9cbjyn",justifyContent:"taijpn5t",width:"odw8uiq3",height:"jnigpg78",transform:"qpbg1qsm",opacity:"b5wmifdl",transitionDuration:"bybyf9sm",transitionProperty:"pnx7fd3z",backgroundColor:"nred35xi",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv"},visible:{transform:"g3zh7qmp",opacity:"pedkr2u6"}};function a(a){var c=a.onPress,d=a.onHoverChange,e=a.onFocusChange,f=a.isVisible;return j.jsx(b("CometPressable.react"),{"aria-label":g._(/*FBT_CALL*/"Fechar conversa"/*FBT_CALL*/),onHoverChange:d,onFocusChange:e,onPress:c,xstyle:function(a){return[k.closeButton,f||a.focused?k.visible:!1]},children:j.jsx(b("TetraIcon.react"),{icon:b("fbicon")._(h("478231"),12)})})}c=a;f.make=c}),null);
__d("MWV2ChatHeadFlyout.bs",["fbt","CometBadge.react","LSThreadTitle.bs","Locale","MDSText.react","MWLSThreadSnippetForDisplay.bs","MWPIsThreadUnread.bs","bs_caml_option","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react"),k={container:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxShadow:"clwgnc31",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",maxWidth:"dlpeemhq",minWidth:"jgsskzai",position:"pmk7jnqg",end:"cypi58rs",bottom:"i09qtzwb",backgroundColor:"nred35xi",paddingStart:"h4z51re5",paddingEnd:"rv4hoivh",height:"e5d9fub0"},containerWithSubtitle:{height:"pioscnbf"},spacer:{flexGrow:"buofh1pr"},gradientLTR:{backgroundImage:"rvdht4aw"},gradientRTL:{backgroundImage:"hv4tdetg"},openChatArrowPointer:{borderTopEndRadius:"hcy7w5mv",bottom:"s2hgh8fk",height:"gl3lb2sf",position:"pmk7jnqg",end:"b5fwa0m2",width:"hhz5lgdu"},openChatArrowPointerShadow:{boxShadow:"clwgnc31"}},l=b("Locale").isRTL(),m=l?-45:45;function a(a){var c=a.thread,d=a.subtitle;a=a.id;var e=b("MWLSThreadSnippetForDisplay.bs").make(c.m),f=d!==void 0;return j.jsxs("div",{"data-testid":"mw_chat_head_flyout",id:a,children:[j.jsx("div",{className:(i||(i=b("stylex")))(k.openChatArrowPointer,k.openChatArrowPointerShadow),style:{transform:"rotate("+m+"deg)"}}),j.jsxs("div",{className:i(k.container,f?k.containerWithSubtitle:!1),children:[j.jsx("div",{className:i(k.spacer)}),j.jsx("div",{"aria-hidden":!0,children:j.jsx(b("MDSText.react"),{color:"primary",type:"headlineEmphasized4",numberOfLines:1,children:j.jsx(b("LSThreadTitle.bs").make,{thread:c})})}),d!==void 0?j.jsxs(j.Fragment,{children:[j.jsx("div",{className:(i||(i=b("stylex")))(k.spacer)}),j.jsx(b("MDSText.react"),{color:"secondary",type:"headline4",numberOfLines:1,children:b("bs_caml_option").valFromOption(d)})]}):null,j.jsx("div",{className:i(k.spacer)}),j.jsxs(b("MDSText.react"),{color:"secondary",type:"body3",numberOfLines:1,children:[b("MWPIsThreadUnread.bs").isThreadUnread(c)?j.jsx(b("CometBadge.react"),{color:"blue",label:g._(/*FBT_CALL*/"N\u00e3o lida"/*FBT_CALL*/).toString()}):null,e]}),j.jsx("div",{className:i(k.spacer)})]}),j.jsx("div",{className:i(k.openChatArrowPointer,l?k.gradientRTL:k.gradientLTR),style:{transform:"rotate("+m+"deg)"}})]})}c=a;f.styles=k;f.isRTL=l;f.rotation=m;f.make=c}),null);
__d("MWV2ChatHeadTypingIndicator.bs",["MWChatTypingIndicator.bs","ReQL.bs","ReQLSubscription.bs","ReQLTable","ReStore.bs","ServerTime","bs_caml_int64","bs_caml_splice_call","bs_curry","bs_int64","clearTimeout","react","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function i(a){var c=b("ReStore.bs").useHook(void 0);return b("ReQLSubscription.bs").useArray(h.useMemo(function(){return b("ReQL.bs").filter(b("ReQL.bs").getKeyRange(b("ReQLTable").table(c,"typing_indicator").asc,{hd:a,tl:0}),function(a){return b("ServerTime").getMillis()<b("bs_caml_int64").to_float(a.c)})},[c,b("bs_int64").to_string(a)]))}function a(a){a=a.threadKey;var c=h.useState(function(){return!1}),d=c[1],e=i(a);h.useEffect(function(){b("bs_curry")._1(d,function(a){return e.length>0});var a=e.map(function(a){return b("bs_caml_int64").to_float(a.c)});a=b("bs_caml_splice_call").spliceApply(Math.max,[a]);a=a-b("ServerTime").getMillis();var c=b("setTimeout")(function(a){return b("bs_curry")._1(d,function(a){return!1})},a);return function(a){b("clearTimeout")(c)}},[d,e]);if(c[0])return h.jsx("div",{className:"n7fi1qx3 i09qtzwb jnigpg78 bsnbvmp4 taijpn5t ns4ygwem fykbt5ly hgaippwi fni8adji j83agx80 nred35xi bp9cbjyn pmk7jnqg",children:h.jsx(b("MWChatTypingIndicator.bs").make,{})});else return null}c=a;f.make=c}),null);
__d("MWV2ChatHeadUnreadMessageCountBadge.bs",["fbt","CometNumberedBadge.react","MWLSActor.bs","ReQL.bs","ReQLSubscription.bs","ReQLSuspense.bs","ReQLTable","ReStore.bs","bs_caml","bs_int64","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react"),k={badgeHidden:{opacity:"b5wmifdl"},badgeShrunk:{transform:"qpbg1qsm"},unreadBadge:{end:"aew9gpjp",position:"pmk7jnqg",top:"pixltzyo",transitionDuration:"bybyf9sm",transitionProperty:"pnx7fd3z"}};function l(a){var c=b("ReStore.bs").useHook(void 0),d=b("MWLSActor.bs").useActor(void 0),e=b("ReQLSubscription.bs").useFirst(j.useMemo(function(){return b("ReQL.bs").map(b("ReQL.bs").getKeyRange(b("ReQLTable").table(c,"threads").asc,{hd:a,tl:0}),function(e){var f;return b("ReQLSuspense.bs").toArray((f=b("ReQL.bs")).filter(f.bounds(f.take(f.getKeyRange(b("ReQLTable").table(c,"messages").desc,{hd:a,tl:0}),20),{NAME:"greaterThan",VAL:{hd:e.j,tl:0}}),function(a){return b("bs_caml").i64_neq(a.h,d)})).length})},[c,b("bs_int64").to_string(d),b("bs_int64").to_string(a)]));if(e!==void 0)return e;else return 0}function a(a){var c=a.threadKey;a=a.isVisible;c=l(c);if(c>0)return j.jsx("div",{"aria-label":g._(/*FBT_CALL*/{"*":"{number} mensagens n\u00e3o lidas","_1":"1 mensagem n\u00e3o lida"}/*FBT_CALL*/,[g._plural(c,"number")]),className:(i||(i=b("stylex")))(k.unreadBadge,a?!1:k.badgeHidden),children:j.jsx(b("CometNumberedBadge.react"),{value:c})});else return j.jsx("div",{"aria-hidden":!0,className:(i||(i=b("stylex")))(k.badgeHidden,k.badgeShrunk)})}c=a;f.make=c}),null);
__d("MWV2ChatHead.bs",["fbt","CometContextualLayer.react","MWCMInboxHeaderCommunityGroupName.bs","MWCMThreadTypes.bs","MWChatHeadPicture.bs","MWChatStateActions.bs","MWChatStateV2.bs","MWChatStateV2IsFlyoutOpen.bs","MWChatViewerChatVisibilityHook","MWFacepileBadge.bs","MWFacepileGetContactsToShow.bs","MWLSActor.bs","MWV2ChatHeadButton.bs","MWV2ChatHeadCloseButton.bs","MWV2ChatHeadFlyout.bs","MWV2ChatHeadTypingIndicator.bs","MWV2ChatHeadUnreadMessageCountBadge.bs","MWV2EnsureThatChatTabExists.bs","MWV2GetThreadTitle.bs","MWV2PreloadThread.bs","ReQL.bs","ReQLSubscription.bs","ReQLTable","ReStore.bs","SortedAsyncIterable.bs","bs_belt_Option","bs_caml_option","bs_curry","bs_int64","gkx","profilePhotoUtils","react","stylex","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react");function k(a,c){var d=b("MWLSActor.bs").useActor(void 0),e=a.d;if(e!==void 0)return g._(/*FBT_CALL*/"Abre a conversa com o nome {name of conversation}"/*FBT_CALL*/,[g._param("name of conversation",e)]).toString();e=b("bs_belt_Option").getWithDefault(b("MWV2GetThreadTitle.bs").computeThreadTitle(void 0,a,c,d),"");return g._(/*FBT_CALL*/"Abrir conversa com {chat participants}"/*FBT_CALL*/,[g._param("chat participants",e)])}function l(a,c){var d=b("MWLSActor.bs").useActor(void 0),e=a.f;if(e!==void 0)return[e];else return b("MWFacepileGetContactsToShow.bs").getContactsToShow(a,c,d).map(function(a){return a.b})}var m={activeBadge:{position:"pmk7jnqg"}};function n(a){var c=a.thread,d=a.tab,e=a.style,f=a.onHoverChange,g=a.onFocusChange,h=b("ReStore.bs").useHook(void 0),n=b("MWChatStateV2.bs").useDispatch(void 0);a=function(a){return b("bs_curry")._1(n,b("MWChatStateActions.bs").maximizeTab(Date.now(),d.tabId))};var o=c.a,p=b("bs_int64").to_string(o),q=j.useState(function(){return!1}),r=q[1];q=q[0];var s=j.useState(function(){return!1}),t=s[1];s=s[0];var u=function(a){return b("bs_curry")._1(n,b("MWChatStateActions.bs").closeTab(Date.now(),d.tabId))};p=b("ReQLSubscription.bs").useArray(j.useMemo(function(){return b("ReQL.bs").leftJoin(b("ReQL.bs").getKeyRange(b("ReQLTable").table(h,"participants").asc,{hd:o,tl:0}),b("ReQLTable").table(h,"contacts").asc)},[h,p]));var v=j.useRef(null),w=b("MWChatStateV2IsFlyoutOpen.bs").isFlyoutOpen(d),x=b("MWChatViewerChatVisibilityHook")(),y=b("useCometUniqueID")(),z=k(c,p),A=p.map(function(a){return a[1]});A=l(c,A);var B=b("profilePhotoUtils").getBadgeSizeAndStrokeWidth(48),C=b("profilePhotoUtils").getBadgePosition(24),D=b("MWV2PreloadThread.bs").useHook(o),E=b("MWCMThreadTypes.bs").isJoinedCMThread(c.c);E=E?b("bs_caml_option").some(j.jsx(b("MWCMInboxHeaderCommunityGroupName.bs").make,{thread:c})):void 0;return j.jsxs(b("MWV2ChatHeadButton.bs").Container.make,{children:[j.jsxs(b("MWV2ChatHeadButton.bs").make,{onPress:a,onHoverChange:function(a){b("bs_curry")._1(r,function(b){return a});return b("bs_curry")._1(f,a)},onHoverIn:D[0],onHoverOut:D[1],onFocusChange:function(a){b("bs_curry")._1(t,function(b){return a});return b("bs_curry")._1(g,a)},ariaLabel:z,ariaDescribedBy:y,children:[j.jsx("div",{ref:v,children:j.jsxs(b("MWChatHeadPicture.bs").make,{images:A,children:[j.jsx(b("MWV2ChatHeadUnreadMessageCountBadge.bs").make,{threadKey:o,isVisible:!q&&!s}),j.jsx("div",{className:(i||(i=b("stylex")))(m.activeBadge),style:{bottom:C.bottom,left:C.left,right:C.right,transform:C.transform},children:j.jsx(b("MWFacepileBadge.bs").make,{thread:c,size:B[0]})})]})}),q||s||w?j.jsx(b("CometContextualLayer.react"),{contextRef:v,children:j.jsx(b("MWV2ChatHeadFlyout.bs").make,{thread:c,subtitle:E,participantsAndContacts:p,id:y})}):null,x&&b("gkx")("1774069")?j.jsx(b("MWV2ChatHeadTypingIndicator.bs").make,{threadKey:o}):null]}),j.jsx(b("MWV2ChatHeadCloseButton.bs").make,{onPress:u,onHoverChange:function(a){return b("bs_curry")._1(r,function(b){return a})},onFocusChange:function(a){return b("bs_curry")._1(t,function(b){return a})},isVisible:q||s})],style:e})}c={make:n};function a(a){var c=a.threadKeyDescriptor,d=a.tab,e=a.style,f=a.onHoverChange;a=a.onFocusChange;var g=b("ReStore.bs").useHook(void 0),h=c.clientThreadKey,i=c.threadKey,k=b("bs_int64").to_string(i),l=JSON.stringify(h);b("MWV2EnsureThatChatTabExists.bs").useHook(i,c.threadType);c=b("ReQLSubscription.bs").useFirst(j.useMemo(function(){return b("ReQL.bs").getKeyRange(b("ReQLTable").table(g,"threads").asc,{hd:i,tl:0})},[g,k]));k=b("ReQLSubscription.bs").useFirst(j.useMemo(function(){if(h!==void 0)return b("ReQL.bs").getKeyRange(b("ReQLTable").table(g,"threads").index("clientThreadKey").asc,{hd:h,tl:0});else return b("SortedAsyncIterable.bs").empty(void 0)},[g,l]));l=c!==void 0?c:k!==void 0?k:void 0;if(l!==void 0)return j.jsx(n,{thread:l,tab:d,style:e,onHoverChange:f,onFocusChange:a});else return null}d=a;f.styles=m;f.Impl=c;f.make=d}),null);/*FB_PKG_DELIM*/
__d("CometGroupRemovePostAsAdminTombstoneViewPostButton.react",["fbt","GroupsCometViewAdminDeleteContentFeedbackDialog.entrypoint","TetraButton.react","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react").useRef,j=d("react");function a(a){a=a.feedbackID;a={feedbackID:a};var b=i(null);a=c("useCometEntryPointDialog")(c("GroupsCometViewAdminDeleteContentFeedbackDialog.entrypoint"),a);var d=a[0];return j.jsx(c("TetraButton.react"),{label:h._(/*FBT_CALL*/"Ver feedback"/*FBT_CALL*/),onPress:function(){return d({})},ref:b,type:"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ChatOverflowHead.bs",["fbt","ix","BaseGlimmer.react","CometContextualLayer.react","CometListCellGlimmer.react","CometMenuItemBase.react","CometTextWithEntities.react","LSThreadTitle.bs","MDSText.react","MWChatHeadPicture.bs","MWChatStateActions.bs","MWChatStateV2.bs","MWChatTextTransform.bs","MWFacepileGetContactsToShow.bs","MWLSActor.bs","MWMenu.react","MWV2ChatHeadButton.bs","MWV2EnsureThatChatTabExists.bs","ReQL.bs","ReQLSubscription.bs","ReQLSuspense.bs","ReQLTable","ReStore.bs","TetraIcon.react","bs_belt_Option","bs_caml","bs_caml_array","bs_curry","fbicon","react","recoverableViolation","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=i||b("react");function l(a){var c=b("MWLSActor.bs").useActor(void 0),d=b("ReStore.bs").useHook(void 0);return b("bs_belt_Option").getWithDefault(b("ReQLSubscription.bs").useFirst(k.useMemo(function(){return b("ReQL.bs").map(b("ReQL.bs").getKeyRange(b("ReQLTable").table(d,"threads").asc,{hd:a,tl:0}),function(e){var f;return b("ReQLSuspense.bs").toArray((f=b("ReQL.bs")).filter(f.bounds(f.take(f.getKeyRange(b("ReQLTable").table(d,"messages").desc,{hd:a,tl:0}),20),{NAME:"greaterThan",VAL:{hd:e.j,tl:0}}),function(a){return b("bs_caml").i64_neq(a.h,c)})).length})},[d,JSON.stringify(c),JSON.stringify(a)])),0)}function m(a){a=a.thread;var c=l(a.a);return k.jsxs(k.Fragment,{children:[k.jsx(b("LSThreadTitle.bs").make,{thread:a}),k.jsx(b("CometTextWithEntities.react"),{text:g._(/*FBT_CALL*/"({unread message count})"/*FBT_CALL*/,[g._param("unread message count",String(c))]),transforms:b("MWChatTextTransform.bs").epdTextTransforms})]})}c={useUnreadCount:l,make:m};var n={auxWrapper:{display:"j83agx80",visibility:"kr9hpln1"},auxVisible:{visibility:"n1dktuyu"},glimmer:{height:"tv7at329",minWidth:"gvsi1rru"}};function o(a){var c=a.isItemHovered,d=a.setItemIsHovered;a=a.closeTab;return k.jsx("div",{className:(j||(j=b("stylex")))(n.auxWrapper,c?n.auxVisible:!1),children:k.jsx(b("TetraIcon.react"),{"aria-label":g._(/*FBT_CALL*/"Fechar conversa"/*FBT_CALL*/),icon:b("fbicon")._(h("478231"),12),onPress:a,onHoverIn:function(a){return b("bs_curry")._1(d,function(a){return!0})},onHoverOut:function(a){return b("bs_curry")._1(d,function(a){return!1})},color:"secondary"})})}d={styles:n,make:o};var p={glimmer:{height:"tv7at329",minWidth:"gvsi1rru"}};function q(a){var c=a.descriptor,d=a.tab,e=a.setParentHoverState,f=b("ReStore.bs").useHook(void 0);a=b("ReQLSubscription.bs").useFirst(k.useMemo(function(){return b("ReQL.bs").getKeyRange(b("ReQLTable").table(f,"threads").asc,{hd:c.threadKey,tl:0})},[f,JSON.stringify(c.threadKey)]));var g=b("MWChatStateV2.bs").useDispatch(void 0);b("MWV2EnsureThatChatTabExists.bs").useHook(c.threadKey,c.threadType);var h=k.useState(function(){return!1}),i=h[1];if(a!==void 0)return k.jsx(b("CometMenuItemBase.react"),{primaryText:k.jsx(m,{thread:a}),onClick:function(a){b("bs_curry")._1(e,function(a){return!1});return b("bs_curry")._1(g,b("MWChatStateActions.bs").maximizeTab(Date.now(),d.tabId))},onHoverIn:function(a){return b("bs_curry")._1(i,function(a){return!0})},onHoverOut:function(a){return b("bs_curry")._1(i,function(a){return!1})},aux:k.jsx(o,{tab:d,isItemHovered:h[0],setItemIsHovered:i,closeTab:function(a){return b("bs_curry")._1(g,b("MWChatStateActions.bs").closeTab(Date.now(),d.tabId))}})});else return k.jsx("div",{className:(j||(j=b("stylex")))(p.glimmer),children:k.jsx(b("CometListCellGlimmer.react"),{imageStyle:"none"})})}e={styles:p,make:q};function r(a){var c=a.excessHeads,d=a.setParentHoverState;return k.jsx(b("MWMenu.react"),{children:c.map(function(a){var c=a.tabType;if(c.TAG!==0)return k.jsx(q,{descriptor:c._0,tab:a,setParentHoverState:d},String(a.tabId));b("recoverableViolation")("Compose tab shouldn't be part of excess tabs","messenger_web_product");return null}),size:"full",truncate:!0,withArrow:!0})}var s={make:r},t={overflowCount:{position:"pmk7jnqg",width:"tmrshh9y",height:"m7zwrmfr",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",top:"kr520xx4",display:"j83agx80",alignItems:"bp9cbjyn",justifyContent:"taijpn5t",backgroundColor:"d6rk862h"}};function u(a){var c=a.thread;a=a.count;c=b("MWFacepileGetContactsToShow.bs").useHook(c).map(function(a){return a.b});return k.jsx(b("MWChatHeadPicture.bs").make,{images:c,children:k.jsx("div",{className:(j||(j=b("stylex")))(t.overflowCount),children:k.jsx(b("MDSText.react"),{color:"white",type:"bodyLink3",children:g._(/*FBT_CALL*/"+{chat count}"/*FBT_CALL*/,[g._param("chat count",String(a))])})}),noFacepile:!0,noDropShadow:!0})}var v={styles:t,make:u},w={glimmer:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",width:"k4urcfbm",height:"datstx6m"}};function x(a){var c=a.tab;a=a.count;b("MWV2EnsureThatChatTabExists.bs").useHook(c.threadKey,c.threadType);var d=b("ReStore.bs").useHook(void 0),e=b("ReQLSubscription.bs").useFirst(k.useMemo(function(){return b("ReQL.bs").getKeyRange(b("ReQLTable").table(d,"threads").asc,{hd:c.threadKey,tl:0})},[d,JSON.stringify(c.threadKey)]));if(e!==void 0)return k.jsx(u,{thread:e,count:a});else return k.jsx(b("BaseGlimmer.react"),{theme:"dark",index:1,xstyle:w.glimmer})}var y={styles:w,make:x};function a(a){var c=a.style,d=a.excessHeads,e=a.onHoverChange;a=k.useState(function(){return!1});var f=a[1],h=d.length,i=k.useRef(null);if(h<=0)return null;var j=b("bs_caml_array").get(d,0).tabType,l;j.TAG===0?(b("recoverableViolation")("Compose tab shouldn't be part of excess tabs","messenger_web_product"),l=null):l=k.jsx(x,{tab:j._0,count:h});return k.jsx(b("MWV2ChatHeadButton.bs").Container.make,{children:k.jsx(b("MWV2ChatHeadButton.bs").make,{ariaLabel:g._(/*FBT_CALL*/"+{chat count} outras conversas"/*FBT_CALL*/,[g._param("chat count",String(h))]),children:k.jsxs("div",{onMouseEnter:function(a){b("bs_curry")._1(f,function(a){return!0});return b("bs_curry")._1(e,!0)},onMouseLeave:function(a){b("bs_curry")._1(f,function(a){return!1});return b("bs_curry")._1(e,!1)},children:[l,a[0]?k.jsx(b("CometContextualLayer.react"),{align:"middle",position:"end",contextRef:i,children:k.jsx(r,{excessHeads:d,setParentHoverState:f})}):null]}),ref:i}),style:c})}a=a;f.MenuItemTitle=c;f.CloseButton=d;f.MenuItem=e;f.HoverMenu=s;f.Facepile=v;f.FirstThreadPicture=y;f.make=a}),null);