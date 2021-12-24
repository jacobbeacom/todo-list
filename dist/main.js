/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    height: 100vh;\n}\n\nbody {\n    font-family:Arial, Helvetica, sans-serif;\n    background-color: #DEE2E6;\n    margin: 0;\n    height: 100vh;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr;\n    grid-auto-rows: auto;\n    position: relative;\n    min-height: 100%;\n    width: 100%;\n}\n\n.header {\n    background-color: #CED4DA;\n    color: #495057;\n    margin: 0;\n    grid-column: 1 / 3;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 20% 80%;\n}\n\n.header h1 {\n    grid-column: 1 / 2;\n    align-self: center;\n    text-align: center;\n}\n\n.projectTitle {\n    color: #212529;\n    text-align: center;\n    font-size: 20px;\n}\n\n.projectTasksArea {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n#newTaskButton {\n    margin-top: 10px;\n    border: none;\n    font-size: 16px;\n    background-color: #ADB5BD;\n    border-radius: 8px;\n    color: #495057;\n    padding: 8px;\n    transition: 0.1s;\n}\n\n#newTaskButton:hover {\n    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);\n    background-color: #adb5bdd8;\n    cursor: pointer;\n}\n\n.sidebar {\n    background-color: #6C757D;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    padding: 8px;\n    top: 100px;\n}\n\n.projectListItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #CED4DA;\n    width: 100%;\n    margin-bottom: 5px;\n    padding-left: 1px;\n    padding-right: 1px;\n}\n\n.projectListItem:hover {\n    cursor: pointer;\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem:hover button{\n    cursor: pointer;\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem.active {\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem.active button {\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.deleteProjectButton {\n    background-color: #6C757D;\n    border: none;\n    font-size: 16px;\n    font-weight: 900;\n    border-radius: 8px;\n    color: #CED4DA;\n}\n\n.deleteProjectButton:hover {\n    background-color: #ADB5BD;\n    color:#212529;\n}\n\n.addProject {\n    margin-top: 10px;\n    border: none;\n    font-size: 16px;\n    background-color: #ADB5BD;\n    border-radius: 8px;\n    color: #495057;\n    padding: 8px;\n    transition: 0.2s;\n}\n\n.addProject:hover {\n    cursor: pointer;\n    background-color: #adb5bdd8;\n}\n\n.main {\n    padding-bottom: 20px;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n.task {\n    background-color: #ADB5BD;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #495057;\n    border-radius: 8px;\n    padding-top: 16px;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 16px;\n    transition: 0.2s;\n    font-size: 18px;\n    margin-bottom: 5px;\n}\n\n.task > * {\n    margin: 0;\n    padding: 5px;\n}\n\n.task:hover {\n    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);\n    background-color: #adb5bdd8;\n}\n\n.task button {\n    background-color: #ADB5BD;\n    color: #495057;\n    border: none;\n    font-size: 16px;\n    order: 3;\n}\n\n.task button:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.task p {\n    order: 2;\n}\n\n.task p:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.taskCompleted {\n    margin-bottom: 0px;\n    order: 1;\n}\n\n.taskCompleted:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.checkbox-round {\n    width: 1.5em;\n    height: 1.5em;\n    background-color: #DEE2E6;\n    border-radius: 50%;\n    vertical-align: middle;\n    border: 1px solid #495057;\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n    margin-top: 0px;\n    margin-right: 6px;\n}\n\n.checkbox-round:checked {\n    background-color: #6C757D;\n}\n\n.footer {\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 20px;\n}\n\n.footer a {\n    color: black;\n    text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,wCAAwC;IACxC,yBAAyB;IACzB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,SAAS;IACT,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;IACzC,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,uCAAuC;IACvC,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,eAAe;IACf,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB","sourcesContent":["html {\n    height: 100vh;\n}\n\nbody {\n    font-family:Arial, Helvetica, sans-serif;\n    background-color: #DEE2E6;\n    margin: 0;\n    height: 100vh;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr;\n    grid-auto-rows: auto;\n    position: relative;\n    min-height: 100%;\n    width: 100%;\n}\n\n.header {\n    background-color: #CED4DA;\n    color: #495057;\n    margin: 0;\n    grid-column: 1 / 3;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 20% 80%;\n}\n\n.header h1 {\n    grid-column: 1 / 2;\n    align-self: center;\n    text-align: center;\n}\n\n.projectTitle {\n    color: #212529;\n    text-align: center;\n    font-size: 20px;\n}\n\n.projectTasksArea {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n#newTaskButton {\n    margin-top: 10px;\n    border: none;\n    font-size: 16px;\n    background-color: #ADB5BD;\n    border-radius: 8px;\n    color: #495057;\n    padding: 8px;\n    transition: 0.1s;\n}\n\n#newTaskButton:hover {\n    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);\n    background-color: #adb5bdd8;\n    cursor: pointer;\n}\n\n.sidebar {\n    background-color: #6C757D;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    padding: 8px;\n    top: 100px;\n}\n\n.projectListItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #CED4DA;\n    width: 100%;\n    margin-bottom: 5px;\n    padding-left: 1px;\n    padding-right: 1px;\n}\n\n.projectListItem:hover {\n    cursor: pointer;\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem:hover button{\n    cursor: pointer;\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem.active {\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem.active button {\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.deleteProjectButton {\n    background-color: #6C757D;\n    border: none;\n    font-size: 16px;\n    font-weight: 900;\n    border-radius: 8px;\n    color: #CED4DA;\n}\n\n.deleteProjectButton:hover {\n    background-color: #ADB5BD;\n    color:#212529;\n}\n\n.addProject {\n    margin-top: 10px;\n    border: none;\n    font-size: 16px;\n    background-color: #ADB5BD;\n    border-radius: 8px;\n    color: #495057;\n    padding: 8px;\n    transition: 0.2s;\n}\n\n.addProject:hover {\n    cursor: pointer;\n    background-color: #adb5bdd8;\n}\n\n.main {\n    padding-bottom: 20px;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n.task {\n    background-color: #ADB5BD;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #495057;\n    border-radius: 8px;\n    padding-top: 16px;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 16px;\n    transition: 0.2s;\n    font-size: 18px;\n    margin-bottom: 5px;\n}\n\n.task > * {\n    margin: 0;\n    padding: 5px;\n}\n\n.task:hover {\n    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);\n    background-color: #adb5bdd8;\n}\n\n.task button {\n    background-color: #ADB5BD;\n    color: #495057;\n    border: none;\n    font-size: 16px;\n    order: 3;\n}\n\n.task button:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.task p {\n    order: 2;\n}\n\n.task p:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.taskCompleted {\n    margin-bottom: 0px;\n    order: 1;\n}\n\n.taskCompleted:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.checkbox-round {\n    width: 1.5em;\n    height: 1.5em;\n    background-color: #DEE2E6;\n    border-radius: 50%;\n    vertical-align: middle;\n    border: 1px solid #495057;\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n    margin-top: 0px;\n    margin-right: 6px;\n}\n\n.checkbox-round:checked {\n    background-color: #6C757D;\n}\n\n.footer {\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 20px;\n}\n\n.footer a {\n    color: black;\n    text-decoration: none;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM/projectlist.js":
/*!********************************!*\
  !*** ./src/DOM/projectlist.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _applogic_LocalStorage_checklocalstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../applogic/LocalStorage/checklocalstorage */ "./src/applogic/LocalStorage/checklocalstorage.js");
