/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentModule */ "./src/contentModule.js");
/* harmony import */ var _aboutItems_mission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutItems/mission */ "./src/aboutItems/mission.js");
/* harmony import */ var _aboutItems_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutItems/promise */ "./src/aboutItems/promise.js");
/* harmony import */ var _aboutItems_story__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutItems/story */ "./src/aboutItems/story.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var about = function () {
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var addContent = function () {
    var tabs = document.createElement("ul");
    tabs.id = "about-tabs";
    tabs.classList.add("tabs");
    tabs.classList.add("tabHeader");
    var missionTab = document.createElement("li");
    missionTab.textContent = "Mission";
    var promiseTab = document.createElement("li");
    promiseTab.textContent = "Promise";
    var storyTab = document.createElement("li");
    storyTab.textContent = "Story";
    tabs.appendChild(missionTab);
    tabs.appendChild(promiseTab);
    tabs.appendChild(storyTab);
    var splash = document.createElement("div");
    splash.classList.add("splash");
    var missionContent = (0,_aboutItems_mission__WEBPACK_IMPORTED_MODULE_1__.default)();
    missionContent.loadInto(splash);
    var promiseContent = (0,_aboutItems_promise__WEBPACK_IMPORTED_MODULE_2__.default)();
    promiseContent.loadInto(splash);
    var storyContent = (0,_aboutItems_story__WEBPACK_IMPORTED_MODULE_3__.default)();
    storyContent.loadInto(splash);
    missionContent.show(splash);

    missionTab.onclick = function () {
      return missionContent.show(splash);
    };

    promiseTab.onclick = function () {
      return promiseContent.show(splash);
    };

    storyTab.onclick = function () {
      return storyContent.show(splash);
    };

    contentDiv.appendChild(tabs);
    contentDiv.appendChild(splash);
  }();

  return _objectSpread({}, prototype);
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/aboutItems/mission.js":
/*!***********************************!*\
  !*** ./src/aboutItems/mission.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contentModule */ "./src/contentModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var mission = function mission() {
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var createContent = function createContent() {
    var content = document.createElement("div");
    var para = document.createElement("p");
    para.textContent = "Our mission is to serve the very best sushi Colorado has to offer. We are obbessed with authentic flavors, the ingenuity to take those flavors to new heights, and at atmosphere that trancends the basic dining experience. At the House of Ji we use fish from around the world, focusing primarily on the local ecosystem so you can truly experience the flavors of Colorado. Welcome to our Home.";
    content.appendChild(para);
    return content;
  };

  var addContent = function () {
    contentDiv.appendChild(createContent());
  }();

  return _objectSpread({}, prototype);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mission);

/***/ }),

/***/ "./src/aboutItems/promise.js":
/*!***********************************!*\
  !*** ./src/aboutItems/promise.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contentModule */ "./src/contentModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var promise = function promise() {
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var createContent = function createContent() {
    var content = document.createElement("div");
    var para = document.createElement("p");
    para.textContent = "We promise to only bring sustainable ingrediants to your table. We understand that serving you incredible food must start with a responsibility to our earth. Without this understanding we cannot serve the high quality food we strive for every day. We promise to always be completely transparent with our sources and list our farmers and fishers; because without them we could not bring you food we are proud of. We promise to start with local foods, and make sure that everyone in our resource chain is treated and payed correctly. Thank you.";
    content.appendChild(para);
    return content;
  };

  var addContent = function () {
    contentDiv.appendChild(createContent());
  }();

  return _objectSpread({}, prototype);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promise);

/***/ }),

