/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cd49");


/***/ }),

/***/ "5100":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "763d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublishFunnel_vue_vue_type_style_index_0_id_ef457246_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5100");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublishFunnel_vue_vue_type_style_index_0_id_ef457246_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublishFunnel_vue_vue_type_style_index_0_id_ef457246_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8b39":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9c0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cd49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d3be0f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=e9adf73e&
var Appvue_type_template_id_e9adf73e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('h1',[_vm._v("LeadConnector Settings")]),_c('Settings',{attrs:{"enableTextWidget":_vm.settings.enable_text_widget,"apiKey":_vm.settings.api_key,"baseURL":_vm.settings.base_URL}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=e9adf73e&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 5 modules
var createSuper = __webpack_require__("2caf");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 15 modules
var lib = __webpack_require__("1b40");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d3be0f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Settings.vue?vue&type=template&id=30307324&scoped=true&
var Settingsvue_type_template_id_30307324_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lead-connector-settings",attrs:{"id":"lead-connector-settings"}},[_c('div',{staticClass:"api-key-input-contaier"},[_c('b-form-group',{attrs:{"id":"fieldset-api-input","description":"You'll find the API key under location level -> settings -> Company page","label":"API key","label-for":"api-key-input","label-align":"left","invalid-feedback":_vm.apiErrorMessage}},[_c('b-col',{staticStyle:{"padding":"0"},attrs:{"sm":"12","lg":"6"}},[_c('b-form-input',{attrs:{"id":"api-key-input","placeholder":"enter API key","state":_vm.isvalidApi},model:{value:(_vm.api_key),callback:function ($$v) {_vm.api_key=$$v},expression:"api_key"}}),_c('b-form-invalid-feedback',{attrs:{"id":"api-key-input-feedback"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.apiErrorMessage)}})])],1)],1),(!this.isAPIsaving)?_c('b-button',{attrs:{"variant":"success"},on:{"click":function($event){return _vm.saveAPI()}}},[_vm._v(" Save")]):_c('b-spinner',{staticClass:"align-middle text-success my-2"})],1),_c('div',{staticClass:"accordion",attrs:{"role":"tablist"}},[_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":true}}],staticClass:"hl_wrapper-text-widget--toggle",attrs:{"block":"","variant":"info"}},[_c('div',[_c('b-icon-chat-left'),_c('span',{staticClass:"header-text"},[_vm._v("Chat Widget")])],1),(_vm.visible1)?_c('b-icon',{attrs:{"icon":"chevron-down"}}):_vm._e(),(!_vm.visible1)?_c('b-icon',{attrs:{"icon":"chevron-right"}}):_vm._e()],1)]),_c('b-collapse',{attrs:{"id":"accordion-1","accordion":"my-accordion","role":"tabpanel"},model:{value:(_vm.visible1),callback:function ($$v) {_vm.visible1=$$v},expression:"visible1"}},[_c('b-card-body',[_c('div',{staticClass:"chat-widget-setting-root"},[_c('input',{attrs:{"type":"hidden","name":"enable_text_widget","value":"0"}}),_c('b-form-checkbox',{attrs:{"id":"lead_connector_setting_enable_text_widget","name":"enable_text_widget","value":"1","unchecked-value":"0"},model:{value:(_vm.chatWidgetEnable),callback:function ($$v) {_vm.chatWidgetEnable=$$v},expression:"chatWidgetEnable"}},[_vm._v(" Enable Chat-widget ")]),(!this.isAPIsaving)?_c('b-button',{on:{"click":function($event){return _vm.saveAPI($event)}}},[_vm._v(" "+_vm._s(_vm.chatWidgetEnable === "1" ? "Pull and Save" : "Save"))]):_c('b-spinner',{staticClass:"align-middle text-primary my-2"}),_c('label',{staticStyle:{"font-size":"10px"}},[_c('p',{staticStyle:{"margin-top":"5px"}},[_vm._v(" We will fetch the latest settings from your account ")])]),_c('p',{staticClass:"text-warning mb-0"},[_vm._v(_vm._s(this.chatWidgetWarning))])],1)])],1)],1),_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":true}}],staticClass:"hl_wrapper-text-widget--toggle",attrs:{"block":"","variant":"info"}},[_c('div',[_c('b-icon-funnel'),_c('span',{staticClass:"header-text"},[_vm._v("Funnels")])],1),(_vm.visible2)?_c('b-icon',{attrs:{"icon":"chevron-down"}}):_vm._e(),(!_vm.visible2)?_c('b-icon',{attrs:{"icon":"chevron-right"}}):_vm._e()],1)]),_c('b-collapse',{attrs:{"id":"accordion-2","accordion":"my-accordion","role":"tabpanel"},model:{value:(_vm.visible2),callback:function ($$v) {_vm.visible2=$$v},expression:"visible2"}},[_c('b-card-body',[_c('div',[_c('b-table',{ref:"selectableTable",attrs:{"striped":"","hover":"","busy":_vm.isBusy,"items":this.publishedPages,"sticky-header":"","fields":_vm.publishedPageTablefields,"select-mode":"single","selected-variant":""},scopedSlots:_vm._u([{key:"table-busy",fn:function(){return [_c('div',{staticClass:"text-center text-success my-2"},[_c('b-spinner',{staticClass:"align-middle"}),_c('strong',[_vm._v("Loading...")])],1)]},proxy:true},{key:"cell(slug)",fn:function(data){return [_vm._v(" "+_vm._s("/" + data.item.slug)+" ")]}},{key:"cell(url)",fn:function(data){return [_c('div',[_c('a',{attrs:{"active":"false","href":("" + (data.item.url)),"target":"_blank"}},[_vm._v("View ")]),_c('b-icon-box-arrow-up-right')],1)]}},{key:"cell(context)",fn:function(data){return [_c('b-button',{staticClass:"no-border",attrs:{"variant":"outline-danger"},on:{"click":function($event){return _vm.deletePost($event, data.item)}}},[_c('b-icon-trash',{directives:[{name:"b-modal",rawName:"v-b-modal.confirm-post-delete",modifiers:{"confirm-post-delete":true}}]})],1),_c('b-button',{staticClass:"no-border",attrs:{"variant":"outline-secondary"},on:{"click":function($event){return _vm.editFunnel($event, data.item)}}},[_c('b-icon-pencil-square')],1)]}},{key:"cell(edit_url)",fn:function(data){return [_c('div',[_c('a',{attrs:{"href":(_vm.hostURL + "/location/" + _vm.location_id + "/funnels-websites/funnels/" + (data.item.lc_funnel_id) + "/steps/" + (data.item.lc_step_id)),"target":"_blank"}},[_vm._v("Edit")]),_c('b-icon-box-arrow-up-right')],1)]}},{key:"cell(selected)",fn:function(ref){
var rowSelected = ref.rowSelected;
var index = ref.index;
return [(rowSelected)?[_c('input',{key:index + 'selected',attrs:{"type":"checkbox","checked":""},on:{"change":function($event){return _vm.onTableCheckBox($event, index)}}}),_c('span',{staticClass:"sr-only"},[_vm._v("Selected")])]:[_c('input',{key:index + 'un - selected',attrs:{"type":"checkbox"},on:{"change":function($event){return _vm.onTableCheckBox($event, index)}}}),_c('span',{staticClass:"sr-only"},[_vm._v("Not selected")])]]}}])}),_c('b-button',{attrs:{"variant":"outline-primary"},on:{"click":function($event){return _vm.handleAddNewFunnel($event, 1)}}},[_vm._v("Add New")])],1)])],1)],1)],1),(this.showAddNewFunnelModal)?_c('PublishFunnel',{attrs:{"showModal":this.showAddNewFunnelModal,"onClose":this.onModalClose,"funnelOptions":this.funnels,"editPost":this.editPost,"home_url":this.home_url,"host_url":this.hostURL}}):_vm._e(),_c('b-modal',{attrs:{"id":"confirm-post-delete","title":"Delete Page ?","centered":""},on:{"ok":this.onPostDelete}},[_c('p',{staticClass:"my-4"},[_vm._v(" Are you sure you want to delete this page from wordpress? ")])]),_c('b-alert',{staticClass:"position-fixed fixed-bottom m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{"dismissible":"","variant":_vm.alertVariant},model:{value:(_vm.showAlertTimer),callback:function ($$v) {_vm.showAlertTimer=$$v},expression:"showAlertTimer"}},[_vm._v(" "+_vm._s(this.alertTitle)+" ")])],1)}
var Settingsvue_type_template_id_30307324_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Settings.vue?vue&type=template&id=30307324&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d3be0f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PublishFunnel.vue?vue&type=template&id=ef457246&scoped=true&
var PublishFunnelvue_type_template_id_ef457246_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"title":"Add New Page","size":"lg","visible":this.showModal,"ok-only":"","ok-title":"Save Page","ok-variant":"success","busy":!(!!_vm.selectedFunnel && !!_vm.selectedStep && !!_vm.selectedMethod && !!_vm.pageSlug),"scrollable":"","centered":""},on:{"close":this.onCloseModal,"change":this.onModalChange,"ok":this.onOk},scopedSlots:_vm._u([(this.isSubmitting)?{key:"modal-footer",fn:function(){return [_c('div',{staticClass:"text-center text-success my-2"},[_c('b-spinner',{staticClass:"loadgin-spinner"}),_c('strong',[_vm._v("Publishing Funnel...")])],1)]},proxy:true}:null],null,true)},[_c('p',{staticClass:"my-4"},[_c('b-form-group',{attrs:{"id":"fieldset-funnel-input","description":"Choose the funnel you want to publish as wordpress page","label":"Choose funnel","label-for":"funnel-input"}},[_c('b-form-select',{attrs:{"id":"funnel-input","options":this.funnels,"value-field":"id","text-field":"name"},on:{"change":this.onFunnelChange},scopedSlots:_vm._u([{key:"first",fn:function(){return [_c('b-form-select-option',{attrs:{"value":null,"disabled":""}},[_vm._v("-- Please select a Funnel --")])]},proxy:true}]),model:{value:(_vm.selectedFunnel),callback:function ($$v) {_vm.selectedFunnel=$$v},expression:"selectedFunnel"}})],1),_c('b-form-group',{attrs:{"id":"fieldset-funnel-step-input","description":"Choose the funnel step","label":"Choose Step","label-for":"funnel-step-input"}},[_c('b-form-select',{attrs:{"id":"funnel-step-input","disabled":!this.selectedFunnel,"options":this.steps,"value-field":"id","text-field":"name"},on:{"change":this.onStepChange},scopedSlots:_vm._u([{key:"first",fn:function(){return [_c('b-form-select-option',{attrs:{"value":null,"disabled":""}},[(_vm.loadingStep)?_c('span',[_vm._v("loading funnel steps...")]):_c('span',[_vm._v("-- Please select a Funnel step--")])])]},proxy:true}]),model:{value:(_vm.selectedStep),callback:function ($$v) {_vm.selectedStep=$$v},expression:"selectedStep"}}),(_vm.loadingStep)?_c('span',{staticClass:"loading-steps-spinner"},[_c('b-spinner',{staticClass:"loading-steps-spinner",attrs:{"small":"","label":"Loading..."}})],1):_vm._e()],1),_c('b-form-group',{attrs:{"id":"fieldset-funnel-display-method-input","description":"Choose the display method","label":"Page Display Method","label-for":"funnel-display-method-input"}},[_c('b-form-select',{attrs:{"id":"funnel-display-method-input","disabled":!this.selectedFunnel,"options":this.displayMethod},scopedSlots:_vm._u([{key:"first",fn:function(){return [_c('b-form-select-option',{attrs:{"value":null,"disabled":""}},[_vm._v("-- Please select a Page Display Method--")])]},proxy:true}]),model:{value:(_vm.selectedMethod),callback:function ($$v) {_vm.selectedMethod=$$v},expression:"selectedMethod"}})],1),(this.selectedMethod === 'iframe')?_c('b-form-group',{attrs:{"id":"fieldset-funnel-include-tracking-code","description":"If enabled, the tracking code in funnel will track wordpress as well","label":"Tracking code","label-for":"include-tracking-code-input"}},[_c('b-form-checkbox',{attrs:{"id":"include-tracking-code-input","disabled":!_vm.selectedFunnel,"name":"tracking-code-input","value":"1","unchecked-value":"0"},model:{value:(_vm.includeTrackingCode),callback:function ($$v) {_vm.includeTrackingCode=$$v},expression:"includeTrackingCode"}},[_vm._v(" Include Tracking Code ")])],1):_vm._e(),(this.selectedMethod === 'iframe')?_c('b-form-group',{attrs:{"id":"fieldset-funnel-use-site-favicon","description":"If enabled, funnel will use wordpress site favicon","label":"Favicon","label-for":"use-site-favicon"}},[_c('b-form-checkbox',{attrs:{"id":"use-site-favicon","disabled":!_vm.selectedFunnel,"name":"use-site-favicon-input","value":"1","unchecked-value":"0"},model:{value:(_vm.useSiteFavicon),callback:function ($$v) {_vm.useSiteFavicon=$$v},expression:"useSiteFavicon"}},[_vm._v(" Use site favicon ")])],1):_vm._e(),_c('b-form-group',{attrs:{"id":"fieldset-funnel-slug_input","description":this.home_url + '/' + (!!this.pageSlug ? this.pageSlug : ''),"label":"Custom Slug","label-for":"funnel-slug-input","invalid-feedback":_vm.inValidSlugMessage}},[_c('b-form-input',{attrs:{"id":"funnel-slug-input","placeholder":"enter slug","disabled":!this.selectedFunnel,"formatter":this.slugFormatter,"state":_vm.isvalidSlug},model:{value:(_vm.pageSlug),callback:function ($$v) {_vm.pageSlug=$$v},expression:"pageSlug"}})],1),_c('b-form-group',{attrs:{"id":"fieldset-funnel-preview-url","description":"For referene only *","label":"Preview URL","label-for":"funnel-preview-input"}},[_c('b-form-input',{attrs:{"id":"funnel-preview-input","placeholder":"Preview URL","disabled":""},model:{value:(_vm.pagePreviewURL),callback:function ($$v) {_vm.pagePreviewURL=$$v},expression:"pagePreviewURL"}})],1)],1)])}
var PublishFunnelvue_type_template_id_ef457246_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PublishFunnel.vue?vue&type=template&id=ef457246&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./src/constants/index.ts