/* harmony import */ var _applogic_Projects_deleteproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../applogic/Projects/deleteproject */ "./src/applogic/Projects/deleteproject.js");
/* harmony import */ var _projectoverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectoverview */ "./src/DOM/projectoverview.js");




function populateProjectList() {
  const projectList = document.getElementById('projectList');
  const list = (0,_applogic_LocalStorage_checklocalstorage__WEBPACK_IMPORTED_MODULE_0__["default"])();

  projectList.innerHTML = '';

  for (let i = 0; i < list.length; i += 1) {
    const listItem = document.createElement('div');
    listItem.classList.add('projectListItem');
    listItem.textContent = `${list[i].name}`;
    listItem.setAttribute('id', `${list[i].name}`);
    listItem.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) {
        // do nothing
      } else {
        const buttons = document.getElementsByClassName('projectListItem');
        for (let p = 0; p < buttons.length; p += 1) {
          buttons[p].classList.remove('active');
        }
        e.target.classList.add('active');
      }
      (0,_projectoverview__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = 'X';
    deleteProjectButton.classList.add('deleteProjectButton');
    deleteProjectButton.addEventListener('click', () => {
      (0,_applogic_Projects_deleteproject__WEBPACK_IMPORTED_MODULE_1__["default"])(list[i], list);
      populateProjectList();
      (0,_projectoverview__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
    listItem.appendChild(deleteProjectButton);

    projectList.appendChild(listItem);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateProjectList);


/***/ }),

/***/ "./src/DOM/projectoverview.js":
/*!************************************!*\
  !*** ./src/DOM/projectoverview.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _applogic_LocalStorage_checklocalstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../applogic/LocalStorage/checklocalstorage */ "./src/applogic/LocalStorage/checklocalstorage.js");
/* harmony import */ var _applogic_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../applogic/LocalStorage/savetolocalstorage */ "./src/applogic/LocalStorage/savetolocalstorage.js");
/* harmony import */ var _applogic_Tasks_deletetask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../applogic/Tasks/deletetask */ "./src/applogic/Tasks/deletetask.js");
/* harmony import */ var _projectlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectlist */ "./src/DOM/projectlist.js");





function getActiveProject() {
  let result = 0;
  const projects = document.getElementsByClassName('projectListItem');
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].classList.contains('active')) {
      result = i;
      break;
    } else {
      result = 0;
    }
  }
  return result;
}

