if (self.CavalryLogger) { CavalryLogger.start_js(["U+RtSBX"]); }

__d("CometSinglePageLiveVideosRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4672626062806583"}),null);
__d("CometSinglePageLiveVideosRootQuery$Parameters",["CometSinglePageLiveVideosRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSinglePageLiveVideosRootQuery_facebookRelayOperation"),metadata:{},name:"CometSinglePageLiveVideosRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePageLiveVideosRoot.entrypoint",["CometSinglePageLiveVideosRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";var h=228,i=406;a=c("buildCometSinglePageRoute.entrypoint")(c("JSResourceForInteraction")("CometSinglePageLiveVideosRoot.react").__setRef("CometSinglePageLiveVideosRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{queries:{singlePageLiveVideosQueryReference:{parameters:b("CometSinglePageLiveVideosRootQuery$Parameters"),variables:{maxImageHeight:h,maxImageWidth:i,pageID:a,scale:d("WebPixelRatio").get()*4,useDefaultActor:!1}}}}});g["default"]=a}),98);
__d("CometVideoHomeLanceletHostedRoot.entrypoint",["CometSinglePageChannelTabRoot.entrypoint","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{entryPoints:{pageEntryPoint:{entryPoint:b("CometSinglePageChannelTabRoot.entrypoint"),entryPointParams:a}},extraProps:a}},root:c("JSResourceForInteraction")("CometVideoHomeLanceletHostedRoot.react").__setRef("CometVideoHomeLanceletHostedRoot.entrypoint")};g["default"]=a}),98);