var PERMAS_LINKS_ERROR_STR = "It seems like your account's Permalink Settings set to 'plain', please change it in order to use this plugin, more info <a href='https://wordpress.org/support/article/settings-permalinks-screen/' target='_blank'>here.</a>";
var getApiURL = function getApiURL(endpoint, data) {
  var directEndpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // eslint-disable-next-line
  var lc_admin_settings = window.lc_admin_settings;
  var apiURL = "".concat(lc_admin_settings.proxy_url, "?endpoint=").concat(encodeURIComponent(endpoint), "&_wpnonce=").concat(lc_admin_settings.nonce, "&direct_endpoint=").concat(String(directEndpoint));

  if (data) {
    apiURL = apiURL + "&data=".concat(JSON.stringify(data));
  }

  return apiURL;
};
var COLUMNS_KEYS = {
  STEP_NAME: "lc_step_name",
  FUNNEL_NAME: "lc_funnel_name",
  PAGE_URL: "url",
  EDIT_URL: "edit_url",
  MODIFIED_DATE: "human_modified_date",
  CONTEXT: "context",
  SLUG: "slug"
};
var POSTS_TABLE_COLUMNS = [{
  key: COLUMNS_KEYS.STEP_NAME,
  label: "Page",
  sortable: true
}, {
  key: COLUMNS_KEYS.FUNNEL_NAME,
  label: "Funnel Name",
  sortable: true
}, {
  key: COLUMNS_KEYS.SLUG,
  label: "Slug",
  sortable: true
}, {
  key: COLUMNS_KEYS.PAGE_URL,
  label: "View",
  sortable: true
}, {
  key: COLUMNS_KEYS.EDIT_URL,
  label: "Edit",
  sortable: false
}, {
  key: COLUMNS_KEYS.MODIFIED_DATE,
  label: "Last Modified",
  sortable: true
}, {
  key: COLUMNS_KEYS.CONTEXT,
  label: "",
  sortable: false
}];
var DISPLAY_METHOD = ["iframe", "redirect"];
var DISPLAY_METHOD_OPTIONS = [{
  value: DISPLAY_METHOD[0],
  text: "Embed Full Page iFrame"
}, {
  value: DISPLAY_METHOD[1],
  text: "Redirect to Funnel URL"
}];
var MESSAGES = {
  INVALID_API_KEY: "API key is invalid",
  FUNNELS_API_FAIL: "Failed to fetch the funnels from you account",
  NO_FUNNELS: "You don't have any funnels in your account",
  POSTS_API_FAIL: "Failed to fetch the Pages",
  DELETE_POST_API_FAIL: "Failed to delete the post",
  POST_DELETED_SUCCESS: "Post deleted successfully",
  POST_CREATED_SUCCESS: "Post created successfully",
  POST_UPDATED_SUCCESS: "Post updated successfully"
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PublishFunnel.vue?vue&type=script&lang=ts&


















var PublishFunnelvue_type_script_lang_ts_AddFunnelModal = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(AddFunnelModal, _Vue);

  var _super = Object(createSuper["a" /* default */])(AddFunnelModal);

  function AddFunnelModal() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AddFunnelModal);

    _this = _super.apply(this, arguments);
    _this.selectedFunnel = null;
    _this.selectedStep = null;
    _this.loadingStep = false;
    _this.selectedMethod = DISPLAY_METHOD[0];
    _this.pageSlug = null;
    _this.pagePreviewURL = null;
    _this.selecetdFunnelDetails = null;
    _this.selecetdStepDetails = null;
    _this.editablePost = false;
    _this.isBusy = true;
    _this.funnels = [];
    _this.steps = [];
    _this.displayMethod = DISPLAY_METHOD_OPTIONS;
    _this.isvalidSlug = null;
    _this.inValidSlugMessage = "";
    _this.isSubmitting = false;
    _this.includeTrackingCode = "1";
    _this.useSiteFavicon = "1";
    return _this;
  }

  Object(createClass["a" /* default */])(AddFunnelModal, [{
    key: "mounted",
    value: function mounted() {
      this.funnels = this.funnelOptions;

      if (this.editPost) {
        this.editablePost = true;

        if (this.editPost.slug) {
          this.pageSlug = this.editPost.slug;
        }

        if (this.editPost.lc_funnel_id) {
          this.selectedFunnel = this.editPost.lc_funnel_id;
          this.onFunnelChange(this.selectedFunnel);
        }

        if (this.editPost.lc_step_id) {
          this.selectedStep = this.editPost.lc_step_id;
          this.pagePreviewURL = "".concat(this.host_url, "/v2/preview/").concat(this.editPost.lc_step_id);
        }

        if (this.editPost.lc_display_method) {
          this.selectedMethod = this.editPost.lc_display_method;
        }

        if (!this.editPost.lc_include_tracking_code || this.editPost.lc_include_tracking_code === "0") {
          this.includeTrackingCode = "0";
        }

        if (!this.editPost.lc_use_site_favicon || this.editPost.lc_use_site_favicon === "0") {
          this.useSiteFavicon = "0";
        }
      }
    }
  }, {
    key: "onFunnelChange",
    value: function onFunnelChange(change) {
      var _this2 = this;

      this.selectedFunnel = change; //reset value on every funnel change

      this.selectedStep = null;
      this.pagePreviewURL = "";
      var selectedFunnelDetail = this.funnels.find(function (funnel) {
        return funnel.id === change;
      });

      if (selectedFunnelDetail) {
        this.selecetdFunnelDetails = selectedFunnelDetail;
        this.steps = [];
        this.loadingStep = true;
        fetch(getApiURL("v1/funnels/".concat(this.selecetdFunnelDetails.id, "/pages/?includeMeta=true&includePageDataDownloadURL=true"))).then(function (response) {
          if (response.ok) {
            response.json().then(function (text) {
              _this2.steps = text.funnelPages;

              if (_this2.selectedStep) {
                _this2.onStepChange(_this2.selectedStep);
              }
            });
          }

          _this2.loadingStep = false;
        });
      }
    }
  }, {
    key: "onStepChange",
    value: function onStepChange(change) {
      var _this3 = this;

      this.selectedStep = change;
      var selectedPageDetails = this.steps.find(function (step) {
        return step.id === _this3.selectedStep;
      });
      this.selecetdStepDetails = selectedPageDetails;

      if (this.selecetdStepDetails) {
        if (this.selecetdFunnelDetails && this.selecetdFunnelDetails.domainURL) {
          this.pagePreviewURL = "https://".concat(this.selecetdFunnelDetails.domainURL).concat(this.selecetdStepDetails.url);
        } else {
          this.pagePreviewURL = "".concat(this.host_url, "/v2/preview/").concat(this.selecetdStepDetails.id);
        }
      }
    }
  }, {
    key: "slugFormatter",
    value: function slugFormatter(value) {
      value = value.toLowerCase().replace(/\s/g, "-");
      var str = value.replace(/^\s+|\s+$/g, ""); // trim

      str = str.toLowerCase(); // remove accents, swap ñ for n, etc

      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to = "aaaaeeeeiiiioooouuuunc------";

      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes

      return str;
    }
  }, {
    key: "onCloseModal",
    value: function onCloseModal() {
      this.onClose && this.onClose(false);
    }
  }, {
    key: "onModalChange",
    value: function onModalChange(isVisible) {
      if (!isVisible) {
        this.onClose && this.onClose(false);
      }
    }
  }, {
    key: "onOk",
    value: function () {
      var _onOk = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(bvModalEvent) {
        var _this$selecetdStepDet,
            _this$selecetdFunnelD,
            _this$selecetdStepDet2,
            _this$selecetdFunnelD2,
            _this$selecetdStepDet3,
            _this$selecetdStepDet4,
            _this$selecetdFunnelD3,
            _this$selecetdFunnelD4,
            _this4 = this;

        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bvModalEvent.preventDefault();
                this.isvalidSlug = null;
                this.inValidSlugMessage = "";
                this.isSubmitting = true; // let trackingCode;
                // if (
                //   this.selecetdStepDetails &&
                //   this.selecetdStepDetails.pageDataDownloadURL
                // ) {
                //   const response = await fetch(
                //     getApiURL(this.selecetdStepDetails.pageDataDownloadURL, undefined, true)
                //   );
                //   try {
                //     if (response.ok) {
                //       const res = await response.json();
                //       trackingCode = res.trackingCode;
                //     }
                //   } catch (err) {
                //     console.log(err);
                //   }
                // }

                _context.next = 6;
                return fetch(getApiURL("wp_insert_post"), {
                  method: "POST",
                  body: JSON.stringify({
                    lc_step_url: this.pagePreviewURL,
                    lc_slug: this.pageSlug,
                    lc_step_id: (_this$selecetdStepDet = this.selecetdStepDetails) === null || _this$selecetdStepDet === void 0 ? void 0 : _this$selecetdStepDet.id,
                    lc_funnel_id: (_this$selecetdFunnelD = this.selecetdFunnelDetails) === null || _this$selecetdFunnelD === void 0 ? void 0 : _this$selecetdFunnelD.id,
                    lc_step_name: (_this$selecetdStepDet2 = this.selecetdStepDetails) === null || _this$selecetdStepDet2 === void 0 ? void 0 : _this$selecetdStepDet2.name,
                    lc_funnel_name: (_this$selecetdFunnelD2 = this.selecetdFunnelDetails) === null || _this$selecetdFunnelD2 === void 0 ? void 0 : _this$selecetdFunnelD2.name,
                    template_id: this.editablePost && this.editPost ? this.editPost.template_id : -1,
                    lc_display_method: this.selectedMethod,
                    lc_step_meta: (_this$selecetdStepDet3 = this.selecetdStepDetails) === null || _this$selecetdStepDet3 === void 0 ? void 0 : _this$selecetdStepDet3.meta,
                    lc_step_page_download_url: (_this$selecetdStepDet4 = this.selecetdStepDetails) === null || _this$selecetdStepDet4 === void 0 ? void 0 : _this$selecetdStepDet4.pageDataDownloadURL,
                    lc_include_tracking_code: this.includeTrackingCode,
                    lc_use_site_favicon: this.useSiteFavicon,
                    lc_funnel_tracking_code: {
                      headerCode: btoa(((_this$selecetdFunnelD3 = this.selecetdFunnelDetails) === null || _this$selecetdFunnelD3 === void 0 ? void 0 : _this$selecetdFunnelD3.tracking_code_head) || ""),
                      footerCode: btoa(((_this$selecetdFunnelD4 = this.selecetdFunnelDetails) === null || _this$selecetdFunnelD4 === void 0 ? void 0 : _this$selecetdFunnelD4.tracking_code_body) || "")
                    }
                  })
                });

              case 6:
                response = _context.sent;
                this.isSubmitting = false;

                if (response.ok) {
                  response.text().then(function (res) {
                    var response = {};

                    try {
                      response = JSON.parse(res);
                    } catch (error) {
                      console.log("fail to parse response", res, error);
                      return;
                    }

                    if (response.error) {
                      if (response.code === 1009) {
                        _this4.isvalidSlug = false;
                        var newSlug = _this4.pageSlug + "-" + ~~(Math.random() * 10);
                        _this4.inValidSlugMessage = response.message + ", try using " + newSlug;
                        _this4.pageSlug = newSlug;
                      }

                      return;
                    }

                    _this4.onClose && _this4.onClose(true);
                  });
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onOk(_x) {
        return _onOk.apply(this, arguments);
      }

      return onOk;
    }()
  }]);

  return AddFunnelModal;
}(lib["c" /* Vue */]);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], PublishFunnelvue_type_script_lang_ts_AddFunnelModal.prototype, "showModal", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], PublishFunnelvue_type_script_lang_ts_AddFunnelModal.prototype, "onClose", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], PublishFunnelvue_type_script_lang_ts_AddFunnelModal.prototype, "funnelOptions", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], PublishFunnelvue_type_script_lang_ts_AddFunnelModal.prototype, "editPost", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], PublishFunnelvue_type_script_lang_ts_AddFunnelModal.prototype, "home_url", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], PublishFunnelvue_type_script_lang_ts_AddFunnelModal.prototype, "host_url", void 0);

