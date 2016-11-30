/**
 * update 2015-11-8
 * 修改数组方法: Array.prototype.unique & Array.prototype.isExist
 * 修改ajax方法
 * 修改animatedPlay
 * 修改字符串方法: String.prototype.getBytes
 * update 2016-10-8
 * + getEventTarget(event)
 * update 2016-9-30
 * + Util.getBytes(str)
 * update 2016-6-30
 * 修改 email正则包含大写字母
 * update 2016-6-15
 * + animatedPlay;loadScript
 */
'use strict';

//Timeago
(function($){$.timeago=function(timestamp){if(timestamp instanceof Date){return inWords(timestamp)}else{if(typeof timestamp==="string"){return inWords($.timeago.parse(timestamp))}else{if(typeof timestamp==="number"){return inWords(new Date(timestamp))}else{return inWords($.timeago.datetime(timestamp))}}}};var $t=$.timeago;$.extend($.timeago,{settings:{refreshMillis:60000,allowFuture:false,strings:{prefixAgo:null,prefixFromNow:"从现在开始",suffixAgo:"前",suffixFromNow:null,seconds:"不到 1 分钟",minute:"约 1 分钟",minutes:"%d 分钟",hour:"约 1 小时",hours:"约 %d 小时",day:"1 天",days:"%d 天",month:"约 1 个月",months:"%d 个月",year:"约 1 年",years:"%d 年",numbers:[],wordSeparator:""}},inWords:function(distanceMillis){var $l=this.settings.strings;var prefix=$l.prefixAgo;var suffix=$l.suffixAgo;if(this.settings.allowFuture){if(distanceMillis<0){prefix=$l.prefixFromNow;suffix=$l.suffixFromNow}}var seconds=Math.abs(distanceMillis)/1000;var minutes=seconds/60;var hours=minutes/60;var days=hours/24;var years=days/365;function substitute(stringOrFunction,number){var string=$.isFunction(stringOrFunction)?stringOrFunction(number,distanceMillis):stringOrFunction;var value=($l.numbers&&$l.numbers[number])||number;return string.replace(/%d/i,value)}var words=seconds<45&&substitute($l.seconds,Math.round(seconds))||seconds<90&&substitute($l.minute,1)||minutes<45&&substitute($l.minutes,Math.round(minutes))||minutes<90&&substitute($l.hour,1)||hours<24&&substitute($l.hours,Math.round(hours))||hours<42&&substitute($l.day,1)||days<30&&substitute($l.days,Math.round(days))||days<45&&substitute($l.month,1)||days<365&&substitute($l.months,Math.round(days/30))||years<1.5&&substitute($l.year,1)||substitute($l.years,Math.round(years));var separator=$l.wordSeparator===undefined?" ":$l.wordSeparator;return $.trim([prefix,words,suffix].join(separator))},parse:function(iso8601){var s=$.trim(iso8601);s=s.replace(/\.\d+/,"");s=s.replace(/-/,"/").replace(/-/,"/");s=s.replace(/T/," ").replace(/Z/," UTC");s=s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(s)},datetime:function(elem){var iso8601=$t.isTime(elem)?$(elem).attr("datetime"):$(elem).attr("title");return $t.parse(iso8601)},isTime:function(elem){return $(elem).get(0).tagName.toLowerCase()==="time"}});$.fn.timeago=function(){var self=this;self.each(refresh);var $s=$t.settings;if($s.refreshMillis>0){setInterval(function(){self.each(refresh)},$s.refreshMillis)}return self};function refresh(){var data=prepareData(this);if(!isNaN(data.datetime)){$(this).text(inWords(data.datetime)=="不到 1 分钟前"?"刚刚":inWords(data.datetime))}return this}function prepareData(element){element=$(element);if(!element.data("timeago")){element.data("timeago",{datetime:$t.datetime(element)});var text=$.trim(element.text());if(text.length>0&&!($t.isTime(element)&&element.attr("title"))){element.attr("title",text)}}return element.data("timeago")}function inWords(date){return $t.inWords(distance(date))}function distance(date){return(new Date().getTime()-date.getTime())}document.createElement("abbr");document.createElement("time")}(jQuery));function zeropad(num){return((num<10)?"0":"")+num}function iso8601(date){return date.getUTCFullYear()+"-"+zeropad(date.getUTCMonth()+1)+"-"+zeropad(date.getUTCDate())+"T"+zeropad(date.getUTCHours())+":"+zeropad(date.getUTCMinutes())+":"+zeropad(date.getUTCSeconds())+"Z"};
//Fastclick
function FastClick(e){"use strict";var t,n=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=e;if(!e||!e.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)};if(FastClick.notNeeded(e)){return}if(this.deviceIsAndroid){e.addEventListener("mouseover",this.onMouse,true);e.addEventListener("mousedown",this.onMouse,true);e.addEventListener("mouseup",this.onMouse,true)}e.addEventListener("click",this.onClick,true);e.addEventListener("touchstart",this.onTouchStart,false);e.addEventListener("touchend",this.onTouchEnd,false);e.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;if(t==="click"){i.call(e,t,n.hijacked||n,r)}else{i.call(e,t,n,r)}};e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;if(t==="click"){i.call(e,t,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(e,t,n,r)}}}if(typeof e.onclick==="function"){t=e.onclick;e.addEventListener("click",function(e){t(e)},false);e.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(this.deviceIsIOS&&e.type==="file"||e.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(e.className)};FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":case"select":return true;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};FastClick.prototype.sendClick=function(e,t){"use strict";var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent("click",true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};FastClick.prototype.focus=function(e){"use strict";var t;if(this.deviceIsIOS&&e.setSelectionRange){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,r;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(this.deviceIsIOS){r=window.getSelection();if(r.rangeCount&&!r.isCollapsed){return true}if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<200){e.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};FastClick.prototype.findControl=function(e){"use strict";if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,r,i,s,o=this.targetElement;if(this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<200){this.cancelNextClick=true;return true}this.lastClickTime=e.timeStamp;n=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){s=e.changedTouches[0];o=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)}r=o.tagName.toLowerCase();if(r==="label"){t=this.findControl(o);if(t){this.focus(o);if(this.deviceIsAndroid){return false}o=t}}else if(this.needsFocus(o)){if(e.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&r==="input"){this.targetElement=null;return false}this.focus(o);if(!this.deviceIsIOS4||r!=="select"){this.targetElement=null;e.preventDefault()}return false}if(this.deviceIsIOS&&!this.deviceIsIOS4){i=o.fastClickScrollParent;if(i&&i.fastClickLastScrollTop!==i.scrollTop){return true}}if(!this.needsClick(o)){e.preventDefault();this.sendClick(o,e)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(e){"use strict";if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};FastClick.prototype.onClick=function(e){"use strict";var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};FastClick.prototype.destroy=function(){"use strict";var e=this.layer;if(this.deviceIsAndroid){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(e){"use strict";var t;if(typeof window.ontouchstart==="undefined"){return true}if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(FastClick.prototype.deviceIsAndroid){t=document.querySelector("meta[name=viewport]");if(t&&t.content.indexOf("user-scalable=no")!==-1){return true}}else{return true}}if(e.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(e){"use strict";return new FastClick(e)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}
// (plugin) when clicked outside of an element 
(function($){$.fn.outside = function(ename, cb){return this.each(function(){var $this = $(this),self = this;$(document).bind(ename, function tempo(e){if(e.target !== self && !$.contains(self, e.target)){cb.apply(self, [e]);if(!self.parentNode) $(document.body).unbind(ename, tempo);}});});};}(jQuery));
//Autosize 1.14 - jQuery plugin for textareas
(function(e){var t={className:"autosizejs",append:"",callback:!1},n="hidden",r="border-box",i="lineHeight",s='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',o=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],u="oninput",a="onpropertychange",f=e(s)[0];f.setAttribute(u,"return"),e.isFunction(f[u])||a in f?(e(f).css(i,"99px"),e(f).css(i)==="99px"&&o.push(i),e.fn.autosize=function(i){return i=e.extend({},t,i||{}),this.each(function(){function b(){var e,r,s;p||(p=!0,l.value=t.value+i.append,l.style.overflowY=t.style.overflowY,s=parseInt(t.style.height,10),l.style.width=f.css("width"),l.scrollTop=0,l.scrollTop=9e4,e=l.scrollTop,r=n,e>h?(e=h,r="scroll"):e<c&&(e=c),e+=m,t.style.overflowY=r,s!==e&&(t.style.height=e+"px",y&&i.callback.call(t)),setTimeout(function(){p=!1},1))}var t=this,f=e(t),l,c=f.height(),h=parseInt(f.css("maxHeight"),10),p,d=o.length,v,m=0,g=t.value,y=e.isFunction(i.callback);if(f.css("box-sizing")===r||f.css("-moz-box-sizing")===r||f.css("-webkit-box-sizing")===r)m=f.outerHeight()-f.height();if(f.data("mirror")||f.data("ismirror"))return;l=e(s).data("ismirror",!0).addClass(i.className)[0],v=f.css("resize")==="none"?"none":"horizontal",f.data("mirror",e(l)).css({overflow:n,overflowY:n,wordWrap:"break-word",resize:v}),h=h&&h>0?h:9e4;while(d--)l.style[o[d]]=f.css(o[d]);e("body").append(l),a in t?u in t?t[u]=t.onkeyup=b:t[a]=b:(t[u]=b,t.value="",t.value=g),e(window).resize(b),f.bind("autosize",b),b()})}):e.fn.autosize=function(e){return this}})(jQuery);
//! touchjs.min v0.2.14  手势
//"use strict";!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(b):a.touch=b()}(this,function(){function a(){var a="mouseup mousedown mousemove mouseout",c="touchstart touchmove touchend touchcancel",d=b.hasTouch?c:a;d.split(" ").forEach(function(a){document.addEventListener(a,A,!1)})}var b={};b.PCevts={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touchcancel:"mouseout"},b.hasTouch="ontouchstart"in window,b.getType=function(a){return Object.prototype.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},b.getSelector=function(a){if(a.id)return"#"+a.id;if(a.className){var b=a.className.split(/\s+/);return"."+b.join(".")}return a===document?"body":a.tagName.toLowerCase()},b.matchSelector=function(a,b){return a.webkitMatchesSelector(b)},b.getEventListeners=function(a){return a.listeners},b.getPCevts=function(a){return this.PCevts[a]||a},b.forceReflow=function(){var a="reflowDivBlock",b=document.getElementById(a);b||(b=document.createElement("div"),b.id=a,document.body.appendChild(b));var c=b.parentNode,d=b.nextSibling;c.removeChild(b),c.insertBefore(b,d)},b.simpleClone=function(a){return Object.create(a)},b.getPosOfEvent=function(a){if(this.hasTouch){for(var b=[],c=null,d=0,e=a.touches.length;e>d;d++)c=a.touches[d],b.push({x:c.pageX,y:c.pageY});return b}return[{x:a.pageX,y:a.pageY}]},b.getDistance=function(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)},b.getFingers=function(a){return a.touches?a.touches.length:1},b.calScale=function(a,b){if(a.length>=2&&b.length>=2){var c=this.getDistance(a[1],a[0]),d=this.getDistance(b[1],b[0]);return d/c}return 1},b.getAngle=function(a,b){return 180*Math.atan2(b.y-a.y,b.x-a.x)/Math.PI},b.getAngle180=function(a,b){var c=Math.atan(-1*(b.y-a.y)/(b.x-a.x))*(180/Math.PI);return 0>c?c+180:c},b.getDirectionFromAngle=function(a){var b={up:-45>a&&a>-135,down:a>=45&&135>a,left:a>=135||-135>=a,right:a>=-45&&45>=a};for(var c in b)if(b[c])return c;return null},b.getXYByElement=function(a){for(var b=0,c=0;a.offsetParent;)b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;return{left:b,top:c}},b.reset=function(){h=i=j=null,q=o=k=l=!1,m=!1,f={},t=!1},b.isTouchMove=function(a){return"touchmove"===a.type||"mousemove"===a.type},b.isTouchEnd=function(a){return"touchend"===a.type||"mouseup"===a.type||"touchcancel"===a.type},b.env=function(){var a={},b=navigator.userAgent,c=b.match(/(Android)[\s\/]+([\d\.]+)/),d=b.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),e=b.match(/(Windows\s+Phone)\s([\d\.]+)/),f=/WebKit\/[\d.]+/i.test(b),g=d?navigator.standalone?f:/Safari/i.test(b)&&!/CriOS/i.test(b)&&!/MQQBrowser/i.test(b):!1;return c&&(a.android=!0,a.version=c[2]),d&&(a.ios=!0,a.version=d[2].replace(/_/g,"."),a.ios7=/^7/.test(a.version),"iPad"===d[1]?a.ipad=!0:"iPhone"===d[1]?(a.iphone=!0,a.iphone5=568==screen.height):"iPod"===d[1]&&(a.ipod=!0)),e&&(a.wp=!0,a.version=e[2],a.wp8=/^8/.test(a.version)),f&&(a.webkit=!0),g&&(a.safari=!0),a}();var c={proxyid:0,proxies:[],trigger:function(a,b,c){c=c||{};var d,e={bubbles:!0,cancelable:!0,detail:c};try{"undefined"!=typeof CustomEvent?(d=new CustomEvent(b,e),a&&a.dispatchEvent(d)):(d=document.createEvent("CustomEvent"),d.initCustomEvent(b,!0,!0,c),a&&a.dispatchEvent(d))}catch(f){console.warn("Touch.js is not supported by environment.")}},bind:function(a,c,d){a.listeners=a.listeners||{},a.listeners[c]?a.listeners[c].push(d):a.listeners[c]=[d];var e=function(a){b.env.ios7&&b.forceReflow(),a.originEvent=a;for(var c in a.detail)"type"!==c&&(a[c]=a.detail[c]);a.startRotate=function(){t=!0};var e=d.call(a.target,a);"undefined"==typeof e||e||(a.stopPropagation(),a.preventDefault())};d.proxy=d.proxy||{},d.proxy[c]?d.proxy[c].push(this.proxyid++):d.proxy[c]=[this.proxyid++],this.proxies.push(e),a.addEventListener&&a.addEventListener(c,e,!1)},unbind:function(a,b,c){if(c){var d=c.proxy[b];d&&d.length&&d.forEach(function(){a.removeEventListener&&a.removeEventListener(b,this.proxies[this.proxyid],!1)})}else{var e=a.listeners[b];e&&e.length&&e.forEach(function(c){a.removeEventListener(b,c,!1)})}},delegate:function(a,c,d,e){var f=function(c){var f,g;c.originEvent=c;for(var h in c.detail)"type"!==h&&(c[h]=c.detail[h]);c.startRotate=function(){t=!0};var i=b.getSelector(a)+" "+d,j=b.matchSelector(c.target,i),k=b.matchSelector(c.target,i+" "+c.target.nodeName);if(!j&&k){for(b.env.ios7&&b.forceReflow(),f=c.target;!b.matchSelector(f,i);)f=f.parentNode;g=e.call(c.target,c),"undefined"==typeof g||g||(c.stopPropagation(),c.preventDefault())}else b.env.ios7&&b.forceReflow(),(j||k)&&(g=e.call(c.target,c),"undefined"==typeof g||g||(c.stopPropagation(),c.preventDefault()))};e.proxy=e.proxy||{},e.proxy[c]?e.proxy[c].push(this.proxyid++):e.proxy[c]=[this.proxyid++],this.proxies.push(f),a.listeners=a.listeners||{},a.listeners[c]?a.listeners[c].push(f):a.listeners[c]=[f],a.addEventListener&&a.addEventListener(c,f,!1)},undelegate:function(a,b,c,d){if(d){var e=d.proxy[b];e.length&&e.forEach(function(){a.removeEventListener&&a.removeEventListener(b,this.proxies[this.proxyid],!1)})}else{var f=a.listeners[b];f.forEach(function(c){a.removeEventListener(b,c,!1)})}}},d={tap:!0,doubleTap:!0,tapMaxDistance:10,hold:!0,tapTime:200,holdTime:650,maxDoubleTapInterval:300,swipe:!0,swipeTime:300,swipeMinDistance:18,swipeFactor:5,drag:!0,pinch:!0,minScaleRate:0,minRotationAngle:0},e={TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend",TOUCH_CANCEL:"touchcancel",MOUSE_DOWN:"mousedown",MOUSE_MOVE:"mousemove",MOUSE_UP:"mouseup",CLICK:"click",PINCH_START:"pinchstart",PINCH_END:"pinchend",PINCH:"pinch",PINCH_IN:"pinchin",PINCH_OUT:"pinchout",ROTATION_LEFT:"rotateleft",ROTATION_RIGHT:"rotateright",ROTATION:"rotate",SWIPE_START:"swipestart",SWIPING:"swiping",SWIPE_END:"swipeend",SWIPE_LEFT:"swipeleft",SWIPE_RIGHT:"swiperight",SWIPE_UP:"swipeup",SWIPE_DOWN:"swipedown",SWIPE:"swipe",DRAG:"drag",DRAGSTART:"dragstart",DRAGEND:"dragend",HOLD:"hold",TAP:"tap",DOUBLE_TAP:"doubletap"},f={start:null,move:null,end:null},g=0,h=null,i=null,j=null,k=!1,l=!1,m=!1,n={},o=!1,p=null,q=!1,r=null,s=1,t=!1,u=[],v=0,w=0,x=0,y=null,z={getAngleDiff:function(a){for(var c=parseInt(v-b.getAngle180(a[0],a[1]),10),d=0;Math.abs(c-w)>90&&d++<50;)0>w?c-=180:c+=180;return w=parseInt(c,10)},pinch:function(a){var g=a.target;if(d.pinch){if(!o)return;if(b.getFingers(a)<2&&!b.isTouchEnd(a))return;var h=b.calScale(f.start,f.move),i=this.getAngleDiff(f.move),j={type:"",originEvent:a,scale:h,rotation:i,direction:i>0?"right":"left",fingersCount:b.getFingers(a)};if(l?b.isTouchMove(a)?(j.fingerStatus="move",c.trigger(g,e.PINCH,j)):b.isTouchEnd(a)&&(j.fingerStatus="end",c.trigger(g,e.PINCH_END,j),b.reset()):(l=!0,j.fingerStatus="start",c.trigger(g,e.PINCH_START,j)),Math.abs(1-h)>d.minScaleRate){var k=b.simpleClone(j),m=1e-11;h>s?(s=h-m,c.trigger(g,e.PINCH_OUT,k,!1)):s>h&&(s=h+m,c.trigger(g,e.PINCH_IN,k,!1)),b.isTouchEnd(a)&&(s=1)}if(Math.abs(i)>d.minRotationAngle){var n,p=b.simpleClone(j);n=i>0?e.ROTATION_RIGHT:e.ROTATION_LEFT,c.trigger(g,n,p,!1),c.trigger(g,e.ROTATION,j)}}},rotateSingleFinger:function(a){var d=a.target;if(t&&b.getFingers(a)<2){if(!f.move)return;if(u.length<2){var g=b.getXYByElement(d);u=[{x:g.left+d.offsetWidth/2,y:g.top+d.offsetHeight/2},f.move[0]],v=parseInt(b.getAngle180(u[0],u[1]),10)}var h=[u[0],f.move[0]],i=this.getAngleDiff(h),j={type:"",originEvent:a,rotation:i,direction:i>0?"right":"left",fingersCount:b.getFingers(a)};b.isTouchMove(a)?j.fingerStatus="move":(b.isTouchEnd(a)||"mouseout"===a.type)&&(j.fingerStatus="end",c.trigger(d,e.PINCH_END,j),b.reset());var k=i>0?e.ROTATION_RIGHT:e.ROTATION_LEFT;c.trigger(d,k,j),c.trigger(d,e.ROTATION,j)}},swipe:function(a){var h=a.target;if(o&&f.move&&!(b.getFingers(a)>1)){var i=Date.now(),j=i-g,l=b.getDistance(f.start[0],f.move[0]),p={x:f.move[0].x-n.left,y:f.move[0].y-n.top},q=b.getAngle(f.start[0],f.move[0]),r=b.getDirectionFromAngle(q),s=j/1e3,t=10*(10-d.swipeFactor)*s*s,u={type:e.SWIPE,originEvent:a,position:p,direction:r,distance:l,distanceX:f.move[0].x-f.start[0].x,distanceY:f.move[0].y-f.start[0].y,x:f.move[0].x-f.start[0].x,y:f.move[0].y-f.start[0].y,angle:q,duration:j,fingersCount:b.getFingers(a),factor:t};if(d.swipe){var v=function(){var a=e;switch(r){case"up":c.trigger(h,a.SWIPE_UP,u);break;case"down":c.trigger(h,a.SWIPE_DOWN,u);break;case"left":c.trigger(h,a.SWIPE_LEFT,u);break;case"right":c.trigger(h,a.SWIPE_RIGHT,u)}};k?b.isTouchMove(a)?(u.fingerStatus=u.swipe="move",c.trigger(h,e.SWIPING,u),j>d.swipeTime&&j<d.swipeTime+50&&l>d.swipeMinDistance&&(v(),c.trigger(h,e.SWIPE,u,!1))):(b.isTouchEnd(a)||"mouseout"===a.type)&&(u.fingerStatus=u.swipe="end",c.trigger(h,e.SWIPE_END,u),d.swipeTime>j&&l>d.swipeMinDistance&&(v(),c.trigger(h,e.SWIPE,u,!1))):(u.fingerStatus=u.swipe="start",k=!0,c.trigger(h,e.SWIPE_START,u))}d.drag&&(m?b.isTouchMove(a)?(u.fingerStatus=u.swipe="move",c.trigger(h,e.DRAG,u)):b.isTouchEnd(a)&&(u.fingerStatus=u.swipe="end",c.trigger(h,e.DRAGEND,u)):(u.fingerStatus=u.swipe="start",m=!0,c.trigger(h,e.DRAGSTART,u)))}},tap:function(a){var h=a.target;if(d.tap){var i=Date.now(),j=i-g,k=b.getDistance(f.start[0],f.move?f.move[0]:f.start[0]);clearTimeout(p);var l=function(){if(y&&d.doubleTap&&g-x<d.maxDoubleTapInterval){var a=b.getDistance(y,f.start[0]);if(16>a)return!0}return!1}();if(l)return clearTimeout(r),void c.trigger(h,e.DOUBLE_TAP,{type:e.DOUBLE_TAP,originEvent:a,position:f.start[0]});if(d.tapMaxDistance<k)return;d.holdTime>j&&b.getFingers(a)<=1&&(q=!0,x=i,y=f.start[0],r=setTimeout(function(){c.trigger(h,e.TAP,{type:e.TAP,originEvent:a,fingersCount:b.getFingers(a),position:y})},d.tapTime))}},hold:function(a){var e=a.target;d.hold&&(clearTimeout(p),p=setTimeout(function(){if(f.start){var g=b.getDistance(f.start[0],f.move?f.move[0]:f.start[0]);d.tapMaxDistance<g||q||c.trigger(e,"hold",{type:"hold",originEvent:a,fingersCount:b.getFingers(a),position:f.start[0]})}},d.holdTime))}},A=function(a){var c=a.target;switch(a.type){case"touchstart":case"mousedown":u=[],o=!0,(!f.start||f.start.length<2)&&(f.start=b.getPosOfEvent(a)),b.getFingers(a)>=2&&(v=parseInt(b.getAngle180(f.start[0],f.start[1]),10)),g=Date.now(),h=a,n={};var d=c.getBoundingClientRect(),e=document.documentElement;n={top:d.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||0),left:d.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},z.hold(a);break;case"touchmove":case"mousemove":if(!o||!f.start)return;f.move=b.getPosOfEvent(a),b.getFingers(a)>=2?z.pinch(a):t?z.rotateSingleFinger(a):z.swipe(a);break;case"touchend":case"touchcancel":case"mouseup":case"mouseout":if(!o)return;j=a,l?z.pinch(a):t?z.rotateSingleFinger(a):k?z.swipe(a):z.tap(a),b.reset(),v=0,w=0,a.touches&&1===a.touches.length&&(o=!0,t=!0)}},B=function(){function a(a){b.hasTouch||(a=b.getPCevts(a)),j.forEach(function(b){c.delegate(b,a,h,g[a])})}function d(a){b.hasTouch||(a=b.getPCevts(a)),j.forEach(function(b){c.bind(b,a,g[a])})}var e,f,g,h,i=arguments;if(i.length<2||i>4)return console.error("unexpected arguments!");var j="string"===b.getType(i[0])?document.querySelectorAll(i[0]):i[0];if(j=j.length?Array.prototype.slice.call(j):[j],3===i.length&&"string"===b.getType(i[1]))return e=i[1].split(" "),f=i[2],void e.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),j.forEach(function(b){c.bind(b,a,f)})});if(3!==i.length||"object"!==b.getType(i[1]))if(2!==i.length||"object"!==b.getType(i[1])){if(4===i.length&&"object"===b.getType(i[2]))return e=i[1].split(" "),f=i[3],void e.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),j.forEach(function(b){c.bind(b,a,f)})});if(4===i.length){var k=j[0];return e=i[1].split(" "),h=i[2],f=i[3],void e.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.delegate(k,a,h,f)})}}else{g=i[1];for(var l in g)d(l)}else{g=i[1],h=i[2];for(var m in g)a(m)}},C=function(){var a,d,e=arguments;if(e.length<1||e.length>4)return console.error("unexpected arguments!");var f="string"===b.getType(e[0])?document.querySelectorAll(e[0]):e[0];if(f=f.length?Array.prototype.slice.call(f):[f],1===e.length||2===e.length)return void f.forEach(function(d){a=e[1]?e[1].split(" "):Object.keys(d.listeners),a.length&&a.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.unbind(d,a),c.undelegate(d,a)})});if(3===e.length&&"function"===b.getType(e[2]))return d=e[2],void f.forEach(function(f){a=e[1].split(" "),a.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.unbind(f,a,d)})});if(3===e.length&&"string"===b.getType(e[2])){var g=e[2];return void f.forEach(function(d){a=e[1].split(" "),a.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.undelegate(d,a,g)})})}return 4===e.length?(d=e[3],void f.forEach(function(f){a=e[1].split(" "),a.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.undelegate(f,a,g,d)})})):void 0},D=function(a,d,e){var f=arguments;b.hasTouch||(d=b.getPCevts(d));var g="string"===b.getType(f[0])?document.querySelectorAll(f[0]):f[0];g=g.length?Array.prototype.call(g):[g],g.forEach(function(a){c.trigger(a,d,e)})};a();var E={};return E.on=E.bind=E.live=B,E.off=E.unbind=E.die=C,E.config=d,E.trigger=D,E});

