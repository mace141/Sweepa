/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss ***!
  \****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font: inherit;\n  font-size: inherit;\n  color: inherit;\n  text-align: inherit;\n  text-decoration: inherit;\n  vertical-align: inherit;\n  box-sizing: inherit;\n  background: transparent;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nheader {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n}\n\n.top-nav, .bottom-nav, .links, .info-btns {\n  display: flex;\n}\n\n.top-nav {\n  justify-content: space-between;\n  position: relative;\n  font-size: 24px;\n}\n.top-nav a {\n  margin-right: 10px;\n}\n\n.info-btns {\n  padding-left: 61px;\n}\n\n.bottom-nav {\n  font-size: 16px;\n  margin: 0 auto;\n}\n.bottom-nav button {\n  white-space: nowrap;\n}\n\nh1.center {\n  font-weight: bold;\n  font-size: 32px;\n}\n\n.dropdown-ctnr {\n  position: relative;\n  margin-left: 10px;\n}\n.dropdown-ctnr:hover .dropdown {\n  display: block;\n}\n\n.dropdown {\n  display: none;\n  position: absolute;\n  z-index: 10;\n  right: 0;\n  background: white;\n  color: #12407c;\n  width: 300px;\n  height: auto;\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px -3px gray;\n  text-align: center;\n}\n\n.current-modes {\n  margin: 0 auto;\n  font-size: 16px;\n}\n\n#grid {\n  margin: 0 auto;\n  width: max-content;\n  background: white;\n  border: 1px solid #bef5ff;\n}\n\n.node {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  border: 1px solid #bef5ff;\n  width: 25px;\n  height: 25px;\n}\n\n.swept div {\n  height: 15px;\n  width: 15px;\n  background: #ffdfc2;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n\n.row {\n  display: flex;\n}\n\n.home {\n  background: #47a18b;\n}\n\n.sweepa div {\n  height: 25px;\n  width: 25px;\n  background: #12407c;\n  border-radius: 50%;\n  transition: 0.05s;\n}\n\n@keyframes visited {\n  0% {\n    background: #01285c;\n  }\n  25% {\n    background: #2f62ee;\n  }\n  100% {\n    background: #1ec6e4;\n  }\n}\n.visited {\n  animation-name: visited;\n  animation-duration: 2.5s;\n  background: #1ec6e4;\n}\n\n.return {\n  background: #c3ffe6;\n  animation-duration: 0s;\n}\n\n.wall {\n  border: 1px solid gray;\n  background: gray;\n  transition: 0.2s;\n}\n.wall div {\n  background: gray;\n  height: 15px;\n  width: 15px;\n  transition: 0.2s;\n}\n\nmain {\n  display: flex;\n}\nmain aside {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain aside > div {\n  width: 200px;\n  background: white;\n  color: #12407c;\n  margin: 0px 20px;\n  border-radius: 8px;\n  text-align: center;\n  overflow: hidden;\n}\nmain aside > div .category {\n  padding: 8px 0;\n  border-bottom: 2px solid lightgray;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: default;\n}\nmain aside > div ul.buttons {\n  display: flex;\n  justify-content: space-evenly;\n}\nmain aside > div ul li {\n  padding: 5px 0;\n}\nmain aside > div ul li input {\n  cursor: grab;\n}\nmain aside > div ul li input:active {\n  cursor: grabbing;\n}\nmain aside > div .modes li:hover {\n  background: #ececec;\n  cursor: pointer;\n}\n\nbutton {\n  padding: 5px 15px;\n  color: #12407c;\n  background: #eeeeee;\n  border-radius: 5px;\n}\n\n.button {\n  box-shadow: 0 7px #999;\n}\n.button:hover {\n  background-color: #dddddd;\n}\n\n.disabled, .modes li.disabled:hover {\n  cursor: not-allowed;\n}\n\n.button:active, button.selected {\n  background-color: #dddddd;\n  box-shadow: 0 4px #666;\n  transform: translateY(4px);\n  cursor: pointer;\n}\n\n#start-btn {\n  height: 21px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  background: #47a18b;\n  color: white;\n  cursor: not-allowed;\n  align-self: center;\n}\n#start-btn.enabled {\n  cursor: pointer;\n}\n#start-btn:hover {\n  background: #419580;\n}\n#start-btn.pause {\n  background: #a14747;\n}\n#start-btn.pause:hover {\n  background: #954141;\n}\n\nbody {\n  color: white;\n  background: #12407c;\n  font-size: 16px;\n  font-family: \"Segoe UI Symbol\", Helvetica, Arial, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #dddddd;\n  border-radius: 3px;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/reset.scss","webpack://./src/stylesheets/main.scss","webpack://./src/stylesheets/header.scss","webpack://./src/stylesheets/constants.scss","webpack://./src/stylesheets/grid.scss","webpack://./src/stylesheets/sidebar.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;EACA,mBAAA;EACA,wBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;ACCF;;ADEA;EACE,gBAAA;ACCF;;ADEA;EACE,cAAA;EACA,WAAA;EACA,YAAA;ACCF;;ADEA;EACE,eAAA;ACCF;;AC3BA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AD8BF;;AC3BA;EACE,aAAA;AD8BF;;AC3BA;EACE,8BAAA;EACA,kBAAA;EACA,eAAA;AD8BF;AC5BE;EACE,kBAAA;AD8BJ;;AC1BA;EACE,kBAAA;AD6BF;;AC1BA;EACE,eAAA;EACA,cAAA;AD6BF;AC3BE;EACE,mBAAA;AD6BJ;;ACzBA;EACE,iBAAA;EACA,eAAA;AD4BF;;ACzBA;EACE,kBAAA;EACA,iBAAA;AD4BF;AC1BE;EACE,cAAA;AD4BJ;;ACxBA;EACE,aAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,cCtDK;EDuDL,YAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,kCAAA;EACA,kBAAA;AD2BF;;ACxBA;EACE,cAAA;EACA,eAAA;AD2BF;;AG7FA;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,yBAAA;AHgGF;;AG7FA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,yBAAA;EACA,WDTU;ECUV,YDVU;AF0GZ;;AG7FA;EACE,YDbW;ECcX,WDdW;ECeX,mBAAA;EACA,kBAAA;EACA,gBAAA;AHgGF;;AG7FA;EACE,aAAA;AHgGF;;AG7FA;EACE,mBAAA;AHgGF;;AG7FA;EACE,YD9BU;EC+BV,WD/BU;ECgCV,mBDpCK;ECqCL,kBAAA;EACA,iBAAA;AHgGF;;AG7FA;EACE;IAAK,mBAAA;EHiGL;EGhGA;IAAM,mBAAA;EHmGN;EGlGA;IAAS,mBAAA;EHqGT;AACF;AGnGA;EACE,uBAAA;EACA,wBAAA;EACA,mBAAA;AHqGF;;AGlGA;EACE,mBAAA;EACA,sBAAA;AHqGF;;AGlGA;EACE,sBAAA;EACA,gBD1DW;EC2DX,gBAAA;AHqGF;AGnGE;EACE,gBD9DS;EC+DT,YD5DS;EC6DT,WD7DS;EC8DT,gBAAA;AHqGJ;;AIxKA;EACE,aAAA;AJ2KF;AIzKE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AJ2KJ;AIxKE;EACE,YAAA;EACA,iBAAA;EACA,cFZG;EEaH,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;AJ0KJ;AIxKI;EACE,cAAA;EACA,kCAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AJ0KN;AItKM;EACE,aAAA;EACA,6BAAA;AJwKR;AIrKM;EACE,cAAA;AJuKR;AIrKQ;EACE,YAAA;AJuKV;AIrKU;EACE,gBAAA;AJuKZ;AIjKI;EACE,mBAAA;EACA,eAAA;AJmKN;;AI9JA;EACE,iBAAA;EACA,cFtDK;EEuDL,mBAAA;EACA,kBAAA;AJiKF;;AI9JA;EACE,sBAAA;AJiKF;AI/JE;EACE,yBAAA;AJiKJ;;AI7JA;EACE,mBAAA;AJgKF;;AI7JA;EACE,yBAAA;EACA,sBAAA;EACA,0BAAA;EACA,eAAA;AJgKF;;AI7JA;EACE,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;AJgKF;AI9JE;EACE,eAAA;AJgKJ;AI7JE;EACE,mBAAA;AJ+JJ;AI5JE;EACE,mBAAA;AJ8JJ;AI5JI;EACE,mBAAA;AJ8JN;;AA3PA;EACE,YAAA;EACA,mBERK;EFSL,eAAA;EACA,4DAAA;AA8PF;;AA3PA;EACE,UAAA;AA8PF;;AA3PA;EACE,uBAAA;AA8PF;;AA3PA;EACE,mBAAA;EACA,kBAAA;AA8PF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font: inherit;\n  font-size: inherit;\n  color: inherit;\n  text-align: inherit;\n  text-decoration: inherit;\n  vertical-align: inherit;\n  box-sizing: inherit;\n  background: transparent;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\nbutton {\n  cursor: pointer;\n}","@import './reset.scss';\n@import './constants.scss';\n@import './header.scss';\n@import './grid.scss';\n@import './sidebar.scss';\n\nbody {\n  color: white;\n  background: $blue;\n  font-size: 16px;\n  font-family: \"Segoe UI Symbol\", Helvetica, Arial, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #dddddd;\n  border-radius: 3px;\n}","header {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n}\n\n.top-nav, .bottom-nav, .links, .info-btns {\n  display: flex;\n}\n\n.top-nav {\n  justify-content: space-between;\n  position: relative;\n  font-size: 24px;\n\n  a {\n    margin-right: 10px;\n  }\n}\n\n.info-btns {\n  padding-left: 61px;\n}\n\n.bottom-nav {\n  font-size: 16px;\n  margin: 0 auto;\n\n  button {\n    white-space: nowrap;\n  }\n}\n\nh1.center {\n  font-weight: bold;\n  font-size: 32px;\n}\n\n.dropdown-ctnr {\n  position: relative;\n  margin-left: 10px;\n\n  &:hover .dropdown {\n    display: block;\n  }\n}\n\n.dropdown {\n  display: none;\n  position: absolute;\n  z-index: 10;\n  right: 0;\n  background: white;\n  color: $blue;\n  width: 300px;\n  height: auto;\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px -3px gray;\n  text-align: center;\n}\n\n.current-modes {\n  margin: 0 auto;\n  font-size: 16px;\n}","$blue: rgb(18, 64, 124);\n$grid-border: rgb(190, 245, 255);\n$wall-color: gray;\n\n$node-size: 25px;\n$swept-size: 15px;","#grid {\n  margin: 0 auto;\n  width: max-content;\n  background: white;\n  border: 1px solid $grid-border;\n}\n\n.node {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  border: 1px solid $grid-border;\n  width: $node-size;\n  height: $node-size;\n}\n\n.swept div {\n  height: $swept-size;\n  width: $swept-size;\n  background: #ffdfc2;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n\n.row {\n  display: flex;\n}\n\n.home {\n  background: rgb(71, 161, 139);\n}\n\n.sweepa div {\n  height: $node-size;\n  width: $node-size;\n  background: $blue;\n  border-radius: 50%;\n  transition: 0.05s;\n}\n\n@keyframes visited {\n  0% { background: rgb(1, 40, 92) }\n  25% { background: rgb(47, 98, 238) }\n  100%   { background: rgb(30, 198, 228) }\n}\n\n.visited {\n  animation-name: visited;\n  animation-duration: 2.5s;\n  background: rgb(30, 198, 228);\n}\n\n.return {\n  background: rgb(195, 255, 230);\n  animation-duration: 0s;\n}\n\n.wall {\n  border: 1px solid $wall-color;\n  background: $wall-color;\n  transition: 0.2s;\n  \n  div {\n    background: $wall-color;\n    height: $swept-size;\n    width: $swept-size;\n    transition: 0.2s;\n  }\n}","main {\n  display: flex;\n\n  aside {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  aside > div {\n    width: 200px;\n    background: white;\n    color: $blue;\n    margin: 0px 20px;\n    border-radius: 8px;\n    text-align: center;\n    overflow: hidden;\n    \n    .category {\n      padding: 8px 0;\n      border-bottom: 2px solid lightgray;\n      font-size: 14px;\n      font-weight: 600;\n      cursor: default;\n    }\n\n    ul {\n      &.buttons {\n        display: flex;\n        justify-content: space-evenly;\n      }\n\n      li {\n        padding: 5px 0;\n        \n        input {\n          cursor: grab;\n\n          &:active {\n            cursor: grabbing;\n          }\n        }\n      }\n    }\n    \n    .modes li:hover {\n      background: rgb(236, 236, 236);\n      cursor: pointer;\n    }\n  }\n}\n\nbutton {\n  padding: 5px 15px;\n  color: $blue;\n  background: #eeeeee;\n  border-radius: 5px;\n}\n\n.button {\n  box-shadow: 0 7px #999;\n  \n  &:hover {\n    background-color: #dddddd;\n  }\n}\n\n.disabled, .modes li.disabled:hover {\n  cursor: not-allowed;\n}\n\n.button:active, button.selected {\n  background-color: #dddddd;\n  box-shadow: 0 4px #666;\n  transform: translateY(4px);\n  cursor: pointer;\n}\n\n#start-btn {\n  height: 21px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  background: rgb(71, 161, 139);\n  color: white;\n  cursor: not-allowed;\n  align-self: center;\n\n  &.enabled {\n    cursor: pointer;\n  }\n\n  &:hover {\n    background: rgb(65, 149, 128);\n  }\n\n  &.pause {\n    background: rgb(161, 71, 71);\n\n    &:hover {\n      background: rgb(149, 65, 65);\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


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
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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
/***/ (function(module) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


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

/***/ }),