function populateDisplay() {
  const userProjects = (0,_applogic_LocalStorage_checklocalstorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const activeProject = getActiveProject();
  const displayArea = document.getElementById('body');

  displayArea.innerHTML = '';

  const projectTitle = document.createElement('p');
  projectTitle.textContent = `${userProjects[activeProject].name}`;
  projectTitle.classList.add('projectTitle');
  projectTitle.addEventListener('click', () => {
    const projectTitleUpdate = document.createElement('input');
    projectTitleUpdate.classList.add('projectTitle');
    projectTitleUpdate.setAttribute('type', 'text');
    projectTitleUpdate.setAttribute('placeholder', `${userProjects[activeProject].name}`);
    projectTitleUpdate.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        userProjects[activeProject].changeName(projectTitleUpdate.value);
        (0,_applogic_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__["default"])(userProjects[activeProject]);
        projectTitleUpdate.replaceWith(projectTitle);
        projectTitle.textContent = userProjects[activeProject].name;
        (0,_projectlist__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }
    });
    projectTitle.replaceWith(projectTitleUpdate);
  });

  const projectsOnList = document.getElementsByClassName('projectListItem');
  for (let i = 0; i < projectsOnList.length; i += 1) {
    if (projectsOnList[i].id === projectTitle.textContent) {
      projectsOnList[i].classList.add('active');
      break;
    }
  }

  const projectTasksArea = document.createElement('div');
  projectTasksArea.classList.add('projectTasksArea');

  const tasks = userProjects[activeProject].toDoList;

  if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i += 1) {
      const task = document.createElement('div');
      task.classList.add('task');

      const taskTitle = document.createElement('p');
      taskTitle.textContent = tasks[i].getName();
      taskTitle.addEventListener('click', () => {
        const taskTitleUpdate = document.createElement('input');
        taskTitleUpdate.setAttribute('type', 'text');
        taskTitleUpdate.setAttribute('placeholder', 'Enter new task title');
        taskTitleUpdate.addEventListener('keyup', (e) => {
          if (e.key === 'Enter') {
            tasks[i].setName(taskTitleUpdate.value);
            (0,_applogic_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__["default"])(userProjects[activeProject]);
            taskTitleUpdate.replaceWith(taskTitle);
            taskTitle.textContent = tasks[i].getName();
          }
        });
        taskTitle.replaceWith(taskTitleUpdate);
      });

      const taskDate = document.createElement('p');
      taskDate.textContent = tasks[i].getDate();
      taskDate.addEventListener('click', () => {
        const taskDateUpdate = document.createElement('input');
        taskDateUpdate.setAttribute('type', 'text');
        taskDateUpdate.setAttribute('placeholder', 'Enter new due date');
        taskDateUpdate.addEventListener('keyup', (e) => {
          if (e.key === 'Enter') {
            tasks[i].setDate(taskDateUpdate.value);
            (0,_applogic_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__["default"])(userProjects[activeProject]);
            taskDateUpdate.replaceWith(taskDate);
            taskDate.textContent = tasks[i].getDate();
          }
        });
        taskDate.replaceWith(taskDateUpdate);
      });

      const completedDiv = document.createElement('div');
      completedDiv.classList.add('taskCompleted');
      const taskCompleted = document.createElement('input');
      taskCompleted.classList.add('checkbox-round');
      taskCompleted.setAttribute('type', 'checkbox');
      taskCompleted.setAttribute('id', `${taskTitle.textContent} Completed`);
      const taskCompletedLabel = document.createElement('label');
      taskCompletedLabel.setAttribute('for', `${taskTitle.textContent} Completed`);
      taskCompletedLabel.textContent = 'Completed';

      completedDiv.appendChild(taskCompleted);
      completedDiv.appendChild(taskCompletedLabel);

      const deleteTaskButton = document.createElement('button');
      deleteTaskButton.textContent = 'X';
      deleteTaskButton.classList.add('deleteTaskButton');
      deleteTaskButton.addEventListener('click', () => {
        (0,_applogic_Tasks_deletetask__WEBPACK_IMPORTED_MODULE_2__["default"])(i, userProjects[activeProject]);
        (0,_applogic_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__["default"])(userProjects[activeProject]);
        populateDisplay();
      });

      task.appendChild(taskTitle);
      task.appendChild(taskDate);
      task.appendChild(completedDiv);
      task.appendChild(deleteTaskButton);

      projectTasksArea.appendChild(task);
    }
  }

  const newTaskButton = document.createElement('button');
  newTaskButton.setAttribute('id', 'newTaskButton');
  newTaskButton.textContent = 'Add New Task';
  newTaskButton.addEventListener('click', () => {
    const project = userProjects[activeProject];
    project.addToDo('New Task');
    (0,_applogic_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
    populateDisplay();
  });
  projectTasksArea.appendChild(newTaskButton);

  displayArea.appendChild(projectTitle);
  displayArea.appendChild(projectTasksArea);

  return displayArea;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateDisplay);


/***/ }),

/***/ "./src/applogic/LocalStorage/checklocalstorage.js":
/*!********************************************************!*\
  !*** ./src/applogic/LocalStorage/checklocalstorage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects_createnewproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Projects/createnewproject */ "./src/applogic/Projects/createnewproject.js");
/* harmony import */ var _Tasks_createnewtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tasks/createnewtask */ "./src/applogic/Tasks/createnewtask.js");