/***/ "./src/aboutItems/story.js":
/*!*********************************!*\
  !*** ./src/aboutItems/story.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contentModule */ "./src/contentModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var story = function story() {
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var createContent = function createContent() {
    var content = document.createElement("div");
    var para = document.createElement("p");
    para.textContent = "We started as a small group of friends who met in undergrad at the University of Colorado, Boulder. We came to Boulder from all accross the globe with a wide rage of interests, but we all loved doing 1 thing in particular - eating incredible sushi. After university, we all went our seperate ways for a handful of years and ended up coming together for a motorcycle trip accross Japan. We all rediscovered our love for Sushi and decided that we would go back to the US and open a sushi restaurant using all of our seperate skills to create an incredible experience from incredible sources. We hope that we can share the culmination of our hopes and dreams with YOU!";
    content.appendChild(para);
    return content;
  };

  var addContent = function () {
    contentDiv.appendChild(createContent());
  }();

  return _objectSpread({}, prototype);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (story);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentModule */ "./src/contentModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var contact = function () {
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var addContent = function () {
    var contactUs = document.createElement("div");
    contactUs.textContent = "Contact Us";
    contactUs.classList.add("tabHeader");
    var splash = document.createElement("div");
    splash.classList.add("splash");
    var contactList = document.createElement("ul");
    var address = document.createElement("li");
    address.textContent = "1234 Pearl St Boulder, CO 80303";
    var hours = document.createElement("li");
    hours.textContent = "W-Th: 12pm-4pm, 6pm-10p. F-Su: 5pm-11pm";
    var phone = document.createElement("li");
    phone.textContent = "(303) 123.4567";
    contactList.appendChild(address);
    contactList.appendChild(hours);
    contactList.appendChild(phone);
    splash.appendChild(contactList);
    contentDiv.appendChild(contactUs);
    contentDiv.appendChild(splash);
  }();

  return _objectSpread({}, prototype);
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/contentModule.js":
/*!******************************!*\
  !*** ./src/contentModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var contentModule = function contentModule() {
  var contentDiv = document.createElement("div");

  var loadInto = function loadInto(parentNode) {
    contentDiv.style.display = "none";
    parentNode.appendChild(contentDiv);
  };

  var show = function show(parentNode) {
    var children = parentNode.childNodes;
    children.forEach(function (child) {
      child.style.display = "none";
    });
    contentDiv.style.display = "flex";
    contentDiv.style.flexFlow = "column";
    contentDiv.classList.add("tabContent");
  };

  return {
    contentDiv: contentDiv,
    loadInto: loadInto,
    show: show
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentModule);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _pageInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageInit */ "./src/pageInit.js");
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start */ "./src/start.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






_pageInit__WEBPACK_IMPORTED_MODULE_1__.default.init(); // page elems

var content = document.getElementById("content");
var startTab = document.getElementById("start-tab");
var aboutTab = document.getElementById("about-tab");
var menuTab = document.getElementById("menu-tab");
var contactTab = document.getElementById("contact-tab");
var allTabs = document.querySelectorAll(".tab"); // load all content

_start__WEBPACK_IMPORTED_MODULE_2__.default.loadInto(content);
_about__WEBPACK_IMPORTED_MODULE_3__.default.loadInto(content);
_menu__WEBPACK_IMPORTED_MODULE_4__.default.loadInto(content);
_contact__WEBPACK_IMPORTED_MODULE_5__.default.loadInto(content);
var orderBtn = document.getElementById("order-btn"); // show start content

_start__WEBPACK_IMPORTED_MODULE_2__.default.show(content); // events

startTab.onclick = function () {
  allTabs.forEach(function (tab) {
    return tab.classList.remove("tabSelect");
  });
  _start__WEBPACK_IMPORTED_MODULE_2__.default.show(content);
};

aboutTab.onclick = function (e) {
  allTabs.forEach(function (tab) {
    return tab.classList.remove("tabSelect");
  });
  e.target.classList.add("tabSelect");
  _about__WEBPACK_IMPORTED_MODULE_3__.default.show(content);
};

menuTab.onclick = function (e) {
  allTabs.forEach(function (tab) {
    return tab.classList.remove("tabSelect");
  });
  e.target.classList.add("tabSelect");
  _menu__WEBPACK_IMPORTED_MODULE_4__.default.show(content);
};