function htmlEscape(s) {
	return s;
	/*if(!s) return;
	return s.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');*/
}
function htmlBack(s) {
	return s;
	/*if(!s) return;
	return s.replace('&amp;', '&')
		.replace('&lt;', '<')
		.replace('&gt;', '>')
		.replace('&#039;', "'")
		.replace('&quot;', '"')
		.replace('<br />', '\n');*/
}
function fuck(u){ alert(JSON.stringify(u)) }

/**提示*/
var toastr = {
	message: '',
	st: 2000,
	html: function(type){
		return '<div class="toast '+type+'" onclick="toastr._close();"><span>'+this.message+'</span></div>';
	},
	_close: function(){
		$(".toast").remove();
		this.message = '';
		this.st = 2000;
	},
	_show: function(type){
		$(".toast").remove();
		$("body").prepend(toastr.html(type));
		$(".toast span").fadeOut(0).fadeIn(200, function(){
			$(".toast span").delay(toastr.st).fadeOut(200, function(){
				toastr._close();
			});
		});
	},
	warning: function(message,st){
		this.message = message;
		if(st) this.st = st;
		this._show('warning')
	},
	success: function(message,st){
		this.message = message;
		if(st) this.st = st;
		this._show('success')
	},
	info: function(message,st){
		this.message = message;
		if(st) this.st = st;
		this._show('info')
	},
	error: function(message,st){
		this.message = message;
		if(st) this.st = st;
		this._show('error')
	}
};

