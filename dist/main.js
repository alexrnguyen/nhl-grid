"use strict";
(self["webpackChunknhl_grid"] = self["webpackChunknhl_grid"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/NHL.ttf */ "./src/fonts/NHL.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* || General Styles */

* {
  box-sizing: border-box;
}

:root {
  --grid-gap: 1rem;
}

@font-face {
  font-family: 'NHL';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#navbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

#site-logo {
  font-family: 'NHL';
  font-size: 2rem;
  color: white;
}

#help-button {
  border: none;
  background-color: transparent;
}

.icon {
  width: 2rem;
}

#content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 5fr;
  width: 600px;
  height: 600px;
  left: -75px;
}

footer {
  margin: 5rem 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  color: white;
}

/* || Categories */
#row-categories {
  grid-column: 1;
  grid-row: 2;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
}

#col-categories {
  grid-column: 2;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
}

/* || Grid */
#player-grid {
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  border: 2px solid white;
}

.category {
  width: 150px;
  height: 150px;
}

.grid-item {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  border: 2px solid white;
  width: 150px;
  height: 150px;
}

.grid-item:hover {
  background-color: gray;
}

.grid-item.correct {
  border: 4px solid green;
  z-index: 1;
}

.player-img {
  grid-row: span 4;
  width: 100%;
}

.player-name {
  margin: 0;
  z-index: 1;
  text-align: center;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

/* || Search Modal */

.modal {
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 1rem;
  z-index: 3;
  display: grid;
  place-items: center;
}

#modal-header-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#modal-header-container h1 {
  grid-column: 2;
  place-self: center;
}

.close-modal {
  grid-column: 3;
  justify-self: end;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: transparent;
}

#search-player {
  border-radius: 5px;
  min-height: 1.5rem;
  width: 100%;
  font-size: 1rem;
  border: 1px solid black;
}

#player-items-container {
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
}

/* || Player Item */
.player-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.player-result-left {
  display: flex;
  gap: 5px;
}

.result-submit-button {
  align-self: center;
  background-color: green;
  color: white;
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
}
/* Source: https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */
#overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 2;
}

.hidden {
  visibility: hidden;
}

#winner-text {
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,sBAAsB;;AAEtB;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,4CAA4B;AAC9B;;AAEA;EACE,yCAAyC;EACzC,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,WAAW;AACb;;AAEA;EACE,cAAc;EACd,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;AACd;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA,YAAY;AACZ;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,oCAAoC;EACpC,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;AACA,oFAAoF;AACpF;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["/* || General Styles */\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --grid-gap: 1rem;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'NHL';\r\n  src: url('../fonts/NHL.ttf');\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#navbar {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n#site-logo {\r\n  font-family: 'NHL';\r\n  font-size: 2rem;\r\n  color: white;\r\n}\r\n\r\n#help-button {\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.icon {\r\n  width: 2rem;\r\n}\r\n\r\n#content {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  grid-template-rows: 1fr 5fr;\r\n  width: 600px;\r\n  height: 600px;\r\n  left: -75px;\r\n}\r\n\r\nfooter {\r\n  margin: 5rem 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n/* || Categories */\r\n#row-categories {\r\n  grid-column: 1;\r\n  grid-row: 2;\r\n  display: grid;\r\n  grid-template-rows: repeat(3, 1fr);\r\n  place-items: center;\r\n}\r\n\r\n#col-categories {\r\n  grid-column: 2;\r\n  grid-row: 1;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  place-items: center;\r\n}\r\n\r\n/* || Grid */\r\n#player-grid {\r\n  grid-column: 2;\r\n  grid-row: 2;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  place-items: center;\r\n  border: 2px solid white;\r\n}\r\n\r\n.category {\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.grid-item {\r\n  display: grid;\r\n  grid-template-rows: repeat(4, 1fr);\r\n  border: 2px solid white;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.grid-item:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.grid-item.correct {\r\n  border: 4px solid green;\r\n  z-index: 1;\r\n}\r\n\r\n.player-img {\r\n  grid-row: span 4;\r\n  width: 100%;\r\n}\r\n\r\n.player-name {\r\n  margin: 0;\r\n  z-index: 1;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n}\r\n\r\n/* || Search Modal */\r\n\r\n.modal {\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  z-index: 3;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n#modal-header-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n#modal-header-container h1 {\r\n  grid-column: 2;\r\n  place-self: center;\r\n}\r\n\r\n.close-modal {\r\n  grid-column: 3;\r\n  justify-self: end;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  border: 1px solid black;\r\n  background-color: transparent;\r\n}\r\n\r\n#search-player {\r\n  border-radius: 5px;\r\n  min-height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  border: 1px solid black;\r\n}\r\n\r\n#player-items-container {\r\n  width: 100%;\r\n  max-height: 50vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/* || Player Item */\r\n.player-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.player-result-left {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.result-submit-button {\r\n  align-self: center;\r\n  background-color: green;\r\n  color: white;\r\n  border-radius: 10px;\r\n  padding: 0.5rem;\r\n  border: none;\r\n}\r\n/* Source: https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */\r\n#overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 2;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n#winner-text {\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/categories.js":
/*!***************************!*\
  !*** ./src/categories.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chooseCategories: () => (/* binding */ chooseCategories)
/* harmony export */ });
/**
 * Choose categories for a given axis (either row or column)
 * @param {*} axis Specifies whether a category is a row or column category. Must be either 'row' or 'col'
 */
const chooseCategories = async (axis) => {
  const categories = document.createElement("div");
  categories.id = `${axis}-categories`;

  const content = document.getElementById("content");
  content.appendChild(categories);

  for (let i = 0; i < 3; i++) {
    const category = document.createElement("img");
    category.classList.add("category");
    category.classList.add(axis);
    await randomCategory(category);
    categories.appendChild(category);
  }
};

/**
 * Generate a random category
 * @param {*} category Category HTML element
 */
const randomCategory = async (category) => {
  const response = await fetch("/api/teams");
  const teamAbbreviations = await response.json();
  // Get a random team's abbreviation and store it in the category's dataset
  const randNum = Math.floor(Math.random() * 30);
  const randomTeam = teamAbbreviations[randNum];

  const teamAbbreviation = randomTeam;
  if (checkCategories(teamAbbreviation)) {
    category.dataset.team = teamAbbreviation;
    category.src = `https://assets.nhle.com/logos/nhl/svg/${teamAbbreviation}_dark.svg`;
  } else {
    // Category chosen is an inactive team. Choose another category
    await randomCategory(category);
  }
};

/**
 * Ensures that a category is not used before it is set
 * @param {*} teamAbbreviation Abbreviation of NHL team (3 characters)
 * @returns True if a category has not been used on the game board, false otherwise
 */
const checkCategories = (teamAbbreviation) => {
  const categories = document.querySelectorAll(".category");
  let validCategory = true;

  // Ensure that no team is chosen more than once!
  Array.from(categories).forEach((category) => {
    if (category.dataset.team === teamAbbreviation) {
      validCategory = false;
    }
  });
  return validCategory;
};




/***/ }),

/***/ "./src/controllers/game-controller.js":
/*!********************************************!*\
  !*** ./src/controllers/game-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkGameOver: () => (/* binding */ checkGameOver),
/* harmony export */   checkPlayer: () => (/* binding */ checkPlayer),
/* harmony export */   generateAbbreviationMap: () => (/* binding */ generateAbbreviationMap)
/* harmony export */ });
/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/game-over-modal */ "./src/ui/game-over-modal.js");


/**
 * Verify that a given player has played for both teams given as arguments. Display a window alert
 * if a player has not played for both team1 and team2.
 * @param {*} team1 First team to check for (a category on the grid)
 * @param {*} team2 Second team to check for (a category on the grid)
 * @param {*} player Player to check
 * @returns True if a player has played for both teams, false otherwise
 */
const checkPlayer = async (team1, team2, player) => {
  const abbreviationToTeamMap = generateAbbreviationMap();

  const team1Name = abbreviationToTeamMap.get(team1);
  const team2Name = abbreviationToTeamMap.get(team2);
  console.log(team1Name, team2Name);
  const teamsResponse = await fetch(`/api/player/teams/${player.playerId}`);
  const teams = await teamsResponse.json();

  let playedForTeam1 = false;
  let playedForTeam2 = false;
  for (const team of Array.from(teams)) {
    if (team === team1Name) {
      playedForTeam1 = true;
    } else if (team === team2Name) {
      playedForTeam2 = true;
    }
  }
  if (playedForTeam1 && playedForTeam2 && !checkIfPlayerUsed(player.fullName)) {
    return true;
  } else {
    if (!playedForTeam1 || !playedForTeam2) {
      window.alert("Incorrect");
    }
    return false;
  }
};