function checkStorage() {
  const projects = [];
  const classedProjects = [];
  const toDoList = [];

  if (localStorage.length === 0) {
    const defaultProject = (0,_Projects_createnewproject__WEBPACK_IMPORTED_MODULE_0__.createNewProject)('New Project', toDoList);
    defaultProject.addToDo('New Task');
    classedProjects.push(defaultProject);
  } else if (localStorage.length > 0) {
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      projects.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    for (let p = 0; p < projects.length; p += 1) {
      const classedTasks = [];
      if (projects[p].toDoList.length === 0) {
        const defaultTask = (0,_Tasks_createnewtask__WEBPACK_IMPORTED_MODULE_1__["default"])('New Task', '1/1/2022', false);
        projects[p].toDoList.push(defaultTask);
        const classedProject = (0,_Projects_createnewproject__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projects[p].name, projects[p].toDoList);
        classedProjects.push(classedProject);
      } else {
        for (let s = 0; s < projects[p].toDoList.length; s += 1) {
          const task = projects[p].toDoList[s];
          const classedTask = (0,_Tasks_createnewtask__WEBPACK_IMPORTED_MODULE_1__["default"])(task.name, task.dueDate, task.completed);
          classedTasks.push(classedTask);
        }
        const classedProject = (0,_Projects_createnewproject__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projects[p].name, classedTasks);
        classedProjects.push(classedProject);
      }
    }
  }
  return classedProjects;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkStorage);


/***/ }),

/***/ "./src/applogic/LocalStorage/savetolocalstorage.js":
/*!*********************************************************!*\
  !*** ./src/applogic/LocalStorage/savetolocalstorage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function saveToStorage(project) {
  const projectName = String(project.name);
  localStorage.setItem(projectName, JSON.stringify(project));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveToStorage);


/***/ }),

/***/ "./src/applogic/Projects/createnewproject.js":
/*!***************************************************!*\
  !*** ./src/applogic/Projects/createnewproject.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeProjectForm": () => (/* binding */ makeProjectForm),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _DOM_projectlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM/projectlist */ "./src/DOM/projectlist.js");
/* harmony import */ var _LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/savetolocalstorage */ "./src/applogic/LocalStorage/savetolocalstorage.js");
/* harmony import */ var _Tasks_createnewtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tasks/createnewtask */ "./src/applogic/Tasks/createnewtask.js");




class Project {
  constructor(name, toDoList) {
    this.name = name;
    this.toDoList = toDoList;
  }

  changeName(newName) {
    localStorage.removeItem(this.name);
    this.name = newName;
  }

  addToDo(toDo) {
    const newToDo = (0,_Tasks_createnewtask__WEBPACK_IMPORTED_MODULE_2__["default"])(toDo, '1/1/2022', false);
    this.toDoList.push(newToDo);
  }

  removeToDo(toDo) {
    const removedToDo = this.toDoList.indexOf(toDo);
    this.toDoList.splice(removedToDo, 1);
  }
}

function makeProjectForm() {
  const newProjectForm = document.createElement('div');
  newProjectForm.classList.add('newProjectForm');
  newProjectForm.setAttribute('id', 'newProjectForm');

  const newProjectName = document.createElement('input');
  newProjectName.classList.add('newProjectName');

  const newProjectButtons = document.createElement('div');
  newProjectButtons.classList.add('newProjectButtons');

  const newProjectSubmit = document.createElement('button');
  newProjectSubmit.classList.add('newProjectSubmit');
  newProjectSubmit.textContent = 'Submit';
  newProjectSubmit.addEventListener('click', () => {
    const newProject = createNewProject(newProjectName.value, []);
    (0,_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__["default"])(newProject);
    closeProjectForm();
    (0,_DOM_projectlist__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const newProjectCancel = document.createElement('button');
  newProjectCancel.classList.add('newProjectCancel');
  newProjectCancel.textContent = 'Cancel';
  newProjectCancel.addEventListener('click', () => {
    closeProjectForm();
  });

  newProjectButtons.appendChild(newProjectSubmit);
  newProjectButtons.appendChild(newProjectCancel);

  newProjectForm.appendChild(newProjectName);
  newProjectForm.appendChild(newProjectButtons);

  return newProjectForm;
}

function closeProjectForm() {
  const nav = document.getElementById('sidebar');
  const form = document.getElementById('newProjectForm');
  nav.removeChild(form);
}

function createNewProject(name, toDoList) {
  const project = new Project(name, toDoList);
  (0,_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
  return project;
}




/***/ }),

/***/ "./src/applogic/Projects/deleteproject.js":
/*!************************************************!*\
  !*** ./src/applogic/Projects/deleteproject.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deleteProject(project, userProjects) {
  userProjects.splice(project, 1);
  localStorage.removeItem(project.name);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteProject);


/***/ }),

/***/ "./src/applogic/Tasks/createnewtask.js":
/*!*********************************************!*\
  !*** ./src/applogic/Tasks/createnewtask.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(name, dueDate, completed = false) {
    this.name = name;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  setName(name) {
    this.name = name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  setCompletedStatus(completed) {
    this.completed = completed;
  }

  getName() {
    return this.name;
  }

  getDate() {
    return this.dueDate;
  }

  getCompletedStatus() {
    return this.completed;
  }
}

function createNewTask(name, dueDate, completed) {
  const newTask = new Task(name, dueDate, completed);
  return newTask;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewTask);


/***/ }),

