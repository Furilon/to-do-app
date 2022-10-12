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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: #EDFFD9;\n    position: relative;\n}\n\n#header h2 {\n    color: #EDFFD9;\n    margin: 0;\n    padding: 0;\n}\n\n#header {\n    border-bottom: 2px solid #3A3042;\n    padding: 20px;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: space-between;\n    background-color: #3A3042;\n}\n\n#header > div {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#header button, #itemFormContainer button, #projectFormContainer button {\n    background-color: #3A3042;\n    margin-right: 10px;\n    color: #EDFFD9;\n    font-weight: bold;\n    border: 2px solid #EDFFD9;\n    border-radius: 10px;\n    padding: 5px 8px;\n    transition: background-color 0.2s ease-out 0.01s,\n                color 0.2s ease-out 0.01s;\n}\n\n#header button:hover, #itemFormContainer button:hover, #projectFormContainer button:hover{\n    color: #3A3042;\n    background-color: #EDFFD9;\n    cursor: pointer;\n}\n\nbutton {\n    background-color: #EDFFD9;\n    margin-right: 10px;\n    color: #3A3042;\n    font-weight: bold;\n    border: 2px solid #3A3042;\n    border-radius: 10px;\n    padding: 5px 8px;\n    transition: background-color 0.2s ease-out 0.01s,\n                color 0.2s ease-out 0.01s;\n}\n\n\nbutton:hover {\n    color: #EDFFD9;\n    background-color: #3A3042;\n    cursor: pointer;\n}\n\n#content {\n    display: flex;\n    flex: 1 1 auto;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project {\n    min-width: 100%;\n    min-height:75px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3em;\n    border-bottom: 2px solid #3A3042\n}\n\n.project:hover {\n    background-color: #ff784f;\n}\n\n.active {\n    background-color: #db9d47;\n    font-weight: bold;\n}\n\n#content #projects {\n    border-right: 2px solid #3A3042;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n    max-width: 25%;\n}\n\n#content #todos {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\n.todo-item {\n    margin: 20px;\n    border: 2px solid #3A3042;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    padding: 13px\n}\n\n.todo-item-left {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.todo-item input {\n    -webkit-appearance: none;\n    border-radius: 45%;\n    padding: 13px;\n    margin-right: 13px;\n    transition: background-color 0.2s ease-out 0.01s;\n    cursor: pointer;\n}\n\n.todo-item button {\n    margin-left: 20px;\n}\n\n.one {\n    border: 3px solid #6e0101;\n    background-color: #cba8a8;\n    transition: background-color 0.2s ease-out 0.01s;\n}\n\n.one:hover {\n    background-color: #6e0101;\n}\n\n.two {\n    border: 3px solid #897400;\n    background-color: #d1cc7e;\n    transition: background-color 0.2s ease-out 0.01s;\n}\n\n.two:hover {\n    background-color: #897400;\n}\n\n.three {\n    border: 3px solid #1300e3;\n    background-color: #9f99e5;\n    transition: background-color 0.2s ease-out 0.01s;\n}\n\n.three:hover {\n    background-color: #1300e3;\n}\n\n.four {\n    border: 3px solid rgb(72, 72, 72);\n    background-color: slategray;\n    transition: background-color 0.2s ease-out 0.01s;\n}\n\n.four:hover {\n    background-color: rgb(72, 72, 72);\n}\n\n#footer {\n    border-top: 2px solid #3A3042;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #3A3042;\n    color: #EDFFD9;\n}\n\n#projectFormContainer, #itemFormContainer {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border: 3px solid #db9d47;\n    padding: 20px;\n    max-width: 250px;\n    height: 200px;\n    background-color: #3A3042;\n    color: #EDFFD9;\n    border-radius: 13px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n#itemFormContainer {\n    justify-content: space-around;\n    max-width: 250px;\n    height: 350px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\nform input {\n    margin-bottom: 8px;\n    border: 2px solid #EDFFD9;\n    background-color: #3A3042;\n    border-radius: 13px; \n    padding: 8px 13px;\n    color: #EDFFD9;\n}\n\nform input:focus {\n    background-color: #EDFFD9;\n    color:#3A3042\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB;yCACqC;AACzC;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB;yCACqC;AACzC;;;AAGA;IACI,cAAc;IACd,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB;AACJ;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gDAAgD;IAChD,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,gDAAgD;AACpD;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,gDAAgD;AACpD;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,gDAAgD;AACpD;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iCAAiC;IACjC,2BAA2B;IAC3B,gDAAgD;AACpD;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB;AACJ","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: #EDFFD9;\n    position: relative;\n}\n\n#header h2 {\n    color: #EDFFD9;\n    margin: 0;\n    padding: 0;\n}\n\n#header {\n    border-bottom: 2px solid #3A3042;\n    padding: 20px;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: space-between;\n    background-color: #3A3042;\n}\n\n#header > div {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#header button, #itemFormContainer button, #projectFormContainer button {\n    background-color: #3A3042;\n    margin-right: 10px;\n    color: #EDFFD9;\n    font-weight: bold;\n    border: 2px solid #EDFFD9;\n    border-radius: 10px;\n    padding: 5px 8px;\n    transition: background-color 0.2s ease-out 0.01s,\n                color 0.2s ease-out 0.01s;\n}\n\n#header button:hover, #itemFormContainer button:hover, #projectFormContainer button:hover{\n    color: #3A3042;\n    background-color: #EDFFD9;\n    cursor: pointer;\n}\n\nbutton {\n    background-color: #EDFFD9;\n    margin-right: 10px;\n    color: #3A3042;\n    font-weight: bold;\n    border: 2px solid #3A3042;\n    border-radius: 10px;\n    padding: 5px 8px;\n    transition: background-color 0.2s ease-out 0.01s,\n                color 0.2s ease-out 0.01s;\n}\n\n\nbutton:hover {\n    color: #EDFFD9;\n    background-color: #3A3042;\n    cursor: pointer;\n}\n\n#content {\n    display: flex;\n    flex: 1 1 auto;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project {\n    min-width: 100%;\n    min-height:75px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3em;\n    border-bottom: 2px solid #3A3042\n}\n\n.project:hover {\n    background-color: #ff784f;\n}\n\n.active {\n    background-color: #db9d47;\n    font-weight: bold;\n}\n\n#content #projects {\n    border-right: 2px solid #3A3042;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n    max-width: 25%;\n}\n\n#content #todos {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\n.todo-item {\n    margin: 20px;\n    border: 2px solid #3A3042;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    padding: 13px\n}\n\n.todo-item-left {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.todo-item input {\n    -webkit-appearance: none;\n    border-radius: 45%;\n    padding: 13px;\n    margin-right: 13px;\n    transition: background-color 0.2s ease-out 0.01s;\n    cursor: pointer;\n}\n\n.todo-item button {\n    margin-left: 20px;\n}\n\n.one {\n    border: 3px solid #6e0101;\n    background-color: #cba8a8;\n    transition: background-color 0.2s ease-out 0.01s;\n}\n\n.one:hover {\n    background-color: #6e0101;\n}\n\n.two {\n    border: 3px solid #897400;\n    background-color: #d1cc7e;\n    transition: background-color 0.2s ease-out 0.01s;\n}\n\n.two:hover {\n    background-color: #897400;\n}\n\n.three {\n    border: 3px solid #1300e3;\n    background-color: #9f99e5;\n    transition: background-color 0.2s ease-out 0.01s;\n}\n\n.three:hover {\n    background-color: #1300e3;\n}\n\n.four {\n    border: 3px solid rgb(72, 72, 72);\n    background-color: slategray;\n    transition: background-color 0.2s ease-out 0.01s;\n}\n\n.four:hover {\n    background-color: rgb(72, 72, 72);\n}\n\n#footer {\n    border-top: 2px solid #3A3042;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #3A3042;\n    color: #EDFFD9;\n}\n\n#projectFormContainer, #itemFormContainer {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border: 3px solid #db9d47;\n    padding: 20px;\n    max-width: 250px;\n    height: 200px;\n    background-color: #3A3042;\n    color: #EDFFD9;\n    border-radius: 13px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n#itemFormContainer {\n    justify-content: space-around;\n    max-width: 250px;\n    height: 350px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\nform input {\n    margin-bottom: 8px;\n    border: 2px solid #EDFFD9;\n    background-color: #3A3042;\n    border-radius: 13px; \n    padding: 8px 13px;\n    color: #EDFFD9;\n}\n\nform input:focus {\n    background-color: #EDFFD9;\n    color:#3A3042\n}\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "editProjectForm": () => (/* binding */ editProjectForm),
/* harmony export */   "createItemForm": () => (/* binding */ createItemForm),
/* harmony export */   "editItemForm": () => (/* binding */ editItemForm)
/* harmony export */ });
const toggleHeaderButtons = () => {
    const createProjectButton = document.getElementById('create-project')
    const removeProjectButton = document.getElementById('remove-project')
    const editProjectButton = document.getElementById('edit-project')
    const createItemButton = document.getElementById('create-item')

    // reverse whatever state of disability the buttons are in
    createProjectButton.disabled = !createProjectButton.disabled
    removeProjectButton.disabled = !removeProjectButton.disabled
    editProjectButton.disabled = !editProjectButton.disabled
    createItemButton.disabled = !createItemButton.disabled
}

