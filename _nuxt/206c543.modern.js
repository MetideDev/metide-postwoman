(window.webpackJsonp=window.webpackJsonp||[]).push([[36,37,38,40,41,42,43,45],{1217:function(e,t,o){"use strict";o.r(t);var n=o(34),l=(o(35),o(41),o(107),o(8),o(3)),i=o(247),a=o.n(i),r=o(198),s=o.n(r),d=o(17),c=o(104),u=o(856);function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var h=Object(l.c)({props:{savingMode:{type:Boolean,default:!1},doc:{type:Boolean,default:!1},picked:{type:Object,default:null},showCollActions:{type:Boolean,default:!0}},setup:()=>({collections:Object(d.g)(c.o,[])}),data:()=>({showModalAdd:!1,showModalEdit:!1,showModalImportExport:!1,showModalAddRequest:!1,showModalAddFolder:!1,showModalEditFolder:!1,showModalEditRequest:!1,editingCollection:void 0,editingCollectionIndex:void 0,editingFolder:void 0,editingFolderName:void 0,editingFolderIndex:void 0,editingFolderPath:void 0,editingRequest:void 0,editingRequestIndex:void 0,filterText:""}),computed:{filteredCollections(){var e=s()(this.collections);if(!this.filterText)return e;var t=this.filterText.toLowerCase(),o=[];for(var n of e){var l=[],i=[];for(var a of n.requests)a.name.toLowerCase().includes(t)&&l.push(a);for(var r of n.folders){var d=[];for(var c of r.requests)c.name.toLowerCase().includes(t)&&d.push(c);if(d.length>0){var u=Object.assign({},r);u.requests=d,i.push(u)}}if(l.length+i.length>0){var p=Object.assign({},n);p.requests=l,p.folders=i,o.push(p)}}return o}},methods:{displayModalAdd(e){this.showModalAdd=e},displayModalEdit(e){this.showModalEdit=e,e||this.resetSelectedData()},displayModalImportExport(e){this.showModalImportExport=e},displayModalAddRequest(e){this.showModalAddRequest=e,e||this.resetSelectedData()},displayModalAddFolder(e){this.showModalAddFolder=e,e||this.resetSelectedData()},displayModalEditFolder(e){this.showModalEditFolder=e,e||this.resetSelectedData()},displayModalEditRequest(e){this.showModalEditRequest=e,e||this.resetSelectedData()},editCollection(e,t){this.$data.editingCollection=e,this.$data.editingCollectionIndex=t,this.displayModalEdit(!0)},onAddRequest(e){var{name:t,path:o}=e,n=f(f({},Object(u.a)().request),{},{name:t});Object(c.z)(o,n),Object(u.l)({request:n,schema:"",response:""}),this.displayModalAddRequest(!1)},addRequest(e){var{path:t}=e;this.$data.editingFolderPath=t,this.displayModalAddRequest(!0)},onAddFolder(e){var{name:t,path:o}=e;Object(c.b)(t,o),this.displayModalAddFolder(!1)},addFolder(e){var{path:t}=e;this.$data.editingFolderPath=t,this.displayModalAddFolder(!0)},editFolder(e){var{folder:t,folderPath:o}=e;this.editingFolder=t,this.editingFolderPath=o,this.displayModalEditFolder(!0)},editRequest(e){var{collectionIndex:t,folderIndex:o,folderName:n,request:l,requestIndex:i,folderPath:a}=e;this.$data.editingFolderPath=a,this.$data.editingCollectionIndex=t,this.$data.editingFolderIndex=o,this.$data.editingFolderName=n,this.$data.editingRequest=l,this.$data.editingRequestIndex=i,this.displayModalEditRequest(!0)},resetSelectedData(){this.$data.editingCollection=void 0,this.$data.editingCollectionIndex=void 0,this.$data.editingFolder=void 0,this.$data.editingFolderIndex=void 0,this.$data.editingRequest=void 0,this.$data.editingRequestIndex=void 0},duplicateRequest(e){var{folderPath:t,request:o}=e;Object(c.z)(t,f(f({},a()(o)),{},{name:"".concat(o.name," - ").concat(this.$t("action.duplicate"))}))}}}),m=o(16),v=Object(m.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:{"rounded border border-divider":e.savingMode}},[o("div",{staticClass:"sticky top-0 z-10 flex flex-col border-b divide-dividerLight divide-y border-dividerLight",class:{"bg-primary":!e.savingMode}},[e.showCollActions?o("input",{directives:[{name:"model",rawName:"v-model",value:e.filterText,expression:"filterText"}],staticClass:"flex px-4 py-2 bg-transparent",attrs:{type:"search",autocomplete:"off",placeholder:e.$t("action.search")},domProps:{value:e.filterText},on:{input:function(t){t.target.composing||(e.filterText=t.target.value)}}}):e._e(),e._v(" "),o("div",{staticClass:"flex justify-between flex-1"},[o("ButtonSecondary",{staticClass:"!rounded-none",attrs:{svg:"plus",label:e.$t("action.new")},nativeOn:{click:function(t){return e.displayModalAdd(!0)}}}),e._v(" "),o("div",{staticClass:"flex"},[o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/collections",blank:"",title:e.$t("app.wiki"),svg:"help-circle"}}),e._v(" "),e.showCollActions?o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("modal.import_export"),svg:"archive"},nativeOn:{click:function(t){return e.displayModalImportExport(!0)}}}):e._e()],1)],1)]),e._v(" "),o("div",{staticClass:"flex-col"},e._l(e.filteredCollections,(function(t,n){return o("CollectionsGraphqlCollection",{key:"collection-"+n,attrs:{picked:e.picked,name:t.name,"collection-index":n,collection:t,doc:e.doc,"is-filtered":e.filterText.length>0,"saving-mode":e.savingMode},on:{"edit-collection":function(o){return e.editCollection(t,n)},"add-request":function(t){return e.addRequest(t)},"add-folder":function(t){return e.addFolder(t)},"edit-folder":function(t){return e.editFolder(t)},"edit-request":function(t){return e.editRequest(t)},"duplicate-request":function(t){return e.duplicateRequest(t)},"select-collection":function(o){return e.$emit("use-collection",t)},select:function(t){return e.$emit("select",t)}}})})),1),e._v(" "),0===e.collections.length?o("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[o("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:e.$t("empty.collections")}}),e._v(" "),o("span",{staticClass:"pb-4 text-center"},[e._v("\n      "+e._s(e.$t("empty.collections"))+"\n    ")]),e._v(" "),o("ButtonSecondary",{attrs:{label:e.$t("add.new"),filled:""},nativeOn:{click:function(t){return e.displayModalAdd(!0)}}})],1):e._e(),e._v(" "),0===e.filteredCollections.length&&0!==e.collections.length?o("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[o("i",{staticClass:"pb-2 opacity-75 material-icons"},[e._v("manage_search")]),e._v(" "),o("span",{staticClass:"my-2 text-center"},[e._v("\n      "+e._s(e.$t("state.nothing_found"))+' "'+e._s(e.filterText)+'"\n    ')])]):e._e(),e._v(" "),o("CollectionsGraphqlAdd",{attrs:{show:e.showModalAdd},on:{"hide-modal":function(t){return e.displayModalAdd(!1)}}}),e._v(" "),o("CollectionsGraphqlEdit",{attrs:{show:e.showModalEdit,"editing-collection":e.editingCollection,"editing-collection-index":e.editingCollectionIndex,"editing-collection-name":e.editingCollection?e.editingCollection.name:""},on:{"hide-modal":function(t){return e.displayModalEdit(!1)}}}),e._v(" "),o("CollectionsGraphqlAddRequest",{attrs:{show:e.showModalAddRequest,"folder-path":e.editingFolderPath},on:{"add-request":function(t){return e.onAddRequest(t)},"hide-modal":function(t){return e.displayModalAddRequest(!1)}}}),e._v(" "),o("CollectionsGraphqlAddFolder",{attrs:{show:e.showModalAddFolder,"folder-path":e.editingFolderPath},on:{"add-folder":function(t){return e.onAddFolder(t)},"hide-modal":function(t){return e.displayModalAddFolder(!1)}}}),e._v(" "),o("CollectionsGraphqlEditFolder",{attrs:{show:e.showModalEditFolder,"collection-index":e.editingCollectionIndex,folder:e.editingFolder,"folder-index":e.editingFolderIndex,"folder-path":e.editingFolderPath,"editing-folder-name":e.editingFolder?e.editingFolder.name:""},on:{"hide-modal":function(t){return e.displayModalEditFolder(!1)}}}),e._v(" "),o("CollectionsGraphqlEditRequest",{attrs:{show:e.showModalEditRequest,"folder-path":e.editingFolderPath,request:e.editingRequest,"request-index":e.editingRequestIndex,"editing-request-name":e.editingRequest?e.editingRequest.name:""},on:{"hide-modal":function(t){return e.displayModalEditRequest(!1)}}}),e._v(" "),o("CollectionsGraphqlImportExport",{attrs:{show:e.showModalImportExport},on:{"hide-modal":function(t){return e.displayModalImportExport(!1)}}})],1)}),[],!1,null,null,null);t.default=v.exports;installComponents(v,{ButtonSecondary:o(88).default,CollectionsGraphqlCollection:o(1218).default,CollectionsGraphqlAdd:o(1219).default,CollectionsGraphqlEdit:o(1220).default,CollectionsGraphqlAddRequest:o(1221).default,CollectionsGraphqlAddFolder:o(1222).default,CollectionsGraphqlEditFolder:o(1223).default,CollectionsGraphqlEditRequest:o(1224).default,CollectionsGraphqlImportExport:o(1225).default})},1218:function(e,t,o){"use strict";o.r(t);var n=o(3),l=o(104),i=Object(n.c)({props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},collectionIndex:{type:Number,default:null},collection:{type:Object,default:()=>{}},doc:Boolean,isFiltered:Boolean},setup:()=>({tippyActions:Object(n.o)(null),options:Object(n.o)(null),requestAction:Object(n.o)(null),folderAction:Object(n.o)(null),edit:Object(n.o)(null),deleteAction:Object(n.o)(null)}),data:()=>({showChildren:!1,dragging:!1,selectedFolder:{},confirmRemove:!1}),computed:{isSelected(){return this.picked&&"gql-my-collection"===this.picked.pickedType&&this.picked.collectionIndex===this.collectionIndex},getCollectionIcon(){return this.isSelected?"check-circle":(this.showChildren||this.isFiltered)&&(this.showChildren||this.isFiltered)?"folder-open":"folder"}},methods:{pick(){this.$emit("select",{picked:{pickedType:"gql-my-collection",collectionIndex:this.collectionIndex}})},toggleShowChildren(){this.savingMode&&this.pick(),this.showChildren=!this.showChildren},removeCollection(){this.picked&&"gql-my-collection"===this.picked.pickedType&&this.picked.collectionIndex===this.collectionIndex&&this.$emit("select",{picked:null}),Object(l.r)(this.collectionIndex),this.$toast.success("".concat(this.$t("state.deleted")))},dropEvent(e){var{dataTransfer:t}=e;this.dragging=!this.dragging;var o=t.getData("folderPath"),n=t.getData("requestIndex");Object(l.p)(o,n,"".concat(this.collectionIndex))}}}),a=o(16),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[o("div",{staticClass:"flex items-stretch group",on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent.apply(null,arguments)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[o("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.toggleShowChildren()}}},[o("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.getCollectionIcon}})],1),e._v(" "),o("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.toggleShowChildren()}}},[o("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.collection.name)+"\n      ")])]),e._v(" "),o("div",{staticClass:"flex"},[o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"file-plus",title:e.$t("request.new")},nativeOn:{click:function(t){return e.$emit("add-request",{path:""+e.collectionIndex})}}}),e._v(" "),o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"folder-plus",title:e.$t("folder.new")},nativeOn:{click:function(t){return e.$emit("add-folder",{path:""+e.collectionIndex})}}}),e._v(" "),o("span",[o("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),o("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"r",void 0,t.key,void 0)?null:e.requestAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"n",void 0,t.key,void 0)?null:e.folderAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[o("SmartItem",{ref:"requestAction",attrs:{svg:"file-plus",label:""+e.$t("request.new"),shortcut:["R"]},nativeOn:{click:function(t){return function(){e.$emit("add-request",{path:""+e.collectionIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("SmartItem",{ref:"folderAction",attrs:{svg:"folder-plus",label:""+e.$t("folder.new"),shortcut:["N"]},nativeOn:{click:function(t){return function(){e.$emit("add-folder",{path:""+e.collectionIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("SmartItem",{ref:"edit",attrs:{svg:"edit",label:""+e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-collection"),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:""+e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),e.showChildren||e.isFiltered?o("div",{staticClass:"flex"},[o("div",{staticClass:"bg-dividerLight cursor-nsResize flex ml-5.5 transform transition w-1 hover:bg-dividerDark hover:scale-x-125",on:{click:function(t){return e.toggleShowChildren()}}}),e._v(" "),o("div",{staticClass:"flex flex-col flex-1 truncate"},[e._l(e.collection.folders,(function(t,n){return o("CollectionsGraphqlFolder",{key:"folder-"+String(n),attrs:{picked:e.picked,"saving-mode":e.savingMode,folder:t,"folder-index":n,"folder-path":e.collectionIndex+"/"+String(n),"collection-index":e.collectionIndex,doc:e.doc,"is-filtered":e.isFiltered},on:{"add-request":function(t){return e.$emit("add-request",t)},"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)}}})})),e._v(" "),e._l(e.collection.requests,(function(t,n){return o("CollectionsGraphqlRequest",{key:"request-"+String(n),attrs:{picked:e.picked,"saving-mode":e.savingMode,request:t,"collection-index":e.collectionIndex,"folder-index":-1,"folder-name":e.collection.name,"folder-path":""+e.collectionIndex,"request-index":n,doc:e.doc},on:{"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)}}})})),e._v(" "),0===e.collection.folders.length&&0===e.collection.requests.length?o("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[o("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 mb-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:""+e.$t("empty.collection")}}),e._v(" "),o("span",{staticClass:"text-center"},[e._v("\n          "+e._s(e.$t("empty.collection"))+"\n        ")])]):e._e()],2)]):e._e(),e._v(" "),o("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:""+e.$t("confirm.remove_collection")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeCollection}})],1)}),[],!1,null,null,null);t.default=r.exports;installComponents(r,{SmartIcon:o(94).default,ButtonSecondary:o(88).default,SmartItem:o(105).default,CollectionsGraphqlFolder:o(970).default,CollectionsGraphqlRequest:o(964).default,SmartConfirmModal:o(317).default})},1219:function(e,t,o){"use strict";o.r(t);var n=o(3),l=o(61),i=o(104),a=Object(n.c)({props:{show:Boolean},data:()=>({name:null}),methods:{addNewCollection(){this.name?(Object(i.a)(Object(l.makeCollection)({name:this.name,folders:[],requests:[]})),this.hideModal()):this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal(){this.name=null,this.$emit("hide-modal")}}}),r=o(16),s=Object(r.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{attrs:{dialog:"",title:""+e.$t("collection.new")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[o("div",{staticClass:"flex flex-col px-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlAdd",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addNewCollection.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"selectLabelGqlAdd"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[o("span",[o("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.addNewCollection.apply(null,arguments)}}}),e._v(" "),o("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1521622023)}):e._e()}),[],!1,null,null,null);t.default=s.exports;installComponents(s,{ButtonPrimary:o(145).default,ButtonSecondary:o(88).default,SmartModal:o(93).default})},1220:function(e,t,o){"use strict";o.r(t);var n=o(34),l=o(3),i=o(104);function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var s=Object(l.c)({props:{show:Boolean,editingCollection:{type:Object,default:()=>{}},editingCollectionIndex:{type:Number,default:null},editingCollectionName:{type:String,default:null}},data:()=>({name:null}),watch:{editingCollectionName(e){this.name=e}},methods:{saveCollection(){if(this.name){var e=r(r({},this.editingCollection),{},{name:this.name});Object(i.g)(this.editingCollectionIndex,e),this.hideModal()}else this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal(){this.name=null,this.$emit("hide-modal")}}}),d=o(16),c=Object(d.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{attrs:{dialog:"",title:""+e.$t("collection.edit")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[o("div",{staticClass:"flex flex-col px-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEdit",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveCollection.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"selectLabelGqlEdit"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[o("span",[o("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.saveCollection.apply(null,arguments)}}}),e._v(" "),o("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,2641254919)}):e._e()}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{ButtonPrimary:o(145).default,ButtonSecondary:o(88).default,SmartModal:o(93).default})},1221:function(e,t,o){"use strict";o.r(t);var n=o(3),l=o(17),i=o(856),a={};a.props={show:{key:"show",required:!0,type:Boolean},folderPath:{key:"folderPath",required:!1,type:String}},a.setup=(e,t)=>{var o=Object(l.j)(),a=Object(l.d)(),r=e,s=t.emit,d=Object(n.o)("");Object(n.z)((()=>r.show),(e=>{e&&(d.value=Object(i.a)().request.name)}));var c=()=>{s("hide-modal")};return{name:d,addRequest:()=>{d.value?(s("add-request",{name:d.value,path:r.folderPath}),c()):o.error("".concat(a("error.empty_req_name")))},hideModal:c}};var r=a,s=o(16),d=Object(s.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{attrs:{dialog:"",title:e.$t("request.new")},on:{close:function(t){return e.$emit("hide-modal")}},scopedSlots:e._u([{key:"body",fn:function(){return[o("div",{staticClass:"flex flex-col px-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlAddRequest",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addRequest.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"selectLabelGqlAddRequest"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[o("span",[o("ButtonPrimary",{attrs:{label:e.$t("action.save")},nativeOn:{click:function(t){return e.addRequest.apply(null,arguments)}}}),e._v(" "),o("ButtonSecondary",{attrs:{label:e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1485072167)}):e._e()}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{ButtonPrimary:o(145).default,ButtonSecondary:o(88).default,SmartModal:o(93).default})},1222:function(e,t,o){"use strict";o.r(t);var n=o(3),l=Object(n.c)({props:{show:Boolean,folderPath:{type:String,default:null},collectionIndex:{type:Number,default:null}},data:()=>({name:null}),methods:{addFolder(){this.name?(this.$emit("add-folder",{name:this.name,path:this.folderPath||"".concat(this.collectionIndex)}),this.hideModal()):this.$toast.error("".concat(this.$t("folder.name_length_insufficient")))},hideModal(){this.name=null,this.$emit("hide-modal")}}}),i=o(16),a=Object(i.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{attrs:{dialog:"",title:e.$t("folder.new")},on:{close:function(t){return e.$emit("hide-modal")}},scopedSlots:e._u([{key:"body",fn:function(){return[o("div",{staticClass:"flex flex-col px-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlAddFolder",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addFolder.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"selectLabelGqlAddFolder"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[o("span",[o("ButtonPrimary",{attrs:{label:e.$t("action.save")},nativeOn:{click:function(t){return e.addFolder.apply(null,arguments)}}}),e._v(" "),o("ButtonSecondary",{attrs:{label:e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3721494695)}):e._e()}),[],!1,null,null,null);t.default=a.exports;installComponents(a,{ButtonPrimary:o(145).default,ButtonSecondary:o(88).default,SmartModal:o(93).default})},1223:function(e,t,o){"use strict";o.r(t);var n=o(34),l=o(3),i=o(104);function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var s=Object(l.c)({props:{show:Boolean,folder:{type:Object,default:()=>{}},folderPath:{type:String,default:null},editingFolderName:{type:String,default:null}},data:()=>({name:""}),watch:{editingFolderName(e){this.name=e}},methods:{editFolder(){this.name?(Object(i.h)(this.folderPath,r(r({},this.folder),{},{name:this.name})),this.hideModal()):this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal(){this.name="",this.$emit("hide-modal")}}}),d=o(16),c=Object(d.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{attrs:{dialog:"",title:""+e.$t("folder.edit")},on:{close:function(t){return e.$emit("hide-modal")}},scopedSlots:e._u([{key:"body",fn:function(){return[o("div",{staticClass:"flex flex-col px-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEditFolder",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.editFolder.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"selectLabelGqlEditFolder"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[o("span",[o("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.editFolder.apply(null,arguments)}}}),e._v(" "),o("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3376791847)}):e._e()}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{ButtonPrimary:o(145).default,ButtonSecondary:o(88).default,SmartModal:o(93).default})},1224:function(e,t,o){"use strict";o.r(t);var n=o(34),l=o(3),i=o(104);function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var s=Object(l.c)({props:{show:Boolean,folderPath:{type:String,default:null},request:{type:Object,default:()=>{}},requestIndex:{type:Number,default:null},editingRequestName:{type:String,default:null}},data:()=>({requestUpdateData:{name:null}}),watch:{editingRequestName(e){this.requestUpdateData.name=e}},methods:{saveRequest(){if(this.requestUpdateData.name){var e=r(r({},this.$props.request),{},{name:this.$data.requestUpdateData.name||this.$props.request.name});Object(i.i)(this.folderPath,this.requestIndex,e),this.hideModal()}else this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal(){this.requestUpdateData={name:null},this.$emit("hide-modal")}}}),d=o(16),c=Object(d.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{attrs:{dialog:"",title:""+e.$t("modal.edit_request")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[o("div",{staticClass:"flex flex-col px-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestUpdateData.name,expression:"requestUpdateData.name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEditReq",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.requestUpdateData.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveRequest.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.requestUpdateData,"name",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"selectLabelGqlEditReq"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[o("span",[o("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.saveRequest.apply(null,arguments)}}}),e._v(" "),o("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1119729043)}):e._e()}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{ButtonPrimary:o(145).default,ButtonSecondary:o(88).default,SmartModal:o(93).default})},1225:function(e,t,o){"use strict";o.r(t);var n=o(13),l=(o(106),o(63),o(123),o(35),o(41),o(316),o(168),o(3)),i=o(15),a=o(17),r=o(104),s={};s.props={show:{key:"show",required:!0,type:Boolean}},s.setup=(e,t)=>{var o=t.emit,s=Object(a.b)(),d=Object(a.j)(),c=Object(a.d)(),u=Object(a.g)(r.o,[]),p=Object(a.g)(i.c,null),f=Object(l.o)(),h=Object(l.o)(),m=Object(l.a)((()=>JSON.stringify(u.value,null,2))),v=function(){var e=Object(n.a)((function*(){if(p.value)try{var e=yield s.$post("https://api.github.com/gists",{files:{"hoppscotch-collections.json":{content:m.value}}},{headers:{Authorization:"token ".concat(p.value.accessToken),Accept:"application/vnd.github.v3+json"}});d.success(c("export.gist_created").toString()),window.open(e.html_url)}catch(e){d.error(c("error.something_went_wrong").toString()),console.error(e)}else d.error(c("profile.no_permission").toString())}));return function(){return e.apply(this,arguments)}}(),y=()=>{d.success(c("state.file_imported").toString())},g=()=>{d.error(c("import.failed").toString())},b=function(){var e=Object(n.a)((function*(){var e=prompt(c("import.gist_url").toString());if(e)try{var{files:t}=yield s.$get("https://api.github.com/gists/".concat(e.split("/").pop()),{headers:{Accept:"application/vnd.github.v3+json"}}),o=JSON.parse(Object.values(t)[0].content);Object(r.B)(o),y()}catch(e){g(),console.error(e)}}));return function(){return e.apply(this,arguments)}}();return{t:c,currentUser:p,options:f,inputChooseFileToImportFrom:h,createCollectionGist:v,readCollectionGist:b,hideModal:()=>{o("hide-modal")},openDialogChooseFileToImportFrom:()=>{h.value&&h.value.click()},importFromJSON:()=>{if(h.value)if(h.value.files&&0!==h.value.files.length){var e=new FileReader;e.onload=e=>{var{target:t}=e,o=t.result;if(o){var n=JSON.parse(o);if(n[0]){var[l,i,a]=Object.keys(n[0]);Object(r.e)(n),y()}else g()}else d.show(c("action.choose_file").toString())},e.readAsText(h.value.files[0]),h.value.value=""}else d.show(c("action.choose_file").toString())},exportJSON:()=>{var e=m.value,t=new Blob([e],{type:"application/json"}),o=document.createElement("a"),n=URL.createObjectURL(t);o.href=n,o.download="".concat(n.split("/").pop().split("#")[0].split("?")[0],".json"),document.body.appendChild(o),o.click(),d.success(c("state.download_started").toString()),setTimeout((()=>{document.body.removeChild(o),URL.revokeObjectURL(n)}),1e3)}}};var d=s,c=o(16),u=Object(c.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{attrs:{dialog:"",title:""+e.t("modal.collections"),"max-width":"sm:max-w-md"},on:{close:e.hideModal},scopedSlots:e._u([{key:"actions",fn:function(){return[o("span",[o("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:e._u([{key:"trigger",fn:function(){return[o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,3953414183)},[e._v(" "),o("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[o("SmartItem",{attrs:{icon:"assignment_returned",label:e.t("import.from_gist")},nativeOn:{click:function(t){return function(){e.readCollectionGist(),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),o("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.currentUser?"github.com"!==e.currentUser.provider?""+e.t("export.require_github"):void 0:""+e.t("export.require_github")}},[o("SmartItem",{attrs:{disabled:!e.currentUser||"github.com"!==e.currentUser.provider,icon:"assignment_turned_in",label:e.t("export.create_secret_gist")},nativeOn:{click:function(t){return function(){e.createCollectionGist(),e.options.tippy().hide()}.apply(null,arguments)}}})],1)],1)])],1)]},proxy:!0},{key:"body",fn:function(){return[o("div",{staticClass:"flex flex-col px-2 space-y-2"},[o("SmartItem",{attrs:{svg:"folder-plus",label:e.t("import.from_json")},nativeOn:{click:function(t){return e.openDialogChooseFileToImportFrom.apply(null,arguments)}}}),e._v(" "),o("input",{ref:"inputChooseFileToImportFrom",staticClass:"input",attrs:{type:"file",accept:"application/json"},on:{change:e.importFromJSON}}),e._v(" "),o("hr"),e._v(" "),o("SmartItem",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.download_file"),svg:"download",label:e.t("export.as_json")},nativeOn:{click:function(t){return e.exportJSON.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3839700765)}):e._e()}),[],!1,null,null,null);t.default=u.exports;installComponents(u,{ButtonSecondary:o(88).default,SmartItem:o(105).default,SmartModal:o(93).default})}}]);