/***/ "./src/applogic/Tasks/deletetask.js":
/*!******************************************!*\
  !*** ./src/applogic/Tasks/deletetask.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deleteTask(task, project) {
  project.toDoList.splice(task, 1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);


/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _applogic_Projects_createnewproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applogic/Projects/createnewproject */ "./src/applogic/Projects/createnewproject.js");
/* harmony import */ var _DOM_projectlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/projectlist */ "./src/DOM/projectlist.js");
/* harmony import */ var _DOM_projectoverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/projectoverview */ "./src/DOM/projectoverview.js");
// This module creates the content structure for which this application will use




function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const appTitle = document.createElement('h1');
  appTitle.textContent = 'To.Do';
  appTitle.classList.add('appTitle');

  header.appendChild(appTitle);

  return header;
}

function createSideBar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.setAttribute('id', 'sidebar');

  const projectList = document.createElement('div');
  projectList.classList.add('projectList');
  projectList.setAttribute('id', 'projectList');

  const addProject = document.createElement('button');
  addProject.classList.add('addProject');
  addProject.textContent = 'Add Project';
  addProject.addEventListener('click', () => {
    sidebar.appendChild((0,_applogic_Projects_createnewproject__WEBPACK_IMPORTED_MODULE_0__.makeProjectForm)());
  });

  sidebar.appendChild(projectList);
  sidebar.appendChild(addProject);

  return sidebar;
}

function createBody() {
  const body = document.createElement('main');
  body.setAttribute('id', 'body');
  body.classList.add('main');
  return body;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('a');
  copyright.textContent = '©Jacob Beacom 2021';
  copyright.setAttribute('href', 'https://github.com/jacobbeacom');
  footer.appendChild(copyright);

  return footer;
}

