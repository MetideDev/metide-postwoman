(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1303:function(e,t,a){"use strict";a.r(t);var n=a(34),r=(a(369),a(57),a(10),a(8),a(9),a(4),a(14),a(7),a(13),a(3)),o=a(127);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=Object(r.c)({props:{show:Boolean,folderPath:{type:String,default:null},request:{type:Object,default:function(){}},requestIndex:{type:Number,default:null},editingRequestName:{type:String,default:null}},data:function(){return{requestUpdateData:{name:null}}},watch:{editingRequestName:function(e){this.requestUpdateData.name=e}},methods:{saveRequest:function(){if(this.requestUpdateData.name){var e=s(s({},this.$props.request),{},{name:this.$data.requestUpdateData.name||this.$props.request.name});Object(o.i)(this.folderPath,this.requestIndex,e),this.hideModal()}else this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal:function(){this.requestUpdateData={name:null},this.$emit("hide-modal")}}}),i=a(23),c=Object(i.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("SmartModal",{attrs:{dialog:"",title:""+e.$t("modal.edit_request")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[a("div",{staticClass:"flex flex-col px-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.requestUpdateData.name,expression:"requestUpdateData.name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEditReq",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.requestUpdateData.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveRequest.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.requestUpdateData,"name",t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"selectLabelGqlEditReq"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[a("span",[a("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.saveRequest.apply(null,arguments)}}}),e._v(" "),a("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1119729043)}):e._e()}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{ButtonPrimary:a(176).default,ButtonSecondary:a(108).default,SmartModal:a(116).default})}}]);