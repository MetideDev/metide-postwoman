(window.webpackJsonp=window.webpackJsonp||[]).push([[156,28,97,98],{1320:function(e,t,r){"use strict";r.r(t);r(35),r(41),r(8);var n=r(257),o=(r(467),r(80)),i=r(3),a=r(18),l=r(71),c={};c.props={layoutId:{type:String,default:null}},c.setup=(e,t)=>{var r=Object(a.j)("SIDEBAR_ON_LEFT"),n=Object(o.useBreakpoints)(o.breakpointsTailwind).greater("md"),c=Object(a.j)("COLUMN_LAYOUT"),u=Object(a.j)("SIDEBAR"),s=Object(i.y)(),f=Object(i.a)((()=>!!s.sidebar)),v=e,d=Object(i.o)(25),p=Object(i.o)(75),b=Object(i.o)(45),y=Object(i.o)(65);function m(e){var t="".concat(v.layoutId,"-pane-config-").concat(e),r=Object(l.a)(t);return r?JSON.parse(r):null}return c.value||(b.value=50,y.value=50),function(){if(v.layoutId){var e=m("vertical");if(e){var[t,r]=e;p.value=null==t?void 0:t.size,d.value=null==r?void 0:r.size}var n=m("horizontal");if(n){var[o,i]=n;b.value=null==o?void 0:o.size,y.value=null==i?void 0:i.size}}}(),{SIDEBAR_ON_LEFT:r,mdAndLarger:n,COLUMN_LAYOUT:c,SIDEBAR:u,hasSidebar:f,PANE_SIDEBAR_SIZE:d,PANE_MAIN_SIZE:p,PANE_MAIN_TOP_SIZE:b,PANE_MAIN_BOTTOM_SIZE:y,setPaneEvent:function(e,t){if(v.layoutId){var r="".concat(v.layoutId,"-pane-config-").concat(t);Object(l.c)(r,JSON.stringify(e))}}}},c.components=Object.assign({Splitpanes:n.b,Pane:n.a},c.components);var u=c,s=r(16),f=Object(s.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Splitpanes",{staticClass:"smart-splitter",class:{"!flex-row-reverse":e.SIDEBAR_ON_LEFT&&e.mdAndLarger},attrs:{rtl:e.SIDEBAR_ON_LEFT&&e.mdAndLarger,horizontal:!e.mdAndLarger},on:{resize:function(t){return e.setPaneEvent(t,"vertical")}}},[r("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:e.PANE_MAIN_SIZE,"min-size":"65"}},[r("Splitpanes",{staticClass:"smart-splitter",attrs:{horizontal:e.COLUMN_LAYOUT},on:{resize:function(t){return e.setPaneEvent(t,"horizontal")}}},[r("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:e.PANE_MAIN_TOP_SIZE}},[e._t("primary")],2),e._v(" "),r("Pane",{staticClass:"flex flex-col hide-scrollbar !overflow-auto",attrs:{size:e.PANE_MAIN_BOTTOM_SIZE}},[e._t("secondary")],2)],1)],1),e._v(" "),e.SIDEBAR&&e.hasSidebar?r("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:e.PANE_SIDEBAR_SIZE,"min-size":"20"}},[e._t("sidebar")],2):e._e()],1)}),[],!1,null,null,null);t.default=f.exports},1908:function(e,t,r){!function(e){"use strict";var t=!0;function r(e){return e&&void 0!==e.circularRefs&&null!==e.circularRefs&&(t=!0===e.circularRefs),{circularRefs:t}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.value=function e(t){if("string"==typeof t){if(!l(t))throw new Error('Invalid number (value: "'+t+'")');return t}if("number"!=typeof t)return e(t&&t.valueOf());if(15<a(t+"").length)throw new Error("Invalid number: contains more than 15 digits (value: "+t+")");if(isNaN(t))throw new Error("Invalid number: NaN");if(!isFinite(t))throw new Error("Invalid number: Infinity");return t+""}(t),this.type="LosslessNumber",this.isLosslessNumber=!0}var t,r,n;return t=e,(r=[{key:"valueOf",value:function(){var e=parseFloat(this.value),t=a(this.value);if(15<t.length)throw new Error("Cannot convert to number: number would be truncated (value: "+this.value+")");if(!isFinite(e))throw new Error("Cannot convert to number: number would overflow (value: "+this.value+")");if(Math.abs(e)<Number.MIN_VALUE&&!/^0*$/.test(t))throw new Error("Cannot convert to number: number would underflow (value: "+this.value+")");return e}},{key:"toString",value:function(){return this.value}}])&&o(t.prototype,r),n&&o(t,n),e}();function a(e){return("string"!=typeof e?e+"":e).replace(/^-/,"").replace(/e.*$/,"").replace(/^0\.?0*|\./,"")}function l(e){return/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(e)}function c(e,t,r,o){return Array.isArray(r)?o.call(e,t,function(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=c(e,n+"",e[n],t);return r}(r,o)):r&&"object"===n(r)&&!r.isLosslessNumber?o.call(e,t,function(e,t){var r,n={};for(r in e)e.hasOwnProperty(r)&&(n[r]=c(e,r,e[r],t));return n}(r,o)):o.call(e,t,r)}function u(e){return encodeURIComponent(e.replace(/\//g,"~1").replace(/~/g,"~0"))}function s(e){return decodeURIComponent(e).replace(/~1/g,"/").replace(/~0/g,"~")}function f(e){return"#/"+e.map(u).join("/")}var v={NULL:0,DELIMITER:1,NUMBER:2,STRING:3,SYMBOL:4,UNKNOWN:5},d={"":!0,"{":!0,"}":!0,"[":!0,"]":!0,":":!0,",":!0},p={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},b="",y=0,m="",g="",h=v.NULL,E=[],O=[];function S(){y++,m=b.charAt(y)}function w(){for(h=v.NULL,g="";" "===m||"\t"===m||"\n"===m||"\r"===m;)S();if(d[m])return h=v.DELIMITER,g=m,void S();if(I(m)||"-"===m){if(h=v.NUMBER,"-"===m){if(g+=m,S(),!I(m))throw _("Invalid number, digit expected",y)}else"0"===m&&(g+=m,S());for(;I(m);)g+=m,S();if("."===m){if(g+=m,S(),!I(m))throw _("Invalid number, digit expected",y);for(;I(m);)g+=m,S()}if("e"===m||"E"===m){if(g+=m,S(),"+"!==m&&"-"!==m||(g+=m,S()),!I(m))throw _("Invalid number, digit expected",y);for(;I(m);)g+=m,S()}}else if('"'!==m){if(!x(m)){for(h=v.UNKNOWN;""!==m;)g+=m,S();throw _('Syntax error in part "'+g+'"')}for(h=v.SYMBOL;x(m);)g+=m,S()}else{for(h=v.STRING,S();""!==m&&'"'!==m;)if("\\"===m){S();var e=p[m];if(void 0!==e)g+=e,S();else{if("u"!==m)throw _('Invalid escape character "\\'+m+'"',y);S();for(var t="",r=0;r<4;r++){if(!/^[0-9a-fA-F]/.test(m))throw _("Invalid unicode character");t+=m,S()}g+=String.fromCharCode(parseInt(t,16))}}else g+=m,S();if('"'!==m)throw _("End of string expected");S()}}function x(e){return/^[a-zA-Z_]/.test(e)}function I(e){return"0"<=e&&e<="9"}function _(e,t){return void 0===t&&(t=y-g.length),(e=new SyntaxError(e+" (char "+t+")")).char=t,e}function N(){if(h!==v.DELIMITER||"{"!==g)return function(){if(h!==v.DELIMITER||"["!==g)return function(){if(h!==v.STRING)return function(){if(h!==v.NUMBER)return function(){if(h!==v.SYMBOL)return function(){throw _(""===g?"Unexpected end of json string":"Value expected")}();if("true"===g)return w(),!0;if("false"===g)return w(),!1;if("null"!==g)throw _('Unknown symbol "'+g+'"');return w(),null}();var e=new i(g);return w(),e}();var e=g;return w(),e}();w();var e=[];if(h===v.DELIMITER&&"]"===g)return w(),e;var t=O.length;for(O[t]=e;E[t]=e.length+"",e.push(N()),h===v.DELIMITER&&","===g;)w();if(h===v.DELIMITER&&"]"===g)return w(),O.length=t,E.length=t,e;throw _('Comma or end of array "]" expected')}();var e,t;w();var n={};if(h===v.DELIMITER&&"}"===g)return w(),n;var o=O.length;for(O[o]=n;;){if(h!==v.STRING)throw _("Object key expected");if(t=g,w(),h!==v.DELIMITER||":"!==g)throw _("Colon expected");if(w(),n[E[o]=t]=N(),h!==v.DELIMITER||","!==g)break;w()}if(h!==v.DELIMITER||"}"!==g)throw _('Comma or end of object "}" expected');return w(),"string"==typeof(e=n).$ref&&1===Object.keys(e).length?function(e){if(!r().circularRefs)return e;for(var t=function(e){if("#"!==(e=e.split("/").map(s)).shift())throw SyntaxError("Cannot parse JSON Pointer: no valid URI fragment");return""===e[e.length-1]&&e.pop(),e}(e.$ref),n=0;n<t.length;n++)if(t[n]!==E[n])throw new Error('Invalid circular reference "'+e.$ref+'"');return O[t.length]}(n):(O.length=o,E.length=o,n)}var T=[],L=[];function j(e,t,r){var n;return L=[],T=[],e="function"==typeof t?t.call({"":e},"",e):e,"number"==typeof r?10<r?n=P(" ",10):1<=r&&(n=P(" ",r)):"string"==typeof r&&""!==r&&(n=r),A(e,t,n,"")}function A(e,t,r,o){return"boolean"==typeof e||e instanceof Boolean||null===e||"number"==typeof e||e instanceof Number||"string"==typeof e||e instanceof String||e instanceof Date?JSON.stringify(e):e&&e.isLosslessNumber?e.value:Array.isArray(e)?function(e,t,r,n){var o=r?n+r:void 0,i=r?"[\n":"[";if(C(e))return k(e,t,r,n);var a=L.length;L[a]=e;for(var l=0;l<e.length;l++){var c=l+"",u="function"==typeof t?t.call(e,c,e[l]):e[l];r&&(i+=o),void 0!==u&&"function"!=typeof u?(T[a]=c,i+=A(u,t,r,o)):i+="null",l<e.length-1&&(i+=r?",\n":",")}return L.length=a,T.length=a,i+(r?"\n"+n+"]":"]")}(e,t,r,o):e&&"object"===n(e)?R(e,t,r,o):void 0}function R(e,t,r,n){var o=r?n+r:void 0,i=!0,a=r?"{\n":"{";if("function"==typeof e.toJSON)return j(e.toJSON(),t,r);if(C(e))return k(e,t,r,n);var l,c,u,s,f,v=L.length;for(l in L[v]=e)e.hasOwnProperty(l)&&(c="function"==typeof t?t.call(e,l,e[l]):e[l],u=l,f=t,void 0===(s=c)||"function"==typeof s||Array.isArray(f)&&!function(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}(f,u)||(i?i=!1:a+=r?",\n":",",u=JSON.stringify(l),a+=r?o+u+": ":u+":",T[v]=l,a+=A(c,t,r,o)));return L.length=v,T.length=v,a+(r?"\n"+n+"}":"}")}function C(e){return-1!==L.indexOf(e)}function k(e,t,n,o){if(!r().circularRefs)throw new Error('Circular reference at "'+f(T)+'"');return e=L.indexOf(e),R({$ref:f(T.slice(0,e))},t,n,o)}function P(e,t){for(var r="";0<t--;)r+=e;return r}e.LosslessNumber=i,e.config=r,e.parse=function(e,t){y=0,m=(b=e).charAt(0),g="",h=v.NULL,O=[],E=[],w();var r=N();if(""!==g)throw _("Unexpected characters");return t?c({"":e=r},"",e,t):r},e.stringify=j,Object.defineProperty(e,"__esModule",{value:!0})}(t)},1975:function(e,t,r){"use strict";r.r(t);var n=r(3),o=r(80),i=r(6),a=r(17),l={};l.props={log:{type:Array,default:()=>[]},title:{type:String,default:""}},l.setup=(e,t)=>{var r=e,l=t.emit,c=Object(a.d)(),u=Object(n.o)(null),s=Object(n.o)(null),f=Object(n.o)(!0),v=Object(o.useScroll)(s);Object(n.z)(v.isScrolling,(e=>{e&&v.directions.top&&(f.value=!1)}));var d=e=>{var t,r,n;"top"===e?null===(t=s.value)||void 0===t||t.scroll({behavior:"smooth",top:0}):"bottom"===e&&(null===(r=s.value)||void 0===r||r.scroll({behavior:"smooth",top:null===(n=s.value)||void 0===n?void 0:n.scrollHeight}))};Object(n.z)((()=>r.log),Object(i.useThrottleFn)((()=>{f.value&&d("bottom")}),200),{flush:"post"});var p=Object(n.a)((()=>f.value?"text-green-500":"text-red-500"));return{emit:l,t:c,container:u,logs:s,scrollTo:d,toggleAutoscroll:()=>{f.value=!f.value},toggleAutoscrollColor:p}};var c=l,u=r(16),s=Object(u.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"container",staticClass:"flex flex-col flex-1 overflow-y-auto"},[r("div",{staticClass:"sticky top-0 z-10 flex items-center justify-between flex-none pl-4 border-b bg-primary border-dividerLight"},[r("label",{staticClass:"py-2 font-semibold text-secondaryLight",attrs:{for:"log"}},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),r("div",[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.delete"),svg:"trash"},nativeOn:{click:function(t){return e.emit("delete")}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{id:"bottompage",title:e.t("action.scroll_to_top"),svg:"arrow-up"},nativeOn:{click:function(t){return e.scrollTo("top")}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{id:"bottompage",title:e.t("action.scroll_to_bottom"),svg:"arrow-down"},nativeOn:{click:function(t){return e.scrollTo("bottom")}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:e.toggleAutoscrollColor,attrs:{id:"bottompage",title:e.t("action.autoscroll"),svg:"chevrons-down"},nativeOn:{click:function(t){return e.toggleAutoscroll()}}})],1)]),e._v(" "),0!==e.log.length?r("div",{ref:"logs",staticClass:"overflow-y-auto border-b border-dividerLight"},[r("div",{staticClass:"flex flex-col h-auto h-full border-r divide-y divide-dividerLight border-dividerLight"},e._l(e.log,(function(e,t){return r("RealtimeLogEntry",{key:"entry-"+t,attrs:{entry:e}})})),1)]):e._e()])}),[],!1,null,null,null);t.default=s.exports;installComponents(s,{ButtonSecondary:r(88).default,RealtimeLogEntry:r(1996).default})},1990:function(e,t,r){var n=r(148),o=r(1991),i=r(1992),a=Math.max,l=Math.min;e.exports=function(e,t,r){var c,u,s,f,v,d,p=0,b=!1,y=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=c,n=u;return c=u=void 0,p=t,f=e.apply(n,r)}function h(e){return p=e,v=setTimeout(O,t),b?g(e):f}function E(e){var r=e-d;return void 0===d||r>=t||r<0||y&&e-p>=s}function O(){var e=o();if(E(e))return S(e);v=setTimeout(O,function(e){var r=t-(e-d);return y?l(r,s-(e-p)):r}(e))}function S(e){return v=void 0,m&&c?g(e):(c=u=void 0,f)}function w(){var e=o(),r=E(e);if(c=arguments,u=this,d=e,r){if(void 0===v)return h(d);if(y)return clearTimeout(v),v=setTimeout(O,t),g(d)}return void 0===v&&(v=setTimeout(O,t)),f}return t=i(t)||0,n(r)&&(b=!!r.leading,s=(y="maxWait"in r)?a(i(r.maxWait)||0,t):s,m="trailing"in r?!!r.trailing:m),w.cancel=function(){void 0!==v&&clearTimeout(v),p=0,c=d=u=v=void 0},w.flush=function(){return void 0===v?f:S(o())},w}},1991:function(e,t,r){var n=r(108);e.exports=function(){return n.Date.now()}},1992:function(e,t,r){var n=r(1993),o=r(148),i=r(260),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=l.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):a.test(e)?NaN:+e}},1993:function(e,t,r){var n=r(1994),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},1994:function(e,t){var r=/\s/;e.exports=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},2342:function(e,t,r){"use strict";r.r(t);r(106);var n=r(3),o=(r(467),r(1990)),i=r.n(o),a=r(298),l=r(17),c=r(405),u={setup:(e,t)=>{var r,o=Object(l.d)(),u=Object(l.f)(),s=Object(l.j)(),{subscribeToStream:f}=Object(l.i)(),v=Object(l.h)(a.e,new c.a,a.k),d=Object(l.g)(v.value.connectionState$,"STOPPED"),p=Object(l.h)(a.a,"",a.g),b=Object(l.h)(a.b,"",a.h),y=Object(l.h)(a.c,[],a.i),m=Object(n.o)(!0),g=i()((function(){r.postMessage({type:"sse",url:p.value})}),1e3);Object(n.z)(p,(e=>{e&&g()}));var h=e=>{var{data:t}=e;t.url===p.value&&(m.value=t.result)};Object(n.j)((()=>{(r=u.value.$worker.createRejexWorker()).addEventListener("message",h),f(v.value.event$,(e=>{switch(null==e?void 0:e.type){case"STARTING":y.value=[{payload:"".concat(o("state.connecting_to",{name:p.value})),source:"info",color:"var(--accent-color)",ts:void 0}];break;case"STARTED":y.value=[{payload:"".concat(o("state.connected_to",{name:p.value})),source:"info",color:"var(--accent-color)",ts:Date.now()}],s.success("".concat(o("state.connected")));break;case"MESSAGE_RECEIVED":Object(a.f)({payload:e.message,source:"server",ts:e.time});break;case"ERROR":Object(a.f)({payload:o("error.browser_support_sse").toString(),source:"info",color:"#ff5555",ts:e.time});break;case"STOPPED":Object(a.f)({payload:o("state.disconnected_from",{name:p.value}).toString(),source:"info",color:"#ff5555",ts:e.time}),s.error("".concat(o("state.disconnected")))}}))}));Object(n.k)((()=>{r.terminate()}));return{t:o,connectionState:d,server:p,eventType:b,log:y,isUrlValid:m,toggleSSEConnection:()=>{if("STOPPED"===d.value)return v.value.start(p.value,b.value);v.value.stop()},clearLogEntries:()=>{y.value=[]}}}},s=u,f=r(16),v=Object(f.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AppPaneLayout",{attrs:{"layout-id":"sse"},scopedSlots:e._u([{key:"primary",fn:function(){return[r("div",{staticClass:"sticky top-0 z-10 flex flex-shrink-0 p-4 overflow-x-auto space-x-2 bg-primary hide-scrollbar"},[r("div",{staticClass:"inline-flex flex-1 space-x-2"},[r("div",{staticClass:"flex flex-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.server,expression:"server"}],staticClass:"flex flex-1 w-full px-4 py-2 border rounded-l bg-primaryLight border-divider text-secondaryDark",class:{error:!e.isUrlValid},attrs:{id:"server",type:"url",autocomplete:"off",placeholder:e.$t("sse.url"),disabled:"STARTED"===e.connectionState||"STARTING"===e.connectionState},domProps:{value:e.server},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.isUrlValid&&e.toggleSSEConnection()},input:function(t){t.target.composing||(e.server=t.target.value)}}}),e._v(" "),r("label",{staticClass:"px-4 py-2 font-semibold truncate border-t border-b bg-primaryLight border-divider text-secondaryLight",attrs:{for:"event-type"}},[e._v("\n            "+e._s(e.$t("sse.event_type"))+"\n          ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.eventType,expression:"eventType"}],staticClass:"flex flex-1 w-full px-4 py-2 border rounded-r bg-primaryLight border-divider text-secondaryDark",attrs:{id:"event-type",spellcheck:"false",disabled:"STARTED"===e.connectionState||"STARTING"===e.connectionState},domProps:{value:e.eventType},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.isUrlValid&&e.toggleSSEConnection()},input:function(t){t.target.composing||(e.eventType=t.target.value)}}})]),e._v(" "),r("ButtonPrimary",{staticClass:"w-32",attrs:{id:"start",disabled:!e.isUrlValid,name:"start",label:"STOPPED"===e.connectionState?e.t("action.start"):e.t("action.stop"),loading:"STARTING"===e.connectionState},nativeOn:{click:function(t){return e.toggleSSEConnection.apply(null,arguments)}}})],1)])]},proxy:!0},{key:"secondary",fn:function(){return[r("RealtimeLog",{attrs:{title:e.$t("sse.log"),log:e.log},on:{delete:function(t){return e.clearLogEntries()}}})]},proxy:!0}])})}),[],!1,null,null,null);t.default=v.exports;installComponents(v,{ButtonPrimary:r(145).default,RealtimeLog:r(1975).default,AppPaneLayout:r(1320).default})}}]);