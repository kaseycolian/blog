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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/resources/js/mainView.js":
/*!*******************************************!*\
  !*** ./src/main/resources/js/mainView.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function loadDoc(){\r\n\r\n// const xhr = new XMLHttpRequest();\r\n// xhr.onready = () => {\r\n\r\n// \tif (xhr.status === 404){\r\n// \t\tconst notFoundRes = JSON.parse(xhr.responseText);\r\n// \t\tconsole.log(notFoundRes);\r\n// \t\twindow.alert(\"nothing to load!\");\r\n// \t}\r\n\r\n// \tif (xhr.status === 200) {\r\n// \t\tconsole.log(loaded);\r\n// \t\tconst res = JSON.parse(xhr.responseText);\r\n// \t}\r\n\r\n// \txhr.open('GET', '/blogPost' + blogId, true);\r\n// \txhr.send();\r\n\r\n// \t}\r\n// }\r\n\r\n\r\nconsole.log(`This is the mainView.js file from src directory.`);\r\n\r\n// const getBlogs = () => fetch(\"/blogPost/\");\n\n//# sourceURL=webpack:///./src/main/resources/js/mainView.js?");

/***/ }),

/***/ "./src/main/resources/js/mainViewCalls.js":
/*!************************************************!*\
  !*** ./src/main/resources/js/mainViewCalls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (8:18)\\nYou may need an appropriate loader to handle this file type.\\n| \\theader.addEventListener('click', function(){\\r\\n| \\r\\n> \\t\\tasync getResults() {\\r\\n| \\r\\n| \\r\");\n\n//# sourceURL=webpack:///./src/main/resources/js/mainViewCalls.js?");

/***/ }),

/***/ "./src/main/resources/js/mainViewHandlers.js":
/*!***************************************************!*\
  !*** ./src/main/resources/js/mainViewHandlers.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/main/resources/js/test.js\");\n\r\n\r\nconsole.log(`This is the mainViewHanlders.js file from src directory`);\r\nconsole.log(`I imported ${_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"]} from the test.js module and this is the mainViewHandlers.js file`);\r\n\r\n\r\nconst setupEventListeners = () =>{\r\n\tconst DOMStrings = {\r\n\t\ttitle: '.entry__title'\r\n\t} \r\n\r\n\tconst titles = document.querySelectorAll(DOMStrings.title);\r\n\t//regular For Each Loop\r\n\t/*\r\n\tfor (let i = 0; i<titles.length; i++){\r\n\t\ttitles[i].addEventListener('click', (event) => {\r\n\t\t\tconsole.log('clicked');\r\n\t\t});\r\n\t}\r\n\t*/\r\n\t//For Of Loop (ES6)\r\n\tfor (const cur of titles){\r\n\t\tcur.addEventListener('click', (event) =>{\r\n\t\t\tconsole.log('clicked with For Of Loop in ES6');\r\n\r\n\t\t\t//opening up individal blog in new window\r\n\t\t\tlet blogId = blogJsonData.id;\r\n\t\t\twindow.open(`/blogEntry/${blogId}`);\r\n\t\t});\r\n\t}\r\n}\r\n\r\nsetupEventListeners();\n\n//# sourceURL=webpack:///./src/main/resources/js/mainViewHandlers.js?");

/***/ }),

/***/ "./src/main/resources/js/test.js":
/*!***************************************!*\
  !*** ./src/main/resources/js/test.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log('Imported from test.js into mainViewHandlers.js');\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (999999999);\n\n//# sourceURL=webpack:///./src/main/resources/js/test.js?");

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************!*\
  !*** multi ./src/main/resources/js/mainView.js ./src/main/resources/js/mainViewCalls.js ./src/main/resources/js/mainViewHandlers.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/main/resources/js/mainView.js */\"./src/main/resources/js/mainView.js\");\n__webpack_require__(/*! ./src/main/resources/js/mainViewCalls.js */\"./src/main/resources/js/mainViewCalls.js\");\nmodule.exports = __webpack_require__(/*! ./src/main/resources/js/mainViewHandlers.js */\"./src/main/resources/js/mainViewHandlers.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main/resources/js/mainView.js_./src/main/resources/js/mainViewCalls.js_./src/main/resources/js/mainViewHandlers.js?");

/***/ })

/******/ });