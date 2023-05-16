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
        this.updateKB()
    }
    solve() {
        // Returns divs, not the coords only
        let safeCells = this.getSafeCells()
        while (!this.world.goalReached || this.world.agentKilled) {
            if (this.kb.safeCells.length > 0) {
                // move to the first safe cell
                let firstSafeCell = safeCells[0]
                this.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))
                this.updateKB()
            }
            else {
                if (this.kb.wumpusNearby) {
                    this.shoot(this.kb.wumpusLocation)
                } else {
                    // move to the first least dangerous unsafe cell
                }
            }
        }
    }

    // Returns div cells
    // I used propositional logic to determine if the cell is safe or not
    getSafeCells() {
        // return this.kb.safeCells
    }

    updateKB() {
        this.kb.update(this.currentCell, world)
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
    constructor(cells) {
        // Need to make it an array cuz NodeList soyboy af
        this.cellsArray = Array.from(cells) // This will contain score property
        this.unvisitedCells = this.cellsArray
    }

    update(cell, world) {
        this.unvisitedCells =  this.removeUnvisited(cell)
        // this.setDangerLevel() 
    }

    removeUnvisited(visited) {
        let unvisited = []
        this.unvisitedCells.forEach(cell => {
            if (parseInt(visited.dataset.column) === parseInt(cell.dataset.column) && parseInt(visited.dataset.row) === parseInt(cell.dataset.row)) {
                return
            }
            unvisited.push(cell)
        })
        return unvisited
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

    // isVisited(cell) {
    //     return this.visitedCells.includes(cell)
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFIQUFxSDtBQUNySDtBQUNBLDBEQUEwRCxpQkFBaUIsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsZ0NBQWdDLEtBQUssOENBQThDLHlDQUF5QyxHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0JBQW9CLGdDQUFnQyxHQUFHLGdEQUFnRCxrQkFBa0Isb0JBQW9CLHFDQUFxQyx1Q0FBdUMsbUNBQW1DLDRCQUE0Qix1REFBdUQsR0FBRyxrQkFBa0Isd0JBQXdCLHdCQUF3QixHQUFHLFlBQVksdUJBQXVCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRyxzQkFBc0Isc0JBQXNCLG9CQUFvQix3QkFBd0IseUJBQXlCLEdBQUcsNEJBQTRCLGtDQUFrQyxHQUFHLHVDQUF1QyxvQkFBb0IsNENBQTRDLHlDQUF5QyxxQ0FBcUMsb0JBQW9CLDBCQUEwQixHQUFHLHFDQUFxQyxvQkFBb0IsOEJBQThCLDBCQUEwQiw4QkFBOEIsc0VBQXNFLHlDQUF5Qyx3Q0FBd0MsNEJBQTRCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxnQkFBZ0Isd0NBQXdDLEdBQUcsWUFBWSw4Q0FBOEMsR0FBRyxjQUFjLDhDQUE4QyxHQUFHLFdBQVcsNkNBQTZDLEdBQUcsYUFBYSw2Q0FBNkMsR0FBRyxVQUFVLDRDQUE0QyxHQUFHLFlBQVksNENBQTRDLEdBQUcsYUFBYSwrQ0FBK0MsR0FBRyxlQUFlLCtDQUErQyxHQUFHLHNCQUFzQixxRkFBcUYsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxXQUFXLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxhQUFhLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLFdBQVcsVUFBVSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLE1BQU0sV0FBVyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEseUJBQXlCLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLDJHQUEyRyxvQkFBb0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IsNkJBQTZCLGdDQUFnQyxLQUFLLDhDQUE4Qyx5Q0FBeUMsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG9CQUFvQixnQ0FBZ0MsR0FBRyxnREFBZ0Qsa0JBQWtCLG9CQUFvQixxQ0FBcUMsdUNBQXVDLG1DQUFtQyw0QkFBNEIsdURBQXVELEdBQUcsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxZQUFZLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLEdBQUcsc0JBQXNCLHNCQUFzQixvQkFBb0Isd0JBQXdCLHlCQUF5QixHQUFHLDRCQUE0QixrQ0FBa0MsR0FBRyx1Q0FBdUMsb0JBQW9CLDRDQUE0Qyx5Q0FBeUMscUNBQXFDLG9CQUFvQiwwQkFBMEIsR0FBRyxxQ0FBcUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsOEJBQThCLHNFQUFzRSx5Q0FBeUMsd0NBQXdDLDRCQUE0Qix1QkFBdUIsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsZ0JBQWdCLHdDQUF3QyxHQUFHLFlBQVksOENBQThDLEdBQUcsY0FBYyw4Q0FBOEMsR0FBRyxXQUFXLDZDQUE2QyxHQUFHLGFBQWEsNkNBQTZDLEdBQUcsVUFBVSw0Q0FBNEMsR0FBRyxZQUFZLDRDQUE0QyxHQUFHLGFBQWEsK0NBQStDLEdBQUcsZUFBZSwrQ0FBK0MsR0FBRyxrQ0FBa0M7QUFDcCtLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYitDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7OztVQ2pKdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ1c7QUFDTTs7QUFFckM7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwrQ0FBVzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IseUNBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkLy4vc3JjL2FnZW50LmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL3NyYy9rbm93bGVkZ2ViYXNlLmpzIiwid2VicGFjazovL3d1bXB1cy13b3JsZC8uL3NyYy93b3JsZC5qcyIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3d1bXB1cy13b3JsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd3VtcHVzLXdvcmxkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93dW1wdXMtd29ybGQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJlc2V0ICovXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcbi8qIFJlc2V0ICovXFxuXFxuLyogQm9keSBhbmQgOnJvb3QgKi9cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWM5O1xcbn1cXG4vKiBCb2R5IGFuZCA6cm9vdCAqL1xcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtIDFyZW0gMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4MSk7XFxufVxcblxcbmhlYWRlciAubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAubGlua3MgbGkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmhlYWRlciAubGlua3MgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XFxufVxcbi8qIEhlYWRlciAqL1xcblxcbi8qIEJvYXJkICovXFxuI2JvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLyogQm9hcmQgKi9cXG5cXG4vKiBDZWxscyAqL1xcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIEFkZGVkIHRvIHN0YWNrIHRoZSA8cD4gZWxlbWVudHMgdmVydGljYWxseSAqL1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgIHdpZHRoOiBjbGFtcCg2MHB4LCA3Ljd2dywgMjAwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDcuN3Z3LCAyMDBweCk7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgZm9udC1zaXplOiAyLjV2dztcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hbGwtc2lkZXMge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLnJpZ2h0LTEge1xcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5sZWZ0IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5sZWZ0LTEge1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLnRvcCB7XFxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi50b3AtMSB7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4uYm90dG9tLTEge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG4vKiBDZWxscyAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsVUFBVTtBQUNWO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUNBLFVBQVU7O0FBRVYsbUJBQW1CO0FBQ25CO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBLG1CQUFtQjs7QUFFbkIsV0FBVztBQUNYO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLDRCQUE0Qjs7SUFFNUIsbUJBQW1CO0lBQ25CLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0EsV0FBVzs7QUFFWCxVQUFVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQzs7SUFFbEMsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQSxVQUFVOztBQUVWLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFFLCtDQUErQztJQUN2RSxlQUFlOztJQUVmLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQSxVQUFVXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogUmVzZXQgKi9cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuLyogUmVzZXQgKi9cXG5cXG4vKiBCb2R5IGFuZCA6cm9vdCAqL1xcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XFxufVxcbi8qIEJvZHkgYW5kIDpyb290ICovXFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW0gMXJlbSAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjgxKTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgLmxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1MDtcXG59XFxuLyogSGVhZGVyICovXFxuXFxuLyogQm9hcmQgKi9cXG4jYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG4vKiBCb2FyZCAqL1xcblxcbi8qIENlbGxzICovXFxuLmNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQWRkZWQgdG8gc3RhY2sgdGhlIDxwPiBlbGVtZW50cyB2ZXJ0aWNhbGx5ICovXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgd2lkdGg6IGNsYW1wKDYwcHgsIDcuN3Z3LCAyMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoNjBweCwgNy43dncsIDIwMHB4KTtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBmb250LXNpemU6IDIuNXZ3O1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFsbC1zaWRlcyB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4ucmlnaHQtMSB7XFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLmxlZnQge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLmxlZnQtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG4udG9wIHtcXG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLnRvcC0xIHtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYigzNiwgMzYsIDM2KTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbi5ib3R0b20tMSB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2IoMzYsIDM2LCAzNik7XFxufVxcbi8qIENlbGxzICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEtub3dsZWRnZUJhc2UgfSBmcm9tICcuL2tub3dsZWRnZWJhc2UnXG4vLyBMb2NhdGlvbiBbeCwgeV1cbmNsYXNzIEFnZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih3b3JsZCkge1xuICAgICAgICB0aGlzLndvcmxkID0gd29ybGRcbiAgICAgICAgdGhpcy5rYiA9IG5ldyBLbm93bGVkZ2VCYXNlKHRoaXMud29ybGQuY2VsbHMpXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLndvcmxkLmFnZW50U3RhcnRpbmdMb2NhdGlvblxuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsID0gdGhpcy53b3JsZC5nZXRDZWxsKHRoaXMubG9jYXRpb24pXG4gICAgICAgIHRoaXMudXBkYXRlS0IoKVxuICAgIH1cbiAgICBzb2x2ZSgpIHtcbiAgICAgICAgLy8gUmV0dXJucyBkaXZzLCBub3QgdGhlIGNvb3JkcyBvbmx5XG4gICAgICAgIGxldCBzYWZlQ2VsbHMgPSB0aGlzLmdldFNhZmVDZWxscygpXG4gICAgICAgIHdoaWxlICghdGhpcy53b3JsZC5nb2FsUmVhY2hlZCB8fCB0aGlzLndvcmxkLmFnZW50S2lsbGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5rYi5zYWZlQ2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gdGhlIGZpcnN0IHNhZmUgY2VsbFxuICAgICAgICAgICAgICAgIGxldCBmaXJzdFNhZmVDZWxsID0gc2FmZUNlbGxzWzBdXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Db29yZChwYXJzZUludChmaXJzdFNhZmVDZWxsLmRhdGFzZXQuY29sdW1uKSwgcGFyc2VJbnQoZmlyc3RTYWZlQ2VsbC5kYXRhc2V0LnJvdykpXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVLQigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rYi53dW1wdXNOZWFyYnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdCh0aGlzLmtiLnd1bXB1c0xvY2F0aW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gdGhlIGZpcnN0IGxlYXN0IGRhbmdlcm91cyB1bnNhZmUgY2VsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgZGl2IGNlbGxzXG4gICAgLy8gSSB1c2VkIHByb3Bvc2l0aW9uYWwgbG9naWMgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjZWxsIGlzIHNhZmUgb3Igbm90XG4gICAgZ2V0U2FmZUNlbGxzKCkge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5rYi5zYWZlQ2VsbHNcbiAgICB9XG5cbiAgICB1cGRhdGVLQigpIHtcbiAgICAgICAgdGhpcy5rYi51cGRhdGUodGhpcy5jdXJyZW50Q2VsbCwgd29ybGQpXG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IG5ld0xvY2F0aW9uID0gW11cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3UnKSB7XG4gICAgICAgICAgICBuZXdMb2NhdGlvbiA9IFt0aGlzLmxvY2F0aW9uWzBdIC0gMSwgdGhpcy5sb2NhdGlvblsxXV1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkJykge1xuICAgICAgICAgICAgbmV3TG9jYXRpb24gPSBbdGhpcy5sb2NhdGlvblswXSArIDEsIHRoaXMubG9jYXRpb25bMV1dXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbCcpIHtcbiAgICAgICAgICAgIG5ld0xvY2F0aW9uID0gW3RoaXMubG9jYXRpb25bMF0sIHRoaXMubG9jYXRpb25bMV0gLSAxXVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3InKSB7XG4gICAgICAgICAgICBuZXdMb2NhdGlvbiA9IFt0aGlzLmxvY2F0aW9uWzBdLCB0aGlzLmxvY2F0aW9uWzFdICsgMV1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVBZ2VudEljb24obmV3TG9jYXRpb24pXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBuZXdMb2NhdGlvblxuICAgIH1cblxuICAgIG1vdmVUb0Nvb3JkKHgsIHkpIHtcbiAgICAgICAgbGV0IG5ld0xvY2F0aW9uID0gW3gsIHldXG4gICAgICAgIHRoaXMubW92ZUFnZW50SWNvbihuZXdMb2NhdGlvbilcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ld0xvY2F0aW9uXG4gICAgICAgIHRoaXMuY3VycmVudENlbGwgPSB0aGlzLndvcmxkLmdldENlbGwodGhpcy5sb2NhdGlvbilcbiAgICB9XG5cbiAgICBtb3ZlQWdlbnRJY29uKG5ld0xvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMud29ybGQuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gbmV3TG9jYXRpb25bMF0gJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT0gbmV3TG9jYXRpb25bMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmxkLnJlbW92ZUFnZW50KHRoaXMubG9jYXRpb25bMF0sIHRoaXMubG9jYXRpb25bMV0pXG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZC5hZGRBZ2VudChuZXdMb2NhdGlvblswXSwgbmV3TG9jYXRpb25bMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IEFnZW50IH0iLCJjbGFzcyBLbm93bGVkZ2VCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihjZWxscykge1xuICAgICAgICAvLyBOZWVkIHRvIG1ha2UgaXQgYW4gYXJyYXkgY3V6IE5vZGVMaXN0IHNveWJveSBhZlxuICAgICAgICB0aGlzLmNlbGxzQXJyYXkgPSBBcnJheS5mcm9tKGNlbGxzKSAvLyBUaGlzIHdpbGwgY29udGFpbiBzY29yZSBwcm9wZXJ0eVxuICAgICAgICB0aGlzLnVudmlzaXRlZENlbGxzID0gdGhpcy5jZWxsc0FycmF5XG4gICAgfVxuXG4gICAgdXBkYXRlKGNlbGwsIHdvcmxkKSB7XG4gICAgICAgIHRoaXMudW52aXNpdGVkQ2VsbHMgPSAgdGhpcy5yZW1vdmVVbnZpc2l0ZWQoY2VsbClcbiAgICAgICAgLy8gdGhpcy5zZXREYW5nZXJMZXZlbCgpIFxuICAgIH1cblxuICAgIHJlbW92ZVVudmlzaXRlZCh2aXNpdGVkKSB7XG4gICAgICAgIGxldCB1bnZpc2l0ZWQgPSBbXVxuICAgICAgICB0aGlzLnVudmlzaXRlZENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodmlzaXRlZC5kYXRhc2V0LmNvbHVtbikgPT09IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pICYmIHBhcnNlSW50KHZpc2l0ZWQuZGF0YXNldC5yb3cpID09PSBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW52aXNpdGVkLnB1c2goY2VsbClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHVudmlzaXRlZFxuICAgIH1cblxuICAgIC8vIC8vIEFkZCB0aGUgY2VsbCBhcyB2aXNpdGVkIGFuZCB1cGRhdGUgdGhlIHNhZmVDZWxsc1xuICAgIC8vIHVwZGF0ZShjZWxsLCBhZGphY2VudENlbGxzLCBwZXJjZXB0LCB3b3JsZCkge1xuICAgIC8vICAgICAvLyBBZGQgdGhlIGN1cnJlbnQgY2VsbCBhcyB2aXNpdGVkXG4gICAgLy8gICAgIHRoaXMudmlzaXRlZENlbGxzLnB1c2goY2VsbClcbiAgICAvLyAgICAgLy8gVXBkYXRlIHRoZSBzYWZlQ2VsbHNcbiAgICAvLyAgICAgLy8gQWRkIHRoZSBhZGphY2VudCBjZWxscyBpbiBzYWZlQ2VsbHMgaWYgaXQgaXMgc2FmZVxuICAgIC8vICAgICBhZGphY2VudENlbGxzLmZvckVhY2goYWRqYWNlbnRDZWxsID0+IHtcbiAgICAvLyAgICAgICAgIGlmICghcGVyY2VwdC5icmVlemUgJiYgIXBlcmNlcHQuZmFydCkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2FmZUNlbGxzLnB1c2goYWRqYWNlbnRDZWxsKVxuICAgIC8vICAgICAgICAgfSBcbiAgICAvLyAgICAgICAgIGlmIChwZXJjZXB0LmZhcnQpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyBDaGVjayB0aGUgYWRqYWNlbnQgY2VsbHMgb2YgZWFjaCBvZiB0aGUgYWRqYWNlbnQgY2VsbHNcbiAgICAvLyAgICAgICAgICAgICBsZXQgY29vcmQgPSB3b3JsZC5nZXRMb2NhdGlvbihhZGphY2VudENlbGwpXG4gICAgLy8gICAgICAgICAgICAgbGV0IGFkamFjZW50Q2VsbHNvZkFkamFjZW50Q2VsbCA9IHdvcmxkLmdldEFkamFjZW50Q2VsbHMoY29vcmQpXG5cbiAgICAvLyAgICAgICAgICAgICBsZXQgYWRqYWNlbnRWaXNpdGVkID0gW11cbiAgICAvLyAgICAgICAgICAgICBhZGphY2VudENlbGxzb2ZBZGphY2VudENlbGwuZm9yRWFjaChjZWxsID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhIHZpc2l0ZWQgY2VsbCBvZiBlYWNoIG9mIHRoZSBhZGphY2VudCBjZWxsc1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Zpc2l0ZWQoY2VsbCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGFkamFjZW50VmlzaXRlZC5wdXNoKGNlbGwpXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgIC8vIENoZWNrIGlmIG9uZSBvZiB0aGUgdmlzaXRlZCBhZGphY2VudCBjZWxsIGNvbnRhaW5zIGEgZmFydCB0b29cblxuICAgIC8vICAgICAgICAgICAgIC8vIFNldCB0aGUgZGFuZ2VyIGxldmVsIG9mIHRoaXMgYWRqYWNlbnQgY2VsbCBjb3JyZXNwb25kaW5nIHRvIHRoZSBudW1iZXIgb2YgZmFydHNcbiAgICAvLyAgICAgICAgICAgICAvLyBJZiB2aXNpdGVkIGFkamFjZW50IGNlbGwgZG9lcyBub3QgY29udGFpbiBmYXJ0LCB0aGVuIGl0IGlzIHNhZmUuXG4gICAgLy8gICAgICAgICB9IFxuICAgIC8vICAgICAgICAgaWYgKHBlcmNlcHQuZmFydCkge1xuICAgIC8vICAgICAgICAgICAgIC8vIFNpbWlsYXIgdG8gZmFydFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIC8vIGlzVmlzaXRlZChjZWxsKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnZpc2l0ZWRDZWxscy5pbmNsdWRlcyhjZWxsKVxuICAgIC8vIH1cbn1cblxuZXhwb3J0IHsgS25vd2xlZGdlQmFzZSB9IiwiY2xhc3MgV3VtcHVzV29ybGQge1xuICAgIGNvbnN0cnVjdG9yKGNlbGxzKSB7XG4gICAgICAgIHRoaXMuY2VsbHMgPSBjZWxsc1xuICAgICAgICB0aGlzLmFnZW50U3RhcnRpbmdMb2NhdGlvbiA9IFtdXG4gICAgfVxuXG4gICAgLy8gQWRkIHd1bXB1cyBhbmQgc3RlbmNoIGFyb3VuZCBpdFxuICAgIGFkZFd1bXB1cyhwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdyksIGNlbGwuZGF0YXNldC5jb2x1bW4pXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHd1bXB1c1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBwb3NZICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBwb3NYKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfkbknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgdGhlIHN0ZW5jaFxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBwb3NZKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSAocG9zWCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0ZhcnQoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn5KpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSAocG9zWCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0ZhcnQoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn5KpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gcG9zWCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gKHBvc1kgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNGYXJ0KGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+SqSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gKHBvc1kgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNGYXJ0KGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+SqSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gIFxuICAgIC8vIEFkZCBwaXQgYW5kIGJyZWV6ZSBhcm91bmQgaXRcbiAgICBhZGRQaXQocG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpLCBjZWxsLmRhdGFzZXQuY29sdW1uKVxuICAgICAgICAgICAgLy8gQWRkIHRoZSB3dW1wdXNcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gcG9zWSAmJiBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gcG9zWCkge1xuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn5Wz77iPJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIHRoZSBzdGVuY2hcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gcG9zWSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gKHBvc1ggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNCcmVlemUoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ICs9ICfwn42DJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSAocG9zWCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0JyZWV6ZShjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfjYMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBwb3NYKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSAocG9zWSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb250YWluc0JyZWV6ZShjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgKz0gJ/CfjYMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IChwb3NZICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zQnJlZXplKGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+NgydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGFkZEFnZW50KHBvc1ggPSAwLCBwb3NZID0gMykge1xuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IHBvc1kgJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IHBvc1gpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSAn8J+nnSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5hZ2VudFN0YXJ0aW5nTG9jYXRpb24gPSBbcG9zWCwgcG9zWV1cbiAgICB9XG5cbiAgICByZW1vdmVBZ2VudChwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0gcG9zWSAmJiBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gcG9zWCkge1xuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ID0gY2VsbC5pbm5lclRleHQucmVwbGFjZSgv8J+nnS9nLCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb250YWluc0ZhcnQoY2VsbCkge1xuICAgICAgICByZXR1cm4gY2VsbC5pbm5lclRleHQuaW5jbHVkZXMoJ/CfkqknKVxuICAgIH1cblxuICAgIGNvbnRhaW5zQnJlZXplKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGNlbGwuaW5uZXJUZXh0LmluY2x1ZGVzKCfwn42DJylcbiAgICB9XG4gICAgLy8gQ29vcmQgdG8gQ2VsbFxuICAgIGdldENlbGwoY29vcmQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmQpXG4gICAgICAgIGxldCBjdXJyZW50Q2VsbFxuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IGNvb3JkWzBdICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gY2VsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY3VycmVudENlbGxcbiAgICB9XG4gICAgLy8gLy8gQ2VsbCB0byBDb29yZFxuICAgIGdldExvY2F0aW9uKGNlbGwpIHtcbiAgICAgICAgbGV0IGNvb3JkID0gW11cbiAgICAgICAgY29vcmQucHVzaChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSlcbiAgICAgICAgY29vcmQucHVzaChwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSlcbiAgICAgICAgcmV0dXJuIGNvb3JkXG4gICAgfVxuXG4gICAgZ2V0QWRqYWNlbnRDZWxscyhjb29yZCkge1xuICAgICAgICBsZXQgYWRqYWNlbnRDZWxscyA9IFtdXG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gY29vcmRbMF0gJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IGNvb3JkWzFdIC0gMSkge1xuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChjZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbikgPT09IGNvb3JkWzBdICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBjb29yZFsxXSArIDEpIHtcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGxzLnB1c2goY2VsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pID09PSBjb29yZFswXSAtIDEgJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKGNlbGwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChjZWxsLmRhdGFzZXQuY29sdW1uKSA9PT0gY29vcmRbMF0gKyAxICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChjZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhZGphY2VudENlbGxzKVxuICAgICAgICByZXR1cm4gYWRqYWNlbnRDZWxsc1xuICAgIH1cbn1cblxuZXhwb3J0IHsgV3VtcHVzV29ybGQgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IEFnZW50IH0gZnJvbSAnLi9hZ2VudCdcbmltcG9ydCB7IFd1bXB1c1dvcmxkIH0gZnJvbSAnLi93b3JsZCdcblxuLy8gV3VtcHVzIFdvcmxkXG5jb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZCcpXG5jb25zdCBjZWxscyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJylcblxuY29uc3Qgd29ybGQgPSBuZXcgV3VtcHVzV29ybGQoY2VsbHMpXG5cbndvcmxkLmFkZFd1bXB1cygwLCAxKVxud29ybGQuYWRkUGl0KDIsIDEpXG53b3JsZC5hZGRQaXQoMiwgMylcbndvcmxkLmFkZFBpdCgzLCAwKVxud29ybGQuYWRkQWdlbnQoKVxuXG5jb25zdCBhZ2VudCA9IG5ldyBBZ2VudCh3b3JsZClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=