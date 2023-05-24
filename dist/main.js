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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset */\n* {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n/* Reset */\n\n/* Body and :root */\n:root {\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    background-color: #c9c9c9;\n}\n/* Body and :root */\n\n/* Header */\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem 1.5rem 1rem 1.5rem;\n    background-color: whitesmoke;\n\n    margin-bottom: 10vh;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.281);\n}\n\nheader .logo {\n    font-size: 2.5rem;\n    font-weight: bold;\n}\n\n.links {\n    list-style: none;\n}\n\nheader .links {\n    display: flex;\n    align-items: center;\n}\n\nheader .links li {\n    font-size: 1rem;\n    padding: 1rem;\n    margin-left: 1rem;\n    border-radius: 5px;\n}\n\nheader .links li:hover {\n    background-color: #00000050;\n}\n/* Header */\n\n/* Board */\n#board {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n\n    background-color: whitesmoke;\n    padding: 1rem;\n    border-radius: 15px;\n}\n/* Board */\n\n/* Cells */\n.cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; /* Added to stack the <p> elements vertically */\n    flex-wrap: wrap;\n\n    width: clamp(60px, 7.7vw, 200px);\n    height: clamp(60px, 7.7vw, 200px);\n    word-break: break-all;\n    font-size: 2.5vw;\n}\n\n.cell:hover {\n    cursor: pointer;\n}\n\n.all-sides {\n    border: 4px solid rgb(36, 36, 36);\n}\n\n.right {\n    border-right: 8px solid rgb(36, 36, 36);\n}\n\n.right-1 {\n    border-right: 4px solid rgb(36, 36, 36);\n}\n\n.left {\n    border-left: 8px solid rgb(36, 36, 36);\n}\n\n.left-1 {\n    border-left: 4px solid rgb(36, 36, 36);\n}\n\n.top {\n    border-top: 8px solid rgb(36, 36, 36);\n}\n\n.top-1 {\n    border-top: 4px solid rgb(36, 36, 36);\n}\n\n.bottom {\n    border-bottom: 8px solid rgb(36, 36, 36);\n}\n\n.bottom-1 {\n    border-bottom: 4px solid rgb(36, 36, 36);\n}\n/* Cells */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,UAAU;AACV;IACI,UAAU;IACV,SAAS;IACT,SAAS;IACT,sBAAsB;IACtB,2BAA2B;AAC/B;AACA,UAAU;;AAEV,mBAAmB;AACnB;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;AAC7B;AACA,mBAAmB;;AAEnB,WAAW;AACX;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,gCAAgC;IAChC,4BAA4B;;IAE5B,mBAAmB;IACnB,gDAAgD;AACpD;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;AACA,WAAW;;AAEX,UAAU;AACV;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;;IAElC,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;AACvB;AACA,UAAU;;AAEV,UAAU;AACV;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB,EAAE,+CAA+C;IACvE,eAAe;;IAEf,gCAAgC;IAChC,iCAAiC;IACjC,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;AACA,UAAU","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n/* Reset */\n* {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n/* Reset */\n\n/* Body and :root */\n:root {\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    background-color: #c9c9c9;\n}\n/* Body and :root */\n\n/* Header */\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem 1.5rem 1rem 1.5rem;\n    background-color: whitesmoke;\n\n    margin-bottom: 10vh;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.281);\n}\n\nheader .logo {\n    font-size: 2.5rem;\n    font-weight: bold;\n}\n\n.links {\n    list-style: none;\n}\n\nheader .links {\n    display: flex;\n    align-items: center;\n}\n\nheader .links li {\n    font-size: 1rem;\n    padding: 1rem;\n    margin-left: 1rem;\n    border-radius: 5px;\n}\n\nheader .links li:hover {\n    background-color: #00000050;\n}\n/* Header */\n\n/* Board */\n#board {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n\n    background-color: whitesmoke;\n    padding: 1rem;\n    border-radius: 15px;\n}\n/* Board */\n\n/* Cells */\n.cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; /* Added to stack the <p> elements vertically */\n    flex-wrap: wrap;\n\n    width: clamp(60px, 7.7vw, 200px);\n    height: clamp(60px, 7.7vw, 200px);\n    word-break: break-all;\n    font-size: 2.5vw;\n}\n\n.cell:hover {\n    cursor: pointer;\n}\n\n.all-sides {\n    border: 4px solid rgb(36, 36, 36);\n}\n\n.right {\n    border-right: 8px solid rgb(36, 36, 36);\n}\n\n.right-1 {\n    border-right: 4px solid rgb(36, 36, 36);\n}\n\n.left {\n    border-left: 8px solid rgb(36, 36, 36);\n}\n\n.left-1 {\n    border-left: 4px solid rgb(36, 36, 36);\n}\n\n.top {\n    border-top: 8px solid rgb(36, 36, 36);\n}\n\n.top-1 {\n    border-top: 4px solid rgb(36, 36, 36);\n}\n\n.bottom {\n    border-bottom: 8px solid rgb(36, 36, 36);\n}\n\n.bottom-1 {\n    border-bottom: 4px solid rgb(36, 36, 36);\n}\n/* Cells */\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/agent.js":
/*!**********************!*\
  !*** ./src/agent.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Agent": () => (/* binding */ Agent)
/* harmony export */ });
/* harmony import */ var _knowledgebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledgebase */ "./src/knowledgebase.js");

// Location [x, y]
class Agent {
    constructor(world) {
        this.world = world
        this.kb = new _knowledgebase__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBase(this.world.cells)
        this.location = this.world.agentStartingLocation
        this.currentCell = this.world.getCell(this.location)
        this.updateAgent()
        this.updateKB()
    }

    updateAgent() {
        this.adjacentCells = this.world.getAdjacentCells(this.location)
        this.breeze = this.world.containsBreeze(this.currentCell)
        this.fart = this.world.containsFart(this.currentCell)
    }
    solve() {
        while (!this.world.goalReached || this.world.agentKilled) {
            // Take the adjacent cells
            // From adjacent cells, determine if it is visited or not
            // From univisited adjacent cells, return the safe cells

            // To determine the safe cells:
            // 1. If the current cell does not contain stench, it is safe
            // 2. If the current cell does not contain breeze, it is safe
            // 3. 


            // if (this.kb.safeCells.length > 0) {
            //     // move to the first safe cell
            //     let firstSafeCell = safeCells[0]
            //     this.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))
            //     this.updateKB()
            // }
            // else {
            //     if (this.kb.wumpusNearby) {
            //         this.shoot(this.kb.wumpusLocation)
            //     } else {
            //         // move to the first least dangerous unsafe cell
            //     }
            // }
        }
    }

    // Returns div cells
    // I used propositional logic to determine if the cell is safe or not
    getSafeCells() {
        // return this.kb.safeCells
    }

    // this.kb.update(cell, adjecentCells, stench = false, breeze = false)
    updateKB() {
        this.kb.update(this.currentCell, this.adjacentCells, this.breeze, this.fart)
    }

    move(direction) {
        let newLocation = []
        if (direction === 'u') {
            newLocation = [this.location[0], this.location[1] - 1]
        }
        else if (direction === 'd') {
            newLocation = [this.location[0], this.location[1] + 1]
        }
        else if (direction === 'u') {
            newLocation = [this.location[0] - 1, this.location[1]]
        }
        else if (direction === 'r') {
            newLocation = [this.location[0] + 1, this.location[1]]
        }
        this.moveAgentIcon(newLocation)
        this.location = newLocation
        // console.log(this.location)
        this.currentCell = this.world.getCell(this.location)
        this.updateAgent()
    }

    moveToCoord(x, y) {
        let newLocation = [x, y]
        this.moveAgentIcon(newLocation)
        this.location = newLocation
        this.currentCell = this.world.getCell(this.location)
        this.updateAgent()
    }

    moveAgentIcon(newLocation) {
        this.world.cells.forEach(cell => {
            if (parseInt(cell.dataset.row) === newLocation[0] && parseInt(cell.dataset.column) == newLocation[1]) {
                this.world.removeAgent(this.location[0], this.location[1])
                this.world.addAgent(newLocation[0], newLocation[1])
            }
        })
    }

}



/***/ }),

/***/ "./src/knowledgebase.js":
/*!******************************!*\
  !*** ./src/knowledgebase.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeBase": () => (/* binding */ KnowledgeBase)
/* harmony export */ });
class Cell {
    constructor(cell) {
        this.divCell = cell
        this.safeCells = []
    }
}

class KnowledgeBase {
    constructor(cells) {
        // Need to make it an array cuz NodeList soyboy af
        this.cellsArray = Array.from(cells) // This will contain score property
        this.unvisited = this.cellsArray
        this.visited = []
        this.safe = []
        this.possiblePit = []
        this.possibleWumpus = []
    }

    update(cell, adjacentCells, breeze, fart) {
        // Visit the cell
        this.unvisited = this.removeUnvisited(cell)
        // console.log(this.unvisited)
        // console.log(cell)
        // Create a cell class from cell, add it to visited array
        let newCell = new Cell(cell)
        this.visited.push(newCell)
        let newCellSafeCells = this.getSafeCells(adjacentCells, breeze, fart)
        // From each of the adjacent cells, determine the safe cells
    }

    removeUnvisited(cell) {
        return this.unvisited.filter(currentCell => {
            if (parseInt(currentCell.dataset.column) === parseInt(cell.dataset.column) && parseInt(currentCell.dataset.row) === parseInt(cell.dataset.row)) {
                return false
            }
            return true
        })
    }

    // // Add the cell as visited and update the safeCells
    // update(cell, adjacentCells, percept, world) {
    //     // Add the current cell as visited
    //     this.visitedCells.push(cell)
    //     // Update the safeCells
    //     // Add the adjacent cells in safeCells if it is safe
    //     adjacentCells.forEach(adjacentCell => {
    //         if (!percept.breeze && !percept.fart) {
    //             this.safeCells.push(adjacentCell)
    //         } 
    //         if (percept.fart) {
    //             // Check the adjacent cells of each of the adjacent cells
    //             let coord = world.getLocation(adjacentCell)
    //             let adjacentCellsofAdjacentCell = world.getAdjacentCells(coord)

    //             let adjacentVisited = []
    //             adjacentCellsofAdjacentCell.forEach(cell => {
    //                 // Check if there's a visited cell of each of the adjacent cells
    //                 if (this.isVisited(cell)) {
    //                     adjacentVisited.push(cell)
    //                 }
    //             })
                
    //             // Check if one of the visited adjacent cell contains a fart too

    //             // Set the danger level of this adjacent cell corresponding to the number of farts
    //             // If visited adjacent cell does not contain fart, then it is safe.
    //         } 
    //         if (percept.fart) {
    //             // Similar to fart
    //         }
    //     })
    // }

    isVisited(cell) {
        // return this.unvisitedCells.includes(cell)

    }
}



/***/ }),

/***/ "./src/world.js":
/*!**********************!*\
  !*** ./src/world.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WumpusWorld": () => (/* binding */ WumpusWorld)
/* harmony export */ });
class WumpusWorld {
    constructor(cells) {
        this.cells = cells
        this.agentStartingLocation = []
    }

    // Add wumpus and stench around it
    addWumpus(posX, posY) {
        this.cells.forEach(cell => {
            //console.log(parseInt(cell.dataset.row), cell.dataset.column)
            // Add the wumpus
            if (parseInt(cell.dataset.row) === posY && parseInt(cell.dataset.column) === posX) {
                cell.innerText += '👹'
            }
            // Add the stench
            if (parseInt(cell.dataset.row) === posY) {
                if (parseInt(cell.dataset.column) === (posX - 1)) {
                    if (!this.containsFart(cell)) {
                        cell.innerText += '💩'
                    }
                }
                else if (parseInt(cell.dataset.column) === (posX + 1)) {
                    if (!this.containsFart(cell)) {
                        cell.innerText += '💩'
                    }
                }
            }

            else if (parseInt(cell.dataset.column) === posX) {
                if (parseInt(cell.dataset.row) === (posY - 1)) {
                    if (!this.containsFart(cell)) {
                        cell.innerText += '💩'
                    }
                }
                else if (parseInt(cell.dataset.row) === (posY + 1)) {
                    if (!this.containsFart(cell)) {
                        cell.innerText += '💩'
                    }
                }
            }
        })
    }
  
    // Add pit and breeze around it
    addPit(posX, posY) {
        this.cells.forEach(cell => {
            //console.log(parseInt(cell.dataset.row), cell.dataset.column)
            // Add the wumpus
            if (parseInt(cell.dataset.row) === posY && parseInt(cell.dataset.column) === posX) {
                cell.innerText += '🕳️'
            }
            // Add the stench
            if (parseInt(cell.dataset.row) === posY) {
                if (parseInt(cell.dataset.column) === (posX - 1)) {
                    if (!this.containsBreeze(cell)) {
                        cell.innerText += '🍃'
                    }
                }
                else if (parseInt(cell.dataset.column) === (posX + 1)) {
                    if (!this.containsBreeze(cell)) {
                        cell.innerText += '🍃'
                    }
                }
            }

            else if (parseInt(cell.dataset.column) === posX) {
                if (parseInt(cell.dataset.row) === (posY - 1)) {
                    if (!this.containsBreeze(cell)) {
                        cell.innerText += '🍃'
                    }
                }
                else if (parseInt(cell.dataset.row) === (posY + 1)) {
                    if (!this.containsBreeze(cell)) {
                        cell.innerText += '🍃'
                    }
                }
            }
        })

    }

    addAgent(posX = 0, posY = 3) {
        this.cells.forEach(cell => {
            if (parseInt(cell.dataset.row) === posY && parseInt(cell.dataset.column) === posX) {
                cell.innerText += '🧝'
            }
        })
        this.agentStartingLocation = [posX, posY]
    }

    removeAgent(posX, posY) {
        this.cells.forEach(cell => {
            if (parseInt(cell.dataset.row) === posY && parseInt(cell.dataset.column) === posX) {
                cell.innerText = cell.innerText.replace(/🧝/g, '')
            }
        })
    }

    containsFart(cell) {
        return cell.innerText.includes('💩')
    }

    containsBreeze(cell) {
        return cell.innerText.includes('🍃')
    }
    // Coord to Cell
    getCell(coord) {
        // console.log(coord)
        let currentCell
        this.cells.forEach(cell => {
            if (parseInt(cell.dataset.column) === coord[0] && parseInt(cell.dataset.row) === coord[1]) {
                currentCell = cell
            }
        })
        return currentCell
    }
    // // Cell to Coord
    getLocation(cell) {
        let coord = []
        coord.push(parseInt(cell.dataset.column))
        coord.push(parseInt(cell.dataset.row))
        return coord
    }

    getAdjacentCells(coord) {
        let adjacentCells = []
        this.cells.forEach(cell => {
            if (parseInt(cell.dataset.column) === coord[0] && parseInt(cell.dataset.row) === coord[1] - 1) {
                adjacentCells.push(cell)
            }
            else if (parseInt(cell.dataset.column) === coord[0] && parseInt(cell.dataset.row) === coord[1] + 1) {
                adjacentCells.push(cell)
            }
            else if (parseInt(cell.dataset.column) === coord[0] - 1 && parseInt(cell.dataset.row) === coord[1]) {
                adjacentCells.push(cell)
            }
            else if (parseInt(cell.dataset.column) === coord[0] + 1 && parseInt(cell.dataset.row) === coord[1]) {
                adjacentCells.push(cell)
            }
        })
        // console.log(adjacentCells)
        return adjacentCells
    }
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agent */ "./src/agent.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world */ "./src/world.js");




// Wumpus World
const board = document.querySelector('#board')
const cells = board.querySelectorAll('.cell')

const world = new _world__WEBPACK_IMPORTED_MODULE_2__.WumpusWorld(cells)

world.addWumpus(0, 1)
world.addPit(2, 1)
world.addPit(2, 3)
world.addPit(3, 0)
world.addAgent()

const agent = new _agent__WEBPACK_IMPORTED_MODULE_1__.Agent(world)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7O1VDakp0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDVztBQUNNOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLCtDQUFXOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix5Q0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3d1bXB1cy13b3JsZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9zcmMvYWdlbnQuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vc3JjL2tub3dsZWRnZWJhc2UuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vc3JjL3dvcmxkLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmVzZXQgKi9cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuLyogUmVzZXQgKi9cXG5cXG4vKiBCb2R5IGFuZCA6cm9vdCAqL1xcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XFxufVxcbi8qIEJvZHkgYW5kIDpyb290ICovXFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW0gMXJlbSAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjgxKTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgLmxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1MDtcXG59XFxuLyogSGVhZGVyICovXFxuXFxuLyogQm9hcmQgKi9cXG4jYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG4vKiBCb2FyZCAqL1xcblxcbi8qIENlbGxzICovXFxuLmNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQWRkZWQgdG8gc3RhY2sgdGhlIDxwPiBlbGVtZW50cyB2ZXJ0aWNhbGx5ICovXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgd2lkdGg6IGNsYW1wKDYwcHgsIDcuN3Z3LCAyMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoNjBweCwgNy43dncsIDIwMHB4KTtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBmb250LXNpemU6IDIuNXZ3O1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFsbC1zaWRlcyB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4ucmlnaHQtMSB7XFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLmxlZnQge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLmxlZnQtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4udG9wIHtcXG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLnRvcC0xIHtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5ib3R0b20tMSB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcbi8qIENlbGxzICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9CO0FBQ0EsVUFBVTs7QUFFVixtQkFBbUI7QUFDbkI7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0EsbUJBQW1COztBQUVuQixXQUFXO0FBQ1g7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsNEJBQTRCOztJQUU1QixtQkFBbUI7SUFDbkIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQSxXQUFXOztBQUVYLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDOztJQUVsQyw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBLFVBQVU7O0FBRVYsVUFBVTtBQUNWO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCLEVBQUUsK0NBQStDO0lBQ3ZFLGVBQWU7O0lBRWYsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBLFVBQVVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBSZXNldCAqL1xcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG4vKiBSZXNldCAqL1xcblxcbi8qIEJvZHkgYW5kIDpyb290ICovXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcXG59XFxuLyogQm9keSBhbmQgOnJvb3QgKi9cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAxcmVtIDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yODEpO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5saW5rcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciAubGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgLmxpbmtzIGxpIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5oZWFkZXIgLmxpbmtzIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUwO1xcbn1cXG4vKiBIZWFkZXIgKi9cXG5cXG4vKiBCb2FyZCAqL1xcbiNib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbi8qIEJvYXJkICovXFxuXFxuLyogQ2VsbHMgKi9cXG4uY2VsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBBZGRlZCB0byBzdGFjayB0aGUgPHA+IGVsZW1lbnRzIHZlcnRpY2FsbHkgKi9cXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICB3aWR0aDogY2xhbXAoNjBweCwgNy43dncsIDIwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCg2MHB4LCA3Ljd2dywgMjAwcHgpO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIGZvbnQtc2l6ZTogMi41dnc7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWxsLXNpZGVzIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5yaWdodC0xIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4ubGVmdCB7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4ubGVmdC0xIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi50b3Age1xcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4udG9wLTEge1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLmJvdHRvbS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuLyogQ2VsbHMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgS25vd2xlZGdlQmFzZSB9IGZyb20gJy4va25vd2xlZGdlYmFzZSdcbi8vIExvY2F0aW9uIFt4LCB5XVxuY2xhc3MgQWdlbnQge1xuICAgIGNvbnN0cnVjdG9yKHdvcmxkKSB7XG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZFxuICAgICAgICB0aGlzLmtiID0gbmV3IEtub3dsZWRnZUJhc2UodGhpcy53b3JsZC5jZWxscylcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMud29ybGQuYWdlbnRTdGFydGluZ0xvY2F0aW9uXG4gICAgICAgIHRoaXMuY3VycmVudENlbGwgPSB0aGlzLndvcmxkLmdldENlbGwodGhpcy5sb2NhdGlvbilcbiAgICAgICAgdGhpcy51cGRhdGVBZ2VudCgpXG4gICAgICAgIHRoaXMudXBkYXRlS0IoKVxuICAgIH1cblxuICAgIHVwZGF0ZUFnZW50KCkge1xuICAgICAgICB0aGlzLmFkamFjZW50Q2VsbHMgPSB0aGlzLndvcmxkLmdldEFkamFjZW50Q2VsbHModGhpcy5sb2NhdGlvbilcbiAgICAgICAgdGhpcy5icmVlemUgPSB0aGlzLndvcmxkLmNvbnRhaW5zQnJlZXplKHRoaXMuY3VycmVudENlbGwpXG4gICAgICAgIHRoaXMuZmFydCA9IHRoaXMud29ybGQuY29udGFpbnNGYXJ0KHRoaXMuY3VycmVudENlbGwpXG4gICAgfVxuICAgIHNvbHZlKCkge1xuICAgICAgICB3aGlsZSAoIXRoaXMud29ybGQuZ29hbFJlYWNoZWQgfHwgdGhpcy53b3JsZC5hZ2VudEtpbGxlZCkge1xuICAgICAgICAgICAgLy8gVGFrZSB0aGUgYWRqYWNlbnQgY2VsbHNcbiAgICAgICAgICAgIC8vIEZyb20gYWRqYWNlbnQgY2VsbHMsIGRldGVybWluZSBpZiBpdCBpcyB2aXNpdGVkIG9yIG5vdFxuICAgICAgICAgICAgLy8gRnJvbSB1bml2aXNpdGVkIGFkamFjZW50IGNlbGxzLCByZXR1cm4gdGhlIHNhZmUgY2VsbHNcblxuICAgICAgICAgICAgLy8gVG8gZGV0ZXJtaW5lIHRoZSBzYWZlIGNlbGxzOlxuICAgICAgICAgICAgLy8gMS4gSWYgdGhlIGN1cnJlbnQgY2VsbCBkb2VzIG5vdCBjb250YWluIHN0ZW5jaCwgaXQgaXMgc2FmZVxuICAgICAgICAgICAgLy8gMi4gSWYgdGhlIGN1cnJlbnQgY2VsbCBkb2VzIG5vdCBjb250YWluIGJyZWV6ZSwgaXQgaXMgc2FmZVxuICAgICAgICAgICAgLy8gMy4gXG5cblxuICAgICAgICAgICAgLy8gaWYgKHRoaXMua2Iuc2FmZUNlbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICAvLyBtb3ZlIHRvIHRoZSBmaXJzdCBzYWZlIGNlbGxcbiAgICAgICAgICAgIC8vICAgICBsZXQgZmlyc3RTYWZlQ2VsbCA9IHNhZmVDZWxsc1swXVxuICAgICAgICAgICAgLy8gICAgIHRoaXMubW92ZVRvQ29vcmQocGFyc2VJbnQoZmlyc3RTYWZlQ2VsbC5kYXRhc2V0LmNvbHVtbiksIHBhcnNlSW50KGZpcnN0U2FmZUNlbGwuZGF0YXNldC5yb3cpKVxuICAgICAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlS0IoKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMua2Iud3VtcHVzTmVhcmJ5KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2hvb3QodGhpcy5rYi53dW1wdXNMb2NhdGlvbilcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyBtb3ZlIHRvIHRoZSBmaXJzdCBsZWFzdCBkYW5nZXJvdXMgdW5zYWZlIGNlbGxcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIGRpdiBjZWxsc1xuICAgIC8vIEkgdXNlZCBwcm9wb3NpdGlvbmFsIGxvZ2ljIHRvIGRldGVybWluZSBpZiB0aGUgY2VsbCBpcyBzYWZlIG9yIG5vdFxuICAgIGdldFNhZmVDZWxscygpIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMua2Iuc2FmZUNlbGxzXG4gICAgfVxuXG4gICAgLy8gdGhpcy5rYi51cGRhdGUoY2VsbCwgYWRqZWNlbnRDZWxscywgc3RlbmNoID0gZmFsc2UsIGJyZWV6ZSA9IGZhbHNlKVxuICAgIHVwZGF0ZUtCKCkge1xuICAgICAgICB0aGlzLmtiLnVwZGF0ZSh0aGlzLmN1cnJlbnRDZWxsLCB0aGlzLmFkamFjZW50Q2VsbHMsIHRoaXMuYnJlZXplLCB0aGlzLmZhcnQpXG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IG5ld0xvY2F0aW9uID0gW11cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3UnKSB7XG4gICAgICAgICAgICBuZXdMb2NhdGlvbiA9IFt0aGlzLmxvY2F0aW9uWzBdLCB0aGlzLmxvY2F0aW9uWzFdIC0gMV1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkJykge1xuICAgICAgICAgICAgbmV3TG9jYXRpb24gPSBbdGhpcy5sb2NhdGlvblswXSwgdGhpcy5sb2NhdGlvblsxXSArIDFdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndScpIHtcbiAgICAgICAgICAgIG5ld0xvY2F0aW9uID0gW3RoaXMubG9jYXRpb25bMF0gLSAxLCB0aGlzLmxvY2F0aW9uWzFdXVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3InKSB7XG4gICAgICAgICAgICBuZXdMb2NhdGlvbiA9IFt0aGlzLmxvY2F0aW9uWzBdICsgMSwgdGhpcy5sb2NhdGlvblsxXV1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVBZ2VudEljb24obmV3TG9jYXRpb24pXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBuZXdMb2NhdGlvblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvY2F0aW9uKVxuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsID0gdGhpcy53b3JsZC5nZXRDZWxsKHRoaXMubG9jYXRpb24pXG4gICAgICAgIHRoaXMudXBkYXRlQWdlbnQoKVxuICAgIH1cblxuICAgIG1vdmVUb0Nvb3JkKHgsIHkpIHtcbiAgICAgICAgbGV0IG5ld0xvY2F0aW9uID0gW3gsIHldXG4gICAgICAgIHRoaXMubW92ZUFnZW50SWNvbihuZXdMb2NhdGlvbilcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ld0xvY2F0aW9uXG4gICAgICAgIHRoaXMuY3VycmVudENlbGwgPSB0aGlzLndvcmxkLmdldENlbGwodGhpcy5sb2NhdGlvbilcbiAgICAgICAgdGhpcy51cGRhdGVBZ2VudCgpXG4gICAgfVxuXG4gICAgbW92ZUFnZW50SWNvbihuZXdMb2NhdGlvbikge1xuICAgICAgICB0aGlzLndvcmxkLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IG5ld0xvY2F0aW9uWzBdICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09IG5ld0xvY2F0aW9uWzFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZC5yZW1vdmVBZ2VudCh0aGlzLmxvY2F0aW9uWzBdLCB0aGlzLmxvY2F0aW9uWzFdKVxuICAgICAgICAgICAgICAgIHRoaXMud29ybGQuYWRkQWdlbnQobmV3TG9jYXRpb25bMF0sIG5ld0xvY2F0aW9uWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgeyBBZ2VudCB9IiwiY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoY2VsbCkge1xuICAgICAgICB0aGlzLmRpdkNlbGwgPSBjZWxsXG4gICAgICAgIHRoaXMuc2FmZUNlbGxzID0gW11cbiAgICB9XG59XG5cbmNsYXNzIEtub3dsZWRnZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNlbGxzKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gbWFrZSBpdCBhbiBhcnJheSBjdXogTm9kZUxpc3Qgc295Ym95IGFmXG4gICAgICAgIHRoaXMuY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpIC8vIFRoaXMgd2lsbCBjb250YWluIHNjb3JlIHByb3BlcnR5XG4gICAgICAgIHRoaXMudW52aXNpdGVkID0gdGhpcy5jZWxsc0FycmF5XG4gICAgICAgIHRoaXMudmlzaXRlZCA9IFtdXG4gICAgICAgIHRoaXMuc2FmZSA9IFtdXG4gICAgICAgIHRoaXMucG9zc2libGVQaXQgPSBbXVxuICAgICAgICB0aGlzLnBvc3NpYmxlV3VtcHVzID0gW11cbiAgICB9XG5cbiAgICB1cGRhdGUoY2VsbCwgYWRqYWNlbnRDZWxscywgYnJlZXplLCBmYXJ0KSB7XG4gICAgICAgIC8vIFZpc2l0IHRoZSBjZWxsXG4gICAgICAgIHRoaXMudW52aXNpdGVkID0gdGhpcy5yZW1vdmVVbnZpc2l0ZWQoY2VsbClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51bnZpc2l0ZWQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpXG4gICAgICAgIC8vIENyZWF0ZSBhIGNlbGwgY2xhc3MgZnJvbSBjZWxsLCBhZGQgaXQgdG8gdmlzaXRlZCBhcnJheVxuICAgICAgICBsZXQgbmV3Q2VsbCA9IG5ldyBDZWxsKGNlbGwpXG4gICAgICAgIHRoaXMudmlzaXRlZC5wdXNoKG5ld0NlbGwpXG4gICAgICAgIGxldCBuZXdDZWxsU2FmZUNlbGxzID0gdGhpcy5nZXRTYWZlQ2VsbHMoYWRqYWNlbnRDZWxscywgYnJlZXplLCBmYXJ0KVxuICAgICAgICAvLyBGcm9tIGVhY2ggb2YgdGhlIGFkamFjZW50IGNlbGxzLCBkZXRlcm1pbmUgdGhlIHNhZmUgY2VsbHNcbiAgICB9XG5cbiAgICByZW1vdmVVbnZpc2l0ZWQoY2VsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnZpc2l0ZWQuZmlsdGVyKGN1cnJlbnRDZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjdXJyZW50Q2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pICYmIHBhcnNlSW50KGN1cnJlbnRDZWxsLmRhdGFzZXQucm93KSA9PT0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gLy8gQWRkIHRoZSBjZWxsIGFzIHZpc2l0ZWQgYW5kIHVwZGF0ZSB0aGUgc2FmZUNlbGxzXG4gICAgLy8gdXBkYXRlKGNlbGwsIGFkamFjZW50Q2VsbHMsIHBlcmNlcHQsIHdvcmxkKSB7XG4gICAgLy8gICAgIC8vIEFkZCB0aGUgY3VycmVudCBjZWxsIGFzIHZpc2l0ZWRcbiAgICAvLyAgICAgdGhpcy52aXNpdGVkQ2VsbHMucHVzaChjZWxsKVxuICAgIC8vICAgICAvLyBVcGRhdGUgdGhlIHNhZmVDZWxsc1xuICAgIC8vICAgICAvLyBBZGQgdGhlIGFkamFjZW50IGNlbGxzIGluIHNhZmVDZWxscyBpZiBpdCBpcyBzYWZlXG4gICAgLy8gICAgIGFkamFjZW50Q2VsbHMuZm9yRWFjaChhZGphY2VudENlbGwgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKCFwZXJjZXB0LmJyZWV6ZSAmJiAhcGVyY2VwdC5mYXJ0KSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zYWZlQ2VsbHMucHVzaChhZGphY2VudENlbGwpXG4gICAgLy8gICAgICAgICB9IFxuICAgIC8vICAgICAgICAgaWYgKHBlcmNlcHQuZmFydCkge1xuICAgIC8vICAgICAgICAgICAgIC8vIENoZWNrIHRoZSBhZGphY2VudCBjZWxscyBvZiBlYWNoIG9mIHRoZSBhZGphY2VudCBjZWxsc1xuICAgIC8vICAgICAgICAgICAgIGxldCBjb29yZCA9IHdvcmxkLmdldExvY2F0aW9uKGFkamFjZW50Q2VsbClcbiAgICAvLyAgICAgICAgICAgICBsZXQgYWRqYWNlbnRDZWxsc29mQWRqYWNlbnRDZWxsID0gd29ybGQuZ2V0QWRqYWNlbnRDZWxscyhjb29yZClcblxuICAgIC8vICAgICAgICAgICAgIGxldCBhZGphY2VudFZpc2l0ZWQgPSBbXVxuICAgIC8vICAgICAgICAgICAgIGFkamFjZW50Q2VsbHNvZkFkamFjZW50Q2VsbC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGEgdmlzaXRlZCBjZWxsIG9mIGVhY2ggb2YgdGhlIGFkamFjZW50IGNlbGxzXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmlzaXRlZChjZWxsKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYWRqYWNlbnRWaXNpdGVkLnB1c2goY2VsbClcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgLy8gQ2hlY2sgaWYgb25lIG9mIHRoZSB2aXNpdGVkIGFkamFjZW50IGNlbGwgY29udGFpbnMgYSBmYXJ0IHRvb1xuXG4gICAgLy8gICAgICAgICAgICAgLy8gU2V0IHRoZSBkYW5nZXIgbGV2ZWwgb2YgdGhpcyBhZGphY2VudCBjZWxsIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG51bWJlciBvZiBmYXJ0c1xuICAgIC8vICAgICAgICAgICAgIC8vIElmIHZpc2l0ZWQgYWRqYWNlbnQgY2VsbCBkb2VzIG5vdCBjb250YWluIGZhcnQsIHRoZW4gaXQgaXMgc2FmZS5cbiAgICAvLyAgICAgICAgIH0gXG4gICAgLy8gICAgICAgICBpZiAocGVyY2VwdC5mYXJ0KSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gU2ltaWxhciB0byBmYXJ0XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgaXNWaXNpdGVkKGNlbGwpIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMudW52aXNpdGVkQ2VsbHMuaW5jbHVkZXMoY2VsbClcblxuICAgIH1cbn1cblxuZXhwb3J0IHsgS25vd2xlZGdlQmFzZSB9IiwiY2xhc3MgV3VtcHVzV29ybGQge1xuICAgIGNvbnN0cnVjdG9yKGNlbGxzKSB7XG4gICAgICAgIHRoaXMuY2VsbHMgPSBjZWxsc1xuICAgICAgICB0aGlzLmFnZW50U3RhcnRpbmdMb2NhdGlvbiA9IFtdXG4gICAgfVxuXG4gICAgLy8gQWRkIHd1bXB1cyBhbmQgc3RlbmNoIGFyb3VuZCBpdFxuICAgIGFkZFd1bXB1cyhwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdyksIGNlbGwuZGF0YXNldC5jb2x1bW4pXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHd1bXB1c1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBwb3NZICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBwb3NYKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfkbknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgdGhlIHN0ZW5jaFxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBwb3NZKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSAocG9zWCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0ZhcnQoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn5KpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSAocG9zWCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0ZhcnQoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn5KpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gcG9zWCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gKHBvc1kgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNGYXJ0KGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+SqSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gKHBvc1kgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNGYXJ0KGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+SqSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gIFxuICAgIC8vIEFkZCBwaXQgYW5kIGJyZWV6ZSBhcm91bmQgaXRcbiAgICBhZGRQaXQocG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpLCBjZWxsLmRhdGFzZXQuY29sdW1uKVxuICAgICAgICAgICAgLy8gQWRkIHRoZSB3dW1wdXNcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gcG9zWSAmJiBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gcG9zWCkge1xuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn5Wz77iPJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIHRoZSBzdGVuY2hcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gcG9zWSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gKHBvc1ggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNCcmVlemUoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn42DJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSAocG9zWCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0JyZWV6ZShjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfjYMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBwb3NYKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSAocG9zWSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0JyZWV6ZShjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfjYMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IChwb3NZICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zQnJlZXplKGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+NgydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGFkZEFnZW50KHBvc1ggPSAwLCBwb3NZID0gMykge1xuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IHBvc1kgJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IHBvc1gpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+nnSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5hZ2VudFN0YXJ0aW5nTG9jYXRpb24gPSBbcG9zWCwgcG9zWV1cbiAgICB9XG5cbiAgICByZW1vdmVBZ2VudChwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gcG9zWSAmJiBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gcG9zWCkge1xuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ID0gY2VsbC5pbm5lclRleHQucmVwbGFjZSgv8J+nnS9nLCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb250YWluc0ZhcnQoY2VsbCkge1xuICAgICAgICByZXR1cm4gY2VsbC5pbm5lclRleHQuaW5jbHVkZXMoJ/CfkqknKVxuICAgIH1cblxuICAgIGNvbnRhaW5zQnJlZXplKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGNlbGwuaW5uZXJUZXh0LmluY2x1ZGVzKCfwn42DJylcbiAgICB9XG4gICAgLy8gQ29vcmQgdG8gQ2VsbFxuICAgIGdldENlbGwoY29vcmQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmQpXG4gICAgICAgIGxldCBjdXJyZW50Q2VsbFxuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IGNvb3JkWzBdICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gY2VsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY3VycmVudENlbGxcbiAgICB9XG4gICAgLy8gLy8gQ2VsbCB0byBDb29yZFxuICAgIGdldExvY2F0aW9uKGNlbGwpIHtcbiAgICAgICAgbGV0IGNvb3JkID0gW11cbiAgICAgICAgY29vcmQucHVzaChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSlcbiAgICAgICAgY29vcmQucHVzaChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSlcbiAgICAgICAgcmV0dXJuIGNvb3JkXG4gICAgfVxuXG4gICAgZ2V0QWRqYWNlbnRDZWxscyhjb29yZCkge1xuICAgICAgICBsZXQgYWRqYWNlbnRDZWxscyA9IFtdXG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gY29vcmRbMF0gJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IGNvb3JkWzFdIC0gMSkge1xuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChjZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IGNvb3JkWzBdICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBjb29yZFsxXSArIDEpIHtcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGxzLnB1c2goY2VsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBjb29yZFswXSAtIDEgJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKGNlbGwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gY29vcmRbMF0gKyAxICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChjZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhZGphY2VudENlbGxzKVxuICAgICAgICByZXR1cm4gYWRqYWNlbnRDZWxsc1xuICAgIH1cbn1cblxuZXhwb3J0IHsgV3VtcHVzV29ybGQgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IEFnZW50IH0gZnJvbSAnLi9hZ2VudCdcbmltcG9ydCB7IFd1bXB1c1dvcmxkIH0gZnJvbSAnLi93b3JsZCdcblxuLy8gV3VtcHVzIFdvcmxkXG5jb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZCcpXG5jb25zdCBjZWxscyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJylcblxuY29uc3Qgd29ybGQgPSBuZXcgV3VtcHVzV29ybGQoY2VsbHMpXG5cbndvcmxkLmFkZFd1bXB1cygwLCAxKVxud29ybGQuYWRkUGl0KDIsIDEpXG53b3JsZC5hZGRQaXQoMiwgMylcbndvcmxkLmFkZFBpdCgzLCAwKVxud29ybGQuYWRkQWdlbnQoKVxuXG5jb25zdCBhZ2VudCA9IG5ldyBBZ2VudCh3b3JsZClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9