contactTab.onclick = function (e) {
  allTabs.forEach(function (tab) {
    return tab.classList.remove("tabSelect");
  });
  e.target.classList.add("tabSelect");
  _contact__WEBPACK_IMPORTED_MODULE_5__.default.show(content);
};

orderBtn.onclick = function () {
  allTabs.forEach(function (tab) {
    return tab.classList.remove("tabSelect");
  });
  menuTab.classList.add("tabSelect");
  _menu__WEBPACK_IMPORTED_MODULE_4__.default.show(content);
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentModule */ "./src/contentModule.js");
/* harmony import */ var _menuItems_ramen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItems/ramen */ "./src/menuItems/ramen.js");
/* harmony import */ var _menuItems_nigiri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuItems/nigiri */ "./src/menuItems/nigiri.js");
/* harmony import */ var _menuItems_rolls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuItems/rolls */ "./src/menuItems/rolls.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var menu = function () {
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var addContent = function () {
    var menuList = document.createElement("ul");
    menuList.id = "menu-tabs";
    menuList.classList.add("tabs");
    menuList.classList.add("tabHeader");
    var ramenTab = document.createElement("li");
    ramenTab.textContent = "Ramen";
    var rollsTab = document.createElement("li");
    rollsTab.textContent = "Rolls";
    var nigiriTab = document.createElement("li");
    nigiriTab.textContent = "Nigiri";
    menuList.appendChild(ramenTab);
    menuList.appendChild(nigiriTab);
    menuList.appendChild(rollsTab);
    var splash = document.createElement("div");
    splash.classList.add("splash");
    var ramenContent = (0,_menuItems_ramen__WEBPACK_IMPORTED_MODULE_1__.default)();
    ramenContent.loadInto(splash);
    var nigiriContent = (0,_menuItems_nigiri__WEBPACK_IMPORTED_MODULE_2__.default)();
    nigiriContent.loadInto(splash);
    var rollsContent = (0,_menuItems_rolls__WEBPACK_IMPORTED_MODULE_3__.default)();
    rollsContent.loadInto(splash);
    ramenContent.show(splash);

    ramenTab.onclick = function () {
      return ramenContent.show(splash);
    };

    nigiriTab.onclick = function () {
      return nigiriContent.show(splash);
    };

    rollsTab.onclick = function () {
      return rollsContent.show(splash);
    };

    contentDiv.appendChild(menuList);
    contentDiv.appendChild(splash);
  }();

  return _objectSpread({}, prototype);
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/menuItems/nigiri.js":
/*!*********************************!*\
  !*** ./src/menuItems/nigiri.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contentModule */ "./src/contentModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var nigiri = function nigiri() {
  var imgUrl = "https://i.pinimg.com/originals/54/ec/8a/54ec8a6f8c691e76a10b29e70d00683b.gif";
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var createContent = function createContent() {
    var content = document.createElement("div");
    content.style.display = "flex";
    var list = document.createElement("ul");
    var salmon = document.createElement("li");
    salmon.textContent = "Salmon";
    var tuna = document.createElement("li");
    tuna.textContent = "Tuna";
    var whitefin = document.createElement("li");
    whitefin.textContent = "White Fin";
    list.appendChild(salmon);
    list.appendChild(tuna);
    list.appendChild(whitefin);
    var img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "nigiri";
    content.appendChild(img);
    content.appendChild(list);
    return content;
  };

  var addContent = function () {
    contentDiv.appendChild(createContent());
  }();

  return _objectSpread({}, prototype);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nigiri);

/***/ }),

