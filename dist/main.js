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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    height: 100vh;\n}\n\nbody {\n    font-family:Arial, Helvetica, sans-serif;\n    background-color: #DEE2E6;\n    margin: 0;\n    height: 100vh;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr;\n    grid-auto-rows: auto;\n    position: relative;\n    min-height: 100%;\n    width: 100%;\n}\n\n.header {\n    background-color: #CED4DA;\n    color: #495057;\n    margin: 0;\n    grid-column: 1 / 3;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 20% 80%;\n}\n\n.header h1 {\n    grid-column: 1 / 2;\n    align-self: center;\n    text-align: center;\n}\n\n.projectTitle {\n    color: #212529;\n    text-align: center;\n    font-size: 20px;\n}\n\n.projectTasksArea {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n#newTaskButton {\n    margin-top: 10px;\n    border: none;\n    font-size: 16px;\n    background-color: #ADB5BD;\n    border-radius: 8px;\n    color: #495057;\n    padding: 8px;\n    transition: 0.1s;\n}\n\n#newTaskButton:hover {\n    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);\n    background-color: #adb5bdd8;\n    cursor: pointer;\n}\n\n.sidebar {\n    background-color: #6C757D;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    padding: 8px;\n    top: 100px;\n}\n\n.projectListItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #CED4DA;\n    width: 100%;\n    padding: 2px;\n    margin-bottom: 5px;\n}\n\n.projectListItem:hover {\n    cursor: pointer;\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem:hover button{\n    cursor: pointer;\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem.active {\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem.active button {\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.deleteProjectButton {\n    background-color: #6C757D;\n    border: none;\n    font-size: 16px;\n    font-weight: 900;\n    border-radius: 8px;\n    color: #CED4DA;\n}\n\n.deleteProjectButton:hover {\n    background-color: #ADB5BD;\n    color:#212529;\n}\n\n.addProject {\n    margin-top: 10px;\n    border: none;\n    font-size: 16px;\n    background-color: #ADB5BD;\n    border-radius: 8px;\n    color: #495057;\n    padding: 8px;\n    transition: 0.2s;\n}\n\n.addProject:hover {\n    cursor: pointer;\n    background-color: #adb5bdd8;\n}\n\n.main {\n    padding-bottom: 20px;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n.task {\n    background-color: #ADB5BD;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #495057;\n    border-radius: 8px;\n    padding-top: 16px;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 16px;\n    transition: 0.2s;\n    font-size: 18px;\n    margin-bottom: 5px;\n}\n\n.task > * {\n    margin: 0;\n    padding: 5px;\n}\n\n.task:hover {\n    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);\n    background-color: #adb5bdd8;\n}\n\n.task button {\n    background-color: #ADB5BD;\n    color: #495057;\n    border: none;\n    font-size: 16px;\n}\n\n.task button:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.task p:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.taskCompleted {\n    margin-bottom: 0px;\n}\n\n.taskCompleted:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.footer {\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,wCAAwC;IACxC,yBAAyB;IACzB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,SAAS;IACT,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;IACzC,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,uCAAuC;IACvC,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;AAChB","sourcesContent":["html {\n    height: 100vh;\n}\n\nbody {\n    font-family:Arial, Helvetica, sans-serif;\n    background-color: #DEE2E6;\n    margin: 0;\n    height: 100vh;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr;\n    grid-auto-rows: auto;\n    position: relative;\n    min-height: 100%;\n    width: 100%;\n}\n\n.header {\n    background-color: #CED4DA;\n    color: #495057;\n    margin: 0;\n    grid-column: 1 / 3;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 20% 80%;\n}\n\n.header h1 {\n    grid-column: 1 / 2;\n    align-self: center;\n    text-align: center;\n}\n\n.projectTitle {\n    color: #212529;\n    text-align: center;\n    font-size: 20px;\n}\n\n.projectTasksArea {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n#newTaskButton {\n    margin-top: 10px;\n    border: none;\n    font-size: 16px;\n    background-color: #ADB5BD;\n    border-radius: 8px;\n    color: #495057;\n    padding: 8px;\n    transition: 0.1s;\n}\n\n#newTaskButton:hover {\n    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);\n    background-color: #adb5bdd8;\n    cursor: pointer;\n}\n\n.sidebar {\n    background-color: #6C757D;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    padding: 8px;\n    top: 100px;\n}\n\n.projectListItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #CED4DA;\n    width: 100%;\n    padding: 2px;\n    margin-bottom: 5px;\n}\n\n.projectListItem:hover {\n    cursor: pointer;\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem:hover button{\n    cursor: pointer;\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem.active {\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.projectListItem.active button {\n    background-color: #495057;\n    border-radius: 8px;\n}\n\n.deleteProjectButton {\n    background-color: #6C757D;\n    border: none;\n    font-size: 16px;\n    font-weight: 900;\n    border-radius: 8px;\n    color: #CED4DA;\n}\n\n.deleteProjectButton:hover {\n    background-color: #ADB5BD;\n    color:#212529;\n}\n\n.addProject {\n    margin-top: 10px;\n    border: none;\n    font-size: 16px;\n    background-color: #ADB5BD;\n    border-radius: 8px;\n    color: #495057;\n    padding: 8px;\n    transition: 0.2s;\n}\n\n.addProject:hover {\n    cursor: pointer;\n    background-color: #adb5bdd8;\n}\n\n.main {\n    padding-bottom: 20px;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n.task {\n    background-color: #ADB5BD;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #495057;\n    border-radius: 8px;\n    padding-top: 16px;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 16px;\n    transition: 0.2s;\n    font-size: 18px;\n    margin-bottom: 5px;\n}\n\n.task > * {\n    margin: 0;\n    padding: 5px;\n}\n\n.task:hover {\n    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);\n    background-color: #adb5bdd8;\n}\n\n.task button {\n    background-color: #ADB5BD;\n    color: #495057;\n    border: none;\n    font-size: 16px;\n}\n\n.task button:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.task p:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.taskCompleted {\n    margin-bottom: 0px;\n}\n\n.taskCompleted:hover {\n    background-color: #6C757D;\n    border-radius: 15px;\n}\n\n.footer {\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 20px;\n}\n"],"sourceRoot":""}]);
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




function getActiveProject() {
  let result = 0;
  const projects = document.getElementsByClassName('projectListItem');
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].classList.contains('active')) {
      result = i;
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
    projectTitleUpdate.setAttribute('placeholder', 'Enter new project title');
    projectTitleUpdate.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        userProjects[activeProject].changeName(projectTitleUpdate.value);
        (0,_applogic_LocalStorage_savetolocalstorage__WEBPACK_IMPORTED_MODULE_1__["default"])(userProjects[activeProject]);
        projectTitleUpdate.replaceWith(projectTitle);
        projectTitle.textContent = userProjects[activeProject].name;
      }
    });
    projectTitle.replaceWith(projectTitleUpdate);
  });

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
    createNewProject(newProjectName.value, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFtQjtBQUNyQjtBQUNBO0FBQ0EsRUFBRSxnRUFBZTtBQUNqQjs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7VUNyRTlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ2xCOztBQUVyQixvREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NL3Byb2plY3RsaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00vcHJvamVjdG92ZXJ2aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBsb2dpYy9Mb2NhbFN0b3JhZ2UvY2hlY2tsb2NhbHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL0xvY2FsU3RvcmFnZS9zYXZldG9sb2NhbHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL1Byb2plY3RzL2NyZWF0ZW5ld3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL1Byb2plY3RzL2RlbGV0ZXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL1Rhc2tzL2NyZWF0ZW5ld3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGxvZ2ljL1Rhc2tzL2RlbGV0ZXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFRTJFNjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFRDREQTtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdFRhc2tzQXJlYSB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNuZXdUYXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI1QkQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuI25ld1Rhc2tCdXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZGQ4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0NFRDREQTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdEl0ZW06aG92ZXIgYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnByb2plY3RMaXN0SXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdEl0ZW0uYWN0aXZlIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3RCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3NTdEO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogI0NFRDREQTtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURCNUJEO1xcbiAgICBjb2xvcjojMjEyNTI5O1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURCNUJEO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGNvbG9yOiAjNDk1MDU3O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5hZGRQcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkZDg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbi50YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FEQjVCRDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzQ5NTA1NztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFzayA+ICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDhweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmRkODtcXG59XFxuXFxuLnRhc2sgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FEQjVCRDtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzayBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3NTdEO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4udGFzayBwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi50YXNrQ29tcGxldGVkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFRTJFNjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFRDREQTtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdFRhc2tzQXJlYSB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNuZXdUYXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBREI1QkQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuI25ld1Rhc2tCdXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZGQ4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0NFRDREQTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdEl0ZW06aG92ZXIgYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnByb2plY3RMaXN0SXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdEl0ZW0uYWN0aXZlIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3RCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3NTdEO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogI0NFRDREQTtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURCNUJEO1xcbiAgICBjb2xvcjojMjEyNTI5O1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURCNUJEO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGNvbG9yOiAjNDk1MDU3O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5hZGRQcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkZDg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbi50YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FEQjVCRDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzQ5NTA1NztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFzayA+ICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDhweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmRkODtcXG59XFxuXFxuLnRhc2sgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FEQjVCRDtcXG4gICAgY29sb3I6ICM0OTUwNTc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGFzayBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3NTdEO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4udGFzayBwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi50YXNrQ29tcGxldGVkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNoZWNrU3RvcmFnZSBmcm9tICcuLi9hcHBsb2dpYy9Mb2NhbFN0b3JhZ2UvY2hlY2tsb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IGRlbGV0ZVByb2plY3QgZnJvbSAnLi4vYXBwbG9naWMvUHJvamVjdHMvZGVsZXRlcHJvamVjdCc7XG5pbXBvcnQgcG9wdWxhdGVEaXNwbGF5IGZyb20gJy4vcHJvamVjdG92ZXJ2aWV3JztcblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0TGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbiAgY29uc3QgbGlzdCA9IGNoZWNrU3RvcmFnZSgpO1xuXG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3RJdGVtJyk7XG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBgJHtsaXN0W2ldLm5hbWV9YDtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bGlzdFtpXS5uYW1lfWApO1xuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0TGlzdEl0ZW0nKTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBidXR0b25zLmxlbmd0aDsgcCArPSAxKSB7XG4gICAgICAgICAgYnV0dG9uc1twXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIHBvcHVsYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0QnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlbGV0ZVByb2plY3QobGlzdFtpXSwgbGlzdCk7XG4gICAgICBwb3B1bGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICBwb3B1bGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZVByb2plY3RMaXN0O1xuIiwiaW1wb3J0IGNoZWNrU3RvcmFnZSBmcm9tICcuLi9hcHBsb2dpYy9Mb2NhbFN0b3JhZ2UvY2hlY2tsb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IHNhdmVUb1N0b3JhZ2UgZnJvbSAnLi4vYXBwbG9naWMvTG9jYWxTdG9yYWdlL3NhdmV0b2xvY2Fsc3RvcmFnZSc7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tICcuLi9hcHBsb2dpYy9UYXNrcy9kZWxldGV0YXNrJztcblxuZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgbGV0IHJlc3VsdCA9IDA7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdExpc3RJdGVtJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAocHJvamVjdHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVEaXNwbGF5KCkge1xuICBjb25zdCB1c2VyUHJvamVjdHMgPSBjaGVja1N0b3JhZ2UoKTtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgY29uc3QgZGlzcGxheUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuXG4gIGRpc3BsYXlBcmVhLmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7dXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdLm5hbWV9YDtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlVXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0VGl0bGVVcGRhdGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlVXBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgcHJvamVjdFRpdGxlVXBkYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgbmV3IHByb2plY3QgdGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGVVcGRhdGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHVzZXJQcm9qZWN0c1thY3RpdmVQcm9qZWN0XS5jaGFuZ2VOYW1lKHByb2plY3RUaXRsZVVwZGF0ZS52YWx1ZSk7XG4gICAgICAgIHNhdmVUb1N0b3JhZ2UodXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdKTtcbiAgICAgICAgcHJvamVjdFRpdGxlVXBkYXRlLnJlcGxhY2VXaXRoKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJQcm9qZWN0c1thY3RpdmVQcm9qZWN0XS5uYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RUaXRsZS5yZXBsYWNlV2l0aChwcm9qZWN0VGl0bGVVcGRhdGUpO1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0VGFza3NBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RUYXNrc0FyZWEuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRhc2tzQXJlYScpO1xuXG4gIGNvbnN0IHRhc2tzID0gdXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdLnRvRG9MaXN0O1xuICBcblxuICBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5nZXROYW1lKCk7XG4gICAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZVVwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tUaXRsZVVwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0YXNrVGl0bGVVcGRhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBuZXcgdGFzayB0aXRsZScpO1xuICAgICAgICB0YXNrVGl0bGVVcGRhdGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGFza3NbaV0uc2V0TmFtZSh0YXNrVGl0bGVVcGRhdGUudmFsdWUpO1xuICAgICAgICAgICAgc2F2ZVRvU3RvcmFnZSh1c2VyUHJvamVjdHNbYWN0aXZlUHJvamVjdF0pO1xuICAgICAgICAgICAgdGFza1RpdGxlVXBkYXRlLnJlcGxhY2VXaXRoKHRhc2tUaXRsZSk7XG4gICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5nZXROYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGFza1RpdGxlLnJlcGxhY2VXaXRoKHRhc2tUaXRsZVVwZGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmdldERhdGUoKTtcbiAgICAgIHRhc2tEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGF0ZVVwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEYXRlVXBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRhc2tEYXRlVXBkYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgbmV3IGR1ZSBkYXRlJyk7XG4gICAgICAgIHRhc2tEYXRlVXBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRhc2tzW2ldLnNldERhdGUodGFza0RhdGVVcGRhdGUudmFsdWUpO1xuICAgICAgICAgICAgc2F2ZVRvU3RvcmFnZSh1c2VyUHJvamVjdHNbYWN0aXZlUHJvamVjdF0pO1xuICAgICAgICAgICAgdGFza0RhdGVVcGRhdGUucmVwbGFjZVdpdGgodGFza0RhdGUpO1xuICAgICAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5nZXREYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGFza0RhdGUucmVwbGFjZVdpdGgodGFza0RhdGVVcGRhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tcGxldGVkRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb21wbGV0ZWQnKTtcbiAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgdGFza0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgIHRhc2tDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tUaXRsZS50ZXh0Q29udGVudH0gQ29tcGxldGVkYCk7XG4gICAgICBjb25zdCB0YXNrQ29tcGxldGVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgdGFza0NvbXBsZXRlZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7dGFza1RpdGxlLnRleHRDb250ZW50fSBDb21wbGV0ZWRgKTtcbiAgICAgIHRhc2tDb21wbGV0ZWRMYWJlbC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuXG4gICAgICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZCk7XG4gICAgICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZExhYmVsKTtcblxuICAgICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZGVsZXRlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgIGRlbGV0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFza0J1dHRvbicpO1xuICAgICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVGFzayhpLCB1c2VyUHJvamVjdHNbYWN0aXZlUHJvamVjdF0pO1xuICAgICAgICBzYXZlVG9TdG9yYWdlKHVzZXJQcm9qZWN0c1thY3RpdmVQcm9qZWN0XSk7XG4gICAgICAgIHBvcHVsYXRlRGlzcGxheSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChjb21wbGV0ZWREaXYpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcblxuICAgICAgcHJvamVjdFRhc2tzQXJlYS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrQnV0dG9uJyk7XG4gIG5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIE5ldyBUYXNrJztcbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdXNlclByb2plY3RzW2FjdGl2ZVByb2plY3RdO1xuICAgIHByb2plY3QuYWRkVG9EbygnTmV3IFRhc2snKTtcbiAgICBzYXZlVG9TdG9yYWdlKHByb2plY3QpO1xuICAgIHBvcHVsYXRlRGlzcGxheSgpO1xuICB9KTtcbiAgcHJvamVjdFRhc2tzQXJlYS5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKTtcblxuICBkaXNwbGF5QXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBkaXNwbGF5QXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3NBcmVhKTtcblxuICByZXR1cm4gZGlzcGxheUFyZWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlRGlzcGxheTtcbiIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tICcuLi9Qcm9qZWN0cy9jcmVhdGVuZXdwcm9qZWN0JztcbmltcG9ydCBjcmVhdGVOZXdUYXNrIGZyb20gJy4uL1Rhc2tzL2NyZWF0ZW5ld3Rhc2snO1xuXG5mdW5jdGlvbiBjaGVja1N0b3JhZ2UoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG4gIGNvbnN0IGNsYXNzZWRQcm9qZWN0cyA9IFtdO1xuICBjb25zdCB0b0RvTGlzdCA9IFtdO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVOZXdQcm9qZWN0KCdOZXcgUHJvamVjdCcsIHRvRG9MaXN0KTtcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRUb0RvKCdOZXcgVGFzaycpO1xuICAgIGNsYXNzZWRQcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuICAgIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcHJvamVjdHMucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleXNbaV0pKSk7XG4gICAgfVxuICAgIGZvciAobGV0IHAgPSAwOyBwIDwgcHJvamVjdHMubGVuZ3RoOyBwICs9IDEpIHtcbiAgICAgIGNvbnN0IGNsYXNzZWRUYXNrcyA9IFtdO1xuICAgICAgaWYgKHByb2plY3RzW3BdLnRvRG9MaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0VGFzayA9IGNyZWF0ZU5ld1Rhc2soJ05ldyBUYXNrJywgJzEvMS8yMDIyJywgZmFsc2UpO1xuICAgICAgICBwcm9qZWN0c1twXS50b0RvTGlzdC5wdXNoKGRlZmF1bHRUYXNrKTtcbiAgICAgICAgY29uc3QgY2xhc3NlZFByb2plY3QgPSBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RzW3BdLm5hbWUsIHByb2plY3RzW3BdLnRvRG9MaXN0KTtcbiAgICAgICAgY2xhc3NlZFByb2plY3RzLnB1c2goY2xhc3NlZFByb2plY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBwcm9qZWN0c1twXS50b0RvTGlzdC5sZW5ndGg7IHMgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0c1twXS50b0RvTGlzdFtzXTtcbiAgICAgICAgICBjb25zdCBjbGFzc2VkVGFzayA9IGNyZWF0ZU5ld1Rhc2sodGFzay5uYW1lLCB0YXNrLmR1ZURhdGUsIHRhc2suY29tcGxldGVkKTtcbiAgICAgICAgICBjbGFzc2VkVGFza3MucHVzaChjbGFzc2VkVGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NlZFByb2plY3QgPSBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RzW3BdLm5hbWUsIGNsYXNzZWRUYXNrcyk7XG4gICAgICAgIGNsYXNzZWRQcm9qZWN0cy5wdXNoKGNsYXNzZWRQcm9qZWN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzZWRQcm9qZWN0cztcbn1cbmV4cG9ydCBkZWZhdWx0IGNoZWNrU3RvcmFnZTtcbiIsImZ1bmN0aW9uIHNhdmVUb1N0b3JhZ2UocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IFN0cmluZyhwcm9qZWN0Lm5hbWUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYXZlVG9TdG9yYWdlO1xuIiwiaW1wb3J0IHBvcHVsYXRlUHJvamVjdExpc3QgZnJvbSAnLi4vLi4vRE9NL3Byb2plY3RsaXN0JztcbmltcG9ydCBzYXZlVG9TdG9yYWdlIGZyb20gJy4uL0xvY2FsU3RvcmFnZS9zYXZldG9sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IGNyZWF0ZU5ld1Rhc2sgZnJvbSAnLi4vVGFza3MvY3JlYXRlbmV3dGFzayc7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0b0RvTGlzdCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b0RvTGlzdCA9IHRvRG9MaXN0O1xuICB9XG5cbiAgY2hhbmdlTmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGFkZFRvRG8odG9Ebykge1xuICAgIGNvbnN0IG5ld1RvRG8gPSBjcmVhdGVOZXdUYXNrKHRvRG8sICcxLzEvMjAyMicsIGZhbHNlKTtcbiAgICB0aGlzLnRvRG9MaXN0LnB1c2gobmV3VG9Ebyk7XG4gIH1cblxuICByZW1vdmVUb0RvKHRvRG8pIHtcbiAgICBjb25zdCByZW1vdmVkVG9EbyA9IHRoaXMudG9Eb0xpc3QuaW5kZXhPZih0b0RvKTtcbiAgICB0aGlzLnRvRG9MaXN0LnNwbGljZShyZW1vdmVkVG9EbywgMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVByb2plY3RGb3JtKCkge1xuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0Rm9ybScpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RGb3JtJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0TmFtZScpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2plY3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RCdXR0b25zJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0U3VibWl0LmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RTdWJtaXQnKTtcbiAgbmV3UHJvamVjdFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICBuZXdQcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZU5ld1Byb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUsIFtdKTtcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICB9KTtcblxuICBjb25zdCBuZXdQcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RDYW5jZWwuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdENhbmNlbCcpO1xuICBuZXdQcm9qZWN0Q2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIG5ld1Byb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICB9KTtcblxuICBuZXdQcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0U3VibWl0KTtcbiAgbmV3UHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENhbmNlbCk7XG5cbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWUpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9ucyk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJyk7XG4gIG5hdi5yZW1vdmVDaGlsZChmb3JtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lLCB0b0RvTGlzdCkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgdG9Eb0xpc3QpO1xuICBzYXZlVG9TdG9yYWdlKHByb2plY3QpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IHsgbWFrZVByb2plY3RGb3JtLCBjcmVhdGVOZXdQcm9qZWN0IH07XG4iLCJmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QsIHVzZXJQcm9qZWN0cykge1xuICB1c2VyUHJvamVjdHMuc3BsaWNlKHByb2plY3QsIDEpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0Lm5hbWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVQcm9qZWN0O1xuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBzZXRDb21wbGV0ZWRTdGF0dXMoY29tcGxldGVkKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXRDb21wbGV0ZWRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2sobmFtZSwgZHVlRGF0ZSwgY29tcGxldGVkKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLCBkdWVEYXRlLCBjb21wbGV0ZWQpO1xuICByZXR1cm4gbmV3VGFzaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmV3VGFzaztcbiIsImZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaywgcHJvamVjdCkge1xuICBwcm9qZWN0LnRvRG9MaXN0LnNwbGljZSh0YXNrLCAxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVGFzaztcbiIsIi8vIFRoaXMgbW9kdWxlIGNyZWF0ZXMgdGhlIGNvbnRlbnQgc3RydWN0dXJlIGZvciB3aGljaCB0aGlzIGFwcGxpY2F0aW9uIHdpbGwgdXNlXG5pbXBvcnQgeyBtYWtlUHJvamVjdEZvcm0gfSBmcm9tICcuL2FwcGxvZ2ljL1Byb2plY3RzL2NyZWF0ZW5ld3Byb2plY3QnO1xuaW1wb3J0IHBvcHVsYXRlUHJvamVjdExpc3QgZnJvbSAnLi9ET00vcHJvamVjdGxpc3QnO1xuaW1wb3J0IHBvcHVsYXRlRGlzcGxheSBmcm9tICcuL0RPTS9wcm9qZWN0b3ZlcnZpZXcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgYXBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBhcHBUaXRsZS50ZXh0Q29udGVudCA9ICdUby5Ebyc7XG4gIGFwcFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FwcFRpdGxlJyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGFwcFRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlQmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZWJhcicpO1xuXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0Jyk7XG4gIHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdExpc3QnKTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG1ha2VQcm9qZWN0Rm9ybSgpKTtcbiAgfSk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvZHkoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICByZXR1cm4gYm9keTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ8KpSmFjb2IgQmVhY29tIDIwMjEnO1xuICBjb3B5cmlnaHQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9qYWNvYmJlYWNvbScpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNpZGVCYXIoKSk7XG4gIHBvcHVsYXRlUHJvamVjdExpc3QoKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCb2R5KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgcG9wdWxhdGVEaXNwbGF5KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplU2l0ZSBmcm9tICcuL3dlYnNpdGUnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRpYWxpemVTaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=