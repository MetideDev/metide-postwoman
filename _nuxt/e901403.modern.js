(window.webpackJsonp=window.webpackJsonp||[]).push([[10,52,104],{1951:function(e,t,r){"use strict";r.r(t);var o=r(34),a=(r(35),r(41),r(198)),n=r.n(a),l=r(3),c=r(9),i=r(72),d=r(45),s=r(1),v=r(61),u=r(6),m=r(85),p=r(17);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={};g.props={show:{key:"show",required:!1,type:Boolean,default:!1},action:{key:"action",required:!1,type:String,default:"edit"},editingEnvironmentIndex:{key:"editingEnvironmentIndex",required:!1,type:[Number,String,null],default:null},envVars:{key:"envVars",required:!1,type:Function,default:()=>[]}},g.setup=(e,t)=>{var r=Object(p.d)(),o=Object(p.j)(),a=e,b=t.emit,g=Object(l.o)(0),y=Object(l.o)(null),h=Object(l.o)([{id:g.value++,env:{key:"",value:""}}]),k=Object(u.refAutoReset)("trash-2",1e3),x=Object(p.g)(m.m,[]),O=Object(l.a)((()=>"Global"===a.editingEnvironmentIndex?{name:"Global",variables:Object(m.l)()}:"new"===a.action?{name:"",variables:a.envVars()}:null!==a.editingEnvironmentIndex?Object(m.k)(a.editingEnvironmentIndex):null)),j=Object(p.g)(m.g,[])||a.envVars(),C=Object(l.a)((()=>{var e=Object(s.pipe)(h.value,i.map((e=>e.env)));return Object(s.pipe)(e,i.exists((t=>{var{value:r}=t;return c.isLeft(Object(v.parseTemplateStringE)(r,e))})))})),w=Object(l.a)((()=>C?[]:"Global"===a.editingEnvironmentIndex?[...h.value.map((e=>f(f({},e),{},{source:y.value})))]:[...h.value.map((e=>f(f({},e),{},{source:y.value}))),...x.value.map((e=>f(f({},e),{},{source:"Global"})))]));Object(l.z)((()=>a.show),(e=>{var t,r,o,a;e&&(y.value=null!==(r=null===(t=O.value)||void 0===t?void 0:t.name)&&void 0!==r?r:null,h.value=Object(s.pipe)(null!==(a=null===(o=O.value)||void 0===o?void 0:o.variables)&&void 0!==a?a:[],i.map((e=>({id:g.value++,env:n()(e)})))))}));var E=()=>{y.value=null,b("hide-modal")};return{t:r,name:y,vars:h,clearIcon:k,evnExpandError:C,liveEnvs:w,clearContent:()=>{h.value=[{id:g.value++,env:{key:"",value:""}}],k.value="check",o.success("".concat(r("state.cleared")))},addEnvironmentVariable:()=>{h.value.push({id:g.value++,env:{key:"",value:""}})},removeEnvironmentVariable:e=>{h.value.splice(e,1)},saveEnvironment:()=>{if(y.value){var e=Object(s.pipe)(h.value,i.filterMap(Object(s.flow)(d.fromPredicate((e=>""!==e.env.key)),d.map((e=>e.env))))),t={name:y.value,variables:e};"new"===a.action?(Object(m.d)(y.value),Object(m.s)(j.value.length-1,t),Object(m.p)(j.value.length-1),o.success("".concat(r("environment.created")))):"Global"===a.editingEnvironmentIndex?(Object(m.r)(t.variables),o.success("".concat(r("environment.updated")))):null!==a.editingEnvironmentIndex&&(Object(m.s)(a.editingEnvironmentIndex,t),o.success("".concat(r("environment.updated")))),E()}else o.error("".concat(r("environment.invalid_name")))},hideModal:E}};var y=g,h=r(16),k=Object(h.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("SmartModal",{attrs:{dialog:"",title:e.t("environment."+e.action)},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[r("div",{staticClass:"flex flex-col px-2"},[r("div",{staticClass:"relative flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelEnvEdit",placeholder:" ",type:"text",autocomplete:"off",disabled:"Global"===e.editingEnvironmentIndex},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveEnvironment.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"selectLabelEnvEdit"}},[e._v("\n          "+e._s(e.t("action.label"))+"\n        ")])]),e._v(" "),r("div",{staticClass:"flex items-center justify-between flex-1"},[r("label",{staticClass:"p-4",attrs:{for:"variableList"}},[e._v("\n          "+e._s(e.t("environment.variable_list"))+"\n        ")]),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:e.clearIcon},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{svg:"plus",title:e.t("add.new")},nativeOn:{click:function(t){return e.addEnvironmentVariable.apply(null,arguments)}}})],1)]),e._v(" "),e.evnExpandError?r("div",{staticClass:"w-full px-4 py-2 mb-2 overflow-auto font-mono text-red-400 whitespace-normal rounded bg-primaryLight"},[e._v("\n        "+e._s(e.t("environment.nested_overflow"))+"\n      ")]):e._e(),e._v(" "),r("div",{staticClass:"border rounded divide-y divide-dividerLight border-divider"},[e._l(e.vars,(function(t,o){var a=t.id,n=t.env;return r("div",{key:"variable-"+a+"-"+o,staticClass:"flex divide-x divide-dividerLight"},[r("input",{directives:[{name:"model",rawName:"v-model",value:n.key,expression:"env.key"}],staticClass:"flex flex-1 px-4 py-2 bg-transparent",attrs:{placeholder:""+e.t("count.variable",{count:o+1}),name:"param"+o},domProps:{value:n.key},on:{input:function(t){t.target.composing||e.$set(n,"key",t.target.value)}}}),e._v(" "),r("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:o+1}),envs:e.liveEnvs,name:"value"+o},model:{value:n.value,callback:function(t){e.$set(n,"value",t)},expression:"env.value"}}),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{id:"variable",title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.removeEnvironmentVariable(o)}}})],1)],1)})),e._v(" "),0===e.vars.length?r("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[r("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/blockchain.svg",loading:"lazy",alt:""+e.t("empty.environments")}}),e._v(" "),r("span",{staticClass:"pb-4 text-center"},[e._v("\n            "+e._s(e.t("empty.environments"))+"\n          ")]),e._v(" "),r("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.t("add.new"),filled:""},nativeOn:{click:function(t){return e.addEnvironmentVariable.apply(null,arguments)}}})],1):e._e()],2)])]},proxy:!0},{key:"footer",fn:function(){return[r("span",[r("ButtonPrimary",{attrs:{label:""+e.t("action.save")},nativeOn:{click:function(t){return e.saveEnvironment.apply(null,arguments)}}}),e._v(" "),r("ButtonSecondary",{attrs:{label:""+e.t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1975024075)}):e._e()}),[],!1,null,null,null);t.default=k.exports;installComponents(k,{ButtonSecondary:r(88).default,SmartEnvInput:r(884).default,ButtonPrimary:r(145).default,SmartModal:r(93).default})},857:function(e,t,r){"use strict";r.d(t,"b",(function(){return y})),r.d(t,"d",(function(){return h})),r.d(t,"a",(function(){return O})),r.d(t,"c",(function(){return j}));r(35),r(41);var o=r(837),a=r(875),n=r(965),l=r(833),c=r(885),i=r(850),d=r(935),s=r(881),v=r(963),u=r(966),m=r(968),p=r(878),b=r(969),f=r(967),g=r(882),y=o.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)",top:"var(--lower-tertiary-sticky-fold) !important","z-index":"10"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),h=o.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k="var(--editor-name-color)",x="var(--editor-constant-color)",O=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:k},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:x},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:k},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:x},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),j=[Object(d.d)(),Object(d.c)(),Object(o.l)(),Object(c.a)(),Object(n.a)({openText:"▾",closedText:"▸"}),Object(o.i)(),Object(o.j)(),l.g.allowMultipleSelections.of(!0),Object(i.p)(),a.b.fallback,Object(v.a)(),Object(u.a)(),Object(p.a)(),Object(f.b)(),Object(f.a)(),Object(o.k)(),Object(m.a)(),o.m.of([...u.b,...s.a,...m.c,...c.b,...n.b,...b.a,...p.c,...g.a]),Object(m.b)({top:!0})]},858:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));r(63);var o=r(3),a=r(833),n=r(880),l=r(837),c=r(9),i=r(61),d=r(85),s=/(<<[a-zA-Z0-9-_]+>>)/g,v=e=>Object(n.b)(((t,r,o)=>{for(var a,n,l,d,{from:v,to:u,text:m}=t.state.doc.lineAt(r),p=r,b=r;p>v&&/[a-zA-Z0-9-_]+/.test(m[p-v-1]);)p--;for(;b<u&&/[a-zA-Z0-9-_]+/.test(m[b-v]);)b++;if(p===r&&o<0||b===r&&o>0||!s.test(m.slice(p-v-2,b-v+2)))return null;var f=null!==(n=null===(a=e.find((e=>e.key===m.slice(p-v,b-v))))||void 0===a?void 0:a.sourceEnv)&&void 0!==n?n:"choose an environment",g=null!==(d=null===(l=e.find((e=>e.key===m.slice(p-v,b-v))))||void 0===l?void 0:l.value)&&void 0!==d?d:"not found",y=Object(i.parseTemplateStringE)(g,e),h=c.isLeft(y)?"error":y.right;return{pos:p,end:u,above:!0,arrow:!0,create(){var e=document.createElement("span"),t=document.createElement("xmp");return t.textContent=h,e.appendChild(document.createTextNode("".concat(f," "))),e.appendChild(t),e.className="tooltip-theme",{dom:e}}}}),{hoverTime:1});var u=e=>new l.e({regexp:s,decoration:t=>function(e,t){var r=t.find((t=>t.key===e.slice(2,-2)))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return l.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(r)})}(t[0],e)}),m=e=>{var t=u(e);return l.g.define((e=>({decorations:t.createDeco(e),update(e){this.decorations=t.updateDeco(e,this.decorations)}})),{decorations:e=>e.decorations})};class p{constructor(e,t){this.editorView=t,this.compartment=new a.e,this.envs=[],this.envs=Object(d.i)(),e(d.b,(e=>{var t;this.envs=e,null===(t=this.editorView.value)||void 0===t||t.dispatch({effects:this.compartment.reconfigure([v(this.envs),m(this.envs)])})}))}get extension(){return this.compartment.of([v(this.envs),m(this.envs)])}}class b{constructor(e,t){this.editorView=t,this.compartment=new a.e,this.envs=[],Object(o.z)(e,(e=>{var t;this.envs=e,null===(t=this.editorView.value)||void 0===t||t.dispatch({effects:this.compartment.reconfigure([v(this.envs),m(this.envs)])})}),{immediate:!0})}get extension(){return this.compartment.of([v(this.envs),m(this.envs)])}}},884:function(e,t,r){"use strict";r.r(t);r(63),r(132),r(905),r(927),r(35),r(41);var o=r(3),a=r(837),n=r(833),l=r(198),c=r.n(l),i=r(880),d=r(885),s=r(857),v=r(858),u=r(17),m=r(85),p={};p.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1},readonly:{key:"readonly",required:!1,type:Boolean,default:!1}},p.setup=(e,t)=>{var r=e,l=t.emit,p=Object(o.o)(r.value),b=Object(o.o)(),f=Object(o.o)(null);Object(o.z)((()=>r.value),(e=>{var t,r,o=e.replaceAll("\n",""),a=null===(t=b.value)||void 0===t?void 0:t.state.doc.toJSON().join(b.value.state.lineBreak);p.value===o&&e===a||(p.value=o,null===(r=b.value)||void 0===r||r.dispatch({filter:!1,changes:{from:0,to:b.value.state.doc.length,insert:o}}))}),{immediate:!0,flush:"sync"});var g=null,y=null,h=Object(u.g)(m.b,[]),k=Object(o.a)((()=>r.envs?r.envs.map((e=>({key:e.key,value:e.value,sourceEnv:e.source}))):h.value)),x=new v.b(k,b),O=e=>{var t=[a.d.contentAttributes.of({"aria-label":r.placeholder}),a.d.updateListener.of((e=>{r.readonly&&(e.view.contentDOM.inputMode="none")})),n.g.changeFilter.of((()=>!r.readonly)),s.d,r.readonly?a.d.theme({".cm-content":{caretColor:"var(--secondary-dark-color) !important",color:"var(--secondary-dark-color) !important",backgroundColor:"var(--divider-color) !important",opacity:.25}}):a.d.theme({}),Object(i.d)({position:"absolute"}),x,Object(a.o)(r.placeholder),a.d.domEventHandlers({paste(e){var t,r;g=e,y=null!==(r=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))&&void 0!==r?r:""},drop(e){e.preventDefault()}}),a.g.fromClass(class{update(e){if(!r.readonly&&e.docChanged){var t=c()(p.value);p.value=e.state.doc.toJSON().join(e.state.lineBreak);var a=c()(p.value).replaceAll("\n","");if(l("input",a),l("change",a),!!e.transactions.find((e=>e.isUserEvent("input.paste")))&&g){var n=y;Object(o.g)((()=>{l("paste",{pastedValue:n,prevValue:t})}))}else g=null,y=null}}}),Object(d.a)(),a.m.of([...d.b])];b.value=new a.d({parent:e,state:n.g.create({doc:r.value,extensions:t})})};return Object(o.j)((()=>{f.value&&(b.value||O(f.value))})),Object(o.z)(f,(()=>{var e;f.value?b.value||O(f.value):(null===(e=b.value)||void 0===e||e.destroy(),b.value=void 0)})),{emit:l,editor:f}};var b=p,f=r(16),g=Object(f.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[r("div",{ref:"editor",staticClass:"flex flex-1",class:e.styles,attrs:{placeholder:e.placeholder},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.emit("enter",t))},function(t){return e.emit("keydown",t)}],keyup:function(t){return e.emit("keyup",t)},click:function(t){return e.emit("click",t)}}})])}),[],!1,null,null,null);t.default=g.exports},905:function(e,t,r){r(961)},961:function(e,t,r){"use strict";var o=r(25),a=r(23),n=r(37),l=r(43),c=r(99),i=r(57),d=r(252),s=r(70),v=r(134),u=r(253),m=r(460),p=r(65),b=r(89),f=p("replace"),g=RegExp.prototype,y=a.TypeError,h=l(u),k=l("".indexOf),x=l("".replace),O=l("".slice),j=Math.max,C=function(e,t,r){return r>e.length?-1:""===t?r:k(e,t,r)};o({target:"String",proto:!0},{replaceAll:function(e,t){var r,o,a,l,u,p,w,E,_,S=c(this),B=0,I=0,L="";if(null!=e){if((r=d(e))&&(o=s(c("flags"in g?e.flags:h(e))),!~k(o,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(a=v(e,f))return n(a,e,S,t);if(b&&r)return x(s(S),e,t)}for(l=s(S),u=s(e),(p=i(t))||(t=s(t)),w=u.length,E=j(1,w),B=C(l,u,0);-1!==B;)_=p?s(t(u,B,l)):m(u,l,B,[],void 0,t),L+=O(l,I,B)+_,I=B+w,B=C(l,u,B+E);return I<l.length&&(L+=O(l,I)),L}})}}]);