const createProjectForm = (addProject) => {
    // make user unable to open other forms
    toggleHeaderButtons()

    // create a form container
    const container = document.createElement('div')
    container.id = 'projectFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = 'New Project'

    // create the form itself
    const form = document.createElement('form')
    form.id = 'projectForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'Title')
    title.setAttribute('required', 'true')
    title.id = 'projectTitle'

    // submit button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = 'Add project'
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func that is supplied by the interface
        addProject()

        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
    })

    form.appendChild(title)
    form.appendChild(submit)

    container.appendChild(formTitle)
    container.appendChild(form)
    container.appendChild(close)

    const body = document.querySelector('body')
    body.appendChild(container)
}

const editProjectForm = (oldTitle, editTitle, titleElem) => {
    // turn off other form buttons
    toggleHeaderButtons()

    // create a form container
    const container = document.createElement('div')
    container.id = 'projectFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = 'Edit Project Title'

    // create the form itself
    const form = document.createElement('form')
    form.id = 'projectForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('value', oldTitle)
    title.setAttribute('required', 'true')
    title.id = 'projectTitle'

    // submit button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = 'Edit'
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func that is supplied by the interface
        const newTitle = document.querySelector('#projectTitle').value
        editTitle(newTitle)
        titleElem.textContent = newTitle

        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
    })

    form.appendChild(title)
    form.appendChild(submit)

    container.appendChild(formTitle)
    container.appendChild(form)
    container.appendChild(close)

    const body = document.querySelector('body')
    body.appendChild(container)
}

const createItemForm = (addItem) => {
    // turn other form buttons off
    toggleHeaderButtons()

    // create the form container
    const container = document.createElement('div')
    container.id = 'itemFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = 'New Item'

    // create the form itself
    const form = document.createElement('form')
    form.id = 'itemForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'Title')
    title.setAttribute('required', 'true')
    title.id = 'itemTitle'

    const due = document.createElement('input')
    due.setAttribute('type', 'textarea')
    due.setAttribute('placeholder', 'Due date')
    due.setAttribute('required', 'true')
    due.id = 'itemDue'

    const priority = document.createElement('input')
    priority.setAttribute('type', 'number')
    priority.setAttribute('min', '1')
    priority.setAttribute('max', '4')
    priority.setAttribute('value', '1')
    priority.setAttribute('required', 'true')
    priority.id = 'itemPriority'

    // the button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = 'Add item'
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func supplied by the interface
        addItem()

        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
    })

    form.appendChild(title)
    form.appendChild(due)
    form.appendChild(priority)
    form.appendChild(submit)

    container.appendChild(formTitle)
    container.appendChild(form)
    container.appendChild(close)

    const body = document.querySelector('body')
    body.appendChild(container)
}

const editItemForm = (oldInfo, editFuncs, itemInfoDOM) => {
    // turn other form buttons off
    toggleHeaderButtons()

    // create the form container
    const container = document.createElement('div')
    container.id = 'itemFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = 'Edit Item'

    // create the form itself
    const form = document.createElement('form')
    form.id = 'itemForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('value', oldInfo.oldTitle)
    title.setAttribute('required', 'true')
    title.id = 'itemTitle'

    const due = document.createElement('input')
    due.setAttribute('type', 'textarea')
    due.setAttribute('value', oldInfo.oldDueDate)
    due.setAttribute('required', 'true')
    due.id = 'itemDue'

    const priority = document.createElement('input')
    priority.setAttribute('type', 'number')
    priority.setAttribute('min', '1')
    priority.setAttribute('max', '4')
    priority.setAttribute('value', oldInfo.oldPriority)
    priority.setAttribute('required', 'true')
    priority.id = 'itemPriority'

    // the button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = 'Edit'
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // get the new values
        const newTitle = document.getElementById('itemTitle').value
        const newDue = document.getElementById('itemDue').value
        const newPriority = document.getElementById('itemPriority').value

        // funcs supplied by the interface
        editFuncs.setTitle(newTitle)
        editFuncs.setDueDate(newDue)
        editFuncs.setPriority(newPriority)

        // elems supplied by the interface
        itemInfoDOM.title.textContent = newTitle
        itemInfoDOM.dueDate.textContent = newDue
        itemInfoDOM.priority.textContent = newPriority

        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
    })

    // close button closes the form
    const close = document.createElement('button')
    close.setAttribute('value', 'button')
    close.textContent = 'Close'
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
    })

    form.appendChild(title)
    form.appendChild(due)
    form.appendChild(priority)
    form.appendChild(submit)

    container.appendChild(formTitle)
    container.appendChild(form)
    container.appendChild(close)

    const body = document.querySelector('body')
    body.appendChild(container)
}


/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ "./src/items.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/forms.js");




