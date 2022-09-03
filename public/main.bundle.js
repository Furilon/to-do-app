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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    overflow: hidden;\n}\n\n#header {\n    border: 1px solid black;\n    padding: 20px;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: flex-start;\n}\n\n#content {\n    border: 1px solid red;\n    display: flex;\n    flex: 1 1 auto;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project {\n    min-width: 100%;\n    min-height:75px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3em;\n}\n\n.project:hover {\n    background-color: rgb(221, 221, 221);\n}\n\n.active {\n    background-color: rgb(255, 212, 212);\n    font-weight: bold;\n}\n\n#content #projects {\n    border: 2px solid purple;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n    max-width: 25%;\n}\n\n#content #todos {\n    border: 2px solid green;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\n.todo-item {\n    margin: 20px;\n    border: 1px solid slategray;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.todo-item-left {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-item input {\n    margin-left: auto;\n    margin-right: 100px;\n    margin-top: 80px;\n    -webkit-appearance: none;\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 20px;\n}\n\n.todo-item input:hover {\n    background-color: rgb(195, 195, 195);\n}\n\n#footer {\n    border: 1px solid green;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,wBAAwB;IACxB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    overflow: hidden;\n}\n\n#header {\n    border: 1px solid black;\n    padding: 20px;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: flex-start;\n}\n\n#content {\n    border: 1px solid red;\n    display: flex;\n    flex: 1 1 auto;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project {\n    min-width: 100%;\n    min-height:75px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3em;\n}\n\n.project:hover {\n    background-color: rgb(221, 221, 221);\n}\n\n.active {\n    background-color: rgb(255, 212, 212);\n    font-weight: bold;\n}\n\n#content #projects {\n    border: 2px solid purple;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n    max-width: 25%;\n}\n\n#content #todos {\n    border: 2px solid green;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\n.todo-item {\n    margin: 20px;\n    border: 1px solid slategray;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.todo-item-left {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-item input {\n    margin-left: auto;\n    margin-right: 100px;\n    margin-top: 80px;\n    -webkit-appearance: none;\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 20px;\n}\n\n.todo-item input:hover {\n    background-color: rgb(195, 195, 195);\n}\n\n#footer {\n    border: 1px solid green;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "projectForm": () => (/* binding */ projectForm),
/* harmony export */   "itemForm": () => (/* binding */ itemForm)
/* harmony export */ });
const projectForm = (addProject) => {
    
    // create a form container
    const container = document.createElement('div')
    container.classList.add('projectFormContainer')

    const formTitle = document.createElement('h2')
    formTitle.textContent = "New Project"

    // create the form itself
    const form = document.createElement('form')
    form.classList.add('projectForm')

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'E.g., Inbox')
    title.setAttribute('required', 'true')
    title.classList('projectTitle')

    // submit button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = "Add project"
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func that is supplied by the interface
        addProject()
        
        // remove the form from the screen
        document.removeChild(e.parentNode.parentNode)
    })

    form.appendChild(title)
    form.appendChild(submit)
    
    container.appendChild(formTitle)
    container.appendChild(form)

    document.appendChild(container);
}


