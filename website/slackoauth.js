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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/slackoauth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/slackoauth.js":
/*!******************************!*\
  !*** ./client/slackoauth.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! unfetch */ \"./node_modules/unfetch/dist/unfetch.mjs\");\n\nconst qs = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n\nconst root = 'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';\n\nif (typeof window !== 'undefined') {\n  main(document.querySelector('#content'), window.location.search);\n}\n\nfunction main(content, querystring) {\n  const interval = loading(content);\n\n  const params = qs.parse(querystring);\n\n  const opts = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({ code: params.code })\n  };\n  fetch(`${root}/slack`, opts).\n    then(res => {\n      clearInterval(interval);\n      success(content);\n      return res.json();\n    }).\n    then(res => {\n      window.localStorage.setItem('token', res.token._id);\n    }).\n    catch(err => {\n      clearInterval(interval);\n      error(content, err);\n    });\n}\n\nfunction error(content, err) {\n  content.innerHTML = `\n    <div class=\"registering\">\n      <p>An error occurred:</p>\n      <pre>${err.stack}</pre>\n    </div>\n  `;\n}\n\nfunction loading(content) {\n  content.innerHTML = `\n    <div class=\"registering\"><p>Registering</p></div>\n  `;\n\n  let count = 0;\n  const interval = setInterval(() => {\n    let html = content.querySelector('.registering').innerHTML;\n    html += '.';\n    if (html.substr(html.indexOf('.')).length > 3) {\n      html = 'Registering';\n    }\n    content.querySelector('.registering').innerHTML = html;\n  }, 250);\n\n  return interval;\n}\n\nfunction success(content) {\n  content.innerHTML = `\n    <div class=\"registered\">\n      <p>Registered Successfully!</p>\n      <div class=\"button\" >\n        <a href=\"/dashboard\">\n          See Your Dashboard\n        </a>\n      </div>\n    </div>\n  `;\n}\n\n\n//# sourceURL=webpack:///./client/slackoauth.js?");