/***/ "./src/graph_node.js":
/*!***************************!*\
  !*** ./src/graph_node.js ***!
  \***************************/
/***/ (function(module) {

class GraphNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
    this.parent = null;
    this.childList = null;
    this.degree = 0;
    this.mark = false;
    this.neighbors = {};
  }

  remove() {
    const prevNode = this.prev;
    const nextNode = this.next;

    nextNode.prev = prevNode;
    prevNode.next = nextNode;

    return this;
  }
}

// export default GraphNode;
module.exports = GraphNode;

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph_node */ "./src/graph_node.js");
/* harmony import */ var _graph_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graph_node__WEBPACK_IMPORTED_MODULE_0__);


const diagDeltas = [
  [-1,  1],
  [ 1,  1],
  [ 1, -1],
  [-1, -1]
];

const dirDeltas = [
  [-1,  0],
  [-1,  1],
  [ 0,  1],
  [ 1,  1],
  [ 1,  0],
  [ 1, -1],
  [ 0, -1],
  [-1, -1]
];

class Grid {
  constructor() {
    this.edit = true;
    this.drag = false;
    this.object = 'wall';
    this.homeNode = null;
    this.cleaningIdx = 0;
    this.dockingIdx = 0;
    this.graphList = {};
    this.neighborList = {};
    this.nodes = {};
    this.graphArr = this.makeGrid();

    this.connectNodes();
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  setObject(objStr) {
    this.object = objStr;
  }

  connectNodes() {
    this.graphArr.forEach((row, i) => {
      row.forEach((node, j) => {
        node.neighbors = {};
        this.graphList[node.value] = {};
        this.neighborList[node.value] = [];

        dirDeltas.forEach(delta => {
          const posY = i + delta[0];
          const posX = j + delta[1];
          
          if (this.graphArr[posY] && this.graphArr[posY][posX]) {
            let neighbor = this.graphArr[posY][posX];

            node.neighbors[[delta[0], delta[1]]] = neighbor;
            
            this.neighborList[node.value].push(neighbor.value);

            if (JSON.stringify(diagDeltas).includes(delta)) {
              this.graphList[node.value][neighbor.value] = 1.41;
            } else {
              this.graphList[node.value][neighbor.value] = 1;
            }
          }
        });
      });
    });
  }

  toggleWall(targetClasses, pos, graphNode, e) {
    if (!targetClasses.value.includes('sweepa')) {
      targetClasses.toggle(this.object);

      for (let nodeNeighbor of this.neighborList[graphNode.value]) {
        nodeNeighbor = this.nodes[nodeNeighbor];
        const neighborPos = nodeNeighbor.value.split('-');
        const delta = [(pos[0] - neighborPos[0]), (pos[1] - neighborPos[1])];

        if (e.currentTarget.className.includes('wall')) {
          delete this.graphList[nodeNeighbor.value][graphNode.value];
          delete nodeNeighbor.neighbors[delta];
        } else {
          if (JSON.stringify(diagDeltas).includes(delta)) {
            this.graphList[nodeNeighbor.value][graphNode.value] = 1.41;
          } else {
            this.graphList[nodeNeighbor.value][graphNode.value] = 1;
          }
          
          nodeNeighbor.neighbors[delta] = graphNode;
        }
      }
    }
  }

  attachNodeEvents(node) {
    node.addEventListener('mousedown', (e) => {
      const targetClasses = e.currentTarget.classList;
      const pos = e.currentTarget.id.split('-');
      const graphNode = this.graphArr[pos[0]][pos[1]];

      if (this.edit) {
        switch (this.object) {
          case 'sweepa':
            if (!targetClasses.value.includes('wall') && !targetClasses.value.includes('dust')) {
              this.homeNode = graphNode;

              const prevSweepa = document.getElementsByClassName('sweepa')[0];
              if (prevSweepa) {
                prevSweepa.classList.remove('sweepa', 'home');
              }

              targetClasses.add('sweepa', 'home');

              document.getElementById('start-btn').classList.add('enabled');
            }

            break;
          case 'dust':
            if (!targetClasses.value.includes('sweepa')) {
              targetClasses.toggle(this.object);
            }
            this.drag = true;

            break;
          case 'wall':
            this.toggleWall(targetClasses, pos, graphNode, e);

            this.drag = true;
            
            break;
          default:
            break;
        }
      }
    });

    node.addEventListener('mouseenter', (e) => {
      const targetClasses = e.currentTarget.classList;
      const pos = e.currentTarget.id.split('-');
      const graphNode = this.graphArr[pos[0]][pos[1]];

      if (this.drag) {
        if (this.object == 'wall') {
          this.toggleWall(targetClasses, pos, graphNode, e);
        }
      }
    });

    node.addEventListener('mouseup', () => {
      this.drag = false;
    });
  }

  makeGrid() {
    const numRows = (window.innerHeight - 125) / 27;
    const numCols = (window.innerWidth - 270) / 27;
    const grid = document.getElementById('grid');
    const graph = [];

    grid.addEventListener('mouseleave', () => this.drag = false);

    for (let i = 0; i < numRows; i++) {
      const graphRow = [];
      const gridRow = document.createElement('div');
      gridRow.className = `row`;
      gridRow.id = `${i}`;

      for (let j = 0; j < numCols; j++) {
        const newNode = document.createElement('div');
        
        newNode.className = `node unvisited`;
        newNode.id = `${i}-${j}`;
        newNode.append(document.createElement('div'));

        this.attachNodeEvents(newNode);
        gridRow.append(newNode);
        
        const graphNode = new (_graph_node__WEBPACK_IMPORTED_MODULE_0___default())(Infinity, newNode.id);
        this.nodes[graphNode.value] = graphNode;
        graphRow.push(graphNode);
      }

      grid.append(gridRow);
      graph.push(graphRow);
    }
    
    return graph;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/min_heap.js":
/*!*************************!*\
  !*** ./src/min_heap.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MinHeap {
  constructor() {
    this.array = [null];
  }

  empty() {
    return this.array.length == 1;
  }

  insert(node) {
    this.array.push(node);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx == 1) return;
    
    const parentIdx = Math.floor(idx / 2);
    if (this.array[idx].key < this.array[parentIdx].key) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
      this.siftUp(parentIdx);
    }
  }

  extractMin() {
    const min = this.array[1];
    if (!min) return null;
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return min;
  }

  siftDown(idx) {
    const leftIdx = idx * 2;
    const rightIdx = idx * 2 + 1;
    const arr = this.array;
    let leftChild = arr[leftIdx];
    let rightChild = arr[rightIdx];
    const node = arr[idx];
    
    if (!leftChild) leftChild = { key: Infinity };
    if (!rightChild) rightChild = { key: Infinity };
    if (node.key <= leftChild.key && node.key <= rightChild.key) return;
    
    const swapIdx = leftChild.key < rightChild.key ? leftIdx : rightIdx;
    [arr[swapIdx], arr[idx]] = [arr[idx], arr[swapIdx]];
    this.siftDown(swapIdx);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MinHeap);

/***/ }),

/***/ "./src/sweepa.js":
/*!***********************!*\
  !*** ./src/sweepa.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min_heap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min_heap */ "./src/min_heap.js");


