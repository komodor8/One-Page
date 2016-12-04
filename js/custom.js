!function(e,n,t){function r(e){var n=C.className,t=_._config.classPrefix||"";if(w&&(n=n.baseVal),_._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}_._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?C.className.baseVal=n:C.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,a;for(var f in x)if(x.hasOwnProperty(f)){if(e=[],n=x[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?_[a[0]]=r:(!_[a[0]]||_[a[0]]instanceof Boolean||(_[a[0]]=new Boolean(_[a[0]])),_[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?l(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(w?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var s,i,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return s=f("style"),s.type="text/css",s.id="s"+u,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),i=t(p,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=l,C.offsetHeight):p.parentNode.removeChild(p),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,r,s){function l(){p&&(delete T.style,delete T.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var u=m(e,r);if(!o(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan"];!T.style;)p=!0,T.modElem=f(y.shift()),T.style=T.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=T.style[v],a(v,"-")&&(v=i(v)),T.style[v]!==t){if(s||o(r,"undefined"))return l(),"pfx"==n?v:!0;try{T.style[v]=r}catch(g){}if(T.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?v(a,n,r,s):(a=(e+" "+z.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=n.documentElement,w="svg"===C.nodeName.toLowerCase(),x=[],S={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},_=function(){};_.prototype=S,_=new _;var b="Moz O ms Webkit",E=S._config.usePrefixes?b.split(" "):[];S._cssomPrefixes=E;var P=function(n){var r,o=prefixes.length,s=e.CSSRule;if("undefined"==typeof s)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+n;for(var i=0;o>i;i++){var a=prefixes[i],f=a.toUpperCase()+"_"+r;if(f in s)return"@-"+a.toLowerCase()+"-"+n}return!1};S.atRule=P;var z=S._config.usePrefixes?b.toLowerCase().split(" "):[];S._domPrefixes=z;var N={elem:f("modernizr")};_._q.push(function(){delete N.elem});var T={style:N.elem.style};_._q.unshift(function(){delete T.style}),S.testAllProps=h,S.prefixed=function(e,n,t){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=i(e)),n?h(e,n,t):h(e,"pfx"))},S.testAllProps=y,_.addTest("csstransitions",y("transition","all",!0)),s(),r(g),delete S.addTest,delete S.addAsyncTest;for(var j=0;j<_._q.length;j++)_._q[j]();e.Modernizr=_}(window,document);