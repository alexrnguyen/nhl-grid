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
  let typingTimer;
  searchInput.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => fetchSearchData(searchInput, gridItem), 250);
  })
};

/**
 * Fetches seach result data from the API
 * @param {*} searchInput Input enterred by user in the search modal
 * @param {*} gridItem Grid item selected by user
 */
const fetchSearchData = async (searchInput, gridItem) => {
  const playerItemsContainer = document.getElementById("player-items-container");
  const searchResults = await (0,_controllers_search_controller__WEBPACK_IMPORTED_MODULE_0__.getSearchResults)(searchInput.value);
  await Promise.all(searchResults.forEach(async (player) => {
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
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsNEdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0RkFBNEYsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFX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QUNkO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnRkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBZ0I7QUFDdEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9jb250cm9sbGVycy9zZWFyY2gtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy91aS9nYW1lLW92ZXItbW9kYWwuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9zcmMvdWkvZ3JpZC1pdGVtLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL3VpL2hlbHAtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9zcmMvdWkvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vbmhsLWdyaWQvLi9zcmMvdWkvbmF2YmFyLmpzIiwid2VicGFjazovL25obC1ncmlkLy4vc3JjL3VpL3BsYXllci1yZXN1bHQuaXRlbS5qcyIsIndlYnBhY2s6Ly9uaGwtZ3JpZC8uL3NyYy91aS9zZWFyY2gtbW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL05ITC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHx8IEdlbmVyYWwgU3R5bGVzICovXHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1ncmlkLWdhcDogMXJlbTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdOSEwnO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI25hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuI3NpdGUtbG9nbyB7XHJcbiAgZm9udC1mYW1pbHk6ICdOSEwnO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNoZWxwLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGxlZnQ6IC03NXB4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbjogNXJlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiB8fCBDYXRlZ29yaWVzICovXHJcbiNyb3ctY2F0ZWdvcmllcyB7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb2wtY2F0ZWdvcmllcyB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHx8IEdyaWQgKi9cclxuI3BsYXllci1ncmlkIHtcclxuICBncmlkLWNvbHVtbjogMjtcclxuICBncmlkLXJvdzogMjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmdyaWQtaXRlbSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLmNvcnJlY3Qge1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wbGF5ZXItaW1nIHtcclxuICBncmlkLXJvdzogc3BhbiA0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGxheWVyLW5hbWUge1xyXG4gIG1hcmdpbjogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogfHwgU2VhcmNoIE1vZGFsICovXHJcblxyXG4ubW9kYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jbW9kYWwtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG59XHJcblxyXG4jbW9kYWwtaGVhZGVyLWNvbnRhaW5lciBoMSB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsIHtcclxuICBncmlkLWNvbHVtbjogMztcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jc2VhcmNoLXBsYXllciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNwbGF5ZXItaXRlbXMtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLyogfHwgUGxheWVyIEl0ZW0gKi9cclxuLnBsYXllci1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLnBsYXllci1yZXN1bHQtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDVweDtcclxufVxyXG5cclxuLnJlc3VsdC1zdWJtaXQtYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2luc3RydWN0aW9ucyB7XHJcbiAgcGxhY2Utc2VsZjogc3RhcnQ7XHJcbn1cclxuLyogU291cmNlOiBodHRwczovL3d3dy5mcmVlY29kZWNhbXAub3JnL25ld3MvaG93LXRvLWJ1aWxkLWEtbW9kYWwtd2l0aC1qYXZhc2NyaXB0LyAqL1xyXG4jb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuI3dpbm5lci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJt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cEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZ3JpZC1nYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdOSEwnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL05ITC50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXZiYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbiNzaXRlLWxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdOSEwnO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVscC1idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gIGxlZnQ6IC03NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luOiA1cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IENhdGVnb3JpZXMgKi9cXHJcXG4jcm93LWNhdGVnb3JpZXMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbC1jYXRlZ29yaWVzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IEdyaWQgKi9cXHJcXG4jcGxheWVyLWdyaWQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnkge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtaXRlbTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1pdGVtLmNvcnJlY3Qge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWltZyB7XFxyXFxuICBncmlkLXJvdzogc3BhbiA0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItbmFtZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBTZWFyY2ggTW9kYWwgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1oZWFkZXItY29udGFpbmVyIGgxIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtbW9kYWwge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1wbGF5ZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWluLWhlaWdodDogMS41cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pdGVtcy1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBQbGF5ZXIgSXRlbSAqL1xcclxcbi5wbGF5ZXItaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItcmVzdWx0LWxlZnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LXN1Ym1pdC1idXR0b24ge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5zdHJ1Y3Rpb25zIHtcXHJcXG4gIHBsYWNlLXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG4vKiBTb3VyY2U6IGh0dHBzOi8vd3d3LmZyZWVjb2RlY2FtcC5vcmcvbmV3cy9ob3ctdG8tYnVpbGQtYS1tb2RhbC13aXRoLWphdmFzY3JpcHQvICovXFxyXFxuI292ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVyLXRleHQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxyXG4gKiBDaG9vc2UgY2F0ZWdvcmllcyBmb3IgYSBnaXZlbiBheGlzIChlaXRoZXIgcm93IG9yIGNvbHVtbilcclxuICogQHBhcmFtIHsqfSBheGlzIFNwZWNpZmllcyB3aGV0aGVyIGEgY2F0ZWdvcnkgaXMgYSByb3cgb3IgY29sdW1uIGNhdGVnb3J5LiBNdXN0IGJlIGVpdGhlciAncm93JyBvciAnY29sJ1xyXG4gKi9cclxuY29uc3QgY2hvb3NlQ2F0ZWdvcmllcyA9IGFzeW5jIChheGlzKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2F0ZWdvcmllcy5pZCA9IGAke2F4aXN9LWNhdGVnb3JpZXNgO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllcyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7XHJcbiAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKGF4aXMpO1xyXG4gICAgYXdhaXQgcmFuZG9tQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgY2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGNhdGVnb3J5XHJcbiAqIEBwYXJhbSB7Kn0gY2F0ZWdvcnkgQ2F0ZWdvcnkgSFRNTCBlbGVtZW50XHJcbiAqL1xyXG5jb25zdCByYW5kb21DYXRlZ29yeSA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3RlYW1zXCIpO1xyXG4gIGNvbnN0IHRlYW1BYmJyZXZpYXRpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vIEdldCBhIHJhbmRvbSB0ZWFtJ3MgYWJicmV2aWF0aW9uIGFuZCBzdG9yZSBpdCBpbiB0aGUgY2F0ZWdvcnkncyBkYXRhc2V0XHJcbiAgY29uc3QgcmFuZE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKTtcclxuICBjb25zdCByYW5kb21UZWFtID0gdGVhbUFiYnJldmlhdGlvbnNbcmFuZE51bV07XHJcblxyXG4gIGNvbnN0IHRlYW1BYmJyZXZpYXRpb24gPSByYW5kb21UZWFtO1xyXG4gIGlmIChjaGVja0NhdGVnb3JpZXModGVhbUFiYnJldmlhdGlvbikpIHtcclxuICAgIGNhdGVnb3J5LmRhdGFzZXQudGVhbSA9IHRlYW1BYmJyZXZpYXRpb247XHJcbiAgICBjYXRlZ29yeS5zcmMgPSBgaHR0cHM6Ly9hc3NldHMubmhsZS5jb20vbG9nb3MvbmhsL3N2Zy8ke3RlYW1BYmJyZXZpYXRpb259X2Rhcmsuc3ZnYDtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQ2F0ZWdvcnkgY2hvc2VuIGlzIGFuIGluYWN0aXZlIHRlYW0uIENob29zZSBhbm90aGVyIGNhdGVnb3J5XHJcbiAgICBhd2FpdCByYW5kb21DYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVuc3VyZXMgdGhhdCBhIGNhdGVnb3J5IGlzIG5vdCB1c2VkIGJlZm9yZSBpdCBpcyBzZXRcclxuICogQHBhcmFtIHsqfSB0ZWFtQWJicmV2aWF0aW9uIEFiYnJldmlhdGlvbiBvZiBOSEwgdGVhbSAoMyBjaGFyYWN0ZXJzKVxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIGEgY2F0ZWdvcnkgaGFzIG5vdCBiZWVuIHVzZWQgb24gdGhlIGdhbWUgYm9hcmQsIGZhbHNlIG90aGVyd2lzZVxyXG4gKi9cclxuY29uc3QgY2hlY2tDYXRlZ29yaWVzID0gKHRlYW1BYmJyZXZpYXRpb24pID0+IHtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKTtcclxuICBsZXQgdmFsaWRDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IG5vIHRlYW0gaXMgY2hvc2VuIG1vcmUgdGhhbiBvbmNlIVxyXG4gIEFycmF5LmZyb20oY2F0ZWdvcmllcykuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcclxuICAgIGlmIChjYXRlZ29yeS5kYXRhc2V0LnRlYW0gPT09IHRlYW1BYmJyZXZpYXRpb24pIHtcclxuICAgICAgdmFsaWRDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB2YWxpZENhdGVnb3J5O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY2hvb3NlQ2F0ZWdvcmllcyB9O1xyXG4iLCJpbXBvcnQgeyB0cmlnZ2VyV2lubmVyTW9kYWwgfSBmcm9tIFwiLi4vdWkvZ2FtZS1vdmVyLW1vZGFsXCI7XHJcblxyXG4vKipcclxuICogVmVyaWZ5IHRoYXQgYSBnaXZlbiBwbGF5ZXIgaGFzIHBsYXllZCBmb3IgYm90aCB0ZWFtcyBnaXZlbiBhcyBhcmd1bWVudHMuIERpc3BsYXkgYSB3aW5kb3cgYWxlcnRcclxuICogaWYgYSBwbGF5ZXIgaGFzIG5vdCBwbGF5ZWQgZm9yIGJvdGggdGVhbTEgYW5kIHRlYW0yLlxyXG4gKiBAcGFyYW0geyp9IHRlYW0xIEZpcnN0IHRlYW0gdG8gY2hlY2sgZm9yIChhIGNhdGVnb3J5IG9uIHRoZSBncmlkKVxyXG4gKiBAcGFyYW0geyp9IHRlYW0yIFNlY29uZCB0ZWFtIHRvIGNoZWNrIGZvciAoYSBjYXRlZ29yeSBvbiB0aGUgZ3JpZClcclxuICogQHBhcmFtIHsqfSBwbGF5ZXIgUGxheWVyIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgYSBwbGF5ZXIgaGFzIHBsYXllZCBmb3IgYm90aCB0ZWFtcywgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAqL1xyXG5jb25zdCBjaGVja1BsYXllciA9IGFzeW5jICh0ZWFtMSwgdGVhbTIsIHBsYXllcikgPT4ge1xyXG4gIGNvbnN0IGFiYnJldmlhdGlvblRvVGVhbU1hcCA9IGdlbmVyYXRlQWJicmV2aWF0aW9uTWFwKCk7XHJcblxyXG4gIGNvbnN0IHRlYW0xTmFtZSA9IGFiYnJldmlhdGlvblRvVGVhbU1hcC5nZXQodGVhbTEpO1xyXG4gIGNvbnN0IHRlYW0yTmFtZSA9IGFiYnJldmlhdGlvblRvVGVhbU1hcC5nZXQodGVhbTIpO1xyXG4gIGNvbnNvbGUubG9nKHRlYW0xTmFtZSwgdGVhbTJOYW1lKTtcclxuICBjb25zdCB0ZWFtc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcGxheWVyL3RlYW1zLyR7cGxheWVyLnBsYXllcklkfWApO1xyXG4gIGNvbnN0IHRlYW1zID0gYXdhaXQgdGVhbXNSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGxldCBwbGF5ZWRGb3JUZWFtMSA9IGZhbHNlO1xyXG4gIGxldCBwbGF5ZWRGb3JUZWFtMiA9IGZhbHNlO1xyXG4gIGZvciAoY29uc3QgdGVhbSBvZiBBcnJheS5mcm9tKHRlYW1zKSkge1xyXG4gICAgaWYgKHRlYW0gPT09IHRlYW0xTmFtZSkge1xyXG4gICAgICBwbGF5ZWRGb3JUZWFtMSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRlYW0gPT09IHRlYW0yTmFtZSkge1xyXG4gICAgICBwbGF5ZWRGb3JUZWFtMiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChwbGF5ZWRGb3JUZWFtMSAmJiBwbGF5ZWRGb3JUZWFtMiAmJiAhY2hlY2tJZlBsYXllclVzZWQocGxheWVyLmZ1bGxOYW1lKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghcGxheWVkRm9yVGVhbTEgfHwgIXBsYXllZEZvclRlYW0yKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkluY29ycmVjdFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgd2lubmVyIG1vZGFsIGlmIGFsbCBjZWxscyBoYXZlIGEgcGxheWVyXHJcbiAqL1xyXG5jb25zdCBjaGVja0dhbWVPdmVyID0gKCkgPT4ge1xyXG4gIGlmIChhbGxGaWxsZWQoKSkge1xyXG4gICAgdHJpZ2dlcldpbm5lck1vZGFsKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGFsbCBjZWxscyBoYXZlIGEgcGxheWVyIGFzc2lnbmVkIHRvIHRoZW1cclxuICogQHJldHVybnMgVHJ1ZSBpZiBhbGwgY2VsbHMgaGF2ZSBhIHBsYXllciBhc3NpZ25lZCB0byB0aGVtLCBmYWxzZSBvdGhlcndpc2VcclxuICovXHJcbmNvbnN0IGFsbEZpbGxlZCA9ICgpID0+IHtcclxuICBjb25zdCBhbGxHcmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWQtaXRlbVwiKTtcclxuICByZXR1cm4gQXJyYXkuZnJvbShhbGxHcmlkSXRlbXMpLmV2ZXJ5KChncmlkSXRlbSkgPT5cclxuICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImNvcnJlY3RcIilcclxuICApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgcGxheWVyIGlzIGJlaW5nIHVzZWQgaW4gYW5vdGhlciBjZWxsXHJcbiAqIEBwYXJhbSB7Kn0gcGxheWVyIFBsYXllciB0byBjaGVja1xyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwbGF5ZXIgaXMgYmVpbmcgdXNlZCBpbiBhbm90aGVyIGNlbGwsIGZhbHNlIG90aGVyd2lzZSBcclxuICovXHJcbmNvbnN0IGNoZWNrSWZQbGF5ZXJVc2VkID0gKHBsYXllcikgPT4ge1xyXG4gIGNvbnN0IHBsYXllcnNVc2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItbmFtZVwiKTtcclxuICBjb25zdCBuYW1lc09mUGxheWVycyA9IFtdO1xyXG5cclxuICBwbGF5ZXJzVXNlZC5mb3JFYWNoKChwbGF5ZXIpID0+IHtcclxuICAgIGlmIChwbGF5ZXIudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcclxuICAgICAgbmFtZXNPZlBsYXllcnMucHVzaChwbGF5ZXIudGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChuYW1lc09mUGxheWVycy5pbmNsdWRlcyhwbGF5ZXIpKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoYFlvdSBoYXZlIGFscmVhZHkgdXNlZCAke3BsYXllcn0hYCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBtYXAgdGhhdCBtYXBzIGV2ZXJ5IHRlYW0gYWJicmV2aWF0aW9uIHRvIGEgdGVhbVxyXG4gKiBAcmV0dXJucyBUZWFtIGFiYnJldmlhdGlvbiB0byB0ZWFtIG1hcFxyXG4gKi9cclxuY29uc3QgZ2VuZXJhdGVBYmJyZXZpYXRpb25NYXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWJicmV2aWF0aW9uVG9UZWFtTWFwID0gbmV3IE1hcCgpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJBTkFcIiwgXCJBbmFoZWltIER1Y2tzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJBUklcIiwgXCJBcml6b25hIENveW90ZXNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkJPU1wiLCBcIkJvc3RvbiBCcnVpbnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkJVRlwiLCBcIkJ1ZmZhbG8gU2FicmVzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJDQVJcIiwgXCJDYXJvbGluYSBIdXJyaWNhbmVzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJDQkpcIiwgXCJDb2x1bWJ1cyBCbHVlIEphY2tldHNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkNHWVwiLCBcIkNhbGdhcnkgRmxhbWVzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJDSElcIiwgXCJDaGljYWdvIEJsYWNraGF3a3NcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIkNPTFwiLCBcIkNvbG9yYWRvIEF2YWxhbmNoZVwiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiREFMXCIsIFwiRGFsbGFzIFN0YXJzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJERVRcIiwgXCJEZXRyb2l0IFJlZCBXaW5nc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiRURNXCIsIFwiRWRtb250b24gT2lsZXJzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJGTEFcIiwgXCJGbG9yaWRhIFBhbnRoZXJzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJMQUtcIiwgXCJMb3MgQW5nZWxlcyBLaW5nc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiTUlOXCIsIFwiTWlubmVzb3RhIFdpbGRcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIk1UTFwiLCBcIk1vbnRyw6lhbCBDYW5hZGllbnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIk5KRFwiLCBcIk5ldyBKZXJzZXkgRGV2aWxzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJOU0hcIiwgXCJOYXNodmlsbGUgUHJlZGF0b3JzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJOWUlcIiwgXCJOZXcgWW9yayBJc2xhbmRlcnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIk5ZUlwiLCBcIk5ldyBZb3JrIFJhbmdlcnNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIk9UVFwiLCBcIk90dGF3YSBTZW5hdG9yc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiUEhJXCIsIFwiUGhpbGFkZWxwaGlhIEZseWVyc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiUElUXCIsIFwiUGl0dHNidXJnaCBQZW5ndWluc1wiKTtcclxuICAvLyBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiU0VBXCIsIFwiU2VhdHRsZSBLcmFrZW5cIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIlNKU1wiLCBcIlNhbiBKb3NlIFNoYXJrc1wiKTtcclxuICBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiU1RMXCIsIFwiU3QuIExvdWlzIEJsdWVzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJUQkxcIiwgXCJUYW1wYSBCYXkgTGlnaHRuaW5nXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJUT1JcIiwgXCJUb3JvbnRvIE1hcGxlIExlYWZzXCIpO1xyXG4gIGFiYnJldmlhdGlvblRvVGVhbU1hcC5zZXQoXCJWQU5cIiwgXCJWYW5jb3V2ZXIgQ2FudWNrc1wiKTtcclxuICAvLyBhYmJyZXZpYXRpb25Ub1RlYW1NYXAuc2V0KFwiVkdLXCIsIFwiVmVnYXMgR29sZGVuIEtuaWdodHNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIldQR1wiLCBcIldpbm5pcGVnIEpldHNcIik7XHJcbiAgYWJicmV2aWF0aW9uVG9UZWFtTWFwLnNldChcIldTSFwiLCBcIldhc2hpbmd0b24gQ2FwaXRhbHNcIik7XHJcbiAgcmV0dXJuIGFiYnJldmlhdGlvblRvVGVhbU1hcDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNoZWNrUGxheWVyLCBjaGVja0dhbWVPdmVyLCBnZW5lcmF0ZUFiYnJldmlhdGlvbk1hcCB9O1xyXG4iLCJpbXBvcnQgeyBjbGVhclNlYXJjaFJlc3VsdHMgfSBmcm9tIFwiLi4vdWkvc2VhcmNoLW1vZGFsXCI7XHJcblxyXG4vKipcclxuICogR2V0IHNlYXJjaCByZXN1bHRzIGZvciBhIGdpdmVuIHBsYXllciBmcm9tIHRoZSBOSEwgQVBJXHJcbiAqIEBwYXJhbSB7Kn0gcGxheWVyTmFtZSBOYW1lIG9mIHBsYXllciB0byBzZWFyY2ggZm9yXHJcbiAqIEByZXR1cm5zIERhdGEgZnJvbSBzZWFyY2ggcmVzdWx0cyByZXRyaWV2ZWQgZnJvbSB0aGUgTkhMIEFQSVxyXG4gKi9cclxuY29uc3QgZ2V0U2VhcmNoUmVzdWx0cyA9IGFzeW5jIChwbGF5ZXJOYW1lKSA9PiB7XHJcbiAgLy8gVE8tRE86IEhhbmRsZSBlcnJvcnMgZm9yIHRoaXMgcmVxdWVzdFxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvc2VhcmNoLyR7cGxheWVyTmFtZX1gKTtcclxuICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjbGVhclNlYXJjaFJlc3VsdHMoKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldFNlYXJjaFJlc3VsdHMgfTtcclxuIiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU2VhcmNoTW9kYWwsXHJcbiAgdHJpZ2dlclNlYXJjaE1vZGFsLFxyXG59IGZyb20gXCIuL3VpL3NlYXJjaC1tb2RhbFwiO1xyXG5pbXBvcnQgeyBjaG9vc2VDYXRlZ29yaWVzIH0gZnJvbSBcIi4vY2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBnZXRSb3csIGdldENvbCB9IGZyb20gXCIuL3VpL2dyaWQtaXRlbVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXaW5uZXJNb2RhbCB9IGZyb20gXCIuL3VpL2dhbWUtb3Zlci1tb2RhbFwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9pY29uczgtaG9ja2V5LTY0LnBuZ1wiO1xyXG5pbXBvcnQgY3JlYXRlTmF2YmFyIGZyb20gXCIuL3VpL25hdmJhclwiO1xyXG5pbXBvcnQgY3JlYXRlSGVscE1vZGFsIGZyb20gXCIuL3VpL2hlbHAtbW9kYWxcIjtcclxuXHJcbi8qKlxyXG4gKiBTdGFydCBhIG5ldyBnYW1lIGJ5IGNyZWF0aW5nIGEgZ2FtZSBib2FyZCBhbmQgc2VsZWN0aW5nIGNhdGVnb3JpZXMgZm9yIGVhY2ggcm93IGFuZCBjb2x1bW5cclxuICovXHJcbmNvbnN0IGluaXRpYWxpemVHYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVscE1vZGFsKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoTW9kYWwoKSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXaW5uZXJNb2RhbCgpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU92ZXJsYXkoKSk7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyaWQuaWQgPSBcInBsYXllci1ncmlkXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChncmlkKTtcclxuXHJcbiAgLy8gVE8tRE86IEhhbmRsZSBlcnJvcnMgZm9yIHRoaXMgcmVxdWVzdFxyXG4gIGF3YWl0IFByb21pc2UuYWxsKFtjaG9vc2VDYXRlZ29yaWVzKFwiY29sXCIpLCBjaG9vc2VDYXRlZ29yaWVzKFwicm93XCIpXSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgIGNyZWF0ZUdyaWRJdGVtKGkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWNrbm93bGVkZ2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBhY2tub3dsZWRnZW1lbnQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJBbGwgbG9nb3MgYW5kIGltYWdlcyBvd25lZCBieSB0aGUgTmF0aW9uYWwgSG9ja2V5IExlYWd1ZS4gVXNlIG9mIGFueSBsb2dvcyBvbiB0aGlzIHdlYnNpdGUgZG9lcyBub3QgY29uc3RpdHV0ZSBhIHNwb25zb3JzaGlwIG9yIGVuZG9yc2VtZW50IGJ5IHRoZSB0ZWFtcywgbGVhZ3VlLCBvciB0cmFkZW1hcmsgaG9sZGVycy5cIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFja25vd2xlZGdlbWVudCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgc3F1YXJlIG9uIHRoZSBnYW1lIGJvYXJkIChncmlkIGl0ZW0pXHJcbiAqIEBwYXJhbSB7Kn0gaW5kZXggSW5kZXggb24gZ2FtZSBib2FyZCBmb3IgZ3JpZCBpdGVtIChudW1iZXIgZnJvbSAwLTgpXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVHcmlkSXRlbSA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1ncmlkXCIpO1xyXG4gIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBncmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcclxuXHJcbiAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyaWQtaXRlbVwiKTtcclxuICBncmlkSXRlbS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcblxyXG4gIGNvbnN0IHBsYXllckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGxheWVySW1nLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItaW1nXCIpO1xyXG5cclxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGxheWVyTmFtZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW5hbWVcIik7XHJcbiAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQocGxheWVySW1nKTtcclxuICBncmlkSXRlbS5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcclxuXHJcbiAgc2V0Q2F0ZWdvcmllcyhncmlkSXRlbSk7XHJcblxyXG4gIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyBPbmx5IG9wZW4gc2VhcmNoIG1vZGFsIGlmIHRoZSBncmlkIGl0ZW0gZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHBsYXllclxyXG4gICAgaWYgKCFncmlkSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJjb3JyZWN0XCIpKSB7XHJcbiAgICAgIHRyaWdnZXJTZWFyY2hNb2RhbChncmlkSXRlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIHRoZSBvdmVybGF5IHRoYXQgZGFya2VucyB0aGUgYmFja2dyb3VuZCB3aGVuIGEgbW9kYWwgaXMgZGlzcGxheWVkXHJcbiAqIEByZXR1cm5zIE92ZXJsYXkgSFRNTCBlbGVtZW50XHJcbiAqL1xyXG5jb25zdCBjcmVhdGVPdmVybGF5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG92ZXJsYXkuaWQgPSBcIm92ZXJsYXlcIjtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgcmV0dXJuIG92ZXJsYXk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0IGNhdGVnb3JpZXMgZm9yIGdyaWQgaXRlbSB0byB0aGUgY2F0ZWdvcmllcyBnaXZlbiBieSB0aGUgcm93IGFuZCBjb2x1bW4gb2YgdGhlIGdyaWQgaXRlbVxyXG4gKiBAcGFyYW0geyp9IGdyaWRJdGVtIEdyaWQgaXRlbSB0byBzZXQgY2F0ZWdvcmllcyBmb3JcclxuICovXHJcbmNvbnN0IHNldENhdGVnb3JpZXMgPSAoZ3JpZEl0ZW0pID0+IHtcclxuICBjb25zdCBpbmRleCA9IGdyaWRJdGVtLmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3Qgcm93ID0gZ2V0Um93KGluZGV4KTtcclxuICBjb25zdCBjb2wgPSBnZXRDb2woaW5kZXgpO1xyXG5cclxuICBjb25zdCByb3dDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnkucm93XCIpW3Jvd107XHJcbiAgY29uc3QgY29sQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LmNvbFwiKVtjb2xdO1xyXG5cclxuICBjb25zdCByb3dUZWFtID0gcm93Q2F0ZWdvcnkuZGF0YXNldC50ZWFtO1xyXG4gIGNvbnN0IGNvbFRlYW0gPSBjb2xDYXRlZ29yeS5kYXRhc2V0LnRlYW07XHJcblxyXG4gIGdyaWRJdGVtLmRhdGFzZXQudGVhbTEgPSByb3dUZWFtO1xyXG4gIGdyaWRJdGVtLmRhdGFzZXQudGVhbTIgPSBjb2xUZWFtO1xyXG59O1xyXG5cclxuaW5pdGlhbGl6ZUdhbWUoKTtcclxuIiwiaW1wb3J0IHsgdG9nZ2xlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgdGhlIG1vZGFsIGRpc3BsYXllZCB3aGVuIHRoZSB1c2VyIHdpbnMgdGhlIGdhbWVcclxuICogQHJldHVybnMgTW9kYWwgZGlzcGxheWVkIHdoZW4gdGhlIHVzZXIgd2lucyB0aGUgZ2FtZVxyXG4gKi9cclxuY29uc3QgY3JlYXRlV2lubmVyTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2lubmVyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdpbm5lck1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcclxuICB3aW5uZXJNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIHdpbm5lck1vZGFsLmlkID0gXCJ3aW5uZXItbW9kYWxcIjtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtbW9kYWxcIjtcclxuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG5cclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdG9nZ2xlTW9kYWwod2lubmVyTW9kYWwpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdGV4dC5pZCA9IFwid2lubmVyLXRleHRcIjtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gXCJZb3UgV2luIVwiO1xyXG5cclxuICB3aW5uZXJNb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgd2lubmVyTW9kYWwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgcmV0dXJuIHdpbm5lck1vZGFsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZXMgdGhlIHdpbm5lciBtb2RhbFxyXG4gKi9cclxuY29uc3QgdHJpZ2dlcldpbm5lck1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdpbm5lck1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uZXItbW9kYWxcIik7XHJcbiAgdG9nZ2xlTW9kYWwod2lubmVyTW9kYWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlV2lubmVyTW9kYWwsIHRyaWdnZXJXaW5uZXJNb2RhbCB9O1xyXG4iLCIvKipcclxuICogQWRkcyBhIHBsYXllcidzIG5hbWUgYW5kIGltYWdlIHRvIHRoZSBnYW1lIGJvYXJkXHJcbiAqIEBwYXJhbSB7Kn0gZ3JpZEl0ZW0gR3JpZCBpdGVtIHdoZXJlIHRoZSBwbGF5ZXIncyBuYW1lIGFuZCBpbWFnZSBpcyBhZGRlZCBcclxuICogQHBhcmFtIHsqfSBwbGF5ZXIgSlNPTiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCBhIHBsYXllclxyXG4gKi9cclxuY29uc3QgYWRkUGxheWVyID0gKGdyaWRJdGVtLCBwbGF5ZXIpID0+IHtcclxuICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcclxuICBjb25zdCBncmlkSXRlbUNoaWxkcmVuID0gQXJyYXkuZnJvbShncmlkSXRlbS5jaGlsZE5vZGVzKTtcclxuXHJcbiAgLy8gR2V0IGxhdGVzdCBwbGF5ZXIgaW1hZ2VcclxuICBjb25zdCBwbGF5ZXJJbWcgPSBncmlkSXRlbUNoaWxkcmVuWzBdO1xyXG4gIHBsYXllckltZy5zcmMgPSBgaHR0cHM6Ly9hc3NldHMubmhsZS5jb20vbXVncy9uaGwvbGF0ZXN0LyR7cGxheWVyLnBsYXllcklkfS5wbmdgO1xyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBncmlkSXRlbUNoaWxkcmVuWzFdO1xyXG4gIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuZmlyc3ROYW1lLmRlZmF1bHR9ICR7cGxheWVyLmxhc3ROYW1lLmRlZmF1bHR9YDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSByb3cgb2YgYW4gaW5kZXhcclxuICogQHBhcmFtIHsqfSBpbmRleCBJbmRleCBvZiBhIGdyaWQgaXRlbSBvbiBnYW1lIGJvYXJkXHJcbiAqIEByZXR1cm5zIFJvdyBvZiBpbmRleFxyXG4gKi9cclxuY29uc3QgZ2V0Um93ID0gKGluZGV4KSA9PiB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXggLyAzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBjb2x1bW4gb2YgYW4gaW5kZXhcclxuICogQHBhcmFtIHsqfSBpbmRleCBJbmRleCBvZiBhIGdyaWQgaXRlbSBvbiBnYW1lIGJvYXJkXHJcbiAqIEByZXR1cm5zIENvbHVtbiBvZiBpbmRleFxyXG4gKi9cclxuY29uc3QgZ2V0Q29sID0gKGluZGV4KSA9PiB7XHJcbiAgcmV0dXJuIGluZGV4ICUgMztcclxufTtcclxuXHJcbmV4cG9ydCB7IGFkZFBsYXllciwgZ2V0Um93LCBnZXRDb2wgfTtcclxuIiwiaW1wb3J0IHsgdG9nZ2xlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuY29uc3QgY3JlYXRlSGVscE1vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVscE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlbHBNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgICBoZWxwTW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIGhlbHBNb2RhbC5pZCA9IFwiaGVscC1tb2RhbFwiO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJDb250YWluZXIuaWQgPSBcIm1vZGFsLWhlYWRlci1jb250YWluZXJcIjtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLW1vZGFsXCI7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG5cclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlTW9kYWwoaGVscE1vZGFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSG93IHRvIFBsYXlcIjtcclxuXHJcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zTGlzdCA9IGdldEluc3RydWN0aW9ucygpO1xyXG5cclxuICAgIGhlbHBNb2RhbC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xyXG4gICAgaGVscE1vZGFsLmFwcGVuZENoaWxkKGluc3RydWN0aW9uc0xpc3QpO1xyXG5cclxuICAgIHJldHVybiBoZWxwTW9kYWxcclxufVxyXG5cclxuY29uc3QgZ2V0SW5zdHJ1Y3Rpb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGluc3RydWN0aW9uc0xpc3QuaWQgPSBcImluc3RydWN0aW9uc1wiO1xyXG5cclxuICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IFtcclxuICAgICAgICBcIkVhY2ggY2VsbCBvbiB0aGUgZ3JpZCBoYXMgYSByb3cgYW5kIGNvbHVtbiB0ZWFtXCIsXHJcbiAgICAgICAgXCJZb3VyIGdvYWwgaXMgdG8gbmFtZSBhIHBsYXllciB0aGF0IGhhcyBwbGF5ZWQgZm9yIGJvdGggdGhlIHJvdyB0ZWFtIGFuZCB0aGUgY29sdW1uIHRlYW0gZm9yIGVhY2ggY2VsbCBvbiB0aGUgZ3JpZFwiLFxyXG4gICAgICAgIFwiQSBwbGF5ZXIgbWF0Y2hlcyBhIHRlYW0gaWYgdGhleSBoYXZlIHBsYXllZCBhdCBsZWFzdCAxIHJlZ3VsYXIgc2Vhc29uIGdhbWUgd2l0aCB0aGUgdGVhbVwiLFxyXG4gICAgICAgIFwiVG8gZ3Vlc3MgYSBwbGF5ZXIsIGNsaWNrIG9uIGEgc3F1YXJlIGFuZCB1c2UgdGhlIHNlYXJjaCBiYXIgdG8gZW50ZXIgdGhlIHBsYXllciB5b3Ugd291bGQgbGlrZSB0byBndWVzcy4gQ2xpY2sgdG8gc3VibWl0IGJ1dHRvbiBuZXh0IHRvIHRoZSBwbGF5ZXIncyBuYW1lIHRvIGxvY2sgaW4geW91ciBndWVzc1wiLFxyXG4gICAgICAgIFwiVGhlIGdhbWUgZW5kcyBvbmNlIHlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBuYW1lZCBhIHBsYXllciBmb3IgZWFjaCBjZWxsIG9uIHRoZSBncmlkXCIsXHJcbiAgICAgICAgXCJIYXZlIGZ1biFcIlxyXG4gICAgXVxyXG5cclxuICAgIGluc3RydWN0aW9ucy5mb3JFYWNoKChpbnN0cnVjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpbnN0cnVjdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnN0cnVjdGlvbjtcclxuICAgICAgICBpbnN0cnVjdGlvbnNMaXN0LmFwcGVuZENoaWxkKGluc3RydWN0aW9uRWxlbWVudCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBpbnN0cnVjdGlvbnNMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWxwTW9kYWwiLCIvKipcclxuICogVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiBhIG1vZGFsXHJcbiAqIEBwYXJhbSB7Kn0gbW9kYWwgTW9kYWwgdG8gdG9nZ2xlXHJcbiAqL1xyXG5jb25zdCB0b2dnbGVNb2RhbCA9IChtb2RhbCkgPT4ge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbn07XHJcblxyXG5leHBvcnQgeyB0b2dnbGVNb2RhbCB9OyIsImltcG9ydCBRdWVzdGlvbk1hcmsgZnJvbSBcIi4uL2Fzc2V0cy9xdWVzdGlvbi1tYXJrLnN2Z1wiXHJcbmltcG9ydCB7IHRvZ2dsZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdmJhciA9ICgpID0+IHtcclxuICAgIC8vIFRPRE86IEFkZCBuYXZiYXIgY29udGFpbmluZzogc2l0ZSBuYW1lLCBpbnN0cnVjdGlvbnMgKGhvdyB0byBwbGF5KSBcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuaWQgPSBcIm5hdmJhclwiO1xyXG5cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGxvZ28uaWQgPSBcInNpdGUtbG9nb1wiO1xyXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiTkhMIEdSSURcIjtcclxuXHJcbiAgICBjb25zdCBoZWxwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhlbHBCdXR0b24uaWQgPSBcImhlbHAtYnV0dG9uXCI7XHJcblxyXG4gICAgY29uc3QgaGVscEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGhlbHBJY29uLnNyYyA9IFF1ZXN0aW9uTWFyaztcclxuICAgIGhlbHBJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xyXG4gICAgaGVscEJ1dHRvbi5hcHBlbmRDaGlsZChoZWxwSWNvbik7XHJcblxyXG4gICAgaGVscEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlbHBNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC1tb2RhbFwiKTtcclxuICAgICAgICB0b2dnbGVNb2RhbChoZWxwTW9kYWwpO1xyXG4gICAgfSlcclxuXHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaGVscEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIG5hdmJhcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2YmFyOyIsImltcG9ydCB7IGFkZFBsYXllciB9IGZyb20gXCIuL2dyaWQtaXRlbVwiO1xyXG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGNoZWNrUGxheWVyLCBjaGVja0dhbWVPdmVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWUtY29udHJvbGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSByb3cgY29udGFpbmluZyBhIHBsYXllcidzIG5hbWUvZGF0ZSBvZiBiaXJ0aCBhbmQgYSBzdWJtaXQgYnV0dG9uIGRpc3BsYXllZCBcclxuICogaW4gdGhlIHBsYXllciBzZWFyY2ggbW9kYWxcclxuICogQHBhcmFtIHsqfSBwbGF5ZXJOYW1lIE5hbWUgb2YgcGxheWVyXHJcbiAqIEBwYXJhbSB7Kn0gYmlydGhEYXRlIFBsYXllcidzIGRhdGUgb2YgYmlydGhcclxuICogQHBhcmFtIHsqfSBwbGF5ZXJJZCBQbGF5ZXIgaWQgKGRlZmluZWQgYnkgTkhMKVxyXG4gKiBAcGFyYW0geyp9IGdyaWRJdGVtIEdyaWQgaXRlbSBIVE1MIGVsZW1lbnQgc2VsZWN0ZWQgYnkgcGxheWVyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVQbGF5ZXJJdGVtID0gKHBsYXllck5hbWUsIGJpcnRoRGF0ZSwgcGxheWVySWQsIGdyaWRJdGVtKSA9PiB7XHJcbiAgY29uc3QgcGxheWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGxheWVySXRlbS5jbGFzc05hbWUgPSBcInBsYXllci1pdGVtXCI7XHJcblxyXG4gIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxlZnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJwbGF5ZXItcmVzdWx0LWxlZnRcIjtcclxuICBjb25zdCBwbGF5ZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBsYXllck5hbWVFbGVtZW50LmNsYXNzTmFtZSA9IFwicGxheWVyLXJlc3VsdC1uYW1lXCI7XHJcbiAgcGxheWVyTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xyXG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyTmFtZUVsZW1lbnQpO1xyXG5cclxuICBjb25zdCBiaXJ0aERhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYmlydGhEYXRlRWxlbWVudC5jbGFzc05hbWUgPSBcImJpcnRoLWRhdGVcIjtcclxuICBiaXJ0aERhdGVFbGVtZW50LnRleHRDb250ZW50ID0gYCgke2JpcnRoRGF0ZX0pYDtcclxuICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJpcnRoRGF0ZUVsZW1lbnQpO1xyXG5cclxuICBwbGF5ZXJJdGVtLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSBcInJlc3VsdC1zdWJtaXQtYnV0dG9uXCI7XHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICBvblBsYXllclNlbGVjdGVkKHBsYXllcklkLCBncmlkSXRlbSlcclxuICApO1xyXG5cclxuICBwbGF5ZXJJdGVtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIHJldHVybiBwbGF5ZXJJdGVtO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIHBsYXllciB0byB0aGUgZ2FtZSBib2FyZCBpZiBhIHBsYXllciBoYXMgcGxheWVkIGZvciBib3RoIHRlYW1zIHNwZWNpZmllZFxyXG4gKiBieSB0aGUgZ3JpZCBpdGVtIGdpdmVuIGFzIGFuIGFyZ3VtZW50LlxyXG4gKiBAcGFyYW0geyp9IHBsYXllcklkIElEIG9mIHBsYXllciBzZWxlY3RlZCBpbiBzZWFyY2ggbW9kYWxcclxuICogQHBhcmFtIHsqfSBncmlkSXRlbSBHcmlkIGl0ZW0gc2VsZWN0ZWQgYnkgdXNlclxyXG4gKi9cclxuY29uc3Qgb25QbGF5ZXJTZWxlY3RlZCA9IGFzeW5jIChwbGF5ZXJJZCwgZ3JpZEl0ZW0pID0+IHtcclxuICBjb25zdCBzZWFyY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW1vZGFsXCIpO1xyXG4gIGNvbnN0IHBsYXllclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcGxheWVyLyR7cGxheWVySWR9YCk7XHJcbiAgY29uc3QgcGxheWVyID0gYXdhaXQgcGxheWVyUmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKHBsYXllcik7XHJcblxyXG4gIGNvbnN0IHRlYW0xID0gZ3JpZEl0ZW0uZGF0YXNldC50ZWFtMTtcclxuICBjb25zdCB0ZWFtMiA9IGdyaWRJdGVtLmRhdGFzZXQudGVhbTI7XHJcbiAgY29uc3QgcGxheWVkRm9yQm90aFRlYW1zID0gYXdhaXQgY2hlY2tQbGF5ZXIodGVhbTEsIHRlYW0yLCBwbGF5ZXIpO1xyXG4gIGlmIChwbGF5ZWRGb3JCb3RoVGVhbXMpIHtcclxuICAgIGFkZFBsYXllcihncmlkSXRlbSwgcGxheWVyKTtcclxuICB9XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtcGxheWVyXCIpLnZhbHVlID0gXCJcIjtcclxuICB0b2dnbGVNb2RhbChzZWFyY2hNb2RhbCk7XHJcbiAgY2hlY2tHYW1lT3ZlcigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVySXRlbTtcclxuIiwiaW1wb3J0IHsgZ2V0U2VhcmNoUmVzdWx0cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9zZWFyY2gtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCBjcmVhdGVQbGF5ZXJJdGVtIGZyb20gXCIuL3BsYXllci1yZXN1bHQuaXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZWFyY2ggbW9kYWwgb24gZ2FtZSBpbml0aWFsaXphdGlvbi4gVGhlIHNlYXJjaCBtb2RhbCBpc1xyXG4gKiBoaWRkZW4gYnkgZGVmYXVsdC5cclxuICogQHJldHVybnMgU2VhcmNoIG1vZGFsIEhUTUwgZWxlbWVudFxyXG4gKi9cclxuY29uc3QgY3JlYXRlU2VhcmNoTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlYXJjaE1vZGFsLmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcclxuICBzZWFyY2hNb2RhbC5pZCA9IFwic2VhcmNoLW1vZGFsXCI7XHJcbiAgc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJDb250YWluZXIuaWQgPSBcIm1vZGFsLWhlYWRlci1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci5pZCA9IFwibW9kYWwtaGVhZGVyXCI7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLW1vZGFsXCI7XHJcbiAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuXHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXBsYXllclwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB0b2dnbGVNb2RhbChzZWFyY2hNb2RhbCk7XHJcbiAgfSk7XHJcblxyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBwbGF5ZXIuLi5cIjtcclxuICBzZWFyY2hJbnB1dC5uYW1lID0gXCJzZWFyY2gtcGxheWVyXCI7XHJcbiAgc2VhcmNoSW5wdXQuaWQgPSBcInNlYXJjaC1wbGF5ZXJcIjtcclxuXHJcbiAgY29uc3QgcGxheWVySXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBsYXllckl0ZW1zQ29udGFpbmVyLmlkID0gXCJwbGF5ZXItaXRlbXMtY29udGFpbmVyXCI7XHJcblxyXG4gIHNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcbiAgc2VhcmNoTW9kYWwuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG4gIHNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKHBsYXllckl0ZW1zQ29udGFpbmVyKTtcclxuICByZXR1cm4gc2VhcmNoTW9kYWw7XHJcbn07XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgdGhlIHNlYXJjaCBtb2RhbCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIGdyaWQgaXRlbSB3aXRoIG5vIHBsYXllclxyXG4gKiBAcGFyYW0geyp9IGdyaWRJdGVtIEdyaWQgaXRlbSBzZWxlY3RlZCBieSB1c2VyXHJcbiAqL1xyXG5jb25zdCB0cmlnZ2VyU2VhcmNoTW9kYWwgPSAoZ3JpZEl0ZW0pID0+IHtcclxuICBjb25zdCBzZWFyY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW1vZGFsXCIpO1xyXG4gIHRvZ2dsZU1vZGFsKHNlYXJjaE1vZGFsKTtcclxuICBjbGVhclNlYXJjaFJlc3VsdHMoKTtcclxuICBjb25zdCB0ZWFtMSA9IGdyaWRJdGVtLmRhdGFzZXQudGVhbTE7XHJcbiAgY29uc3QgdGVhbTIgPSBncmlkSXRlbS5kYXRhc2V0LnRlYW0yO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3RlYW0xfS0ke3RlYW0yfWA7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtcGxheWVyXCIpO1xyXG4gIGxldCB0eXBpbmdUaW1lcjtcclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KHR5cGluZ1RpbWVyKTtcclxuICAgIHR5cGluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiBmZXRjaFNlYXJjaERhdGEoc2VhcmNoSW5wdXQsIGdyaWRJdGVtKSwgMjUwKTtcclxuICB9KVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZldGNoZXMgc2VhY2ggcmVzdWx0IGRhdGEgZnJvbSB0aGUgQVBJXHJcbiAqIEBwYXJhbSB7Kn0gc2VhcmNoSW5wdXQgSW5wdXQgZW50ZXJyZWQgYnkgdXNlciBpbiB0aGUgc2VhcmNoIG1vZGFsXHJcbiAqIEBwYXJhbSB7Kn0gZ3JpZEl0ZW0gR3JpZCBpdGVtIHNlbGVjdGVkIGJ5IHVzZXJcclxuICovXHJcbmNvbnN0IGZldGNoU2VhcmNoRGF0YSA9IGFzeW5jIChzZWFyY2hJbnB1dCwgZ3JpZEl0ZW0pID0+IHtcclxuICBjb25zdCBwbGF5ZXJJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWl0ZW1zLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgZ2V0U2VhcmNoUmVzdWx0cyhzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbiAgYXdhaXQgUHJvbWlzZS5hbGwoc2VhcmNoUmVzdWx0cy5mb3JFYWNoKGFzeW5jIChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IHBsYXllcklkID0gTnVtYmVyKHBsYXllcltcInBsYXllcklkXCJdKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVyXCIsIHBsYXllcik7XHJcbiAgICBjb25zb2xlLmxvZyhcIklEXCIsIHBsYXllcklkKTtcclxuICAgIGNvbnN0IHBsYXllclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcGxheWVyLyR7cGxheWVySWR9YCk7XHJcbiAgICBjb25zdCBwbGF5ZXJEYXRhID0gYXdhaXQgcGxheWVyUmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJEYXRhXCIsIHBsYXllckRhdGEpO1xyXG4gICAgY29uc3QgYmlydGhEYXRlID0gcGxheWVyRGF0YS5iaXJ0aERhdGU7XHJcbiAgICBjb25zdCBuYW1lID0gcGxheWVyW1wibmFtZVwiXTtcclxuICAgIHBsYXllckl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICBjcmVhdGVQbGF5ZXJJdGVtKG5hbWUsIGJpcnRoRGF0ZSwgcGxheWVySWQsIGdyaWRJdGVtKVxyXG4gICAgKTtcclxuICB9KSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xlYXJzIHRoZSBwbGF5ZXIgcmVzdWx0cyBzaG93biBiZWxvdyB0aGUgc2VhcmNoIGJhclxyXG4gKi9cclxuY29uc3QgY2xlYXJTZWFyY2hSZXN1bHRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXllckl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInBsYXllci1pdGVtcy1jb250YWluZXJcIlxyXG4gICk7XHJcbiAgcGxheWVySXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlU2VhcmNoTW9kYWwsXHJcbiAgdHJpZ2dlclNlYXJjaE1vZGFsLFxyXG4gIGNyZWF0ZVBsYXllckl0ZW0sXHJcbiAgY2xlYXJTZWFyY2hSZXN1bHRzLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=