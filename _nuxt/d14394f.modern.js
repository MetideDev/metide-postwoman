(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{857:function(o,r,e){"use strict";e.d(r,"b",(function(){return h})),e.d(r,"d",(function(){return k})),e.d(r,"a",(function(){return C})),e.d(r,"c",(function(){return w}));e(35),e(41);var t=e(837),a=e(875),l=e(965),c=e(833),n=e(885),i=e(850),d=e(935),s=e(881),u=e(963),v=e(966),m=e(968),p=e(878),g=e(969),b=e(967),f=e(882),h=t.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)",top:"var(--lower-tertiary-sticky-fold) !important","z-index":"10"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k=t.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),y="var(--editor-name-color)",x="var(--editor-constant-color)",C=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:y},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:x},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:y},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:x},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),w=[Object(d.d)(),Object(d.c)(),Object(t.l)(),Object(n.a)(),Object(l.a)({openText:"▾",closedText:"▸"}),Object(t.i)(),Object(t.j)(),c.g.allowMultipleSelections.of(!0),Object(i.p)(),a.b.fallback,Object(u.a)(),Object(v.a)(),Object(p.a)(),Object(b.b)(),Object(b.a)(),Object(t.k)(),Object(m.a)(),t.m.of([...v.b,...s.a,...m.c,...n.b,...l.b,...g.a,...p.c,...f.a]),Object(m.b)({top:!0})]},858:function(o,r,e){"use strict";e.d(r,"a",(function(){return p})),e.d(r,"b",(function(){return g}));e(63);var t=e(3),a=e(833),l=e(880),c=e(837),n=e(9),i=e(61),d=e(85),s=/(<<[a-zA-Z0-9-_]+>>)/g,u=o=>Object(l.b)(((r,e,t)=>{for(var a,l,c,d,{from:u,to:v,text:m}=r.state.doc.lineAt(e),p=e,g=e;p>u&&/[a-zA-Z0-9-_]+/.test(m[p-u-1]);)p--;for(;g<v&&/[a-zA-Z0-9-_]+/.test(m[g-u]);)g++;if(p===e&&t<0||g===e&&t>0||!s.test(m.slice(p-u-2,g-u+2)))return null;var b=null!==(l=null===(a=o.find((o=>o.key===m.slice(p-u,g-u))))||void 0===a?void 0:a.sourceEnv)&&void 0!==l?l:"choose an environment",f=null!==(d=null===(c=o.find((o=>o.key===m.slice(p-u,g-u))))||void 0===c?void 0:c.value)&&void 0!==d?d:"not found",h=Object(i.parseTemplateStringE)(f,o),k=n.isLeft(h)?"error":h.right;return{pos:p,end:v,above:!0,arrow:!0,create(){var o=document.createElement("span"),r=document.createElement("xmp");return r.textContent=k,o.appendChild(document.createTextNode("".concat(b," "))),o.appendChild(r),o.className="tooltip-theme",{dom:o}}}}),{hoverTime:1});var v=o=>new c.e({regexp:s,decoration:r=>function(o,r){var e=r.find((r=>r.key===o.slice(2,-2)))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return c.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(e)})}(r[0],o)}),m=o=>{var r=v(o);return c.g.define((o=>({decorations:r.createDeco(o),update(o){this.decorations=r.updateDeco(o,this.decorations)}})),{decorations:o=>o.decorations})};class p{constructor(o,r){this.editorView=r,this.compartment=new a.e,this.envs=[],this.envs=Object(d.i)(),o(d.b,(o=>{var r;this.envs=o,null===(r=this.editorView.value)||void 0===r||r.dispatch({effects:this.compartment.reconfigure([u(this.envs),m(this.envs)])})}))}get extension(){return this.compartment.of([u(this.envs),m(this.envs)])}}class g{constructor(o,r){this.editorView=r,this.compartment=new a.e,this.envs=[],Object(t.z)(o,(o=>{var r;this.envs=o,null===(r=this.editorView.value)||void 0===r||r.dispatch({effects:this.compartment.reconfigure([u(this.envs),m(this.envs)])})}),{immediate:!0})}get extension(){return this.compartment.of([u(this.envs),m(this.envs)])}}},884:function(o,r,e){"use strict";e.r(r);e(63),e(132),e(905),e(927),e(35),e(41);var t=e(3),a=e(837),l=e(833),c=e(198),n=e.n(c),i=e(880),d=e(885),s=e(857),u=e(858),v=e(17),m=e(85),p={};p.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1},readonly:{key:"readonly",required:!1,type:Boolean,default:!1}},p.setup=(o,r)=>{var e=o,c=r.emit,p=Object(t.o)(e.value),g=Object(t.o)(),b=Object(t.o)(null);Object(t.z)((()=>e.value),(o=>{var r,e,t=o.replaceAll("\n",""),a=null===(r=g.value)||void 0===r?void 0:r.state.doc.toJSON().join(g.value.state.lineBreak);p.value===t&&o===a||(p.value=t,null===(e=g.value)||void 0===e||e.dispatch({filter:!1,changes:{from:0,to:g.value.state.doc.length,insert:t}}))}),{immediate:!0,flush:"sync"});var f=null,h=null,k=Object(v.g)(m.b,[]),y=Object(t.a)((()=>e.envs?e.envs.map((o=>({key:o.key,value:o.value,sourceEnv:o.source}))):k.value)),x=new u.b(y,g),C=o=>{var r=[a.d.contentAttributes.of({"aria-label":e.placeholder}),a.d.updateListener.of((o=>{e.readonly&&(o.view.contentDOM.inputMode="none")})),l.g.changeFilter.of((()=>!e.readonly)),s.d,e.readonly?a.d.theme({".cm-content":{caretColor:"var(--secondary-dark-color) !important",color:"var(--secondary-dark-color) !important",backgroundColor:"var(--divider-color) !important",opacity:.25}}):a.d.theme({}),Object(i.d)({position:"absolute"}),x,Object(a.o)(e.placeholder),a.d.domEventHandlers({paste(o){var r,e;f=o,h=null!==(e=null===(r=o.clipboardData)||void 0===r?void 0:r.getData("text"))&&void 0!==e?e:""},drop(o){o.preventDefault()}}),a.g.fromClass(class{update(o){if(!e.readonly&&o.docChanged){var r=n()(p.value);p.value=o.state.doc.toJSON().join(o.state.lineBreak);var a=n()(p.value).replaceAll("\n","");if(c("input",a),c("change",a),!!o.transactions.find((o=>o.isUserEvent("input.paste")))&&f){var l=h;Object(t.g)((()=>{c("paste",{pastedValue:l,prevValue:r})}))}else f=null,h=null}}}),Object(d.a)(),a.m.of([...d.b])];g.value=new a.d({parent:o,state:l.g.create({doc:e.value,extensions:r})})};return Object(t.j)((()=>{b.value&&(g.value||C(b.value))})),Object(t.z)(b,(()=>{var o;b.value?g.value||C(b.value):(null===(o=g.value)||void 0===o||o.destroy(),g.value=void 0)})),{emit:c,editor:b}};var g=p,b=e(16),f=Object(b.a)(g,(function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[e("div",{ref:"editor",staticClass:"flex flex-1",class:o.styles,attrs:{placeholder:o.placeholder},on:{keydown:[function(r){return!r.type.indexOf("key")&&o._k(r.keyCode,"enter",13,r.key,"Enter")?null:(r.preventDefault(),o.emit("enter",r))},function(r){return o.emit("keydown",r)}],keyup:function(r){return o.emit("keyup",r)},click:function(r){return o.emit("click",r)}}})])}),[],!1,null,null,null);r.default=f.exports},905:function(o,r,e){e(961)},961:function(o,r,e){"use strict";var t=e(25),a=e(23),l=e(37),c=e(43),n=e(99),i=e(57),d=e(252),s=e(70),u=e(134),v=e(253),m=e(460),p=e(65),g=e(89),b=p("replace"),f=RegExp.prototype,h=a.TypeError,k=c(v),y=c("".indexOf),x=c("".replace),C=c("".slice),w=Math.max,O=function(o,r,e){return e>o.length?-1:""===r?e:y(o,r,e)};t({target:"String",proto:!0},{replaceAll:function(o,r){var e,t,a,c,v,p,j,B,E,N=n(this),S=0,A=0,L="";if(null!=o){if((e=d(o))&&(t=s(n("flags"in f?o.flags:k(o))),!~y(t,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(a=u(o,b))return l(a,o,N,r);if(g&&e)return x(s(N),o,r)}for(c=s(N),v=s(o),(p=i(r))||(r=s(r)),j=v.length,B=w(1,j),S=O(c,v,0);-1!==S;)E=p?s(r(v,S,c)):m(v,c,S,[],void 0,r),L+=C(c,A,S)+E,A=S+j,S=O(c,v,S+B);return A<c.length&&(L+=C(c,A)),L}})}}]);