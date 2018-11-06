/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/home.js":
/*!************************!*\
  !*** ./client/home.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! unfetch */ \"./node_modules/unfetch/dist/unfetch.mjs\");\n\nfetch('https://ja7gm36oie.execute-api.us-east-1.amazonaws.com/default/latest-versions').\n  then(res => res.json()).\n  then(res => {\n    document.querySelector('#latest-releases-content').innerHTML = res.versions.\n      map(version => `\n        <div class=\"version\">\n          <div class=\"left\">\n            <a href=\"https://npmjs.com/${version.packageId}\">\n              ${version.packageId}@${version.version}\n            </a>\n            <div class=\"ts\">\n              ${ts(version.publishedAt)}\n            </div>\n          </div>\n          <div class=\"right\">\n            <div class=\"button\" onClick=\"toggle('changelog-${version._id}')\">\n              Show Changelog\n            </div>\n          </div>\n          <div style=\"clear: both\"></div>\n          <div class=\"changelog changelog-${version._id}\">\n            ${version.changelog != null ? changelog(version) : ''}\n          </div>\n        </div>\n      `).\n      join('\\n');\n  });\n\nfunction changelog(version) {\n  return version.changelog;\n}\n\nfunction toggle(id) {\n  const el = document.querySelector('.' + id);\n  if (el.style.display === 'block') {\n    el.style.display = 'none';\n  } else {\n    el.style.display = 'block';\n  }\n}\n\nfunction ts(date) {\n  date = new Date(date);\n  return date.toLocaleTimeString();\n}\n\n\n//# sourceURL=webpack:///./client/home.js?");

/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.mjs":
/*!***********************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest;for(var o in s.open(n.method||\"get\",e,!0),n.headers)s.setRequestHeader(o,n.headers[o]);function u(){var e,n=[],t=[],r={};return s.getAllResponseHeaders().replace(/^(.*?):[^\\S\\n]*([\\s\\S]*?)$/gm,function(s,o,u){n.push(o=o.toLowerCase()),t.push([o,u]),r[o]=(e=r[o])?e+\",\"+u:u}),{ok:2==(s.status/100|0),status:s.status,statusText:s.statusText,url:s.responseURL,clone:u,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}s.withCredentials=\"include\"==n.credentials,s.onload=function(){t(u())},s.onerror=r,s.send(n.body||null)})});;\n//# sourceMappingURL=unfetch.mjs.map\n\n\n//# sourceURL=webpack:///./node_modules/unfetch/dist/unfetch.mjs?");

/***/ })

/******/ });