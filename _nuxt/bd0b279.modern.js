(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1971:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(199),s=a(17),o={props:{header:{key:"header",required:!0,type:null}},setup:(e,t)=>{var a=Object(s.d)(),o=Object(s.j)(),i=Object(n.refAutoReset)("copy",1e3);return{t:a,copyIcon:i,copyHeader:e=>{Object(r.a)(e),i.value="check",o.success("".concat(a("state.copied_to_clipboard")))}}}},i=o,c=a(16),l=Object(c.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight group"},[a("span",{staticClass:"flex flex-1 min-w-0 px-4 py-2 transition group-hover:text-secondaryDark"},[a("span",{staticClass:"truncate rounded-sm select-all"},[e._v("\n      "+e._s(e.header.key)+"\n    ")])]),e._v(" "),a("span",{staticClass:"flex flex-1 min-w-0 pl-4 py-2 transition group-hover:text-secondaryDark justify-between"},[a("span",{staticClass:"truncate rounded-sm select-all"},[e._v("\n      "+e._s(e.header.value)+"\n    ")]),e._v(" "),a("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"copyHeader",staticClass:"hidden group-hover:inline-flex !py-0",attrs:{title:e.t("action.copy"),svg:e.copyIcon},nativeOn:{click:function(t){return e.copyHeader(e.header.value)}}})],1)])}),[],!1,null,null,null);t.default=l.exports;installComponents(l,{ButtonSecondary:a(88).default})}}]);