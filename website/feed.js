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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest;for(var o in s.open(n.method||"get",e,!0),n.headers)s.setRequestHeader(o,n.headers[o]);function u(){var e,n=[],t=[],r={};return s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(s,o,u){n.push(o=o.toLowerCase()),t.push([o,u]),r[o]=(e=r[o])?e+","+u:u}),{ok:2==(s.status/100|0),status:s.status,statusText:s.statusText,url:s.responseURL,clone:u,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}s.withCredentials="include"==n.credentials,s.onload=function(){t(u())},s.onerror=r,s.send(n.body||null)})});;
//# sourceMappingURL=unfetch.mjs.map


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = () => `
<div class="error-404">
  <h2>Not Found</h2>
  <img class="error-gag-img" src="/images/pooka.png">
  <div class="error-gag">Life is Ruff</div>
</div>
`;


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

const error404 = __webpack_require__(4);
const versionComponent = __webpack_require__(9);

const root = 'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';

window.toggle = function toggle(id) {
  const el = document.querySelector('.' + id);
  if (el.style.display === 'block') {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
};

if (typeof window !== 'undefined') {
  main(document.querySelector('#content'), document.querySelector('#loading'));
}

module.exports = main;

function main(container, loading) {
  let before = null;
  let inFlight = null;

  next();

  window.addEventListener('scroll', function() {
    if (isXPercentDownThePage(0.9) && inFlight == null) {
      next();
    }
  });

  function next() {
    const url = before == null ? `${root}/feed` : `${root}/feed?before=${before}`;

    if (inFlight != null) {
      return inFlight.then(() => next());
    }

    loading.style.display = 'block';

    inFlight = fetch(url).
      then(res => res.json()).
      then(res => {
        inFlight = null;
        loading.style.display = 'none';
        before = res.versions[res.versions.length - 1].publishedAt;
        container.innerHTML += res.versions.map(versionComponent).join('\n');
      }).
      catch(err => {
        inFlight = null;
        loading.style.display = 'none';
        container.innerHTML = error404();
        throw err;
      });
  }
}

function isXPercentDownThePage(percent) {
  const p = window.pageYOffset + document.documentElement.clientHeight;
  const h = document.documentElement.scrollHeight;
  return (p / h) > percent;
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = version => `
  <div class="version">
    <div class="left">
      <a href="https://npmjs.com/package/${version.packageId}">
        ${version.packageId}@${version.version}
      </a>
      <div
        class="description"
        style="${version.package.description == null ? 'display: none' : ''}">
        ${githubButton(version)}
        ${version.package.description}
      </div>
      <div class="ts">
        ${ts(version.publishedAt)}
      </div>
    </div>
    <div class="right">
      <div
        class="button"
        style="display: ${version.changelog != null ? 'block' : 'none'}"
        onClick="toggle('changelog-${version._id}')">
        Show Changelog
      </div>
    </div>
    <div style="clear: both"></div>
    <div class="changelog changelog-${version._id}">
      ${version.changelog || ''}
    </div>
  </div>
`;

function githubButton(version) {
  if (version.package.github == null) {
    return '';
  }
  const { owner, repo } = version.package.github;
  if (owner == null || repo == null) {
    return '';
  }
  const badge = `https://img.shields.io/github/stars/${owner}/${repo}.svg?` +
    'style=social&label=Stars';
  const url = `https://github.com/${owner}/${repo}`;
  return `<a href="${url}"><img src="${badge}" /></a><br>`;
}

function ts(date) {
  date = new Date(date);
  return date.toLocaleTimeString();
}


/***/ })
/******/ ]);