PublishFunnelvue_type_script_lang_ts_AddFunnelModal = Object(tslib_es6["a" /* __decorate */])([lib["a" /* Component */]], PublishFunnelvue_type_script_lang_ts_AddFunnelModal);
/* harmony default export */ var PublishFunnelvue_type_script_lang_ts_ = (PublishFunnelvue_type_script_lang_ts_AddFunnelModal);
// CONCATENATED MODULE: ./src/components/PublishFunnel.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PublishFunnelvue_type_script_lang_ts_ = (PublishFunnelvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PublishFunnel.vue?vue&type=style&index=0&id=ef457246&scoped=true&lang=scss&
var PublishFunnelvue_type_style_index_0_id_ef457246_scoped_true_lang_scss_ = __webpack_require__("763d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/PublishFunnel.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PublishFunnelvue_type_script_lang_ts_,
  PublishFunnelvue_type_template_id_ef457246_scoped_true_render,
  PublishFunnelvue_type_template_id_ef457246_scoped_true_staticRenderFns,
  false,
  null,
  "ef457246",
  null
  
)

/* harmony default export */ var PublishFunnel = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Settings.vue?vue&type=script&lang=ts&















var Settingsvue_type_script_lang_ts_LeadConnectorSettings = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(LeadConnectorSettings, _Vue);

  var _super = Object(createSuper["a" /* default */])(LeadConnectorSettings);

  function LeadConnectorSettings() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LeadConnectorSettings);

    _this = _super.apply(this, arguments);
    _this.showAddNewFunnelModal = false;
    _this.isBusy = false;
    _this.visible1 = true;
    _this.visible2 = false;
    _this.showConfirmPostDelete = false;
    _this.isAPIsaving = false;
    _this.isvalidApi = null;
    _this.editPost = null;
    _this.chatWidgetEnable = String(_this.enableTextWidget);
    _this.api_key = "";
    _this.location_id = "";
    _this.home_url = "";
    _this.apiErrorMessage = "";
    _this.chatWidgetWarning = "";
    _this.alertTitle = "";
    _this.showAlertTimer = 0;
    _this.alertVariant = "warning";
    _this.hostURL = "";
    _this.selectedTableRows = [];
    _this.funnels = [];
    _this.publishedPages = [];
    _this.publishedPageTablefields = POSTS_TABLE_COLUMNS;
    return _this;
  }

  Object(createClass["a" /* default */])(LeadConnectorSettings, [{
    key: "onEnableTextWidget",
    value: function onEnableTextWidget(value) {
      this.chatWidgetEnable = String(value);
    }
  }, {
    key: "onApiKey",
    value: function onApiKey(value) {
      this.api_key = String(value);
    }
  }, {
    key: "saveAPI",
    value: function () {
      var _saveAPI = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(enableTextWidget) {
        var _leadConnectorSeeting;

        var body, leadConnectorSeetings, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.api_key = this.api_key && this.api_key.trim();
                body = {
                  api_key: this.api_key
                };

                if (enableTextWidget !== undefined && enableTextWidget !== null) {
                  body.enable_text_widget = this.chatWidgetEnable;
                }

                this.isvalidApi = null;
                this.isAPIsaving = true;
                leadConnectorSeetings = {};
                _context.next = 8;
                return fetch(getApiURL("wp_save_options"), {
                  method: "POST",
                  body: JSON.stringify(body)
                });

              case 8:
                leadConnectorSeetings = _context.sent;
                console.log(leadConnectorSeetings);

                if (!((_leadConnectorSeeting = leadConnectorSeetings) !== null && _leadConnectorSeeting !== void 0 && _leadConnectorSeeting.ok)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 13;
                return leadConnectorSeetings.json();

              case 13:
                response = _context.sent;

                if (response.error) {
                  this.isvalidApi = false;
                  this.apiErrorMessage = response.message ? MESSAGES.INVALID_API_KEY : "";
                }

                if (response.success) {
                  this.init();
                  this.isvalidApi = true;

                  if (response.warning_msg) {
                    if (enableTextWidget !== undefined && enableTextWidget !== null && this.chatWidgetEnable === "1") {
                      this.chatWidgetWarning = response.warning_msg;
                    } else {
                      this.apiErrorMessage = response.warning_msg;
                      this.chatWidgetWarning = "";
                    }
                  } else {
                    this.chatWidgetWarning = "";
                  }

                  if (response.location_id) {
                    this.location_id = response.location_id;
                  }

                  if (response.home_url) {
                    this.home_url = response.home_url;
                  }

                  if (response.white_label_url) {
                    this.hostURL = response.white_label_url;
                  } else {
                    this.hostURL = String(this.baseURL);
                  }
                }

                _context.next = 24;
                break;

              case 18:
                if (leadConnectorSeetings.status === 404) {
                  this.isvalidApi = false;
                  this.apiErrorMessage = PERMAS_LINKS_ERROR_STR;
                }

                _context.t0 = console;
                _context.next = 22;
                return leadConnectorSeetings.text();

              case 22:
                _context.t1 = _context.sent;

                _context.t0.error.call(_context.t0, _context.t1);

              case 24:
                this.isAPIsaving = false;

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveAPI(_x) {
        return _saveAPI.apply(this, arguments);
      }

      return saveAPI;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var funnelsReponse, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(getApiURL("v1/funnels/?includeDomainId=true&includeTrackingCode=true"));

              case 2:
                funnelsReponse = _context2.sent;

                if (!funnelsReponse.ok) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 6;
                return funnelsReponse.json();

              case 6:
                response = _context2.sent;

                if (!response.error) {
                  _context2.next = 10;
                  break;
                }

                this.showToast(MESSAGES.FUNNELS_API_FAIL, false);
                return _context2.abrupt("return");

              case 10:
                this.funnels = response.funnels;

                if (this.funnels.length === 0) {
                  this.showToast(MESSAGES.NO_FUNNELS, false, "warning");
                }

                _context2.next = 20;
                break;

              case 14:
                _context2.t0 = console;
                _context2.next = 17;
                return funnelsReponse.text();

              case 17:
                _context2.t1 = _context2.sent;

                _context2.t0.error.call(_context2.t0, _context2.t1);

                this.showToast(MESSAGES.FUNNELS_API_FAIL, false);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "fetchUserSettings",
    value: function () {
      var _fetchUserSettings = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(onSuccess) {
        var leadConnectorSeetings, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(getApiURL("wp_get_lc_options"));

              case 2:
                leadConnectorSeetings = _context3.sent;

                if (!leadConnectorSeetings.ok) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 6;
                return leadConnectorSeetings.json();

              case 6:
                response = _context3.sent;
                onSuccess && onSuccess(response);

                if (response.api_key) {
                  this.api_key = response.api_key;
                  this.isvalidApi = !response.text_widget_error && response.api_key.length > 0 ? true : null;
                }

                if (response.enable_text_widget) {
                  this.chatWidgetEnable = response.enable_text_widget;
                }

                if (response.location_id) {
                  this.location_id = response.location_id;
                }

                if (response.text_widget_error) {
                  this.isvalidApi = false;
                  this.apiErrorMessage = !response.warning_msg ? MESSAGES.INVALID_API_KEY : response.warning_msg;
                }

                if (response.enable_text_widget === "1" && response.warning_msg && response.warning_msg.includes("chat")) {
                  this.chatWidgetWarning = response.warning_msg;
                }

                if (response.home_url) {
                  this.home_url = response.home_url;
                }

                if (response.white_label_url) {
                  this.hostURL = response.white_label_url;
                } else {
                  this.hostURL = String(this.baseURL);
                }

                _context3.next = 23;
                break;

              case 17:
                if (leadConnectorSeetings.status === 404) {
                  this.isvalidApi = false;
                  this.apiErrorMessage = PERMAS_LINKS_ERROR_STR;
                }

                _context3.t0 = console;
                _context3.next = 21;
                return leadConnectorSeetings.text();

              case 21:
                _context3.t1 = _context3.sent;

                _context3.t0.error.call(_context3.t0, _context3.t1);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchUserSettings(_x2) {
        return _fetchUserSettings.apply(this, arguments);
      }

      return fetchUserSettings;
    }()
  }, {
    key: "fetchPublishedPages",
    value: function () {
      var _fetchPublishedPages = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var funnelsPost, response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.isBusy = true;
                _context4.next = 3;
                return fetch(getApiURL("wp_get_all_posts"));

              case 3:
                funnelsPost = _context4.sent;

                if (!funnelsPost.ok) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 7;
                return funnelsPost.json();

              case 7:
                response = _context4.sent;
                this.publishedPages = response;
                _context4.next = 17;
                break;

              case 11:
                _context4.t0 = console;
                _context4.next = 14;
                return funnelsPost.text();

              case 14:
                _context4.t1 = _context4.sent;

                _context4.t0.error.call(_context4.t0, _context4.t1);

                this.showToast(MESSAGES.POSTS_API_FAIL, false);

              case 17:
                this.isBusy = false;

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchPublishedPages() {
        return _fetchPublishedPages.apply(this, arguments);
      }

      return fetchPublishedPages;
    }()
  }, {
    key: "mounted",
    value: function () {
      var _mounted = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.chatWidgetEnable = String(this.enableTextWidget);
                this.api_key = this.apiKey;
                this.hostURL = String(this.baseURL);
                this.fetchUserSettings(function (response) {
                  if (response.api_key && !response.text_widget_error) {
                    _this2.init();

                    _this2.fetchPublishedPages();
                  }
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }()
  }, {
    key: "handleAddNewFunnel",
    value: function handleAddNewFunnel() {
      this.showAddNewFunnelModal = true;
    }
  }, {
    key: "editFunnel",
    value: function editFunnel(e, postInfo) {
      this.editPost = postInfo;
      this.showAddNewFunnelModal = true;
    }
  }, {
    key: "onPostDelete",
    value: function () {
      var _onPostDelete = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this$editPost, funnelsPost, response;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.editPost) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 3;
                return fetch(getApiURL("wp_delete_post", {
                  post_id: (_this$editPost = this.editPost) === null || _this$editPost === void 0 ? void 0 : _this$editPost.template_id,
                  force_delete: true
                }));

              case 3:
                funnelsPost = _context6.sent;

                if (!funnelsPost.ok) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 7;
                return funnelsPost.json();

              case 7:
                response = _context6.sent;

                if (response && response.error) {
                  this.showToast(MESSAGES.DELETE_POST_API_FAIL, false);
                } else {
                  this.showToast(MESSAGES.POST_DELETED_SUCCESS, true);
                  this.fetchPublishedPages();
                }

              case 9:
                this.editPost = null;

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onPostDelete() {
        return _onPostDelete.apply(this, arguments);
      }

      return onPostDelete;
    }()
  }, {
    key: "deletePost",
    value: function deletePost(e, postInfo) {
      this.editPost = postInfo;
    }
  }, {
    key: "onRowSelected",
    value: function onRowSelected(items) {
      this.selectedTableRows = items;
    }
  }, {
    key: "showToast",
    value: function showToast(toastbody) {
      var isSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var variant = arguments.length > 2 ? arguments[2] : undefined;
      this.alertTitle = toastbody;

      if (!variant) {
        variant = isSuccess ? "success" : "danger";
      }

      this.alertVariant = variant;
      this.showAlertTimer = 5;
    }
  }, {
    key: "onModalClose",
    value: function onModalClose(reload) {
      this.showAddNewFunnelModal = false;

      if (reload) {
        this.showToast(!this.editPost ? MESSAGES.POST_CREATED_SUCCESS : MESSAGES.POST_UPDATED_SUCCESS);
        this.fetchPublishedPages();
      }

      this.editPost = null;
    }
  }]);

  return LeadConnectorSettings;
}(lib["c" /* Vue */]);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], Settingsvue_type_script_lang_ts_LeadConnectorSettings.prototype, "enableTextWidget", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], Settingsvue_type_script_lang_ts_LeadConnectorSettings.prototype, "apiKey", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], Settingsvue_type_script_lang_ts_LeadConnectorSettings.prototype, "baseURL", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(lib["d" /* Watch */])("enableTextWidget")], Settingsvue_type_script_lang_ts_LeadConnectorSettings.prototype, "onEnableTextWidget", null);

