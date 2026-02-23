/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css"
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  font-family: sans-serif;
}

#menu {
  text-align: center;
}

#menu h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

#menu button {
  font-size: 1.5rem;
  padding: 1rem 2rem;
  margin: 1rem;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

#menu button:hover {
  background-color: white;
  color: black;
}

canvas {
  background-color: #000;
  border: 1px solid #fff;
}

.exit-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.exit-btn:hover {
  background-color: white;
  color: black;
}
`, "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB;;cAEY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB;;cAEY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd","sourcesContent":["body {\n  margin: 0;\n  background-color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  color: white;\n  font-family: sans-serif;\n}\n\n#menu {\n  text-align: center;\n}\n\n#menu h1 {\n  font-size: 3rem;\n  margin-bottom: 2rem;\n}\n\n#menu button {\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  margin: 1rem;\n  cursor: pointer;\n  background-color: #333;\n  color: white;\n  border: 2px solid white;\n  border-radius: 10px;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n}\n\n#menu button:hover {\n  background-color: white;\n  color: black;\n}\n\ncanvas {\n  background-color: #000;\n  border: 1px solid #fff;\n}\n\n.exit-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  background-color: #333;\n  color: white;\n  border: 2px solid white;\n  border-radius: 5px;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n}\n\n.exit-btn:hover {\n  background-color: white;\n  color: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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

/***/ },

/***/ "./style.css"
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./Engine/Core.ts"
/*!************************!*\
  !*** ./Engine/Core.ts ***!
  \************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EngineCore = void 0;
/**
 * @class EngineCore
 * @description Ядро движка
 */
class EngineCore {
    /**
     * @constructor
     * @param {IEngineCoreOptions} options Параметры для ядра движка
     */
    constructor({ canvasId, onBeforeUpdate, onBeforeDraw, debug }) {
        /**
         * @private
         * @type {GameObject[]}
         * @description Список игровых объектов на сцене
         */
        this._gameObjects = [];
        /**
         * @private
         * @type {boolean}
         * @description Включает отладку для движка
         */
        this._debug = false;
        /**
         * @private
         * @type {number}
         * @description Идентификатор текущего кадра анимации
         */
        this.animationFrameId = 0;
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this._onBeforeUpdate = onBeforeUpdate;
        this._onBeforeDraw = onBeforeDraw;
        this._debug = debug !== null && debug !== void 0 ? debug : false;
    }
    /**
     * @method addGameObjects
     * @param {GameObject[]} objects Объекты для добавления
     * @description Добавляет объекты на сцену
     */
    addGameObjects(objects) {
        if (this._debug) {
            objects.forEach((object) => (object.debug = true));
        }
        this._gameObjects = [...this._gameObjects, ...objects];
    }
    /**
     * @method removeGameObject
     * @param {GameObject} obj Объект
     * @description Удаляет обект со сцены
     */
    removeGameObject(obj) {
        this._gameObjects = this._gameObjects.filter((item) => item !== obj);
    }
    /**
     * @method start
     * @description Запускает игровой цикл
     */
    start() {
        this.gameLoop();
    }
    /**
     * @method stop
     * @description Останавливает игровой цикл
     */
    stop() {
        cancelAnimationFrame(this.animationFrameId);
    }
    /**
     * @method checkCollisions
     * @description Проверяет наличие столкновений между всеми игровыми объектами
     */
    checkCollisions() {
        const objects = this._gameObjects;
        for (let i = 0; i < objects.length; i++) {
            const a = objects[i];
            if (!a.collider || !a.isEnabled())
                continue;
            for (let j = i + 1; j < objects.length; j++) {
                const b = objects[j];
                if (!b.collider || !b.isEnabled())
                    continue;
                const collisionResult = a.collider.isCollidingWith(b.collider);
                if (collisionResult.collided) {
                    a.onCollision(b, collisionResult);
                    // Инвертируем нормаль и вектор проникновения для второго объекта
                    const invertedResult = Object.assign(Object.assign({}, collisionResult), { normal: collisionResult.normal ? { x: -collisionResult.normal.x, y: -collisionResult.normal.y } : null, penetration: collisionResult.penetration ? { x: -collisionResult.penetration.x, y: -collisionResult.penetration.y } : null });
                    b.onCollision(a, invertedResult);
                }
            }
        }
    }
    /**
     * @private
     * @method gameLoop
     * @param {number} [time=0] Текущее время
     * @description Основной игровой цикл
     */
    gameLoop(time = 0) {
        var _a, _b;
        for (const item of this._gameObjects) {
            if (item.isEnabled()) {
                item.transform.position.previousPoint = Object.assign({}, item.transform.position.point);
            }
        }
        (_a = this._onBeforeUpdate) === null || _a === void 0 ? void 0 : _a.call(this);
        for (const item of this._gameObjects) {
            if (item.isEnabled()) {
                item.update(time);
            }
        }
        this.checkCollisions();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        (_b = this._onBeforeDraw) === null || _b === void 0 ? void 0 : _b.call(this);
        for (const item of this._gameObjects) {
            if (item.isVisible()) {
                item.draw(this.ctx);
            }
        }
        this._gameObjects = this._gameObjects.filter((item) => !item.isDestroyed());
        this.animationFrameId = requestAnimationFrame((t) => this.gameLoop(t));
    }
}
exports.EngineCore = EngineCore;


/***/ },

/***/ "./Engine/GameObject.ts"
/*!******************************!*\
  !*** ./Engine/GameObject.ts ***!
  \******************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameObject = void 0;
/**
 * @class GameObject
 * @description Базовый класс для всех игровых объектов
 */
class GameObject {
    /**
     * @constructor
     * @param {IGameObjectOptions} Конфигурация
     */
    constructor({ transform, debug }) {
        /**
         * @private
         * @type {boolean}
         * @description Уничтожен ли объект
         */
        this._destroyed = false;
        /**
         * @private
         * @type {boolean}
         * @description Видимость на сцена
         */
        this._visibility = false;
        /**
         * @private
         * @type {boolean}
         * @description Активация, неактивированные обекты не участвуют в расчетах
         */
        this._enabled = false;
        /**
         * @type {boolean}
         * @description Включает отладку для объекта
         */
        this.debug = false;
        /**
         * @type {(IAbstractCollider | null)}
         * @description Коллайдер объекта
         */
        this.collider = null;
        /**
         * @type {number}
         * @description Скорость вращения
         */
        this.rotationVelocity = 0;
        /**
         * @type {Vector2}
         * @description Скорость объекта
         */
        this.velocity = { x: 0, y: 0 };
        /**
         * @type {Vector2}
         * @description Ускорение объекта
         */
        this.acceleration = { x: 0, y: 0 };
        this.transform = transform;
        this.debug = debug !== null && debug !== void 0 ? debug : false;
    }
    /**
     * @method enable
     * @description Включает объект
     */
    enable() {
        this._enabled = true;
    }
    /**
     * @method disable
     * @description Выключает объект
     */
    disable() {
        this._enabled = false;
    }
    /**
     * @method destroy
     * @description Помечает объект как уничтоженный
     */
    destroy() {
        this._destroyed = true;
    }
    /**
     * @method isEnabled
     * @returns {boolean}
     * @description Возвращает, активен ли объект
     */
    isEnabled() {
        return this._enabled;
    }
    /**
     * @method isDestroyed
     * @returns {boolean}
     * @description Возвращает, уничтожен ли объект
     */
    isDestroyed() {
        return this._destroyed;
    }
    /**
     * @method isVisible
     * @returns {boolean}
     * @description Возвращает, видим ли объект
     */
    isVisible() {
        return this._visibility;
    }
    /**
     * @method setVisibility
     * @param {boolean} visibility
     * @description Устанавливает видимость объекта
     */
    setVisibility(visibility) {
        this._visibility = visibility;
    }
    /**
     * @method update
     * @param {number} deltaTime
     * @description Вызывается каждый кадр
     */
    update(_deltaTime) {
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.transform.position.point.x += this.velocity.x;
        this.transform.position.point.y += this.velocity.y;
        this.transform.position.rotation += this.rotationVelocity;
    }
    /**
     * @method draw
     * @param {CanvasRenderingContext2D} ctx
     * @description Вызывается для отрисовки объекта
     */
    draw(_ctx) { }
    /**
     * @method onCollision
     * @param {GameObject} other
     * @description Вызывается при столкновении с другим объектом.
     */
    onCollision(_other, _result) { }
}
exports.GameObject = GameObject;


/***/ },

/***/ "./Engine/_collider/Abstract.ts"
/*!**************************************!*\
  !*** ./Engine/_collider/Abstract.ts ***!
  \**************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Abstract = void 0;
/**
 * @description Абстрактный класс коллайдера
 * @implements IAbstractCollider
 */
class Abstract {
    /**
     * @param gameObject Игровой объект, к которому привязан коллайдер
     */
    constructor(gameObject) {
        this.gameObject = gameObject;
        this.gameObject.collider = this;
    }
}
exports.Abstract = Abstract;


/***/ },

/***/ "./Engine/_collider/Box.ts"
/*!*********************************!*\
  !*** ./Engine/_collider/Box.ts ***!
  \*********************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoxCollider = void 0;
const Abstract_1 = __webpack_require__(/*! ./Abstract */ "./Engine/_collider/Abstract.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./Engine/_collider/Utils.ts");
const types_1 = __webpack_require__(/*! ./types */ "./Engine/_collider/types.ts");
/**
 * @description Прямоугольный коллайдер
 * @extends AbstractCollider
 * @implements IBoxCollider
 */
class BoxCollider extends Abstract_1.Abstract {
    /**
     * @param gameObject Игровой объект, к которому привязан коллайдер
     * @param width Ширина коллайдера, по умолчанию ширина обекта
     * @param height Высота коллайдера, по умолчанию высота объекта
     */
    constructor(gameObject, width, height) {
        super(gameObject);
        this.gameObject = gameObject;
        /**
         * @description Тип коллайдера
         */
        this.type = types_1.ColliderType.Box;
        this.width = width !== null && width !== void 0 ? width : gameObject.transform.width;
        this.height = height !== null && height !== void 0 ? height : gameObject.transform.height;
    }
    /**
     * @description Проверяет, сталкивается ли этот коллайдер с другим
     * @param other Другой коллайдер
     * @returns true, если есть столкновение, иначе false
     */
    isCollidingWith(other) {
        return (0, Utils_1.checkCollision)(this, other);
    }
}
exports.BoxCollider = BoxCollider;


/***/ },

/***/ "./Engine/_collider/Circle.ts"
/*!************************************!*\
  !*** ./Engine/_collider/Circle.ts ***!
  \************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleCollider = void 0;
const Abstract_1 = __webpack_require__(/*! ./Abstract */ "./Engine/_collider/Abstract.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./Engine/_collider/Utils.ts");
const types_1 = __webpack_require__(/*! ./types */ "./Engine/_collider/types.ts");
/**
 * @description Круглый коллайдер
 * @extends Abstract
 * @implements ICircleCollider
 */
class CircleCollider extends Abstract_1.Abstract {
    /**
     * @param gameObject Игровой объект, к которому привязан коллайдер
     * @param radius Радиус коллайдера
     */
    constructor(gameObject, radius) {
        super(gameObject);
        this.gameObject = gameObject;
        /**
         * @description Тип коллайдера
         */
        this.type = types_1.ColliderType.Circle;
        this.radius = radius;
    }
    /**
     * @description Возвращает центр коллайдера
     * @returns Координаты центра
     */
    getCenter() {
        const point = this.gameObject.transform.position.point;
        const pivot = this.gameObject.transform.pivot;
        return {
            x: point.x + pivot.x,
            y: point.y + pivot.y,
        };
    }
    /**
     * @description Проверяет, сталкивается ли этот коллайдер с другим
     * @param other Другой коллайдер
     * @returns true, если есть столкновение, иначе false
     */
    isCollidingWith(other) {
        return (0, Utils_1.checkCollision)(this, other);
    }
}
exports.CircleCollider = CircleCollider;


/***/ },

/***/ "./Engine/_collider/Utils.ts"
/*!***********************************!*\
  !*** ./Engine/_collider/Utils.ts ***!
  \***********************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boxCircle = exports.circleCircle = exports.checkCollision = void 0;
const math = __importStar(__webpack_require__(/*! Engine/mathUtils */ "./Engine/mathUtils.ts"));
const types_1 = __webpack_require__(/*! ./types */ "./Engine/_collider/types.ts");
const defaultCollisionResult = {
    collided: false,
    normal: null,
    penetration: null,
};
/**
 * @description Проверяет столкновение между двумя коллайдерами
 * @param a Первый коллайдер
 * @param b Второй коллайдер
 * @returns Результат столкновения
 * @throws Ошибка, если не найдена функция для обработки столкновения
 */
const checkCollision = (a, b) => {
    switch (a.type + b.type) {
        case types_1.ColliderType.Box + types_1.ColliderType.Box:
            return boxBox(a, b);
        case types_1.ColliderType.Circle + types_1.ColliderType.Circle:
            return (0, exports.circleCircle)(a, b);
        case types_1.ColliderType.Box + types_1.ColliderType.Circle:
            return (0, exports.boxCircle)(a, b);
        case types_1.ColliderType.Circle + types_1.ColliderType.Box:
            return (0, exports.boxCircle)(b, a);
    }
    throw new Error(`Engine/collider:Utils.checkCollision, не найдена функция для обработки колизий ${a.type} x ${b.type}`);
};
exports.checkCollision = checkCollision;
const getVertices = (box) => {
    const transform = box.gameObject.transform;
    const position = transform.position.point;
    const pivot = transform.pivot;
    const rotation = transform.position.rotation;
    const width = transform.width;
    const height = transform.height;
    const localVertices = [
        { x: 0 - pivot.x, y: 0 - pivot.y },
        { x: width - pivot.x, y: 0 - pivot.y },
        { x: width - pivot.x, y: height - pivot.y },
        { x: 0 - pivot.x, y: height - pivot.y },
    ];
    const pivotWorld = { x: position.x + pivot.x, y: position.y + pivot.y };
    return localVertices.map(vertex => {
        const rotated = math.rotate(vertex, { x: 0, y: 0 }, // Вращаем вокруг локального (0,0), так как уже учли pivot
        rotation);
        return {
            x: rotated.x + pivotWorld.x, // Смещаем в позицию мирового pivot
            y: rotated.y + pivotWorld.y
        };
    });
};
const project = (vertices, axis) => {
    let min = math.dot(vertices[0], axis);
    let max = min;
    for (let i = 1; i < vertices.length; i++) {
        const p = math.dot(vertices[i], axis);
        if (p < min) {
            min = p;
        }
        else if (p > max) {
            max = p;
        }
    }
    return { min, max };
};
const boxBox = (a, b) => {
    const verticesA = getVertices(a);
    const verticesB = getVertices(b);
    const getAxes = (vertices) => {
        const axes = [];
        for (let i = 0; i < vertices.length; i++) {
            const p1 = vertices[i];
            const p2 = vertices[i + 1 === vertices.length ? 0 : i + 1];
            const edge = math.subtract(p1, p2);
            const normal = { x: -edge.y, y: edge.x };
            axes.push(normal);
        }
        return axes;
    };
    const axes = [...getAxes(verticesA), ...getAxes(verticesB)];
    let mtv = { x: 0, y: 0 };
    let minOverlap = Infinity;
    for (const axis of axes) {
        const projA = project(verticesA, axis);
        const projB = project(verticesB, axis);
        const overlap = Math.min(projA.max, projB.max) - Math.max(projA.min, projB.min);
        if (overlap < 0) {
            return defaultCollisionResult;
        }
        if (overlap < minOverlap) {
            minOverlap = overlap;
            mtv = axis;
        }
    }
    const magnitude = Math.sqrt(mtv.x * mtv.x + mtv.y * mtv.y);
    const normal = { x: mtv.x / magnitude, y: mtv.y / magnitude };
    const centerA = { x: a.gameObject.transform.position.point.x, y: a.gameObject.transform.position.point.y };
    const centerB = { x: b.gameObject.transform.position.point.x, y: b.gameObject.transform.position.point.y };
    const direction = math.subtract(centerB, centerA);
    if (math.dot(direction, normal) < 0) {
        normal.x = -normal.x;
        normal.y = -normal.y;
    }
    return {
        collided: true,
        normal: normal,
        penetration: { x: normal.x * minOverlap, y: normal.y * minOverlap },
    };
};
const circleCircle = (a, b) => {
    const centerA = a.getCenter();
    const centerB = b.getCenter();
    const dx = centerA.x - centerB.x;
    const dy = centerA.y - centerB.y;
    const distanceSq = dx * dx + dy * dy;
    const combinedRadius = a.radius + b.radius;
    if (distanceSq < combinedRadius * combinedRadius) {
        const distance = Math.sqrt(distanceSq);
        const normal = distance === 0 ? { x: 1, y: 0 } : { x: dx / distance, y: dy / distance };
        const penetrationDepth = combinedRadius - distance;
        return {
            collided: true,
            normal: normal,
            penetration: { x: normal.x * penetrationDepth, y: normal.y * penetrationDepth },
        };
    }
    return defaultCollisionResult;
};
exports.circleCircle = circleCircle;
const boxCircle = (box, circle) => {
    const { gameObject, radius } = circle;
    const { position: circlePosition } = gameObject.transform;
    const { point: circleCenter, previousPoint: circlePrevCenter } = circlePosition;
    // Если нет предыдущей позиции, используем старый метод
    if (!circlePrevCenter) {
        return discreteBoxCircle(box, circle);
    }
    const transform = box.gameObject.transform;
    const { position: boxPosition, pivot, width, height } = transform;
    const { point: boxCenter, rotation } = boxPosition;
    // Вектор движения круга
    const circleVelocity = math.subtract(circleCenter, circlePrevCenter);
    // Трансформируем все в локальную систему координат прямоугольника
    const boxPivotWorld = { x: boxCenter.x + pivot.x, y: boxCenter.y + pivot.y };
    const circleStartLocal = math.rotate(math.subtract(circlePrevCenter, boxPivotWorld), { x: 0, y: 0 }, -rotation);
    const circleEndLocal = math.rotate(math.subtract(circleCenter, boxPivotWorld), { x: 0, y: 0 }, -rotation);
    const circleVelLocal = math.subtract(circleEndLocal, circleStartLocal);
    // Границы прямоугольника в локальных координатах
    const boxMin = { x: -pivot.x, y: -pivot.y };
    const boxMax = { x: width - pivot.x, y: height - pivot.y };
    // Расширяем границы прямоугольника на радиус круга (Minkowski sum)
    const expandedBoxMin = { x: boxMin.x - radius, y: boxMin.y - radius };
    const expandedBoxMax = { x: boxMax.x + radius, y: boxMax.y + radius };
    // Алгоритм Ray-AABB intersection
    let tNear = 0;
    let tFar = 1;
    let collisionNormalLocal = { x: 0, y: 0 };
    for (const axis of ['x', 'y']) {
        if (Math.abs(circleVelLocal[axis]) < 1e-8) { // Движения по оси почти нет
            if (circleStartLocal[axis] < expandedBoxMin[axis] || circleStartLocal[axis] > expandedBoxMax[axis]) {
                return defaultCollisionResult; // Столкнуться не может
            }
            continue;
        }
        const t1 = (expandedBoxMin[axis] - circleStartLocal[axis]) / circleVelLocal[axis];
        const t2 = (expandedBoxMax[axis] - circleStartLocal[axis]) / circleVelLocal[axis];
        const tMin = Math.min(t1, t2);
        const tMax = Math.max(t1, t2);
        if (tMin > tNear) {
            tNear = tMin;
            collisionNormalLocal = { x: 0, y: 0 };
            if (axis === 'x') {
                collisionNormalLocal.x = -Math.sign(circleVelLocal.x);
            }
            else {
                collisionNormalLocal.y = -Math.sign(circleVelLocal.y);
            }
        }
        tFar = Math.min(tFar, tMax);
        if (tNear > tFar) {
            return defaultCollisionResult; // Нет пересечения
        }
    }
    if (tNear > 1) {
        return defaultCollisionResult; // Столкновение произойдет в будущем, но не в этом кадре
    }
    // Если tNear отрицательный, значит, объект уже находится внутри.
    // Считаем, что столкновение произошло в самом начале кадра.
    if (tNear < 0) {
        tNear = 0;
    }
    // Проверяем, не находится ли точка столкновения внутри угловой области
    const contactPoint = math.add(circleStartLocal, math.multiply(circleVelLocal, tNear));
    let isCornerCollision = true;
    for (const axis of ['x', 'y']) {
        if (contactPoint[axis] >= boxMin[axis] && contactPoint[axis] <= boxMax[axis]) {
            isCornerCollision = false;
            break;
        }
    }
    if (isCornerCollision) {
        // Находим ближайший угол
        const closestCorner = {
            x: (contactPoint.x < boxMin.x) ? boxMin.x : boxMax.x,
            y: (contactPoint.y < boxMin.y) ? boxMin.y : boxMax.y,
        };
        // Пересчитываем столкновение как сфера-линия
        const cornerToStart = math.subtract(circleStartLocal, closestCorner);
        const a = math.dot(circleVelLocal, circleVelLocal);
        const b = 2 * math.dot(cornerToStart, circleVelLocal);
        const c = math.dot(cornerToStart, cornerToStart) - radius * radius;
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            return defaultCollisionResult;
        }
        const t = (-b - Math.sqrt(discriminant)) / (2 * a);
        if (t < 0 || t > 1) {
            return defaultCollisionResult;
        }
        const actualContactPoint = math.add(circleStartLocal, math.multiply(circleVelLocal, t));
        collisionNormalLocal = math.normalize(math.subtract(actualContactPoint, closestCorner));
        tNear = t;
    }
    if (tNear >= 0 && tNear <= 1) {
        const contactTime = Math.max(0, tNear);
        const penetrationDepth = (1 - contactTime) * Math.sqrt(math.dot(circleVelocity, circleVelocity));
        const normalWorld = math.normalize(math.rotate(collisionNormalLocal, { x: 0, y: 0 }, rotation));
        return {
            collided: true,
            normal: normalWorld,
            penetration: { x: normalWorld.x * penetrationDepth, y: normalWorld.y * penetrationDepth },
        };
    }
    return defaultCollisionResult;
};
exports.boxCircle = boxCircle;
/**
 * @description Старая версия проверки столкновения, используется как fallback
 */
const discreteBoxCircle = (box, circle) => {
    const circleCenter = circle.getCenter();
    const radius = circle.radius;
    const transform = box.gameObject.transform;
    const { position, pivot, width, height } = transform;
    const { point: boxPosition, rotation } = position;
    const boxPivotWorld = { x: boxPosition.x + pivot.x, y: boxPosition.y + pivot.y };
    const circleCenterTranslated = math.subtract(circleCenter, boxPivotWorld);
    const circleCenterLocal = math.rotate(circleCenterTranslated, { x: 0, y: 0 }, -rotation);
    const closestPointLocal = {
        x: Math.max(-pivot.x, Math.min(circleCenterLocal.x, width - pivot.x)),
        y: Math.max(-pivot.y, Math.min(circleCenterLocal.y, height - pivot.y)),
    };
    const vectorToClosest = math.subtract(circleCenterLocal, closestPointLocal);
    const distanceSq = math.dot(vectorToClosest, vectorToClosest);
    if (distanceSq > radius * radius) {
        return defaultCollisionResult;
    }
    const distance = Math.sqrt(distanceSq);
    let normalLocal;
    let penetrationDepth;
    if (distance > 0) {
        penetrationDepth = radius - distance;
        normalLocal = { x: vectorToClosest.x / distance, y: vectorToClosest.y / distance };
    }
    else {
        const dx1 = circleCenterLocal.x - (-pivot.x);
        const dx2 = (width - pivot.x) - circleCenterLocal.x;
        const dy1 = circleCenterLocal.y - (-pivot.y);
        const dy2 = (height - pivot.y) - circleCenterLocal.y;
        const minDx = Math.min(dx1, dx2);
        const minDy = Math.min(dy1, dy2);
        if (minDx < minDy) {
            penetrationDepth = minDx + radius;
            normalLocal = dx1 < dx2 ? { x: -1, y: 0 } : { x: 1, y: 0 };
        }
        else {
            penetrationDepth = minDy + radius;
            normalLocal = dy1 < dy2 ? { x: 0, y: -1 } : { x: 0, y: 1 };
        }
    }
    const normalWorld = math.rotate(normalLocal, { x: 0, y: 0 }, rotation);
    return {
        collided: true,
        normal: normalWorld,
        penetration: { x: normalWorld.x * penetrationDepth, y: normalWorld.y * penetrationDepth },
    };
};


/***/ },

/***/ "./Engine/_collider/interfaces.ts"
/*!****************************************!*\
  !*** ./Engine/_collider/interfaces.ts ***!
  \****************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ },

/***/ "./Engine/_collider/types.ts"
/*!***********************************!*\
  !*** ./Engine/_collider/types.ts ***!
  \***********************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColliderType = void 0;
/**
 * @description Типы коллайдеров
 */
var ColliderType;
(function (ColliderType) {
    /**
     * @description Прямоугольный коллайдер
     */
    ColliderType["Box"] = "box";
    /**
     * @description Круглый коллайдер
     */
    ColliderType["Circle"] = "circle";
})(ColliderType || (exports.ColliderType = ColliderType = {}));


/***/ },

/***/ "./Engine/collider.ts"
/*!****************************!*\
  !*** ./Engine/collider.ts ***!
  \****************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./_collider/Abstract */ "./Engine/_collider/Abstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./_collider/Box */ "./Engine/_collider/Box.ts"), exports);
__exportStar(__webpack_require__(/*! ./_collider/Circle */ "./Engine/_collider/Circle.ts"), exports);
__exportStar(__webpack_require__(/*! ./_collider/Utils */ "./Engine/_collider/Utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./_collider/interfaces */ "./Engine/_collider/interfaces.ts"), exports);
__exportStar(__webpack_require__(/*! ./_collider/types */ "./Engine/_collider/types.ts"), exports);


/***/ },

/***/ "./Engine/mathUtils.ts"
/*!*****************************!*\
  !*** ./Engine/mathUtils.ts ***!
  \*****************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalize = exports.multiply = exports.add = exports.reflect = exports.rotate = exports.dot = exports.subtract = void 0;
const subtract = (a, b) => ({
    x: a.x - b.x,
    y: a.y - b.y
});
exports.subtract = subtract;
const dot = (a, b) => (a.x * b.x + a.y * b.y);
exports.dot = dot;
const rotate = (point, center, angle) => {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    return {
        x: dx * cos - dy * sin,
        y: dx * sin + dy * cos
    };
};
exports.rotate = rotate;
const reflect = (vector, normal) => {
    const dotProduct = (0, exports.dot)(vector, normal);
    return {
        x: vector.x - 2 * dotProduct * normal.x,
        y: vector.y - 2 * dotProduct * normal.y
    };
};
exports.reflect = reflect;
const add = (a, b) => ({
    x: a.x + b.x,
    y: a.y + b.y
});
exports.add = add;
const multiply = (vector, scalar) => ({
    x: vector.x * scalar,
    y: vector.y * scalar
});
exports.multiply = multiply;
const normalize = (vector) => {
    const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    if (length === 0)
        return { x: 0, y: 0 };
    return {
        x: vector.x / length,
        y: vector.y / length
    };
};
exports.normalize = normalize;


/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./ping-pong.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Core_1 = __webpack_require__(/*! Engine/Core */ "./Engine/Core.ts");
const GameObject_1 = __webpack_require__(/*! Engine/GameObject */ "./Engine/GameObject.ts");
const collider_1 = __webpack_require__(/*! Engine/collider */ "./Engine/collider.ts");
const mathUtils_1 = __webpack_require__(/*! Engine/mathUtils */ "./Engine/mathUtils.ts");
__webpack_require__(/*! ./style.css */ "./style.css");
/**
 * @class PingPongGame
 * Основной класс игры "Пинг-понг".
 */
class PingPongGame {
    /**
     * @constructor
     * @param {string} canvasId идентификатор элемента canvas
     */
    constructor(canvasId) {
        this.keys = {
            ArrowUp: false,
            ArrowDown: false,
        };
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.engine = new Core_1.EngineCore({
            canvasId,
            onBeforeUpdate: this._onBeforeUpdate.bind(this),
            onBeforeDraw: this._onBeforeDraw.bind(this),
            debug: false,
        });
        this.ctx = this.canvas.getContext('2d');
        this.ball = new Ball(this.canvas.width / 2, this.canvas.height / 2);
        this.player = new Paddle({
            x: 10,
            y: this.canvas.height / 2 - 50,
        });
        this.computer = new Paddle({
            x: this.canvas.width - 20,
            y: this.canvas.height / 2 - 50,
            ai: true,
            ball: this.ball,
        });
        this.player.enable();
        this.player.setVisibility(true);
        this.computer.enable();
        this.computer.setVisibility(true);
        this.ball.enable();
        this.ball.setVisibility(true);
        this.engine.addGameObjects([this.player, this.computer, this.ball]);
        this.setupEventListeners();
    }
    /**
     * @protected
     * @description Отрисовывает фон и счет
     */
    _onBeforeDraw() {
        // Рисуем фон
        this.drawRect(0, 0, this.canvas.width, this.canvas.height, 'black');
        // Рисуем счет
        this.drawText(this.player.score.toString(), this.canvas.width / 4, this.canvas.height / 5, 'white');
        this.drawText(this.computer.score.toString(), (3 * this.canvas.width) / 4, this.canvas.height / 5, 'white');
    }
    /**
     * @protected
     * @description Обновляет движение игрока и проверяет, забит ли гол.
     */
    _onBeforeUpdate() {
        const { player, ball, keys, canvas } = this;
        if (keys.ArrowUp) {
            player.transform.position.point.y -= 8;
        }
        if (keys.ArrowDown) {
            player.transform.position.point.y += 8;
        }
        if (ball.getCenter().y + ball.radius > canvas.height || ball.getCenter().y - ball.radius < 0) {
            ball.velocity.y = -ball.velocity.y;
        }
        // Проверяем, был ли забит гол
        if (ball.getCenter().x + ball.radius < 0) {
            this.computer.score++;
            this.resetBall();
        }
        else if (ball.getCenter().x - ball.radius > canvas.width) {
            player.score++;
            this.resetBall();
        }
    }
    /**
     * @description Запускает игровой движок
     */
    start() {
        this.engine.start();
    }
    /**
     * @private
     * @description Настраивает обработчики событий мыши и клавиатуры
     */
    setupEventListeners() {
        this.canvas.addEventListener('mousemove', (evt) => {
            const rect = this.canvas.getBoundingClientRect();
            this.player.transform.position.point.y = evt.clientY - rect.top - this.player.transform.height / 2;
        });
        window.addEventListener('keydown', (e) => {
            if (this.keys.hasOwnProperty(e.key)) {
                this.keys[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e) => {
            if (this.keys.hasOwnProperty(e.key)) {
                this.keys[e.key] = false;
            }
        });
    }
    /**
     * @private
     * @description Возвращает мяч в центр поля
     */
    resetBall() {
        const { ball } = this;
        ball.transform.position.point.x = this.canvas.width / 2 - ball.radius;
        ball.transform.position.point.y = this.canvas.height / 2 - ball.radius;
        ball.speed = 5;
        ball.velocity.x = -ball.velocity.x;
    }
    /**
     * @private
     * @description Рисует прямоугольник на canvas
     * @param {number} x - Координата X
     * @param {number} y - Координата Y
     * @param {number} w - Ширина
     * @param {number} h - Высота
     * @param {string} color - Цвет
     */
    drawRect(x, y, w, h, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }
    /**
     * @private
     * @description Рисует текст на canvas
     * @param {string} text - Текст для отображения
     * @param {number} x - Координата X
     * @param {number} y - Координата Y
     * @param {string} color - Цвет
     */
    drawText(text, x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.font = '75px fantasy';
        this.ctx.fillText(text, x, y);
    }
}
/**
 * @class Paddle
 * @extends GameObject
 * @description Представляет ракетку игрока.
 */
class Paddle extends GameObject_1.GameObject {
    /**
     * @constructor
     * @param {IPaddleOptions} options - Опции для создания ракетки.
     */
    constructor({ x, y, ball, ai }) {
        super({
            transform: {
                position: {
                    point: { x, y },
                    rotation: 0,
                },
                pivot: { x: 5, y: 50 },
                width: 10,
                height: 100,
            },
        });
        this.score = 0;
        this.collider = new collider_1.BoxCollider(this);
        this._ball = ball !== null && ball !== void 0 ? ball : null;
        this._ai = ai !== null && ai !== void 0 ? ai : false;
        this.color = 'white';
    }
    /**
     * @public
     * @description Отрисовывает ракетку
     * @param {CanvasRenderingContext2D} ctx - Контекст рендеринга
     */
    draw(ctx) {
        const { position, pivot, width, height } = this.transform;
        const { point, rotation } = position;
        ctx.save();
        ctx.translate(point.x + pivot.x, point.y + pivot.y);
        ctx.rotate(rotation);
        ctx.fillStyle = this.color;
        ctx.fillRect(-pivot.x, -pivot.y, width, height);
        // Рисуем коллайдер для отладки
        if (this.debug && this.collider) {
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 1;
            const box = this.collider;
            ctx.strokeRect(-pivot.x, -pivot.y, box.width, box.height);
        }
        ctx.restore();
    }
    /**
     * @public
     * @description Обновляет позицию ракетки (для ИИ).
     * @param {number} _time - Дельта времени (не используется).
     */
    update(_time) {
        if (this._ai && this._ball) {
            this.transform.position.point.y += (this._ball.getCenter().y - (this.transform.position.point.y + this.transform.height / 2)) * 0.1;
        }
    }
}
/**
 * @class Ball
 * @extends GameObject
 * @description Представляет игровой мяч
 */
class Ball extends GameObject_1.GameObject {
    /**
     * @constructor
     * @param {number} x - Начальная координата X
     * @param {number} y - Начальная координата Y
     */
    constructor(x, y) {
        const radius = 10;
        const transform = {
            position: {
                point: { x: x - radius, y: y - radius },
                rotation: 0,
            },
            pivot: { x: radius, y: radius },
            width: radius * 2,
            height: radius * 2,
        };
        super({ transform });
        this.speed = 5;
        this.color = 'white';
        this.collider = new collider_1.CircleCollider(this, radius);
        this.radius = radius;
        this.velocity = { x: 5, y: 5 };
    }
    /**
     * @public
     * @description Обрабатывает столкновение с другими игровыми объектами
     * @param {GameObject} other - Другой игровой объект, участвующий в столкновении
     */
    onCollision(other, result) {
        if (other instanceof Paddle && result.normal) {
            // 1. Разрешение проникновения
            if (result.penetration) {
                this.transform.position.point.x += result.penetration.x;
                this.transform.position.point.y += result.penetration.y;
            }
            // 2. Отражение скорости
            const newVelocity = (0, mathUtils_1.reflect)(this.velocity, result.normal);
            this.velocity = newVelocity;
            // 3. Увеличение скорости для динамики
            this.speed += 0.1;
            const magnitude = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
            this.velocity.x = (this.velocity.x / magnitude) * this.speed;
            this.velocity.y = (this.velocity.y / magnitude) * this.speed;
        }
    }
    /**
     * @public
     * @description Возвращает координаты центра мяча
     * @returns {Vector2} Координаты центра
     */
    getCenter() {
        return {
            x: this.transform.position.point.x + this.radius,
            y: this.transform.position.point.y + this.radius,
        };
    }
    /**
     * @public
     * @description Отрисовывает мяч на canvas
     * @param {CanvasRenderingContext2D} ctx - Контекст рендеринга
     */
    draw(ctx) {
        const centerX = this.transform.position.point.x + this.radius;
        const centerY = this.transform.position.point.y + this.radius;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        // Рисуем коллайдер для отладки
        if (this.debug && this.collider) {
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2, false);
            ctx.stroke();
        }
        if (this.debug) {
            console.log(`ball: ${JSON.stringify(this.transform)}`);
        }
    }
}
/**
 * @description IIFE для запуска игры
 */
(() => {
    const game = new PingPongGame('gameCanvas');
    game.start();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTlELE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNHLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNHLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRWxELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE9BQU87UUFDTCxRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxNQUFNO1FBQ2QsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FB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UyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7Q0FZRjtBQUVEOztHQUVHO0FBQ0gsQ0FBQyxHQUFTLEVBQUU7SUFDVixNQUFNLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDZixDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL3N0eWxlLmNzcz9mNjk2Iiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL0VuZ2luZS9Db3JlLnRzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9FbmdpbmUvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vRW5naW5lL19jb2xsaWRlci9BYnN0cmFjdC50cyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vRW5naW5lL19jb2xsaWRlci9Cb3gudHMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL0VuZ2luZS9fY29sbGlkZXIvQ2lyY2xlLnRzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9FbmdpbmUvX2NvbGxpZGVyL1V0aWxzLnRzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9FbmdpbmUvX2NvbGxpZGVyL2ludGVyZmFjZXMudHMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL0VuZ2luZS9fY29sbGlkZXIvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL0VuZ2luZS9jb2xsaWRlci50cyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vRW5naW5lL21hdGhVdGlscy50cyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vcGluZy1wb25nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbiNtZW51IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbWVudSBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuI21lbnUgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxuICAgIGNvbG9yIDAuM3M7XG59XG5cbiNtZW51IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmNhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5leGl0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246XG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxuICAgIGNvbG9yIDAuM3M7XG59XG5cbi5leGl0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjs7Y0FFWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEI7O2NBRVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI21lbnUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbWVudSBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jbWVudSBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxcbiAgICBjb2xvciAwLjNzO1xcbn1cXG5cXG4jbWVudSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG59XFxuXFxuLmV4aXQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsXFxuICAgIGNvbG9yIDAuM3M7XFxufVxcblxcbi5leGl0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgSUNvbGxpc2lvblJlc3VsdCB9IGZyb20gJy4vX2NvbGxpZGVyL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vR2FtZU9iamVjdCc7XG5pbXBvcnQgeyBJRW5naW5lQ29yZU9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEBjbGFzcyBFbmdpbmVDb3JlXG4gKiBAZGVzY3JpcHRpb24g0K/QtNGA0L4g0LTQstC40LbQutCwXG4gKi9cbmV4cG9ydCBjbGFzcyBFbmdpbmVDb3JlIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH1cbiAgICogQGRlc2NyaXB0aW9uIEhUTUwt0Y3Qu9C10LzQtdC90YIgY2FudmFzLlxuICAgKi9cbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cbiAgICogQGRlc2NyaXB0aW9uINCa0L7QvdGC0LXQutGB0YJcbiAgICovXG4gIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7R2FtZU9iamVjdFtdfVxuICAgKiBAZGVzY3JpcHRpb24g0KHQv9C40YHQvtC6INC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtC+0LIg0L3QsCDRgdGG0LXQvdC1XG4gICAqL1xuICBwcml2YXRlIF9nYW1lT2JqZWN0czogR2FtZU9iamVjdFtdID0gW107XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlc2NyaXB0aW9uINCS0LrQu9GO0YfQsNC10YIg0L7RgtC70LDQtNC60YMg0LTQu9GPINC00LLQuNC20LrQsFxuICAgKi9cbiAgcHJpdmF0ZSBfZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZXNjcmlwdGlvbiDQmNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDRgtC10LrRg9GJ0LXQs9C+INC60LDQtNGA0LAg0LDQvdC40LzQsNGG0LjQuFxuICAgKi9cbiAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZUlkOiBudW1iZXIgPSAwO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeygoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZH1cbiAgICogQGRlc2NyaXB0aW9uINCk0YPQvdC60YbQuNGPINC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAsINCy0YvQt9GL0LLQsNC10YLRgdGPINC/0LXRgNC10LQg0L7QsdC90L7QstC70LXQvdC40LXQvFxuICAgKi9cbiAgcHJpdmF0ZSBfb25CZWZvcmVVcGRhdGU/OiAoKSA9PiB2b2lkO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeygoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZH1cbiAgICogQGRlc2NyaXB0aW9uINCk0YPQvdC60YbQuNGPINC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAsINCy0YvQt9GL0LLQsNC10YLRgdGPINC/0LXRgNC10LQg0L7RgtGA0LjRgdC+0LLQutC+0LlcbiAgICovXG4gIHByaXZhdGUgX29uQmVmb3JlRHJhdz86ICgpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0lFbmdpbmVDb3JlT3B0aW9uc30gb3B0aW9ucyDQn9Cw0YDQsNC80LXRgtGA0Ysg0LTQu9GPINGP0LTRgNCwINC00LLQuNC20LrQsFxuICAgKi9cbiAgY29uc3RydWN0b3IoeyBjYW52YXNJZCwgb25CZWZvcmVVcGRhdGUsIG9uQmVmb3JlRHJhdywgZGVidWcgfTogSUVuZ2luZUNvcmVPcHRpb25zKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB0aGlzLl9vbkJlZm9yZVVwZGF0ZSA9IG9uQmVmb3JlVXBkYXRlO1xuICAgIHRoaXMuX29uQmVmb3JlRHJhdyA9IG9uQmVmb3JlRHJhdztcbiAgICB0aGlzLl9kZWJ1ZyA9IGRlYnVnID8/IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYWRkR2FtZU9iamVjdHNcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0W119IG9iamVjdHMg0J7QsdGK0LXQutGC0Ysg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPXG4gICAqIEBkZXNjcmlwdGlvbiDQlNC+0LHQsNCy0LvRj9C10YIg0L7QsdGK0LXQutGC0Ysg0L3QsCDRgdGG0LXQvdGDXG4gICAqL1xuICBhZGRHYW1lT2JqZWN0cyhvYmplY3RzOiBHYW1lT2JqZWN0W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGVidWcpIHtcbiAgICAgIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiAob2JqZWN0LmRlYnVnID0gdHJ1ZSkpO1xuICAgIH1cbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9nYW1lT2JqZWN0cywgLi4ub2JqZWN0c107XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCByZW1vdmVHYW1lT2JqZWN0XG4gICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gb2JqINCe0LHRitC10LrRglxuICAgKiBAZGVzY3JpcHRpb24g0KPQtNCw0LvRj9C10YIg0L7QsdC10LrRgiDRgdC+INGB0YbQtdC90YtcbiAgICovXG4gIHJlbW92ZUdhbWVPYmplY3Qob2JqOiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5fZ2FtZU9iamVjdHMgPSB0aGlzLl9nYW1lT2JqZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9iaik7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzdGFydFxuICAgKiBAZGVzY3JpcHRpb24g0JfQsNC/0YPRgdC60LDQtdGCINC40LPRgNC+0LLQvtC5INGG0LjQutC7XG4gICAqL1xuICBzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLmdhbWVMb29wKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzdG9wXG4gICAqIEBkZXNjcmlwdGlvbiDQntGB0YLQsNC90LDQstC70LjQstCw0LXRgiDQuNCz0YDQvtCy0L7QuSDRhtC40LrQu1xuICAgKi9cbiAgc3RvcCgpOiB2b2lkIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2hlY2tDb2xsaXNpb25zXG4gICAqIEBkZXNjcmlwdGlvbiDQn9GA0L7QstC10YDRj9C10YIg0L3QsNC70LjRh9C40LUg0YHRgtC+0LvQutC90L7QstC10L3QuNC5INC80LXQttC00YMg0LLRgdC10LzQuCDQuNCz0YDQvtCy0YvQvNC4INC+0LHRitC10LrRgtCw0LzQuFxuICAgKi9cbiAgY2hlY2tDb2xsaXNpb25zKCk6IHZvaWQge1xuICAgIGNvbnN0IG9iamVjdHMgPSB0aGlzLl9nYW1lT2JqZWN0cztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYSA9IG9iamVjdHNbaV07XG4gICAgICBpZiAoIWEuY29sbGlkZXIgfHwgIWEuaXNFbmFibGVkKCkpIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBvYmplY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGIgPSBvYmplY3RzW2pdO1xuXG4gICAgICAgIGlmICghYi5jb2xsaWRlciB8fCAhYi5pc0VuYWJsZWQoKSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgY29sbGlzaW9uUmVzdWx0ID0gYS5jb2xsaWRlci5pc0NvbGxpZGluZ1dpdGgoYi5jb2xsaWRlcik7XG4gICAgICAgIGlmIChjb2xsaXNpb25SZXN1bHQuY29sbGlkZWQpIHtcbiAgICAgICAgICBhLm9uQ29sbGlzaW9uKGIsIGNvbGxpc2lvblJlc3VsdCk7XG4gICAgICAgICAgLy8g0JjQvdCy0LXRgNGC0LjRgNGD0LXQvCDQvdC+0YDQvNCw0LvRjCDQuCDQstC10LrRgtC+0YAg0L/RgNC+0L3QuNC60L3QvtCy0LXQvdC40Y8g0LTQu9GPINCy0YLQvtGA0L7Qs9C+INC+0LHRitC10LrRgtCwXG4gICAgICAgICAgY29uc3QgaW52ZXJ0ZWRSZXN1bHQ6IElDb2xsaXNpb25SZXN1bHQgPSB7XG4gICAgICAgICAgICAuLi5jb2xsaXNpb25SZXN1bHQsXG4gICAgICAgICAgICBub3JtYWw6IGNvbGxpc2lvblJlc3VsdC5ub3JtYWwgPyB7IHg6IC1jb2xsaXNpb25SZXN1bHQubm9ybWFsLngsIHk6IC1jb2xsaXNpb25SZXN1bHQubm9ybWFsLnkgfSA6IG51bGwsXG4gICAgICAgICAgICBwZW5ldHJhdGlvbjogY29sbGlzaW9uUmVzdWx0LnBlbmV0cmF0aW9uID8geyB4OiAtY29sbGlzaW9uUmVzdWx0LnBlbmV0cmF0aW9uLngsIHk6IC1jb2xsaXNpb25SZXN1bHQucGVuZXRyYXRpb24ueSB9IDogbnVsbCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGIub25Db2xsaXNpb24oYSwgaW52ZXJ0ZWRSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZXRob2QgZ2FtZUxvb3BcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdINCi0LXQutGD0YnQtdC1INCy0YDQtdC80Y9cbiAgICogQGRlc2NyaXB0aW9uINCe0YHQvdC+0LLQvdC+0Lkg0LjQs9GA0L7QstC+0Lkg0YbQuNC60LtcbiAgICovXG4gIHByaXZhdGUgZ2FtZUxvb3AodGltZTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2dhbWVPYmplY3RzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgaXRlbS50cmFuc2Zvcm0ucG9zaXRpb24ucHJldmlvdXNQb2ludCA9IHsgLi4uaXRlbS50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQgfTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgdGhpcy5fb25CZWZvcmVVcGRhdGU/LigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9nYW1lT2JqZWN0cykge1xuICAgICAgaWYgKGl0ZW0uaXNFbmFibGVkKCkpIHtcbiAgICAgICAgaXRlbS51cGRhdGUodGltZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLl9vbkJlZm9yZURyYXc/LigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9nYW1lT2JqZWN0cykge1xuICAgICAgaWYgKGl0ZW0uaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgaXRlbS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHRoaXMuX2dhbWVPYmplY3RzLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uaXNEZXN0cm95ZWQoKSk7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0KSA9PiB0aGlzLmdhbWVMb29wKHQpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUFic3RyYWN0Q29sbGlkZXIsIElDb2xsaXNpb25SZXN1bHQgfSBmcm9tICcuL19jb2xsaWRlci9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElHYW1lT2JqZWN0LCBJR2FtZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4vVmVjdG9yMic7XG5cbi8qKlxuICogQGNsYXNzIEdhbWVPYmplY3RcbiAqIEBkZXNjcmlwdGlvbiDQkdCw0LfQvtCy0YvQuSDQutC70LDRgdGBINC00LvRjyDQstGB0LXRhSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQvtCyXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IGltcGxlbWVudHMgSUdhbWVPYmplY3Qge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZXNjcmlwdGlvbiDQo9C90LjRh9GC0L7QttC10L0g0LvQuCDQvtCx0YrQtdC60YJcbiAgICovXG4gIHByaXZhdGUgX2Rlc3Ryb3llZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZXNjcmlwdGlvbiDQktC40LTQuNC80L7RgdGC0Ywg0L3QsCDRgdGG0LXQvdCwXG4gICAqL1xuICBwcml2YXRlIF92aXNpYmlsaXR5OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlc2NyaXB0aW9uINCQ0LrRgtC40LLQsNGG0LjRjywg0L3QtdCw0LrRgtC40LLQuNGA0L7QstCw0L3QvdGL0LUg0L7QsdC10LrRgtGLINC90LUg0YPRh9Cw0YHRgtCy0YPRjtGCINCyINGA0LDRgdGH0LXRgtCw0YVcbiAgICovXG4gIHByaXZhdGUgX2VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVzY3JpcHRpb24g0JLQutC70Y7Rh9Cw0LXRgiDQvtGC0LvQsNC00LrRgyDQtNC70Y8g0L7QsdGK0LXQutGC0LBcbiAgICovXG4gIHB1YmxpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7KElBYnN0cmFjdENvbGxpZGVyIHwgbnVsbCl9XG4gICAqIEBkZXNjcmlwdGlvbiDQmtC+0LvQu9Cw0LnQtNC10YAg0L7QsdGK0LXQutGC0LBcbiAgICovXG4gIGNvbGxpZGVyOiBJQWJzdHJhY3RDb2xsaWRlciB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICogQHR5cGUge1RyYW5zZm9ybX1cbiAgICogQGRlc2NyaXB0aW9uINCf0L7Qt9C40YbQuNGPINC4INGA0LDQt9C80LXRgNGLINC+0LHRitC10LrRgtCwXG4gICAqL1xuICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcbiAgLyoqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZXNjcmlwdGlvbiDQodC60L7RgNC+0YHRgtGMINCy0YDQsNGJ0LXQvdC40Y9cbiAgICovXG4gIHJvdGF0aW9uVmVsb2NpdHk6IG51bWJlciA9IDA7XG4gIC8qKlxuICAgKiBAdHlwZSB7VmVjdG9yMn1cbiAgICogQGRlc2NyaXB0aW9uINCh0LrQvtGA0L7RgdGC0Ywg0L7QsdGK0LXQutGC0LBcbiAgICovXG4gIHZlbG9jaXR5OiBWZWN0b3IyID0geyB4OiAwLCB5OiAwIH07XG4gIC8qKlxuICAgKiBAdHlwZSB7VmVjdG9yMn1cbiAgICogQGRlc2NyaXB0aW9uINCj0YHQutC+0YDQtdC90LjQtSDQvtCx0YrQtdC60YLQsFxuICAgKi9cbiAgYWNjZWxlcmF0aW9uOiBWZWN0b3IyID0geyB4OiAwLCB5OiAwIH07XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0lHYW1lT2JqZWN0T3B0aW9uc30g0JrQvtC90YTQuNCz0YPRgNCw0YbQuNGPXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHRyYW5zZm9ybSwgZGVidWcgfTogSUdhbWVPYmplY3RPcHRpb25zKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnID8/IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZW5hYmxlXG4gICAqIEBkZXNjcmlwdGlvbiDQktC60LvRjtGH0LDQtdGCINC+0LHRitC10LrRglxuICAgKi9cbiAgZW5hYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGlzYWJsZVxuICAgKiBAZGVzY3JpcHRpb24g0JLRi9C60LvRjtGH0LDQtdGCINC+0LHRitC10LrRglxuICAgKi9cbiAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkZXN0cm95XG4gICAqIEBkZXNjcmlwdGlvbiDQn9C+0LzQtdGH0LDQtdGCINC+0LHRitC10LrRgiDQutCw0Log0YPQvdC40YfRgtC+0LbQtdC90L3Ri9C5XG4gICAqL1xuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBpc0VuYWJsZWRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBkZXNjcmlwdGlvbiDQktC+0LfQstGA0LDRidCw0LXRgiwg0LDQutGC0LjQstC10L0g0LvQuCDQvtCx0YrQtdC60YJcbiAgICovXG4gIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGlzRGVzdHJveWVkXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAZGVzY3JpcHRpb24g0JLQvtC30LLRgNCw0YnQsNC10YIsINGD0L3QuNGH0YLQvtC20LXQvSDQu9C4INC+0LHRitC10LrRglxuICAgKi9cbiAgaXNEZXN0cm95ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGlzVmlzaWJsZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQGRlc2NyaXB0aW9uINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCLCDQstC40LTQuNC8INC70Lgg0L7QsdGK0LXQutGCXG4gICAqL1xuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2liaWxpdHk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzZXRWaXNpYmlsaXR5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmlzaWJpbGl0eVxuICAgKiBAZGVzY3JpcHRpb24g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LLQuNC00LjQvNC+0YHRgtGMINC+0LHRitC10LrRgtCwXG4gICAqL1xuICBzZXRWaXNpYmlsaXR5KHZpc2liaWxpdHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl92aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFUaW1lXG4gICAqIEBkZXNjcmlwdGlvbiDQktGL0LfRi9Cy0LDQtdGC0YHRjyDQutCw0LbQtNGL0Lkg0LrQsNC00YBcbiAgICovXG4gIHVwZGF0ZShfZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5hY2NlbGVyYXRpb24ueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24ueTtcblxuICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuXG4gICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblZlbG9jaXR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZHJhd1xuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XG4gICAqIEBkZXNjcmlwdGlvbiDQktGL0LfRi9Cy0LDQtdGC0YHRjyDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4INC+0LHRitC10LrRgtCwXG4gICAqL1xuICBkcmF3KF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgb25Db2xsaXNpb25cbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBvdGhlclxuICAgKiBAZGVzY3JpcHRpb24g0JLRi9C30YvQstCw0LXRgtGB0Y8g0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuCDRgSDQtNGA0YPQs9C40Lwg0L7QsdGK0LXQutGC0L7QvC5cbiAgICovXG4gIG9uQ29sbGlzaW9uKF9vdGhlcjogR2FtZU9iamVjdCwgX3Jlc3VsdDogSUNvbGxpc2lvblJlc3VsdCk6IHZvaWQgeyB9XG59XG4iLCJpbXBvcnQgeyBJQWJzdHJhY3RDb2xsaWRlciwgSUNvbGxpc2lvblJlc3VsdCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gJ0VuZ2luZS9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENvbGxpZGVyVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQkNCx0YHRgtGA0LDQutGC0L3Ri9C5INC60LvQsNGB0YEg0LrQvtC70LvQsNC50LTQtdGA0LBcbiAqIEBpbXBsZW1lbnRzIElBYnN0cmFjdENvbGxpZGVyXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdCBpbXBsZW1lbnRzIElBYnN0cmFjdENvbGxpZGVyIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQotC40L8g0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIGFic3RyYWN0IHR5cGU6IENvbGxpZGVyVHlwZTtcblxuICAvKipcbiAgICogQHBhcmFtIGdhbWVPYmplY3Qg0JjQs9GA0L7QstC+0Lkg0L7QsdGK0LXQutGCLCDQuiDQutC+0YLQvtGA0L7QvNGDINC/0YDQuNCy0Y/Qt9Cw0L0g0LrQvtC70LvQsNC50LTQtdGAXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2FtZU9iamVjdDogSUdhbWVPYmplY3QpIHtcbiAgICB0aGlzLmdhbWVPYmplY3QuY29sbGlkZXIgPSB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQn9GA0L7QstC10YDRj9C10YIsINGB0YLQsNC70LrQuNCy0LDQtdGC0YHRjyDQu9C4INGN0YLQvtGCINC60L7Qu9C70LDQudC00LXRgCDRgSDQtNGA0YPQs9C40LxcbiAgICogQHBhcmFtIG90aGVyINCU0YDRg9Cz0L7QuSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICogQHJldHVybnMg0KDQtdC30YPQu9GM0YLQsNGCINGB0YLQvtC70LrQvdC+0LLQtdC90LjRj1xuICAgKi9cbiAgYWJzdHJhY3QgaXNDb2xsaWRpbmdXaXRoKG90aGVyOiBJQWJzdHJhY3RDb2xsaWRlcik6IElDb2xsaXNpb25SZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gJ0VuZ2luZS9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFic3RyYWN0IGFzIEFic3RyYWN0Q29sbGlkZXIgfSBmcm9tICcuL0Fic3RyYWN0JztcbmltcG9ydCB7IElBYnN0cmFjdENvbGxpZGVyLCBJQm94Q29sbGlkZXIsIElDb2xsaXNpb25SZXN1bHQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgY2hlY2tDb2xsaXNpb24gfSBmcm9tICcuL1V0aWxzJztcbmltcG9ydCB7IENvbGxpZGVyVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQn9GA0Y/QvNC+0YPQs9C+0LvRjNC90YvQuSDQutC+0LvQu9Cw0LnQtNC10YBcbiAqIEBleHRlbmRzIEFic3RyYWN0Q29sbGlkZXJcbiAqIEBpbXBsZW1lbnRzIElCb3hDb2xsaWRlclxuICovXG5leHBvcnQgY2xhc3MgQm94Q29sbGlkZXIgZXh0ZW5kcyBBYnN0cmFjdENvbGxpZGVyIGltcGxlbWVudHMgSUJveENvbGxpZGVyIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQqNC40YDQuNC90LAg0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCS0YvRgdC+0YLQsCDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKi9cbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCi0LjQvyDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKi9cbiAgcHVibGljIHR5cGU6IENvbGxpZGVyVHlwZSA9IENvbGxpZGVyVHlwZS5Cb3g7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBnYW1lT2JqZWN0INCY0LPRgNC+0LLQvtC5INC+0LHRitC10LrRgiwg0Log0LrQvtGC0L7RgNC+0LzRgyDQv9GA0LjQstGP0LfQsNC9INC60L7Qu9C70LDQudC00LXRgFxuICAgKiBAcGFyYW0gd2lkdGgg0KjQuNGA0LjQvdCwINC60L7Qu9C70LDQudC00LXRgNCwLCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDRiNC40YDQuNC90LAg0L7QsdC10LrRgtCwXG4gICAqIEBwYXJhbSBoZWlnaHQg0JLRi9GB0L7RgtCwINC60L7Qu9C70LDQudC00LXRgNCwLCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQstGL0YHQvtGC0LAg0L7QsdGK0LXQutGC0LBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdCxcbiAgICB3aWR0aD86IG51bWJlcixcbiAgICBoZWlnaHQ/OiBudW1iZXIsXG4gICkge1xuICAgIHN1cGVyKGdhbWVPYmplY3QpO1xuXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoID8/IGdhbWVPYmplY3QudHJhbnNmb3JtLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ID8/IGdhbWVPYmplY3QudHJhbnNmb3JtLmhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24g0J/RgNC+0LLQtdGA0Y/QtdGCLCDRgdGC0LDQu9C60LjQstCw0LXRgtGB0Y8g0LvQuCDRjdGC0L7RgiDQutC+0LvQu9Cw0LnQtNC10YAg0YEg0LTRgNGD0LPQuNC8XG4gICAqIEBwYXJhbSBvdGhlciDQlNGA0YPQs9C+0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gICAqIEByZXR1cm5zIHRydWUsINC10YHQu9C4INC10YHRgtGMINGB0YLQvtC70LrQvdC+0LLQtdC90LjQtSwg0LjQvdCw0YfQtSBmYWxzZVxuICAgKi9cbiAgaXNDb2xsaWRpbmdXaXRoKG90aGVyOiBJQWJzdHJhY3RDb2xsaWRlcik6IElDb2xsaXNpb25SZXN1bHQge1xuICAgIHJldHVybiBjaGVja0NvbGxpc2lvbih0aGlzLCBvdGhlcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnRW5naW5lL1BvaW50JztcbmltcG9ydCB7IEFic3RyYWN0IH0gZnJvbSAnLi9BYnN0cmFjdCc7XG5pbXBvcnQgeyBJQWJzdHJhY3RDb2xsaWRlciwgSUNpcmNsZUNvbGxpZGVyLCBJQ29sbGlzaW9uUmVzdWx0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSAnRW5naW5lL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgY2hlY2tDb2xsaXNpb24gfSBmcm9tICcuL1V0aWxzJztcbmltcG9ydCB7IENvbGxpZGVyVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQmtGA0YPQs9C70YvQuSDQutC+0LvQu9Cw0LnQtNC10YBcbiAqIEBleHRlbmRzIEFic3RyYWN0XG4gKiBAaW1wbGVtZW50cyBJQ2lyY2xlQ29sbGlkZXJcbiAqL1xuZXhwb3J0IGNsYXNzIENpcmNsZUNvbGxpZGVyIGV4dGVuZHMgQWJzdHJhY3QgaW1wbGVtZW50cyBJQ2lyY2xlQ29sbGlkZXIge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCi0LjQvyDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZTogQ29sbGlkZXJUeXBlID0gQ29sbGlkZXJUeXBlLkNpcmNsZTtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQoNCw0LTQuNGD0YEg0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIHJhZGl1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gZ2FtZU9iamVjdCDQmNCz0YDQvtCy0L7QuSDQvtCx0YrQtdC60YIsINC6INC60L7RgtC+0YDQvtC80YMg0L/RgNC40LLRj9C30LDQvSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICogQHBhcmFtIHJhZGl1cyDQoNCw0LTQuNGD0YEg0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdCxcbiAgICByYWRpdXM6IG51bWJlcixcbiAgKSB7XG4gICAgc3VwZXIoZ2FtZU9iamVjdCk7XG5cbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24g0JLQvtC30LLRgNCw0YnQsNC10YIg0YbQtdC90YLRgCDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKiBAcmV0dXJucyDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LBcbiAgICovXG4gIGdldENlbnRlcigpOiBQb2ludCB7XG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50O1xuICAgICAgICBjb25zdCBwaXZvdCA9IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0ucGl2b3Q7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHBvaW50LnggKyBwaXZvdC54LFxuICAgICAgICAgIHk6IHBvaW50LnkgKyBwaXZvdC55LFxuICAgICAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQn9GA0L7QstC10YDRj9C10YIsINGB0YLQsNC70LrQuNCy0LDQtdGC0YHRjyDQu9C4INGN0YLQvtGCINC60L7Qu9C70LDQudC00LXRgCDRgSDQtNGA0YPQs9C40LxcbiAgICogQHBhcmFtIG90aGVyINCU0YDRg9Cz0L7QuSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICogQHJldHVybnMgdHJ1ZSwg0LXRgdC70Lgg0LXRgdGC0Ywg0YHRgtC+0LvQutC90L7QstC10L3QuNC1LCDQuNC90LDRh9C1IGZhbHNlXG4gICAqL1xuICBpc0NvbGxpZGluZ1dpdGgob3RoZXI6IElBYnN0cmFjdENvbGxpZGVyKTogSUNvbGxpc2lvblJlc3VsdCB7XG4gICAgcmV0dXJuIGNoZWNrQ29sbGlzaW9uKHRoaXMsIG90aGVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdFbmdpbmUvUG9pbnQnO1xuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJ0VuZ2luZS9WZWN0b3IyJztcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnRW5naW5lL21hdGhVdGlscyc7XG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gJy4vQm94JztcbmltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSAnLi9DaXJjbGUnO1xuaW1wb3J0IHsgSUFic3RyYWN0Q29sbGlkZXIsIElCb3hDb2xsaWRlciwgSUNvbGxpc2lvblJlc3VsdCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDb2xsaWRlclR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdENvbGxpc2lvblJlc3VsdDogSUNvbGxpc2lvblJlc3VsdCA9IHtcbiAgY29sbGlkZWQ6IGZhbHNlLFxuICBub3JtYWw6IG51bGwsXG4gIHBlbmV0cmF0aW9uOiBudWxsLFxufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g0J/RgNC+0LLQtdGA0Y/QtdGCINGB0YLQvtC70LrQvdC+0LLQtdC90LjQtSDQvNC10LbQtNGDINC00LLRg9C80Y8g0LrQvtC70LvQsNC50LTQtdGA0LDQvNC4XG4gKiBAcGFyYW0gYSDQn9C10YDQstGL0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAcGFyYW0gYiDQktGC0L7RgNC+0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAcmV0dXJucyDQoNC10LfRg9C70YzRgtCw0YIg0YHRgtC+0LvQutC90L7QstC10L3QuNGPXG4gKiBAdGhyb3dzINCe0YjQuNCx0LrQsCwg0LXRgdC70Lgg0L3QtSDQvdCw0LnQtNC10L3QsCDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjRj1xuICovXG5leHBvcnQgY29uc3QgY2hlY2tDb2xsaXNpb24gPSAoYTogSUFic3RyYWN0Q29sbGlkZXIsIGI6IElBYnN0cmFjdENvbGxpZGVyKTogSUNvbGxpc2lvblJlc3VsdCA9PiB7XG4gIHN3aXRjaCAoYS50eXBlICsgYi50eXBlKSB7XG4gICAgY2FzZSBDb2xsaWRlclR5cGUuQm94ICsgQ29sbGlkZXJUeXBlLkJveDpcbiAgICAgIHJldHVybiBib3hCb3goYSBhcyBCb3hDb2xsaWRlciwgYiBhcyBCb3hDb2xsaWRlcik7XG4gICAgY2FzZSBDb2xsaWRlclR5cGUuQ2lyY2xlICsgQ29sbGlkZXJUeXBlLkNpcmNsZTpcbiAgICAgIHJldHVybiBjaXJjbGVDaXJjbGUoYSBhcyBDaXJjbGVDb2xsaWRlciwgYiBhcyBDaXJjbGVDb2xsaWRlcik7XG4gICAgY2FzZSBDb2xsaWRlclR5cGUuQm94ICsgQ29sbGlkZXJUeXBlLkNpcmNsZTpcbiAgICAgIHJldHVybiBib3hDaXJjbGUoYSBhcyBCb3hDb2xsaWRlciwgYiBhcyBDaXJjbGVDb2xsaWRlcik7XG4gICAgY2FzZSBDb2xsaWRlclR5cGUuQ2lyY2xlICsgQ29sbGlkZXJUeXBlLkJveDpcbiAgICAgIHJldHVybiBib3hDaXJjbGUoYiBhcyBCb3hDb2xsaWRlciwgYSBhcyBDaXJjbGVDb2xsaWRlcik7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYEVuZ2luZS9jb2xsaWRlcjpVdGlscy5jaGVja0NvbGxpc2lvbiwg0L3QtSDQvdCw0LnQtNC10L3QsCDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INC60L7Qu9C40LfQuNC5ICR7YS50eXBlfSB4ICR7Yi50eXBlfWAsXG4gICk7XG59O1xuXG5jb25zdCBnZXRWZXJ0aWNlcyA9IChib3g6IElCb3hDb2xsaWRlcik6IFBvaW50W10gPT4ge1xuICBjb25zdCB0cmFuc2Zvcm0gPSBib3guZ2FtZU9iamVjdC50cmFuc2Zvcm07XG4gIGNvbnN0IHBvc2l0aW9uID0gdHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50O1xuICBjb25zdCBwaXZvdCA9IHRyYW5zZm9ybS5waXZvdDtcbiAgY29uc3Qgcm90YXRpb24gPSB0cmFuc2Zvcm0ucG9zaXRpb24ucm90YXRpb247XG4gIGNvbnN0IHdpZHRoID0gdHJhbnNmb3JtLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB0cmFuc2Zvcm0uaGVpZ2h0O1xuXG4gIGNvbnN0IGxvY2FsVmVydGljZXM6IFBvaW50W10gPSBbXG4gICAgeyB4OiAwIC0gcGl2b3QueCwgeTogMCAtIHBpdm90LnkgfSxcbiAgICB7IHg6IHdpZHRoIC0gcGl2b3QueCwgeTogMCAtIHBpdm90LnkgfSxcbiAgICB7IHg6IHdpZHRoIC0gcGl2b3QueCwgeTogaGVpZ2h0IC0gcGl2b3QueSB9LFxuICAgIHsgeDogMCAtIHBpdm90LngsIHk6IGhlaWdodCAtIHBpdm90LnkgfSxcbiAgXTtcblxuICBjb25zdCBwaXZvdFdvcmxkID0geyB4OiBwb3NpdGlvbi54ICsgcGl2b3QueCwgeTogcG9zaXRpb24ueSArIHBpdm90LnkgfTtcblxuICByZXR1cm4gbG9jYWxWZXJ0aWNlcy5tYXAodmVydGV4ID0+IHtcbiAgICBjb25zdCByb3RhdGVkID0gbWF0aC5yb3RhdGUoXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB7IHg6IDAsIHk6IDAgfSwgLy8g0JLRgNCw0YnQsNC10Lwg0LLQvtC60YDRg9CzINC70L7QutCw0LvRjNC90L7Qs9C+ICgwLDApLCDRgtCw0Log0LrQsNC6INGD0LbQtSDRg9GH0LvQuCBwaXZvdFxuICAgICAgcm90YXRpb25cbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICB4OiByb3RhdGVkLnggKyBwaXZvdFdvcmxkLngsIC8vINCh0LzQtdGJ0LDQtdC8INCyINC/0L7Qt9C40YbQuNGOINC80LjRgNC+0LLQvtCz0L4gcGl2b3RcbiAgICAgIHk6IHJvdGF0ZWQueSArIHBpdm90V29ybGQueVxuICAgIH07XG4gIH0pO1xufVxuXG5jb25zdCBwcm9qZWN0ID0gKHZlcnRpY2VzOiBQb2ludFtdLCBheGlzOiBWZWN0b3IyKTogeyBtaW46IG51bWJlciwgbWF4OiBudW1iZXIgfSA9PiB7XG4gIGxldCBtaW4gPSBtYXRoLmRvdCh2ZXJ0aWNlc1swXSwgYXhpcyk7XG4gIGxldCBtYXggPSBtaW47XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHAgPSBtYXRoLmRvdCh2ZXJ0aWNlc1tpXSwgYXhpcyk7XG4gICAgaWYgKHAgPCBtaW4pIHtcbiAgICAgIG1pbiA9IHA7XG4gICAgfSBlbHNlIGlmIChwID4gbWF4KSB7XG4gICAgICBtYXggPSBwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG1pbiwgbWF4IH07XG59XG5cbmNvbnN0IGJveEJveCA9IChhOiBJQm94Q29sbGlkZXIsIGI6IElCb3hDb2xsaWRlcik6IElDb2xsaXNpb25SZXN1bHQgPT4ge1xuICBjb25zdCB2ZXJ0aWNlc0EgPSBnZXRWZXJ0aWNlcyhhKTtcbiAgY29uc3QgdmVydGljZXNCID0gZ2V0VmVydGljZXMoYik7XG5cbiAgY29uc3QgZ2V0QXhlcyA9ICh2ZXJ0aWNlczogUG9pbnRbXSk6IFZlY3RvcjJbXSA9PiB7XG4gICAgY29uc3QgYXhlczogVmVjdG9yMltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcDEgPSB2ZXJ0aWNlc1tpXTtcbiAgICAgIGNvbnN0IHAyID0gdmVydGljZXNbaSArIDEgPT09IHZlcnRpY2VzLmxlbmd0aCA/IDAgOiBpICsgMV07XG4gICAgICBjb25zdCBlZGdlID0gbWF0aC5zdWJ0cmFjdChwMSwgcDIpO1xuICAgICAgY29uc3Qgbm9ybWFsID0geyB4OiAtZWRnZS55LCB5OiBlZGdlLnggfTtcbiAgICAgIGF4ZXMucHVzaChub3JtYWwpO1xuICAgIH1cbiAgICByZXR1cm4gYXhlcztcbiAgfTtcblxuICBjb25zdCBheGVzID0gWy4uLmdldEF4ZXModmVydGljZXNBKSwgLi4uZ2V0QXhlcyh2ZXJ0aWNlc0IpXTtcbiAgbGV0IG10diA9IHsgeDogMCwgeTogMCB9O1xuICBsZXQgbWluT3ZlcmxhcCA9IEluZmluaXR5O1xuXG4gIGZvciAoY29uc3QgYXhpcyBvZiBheGVzKSB7XG4gICAgY29uc3QgcHJvakEgPSBwcm9qZWN0KHZlcnRpY2VzQSwgYXhpcyk7XG4gICAgY29uc3QgcHJvakIgPSBwcm9qZWN0KHZlcnRpY2VzQiwgYXhpcyk7XG5cbiAgICBjb25zdCBvdmVybGFwID0gTWF0aC5taW4ocHJvakEubWF4LCBwcm9qQi5tYXgpIC0gTWF0aC5tYXgocHJvakEubWluLCBwcm9qQi5taW4pO1xuICAgIGlmIChvdmVybGFwIDwgMCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb2xsaXNpb25SZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKG92ZXJsYXAgPCBtaW5PdmVybGFwKSB7XG4gICAgICBtaW5PdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgIG10diA9IGF4aXM7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5zcXJ0KG10di54ICogbXR2LnggKyBtdHYueSAqIG10di55KTtcbiAgY29uc3Qgbm9ybWFsID0geyB4OiBtdHYueCAvIG1hZ25pdHVkZSwgeTogbXR2LnkgLyBtYWduaXR1ZGUgfTtcblxuICBjb25zdCBjZW50ZXJBID0geyB4OiBhLmdhbWVPYmplY3QudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LngsIHk6IGEuZ2FtZU9iamVjdC50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQueSB9O1xuICBjb25zdCBjZW50ZXJCID0geyB4OiBiLmdhbWVPYmplY3QudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LngsIHk6IGIuZ2FtZU9iamVjdC50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQueSB9O1xuICBjb25zdCBkaXJlY3Rpb24gPSBtYXRoLnN1YnRyYWN0KGNlbnRlckIsIGNlbnRlckEpO1xuXG4gIGlmIChtYXRoLmRvdChkaXJlY3Rpb24sIG5vcm1hbCkgPCAwKSB7XG4gICAgbm9ybWFsLnggPSAtbm9ybWFsLng7XG4gICAgbm9ybWFsLnkgPSAtbm9ybWFsLnk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbGxpZGVkOiB0cnVlLFxuICAgIG5vcm1hbDogbm9ybWFsLFxuICAgIHBlbmV0cmF0aW9uOiB7IHg6IG5vcm1hbC54ICogbWluT3ZlcmxhcCwgeTogbm9ybWFsLnkgKiBtaW5PdmVybGFwIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2lyY2xlQ2lyY2xlID0gKGE6IENpcmNsZUNvbGxpZGVyLCBiOiBDaXJjbGVDb2xsaWRlcik6IElDb2xsaXNpb25SZXN1bHQgPT4ge1xuICBjb25zdCBjZW50ZXJBID0gYS5nZXRDZW50ZXIoKTtcbiAgY29uc3QgY2VudGVyQiA9IGIuZ2V0Q2VudGVyKCk7XG5cbiAgY29uc3QgZHggPSBjZW50ZXJBLnggLSBjZW50ZXJCLng7XG4gIGNvbnN0IGR5ID0gY2VudGVyQS55IC0gY2VudGVyQi55O1xuXG4gIGNvbnN0IGRpc3RhbmNlU3EgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgY29uc3QgY29tYmluZWRSYWRpdXMgPSBhLnJhZGl1cyArIGIucmFkaXVzO1xuXG4gIGlmIChkaXN0YW5jZVNxIDwgY29tYmluZWRSYWRpdXMgKiBjb21iaW5lZFJhZGl1cykge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlU3EpO1xuICAgIGNvbnN0IG5vcm1hbCA9IGRpc3RhbmNlID09PSAwID8geyB4OiAxLCB5OiAwIH0gOiB7IHg6IGR4IC8gZGlzdGFuY2UsIHk6IGR5IC8gZGlzdGFuY2UgfTtcbiAgICBjb25zdCBwZW5ldHJhdGlvbkRlcHRoID0gY29tYmluZWRSYWRpdXMgLSBkaXN0YW5jZTtcbiAgICByZXR1cm4ge1xuICAgICAgY29sbGlkZWQ6IHRydWUsXG4gICAgICBub3JtYWw6IG5vcm1hbCxcbiAgICAgIHBlbmV0cmF0aW9uOiB7IHg6IG5vcm1hbC54ICogcGVuZXRyYXRpb25EZXB0aCwgeTogbm9ybWFsLnkgKiBwZW5ldHJhdGlvbkRlcHRoIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0Q29sbGlzaW9uUmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGJveENpcmNsZSA9IChib3g6IEJveENvbGxpZGVyLCBjaXJjbGU6IENpcmNsZUNvbGxpZGVyKTogSUNvbGxpc2lvblJlc3VsdCA9PiB7XG4gIGNvbnN0IHsgZ2FtZU9iamVjdCwgcmFkaXVzIH0gPSBjaXJjbGU7XG4gIGNvbnN0IHsgcG9zaXRpb246IGNpcmNsZVBvc2l0aW9uIH0gPSBnYW1lT2JqZWN0LnRyYW5zZm9ybTtcbiAgY29uc3QgeyBwb2ludDogY2lyY2xlQ2VudGVyLCBwcmV2aW91c1BvaW50OiBjaXJjbGVQcmV2Q2VudGVyIH0gPSBjaXJjbGVQb3NpdGlvbjtcblxuICAvLyDQldGB0LvQuCDQvdC10YIg0L/RgNC10LTRi9C00YPRidC10Lkg0L/QvtC30LjRhtC40LgsINC40YHQv9C+0LvRjNC30YPQtdC8INGB0YLQsNGA0YvQuSDQvNC10YLQvtC0XG4gIGlmICghY2lyY2xlUHJldkNlbnRlcikge1xuICAgIHJldHVybiBkaXNjcmV0ZUJveENpcmNsZShib3gsIGNpcmNsZSk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSBib3guZ2FtZU9iamVjdC50cmFuc2Zvcm07XG4gIGNvbnN0IHsgcG9zaXRpb246IGJveFBvc2l0aW9uLCBwaXZvdCwgd2lkdGgsIGhlaWdodCB9ID0gdHJhbnNmb3JtO1xuICBjb25zdCB7IHBvaW50OiBib3hDZW50ZXIsIHJvdGF0aW9uIH0gPSBib3hQb3NpdGlvbjtcblxuICAvLyDQktC10LrRgtC+0YAg0LTQstC40LbQtdC90LjRjyDQutGA0YPQs9CwXG4gIGNvbnN0IGNpcmNsZVZlbG9jaXR5ID0gbWF0aC5zdWJ0cmFjdChjaXJjbGVDZW50ZXIsIGNpcmNsZVByZXZDZW50ZXIpO1xuXG4gIC8vINCi0YDQsNC90YHRhNC+0YDQvNC40YDRg9C10Lwg0LLRgdC1INCyINC70L7QutCw0LvRjNC90YPRjiDRgdC40YHRgtC10LzRgyDQutC+0L7RgNC00LjQvdCw0YIg0L/RgNGP0LzQvtGD0LPQvtC70YzQvdC40LrQsFxuICBjb25zdCBib3hQaXZvdFdvcmxkID0geyB4OiBib3hDZW50ZXIueCArIHBpdm90LngsIHk6IGJveENlbnRlci55ICsgcGl2b3QueSB9O1xuICBjb25zdCBjaXJjbGVTdGFydExvY2FsID0gbWF0aC5yb3RhdGUobWF0aC5zdWJ0cmFjdChjaXJjbGVQcmV2Q2VudGVyLCBib3hQaXZvdFdvcmxkKSwgeyB4OiAwLCB5OiAwIH0sIC1yb3RhdGlvbik7XG4gIGNvbnN0IGNpcmNsZUVuZExvY2FsID0gbWF0aC5yb3RhdGUobWF0aC5zdWJ0cmFjdChjaXJjbGVDZW50ZXIsIGJveFBpdm90V29ybGQpLCB7IHg6IDAsIHk6IDAgfSwgLXJvdGF0aW9uKTtcbiAgY29uc3QgY2lyY2xlVmVsTG9jYWwgPSBtYXRoLnN1YnRyYWN0KGNpcmNsZUVuZExvY2FsLCBjaXJjbGVTdGFydExvY2FsKTtcblxuICAvLyDQk9GA0LDQvdC40YbRiyDQv9GA0Y/QvNC+0YPQs9C+0LvRjNC90LjQutCwINCyINC70L7QutCw0LvRjNC90YvRhSDQutC+0L7RgNC00LjQvdCw0YLQsNGFXG4gIGNvbnN0IGJveE1pbiA9IHsgeDogLXBpdm90LngsIHk6IC1waXZvdC55IH07XG4gIGNvbnN0IGJveE1heCA9IHsgeDogd2lkdGggLSBwaXZvdC54LCB5OiBoZWlnaHQgLSBwaXZvdC55IH07XG5cbiAgLy8g0KDQsNGB0YjQuNGA0Y/QtdC8INCz0YDQsNC90LjRhtGLINC/0YDRj9C80L7Rg9Cz0L7Qu9GM0L3QuNC60LAg0L3QsCDRgNCw0LTQuNGD0YEg0LrRgNGD0LPQsCAoTWlua293c2tpIHN1bSlcbiAgY29uc3QgZXhwYW5kZWRCb3hNaW4gPSB7IHg6IGJveE1pbi54IC0gcmFkaXVzLCB5OiBib3hNaW4ueSAtIHJhZGl1cyB9O1xuICBjb25zdCBleHBhbmRlZEJveE1heCA9IHsgeDogYm94TWF4LnggKyByYWRpdXMsIHk6IGJveE1heC55ICsgcmFkaXVzIH07XG5cbiAgLy8g0JDQu9Cz0L7RgNC40YLQvCBSYXktQUFCQiBpbnRlcnNlY3Rpb25cbiAgbGV0IHROZWFyID0gMDtcbiAgbGV0IHRGYXIgPSAxO1xuICBsZXQgY29sbGlzaW9uTm9ybWFsTG9jYWw6IFZlY3RvcjIgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBmb3IgKGNvbnN0IGF4aXMgb2YgWyd4JywgJ3knXSBhcyBjb25zdCkge1xuICAgIGlmIChNYXRoLmFicyhjaXJjbGVWZWxMb2NhbFtheGlzXSkgPCAxZS04KSB7IC8vINCU0LLQuNC20LXQvdC40Y8g0L/QviDQvtGB0Lgg0L/QvtGH0YLQuCDQvdC10YJcbiAgICAgIGlmIChjaXJjbGVTdGFydExvY2FsW2F4aXNdIDwgZXhwYW5kZWRCb3hNaW5bYXhpc10gfHwgY2lyY2xlU3RhcnRMb2NhbFtheGlzXSA+IGV4cGFuZGVkQm94TWF4W2F4aXNdKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29sbGlzaW9uUmVzdWx0OyAvLyDQodGC0L7Qu9C60L3Rg9GC0YzRgdGPINC90LUg0LzQvtC20LXRglxuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgdDEgPSAoZXhwYW5kZWRCb3hNaW5bYXhpc10gLSBjaXJjbGVTdGFydExvY2FsW2F4aXNdKSAvIGNpcmNsZVZlbExvY2FsW2F4aXNdO1xuICAgIGNvbnN0IHQyID0gKGV4cGFuZGVkQm94TWF4W2F4aXNdIC0gY2lyY2xlU3RhcnRMb2NhbFtheGlzXSkgLyBjaXJjbGVWZWxMb2NhbFtheGlzXTtcblxuICAgIGNvbnN0IHRNaW4gPSBNYXRoLm1pbih0MSwgdDIpO1xuICAgIGNvbnN0IHRNYXggPSBNYXRoLm1heCh0MSwgdDIpO1xuXG4gICAgaWYgKHRNaW4gPiB0TmVhcikge1xuICAgICAgdE5lYXIgPSB0TWluO1xuICAgICAgY29sbGlzaW9uTm9ybWFsTG9jYWwgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgY29sbGlzaW9uTm9ybWFsTG9jYWwueCA9IC1NYXRoLnNpZ24oY2lyY2xlVmVsTG9jYWwueCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsaXNpb25Ob3JtYWxMb2NhbC55ID0gLU1hdGguc2lnbihjaXJjbGVWZWxMb2NhbC55KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0RmFyID0gTWF0aC5taW4odEZhciwgdE1heCk7XG5cbiAgICBpZiAodE5lYXIgPiB0RmFyKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbGxpc2lvblJlc3VsdDsgLy8g0J3QtdGCINC/0LXRgNC10YHQtdGH0LXQvdC40Y9cbiAgICB9XG4gIH1cblxuICBpZiAodE5lYXIgPiAxKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRDb2xsaXNpb25SZXN1bHQ7IC8vINCh0YLQvtC70LrQvdC+0LLQtdC90LjQtSDQv9GA0L7QuNC30L7QudC00LXRgiDQsiDQsdGD0LTRg9GJ0LXQvCwg0L3QviDQvdC1INCyINGN0YLQvtC8INC60LDQtNGA0LVcbiAgfVxuXG4gIC8vINCV0YHQu9C4IHROZWFyINC+0YLRgNC40YbQsNGC0LXQu9GM0L3Ri9C5LCDQt9C90LDRh9C40YIsINC+0LHRitC10LrRgiDRg9C20LUg0L3QsNGF0L7QtNC40YLRgdGPINCy0L3Rg9GC0YDQuC5cbiAgLy8g0KHRh9C40YLQsNC10LwsINGH0YLQviDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUg0L/RgNC+0LjQt9C+0YjQu9C+INCyINGB0LDQvNC+0Lwg0L3QsNGH0LDQu9C1INC60LDQtNGA0LAuXG4gIGlmICh0TmVhciA8IDApIHtcbiAgICB0TmVhciA9IDA7XG4gIH1cblxuICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC90LUg0L3QsNGF0L7QtNC40YLRgdGPINC70Lgg0YLQvtGH0LrQsCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Y8g0LLQvdGD0YLRgNC4INGD0LPQu9C+0LLQvtC5INC+0LHQu9Cw0YHRgtC4XG4gIGNvbnN0IGNvbnRhY3RQb2ludCA9IG1hdGguYWRkKGNpcmNsZVN0YXJ0TG9jYWwsIG1hdGgubXVsdGlwbHkoY2lyY2xlVmVsTG9jYWwsIHROZWFyKSk7XG4gIGxldCBpc0Nvcm5lckNvbGxpc2lvbiA9IHRydWU7XG4gIGZvciAoY29uc3QgYXhpcyBvZiBbJ3gnLCAneSddIGFzIGNvbnN0KSB7XG4gICAgaWYgKGNvbnRhY3RQb2ludFtheGlzXSA+PSBib3hNaW5bYXhpc10gJiYgY29udGFjdFBvaW50W2F4aXNdIDw9IGJveE1heFtheGlzXSkge1xuICAgICAgaXNDb3JuZXJDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc0Nvcm5lckNvbGxpc2lvbikge1xuICAgIC8vINCd0LDRhdC+0LTQuNC8INCx0LvQuNC20LDQudGI0LjQuSDRg9Cz0L7Qu1xuICAgIGNvbnN0IGNsb3Nlc3RDb3JuZXIgPSB7XG4gICAgICB4OiAoY29udGFjdFBvaW50LnggPCBib3hNaW4ueCkgPyBib3hNaW4ueCA6IGJveE1heC54LFxuICAgICAgeTogKGNvbnRhY3RQb2ludC55IDwgYm94TWluLnkpID8gYm94TWluLnkgOiBib3hNYXgueSxcbiAgICB9O1xuXG4gICAgLy8g0J/QtdGA0LXRgdGH0LjRgtGL0LLQsNC10Lwg0YHRgtC+0LvQutC90L7QstC10L3QuNC1INC60LDQuiDRgdGE0LXRgNCwLdC70LjQvdC40Y9cbiAgICBjb25zdCBjb3JuZXJUb1N0YXJ0ID0gbWF0aC5zdWJ0cmFjdChjaXJjbGVTdGFydExvY2FsLCBjbG9zZXN0Q29ybmVyKTtcbiAgICBjb25zdCBhID0gbWF0aC5kb3QoY2lyY2xlVmVsTG9jYWwsIGNpcmNsZVZlbExvY2FsKTtcbiAgICBjb25zdCBiID0gMiAqIG1hdGguZG90KGNvcm5lclRvU3RhcnQsIGNpcmNsZVZlbExvY2FsKTtcbiAgICBjb25zdCBjID0gbWF0aC5kb3QoY29ybmVyVG9TdGFydCwgY29ybmVyVG9TdGFydCkgLSByYWRpdXMgKiByYWRpdXM7XG4gICAgY29uc3QgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0ICogYSAqIGM7XG5cbiAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb2xsaXNpb25SZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdCA9ICgtYiAtIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSk7XG4gICAgaWYgKHQgPCAwIHx8IHQgPiAxKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbGxpc2lvblJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3R1YWxDb250YWN0UG9pbnQgPSBtYXRoLmFkZChjaXJjbGVTdGFydExvY2FsLCBtYXRoLm11bHRpcGx5KGNpcmNsZVZlbExvY2FsLCB0KSk7XG4gICAgY29sbGlzaW9uTm9ybWFsTG9jYWwgPSBtYXRoLm5vcm1hbGl6ZShtYXRoLnN1YnRyYWN0KGFjdHVhbENvbnRhY3RQb2ludCwgY2xvc2VzdENvcm5lcikpO1xuICAgIHROZWFyID0gdDtcbiAgfVxuXG5cbiAgaWYgKHROZWFyID49IDAgJiYgdE5lYXIgPD0gMSkge1xuICAgIGNvbnN0IGNvbnRhY3RUaW1lID0gTWF0aC5tYXgoMCwgdE5lYXIpO1xuICAgIGNvbnN0IHBlbmV0cmF0aW9uRGVwdGggPSAoMSAtIGNvbnRhY3RUaW1lKSAqIE1hdGguc3FydChtYXRoLmRvdChjaXJjbGVWZWxvY2l0eSwgY2lyY2xlVmVsb2NpdHkpKTtcbiAgICBjb25zdCBub3JtYWxXb3JsZCA9IG1hdGgubm9ybWFsaXplKG1hdGgucm90YXRlKGNvbGxpc2lvbk5vcm1hbExvY2FsLCB7IHg6IDAsIHk6IDAgfSwgcm90YXRpb24pKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb2xsaWRlZDogdHJ1ZSxcbiAgICAgIG5vcm1hbDogbm9ybWFsV29ybGQsXG4gICAgICBwZW5ldHJhdGlvbjogeyB4OiBub3JtYWxXb3JsZC54ICogcGVuZXRyYXRpb25EZXB0aCwgeTogbm9ybWFsV29ybGQueSAqIHBlbmV0cmF0aW9uRGVwdGggfSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRDb2xsaXNpb25SZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQodGC0LDRgNCw0Y8g0LLQtdGA0YHQuNGPINC/0YDQvtCy0LXRgNC60Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNGPLCDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LrQsNC6IGZhbGxiYWNrXG4gKi9cbmNvbnN0IGRpc2NyZXRlQm94Q2lyY2xlID0gKGJveDogQm94Q29sbGlkZXIsIGNpcmNsZTogQ2lyY2xlQ29sbGlkZXIpOiBJQ29sbGlzaW9uUmVzdWx0ID0+IHtcbiAgY29uc3QgY2lyY2xlQ2VudGVyID0gY2lyY2xlLmdldENlbnRlcigpO1xuICBjb25zdCByYWRpdXMgPSBjaXJjbGUucmFkaXVzO1xuICBjb25zdCB0cmFuc2Zvcm0gPSBib3guZ2FtZU9iamVjdC50cmFuc2Zvcm07XG4gIGNvbnN0IHsgcG9zaXRpb24sIHBpdm90LCB3aWR0aCwgaGVpZ2h0IH0gPSB0cmFuc2Zvcm07XG4gIGNvbnN0IHsgcG9pbnQ6IGJveFBvc2l0aW9uLCByb3RhdGlvbiB9ID0gcG9zaXRpb247XG5cbiAgY29uc3QgYm94UGl2b3RXb3JsZCA9IHsgeDogYm94UG9zaXRpb24ueCArIHBpdm90LngsIHk6IGJveFBvc2l0aW9uLnkgKyBwaXZvdC55IH07XG4gIGNvbnN0IGNpcmNsZUNlbnRlclRyYW5zbGF0ZWQgPSBtYXRoLnN1YnRyYWN0KGNpcmNsZUNlbnRlciwgYm94UGl2b3RXb3JsZCk7XG4gIGNvbnN0IGNpcmNsZUNlbnRlckxvY2FsID0gbWF0aC5yb3RhdGUoY2lyY2xlQ2VudGVyVHJhbnNsYXRlZCwgeyB4OiAwLCB5OiAwIH0sIC1yb3RhdGlvbik7XG5cbiAgY29uc3QgY2xvc2VzdFBvaW50TG9jYWwgPSB7XG4gICAgeDogTWF0aC5tYXgoLXBpdm90LngsIE1hdGgubWluKGNpcmNsZUNlbnRlckxvY2FsLngsIHdpZHRoIC0gcGl2b3QueCkpLFxuICAgIHk6IE1hdGgubWF4KC1waXZvdC55LCBNYXRoLm1pbihjaXJjbGVDZW50ZXJMb2NhbC55LCBoZWlnaHQgLSBwaXZvdC55KSksXG4gIH07XG5cbiAgY29uc3QgdmVjdG9yVG9DbG9zZXN0ID0gbWF0aC5zdWJ0cmFjdChjaXJjbGVDZW50ZXJMb2NhbCwgY2xvc2VzdFBvaW50TG9jYWwpO1xuICBjb25zdCBkaXN0YW5jZVNxID0gbWF0aC5kb3QodmVjdG9yVG9DbG9zZXN0LCB2ZWN0b3JUb0Nsb3Nlc3QpO1xuXG4gIGlmIChkaXN0YW5jZVNxID4gcmFkaXVzICogcmFkaXVzKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRDb2xsaXNpb25SZXN1bHQ7XG4gIH1cblxuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVNxKTtcbiAgbGV0IG5vcm1hbExvY2FsOiBWZWN0b3IyO1xuICBsZXQgcGVuZXRyYXRpb25EZXB0aDogbnVtYmVyO1xuXG4gIGlmIChkaXN0YW5jZSA+IDApIHtcbiAgICBwZW5ldHJhdGlvbkRlcHRoID0gcmFkaXVzIC0gZGlzdGFuY2U7XG4gICAgbm9ybWFsTG9jYWwgPSB7IHg6IHZlY3RvclRvQ2xvc2VzdC54IC8gZGlzdGFuY2UsIHk6IHZlY3RvclRvQ2xvc2VzdC55IC8gZGlzdGFuY2UgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkeDEgPSBjaXJjbGVDZW50ZXJMb2NhbC54IC0gKC1waXZvdC54KTtcbiAgICBjb25zdCBkeDIgPSAod2lkdGggLSBwaXZvdC54KSAtIGNpcmNsZUNlbnRlckxvY2FsLng7XG4gICAgY29uc3QgZHkxID0gY2lyY2xlQ2VudGVyTG9jYWwueSAtICgtcGl2b3QueSk7XG4gICAgY29uc3QgZHkyID0gKGhlaWdodCAtIHBpdm90LnkpIC0gY2lyY2xlQ2VudGVyTG9jYWwueTtcblxuICAgIGNvbnN0IG1pbkR4ID0gTWF0aC5taW4oZHgxLCBkeDIpO1xuICAgIGNvbnN0IG1pbkR5ID0gTWF0aC5taW4oZHkxLCBkeTIpO1xuXG4gICAgaWYgKG1pbkR4IDwgbWluRHkpIHtcbiAgICAgIHBlbmV0cmF0aW9uRGVwdGggPSBtaW5EeCArIHJhZGl1cztcbiAgICAgIG5vcm1hbExvY2FsID0gZHgxIDwgZHgyID8geyB4OiAtMSwgeTogMCB9IDogeyB4OiAxLCB5OiAwIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmV0cmF0aW9uRGVwdGggPSBtaW5EeSArIHJhZGl1cztcbiAgICAgIG5vcm1hbExvY2FsID0gZHkxIDwgZHkyID8geyB4OiAwLCB5OiAtMSB9IDogeyB4OiAwLCB5OiAxIH07XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgbm9ybWFsV29ybGQgPSBtYXRoLnJvdGF0ZShub3JtYWxMb2NhbCwgeyB4OiAwLCB5OiAwIH0sIHJvdGF0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBjb2xsaWRlZDogdHJ1ZSxcbiAgICBub3JtYWw6IG5vcm1hbFdvcmxkLFxuICAgIHBlbmV0cmF0aW9uOiB7IHg6IG5vcm1hbFdvcmxkLnggKiBwZW5ldHJhdGlvbkRlcHRoLCB5OiBub3JtYWxXb3JsZC55ICogcGVuZXRyYXRpb25EZXB0aCB9LFxuICB9O1xufTtcbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnRW5naW5lL1BvaW50JztcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICdFbmdpbmUvVmVjdG9yMic7XG5pbXBvcnQgeyBDb2xsaWRlclR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSAnRW5naW5lL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQoNC10LfRg9C70YzRgtCw0YIg0L/RgNC+0LLQtdGA0LrQuCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Y9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29sbGlzaW9uUmVzdWx0IHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQn9GA0L7QuNC30L7RiNC70L4g0LvQuCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LVcbiAgICovXG4gIGNvbGxpZGVkOiBib29sZWFuO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCd0L7RgNC80LDQu9GMINGB0YLQvtC70LrQvdC+0LLQtdC90LjRjyAo0LLQtdC60YLQvtGALCDQv9C10YDQv9C10L3QtNC40LrRg9C70Y/RgNC90YvQuSDQv9C+0LLQtdGA0YXQvdC+0YHRgtC4KVxuICAgKi9cbiAgbm9ybWFsOiBWZWN0b3IyIHwgbnVsbDtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQktC10LrRgtC+0YAg0L/RgNC+0L3QuNC60L3QvtCy0LXQvdC40Y8gKE1UVikg0LTQu9GPINGA0LDQt9GA0LXRiNC10L3QuNGPINGB0YLQvtC70LrQvdC+0LLQtdC90LjRj1xuICAgKi9cbiAgcGVuZXRyYXRpb246IFZlY3RvcjIgfCBudWxsO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQmNC90YLQtdGA0YTQtdC50YEg0LTQu9GPINCw0LHRgdGC0YDQsNC60YLQvdC+0LPQviDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdENvbGxpZGVyIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQotC40L8g0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIHR5cGU6IENvbGxpZGVyVHlwZTtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQmNCz0YDQvtCy0L7QuSDQvtCx0YrQtdC60YIsINC6INC60L7RgtC+0YDQvtC80YMg0L/RgNC40LLRj9C30LDQvSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICovXG4gIGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0O1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCf0YDQvtCy0LXRgNGP0LXRgiwg0YHRgtCw0LvQutC40LLQsNC10YLRgdGPINC70Lgg0Y3RgtC+0YIg0LrQvtC70LvQsNC50LTQtdGAINGBINC00YDRg9Cz0LjQvFxuICAgKiBAcGFyYW0gb3RoZXIg0JTRgNGD0LPQvtC5INC60L7Qu9C70LDQudC00LXRgFxuICAgKiBAcmV0dXJucyDQoNC10LfRg9C70YzRgtCw0YIg0YHRgtC+0LvQutC90L7QstC10L3QuNGPXG4gICAqL1xuICBpc0NvbGxpZGluZ1dpdGgob3RoZXI6IElBYnN0cmFjdENvbGxpZGVyKTogSUNvbGxpc2lvblJlc3VsdDtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g0JjQvdGC0LXRgNGE0LXQudGBINC00LvRjyDQv9GA0Y/QvNC+0YPQs9C+0LvRjNC90L7Qs9C+INC60L7Qu9C70LDQudC00LXRgNCwXG4gKiBAZXh0ZW5kcyBJQWJzdHJhY3RDb2xsaWRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIElCb3hDb2xsaWRlciBleHRlbmRzIElBYnN0cmFjdENvbGxpZGVyIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQqNC40YDQuNC90LAg0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24g0JLRi9GB0L7RgtCwINC60L7Qu9C70LDQudC00LXRgNCwXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g0JjQvdGC0LXRgNGE0LXQudGBINC00LvRjyDQutGA0YPQs9C70L7Qs9C+INC60L7Qu9C70LDQudC00LXRgNCwXG4gKiBAZXh0ZW5kcyBJQWJzdHJhY3RDb2xsaWRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDaXJjbGVDb2xsaWRlciBleHRlbmRzIElBYnN0cmFjdENvbGxpZGVyIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQoNCw0LTQuNGD0YEg0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIHJhZGl1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24g0JLQvtC30LLRgNCw0YnQsNC10YIg0YbQtdC90YLRgCDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKiBAcmV0dXJucyDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LBcbiAgICovXG4gIGdldENlbnRlcigpOiBQb2ludDtcbn1cbiIsIi8qKlxuICogQGRlc2NyaXB0aW9uINCi0LjQv9GLINC60L7Qu9C70LDQudC00LXRgNC+0LJcbiAqL1xuZXhwb3J0IGVudW0gQ29sbGlkZXJUeXBlIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQn9GA0Y/QvNC+0YPQs9C+0LvRjNC90YvQuSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICovXG4gIEJveCA9ICdib3gnLFxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCa0YDRg9Cz0LvRi9C5INC60L7Qu9C70LDQudC00LXRgFxuICAgKi9cbiAgQ2lyY2xlID0gJ2NpcmNsZScsXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL19jb2xsaWRlci9BYnN0cmFjdCc7XG5leHBvcnQgKiBmcm9tICcuL19jb2xsaWRlci9Cb3gnO1xuZXhwb3J0ICogZnJvbSAnLi9fY29sbGlkZXIvQ2lyY2xlJztcbmV4cG9ydCAqIGZyb20gJy4vX2NvbGxpZGVyL1V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vX2NvbGxpZGVyL2ludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9fY29sbGlkZXIvdHlwZXMnO1xuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL1BvaW50JztcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuL1ZlY3RvcjInO1xuXG5leHBvcnQgY29uc3Qgc3VidHJhY3QgPSAoYTogUG9pbnQsIGI6IFBvaW50KTogVmVjdG9yMiA9PiAoe1xuICAgIHg6IGEueCAtIGIueCxcbiAgICB5OiBhLnkgLSBiLnlcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBkb3QgPSAoYTogUG9pbnQgfCBWZWN0b3IyLCBiOiBQb2ludCB8IFZlY3RvcjIpOiBudW1iZXIgPT4gKFxuICAgIGEueCAqIGIueCArIGEueSAqIGIueVxuKTtcblxuZXhwb3J0IGNvbnN0IHJvdGF0ZSA9IChwb2ludDogUG9pbnQsIGNlbnRlcjogUG9pbnQsIGFuZ2xlOiBudW1iZXIpOiBQb2ludCA9PiB7XG4gICAgY29uc3Qgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcblxuICAgIGNvbnN0IGR4ID0gcG9pbnQueCAtIGNlbnRlci54O1xuICAgIGNvbnN0IGR5ID0gcG9pbnQueSAtIGNlbnRlci55O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZHggKiBjb3MgLSBkeSAqIHNpbixcbiAgICAgICAgeTogZHggKiBzaW4gKyBkeSAqIGNvc1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWZsZWN0ID0gKHZlY3RvcjogVmVjdG9yMiwgbm9ybWFsOiBWZWN0b3IyKTogVmVjdG9yMiA9PiB7XG4gICAgY29uc3QgZG90UHJvZHVjdCA9IGRvdCh2ZWN0b3IsIG5vcm1hbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogdmVjdG9yLnggLSAyICogZG90UHJvZHVjdCAqIG5vcm1hbC54LFxuICAgICAgICB5OiB2ZWN0b3IueSAtIDIgKiBkb3RQcm9kdWN0ICogbm9ybWFsLnlcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZCA9IChhOiBQb2ludCwgYjogVmVjdG9yMik6IFBvaW50ID0+ICh7XG4gICAgeDogYS54ICsgYi54LFxuICAgIHk6IGEueSArIGIueVxufSk7XG5cbmV4cG9ydCBjb25zdCBtdWx0aXBseSA9ICh2ZWN0b3I6IFZlY3RvcjIsIHNjYWxhcjogbnVtYmVyKTogVmVjdG9yMiA9PiAoe1xuICAgIHg6IHZlY3Rvci54ICogc2NhbGFyLFxuICAgIHk6IHZlY3Rvci55ICogc2NhbGFyXG59KTtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZSA9ICh2ZWN0b3I6IFZlY3RvcjIpOiBWZWN0b3IyID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQodmVjdG9yLnggKiB2ZWN0b3IueCArIHZlY3Rvci55ICogdmVjdG9yLnkpO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiB2ZWN0b3IueCAvIGxlbmd0aCxcbiAgICAgICAgeTogdmVjdG9yLnkgLyBsZW5ndGhcbiAgICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEVuZ2luZUNvcmUgfSBmcm9tICdFbmdpbmUvQ29yZSc7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnRW5naW5lL0dhbWVPYmplY3QnO1xuaW1wb3J0IHsgQm94Q29sbGlkZXIsIENpcmNsZUNvbGxpZGVyIH0gZnJvbSAnRW5naW5lL2NvbGxpZGVyJztcbmltcG9ydCB7IElDb2xsaXNpb25SZXN1bHQgfSBmcm9tICdFbmdpbmUvX2NvbGxpZGVyL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgcmVmbGVjdCB9IGZyb20gJ0VuZ2luZS9tYXRoVXRpbHMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnRW5naW5lL1ZlY3RvcjInO1xuXG5pbnRlcmZhY2UgSVBhZGRsZU9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgYmFsbD86IEJhbGw7XG4gIGFpPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAY2xhc3MgUGluZ1BvbmdHYW1lXG4gKiDQntGB0L3QvtCy0L3QvtC5INC60LvQsNGB0YEg0LjQs9GA0YsgXCLQn9C40L3Qsy3Qv9C+0L3Qs1wiLlxuICovXG5jbGFzcyBQaW5nUG9uZ0dhbWUge1xuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgZW5naW5lOiBFbmdpbmVDb3JlO1xuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIHBsYXllcjogUGFkZGxlO1xuICBwcml2YXRlIGNvbXB1dGVyOiBQYWRkbGU7XG4gIHByaXZhdGUgYmFsbDogQmFsbDtcbiAgcHJpdmF0ZSBrZXlzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHtcbiAgICBBcnJvd1VwOiBmYWxzZSxcbiAgICBBcnJvd0Rvd246IGZhbHNlLFxuICB9O1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhbnZhc0lkINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGN0LvQtdC80LXQvdGC0LAgY2FudmFzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYW52YXNJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgdGhpcy5lbmdpbmUgPSBuZXcgRW5naW5lQ29yZSh7XG4gICAgICBjYW52YXNJZCxcbiAgICAgIG9uQmVmb3JlVXBkYXRlOiB0aGlzLl9vbkJlZm9yZVVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgb25CZWZvcmVEcmF3OiB0aGlzLl9vbkJlZm9yZURyYXcuYmluZCh0aGlzKSxcbiAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICB9KTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQYWRkbGUoe1xuICAgICAgeDogMTAsXG4gICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNTAsXG4gICAgfSk7XG4gICAgdGhpcy5jb21wdXRlciA9IG5ldyBQYWRkbGUoe1xuICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLSAyMCxcbiAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA1MCxcbiAgICAgIGFpOiB0cnVlLFxuICAgICAgYmFsbDogdGhpcy5iYWxsLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wbGF5ZXIuZW5hYmxlKCk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0VmlzaWJpbGl0eSh0cnVlKTtcbiAgICB0aGlzLmNvbXB1dGVyLmVuYWJsZSgpO1xuICAgIHRoaXMuY29tcHV0ZXIuc2V0VmlzaWJpbGl0eSh0cnVlKTtcbiAgICB0aGlzLmJhbGwuZW5hYmxlKCk7XG4gICAgdGhpcy5iYWxsLnNldFZpc2liaWxpdHkodHJ1ZSk7XG5cbiAgICB0aGlzLmVuZ2luZS5hZGRHYW1lT2JqZWN0cyhbdGhpcy5wbGF5ZXIsIHRoaXMuY29tcHV0ZXIsIHRoaXMuYmFsbF0pO1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAZGVzY3JpcHRpb24g0J7RgtGA0LjRgdC+0LLRi9Cy0LDQtdGCINGE0L7QvSDQuCDRgdGH0LXRglxuICAgKi9cbiAgcHJvdGVjdGVkIF9vbkJlZm9yZURyYXcoKTogdm9pZCB7XG4gICAgLy8g0KDQuNGB0YPQtdC8INGE0L7QvVxuICAgIHRoaXMuZHJhd1JlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgJ2JsYWNrJyk7XG5cbiAgICAvLyDQoNC40YHRg9C10Lwg0YHRh9C10YJcbiAgICB0aGlzLmRyYXdUZXh0KHRoaXMucGxheWVyLnNjb3JlLnRvU3RyaW5nKCksIHRoaXMuY2FudmFzLndpZHRoIC8gNCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gNSwgJ3doaXRlJyk7XG4gICAgdGhpcy5kcmF3VGV4dCh0aGlzLmNvbXB1dGVyLnNjb3JlLnRvU3RyaW5nKCksICgzICogdGhpcy5jYW52YXMud2lkdGgpIC8gNCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gNSwgJ3doaXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAZGVzY3JpcHRpb24g0J7QsdC90L7QstC70Y/QtdGCINC00LLQuNC20LXQvdC40LUg0LjQs9GA0L7QutCwINC4INC/0YDQvtCy0LXRgNGP0LXRgiwg0LfQsNCx0LjRgiDQu9C4INCz0L7Quy5cbiAgICovXG4gIHByb3RlY3RlZCBfb25CZWZvcmVVcGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwbGF5ZXIsIGJhbGwsIGtleXMsIGNhbnZhcyB9ID0gdGhpcztcblxuICAgIGlmIChrZXlzLkFycm93VXApIHtcbiAgICAgIHBsYXllci50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQueSAtPSA4O1xuICAgIH1cbiAgICBpZiAoa2V5cy5BcnJvd0Rvd24pIHtcbiAgICAgIHBsYXllci50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQueSArPSA4O1xuICAgIH1cblxuICAgIGlmIChiYWxsLmdldENlbnRlcigpLnkgKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy5oZWlnaHQgfHwgYmFsbC5nZXRDZW50ZXIoKS55IC0gYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICBiYWxsLnZlbG9jaXR5LnkgPSAtYmFsbC52ZWxvY2l0eS55O1xuICAgIH1cblxuICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0LHRi9C7INC70Lgg0LfQsNCx0LjRgiDQs9C+0LtcbiAgICBpZiAoYmFsbC5nZXRDZW50ZXIoKS54ICsgYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICB0aGlzLmNvbXB1dGVyLnNjb3JlKys7XG4gICAgICB0aGlzLnJlc2V0QmFsbCgpO1xuICAgIH0gZWxzZSBpZiAoYmFsbC5nZXRDZW50ZXIoKS54IC0gYmFsbC5yYWRpdXMgPiBjYW52YXMud2lkdGgpIHtcbiAgICAgIHBsYXllci5zY29yZSsrO1xuICAgICAgdGhpcy5yZXNldEJhbGwoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCX0LDQv9GD0YHQutCw0LXRgiDQuNCz0YDQvtCy0L7QuSDQtNCy0LjQttC+0LpcbiAgICovXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuZW5naW5lLnN0YXJ0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uINCd0LDRgdGC0YDQsNC40LLQsNC10YIg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgdC+0LHRi9GC0LjQuSDQvNGL0YjQuCDQuCDQutC70LDQstC40LDRgtGD0YDRi1xuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbi5wb2ludC55ID0gZXZ0LmNsaWVudFkgLSByZWN0LnRvcCAtIHRoaXMucGxheWVyLnRyYW5zZm9ybS5oZWlnaHQgLyAyO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKHRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShlLmtleSkpIHtcbiAgICAgICAgdGhpcy5rZXlzW2Uua2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgaWYgKHRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShlLmtleSkpIHtcbiAgICAgICAgdGhpcy5rZXlzW2Uua2V5XSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiDQktC+0LfQstGA0LDRidCw0LXRgiDQvNGP0Ycg0LIg0YbQtdC90YLRgCDQv9C+0LvRj1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldEJhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBiYWxsIH0gPSB0aGlzO1xuXG4gICAgYmFsbC50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQueCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIGJhbGwucmFkaXVzO1xuICAgICAgICBiYWxsLnRyYW5zZm9ybS5wb3NpdGlvbi5wb2ludC55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIGJhbGwucmFkaXVzO1xuICAgIGJhbGwuc3BlZWQgPSA1O1xuICAgIGJhbGwudmVsb2NpdHkueCA9IC1iYWxsLnZlbG9jaXR5Lng7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uINCg0LjRgdGD0LXRgiDQv9GA0Y/QvNC+0YPQs9C+0LvRjNC90LjQuiDQvdCwIGNhbnZhc1xuICAgKiBAcGFyYW0ge251bWJlcn0geCAtINCa0L7QvtGA0LTQuNC90LDRgtCwIFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSDQmtC+0L7RgNC00LjQvdCw0YLQsCBZXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3IC0g0KjQuNGA0LjQvdCwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoIC0g0JLRi9GB0L7RgtCwXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtINCm0LLQtdGCXG4gICAqL1xuICBwcml2YXRlIGRyYXdSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiDQoNC40YHRg9C10YIg0YLQtdC60YHRgiDQvdCwIGNhbnZhc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtINCi0LXQutGB0YIg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y9cbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSDQmtC+0L7RgNC00LjQvdCw0YLQsCBYXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0g0JrQvtC+0YDQtNC40L3QsNGC0LAgWVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSDQptCy0LXRglxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3VGV4dCh0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZm9udCA9ICc3NXB4IGZhbnRhc3knO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFBhZGRsZVxuICogQGV4dGVuZHMgR2FtZU9iamVjdFxuICogQGRlc2NyaXB0aW9uINCf0YDQtdC00YHRgtCw0LLQu9GP0LXRgiDRgNCw0LrQtdGC0LrRgyDQuNCz0YDQvtC60LAuXG4gKi9cbmNsYXNzIFBhZGRsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBwdWJsaWMgY29sb3I6IHN0cmluZztcbiAgcHVibGljIHNjb3JlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9iYWxsOiBCYWxsIHwgbnVsbDtcbiAgcHJpdmF0ZSBfYWk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0lQYWRkbGVPcHRpb25zfSBvcHRpb25zIC0g0J7Qv9GG0LjQuCDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRgNCw0LrQtdGC0LrQuC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgeCwgeSwgYmFsbCwgYWkgfTogSVBhZGRsZU9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICBwb2ludDogeyB4LCB5IH0sXG4gICAgICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpdm90OiB7IHg6IDUsIHk6IDUwIH0sXG4gICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQm94Q29sbGlkZXIodGhpcyk7XG4gICAgdGhpcy5fYmFsbCA9IGJhbGwgPz8gbnVsbDtcbiAgICB0aGlzLl9haSA9IGFpID8/IGZhbHNlO1xuICAgIHRoaXMuY29sb3IgPSAnd2hpdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQGRlc2NyaXB0aW9uINCe0YLRgNC40YHQvtCy0YvQstCw0LXRgiDRgNCw0LrQtdGC0LrRg1xuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4IC0g0JrQvtC90YLQtdC60YHRgiDRgNC10L3QtNC10YDQuNC90LPQsFxuICAgKi9cbiAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBwaXZvdCwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHsgcG9pbnQsIHJvdGF0aW9uIH0gPSBwb3NpdGlvbjtcbiAgICBcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZShwb2ludC54ICsgcGl2b3QueCwgcG9pbnQueSArIHBpdm90LnkpO1xuICAgICAgICAgICAgY3R4LnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICAgIFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoLXBpdm90LngsIC1waXZvdC55LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC40YHRg9C10Lwg0LrQvtC70LvQsNC50LTQtdGAINC00LvRjyDQvtGC0LvQsNC00LrQuFxuICAgICAgICAgICAgaWYgKHRoaXMuZGVidWcgJiYgdGhpcy5jb2xsaWRlcikge1xuICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICAgIGNvbnN0IGJveCA9IHRoaXMuY29sbGlkZXIgYXMgQm94Q29sbGlkZXI7XG4gICAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KC1waXZvdC54LCAtcGl2b3QueSwgYm94LndpZHRoLCBib3guaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQGRlc2NyaXB0aW9uINCe0LHQvdC+0LLQu9GP0LXRgiDQv9C+0LfQuNGG0LjRjiDRgNCw0LrQtdGC0LrQuCAo0LTQu9GPINCY0JgpLlxuICAgKiBAcGFyYW0ge251bWJlcn0gX3RpbWUgLSDQlNC10LvRjNGC0LAg0LLRgNC10LzQtdC90LggKNC90LUg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPKS5cbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoX3RpbWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9haSAmJiB0aGlzLl9iYWxsKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5wb2ludC55ICs9ICh0aGlzLl9iYWxsLmdldENlbnRlcigpLnkgLSAodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQueSArIHRoaXMudHJhbnNmb3JtLmhlaWdodCAvIDIpKSAqIDAuMTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgQmFsbFxuICogQGV4dGVuZHMgR2FtZU9iamVjdFxuICogQGRlc2NyaXB0aW9uINCf0YDQtdC00YHRgtCw0LLQu9GP0LXRgiDQuNCz0YDQvtCy0L7QuSDQvNGP0YdcbiAqL1xuY2xhc3MgQmFsbCBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG4gIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gNTtcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnd2hpdGUnO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSDQndCw0YfQsNC70YzQvdCw0Y8g0LrQvtC+0YDQtNC40L3QsNGC0LAgWFxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtINCd0LDRh9Cw0LvRjNC90LDRjyDQutC+0L7RgNC00LjQvdCw0YLQsCBZXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGNvbnN0IHJhZGl1cyA9IDEwO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgcG9pbnQ6IHsgeDogeCAtIHJhZGl1cywgeTogeSAtIHJhZGl1cyB9LFxuICAgICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaXZvdDogeyB4OiByYWRpdXMsIHk6IHJhZGl1cyB9LFxuICAgICAgd2lkdGg6IHJhZGl1cyAqIDIsXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqIDIsXG4gICAgfTtcblxuICAgIHN1cGVyKHsgdHJhbnNmb3JtIH0pO1xuICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIodGhpcywgcmFkaXVzKTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiA1LCB5OiA1IH07XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAZGVzY3JpcHRpb24g0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdGCINGB0YLQvtC70LrQvdC+0LLQtdC90LjQtSDRgSDQtNGA0YPQs9C40LzQuCDQuNCz0YDQvtCy0YvQvNC4INC+0LHRitC10LrRgtCw0LzQuFxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IG90aGVyIC0g0JTRgNGD0LPQvtC5INC40LPRgNC+0LLQvtC5INC+0LHRitC10LrRgiwg0YPRh9Cw0YHRgtCy0YPRjtGJ0LjQuSDQsiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LhcbiAgICovXG4gIG9uQ29sbGlzaW9uKG90aGVyOiBHYW1lT2JqZWN0LCByZXN1bHQ6IElDb2xsaXNpb25SZXN1bHQpOiB2b2lkIHtcbiAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBQYWRkbGUgJiYgcmVzdWx0Lm5vcm1hbCkge1xuICAgICAgLy8gMS4g0KDQsNC30YDQtdGI0LXQvdC40LUg0L/RgNC+0L3QuNC60L3QvtCy0LXQvdC40Y9cbiAgICAgIGlmIChyZXN1bHQucGVuZXRyYXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQueCArPSByZXN1bHQucGVuZXRyYXRpb24ueDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ucG9pbnQueSArPSByZXN1bHQucGVuZXRyYXRpb24ueTtcbiAgICAgIH1cblxuICAgICAgLy8gMi4g0J7RgtGA0LDQttC10L3QuNC1INGB0LrQvtGA0L7RgdGC0LhcbiAgICAgIGNvbnN0IG5ld1ZlbG9jaXR5ID0gcmVmbGVjdCh0aGlzLnZlbG9jaXR5LCByZXN1bHQubm9ybWFsKTtcbiAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgICAgLy8gMy4g0KPQstC10LvQuNGH0LXQvdC40LUg0YHQutC+0YDQvtGB0YLQuCDQtNC70Y8g0LTQuNC90LDQvNC40LrQuFxuICAgICAgdGhpcy5zcGVlZCArPSAwLjE7XG4gICAgICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLnNxcnQodGhpcy52ZWxvY2l0eS54ICogdGhpcy52ZWxvY2l0eS54ICsgdGhpcy52ZWxvY2l0eS55ICogdGhpcy52ZWxvY2l0eS55KTtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9ICh0aGlzLnZlbG9jaXR5LnggLyBtYWduaXR1ZGUpICogdGhpcy5zcGVlZDtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9ICh0aGlzLnZlbG9jaXR5LnkgLyBtYWduaXR1ZGUpICogdGhpcy5zcGVlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAZGVzY3JpcHRpb24g0JLQvtC30LLRgNCw0YnQsNC10YIg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YbQtdC90YLRgNCwINC80Y/Rh9CwXG4gICAqIEByZXR1cm5zIHtWZWN0b3IyfSDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LBcbiAgICovXG4gIHB1YmxpYyBnZXRDZW50ZXIoKTogVmVjdG9yMiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LnggKyB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIHk6IHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LnkgKyB0aGlzLnJhZGl1cyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQGRlc2NyaXB0aW9uINCe0YLRgNC40YHQvtCy0YvQstCw0LXRgiDQvNGP0Ycg0L3QsCBjYW52YXNcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eCAtINCa0L7QvdGC0LXQutGB0YIg0YDQtdC90LTQtdGA0LjQvdCz0LBcbiAgICovXG4gIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgY29uc3QgY2VudGVyWCA9IHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LnggKyB0aGlzLnJhZGl1cztcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LnkgKyB0aGlzLnJhZGl1cztcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgLy8g0KDQuNGB0YPQtdC8INC60L7Qu9C70LDQudC00LXRgCDQtNC70Y8g0L7RgtC70LDQtNC60LhcbiAgICBpZiAodGhpcy5kZWJ1ZyAmJiB0aGlzLmNvbGxpZGVyKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coYGJhbGw6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy50cmFuc2Zvcm0pfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBkZXNjcmlwdGlvbiDQntCx0L3QvtCy0LvRj9C10YIg0L/QvtC30LjRhtC40Y4g0LzRj9GH0LAg0L3QsCDQvtGB0L3QvtCy0LUg0LXQs9C+INGB0LrQvtGA0L7RgdGC0LhcbiAgICogQHBhcmFtIHtudW1iZXJ9IF9kZWx0YVRpbWUgLSDQlNC10LvRjNGC0LAg0LLRgNC10LzQtdC90LggKNC90LUg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPKVxuICAgKi9cbiAgLy8g0K3RgtC+0YIg0LzQtdGC0L7QtCDQsdC+0LvRjNGI0LUg0L3QtSDQvdGD0LbQtdC9LCDRgtCw0Log0LrQsNC6IEdhbWVPYmplY3QudXBkYXRlINGC0LXQv9C10YDRjCDQtNC10LvQsNC10YIg0YLQviDQttC1INGB0LDQvNC+0LVcbiAgICAvLyB1cGRhdGUoX2RlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5wb2ludC54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICAvLyAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnBvaW50LnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIC8vIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gSUlGRSDQtNC70Y8g0LfQsNC/0YPRgdC60LAg0LjQs9GA0YtcbiAqL1xuKCgpOiB2b2lkID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBQaW5nUG9uZ0dhbWUoJ2dhbWVDYW52YXMnKTtcbiAgZ2FtZS5zdGFydCgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==