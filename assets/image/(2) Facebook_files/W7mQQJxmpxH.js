if (self.CavalryLogger) { CavalryLogger.start_js(["Ai6mmtS"]); }

__d("IntegrityContextTriggerClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:IntegrityContextTriggerClientLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:IntegrityContextTriggerClientLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:IntegrityContextTriggerClientLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEntryPoint=function(a){this.$1.entry_point=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setFeedTracking=function(a){this.$1.feed_tracking=a;return this};c.setIntegrityContextType=function(a){this.$1.integrity_context_type=a;return this};c.setTriggerLoggerID=function(a){this.$1.trigger_logger_id=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={entry_point:!0,event:!0,feed_tracking:!0,integrity_context_type:!0,trigger_logger_id:!0};f["default"]=a}),66);
__d("CometUFICommentArticleContext_actionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometUFICommentArticleContext_actionLink$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"object_id",storageKey:null}]};e.exports=a}),null);
__d("CometUFICommentArticleContext_actionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentArticleContext_actionLink",selections:[{alias:null,args:null,kind:"ScalarField",name:"object_id",storageKey:null}],type:"ArticleContextActionLink",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentFallbackAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e=[d];return{kind:"SplitOperation",metadata:{},name:"CometUFICommentFallbackAttachmentStyle_styleTypeRenderer$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[a,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"source",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title_with_entities",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[c,{kind:"InlineFragment",selections:[a],type:"ExternalUrl",abstractKey:null},d],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[c,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentFallbackAttachment_attachment",fragmentName:"CometUFICommentArticleContext_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"ArticleContextActionLink",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[c,{alias:"fallback_image",args:[{kind:"Literal",name:"height",value:98},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:98}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null},{kind:"InlineFragment",selections:e,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:e,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:e,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:e,type:"MontageVideo",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentFallbackAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentFallbackAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentFallbackAttachment_attachment"}],storageKey:null}],type:"StoryAttachmentFallbackStyleRenderer",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentFallbackAttachment_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometUFICommentFallbackAttachment_attachment",selections:[a,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"source",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title_with_entities",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{kind:"InlineFragment",selections:[a],type:"ExternalUrl",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentFallbackAttachment_attachment",fragmentName:"CometUFICommentArticleContext_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"ArticleContextActionLink",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:"fallback_image",args:[{kind:"Literal",name:"height",value:98},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:98}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null}],type:"StoryAttachment",abstractKey:null}}();e.exports=a}),null);
__d("useCometIntegrityContextLogger",["IntegrityContextTriggerClientTypedLogger","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useRef;function a(a){var b=h(function(b){b=new(c("IntegrityContextTriggerClientTypedLogger"))().setEvent(b).setTriggerLoggerID(a);b.log()},[a]),d=i({click:!1,hover:!1,visible:!1}),e=c("useVisibilityObserver")({onVisible:function(){if(d.current.visible)return;d.current.visible=!0;b("trigger_vpv")}}),f=h(function(){if(d.current.click)return;d.current.click=!0;b("trigger_click")},[b]),g=h(function(){if(d.current.hover)return;d.current.hover=!0;b("trigger_hover")},[b]);return{onHoverIn:g,onPress:f,ref:e}}g["default"]=a}),98);
__d("useGenerateStableUUID",["react","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef;function a(){var a=h(null);a.current==null&&(a.current=c("uuid")());return a.current}g["default"]=a}),98);
__d("CometUFICommentArticleContext.react",["fbt","ix","CometCompatModalDialogResource","CometRelay","CometTooltip.react","CometTrackingNodeProvider.react","CometUFICommentArticleContext_actionLink.graphql","IntegrityContextConfig","TetraIcon.react","XArticleContextMainDialogControllerRouteBuilder","fbicon","react","useCometIntegrityContextLogger","useCometLazyDialog","useGenerateStableUUID","useMergeRefs"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useRef;function a(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("CometUFICommentArticleContext_actionLink.graphql"),a.actionLink),f=c("useGenerateStableUUID")(),g=c("useCometIntegrityContextLogger")(f),m=g.onHoverIn,n=g.onPress;g=g.ref;var o=c("IntegrityContextConfig").tooltipFBT;a=a.title;a=a!=null?h._(/*FBT_CALL*/"Mostrar mais informa\u00e7\u00f5es sobre {name of article title}"/*FBT_CALL*/,[h._param("name of article title",a)]):h._(/*FBT_CALL*/"Mostrar mais informa\u00e7\u00f5es"/*FBT_CALL*/);var p=c("XArticleContextMainDialogControllerRouteBuilder").buildURL({entry_type:"news_feed_learn_more",share_id:e.object_id,trigger_log_id:f});e=l(null);f=c("useCometLazyDialog")(c("CometCompatModalDialogResource"));var q=f[0];f=c("useMergeRefs")(e,g);return k.jsx("span",{className:"sgn1ogh8 pmk7jnqg rm3jng1j",children:k.jsx(c("CometTooltip.react"),{align:"middle",tooltip:o,children:k.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:303,children:k.jsx("div",{className:"ciadx1gn taijpn5t mudddibn j83agx80 r15kkdkt c8oo3d72 p7f4f6cj cmek9o9a aypy0576 s1tcr66n maa8sdkg l6v480f0 cwj9ozl2 bp9cbjyn",children:k.jsx(c("TetraIcon.react"),{"aria-label":a,icon:d("fbicon")._(i("721632"),16),onHoverIn:m,onPress:function(){n(),q({params:{rel:"dialog-post",uri:String(p)}})},ref:f})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentFallbackAttachment.react",["ix","BaseAccessibleElement_DEPRECATED.react","BaseLink.react","CometImage.react","CometPlaceholder.react","CometRelay","CometUFICommentFallbackAttachment_attachment.graphql","TetraTextPairing.react","UFI2ScaleRect","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k={attachmentContainer:{borderTop:"l6v480f0",borderEnd:"maa8sdkg",borderBottom:"s1tcr66n",borderStart:"aypy0576",borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomEndRadius:"inkptoze",borderBottomStartRadius:"qmr60zad",display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",flexWrap:"owycx6da",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7"},body:{borderStart:"t63ysoy8",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",justifyContent:"taijpn5t",paddingTop:"jktsbyx5",paddingEnd:"d1544ag0",paddingBottom:"osnr6wyh",paddingStart:"tw6a2znq",width:"k4urcfbm"},linkOverlay:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",":hover":{backgroundColor:"dwzzwef6"}},media:{display:"j83agx80",flexBasis:"cu69yu53",flexDirection:"cbu4d94t",flexShrink:"pfnyh3mw",height:"lc891dc2",justifyContent:"taijpn5t",pointerEvents:"hzruof5a",position:"l9j0dhe7",width:"aijzkk2f"},mediaImage:{borderBottomStartRadius:"qmr60zad",borderTopStartRadius:"e72ty7fz",verticalAlign:"j1lvzwm4"},playIcon:{bottom:"i09qtzwb",display:"pq6dq46d",end:"n7fi1qx3",height:"gvqrqva3",marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"jokk5rks"},root:{display:"q9uorilb",marginTop:"rs0gx3tq",position:"l9j0dhe7"}};function a(a){var e,f,g,l;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometUFICommentFallbackAttachment_attachment.graphql"),a.attachment);e=(e=(e=a.target)==null?void 0:e.url)!=null?e:a.url;var m=(f=a.title_with_entities)==null?void 0:f.text,n=(f=a.source)==null?void 0:f.text;f=(f=a.media)==null?void 0:(f=f.fallback_image)==null?void 0:f.uri;g=(g=a.media)==null?void 0:(g=g.fallback_image)==null?void 0:g.width;l=(l=a.media)==null?void 0:(l=l.fallback_image)==null?void 0:l.height;var o=null;if(f!=null&&g!=null&&l!=null){var p;l=d("UFI2ScaleRect").scaleToContain({gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero:!0,maxHeight:98,maxWidth:98,srcHeight:l,srcWidth:g});g=l.height;l=l.width;o=f&&j.jsxs(j.Fragment,{children:[j.jsx(c("CometImage.react"),{alt:(p=(p=m)!=null?p:n)!=null?p:"",height:g,src:f,width:l,xstyle:k.mediaImage}),((p=a.media)==null?void 0:p.is_playable)===!0?j.jsx("span",{className:c("stylex")(k.playIcon),children:j.jsx(c("CometImage.react"),{src:h("40151")})}):null]})}return j.jsxs("div",{className:c("stylex")(k.root),"data-ft":a.tracking,children:[j.jsxs("div",{className:c("stylex")(k.attachmentContainer),children:[o!=null?j.jsx("div",{className:c("stylex")(k.media),children:o}):null,j.jsxs("div",{className:c("stylex")(k.body),children:[j.jsx(c("TetraTextPairing.react"),{body:m,bodyLineLimit:2,level:2,meta:n!=null?n.toLocaleUpperCase():null,metaLocation:"above"}),e!==null?j.jsx(c("BaseLink.react"),{href:e,rel:["noopener","nofollow"],target:"_blank",xstyle:k.linkOverlay,children:j.jsx(c("BaseAccessibleElement_DEPRECATED.react"),{children:(g=m)!=null?g:n})}):null]})]}),j.jsx(c("CometPlaceholder.react"),{fallback:null,children:a.action_links.map(function(a,b){return j.jsx(d("CometRelay").MatchContainer,{match:a,props:{title:(a=m)!=null?a:n}},b)})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentFallbackAttachmentStyle.react",["CometRelay","CometUFICommentFallbackAttachment.react","CometUFICommentFallbackAttachmentStyle_styleTypeRenderer.graphql","FBLogger","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.styleTypeRenderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentFallbackAttachmentStyle_styleTypeRenderer.graphql"),a);a=a.attachment;if(a==null){c("FBLogger")("CometFeed").mustfix("CometUFICommentFallbackAttachmentStyle: Tried to render a fallback attachment, but attachment information is null.");return null}return i.jsx(c("CometUFICommentFallbackAttachment.react"),{attachment:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);