const itemForm = (addItem) => {
    
    // create the form container
    const container = document.createElement('div')
    container.classList.add('itemFormContainer')

    const formTitle = document.createElement('h2')
    formTitle.textContent = "New Item"

    // create the form itself
    const form = document.createElement('form')
    form.classList.add('itemForm')

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'E.g., Call Dad')
    title.setAttribute('required', 'true')
    title.classList('itemTitle')

    const description = document.createElement('input')
    description.setAttribute('type', 'text')
    description.setAttribute('placeholder', 'E.g., And ask him about the sunset.')
    description.setAttribute('required', 'true')
    description.classList('itemDescription')

    const due = document.createElement('input')
    due.setAttribute('type', 'textarea')
    due.setAttribute('placeholder', 'E.g., Tonight')
    due.setAttribute('required', 'true')
    due.classList('itemDue')

    const priority = document.createElement('input')
    priority.setAttribute('type', 'number')
    priority.setAttribute('min', '1')
    priority.setAttribute('max', '4')
    priority.setAttribute('value', '1')
    priority.setAttribute('required', 'true')
    priority.classList('itemPriority')

    // the button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = "Add item"
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func supplied by the interface
        addItem()
        
        // remove the form from the screen
        document.removeChild(e.parentNode.parentNode)
    })

    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(due)
    form.appendChild(priority)
    form.appendChild(submit)
    
    container.appendChild(formTitle)
    container.appendChild(form)

    document.appendChild(container);
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
    const item1 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Ben', 'About work', 'Jan 29th', '3')
    const item2 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Jane', 'About school', 'Jan 28th', '1')
    const item3 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Vadym', 'About family', 'Jan 27th', '2')
    defaultProject.addItem(item1)
    defaultProject.addItem(item2)
    defaultProject.addItem(item3)
    // A list of projectFactory objects, which are basically lists of items.
    // So, it's a 2D list.
    let _projectList = [defaultProject]

    // Click on a particular proj, loop thru its items, and create an elem for each
    const _showItems = (e) => {
        const itemContainer = document.getElementById('todos')
        const projID = e.target.dataset.index
        const project = _projectList[projID]
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            console.log(itemElem.lastChild)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
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
                const itemContainer = document.getElementById('todos')
                const items = proj.getItems()
                items.forEach((item, i) => {
                    const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
                    itemElem.lastChild.addEventListener('click', removeItem)
                    itemContainer.appendChild(itemElem)
                })
            }
            projContainer.appendChild(projectElem)
        })
    }

    const makeProject = () => {
        // Make a project internally
        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.projectForm)(() => {
            const projectTitle = document.querySelector('.projectTitle').value;
            const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(projectTitle)
            _projectList.push(project)
        })

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
        const itemContainer = document.getElementById('todos')
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
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
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

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
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    const makeItem = () => {
        // Find active project
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

        // Ask user about item's props
        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.itemForm)(() => {
            const itemTitle = document.querySelector('.itemTitle').value;
            const itemDescription = document.querySelector('.itemDescription').value;
            const itemDue = document.querySelector('.itemDue').value;
            const itemPriority = document.querySelector('.itemPriority').value;

            // Make an item and add it to the project
            const item = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)(title, description, dueDate, priority)
            project.addItem(item)
        })


        // Make item's DOM elem and add it to the page
        // Use last item's id + 1 as this new item's id
        const itemContainer = document.getElementById('todos')
        let itemID = 0
        if (itemContainer.lastChild) {
            itemID = itemContainer.lastChild.id + 1
        }
        const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, itemID)
        itemElem.lastChild.addEventListener('click', removeItem)
        itemContainer.appendChild(itemElem)
    }

    return {
        makeProject,
        removeProject,
        makeItem,
        removeItem,
        makeProjectActive,
        showProjects,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

// Ok, there's a lot to say.

// First of all, I have a lot of repetitive code.
// Almost all of the functions have parts that repeat each other.
// That is easily fixable.

// Secondly, I can customize CSS properly.

// Thirdly, I can make proper forms to make projects and items.

// Fourthly, it would be cool to do some input validation.

// Fifthly, it would be nice to be able to edit your projects and items.

// If there's no project name given, it shouldn't be created.
// Ultimately, ^ comes down to input validation

// Store projects in localStorage

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
const itemFactory = (title, description, dueDate, priority) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;

    const setTitle = (newTitle) => _title = newTitle;
    const setDescription = (newDescription) => _description = newDescription;
    const setDueDate = (newDate) => _dueDate = newDate;
    const setPriority = (newPriority) => _priority = newPriority;

    return { getTitle, getDescription, getDueDate, getPriority,
             setTitle, setDescription, setDueDate, setPriority }

};

