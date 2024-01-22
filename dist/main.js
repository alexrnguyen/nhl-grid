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
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
}

#modal-header-container h1 {
  grid-column: 2;
  place-self: center;
  text-align: center;
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

#instructions {
  place-self: start;
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,sBAAsB;;AAEtB;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,4CAA4B;AAC9B;;AAEA;EACE,yCAAyC;EACzC,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,WAAW;AACb;;AAEA;EACE,cAAc;EACd,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;AACd;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA,YAAY;AACZ;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,oCAAoC;EACpC,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,qCAAqC;AACvC;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;AACA,oFAAoF;AACpF;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["/* || General Styles */\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --grid-gap: 1rem;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'NHL';\r\n  src: url('../fonts/NHL.ttf');\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#navbar {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n#site-logo {\r\n  font-family: 'NHL';\r\n  font-size: 2rem;\r\n  color: white;\r\n}\r\n\r\n#help-button {\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.icon {\r\n  width: 2rem;\r\n}\r\n\r\n#content {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  grid-template-rows: 1fr 5fr;\r\n  width: 600px;\r\n  height: 600px;\r\n  left: -75px;\r\n}\r\n\r\nfooter {\r\n  margin: 5rem 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n/* || Categories */\r\n#row-categories {\r\n  grid-column: 1;\r\n  grid-row: 2;\r\n  display: grid;\r\n  grid-template-rows: repeat(3, 1fr);\r\n  place-items: center;\r\n}\r\n\r\n#col-categories {\r\n  grid-column: 2;\r\n  grid-row: 1;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  place-items: center;\r\n}\r\n\r\n/* || Grid */\r\n#player-grid {\r\n  grid-column: 2;\r\n  grid-row: 2;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  place-items: center;\r\n  border: 2px solid white;\r\n}\r\n\r\n.category {\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.grid-item {\r\n  display: grid;\r\n  grid-template-rows: repeat(4, 1fr);\r\n  border: 2px solid white;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.grid-item:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.grid-item.correct {\r\n  border: 4px solid green;\r\n  z-index: 1;\r\n}\r\n\r\n.player-img {\r\n  grid-row: span 4;\r\n  width: 100%;\r\n}\r\n\r\n.player-name {\r\n  margin: 0;\r\n  z-index: 1;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n}\r\n\r\n/* || Search Modal */\r\n\r\n.modal {\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  z-index: 3;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n#modal-header-container {\r\n  display: grid;\r\n  width: 100%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n#modal-header-container h1 {\r\n  grid-column: 2;\r\n  place-self: center;\r\n  text-align: center;\r\n}\r\n\r\n.close-modal {\r\n  grid-column: 3;\r\n  justify-self: end;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  border: 1px solid black;\r\n  background-color: transparent;\r\n}\r\n\r\n#search-player {\r\n  border-radius: 5px;\r\n  min-height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  border: 1px solid black;\r\n}\r\n\r\n#player-items-container {\r\n  width: 100%;\r\n  max-height: 50vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/* || Player Item */\r\n.player-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.player-result-left {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.result-submit-button {\r\n  align-self: center;\r\n  background-color: green;\r\n  color: white;\r\n  border-radius: 10px;\r\n  padding: 0.5rem;\r\n  border: none;\r\n}\r\n\r\n#instructions {\r\n  place-self: start;\r\n}\r\n/* Source: https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */\r\n#overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 2;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n#winner-text {\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _ui_help_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/help-modal */ "./src/ui/help-modal.js");









/**
 * Start a new game by creating a game board and selecting categories for each row and column
 */
const initializeGame = async () => {
  document.body.appendChild((0,_ui_navbar__WEBPACK_IMPORTED_MODULE_6__["default"])());
  document.body.appendChild((0,_ui_help_modal__WEBPACK_IMPORTED_MODULE_7__["default"])());
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

/***/ "./src/ui/help-modal.js":
/*!******************************!*\
  !*** ./src/ui/help-modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");


const createHelpModal = () => {
    const helpModal = document.createElement("div");
    helpModal.classList.add("modal");
    helpModal.classList.add("hidden");
    helpModal.id = "help-modal";

    const headerContainer = document.createElement("div");
    headerContainer.id = "modal-header-container";

    const closeButton = document.createElement("button");
    closeButton.className = "close-modal";
    closeButton.textContent = "X";

    closeButton.addEventListener("click", () => {
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.toggleModal)(helpModal);
    });

    const header = document.createElement("h1");
    header.textContent = "How to Play";

    headerContainer.appendChild(header);
    headerContainer.appendChild(closeButton);

    const instructionsList = getInstructions();

    helpModal.appendChild(headerContainer);
    helpModal.appendChild(instructionsList);

    return helpModal
}

const getInstructions = () => {
    const instructionsList = document.createElement("ul");
    instructionsList.id = "instructions";

    const instructions = [
        "Each cell on the grid has a row and column team",
        "Your goal is to name a player that has played for both the row team and the column team for each cell on the grid",
        "A player matches a team if they have played at least 1 regular season game with the team",
        "To guess a player, click on a square and use the search bar to enter the player you would like to guess. Click to submit button next to the player's name to lock in your guess",
        "The game ends once you have successfully named a player for each cell on the grid",
        "Have fun!"
    ]

    instructions.forEach((instruction) => {
        const instructionElement = document.createElement("li");
        instructionElement.textContent = instruction;
        instructionsList.appendChild(instructionElement);
    })

    return instructionsList;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHelpModal);

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
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");



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

    helpButton.addEventListener("click", () => {
        const helpModal = document.getElementById("help-modal");
        (0,_modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)(helpModal);
    })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsNEdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0RkFBNEYsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFX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RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBZ0I7QUFDeEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNRSIsInNvdXJjZXMiOlsid2VicGFjazovL25obC1ncmlkLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9zcmMvY29udHJvbGxlcnMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL2NvbnRyb2xsZXJzL3NlYXJjaC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL3VpL2dhbWUtb3Zlci1tb2RhbC5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy91aS9ncmlkLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9zcmMvdWkvaGVscC1tb2RhbC5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy91aS9tb2RhbC5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy91aS9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9zcmMvdWkvcGxheWVyLXJlc3VsdC5pdGVtLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL3VpL3NlYXJjaC1tb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTkhMLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLWdyaWQtZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ05ITCc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jbmF2YmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4jc2l0ZS1sb2dvIHtcclxuICBmb250LWZhbWlseTogJ05ITCc7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2hlbHAtYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgbGVmdDogLTc1cHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIHx8IENhdGVnb3JpZXMgKi9cclxuI3Jvdy1jYXRlZ29yaWVzIHtcclxuICBncmlkLWNvbHVtbjogMTtcclxuICBncmlkLXJvdzogMjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbC1jYXRlZ29yaWVzIHtcclxuICBncmlkLWNvbHVtbjogMjtcclxuICBncmlkLXJvdzogMTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogfHwgR3JpZCAqL1xyXG4jcGxheWVyLWdyaWQge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93OiAyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0uY29ycmVjdCB7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnBsYXllci1pbWcge1xyXG4gIGdyaWQtcm93OiBzcGFuIDQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wbGF5ZXItbmFtZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiB8fCBTZWFyY2ggTW9kYWwgKi9cclxuXHJcbi5tb2RhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgei1pbmRleDogMztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNtb2RhbC1oZWFkZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbn1cclxuXHJcbiNtb2RhbC1oZWFkZXItY29udGFpbmVyIGgxIHtcclxuICBncmlkLWNvbHVtbjogMjtcclxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2xvc2UtbW9kYWwge1xyXG4gIGdyaWQtY29sdW1uOiAzO1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNzZWFyY2gtcGxheWVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWluLWhlaWdodDogMS41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI3BsYXllci1pdGVtcy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4vKiB8fCBQbGF5ZXIgSXRlbSAqL1xyXG4ucGxheWVyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG59XHJcblxyXG4ucGxheWVyLXJlc3VsdC1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4ucmVzdWx0LXN1Ym1pdC1idXR0b24ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jaW5zdHJ1Y3Rpb25zIHtcclxuICBwbGFjZS1zZWxmOiBzdGFydDtcclxufVxyXG4vKiBTb3VyY2U6IGh0dHBzOi8vd3d3LmZyZWVjb2RlY2FtcC5vcmcvbmV3cy9ob3ctdG8tYnVpbGQtYS1tb2RhbC13aXRoLWphdmFzY3JpcHQvICovXHJcbiNvdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jd2lubmVyLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjs7QUFFdEI7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLG9GQUFvRjtBQUNwRjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiB8fCBHZW5lcmFsIFN0eWxlcyAqL1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ncmlkLWdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ05ITCc7XFxyXFxuICBzcmM6IHVybCgnLi4vZm9udHMvTkhMLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdmJhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpdGUtbG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogJ05ITCc7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNoZWxwLWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgbGVmdDogLTc1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW46IDVyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgQ2F0ZWdvcmllcyAqL1xcclxcbiNyb3ctY2F0ZWdvcmllcyB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29sLWNhdGVnb3JpZXMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgR3JpZCAqL1xcclxcbiNwbGF5ZXItZ3JpZCB7XFxyXFxuICBncmlkLWNvbHVtbjogMjtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeSB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1pdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWl0ZW0uY29ycmVjdCB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItaW1nIHtcXHJcXG4gIGdyaWQtcm93OiBzcGFuIDQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1uYW1lIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IFNlYXJjaCBNb2RhbCAqL1xcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLWhlYWRlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLWhlYWRlci1jb250YWluZXIgaDEge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1tb2RhbCB7XFxyXFxuICBncmlkLWNvbHVtbjogMztcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLXBsYXllciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWl0ZW1zLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IFBsYXllciBJdGVtICovXFxyXFxuLnBsYXllci1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1yZXN1bHQtbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQtc3VibWl0LWJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNpbnN0cnVjdGlvbnMge1xcclxcbiAgcGxhY2Utc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcbi8qIFNvdXJjZTogaHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9uZXdzL2hvdy10by1idWlsZC1hLW1vZGFsLXdpdGgtamF2YXNjcmlwdC8gKi9cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItdGV4dCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXHJcbiAqIENob29zZSBjYXRlZ29yaWVzIGZvciBhIGdpdmVuIGF4aXMgKGVpdGhlciByb3cgb3IgY29sdW1uKVxyXG4gKiBAcGFyYW0geyp9IGF4aXMgU3BlY2lmaWVzIHdoZXRoZXIgYSBjYXRlZ29yeSBpcyBhIHJvdyBvciBjb2x1bW4gY2F0ZWdvcnkuIE11c3QgYmUgZWl0aGVyICdyb3cnIG9yICdjb2wnXHJcbiAqL1xyXG5jb25zdCBjaG9vc2VDYXRlZ29yaWVzID0gYXN5bmMgKGF4aXMpID0+IHtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXRlZ29yaWVzLmlkID0gYCR7YXhpc30tY2F0ZWdvcmllc2A7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjYXRlZ29yaWVzKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiKTtcclxuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoYXhpcyk7XHJcbiAgICBhd2FpdCByYW5kb21DYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICBjYXRlZ29yaWVzLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgYSByYW5kb20gY2F0ZWdvcnlcclxuICogQHBhcmFtIHsqfSBjYXRlZ29yeSBDYXRlZ29yeSBIVE1MIGVsZW1lbnRcclxuICovXHJcbmNvbnN0IHJhbmRvbUNhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdGVhbXNcIik7XHJcbiAgY29uc3QgdGVhbUFiYnJldmlhdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gR2V0IGEgcmFuZG9tIHRlYW0ncyBhYmJyZXZpYXRpb24gYW5kIHN0b3JlIGl0IGluIHRoZSBjYXRlZ29yeSdzIGRhdGFzZXRcclxuICBjb25zdCByYW5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApO1xyXG4gIGNvbnN0IHJhbmRvbVRlYW0gPSB0ZWFtQWJicmV2aWF0aW9uc1tyYW5kTnVtXTtcclxuXHJcbiAgY29uc3QgdGVhbUFiYnJldmlhdGlvbiA9IHJhbmRvbVRlYW07XHJcbiAgaWYgKGNoZWNrQ2F0ZWdvcmllcyh0ZWFtQWJicmV2aWF0aW9uKSkge1xyXG4gICAgY2F0ZWdvcnkuZGF0YXNldC50ZWFtID0gdGVhbUFiYnJldmlhdGlvbjtcclxuICAgIGNhdGVnb3J5LnNyYyA9IGBodHRwczovL2Fzc2V0cy5uaGxlLmNvbS9sb2dvcy9uaGwvc3ZnLyR7dGVhbUFiYnJldmlhdGlvbn1fZGFyay5zdmdgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBDYXRlZ29yeSBjaG9zZW4gaXMgYW4gaW5hY3RpdmUgdGVhbS4gQ2hvb3NlIGFub3RoZXIgY2F0ZWdvcnlcclxuICAgIGF3YWl0IHJhbmRvbUNhdGVnb3J5KGNhdGVnb3J5KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRW5zdXJlcyB0aGF0IGEgY2F0ZWdvcnkgaXMgbm90IHVzZWQgYmVmb3JlIGl0IGlzIHNldFxyXG4gKiBAcGFyYW0geyp9IHRlYW1BYmJyZXZpYXRpb24gQWJicmV2aWF0aW9uIG9mIE5ITCB0ZWFtICgzIGNoYXJhY3RlcnMpXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgYSBjYXRlZ29yeSBoYXMgbm90IGJlZW4gdXNlZCBvbiB0aGUgZ2FtZSBib2FyZCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAqL1xyXG5jb25zdCBjaGVja0NhdGVnb3JpZXMgPSAodGVhbUFiYnJldmlhdGlvbikgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5XCIpO1xyXG4gIGxldCB2YWxpZENhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgbm8gdGVhbSBpcyBjaG9zZW4gbW9yZSB0aGFuIG9uY2UhXHJcbiAgQXJyYXkuZnJvbShjYXRlZ29yaWVzKS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3J5LmRhdGFzZXQudGVhbSA9PT0gdGVhbUFiYnJldmlhdGlvbikge1xyXG4gICAgICB2YWxpZENhdGVnb3J5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHZhbGlkQ2F0ZWdvcnk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjaG9vc2VDYXRlZ29yaWVzIH07XHJcbiIsImltcG9ydCB7IHRyaWdnZXJXaW5uZXJNb2RhbCB9IGZyb20gXCIuLi91aS9nYW1lLW92ZXItbW9kYWxcIjtcclxuXHJcbi8qKlxyXG4gKiBWZXJpZnkgdGhhdCBhIGdpdmVuIHBsYXllciBoYXMgcGxheWVkIGZvciBib3RoIHRlYW1zIGdpdmVuIGFzIGFyZ3VtZW50cy4gRGlzcGxheSBhIHdpbmRvdyBhbGVydFxyXG4gKiBpZiBhIHBsYXllciBoYXMgbm90IHBsYXllZCBmb3IgYm90aCB0ZWFtMSBhbmQgdGVhbTIuXHJcbiAqIEBwYXJhbSB7Kn0gdGVhbTEgRmlyc3QgdGVhbSB0byBjaGVjayBmb3IgKGEgY2F0ZWdvcnkgb24gdGhlIGdyaWQpXHJcbiAqIEBwYXJhbSB7Kn0gdGVhbTIgU2Vjb25kIHRlYW0gdG8gY2hlY2sgZm9yIChhIGNhdGVnb3J5IG9uIHRoZSBncmlkKVxyXG4gKiBAcGFyYW0geyp9IHBsYXllciBQbGF5ZXIgdG8gY2hlY2tcclxuICogQHJldHVybnMgVHJ1ZSBpZiBhIHBsYXllciBoYXMgcGxheWVkIGZvciBib3RoIHRlYW1zLCBmYWxzZSBvdGhlcndpc2VcclxuICovXHJcbmNvbnN0IGNoZWNrUGxheWVyID0gYXN5bmMgKHRlYW0xLCB0ZWFtMiwgcGxheWVyKSA9PiB7XHJcbiAgY29uc3QgYWJicmV2aWF0aW9uVG9UZWFtTWFwID0gZ2VuZXJhdGVBYmJyZXZpYXRpb25NYXAoKTtcclxuXHJcbiAgY29uc3QgdGVhbTFOYW1lID0gYWJicmV2aWF0aW9uVG9UZWFtTWFwLmdldCh0ZWFtMSk7XHJcbiAgY29uc3QgdGVhbTJOYW1lID0gYWJicmV2aWF0aW9uVG9UZWFtTWFwLmdldCh0ZWFtMik7XHJcbiAgY29uc29sZS5sb2codGVhbTFOYW1lLCB0ZWFtMk5hbWUpO1xyXG4gIGNvbnN0IHRlYW1zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wbGF5ZXIvdGVhbXMvJHtwbGF5ZXIucGxheWVySWR9YCk7XHJcbiAgY29uc3QgdGVhbXMgPSBhd2FpdCB0ZWFtc1Jlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgbGV0IHBsYXllZEZvclRlYW0xID0gZmFsc2U7XHJcbiAgbGV0IHBsYXllZEZvclRlYW0yID0gZmFsc2U7XHJcbiAgZm9yIChjb25zdCB0ZWFtIG9mIEFycmF5LmZyb20odGVhbXMpKSB7XHJcbiAgICBpZiAodGVhbSA9PT0gdGVhbTFOYW1lKSB7XHJcbiAgICAgIHBsYXllZEZvclRlYW0xID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodGVhbSA9PT0gdGVhbTJOYW1lKSB7XHJcbiAgICAgIHBsYXllZEZvclRlYW0yID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHBsYXllZEZvclRlYW0xICYmIHBsYXllZEZvclRlYW0yICYmICFjaGVja0lmUGxheWVyVXNlZChwbGF5ZXIuZnVsbE5hbWUpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCFwbGF5ZWRGb3JUZWFtMSB8fCAhcGxheWVkRm9yVGVhbTIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiSW5jb3JyZWN0XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5cyB3aW5uZXIgbW9kYWwgaWYgYWxsIGNlbGxzIGhhdmUgYSBwbGF5ZXJcclxuICovXHJcbmNvbnN0IGNoZWNrR2FtZU92ZXIgPSAoKSA9PiB7XHJcbiAgaWYgKGFsbEZpbGxlZCgpKSB7XHJcbiAgICB0cmlnZ2VyV2lubmVyTW9kYWwoKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYWxsIGNlbGxzIGhhdmUgYSBwbGF5ZXIgYXNzaWduZWQgdG8gdGhlbVxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIGFsbCBjZWxscyBoYXZlIGEgcGxheWVyIGFzc2lnbmVkIHRvIHRoZW0sIGZhbHNlIG90aGVyd2lzZVxyXG4gKi9cclxuY29uc3QgYWxsRmlsbGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFsbEdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1pdGVtXCIpO1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGFsbEdyaWRJdGVtcykuZXZlcnkoKGdyaWRJdGVtKSA9PlxyXG4gICAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29ycmVjdFwiKVxyXG4gICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHRoZSBwbGF5ZXIgaXMgYmVpbmcgdXNlZCBpbiBhbm90aGVyIGNlbGxcclxuICogQHBhcmFtIHsqfSBwbGF5ZXIgUGxheWVyIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBsYXllciBpcyBiZWluZyB1c2VkIGluIGFub3RoZXIgY2VsbCwgZmFsc2Ugb3RoZXJ3aXNlIFxyXG4gKi9cclxuY29uc3QgY2hlY2tJZlBsYXllclVzZWQgPSAocGxheWVyKSA9PiB7XHJcbiAgY29uc3QgcGxheWVyc1VzZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1uYW1lXCIpO1xyXG4gIGNvbnN0IG5hbWVzT2ZQbGF5ZXJzID0gW107XHJcblxyXG4gIHBsYXllcnNVc2VkLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG4gICAgaWYgKHBsYXllci50ZXh0Q29udGVudCAhPT0gXCJcIikge1xyXG4gICAgICBuYW1lc09mUGxheWVycy5wdXNoKHBsYXllci50ZXh0Q29udGVudCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKG5hbWVzT2ZQbGF5ZXJzLmluY2x1ZGVzKHBsYXllcikpIHtcclxuICAgIHdpbmRvdy5hbGVydChgWW91IGhhdmUgYWxyZWFkeSB1c2VkICR7cGxheWVyfSFgKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG1hcCB0aGF0IG1hcHMgZXZlcnkgdGVhbSBhYmJyZXZpYXRpb24gdG8gYSB0ZWFtXHJcbiAqIEByZXR1cm5zIFRlYW0gYWJicmV2aWF0aW9uIHRvIHRlYW0gbWFwXHJcbiAqL1xyXG5jb25zdCBnZW5lcmF0ZUFiYnJldmlhdGlvbk1hcCA9ICgpID0+IHtcclxuICBjb25zdCBhYmJyZXZpYXRpb25Ub1RlYW1NYXAgPSBuZXcgTWFwKCk7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkFOQVwiLCBcIkFuYWhlaW0gRHVja3NcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkFSSVwiLCBcIkFyaXpvbmEgQ295b3Rlc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQk9TXCIsIFwiQm9zdG9uIEJydWluc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQlVGXCIsIFwiQnVmZmFsbyBTYWJyZXNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkNBUlwiLCBcIkNhcm9saW5hIEh1cnJpY2FuZXNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkNCSlwiLCBcIkNvbHVtYnVzIEJsdWUgSmFja2V0c1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQ0dZXCIsIFwiQ2FsZ2FyeSBGbGFtZXNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkNISVwiLCBcIkNoaWNhZ28gQmxhY2toYXdrc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiQ09MXCIsIFwiQ29sb3JhZG8gQXZhbGFuY2hlXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJEQUxcIiwgXCJEYWxsYXMgU3RhcnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkRFVFwiLCBcIkRldHJvaXQgUmVkIFdpbmdzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJFRE1cIiwgXCJFZG1vbnRvbiBPaWxlcnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkZMQVwiLCBcIkZsb3JpZGEgUGFudGhlcnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkxBS1wiLCBcIkxvcyBBbmdlbGVzIEtpbmdzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJNSU5cIiwgXCJNaW5uZXNvdGEgV2lsZFwiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiTVRMXCIsIFwiTW9udHLDqWFsIENhbmFkaWVuc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiTkpEXCIsIFwiTmV3IEplcnNleSBEZXZpbHNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIk5TSFwiLCBcIk5hc2h2aWxsZSBQcmVkYXRvcnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIk5ZSVwiLCBcIk5ldyBZb3JrIElzbGFuZGVyc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiTllSXCIsIFwiTmV3IFlvcmsgUmFuZ2Vyc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiT1RUXCIsIFwiT3R0YXdhIFNlbmF0b3JzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJQSElcIiwgXCJQaGlsYWRlbHBoaWEgRmx5ZXJzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJQSVRcIiwgXCJQaXR0c2J1cmdoIFBlbmd1aW5zXCIpO1xyXG4gIC8vIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJTRUFcIiwgXCJTZWF0dGxlIEtyYWtlblwiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiU0pTXCIsIFwiU2FuIEpvc2UgU2hhcmtzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJTVExcIiwgXCJTdC4gTG91aXMgQmx1ZXNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlRCTFwiLCBcIlRhbXBhIEJheSBMaWdodG5pbmdcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlRPUlwiLCBcIlRvcm9udG8gTWFwbGUgTGVhZnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlZBTlwiLCBcIlZhbmNvdXZlciBDYW51Y2tzXCIpO1xyXG4gIC8vIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJWR0tcIiwgXCJWZWdhcyBHb2xkZW4gS25pZ2h0c1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiV1BHXCIsIFwiV2lubmlwZWcgSmV0c1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiV1NIXCIsIFwiV2FzaGluZ3RvbiBDYXBpdGFsc1wiKTtcclxuICByZXR1cm4gYWJicmV2aWF0aW9uVG9UZWFtTWFwO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY2hlY2tQbGF5ZXIsIGNoZWNrR2FtZU92ZXIsIGdlbmVyYXRlQWJicmV2aWF0aW9uTWFwIH07XHJcbiIsImltcG9ydCB7IGNsZWFyU2VhcmNoUmVzdWx0cyB9IGZyb20gXCIuLi91aS9zZWFyY2gtbW9kYWxcIjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgc2VhcmNoIHJlc3VsdHMgZm9yIGEgZ2l2ZW4gcGxheWVyIGZyb20gdGhlIE5ITCBBUElcclxuICogQHBhcmFtIHsqfSBwbGF5ZXJOYW1lIE5hbWUgb2YgcGxheWVyIHRvIHNlYXJjaCBmb3JcclxuICogQHJldHVybnMgRGF0YSBmcm9tIHNlYXJjaCByZXN1bHRzIHJldHJpZXZlZCBmcm9tIHRoZSBOSEwgQVBJXHJcbiAqL1xyXG5jb25zdCBnZXRTZWFyY2hSZXN1bHRzID0gYXN5bmMgKHBsYXllck5hbWUpID0+IHtcclxuICAvLyBUTy1ETzogSGFuZGxlIGVycm9ycyBmb3IgdGhpcyByZXF1ZXN0XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9zZWFyY2gvJHtwbGF5ZXJOYW1lfWApO1xyXG4gIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNsZWFyU2VhcmNoUmVzdWx0cygpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2V0U2VhcmNoUmVzdWx0cyB9O1xyXG4iLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVTZWFyY2hNb2RhbCxcclxuICB0cmlnZ2VyU2VhcmNoTW9kYWwsXHJcbn0gZnJvbSBcIi4vdWkvc2VhcmNoLW1vZGFsXCI7XHJcbmltcG9ydCB7IGNob29zZUNhdGVnb3JpZXMgfSBmcm9tIFwiLi9jYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IGdldFJvdywgZ2V0Q29sIH0gZnJvbSBcIi4vdWkvZ3JpZC1pdGVtXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdpbm5lck1vZGFsIH0gZnJvbSBcIi4vdWkvZ2FtZS1vdmVyLW1vZGFsXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL2ljb25zOC1ob2NrZXktNjQucG5nXCI7XHJcbmltcG9ydCBjcmVhdGVOYXZiYXIgZnJvbSBcIi4vdWkvbmF2YmFyXCI7XHJcbmltcG9ydCBjcmVhdGVIZWxwTW9kYWwgZnJvbSBcIi4vdWkvaGVscC1tb2RhbFwiO1xyXG5cclxuLyoqXHJcbiAqIFN0YXJ0IGEgbmV3IGdhbWUgYnkgY3JlYXRpbmcgYSBnYW1lIGJvYXJkIGFuZCBzZWxlY3RpbmcgY2F0ZWdvcmllcyBmb3IgZWFjaCByb3cgYW5kIGNvbHVtblxyXG4gKi9cclxuY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOYXZiYXIoKSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWxwTW9kYWwoKSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hNb2RhbCgpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVdpbm5lck1vZGFsKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlT3ZlcmxheSgpKTtcclxuXHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZ3JpZC5pZCA9IFwicGxheWVyLWdyaWRcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGdyaWQpO1xyXG5cclxuICAvLyBUTy1ETzogSGFuZGxlIGVycm9ycyBmb3IgdGhpcyByZXF1ZXN0XHJcbiAgYXdhaXQgUHJvbWlzZS5hbGwoW2Nob29zZUNhdGVnb3JpZXMoXCJjb2xcIiksIGNob29zZUNhdGVnb3JpZXMoXCJyb3dcIildKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgY3JlYXRlR3JpZEl0ZW0oaSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhY2tub3dsZWRnZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGFja25vd2xlZGdlbWVudC50ZXh0Q29udGVudCA9XHJcbiAgICBcIkFsbCBsb2dvcyBhbmQgaW1hZ2VzIG93bmVkIGJ5IHRoZSBOYXRpb25hbCBIb2NrZXkgTGVhZ3VlLiBVc2Ugb2YgYW55IGxvZ29zIG9uIHRoaXMgd2Vic2l0ZSBkb2VzIG5vdCBjb25zdGl0dXRlIGEgc3BvbnNvcnNoaXAgb3IgZW5kb3JzZW1lbnQgYnkgdGhlIHRlYW1zLCBsZWFndWUsIG9yIHRyYWRlbWFyayBob2xkZXJzLlwiO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWNrbm93bGVkZ2VtZW50KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBzcXVhcmUgb24gdGhlIGdhbWUgYm9hcmQgKGdyaWQgaXRlbSlcclxuICogQHBhcmFtIHsqfSBpbmRleCBJbmRleCBvbiBnYW1lIGJvYXJkIGZvciBncmlkIGl0ZW0gKG51bWJlciBmcm9tIDAtOClcclxuICovXHJcbmNvbnN0IGNyZWF0ZUdyaWRJdGVtID0gKGluZGV4KSA9PiB7XHJcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWdyaWRcIik7XHJcbiAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xyXG5cclxuICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1pdGVtXCIpO1xyXG4gIGdyaWRJdGVtLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgY29uc3QgcGxheWVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBwbGF5ZXJJbWcuY2xhc3NMaXN0LmFkZChcInBsYXllci1pbWdcIik7XHJcblxyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwbGF5ZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItbmFtZVwiKTtcclxuICBncmlkSXRlbS5hcHBlbmRDaGlsZChwbGF5ZXJJbWcpO1xyXG4gIGdyaWRJdGVtLmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xyXG5cclxuICBzZXRDYXRlZ29yaWVzKGdyaWRJdGVtKTtcclxuXHJcbiAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vIE9ubHkgb3BlbiBzZWFyY2ggbW9kYWwgaWYgdGhlIGdyaWQgaXRlbSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcGxheWVyXHJcbiAgICBpZiAoIWdyaWRJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImNvcnJlY3RcIikpIHtcclxuICAgICAgdHJpZ2dlclNlYXJjaE1vZGFsKGdyaWRJdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG92ZXJsYXkgdGhhdCBkYXJrZW5zIHRoZSBiYWNrZ3JvdW5kIHdoZW4gYSBtb2RhbCBpcyBkaXNwbGF5ZWRcclxuICogQHJldHVybnMgT3ZlcmxheSBIVE1MIGVsZW1lbnRcclxuICovXHJcbmNvbnN0IGNyZWF0ZU92ZXJsYXkgPSAoKSA9PiB7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgb3ZlcmxheS5pZCA9IFwib3ZlcmxheVwiO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICByZXR1cm4gb3ZlcmxheTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgY2F0ZWdvcmllcyBmb3IgZ3JpZCBpdGVtIHRvIHRoZSBjYXRlZ29yaWVzIGdpdmVuIGJ5IHRoZSByb3cgYW5kIGNvbHVtbiBvZiB0aGUgZ3JpZCBpdGVtXHJcbiAqIEBwYXJhbSB7Kn0gZ3JpZEl0ZW0gR3JpZCBpdGVtIHRvIHNldCBjYXRlZ29yaWVzIGZvclxyXG4gKi9cclxuY29uc3Qgc2V0Q2F0ZWdvcmllcyA9IChncmlkSXRlbSkgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gZ3JpZEl0ZW0uZGF0YXNldC5pbmRleDtcclxuICBjb25zdCByb3cgPSBnZXRSb3coaW5kZXgpO1xyXG4gIGNvbnN0IGNvbCA9IGdldENvbChpbmRleCk7XHJcblxyXG4gIGNvbnN0IHJvd0NhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeS5yb3dcIilbcm93XTtcclxuICBjb25zdCBjb2xDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnkuY29sXCIpW2NvbF07XHJcblxyXG4gIGNvbnN0IHJvd1RlYW0gPSByb3dDYXRlZ29yeS5kYXRhc2V0LnRlYW07XHJcbiAgY29uc3QgY29sVGVhbSA9IGNvbENhdGVnb3J5LmRhdGFzZXQudGVhbTtcclxuXHJcbiAgZ3JpZEl0ZW0uZGF0YXNldC50ZWFtMSA9IHJvd1RlYW07XHJcbiAgZ3JpZEl0ZW0uZGF0YXNldC50ZWFtMiA9IGNvbFRlYW07XHJcbn07XHJcblxyXG5pbml0aWFsaXplR2FtZSgpO1xyXG4iLCJpbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyB0aGUgbW9kYWwgZGlzcGxheWVkIHdoZW4gdGhlIHVzZXIgd2lucyB0aGUgZ2FtZVxyXG4gKiBAcmV0dXJucyBNb2RhbCBkaXNwbGF5ZWQgd2hlbiB0aGUgdXNlciB3aW5zIHRoZSBnYW1lXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVXaW5uZXJNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCB3aW5uZXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2lubmVyTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xyXG4gIHdpbm5lck1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgd2lubmVyTW9kYWwuaWQgPSBcIndpbm5lci1tb2RhbFwiO1xyXG5cclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1tb2RhbFwiO1xyXG4gIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcblxyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVNb2RhbCh3aW5uZXJNb2RhbCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0ZXh0LmlkID0gXCJ3aW5uZXItdGV4dFwiO1xyXG4gIHRleHQudGV4dENvbnRlbnQgPSBcIllvdSBXaW4hXCI7XHJcblxyXG4gIHdpbm5lck1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICB3aW5uZXJNb2RhbC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICByZXR1cm4gd2lubmVyTW9kYWw7XHJcbn07XHJcblxyXG4vKipcclxuICogVG9nZ2xlcyB0aGUgd2lubmVyIG1vZGFsXHJcbiAqL1xyXG5jb25zdCB0cmlnZ2VyV2lubmVyTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2lubmVyTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5lci1tb2RhbFwiKTtcclxuICB0b2dnbGVNb2RhbCh3aW5uZXJNb2RhbCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVXaW5uZXJNb2RhbCwgdHJpZ2dlcldpbm5lck1vZGFsIH07XHJcbiIsIi8qKlxyXG4gKiBBZGRzIGEgcGxheWVyJ3MgbmFtZSBhbmQgaW1hZ2UgdG8gdGhlIGdhbWUgYm9hcmRcclxuICogQHBhcmFtIHsqfSBncmlkSXRlbSBHcmlkIGl0ZW0gd2hlcmUgdGhlIHBsYXllcidzIG5hbWUgYW5kIGltYWdlIGlzIGFkZGVkIFxyXG4gKiBAcGFyYW0geyp9IHBsYXllciBKU09OIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IGEgcGxheWVyXHJcbiAqL1xyXG5jb25zdCBhZGRQbGF5ZXIgPSAoZ3JpZEl0ZW0sIHBsYXllcikgPT4ge1xyXG4gIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xyXG4gIGNvbnN0IGdyaWRJdGVtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGdyaWRJdGVtLmNoaWxkTm9kZXMpO1xyXG5cclxuICAvLyBHZXQgbGF0ZXN0IHBsYXllciBpbWFnZVxyXG4gIGNvbnN0IHBsYXllckltZyA9IGdyaWRJdGVtQ2hpbGRyZW5bMF07XHJcbiAgcGxheWVySW1nLnNyYyA9IGBodHRwczovL2Fzc2V0cy5uaGxlLmNvbS9tdWdzL25obC9sYXRlc3QvJHtwbGF5ZXIucGxheWVySWR9LnBuZ2A7XHJcbiAgY29uc3QgcGxheWVyTmFtZSA9IGdyaWRJdGVtQ2hpbGRyZW5bMV07XHJcbiAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke3BsYXllci5maXJzdE5hbWUuZGVmYXVsdH0gJHtwbGF5ZXIubGFzdE5hbWUuZGVmYXVsdH1gO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIHJvdyBvZiBhbiBpbmRleFxyXG4gKiBAcGFyYW0geyp9IGluZGV4IEluZGV4IG9mIGEgZ3JpZCBpdGVtIG9uIGdhbWUgYm9hcmRcclxuICogQHJldHVybnMgUm93IG9mIGluZGV4XHJcbiAqL1xyXG5jb25zdCBnZXRSb3cgPSAoaW5kZXgpID0+IHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCAvIDMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIGNvbHVtbiBvZiBhbiBpbmRleFxyXG4gKiBAcGFyYW0geyp9IGluZGV4IEluZGV4IG9mIGEgZ3JpZCBpdGVtIG9uIGdhbWUgYm9hcmRcclxuICogQHJldHVybnMgQ29sdW1uIG9mIGluZGV4XHJcbiAqL1xyXG5jb25zdCBnZXRDb2wgPSAoaW5kZXgpID0+IHtcclxuICByZXR1cm4gaW5kZXggJSAzO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYWRkUGxheWVyLCBnZXRSb3csIGdldENvbCB9O1xyXG4iLCJpbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcblxyXG5jb25zdCBjcmVhdGVIZWxwTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWxwTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVscE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcclxuICAgIGhlbHBNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgaGVscE1vZGFsLmlkID0gXCJoZWxwLW1vZGFsXCI7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlckNvbnRhaW5lci5pZCA9IFwibW9kYWwtaGVhZGVyLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtbW9kYWxcIjtcclxuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcblxyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0b2dnbGVNb2RhbChoZWxwTW9kYWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3cgdG8gUGxheVwiO1xyXG5cclxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNMaXN0ID0gZ2V0SW5zdHJ1Y3Rpb25zKCk7XHJcblxyXG4gICAgaGVscE1vZGFsLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcbiAgICBoZWxwTW9kYWwuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zTGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIGhlbHBNb2RhbFxyXG59XHJcblxyXG5jb25zdCBnZXRJbnN0cnVjdGlvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgaW5zdHJ1Y3Rpb25zTGlzdC5pZCA9IFwiaW5zdHJ1Y3Rpb25zXCI7XHJcblxyXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gW1xyXG4gICAgICAgIFwiRWFjaCBjZWxsIG9uIHRoZSBncmlkIGhhcyBhIHJvdyBhbmQgY29sdW1uIHRlYW1cIixcclxuICAgICAgICBcIllvdXIgZ29hbCBpcyB0byBuYW1lIGEgcGxheWVyIHRoYXQgaGFzIHBsYXllZCBmb3IgYm90aCB0aGUgcm93IHRlYW0gYW5kIHRoZSBjb2x1bW4gdGVhbSBmb3IgZWFjaCBjZWxsIG9uIHRoZSBncmlkXCIsXHJcbiAgICAgICAgXCJBIHBsYXllciBtYXRjaGVzIGEgdGVhbSBpZiB0aGV5IGhhdmUgcGxheWVkIGF0IGxlYXN0IDEgcmVndWxhciBzZWFzb24gZ2FtZSB3aXRoIHRoZSB0ZWFtXCIsXHJcbiAgICAgICAgXCJUbyBndWVzcyBhIHBsYXllciwgY2xpY2sgb24gYSBzcXVhcmUgYW5kIHVzZSB0aGUgc2VhcmNoIGJhciB0byBlbnRlciB0aGUgcGxheWVyIHlvdSB3b3VsZCBsaWtlIHRvIGd1ZXNzLiBDbGljayB0byBzdWJtaXQgYnV0dG9uIG5leHQgdG8gdGhlIHBsYXllcidzIG5hbWUgdG8gbG9jayBpbiB5b3VyIGd1ZXNzXCIsXHJcbiAgICAgICAgXCJUaGUgZ2FtZSBlbmRzIG9uY2UgeW91IGhhdmUgc3VjY2Vzc2Z1bGx5IG5hbWVkIGEgcGxheWVyIGZvciBlYWNoIGNlbGwgb24gdGhlIGdyaWRcIixcclxuICAgICAgICBcIkhhdmUgZnVuIVwiXHJcbiAgICBdXHJcblxyXG4gICAgaW5zdHJ1Y3Rpb25zLmZvckVhY2goKGluc3RydWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGluc3RydWN0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGluc3RydWN0aW9uO1xyXG4gICAgICAgIGluc3RydWN0aW9uc0xpc3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25FbGVtZW50KTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGluc3RydWN0aW9uc0xpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlbHBNb2RhbCIsIi8qKlxyXG4gKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIGEgbW9kYWxcclxuICogQHBhcmFtIHsqfSBtb2RhbCBNb2RhbCB0byB0b2dnbGVcclxuICovXHJcbmNvbnN0IHRvZ2dsZU1vZGFsID0gKG1vZGFsKSA9PiB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRvZ2dsZU1vZGFsIH07IiwiaW1wb3J0IFF1ZXN0aW9uTWFyayBmcm9tIFwiLi4vYXNzZXRzL3F1ZXN0aW9uLW1hcmsuc3ZnXCJcclxuaW1wb3J0IHsgdG9nZ2xlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuY29uc3QgY3JlYXRlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgLy8gVE9ETzogQWRkIG5hdmJhciBjb250YWluaW5nOiBzaXRlIG5hbWUsIGluc3RydWN0aW9ucyAoaG93IHRvIHBsYXkpIFxyXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5pZCA9IFwibmF2YmFyXCI7XHJcblxyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbG9nby5pZCA9IFwic2l0ZS1sb2dvXCI7XHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJOSEwgR1JJRFwiO1xyXG5cclxuICAgIGNvbnN0IGhlbHBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaGVscEJ1dHRvbi5pZCA9IFwiaGVscC1idXR0b25cIjtcclxuXHJcbiAgICBjb25zdCBoZWxwSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaGVscEljb24uc3JjID0gUXVlc3Rpb25NYXJrO1xyXG4gICAgaGVscEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XHJcbiAgICBoZWxwQnV0dG9uLmFwcGVuZENoaWxkKGhlbHBJY29uKTtcclxuXHJcbiAgICBoZWxwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVscE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLW1vZGFsXCIpO1xyXG4gICAgICAgIHRvZ2dsZU1vZGFsKGhlbHBNb2RhbCk7XHJcbiAgICB9KVxyXG5cclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChoZWxwQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gbmF2YmFyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZiYXI7IiwiaW1wb3J0IHsgYWRkUGxheWVyIH0gZnJvbSBcIi4vZ3JpZC1pdGVtXCI7XHJcbmltcG9ydCB7IHRvZ2dsZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IHsgY2hlY2tQbGF5ZXIsIGNoZWNrR2FtZU92ZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZS1jb250cm9sbGVyXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHJvdyBjb250YWluaW5nIGEgcGxheWVyJ3MgbmFtZS9kYXRlIG9mIGJpcnRoIGFuZCBhIHN1Ym1pdCBidXR0b24gZGlzcGxheWVkIFxyXG4gKiBpbiB0aGUgcGxheWVyIHNlYXJjaCBtb2RhbFxyXG4gKiBAcGFyYW0geyp9IHBsYXllck5hbWUgTmFtZSBvZiBwbGF5ZXJcclxuICogQHBhcmFtIHsqfSBiaXJ0aERhdGUgUGxheWVyJ3MgZGF0ZSBvZiBiaXJ0aFxyXG4gKiBAcGFyYW0geyp9IHBsYXllcklkIFBsYXllciBpZCAoZGVmaW5lZCBieSBOSEwpXHJcbiAqIEBwYXJhbSB7Kn0gZ3JpZEl0ZW0gR3JpZCBpdGVtIEhUTUwgZWxlbWVudCBzZWxlY3RlZCBieSBwbGF5ZXJcclxuICogQHJldHVybnNcclxuICovXHJcbmNvbnN0IGNyZWF0ZVBsYXllckl0ZW0gPSAocGxheWVyTmFtZSwgYmlydGhEYXRlLCBwbGF5ZXJJZCwgZ3JpZEl0ZW0pID0+IHtcclxuICBjb25zdCBwbGF5ZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwbGF5ZXJJdGVtLmNsYXNzTmFtZSA9IFwicGxheWVyLWl0ZW1cIjtcclxuXHJcbiAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGVmdENvbnRhaW5lci5jbGFzc05hbWUgPSBcInBsYXllci1yZXN1bHQtbGVmdFwiO1xyXG4gIGNvbnN0IHBsYXllck5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGxheWVyTmFtZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJwbGF5ZXItcmVzdWx0LW5hbWVcIjtcclxuICBwbGF5ZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHBsYXllck5hbWU7XHJcbiAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lRWxlbWVudCk7XHJcblxyXG4gIGNvbnN0IGJpcnRoRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBiaXJ0aERhdGVFbGVtZW50LmNsYXNzTmFtZSA9IFwiYmlydGgtZGF0ZVwiO1xyXG4gIGJpcnRoRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgKCR7YmlydGhEYXRlfSlgO1xyXG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmlydGhEYXRlRWxlbWVudCk7XHJcblxyXG4gIHBsYXllckl0ZW0uYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9IFwicmVzdWx0LXN1Ym1pdC1idXR0b25cIjtcclxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgIG9uUGxheWVyU2VsZWN0ZWQocGxheWVySWQsIGdyaWRJdGVtKVxyXG4gICk7XHJcblxyXG4gIHBsYXllckl0ZW0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIHBsYXllckl0ZW07XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIGEgcGxheWVyIHRvIHRoZSBnYW1lIGJvYXJkIGlmIGEgcGxheWVyIGhhcyBwbGF5ZWQgZm9yIGJvdGggdGVhbXMgc3BlY2lmaWVkXHJcbiAqIGJ5IHRoZSBncmlkIGl0ZW0gZ2l2ZW4gYXMgYW4gYXJndW1lbnQuXHJcbiAqIEBwYXJhbSB7Kn0gcGxheWVySWQgSUQgb2YgcGxheWVyIHNlbGVjdGVkIGluIHNlYXJjaCBtb2RhbFxyXG4gKiBAcGFyYW0geyp9IGdyaWRJdGVtIEdyaWQgaXRlbSBzZWxlY3RlZCBieSB1c2VyXHJcbiAqL1xyXG5jb25zdCBvblBsYXllclNlbGVjdGVkID0gYXN5bmMgKHBsYXllcklkLCBncmlkSXRlbSkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtbW9kYWxcIik7XHJcbiAgY29uc3QgcGxheWVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wbGF5ZXIvJHtwbGF5ZXJJZH1gKTtcclxuICBjb25zdCBwbGF5ZXIgPSBhd2FpdCBwbGF5ZXJSZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc29sZS5sb2cocGxheWVyKTtcclxuXHJcbiAgY29uc3QgdGVhbTEgPSBncmlkSXRlbS5kYXRhc2V0LnRlYW0xO1xyXG4gIGNvbnN0IHRlYW0yID0gZ3JpZEl0ZW0uZGF0YXNldC50ZWFtMjtcclxuICBjb25zdCBwbGF5ZWRGb3JCb3RoVGVhbXMgPSBhd2FpdCBjaGVja1BsYXllcih0ZWFtMSwgdGVhbTIsIHBsYXllcik7XHJcbiAgaWYgKHBsYXllZEZvckJvdGhUZWFtcykge1xyXG4gICAgYWRkUGxheWVyKGdyaWRJdGVtLCBwbGF5ZXIpO1xyXG4gIH1cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1wbGF5ZXJcIikudmFsdWUgPSBcIlwiO1xyXG4gIHRvZ2dsZU1vZGFsKHNlYXJjaE1vZGFsKTtcclxuICBjaGVja0dhbWVPdmVyKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXJJdGVtO1xyXG4iLCJpbXBvcnQgeyBnZXRTZWFyY2hSZXN1bHRzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3NlYXJjaC1jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHRvZ2dsZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IGNyZWF0ZVBsYXllckl0ZW0gZnJvbSBcIi4vcGxheWVyLXJlc3VsdC5pdGVtXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNlYXJjaCBtb2RhbCBvbiBnYW1lIGluaXRpYWxpemF0aW9uLiBUaGUgc2VhcmNoIG1vZGFsIGlzXHJcbiAqIGhpZGRlbiBieSBkZWZhdWx0LlxyXG4gKiBAcmV0dXJucyBTZWFyY2ggbW9kYWwgSFRNTCBlbGVtZW50XHJcbiAqL1xyXG5jb25zdCBjcmVhdGVTZWFyY2hNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2VhcmNoTW9kYWwuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xyXG4gIHNlYXJjaE1vZGFsLmlkID0gXCJzZWFyY2gtbW9kYWxcIjtcclxuICBzZWFyY2hNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5pZCA9IFwibW9kYWwtaGVhZGVyLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGVyLmlkID0gXCJtb2RhbC1oZWFkZXJcIjtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtbW9kYWxcIjtcclxuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG5cclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtcGxheWVyXCIpLnZhbHVlID0gXCJcIjtcclxuICAgIHRvZ2dsZU1vZGFsKHNlYXJjaE1vZGFsKTtcclxuICB9KTtcclxuXHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggZm9yIHBsYXllci4uLlwiO1xyXG4gIHNlYXJjaElucHV0Lm5hbWUgPSBcInNlYXJjaC1wbGF5ZXJcIjtcclxuICBzZWFyY2hJbnB1dC5pZCA9IFwic2VhcmNoLXBsYXllclwiO1xyXG5cclxuICBjb25zdCBwbGF5ZXJJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGxheWVySXRlbXNDb250YWluZXIuaWQgPSBcInBsYXllci1pdGVtcy1jb250YWluZXJcIjtcclxuXHJcbiAgc2VhcmNoTW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcclxuICBzZWFyY2hNb2RhbC5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XHJcbiAgc2VhcmNoTW9kYWwuYXBwZW5kQ2hpbGQocGxheWVySXRlbXNDb250YWluZXIpO1xyXG4gIHJldHVybiBzZWFyY2hNb2RhbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5cyB0aGUgc2VhcmNoIG1vZGFsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgZ3JpZCBpdGVtIHdpdGggbm8gcGxheWVyXHJcbiAqIEBwYXJhbSB7Kn0gZ3JpZEl0ZW0gR3JpZCBpdGVtIHNlbGVjdGVkIGJ5IHVzZXJcclxuICovXHJcbmNvbnN0IHRyaWdnZXJTZWFyY2hNb2RhbCA9IChncmlkSXRlbSkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtbW9kYWxcIik7XHJcbiAgdG9nZ2xlTW9kYWwoc2VhcmNoTW9kYWwpO1xyXG4gIGNsZWFyU2VhcmNoUmVzdWx0cygpO1xyXG4gIGNvbnN0IHRlYW0xID0gZ3JpZEl0ZW0uZGF0YXNldC50ZWFtMTtcclxuICBjb25zdCB0ZWFtMiA9IGdyaWRJdGVtLmRhdGFzZXQudGVhbTI7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1oZWFkZXJcIik7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7dGVhbTF9LSR7dGVhbTJ9YDtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1wbGF5ZXJcIik7XHJcbiAgY29uc3QgcGxheWVySXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwicGxheWVyLWl0ZW1zLWNvbnRhaW5lclwiXHJcbiAgKTtcclxuICBzZWFyY2hJbnB1dC5vbmlucHV0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgZ2V0U2VhcmNoUmVzdWx0cyhzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbiAgICBzZWFyY2hSZXN1bHRzLmZvckVhY2goYXN5bmMgKHBsYXllcikgPT4ge1xyXG4gICAgICBjb25zdCBwbGF5ZXJJZCA9IE51bWJlcihwbGF5ZXJbXCJwbGF5ZXJJZFwiXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyXCIsIHBsYXllcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSURcIiwgcGxheWVySWQpO1xyXG4gICAgICBjb25zdCBwbGF5ZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3BsYXllci8ke3BsYXllcklkfWApO1xyXG4gICAgICBjb25zdCBwbGF5ZXJEYXRhID0gYXdhaXQgcGxheWVyUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGFcIiwgcGxheWVyRGF0YSk7XHJcbiAgICAgIGNvbnN0IGJpcnRoRGF0ZSA9IHBsYXllckRhdGEuYmlydGhEYXRlO1xyXG4gICAgICBjb25zdCBuYW1lID0gcGxheWVyW1wibmFtZVwiXTtcclxuICAgICAgcGxheWVySXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgY3JlYXRlUGxheWVySXRlbShuYW1lLCBiaXJ0aERhdGUsIHBsYXllcklkLCBncmlkSXRlbSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xlYXJzIHRoZSBwbGF5ZXIgcmVzdWx0cyBzaG93biBiZWxvdyB0aGUgc2VhcmNoIGJhclxyXG4gKi9cclxuY29uc3QgY2xlYXJTZWFyY2hSZXN1bHRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXllckl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInBsYXllci1pdGVtcy1jb250YWluZXJcIlxyXG4gICk7XHJcbiAgcGxheWVySXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlU2VhcmNoTW9kYWwsXHJcbiAgdHJpZ2dlclNlYXJjaE1vZGFsLFxyXG4gIGNyZWF0ZVBsYXllckl0ZW0sXHJcbiAgY2xlYXJTZWFyY2hSZXN1bHRzLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=