window.Tools = {};;
Tools.Dater = {
	defaultSeparator: '-',
	fomart: {},
	padZero: function(v){
		return v >= 10 ? v : '0'+v;
	},
	//返回本周日的日期
	getThisSunday: function(){
		var date = new Date();
		date.setDate(date.getDate()+7 - date.getDay());
		return date;
	},
	getThisMonday: function(){
		var date = new Date();
		date.setDate(date.getDate()+1 - date.getDay());
		return date;
	},
	getFirstDayOfMonth: function(){
		var date = new Date();
		date.setDate(1);
		return date;
	},
	getLastDayOfMonth: function(date){
		if($.type(date) != 'date'){
			date = new Date(date);
		}
		var m = date.getMonth();
		date.setMonth(m+1, 1);
		date = date - 86400000
		return new Date(date);
	},
	getFirstDayOfQuarter: function(){
		var date = new Date();
		var m = date.getMonth();
		if(m>=0 && m<3){
			m = 0;
		}else if(m>=3 && m<6){
			m = 3;
		}else if(m>=6 && m<9){
			m = 7;
		}else if(m>=9 && m<12){
			m = 9;
		}
		date.setMonth(m, 1)
		return date;
	},
	getLastDayOfQuarter: function(date){
		if($.type(date) != 'date'){
			date = new Date(date);
		}
		var m = date.getMonth();
		if(m>=0 && m<3){
			m = 2;
		}else if(m>=3 && m<6){
			m = 5;
		}else if(m>=6 && m<9){
			m = 8;
		}else if(m>=9 && m<12){
			m = 11;
		}
		date.setMonth(m+1, 1)
		date = date - 86400000
		return new Date(date);
	},
	//weekOfYear(2014, 07, 02)
	weekOfYear: function(a, b, c){
		/* 
		date1是当前日期 
		date2是当年第一天 
		d是当前日期是今年第多少天 
		用d + 当前年的第一天的周差距的和在除以7就是本年第几周 
		*/ 
		var 
		date1 = new Date(a, parseInt(b) - 1, c), 
		date2 = new Date(a, 0, 1), 
		d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000); 
		return Math.ceil( (d + ((date2.getDay() + 1) - 1)) / 7 );
	},
	getYMD: function(v, sep){
		sep = sep ? sep : Tools.Dater.defaultSeparator;
		var date = new Date(v);
		var 
		y = date.getFullYear(),
		m = date.getMonth()+1,
		d = date.getDate();
		return y + sep + this.padZero(m) + sep + this.padZero(d);
	},
	fmt2Date: function(v){
		v = v ? v : new Date();
		if($.type(v) == 'number' || $.type(v) == 'string') v = new Date(v)
		return v;
	}
}

Tools.zz = {
	email: function(str){
		var zz = /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
		return zz.test(str);
	},
	isChinese: function(str){
		var zz = /[^\x00-\xff]/g;
		return zz.test(str);
	},
	isNaturalNumber: function(str){
		var zz = /^[1-9]\d*$/;
		return zz.test(str);
	},
	isNumber: function(str){
		var zz = /^[0-9]*$/;
		return zz.test(str);
	},
	isTel: function(str){
		var zz = /^1[3|4|5|8][0-9]\d{4,8}$/;
		return zz.text(str)
	}
}


window.Util = {};;
Util.subString = function(str, len){
	if(!str) return false;
	return str.length > len ? str.substring(0, len)+"..." : str;
};
Util.subString_Chi = function(str, len){
	if(!str) return false;
	//判断是中文还是英文
	var value = str;
	if(Tools.zz.isChinese(str)){
		value = str.length > len ? str.substring(0, len)+"..." : str;
	}else{
		len = len * 2;
		value = str.length > len ? str.substring(0, len)+"..." : str;
	}
	return value;
};


Util.location = {
	getURLParam: function(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");//构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg);//匹配目标参数
		if (r!=null) return unescape(r[2]); return null;//返回参数值
	},
	/**
	   * 将页面地址的url后面所带的参数列表获取到，并且转换为json格式
	   * @name    unEscapeToJson
	   * @param   {String} url地址
	   * @return  {json}  
	  */
	unEscapeToJson: function(url) {
	    var postData = url.substring(url.indexOf("?") + 1, url.length).split("&");
	    var temp_json = {};
	    for (var i = 0; i < postData.length; i++) {
	        var temp_text = postData[i];
	        var key = temp_text.substring(0, temp_text.indexOf("="));
	        var val = temp_text.substring(temp_text.indexOf("=") + 1, temp_text.length);
	        temp_json[key] = val;
	    }
	    return temp_json;
	}
}
Util.navigator = {
	OS: {ios: 'ios',android: 'android',other: 'other'},
	ua: navigator.userAgent.toLowerCase(),
	isWX: function(){
		if(this.ua.match(/MicroMessenger/i)=='micromessenger')
			return true
		else
			return false
	},
	isDD: function(){
		if(this.ua.match(/dingtalk/i)=='dingtalk')
			return true
		else
			return false
	},
	isMinXing: function(){
		if(this.ua.match(/minxingmessenger/i)=='minxingmessenger')
			return true
		else
			return false
	},
	detectOS: function(){
		var os = this.OS;
		var us = this.ua;
		if ( /android/i.test(us) ){
			return os.android;
		}else if ( /ipad|iphone/i.test(us) ){
			return os.ios;
		}else{
			return os.other;
		}
	},
	isPhone: function(){
		var p = navigator.platform.toLowerCase()
		return !(p.indexOf('win') == 0 || 
		p.indexOf('mac') == 0 || 
		p.indexOf('x11') == 0 || 
		p.indexOf('linux') == 0)
	}
};