/**
 * Displays winner modal if all cells have a player
 */
const checkGameOver = () => {
  if (allFilled()) {
    (0,_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_0__.triggerWinnerModal)();
  }
};

/**
 * Check if all cells have a player assigned to them
 * @returns True if all cells have a player assigned to them, false otherwise
 */
const allFilled = () => {
  const allGridItems = document.querySelectorAll(".grid-item");
  return Array.from(allGridItems).every((gridItem) =>
    gridItem.classList.contains("correct")
  );
};

/**
 * Checks if the player is being used in another cell
 * @param {*} player Player to check
 * @returns True if the player is being used in another cell, false otherwise 
 */
const checkIfPlayerUsed = (player) => {
  const playersUsed = document.querySelectorAll(".player-name");
  const namesOfPlayers = [];

  playersUsed.forEach((player) => {
    if (player.textContent !== "") {
      namesOfPlayers.push(player.textContent);
    }
  });
  if (namesOfPlayers.includes(player)) {
    window.alert(`You have already used ${player}!`);
    return true;
  } else {
    return false;
  }
};

/**
 * Generates a map that maps every team abbreviation to a team
 * @returns Team abbreviation to team map
 */
const generateAbbreviationMap = () => {
  const abbreviationToTeamMap = new Map();
  abbreviationToTeamMap.set("ANA", "Anaheim Ducks");
  abbreviationToTeamMap.set("ARI", "Arizona Coyotes");
  abbreviationToTeamMap.set("BOS", "Boston Bruins");
  abbreviationToTeamMap.set("BUF", "Buffalo Sabres");
  abbreviationToTeamMap.set("CAR", "Carolina Hurricanes");
  abbreviationToTeamMap.set("CBJ", "Columbus Blue Jackets");
  abbreviationToTeamMap.set("CGY", "Calgary Flames");
  abbreviationToTeamMap.set("CHI", "Chicago Blackhawks");
  abbreviationToTeamMap.set("COL", "Colorado Avalanche");
  abbreviationToTeamMap.set("DAL", "Dallas Stars");
  abbreviationToTeamMap.set("DET", "Detroit Red Wings");
  abbreviationToTeamMap.set("EDM", "Edmonton Oilers");
  abbreviationToTeamMap.set("FLA", "Florida Panthers");
  abbreviationToTeamMap.set("LAK", "Los Angeles Kings");
  abbreviationToTeamMap.set("MIN", "Minnesota Wild");
  abbreviationToTeamMap.set("MTL", "Montréal Canadiens");
  abbreviationToTeamMap.set("NJD", "New Jersey Devils");
  abbreviationToTeamMap.set("NSH", "Nashville Predators");
  abbreviationToTeamMap.set("NYI", "New York Islanders");
  abbreviationToTeamMap.set("NYR", "New York Rangers");
  abbreviationToTeamMap.set("OTT", "Ottawa Senators");
  abbreviationToTeamMap.set("PHI", "Philadelphia Flyers");
  abbreviationToTeamMap.set("PIT", "Pittsburgh Penguins");
  // abbreviationToTeamMap.set("SEA", "Seattle Kraken");
  abbreviationToTeamMap.set("SJS", "San Jose Sharks");
  abbreviationToTeamMap.set("STL", "St. Louis Blues");
  abbreviationToTeamMap.set("TBL", "Tampa Bay Lightning");
  abbreviationToTeamMap.set("TOR", "Toronto Maple Leafs");
  abbreviationToTeamMap.set("VAN", "Vancouver Canucks");
  // abbreviationToTeamMap.set("VGK", "Vegas Golden Knights");
  abbreviationToTeamMap.set("WPG", "Winnipeg Jets");
  abbreviationToTeamMap.set("WSH", "Washington Capitals");
  return abbreviationToTeamMap;
};




/***/ }),

/***/ "./src/controllers/search-controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/search-controller.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSearchResults: () => (/* binding */ getSearchResults)
/* harmony export */ });
/* harmony import */ var _ui_search_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/search-modal */ "./src/ui/search-modal.js");


/**
 * Get search results for a given player from the NHL API
 * @param {*} playerName Name of player to search for
 * @returns Data from search results retrieved from the NHL API
 */
const getSearchResults = async (playerName) => {
  // TO-DO: Handle errors for this request
  const response = await fetch(`/api/search/${playerName}`);
  let data = await response.json();
  (0,_ui_search_modal__WEBPACK_IMPORTED_MODULE_0__.clearSearchResults)();
  return data;
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _ui_search_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/search-modal */ "./src/ui/search-modal.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./src/categories.js");
/* harmony import */ var _ui_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/grid-item */ "./src/ui/grid-item.js");
/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-over-modal */ "./src/ui/game-over-modal.js");
/* harmony import */ var _assets_icons8_hockey_64_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons8-hockey-64.png */ "./src/assets/icons8-hockey-64.png");
/* harmony import */ var _ui_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/navbar */ "./src/ui/navbar.js");








/**
 * Start a new game by creating a game board and selecting categories for each row and column
 */
const initializeGame = async () => {
  document.body.appendChild((0,_ui_navbar__WEBPACK_IMPORTED_MODULE_6__["default"])());
  document.body.appendChild((0,_ui_search_modal__WEBPACK_IMPORTED_MODULE_1__.createSearchModal)());
  document.body.appendChild((0,_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_4__.createWinnerModal)());
  document.body.appendChild(createOverlay());

  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  const grid = document.createElement("div");
  grid.id = "player-grid";
  content.appendChild(grid);

  // TO-DO: Handle errors for this request
  await Promise.all([(0,_categories__WEBPACK_IMPORTED_MODULE_2__.chooseCategories)("col"), (0,_categories__WEBPACK_IMPORTED_MODULE_2__.chooseCategories)("row")]);
  for (let i = 0; i < 9; i++) {
    createGridItem(i);
  }

  const acknowledgement = document.createElement("footer");
  acknowledgement.textContent =
    "All logos and images owned by the National Hockey League. Use of any logos on this website does not constitute a sponsorship or endorsement by the teams, league, or trademark holders.";
  document.body.appendChild(acknowledgement);
};

/**
 * Create a square on the game board (grid item)
 * @param {*} index Index on game board for grid item (number from 0-8)
 */
const createGridItem = (index) => {
  const grid = document.getElementById("player-grid");
  const gridItem = document.createElement("div");
  grid.appendChild(gridItem);

  gridItem.classList.add("grid-item");
  gridItem.dataset.index = index;

  const playerImg = document.createElement("img");
  playerImg.classList.add("player-img");

  const playerName = document.createElement("p");
  playerName.classList.add("player-name");
  gridItem.appendChild(playerImg);
  gridItem.appendChild(playerName);

  setCategories(gridItem);

  gridItem.addEventListener("click", () => {
    // Only open search modal if the grid item does not have a valid player
    if (!gridItem.classList.contains("correct")) {
      (0,_ui_search_modal__WEBPACK_IMPORTED_MODULE_1__.triggerSearchModal)(gridItem);
    }
  });
};

/**
 * Create the overlay that darkens the background when a modal is displayed
 * @returns Overlay HTML element
 */
const createOverlay = () => {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("hidden");
  return overlay;
};

/**
 * Set categories for grid item to the categories given by the row and column of the grid item
 * @param {*} gridItem Grid item to set categories for
 */
const setCategories = (gridItem) => {
  const index = gridItem.dataset.index;
  const row = (0,_ui_grid_item__WEBPACK_IMPORTED_MODULE_3__.getRow)(index);
  const col = (0,_ui_grid_item__WEBPACK_IMPORTED_MODULE_3__.getCol)(index);

  const rowCategory = document.querySelectorAll(".category.row")[row];
  const colCategory = document.querySelectorAll(".category.col")[col];

  const rowTeam = rowCategory.dataset.team;
  const colTeam = colCategory.dataset.team;

  gridItem.dataset.team1 = rowTeam;
  gridItem.dataset.team2 = colTeam;
};

initializeGame();


/***/ }),

/***/ "./src/ui/game-over-modal.js":
/*!***********************************!*\
  !*** ./src/ui/game-over-modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWinnerModal: () => (/* binding */ createWinnerModal),
/* harmony export */   triggerWinnerModal: () => (/* binding */ triggerWinnerModal)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");


/**
 * Creates the modal displayed when the user wins the game
 * @returns Modal displayed when the user wins the game
 */