Object(tslib_es6["a" /* __decorate */])([Object(lib["d" /* Watch */])("apiKey")], Settingsvue_type_script_lang_ts_LeadConnectorSettings.prototype, "onApiKey", null);

Settingsvue_type_script_lang_ts_LeadConnectorSettings = Object(tslib_es6["a" /* __decorate */])([Object(lib["a" /* Component */])({
  components: {
    PublishFunnel: PublishFunnel
  }
})], Settingsvue_type_script_lang_ts_LeadConnectorSettings);
/* harmony default export */ var Settingsvue_type_script_lang_ts_ = (Settingsvue_type_script_lang_ts_LeadConnectorSettings);
// CONCATENATED MODULE: ./src/components/Settings.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Settingsvue_type_script_lang_ts_ = (Settingsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Settings.vue?vue&type=style&index=0&id=30307324&scoped=true&lang=scss&
var Settingsvue_type_style_index_0_id_30307324_scoped_true_lang_scss_ = __webpack_require__("daa0");

// CONCATENATED MODULE: ./src/components/Settings.vue






/* normalize component */

var Settings_component = Object(componentNormalizer["a" /* default */])(
  components_Settingsvue_type_script_lang_ts_,
  Settingsvue_type_template_id_30307324_scoped_true_render,
  Settingsvue_type_template_id_30307324_scoped_true_staticRenderFns,
  false,
  null,
  "30307324",
  null
  
)