$(document).on('click','.scrolltohash',function(e){
	e.preventDefault();
	var target = '#'+$(this).attr('href');
	if ($(target).length) {
		var scrollpos = $(target).offset().top;
		$("html,body").stop().animate({scrollTop: scrollpos-80}, 800);
	}
});

var loadScript = function(src, callback) {
	var script = document.createElement("script"),
		c = function() {
			callback();
		};
	script.src = src;
	script.charset = "utf-8";
	script.onload = c;
	script.onreadystatechange = function() {
		if (this.readyState == "complete" || this.readyState == "loaded") {
			c();
		}
	};
	document.getElementsByTagName("head")[0].appendChild(script);
};

/**
 * 获取目标元素
 	-事件代理
 * @param {Object} e: event
 
 * var target = getEventTarget(e);
   if(target.tagName.toLowerCase() =='td')  {
        // DO SOMETHING WITH THE CELL
   }
 */
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}


//数组去重
Array.prototype.unique = function(){
	var arr = this,
	len = this.length,
	ret = [],
	hash = {};
	
	for(var i=0; i<len; i++){
		var v = arr[i];
		if(!hash[v]){
			hash[v] = 1;
			ret.push(v)
		}
	}
	return ret;
};
//检查元素是否存在于数组中
Array.prototype.isExist = function(v){
	//var str = this.join();//数组转成字符串--默认逗号分隔
	return this.indexOf(v) != -1;
};

