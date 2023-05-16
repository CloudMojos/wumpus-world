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
        this.kb = new _knowledgebase__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBase()
        this.location = world.agentStartingLocation
        this.currentCell = this.world.getCell(this.location)
        this.adjacentCells = this.world.getAdjacentCells(this.location)
        this.percept = this.world.getPercept(this.currentCell)
        this.updateKB()
    }
    solve() {
        // // Returns divs, not the coords only
        // let safeCells = this.getSafeCells(this.adjacentCells)
        // while (!this.world.goalReached || this.world.agentKilled) {
        //     if (this.kb.safeCells.length > 0) {
        //         // move to the first safe cell
        //         let firstSafeCell = safeCells[0]
        //         this.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))
        //         this.updateKB()
        //     }
        //     else {
        //         if (this.kb.wumpusNearby) {
        //             this.shoot(this.kb.wumpusLocation)
        //         } else {
        //             // move to the first least dangerous unsafe cell
        //         }
        //     }
        // }
    }

    // Returns div cells
    // I used propositional logic to determine if the cell is safe or not
    getSafeCells(adjacentCells) {
        return this.kb.safeCells
    }

    updateKB() {
        this.kb.update(this.currentCell, this.adjacentCells, this.percept)
    }

    move(direction) {
        let newLocation = []
        if (direction === 'u') {
            newLocation = [this.location[0] - 1, this.location[1]]
        }
        else if (direction === 'd') {
            newLocation = [this.location[0] + 1, this.location[1]]
        }
        else if (direction === 'l') {
            newLocation = [this.location[0], this.location[1] - 1]
        }
        else if (direction === 'r') {
            newLocation = [this.location[0], this.location[1] + 1]
        }
        this.moveAgentIcon(newLocation)
        this.location = newLocation
    }

    moveToCoord(x, y) {
        let newLocation = [x, y]
        this.moveAgentIcon(newLocation)
        this.location = newLocation
        this.currentCell = this.world.getCell(this.location)
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
class KnowledgeBase {
    constructor() {
        this.visitedCells = []
        this.safeCells = []
        this.unsafeCells = []
    }

    // Add the cell as visited and update the safeCells
    update(cell, adjacentCells, percept, world) {
        // Add the current cell as visited
        this.visitedCells.push(cell)
        // Update the safeCells
        // Add the adjacent cells in safeCells if it is safe
        adjacentCells.forEach(adjacentCell => {
            if (!percept.breeze && !percept.fart) {
                this.safeCells.push(adjacentCell)
            } 
            if (percept.fart) {
                // Check the adjacent cells of each of the adjacent cells
                let coord = world.getLocation(adjacentCell)
                let adjacentCellsofAdjacentCell = world.getAdjacentCells(coord)

                let adjacentVisited = []
                adjacentCellsofAdjacentCell.forEach(cell => {
                    // Check if there's a visited cell of each of the adjacent cells
                    if (this.isVisited(cell)) {
                        adjacentVisited.push(cell)
                    }
                })
                
                // Check if one of the visited adjacent cell contains a fart too

                // Set the danger level of this adjacent cell corresponding to the number of farts
                // If visited adjacent cell does not contain fart, then it is safe.
            } 
            if (percept.fart) {
                // Similar to fart
            }
        })
    }

    isVisited(cell) {
        return this.visitedCells.includes(cell)
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

    getPercept(cell) {
        let percept = {
            breeze: false,
            fart: false
        }
        if (this.containsFart(cell)) {
            percept.fart = true
        }
        if (this.containsBreeze(cell)) {
            percept.breeze = true
        }
        return percept
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

// agent.move('u')
// agent.move('r')
// agent.move('r')
// agent.move('r')
// agent.move('u')

agent.moveToCoord(0, 2)
agent.updateKB()

let adjacentCells = agent.world.getAdjacentCells(agent.location)
let safeCells = agent.getSafeCells(adjacentCells)


agent.moveToCoord(1, 2)
agent.updateKB()

adjacentCells = agent.world.getAdjacentCells(agent.location)
safeCells = agent.getSafeCells(adjacentCells)
console.log(`Safe cells:`)
console.log(safeCells)
console.log(`Visited cells:`)
console.log(agent.kb.visitedCells)


// console.log()
// agent.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))
// console.log(`Current cell:`)
// console.log(agent.currentCell)


// console.log(`Visited cells:`)
// console.log(agent.kb.visitedCells)


// adjacentCells = agent.world.getAdjacentCells(agent.location)
// // console.log(
// // agent.world.containsFart(agent.currentCell))
// // console.log(`Adjacent cells:`)
// // console.log(adjacentCells)
// safeCells = agent.getSafeCells(adjacentCells)
// console.log(`Safe cells:`)
// console.log(safeCells)
// // console.log(`Visited cells:`)
// // console.log(agent.kb.visitedCells)
// firstSafeCell = safeCells[0]
// // agent.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7O1VDL0p0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDVztBQUNNOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLCtDQUFXOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix5Q0FBSzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL3NyYy9hZ2VudC5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9zcmMva25vd2xlZGdlYmFzZS5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9zcmMvd29ybGQuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3d1bXB1cy13b3JsZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3d1bXB1cy13b3JsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3d1bXB1cy13b3JsZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSZXNldCAqL1xcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG4vKiBSZXNldCAqL1xcblxcbi8qIEJvZHkgYW5kIDpyb290ICovXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcXG59XFxuLyogQm9keSBhbmQgOnJvb3QgKi9cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAxcmVtIDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yODEpO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5saW5rcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciAubGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgLmxpbmtzIGxpIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5oZWFkZXIgLmxpbmtzIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUwO1xcbn1cXG4vKiBIZWFkZXIgKi9cXG5cXG4vKiBCb2FyZCAqL1xcbiNib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbi8qIEJvYXJkICovXFxuXFxuLyogQ2VsbHMgKi9cXG4uY2VsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBBZGRlZCB0byBzdGFjayB0aGUgPHA+IGVsZW1lbnRzIHZlcnRpY2FsbHkgKi9cXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICB3aWR0aDogY2xhbXAoNjBweCwgNy43dncsIDIwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCg2MHB4LCA3Ljd2dywgMjAwcHgpO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIGZvbnQtc2l6ZTogMi41dnc7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWxsLXNpZGVzIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5yaWdodC0xIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4ubGVmdCB7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4ubGVmdC0xIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi50b3Age1xcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4udG9wLTEge1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLmJvdHRvbS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuLyogQ2VsbHMgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLFVBQVU7QUFDVjtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7QUFDQSxVQUFVOztBQUVWLG1CQUFtQjtBQUNuQjtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQSxtQkFBbUI7O0FBRW5CLFdBQVc7QUFDWDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyw0QkFBNEI7O0lBRTVCLG1CQUFtQjtJQUNuQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBLFdBQVc7O0FBRVgsVUFBVTtBQUNWO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7O0lBRWxDLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0EsVUFBVTs7QUFFVixVQUFVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0IsRUFBRSwrQ0FBK0M7SUFDdkUsZUFBZTs7SUFFZixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0EsVUFBVVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIFJlc2V0ICovXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcbi8qIFJlc2V0ICovXFxuXFxuLyogQm9keSBhbmQgOnJvb3QgKi9cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWM5O1xcbn1cXG4vKiBCb2R5IGFuZCA6cm9vdCAqL1xcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtIDFyZW0gMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4MSk7XFxufVxcblxcbmhlYWRlciAubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAubGlua3MgbGkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmhlYWRlciAubGlua3MgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XFxufVxcbi8qIEhlYWRlciAqL1xcblxcbi8qIEJvYXJkICovXFxuI2JvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLyogQm9hcmQgKi9cXG5cXG4vKiBDZWxscyAqL1xcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIEFkZGVkIHRvIHN0YWNrIHRoZSA8cD4gZWxlbWVudHMgdmVydGljYWxseSAqL1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgIHdpZHRoOiBjbGFtcCg2MHB4LCA3Ljd2dywgMjAwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDcuN3Z3LCAyMDBweCk7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgZm9udC1zaXplOiAyLjV2dztcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hbGwtc2lkZXMge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLnJpZ2h0LTEge1xcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5sZWZ0IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5sZWZ0LTEge1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLnRvcCB7XFxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi50b3AtMSB7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4uYm90dG9tLTEge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG4vKiBDZWxscyAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBLbm93bGVkZ2VCYXNlIH0gZnJvbSAnLi9rbm93bGVkZ2ViYXNlJ1xuLy8gTG9jYXRpb24gW3gsIHldXG5jbGFzcyBBZ2VudCB7XG4gICAgY29uc3RydWN0b3Iod29ybGQpIHtcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkXG4gICAgICAgIHRoaXMua2IgPSBuZXcgS25vd2xlZGdlQmFzZSgpXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSB3b3JsZC5hZ2VudFN0YXJ0aW5nTG9jYXRpb25cbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbCA9IHRoaXMud29ybGQuZ2V0Q2VsbCh0aGlzLmxvY2F0aW9uKVxuICAgICAgICB0aGlzLmFkamFjZW50Q2VsbHMgPSB0aGlzLndvcmxkLmdldEFkamFjZW50Q2VsbHModGhpcy5sb2NhdGlvbilcbiAgICAgICAgdGhpcy5wZXJjZXB0ID0gdGhpcy53b3JsZC5nZXRQZXJjZXB0KHRoaXMuY3VycmVudENlbGwpXG4gICAgICAgIHRoaXMudXBkYXRlS0IoKVxuICAgIH1cbiAgICBzb2x2ZSgpIHtcbiAgICAgICAgLy8gLy8gUmV0dXJucyBkaXZzLCBub3QgdGhlIGNvb3JkcyBvbmx5XG4gICAgICAgIC8vIGxldCBzYWZlQ2VsbHMgPSB0aGlzLmdldFNhZmVDZWxscyh0aGlzLmFkamFjZW50Q2VsbHMpXG4gICAgICAgIC8vIHdoaWxlICghdGhpcy53b3JsZC5nb2FsUmVhY2hlZCB8fCB0aGlzLndvcmxkLmFnZW50S2lsbGVkKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5rYi5zYWZlQ2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgICAgIC8vIG1vdmUgdG8gdGhlIGZpcnN0IHNhZmUgY2VsbFxuICAgICAgICAvLyAgICAgICAgIGxldCBmaXJzdFNhZmVDZWxsID0gc2FmZUNlbGxzWzBdXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tb3ZlVG9Db29yZChwYXJzZUludChmaXJzdFNhZmVDZWxsLmRhdGFzZXQuY29sdW1uKSwgcGFyc2VJbnQoZmlyc3RTYWZlQ2VsbC5kYXRhc2V0LnJvdykpXG4gICAgICAgIC8vICAgICAgICAgdGhpcy51cGRhdGVLQigpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5rYi53dW1wdXNOZWFyYnkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zaG9vdCh0aGlzLmtiLnd1bXB1c0xvY2F0aW9uKVxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIG1vdmUgdG8gdGhlIGZpcnN0IGxlYXN0IGRhbmdlcm91cyB1bnNhZmUgY2VsbFxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgZGl2IGNlbGxzXG4gICAgLy8gSSB1c2VkIHByb3Bvc2l0aW9uYWwgbG9naWMgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjZWxsIGlzIHNhZmUgb3Igbm90XG4gICAgZ2V0U2FmZUNlbGxzKGFkamFjZW50Q2VsbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2Iuc2FmZUNlbGxzXG4gICAgfVxuXG4gICAgdXBkYXRlS0IoKSB7XG4gICAgICAgIHRoaXMua2IudXBkYXRlKHRoaXMuY3VycmVudENlbGwsIHRoaXMuYWRqYWNlbnRDZWxscywgdGhpcy5wZXJjZXB0KVxuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBuZXdMb2NhdGlvbiA9IFtdXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd1Jykge1xuICAgICAgICAgICAgbmV3TG9jYXRpb24gPSBbdGhpcy5sb2NhdGlvblswXSAtIDEsIHRoaXMubG9jYXRpb25bMV1dXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZCcpIHtcbiAgICAgICAgICAgIG5ld0xvY2F0aW9uID0gW3RoaXMubG9jYXRpb25bMF0gKyAxLCB0aGlzLmxvY2F0aW9uWzFdXVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2wnKSB7XG4gICAgICAgICAgICBuZXdMb2NhdGlvbiA9IFt0aGlzLmxvY2F0aW9uWzBdLCB0aGlzLmxvY2F0aW9uWzFdIC0gMV1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyJykge1xuICAgICAgICAgICAgbmV3TG9jYXRpb24gPSBbdGhpcy5sb2NhdGlvblswXSwgdGhpcy5sb2NhdGlvblsxXSArIDFdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlQWdlbnRJY29uKG5ld0xvY2F0aW9uKVxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbmV3TG9jYXRpb25cbiAgICB9XG5cbiAgICBtb3ZlVG9Db29yZCh4LCB5KSB7XG4gICAgICAgIGxldCBuZXdMb2NhdGlvbiA9IFt4LCB5XVxuICAgICAgICB0aGlzLm1vdmVBZ2VudEljb24obmV3TG9jYXRpb24pXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBuZXdMb2NhdGlvblxuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsID0gdGhpcy53b3JsZC5nZXRDZWxsKHRoaXMubG9jYXRpb24pXG4gICAgfVxuXG4gICAgbW92ZUFnZW50SWNvbihuZXdMb2NhdGlvbikge1xuICAgICAgICB0aGlzLndvcmxkLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IG5ld0xvY2F0aW9uWzBdICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09IG5ld0xvY2F0aW9uWzFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZC5yZW1vdmVBZ2VudCh0aGlzLmxvY2F0aW9uWzBdLCB0aGlzLmxvY2F0aW9uWzFdKVxuICAgICAgICAgICAgICAgIHRoaXMud29ybGQuYWRkQWdlbnQobmV3TG9jYXRpb25bMF0sIG5ld0xvY2F0aW9uWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgeyBBZ2VudCB9IiwiY2xhc3MgS25vd2xlZGdlQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmlzaXRlZENlbGxzID0gW11cbiAgICAgICAgdGhpcy5zYWZlQ2VsbHMgPSBbXVxuICAgICAgICB0aGlzLnVuc2FmZUNlbGxzID0gW11cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGNlbGwgYXMgdmlzaXRlZCBhbmQgdXBkYXRlIHRoZSBzYWZlQ2VsbHNcbiAgICB1cGRhdGUoY2VsbCwgYWRqYWNlbnRDZWxscywgcGVyY2VwdCwgd29ybGQpIHtcbiAgICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IGNlbGwgYXMgdmlzaXRlZFxuICAgICAgICB0aGlzLnZpc2l0ZWRDZWxscy5wdXNoKGNlbGwpXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2FmZUNlbGxzXG4gICAgICAgIC8vIEFkZCB0aGUgYWRqYWNlbnQgY2VsbHMgaW4gc2FmZUNlbGxzIGlmIGl0IGlzIHNhZmVcbiAgICAgICAgYWRqYWNlbnRDZWxscy5mb3JFYWNoKGFkamFjZW50Q2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAoIXBlcmNlcHQuYnJlZXplICYmICFwZXJjZXB0LmZhcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhZmVDZWxscy5wdXNoKGFkamFjZW50Q2VsbClcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAocGVyY2VwdC5mYXJ0KSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGFkamFjZW50IGNlbGxzIG9mIGVhY2ggb2YgdGhlIGFkamFjZW50IGNlbGxzXG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkID0gd29ybGQuZ2V0TG9jYXRpb24oYWRqYWNlbnRDZWxsKVxuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudENlbGxzb2ZBZGphY2VudENlbGwgPSB3b3JsZC5nZXRBZGphY2VudENlbGxzKGNvb3JkKVxuXG4gICAgICAgICAgICAgICAgbGV0IGFkamFjZW50VmlzaXRlZCA9IFtdXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxsc29mQWRqYWNlbnRDZWxsLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlJ3MgYSB2aXNpdGVkIGNlbGwgb2YgZWFjaCBvZiB0aGUgYWRqYWNlbnQgY2VsbHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWaXNpdGVkKGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGphY2VudFZpc2l0ZWQucHVzaChjZWxsKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBvbmUgb2YgdGhlIHZpc2l0ZWQgYWRqYWNlbnQgY2VsbCBjb250YWlucyBhIGZhcnQgdG9vXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGRhbmdlciBsZXZlbCBvZiB0aGlzIGFkamFjZW50IGNlbGwgY29ycmVzcG9uZGluZyB0byB0aGUgbnVtYmVyIG9mIGZhcnRzXG4gICAgICAgICAgICAgICAgLy8gSWYgdmlzaXRlZCBhZGphY2VudCBjZWxsIGRvZXMgbm90IGNvbnRhaW4gZmFydCwgdGhlbiBpdCBpcyBzYWZlLlxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChwZXJjZXB0LmZhcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBTaW1pbGFyIHRvIGZhcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpc1Zpc2l0ZWQoY2VsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdGVkQ2VsbHMuaW5jbHVkZXMoY2VsbClcbiAgICB9XG59XG5cbmV4cG9ydCB7IEtub3dsZWRnZUJhc2UgfSIsImNsYXNzIFd1bXB1c1dvcmxkIHtcbiAgICBjb25zdHJ1Y3RvcihjZWxscykge1xuICAgICAgICB0aGlzLmNlbGxzID0gY2VsbHNcbiAgICAgICAgdGhpcy5hZ2VudFN0YXJ0aW5nTG9jYXRpb24gPSBbXVxuICAgIH1cblxuICAgIC8vIEFkZCB3dW1wdXMgYW5kIHN0ZW5jaCBhcm91bmQgaXRcbiAgICBhZGRXdW1wdXMocG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpLCBjZWxsLmRhdGFzZXQuY29sdW1uKVxuICAgICAgICAgICAgLy8gQWRkIHRoZSB3dW1wdXNcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gcG9zWSAmJiBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gcG9zWCkge1xuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn5G5J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIHRoZSBzdGVuY2hcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gcG9zWSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gKHBvc1ggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNGYXJ0KGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+SqSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gKHBvc1ggKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNGYXJ0KGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+SqSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IHBvc1gpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IChwb3NZIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zRmFydChjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfkqknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IChwb3NZICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zRmFydChjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfkqknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICBcbiAgICAvLyBBZGQgcGl0IGFuZCBicmVlemUgYXJvdW5kIGl0XG4gICAgYWRkUGl0KHBvc1gsIHBvc1kpIHtcbiAgICAgICAgdGhpcy5jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSwgY2VsbC5kYXRhc2V0LmNvbHVtbilcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgd3VtcHVzXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IHBvc1kgJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IHBvc1gpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+Vs++4jydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFkZCB0aGUgc3RlbmNoXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IHBvc1kpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IChwb3NYIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zQnJlZXplKGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+NgydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gKHBvc1ggKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNCcmVlemUoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn42DJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gcG9zWCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gKHBvc1kgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNCcmVlemUoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn42DJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSAocG9zWSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0JyZWV6ZShjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfjYMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBhZGRBZ2VudChwb3NYID0gMCwgcG9zWSA9IDMpIHtcbiAgICAgICAgdGhpcy5jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBwb3NZICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBwb3NYKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/Cfp50nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYWdlbnRTdGFydGluZ0xvY2F0aW9uID0gW3Bvc1gsIHBvc1ldXG4gICAgfVxuXG4gICAgcmVtb3ZlQWdlbnQocG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IHBvc1kgJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IHBvc1gpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCA9IGNlbGwuaW5uZXJUZXh0LnJlcGxhY2UoL/Cfp50vZywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29udGFpbnNGYXJ0KGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGNlbGwuaW5uZXJUZXh0LmluY2x1ZGVzKCfwn5KpJylcbiAgICB9XG5cbiAgICBjb250YWluc0JyZWV6ZShjZWxsKSB7XG4gICAgICAgIHJldHVybiBjZWxsLmlubmVyVGV4dC5pbmNsdWRlcygn8J+NgycpXG4gICAgfVxuICAgIC8vIENvb3JkIHRvIENlbGxcbiAgICBnZXRDZWxsKGNvb3JkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkKVxuICAgICAgICBsZXQgY3VycmVudENlbGxcbiAgICAgICAgdGhpcy5jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBjb29yZFswXSAmJiBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gY29vcmRbMV0pIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2VsbCA9IGNlbGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDZWxsXG4gICAgfVxuICAgIC8vIC8vIENlbGwgdG8gQ29vcmRcbiAgICBnZXRMb2NhdGlvbihjZWxsKSB7XG4gICAgICAgIGxldCBjb29yZCA9IFtdXG4gICAgICAgIGNvb3JkLnB1c2gocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikpXG4gICAgICAgIGNvb3JkLnB1c2gocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykpXG4gICAgICAgIHJldHVybiBjb29yZFxuICAgIH1cblxuICAgIGdldFBlcmNlcHQoY2VsbCkge1xuICAgICAgICBsZXQgcGVyY2VwdCA9IHtcbiAgICAgICAgICAgIGJyZWV6ZTogZmFsc2UsXG4gICAgICAgICAgICBmYXJ0OiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zRmFydChjZWxsKSkge1xuICAgICAgICAgICAgcGVyY2VwdC5mYXJ0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQnJlZXplKGNlbGwpKSB7XG4gICAgICAgICAgICBwZXJjZXB0LmJyZWV6ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGVyY2VwdFxuICAgIH1cblxuICAgIGdldEFkamFjZW50Q2VsbHMoY29vcmQpIHtcbiAgICAgICAgbGV0IGFkamFjZW50Q2VsbHMgPSBbXVxuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IGNvb3JkWzBdICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBjb29yZFsxXSAtIDEpIHtcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGxzLnB1c2goY2VsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBjb29yZFswXSAmJiBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gY29vcmRbMV0gKyAxKSB7XG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKGNlbGwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gY29vcmRbMF0gLSAxICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChjZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IGNvb3JkWzBdICsgMSAmJiBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gY29vcmRbMV0pIHtcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGxzLnB1c2goY2VsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWRqYWNlbnRDZWxscylcbiAgICAgICAgcmV0dXJuIGFkamFjZW50Q2VsbHNcbiAgICB9XG59XG5cbmV4cG9ydCB7IFd1bXB1c1dvcmxkIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBBZ2VudCB9IGZyb20gJy4vYWdlbnQnXG5pbXBvcnQgeyBXdW1wdXNXb3JsZCB9IGZyb20gJy4vd29ybGQnXG5cbi8vIFd1bXB1cyBXb3JsZFxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmQnKVxuY29uc3QgY2VsbHMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpXG5cbmNvbnN0IHdvcmxkID0gbmV3IFd1bXB1c1dvcmxkKGNlbGxzKVxuXG53b3JsZC5hZGRXdW1wdXMoMCwgMSlcbndvcmxkLmFkZFBpdCgyLCAxKVxud29ybGQuYWRkUGl0KDIsIDMpXG53b3JsZC5hZGRQaXQoMywgMClcbndvcmxkLmFkZEFnZW50KClcblxuY29uc3QgYWdlbnQgPSBuZXcgQWdlbnQod29ybGQpXG5cbi8vIGFnZW50Lm1vdmUoJ3UnKVxuLy8gYWdlbnQubW92ZSgncicpXG4vLyBhZ2VudC5tb3ZlKCdyJylcbi8vIGFnZW50Lm1vdmUoJ3InKVxuLy8gYWdlbnQubW92ZSgndScpXG5cbmFnZW50Lm1vdmVUb0Nvb3JkKDAsIDIpXG5hZ2VudC51cGRhdGVLQigpXG5cbmxldCBhZGphY2VudENlbGxzID0gYWdlbnQud29ybGQuZ2V0QWRqYWNlbnRDZWxscyhhZ2VudC5sb2NhdGlvbilcbmxldCBzYWZlQ2VsbHMgPSBhZ2VudC5nZXRTYWZlQ2VsbHMoYWRqYWNlbnRDZWxscylcblxuXG5hZ2VudC5tb3ZlVG9Db29yZCgxLCAyKVxuYWdlbnQudXBkYXRlS0IoKVxuXG5hZGphY2VudENlbGxzID0gYWdlbnQud29ybGQuZ2V0QWRqYWNlbnRDZWxscyhhZ2VudC5sb2NhdGlvbilcbnNhZmVDZWxscyA9IGFnZW50LmdldFNhZmVDZWxscyhhZGphY2VudENlbGxzKVxuY29uc29sZS5sb2coYFNhZmUgY2VsbHM6YClcbmNvbnNvbGUubG9nKHNhZmVDZWxscylcbmNvbnNvbGUubG9nKGBWaXNpdGVkIGNlbGxzOmApXG5jb25zb2xlLmxvZyhhZ2VudC5rYi52aXNpdGVkQ2VsbHMpXG5cblxuLy8gY29uc29sZS5sb2coKVxuLy8gYWdlbnQubW92ZVRvQ29vcmQocGFyc2VJbnQoZmlyc3RTYWZlQ2VsbC5kYXRhc2V0LmNvbHVtbiksIHBhcnNlSW50KGZpcnN0U2FmZUNlbGwuZGF0YXNldC5yb3cpKVxuLy8gY29uc29sZS5sb2coYEN1cnJlbnQgY2VsbDpgKVxuLy8gY29uc29sZS5sb2coYWdlbnQuY3VycmVudENlbGwpXG5cblxuLy8gY29uc29sZS5sb2coYFZpc2l0ZWQgY2VsbHM6YClcbi8vIGNvbnNvbGUubG9nKGFnZW50LmtiLnZpc2l0ZWRDZWxscylcblxuXG4vLyBhZGphY2VudENlbGxzID0gYWdlbnQud29ybGQuZ2V0QWRqYWNlbnRDZWxscyhhZ2VudC5sb2NhdGlvbilcbi8vIC8vIGNvbnNvbGUubG9nKFxuLy8gLy8gYWdlbnQud29ybGQuY29udGFpbnNGYXJ0KGFnZW50LmN1cnJlbnRDZWxsKSlcbi8vIC8vIGNvbnNvbGUubG9nKGBBZGphY2VudCBjZWxsczpgKVxuLy8gLy8gY29uc29sZS5sb2coYWRqYWNlbnRDZWxscylcbi8vIHNhZmVDZWxscyA9IGFnZW50LmdldFNhZmVDZWxscyhhZGphY2VudENlbGxzKVxuLy8gY29uc29sZS5sb2coYFNhZmUgY2VsbHM6YClcbi8vIGNvbnNvbGUubG9nKHNhZmVDZWxscylcbi8vIC8vIGNvbnNvbGUubG9nKGBWaXNpdGVkIGNlbGxzOmApXG4vLyAvLyBjb25zb2xlLmxvZyhhZ2VudC5rYi52aXNpdGVkQ2VsbHMpXG4vLyBmaXJzdFNhZmVDZWxsID0gc2FmZUNlbGxzWzBdXG4vLyAvLyBhZ2VudC5tb3ZlVG9Db29yZChwYXJzZUludChmaXJzdFNhZmVDZWxsLmRhdGFzZXQuY29sdW1uKSwgcGFyc2VJbnQoZmlyc3RTYWZlQ2VsbC5kYXRhc2V0LnJvdykpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9