const Todo = (() => {
    const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('Default')
    const item1 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Ben', 'Jan 29th', '3')
    const item2 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Jane', 'Jan 28th', '1')
    const item3 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Vadym', 'Jan 27th', '2')
    defaultProject.addItem(item1)
    defaultProject.addItem(item2)
    defaultProject.addItem(item3)
    // A list of projectFactory objects, which are basically lists of items.
    // So, it's a 2D list.
    let _projectList = [defaultProject]

    const _findActiveProject = () => {
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

        return project
    }

    const _createItems = (project) => {
        const itemContainer = document.getElementById('todos')
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i, _editItem)
            itemElem.firstChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    // Click on a particular proj, loop thru its items, and create an elem for each
    const _showItems = (e) => {
        const project = _findActiveProject()
        _createItems(project)
    }

    const _deleteItems = () => {
        const itemContainer = document.getElementById('todos')
        while (itemContainer.firstChild) {
            itemContainer.removeChild(itemContainer.lastChild)
        }
    }

    // Loop through _projectList, give each proj elem an ID and append to container.
    const showProjects = () => {
        const projContainer = document.getElementById('projects')
        _projectList.forEach((proj, i) => {
            const projectElem = _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.createProject(proj, i)

            // Make the first project active and show its items
            if (i == 0) {
                projectElem.classList.add('active')
                projectElem.addEventListener('click', makeProjectActive)
                _createItems(proj)
            }
            projContainer.appendChild(projectElem)
        })
    }

    const makeProject = () => {
        // Make a project internally
        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.createProjectForm)(() => {
            const projectTitle = document.querySelector('#projectTitle').value
            const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(projectTitle)
            _projectList.push(project)

            // Make all projects inactive
            const projects = document.querySelectorAll('.project')
            projects.forEach((proj) => proj.classList.remove('active'))

            // Figure out project's id and make a project DOM
            const projContainer = document.getElementById('projects')
            let projID = 0
            if (projContainer.lastChild) {
                projID = +projContainer.lastChild.dataset.index + 1
            }
            const projElem = _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.createProject(project, projID)
            projElem.classList.add('active')
            projElem.addEventListener('click', makeProjectActive)
            projContainer.appendChild(projElem)

            // Delete items from prev proj
            _deleteItems()
        })
    }

    const editProject = () => {
        // Find a project's id and its obj in _projectList
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]
        const projectTitleDOMElem = projElem.querySelector('.project-title')

        // Call a form and edit the name when submitted
        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.editProjectForm)(project.getName(), project.setName, projectTitleDOMElem)
    }

    const removeProject = () => {
        // Find active proj, delete its DOM and push out of _projectList,
        const proj = document.querySelector('.active')
        const projID = proj.dataset.index
        _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.deleteProject(projID)
        _projectList.splice(projID, 1)
        _deleteItems()

        // Make the last project active
        const projContainer = document.getElementById('projects')
        const projectElem = projContainer.lastChild
        projectElem.classList.add('active')

        // Show active project's items
        const projectID = projectElem.dataset.index
        const project = _projectList[projectID]
        _createItems(project)
    }

    // Make all projects inactive and activate this project
    const makeProjectActive = (e) => {
        // Make all projects inactive
        const projects = document.querySelectorAll('.project')
        projects.forEach((proj) => proj.classList.remove('active'))

        // Activate this project
        e.target.classList.add('active')

        // Delete items from prev proj
        _deleteItems()

        // Show items for this project
        _showItems(e)
    }

    // Find an item's id, delete its DOM and push out of _itemList
    const removeItem = (e) => {
        // Find a project's id and its obj in _projectList
        const project = _findActiveProject()

        // Item's ID
        const itemID = e.target.parentNode.id

        // Delete item from project and from DOM
        // (I chose to refresh elements to give them appropriate IDs)
        project.removeItem(itemID)
        // itemDOM.deleteItem(itemID);

        _deleteItems()
        const itemContainer = document.getElementById('todos')
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i, _editItem)
            itemElem.firstChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    const makeItem = () => {
        // Find active project
        const project = _findActiveProject()

        // Ask user about item's props
        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.createItemForm)(() => {
            const title = document.querySelector('#itemTitle').value
            const dueDate = document.querySelector('#itemDue').value
            const priority = document.querySelector('#itemPriority').value

            // Make an item and add it to the project
            const item = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)(title, dueDate, priority)
            project.addItem(item)

            // Make item's DOM elem and add it to the page
            // Use last item's id + 1 as this new item's id
            const itemContainer = document.getElementById('todos')
            let itemID = 0
            if (itemContainer.lastChild) {
                itemID = itemContainer.lastChild.id + 1
            }
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, itemID, _editItem)
            itemElem.firstChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    const _editItem = (e) => {
        // Find a project's id and its obj in _projectList
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

        // Item's ID
        const itemID = e.target.parentNode.id

        // Item object
        const itemsFromThisProject = project.getItems()
        const item = itemsFromThisProject[itemID]

        const oldItemInfo = {
            oldTitle: item.getTitle(),
            oldDueDate: item.getDueDate(),
            oldPriority: item.getPriority(),
        }

        const editFuncs = {
            setTitle: item.setTitle,
            setDueDate: item.setDueDate,
            setPriority: item.setPriority,
        }

        const mainItemElem = document.getElementById(itemID)
        const itemLeftSide = mainItemElem.querySelector('.todo-item-left')
        const itemTitleElem = itemLeftSide.querySelector('.todo-item-title')
        const itemDueElem = itemLeftSide.querySelector('.todo-item-duedate')
        const itemPriorityElem = itemLeftSide.querySelector(
            '.todo-item-priority'
        )
        const itemInfoDOM = {
            title: itemTitleElem,
            dueDate: itemDueElem,
            priority: itemPriorityElem,
        }

        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.editItemForm)(oldItemInfo, editFuncs, itemInfoDOM)
    }

    return {
        makeProject,
        removeProject,
        makeItem,
        removeItem,
        makeProjectActive,
        showProjects,
        editProject,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

// First of all, I have a lot of repetitive code.
// Almost all of the functions have parts that repeat each other.
// That is easily fixable.

// Secondly, I can customize CSS properly.


/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemFactory": () => (/* binding */ itemFactory),
/* harmony export */   "itemDOM": () => (/* binding */ itemDOM)
/* harmony export */ });
const itemFactory = (title, dueDate, priority) => {
    let _title = title
    let _dueDate = dueDate
    let _priority = priority

    const getTitle = () => _title
    const getDueDate = () => _dueDate
    const getPriority = () => _priority

    const setTitle = (newTitle) => (_title = newTitle)
    const setDueDate = (newDate) => (_dueDate = newDate)
    const setPriority = (newPriority) => (_priority = newPriority)

    return {
        getTitle,
        getDueDate,
        getPriority,
        setTitle,
        setDueDate,
        setPriority,
    }
}

const itemDOM = (() => {
    const _priorityColor = (priority) => {
        switch (priority) {
            case '1':
                return 'one'
            case '2':
                return 'two'
            case '3':
                return 'three'
            case '4':
                return 'four'
        }
    }

    const createItem = (item, i, editFunc) => {
        const container = document.createElement('div')
        container.classList.add('todo-item')
        container.id = i

        const todoLeft = document.createElement('div')
        todoLeft.classList.add('todo-item-left')

        const title = document.createElement('p')
        title.classList.add('todo-item-title')
        title.textContent = item.getTitle()
        todoLeft.appendChild(title)

        const dueDate = document.createElement('p')
        dueDate.classList.add('todo-item-duedate')
        dueDate.textContent = item.getDueDate()
        todoLeft.appendChild(dueDate)

        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const className = _priorityColor(item.getPriority())
        checkbox.classList.add(className)
        container.appendChild(checkbox)

        container.appendChild(todoLeft)

        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click', editFunc)
        container.appendChild(editBtn)

        return container
    }

    const deleteItem = (id) => {
        const todos = document.getElementById('todos')
        const item = document.getElementById(id)
        todos.removeChild(item)
    }

    return { createItem, deleteItem }
})()




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "projectDOM": () => (/* binding */ projectDOM)
/* harmony export */ });
const projectFactory = (name) => {
    let _name = name;
    const _itemList = [];

    const getName = () => _name;
    const setName = (newName) => _name = newName;

    const getItems = () => _itemList;
    const addItem = (item) => _itemList.push(item);
    const removeItem = (position) => _itemList.splice(position, 1);

    return { getName, setName, getItems, addItem, removeItem }
};