/**
 * 计算字节数
 */
String.prototype.getBytes = function(){
	var len = this.length;
	var bytes = len;
	for(var i=0; i<len; i++){
        if (this.charCodeAt(i) > 255) bytes++;
    }
    return bytes;
}

/**
 * 基于Animate.css的动画添加函数
 * eg: $('#wrap').animatedPlay('fadeIn')
 */
$.fn.extend({
	animatedPlay: function(clazz){
		var css = clazz + ' animated';
		$(this).removeClass(css).addClass(css).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(css);
	    });
	}
})

window.AJAX = function(){
	var TYPE = {
		GET : 'get',
		POST: 'post'
	}
	return {
		get: function(data, callback){
			console.log(data)
			var params;
			if( typeof(data.params)=='object' ){
				params = JSON.stringify(data.params);
			}else if( typeof(data.params)=='string' ){
				params = data.params;
			}else{
				params = '';
			}
			var async = data.async == undefined ? true : false;
			$.ajax({
				url: data.url,
				data: params,
				type: TYPE.GET,
				dataType: 'json',
				async: async,
				cache: false,
				//global: true,
				headers: {
					"Content-type": "application/json"
				},
				success: function(ret){
					if(ret.status == 'success'){
						if(callback) callback(ret.data)
					}else{
						toastr.error(ret.errorMsg)
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
				},
	            complete:function(){
	            }
			})
		},
		post: function(data, callback){
			var params;
			if( typeof(data.params)=='object' ){
				params = JSON.stringify(data.params);
			}else if( typeof(data.params)=='string' ){
				params = data.params;
			}else{
				params = '';
			}
			var async = data.async == undefined ? true : false;
			$.ajax({
				url: data.url,
				data: params,
				type: TYPE.POST,
				dataType: 'json',
				async: async,
				cache: false,
				//global: true,
				headers: {
					"Content-type": "application/json"
				},
				success: function(ret){
					if(ret.status == 'success'){
						if(callback) callback(ret.data)
					}else{
						toastr.error(ret.errorMsg)
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
				},
	            complete:function(){
	            }
			})
		}
	}
};

//浏览器URL上取参数

$(function(){ 
	FastClick.attach(document.body);
});

//cookie 存储数量有限制最好不要超过20个, 大概是小于4KB
//Web Storage小于5M