const createWinnerModal = () => {
  const winnerModal = document.createElement("div");
  winnerModal.classList.add("modal");
  winnerModal.classList.add("hidden");
  winnerModal.id = "winner-modal";

  const closeButton = document.createElement("button");
  closeButton.className = "close-modal";
  closeButton.textContent = "X";

  closeButton.addEventListener("click", () => {
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.toggleModal)(winnerModal);
  });

  const text = document.createElement("p");
  text.id = "winner-text";
  text.textContent = "You Win!";

  winnerModal.appendChild(closeButton);
  winnerModal.appendChild(text);
  return winnerModal;
};

/**
 * Toggles the winner modal
 */
const triggerWinnerModal = () => {
  const winnerModal = document.getElementById("winner-modal");
  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.toggleModal)(winnerModal);
};




/***/ }),

/***/ "./src/ui/grid-item.js":
/*!*****************************!*\
  !*** ./src/ui/grid-item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlayer: () => (/* binding */ addPlayer),
/* harmony export */   getCol: () => (/* binding */ getCol),
/* harmony export */   getRow: () => (/* binding */ getRow)
/* harmony export */ });
/**
 * Adds a player's name and image to the game board
 * @param {*} gridItem Grid item where the player's name and image is added 
 * @param {*} player JSON object containing information about a player
 */
const addPlayer = (gridItem, player) => {
  gridItem.classList.add("correct");
  const gridItemChildren = Array.from(gridItem.childNodes);

  // Get latest player image
  const playerImg = gridItemChildren[0];
  playerImg.src = `https://assets.nhle.com/mugs/nhl/latest/${player.playerId}.png`;
  const playerName = gridItemChildren[1];
  playerName.textContent = `${player.firstName.default} ${player.lastName.default}`;
};

/**
 * Gets the row of an index
 * @param {*} index Index of a grid item on game board
 * @returns Row of index
 */
const getRow = (index) => {
  return Math.floor(index / 3);
};

/**
 * Gets the column of an index
 * @param {*} index Index of a grid item on game board
 * @returns Column of index
 */
const getCol = (index) => {
  return index % 3;
};




/***/ }),

/***/ "./src/ui/modal.js":
/*!*************************!*\
  !*** ./src/ui/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleModal: () => (/* binding */ toggleModal)
/* harmony export */ });
/**
 * Toggles the visibility of a modal
 * @param {*} modal Modal to toggle
 */
const toggleModal = (modal) => {
    const overlay = document.getElementById("overlay");
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
};



/***/ }),

/***/ "./src/ui/navbar.js":
/*!**************************!*\
  !*** ./src/ui/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_question_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/question-mark.svg */ "./src/assets/question-mark.svg");


const createNavbar = () => {
    // TODO: Add navbar containing: site name, instructions (how to play) 
    const navbar = document.createElement("div");
    navbar.id = "navbar";

    const logo = document.createElement("span");
    logo.id = "site-logo";
    logo.textContent = "NHL GRID";

    const helpButton = document.createElement("button");
    helpButton.id = "help-button";

    const helpIcon = new Image();
    helpIcon.src = _assets_question_mark_svg__WEBPACK_IMPORTED_MODULE_0__;
    helpIcon.classList.add("icon");
    helpButton.appendChild(helpIcon);

    navbar.appendChild(logo);
    navbar.appendChild(helpButton);

    return navbar;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);

/***/ }),

/***/ "./src/ui/player-result.item.js":
/*!**************************************!*\
  !*** ./src/ui/player-result.item.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-item */ "./src/ui/grid-item.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");
/* harmony import */ var _controllers_game_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/game-controller */ "./src/controllers/game-controller.js");




/**
 * Creates a row containing a player's name/date of birth and a submit button displayed 
 * in the player search modal
 * @param {*} playerName Name of player
 * @param {*} birthDate Player's date of birth
 * @param {*} playerId Player id (defined by NHL)
 * @param {*} gridItem Grid item HTML element selected by player
 * @returns
 */
const createPlayerItem = (playerName, birthDate, playerId, gridItem) => {
  const playerItem = document.createElement("div");
  playerItem.className = "player-item";

  const leftContainer = document.createElement("div");
  leftContainer.className = "player-result-left";
  const playerNameElement = document.createElement("p");
  playerNameElement.className = "player-result-name";
  playerNameElement.textContent = playerName;
  leftContainer.appendChild(playerNameElement);

  const birthDateElement = document.createElement("p");
  birthDateElement.className = "birth-date";
  birthDateElement.textContent = `(${birthDate})`;
  leftContainer.appendChild(birthDateElement);

  playerItem.appendChild(leftContainer);

  const submitButton = document.createElement("button");
  submitButton.className = "result-submit-button";
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", () =>
    onPlayerSelected(playerId, gridItem)
  );

  playerItem.appendChild(submitButton);

  return playerItem;
};

/**
 * Add a player to the game board if a player has played for both teams specified
 * by the grid item given as an argument.
 * @param {*} playerId ID of player selected in search modal
 * @param {*} gridItem Grid item selected by user
 */
const onPlayerSelected = async (playerId, gridItem) => {
  const searchModal = document.getElementById("search-modal");
  const playerResponse = await fetch(`/api/player/${playerId}`);
  const player = await playerResponse.json();
  console.log(player);

  const team1 = gridItem.dataset.team1;
  const team2 = gridItem.dataset.team2;
  const playedForBothTeams = await (0,_controllers_game_controller__WEBPACK_IMPORTED_MODULE_2__.checkPlayer)(team1, team2, player);
  if (playedForBothTeams) {
    (0,_grid_item__WEBPACK_IMPORTED_MODULE_0__.addPlayer)(gridItem, player);
  }
  document.getElementById("search-player").value = "";
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)(searchModal);
  (0,_controllers_game_controller__WEBPACK_IMPORTED_MODULE_2__.checkGameOver)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayerItem);


/***/ }),

/***/ "./src/ui/search-modal.js":
/*!********************************!*\
  !*** ./src/ui/search-modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSearchResults: () => (/* binding */ clearSearchResults),
/* harmony export */   createPlayerItem: () => (/* reexport safe */ _player_result_item__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   createSearchModal: () => (/* binding */ createSearchModal),
/* harmony export */   triggerSearchModal: () => (/* binding */ triggerSearchModal)
/* harmony export */ });
/* harmony import */ var _controllers_search_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/search-controller */ "./src/controllers/search-controller.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");
/* harmony import */ var _player_result_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-result.item */ "./src/ui/player-result.item.js");




/**
 * Creates a search modal on game initialization. The search modal is
 * hidden by default.
 * @returns Search modal HTML element
 */
const createSearchModal = () => {
  const searchModal = document.createElement("div");
  searchModal.className = "modal";
  searchModal.id = "search-modal";
  searchModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.id = "modal-header-container";

  const header = document.createElement("h1");
  header.id = "modal-header";

  const closeButton = document.createElement("button");
  closeButton.className = "close-modal";
  closeButton.textContent = "X";

  closeButton.addEventListener("click", () => {
    document.getElementById("search-player").value = "";
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)(searchModal);
  });

  headerContainer.appendChild(header);
  headerContainer.appendChild(closeButton);

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search for player...";
  searchInput.name = "search-player";
  searchInput.id = "search-player";

  const playerItemsContainer = document.createElement("div");
  playerItemsContainer.id = "player-items-container";

  searchModal.appendChild(headerContainer);
  searchModal.appendChild(searchInput);
  searchModal.appendChild(playerItemsContainer);
  return searchModal;
};

/**
 * Displays the search modal when the user clicks on a grid item with no player
 * @param {*} gridItem Grid item selected by user
 */
const triggerSearchModal = (gridItem) => {
  const searchModal = document.getElementById("search-modal");
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)(searchModal);
  clearSearchResults();
  const team1 = gridItem.dataset.team1;
  const team2 = gridItem.dataset.team2;
  const header = document.getElementById("modal-header");
  header.textContent = `${team1}-${team2}`;

  const searchInput = document.getElementById("search-player");
  const playerItemsContainer = document.getElementById(
    "player-items-container"
  );
  searchInput.oninput = async (event) => {
    const searchResults = await (0,_controllers_search_controller__WEBPACK_IMPORTED_MODULE_0__.getSearchResults)(searchInput.value);
    searchResults.forEach(async (player) => {
      const playerId = Number(player["playerId"]);
      console.log("Player", player);
      console.log("ID", playerId);
      const playerResponse = await fetch(`/api/player/${playerId}`);
      const playerData = await playerResponse.json();
      console.log("Data", playerData);
      const birthDate = playerData.birthDate;
      const name = player["name"];
      playerItemsContainer.appendChild(
        (0,_player_result_item__WEBPACK_IMPORTED_MODULE_2__["default"])(name, birthDate, playerId, gridItem)
      );
    });
  };
};

/**
 * Clears the player results shown below the search bar
 */
const clearSearchResults = () => {
  const playerItemsContainer = document.getElementById(
    "player-items-container"
  );
  playerItemsContainer.innerHTML = "";
};