/***/ "./src/menuItems/ramen.js":
/*!********************************!*\
  !*** ./src/menuItems/ramen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contentModule */ "./src/contentModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ramen = function ramen() {
  var imgUrl = "https://cdn.wallpapersafari.com/59/76/PQ18L5.jpg";
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var createContent = function createContent() {
    var content = document.createElement("div");
    content.style.display = "flex";
    var list = document.createElement("ul");
    var miso = document.createElement("li");
    miso.textContent = "Miso broth";
    var tonkotsu = document.createElement("li");
    tonkotsu.textContent = "Tonkotsu, pork bone broth";
    var onomichi = document.createElement("li");
    onomichi.textContent = "Onomichi, fish and shoyu broth";
    list.appendChild(miso);
    list.appendChild(tonkotsu);
    list.appendChild(onomichi);
    var img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "ramen dawg";
    content.appendChild(img);
    content.appendChild(list);
    return content;
  };

  var addContent = function () {
    contentDiv.appendChild(createContent());
  }();

  return _objectSpread({}, prototype);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ramen);

/***/ }),

/***/ "./src/menuItems/rolls.js":
/*!********************************!*\
  !*** ./src/menuItems/rolls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contentModule */ "./src/contentModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var rolls = function rolls() {
  var imgUrl = "https://i.pinimg.com/originals/9d/1c/cf/9d1ccfcdeb976ba07e1e6565a5bd6654.png";
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var createContent = function createContent() {
    var content = document.createElement("div");
    content.style.display = "flex";
    var list = document.createElement("ul");
    var salmon = document.createElement("li");
    salmon.textContent = "Salmon Skin Roll";
    var tuna = document.createElement("li");
    tuna.textContent = "Spicy Tuna Roll";
    var unagi = document.createElement("li");
    unagi.textContent = "Sweet Unagi Roll";
    var spider = document.createElement("li");
    spider.textContent = "Spider Roll";
    list.appendChild(salmon);
    list.appendChild(tuna);
    list.appendChild(unagi);
    list.appendChild(spider);
    var img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "rolls";
    content.appendChild(img);
    content.appendChild(list);
    return content;
  };

  var addContent = function () {
    contentDiv.appendChild(createContent());
  }();

  return _objectSpread({}, prototype);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rolls);

/***/ }),

/***/ "./src/pageInit.js":
/*!*************************!*\
  !*** ./src/pageInit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentModule */ "./src/contentModule.js");