function initializeSite() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createSideBar());
  (0,_DOM_projectlist__WEBPACK_IMPORTED_MODULE_1__["default"])();
  content.appendChild(createBody());
  content.appendChild(createFooter());
  (0,_DOM_projectoverview__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSite);


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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ2xCOztBQUVyQixvREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NL3Byb2plY3RsaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00vcHJvamVjdG92ZXJ2aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBsb2dpYy9Mb2NhbFN0b3JhZ2UvY2hlY2tsb2NhbHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL0xvY2FsU3RvcmFnZS9zYXZldG9sb2NhbHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL1Byb2plY3RzL2NyZWF0ZW5ld3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL1Byb2plY3RzL2RlbGV0ZXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL1Rhc2tzL2NyZWF0ZW5ld3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL1Rhc2tzL2RlbGV0ZXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFRTJFNjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFRDREQTtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdFRhc2tzQXJlYSB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNuZXdUYXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI1QkQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuI25ld1Rhc2tCdXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZGQ4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0NFRDREQTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcXG59XFxuXFxuLnByb2plY3RMaXN0SXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdEl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtLmFjdGl2ZSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0QnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgY29sb3I6ICNDRUQ0REE7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FEQjVCRDtcXG4gICAgY29sb3I6IzIxMjUyOTtcXG59XFxuXFxuLmFkZFByb2plY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FEQjVCRDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogIzQ5NTA1NztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZGQ4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI1QkQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2sgPiAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkZDg7XFxufVxcblxcbi50YXNrIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI1QkQ7XFxuICAgIGNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3JkZXI6IDM7XFxufVxcblxcbi50YXNrIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Qzc1N0Q7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi50YXNrIHAge1xcbiAgICBvcmRlcjogMjtcXG59XFxuXFxuLnRhc2sgcDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Qzc1N0Q7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi50YXNrQ29tcGxldGVkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBvcmRlcjogMTtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3NTdEO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtcm91bmQge1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERUUyRTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ5NTA1NztcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5jaGVja2JveC1yb3VuZDpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFRTJFNjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFRDREQTtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdFRhc2tzQXJlYSB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNuZXdUYXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI1QkQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuI25ld1Rhc2tCdXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZGQ4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0NFRDREQTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcXG59XFxuXFxuLnByb2plY3RMaXN0SXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdEl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtLmFjdGl2ZSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0QnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgY29sb3I6ICNDRUQ0REE7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FEQjVCRDtcXG4gICAgY29sb3I6IzIxMjUyOTtcXG59XFxuXFxuLmFkZFByb2plY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FEQjVCRDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogIzQ5NTA1NztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZGQ4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI1QkQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2sgPiAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkZDg7XFxufVxcblxcbi50YXNrIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI1QkQ7XFxuICAgIGNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3JkZXI6IDM7XFxufVxcblxcbi50YXNrIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Qzc1N0Q7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi50YXNrIHAge1xcbiAgICBvcmRlcjogMjtcXG59XFxuXFxuLnRhc2sgcDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Qzc1N0Q7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi50YXNrQ29tcGxldGVkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBvcmRlcjogMTtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3NTdEO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtcm91bmQge1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERUUyRTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ5NTA1NztcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5jaGVja2JveC1yb3VuZDpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjaGVja1N0b3JhZ2UgZnJvbSAnLi4vYXBwbG9naWMvTG9jYWxTdG9yYWdlL2NoZWNrbG9jYWxzdG9yYWdlJztcbmltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gJy4uL2FwcGxvZ2ljL1Byb2plY3RzL2RlbGV0ZXByb2plY3QnO1xuaW1wb3J0IHBvcHVsYXRlRGlzcGxheSBmcm9tICcuL3Byb2plY3RvdmVydmlldyc7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdExpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0Jyk7XG4gIGNvbnN0IGxpc3QgPSBjaGVja1N0b3JhZ2UoKTtcblxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0SXRlbScpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7bGlzdFtpXS5uYW1lfWA7XG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGAke2xpc3RbaV0ubmFtZX1gKTtcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdExpc3RJdGVtJyk7XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgYnV0dG9ucy5sZW5ndGg7IHAgKz0gMSkge1xuICAgICAgICAgIGJ1dHRvbnNbcF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBwb3B1bGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkZWxldGVQcm9qZWN0KGxpc3RbaV0sIGxpc3QpO1xuICAgICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgcG9wdWxhdGVEaXNwbGF5KCk7XG4gICAgfSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9wdWxhdGVQcm9qZWN0TGlzdDtcbiIsImltcG9ydCBjaGVja1N0b3JhZ2UgZnJvbSAnLi4vYXBwbG9naWMvTG9jYWxTdG9yYWdlL2NoZWNrbG9jYWxzdG9yYWdlJztcbmltcG9ydCBzYXZlVG9TdG9yYWdlIGZyb20gJy4uL2FwcGxvZ2ljL0xvY2FsU3RvcmFnZS9zYXZldG9sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi4vYXBwbG9naWMvVGFza3MvZGVsZXRldGFzayc7XG5pbXBvcnQgcG9wdWxhdGVQcm9qZWN0TGlzdCBmcm9tICcuL3Byb2plY3RsaXN0JztcblxuZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgbGV0IHJlc3VsdCA9IDA7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdExpc3RJdGVtJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAocHJvamVjdHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURpc3BsYXkoKSB7XG4gIGNvbnN0IHVzZXJQcm9qZWN0cyA9IGNoZWNrU3RvcmFnZSgpO1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICBjb25zdCBkaXNwbGF5QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XG5cbiAgZGlzcGxheUFyZWEuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHt1c2VyUHJvamVjdHNbYWN0aXZlUHJvamVjdF0ubmFtZX1gO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVVcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RUaXRsZVVwZGF0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGVVcGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0VGl0bGVVcGRhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGAke3VzZXJQcm9qZWN0c1thY3RpdmVQcm9qZWN0XS5uYW1lfWApO1xuICAgIHByb2plY3RUaXRsZVVwZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgdXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdLmNoYW5nZU5hbWUocHJvamVjdFRpdGxlVXBkYXRlLnZhbHVlKTtcbiAgICAgICAgc2F2ZVRvU3RvcmFnZSh1c2VyUHJvamVjdHNbYWN0aXZlUHJvamVjdF0pO1xuICAgICAgICBwcm9qZWN0VGl0bGVVcGRhdGUucmVwbGFjZVdpdGgocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdLm5hbWU7XG4gICAgICAgIHBvcHVsYXRlUHJvamVjdExpc3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0VGl0bGUucmVwbGFjZVdpdGgocHJvamVjdFRpdGxlVXBkYXRlKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdHNPbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0TGlzdEl0ZW0nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c09uTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChwcm9qZWN0c09uTGlzdFtpXS5pZCA9PT0gcHJvamVjdFRpdGxlLnRleHRDb250ZW50KSB7XG4gICAgICBwcm9qZWN0c09uTGlzdFtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByb2plY3RUYXNrc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdFRhc2tzQXJlYS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGFza3NBcmVhJyk7XG5cbiAgY29uc3QgdGFza3MgPSB1c2VyUHJvamVjdHNbYWN0aXZlUHJvamVjdF0udG9Eb0xpc3Q7XG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza3NbaV0uZ2V0TmFtZSgpO1xuICAgICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrVGl0bGVVcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrVGl0bGVVcGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGFza1RpdGxlVXBkYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgbmV3IHRhc2sgdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlVXBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRhc2tzW2ldLnNldE5hbWUodGFza1RpdGxlVXBkYXRlLnZhbHVlKTtcbiAgICAgICAgICAgIHNhdmVUb1N0b3JhZ2UodXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZVVwZGF0ZS5yZXBsYWNlV2l0aCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza3NbaV0uZ2V0TmFtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tUaXRsZS5yZXBsYWNlV2l0aCh0YXNrVGl0bGVVcGRhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5nZXREYXRlKCk7XG4gICAgICB0YXNrRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0RhdGVVcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrRGF0ZVVwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0YXNrRGF0ZVVwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIG5ldyBkdWUgZGF0ZScpO1xuICAgICAgICB0YXNrRGF0ZVVwZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0YXNrc1tpXS5zZXREYXRlKHRhc2tEYXRlVXBkYXRlLnZhbHVlKTtcbiAgICAgICAgICAgIHNhdmVUb1N0b3JhZ2UodXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdKTtcbiAgICAgICAgICAgIHRhc2tEYXRlVXBkYXRlLnJlcGxhY2VXaXRoKHRhc2tEYXRlKTtcbiAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFza3NbaV0uZ2V0RGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tEYXRlLnJlcGxhY2VXaXRoKHRhc2tEYXRlVXBkYXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbXBsZXRlZERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrQ29tcGxldGVkJyk7XG4gICAgICBjb25zdCB0YXNrQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHRhc2tDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtcm91bmQnKTtcbiAgICAgIHRhc2tDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICB0YXNrQ29tcGxldGVkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrVGl0bGUudGV4dENvbnRlbnR9IENvbXBsZXRlZGApO1xuICAgICAgY29uc3QgdGFza0NvbXBsZXRlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHRhc2tDb21wbGV0ZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke3Rhc2tUaXRsZS50ZXh0Q29udGVudH0gQ29tcGxldGVkYCk7XG4gICAgICB0YXNrQ29tcGxldGVkTGFiZWwudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcblxuICAgICAgY29tcGxldGVkRGl2LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZWQpO1xuICAgICAgY29tcGxldGVkRGl2LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZWRMYWJlbCk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRlbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRhc2tCdXR0b24nKTtcbiAgICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRhc2soaSwgdXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdKTtcbiAgICAgICAgc2F2ZVRvU3RvcmFnZSh1c2VyUHJvamVjdHNbYWN0aXZlUHJvamVjdF0pO1xuICAgICAgICBwb3B1bGF0ZURpc3BsYXkoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY29tcGxldGVkRGl2KTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG5cbiAgICAgIHByb2plY3RUYXNrc0FyZWEuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0J1dHRvbicpO1xuICBuZXdUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgVGFzayc7XG4gIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHVzZXJQcm9qZWN0c1thY3RpdmVQcm9qZWN0XTtcbiAgICBwcm9qZWN0LmFkZFRvRG8oJ05ldyBUYXNrJyk7XG4gICAgc2F2ZVRvU3RvcmFnZShwcm9qZWN0KTtcbiAgICBwb3B1bGF0ZURpc3BsYXkoKTtcbiAgfSk7XG4gIHByb2plY3RUYXNrc0FyZWEuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbik7XG5cbiAgZGlzcGxheUFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgZGlzcGxheUFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tzQXJlYSk7XG5cbiAgcmV0dXJuIGRpc3BsYXlBcmVhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZURpc3BsYXk7XG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSAnLi4vUHJvamVjdHMvY3JlYXRlbmV3cHJvamVjdCc7XG5pbXBvcnQgY3JlYXRlTmV3VGFzayBmcm9tICcuLi9UYXNrcy9jcmVhdGVuZXd0YXNrJztcblxuZnVuY3Rpb24gY2hlY2tTdG9yYWdlKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICBjb25zdCBjbGFzc2VkUHJvamVjdHMgPSBbXTtcbiAgY29uc3QgdG9Eb0xpc3QgPSBbXTtcblxuICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdCgnTmV3IFByb2plY3QnLCB0b0RvTGlzdCk7XG4gICAgZGVmYXVsdFByb2plY3QuYWRkVG9EbygnTmV3IFRhc2snKTtcbiAgICBjbGFzc2VkUHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHByb2plY3RzLnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlzW2ldKSkpO1xuICAgIH1cbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzLmxlbmd0aDsgcCArPSAxKSB7XG4gICAgICBjb25zdCBjbGFzc2VkVGFza3MgPSBbXTtcbiAgICAgIGlmIChwcm9qZWN0c1twXS50b0RvTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFRhc2sgPSBjcmVhdGVOZXdUYXNrKCdOZXcgVGFzaycsICcxLzEvMjAyMicsIGZhbHNlKTtcbiAgICAgICAgcHJvamVjdHNbcF0udG9Eb0xpc3QucHVzaChkZWZhdWx0VGFzayk7XG4gICAgICAgIGNvbnN0IGNsYXNzZWRQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0c1twXS5uYW1lLCBwcm9qZWN0c1twXS50b0RvTGlzdCk7XG4gICAgICAgIGNsYXNzZWRQcm9qZWN0cy5wdXNoKGNsYXNzZWRQcm9qZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgcHJvamVjdHNbcF0udG9Eb0xpc3QubGVuZ3RoOyBzICs9IDEpIHtcbiAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdHNbcF0udG9Eb0xpc3Rbc107XG4gICAgICAgICAgY29uc3QgY2xhc3NlZFRhc2sgPSBjcmVhdGVOZXdUYXNrKHRhc2submFtZSwgdGFzay5kdWVEYXRlLCB0YXNrLmNvbXBsZXRlZCk7XG4gICAgICAgICAgY2xhc3NlZFRhc2tzLnB1c2goY2xhc3NlZFRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzZWRQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0c1twXS5uYW1lLCBjbGFzc2VkVGFza3MpO1xuICAgICAgICBjbGFzc2VkUHJvamVjdHMucHVzaChjbGFzc2VkUHJvamVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc2VkUHJvamVjdHM7XG59XG5leHBvcnQgZGVmYXVsdCBjaGVja1N0b3JhZ2U7XG4iLCJmdW5jdGlvbiBzYXZlVG9TdG9yYWdlKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBTdHJpbmcocHJvamVjdC5uYW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F2ZVRvU3RvcmFnZTtcbiIsImltcG9ydCBwb3B1bGF0ZVByb2plY3RMaXN0IGZyb20gJy4uLy4uL0RPTS9wcm9qZWN0bGlzdCc7XG5pbXBvcnQgc2F2ZVRvU3RvcmFnZSBmcm9tICcuLi9Mb2NhbFN0b3JhZ2Uvc2F2ZXRvbG9jYWxzdG9yYWdlJztcbmltcG9ydCBjcmVhdGVOZXdUYXNrIGZyb20gJy4uL1Rhc2tzL2NyZWF0ZW5ld3Rhc2snO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdG9Eb0xpc3QpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9Eb0xpc3QgPSB0b0RvTGlzdDtcbiAgfVxuXG4gIGNoYW5nZU5hbWUobmV3TmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubmFtZSk7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGFkZFRvRG8odG9Ebykge1xuICAgIGNvbnN0IG5ld1RvRG8gPSBjcmVhdGVOZXdUYXNrKHRvRG8sICcxLzEvMjAyMicsIGZhbHNlKTtcbiAgICB0aGlzLnRvRG9MaXN0LnB1c2gobmV3VG9Ebyk7XG4gIH1cblxuICByZW1vdmVUb0RvKHRvRG8pIHtcbiAgICBjb25zdCByZW1vdmVkVG9EbyA9IHRoaXMudG9Eb0xpc3QuaW5kZXhPZih0b0RvKTtcbiAgICB0aGlzLnRvRG9MaXN0LnNwbGljZShyZW1vdmVkVG9EbywgMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVByb2plY3RGb3JtKCkge1xuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0Rm9ybScpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RGb3JtJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0TmFtZScpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2plY3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RCdXR0b25zJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0U3VibWl0LmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RTdWJtaXQnKTtcbiAgbmV3UHJvamVjdFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICBuZXdQcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVOZXdQcm9qZWN0KG5ld1Byb2plY3ROYW1lLnZhbHVlLCBbXSk7XG4gICAgc2F2ZVRvU3RvcmFnZShuZXdQcm9qZWN0KTtcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICB9KTtcblxuICBjb25zdCBuZXdQcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RDYW5jZWwuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdENhbmNlbCcpO1xuICBuZXdQcm9qZWN0Q2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIG5ld1Byb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICB9KTtcblxuICBuZXdQcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0U3VibWl0KTtcbiAgbmV3UHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENhbmNlbCk7XG5cbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWUpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9ucyk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJyk7XG4gIG5hdi5yZW1vdmVDaGlsZChmb3JtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lLCB0b0RvTGlzdCkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgdG9Eb0xpc3QpO1xuICBzYXZlVG9TdG9yYWdlKHByb2plY3QpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IHsgbWFrZVByb2plY3RGb3JtLCBjcmVhdGVOZXdQcm9qZWN0IH07XG4iLCJmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QsIHVzZXJQcm9qZWN0cykge1xuICB1c2VyUHJvamVjdHMuc3BsaWNlKHByb2plY3QsIDEpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0Lm5hbWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVQcm9qZWN0O1xuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBzZXRDb21wbGV0ZWRTdGF0dXMoY29tcGxldGVkKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXRDb21wbGV0ZWRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2sobmFtZSwgZHVlRGF0ZSwgY29tcGxldGVkKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLCBkdWVEYXRlLCBjb21wbGV0ZWQpO1xuICByZXR1cm4gbmV3VGFzaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmV3VGFzaztcbiIsImZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaywgcHJvamVjdCkge1xuICBwcm9qZWN0LnRvRG9MaXN0LnNwbGljZSh0YXNrLCAxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVGFzaztcbiIsIi8vIFRoaXMgbW9kdWxlIGNyZWF0ZXMgdGhlIGNvbnRlbnQgc3RydWN0dXJlIGZvciB3aGljaCB0aGlzIGFwcGxpY2F0aW9uIHdpbGwgdXNlXG5pbXBvcnQgeyBtYWtlUHJvamVjdEZvcm0gfSBmcm9tICcuL2FwcGxvZ2ljL1Byb2plY3RzL2NyZWF0ZW5ld3Byb2plY3QnO1xuaW1wb3J0IHBvcHVsYXRlUHJvamVjdExpc3QgZnJvbSAnLi9ET00vcHJvamVjdGxpc3QnO1xuaW1wb3J0IHBvcHVsYXRlRGlzcGxheSBmcm9tICcuL0RPTS9wcm9qZWN0b3ZlcnZpZXcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgYXBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBhcHBUaXRsZS50ZXh0Q29udGVudCA9ICdUby5Ebyc7XG4gIGFwcFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FwcFRpdGxlJyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGFwcFRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlQmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZWJhcicpO1xuXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0Jyk7XG4gIHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdExpc3QnKTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG1ha2VQcm9qZWN0Rm9ybSgpKTtcbiAgfSk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvZHkoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICByZXR1cm4gYm9keTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ8KpSmFjb2IgQmVhY29tIDIwMjEnO1xuICBjb3B5cmlnaHQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9qYWNvYmJlYWNvbScpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVCYXIoKSk7XG4gIHBvcHVsYXRlUHJvamVjdExpc3QoKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCb2R5KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgcG9wdWxhdGVEaXNwbGF5KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplU2l0ZSBmcm9tICcuL3dlYnNpdGUnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRpYWxpemVTaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=