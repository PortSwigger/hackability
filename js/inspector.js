window.inspector = function(){
  var knownWindowProps = 'orientation,onorientationchange,ontouchcancel,ontouchend,ontouchmove,ontouchstart,BluetoothUUID,BluetoothRemoteGATTService,BluetoothRemoteGATTServer,BluetoothRemoteGATTDescriptor,BluetoothRemoteGATTCharacteristic,BluetoothDevice,BluetoothCharacteristicProperties,Bluetooth,NavigationPreloadManager,PresentationReceiver,PresentationConnectionList,PaymentResponse,PaymentRequestUpdateEvent,PaymentRequest,PaymentAddress,PhotoCapabilities,MediaSettingsRange,ImageCapture,BudgetService,RTCRtpContributingSource,WritableStream,PerformancePaintTiming,onmessageerror,clipboardData,maxConnectionsPerServer,onhelp,onanimationcancel,toStaticHTML,VRStageParameters,AnimationTimeline,AnimationEffectReadOnly,CSSPseudoElement,AnimationEffectTimingReadOnly,KeyframeEffectReadOnly,KeyframeEffect,CSSTransition,CSSAnimation,AnimationPlaybackEvent,AnimationEffectTiming,GamepadAxisMoveEvent,GamepadButtonEvent,DocumentTimeline,WebKitMediaKeyNeededEvent,OverconstrainedError,OverconstrainedErrorEvent,onwebkitwillrevealbottom,onwebkitwillrevealleft,onwebkitwillrevealright,onwebkitwillrevealtop,origin,Atomics,SharedArrayBuffer,StaticRange,safari,0,1,2,3,4,5,6,7,8,9,10,11,GamepadHapticActuator,GamepadPose,VRDisplay,VRDisplayCapabilities,VRDisplayEvent,VREyeParameters,VRFieldOfView,VRFrameData,VRPose,onvrdisplayactivate,onvrdisplayblur,onvrdisplayconnect,onvrdisplaydeactivate,onvrdisplaydisconnect,onvrdisplayfocus,onvrdisplaypointerrestricted,onvrdisplaypointerunrestricted,onvrdisplaypresentchange,ondragexit,onloadend,onselectstart,ontransitioncancel,ontransitionrun,ontransitionstart,RTCDTMFSender,FileSystem,FileSystemEntry,FileSystemFileEntry,FileSystemDirectoryReader,FileSystemDirectoryEntry,WebGL2RenderingContext,RemotePlayback,WebGLVertexArrayObject,RTCDataChannel,ConstantSourceNode,BaseAudioContext,AudioScheduledSourceNode,WebAssembly,TaskAttributionTiming,PerformanceLongTaskTiming,ongotpointercapture,onlostpointercapture,ANGLE_instanced_arrays,ActiveXObject,AesGcmEncryptResult,AnalyserNode,Animation,AnimationEvent,AppBannerPromptResult,ApplePaySession,ApplicationCache,ApplicationCacheErrorEvent,Array,ArrayBuffer,Attr,Audio,AudioBuffer,AudioBufferSourceNode,AudioContext,AudioDestinationNode,AudioListener,AudioNode,AudioParam,AudioProcessingEvent,AudioStreamTrack,AudioTrack,AudioTrackList,BarProp,BatteryManager,BeforeInstallPromptEvent,BeforeLoadEvent,BeforeUnloadEvent,BhxBrowser,BhxEvent,BhxFilteredEvent,BhxWebNavigation,BhxWebRequest,BiquadFilterNode,Blob,BlobEvent,BookmarkCollection,Boolean,BroadcastChannel,ByteLengthQueuingStrategy,CDATASection,CSS,CSS2Properties,CSSCharsetRule,CSSConditionRule,CSSCounterStyleRule,CSSFontFaceRule,CSSFontFeatureValuesRule,CSSGroupingRule,CSSImportRule,CSSKeyframeRule,CSSKeyframesRule,CSSMediaRule,CSSMozDocumentRule,CSSNameSpaceRule,CSSNamespaceRule,CSSPageRule,CSSPrimitiveValue,CSSRule,CSSRuleList,CSSStyleDeclaration,CSSStyleRule,CSSStyleSheet,CSSSupportsRule,CSSValue,CSSValueList,CSSViewportRule,Cache,CacheStorage,CanvasCaptureMediaStream,CanvasCaptureMediaStreamTrack,CanvasGradient,CanvasPattern,CanvasPixelArray,CanvasRenderingContext2D,CaretPosition,ChannelMergerNode,ChannelSplitterNode,CharacterData,ClientRect,ClientRectList,ClipboardEvent,CloseEvent,CollectGarbage,CommandEvent,Comment,CompositionEvent,Console,ControlRangeCollection,Controllers,ConvolverNode,Coordinates,CountQueuingStrategy,Counter,Credential,CredentialsContainer,Crypto,CryptoKey,CryptoKeyPair,CryptoOperation,CustomElementRegistry,CustomEvent,DOMCursor,DOMError,DOMException,DOMImplementation,DOMMatrix,DOMMatrixReadOnly,DOMParser,DOMPoint,DOMPointReadOnly,DOMQuad,DOMRect,DOMRectList,DOMRectReadOnly,DOMRequest,DOMSettableTokenList,DOMStringList,DOMStringMap,DOMTokenList,DOMTransactionEvent,DataChannel,DataCue,DataTransfer,DataTransferItem,DataTransferItemList,DataView,Database,Date,Debug,DelayNode,DesktopNotification,DesktopNotificationCenter,DeviceAcceleration,DeviceLightEvent,DeviceMotionEvent,DeviceOrientationEvent,DeviceProximityEvent,DeviceRotationRate,Directory,Document,DocumentFragment,DocumentType,DragEvent,DynamicsCompressorNode,EXT_frag_depth,EXT_texture_filter_anisotropic,Element,Enumerator,Error,ErrorEvent,EvalError,Event,EventException,EventSource,EventTarget,External,FederatedCredential,File,FileError,FileList,FileReader,Float32Array,Float64Array,FocusEvent,FontFace,FontFaceSet,FontFaceSetLoadEvent,FormData,Function,GainNode,Gamepad,GamepadButton,GamepadEvent,Geolocation,GestureEvent,HTMLAllCollection,HTMLAnchorElement,HTMLAppletElement,HTMLAreaElement,HTMLAreasCollection,HTMLAttachmentElement,HTMLAudioElement,HTMLBGSoundElement,HTMLBRElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBlockElement,HTMLBodyElement,HTMLButtonElement,HTMLCanvasElement,HTMLCollection,HTMLContentElement,HTMLDDElement,HTMLDListElement,HTMLDTElement,HTMLDataElement,HTMLDataListElement,HTMLDetailsElement,HTMLDialogElement,HTMLDirectoryElement,HTMLDivElement,HTMLDocument,HTMLElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormControlsCollection,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHRElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLIsIndexElement,HTMLKeygenElement,HTMLLIElement,HTMLLabelElement,HTMLLegendElement,HTMLLinkElement,HTMLMapElement,HTMLMarqueeElement,HTMLMediaElement,HTMLMenuElement,HTMLMenuItemElement,HTMLMetaElement,HTMLMeterElement,HTMLModElement,HTMLNextIdElement,HTMLOListElement,HTMLObjectElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOptionsCollection,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPhraseElement,HTMLPictureElement,HTMLPreElement,HTMLProgressElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLShadowElement,HTMLSlotElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableColElement,HTMLTableDataCellElement,HTMLTableElement,HTMLTableHeaderCellElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTemplateElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HashChangeEvent,Headers,History,IDBCursor,IDBCursorWithValue,IDBDatabase,IDBFactory,IDBFileHandle,IDBFileRequest,IDBIndex,IDBKeyRange,IDBMutableFile,IDBObjectStore,IDBOpenDBRequest,IDBRequest,IDBTransaction,IDBVersionChangeEvent,IIRFilterNode,IdleDeadline,Image,ImageBitmap,ImageBitmapRenderingContext,ImageData,Infinity,InputDeviceCapabilities,InputEvent,InstallTrigger,Int16Array,Int32Array,Int8Array,InternalError,IntersectionObserver,IntersectionObserverEntry,Intl,Iterator,JSON,Key,KeyEvent,KeyOperation,KeyPair,KeyboardEvent,LocalMediaStream,Location,MIDIAccess,MIDIConnectionEvent,MIDIInput,MIDIInputMap,MIDIMessageEvent,MIDIOutput,MIDIOutputMap,MIDIPort,MSAssertion,MSBehaviorUrnsCollection,MSBlobBuilder,MSCSSMatrix,MSCSSProperties,MSCSSRuleList,MSCompatibleInfo,MSCompatibleInfoCollection,MSCredentials,MSCurrentStyleCSSProperties,MSEventObj,MSFIDOCredentialAssertion,MSFIDOSignature,MSFIDOSignatureAssertion,MSGesture,MSGestureEvent,MSGraphicsTrust,MSInputMethodContext,MSManipulationEvent,MSMediaKeyError,MSMediaKeyMessageEvent,MSMediaKeyNeededEvent,MSMediaKeySession,MSMediaKeys,MSMimeTypesCollection,MSPluginsCollection,MSPointerEvent,MSRangeCollection,MSSiteModeEvent,MSStream,MSStreamReader,MSStyleCSSProperties,Map,Math,MediaController,MediaDeviceInfo,MediaDevices,MediaElementAudioSourceNode,MediaEncryptedEvent,MediaError,MediaKeyError,MediaKeyEvent,MediaKeyMessageEvent,MediaKeyNeededEvent,MediaKeySession,MediaKeyStatusMap,MediaKeySystemAccess,MediaKeys,MediaList,MediaQueryList,MediaQueryListEvent,MediaRecorder,MediaSource,MediaStream,MediaStreamAudioDestinationNode,MediaStreamAudioSourceNode,MediaStreamError,MediaStreamErrorEvent,MediaStreamEvent,MediaStreamTrack,MediaStreamTrackEvent,MessageChannel,MessageEvent,MessagePort,MimeType,MimeTypeArray,MouseEvent,MouseScrollEvent,MouseWheelEvent,MutationEvent,MutationObserver,MutationRecord,NaN,NamedNodeMap,Navigator,Node,NodeFilter,NodeIterator,NodeList,Notification,NotifyPaintEvent,Number,OES_element_index_uint,OES_standard_derivatives,OES_texture_float,OES_texture_float_linear,OES_texture_half_float,OES_texture_half_float_linear,Object,OfflineAudioCompletionEvent,OfflineAudioContext,OfflineResourceList,Option,OscillatorNode,OverflowEvent,PageTransitionEvent,PaintRequest,PaintRequestList,PannerNode,PasswordCredential,Path2D,Performance,PerformanceEntry,PerformanceMark,PerformanceMeasure,PerformanceNavigation,PerformanceNavigationTiming,PerformanceObserver,PerformanceObserverEntryList,PerformanceResourceTiming,PerformanceTiming,PeriodicWave,PermissionStatus,Permissions,Plugin,PluginArray,PointerEvent,PopStateEvent,PopupBlockedEvent,Position,PositionError,Presentation,PresentationAvailability,PresentationConnection,PresentationConnectionAvailableEvent,PresentationConnectionCloseEvent,PresentationRequest,ProcessingInstruction,ProgressEvent,Promise,PromiseRejectionEvent,Proxy,PushManager,PushSubscription,PushSubscriptionOptions,RGBColor,RTCCertificate,RTCDTMFToneChangeEvent,RTCDataChannelEvent,RTCDtlsTransport,RTCDtlsTransportStateChangedEvent,RTCDtmfSender,RTCIceCandidate,RTCIceCandidatePairChangedEvent,RTCIceGatherer,RTCIceGathererEvent,RTCIceTransport,RTCIceTransportStateChangedEvent,RTCPeerConnection,RTCPeerConnectionIceEvent,RTCRtpReceiver,RTCRtpSender,RTCSessionDescription,RTCSrtpSdesTransport,RTCSsrcConflictEvent,RTCStatsProvider,RTCStatsReport,RTCTrackEvent,RadioNodeList,Range,RangeError,RangeException,ReadableStream,ReadableStreamReader,RecordErrorEvent,Rect,ReferenceError,Reflect,RegExp,Request,Response,SQLError,SQLException,SQLResultSet,SQLResultSetRowList,SQLTransaction,SVGAElement,SVGAltGlyphDefElement,SVGAltGlyphElement,SVGAltGlyphItemElement,SVGAngle,SVGAnimateColorElement,SVGAnimateElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGAnimationElement,SVGCircleElement,SVGClipPathElement,SVGColor,SVGComponentTransferFunctionElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGDiscardElement,SVGDocument,SVGElement,SVGElementInstance,SVGElementInstanceList,SVGEllipseElement,SVGException,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEDropShadowElement,SVGFEFloodElement,SVGFEFuncAElement,SVGFEFuncBElement,SVGFEFuncGElement,SVGFEFuncRElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGFilterElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGeometryElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGGraphicsElement,SVGHKernElement,SVGImageElement,SVGLength,SVGLengthList,SVGLineElement,SVGLinearGradientElement,SVGMPathElement,SVGMarkerElement,SVGMaskElement,SVGMatrix,SVGMetadataElement,SVGMissingGlyphElement,SVGNumber,SVGNumberList,SVGPaint,SVGPathElement,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegList,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,SVGPatternElement,SVGPoint,SVGPointList,SVGPolygonElement,SVGPolylineElement,SVGPreserveAspectRatio,SVGRadialGradientElement,SVGRect,SVGRectElement,SVGRenderingIntent,SVGSVGElement,SVGScriptElement,SVGSetElement,SVGStopElement,SVGStringList,SVGStyleElement,SVGSwitchElement,SVGSymbolElement,SVGTRefElement,SVGTSpanElement,SVGTextContentElement,SVGTextElement,SVGTextPathElement,SVGTextPositioningElement,SVGTitleElement,SVGTransform,SVGTransformList,SVGUnitTypes,SVGUseElement,SVGVKernElement,SVGViewElement,SVGViewSpec,SVGZoomAndPan,SVGZoomEvent,Screen,ScreenOrientation,ScriptEngine,ScriptEngineBuildVersion,ScriptEngineMajorVersion,ScriptEngineMinorVersion,ScriptProcessorNode,ScrollAreaEvent,SecurityPolicyViolationEvent,Selection,ServiceWorker,ServiceWorkerContainer,ServiceWorkerMessageEvent,ServiceWorkerRegistration,Set,ShadowRoot,SharedWorker,SimpleGestureEvent,SiteBoundCredential,SourceBuffer,SourceBufferList,SpeechSynthesis,SpeechSynthesisErrorEvent,SpeechSynthesisEvent,SpeechSynthesisUtterance,SpeechSynthesisVoice,StereoPannerNode,StopIteration,Storage,StorageEvent,StorageManager,String,StyleMedia,StyleSheet,StyleSheetList,StyleSheetPageList,SubtleCrypto,Symbol,SyncManager,SyntaxError,Text,TextDecoder,TextEncoder,TextEvent,TextMetrics,TextRange,TextRangeCollection,TextTrack,TextTrackCue,TextTrackCueList,TextTrackList,TimeEvent,TimeRanges,Touch,TouchEvent,TouchList,TrackEvent,TransitionEvent,TreeWalker,TypeError,UIEvent,URIError,URL,URLSearchParams,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,UserMessageHandler,UserMessageHandlersNamespace,UserProximityEvent,VBArray,VTTCue,VTTRegion,ValidityState,VideoPlaybackQuality,VideoStreamTrack,VideoTrack,VideoTrackList,WEBGL_compressed_texture_s3tc,WEBGL_debug_renderer_info,WEBGL_depth_texture,WaveShaperNode,WeakMap,WeakSet,WebGLActiveInfo,WebGLBuffer,WebGLContextEvent,WebGLFramebuffer,WebGLObject,WebGLProgram,WebGLQuery,WebGLRenderbuffer,WebGLRenderingContext,WebGLSampler,WebGLShader,WebGLShaderPrecisionFormat,WebGLSync,WebGLTexture,WebGLTransformFeedback,WebGLUniformLocation,WebKitAnimationEvent,WebKitCSSFilterValue,WebKitCSSMatrix,WebKitCSSRegionRule,WebKitCSSTransformValue,WebKitDataCue,WebKitDirectoryEntry,WebKitDirectoryReader,WebKitEntry,WebKitFileEntry,WebKitFileSystem,WebKitMediaKeyError,WebKitMediaKeyMessageEvent,WebKitMediaKeySession,WebKitMediaKeys,WebKitMutationObserver,WebKitNamespace,WebKitPlaybackTargetAvailabilityEvent,WebKitPoint,WebKitTransitionEvent,WebSocket,WheelEvent,Window,Worker,XMLDocument,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestProgressEvent,XMLHttpRequestUpload,XMLSerializer,XMLStylesheetProcessingInstruction,XPathEvaluator,XPathException,XPathExpression,XPathNSResolver,XPathResult,XSLTProcessor,alert,applicationCache,atob,blur,btoa,caches,cancelAnimationFrame,cancelIdleCallback,captureEvents,chrome,clearImmediate,clearInterval,clearTimeout,clientInformation,close,closed,confirm,console,content,createImageBitmap,crypto,customElements,decodeURI,decodeURIComponent,defaultStatus,defaultstatus,devicePixelRatio,doNotTrack,document,dump,encodeURI,encodeURIComponent,escape,eval,event,external,fetch,find,focus,frameElement,frames,fullScreen,getComputedStyle,getDefaultComputedStyle,getMatchedCSSRules,getSelection,history,indexedDB,innerHeight,innerWidth,isFinite,isNaN,isSecureContext,localStorage,location,locationbar,matchMedia,menubar,moveBy,moveTo,mozInnerScreenX,mozInnerScreenY,mozPaintCount,mozRTCIceCandidate,mozRTCPeerConnection,mozRTCSessionDescription,msCredentials,msWriteProfilerMark,name,navigator,netscape,offscreenBuffering,onabort,onabsolutedeviceorientation,onafterprint,onanimationend,onanimationiteration,onanimationstart,onauxclick,onbeforeprint,onbeforeunload,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncompassneedscalibration,oncontextmenu,oncuechange,ondblclick,ondevicelight,ondevicemotion,ondeviceorientation,ondeviceorientationabsolute,ondeviceproximity,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,onhashchange,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onlanguagechange,onload,onloadeddata,onloadedmetadata,onloadstart,onmessage,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onmozfullscreenchange,onmozfullscreenerror,onmsgesturechange,onmsgesturedoubletap,onmsgestureend,onmsgesturehold,onmsgesturestart,onmsgesturetap,onmsinertiastart,onoffline,ononline,onpagehide,onpageshow,onpause,onplay,onplaying,onpointercancel,onpointerdown,onpointerenter,onpointerleave,onpointermove,onpointerout,onpointerover,onpointerup,onpopstate,onprogress,onratechange,onreadystatechange,onrejectionhandled,onreset,onresize,onscroll,onsearch,onseeked,onseeking,onselect,onshow,onstalled,onstorage,onsubmit,onsuspend,ontimeupdate,ontoggle,ontransitionend,onunhandledrejection,onunload,onuserproximity,onvolumechange,onwaiting,onwebkitanimationend,onwebkitanimationiteration,onwebkitanimationstart,onwebkitmouseforcechanged,onwebkitmouseforcedown,onwebkitmouseforceup,onwebkitmouseforcewillbegin,onwebkittransitionend,onwheel,open,openDatabase,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,parseFloat,parseInt,performance,personalbar,postMessage,print,prompt,releaseEvents,requestAnimationFrame,requestIdleCallback,resizeBy,resizeTo,screen,screenLeft,screenTop,screenX,screenY,scroll,scrollBy,scrollByLines,scrollByPages,scrollMaxX,scrollMaxY,scrollTo,scrollX,scrollY,scrollbars,self,sessionStorage,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sidebar,sizeToContent,speechSynthesis,status,statusbar,stop,styleMedia,toString,toolbar,top,undefined,unescape,uneval,updateCommands,webkitAudioContext,webkitAudioPannerNode,webkitCancelAnimationFrame,webkitCancelRequestAnimationFrame,webkitConvertPointFromNodeToPage,webkitConvertPointFromPageToNode,webkitIDBCursor,webkitIDBDatabase,webkitIDBFactory,webkitIDBIndex,webkitIDBKeyRange,webkitIDBObjectStore,webkitIDBRequest,webkitIDBTransaction,webkitIndexedDB,webkitMediaStream,webkitNotifications,webkitOfflineAudioContext,webkitRTCPeerConnection,webkitRequestAnimationFrame,webkitRequestFileSystem,webkitResolveLocalFileSystemURL,webkitSpeechGrammar,webkitSpeechGrammarList,webkitSpeechRecognition,webkitSpeechRecognitionError,webkitSpeechRecognitionEvent,webkitStorageInfo,webkitURL,window,length'.split(','),
  result, domObjects, historyPos = 0;
  function inspect(object, isHTML) {
      if(isHTML){
          createOutput(object, true);
          createHistory(object);
          return;
      }
    try {
        Function(object);
        result = eval('{'+object+'}');
        createOutput(result, false, object);
        createHistory(object);
    } catch(e){
        createError(e.message+e.stack?' '+e.stack:'');
        createHistory(object);
    }
    domObjects.input.value = '';
  }
  function createHistory(object) {
    var history;
    if(window.localStorage && window.JSON) {
      history = localStorage.getItem('history');
      if(history === null) {
        localStorage.setItem('history',JSON.stringify([object]));
      } else {
        history = JSON.parse(history);
        if(history[0] !== object && object.length) {
          history.unshift(object);
          localStorage.setItem('history',JSON.stringify(history));
        }
      }
    }
  }
  function getHistory(direction) {
    var historyItem, history;
    if(window.localStorage && window.JSON) {
      history = localStorage.getItem('history');
      if(history !== null) {
        history = JSON.parse(history);
        if(direction === 'down') {
          historyItem = history[historyPos-1];
          if(historyItem === domObjects.input.value && typeof history[historyPos-2] === 'string') {
            historyItem = history[historyPos-2];
            historyPos--;
          }
          if(typeof historyItem === 'string') {
            domObjects.input.value = historyItem;
            historyPos--;
          } else {
            domObjects.input.value = '';
          }
        } else if(direction === 'up') {
          historyItem = history[historyPos];
          if(historyItem === domObjects.input.value && typeof history[historyPos+1] === 'string') {
            historyItem = history[historyPos+1];
            historyPos++;
          }
          if(typeof historyItem === 'string') {
            domObjects.input.value = historyItem;
            historyPos++;
          }
        }
      }
    }
  }
  function getRealType(obj) {
    if((Array.isArray && Array.isArray(obj)) || (obj && typeof obj.length === 'number' && Object.prototype.toString.call(obj) === '[object Array]')) {
      return 'Array';
    }
    if((Number.isNaN && Number.isNaN(obj)) || (obj !== obj && typeof obj === 'number')) {
      return 'NaN';
    }
    if(null === obj) {
      return 'null';
    }
    return typeof obj;
  }
  function escapeHTML(str) {
    str = str + '';
    return str.replace(/[<>'"\\&]/gi,function(c){return'&#'+c.charCodeAt(0)+';';});
  }
  function isWindow(obj) {
    try {
      return obj.window === obj;
    } catch(e){
      return false;
    }
  }
  function isFunctionConstructor(obj) {
    try {
      return obj.constructor === obj;
    } catch(e){
      return false;
    }
  }
  function jsEscapeProperty(str) {
    str = str + '';
    return str.replace(/[\s']/gi, function(c){
      if(/\s/.test(c) && !/./.test(c)) {
        return '\\u'+('0000'+c.charCodeAt(0).toString(16)).slice(-4);
      } else if(c === "'") {
        return '\\u0027';
      } else {
        return c;
      }
    });
  }
  function jsEscape(str) {
    str = str + '';
    return str.replace(/[<>'"\s&\\]/gi, function(c){
        if(/\s/.test(c) && /./.test(c)) {
          return c;
        }
        return '\\u'+('0000'+c.charCodeAt(0).toString(16)).slice(-4);
    });
  }
  function generatePath(path) {
    var i, prop, generatedPath = '';
    path = path.split('.');
    for(i=0;i<path.length;i++) {
      prop = path[i];
      if(i == 0) {
        generatedPath = prop;
      } else if(/^[a-z$_][\w$]*$/i.test(prop)) {
        generatedPath += '.' + prop;
      } else {
        generatedPath += '['+jsEscapeProperty(prop)+']';
      }
    }
    return generatedPath;
  }
  function createEnumerator(obj, isRoot, name, path, parent) {
    var enumerator = document.createElement('div'), output = '', realType, prop, descriptor,
        ul = document.createElement('ul'), li = document.createElement('li'), anchor = document.createElement('a');
    realType = getRealType(obj);
    output += '<table class="propertyTable">';
    output += '<tr>';
    output += '<td valign="top" class="propertyName">'+escapeHTML(name)+'</td>';
    output += '<td valign="top" class="propertyValue '+escapeHTML(realType)+'">';
    try {
      output += '<code><pre>'+escapeHTML(obj)+'</pre></code>';
    } catch(e){}
    output += '</td>';
    output += '<td valign="top" class="propertyInfo">';
    output += '<div class="box '+escapeHTML(realType)+'">type:'+escapeHTML(realType)+'</div>';
    if(typeof obj === 'function') {
      output += '<div class="box arguments">arguments:'+escapeHTML(obj.length)+'</div>';
    } else if(obj && typeof obj.length !== 'undefined') {
      output += '<div class="box length">length:'+escapeHTML(obj.length)+'</div>';
    }
    if(Object.getOwnPropertyDescriptor && parent) {
      descriptor = Object.getOwnPropertyDescriptor(parent, name);
      if(descriptor) {
        output += '<div class="box"><table><tr><td>Writable</td><td>'+escapeHTML(descriptor.writable)+'</td></tr>';
        output += '<tr><td>Configurable</td><td>'+escapeHTML(descriptor.configurable)+'</td></tr>';
        output += '<tr><td>Enumerable</td><td>'+escapeHTML(descriptor.enumerable)+'</td></tr>';
        if(descriptor.set) {
          output += '<tr><td>Setter</td><td>'+escapeHTML(descriptor.set)+'</td></tr>';
        }
        if(descriptor.get) {
          output += '<tr><td>Getter</td><td>'+escapeHTML(descriptor.get)+'</td></tr>';
        }
        output += '</table></div>';
      }
    }
    if(isWindow(obj)) {
      output += '<div class="box">Is a window object</div>';
      output += '<div class="box"><input type="checkbox" onclick="" /><label>Show only interesting properties</label></div>';
    }
    if(isFunctionConstructor(obj)) {
      output += '<div class="box">Is a function constructor</div>';
    }
    output += '</td>';
    output += '</tr>';
    output += '</table>';
    enumerator.innerHTML = output;
    ul.className = 'enumerator';
    li.object = obj;
    li.className = isRoot ? 'on' : 'off';
    anchor.href = '#';
    anchor.onclick = function(){
      if(this.parentNode.className==='off'){
          if(!this.parentNode.enumerated){
            this.parentNode.enumerate();
          }
          this.parentNode.className='on';
          this.innerHTML='&#9660;';
        } else {
          this.parentNode.className='off';
          this.innerHTML='&#9654;';
        }
        location.hash = generatePath(path);
        return false;
    };
    anchor.innerHTML = isRoot ? '&#9660;' : '&#9654;';
    li.appendChild(anchor);
    li.enumerate = function(){
        var i, ul = document.createElement('ul'), li, div, propCheck = {}, props = [], checkProp = {};
        for(i in this.object) {
            try {
              props.push(i);
            } catch(e){}
        }
        for(i=-10;i<=0xff;i++) {
          props.push(i);
          if(i>-1) {
            props.push(String.fromCharCode(i));
          }
        }
        if(Object.keys) {
          try {
            props = props.concat(Object.keys(this.object));
          } catch(e){}
        }
        if(Object.getOwnPropertyNames) {
          try {
            props = props.concat(Object.getOwnPropertyNames(this.object));
          } catch(e){}
        }
        if(window.Symbol) {
          if(Array.prototype[Symbol.unscopables]) {
            props = props.concat(Object.keys(Array.prototype[Symbol.unscopables]));
          }
          if(Object.prototype[Symbol.unscopables]) {
            props = props.concat(Object.keys(Object.prototype[Symbol.unscopables]));
          }
          if(RegExp.prototype[Symbol.unscopables]) {
            props = props.concat(Object.keys(RegExp.prototype[Symbol.unscopables]));
          }
          if(Number.prototype[Symbol.unscopables]) {
            props = props.concat(Object.keys(Number.prototype[Symbol.unscopables]));
          }
          if(Boolean.prototype[Symbol.unscopables]) {
            props = props.concat(Object.keys(Boolean.prototype[Symbol.unscopables]));
          }
        }
        if(window.Enumerator) {
          var str = '', iObj;
      		try {
      			for (var i = new Enumerator(obj); !i.atEnd(); i.moveNext()){
      				try {
      					iObj = i.item();
      					str = (iObj.nodeName ? iObj.nodeName : iObj.tagName ? iObj.tagName : 'Unknown');
      					if(str != 'Unknown') {
      						props.push(str);
      					}
      				} catch(e) {}
      			}
      		} catch(e){}
        }
        for(i=0;i<props.length;i++) {
          if(checkProp['_check_'+props[i]]){
            continue;
          }
          try {
            if(typeof obj[props[i]] === 'undefined') {
              continue;
            }
          } catch(e){
            continue;
          }
          li = document.createElement('li');
          try {
            li.appendChild(createEnumerator(this.object[props[i]],false, props[i], path + '.' + props[i], this.object));
          } catch(e){}
          ul.appendChild(li);
          checkProp['_check_'+props[i]] = 1;
        }
        this.appendChild(ul);
        this.enumerated=true;
    };
    if(isRoot) {
      li.enumerate();
    }
    ul.appendChild(li);
    enumerator.appendChild(ul);
    return enumerator;
  }
  function createOutput(output, isHTML, name) {
    var div = document.createElement('div');
    if(isHTML) {
      div.innerHTML = output;
    } else {
      div.appendChild(createEnumerator(output, true, name, name));
    }
    div.className = 'output';
    domObjects.output.insertBefore(div, domObjects.output.firstChild);
  }
  function createError(msg) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(String(msg)));
    div.className = 'error';
    domObjects.output.insertBefore(div, domObjects.output.firstChild);
  }
  function setDomObjects(obj) {
      domObjects = obj;
      domObjects.input.onkeydown = function(e){
        var event = window.event ? window.event : e;
        if(event.keyCode === 38) {
          getHistory('up');
          if(event.preventDefault) {
            event.preventDefault();
          } else {
            event.returnValue = false;
          }
        } else if(event.keyCode === 40) {
          getHistory('down');
          if(event.preventDefault) {
            event.preventDefault();
          } else {
            event.returnValue = false;
          }
        } else if(event.keyCode === 13) {
          historyPos = 0;
          if(this.value.length) {
            if(event.ctrlKey) {
              inspector.inspect(this.value, true);
            } else {
              inspector.inspect(this.value);
            }
          }
          if(event.preventDefault) {
            event.preventDefault();
          } else {
            event.returnValue = false;
          }
        }
      };
  }
  return {
      inspect: inspect,
      setDomObjects: setDomObjects
  };
}();
(function(a,b){typeof define=="function"&&define.amd?define("json",["exports"],b):b(typeof exports=="object"&&exports||this.JSON||(this.JSON={}))})(this,function(a){var b={}.toString,c={}.hasOwnProperty,d,e,f;return e=typeof a.stringify=="function",f=typeof a.parse=="function",function(){var c='{"result":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',d,g,h;if(e){d=function(){return 1},d.toJSON=d;try{switch(!1){case a.stringify(0)==="0":case a.stringify(new 0..constructor)==="0":case a.stringify(new"".constructor)=='""':case a.stringify(b)===void 0:case a.stringify(void 0)===void 0:case a.stringify()===void 0:case a.stringify(d)==="1":case a.stringify([d])=="[1]":case a.stringify([void 0])=="[null]":case a.stringify(null)=="null":case a.stringify([void 0,b,null])=="[null,null,null]":case a.stringify({result:[d,true,false,null,"\0\b\n\f\r	"]})==c:case a.stringify(null,d)==="1":case a.stringify([1,2],null,1)=="[\n 1,\n 2\n]":case(d=new Date(-864e13)).getUTCFullYear()!=-271821||a.stringify(d)=='"-271821-04-20T00:00:00.000Z"':case(d=new Date(864e13)).getUTCFullYear()!=275760||a.stringify(d)=='"+275760-09-13T00:00:00.000Z"':e=!1}}catch(i){e=!1}}if(f)try{if(a.parse("0")===0&&!a.parse(!1)){h=a.parse(c);if(f=h.result.length==5&&h.result[0]==1){try{f=!a.parse('"	"')}catch(i){}if(f)try{f=a.parse("+1")!=1&&a.parse("01")!=1}catch(i){}}}}catch(i){f=!1}}(),typeof c!="function"&&(c=function(){var a,c={},d=c.constructor;return(c.__proto__=null,c.__proto__={toString:1},c).toString!=b?a=function e(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:a=function f(a){var b=(this.constructor||d).prototype;return a in this&&!(a in b&&this[a]===b[a])},a}()),d=function(){function g(){this.valueOf=0}var a,d,e,f=0;g.prototype.valueOf=0,a=new g;for(d in a)c.call(a,d)&&(f+=1);return a=null,f?f==2?e=function(d,e){var f={},g=b.call(d)=="[object Function]",h;for(h in d)(!g||h!="prototype")&&!c.call(f,h)&&(f[h]=1)&&c.call(d,h)&&e(h)}:e=function(d,e){var f=b.call(d)=="[object Function]",g,h;for(g in d)(!f||g!="prototype")&&c.call(d,g)&&!(h=g==="constructor")&&e(g);(h||c.call(d,"constructor"))&&e("constructor")}:(a=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],e=function(e,f){var g=b.call(e)=="[object Function]",h,i;for(h in e)(!g||h!="prototype")&&c.call(e,h)&&f(h);for(i=a.length;i--;)h=a[i],c.call(e,h)&&f(h)}),e}(),e||(a.stringify=function(){function e(a,b){return b="000000"+(b||0),b.slice(b.length-a)}function f(b){var c='"',d=0,f;for(;f=b.charAt(d);d+=1)c+='\\"\b\f\n\r	'.indexOf(f)>-1?a[f]:f<" "?"\\u00"+e(2,f.charCodeAt(0).toString(16)):f;return c+'"'}function g(a,h,i,j,k,l,m){var n=h[a],o,p,q,r,s,t,u,v;typeof n=="object"&&n&&(b.call(n)=="[object Date]"&&!c.call(n,"toJSON")?n>-1/0&&n<1/0?(p=n.getUTCFullYear(),n=(p<=0||p>=1e4?(p<0?"-":"+")+e(6,p<0?-p:p):e(4,p))+"-"+e(2,n.getUTCMonth()+1)+"-"+e(2,n.getUTCDate())+"T"+e(2,n.getUTCHours())+":"+e(2,n.getUTCMinutes())+":"+e(2,n.getUTCSeconds())+"."+e(3,n.getUTCMilliseconds())+"Z"):n=null:typeof n.toJSON=="function"&&(n=n.toJSON(a))),i&&(n=i.call(h,a,n));if(n===null)return"null";o=b.call(n);switch(o){case"[object Boolean]":return""+n;case"[object Number]":return n>-1/0&&n<1/0?""+n:"null";case"[object String]":return f(n)}if(typeof n=="object"){for(t=m.length;t--;)if(m[t]==n)throw TypeError("Cyclic structures cannot be serialized.");m.push(n),q=[],u=l,l+=k;if(o=="[object Array]"){for(s=0,t=n.length;s<t;v||(v=!0),s++)r=g(s,n,i,j,k,l,m),q.push(r===void 0?"null":r);return v?k?"[\n"+l+q.join(",\n"+l)+"\n"+u+"]":"["+q.join(",")+"]":"[]"}return d(j||n,function(a){var b=g(a,n,i,j,k,l,m);b!==void 0&&q.push(f(a)+":"+(k?" ":"")+b),v||(v=!0)}),v?k?"{\n"+l+q.join(",\n"+l)+"\n"+u+"}":"{"+q.join(",")+"}":"{}"}}function h(a,c,d){var e="",f,h,i,j;if(typeof c=="function"||typeof c=="object"&&c)if(b.call(c)=="[object Function]")f=c;else if(b.call(c)=="[object Array]"){h={};for(i=c.length;i--;)j=c[i],j&&(b.call(j)=="[object String]"||b.call(j)=="[object Number]")&&(h[j]=1)}if(d!=null&&d!=="")if(b.call(d)=="[object Number]"){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;)e+=" "}else b.call(d)=="[object String]"&&(e=d.length<=10?d:d.slice(0,10));return g("$",{$:a},f,h,e,"",[])}var a={"\\":"\\\\",'"':'\\"',"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"};return h}()),f||(a.parse=function(){function e(a){this.source=a,this.index=0}function f(){for(var b=this.source,d=this.source.length,e,f,g,h,i;this.index<d;){e=b.charAt(this.index);switch(e){case"	":case"\r":case"\n":case" ":this.index+=1;break;case"{":case"}":case"[":case"]":case":":case",":return this.index+=1,e;case'"':f="@",this.index+=1;while(this.index<d){e=b.charAt(this.index);if(e<" ")throw SyntaxError("Unescaped control character in string.");if(e=="\\"){this.index+=1,e=b.charAt(this.index);if('\\"/btnfr'.indexOf(e)>-1)f+=a[e],this.index+=1;else{if(e!="u")throw SyntaxError("Invalid escape sequence in string.");g=this.index+=1;for(h=this.index+4;this.index<h;this.index+=1){e=b.charAt(this.index);if(!(e>="0"&&e<="9"||e>="a"&&e<="f"||e>="A"&&e<="F"))throw SyntaxError("Invalid Unicode escape sequence in string.")}f+=c("0x"+b.slice(g,this.index))}}else{if(e=='"')break;f+=e,this.index+=1}}if(b.charAt(this.index)=='"')return this.index+=1,f;throw SyntaxError("Unterminated string.");default:g=this.index,e=="-"&&(i=!0,e=b.charAt(this.index+=1));if(e>="0"&&e<="9"){if(e=="0"&&(e=b.charAt(this.index+1),e>="0"&&e<="9"))throw SyntaxError("Illegal octal literal.");i=!1;for(;this.index<d&&(e=b.charAt(this.index),e>="0"&&e<="9");this.index+=1);if(b.charAt(this.index)=="."){h=this.index+=1;for(;h<d&&(e=b.charAt(h),e>="0"&&e<="9");h+=1);if(h==this.index)throw SyntaxError("Illegal trailing decimal.");this.index=h}e=b.charAt(this.index);if(e=="e"||e=="E"){e=b.charAt(this.index+=1);if(e=="+"||e=="-")this.index+=1;for(h=this.index;h<d&&(e=b.charAt(h),e>="0"&&e<="9");h+=1);if(h==this.index)throw SyntaxError("Illegal empty exponent.");this.index=h}return+b.slice(g,this.index)}if(i)throw SyntaxError("Unexpected `-`.");if(e=="t"&&b.slice(this.index,this.index+4)=="true")return this.index+=4,!0;if(e=="f"&&b.slice(this.index,this.index+5)=="false")return this.index+=5,!1;if(e=="n"&&b.slice(this.index,this.index+4)=="null")return this.index+=4,null;throw SyntaxError("Unrecognized token.")}}return"$"}function g(a){var b,c,d;if(a=="$")throw SyntaxError("Unexpected end-of-file.");if(typeof a=="string"){if(a.charAt(0)=="@")return a.slice(1);switch(a){case"[":b=[];for(;;c||(c=!0)){a=this.lex();if(a=="]")break;if(c){if(a!=",")throw SyntaxError("A comma (`,`) must separate the previous array element from the next.");a=this.lex();if(a=="]")throw SyntaxError("Unexpected trailing `,` in array literal.")}if(a==",")throw SyntaxError("Unexpected `,` in array literal.");b.push(this.get(a))}return b;case"{":b={};for(;;c||(c=!0)){a=this.lex();if(a=="}")break;if(c){if(a!=",")throw SyntaxError("A comma (`,`) must separate the previous object member from the next.");a=this.lex();if(a=="}")throw SyntaxError("Unexpected trailing `,`. in object literal.")}if(a==",")throw SyntaxError("Unexpected `,` in object literal.");if(typeof a!="string"||a.charAt(0)!="@")throw SyntaxError("Object property names must be double-quoted strings.");if(this.lex()!=":")throw SyntaxError("A single colon (`:`) must separate each object property name from the value.");b[a.slice(1)]=this.get(this.lex())}return b}throw SyntaxError("Expected `[` or `{`.")}return a}function h(a,c,e){var f=a[c],g,i;if(typeof f=="object"&&f)if(b.call(f)=="[object Array]")for(g=f.length;g--;)i=h(f,g,e),i===void 0?f.splice(g,1):f[g]=i;else d(f,function(a){var b=h(f,a,e);b===void 0?delete f[a]:f[a]=b});return e.call(a,c,f)}function i(a,c){var d=new e(""+a),f=d.get(d.lex());if(d.lex()!="$")throw SyntaxError("Expected end-of-file.");return c&&b.call(c)=="[object Function]"?h({$:f},"$",c):f}var a={"\\":"\\",'"':'"',"/":"/",b:"\b",t:"	",n:"\n",f:"\f",r:"\r"},c="".constructor.fromCharCode;return e.prototype.lex=f,e.prototype.get=g,i}()),a});