var pageInit = function () {
  var app = document.getElementById("app");

  var init = function init() {
    // nav
    var navBar = document.createElement("nav");
    var name = document.createElement("h1");
    name.textContent = "House of Ji";
    name.id = "start-tab";
    var tabs = document.createElement("ul");
    tabs.classList.add("tabs");
    var aboutTab = document.createElement("li");
    aboutTab.id = "about-tab";
    aboutTab.classList.add("tab");
    aboutTab.textContent = "About";
    var menuTab = document.createElement("li");
    menuTab.id = "menu-tab";
    menuTab.classList.add("tab");
    menuTab.textContent = "Menu";
    var contactTab = document.createElement("li");
    contactTab.id = "contact-tab";
    contactTab.classList.add("tab");
    contactTab.textContent = "Contact";
    tabs.appendChild(aboutTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);
    navBar.appendChild(name);
    navBar.appendChild(tabs); // content window

    var content = document.createElement("div");
    content.id = "content"; // app

    app.appendChild(navBar);
    app.appendChild(content);
  };

  return {
    init: init
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageInit);

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentModule */ "./src/contentModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var start = function () {
  var prototype = (0,_contentModule__WEBPACK_IMPORTED_MODULE_0__.default)();
  var contentDiv = prototype.contentDiv;

  var addContent = function () {
    var welcome = document.createElement("h2");
    welcome.textContent = "Welcome to Ji's House";
    welcome.classList.add("tabHeader");
    var splash = document.createElement("div");
    splash.classList.add("splash");
    var splashList = document.createElement("ul");
    var address = document.createElement("li");
    address.textContent = "1234 Pearl St Boulder, CO 80303";
    var hours = document.createElement("li");
    hours.textContent = "W-Th: 12pm-4pm, 6pm-10p. F-Su: 5pm-11pm";
    var orderBtn = document.createElement("button");
    orderBtn.id = "order-btn";
    orderBtn.textContent = "Order Now";
    orderBtn.textContent = "Order Now";
    splashList.appendChild(address);
    splashList.appendChild(hours);
    splash.appendChild(orderBtn);
    splash.appendChild(splashList);
    contentDiv.appendChild(welcome);
    contentDiv.appendChild(splash);
  }();

  return _objectSpread({}, prototype);
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  height: 100%;\n  font-family: \"Varela Round\", sans-serif;\n  background-image: url(\"https://chillhop.com/wp-content/uploads/2019/09/4714a035230f599a0a58cd16d2571b5d6b269f77.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #dbdada;\n}\n\n#app {\n  height: 100%;\n}\n\n#content {\n  height: 90%;\n}\n\n.tabContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  height: 5em;\n  justify-content: space-evenly;\n  background-color: #1c3a5c;\n}\n\nh1 {\n  font-family: \"Chango\", cursive;\n  font-size: 2em;\n  color: #f094b1;\n}\n\n.tabHeader {\n  color: #f094b1;\n  font-family: \"Chango\", cursive;\n  font-size: 3em;\n  text-shadow: 4px 4px #1c3a5c;\n}\n\n.tabs {\n  display: flex;\n  list-style-type: none;\n}\n\n.tabSelect {\n  color: #f094b1;\n}\n\nul {\n  font-size: 1em;\n}\n\nli {\n  padding: 1em;\n}\n\nli:hover {\n  font-weight: bold;\n  color: #f094b1;\n}\n\n.splash {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  font-size: 1.5em;\n  font-weight: bold;\n  border-radius: 5px;\n  opacity: 0.5;\n  padding: 1em;\n  width: 50%;\n}\n\nimg {\n  height: 10em;\n  width: 10em;\n  border-radius: 5px;\n}\nbutton {\n  border: none;\n  border-radius: 5px;\n  font-size: 1.5em;\n  color: #1c3a5c;\n  background-color: #dbdada;\n  font-family: \"Chango\", cursive;\n  height: 2em;\n}\nbutton:hover {\n  color: #f094b1;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,YAAY;EACZ,uCAAuC;EACvC,qHAAqH;EACrH,4BAA4B;EAC5B,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;EAC9B,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,8BAA8B;EAC9B,cAAc;EACd,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,cAAc;AAChB","sourcesContent":["html,\nbody {\n  margin: 0;\n  height: 100%;\n  font-family: \"Varela Round\", sans-serif;\n  background-image: url(\"https://chillhop.com/wp-content/uploads/2019/09/4714a035230f599a0a58cd16d2571b5d6b269f77.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #dbdada;\n}\n\n#app {\n  height: 100%;\n}\n\n#content {\n  height: 90%;\n}\n\n.tabContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  height: 5em;\n  justify-content: space-evenly;\n  background-color: #1c3a5c;\n}\n\nh1 {\n  font-family: \"Chango\", cursive;\n  font-size: 2em;\n  color: #f094b1;\n}\n\n.tabHeader {\n  color: #f094b1;\n  font-family: \"Chango\", cursive;\n  font-size: 3em;\n  text-shadow: 4px 4px #1c3a5c;\n}\n\n.tabs {\n  display: flex;\n  list-style-type: none;\n}\n\n.tabSelect {\n  color: #f094b1;\n}\n\nul {\n  font-size: 1em;\n}\n\nli {\n  padding: 1em;\n}\n\nli:hover {\n  font-weight: bold;\n  color: #f094b1;\n}\n\n.splash {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  font-size: 1.5em;\n  font-weight: bold;\n  border-radius: 5px;\n  opacity: 0.5;\n  padding: 1em;\n  width: 50%;\n}\n\nimg {\n  height: 10em;\n  width: 10em;\n  border-radius: 5px;\n}\nbutton {\n  border: none;\n  border-radius: 5px;\n  font-size: 1.5em;\n  color: #1c3a5c;\n  background-color: #dbdada;\n  font-family: \"Chango\", cursive;\n  height: 2em;\n}\nbutton:hover {\n  color: #f094b1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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