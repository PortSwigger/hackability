window.Inspector = function(){
  var knownWindowProps = 'Inspector,WritableStreamDefaultWriter,WritableStreamDefaultController,MediaKeyStatusMapIterator,MSDSHEvent,MSDCCEvent,HeadersIterator,MediaRecorderErrorEvent,AbortSignal,AbortController,RTCRtpTransceiver,USBIsochronousOutTransferResult,visualViewport,onbeforeinstallprompt,onappinstalled,VisualViewport,USBOutTransferResult,USBIsochronousInTransferResult,USBIsochronousOutTransferPacket,USBIsochronousInTransferResult,USBIsochronousInTransferPacket,USBInterface,USBInTransferResult,USBEndpoint,USBDevice,USBConnectionEvent,USBConfiguration,USBAlternateInterface,USB,ResizeObserverEntry,ResizeObserver,PerformanceServerTiming,NetworkInformation,onmspointercancel,onmspointerup,onmspointerover,onmspointerout,onmspointermove,onmspointerleave,onmspointerenter,onmspointerdown,onfocusout,onfocusin,msSetImmediate,msRequestAnimationFrame,msMatchMedia,msIsStaticHTML,msIndexedDB,msCrypto,msClearImmediate,msCancelRequestAnimationFrame,msAnimationStartTime,animationStartTime,showModelessDialog,showHelp,navigate,item,execScript,detachEvent,createPopup,attachEvent,XDomainRequest,GetObject,AnonymousContent,controllers,watch,unwatch,toSource,toLocaleString,isPrototypeOf,constructor,__proto__,__lookupSetter__,__lookupGetter__,__defineSetter__,__defineGetter__,valueOf,propertyIsEnumerable,hasOwnProperty,TEMPORARY,PERSISTENT,addEventListener,removeEventListener,dispatchEvent,orientation,onorientationchange,ontouchcancel,ontouchend,ontouchmove,ontouchstart,BluetoothUUID,BluetoothRemoteGATTService,BluetoothRemoteGATTServer,BluetoothRemoteGATTDescriptor,BluetoothRemoteGATTCharacteristic,BluetoothDevice,BluetoothCharacteristicProperties,Bluetooth,NavigationPreloadManager,PresentationReceiver,PresentationConnectionList,PaymentResponse,PaymentRequestUpdateEvent,PaymentRequest,PaymentAddress,PhotoCapabilities,MediaSettingsRange,ImageCapture,BudgetService,RTCRtpContributingSource,WritableStream,PerformancePaintTiming,onmessageerror,clipboardData,maxConnectionsPerServer,onhelp,onanimationcancel,toStaticHTML,VRStageParameters,AnimationTimeline,AnimationEffectReadOnly,CSSPseudoElement,AnimationEffectTimingReadOnly,KeyframeEffectReadOnly,KeyframeEffect,CSSTransition,CSSAnimation,AnimationPlaybackEvent,AnimationEffectTiming,GamepadAxisMoveEvent,GamepadButtonEvent,DocumentTimeline,WebKitMediaKeyNeededEvent,OverconstrainedError,OverconstrainedErrorEvent,onwebkitwillrevealbottom,onwebkitwillrevealleft,onwebkitwillrevealright,onwebkitwillrevealtop,origin,Atomics,SharedArrayBuffer,StaticRange,safari,0,1,2,3,4,5,6,7,8,9,10,11,GamepadHapticActuator,GamepadPose,VRDisplay,VRDisplayCapabilities,VRDisplayEvent,VREyeParameters,VRFieldOfView,VRFrameData,VRPose,onvrdisplayactivate,onvrdisplayblur,onvrdisplayconnect,onvrdisplaydeactivate,onvrdisplaydisconnect,onvrdisplayfocus,onvrdisplaypointerrestricted,onvrdisplaypointerunrestricted,onvrdisplaypresentchange,ondragexit,onloadend,onselectstart,ontransitioncancel,ontransitionrun,ontransitionstart,RTCDTMFSender,FileSystem,FileSystemEntry,FileSystemFileEntry,FileSystemDirectoryReader,FileSystemDirectoryEntry,WebGL2RenderingContext,RemotePlayback,WebGLVertexArrayObject,RTCDataChannel,ConstantSourceNode,BaseAudioContext,AudioScheduledSourceNode,WebAssembly,TaskAttributionTiming,PerformanceLongTaskTiming,ongotpointercapture,onlostpointercapture,ANGLE_instanced_arrays,ActiveXObject,AesGcmEncryptResult,AnalyserNode,Animation,AnimationEvent,AppBannerPromptResult,ApplePaySession,ApplicationCache,ApplicationCacheErrorEvent,Array,ArrayBuffer,Attr,Audio,AudioBuffer,AudioBufferSourceNode,AudioContext,AudioDestinationNode,AudioListener,AudioNode,AudioParam,AudioProcessingEvent,AudioStreamTrack,AudioTrack,AudioTrackList,BarProp,BatteryManager,BeforeInstallPromptEvent,BeforeLoadEvent,BeforeUnloadEvent,BhxBrowser,BhxEvent,BhxFilteredEvent,BhxWebNavigation,BhxWebRequest,BiquadFilterNode,Blob,BlobEvent,BookmarkCollection,Boolean,BroadcastChannel,ByteLengthQueuingStrategy,CDATASection,CSS,CSS2Properties,CSSCharsetRule,CSSConditionRule,CSSCounterStyleRule,CSSFontFaceRule,CSSFontFeatureValuesRule,CSSGroupingRule,CSSImportRule,CSSKeyframeRule,CSSKeyframesRule,CSSMediaRule,CSSMozDocumentRule,CSSNameSpaceRule,CSSNamespaceRule,CSSPageRule,CSSPrimitiveValue,CSSRule,CSSRuleList,CSSStyleDeclaration,CSSStyleRule,CSSStyleSheet,CSSSupportsRule,CSSValue,CSSValueList,CSSViewportRule,Cache,CacheStorage,CanvasCaptureMediaStream,CanvasCaptureMediaStreamTrack,CanvasGradient,CanvasPattern,CanvasPixelArray,CanvasRenderingContext2D,CaretPosition,ChannelMergerNode,ChannelSplitterNode,CharacterData,ClientRect,ClientRectList,ClipboardEvent,CloseEvent,CollectGarbage,CommandEvent,Comment,CompositionEvent,Console,ControlRangeCollection,Controllers,ConvolverNode,Coordinates,CountQueuingStrategy,Counter,Credential,CredentialsContainer,Crypto,CryptoKey,CryptoKeyPair,CryptoOperation,CustomElementRegistry,CustomEvent,DOMCursor,DOMError,DOMException,DOMImplementation,DOMMatrix,DOMMatrixReadOnly,DOMParser,DOMPoint,DOMPointReadOnly,DOMQuad,DOMRect,DOMRectList,DOMRectReadOnly,DOMRequest,DOMSettableTokenList,DOMStringList,DOMStringMap,DOMTokenList,DOMTransactionEvent,DataChannel,DataCue,DataTransfer,DataTransferItem,DataTransferItemList,DataView,Database,Date,Debug,DelayNode,DesktopNotification,DesktopNotificationCenter,DeviceAcceleration,DeviceLightEvent,DeviceMotionEvent,DeviceOrientationEvent,DeviceProximityEvent,DeviceRotationRate,Directory,Document,DocumentFragment,DocumentType,DragEvent,DynamicsCompressorNode,EXT_frag_depth,EXT_texture_filter_anisotropic,Element,Enumerator,Error,ErrorEvent,EvalError,Event,EventException,EventSource,EventTarget,External,FederatedCredential,File,FileError,FileList,FileReader,Float32Array,Float64Array,FocusEvent,FontFace,FontFaceSet,FontFaceSetLoadEvent,FormData,Function,GainNode,Gamepad,GamepadButton,GamepadEvent,Geolocation,GestureEvent,HTMLAllCollection,HTMLAnchorElement,HTMLAppletElement,HTMLAreaElement,HTMLAreasCollection,HTMLAttachmentElement,HTMLAudioElement,HTMLBGSoundElement,HTMLBRElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBlockElement,HTMLBodyElement,HTMLButtonElement,HTMLCanvasElement,HTMLCollection,HTMLContentElement,HTMLDDElement,HTMLDListElement,HTMLDTElement,HTMLDataElement,HTMLDataListElement,HTMLDetailsElement,HTMLDialogElement,HTMLDirectoryElement,HTMLDivElement,HTMLDocument,HTMLElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormControlsCollection,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHRElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLIsIndexElement,HTMLKeygenElement,HTMLLIElement,HTMLLabelElement,HTMLLegendElement,HTMLLinkElement,HTMLMapElement,HTMLMarqueeElement,HTMLMediaElement,HTMLMenuElement,HTMLMenuItemElement,HTMLMetaElement,HTMLMeterElement,HTMLModElement,HTMLNextIdElement,HTMLOListElement,HTMLObjectElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOptionsCollection,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPhraseElement,HTMLPictureElement,HTMLPreElement,HTMLProgressElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLShadowElement,HTMLSlotElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableColElement,HTMLTableDataCellElement,HTMLTableElement,HTMLTableHeaderCellElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTemplateElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HashChangeEvent,Headers,History,IDBCursor,IDBCursorWithValue,IDBDatabase,IDBFactory,IDBFileHandle,IDBFileRequest,IDBIndex,IDBKeyRange,IDBMutableFile,IDBObjectStore,IDBOpenDBRequest,IDBRequest,IDBTransaction,IDBVersionChangeEvent,IIRFilterNode,IdleDeadline,Image,ImageBitmap,ImageBitmapRenderingContext,ImageData,Infinity,InputDeviceCapabilities,InputEvent,InstallTrigger,Int16Array,Int32Array,Int8Array,InternalError,IntersectionObserver,IntersectionObserverEntry,Intl,Iterator,JSON,Key,KeyEvent,KeyOperation,KeyPair,KeyboardEvent,LocalMediaStream,Location,MIDIAccess,MIDIConnectionEvent,MIDIInput,MIDIInputMap,MIDIMessageEvent,MIDIOutput,MIDIOutputMap,MIDIPort,MSAssertion,MSBehaviorUrnsCollection,MSBlobBuilder,MSCSSMatrix,MSCSSProperties,MSCSSRuleList,MSCompatibleInfo,MSCompatibleInfoCollection,MSCredentials,MSCurrentStyleCSSProperties,MSEventObj,MSFIDOCredentialAssertion,MSFIDOSignature,MSFIDOSignatureAssertion,MSGesture,MSGestureEvent,MSGraphicsTrust,MSInputMethodContext,MSManipulationEvent,MSMediaKeyError,MSMediaKeyMessageEvent,MSMediaKeyNeededEvent,MSMediaKeySession,MSMediaKeys,MSMimeTypesCollection,MSPluginsCollection,MSPointerEvent,MSRangeCollection,MSSiteModeEvent,MSStream,MSStreamReader,MSStyleCSSProperties,Map,Math,MediaController,MediaDeviceInfo,MediaDevices,MediaElementAudioSourceNode,MediaEncryptedEvent,MediaError,MediaKeyError,MediaKeyEvent,MediaKeyMessageEvent,MediaKeyNeededEvent,MediaKeySession,MediaKeyStatusMap,MediaKeySystemAccess,MediaKeys,MediaList,MediaQueryList,MediaQueryListEvent,MediaRecorder,MediaSource,MediaStream,MediaStreamAudioDestinationNode,MediaStreamAudioSourceNode,MediaStreamError,MediaStreamErrorEvent,MediaStreamEvent,MediaStreamTrack,MediaStreamTrackEvent,MessageChannel,MessageEvent,MessagePort,MimeType,MimeTypeArray,MouseEvent,MouseScrollEvent,MouseWheelEvent,MutationEvent,MutationObserver,MutationRecord,NaN,NamedNodeMap,Navigator,Node,NodeFilter,NodeIterator,NodeList,Notification,NotifyPaintEvent,Number,OES_element_index_uint,OES_standard_derivatives,OES_texture_float,OES_texture_float_linear,OES_texture_half_float,OES_texture_half_float_linear,Object,OfflineAudioCompletionEvent,OfflineAudioContext,OfflineResourceList,Option,OscillatorNode,OverflowEvent,PageTransitionEvent,PaintRequest,PaintRequestList,PannerNode,PasswordCredential,Path2D,Performance,PerformanceEntry,PerformanceMark,PerformanceMeasure,PerformanceNavigation,PerformanceNavigationTiming,PerformanceObserver,PerformanceObserverEntryList,PerformanceResourceTiming,PerformanceTiming,PeriodicWave,PermissionStatus,Permissions,Plugin,PluginArray,PointerEvent,PopStateEvent,PopupBlockedEvent,Position,PositionError,Presentation,PresentationAvailability,PresentationConnection,PresentationConnectionAvailableEvent,PresentationConnectionCloseEvent,PresentationRequest,ProcessingInstruction,ProgressEvent,Promise,PromiseRejectionEvent,Proxy,PushManager,PushSubscription,PushSubscriptionOptions,RGBColor,RTCCertificate,RTCDTMFToneChangeEvent,RTCDataChannelEvent,RTCDtlsTransport,RTCDtlsTransportStateChangedEvent,RTCDtmfSender,RTCIceCandidate,RTCIceCandidatePairChangedEvent,RTCIceGatherer,RTCIceGathererEvent,RTCIceTransport,RTCIceTransportStateChangedEvent,RTCPeerConnection,RTCPeerConnectionIceEvent,RTCRtpReceiver,RTCRtpSender,RTCSessionDescription,RTCSrtpSdesTransport,RTCSsrcConflictEvent,RTCStatsProvider,RTCStatsReport,RTCTrackEvent,RadioNodeList,Range,RangeError,RangeException,ReadableStream,ReadableStreamReader,RecordErrorEvent,Rect,ReferenceError,Reflect,RegExp,Request,Response,SQLError,SQLException,SQLResultSet,SQLResultSetRowList,SQLTransaction,SVGAElement,SVGAltGlyphDefElement,SVGAltGlyphElement,SVGAltGlyphItemElement,SVGAngle,SVGAnimateColorElement,SVGAnimateElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGAnimationElement,SVGCircleElement,SVGClipPathElement,SVGColor,SVGComponentTransferFunctionElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGDiscardElement,SVGDocument,SVGElement,SVGElementInstance,SVGElementInstanceList,SVGEllipseElement,SVGException,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEDropShadowElement,SVGFEFloodElement,SVGFEFuncAElement,SVGFEFuncBElement,SVGFEFuncGElement,SVGFEFuncRElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGFilterElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGeometryElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGGraphicsElement,SVGHKernElement,SVGImageElement,SVGLength,SVGLengthList,SVGLineElement,SVGLinearGradientElement,SVGMPathElement,SVGMarkerElement,SVGMaskElement,SVGMatrix,SVGMetadataElement,SVGMissingGlyphElement,SVGNumber,SVGNumberList,SVGPaint,SVGPathElement,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegList,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,SVGPatternElement,SVGPoint,SVGPointList,SVGPolygonElement,SVGPolylineElement,SVGPreserveAspectRatio,SVGRadialGradientElement,SVGRect,SVGRectElement,SVGRenderingIntent,SVGSVGElement,SVGScriptElement,SVGSetElement,SVGStopElement,SVGStringList,SVGStyleElement,SVGSwitchElement,SVGSymbolElement,SVGTRefElement,SVGTSpanElement,SVGTextContentElement,SVGTextElement,SVGTextPathElement,SVGTextPositioningElement,SVGTitleElement,SVGTransform,SVGTransformList,SVGUnitTypes,SVGUseElement,SVGVKernElement,SVGViewElement,SVGViewSpec,SVGZoomAndPan,SVGZoomEvent,Screen,ScreenOrientation,ScriptEngine,ScriptEngineBuildVersion,ScriptEngineMajorVersion,ScriptEngineMinorVersion,ScriptProcessorNode,ScrollAreaEvent,SecurityPolicyViolationEvent,Selection,ServiceWorker,ServiceWorkerContainer,ServiceWorkerMessageEvent,ServiceWorkerRegistration,Set,ShadowRoot,SharedWorker,SimpleGestureEvent,SiteBoundCredential,SourceBuffer,SourceBufferList,SpeechSynthesis,SpeechSynthesisErrorEvent,SpeechSynthesisEvent,SpeechSynthesisUtterance,SpeechSynthesisVoice,StereoPannerNode,StopIteration,Storage,StorageEvent,StorageManager,String,StyleMedia,StyleSheet,StyleSheetList,StyleSheetPageList,SubtleCrypto,Symbol,SyncManager,SyntaxError,Text,TextDecoder,TextEncoder,TextEvent,TextMetrics,TextRange,TextRangeCollection,TextTrack,TextTrackCue,TextTrackCueList,TextTrackList,TimeEvent,TimeRanges,Touch,TouchEvent,TouchList,TrackEvent,TransitionEvent,TreeWalker,TypeError,UIEvent,URIError,URL,URLSearchParams,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,UserMessageHandler,UserMessageHandlersNamespace,UserProximityEvent,VBArray,VTTCue,VTTRegion,ValidityState,VideoPlaybackQuality,VideoStreamTrack,VideoTrack,VideoTrackList,WEBGL_compressed_texture_s3tc,WEBGL_debug_renderer_info,WEBGL_depth_texture,WaveShaperNode,WeakMap,WeakSet,WebGLActiveInfo,WebGLBuffer,WebGLContextEvent,WebGLFramebuffer,WebGLObject,WebGLProgram,WebGLQuery,WebGLRenderbuffer,WebGLRenderingContext,WebGLSampler,WebGLShader,WebGLShaderPrecisionFormat,WebGLSync,WebGLTexture,WebGLTransformFeedback,WebGLUniformLocation,WebKitAnimationEvent,WebKitCSSFilterValue,WebKitCSSMatrix,WebKitCSSRegionRule,WebKitCSSTransformValue,WebKitDataCue,WebKitDirectoryEntry,WebKitDirectoryReader,WebKitEntry,WebKitFileEntry,WebKitFileSystem,WebKitMediaKeyError,WebKitMediaKeyMessageEvent,WebKitMediaKeySession,WebKitMediaKeys,WebKitMutationObserver,WebKitNamespace,WebKitPlaybackTargetAvailabilityEvent,WebKitPoint,WebKitTransitionEvent,WebSocket,WheelEvent,Window,Worker,XMLDocument,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestProgressEvent,XMLHttpRequestUpload,XMLSerializer,XMLStylesheetProcessingInstruction,XPathEvaluator,XPathException,XPathExpression,XPathNSResolver,XPathResult,XSLTProcessor,alert,applicationCache,atob,blur,btoa,caches,cancelAnimationFrame,cancelIdleCallback,captureEvents,chrome,clearImmediate,clearInterval,clearTimeout,clientInformation,close,closed,confirm,console,content,createImageBitmap,crypto,customElements,decodeURI,decodeURIComponent,defaultStatus,defaultstatus,devicePixelRatio,doNotTrack,document,dump,encodeURI,encodeURIComponent,escape,eval,event,external,fetch,find,focus,frameElement,frames,fullScreen,getComputedStyle,getDefaultComputedStyle,getMatchedCSSRules,getSelection,history,indexedDB,innerHeight,innerWidth,isFinite,isNaN,isSecureContext,localStorage,location,locationbar,matchMedia,menubar,moveBy,moveTo,mozInnerScreenX,mozInnerScreenY,mozPaintCount,mozRTCIceCandidate,mozRTCPeerConnection,mozRTCSessionDescription,msCredentials,msWriteProfilerMark,name,navigator,netscape,offscreenBuffering,onabort,onabsolutedeviceorientation,onafterprint,onanimationend,onanimationiteration,onanimationstart,onauxclick,onbeforeprint,onbeforeunload,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncompassneedscalibration,oncontextmenu,oncuechange,ondblclick,ondevicelight,ondevicemotion,ondeviceorientation,ondeviceorientationabsolute,ondeviceproximity,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,onhashchange,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onlanguagechange,onload,onloadeddata,onloadedmetadata,onloadstart,onmessage,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onmozfullscreenchange,onmozfullscreenerror,onmsgesturechange,onmsgesturedoubletap,onmsgestureend,onmsgesturehold,onmsgesturestart,onmsgesturetap,onmsinertiastart,onoffline,ononline,onpagehide,onpageshow,onpause,onplay,onplaying,onpointercancel,onpointerdown,onpointerenter,onpointerleave,onpointermove,onpointerout,onpointerover,onpointerup,onpopstate,onprogress,onratechange,onreadystatechange,onrejectionhandled,onreset,onresize,onscroll,onsearch,onseeked,onseeking,onselect,onshow,onstalled,onstorage,onsubmit,onsuspend,ontimeupdate,ontoggle,ontransitionend,onunhandledrejection,onunload,onuserproximity,onvolumechange,onwaiting,onwebkitanimationend,onwebkitanimationiteration,onwebkitanimationstart,onwebkitmouseforcechanged,onwebkitmouseforcedown,onwebkitmouseforceup,onwebkitmouseforcewillbegin,onwebkittransitionend,onwheel,open,openDatabase,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,parseFloat,parseInt,performance,personalbar,postMessage,print,prompt,releaseEvents,requestAnimationFrame,requestIdleCallback,resizeBy,resizeTo,screen,screenLeft,screenTop,screenX,screenY,scroll,scrollBy,scrollByLines,scrollByPages,scrollMaxX,scrollMaxY,scrollTo,scrollX,scrollY,scrollbars,self,sessionStorage,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sidebar,sizeToContent,speechSynthesis,status,statusbar,stop,styleMedia,toString,toolbar,top,undefined,unescape,uneval,updateCommands,webkitAudioContext,webkitAudioPannerNode,webkitCancelAnimationFrame,webkitCancelRequestAnimationFrame,webkitConvertPointFromNodeToPage,webkitConvertPointFromPageToNode,webkitIDBCursor,webkitIDBDatabase,webkitIDBFactory,webkitIDBIndex,webkitIDBKeyRange,webkitIDBObjectStore,webkitIDBRequest,webkitIDBTransaction,webkitIndexedDB,webkitMediaStream,webkitNotifications,webkitOfflineAudioContext,webkitRTCPeerConnection,webkitRequestAnimationFrame,webkitRequestFileSystem,webkitResolveLocalFileSystemURL,webkitSpeechGrammar,webkitSpeechGrammarList,webkitSpeechRecognition,webkitSpeechRecognitionError,webkitSpeechRecognitionEvent,webkitStorageInfo,webkitURL,window,length'.split(',').sort(),
  jsBuiltInProps = ['isAssignableFrom', 'isInterface', 'isArray', 'isPrimitive', 'isAnnotation', 'isSynthetic', 'getName', 'getClassLoader', 'getTypeParameters', 'getSuperclass', 'getGenericSuperclass', 'getPackage', 'getInterfaces', 'getGenericInterfaces', 'getComponentType', 'getModifiers', 'getSigners', 'getEnclosingMethod', 'getEnclosingConstructor', 'getDeclaringClass', 'getEnclosingClass', 'getSimpleName', 'getCanonicalName', 'isAnonymousClass', 'isLocalClass', 'isMemberClass', 'getClasses', 'getFields', 'getMethods', 'getConstructors', 'getField', 'getMethod', 'getConstructor', 'getDeclaredClasses', 'getDeclaredFields', 'getDeclaredMethods', 'getDeclaredConstructors', 'getDeclaredField', 'getDeclaredMethod', 'getDeclaredConstructor', 'getResourceAsStream', 'getResource','getProtectionDomain','desiredAssertionStatus','isEnum','getEnumConstants','cast','asSubclass','getAnnotation','isAnnotationPresent','getAnnotations','getDeclaredAnnotations','isArray','isInterface','isAssignableFrom','isInstance','newInstance','forName','wait','notifyAll','notify','hashCode','equals','getClass','Script','isGenerator','Proxy','WeakMap','oSetImmediate','webkitSetImmediate','mozSetImmediate','msSetImmediate','setImmediate','oRequestAnimationFrame','requestAnimationFrame','msRequestAnimationFrame','mozRequestAnimationFrame','webkitRequestAnimationFrame','addNamespace','appendChild','attribute','attributes','child','childIndex','children','contains','copy','elements','hasOwnProperty','hasComplexContent','hasSimpleContent','isScopeNamespaces','insertChildAfter','insertChildBefore','length','localName','name','namespace','namespaceDeclarations','nodeKind','normalize','parent','processingInstructions','prependChild','propertyIsEnumerable','removeNamespaces','replace','setChildren','setLocalName','setName','setNamespace','text','toString','toXMLString','valueOf','uri','localName','prefix','ignoreComments','ignoreProcessingInstructions','ignoreWhiteSpace','prettyIndent','prettyPrinting','isXMLName','function','enumerable','configurable','set','get','writable','$','$&','$\'','$*','$+','$1','$2','$3','$4','$5','$6','$7','$8','$9','$`','APPLICATION','ATOMICSELECTION','AddChannel','AddDesktopComponent','AddFavorite','Anchor','Applet','Area','Array','Attr','AutoCompleteSaveForm','AutoScan','BGCOLOR','BaseHref','BehaviorUrnsCollection','BookmarkCollection','Boolean','Button','CSSCurrentStyleDeclaration','CSSRuleList','CSSRuleStyleDeclaration','CSSStyleDeclaration','CSSStyleRule','CSSStyleSheet','Checkbox','ChooseColorDlg','CompatibleInfo','CompatibleInfoCollection','ControlRangeCollection','Count','DOMImplementation','DataTransfer','Date','Dialog','E','Element','Event','FieldDelim','FileUpload','Form','Frame','Function','GetObject','HTCElementBehaviorDefaults','HTMLAnchorElement','HTMLAreaElement','HTMLAreasCollection','HTMLBGSoundElement','HTMLBRElement','HTMLBaseElement','HTMLBaseFontElement','HTMLBlockElement','HTMLBodyElement','HTMLButtonElement','HTMLCollection','HTMLCommentElement','HTMLDDElement','HTMLDListElement','HTMLDTElement','HTMLDivElement','HTMLDocument','HTMLEmbedElement','HTMLFieldSetElement','HTMLFontElement','HTMLFormElement','HTMLFrameElement','HTMLFrameSetElement','HTMLGenericElement','HTMLHRElement','HTMLHeadElement','HTMLHeadingElement',1,'HTMLHtmlElement','HTMLIFrameElement','HTMLImageElement','HTMLInputElement','HTMLIsIndexElement','HTMLLIElement','HTMLLabelElement','HTMLLegendElement','HTMLLinkElement','HTMLMapElement','HTMLMarqueeElement','HTMLMetaElement','HTMLModelessDialog','HTMLNamespaceInfo','HTMLNamespaceInfoCollection','HTMLNextIdElement','HTMLNoShowElement','HTMLOListElement','HTMLObjectElement','HTMLOptionElement','HTMLParagraphElement','HTMLParamElement','HTMLPhraseElement','HTMLPluginsCollection','HTMLPopup','HTMLScriptElement','HTMLSelectElement','HTMLSpanElement','HTMLStyleElement','HTMLTableCaptionElement','HTMLTableCellElement','HTMLTableColElement','HTMLTableElement','HTMLTableRowElement','HTMLTableSectionElement','HTMLTextAreaElement','HTMLTextElement','HTMLTitleElement','HTMLUListElement','HTMLUnknownElement','Helper','Hidden','History','Image','ImportExportFavorites','Infinity','isArray','IsSubscribed','JSON','JavaArray','JavaClass','JavaObject','JavaPackage','LN10','LN2','LOG10E','LOG2E','Layer','Link','Location','MAX_VALUE','MIN_VALUE','Math','Methods','MimeType','NEGATIVE_INFINITY','NaN','NamedNodeMap','NavigateAndFind','Navigator','NodeList','Number','Object','Option','PI','POSITIVE_INFINITY','Packages','Password','Plugin','Radio','RegExp','Reset','SECURITY','SQRT1_2','SQRT2','STYLE','Screen','ScriptEngine','ScriptEngineBuildVersion','ScriptEngineMajorVersion','ScriptEngineMinorVersion','Select','Selection','ShowBrowserUI','StaticNodeList','Storage','String','Style','StyleSheetList','StyleSheetPage','StyleSheetPageList','Submit','Text','TextNode','TextRange','TextRangeCollection','TextRectangle','TextRectangleList','Textarea','UNSELECTABLE','URL','URLUnencoded','UTC','Window','XDomainRequest','XMLDocument','XMLHttpRequest','XMLNS','XSLDocument','__caller__','__count__','__defineGetter__','__defineSetter__','__iterator__','__lookupGetter__','__lookupSetter__','__noSuchMethod__','__parent__','__proto__','_content','aLink','aLinkcolor','abbr','abort','above','abs','accelerator','accept','acceptCharset','accessKey','acos','action','activeElement','add','addBehavior','addElement','addImport','addListener','addPageRule','addProperty','addReadRequest','addRule','addheader','additive','alert','align','alinkColor','all','allowDomain','allowTransparency','alt','altHTML','altKey','altLeft','anchor','anchors','and','appCodeName','appCore','appMinorVersion','appName','appVersion','appendChild','appendData','applets','applicationName','apply','applyElement','archive','areas','arguments','arguments.callee','arguments.caller','arguments.length','aria-activedescendant','aria-busy','aria-checked','aria-controls','aria-describedby','aria-disabled','aria-expanded','aria-flowto','aria-haspopup','aria-hidden','aria-invalid','aria-labelledby','aria-level','aria-live','aria-multiselectable','aria-owns','aria-posinset','aria-pressed','aria-readonly','aria-relevant','aria-required','aria-secret','aria-selected','aria-setsize','aria-valuemax','aria-valuemin','aria-valuenow','arity','asin','assign','atEnd','atan','atan2','atob','attachAudio','attachEvent','attachMovie','attachSound','attachVideo','attribute','attributes','autoSize','autocomplete','availHeight','availLeft','availTop','availWidth','axis','back','background','backgroundAttachment','backgroundColor','backgroundImage','backgroundPosition','backgroundPositionX','backgroundPositionY','backgroundRepeat','balance','banner','bannerAbstract','beginFill','beginGradientFill','behavior','behaviorUrns','below','bgColor','bgProperties','bind','big','blink','blockDirection','blockFormats','blockIndent','blur','body','bold','boolean','border','borderBottom','borderBottomColor','borderBottomStyle','borderBottomWidth','borderCollapse','borderColor','borderColorDark','borderColorLight','borderLeft','borderLeftColor','borderLeftStyle','borderLeftWidth','borderRight','borderRightColor','borderRightStyle','borderRightWidth','borderSpacing','borderStyle','borderTop','borderTopColor','borderTopStyle','borderTopWidth','borderWidth','borderWidths','bottom','bottomMargin','bottomScroll','boundElements','boundingHeight','boundingLeft','boundingTop','boundingWidth','boxSizing','break','broadcastMessage','browserLanguage','btoa','bufferDepth','bullet','button','byte','call','callee','caller','canHaveChildren','canHaveHTML','cancelBubble','capabilities','caption','captionSide','captureEvents','case','catch','ceil','cellIndex','cellPadding','cellSpacing','cells','ch','chOff','char','charAt','charCodeAt','characterSet','charset','checked','childNodes','children','chr','cite','class','className','classes','classid','clear','clearAttributes','clearData','clearInterval','clearRequest','clearTimeout','click','clientHeight','clientInformation','clientLeft','clientTop','clientWidth','clientX','clientY','clip','clipBottom','clipLeft','clipRight','clipTop','clipboardData','cloneNode','close','closed','code','codeBase','codeType','colSpan','collapse','color','colorDepth','cols','compact','compareEndPoints','compatMode','compatible','compile','complete','componentFromPoint','components','concat','condenseWhite','confirm','connect','const','constructor','contains','content','contentDocument','contentEditable','contentOverflow','contentType','contentWindow','contextual','continue','control','controlRange','controllers','cookie','cookieEnabled','coords','cos','counterIncrement','counterReset','cpuClass','create','createAttribute','createCaption','createComment','createControlRange','createDocumentFragment','createElement','createEmptyMovieClip','createEventObject','createPopup','createRange','createStyleSheet','createTFoot','createTHead','createTextField','createTextNode','createTextRange','crypto','cssText','ctrlKey','ctrlLeft','current','currentStyle','cursor','curveTo','data','dataFld','dataFormatAs','dataPageSize','dataSrc','dataTransfer','dateTime','debugger','declare','decode','decodeURI','decodeURIComponent','default','defaultCharset','defaultChecked','defaultSelected','defaultStatus','defaultValue','defaultView','defaults','defer','defineProperty','defineProperties','delete','deleteCaption','deleteCell','deleteData','deleteRow','deleteTFoot','deleteTHead','description','designMode','detachEvent','deviceXDPI','deviceYDPI','dialogArguments','dialogHeight','dialogLeft','dialogTop','dialogWidth','dimensions','dir','direction','directories','disableExternalCapture','disabled','display','do','doImport','doReadRequest','doScroll','docTypeDecl','doctype','document','documentElement','documentMode','domain','double','dragDrop','dragOut','dragOver','dropEffect','dump','duplicate','duplicateMovieClip','duration','dynsrc','effectAllowed','elementFromPoint','elements','else','embedFonts','embeds','empty','emptyCells','enableExternalCapture','enabled','enabledPlugin','encodeURI','encodeURIComponent','encoding','enctype','endFill','enterFrame','enum','eq','escape','eval','evaluate','event','every','exec','execCommand','execScript','exp','expando','export','extends','external','face','fgColor','fileCreatedDate','fileModifiedDate','fileName','fileSize','fileUpdatedDate','filename','filter','filters','final','finally','find','findText','fireEvent','firstChild','firstPage','fixed','float','floor','flush','focus','focusEnabled','font','fontColor','fontFamily','fontSize','fontSmoothingEnabled','fontStyle','fontVariant','fontWeight','fontcolor','fonts','fontsize','for','forEach','form','formName','forms','forward','frame','frameBorder','frameElement','frameSpacing','frames','fromCharCode','fromElement','freeze','frozen','fscommand','function','galleryImg','ge','get','getAdjacentText','getAllResponseHeaders','getAscii','getAttention','getAttribute','getAttributeNode','getBeginIndex','getBookmark','getBounds','getBytesLoaded','getBytesTotal','getCaretIndex','getCharset','getClientRects','getCode','getCookie','getData','getDate','getDay','getDepth','getDuration','getElementById','getElementsByName','getElementsByTagName','getEndIndex','getExpression','getFocus','getFontList','getFullYear','getHours','getItem','getMilliseconds','getMinutes','getMonth','getNamedItem','getNewTextFormat','getOwnPropertyDescriptor','getOwnPropertyNames','getPan','getPosition','getProperty','getPrototypeOf','getRGB','getResponseHeader','getSeconds','getSelection','getSize','getTextExtent','getTextFormat','getTime','getTimer','getTimezoneOffset','getTransform','getURL','getUTCDate','getUTCDay','getUTCFullYear','getUTCHours','getUTCMilliseconds','getUTCMinutes','getUTCMonth','getUTCSeconds','getUTCYear','getVarDate','getVersion','getVolume','getYear','global','globalToLocal','go','goto','gotoAndPlay','gotoAndStop','gt','handleEvent','hasAccessibility','hasAudio','hasAudioEncoder','hasChildNodes','hasFeature','hasFocus','hasLayout','hasMP3','hasOwnProperty','hasVideoEncoder','hash','headers','height','hidden','hide','hideFocus','history','hitArea','hitTest','home','host','hostname','href','hreflang','hscroll','hspace','html','htmlFor','htmlText','httpEquiv','id','ids','if','ifFrameLoaded','ignoreCase','ignoreWhite','images','imeMode','implementation','implements','import','imports','in','inRange','include','indent','indeterminate','index','indexOf','innerHTML','innerHeight','innerText','innerWidth','input','insertAdjacentElement','insertAdjacentText','insertBefore','insertCell','insertData','insertRow','install','instanceof','int','interface','isActive','isAlternate','isContentEditable','isDebugger','isDisabled','isDown','isEqual','isFinite','isMap','isMultiLine','isNaN','isOpen','isPrefAlternate','isPropertyEnumerable','isPrototypeOf','isTextEdit','isToggled','italic','italics','item','java','javaEnabled','join','keys','keyCode','keyDown','keyPress','keyUp','label','lang','language','lastChild','lastIndex','lastIndexOf','lastMatch','lastModified','lastPage','lastParen','layerX','layers','layoutFlow','layoutGrid','layoutGridChar','layoutGridLine','layoutGridMode','layoutGridType','lbound','le','leading','left','leftContext','leftMargin','length','letterSpacing','lineBreak','lineHeight','lineNumber','lineStyle','lineTo','link','linkColor','links','list','listStyle','listStyleImage','listStylePosition','listStyleType','load','loadMovie','loadMovieNum','loadSound','loadVariables','loadVariablesNum','loaded','localName','localStorage','localToGlobal','localeCompare','location','locationbar','log','logicalXDPI','logicalYDPI','long','longDesc','loop','lowsrc','lt','manufacturer','map','margin','marginBottom','marginHeight','marginLeft','marginRight','marginTop','marginWidth','margins','match','max','maxChars','maxConnectionsPerServer','maxHeight','maxLength','maxWidth','maxhscroll','maxscroll','mbchr','mblength','mbord','mbsubstring','media','menuArguments','menubar','mergeAttributes','message','metaInfo','meth','method','mimeType','mimeTypes','min','minHeight','minWidth','mouseDown','mouseMove','mouseUp','move','moveAbove','moveBelow','moveBy','moveEnd','moveFirst','moveNext','moveRow','moveStart','moveTo','moveToAbsolute','moveToBookmark','moveToElementText','moveToPoint','msBlockProgression','msInterpolationMode','multiline','multiple','name','nameProp','namedItem','namedRecordset','namespace','namespaceURI','namespaces','native','navigate','navigator','ne','netscape','new','newline','next','nextFrame','nextPage','nextScene','nextSibling','noHref','noResize','noShade','now','noWrap','nodeName','nodeType','nodeValue','normalize','not','null','number','object','offscreenBuffering','offsetHeight','offsetLeft','offsetParent','offsetTop','offsetWidth','offsetX','offsetY','on','onAbort','onActivate','onAfterprint','onAfterupdate','onBeforeactivate','onBeforecut','onBeforedeactivate','onBeforeeditfocus','onBeforepaste','onBeforeprint','onBeforeunload','onBeforeupdate','onBlur','onCellchange','onChange','onChanged','onClick','onClipEvent','onClose','onConnect','onContextmenu','onControlselect','onCut','onData','onDataavailable','onDatasetchanged','onDatasetcomplete','onDblclick','onDeactivate','onDrag','onDragOut','onDragOver','onDragdrop','onDragend','onDragenter','onDragleave','onDragover','onDragstart','onDrop','onEnterFrame','onError','onErrorupdate','onFocus','onHelp','onKeyDown','onKeyUp','onKeydown','onKeypress','onKeyup','onKillFocus','onLine','onLoad','onMouseDown','onMouseMove','onMouseUp','onMousedown','onMousemove','onMouseout','onMouseover','onMouseup','onPaste','onPress','onPropertychange','onReadystatechange','onRelease','onReleaseOutside','onReset','onResize','onResizeend','onResizestart','onRollOut','onRollOver','onRowenter','onRowexit','onRowsdelete','onRowsinserted','onScroll','onScroller','onSelect','onSelectionchange','onSelectstart','onSetFocus','onSoundComplete','onStop','onSubmit','onUnload','onXML','onpropertychange','onreadystatechange','onvisibilitychange','open','opener','opsProfile','options','or','ord','origin','orphans','os','oscpu','outerHTML','outerHeight','outerText','outerWidth','outline','outlineColor','outlineStyle','outlineWidth','overflow','overflowX','overflowY','ownerDocument','ownerElement','owningElement','package','padding','paddingBottom','paddingLeft','paddingRight','paddingTop','paddings','page','pageBreakAfter','pageBreakBefore','pageBreakInside','pageX','pageXOffset','pageY','pageYOffset','pages','palette','parent','parentElement','parentLayer','parentNode','parentStyleSheet','parentTextEdit','parentWindow','parse','parseFloat','parseInt','parseXML','password','pasteHTML','pathname','pause','personalbar','pixelAspectRatio','pixelBottom','pixelDepth','pixelHeight','pixelLeft','pixelRight','pixelTop','pixelWidth','pkcs11','platform','play','plugin','plugins','plugins.refresh','pluginspage','pop','popup','port','posBottom','posHeight','posLeft','posRight','posTop','posWidth','position','pow','preference','prefix','press','prevFrame','prevScene','previous','previousPage','previousSibling','print','printAsBitmap','printAsBitmapNum','printNum','private','product','productSub','profile','prompt','prompter','propertyIsEnumerable','propertyName','protected','protocol','prototype','pseudoClass','public','publish','push','qualifier','queryCommandEnabled','queryCommandIndeterm','queryCommandState','queryCommandValue','quote','quotes','random','readOnly','readyState','reason','recalc','receiveAudio','receiveVideo','recordNumber','recordset','reduce','reduceRight','referrer','refresh','registerClass','rel','release','releaseCapture','releaseEvents','releaseOutside','reload','remainingSpace','remove','removeAttribute','removeAttributeNode','removeBehavior','removeChild','removeExpression','removeListener','removeMovieClip','removeNamedItem','removeNode','removeRule','removeTextField','repeat','replace','replaceChild','replaceData','replaceNode','replaceSel','reset','resizeBy','resizeTo','responseBody','responseText','responseXML','restrict','return','returnValue','rev','reverse','right','rightContext','rightMargin','role','rollOut','rollOver','round','routeEvents','rowIndex','rowSpan','rows','rubyAlign','rubyOverhang','rubyPosition','rule','rules','runtimeStyle','seal','savePreferences','saveType','scaleMode','scheme','scope','scopeName','screen','screenColor','screenDPI','screenLeft','screenResolutionX','screenResolutionY','screenTop','screenX','screenY','scripts','scroll','scrollAmount','scrollBy','scrollByLines','scrollByPages','scrollDelay','scrollHeight','scrollIntoView','scrollLeft','scrollString','scrollTo','scrollTop','scrollWidth','scrollX','scrollY','scrollbar','scrollbar3dLightColor','scrollbarArrowColor','scrollbarBaseColor','scrollbarDarkShadowColor','scrollbarFaceColor','scrollbarHighlightColor','scrollbarShadowColor','scrollbarTrackColor','scrollbars','scrolling','search','sectionRowIndex','security','securityPolicy','seek','select','selectable','selectableContent','selected','selectedIndex','selection','selector','selectorText','self','send','sendAndLoad','serverString','sessionStorage','set','setActive','setAttribute','setAttributeNode','setBufferTime','setCapture','setCookie','setCursor','setDate','setDuration','setExpression','setFocus','setFps','setFullYear','setGain','setHotKeys','setHours','setInterval','setKeyFrameInterval','setLoopback','setMask','setMilliseconds','setMinutes','setMode','setMonth','setMotionLevel','setNamedItem','setNewTextFormat','setPan','setPosition','setProperty','setQuality','setRGB','setRate','setRequestHeader','setResizable','setSeconds','setSelection','setSilenceLevel','setTextFormat','setTime','setTimeout','setTransform','setUTCDate','setUTCFullYear','setUTCHours','setUTCMilliseconds','setUTCMinutes','setUTCMonth','setUTCSeconds','setUseEchoSuppression','setVolume','setYear','setZOptions','shape','shift','shiftKey','shiftLeft','short','show','showHelp','showMenu','showModalDialog','showModelessDialog','siblingAbove','siblingBelow','sidebar','signText','sin','size','sizeToContent','slice','small','some','sort','sortOn','source','sourceIndex','span','specified','splice','split','splitText','sqrt','src','srcElement','srcFilter','srcUrn','stack','standby','start','startDrag','static','status','statusText','statusbar','stop','stopAllSounds','stopDrag','strike','stringify','style','styleFloat','styleSheet','styleSheets','sub','submit','substr','substring','substringData','suffixes','summary','sun','sup','super','swapDepths','swapNode','switch','synchronized','systemLanguage','systemXDPI','systemYDPI','tBodies','tFoot','tHead','tabChildren','tabEnabled','tabIndex','tabStop','tabStops','table','tableLayout','tagName','tagUrn','tags','taint','taintEnabled','tan','target','targetPath','tellTarget','test','text','textAlign','textAlignLast','textAutospace','textColor','textDecoration','textDecorationBlink','textDecorationLineThrough','textDecorationNone','textDecorationOverline','textDecorationUnderline','textHeight','textIndent','textJustify','textKashidaSpace','textOverflow','textTransform','textUnderlinePosition','textWidth','textarea','this','throw','throws','timeout','title','toArray','toISOString','toDateString','toElement','toExponential','toFixed','toGMTString','toJSON','toLocaleDateString','toLocaleLowerCase','toLocaleString','toLocaleTimeString','toLocaleUpperCase','toLowerCase','toPrecision','toSource','toString','toTimeString','toUTCString','toUpperCase','toggleHighQuality','toolbar','top','topMargin','trace','trackAsMenu','transient','trim','trimLeft','trimRight','trueSpeed','try','type','typeDetail','typeof','ubound','undefined','underline','unescape','unicodeBidi','uninstall','uniqueID','units','unload','unloadMovie','unloadMovieNum','unshift','untaint','unwatch','updateAfterEvent','updateCommands','updateInterval','url','urn','urns','useHandCursor','useMap','userAgent','userLanguage','userProfile','vAlign','vLink','vLinkcolor','value','valueOf','valueType','var','variable','vcard_name','vendor','vendorSub','version','verticalAlign','viewInheritStyle','viewLink','viewLinkContent','viewMasterTab','visibility','vlinkColor','void','volatile','volume','vrml','vspace','watch','wheelDelta','while','whiteSpace','widows','width','window','with','wordBreak','wordSpacing','wordWrap','wrap','write','writeln','writingMode','x','xmlDecl','y','zIndex','zoom'],
  result, domObjects, callbacks = {}, historyPos = 0, types = ['array','NaN','null','function','object','string','boolean','symbol','undefined','number','window','function constructor','object constructor','document','dom node','x-domain window','java bridge'].sort();
  function inspect(object, isHTML, resultOnly, params) {
     var errorMessage;
     window.scrollTo(0,0);
     if(domObjects.usage) {
       domObjects.usage.innerHTML = '';
     }
      domObjects.input.value = '';
      if(/^</.test(object)) {
         isHTML = true;
      }
      if(isHTML){
          createOutput(object, true);
          createHistory(object);
          domObjects.input.value = '';
          return;
      }
    try {
        Function(object);
        result = eval('{'+object+'}');
        if(resultOnly) {
          createOutput(result, false, false);
        } else {
          createOutput(result, false, object, params);
        }
        createHistory(object);
    } catch(e){
        errorMessage = typeof e.message === 'undefined' ? e : e.message;
        if(e.stack) {
          errorMessage += ' ' + e.stack;
        }
        createError(errorMessage);
        createHistory(object);
    }
  }
  function createHistory(object) {
    var history;
    if(window.localStorage && window.JSON) {
      history = localStorage.getItem('history');
      if(typeof history !== 'string') {
        localStorage.setItem('history',JSON.stringify([object]));
      } else {
        try {
          history = JSON.parse(history);
        } catch(e){
          clearHistory();
          return;
        }
        if(history.unshift && history[0] !== object && object.length) {
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
      if(typeof history === 'string') {
        try {
          history = JSON.parse(history);
        } catch(e){
          clearHistory();
          return;
        }
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
  function clearHistory() {
    if(window.localStorage && window.JSON) {
      localStorage.setItem('history',JSON.stringify([]));
    }
  }
  function sortByType(a,b) {
    if (isNaN(a) || isNaN(b)) {
      return a > b ? 1 : -1;
    }
    return a - b;
  }
  function getRealType(obj) {
    try {
      if((Array.isArray && Array.isArray(obj)) || (obj && typeof obj.length === 'number' && Object.prototype.toString.call(obj) === '[object Array]')) {
        return 'array';
      }
    } catch(e){}
    try {
      if((Number.isNaN && Number.isNaN(obj)) || (obj !== obj && typeof obj === 'number')) {
        return 'NaN';
      }
    } catch(e){}
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
      return!!(obj && obj.window === obj);
    } catch(e){
      return false;
    }
  }
  function isCrossDomainWindow(obj) {
    var read;
    if(!isWindow(obj)) {
      return false;
    }
    try {
      read = obj.location.toString();
      return false
    } catch(e){
      return true;
    }
  }
  function isJavaBridge(obj) {
    try {
      return!!(obj && obj.getClass && obj.hashCode);
    } catch(e){
      return false;
    }
  }
  function isDocument(obj) {
    try {
      return!!(obj && typeof obj === 'object' && obj.ownerDocument === null);
    } catch(e){
      return false;
    }
  }
  function isDomNode(obj) {
    try {
      var doc = obj.ownerDocument;
      if(isDocument(doc)) {
        return true;
      } else {
        return false;
      }
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
  function isObjectConstructor(obj) {
    try {
      return!!(obj&&obj.__proto__&&obj.__proto__.__proto__&&obj===obj.__proto__.__proto__.constructor);
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
    var i, prop, generatedPath = ''
    for(i=0;i<path.length;i++) {
      prop = path[i];
      if(i == 0) {
        generatedPath = prop;
      } else if(/^[a-z$_][\w$]*$/i.test(prop)) {
        generatedPath += '.' + prop;
      } else if(/^\d+$/.test(prop)) {
        generatedPath += '['+jsEscapeProperty(prop)+']';
      } else {
        generatedPath += '[\''+jsEscapeProperty(prop)+'\']';
      }
    }
    return generatedPath;
  }
  function clear() {
    while(domObjects.output.firstChild) {
      domObjects.output.removeChild(domObjects.output.firstChild);
    }
    domObjects.input.value = '';
  }
  function ieOnChangeFix(e){
    var event = window.event ? window.event : e;
    if(event.keyCode === 13) {
      this.blur();
      this.focus();
    }
  }
  function createEnumerator(obj, params, isRoot, name, path, parent, interestingProp) {
    var enumerator = document.createElement('div'), output = '', realType, prop, descriptor, descriptors, checkbox, objectType, option, regexInput, jsInput,
        ul = document.createElement('ul'), li = document.createElement('li'), anchor = document.createElement('a'), test, i;
    realType = getRealType(obj);
    output += '<table class="propertyTable">';
    output += '<tr>';
    output += '<td valign="top" class="propertyName"><a href="#" onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].firstChild.firstChild.click();return false;">'+escapeHTML(generatePath(path))+'</a></td>';
    output += '<td valign="top" class="propertyValue '+escapeHTML(realType)+(interestingProp?' interesting':'')+'">';
    try {
      output += '<code><pre>'+escapeHTML(obj)+'</pre></code>';
    } catch(e){}
    output += '</td>';
    output += '<td valign="top" class="propertyInfo">';
    output += '<div class="box '+escapeHTML(realType)+(interestingProp?' interesting':'')+'">type:'+escapeHTML(realType)+'</div>';
    try {
      if(typeof obj === 'function') {
        output += '<div class="box arguments">arguments:'+escapeHTML(obj.length)+'</div>';
        output += '<div class="box"><a href="#" onclick="try{'+escapeHTML(generatePath(path))+'(function(){console.log(\'Callback called\');});}catch(e){console.log(e);}return false;">Call function with callback</a></div>';
      } else if(obj && typeof obj.length !== 'undefined') {
        output += '<div class="box length">length:'+escapeHTML(obj.length)+'</div>';
      }
    } catch(e){}
    if(Object.getOwnPropertyDescriptor && parent) {
      try {
        descriptor = Object.getOwnPropertyDescriptor(parent, name);
        if(descriptor) {
          output += '<div class="box"><table><tr><td class="descriptorName">Writable</td><td class="descriptorValue">'+escapeHTML(descriptor.writable)+'</td></tr>';
          output += '<tr><td class="descriptorName">Configurable</td><td class="descriptorValue">'+escapeHTML(descriptor.configurable)+'</td></tr>';
          output += '<tr><td class="descriptorName">Enumerable</td><td class="descriptorValue">'+escapeHTML(descriptor.enumerable)+'</td></tr>';
          if(descriptor.value) {
            try {
              if(descriptor.value.constructor.constructor === descriptor.value.constructor && descriptor.value.constructor('return document.domain')() !== document.domain)
              output += '<tr><td class="descriptorName">Value constructor</td><td class="descriptorValue"><div class="error">X-domain constructor found!</div></td></tr>';
            } catch(e){}
          }
          if(descriptor.set) {
            output += '<tr><td class="descriptorName">Setter</td><td class="descriptorValue">'+escapeHTML(descriptor.set)+'</td></tr>';
          }
          if(descriptor.get) {
            output += '<tr><td class="descriptorName">Getter</td><td class="descriptorValue">'+escapeHTML(descriptor.get)+'</td></tr>';
            try {
              if(descriptor.get.constructor === descriptor.get.constructor.constructor && descriptor.get.constructor('return document.domain')() !== document.domain)
              output += '<tr><td class="descriptorName">Getter constructor</td><td class="descriptorValue"><div class="error">X-domain constructor found!</div></td></tr>';
            } catch(e){}
            try {
              output += '<tr><td class="descriptorName">Calling getter</td><td class="descriptorValue">'+escapeHTML(descriptor.get.call(parent))+'</td></tr>';
            } catch(e){}
          }
          output += '</table></div>';
        }
      } catch(e){}
    }
    if(isWindow(obj)) {
      if(isCrossDomainWindow(obj)) {
        output += '<div class="box">Is a x-domain window object</div>';
        try {
          obj.setPropertyTest = 'test';
          if(obj.setPropertyTest === 'test') {
            output += '<div class="error">Can set properties on x-domain window</div>';
          }
        } catch(e){}
        try {
          test = obj.readPropertyTest;
        } catch(e){
          try {
            e.toString().replace(/https?:\/\/[^\s'"]+/gi,function(domain){
              domain = domain.replace(/[.]+$/,'');
              domain = domain.replace(/\s+$/,'');
              domain = domain.replace(/^\s+/,'');
              if(domain !== location.origin) {
                output += '<div class="error">Leaking x-domain origin from iframe: '+escapeHTML(domain)+'</div>';
              }
            });
          } catch(e){}
        }
      } else {
        output += '<div class="box">Is a window object</div>';
      }
    }
    if(isFunctionConstructor(obj)) {
      output += '<div class="box">Is a function constructor</div>';
    }
    if(isObjectConstructor(obj)) {
      output += '<div class="box">Is a Object constructor</div>';
    }
    if(isJavaBridge(obj)) {
      output += '<div class="box">Is possibly a Java bridge</div>';
      try {
        obj.getClass().forName("java.net.Socket").newInstance();
        output += '<div class="error"><a href="#" onclick="var field='+escapeHTML(generatePath(path))+'.getClass().forName(\'java.lang.Runtime\').getDeclaredField(\'currentRuntime\');field.setAccessible(true);var runtime = field.get(123);if(/mac/i.test(navigator.platform))runtime.exec(\'open -a Calculator\');if(/linux/i.test(navigator.platform))runtime.exec(\'/bin/bash -c gnome-calculator\');if(/win/i.test(navigator.platform))runtime.exec(\'calc\');">Exploitable Java bridge found</a></div>';
      } catch(e){}
    }
    try {
      if(obj.constructor && obj.constructor.constructor && obj.constructor.constructor === obj.constructor.constructor.constructor && obj.constructor.constructor('return document.domain')() !== document.domain) {
        if(window.console) {
          console.log('X-domain constructor found!');
        }
        output += '<div class="error">X-domain constructor found!</div>';
      }
    } catch(e){}
    output += '<div class="box"><a href=# onclick="Inspector.setInput(this.getAttribute(\'data-path\'));return false;" data-path="'+escapeHTML(generatePath(path))+'">Send to input</a></td>';
    output += '</td>';
    output += '</tr>';
    output += '</table>';
    enumerator.innerHTML = output;
    ul.className = 'enumerator';
    li.object = obj;
    li.className = isRoot ? 'on' : 'off';
    anchor.href = '#';
    anchor.title = generatePath(path);
    anchor.onclick = function(){
      if(this.parentNode.className==='off'){
          if(!this.parentNode.enumerated){
            this.parentNode.enumerate();
          }
          this.parentNode.className='on';
          this.innerHTML='&#9660;';
        } else {
          this.parentNode.className='off';
          this.innerHTML='&#x25b7;';
        }
        if(history.pushState) {
          history.pushState({},'', '?input='+encodeURIComponent(path));
        } else {
          location.hash = generatePath(path);
        }
        return false;
    };
    anchor.innerHTML = isRoot ? '&#9660;' : '&#x25b7;';
    li.appendChild(anchor);
    if(isWindow(obj)) {
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.onclick = function(){
        li.enumerate(this.checked, regexInput.value, jsInput.value, objectType.options[objectType.selectedIndex].value);
      };
      if(params && typeof params.interesting === 'string' && params.interesting === 'true') {
        checkbox.checked = true;
      }
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode('Interesting props?'));
    }
    li.appendChild(document.createTextNode(' '));
    if(realType === 'object' || isRoot) {
      regexInput = document.createElement('input');
      regexInput.placeholder = 'Filter by regex';
      regexInput.onchange = function(){
          li.enumerate(typeof checkbox !== 'undefined' ? checkbox.checked : false, this.value, jsInput.value, objectType.options[objectType.selectedIndex].value);
      };
      regexInput.onkeyup = ieOnChangeFix;
      if(params && typeof params.regex === 'string' && params.regex.length) {
        regexInput.value = params.regex;
      }
      li.appendChild(regexInput);
    }
    if(realType === 'object'  || isRoot) {
      li.appendChild(document.createTextNode(' '));
      jsInput = document.createElement('input');
      jsInput.placeholder = 'JS: obj[prop]("args")';
      jsInput.onchange = function(){
        li.enumerate(typeof checkbox !== 'undefined' ? checkbox.checked : false, regexInput.value, this.value, objectType.options[objectType.selectedIndex].value);
      };
      jsInput.onkeyup = ieOnChangeFix;
      if(params && typeof params.js === 'string' && params.js.length) {
        jsInput.value = params.js;
      }
      li.appendChild(jsInput);
    }
    if(realType === 'object' || isRoot) {
      li.appendChild(document.createTextNode(' '));
      objectType = document.createElement('select');
      option = document.createElement('option');
      option.value = '';
      option.appendChild(document.createTextNode('All types'));
      objectType.appendChild(option);
      for(i=0;i<types.length;i++) {
        option = document.createElement('option');
        option.value = types[i];
        option.appendChild(document.createTextNode(types[i]));
        if(params && typeof params.type === 'string' && params.type.length) {
          if(params.type === types[i]) {
            option.selected = true;
          }
        }
        objectType.appendChild(option);
      }
      objectType.onchange = function(){
          li.enumerate(typeof checkbox !== 'undefined' ? checkbox.checked : false, regexInput.value, jsInput.value, this.options[this.selectedIndex].value);
          this.blur();
      };
      li.appendChild(objectType);
    }
    li.enumerate = function(interestingOnly, filter, js, selectedType) {
        var i, j, ul = document.createElement('ul'), li, div, propCheck = {}, props = [], checkProp = {}, regex, interestingProps = [], interestingPropsLookup = {}, found, type, forInProperties = {}, methods, fields;
        if(typeof filter !== 'undefined') {
          regex = new RegExp(filter);
        }
        if(this.enumerated) {
          this.removeChild(this.getElementsByTagName('ul')[0]);
        }
        try {
          if(methods = this.object.getClass().getMethods()) {
              for(i=0;i<methods.length();i++) {
                props.push(methods[i].getName());
              }
          }
        } catch(e){}
        try {
          if(fields = this.object.getClass().getFields()) {
              for(i=0;i<fields.length();i++) {
                props.push(fields[i].getName());
              }
          }
        } catch(e){}
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
        props = props.concat(jsBuiltInProps);
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
        try {
        if(Object.getOwnPropertyDescriptors && this.object) {
            descriptors = Object.getOwnPropertyDescriptors(this.object);
            for(i in descriptors) {
              props.push(i);
            }
          }
        } catch(e){}
        try {
          for(i in this.object) {
            props.push(i);
            forInProperties['_check_'+i] = 1;
          }
        } catch(e){}
        if(interestingOnly) {
          for(i=0;i<props.length;i++) {
            found = false;
            for(j=0;j<knownWindowProps.length;j++) {
              if(knownWindowProps[j] === props[i]) {
                checkProp['_check_'+props[i]] = 1;
                found = true;
                break;
              }
            }
            if(!found) {
              interestingPropsLookup['_check_'+props[i]] = 1;
            }
          }
        } else {
          for(i=0;i<props.length;i++) {
            found = false;
            for(j=0;j<knownWindowProps.length;j++) {
              if(knownWindowProps[j] === props[i]) {
                found = true;
                break;
              }
            }
            if(!found) {
              interestingProps.push(props[i]);
              interestingPropsLookup['_check_'+props[i]] = 1;
            }
          }
        }
        props = props.sort(sortByType);
        if(interestingProps.length) {
            interestingProps = interestingProps.sort(sortByType);
            props = interestingProps.concat(props);
        }
        if(props.filter) {
          props = props.filter(function(elem, index, self) {
              return index === self.indexOf(elem);
          });
        }
        for(i=0;i<props.length;i++) {
          if(checkProp['_check_'+props[i]]){
            continue;
          }
          try {
            if(typeof obj[props[i]] === 'undefined' && !forInProperties['_check_'+props[i]]) {
              continue;
            }
          } catch(e){
            continue;
          }
          if(regex) {
              if(!regex.test(props[i])) {
                continue;
              }
          }
          if(selectedType) {
            try {
              type = getRealType(this.object[props[i]]);
              if(selectedType === 'window') {
                if(!isWindow(this.object[props[i]])) {
                  continue;
                }
              } else if(selectedType === 'function constructor') {
                if(!isFunctionConstructor(this.object[props[i]])) {
                  continue;
                }
              } else if(selectedType === 'object constructor') {
                if(!isObjectConstructor(this.object[props[i]])) {
                  continue;
                }
              } else if(selectedType === 'document') {
                if(!isDocument(this.object[props[i]])) {
                  continue;
                }
              } else if(selectedType === 'x-domain window') {
                if(!isCrossDomainWindow(this.object[props[i]])) {
                  continue;
                }
              } else if(selectedType === 'java bridge') {
                if(!isJavaBridge(this.object[props[i]])) {
                  continue;
                }
              } else if(selectedType === 'dom node') {
                if(!isDomNode(this.object[props[i]])) {
                  continue;
                }
              } else {
                if(type !== selectedType) {
                  continue;
                }
              }
            } catch(e){continue;}
          }
          if(js) {
            try {
              Function('obj','prop',js)(this.object, props[i])();
            } catch(e){
              if(window.console) {
                console.error(e.message);
              }
            }
          }
          li = document.createElement('li');
          try {
            li.appendChild(createEnumerator(this.object[props[i]], {}, false, props[i], path.concat([props[i]]), this.object, interestingPropsLookup['_check_'+props[i]] && isWindow(this.object) ? true : false));
            ul.appendChild(li);
          } catch(e){}
          checkProp['_check_'+props[i]] = 1;
        }
        if(!ul.childNodes.length) {
          li = document.createElement('li');
          li.className = "noPropertiesFound";
          li.appendChild(document.createTextNode('No properties found.'));
          ul.appendChild(li);
        }
        this.appendChild(ul);
        this.enumerated=true;
    };
    if(isRoot) {
      if(params) {
        li.enumerate(params.interesting==='true' ? true : false, params.regex, params.js, params.type);
      } else {
        li.enumerate();
      }
    }
    ul.appendChild(li);
    enumerator.appendChild(ul);
    if(isRoot) {
      if(callbacks.sendRootHTML) {
        callbacks.sendRootHTML(generatePath(path), enumerator.innerHTML);
      }
    }
    return enumerator;
  }
  function createOutput(output, isHTML, name, params) {
    var div = document.createElement('div'), htmlDiv, a = document.createElement('a');
    a.href="#";
    a.onclick = function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
      return false;
    };
    a.className = 'deleteOutput';
    a.innerHTML = '&#10060;';
    div.appendChild(a);
    if(isHTML) {
      htmlDiv = document.createElement('div');
      htmlDiv.innerHTML = output;
      div.appendChild(htmlDiv);
    } else {
      if(name === false) {
        div.appendChild(document.createTextNode(output));
      } else {
        div.appendChild(createEnumerator(output, params, true, name, [name]));
      }
    }
    div.className = 'output';
    domObjects.output.insertBefore(div, domObjects.output.firstChild);
  }
  function createError(msg) {
    var div = document.createElement('div'), a = document.createElement('a');
    a.href="#";
    a.onclick = function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
      return false;
    };
    a.className = 'deleteOutput';
    a.innerHTML = '&#10060;';
    div.appendChild(a);
    div.appendChild(document.createTextNode(String(msg)));
    div.className = 'error';
    domObjects.output.insertBefore(div, domObjects.output.firstChild);
  }
  function setInput(input) {
    domObjects.input.value = input;
  }
  function getKnownWindowProps() {
    return knownWindowProps;
  }
  function getParams(params) {
    var param, i, paramsObject = {};
  		params = params.split('&');
  		for(i=0;i<params.length;i++) {
  			param = params[i].split('=');
  			paramsObject[param[0]] = decodeURIComponent(param.slice(1).join('='));
  		}
  		return paramsObject;
  }
  function setCallbacks(obj) {
    callbacks = obj;
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
        } else if(event.keyCode === 8) {
          if(event.ctrlKey && event.shiftKey) {
            Inspector.clearHistory();
          } else if(event.ctrlKey) {
            Inspector.clear();
          }
        } else if(event.keyCode === 13) {
          historyPos = 0;
          if(this.value.length) {
            if(event.ctrlKey) {
              Inspector.inspect(this.value, true);
            } else {
              if(event.shiftKey) {
                Inspector.inspect(this.value, false, true);
              } else {
                Inspector.inspect(this.value);
              }
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
      setInput: setInput,
      setDomObjects: setDomObjects,
      setCallbacks: setCallbacks,
      clear: clear,
      clearHistory: clearHistory,
      getParams: getParams,
      getKnownWindowProps: getKnownWindowProps
  };
}();
(function(a,b){typeof define=="function"&&define.amd?define("json",["exports"],b):b(typeof exports=="object"&&exports||this.JSON||(this.JSON={}))})(this,function(a){var b={}.toString,c={}.hasOwnProperty,d,e,f;return e=typeof a.stringify=="function",f=typeof a.parse=="function",function(){var c='{"result":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',d,g,h;if(e){d=function(){return 1},d.toJSON=d;try{switch(!1){case a.stringify(0)==="0":case a.stringify(new 0..constructor)==="0":case a.stringify(new"".constructor)=='""':case a.stringify(b)===void 0:case a.stringify(void 0)===void 0:case a.stringify()===void 0:case a.stringify(d)==="1":case a.stringify([d])=="[1]":case a.stringify([void 0])=="[null]":case a.stringify(null)=="null":case a.stringify([void 0,b,null])=="[null,null,null]":case a.stringify({result:[d,true,false,null,"\0\b\n\f\r	"]})==c:case a.stringify(null,d)==="1":case a.stringify([1,2],null,1)=="[\n 1,\n 2\n]":case(d=new Date(-864e13)).getUTCFullYear()!=-271821||a.stringify(d)=='"-271821-04-20T00:00:00.000Z"':case(d=new Date(864e13)).getUTCFullYear()!=275760||a.stringify(d)=='"+275760-09-13T00:00:00.000Z"':e=!1}}catch(i){e=!1}}if(f)try{if(a.parse("0")===0&&!a.parse(!1)){h=a.parse(c);if(f=h.result.length==5&&h.result[0]==1){try{f=!a.parse('"	"')}catch(i){}if(f)try{f=a.parse("+1")!=1&&a.parse("01")!=1}catch(i){}}}}catch(i){f=!1}}(),typeof c!="function"&&(c=function(){var a,c={},d=c.constructor;return(c.__proto__=null,c.__proto__={toString:1},c).toString!=b?a=function e(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:a=function f(a){var b=(this.constructor||d).prototype;return a in this&&!(a in b&&this[a]===b[a])},a}()),d=function(){function g(){this.valueOf=0}var a,d,e,f=0;g.prototype.valueOf=0,a=new g;for(d in a)c.call(a,d)&&(f+=1);return a=null,f?f==2?e=function(d,e){var f={},g=b.call(d)=="[object Function]",h;for(h in d)(!g||h!="prototype")&&!c.call(f,h)&&(f[h]=1)&&c.call(d,h)&&e(h)}:e=function(d,e){var f=b.call(d)=="[object Function]",g,h;for(g in d)(!f||g!="prototype")&&c.call(d,g)&&!(h=g==="constructor")&&e(g);(h||c.call(d,"constructor"))&&e("constructor")}:(a=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],e=function(e,f){var g=b.call(e)=="[object Function]",h,i;for(h in e)(!g||h!="prototype")&&c.call(e,h)&&f(h);for(i=a.length;i--;)h=a[i],c.call(e,h)&&f(h)}),e}(),e||(a.stringify=function(){function e(a,b){return b="000000"+(b||0),b.slice(b.length-a)}function f(b){var c='"',d=0,f;for(;f=b.charAt(d);d+=1)c+='\\"\b\f\n\r	'.indexOf(f)>-1?a[f]:f<" "?"\\u00"+e(2,f.charCodeAt(0).toString(16)):f;return c+'"'}function g(a,h,i,j,k,l,m){var n=h[a],o,p,q,r,s,t,u,v;typeof n=="object"&&n&&(b.call(n)=="[object Date]"&&!c.call(n,"toJSON")?n>-1/0&&n<1/0?(p=n.getUTCFullYear(),n=(p<=0||p>=1e4?(p<0?"-":"+")+e(6,p<0?-p:p):e(4,p))+"-"+e(2,n.getUTCMonth()+1)+"-"+e(2,n.getUTCDate())+"T"+e(2,n.getUTCHours())+":"+e(2,n.getUTCMinutes())+":"+e(2,n.getUTCSeconds())+"."+e(3,n.getUTCMilliseconds())+"Z"):n=null:typeof n.toJSON=="function"&&(n=n.toJSON(a))),i&&(n=i.call(h,a,n));if(n===null)return"null";o=b.call(n);switch(o){case"[object Boolean]":return""+n;case"[object Number]":return n>-1/0&&n<1/0?""+n:"null";case"[object String]":return f(n)}if(typeof n=="object"){for(t=m.length;t--;)if(m[t]==n)throw TypeError("Cyclic structures cannot be serialized.");m.push(n),q=[],u=l,l+=k;if(o=="[object Array]"){for(s=0,t=n.length;s<t;v||(v=!0),s++)r=g(s,n,i,j,k,l,m),q.push(r===void 0?"null":r);return v?k?"[\n"+l+q.join(",\n"+l)+"\n"+u+"]":"["+q.join(",")+"]":"[]"}return d(j||n,function(a){var b=g(a,n,i,j,k,l,m);b!==void 0&&q.push(f(a)+":"+(k?" ":"")+b),v||(v=!0)}),v?k?"{\n"+l+q.join(",\n"+l)+"\n"+u+"}":"{"+q.join(",")+"}":"{}"}}function h(a,c,d){var e="",f,h,i,j;if(typeof c=="function"||typeof c=="object"&&c)if(b.call(c)=="[object Function]")f=c;else if(b.call(c)=="[object Array]"){h={};for(i=c.length;i--;)j=c[i],j&&(b.call(j)=="[object String]"||b.call(j)=="[object Number]")&&(h[j]=1)}if(d!=null&&d!=="")if(b.call(d)=="[object Number]"){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;)e+=" "}else b.call(d)=="[object String]"&&(e=d.length<=10?d:d.slice(0,10));return g("$",{$:a},f,h,e,"",[])}var a={"\\":"\\\\",'"':'\\"',"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"};return h}()),f||(a.parse=function(){function e(a){this.source=a,this.index=0}function f(){for(var b=this.source,d=this.source.length,e,f,g,h,i;this.index<d;){e=b.charAt(this.index);switch(e){case"	":case"\r":case"\n":case" ":this.index+=1;break;case"{":case"}":case"[":case"]":case":":case",":return this.index+=1,e;case'"':f="@",this.index+=1;while(this.index<d){e=b.charAt(this.index);if(e<" ")throw SyntaxError("Unescaped control character in string.");if(e=="\\"){this.index+=1,e=b.charAt(this.index);if('\\"/btnfr'.indexOf(e)>-1)f+=a[e],this.index+=1;else{if(e!="u")throw SyntaxError("Invalid escape sequence in string.");g=this.index+=1;for(h=this.index+4;this.index<h;this.index+=1){e=b.charAt(this.index);if(!(e>="0"&&e<="9"||e>="a"&&e<="f"||e>="A"&&e<="F"))throw SyntaxError("Invalid Unicode escape sequence in string.")}f+=c("0x"+b.slice(g,this.index))}}else{if(e=='"')break;f+=e,this.index+=1}}if(b.charAt(this.index)=='"')return this.index+=1,f;throw SyntaxError("Unterminated string.");default:g=this.index,e=="-"&&(i=!0,e=b.charAt(this.index+=1));if(e>="0"&&e<="9"){if(e=="0"&&(e=b.charAt(this.index+1),e>="0"&&e<="9"))throw SyntaxError("Illegal octal literal.");i=!1;for(;this.index<d&&(e=b.charAt(this.index),e>="0"&&e<="9");this.index+=1);if(b.charAt(this.index)=="."){h=this.index+=1;for(;h<d&&(e=b.charAt(h),e>="0"&&e<="9");h+=1);if(h==this.index)throw SyntaxError("Illegal trailing decimal.");this.index=h}e=b.charAt(this.index);if(e=="e"||e=="E"){e=b.charAt(this.index+=1);if(e=="+"||e=="-")this.index+=1;for(h=this.index;h<d&&(e=b.charAt(h),e>="0"&&e<="9");h+=1);if(h==this.index)throw SyntaxError("Illegal empty exponent.");this.index=h}return+b.slice(g,this.index)}if(i)throw SyntaxError("Unexpected `-`.");if(e=="t"&&b.slice(this.index,this.index+4)=="true")return this.index+=4,!0;if(e=="f"&&b.slice(this.index,this.index+5)=="false")return this.index+=5,!1;if(e=="n"&&b.slice(this.index,this.index+4)=="null")return this.index+=4,null;throw SyntaxError("Unrecognized token.")}}return"$"}function g(a){var b,c,d;if(a=="$")throw SyntaxError("Unexpected end-of-file.");if(typeof a=="string"){if(a.charAt(0)=="@")return a.slice(1);switch(a){case"[":b=[];for(;;c||(c=!0)){a=this.lex();if(a=="]")break;if(c){if(a!=",")throw SyntaxError("A comma (`,`) must separate the previous array element from the next.");a=this.lex();if(a=="]")throw SyntaxError("Unexpected trailing `,` in array literal.")}if(a==",")throw SyntaxError("Unexpected `,` in array literal.");b.push(this.get(a))}return b;case"{":b={};for(;;c||(c=!0)){a=this.lex();if(a=="}")break;if(c){if(a!=",")throw SyntaxError("A comma (`,`) must separate the previous object member from the next.");a=this.lex();if(a=="}")throw SyntaxError("Unexpected trailing `,`. in object literal.")}if(a==",")throw SyntaxError("Unexpected `,` in object literal.");if(typeof a!="string"||a.charAt(0)!="@")throw SyntaxError("Object property names must be double-quoted strings.");if(this.lex()!=":")throw SyntaxError("A single colon (`:`) must separate each object property name from the value.");b[a.slice(1)]=this.get(this.lex())}return b}throw SyntaxError("Expected `[` or `{`.")}return a}function h(a,c,e){var f=a[c],g,i;if(typeof f=="object"&&f)if(b.call(f)=="[object Array]")for(g=f.length;g--;)i=h(f,g,e),i===void 0?f.splice(g,1):f[g]=i;else d(f,function(a){var b=h(f,a,e);b===void 0?delete f[a]:f[a]=b});return e.call(a,c,f)}function i(a,c){var d=new e(""+a),f=d.get(d.lex());if(d.lex()!="$")throw SyntaxError("Expected end-of-file.");return c&&b.call(c)=="[object Function]"?h({$:f},"$",c):f}var a={"\\":"\\",'"':'"',"/":"/",b:"\b",t:"	",n:"\n",f:"\f",r:"\r"},c="".constructor.fromCharCode;return e.prototype.lex=f,e.prototype.get=g,i}()),a});
