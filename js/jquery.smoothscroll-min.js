!function(){function n(){b.keyboardSupport&&G("keydown",v)}function o(){if(!f&&document.body){f=!0;var a=document.body,e=document.documentElement,k=window.innerHeight,l=a.scrollHeight;if(g=document.compatMode.indexOf("CSS")>=0?e:a,h=a,n(),top!=self)d=!0;else if(l>k&&(a.offsetHeight<=k||e.offsetHeight<=k)){var m=document.createElement("div");m.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+g.scrollHeight+"px",document.body.appendChild(m);var o;j=function(){o||(o=setTimeout(function(){c||(m.style.height="0",m.style.height=g.scrollHeight+"px",o=null)},500))},setTimeout(j,10),G("resize",j);var p={attributes:!0,childList:!0,characterData:!1};if(i=new Q(j),i.observe(a,p),g.offsetHeight<=k){var q=document.createElement("div");q.style.clear="both",a.appendChild(q)}}b.fixedBackground||c||(a.style.backgroundAttachment="scroll",e.style.backgroundAttachment="scroll")}}function p(){i&&i.disconnect(),H(_,u),H("mousedown",w),H("keydown",v),H("resize",j),H("load",o)}function t(a,c,d){if(J(c,d),1!=b.accelerationMax){var e=Date.now(),f=e-s;if(f<b.accelerationDelta){var g=(1+50/f)/2;g>1&&(g=Math.min(g,b.accelerationMax),c*=g,d*=g)}s=Date.now()}if(q.push({x:c,y:d,lastX:c<0?.99:-.99,lastY:d<0?.99:-.99,start:Date.now()}),!r){var h=a===document.body,i=function(e){for(var f=Date.now(),g=0,j=0,k=0;k<q.length;k++){var l=q[k],m=f-l.start,n=m>=b.animationTime,o=n?1:m/b.animationTime;b.pulseAlgorithm&&(o=T(o));var p=l.x*o-l.lastX>>0,s=l.y*o-l.lastY>>0;g+=p,j+=s,l.lastX+=p,l.lastY+=s,n&&(q.splice(k,1),k--)}h?window.scrollBy(g,j):(g&&(a.scrollLeft+=g),j&&(a.scrollTop+=j)),c||d||(q=[]),q.length?P(i,a,1e3/b.frameRate+1):r=!1};P(i,a,0),r=!0}}function u(a){f||o();var c=a.target,d=C(c);if(!d||a.defaultPrevented||a.ctrlKey)return!0;if(I(h,"embed")||I(c,"embed")&&/\.pdf/i.test(c.src)||I(h,"object"))return!0;var e=-a.wheelDeltaX||a.deltaX||0,g=-a.wheelDeltaY||a.deltaY||0;return l&&(a.wheelDeltaX&&M(a.wheelDeltaX,120)&&(e=-120*(a.wheelDeltaX/Math.abs(a.wheelDeltaX))),a.wheelDeltaY&&M(a.wheelDeltaY,120)&&(g=-120*(a.wheelDeltaY/Math.abs(a.wheelDeltaY)))),e||g||(g=-a.wheelDelta||0),1===a.deltaMode&&(e*=40,g*=40),!(b.touchpadSupport||!L(g))||(Math.abs(e)>1.2&&(e*=b.stepSize/120),Math.abs(g)>1.2&&(g*=b.stepSize/120),t(d,e,g),a.preventDefault(),void A())}function v(a){var c=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==m.spacebar;document.body.contains(h)||(h=document.activeElement);var e=/^(textarea|select|embed|object)$/i,f=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.test(c.nodeName)||I(c,"input")&&!f.test(c.type)||I(h,"video")||O(a)||c.isContentEditable||a.defaultPrevented||d)return!0;if((I(c,"button")||I(c,"input")&&f.test(c.type))&&a.keyCode===m.spacebar)return!0;var g,i=0,j=0,k=C(h),l=k.clientHeight;switch(k==document.body&&(l=window.innerHeight),a.keyCode){case m.up:j=-b.arrowScroll;break;case m.down:j=b.arrowScroll;break;case m.spacebar:g=a.shiftKey?1:-1,j=-g*l*.9;break;case m.pageup:j=.9*-l;break;case m.pagedown:j=.9*l;break;case m.home:j=-k.scrollTop;break;case m.end:var n=k.scrollHeight-k.scrollTop-l;j=n>0?n+10:0;break;case m.left:i=-b.arrowScroll;break;case m.right:i=b.arrowScroll;break;default:return!0}t(k,i,j),a.preventDefault(),A()}function w(a){h=a.target}function A(){clearTimeout(z),z=setInterval(function(){y={}},1e3)}function B(a,b){for(var c=a.length;c--;)y[x(a[c])]=b;return b}function C(a){var b=[],c=document.body,e=g.scrollHeight;do{var f=y[x(a)];if(f)return B(b,f);if(b.push(a),e===a.scrollHeight){var h=E(g)&&E(c),i=h||F(g);if(d&&D(g)||!d&&i)return B(b,R())}else if(D(a)&&F(a))return B(b,a)}while(a=a.parentElement)}function D(a){return a.clientHeight+10<a.scrollHeight}function E(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"hidden"!==b}function F(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"scroll"===b||"auto"===b}function G(a,b){window.addEventListener(a,b,!1)}function H(a,b){window.removeEventListener(a,b,!1)}function I(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function J(a,b){a=a>0?1:-1,b=b>0?1:-1,e.x===a&&e.y===b||(e.x=a,e.y=b,q=[],s=0)}function L(a){if(a)return k.length||(k=[a,a,a]),a=Math.abs(a),k.push(a),k.shift(),clearTimeout(K),K=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=k.join(","))},1e3),!N(120)&&!N(100)}function M(a,b){return Math.floor(a/b)==a/b}function N(a){return M(k[0],a)&&M(k[1],a)&&M(k[2],a)}function O(a){var b=a.target,c=!1;if(document.URL.indexOf("www.youtube.com/watch")!=-1)do if(c=b.classList&&b.classList.contains("html5-video-controls"))break;while(b=b.parentNode);return c}function S(a){var c,d,e;return a*=b.pulseScale,a<1?c=a-(1-Math.exp(-a)):(d=Math.exp(-1),a-=1,e=1-Math.exp(-a),c=d+e*(1-d)),c*b.pulseNormalize}function T(a){return a>=1?1:a<=0?0:(1==b.pulseNormalize&&(b.pulseNormalize/=S(1)),S(a))}function aa(c){for(var d in c)a.hasOwnProperty(d)&&(b[d]=c[d])}var h,i,j,z,K,a={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!1,fixedBackground:!0,excluded:""},b=a,c=!1,d=!1,e={x:0,y:0},f=!1,g=document.documentElement,k=[],l=/^Mac/.test(navigator.platform),m={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},q=[],r=!1,s=Date.now(),x=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),y={};window.localStorage&&localStorage.SS_deltaBuffer&&(k=localStorage.SS_deltaBuffer.split(","));var _,P=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),Q=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,R=function(){var a;return function(){if(!a){var b=document.createElement("div");b.style.cssText="height:10000px;width:1px;",document.body.appendChild(b);var c=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,3),a=document.body.scrollTop!=c?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(b)}return a}}(),U=window.navigator.userAgent,V=/Edge/.test(U),W=/chrome/i.test(U)&&!V,X=/safari/i.test(U)&&!V,Y=/mobile/i.test(U),Z=/Windows NT 6.1/i.test(U)&&/rv:11/i.test(U),$=(W||X||Z)&&!Y;"onwheel"in document.createElement("div")?_="wheel":"onmousewheel"in document.createElement("div")&&(_="mousewheel"),_&&$&&(G(_,u),G("mousedown",w),G("load",o)),aa.destroy=p,window.SmoothScrollOptions&&aa(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return aa}):"object"==typeof exports?module.exports=aa:window.SmoothScroll=aa}();