/* harmony default export */ var Settings = (Settings_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&








var BASE_URL = "https://app.leadconnectorhq.com";

var Appvue_type_script_lang_ts_App = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(App, _Vue);

  var _super = Object(createSuper["a" /* default */])(App);

  function App() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    _this = _super.apply(this, arguments);
    _this.settings = {
      base_URL: BASE_URL
    };
    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "mounted",
    value: function mounted() {
      var settingsHolderElement = document.getElementById("lead-connecter-settings-holder");
      var settings = settingsHolderElement ? settingsHolderElement.getAttribute("data-settings") : "";

      if (settings !== null) {
        try {
          this.settings = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, this.settings), JSON.parse(settings));
          this.settings.api_key = atob(this.settings.api_key || "");

          if (settingsHolderElement !== null && !!settingsHolderElement.parentNode) {
            settingsHolderElement.parentNode.removeChild(settingsHolderElement);
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
  }]);

  return App;
}(lib["c" /* Vue */]);

Appvue_type_script_lang_ts_App = Object(tslib_es6["a" /* __decorate */])([Object(lib["a" /* Component */])({
  components: {
    Settings: Settings
  }
})], Appvue_type_script_lang_ts_App);
/* harmony default export */ var Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_App);
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_ts_,
  Appvue_type_template_id_e9adf73e_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/index.js + 269 modules
var esm = __webpack_require__("5f5b");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/icons/plugin.js
var icons_plugin = __webpack_require__("b1e0");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("f9e3");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__("2dd8");

// CONCATENATED MODULE: ./src/main.ts









vue_runtime_esm["default"].config.productionTip = false; // Vue.component("BCard", BCard);
// Vue.component("BCardText", BCardText);
// Vue.component("BCardBody", BCardBody);
// Vue.component("BButton", BButton);
// Vue.component("BCardHeader", BCardHeader);
// Vue.component("BCollapse", BCollapse);
// Note that Vue automatically prefixes directive names with `v-`
// Vue.directive("b-card", VBCard);

vue_runtime_esm["default"].use(esm["a" /* BootstrapVue */]);
vue_runtime_esm["default"].use(icons_plugin["a" /* IconsPlugin */]);
new vue_runtime_esm["default"]({
  render: function render(h) {
    return h(src_App);
  }
}).$mount("#app");

/***/ }),

/***/ "daa0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_30307324_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8b39");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_30307324_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_30307324_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });