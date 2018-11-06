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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/feed.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/error404.js":
/*!****************************!*\
  !*** ./client/error404.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => `\n<div class=\"error-404\">\n  <h2>Not Found</h2>\n  <img class=\"error-gag-img\" src=\"/images/pooka.png\">\n  <div class=\"error-gag\">Life is Ruff</div>\n</div>\n`;\n\n\n//# sourceURL=webpack:///./client/error404.js?");

/***/ }),

/***/ "./client/feed.js":
/*!************************!*\
  !*** ./client/feed.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! unfetch */ \"./node_modules/unfetch/dist/unfetch.mjs\");\n\nconst error404 = __webpack_require__(/*! ./error404 */ \"./client/error404.js\");\nconst versionComponent = __webpack_require__(/*! ./version */ \"./client/version.js\");\n\nconst root = 'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';\n\nwindow.toggle = function toggle(id) {\n  const el = document.querySelector('.' + id);\n  if (el.style.display === 'block') {\n    el.style.display = 'none';\n  } else {\n    el.style.display = 'block';\n  }\n};\n\nif (typeof window !== 'undefined') {\n  main(document.querySelector('#content'), document.querySelector('#loading'));\n}\n\nmodule.exports = main;\n\nfunction main(container, loading) {\n  let before = null;\n  let inFlight = null;\n\n  next();\n\n  window.addEventListener('scroll', function() {\n    if (isXPercentDownThePage(0.9) && inFlight == null) {\n      next();\n    }\n  });\n\n  function next() {\n    const url = before == null ? `${root}/feed` : `${root}/feed?before=${before}`;\n\n    if (inFlight != null) {\n      return inFlight.then(() => next());\n    }\n\n    loading.style.display = 'block';\n\n    inFlight = fetch(url).\n      then(res => res.json()).\n      then(res => {\n        inFlight = null;\n        loading.style.display = 'none';\n        before = res.versions[res.versions.length - 1].publishedAt;\n        container.innerHTML += res.versions.map(versionComponent).join('\\n');\n      }).\n      catch(err => {\n        inFlight = null;\n        loading.style.display = 'none';\n        container.innerHTML = error404();\n        throw err;\n      });\n  }\n}\n\nfunction isXPercentDownThePage(percent) {\n  const p = window.pageYOffset + document.documentElement.clientHeight;\n  const h = document.documentElement.scrollHeight;\n  return (p / h) > percent;\n}\n\n\n//# sourceURL=webpack:///./client/feed.js?");

/***/ }),

/***/ "./client/version.js":
/*!***************************!*\
  !*** ./client/version.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = version => `\n  <div class=\"version\">\n    <div class=\"left\">\n      <a href=\"https://npmjs.com/package/${version.packageId}\">\n        ${version.packageId}@${version.version}\n      </a>\n      <div\n        class=\"description\"\n        style=\"${version.package.description == null ? 'display: none' : ''}\">\n        ${githubButton(version)}\n        ${version.package.description}\n      </div>\n      <div class=\"ts\">\n        ${ts(version.publishedAt)}\n      </div>\n    </div>\n    <div class=\"right\">\n      <div\n        class=\"button\"\n        style=\"display: ${version.changelog != null ? 'block' : 'none'}\"\n        onClick=\"toggle('changelog-${version._id}')\">\n        Show Changelog\n      </div>\n    </div>\n    <div style=\"clear: both\"></div>\n    <div class=\"changelog changelog-${version._id}\">\n      ${version.changelog || ''}\n    </div>\n  </div>\n`;\n\nfunction githubButton(version) {\n  if (version.package.github == null) {\n    return '';\n  }\n  const { owner, repo } = version.package.github;\n  if (owner == null || repo == null) {\n    return '';\n  }\n  const badge = `https://img.shields.io/github/stars/${owner}/${repo}.svg?` +\n    'style=social&label=Stars';\n  const url = `https://github.com/${owner}/${repo}`;\n  return `<a href=\"${url}\"><img src=\"${badge}\" /></a><br>`;\n}\n\nfunction ts(date) {\n  date = new Date(date);\n  return date.toLocaleTimeString();\n}\n\n\n//# sourceURL=webpack:///./client/version.js?");

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