const dirDeltas = [
  [-1,  0],
  [-1,  1],
  [ 0,  1],
  [ 1,  1],
  [ 1,  0],
  [ 1, -1],
  [ 0, -1],
  [-1, -1]
];

const deltaIndices = {
  '[-1,0]':  0,
  '[-1,1]':  1,
  '[0,1]':   2,
  '[1,1]':   3,
  '[1,0]':   4,
  '[1,-1]':  5,
  '[0,-1]':  6,
  '[-1,-1]': 7
};

const cardinalDeltas = {
  'up':        [-1,  0],
  'right':     [ 0,  1],
  'down':      [ 1,  0],
  'left':      [ 0, -1],
};

const diagDeltas = {
  'upright':   [-1,  1],
  'downright': [ 1,  1],
  'downleft':  [ 1, -1],
  'upleft':    [-1, -1]
};

class Sweepa { 
  constructor(grid) {
    this.grid = grid;
    this.homeNode = grid.homeNode;
    this.graphArr = grid.graphArr;
    this.graphList = grid.graphList;
    this.currNode = grid.homeNode;
    this.nodes = grid.nodes;
    this.cleaningIdx = grid.cleaningIdx;
    this.dockingIdx = grid.dockingIdx;
    
    this.cleaningAlgos = [this.randomDir.bind(this), this.clockwiseDir.bind(this)];
    this.dockingAlgos = [
      this.heapDijkstras.bind(this), 
      this.aStar.bind(this), 
      this.greedyBestFirst.bind(this),
      this.breadthFirstSearch.bind(this)
    ];
    
    this.dir = dirDeltas[Math.floor(Math.random() * 8)];
    this.cleanDuration = 20000;
    this.moveSpeed = 30;
    this.searchSpeed = 25;
    
    this.timeElapsed = 0;
    this.cleaning = false;
    this.paused = false;

    this.attachEvents();
  }

