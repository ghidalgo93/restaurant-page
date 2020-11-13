/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutTab.js":
/*!*************************!*\
  !*** ./src/aboutTab.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function aboutTab() {
	const content = document.querySelector('#content'); 
	const aboutDiv = document.createElement('div');
	aboutDiv.innerHTML = 'about stuff'; 
	content.appendChild(aboutDiv);
	return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutTab);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageInit */ "./src/pageInit.js");
/* harmony import */ var _aboutTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutTab */ "./src/aboutTab.js");
/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab */ "./src/menuTab.js");
;



(0,_pageInit__WEBPACK_IMPORTED_MODULE_0__.pageInit)(_pageInit__WEBPACK_IMPORTED_MODULE_0__.contents);
(0,_aboutTab__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_menuTab__WEBPACK_IMPORTED_MODULE_2__.default)();
contactTab();


/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function menuTab() {
	const content = document.querySelector('#content'); 
	const menuDiv = document.createElement('div');
	menuDiv.innerHTML = 'menu stuff'; 
	content.appendChild(menuDiv);
	return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuTab);



/***/ }),

/***/ "./src/pageInit.js":
/*!*************************!*\
  !*** ./src/pageInit.js ***!
  \*************************/
/*! namespace exports */
/*! export contents [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pageInit [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contents": () => /* binding */ contents,
/* harmony export */   "pageInit": () => /* binding */ pageInit
/* harmony export */ });
let contents= [];

//image
let img = document.createElement('img');
img.src = 'https://www.uncovercolorado.com/wp-content/uploads/2020/03/boulder_tea_house_boulder_main-e1583212520872-1536x768.jpg'; 
img.alt = 'tea house';
contents.push(img);

//welcome line
let headline = document.createElement('h1');
headline.innerHTML = 'Welcome to the Dushanbe Teahouse';
contents.push(headline);

//tab head 
let tabHead = document.createElement('div'); 
//tab btns
let aboutBtn = document.createElement('button');
aboutBtn.innerHTML = 'About'; 
tabHead.appendChild(aboutBtn);
let menuBtn = document.createElement('button');
menuBtn.innerHTML = 'Menu'; 
tabHead.appendChild(menuBtn);
let contactBtn = document.createElement('button');
contactBtn.innerHTML = 'Contact'; 
tabHead.appendChild(contactBtn);

contents.push(tabHead);


//function to take in 
function pageInit(contentList) {
		const content = document.querySelector('#content');
		contentList.forEach(element => content.appendChild(element));
		return content;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map