const itemDOM = (() => {
    const createItem = (item, i) => {
        const container = document.createElement('div');
        container.classList.add('todo-item');
        container.id = i;

        const todoLeft = document.createElement('div');
        todoLeft.classList.add("todo-item-left");

        const title = document.createElement('p');
        title.classList.add('todo-item-title');
        title.textContent = item.getTitle();
        todoLeft.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('todo-item-description');
        description.textContent = item.getDescription();
        todoLeft.appendChild(description);

        const dueDate = document.createElement('p');
        dueDate.classList.add('todo-item-duedate');
        dueDate.textContent = item.getDueDate();
        todoLeft.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.classList.add('todo-item-priority');
        priority.textContent = item.getPriority();
        todoLeft.appendChild(priority);

        container.appendChild(todoLeft)

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        container.appendChild(checkbox);

        return container;
    }

    const deleteItem = (id) => {
        const todos = document.getElementById('todos');
        const item = document.getElementById(id);
        todos.removeChild(item);
    }

    return { createItem, deleteItem }

})();



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
    const _name = name;
    const _itemList = [];

    const getName = () => _name;
    const setName = (newName) => _name = newName;

    const getItems = () => _itemList;
    const addItem = (item) => _itemList.push(item);
    const removeItem = (position) => _itemList.splice(position, 1);

    return { getName, setName, getItems, addItem, removeItem }
};