  static enableControls() {
    document.getElementById('clear-grid').classList.remove('disabled');
    document.getElementById('clear-walls').classList.remove('disabled');
    document.getElementById('dijkstras').classList.remove('disabled');
    document.getElementById('a-star').classList.remove('disabled');
    document.getElementById('greedy').classList.remove('disabled');
    document.getElementById('bfs').classList.remove('disabled');
    document.getElementById('random').classList.remove('disabled');
    document.getElementById('clockwise').classList.remove('disabled');
  }

  attachEvents() {
    const cleanDuration = document.getElementById('cleaning-duration');
    const seconds = document.getElementById('seconds');
    const moveSpeed = document.getElementById('move-speed');
    const searchSpeed = document.getElementById('search-speed');

    cleanDuration.addEventListener('input', e => {
      seconds.innerHTML = e.target.value;

      if (!this.paused) {
        this.cleanDuration = parseInt(e.target.value) * 1000;
      }
    });

    moveSpeed.addEventListener('input', e => {
      if (!this.paused) {
        this.moveSpeed = 100 - ((parseInt(e.target.value) - 1) * 10);
      }
    });

    searchSpeed.addEventListener('input', e => {
      if (!this.paused) {
        this.searchSpeed = 50 - ((parseInt(e.target.value) - 1) * 5);
      }
    });
  }

  setGrid(grid) {
    this.grid = grid;
    this.homeNode = grid.homeNode;
    this.graphArr = grid.graphArr;
    this.graphList = grid.graphList;
    this.currNode = grid.homeNode;
    this.nodes = grid.nodes;
    this.dockingIdx = grid.dockingIdx;
    this.cleaningIdx = grid.cleaningIdx;
    this.timeElapsed = 0;
  }

  pauseCleaning() {
    this.paused = true;
  }

  resumeCleaning() {
    this.paused = false;
    this.cleanDuration -= this.timeElapsed;
    this.beginCleaning();
  }
  
  async beginCleaning() {
    const startTime = Date.now();
    let currTime = Date.now();
    this.timeElapsed = 0;
    this.cleaning = true;
    
    while (this.timeElapsed < this.cleanDuration && !this.paused) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.cleanStep());
        }, this.moveSpeed);
      });
      
      currTime = Date.now();
      this.timeElapsed = currTime - startTime;
    }

    if (!this.paused) {
      this.cleaning = false;
      document.getElementById('start-btn').classList.remove('enabled');
      this.beginDocking();
    }
  }

  cleanStep() {
    let nextNode = this.currNode.neighbors[this.dir];
    const nextDir = this.cleaningAlgos[this.cleaningIdx];

    if (nextNode) {
      this.currNode = nextNode;
      nextNode = this.currNode.neighbors[this.dir];

      this.replaceSweepa(true);
    } else { 
      nextDir();
    }
  }

  randomDir() {
    this.dir = dirDeltas[Math.floor(Math.random() * 8)];
  }

  clockwiseDir() {
    if (Math.random() < 0.75) {
      const lastDirIdx = deltaIndices[JSON.stringify(this.dir)];
      
      this.dir = lastDirIdx == 7 ? [-1, 0] : dirDeltas[lastDirIdx + 1];
    } else {
      this.randomDir();
    }
  }

  beginDocking() {
    const dockingAlgo = this.dockingAlgos[this.dockingIdx];

    dockingAlgo(
      this.currNode.value, this.homeNode.value, this.graphList
    ).then(res => {
      const { cameFrom } = res;
      this.retracePath(cameFrom);
    }).then(() => {
      setTimeout(() => {
        this.homeSequence();
      }, 1250)
    });
  }
  
  retracePath(cameFrom) {
    let path = [this.homeNode.value];
    let lastNode;
    let nextNode;
    
    while (!path.includes(this.currNode.value)) {
      lastNode = path[0]
      nextNode = cameFrom[lastNode];
      path.unshift(nextNode);
    }
    
    this.path = path;
  }
  
  async homeSequence() {
    while (this.currNode.value != this.homeNode.value) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.homeStep());
        }, this.moveSpeed);
      });
    }

    this.cleaning = false;
    
    const startBtn = document.getElementById('start-btn');
    startBtn.classList.remove('pause');
    startBtn.classList.add('enabled');
    startBtn.innerHTML = 'Start';
    
    this.grid.toggleEdit();
    Sweepa.enableControls();
  }

  homeStep() {
    let nextNode = this.path[0];
    
    if (nextNode) {
      const pos = nextNode.split('-');
      this.currNode = this.graphArr[pos[0]][pos[1]];
      this.replaceSweepa(false);
      this.path.shift();

      const stepHome = document.getElementById(nextNode);
      stepHome.classList.add('return');
    } 
  }

  replaceSweepa(cleaning) {
    const lastDiv = document.getElementsByClassName('sweepa')[0];
    const nextDiv = document.getElementById(this.currNode.value);

    lastDiv.classList.remove('sweepa');
    nextDiv.classList.add('sweepa');
    
    if (cleaning) {
      nextDiv.classList.add('swept');
    }
  }
  
  octileDist(current, destination) {
    const startPos = current.split('-');
    const destPos = destination.split('-');
    const d1 = 1;
    const d2 = Math.sqrt(2);
    const dy = Math.abs(destPos[0] - startPos[0]);
    const dx = Math.abs(destPos[1] - startPos[1]);

    return d1 * (dx + dy) + (d2 - 2 * d1) * Math.min(dx, dy);
  }

  markVisited(node) {
    const visitedNode = document.getElementById(node);
    visitedNode.classList.add('visited');
    visitedNode.classList.remove('unvisited');
  }

  pathDirection(lastPosVal, nextPosVal) {
    const lastPosArr = lastPosVal.split('-');
    const nextPosArr = nextPosVal.split('-');

    const dirX = parseInt(nextPosArr[0]) - parseInt(lastPosArr[0]);
    const dirY = parseInt(nextPosArr[1]) - parseInt(lastPosArr[1]);

    return [dirX, dirY];
  }

  async heapDijkstras(start, destination, graphList) {
    const frontier = new _min_heap__WEBPACK_IMPORTED_MODULE_0__.default();
    const cameFrom = {};
    const distance = {};
    for (let node in this.nodes) {
      if (node == start) {
        distance[start] = 0;
        this.nodes[start].key = 0;
        frontier.insert(this.nodes[start]);
      } else {
        distance[node] = Infinity;
        this.nodes[node].key = Infinity;
      }
    }

    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;

      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNodeVal));
        }, this.searchSpeed);
      });
      
      if (currNodeVal == destination) return { distance, cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        let distFromCurrToNeighbor = graphList[currNodeVal][neighbor];
        let distFromSourceToNeighbor = distance[currNodeVal] + distFromCurrToNeighbor;
        
        if (distance[neighbor] > distFromSourceToNeighbor) {
          distance[neighbor] = distFromSourceToNeighbor;
          cameFrom[neighbor] = currNodeVal;

          this.nodes[neighbor].key = distFromSourceToNeighbor;
          frontier.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { distance, cameFrom };
  }

  async greedyBestFirst(start, destination, graphList) {
    const frontier = new _min_heap__WEBPACK_IMPORTED_MODULE_0__.default();
    this.nodes[start].key = 0;
    frontier.insert(this.nodes[start]);

    const cameFrom = {};
    cameFrom[start] = null;

    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;

      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNodeVal));
        }, this.searchSpeed);
      });

      if (currNodeVal == destination) return { cameFrom };

      for (let neighbor in graphList[currNodeVal]) {
        if (!Object.keys(cameFrom).includes(neighbor)) {
          const heuristic = this.octileDist(neighbor, destination);
          this.nodes[neighbor].key = heuristic;
          frontier.insert(this.nodes[neighbor]);
          cameFrom[neighbor] = currNodeVal;
        }
      }
    }

    return { cameFrom };
  }

  async aStar(start, destination, graphList) {
    const frontier = new _min_heap__WEBPACK_IMPORTED_MODULE_0__.default();
    const cameFrom = {};
    const gScore = {};
    for (let node in this.nodes) {
      if (node == start) {
        gScore[start] = 0;
        this.nodes[start].key = 0;
        frontier.insert(this.nodes[start]);
      } else {
        gScore[node] = Infinity;
        this.nodes[node].key = Infinity;
      }
    }
    
    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;
      
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNodeVal));
        }, this.searchSpeed);
      });
      
      if (currNodeVal == destination) return { gScore, cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        let distFromCurrToNeighbor = graphList[currNodeVal][neighbor];
        let distFromSourceToNeighbor = gScore[currNodeVal] + distFromCurrToNeighbor;
        
        if (gScore[neighbor] > distFromSourceToNeighbor) {
          gScore[neighbor] = distFromSourceToNeighbor;
          cameFrom[neighbor] = currNodeVal;

          const fScore = this.octileDist(neighbor, destination);
          this.nodes[neighbor].key = distFromSourceToNeighbor + fScore;
          frontier.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { gScore, cameFrom };
  }

  async breadthFirstSearch(start, destination, graphList) {
    const queue = [start];
    const visited = new Set();
    const cameFrom = {};
    visited.add(start);

    while (queue.length) {
      const currNodeVal = queue.shift();

      if (currNodeVal == destination) return { cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
          cameFrom[neighbor] = currNodeVal;
    
          await new Promise(resolve => {
            setTimeout(() => {
              resolve(this.markVisited(neighbor));
            }, this.searchSpeed);
          });

          if (neighbor == destination) return { cameFrom };
        }
      }
    }

    return { cameFrom };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sweepa);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _sweepa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sweepa */ "./src/sweepa.js");



class View {
  static attachEvents() {
    const clearGridBtn = document.getElementById('clear-grid');
    const clearWallsBtn = document.getElementById('clear-walls');
    const sweepaBtn = document.getElementById('sweepa-btn');
    const wallBtn = document.getElementById('wall-btn');
    const startBtn = document.getElementById('start-btn');

    const docking = document.getElementById('docking');
    const dijkstrasBtn = document.getElementById('dijkstras');
    const aStarBtn = document.getElementById('a-star');
    const greedyBtn = document.getElementById('greedy');
    const bfsBtn = document.getElementById('bfs');

    const cleaning = document.getElementById('cleaning');
    const randomBtn = document.getElementById('random');
    const clockwiseBtn = document.getElementById('clockwise');

    const controls = document.getElementById('controls');

    let grid = new _grid__WEBPACK_IMPORTED_MODULE_0__.default();
    let sweepa = new _sweepa__WEBPACK_IMPORTED_MODULE_1__.default(grid);

    clearGridBtn.addEventListener('click', () => {
      if (grid.edit) {
        cleaning.innerHTML = "Random";
        docking.innerHTML = "Dijkstra's Algorithm";

        document.getElementById('grid').innerHTML = "";
        grid = new _grid__WEBPACK_IMPORTED_MODULE_0__.default();

        if (!wallBtn.className.includes('selected')) {
          wallBtn.classList.add('selected');
        }
        sweepaBtn.classList.remove('selected');
      }
    });

    clearWallsBtn.addEventListener('click', () => {
      if (grid.edit) {
        const walls = document.getElementsByClassName('wall');

        grid.connectNodes();

        while (walls.length > 0) {
          walls[0].classList.remove('wall');
        }
      }
    });

    sweepaBtn.addEventListener('click', () => {
      grid.setObject('sweepa');

      if (!sweepaBtn.className.includes('selected')) {
        sweepaBtn.classList.toggle('selected');
        wallBtn.classList.toggle('selected');
      }
    });

    wallBtn.addEventListener('click', () => {
      grid.setObject('wall');

      if (!wallBtn.className.includes('selected')) {
        sweepaBtn.classList.toggle('selected');
        wallBtn.classList.toggle('selected');
      }
    });

    startBtn.addEventListener('click', () => {
      if (grid.edit && grid.homeNode && !sweepa.cleaning) {
        grid.toggleEdit();
        this.disableControls();

        const visited = document.getElementsByClassName('visited');
        const swept = document.getElementsByClassName('swept');
        const returnPath = document.getElementsByClassName('return');

        while (visited.length || swept.length || returnPath.length) {
          if (visited[0]) {
            visited[0].classList.add('unvisited');
            visited[0].classList.remove('visited');
          }
          
          if (swept[0]) {
            swept[0].classList.remove('swept');
          }
          
          if (returnPath[0]) {
            returnPath[0].classList.remove('return');
          }
        }

        startBtn.classList.add('pause');
        startBtn.innerHTML = 'Pause';

        sweepa.setGrid(grid);
        sweepa.beginCleaning();
        startBtn.classList.add('pause');
        startBtn.innerHTML = 'Pause';
      } else if (sweepa.cleaning) {
        if (sweepa.paused) {
          startBtn.classList.add('pause');
          startBtn.innerHTML = 'Pause';
          sweepa.resumeCleaning();
        } else {
          startBtn.classList.remove('pause');
          startBtn.innerHTML = 'Start';
          sweepa.pauseCleaning();
        }
      }
    });

    dijkstrasBtn.addEventListener('click', () => {
      if (grid.edit) {
        grid.dockingIdx = 0;
        docking.innerHTML = "Dijkstra's Algorithm";
      }
    });

    aStarBtn.addEventListener('click', () => {
      if (grid.edit) {
        grid.dockingIdx = 1;
        docking.innerHTML = "A* Search";
      }
    });

    greedyBtn.addEventListener('click', () => {
      if (grid.edit) {
        grid.dockingIdx = 2;
        docking.innerHTML = "Greedy Best First Search";
      }
    });

    bfsBtn.addEventListener('click', () => {
      if (grid.edit) {
        grid.dockingIdx = 3;
        docking.innerHTML = "Breadth First Search"; 4
      }
    });

    randomBtn.addEventListener('click', () => {
      if (grid.edit) {
        grid.cleaningIdx = 0;
        cleaning.innerHTML = "Random";
      }
    });

    clockwiseBtn.addEventListener('click', () => {
      if (grid.edit) {
        grid.cleaningIdx = 1;
        cleaning.innerHTML = "Clockwise Prone";
      }
    });

    if (window.innerHeight < 810) {
      controls.style.overflowY = 'scroll';
      controls.style.height = `${window.innerHeight - 170}px`;
    }

    window.addEventListener('resize', () => {
      if (window.innerHeight < 810) {
        controls.style.overflowY = 'scroll';
        controls.style.height = `${window.innerHeight - 170}px`;
      } else {
        controls.style.overflowY = null;
        controls.style.height = null;
      }
    });
  }

  static disableControls() {
    document.getElementById('clear-grid').classList.add('disabled');
    document.getElementById('clear-walls').classList.add('disabled');
    document.getElementById('dijkstras').classList.add('disabled');
    document.getElementById('a-star').classList.add('disabled');
    document.getElementById('greedy').classList.add('disabled');
    document.getElementById('bfs').classList.add('disabled');
    document.getElementById('random').classList.add('disabled');
    document.getElementById('clockwise').classList.add('disabled');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/main.scss */ "./src/stylesheets/main.scss");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");



document.addEventListener('DOMContentLoaded', () => {
  _view__WEBPACK_IMPORTED_MODULE_1__.default.attachEvents();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map