const projectDOM = (() => {
    const createProject = (project, id, editFunc) => {
        const container = document.createElement('div');
        container.classList.add('project');
        container.setAttribute('data-index', id);

        const title = document.createElement('p');
        title.classList.add('project-title');
        title.textContent = project.getName();
        container.appendChild(title);
        return container;
    }

    const deleteProject = (id) => {
        const projects = document.getElementById('projects');
        const project = document.querySelector(`div[data-index="${id}"]`);
        projects.removeChild(project);
    }

    return { createProject, deleteProject }
})();



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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ "./src/items.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface */ "./src/interface.js");





window.onload = _interface__WEBPACK_IMPORTED_MODULE_3__["default"].showProjects;

const createProjBtn = document.getElementById('create-project');
createProjBtn.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_3__["default"].makeProject);

const createItemBtn = document.getElementById('create-item');
createItemBtn.addEventListener('click', _interface__WEBPACK_IMPORTED_MODULE_3__["default"].makeItem);

const removeProjBtn = document.getElementById('remove-project');
removeProjBtn.addEventListener('click', _interface__WEBPACK_IMPORTED_MODULE_3__["default"].removeProject);

const editProjBtn = document.getElementById('edit-project');
editProjBtn.addEventListener('click', _interface__WEBPACK_IMPORTED_MODULE_3__["default"].editProject)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pUOEM7QUFDUztBQU12Qzs7QUFFaEI7QUFDQSwyQkFBMkIseURBQWM7QUFDekMsa0JBQWtCLG1EQUFXO0FBQzdCLGtCQUFrQixtREFBVztBQUM3QixrQkFBa0IsbURBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQWtCO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0RBQXdCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwwREFBaUI7QUFDekI7QUFDQSw0QkFBNEIseURBQWM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrREFBd0I7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx3REFBZTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQXdCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBa0I7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHVEQUFjO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtREFBVztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBa0I7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxxREFBWTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUk7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFLEdBQUc7QUFDckU7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7VUNsQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUMwQjtBQUNTO0FBQ3pCOztBQUUvQixnQkFBZ0IsK0RBQWlCOztBQUVqQztBQUNBLHdDQUF3Qyw4REFBZ0I7O0FBRXhEO0FBQ0Esd0NBQXdDLDJEQUFhOztBQUVyRDtBQUNBLHdDQUF3QyxnRUFBa0I7O0FBRTFEO0FBQ0Esc0NBQXNDLDhEQUFnQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREZGRDk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2hlYWRlciBoMiB7XFxuICAgIGNvbG9yOiAjRURGRkQ5O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzNBMzA0MjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBMzA0MjtcXG59XFxuXFxuI2hlYWRlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbiwgI2l0ZW1Gb3JtQ29udGFpbmVyIGJ1dHRvbiwgI3Byb2plY3RGb3JtQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTMwNDI7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgY29sb3I6ICNFREZGRDk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRURGRkQ5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXMsXFxuICAgICAgICAgICAgICAgIGNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXM7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uOmhvdmVyLCAjaXRlbUZvcm1Db250YWluZXIgYnV0dG9uOmhvdmVyLCAjcHJvamVjdEZvcm1Db250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogIzNBMzA0MjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERkZEOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGRkQ5O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiAjM0EzMDQyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNBMzA0MjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDAuMDFzLFxcbiAgICAgICAgICAgICAgICBjb2xvciAwLjJzIGVhc2Utb3V0IDAuMDFzO1xcbn1cXG5cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI0VERkZEOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBMzA0MjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDo3NXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzQTMwNDJcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODRmO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiOWQ0NztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjb250ZW50ICNwcm9qZWN0cyB7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzQTMwNDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG59XFxuXFxuI2NvbnRlbnQgI3RvZG9zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzQTMwNDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTNweFxcbn1cXG5cXG4udG9kby1pdGVtLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1pdGVtIGlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0NSU7XFxuICAgIHBhZGRpbmc6IDEzcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDAuMDFzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWl0ZW0gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5vbmUge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNmUwMTAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JhOGE4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXM7XFxufVxcblxcbi5vbmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUwMTAxO1xcbn1cXG5cXG4udHdvIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg5NzQwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2M3ZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDAuMDFzO1xcbn1cXG5cXG4udHdvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5NzQwMDtcXG59XFxuXFxuLnRocmVlIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzEzMDBlMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlmOTllNTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDAuMDFzO1xcbn1cXG5cXG4udGhyZWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMwMGUzO1xcbn1cXG5cXG4uZm91ciB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYig3MiwgNzIsIDcyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXM7XFxufVxcblxcbi5mb3VyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLCA3MiwgNzIpO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzQTMwNDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzMDQyO1xcbiAgICBjb2xvcjogI0VERkZEOTtcXG59XFxuXFxuI3Byb2plY3RGb3JtQ29udGFpbmVyLCAjaXRlbUZvcm1Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZGI5ZDQ3O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzMDQyO1xcbiAgICBjb2xvcjogI0VERkZEOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbiNpdGVtRm9ybUNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRURGRkQ5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzMDQyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4OyBcXG4gICAgcGFkZGluZzogOHB4IDEzcHg7XFxuICAgIGNvbG9yOiAjRURGRkQ5O1xcbn1cXG5cXG5mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERkZEOTtcXG4gICAgY29sb3I6IzNBMzA0Mlxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEI7eUNBQ3FDO0FBQ3pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCO3lDQUNxQztBQUN6Qzs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERkZEOTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jaGVhZGVyIGgyIHtcXG4gICAgY29sb3I6ICNFREZGRDk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjM0EzMDQyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzMDQyO1xcbn1cXG5cXG4jaGVhZGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uLCAjaXRlbUZvcm1Db250YWluZXIgYnV0dG9uLCAjcHJvamVjdEZvcm1Db250YWluZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBMzA0MjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogI0VERkZEOTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFREZGRDk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCAwLjAxcyxcXG4gICAgICAgICAgICAgICAgY29sb3IgMC4ycyBlYXNlLW91dCAwLjAxcztcXG59XFxuXFxuI2hlYWRlciBidXR0b246aG92ZXIsICNpdGVtRm9ybUNvbnRhaW5lciBidXR0b246aG92ZXIsICNwcm9qZWN0Rm9ybUNvbnRhaW5lciBidXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiAjM0EzMDQyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGRkQ5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREZGRDk7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgY29sb3I6ICMzQTMwNDI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM0EzMDQyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXMsXFxuICAgICAgICAgICAgICAgIGNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXM7XFxufVxcblxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjRURGRkQ5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzMDQyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0Ojc1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzNBMzA0Mlxcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc4NGY7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI5ZDQ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2NvbnRlbnQgI3Byb2plY3RzIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzNBMzA0MjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIG1heC13aWR0aDogMjUlO1xcbn1cXG5cXG4jY29udGVudCAjdG9kb3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNBMzA0MjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxM3B4XFxufVxcblxcbi50b2RvLWl0ZW0tbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvLWl0ZW0gaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQ1JTtcXG4gICAgcGFkZGluZzogMTNweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8taXRlbSBidXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLm9uZSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM2ZTAxMDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmE4YTg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCAwLjAxcztcXG59XFxuXFxuLm9uZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTAxMDE7XFxufVxcblxcbi50d28ge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODk3NDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjYzdlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXM7XFxufVxcblxcbi50d286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk3NDAwO1xcbn1cXG5cXG4udGhyZWUge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTMwMGUzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWY5OWU1O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMC4wMXM7XFxufVxcblxcbi50aHJlZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzAwZTM7XFxufVxcblxcbi5mb3VyIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDcyLCA3MiwgNzIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCAwLjAxcztcXG59XFxuXFxuLmZvdXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsIDcyLCA3Mik7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNBMzA0MjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTMwNDI7XFxuICAgIGNvbG9yOiAjRURGRkQ5O1xcbn1cXG5cXG4jcHJvamVjdEZvcm1Db250YWluZXIsICNpdGVtRm9ybUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNkYjlkNDc7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTMwNDI7XFxuICAgIGNvbG9yOiAjRURGRkQ5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuI2l0ZW1Gb3JtQ29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFREZGRDk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTMwNDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7IFxcbiAgICBwYWRkaW5nOiA4cHggMTNweDtcXG4gICAgY29sb3I6ICNFREZGRDk7XFxufVxcblxcbmZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGRkQ5O1xcbiAgICBjb2xvcjojM0EzMDQyXFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgdG9nZ2xlSGVhZGVyQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0JylcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1wcm9qZWN0JylcbiAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKVxuICAgIGNvbnN0IGNyZWF0ZUl0ZW1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWl0ZW0nKVxuXG4gICAgLy8gcmV2ZXJzZSB3aGF0ZXZlciBzdGF0ZSBvZiBkaXNhYmlsaXR5IHRoZSBidXR0b25zIGFyZSBpblxuICAgIGNyZWF0ZVByb2plY3RCdXR0b24uZGlzYWJsZWQgPSAhY3JlYXRlUHJvamVjdEJ1dHRvbi5kaXNhYmxlZFxuICAgIHJlbW92ZVByb2plY3RCdXR0b24uZGlzYWJsZWQgPSAhcmVtb3ZlUHJvamVjdEJ1dHRvbi5kaXNhYmxlZFxuICAgIGVkaXRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gIWVkaXRQcm9qZWN0QnV0dG9uLmRpc2FibGVkXG4gICAgY3JlYXRlSXRlbUJ1dHRvbi5kaXNhYmxlZCA9ICFjcmVhdGVJdGVtQnV0dG9uLmRpc2FibGVkXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9IChhZGRQcm9qZWN0KSA9PiB7XG4gICAgLy8gbWFrZSB1c2VyIHVuYWJsZSB0byBvcGVuIG90aGVyIGZvcm1zXG4gICAgdG9nZ2xlSGVhZGVyQnV0dG9ucygpXG5cbiAgICAvLyBjcmVhdGUgYSBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmlkID0gJ3Byb2plY3RGb3JtQ29udGFpbmVyJ1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCdcblxuICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBpdHNlbGZcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5pZCA9ICdwcm9qZWN0Rm9ybSdcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKVxuICAgIHRpdGxlLmlkID0gJ3Byb2plY3RUaXRsZSdcblxuICAgIC8vIHN1Ym1pdCBidXR0b24gcHJldmVudHMgcGFnZSByZWZyZXNoIGFuZCBcImNsb3Nlc1wiIHRoZSBmb3JtXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkIHByb2plY3QnXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gZnVuYyB0aGF0IGlzIHN1cHBsaWVkIGJ5IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgYWRkUHJvamVjdCgpXG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBmb3JtIGZyb20gdGhlIHNjcmVlblxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuXG4gICAgICAgIC8vIHR1cm4gb3RoZXIgZm9ybSBidXR0b25zIG9uXG4gICAgICAgIHRvZ2dsZUhlYWRlckJ1dHRvbnMoKVxuICAgIH0pXG5cbiAgICAvLyBjbG9zZSBidXR0b24gY2xvc2VzIHRoZSBmb3JtXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xuICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnYnV0dG9uJylcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZm9ybSBmcm9tIHRoZSBzY3JlZW5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudE5vZGUpXG5cbiAgICAgICAgLy8gdHVybiBvdGhlciBmb3JtIGJ1dHRvbnMgb25cbiAgICAgICAgdG9nZ2xlSGVhZGVyQnV0dG9ucygpXG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZSlcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbn1cblxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IChvbGRUaXRsZSwgZWRpdFRpdGxlLCB0aXRsZUVsZW0pID0+IHtcbiAgICAvLyB0dXJuIG9mZiBvdGhlciBmb3JtIGJ1dHRvbnNcbiAgICB0b2dnbGVIZWFkZXJCdXR0b25zKClcblxuICAgIC8vIGNyZWF0ZSBhIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuaWQgPSAncHJvamVjdEZvcm1Db250YWluZXInXG5cbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCBUaXRsZSdcblxuICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBpdHNlbGZcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5pZCA9ICdwcm9qZWN0Rm9ybSdcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2xkVGl0bGUpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJylcbiAgICB0aXRsZS5pZCA9ICdwcm9qZWN0VGl0bGUnXG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uIHByZXZlbnRzIHBhZ2UgcmVmcmVzaCBhbmQgXCJjbG9zZXNcIiB0aGUgZm9ybVxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gJ0VkaXQnXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gZnVuYyB0aGF0IGlzIHN1cHBsaWVkIGJ5IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykudmFsdWVcbiAgICAgICAgZWRpdFRpdGxlKG5ld1RpdGxlKVxuICAgICAgICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSBuZXdUaXRsZVxuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZm9ybSBmcm9tIHRoZSBzY3JlZW5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSlcblxuICAgICAgICAvLyB0dXJuIG90aGVyIGZvcm0gYnV0dG9ucyBvblxuICAgICAgICB0b2dnbGVIZWFkZXJCdXR0b25zKClcbiAgICB9KVxuXG4gICAgLy8gY2xvc2UgYnV0dG9uIGNsb3NlcyB0aGUgZm9ybVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjbG9zZS50ZXh0Q29udGVudCA9ICdDbG9zZSdcbiAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2J1dHRvbicpXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAvLyByZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgc2NyZWVuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnROb2RlKVxuXG4gICAgICAgIC8vIHR1cm4gb3RoZXIgZm9ybSBidXR0b25zIG9uXG4gICAgICAgIHRvZ2dsZUhlYWRlckJ1dHRvbnMoKVxuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1UaXRsZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2UpXG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJdGVtRm9ybSA9IChhZGRJdGVtKSA9PiB7XG4gICAgLy8gdHVybiBvdGhlciBmb3JtIGJ1dHRvbnMgb2ZmXG4gICAgdG9nZ2xlSGVhZGVyQnV0dG9ucygpXG5cbiAgICAvLyBjcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuaWQgPSAnaXRlbUZvcm1Db250YWluZXInXG5cbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBJdGVtJ1xuXG4gICAgLy8gY3JlYXRlIHRoZSBmb3JtIGl0c2VsZlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmlkID0gJ2l0ZW1Gb3JtJ1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgdGl0bGUuaWQgPSAnaXRlbVRpdGxlJ1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0R1ZSBkYXRlJylcbiAgICBkdWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJylcbiAgICBkdWUuaWQgPSAnaXRlbUR1ZSdcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbWF4JywgJzQnKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMScpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJylcbiAgICBwcmlvcml0eS5pZCA9ICdpdGVtUHJpb3JpdHknXG5cbiAgICAvLyB0aGUgYnV0dG9uIHByZXZlbnRzIHBhZ2UgcmVmcmVzaCBhbmQgXCJjbG9zZXNcIiB0aGUgZm9ybVxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCBpdGVtJ1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIC8vIGZ1bmMgc3VwcGxpZWQgYnkgdGhlIGludGVyZmFjZVxuICAgICAgICBhZGRJdGVtKClcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgc2NyZWVuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpXG5cbiAgICAgICAgLy8gdHVybiBvdGhlciBmb3JtIGJ1dHRvbnMgb25cbiAgICAgICAgdG9nZ2xlSGVhZGVyQnV0dG9ucygpXG4gICAgfSlcblxuICAgIC8vIGNsb3NlIGJ1dHRvbiBjbG9zZXMgdGhlIGZvcm1cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSAnQ2xvc2UnXG4gICAgY2xvc2Uuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdidXR0b24nKVxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBmb3JtIGZyb20gdGhlIHNjcmVlblxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50Tm9kZSlcblxuICAgICAgICAvLyB0dXJuIG90aGVyIGZvcm0gYnV0dG9ucyBvblxuICAgICAgICB0b2dnbGVIZWFkZXJCdXR0b25zKClcbiAgICB9KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1UaXRsZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2UpXG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG59XG5cbmV4cG9ydCBjb25zdCBlZGl0SXRlbUZvcm0gPSAob2xkSW5mbywgZWRpdEZ1bmNzLCBpdGVtSW5mb0RPTSkgPT4ge1xuICAgIC8vIHR1cm4gb3RoZXIgZm9ybSBidXR0b25zIG9mZlxuICAgIHRvZ2dsZUhlYWRlckJ1dHRvbnMoKVxuXG4gICAgLy8gY3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmlkID0gJ2l0ZW1Gb3JtQ29udGFpbmVyJ1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IEl0ZW0nXG5cbiAgICAvLyBjcmVhdGUgdGhlIGZvcm0gaXRzZWxmXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uaWQgPSAnaXRlbUZvcm0nXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9sZEluZm8ub2xkVGl0bGUpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJylcbiAgICB0aXRsZS5pZCA9ICdpdGVtVGl0bGUnXG5cbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZHVlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0YXJlYScpXG4gICAgZHVlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvbGRJbmZvLm9sZER1ZURhdGUpXG4gICAgZHVlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgZHVlLmlkID0gJ2l0ZW1EdWUnXG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ21pbicsICcxJylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ21heCcsICc0JylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2xkSW5mby5vbGRQcmlvcml0eSlcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKVxuICAgIHByaW9yaXR5LmlkID0gJ2l0ZW1Qcmlvcml0eSdcblxuICAgIC8vIHRoZSBidXR0b24gcHJldmVudHMgcGFnZSByZWZyZXNoIGFuZCBcImNsb3Nlc1wiIHRoZSBmb3JtXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnRWRpdCdcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBnZXQgdGhlIG5ldyB2YWx1ZXNcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVRpdGxlJykudmFsdWVcbiAgICAgICAgY29uc3QgbmV3RHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1EdWUnKS52YWx1ZVxuICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtUHJpb3JpdHknKS52YWx1ZVxuXG4gICAgICAgIC8vIGZ1bmNzIHN1cHBsaWVkIGJ5IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgZWRpdEZ1bmNzLnNldFRpdGxlKG5ld1RpdGxlKVxuICAgICAgICBlZGl0RnVuY3Muc2V0RHVlRGF0ZShuZXdEdWUpXG4gICAgICAgIGVkaXRGdW5jcy5zZXRQcmlvcml0eShuZXdQcmlvcml0eSlcblxuICAgICAgICAvLyBlbGVtcyBzdXBwbGllZCBieSB0aGUgaW50ZXJmYWNlXG4gICAgICAgIGl0ZW1JbmZvRE9NLnRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGVcbiAgICAgICAgaXRlbUluZm9ET00uZHVlRGF0ZS50ZXh0Q29udGVudCA9IG5ld0R1ZVxuICAgICAgICBpdGVtSW5mb0RPTS5wcmlvcml0eS50ZXh0Q29udGVudCA9IG5ld1ByaW9yaXR5XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBmb3JtIGZyb20gdGhlIHNjcmVlblxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuXG4gICAgICAgIC8vIHR1cm4gb3RoZXIgZm9ybSBidXR0b25zIG9uXG4gICAgICAgIHRvZ2dsZUhlYWRlckJ1dHRvbnMoKVxuICAgIH0pXG5cbiAgICAvLyBjbG9zZSBidXR0b24gY2xvc2VzIHRoZSBmb3JtXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnYnV0dG9uJylcbiAgICBjbG9zZS50ZXh0Q29udGVudCA9ICdDbG9zZSdcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZm9ybSBmcm9tIHRoZSBzY3JlZW5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudE5vZGUpXG5cbiAgICAgICAgLy8gdHVybiBvdGhlciBmb3JtIGJ1dHRvbnMgb25cbiAgICAgICAgdG9nZ2xlSGVhZGVyQnV0dG9ucygpXG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlKVxuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxufVxuIiwiaW1wb3J0IHsgaXRlbUZhY3RvcnksIGl0ZW1ET00gfSBmcm9tICcuL2l0ZW1zJ1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RET00gfSBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IHtcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSxcbiAgICBjcmVhdGVJdGVtRm9ybSxcbiAgICBlZGl0UHJvamVjdEZvcm0sXG4gICAgZWRpdEl0ZW1Gb3JtLFxufSBmcm9tICcuL2Zvcm1zJ1xuXG5jb25zdCBUb2RvID0gKCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdEZWZhdWx0JylcbiAgICBjb25zdCBpdGVtMSA9IGl0ZW1GYWN0b3J5KCdDYWxsIEJlbicsICdKYW4gMjl0aCcsICczJylcbiAgICBjb25zdCBpdGVtMiA9IGl0ZW1GYWN0b3J5KCdDYWxsIEphbmUnLCAnSmFuIDI4dGgnLCAnMScpXG4gICAgY29uc3QgaXRlbTMgPSBpdGVtRmFjdG9yeSgnQ2FsbCBWYWR5bScsICdKYW4gMjd0aCcsICcyJylcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRJdGVtKGl0ZW0xKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEl0ZW0oaXRlbTIpXG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMylcbiAgICAvLyBBIGxpc3Qgb2YgcHJvamVjdEZhY3Rvcnkgb2JqZWN0cywgd2hpY2ggYXJlIGJhc2ljYWxseSBsaXN0cyBvZiBpdGVtcy5cbiAgICAvLyBTbywgaXQncyBhIDJEIGxpc3QuXG4gICAgbGV0IF9wcm9qZWN0TGlzdCA9IFtkZWZhdWx0UHJvamVjdF1cblxuICAgIGNvbnN0IF9maW5kQWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvakVsZW0uZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2pJRF1cblxuICAgICAgICByZXR1cm4gcHJvamVjdFxuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVJdGVtcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuZ2V0SXRlbXMoKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpLCBfZWRpdEl0ZW0pXG4gICAgICAgICAgICBpdGVtRWxlbS5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ2xpY2sgb24gYSBwYXJ0aWN1bGFyIHByb2osIGxvb3AgdGhydSBpdHMgaXRlbXMsIGFuZCBjcmVhdGUgYW4gZWxlbSBmb3IgZWFjaFxuICAgIGNvbnN0IF9zaG93SXRlbXMgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX2ZpbmRBY3RpdmVQcm9qZWN0KClcbiAgICAgICAgX2NyZWF0ZUl0ZW1zKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgX2RlbGV0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgd2hpbGUgKGl0ZW1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5yZW1vdmVDaGlsZChpdGVtQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBfcHJvamVjdExpc3QsIGdpdmUgZWFjaCBwcm9qIGVsZW0gYW4gSUQgYW5kIGFwcGVuZCB0byBjb250YWluZXIuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcbiAgICAgICAgX3Byb2plY3RMaXN0LmZvckVhY2goKHByb2osIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvamVjdERPTS5jcmVhdGVQcm9qZWN0KHByb2osIGkpXG5cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIGZpcnN0IHByb2plY3QgYWN0aXZlIGFuZCBzaG93IGl0cyBpdGVtc1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlUHJvamVjdEFjdGl2ZSlcbiAgICAgICAgICAgICAgICBfY3JlYXRlSXRlbXMocHJvailcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBwcm9qZWN0IGludGVybmFsbHlcbiAgICAgICAgY3JlYXRlUHJvamVjdEZvcm0oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKVxuICAgICAgICAgICAgX3Byb2plY3RMaXN0LnB1c2gocHJvamVjdClcblxuICAgICAgICAgICAgLy8gTWFrZSBhbGwgcHJvamVjdHMgaW5hY3RpdmVcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcblxuICAgICAgICAgICAgLy8gRmlndXJlIG91dCBwcm9qZWN0J3MgaWQgYW5kIG1ha2UgYSBwcm9qZWN0IERPTVxuICAgICAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgICAgICBsZXQgcHJvaklEID0gMFxuICAgICAgICAgICAgaWYgKHByb2pDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgcHJvaklEID0gK3Byb2pDb250YWluZXIubGFzdENoaWxkLmRhdGFzZXQuaW5kZXggKyAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9qRWxlbSA9IHByb2plY3RET00uY3JlYXRlUHJvamVjdChwcm9qZWN0LCBwcm9qSUQpXG4gICAgICAgICAgICBwcm9qRWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgcHJvakVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlUHJvamVjdEFjdGl2ZSlcbiAgICAgICAgICAgIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvakVsZW0pXG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSBpdGVtcyBmcm9tIHByZXYgcHJvalxuICAgICAgICAgICAgX2RlbGV0ZUl0ZW1zKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgLy8gRmluZCBhIHByb2plY3QncyBpZCBhbmQgaXRzIG9iaiBpbiBfcHJvamVjdExpc3RcbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvakVsZW0uZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2pJRF1cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlRE9NRWxlbSA9IHByb2pFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJylcblxuICAgICAgICAvLyBDYWxsIGEgZm9ybSBhbmQgZWRpdCB0aGUgbmFtZSB3aGVuIHN1Ym1pdHRlZFxuICAgICAgICBlZGl0UHJvamVjdEZvcm0ocHJvamVjdC5nZXROYW1lKCksIHByb2plY3Quc2V0TmFtZSwgcHJvamVjdFRpdGxlRE9NRWxlbSlcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBGaW5kIGFjdGl2ZSBwcm9qLCBkZWxldGUgaXRzIERPTSBhbmQgcHVzaCBvdXQgb2YgX3Byb2plY3RMaXN0LFxuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IHByb2ouZGF0YXNldC5pbmRleFxuICAgICAgICBwcm9qZWN0RE9NLmRlbGV0ZVByb2plY3QocHJvaklEKVxuICAgICAgICBfcHJvamVjdExpc3Quc3BsaWNlKHByb2pJRCwgMSlcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcblxuICAgICAgICAvLyBNYWtlIHRoZSBsYXN0IHByb2plY3QgYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbSA9IHByb2pDb250YWluZXIubGFzdENoaWxkXG4gICAgICAgIHByb2plY3RFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgLy8gU2hvdyBhY3RpdmUgcHJvamVjdCdzIGl0ZW1zXG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RFbGVtLmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qZWN0SURdXG4gICAgICAgIF9jcmVhdGVJdGVtcyhwcm9qZWN0KVxuICAgIH1cblxuICAgIC8vIE1ha2UgYWxsIHByb2plY3RzIGluYWN0aXZlIGFuZCBhY3RpdmF0ZSB0aGlzIHByb2plY3RcbiAgICBjb25zdCBtYWtlUHJvamVjdEFjdGl2ZSA9IChlKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYWxsIHByb2plY3RzIGluYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuXG4gICAgICAgIC8vIEFjdGl2YXRlIHRoaXMgcHJvamVjdFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgICAgIC8vIERlbGV0ZSBpdGVtcyBmcm9tIHByZXYgcHJvalxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuXG4gICAgICAgIC8vIFNob3cgaXRlbXMgZm9yIHRoaXMgcHJvamVjdFxuICAgICAgICBfc2hvd0l0ZW1zKGUpXG4gICAgfVxuXG4gICAgLy8gRmluZCBhbiBpdGVtJ3MgaWQsIGRlbGV0ZSBpdHMgRE9NIGFuZCBwdXNoIG91dCBvZiBfaXRlbUxpc3RcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGUpID0+IHtcbiAgICAgICAgLy8gRmluZCBhIHByb2plY3QncyBpZCBhbmQgaXRzIG9iaiBpbiBfcHJvamVjdExpc3RcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9maW5kQWN0aXZlUHJvamVjdCgpXG5cbiAgICAgICAgLy8gSXRlbSdzIElEXG4gICAgICAgIGNvbnN0IGl0ZW1JRCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWRcblxuICAgICAgICAvLyBEZWxldGUgaXRlbSBmcm9tIHByb2plY3QgYW5kIGZyb20gRE9NXG4gICAgICAgIC8vIChJIGNob3NlIHRvIHJlZnJlc2ggZWxlbWVudHMgdG8gZ2l2ZSB0aGVtIGFwcHJvcHJpYXRlIElEcylcbiAgICAgICAgcHJvamVjdC5yZW1vdmVJdGVtKGl0ZW1JRClcbiAgICAgICAgLy8gaXRlbURPTS5kZWxldGVJdGVtKGl0ZW1JRCk7XG5cbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGksIF9lZGl0SXRlbSlcbiAgICAgICAgICAgIGl0ZW1FbGVtLmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSXRlbSA9ICgpID0+IHtcbiAgICAgICAgLy8gRmluZCBhY3RpdmUgcHJvamVjdFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX2ZpbmRBY3RpdmVQcm9qZWN0KClcblxuICAgICAgICAvLyBBc2sgdXNlciBhYm91dCBpdGVtJ3MgcHJvcHNcbiAgICAgICAgY3JlYXRlSXRlbUZvcm0oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbVRpdGxlJykudmFsdWVcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbUR1ZScpLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtUHJpb3JpdHknKS52YWx1ZVxuXG4gICAgICAgICAgICAvLyBNYWtlIGFuIGl0ZW0gYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdFxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1GYWN0b3J5KHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICAgICAgICAgIHByb2plY3QuYWRkSXRlbShpdGVtKVxuXG4gICAgICAgICAgICAvLyBNYWtlIGl0ZW0ncyBET00gZWxlbSBhbmQgYWRkIGl0IHRvIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBVc2UgbGFzdCBpdGVtJ3MgaWQgKyAxIGFzIHRoaXMgbmV3IGl0ZW0ncyBpZFxuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgICAgICBsZXQgaXRlbUlEID0gMFxuICAgICAgICAgICAgaWYgKGl0ZW1Db250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaXRlbUlEID0gaXRlbUNvbnRhaW5lci5sYXN0Q2hpbGQuaWQgKyAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpdGVtSUQsIF9lZGl0SXRlbSlcbiAgICAgICAgICAgIGl0ZW1FbGVtLmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBfZWRpdEl0ZW0gPSAoZSkgPT4ge1xuICAgICAgICAvLyBGaW5kIGEgcHJvamVjdCdzIGlkIGFuZCBpdHMgb2JqIGluIF9wcm9qZWN0TGlzdFxuICAgICAgICBjb25zdCBwcm9qRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBwcm9qRWxlbS5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuXG4gICAgICAgIC8vIEl0ZW0ncyBJRFxuICAgICAgICBjb25zdCBpdGVtSUQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG5cbiAgICAgICAgLy8gSXRlbSBvYmplY3RcbiAgICAgICAgY29uc3QgaXRlbXNGcm9tVGhpc1Byb2plY3QgPSBwcm9qZWN0LmdldEl0ZW1zKClcbiAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zRnJvbVRoaXNQcm9qZWN0W2l0ZW1JRF1cblxuICAgICAgICBjb25zdCBvbGRJdGVtSW5mbyA9IHtcbiAgICAgICAgICAgIG9sZFRpdGxlOiBpdGVtLmdldFRpdGxlKCksXG4gICAgICAgICAgICBvbGREdWVEYXRlOiBpdGVtLmdldER1ZURhdGUoKSxcbiAgICAgICAgICAgIG9sZFByaW9yaXR5OiBpdGVtLmdldFByaW9yaXR5KCksXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0RnVuY3MgPSB7XG4gICAgICAgICAgICBzZXRUaXRsZTogaXRlbS5zZXRUaXRsZSxcbiAgICAgICAgICAgIHNldER1ZURhdGU6IGl0ZW0uc2V0RHVlRGF0ZSxcbiAgICAgICAgICAgIHNldFByaW9yaXR5OiBpdGVtLnNldFByaW9yaXR5LFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFpbkl0ZW1FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbUlEKVxuICAgICAgICBjb25zdCBpdGVtTGVmdFNpZGUgPSBtYWluSXRlbUVsZW0ucXVlcnlTZWxlY3RvcignLnRvZG8taXRlbS1sZWZ0JylcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlRWxlbSA9IGl0ZW1MZWZ0U2lkZS5xdWVyeVNlbGVjdG9yKCcudG9kby1pdGVtLXRpdGxlJylcbiAgICAgICAgY29uc3QgaXRlbUR1ZUVsZW0gPSBpdGVtTGVmdFNpZGUucXVlcnlTZWxlY3RvcignLnRvZG8taXRlbS1kdWVkYXRlJylcbiAgICAgICAgY29uc3QgaXRlbVByaW9yaXR5RWxlbSA9IGl0ZW1MZWZ0U2lkZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy50b2RvLWl0ZW0tcHJpb3JpdHknXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgaXRlbUluZm9ET00gPSB7XG4gICAgICAgICAgICB0aXRsZTogaXRlbVRpdGxlRWxlbSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGl0ZW1EdWVFbGVtLFxuICAgICAgICAgICAgcHJpb3JpdHk6IGl0ZW1Qcmlvcml0eUVsZW0sXG4gICAgICAgIH1cblxuICAgICAgICBlZGl0SXRlbUZvcm0ob2xkSXRlbUluZm8sIGVkaXRGdW5jcywgaXRlbUluZm9ET00pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIG1ha2VJdGVtLFxuICAgICAgICByZW1vdmVJdGVtLFxuICAgICAgICBtYWtlUHJvamVjdEFjdGl2ZSxcbiAgICAgICAgc2hvd1Byb2plY3RzLFxuICAgICAgICBlZGl0UHJvamVjdCxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9cblxuLy8gRmlyc3Qgb2YgYWxsLCBJIGhhdmUgYSBsb3Qgb2YgcmVwZXRpdGl2ZSBjb2RlLlxuLy8gQWxtb3N0IGFsbCBvZiB0aGUgZnVuY3Rpb25zIGhhdmUgcGFydHMgdGhhdCByZXBlYXQgZWFjaCBvdGhlci5cbi8vIFRoYXQgaXMgZWFzaWx5IGZpeGFibGUuXG5cbi8vIFNlY29uZGx5LCBJIGNhbiBjdXN0b21pemUgQ1NTIHByb3Blcmx5LlxuIiwiY29uc3QgaXRlbUZhY3RvcnkgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlXG4gICAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZVxuICAgIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eVxuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGVcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGVcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IF9wcmlvcml0eVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IChfdGl0bGUgPSBuZXdUaXRsZSlcbiAgICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0RhdGUpID0+IChfZHVlRGF0ZSA9IG5ld0RhdGUpXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IChfcHJpb3JpdHkgPSBuZXdQcmlvcml0eSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldER1ZURhdGUsXG4gICAgICAgIHNldFByaW9yaXR5LFxuICAgIH1cbn1cblxuY29uc3QgaXRlbURPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgX3ByaW9yaXR5Q29sb3IgPSAocHJpb3JpdHkpID0+IHtcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdvbmUnXG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3R3bydcbiAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndGhyZWUnXG4gICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZvdXInXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJdGVtID0gKGl0ZW0sIGksIGVkaXRGdW5jKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKVxuICAgICAgICBjb250YWluZXIuaWQgPSBpXG5cbiAgICAgICAgY29uc3QgdG9kb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2RvTGVmdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tbGVmdCcpXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLXRpdGxlJylcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLmdldFRpdGxlKClcbiAgICAgICAgdG9kb0xlZnQuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1kdWVkYXRlJylcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RHVlRGF0ZSgpXG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKGR1ZURhdGUpXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IF9wcmlvcml0eUNvbG9yKGl0ZW0uZ2V0UHJpb3JpdHkoKSlcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveClcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xlZnQpXG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCdcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRGdW5jKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgdG9kb3MucmVtb3ZlQ2hpbGQoaXRlbSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVJdGVtLCBkZWxldGVJdGVtIH1cbn0pKClcblxuZXhwb3J0IHsgaXRlbUZhY3RvcnksIGl0ZW1ET00gfVxuIiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGxldCBfbmFtZSA9IG5hbWU7XG4gICAgY29uc3QgX2l0ZW1MaXN0ID0gW107XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gX25hbWU7XG4gICAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiBfbmFtZSA9IG5ld05hbWU7XG5cbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IF9pdGVtTGlzdDtcbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IF9pdGVtTGlzdC5wdXNoKGl0ZW0pO1xuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAocG9zaXRpb24pID0+IF9pdGVtTGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgc2V0TmFtZSwgZ2V0SXRlbXMsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0gfVxufTtcblxuY29uc3QgcHJvamVjdERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0LCBpZCwgZWRpdEZ1bmMpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpZCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1pbmRleD1cIiR7aWR9XCJdYCk7XG4gICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3QgfVxufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RET00gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGl0ZW1GYWN0b3J5LCBpdGVtRE9NIH0gZnJvbSBcIi4vaXRlbXNcIjtcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0RE9NIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG53aW5kb3cub25sb2FkID0gVG9kby5zaG93UHJvamVjdHM7XG5cbmNvbnN0IGNyZWF0ZVByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QnKTtcbmNyZWF0ZVByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRvZG8ubWFrZVByb2plY3QpO1xuXG5jb25zdCBjcmVhdGVJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1pdGVtJyk7XG5jcmVhdGVJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVG9kby5tYWtlSXRlbSk7XG5cbmNvbnN0IHJlbW92ZVByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLXByb2plY3QnKTtcbnJlbW92ZVByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUb2RvLnJlbW92ZVByb2plY3QpO1xuXG5jb25zdCBlZGl0UHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKTtcbmVkaXRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVG9kby5lZGl0UHJvamVjdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=