const projectDOM = (() => {
    const createProject = (project, id) => {
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





// const item1 = itemFactory('Call Ben', 'About work', 'Jan 29th', '3');
// const item2 = itemFactory('Call Jane', 'About school', 'Jan 28th', '1');
// const item3 = itemFactory('Call Vadym', 'About family', 'Jan 27th', '2');

// const proj1 = projectFactory('Default');
// const projectContainer = document.getElementById('projects');
// const projElem = projectDOM.createProject(proj1);
// projectContainer.appendChild(projElem);

// const proj2 = projectFactory('Another one');
// const projElem2 = projectDOM.createProject(proj2);
// projectContainer.appendChild(projElem2);

// const itemContainer = document.getElementById('todos');
// [item1, item2, item3].forEach((item, i) => {
//     const itemElem = itemDOM.createItem(item, i);
//     itemContainer.appendChild(itemElem);
// });

// itemDOM.deleteItem(2);

window.onload = _interface__WEBPACK_IMPORTED_MODULE_3__["default"].showProjects;

const createProjBtn = document.getElementById('create-project');
createProjBtn.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_3__["default"].makeProject);

const createItemBtn = document.getElementById('create-item');
createItemBtn.addEventListener('click', _interface__WEBPACK_IMPORTED_MODULE_3__["default"].makeItem);

const removeProjectBtn = document.getElementById('remove-project');
removeProjectBtn.addEventListener('click', _interface__WEBPACK_IMPORTED_MODULE_3__["default"].removeProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQzBCO0FBQ1M7QUFDekI7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBLGdCQUFnQiwrREFBaUI7O0FBRWpDO0FBQ0Esd0NBQXdDLDhEQUFnQjs7QUFFeEQ7QUFDQSx3Q0FBd0MsMkRBQWE7O0FBRXJEO0FBQ0EsMkNBQTJDLGdFQUFrQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDo3NXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMTIsIDIxMik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29udGVudCAjcHJvamVjdHMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG59XFxuXFxuI2NvbnRlbnQgI3RvZG9zIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b2RvLWl0ZW0tbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWl0ZW0gaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udG9kby1pdGVtIGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTk1LCAxOTUpO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDo3NXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMTIsIDIxMik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29udGVudCAjcHJvamVjdHMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG59XFxuXFxuI2NvbnRlbnQgI3RvZG9zIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b2RvLWl0ZW0tbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWl0ZW0gaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udG9kby1pdGVtIGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTk1LCAxOTUpO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBwcm9qZWN0Rm9ybSA9IChhZGRQcm9qZWN0KSA9PiB7XG4gICAgXG4gICAgLy8gY3JlYXRlIGEgZm9ybSBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybUNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG5cbiAgICAvLyBjcmVhdGUgdGhlIGZvcm0gaXRzZWxmXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgSW5ib3gnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgdGl0bGUuY2xhc3NMaXN0KCdwcm9qZWN0VGl0bGUnKVxuXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBwcmV2ZW50cyBwYWdlIHJlZnJlc2ggYW5kIFwiY2xvc2VzXCIgdGhlIGZvcm1cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIHByb2plY3RcIlxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIC8vIGZ1bmMgdGhhdCBpcyBzdXBwbGllZCBieSB0aGUgaW50ZXJmYWNlXG4gICAgICAgIGFkZFByb2plY3QoKVxuICAgICAgICBcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBmb3JtIGZyb20gdGhlIHNjcmVlblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVDaGlsZChlLnBhcmVudE5vZGUucGFyZW50Tm9kZSlcbiAgICB9KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgZG9jdW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuXG5leHBvcnQgY29uc3QgaXRlbUZvcm0gPSAoYWRkSXRlbSkgPT4ge1xuICAgIFxuICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtRm9ybUNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgSXRlbVwiXG5cbiAgICAvLyBjcmVhdGUgdGhlIGZvcm0gaXRzZWxmXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaXRlbUZvcm0nKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgQ2FsbCBEYWQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgdGl0bGUuY2xhc3NMaXN0KCdpdGVtVGl0bGUnKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgQW5kIGFzayBoaW0gYWJvdXQgdGhlIHN1bnNldC4nKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0KCdpdGVtRGVzY3JpcHRpb24nKVxuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0UuZy4sIFRvbmlnaHQnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKVxuICAgIGR1ZS5jbGFzc0xpc3QoJ2l0ZW1EdWUnKVxuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtYXgnLCAnNCcpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcxJylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKVxuICAgIHByaW9yaXR5LmNsYXNzTGlzdCgnaXRlbVByaW9yaXR5JylcblxuICAgIC8vIHRoZSBidXR0b24gcHJldmVudHMgcGFnZSByZWZyZXNoIGFuZCBcImNsb3Nlc1wiIHRoZSBmb3JtXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBpdGVtXCJcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBmdW5jIHN1cHBsaWVkIGJ5IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgYWRkSXRlbSgpXG4gICAgICAgIFxuICAgICAgICAvLyByZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgc2NyZWVuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUNoaWxkKGUucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgZG9jdW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn0iLCJpbXBvcnQgeyBpdGVtRmFjdG9yeSwgaXRlbURPTSB9IGZyb20gJy4vaXRlbXMnXG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgcHJvamVjdERPTSB9IGZyb20gJy4vcHJvamVjdHMnXG5pbXBvcnQgeyBwcm9qZWN0Rm9ybSwgaXRlbUZvcm0gfSBmcm9tIFwiLi9mb3Jtc1wiXG5cbmNvbnN0IFRvZG8gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ0RlZmF1bHQnKVxuICAgIGNvbnN0IGl0ZW0xID0gaXRlbUZhY3RvcnkoJ0NhbGwgQmVuJywgJ0Fib3V0IHdvcmsnLCAnSmFuIDI5dGgnLCAnMycpXG4gICAgY29uc3QgaXRlbTIgPSBpdGVtRmFjdG9yeSgnQ2FsbCBKYW5lJywgJ0Fib3V0IHNjaG9vbCcsICdKYW4gMjh0aCcsICcxJylcbiAgICBjb25zdCBpdGVtMyA9IGl0ZW1GYWN0b3J5KCdDYWxsIFZhZHltJywgJ0Fib3V0IGZhbWlseScsICdKYW4gMjd0aCcsICcyJylcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRJdGVtKGl0ZW0xKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEl0ZW0oaXRlbTIpXG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMylcbiAgICAvLyBBIGxpc3Qgb2YgcHJvamVjdEZhY3Rvcnkgb2JqZWN0cywgd2hpY2ggYXJlIGJhc2ljYWxseSBsaXN0cyBvZiBpdGVtcy5cbiAgICAvLyBTbywgaXQncyBhIDJEIGxpc3QuXG4gICAgbGV0IF9wcm9qZWN0TGlzdCA9IFtkZWZhdWx0UHJvamVjdF1cblxuICAgIC8vIENsaWNrIG9uIGEgcGFydGljdWxhciBwcm9qLCBsb29wIHRocnUgaXRzIGl0ZW1zLCBhbmQgY3JlYXRlIGFuIGVsZW0gZm9yIGVhY2hcbiAgICBjb25zdCBfc2hvd0l0ZW1zID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qSURdXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtRWxlbS5sYXN0Q2hpbGQpXG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBfZGVsZXRlSXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICB3aGlsZSAoaXRlbUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGl0ZW1Db250YWluZXIubGFzdENoaWxkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIF9wcm9qZWN0TGlzdCwgZ2l2ZSBlYWNoIHByb2ogZWxlbSBhbiBJRCBhbmQgYXBwZW5kIHRvIGNvbnRhaW5lci5cbiAgICBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBfcHJvamVjdExpc3QuZm9yRWFjaCgocHJvaiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsZW0gPSBwcm9qZWN0RE9NLmNyZWF0ZVByb2plY3QocHJvaiwgaSlcblxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgZmlyc3QgcHJvamVjdCBhY3RpdmUgYW5kIHNob3cgaXRzIGl0ZW1zXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VQcm9qZWN0QWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvai5nZXRJdGVtcygpXG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgcHJvamVjdCBpbnRlcm5hbGx5XG4gICAgICAgIHByb2plY3RGb3JtKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpXG4gICAgICAgICAgICBfcHJvamVjdExpc3QucHVzaChwcm9qZWN0KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIE1ha2UgYWxsIHByb2plY3RzIGluYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgcHJvamVjdCdzIGlkIGFuZCBtYWtlIGEgcHJvamVjdCBET01cbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGxldCBwcm9qSUQgPSAwXG4gICAgICAgIGlmIChwcm9qQ29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgcHJvaklEID0gK3Byb2pDb250YWluZXIubGFzdENoaWxkLmRhdGFzZXQuaW5kZXggKyAxXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBwcm9qZWN0RE9NLmNyZWF0ZVByb2plY3QocHJvamVjdCwgcHJvaklEKVxuICAgICAgICBwcm9qRWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBwcm9qRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VQcm9qZWN0QWN0aXZlKVxuICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pFbGVtKVxuXG4gICAgICAgIC8vIERlbGV0ZSBpdGVtcyBmcm9tIHByZXYgcHJvalxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIEZpbmQgYWN0aXZlIHByb2osIGRlbGV0ZSBpdHMgRE9NIGFuZCBwdXNoIG91dCBvZiBfcHJvamVjdExpc3QsXG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvai5kYXRhc2V0LmluZGV4XG4gICAgICAgIHByb2plY3RET00uZGVsZXRlUHJvamVjdChwcm9qSUQpXG4gICAgICAgIF9wcm9qZWN0TGlzdC5zcGxpY2UocHJvaklELCAxKVxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuXG4gICAgICAgIC8vIE1ha2UgdGhlIGxhc3QgcHJvamVjdCBhY3RpdmVcbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvakNvbnRhaW5lci5sYXN0Q2hpbGRcbiAgICAgICAgcHJvamVjdEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICAvLyBTaG93IGFjdGl2ZSBwcm9qZWN0J3MgaXRlbXNcbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdEVsZW0uZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2plY3RJRF1cbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZSBhbmQgYWN0aXZhdGUgdGhpcyBwcm9qZWN0XG4gICAgY29uc3QgbWFrZVByb2plY3RBY3RpdmUgPSAoZSkgPT4ge1xuICAgICAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcblxuICAgICAgICAvLyBBY3RpdmF0ZSB0aGlzIHByb2plY3RcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICAvLyBEZWxldGUgaXRlbXMgZnJvbSBwcmV2IHByb2pcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcblxuICAgICAgICAvLyBTaG93IGl0ZW1zIGZvciB0aGlzIHByb2plY3RcbiAgICAgICAgX3Nob3dJdGVtcyhlKVxuICAgIH1cblxuICAgIC8vIEZpbmQgYW4gaXRlbSdzIGlkLCBkZWxldGUgaXRzIERPTSBhbmQgcHVzaCBvdXQgb2YgX2l0ZW1MaXN0XG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChlKSA9PiB7XG4gICAgICAgIC8vIEZpbmQgYSBwcm9qZWN0J3MgaWQgYW5kIGl0cyBvYmogaW4gX3Byb2plY3RMaXN0XG4gICAgICAgIGNvbnN0IHByb2pFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IHByb2pFbGVtLmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qSURdXG5cbiAgICAgICAgLy8gSXRlbSdzIElEXG4gICAgICAgIGNvbnN0IGl0ZW1JRCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWRcblxuICAgICAgICAvLyBEZWxldGUgaXRlbSBmcm9tIHByb2plY3QgYW5kIGZyb20gRE9NXG4gICAgICAgIC8vIChJIGNob3NlIHRvIHJlZnJlc2ggZWxlbWVudHMgdG8gZ2l2ZSB0aGVtIGFwcHJvcHJpYXRlIElEcylcbiAgICAgICAgcHJvamVjdC5yZW1vdmVJdGVtKGl0ZW1JRClcbiAgICAgICAgLy8gaXRlbURPTS5kZWxldGVJdGVtKGl0ZW1JRCk7XG5cbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSXRlbSA9ICgpID0+IHtcbiAgICAgICAgLy8gRmluZCBhY3RpdmUgcHJvamVjdFxuICAgICAgICBjb25zdCBwcm9qRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBwcm9qRWxlbS5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuXG4gICAgICAgIC8vIEFzayB1c2VyIGFib3V0IGl0ZW0ncyBwcm9wc1xuICAgICAgICBpdGVtRm9ybSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbVRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbURlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1EdWUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtUHJpb3JpdHknKS52YWx1ZTtcblxuICAgICAgICAgICAgLy8gTWFrZSBhbiBpdGVtIGFuZCBhZGQgaXQgdG8gdGhlIHByb2plY3RcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICAgICAgcHJvamVjdC5hZGRJdGVtKGl0ZW0pXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBNYWtlIGl0ZW0ncyBET00gZWxlbSBhbmQgYWRkIGl0IHRvIHRoZSBwYWdlXG4gICAgICAgIC8vIFVzZSBsYXN0IGl0ZW0ncyBpZCArIDEgYXMgdGhpcyBuZXcgaXRlbSdzIGlkXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBsZXQgaXRlbUlEID0gMFxuICAgICAgICBpZiAoaXRlbUNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGl0ZW1JRCA9IGl0ZW1Db250YWluZXIubGFzdENoaWxkLmlkICsgMVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGl0ZW1JRClcbiAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgbWFrZUl0ZW0sXG4gICAgICAgIHJlbW92ZUl0ZW0sXG4gICAgICAgIG1ha2VQcm9qZWN0QWN0aXZlLFxuICAgICAgICBzaG93UHJvamVjdHMsXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvXG5cbi8vIE9rLCB0aGVyZSdzIGEgbG90IHRvIHNheS5cblxuLy8gRmlyc3Qgb2YgYWxsLCBJIGhhdmUgYSBsb3Qgb2YgcmVwZXRpdGl2ZSBjb2RlLlxuLy8gQWxtb3N0IGFsbCBvZiB0aGUgZnVuY3Rpb25zIGhhdmUgcGFydHMgdGhhdCByZXBlYXQgZWFjaCBvdGhlci5cbi8vIFRoYXQgaXMgZWFzaWx5IGZpeGFibGUuXG5cbi8vIFNlY29uZGx5LCBJIGNhbiBjdXN0b21pemUgQ1NTIHByb3Blcmx5LlxuXG4vLyBUaGlyZGx5LCBJIGNhbiBtYWtlIHByb3BlciBmb3JtcyB0byBtYWtlIHByb2plY3RzIGFuZCBpdGVtcy5cblxuLy8gRm91cnRobHksIGl0IHdvdWxkIGJlIGNvb2wgdG8gZG8gc29tZSBpbnB1dCB2YWxpZGF0aW9uLlxuXG4vLyBGaWZ0aGx5LCBpdCB3b3VsZCBiZSBuaWNlIHRvIGJlIGFibGUgdG8gZWRpdCB5b3VyIHByb2plY3RzIGFuZCBpdGVtcy5cblxuLy8gSWYgdGhlcmUncyBubyBwcm9qZWN0IG5hbWUgZ2l2ZW4sIGl0IHNob3VsZG4ndCBiZSBjcmVhdGVkLlxuLy8gVWx0aW1hdGVseSwgXiBjb21lcyBkb3duIHRvIGlucHV0IHZhbGlkYXRpb25cblxuLy8gU3RvcmUgcHJvamVjdHMgaW4gbG9jYWxTdG9yYWdlIiwiY29uc3QgaXRlbUZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBfcHJpb3JpdHk7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RGF0ZSkgPT4gX2R1ZURhdGUgPSBuZXdEYXRlO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksXG4gICAgICAgICAgICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSB9XG5cbn07XG5cbmNvbnN0IGl0ZW1ET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUl0ZW0gPSAoaXRlbSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgICAgICBjb250YWluZXIuaWQgPSBpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9MZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW0tbGVmdFwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5nZXRUaXRsZSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1kZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgdG9kb0xlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWR1ZWRhdGUnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RHVlRGF0ZSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLXByaW9yaXR5Jyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gaXRlbS5nZXRQcmlvcml0eSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MZWZ0KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJyk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIHRvZG9zLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUl0ZW0sIGRlbGV0ZUl0ZW0gfVxuXG59KSgpO1xuXG5leHBvcnQgeyBpdGVtRmFjdG9yeSwgaXRlbURPTSB9IiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gbmFtZTtcbiAgICBjb25zdCBfaXRlbUxpc3QgPSBbXTtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBfbmFtZTtcbiAgICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IF9uYW1lID0gbmV3TmFtZTtcblxuICAgIGNvbnN0IGdldEl0ZW1zID0gKCkgPT4gX2l0ZW1MaXN0O1xuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4gX2l0ZW1MaXN0LnB1c2goaXRlbSk7XG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChwb3NpdGlvbikgPT4gX2l0ZW1MaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG5cbiAgICByZXR1cm4geyBnZXROYW1lLCBzZXROYW1lLCBnZXRJdGVtcywgYWRkSXRlbSwgcmVtb3ZlSXRlbSB9XG59O1xuXG5jb25zdCBwcm9qZWN0RE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QsIGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaWQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1pbmRleD1cIiR7aWR9XCJdYCk7XG4gICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3QgfVxufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RET00gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGl0ZW1GYWN0b3J5LCBpdGVtRE9NIH0gZnJvbSBcIi4vaXRlbXNcIjtcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0RE9NIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG4vLyBjb25zdCBpdGVtMSA9IGl0ZW1GYWN0b3J5KCdDYWxsIEJlbicsICdBYm91dCB3b3JrJywgJ0phbiAyOXRoJywgJzMnKTtcbi8vIGNvbnN0IGl0ZW0yID0gaXRlbUZhY3RvcnkoJ0NhbGwgSmFuZScsICdBYm91dCBzY2hvb2wnLCAnSmFuIDI4dGgnLCAnMScpO1xuLy8gY29uc3QgaXRlbTMgPSBpdGVtRmFjdG9yeSgnQ2FsbCBWYWR5bScsICdBYm91dCBmYW1pbHknLCAnSmFuIDI3dGgnLCAnMicpO1xuXG4vLyBjb25zdCBwcm9qMSA9IHByb2plY3RGYWN0b3J5KCdEZWZhdWx0Jyk7XG4vLyBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4vLyBjb25zdCBwcm9qRWxlbSA9IHByb2plY3RET00uY3JlYXRlUHJvamVjdChwcm9qMSk7XG4vLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pFbGVtKTtcblxuLy8gY29uc3QgcHJvajIgPSBwcm9qZWN0RmFjdG9yeSgnQW5vdGhlciBvbmUnKTtcbi8vIGNvbnN0IHByb2pFbGVtMiA9IHByb2plY3RET00uY3JlYXRlUHJvamVjdChwcm9qMik7XG4vLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pFbGVtMik7XG5cbi8vIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKTtcbi8vIFtpdGVtMSwgaXRlbTIsIGl0ZW0zXS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4vLyAgICAgY29uc3QgaXRlbUVsZW0gPSBpdGVtRE9NLmNyZWF0ZUl0ZW0oaXRlbSwgaSk7XG4vLyAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSk7XG4vLyB9KTtcblxuLy8gaXRlbURPTS5kZWxldGVJdGVtKDIpO1xuXG53aW5kb3cub25sb2FkID0gVG9kby5zaG93UHJvamVjdHM7XG5cbmNvbnN0IGNyZWF0ZVByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QnKTtcbmNyZWF0ZVByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRvZG8ubWFrZVByb2plY3QpO1xuXG5jb25zdCBjcmVhdGVJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1pdGVtJyk7XG5jcmVhdGVJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVG9kby5tYWtlSXRlbSk7XG5cbmNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLXByb2plY3QnKTtcbnJlbW92ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUb2RvLnJlbW92ZVByb2plY3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==