/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar token = '%[a-f0-9]{2}';\nvar singleMatcher = new RegExp(token, 'gi');\nvar multiMatcher = new RegExp('(' + token + ')+', 'gi');\n\nfunction decodeComponents(components, split) {\n\ttry {\n\t\t// Try to decode the entire string first\n\t\treturn decodeURIComponent(components.join(''));\n\t} catch (err) {\n\t\t// Do nothing\n\t}\n\n\tif (components.length === 1) {\n\t\treturn components;\n\t}\n\n\tsplit = split || 1;\n\n\t// Split the array in 2 parts\n\tvar left = components.slice(0, split);\n\tvar right = components.slice(split);\n\n\treturn Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));\n}\n\nfunction decode(input) {\n\ttry {\n\t\treturn decodeURIComponent(input);\n\t} catch (err) {\n\t\tvar tokens = input.match(singleMatcher);\n\n\t\tfor (var i = 1; i < tokens.length; i++) {\n\t\t\tinput = decodeComponents(tokens, i).join('');\n\n\t\t\ttokens = input.match(singleMatcher);\n\t\t}\n\n\t\treturn input;\n\t}\n}\n\nfunction customDecodeURIComponent(input) {\n\t// Keep track of all the replacements and prefill the map with the `BOM`\n\tvar replaceMap = {\n\t\t'%FE%FF': '\\uFFFD\\uFFFD',\n\t\t'%FF%FE': '\\uFFFD\\uFFFD'\n\t};\n\n\tvar match = multiMatcher.exec(input);\n\twhile (match) {\n\t\ttry {\n\t\t\t// Decode as big chunks as possible\n\t\t\treplaceMap[match[0]] = decodeURIComponent(match[0]);\n\t\t} catch (err) {\n\t\t\tvar result = decode(match[0]);\n\n\t\t\tif (result !== match[0]) {\n\t\t\t\treplaceMap[match[0]] = result;\n\t\t\t}\n\t\t}\n\n\t\tmatch = multiMatcher.exec(input);\n\t}\n\n\t// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else\n\treplaceMap['%C2'] = '\\uFFFD';\n\n\tvar entries = Object.keys(replaceMap);\n\n\tfor (var i = 0; i < entries.length; i++) {\n\t\t// Replace all decoded components\n\t\tvar key = entries[i];\n\t\tinput = input.replace(new RegExp(key, 'g'), replaceMap[key]);\n\t}\n\n\treturn input;\n}\n\nmodule.exports = function (encodedURI) {\n\tif (typeof encodedURI !== 'string') {\n\t\tthrow new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');\n\t}\n\n\ttry {\n\t\tencodedURI = encodedURI.replace(/\\+/g, ' ');\n\n\t\t// Try the built in decoder first\n\t\treturn decodeURIComponent(encodedURI);\n\t} catch (err) {\n\t\t// Fallback to a more advanced decoder\n\t\treturn customDecodeURIComponent(encodedURI);\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/decode-uri-component/index.js?");

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst strictUriEncode = __webpack_require__(/*! strict-uri-encode */ \"./node_modules/strict-uri-encode/index.js\");\nconst decodeComponent = __webpack_require__(/*! decode-uri-component */ \"./node_modules/decode-uri-component/index.js\");\n\nfunction encoderForArrayFormat(options) {\n\tswitch (options.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn (key, value, index) => {\n\t\t\t\treturn value === null ? [\n\t\t\t\t\tencode(key, options),\n\t\t\t\t\t'[',\n\t\t\t\t\tindex,\n\t\t\t\t\t']'\n\t\t\t\t].join('') : [\n\t\t\t\t\tencode(key, options),\n\t\t\t\t\t'[',\n\t\t\t\t\tencode(index, options),\n\t\t\t\t\t']=',\n\t\t\t\t\tencode(value, options)\n\t\t\t\t].join('');\n\t\t\t};\n\t\tcase 'bracket':\n\t\t\treturn (key, value) => {\n\t\t\t\treturn value === null ? [encode(key, options), '[]'].join('') : [\n\t\t\t\t\tencode(key, options),\n\t\t\t\t\t'[]=',\n\t\t\t\t\tencode(value, options)\n\t\t\t\t].join('');\n\t\t\t};\n\t\tdefault:\n\t\t\treturn (key, value) => {\n\t\t\t\treturn value === null ? encode(key, options) : [\n\t\t\t\t\tencode(key, options),\n\t\t\t\t\t'=',\n\t\t\t\t\tencode(value, options)\n\t\t\t\t].join('');\n\t\t\t};\n\t}\n}\n\nfunction parserForArrayFormat(options) {\n\tlet result;\n\n\tswitch (options.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tresult = /\\[(\\d*)\\]$/.exec(key);\n\n\t\t\t\tkey = key.replace(/\\[\\d*\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = {};\n\t\t\t\t}\n\n\t\t\t\taccumulator[key][result[1]] = value;\n\t\t\t};\n\t\tcase 'bracket':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tresult = /(\\[\\])$/.exec(key);\n\t\t\t\tkey = key.replace(/\\[\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = [value];\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\t\tdefault:\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\t}\n}\n\nfunction encode(value, options) {\n\tif (options.encode) {\n\t\treturn options.strict ? strictUriEncode(value) : encodeURIComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction decode(value, options) {\n\tif (options.decode) {\n\t\treturn decodeComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction keysSorter(input) {\n\tif (Array.isArray(input)) {\n\t\treturn input.sort();\n\t}\n\n\tif (typeof input === 'object') {\n\t\treturn keysSorter(Object.keys(input))\n\t\t\t.sort((a, b) => Number(a) - Number(b))\n\t\t\t.map(key => input[key]);\n\t}\n\n\treturn input;\n}\n\nfunction extract(input) {\n\tconst queryStart = input.indexOf('?');\n\tif (queryStart === -1) {\n\t\treturn '';\n\t}\n\n\treturn input.slice(queryStart + 1);\n}\n\nfunction parse(input, options) {\n\toptions = Object.assign({decode: true, arrayFormat: 'none'}, options);\n\n\tconst formatter = parserForArrayFormat(options);\n\n\t// Create an object with no prototype\n\tconst ret = Object.create(null);\n\n\tif (typeof input !== 'string') {\n\t\treturn ret;\n\t}\n\n\tinput = input.trim().replace(/^[?#&]/, '');\n\n\tif (!input) {\n\t\treturn ret;\n\t}\n\n\tfor (const param of input.split('&')) {\n\t\tlet [key, value] = param.replace(/\\+/g, ' ').split('=');\n\n\t\t// Missing `=` should be `null`:\n\t\t// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\t\tvalue = value === undefined ? null : decode(value, options);\n\n\t\tformatter(decode(key, options), value, ret);\n\t}\n\n\treturn Object.keys(ret).sort().reduce((result, key) => {\n\t\tconst value = ret[key];\n\t\tif (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {\n\t\t\t// Sort object keys, not values\n\t\t\tresult[key] = keysSorter(value);\n\t\t} else {\n\t\t\tresult[key] = value;\n\t\t}\n\n\t\treturn result;\n\t}, Object.create(null));\n}\n\nexports.extract = extract;\nexports.parse = parse;\n\nexports.stringify = (obj, options) => {\n\tif (!obj) {\n\t\treturn '';\n\t}\n\n\toptions = Object.assign({\n\t\tencode: true,\n\t\tstrict: true,\n\t\tarrayFormat: 'none'\n\t}, options);\n\n\tconst formatter = encoderForArrayFormat(options);\n\tconst keys = Object.keys(obj);\n\n\tif (options.sort !== false) {\n\t\tkeys.sort(options.sort);\n\t}\n\n\treturn keys.map(key => {\n\t\tconst value = obj[key];\n\n\t\tif (value === undefined) {\n\t\t\treturn '';\n\t\t}\n\n\t\tif (value === null) {\n\t\t\treturn encode(key, options);\n\t\t}\n\n\t\tif (Array.isArray(value)) {\n\t\t\tconst result = [];\n\n\t\t\tfor (const value2 of value.slice()) {\n\t\t\t\tif (value2 === undefined) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tresult.push(formatter(key, value2, result.length));\n\t\t\t}\n\n\t\t\treturn result.join('&');\n\t\t}\n\n\t\treturn encode(key, options) + '=' + encode(value, options);\n\t}).filter(x => x.length > 0).join('&');\n};\n\nexports.parseUrl = (input, options) => {\n\tconst hashStart = input.indexOf('#');\n\tif (hashStart !== -1) {\n\t\tinput = input.slice(0, hashStart);\n\t}\n\n\treturn {\n\t\turl: input.split('?')[0] || '',\n\t\tquery: parse(extract(input), options)\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/query-string/index.js?");

/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);\n\n\n//# sourceURL=webpack:///./node_modules/strict-uri-encode/index.js?");

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