/***/ }),

/***/ "./src/assets/icons8-hockey-64.png":
/*!*****************************************!*\
  !*** ./src/assets/icons8-hockey-64.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a668c418430ffd95abe5.png";

/***/ }),

/***/ "./src/assets/question-mark.svg":
/*!**************************************!*\
  !*** ./src/assets/question-mark.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be0522d8914bb56aa936.svg";

/***/ }),

/***/ "./src/fonts/NHL.ttf":
/*!***************************!*\
  !*** ./src/fonts/NHL.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3b2ab4cc3aa4903db09.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsNEdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0RkFBNEYsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxZQUFZ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFXO0FBQ2YsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNLEdBQUcsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0ZBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQWdCO0FBQ3hCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9jb250cm9sbGVycy9zZWFyY2gtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy91aS9nYW1lLW92ZXItbW9kYWwuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9zcmMvdWkvZ3JpZC1pdGVtLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL3VpL21vZGFsLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL3VpL25hdmJhci5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy91aS9wbGF5ZXItcmVzdWx0Lml0ZW0uanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9zcmMvdWkvc2VhcmNoLW1vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9OSEwudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiB8fCBHZW5lcmFsIFN0eWxlcyAqL1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tZ3JpZC1nYXA6IDFyZW07XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnTkhMJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNuYXZiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbiNzaXRlLWxvZ28ge1xyXG4gIGZvbnQtZmFtaWx5OiAnTkhMJztcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jaGVscC1idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBsZWZ0OiAtNzVweDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBtYXJnaW46IDVyZW0gMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogfHwgQ2F0ZWdvcmllcyAqL1xyXG4jcm93LWNhdGVnb3JpZXMge1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtcm93OiAyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY29sLWNhdGVnb3JpZXMge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiB8fCBHcmlkICovXHJcbiNwbGF5ZXItZ3JpZCB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmdyaWQtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmdyaWQtaXRlbS5jb3JyZWN0IHtcclxuICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucGxheWVyLWltZyB7XHJcbiAgZ3JpZC1yb3c6IHNwYW4gNDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxuICBtYXJnaW46IDA7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIHx8IFNlYXJjaCBNb2RhbCAqL1xyXG5cclxuLm1vZGFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI21vZGFsLWhlYWRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxufVxyXG5cclxuI21vZGFsLWhlYWRlci1jb250YWluZXIgaDEge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsIHtcclxuICBncmlkLWNvbHVtbjogMztcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jc2VhcmNoLXBsYXllciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNwbGF5ZXItaXRlbXMtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLyogfHwgUGxheWVyIEl0ZW0gKi9cclxuLnBsYXllci1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLnBsYXllci1yZXN1bHQtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDVweDtcclxufVxyXG5cclxuLnJlc3VsdC1zdWJtaXQtYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4vKiBTb3VyY2U6IGh0dHBzOi8vd3d3LmZyZWVjb2RlY2FtcC5vcmcvbmV3cy9ob3ctdG8tYnVpbGQtYS1tb2RhbC13aXRoLWphdmFzY3JpcHQvICovXHJcbiNvdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jd2lubmVyLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjs7QUFFdEI7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQSxvRkFBb0Y7QUFDcEY7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZ3JpZC1nYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdOSEwnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL05ITC50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXZiYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbiNzaXRlLWxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdOSEwnO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVscC1idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gIGxlZnQ6IC03NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luOiA1cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IENhdGVnb3JpZXMgKi9cXHJcXG4jcm93LWNhdGVnb3JpZXMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbC1jYXRlZ29yaWVzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IEdyaWQgKi9cXHJcXG4jcGxheWVyLWdyaWQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnkge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtaXRlbTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1pdGVtLmNvcnJlY3Qge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWltZyB7XFxyXFxuICBncmlkLXJvdzogc3BhbiA0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItbmFtZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBTZWFyY2ggTW9kYWwgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtaGVhZGVyLWNvbnRhaW5lciBoMSB7XFxyXFxuICBncmlkLWNvbHVtbjogMjtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLW1vZGFsIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAzO1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtcGxheWVyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaXRlbXMtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNTB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgUGxheWVyIEl0ZW0gKi9cXHJcXG4ucGxheWVyLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLXJlc3VsdC1sZWZ0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1zdWJtaXQtYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLyogU291cmNlOiBodHRwczovL3d3dy5mcmVlY29kZWNhbXAub3JnL25ld3MvaG93LXRvLWJ1aWxkLWEtbW9kYWwtd2l0aC1qYXZhc2NyaXB0LyAqL1xcclxcbiNvdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3dpbm5lci10ZXh0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcclxuICogQ2hvb3NlIGNhdGVnb3JpZXMgZm9yIGEgZ2l2ZW4gYXhpcyAoZWl0aGVyIHJvdyBvciBjb2x1bW4pXHJcbiAqIEBwYXJhbSB7Kn0gYXhpcyBTcGVjaWZpZXMgd2hldGhlciBhIGNhdGVnb3J5IGlzIGEgcm93IG9yIGNvbHVtbiBjYXRlZ29yeS4gTXVzdCBiZSBlaXRoZXIgJ3Jvdycgb3IgJ2NvbCdcclxuICovXHJcbmNvbnN0IGNob29zZUNhdGVnb3JpZXMgPSBhc3luYyAoYXhpcykgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhdGVnb3JpZXMuaWQgPSBgJHtheGlzfS1jYXRlZ29yaWVzYDtcclxuXHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNhdGVnb3JpZXMpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xyXG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChheGlzKTtcclxuICAgIGF3YWl0IHJhbmRvbUNhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBjYXRlZ29yeVxyXG4gKiBAcGFyYW0geyp9IGNhdGVnb3J5IENhdGVnb3J5IEhUTUwgZWxlbWVudFxyXG4gKi9cclxuY29uc3QgcmFuZG9tQ2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS90ZWFtc1wiKTtcclxuICBjb25zdCB0ZWFtQWJicmV2aWF0aW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyBHZXQgYSByYW5kb20gdGVhbSdzIGFiYnJldmlhdGlvbiBhbmQgc3RvcmUgaXQgaW4gdGhlIGNhdGVnb3J5J3MgZGF0YXNldFxyXG4gIGNvbnN0IHJhbmROdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCk7XHJcbiAgY29uc3QgcmFuZG9tVGVhbSA9IHRlYW1BYmJyZXZpYXRpb25zW3JhbmROdW1dO1xyXG5cclxuICBjb25zdCB0ZWFtQWJicmV2aWF0aW9uID0gcmFuZG9tVGVhbTtcclxuICBpZiAoY2hlY2tDYXRlZ29yaWVzKHRlYW1BYmJyZXZpYXRpb24pKSB7XHJcbiAgICBjYXRlZ29yeS5kYXRhc2V0LnRlYW0gPSB0ZWFtQWJicmV2aWF0aW9uO1xyXG4gICAgY2F0ZWdvcnkuc3JjID0gYGh0dHBzOi8vYXNzZXRzLm5obGUuY29tL2xvZ29zL25obC9zdmcvJHt0ZWFtQWJicmV2aWF0aW9ufV9kYXJrLnN2Z2A7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIENhdGVnb3J5IGNob3NlbiBpcyBhbiBpbmFjdGl2ZSB0ZWFtLiBDaG9vc2UgYW5vdGhlciBjYXRlZ29yeVxyXG4gICAgYXdhaXQgcmFuZG9tQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbnN1cmVzIHRoYXQgYSBjYXRlZ29yeSBpcyBub3QgdXNlZCBiZWZvcmUgaXQgaXMgc2V0XHJcbiAqIEBwYXJhbSB7Kn0gdGVhbUFiYnJldmlhdGlvbiBBYmJyZXZpYXRpb24gb2YgTkhMIHRlYW0gKDMgY2hhcmFjdGVycylcclxuICogQHJldHVybnMgVHJ1ZSBpZiBhIGNhdGVnb3J5IGhhcyBub3QgYmVlbiB1c2VkIG9uIHRoZSBnYW1lIGJvYXJkLCBmYWxzZSBvdGhlcndpc2VcclxuICovXHJcbmNvbnN0IGNoZWNrQ2F0ZWdvcmllcyA9ICh0ZWFtQWJicmV2aWF0aW9uKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlcIik7XHJcbiAgbGV0IHZhbGlkQ2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBubyB0ZWFtIGlzIGNob3NlbiBtb3JlIHRoYW4gb25jZSFcclxuICBBcnJheS5mcm9tKGNhdGVnb3JpZXMpLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcnkuZGF0YXNldC50ZWFtID09PSB0ZWFtQWJicmV2aWF0aW9uKSB7XHJcbiAgICAgIHZhbGlkQ2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gdmFsaWRDYXRlZ29yeTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNob29zZUNhdGVnb3JpZXMgfTtcclxuIiwiaW1wb3J0IHsgdHJpZ2dlcldpbm5lck1vZGFsIH0gZnJvbSBcIi4uL3VpL2dhbWUtb3Zlci1tb2RhbFwiO1xyXG5cclxuLyoqXHJcbiAqIFZlcmlmeSB0aGF0IGEgZ2l2ZW4gcGxheWVyIGhhcyBwbGF5ZWQgZm9yIGJvdGggdGVhbXMgZ2l2ZW4gYXMgYXJndW1lbnRzLiBEaXNwbGF5IGEgd2luZG93IGFsZXJ0XHJcbiAqIGlmIGEgcGxheWVyIGhhcyBub3QgcGxheWVkIGZvciBib3RoIHRlYW0xIGFuZCB0ZWFtMi5cclxuICogQHBhcmFtIHsqfSB0ZWFtMSBGaXJzdCB0ZWFtIHRvIGNoZWNrIGZvciAoYSBjYXRlZ29yeSBvbiB0aGUgZ3JpZClcclxuICogQHBhcmFtIHsqfSB0ZWFtMiBTZWNvbmQgdGVhbSB0byBjaGVjayBmb3IgKGEgY2F0ZWdvcnkgb24gdGhlIGdyaWQpXHJcbiAqIEBwYXJhbSB7Kn0gcGxheWVyIFBsYXllciB0byBjaGVja1xyXG4gKiBAcmV0dXJucyBUcnVlIGlmIGEgcGxheWVyIGhhcyBwbGF5ZWQgZm9yIGJvdGggdGVhbXMsIGZhbHNlIG90aGVyd2lzZVxyXG4gKi9cclxuY29uc3QgY2hlY2tQbGF5ZXIgPSBhc3luYyAodGVhbTEsIHRlYW0yLCBwbGF5ZXIpID0+IHtcclxuICBjb25zdCBhYmJyZXZpYXRpb25Ub1RlYW1NYXAgPSBnZW5lcmF0ZUFiYnJldmlhdGlvbk1hcCgpO1xyXG5cclxuICBjb25zdCB0ZWFtMU5hbWUgPSBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuZ2V0KHRlYW0xKTtcclxuICBjb25zdCB0ZWFtMk5hbWUgPSBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuZ2V0KHRlYW0yKTtcclxuICBjb25zb2xlLmxvZyh0ZWFtMU5hbWUsIHRlYW0yTmFtZSk7XHJcbiAgY29uc3QgdGVhbXNSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3BsYXllci90ZWFtcy8ke3BsYXllci5wbGF5ZXJJZH1gKTtcclxuICBjb25zdCB0ZWFtcyA9IGF3YWl0IHRlYW1zUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBsZXQgcGxheWVkRm9yVGVhbTEgPSBmYWxzZTtcclxuICBsZXQgcGxheWVkRm9yVGVhbTIgPSBmYWxzZTtcclxuICBmb3IgKGNvbnN0IHRlYW0gb2YgQXJyYXkuZnJvbSh0ZWFtcykpIHtcclxuICAgIGlmICh0ZWFtID09PSB0ZWFtMU5hbWUpIHtcclxuICAgICAgcGxheWVkRm9yVGVhbTEgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0ZWFtID09PSB0ZWFtMk5hbWUpIHtcclxuICAgICAgcGxheWVkRm9yVGVhbTIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAocGxheWVkRm9yVGVhbTEgJiYgcGxheWVkRm9yVGVhbTIgJiYgIWNoZWNrSWZQbGF5ZXJVc2VkKHBsYXllci5mdWxsTmFtZSkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIXBsYXllZEZvclRlYW0xIHx8ICFwbGF5ZWRGb3JUZWFtMikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJJbmNvcnJlY3RcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIERpc3BsYXlzIHdpbm5lciBtb2RhbCBpZiBhbGwgY2VsbHMgaGF2ZSBhIHBsYXllclxyXG4gKi9cclxuY29uc3QgY2hlY2tHYW1lT3ZlciA9ICgpID0+IHtcclxuICBpZiAoYWxsRmlsbGVkKCkpIHtcclxuICAgIHRyaWdnZXJXaW5uZXJNb2RhbCgpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhbGwgY2VsbHMgaGF2ZSBhIHBsYXllciBhc3NpZ25lZCB0byB0aGVtXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgYWxsIGNlbGxzIGhhdmUgYSBwbGF5ZXIgYXNzaWduZWQgdG8gdGhlbSwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAqL1xyXG5jb25zdCBhbGxGaWxsZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWxsR3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLWl0ZW1cIik7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oYWxsR3JpZEl0ZW1zKS5ldmVyeSgoZ3JpZEl0ZW0pID0+XHJcbiAgICBncmlkSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJjb3JyZWN0XCIpXHJcbiAgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIHBsYXllciBpcyBiZWluZyB1c2VkIGluIGFub3RoZXIgY2VsbFxyXG4gKiBAcGFyYW0geyp9IHBsYXllciBQbGF5ZXIgdG8gY2hlY2tcclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGxheWVyIGlzIGJlaW5nIHVzZWQgaW4gYW5vdGhlciBjZWxsLCBmYWxzZSBvdGhlcndpc2UgXHJcbiAqL1xyXG5jb25zdCBjaGVja0lmUGxheWVyVXNlZCA9IChwbGF5ZXIpID0+IHtcclxuICBjb25zdCBwbGF5ZXJzVXNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLW5hbWVcIik7XHJcbiAgY29uc3QgbmFtZXNPZlBsYXllcnMgPSBbXTtcclxuXHJcbiAgcGxheWVyc1VzZWQuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcbiAgICBpZiAocGxheWVyLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XHJcbiAgICAgIG5hbWVzT2ZQbGF5ZXJzLnB1c2gocGxheWVyLnRleHRDb250ZW50KTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAobmFtZXNPZlBsYXllcnMuaW5jbHVkZXMocGxheWVyKSkge1xyXG4gICAgd2luZG93LmFsZXJ0KGBZb3UgaGF2ZSBhbHJlYWR5IHVzZWQgJHtwbGF5ZXJ9IWApO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgbWFwIHRoYXQgbWFwcyBldmVyeSB0ZWFtIGFiYnJldmlhdGlvbiB0byBhIHRlYW1cclxuICogQHJldHVybnMgVGVhbSBhYmJyZXZpYXRpb24gdG8gdGVhbSBtYXBcclxuICovXHJcbmNvbnN0IGdlbmVyYXRlQWJicmV2aWF0aW9uTWFwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFiYnJldmlhdGlvblRvVGVhbU1hcCA9IG5ldyBNYXAoKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQU5BXCIsIFwiQW5haGVpbSBEdWNrc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQVJJXCIsIFwiQXJpem9uYSBDb3lvdGVzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJCT1NcIiwgXCJCb3N0b24gQnJ1aW5zXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJCVUZcIiwgXCJCdWZmYWxvIFNhYnJlc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQ0FSXCIsIFwiQ2Fyb2xpbmEgSHVycmljYW5lc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQ0JKXCIsIFwiQ29sdW1idXMgQmx1ZSBKYWNrZXRzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJDR1lcIiwgXCJDYWxnYXJ5IEZsYW1lc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQ0hJXCIsIFwiQ2hpY2FnbyBCbGFja2hhd2tzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJDT0xcIiwgXCJDb2xvcmFkbyBBdmFsYW5jaGVcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkRBTFwiLCBcIkRhbGxhcyBTdGFyc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiREVUXCIsIFwiRGV0cm9pdCBSZWQgV2luZ3NcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkVETVwiLCBcIkVkbW9udG9uIE9pbGVyc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiRkxBXCIsIFwiRmxvcmlkYSBQYW50aGVyc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiTEFLXCIsIFwiTG9zIEFuZ2VsZXMgS2luZ3NcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIk1JTlwiLCBcIk1pbm5lc290YSBXaWxkXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJNVExcIiwgXCJNb250csOpYWwgQ2FuYWRpZW5zXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJOSkRcIiwgXCJOZXcgSmVyc2V5IERldmlsc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiTlNIXCIsIFwiTmFzaHZpbGxlIFByZWRhdG9yc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiTllJXCIsIFwiTmV3IFlvcmsgSXNsYW5kZXJzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJOWVJcIiwgXCJOZXcgWW9yayBSYW5nZXJzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJPVFRcIiwgXCJPdHRhd2EgU2VuYXRvcnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlBISVwiLCBcIlBoaWxhZGVscGhpYSBGbHllcnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlBJVFwiLCBcIlBpdHRzYnVyZ2ggUGVuZ3VpbnNcIik7XHJcbiAgLy8gYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlNFQVwiLCBcIlNlYXR0bGUgS3Jha2VuXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJTSlNcIiwgXCJTYW4gSm9zZSBTaGFya3NcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlNUTFwiLCBcIlN0LiBMb3VpcyBCbHVlc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiVEJMXCIsIFwiVGFtcGEgQmF5IExpZ2h0bmluZ1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiVE9SXCIsIFwiVG9yb250byBNYXBsZSBMZWFmc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiVkFOXCIsIFwiVmFuY291dmVyIENhbnVja3NcIik7XHJcbiAgLy8gYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlZHS1wiLCBcIlZlZ2FzIEdvbGRlbiBLbmlnaHRzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJXUEdcIiwgXCJXaW5uaXBlZyBKZXRzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJXU0hcIiwgXCJXYXNoaW5ndG9uIENhcGl0YWxzXCIpO1xyXG4gIHJldHVybiBhYmJyZXZpYXRpb25Ub1RlYW1NYXA7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjaGVja1BsYXllciwgY2hlY2tHYW1lT3ZlciwgZ2VuZXJhdGVBYmJyZXZpYXRpb25NYXAgfTtcclxuIiwiaW1wb3J0IHsgY2xlYXJTZWFyY2hSZXN1bHRzIH0gZnJvbSBcIi4uL3VpL3NlYXJjaC1tb2RhbFwiO1xyXG5cclxuLyoqXHJcbiAqIEdldCBzZWFyY2ggcmVzdWx0cyBmb3IgYSBnaXZlbiBwbGF5ZXIgZnJvbSB0aGUgTkhMIEFQSVxyXG4gKiBAcGFyYW0geyp9IHBsYXllck5hbWUgTmFtZSBvZiBwbGF5ZXIgdG8gc2VhcmNoIGZvclxyXG4gKiBAcmV0dXJucyBEYXRhIGZyb20gc2VhcmNoIHJlc3VsdHMgcmV0cmlldmVkIGZyb20gdGhlIE5ITCBBUElcclxuICovXHJcbmNvbnN0IGdldFNlYXJjaFJlc3VsdHMgPSBhc3luYyAocGxheWVyTmFtZSkgPT4ge1xyXG4gIC8vIFRPLURPOiBIYW5kbGUgZXJyb3JzIGZvciB0aGlzIHJlcXVlc3RcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3NlYXJjaC8ke3BsYXllck5hbWV9YCk7XHJcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY2xlYXJTZWFyY2hSZXN1bHRzKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRTZWFyY2hSZXN1bHRzIH07XHJcbiIsImltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVNlYXJjaE1vZGFsLFxyXG4gIHRyaWdnZXJTZWFyY2hNb2RhbCxcclxufSBmcm9tIFwiLi91aS9zZWFyY2gtbW9kYWxcIjtcclxuaW1wb3J0IHsgY2hvb3NlQ2F0ZWdvcmllcyB9IGZyb20gXCIuL2NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgZ2V0Um93LCBnZXRDb2wgfSBmcm9tIFwiLi91aS9ncmlkLWl0ZW1cIjtcclxuaW1wb3J0IHsgY3JlYXRlV2lubmVyTW9kYWwgfSBmcm9tIFwiLi91aS9nYW1lLW92ZXItbW9kYWxcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvaWNvbnM4LWhvY2tleS02NC5wbmdcIjtcclxuaW1wb3J0IGNyZWF0ZU5hdmJhciBmcm9tIFwiLi91aS9uYXZiYXJcIjtcclxuXHJcbi8qKlxyXG4gKiBTdGFydCBhIG5ldyBnYW1lIGJ5IGNyZWF0aW5nIGEgZ2FtZSBib2FyZCBhbmQgc2VsZWN0aW5nIGNhdGVnb3JpZXMgZm9yIGVhY2ggcm93IGFuZCBjb2x1bW5cclxuICovXHJcbmNvbnN0IGluaXRpYWxpemVHYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoTW9kYWwoKSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXaW5uZXJNb2RhbCgpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU92ZXJsYXkoKSk7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyaWQuaWQgPSBcInBsYXllci1ncmlkXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChncmlkKTtcclxuXHJcbiAgLy8gVE8tRE86IEhhbmRsZSBlcnJvcnMgZm9yIHRoaXMgcmVxdWVzdFxyXG4gIGF3YWl0IFByb21pc2UuYWxsKFtjaG9vc2VDYXRlZ29yaWVzKFwiY29sXCIpLCBjaG9vc2VDYXRlZ29yaWVzKFwicm93XCIpXSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgIGNyZWF0ZUdyaWRJdGVtKGkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWNrbm93bGVkZ2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBhY2tub3dsZWRnZW1lbnQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJBbGwgbG9nb3MgYW5kIGltYWdlcyBvd25lZCBieSB0aGUgTmF0aW9uYWwgSG9ja2V5IExlYWd1ZS4gVXNlIG9mIGFueSBsb2dvcyBvbiB0aGlzIHdlYnNpdGUgZG9lcyBub3QgY29uc3RpdHV0ZSBhIHNwb25zb3JzaGlwIG9yIGVuZG9yc2VtZW50IGJ5IHRoZSB0ZWFtcywgbGVhZ3VlLCBvciB0cmFkZW1hcmsgaG9sZGVycy5cIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFja25vd2xlZGdlbWVudCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgc3F1YXJlIG9uIHRoZSBnYW1lIGJvYXJkIChncmlkIGl0ZW0pXHJcbiAqIEBwYXJhbSB7Kn0gaW5kZXggSW5kZXggb24gZ2FtZSBib2FyZCBmb3IgZ3JpZCBpdGVtIChudW1iZXIgZnJvbSAwLTgpXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVHcmlkSXRlbSA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1ncmlkXCIpO1xyXG4gIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBncmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcclxuXHJcbiAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyaWQtaXRlbVwiKTtcclxuICBncmlkSXRlbS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcblxyXG4gIGNvbnN0IHBsYXllckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGxheWVySW1nLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItaW1nXCIpO1xyXG5cclxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGxheWVyTmFtZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW5hbWVcIik7XHJcbiAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQocGxheWVySW1nKTtcclxuICBncmlkSXRlbS5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcclxuXHJcbiAgc2V0Q2F0ZWdvcmllcyhncmlkSXRlbSk7XHJcblxyXG4gIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyBPbmx5IG9wZW4gc2VhcmNoIG1vZGFsIGlmIHRoZSBncmlkIGl0ZW0gZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHBsYXllclxyXG4gICAgaWYgKCFncmlkSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJjb3JyZWN0XCIpKSB7XHJcbiAgICAgIHRyaWdnZXJTZWFyY2hNb2RhbChncmlkSXRlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIHRoZSBvdmVybGF5IHRoYXQgZGFya2VucyB0aGUgYmFja2dyb3VuZCB3aGVuIGEgbW9kYWwgaXMgZGlzcGxheWVkXHJcbiAqIEByZXR1cm5zIE92ZXJsYXkgSFRNTCBlbGVtZW50XHJcbiAqL1xyXG5jb25zdCBjcmVhdGVPdmVybGF5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG92ZXJsYXkuaWQgPSBcIm92ZXJsYXlcIjtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgcmV0dXJuIG92ZXJsYXk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0IGNhdGVnb3JpZXMgZm9yIGdyaWQgaXRlbSB0byB0aGUgY2F0ZWdvcmllcyBnaXZlbiBieSB0aGUgcm93IGFuZCBjb2x1bW4gb2YgdGhlIGdyaWQgaXRlbVxyXG4gKiBAcGFyYW0geyp9IGdyaWRJdGVtIEdyaWQgaXRlbSB0byBzZXQgY2F0ZWdvcmllcyBmb3JcclxuICovXHJcbmNvbnN0IHNldENhdGVnb3JpZXMgPSAoZ3JpZEl0ZW0pID0+IHtcclxuICBjb25zdCBpbmRleCA9IGdyaWRJdGVtLmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3Qgcm93ID0gZ2V0Um93KGluZGV4KTtcclxuICBjb25zdCBjb2wgPSBnZXRDb2woaW5kZXgpO1xyXG5cclxuICBjb25zdCByb3dDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnkucm93XCIpW3Jvd107XHJcbiAgY29uc3QgY29sQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LmNvbFwiKVtjb2xdO1xyXG5cclxuICBjb25zdCByb3dUZWFtID0gcm93Q2F0ZWdvcnkuZGF0YXNldC50ZWFtO1xyXG4gIGNvbnN0IGNvbFRlYW0gPSBjb2xDYXRlZ29yeS5kYXRhc2V0LnRlYW07XHJcblxyXG4gIGdyaWRJdGVtLmRhdGFzZXQudGVhbTEgPSByb3dUZWFtO1xyXG4gIGdyaWRJdGVtLmRhdGFzZXQudGVhbTIgPSBjb2xUZWFtO1xyXG59O1xyXG5cclxuaW5pdGlhbGl6ZUdhbWUoKTtcclxuIiwiaW1wb3J0IHsgdG9nZ2xlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgdGhlIG1vZGFsIGRpc3BsYXllZCB3aGVuIHRoZSB1c2VyIHdpbnMgdGhlIGdhbWVcclxuICogQHJldHVybnMgTW9kYWwgZGlzcGxheWVkIHdoZW4gdGhlIHVzZXIgd2lucyB0aGUgZ2FtZVxyXG4gKi9cclxuY29uc3QgY3JlYXRlV2lubmVyTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2lubmVyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdpbm5lck1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcclxuICB3aW5uZXJNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIHdpbm5lck1vZGFsLmlkID0gXCJ3aW5uZXItbW9kYWxcIjtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtbW9kYWxcIjtcclxuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG5cclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdG9nZ2xlTW9kYWwod2lubmVyTW9kYWwpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdGV4dC5pZCA9IFwid2lubmVyLXRleHRcIjtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gXCJZb3UgV2luIVwiO1xyXG5cclxuICB3aW5uZXJNb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgd2lubmVyTW9kYWwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgcmV0dXJuIHdpbm5lck1vZGFsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZXMgdGhlIHdpbm5lciBtb2RhbFxyXG4gKi9cclxuY29uc3QgdHJpZ2dlcldpbm5lck1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdpbm5lck1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uZXItbW9kYWxcIik7XHJcbiAgdG9nZ2xlTW9kYWwod2lubmVyTW9kYWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlV2lubmVyTW9kYWwsIHRyaWdnZXJXaW5uZXJNb2RhbCB9O1xyXG4iLCIvKipcclxuICogQWRkcyBhIHBsYXllcidzIG5hbWUgYW5kIGltYWdlIHRvIHRoZSBnYW1lIGJvYXJkXHJcbiAqIEBwYXJhbSB7Kn0gZ3JpZEl0ZW0gR3JpZCBpdGVtIHdoZXJlIHRoZSBwbGF5ZXIncyBuYW1lIGFuZCBpbWFnZSBpcyBhZGRlZCBcclxuICogQHBhcmFtIHsqfSBwbGF5ZXIgSlNPTiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCBhIHBsYXllclxyXG4gKi9cclxuY29uc3QgYWRkUGxheWVyID0gKGdyaWRJdGVtLCBwbGF5ZXIpID0+IHtcclxuICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcclxuICBjb25zdCBncmlkSXRlbUNoaWxkcmVuID0gQXJyYXkuZnJvbShncmlkSXRlbS5jaGlsZE5vZGVzKTtcclxuXHJcbiAgLy8gR2V0IGxhdGVzdCBwbGF5ZXIgaW1hZ2VcclxuICBjb25zdCBwbGF5ZXJJbWcgPSBncmlkSXRlbUNoaWxkcmVuWzBdO1xyXG4gIHBsYXllckltZy5zcmMgPSBgaHR0cHM6Ly9hc3NldHMubmhsZS5jb20vbXVncy9uaGwvbGF0ZXN0LyR7cGxheWVyLnBsYXllcklkfS5wbmdgO1xyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBncmlkSXRlbUNoaWxkcmVuWzFdO1xyXG4gIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuZmlyc3ROYW1lLmRlZmF1bHR9ICR7cGxheWVyLmxhc3ROYW1lLmRlZmF1bHR9YDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSByb3cgb2YgYW4gaW5kZXhcclxuICogQHBhcmFtIHsqfSBpbmRleCBJbmRleCBvZiBhIGdyaWQgaXRlbSBvbiBnYW1lIGJvYXJkXHJcbiAqIEByZXR1cm5zIFJvdyBvZiBpbmRleFxyXG4gKi9cclxuY29uc3QgZ2V0Um93ID0gKGluZGV4KSA9PiB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXggLyAzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBjb2x1bW4gb2YgYW4gaW5kZXhcclxuICogQHBhcmFtIHsqfSBpbmRleCBJbmRleCBvZiBhIGdyaWQgaXRlbSBvbiBnYW1lIGJvYXJkXHJcbiAqIEByZXR1cm5zIENvbHVtbiBvZiBpbmRleFxyXG4gKi9cclxuY29uc3QgZ2V0Q29sID0gKGluZGV4KSA9PiB7XHJcbiAgcmV0dXJuIGluZGV4ICUgMztcclxufTtcclxuXHJcbmV4cG9ydCB7IGFkZFBsYXllciwgZ2V0Um93LCBnZXRDb2wgfTtcclxuIiwiLyoqXHJcbiAqIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgYSBtb2RhbFxyXG4gKiBAcGFyYW0geyp9IG1vZGFsIE1vZGFsIHRvIHRvZ2dsZVxyXG4gKi9cclxuY29uc3QgdG9nZ2xlTW9kYWwgPSAobW9kYWwpID0+IHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdG9nZ2xlTW9kYWwgfTsiLCJpbXBvcnQgUXVlc3Rpb25NYXJrIGZyb20gXCIuLi9hc3NldHMvcXVlc3Rpb24tbWFyay5zdmdcIlxyXG5cclxuY29uc3QgY3JlYXRlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgLy8gVE9ETzogQWRkIG5hdmJhciBjb250YWluaW5nOiBzaXRlIG5hbWUsIGluc3RydWN0aW9ucyAoaG93IHRvIHBsYXkpIFxyXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5pZCA9IFwibmF2YmFyXCI7XHJcblxyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbG9nby5pZCA9IFwic2l0ZS1sb2dvXCI7XHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJOSEwgR1JJRFwiO1xyXG5cclxuICAgIGNvbnN0IGhlbHBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaGVscEJ1dHRvbi5pZCA9IFwiaGVscC1idXR0b25cIjtcclxuXHJcbiAgICBjb25zdCBoZWxwSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaGVscEljb24uc3JjID0gUXVlc3Rpb25NYXJrO1xyXG4gICAgaGVscEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XHJcbiAgICBoZWxwQnV0dG9uLmFwcGVuZENoaWxkKGhlbHBJY29uKTtcclxuXHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaGVscEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIG5hdmJhcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2YmFyOyIsImltcG9ydCB7IGFkZFBsYXllciB9IGZyb20gXCIuL2dyaWQtaXRlbVwiO1xyXG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGNoZWNrUGxheWVyLCBjaGVja0dhbWVPdmVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWUtY29udHJvbGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSByb3cgY29udGFpbmluZyBhIHBsYXllcidzIG5hbWUvZGF0ZSBvZiBiaXJ0aCBhbmQgYSBzdWJtaXQgYnV0dG9uIGRpc3BsYXllZCBcclxuICogaW4gdGhlIHBsYXllciBzZWFyY2ggbW9kYWxcclxuICogQHBhcmFtIHsqfSBwbGF5ZXJOYW1lIE5hbWUgb2YgcGxheWVyXHJcbiAqIEBwYXJhbSB7Kn0gYmlydGhEYXRlIFBsYXllcidzIGRhdGUgb2YgYmlydGhcclxuICogQHBhcmFtIHsqfSBwbGF5ZXJJZCBQbGF5ZXIgaWQgKGRlZmluZWQgYnkgTkhMKVxyXG4gKiBAcGFyYW0geyp9IGdyaWRJdGVtIEdyaWQgaXRlbSBIVE1MIGVsZW1lbnQgc2VsZWN0ZWQgYnkgcGxheWVyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVQbGF5ZXJJdGVtID0gKHBsYXllck5hbWUsIGJpcnRoRGF0ZSwgcGxheWVySWQsIGdyaWRJdGVtKSA9PiB7XHJcbiAgY29uc3QgcGxheWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGxheWVySXRlbS5jbGFzc05hbWUgPSBcInBsYXllci1pdGVtXCI7XHJcblxyXG4gIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxlZnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJwbGF5ZXItcmVzdWx0LWxlZnRcIjtcclxuICBjb25zdCBwbGF5ZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBsYXllck5hbWVFbGVtZW50LmNsYXNzTmFtZSA9IFwicGxheWVyLXJlc3VsdC1uYW1lXCI7XHJcbiAgcGxheWVyTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xyXG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyTmFtZUVsZW1lbnQpO1xyXG5cclxuICBjb25zdCBiaXJ0aERhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYmlydGhEYXRlRWxlbWVudC5jbGFzc05hbWUgPSBcImJpcnRoLWRhdGVcIjtcclxuICBiaXJ0aERhdGVFbGVtZW50LnRleHRDb250ZW50ID0gYCgke2JpcnRoRGF0ZX0pYDtcclxuICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJpcnRoRGF0ZUVsZW1lbnQpO1xyXG5cclxuICBwbGF5ZXJJdGVtLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSBcInJlc3VsdC1zdWJtaXQtYnV0dG9uXCI7XHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICBvblBsYXllclNlbGVjdGVkKHBsYXllcklkLCBncmlkSXRlbSlcclxuICApO1xyXG5cclxuICBwbGF5ZXJJdGVtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIHJldHVybiBwbGF5ZXJJdGVtO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIHBsYXllciB0byB0aGUgZ2FtZSBib2FyZCBpZiBhIHBsYXllciBoYXMgcGxheWVkIGZvciBib3RoIHRlYW1zIHNwZWNpZmllZFxyXG4gKiBieSB0aGUgZ3JpZCBpdGVtIGdpdmVuIGFzIGFuIGFyZ3VtZW50LlxyXG4gKiBAcGFyYW0geyp9IHBsYXllcklkIElEIG9mIHBsYXllciBzZWxlY3RlZCBpbiBzZWFyY2ggbW9kYWxcclxuICogQHBhcmFtIHsqfSBncmlkSXRlbSBHcmlkIGl0ZW0gc2VsZWN0ZWQgYnkgdXNlclxyXG4gKi9cclxuY29uc3Qgb25QbGF5ZXJTZWxlY3RlZCA9IGFzeW5jIChwbGF5ZXJJZCwgZ3JpZEl0ZW0pID0+IHtcclxuICBjb25zdCBzZWFyY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW1vZGFsXCIpO1xyXG4gIGNvbnN0IHBsYXllclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcGxheWVyLyR7cGxheWVySWR9YCk7XHJcbiAgY29uc3QgcGxheWVyID0gYXdhaXQgcGxheWVyUmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKHBsYXllcik7XHJcblxyXG4gIGNvbnN0IHRlYW0xID0gZ3JpZEl0ZW0uZGF0YXNldC50ZWFtMTtcclxuICBjb25zdCB0ZWFtMiA9IGdyaWRJdGVtLmRhdGFzZXQudGVhbTI7XHJcbiAgY29uc3QgcGxheWVkRm9yQm90aFRlYW1zID0gYXdhaXQgY2hlY2tQbGF5ZXIodGVhbTEsIHRlYW0yLCBwbGF5ZXIpO1xyXG4gIGlmIChwbGF5ZWRGb3JCb3RoVGVhbXMpIHtcclxuICAgIGFkZFBsYXllcihncmlkSXRlbSwgcGxheWVyKTtcclxuICB9XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtcGxheWVyXCIpLnZhbHVlID0gXCJcIjtcclxuICB0b2dnbGVNb2RhbChzZWFyY2hNb2RhbCk7XHJcbiAgY2hlY2tHYW1lT3ZlcigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVySXRlbTtcclxuIiwiaW1wb3J0IHsgZ2V0U2VhcmNoUmVzdWx0cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9zZWFyY2gtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCBjcmVhdGVQbGF5ZXJJdGVtIGZyb20gXCIuL3BsYXllci1yZXN1bHQuaXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZWFyY2ggbW9kYWwgb24gZ2FtZSBpbml0aWFsaXphdGlvbi4gVGhlIHNlYXJjaCBtb2RhbCBpc1xyXG4gKiBoaWRkZW4gYnkgZGVmYXVsdC5cclxuICogQHJldHVybnMgU2VhcmNoIG1vZGFsIEhUTUwgZWxlbWVudFxyXG4gKi9cclxuY29uc3QgY3JlYXRlU2VhcmNoTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlYXJjaE1vZGFsLmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcclxuICBzZWFyY2hNb2RhbC5pZCA9IFwic2VhcmNoLW1vZGFsXCI7XHJcbiAgc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJDb250YWluZXIuaWQgPSBcIm1vZGFsLWhlYWRlci1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci5pZCA9IFwibW9kYWwtaGVhZGVyXCI7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLW1vZGFsXCI7XHJcbiAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuXHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXBsYXllclwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB0b2dnbGVNb2RhbChzZWFyY2hNb2RhbCk7XHJcbiAgfSk7XHJcblxyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBwbGF5ZXIuLi5cIjtcclxuICBzZWFyY2hJbnB1dC5uYW1lID0gXCJzZWFyY2gtcGxheWVyXCI7XHJcbiAgc2VhcmNoSW5wdXQuaWQgPSBcInNlYXJjaC1wbGF5ZXJcIjtcclxuXHJcbiAgY29uc3QgcGxheWVySXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBsYXllckl0ZW1zQ29udGFpbmVyLmlkID0gXCJwbGF5ZXItaXRlbXMtY29udGFpbmVyXCI7XHJcblxyXG4gIHNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcbiAgc2VhcmNoTW9kYWwuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG4gIHNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKHBsYXllckl0ZW1zQ29udGFpbmVyKTtcclxuICByZXR1cm4gc2VhcmNoTW9kYWw7XHJcbn07XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgdGhlIHNlYXJjaCBtb2RhbCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIGdyaWQgaXRlbSB3aXRoIG5vIHBsYXllclxyXG4gKiBAcGFyYW0geyp9IGdyaWRJdGVtIEdyaWQgaXRlbSBzZWxlY3RlZCBieSB1c2VyXHJcbiAqL1xyXG5jb25zdCB0cmlnZ2VyU2VhcmNoTW9kYWwgPSAoZ3JpZEl0ZW0pID0+IHtcclxuICBjb25zdCBzZWFyY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW1vZGFsXCIpO1xyXG4gIHRvZ2dsZU1vZGFsKHNlYXJjaE1vZGFsKTtcclxuICBjbGVhclNlYXJjaFJlc3VsdHMoKTtcclxuICBjb25zdCB0ZWFtMSA9IGdyaWRJdGVtLmRhdGFzZXQudGVhbTE7XHJcbiAgY29uc3QgdGVhbTIgPSBncmlkSXRlbS5kYXRhc2V0LnRlYW0yO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3RlYW0xfS0ke3RlYW0yfWA7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtcGxheWVyXCIpO1xyXG4gIGNvbnN0IHBsYXllckl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInBsYXllci1pdGVtcy1jb250YWluZXJcIlxyXG4gICk7XHJcbiAgc2VhcmNoSW5wdXQub25pbnB1dCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGF3YWl0IGdldFNlYXJjaFJlc3VsdHMoc2VhcmNoSW5wdXQudmFsdWUpO1xyXG4gICAgc2VhcmNoUmVzdWx0cy5mb3JFYWNoKGFzeW5jIChwbGF5ZXIpID0+IHtcclxuICAgICAgY29uc3QgcGxheWVySWQgPSBOdW1iZXIocGxheWVyW1wicGxheWVySWRcIl0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBsYXllclwiLCBwbGF5ZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklEXCIsIHBsYXllcklkKTtcclxuICAgICAgY29uc3QgcGxheWVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wbGF5ZXIvJHtwbGF5ZXJJZH1gKTtcclxuICAgICAgY29uc3QgcGxheWVyRGF0YSA9IGF3YWl0IHBsYXllclJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJEYXRhXCIsIHBsYXllckRhdGEpO1xyXG4gICAgICBjb25zdCBiaXJ0aERhdGUgPSBwbGF5ZXJEYXRhLmJpcnRoRGF0ZTtcclxuICAgICAgY29uc3QgbmFtZSA9IHBsYXllcltcIm5hbWVcIl07XHJcbiAgICAgIHBsYXllckl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZVBsYXllckl0ZW0obmFtZSwgYmlydGhEYXRlLCBwbGF5ZXJJZCwgZ3JpZEl0ZW0pXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsZWFycyB0aGUgcGxheWVyIHJlc3VsdHMgc2hvd24gYmVsb3cgdGhlIHNlYXJjaCBiYXJcclxuICovXHJcbmNvbnN0IGNsZWFyU2VhcmNoUmVzdWx0cyA9ICgpID0+IHtcclxuICBjb25zdCBwbGF5ZXJJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJwbGF5ZXItaXRlbXMtY29udGFpbmVyXCJcclxuICApO1xyXG4gIHBsYXllckl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVNlYXJjaE1vZGFsLFxyXG4gIHRyaWdnZXJTZWFyY2hNb2RhbCxcclxuICBjcmVhdGVQbGF5ZXJJdGVtLFxyXG4gIGNsZWFyU2VhcmNoUmVzdWx0cyxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9