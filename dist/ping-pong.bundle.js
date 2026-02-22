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
    constructor({ canvasId, onBeforeUpdate, onBeforeDraw }) {
        /**
         * @private
         * @type {GameObject[]}
         * @description Список игровых объектов на сцене
         */
        this._gameObjects = [];
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
    }
    /**
     * @method addGameObjects
     * @param {GameObject[]} objects Объекты для добавления
     * @description Добавляет объекты на сцену
     */
    addGameObjects(objects) {
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
                if (a.collider.isCollidingWith(b.collider)) {
                    a.onCollision(b);
                    b.onCollision(a);
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
    constructor({ transform }) {
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
         * @type {(IAbstractCollider | null)}
         * @description Коллайдер объекта
         */
        this.collider = null;
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
    onCollision(_other) { }
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
        return {
            x: this.gameObject.transform.x + this.radius,
            y: this.gameObject.transform.y + this.radius,
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


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boxCircle = exports.circleCircle = exports.checkCollision = void 0;
const types_1 = __webpack_require__(/*! ./types */ "./Engine/_collider/types.ts");
/**
 * @description Проверяет столкновение между двумя коллайдерами
 * @param a Первый коллайдер
 * @param b Второй коллайдер
 * @returns true, если есть столкновение, иначе false
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
/**
 * @description Проверяет столкновение между двумя прямоугольными коллайдерами
 * @param a Первый коллайдер
 * @param b Второй коллайдер
 * @returns true, если есть столкновение, иначе false
 */
const boxBox = (a, b) => {
    const transformA = a.gameObject.transform;
    const transformB = b.gameObject.transform;
    return (transformA.x < transformB.x + b.width &&
        transformA.x + a.width > transformB.x &&
        transformA.y < transformB.y + b.height &&
        transformA.y + a.height > transformB.y);
};
/**
 * @description Проверяет столкновение между двумя круглыми коллайдерами
 * @param a Первый коллайдер
 * @param b Второй коллайдер
 * @returns true, если есть столкновение, иначе false
 */
const circleCircle = (a, b) => {
    const centerA = a.getCenter();
    const centerB = a.getCenter();
    const dx = centerA.x - centerB.x;
    const dy = centerA.y - centerB.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < a.radius + b.radius;
};
exports.circleCircle = circleCircle;
/**
 * @description Проверяет столкновение между прямоугольным и круглым коллайдерами
 * @param box Прямоугольный коллайдер
 * @param circle Круглый коллайдер
 * @returns true, если есть столкновение, иначе false
 */
const boxCircle = (box, circle) => {
    const center = circle.getCenter();
    const rect = {
        x: box.gameObject.transform.x,
        y: box.gameObject.transform.y,
        width: box.gameObject.transform.width,
        height: box.gameObject.transform.height,
    };
    const closesetX = Math.max(rect.x, Math.min(center.x, rect.x + rect.width));
    const closesetY = Math.max(rect.y, Math.min(center.y, rect.y + rect.height));
    const dx = center.x - closesetX;
    const dy = center.y - closesetY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle.radius;
};
exports.boxCircle = boxCircle;


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
        });
        this.ctx = this.canvas.getContext('2d');
        this.ball = new Ball(this.canvas.width / 2, this.canvas.height / 2);
        this.player = new Paddle({
            x: 0,
            y: this.canvas.height / 2 - 50,
        });
        this.computer = new Paddle({
            x: this.canvas.width - 10,
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
            player.transform.y -= 8;
        }
        if (keys.ArrowDown) {
            player.transform.y += 8;
        }
        if (ball.getCenter().y + ball.radius > canvas.height || ball.getCenter().y - ball.radius < 0) {
            ball.velocity.y = -ball.velocity.y;
        }
        // Проверяем, был ли забит гол
        if (ball.getCenter().x - ball.radius < 0) {
            this.computer.score++;
            this.resetBall();
        }
        else if (ball.getCenter().x + ball.radius > canvas.width) {
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
            this.player.transform.y = evt.clientY - rect.top - this.player.transform.height / 2;
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
        ball.transform.x = this.canvas.width / 2 - ball.radius;
        ball.transform.y = this.canvas.height / 2 - ball.radius;
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
            transform: { x, y, width: 10, height: 100 },
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
        const { x, y, width, height } = this.transform;
        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, width, height);
    }
    /**
     * @public
     * @description Обновляет позицию ракетки (для ИИ).
     * @param {number} _time - Дельта времени (не используется).
     */
    update(_time) {
        if (this._ai && this._ball) {
            this.transform.y += (this._ball.getCenter().y - (this.transform.y + this.transform.height / 2)) * 0.1;
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
            x: x - radius,
            y: y - radius,
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
    onCollision(other) {
        if (other instanceof Paddle) {
            let collidePoint = this.getCenter().y - (other.transform.y + other.transform.height / 2);
            collidePoint = collidePoint / (other.transform.height / 2);
            const angleRad = (Math.PI / 4) * collidePoint;
            const direction = this.transform.x < 400 ? 1 : -1;
            this.velocity.x = direction * this.speed * Math.cos(angleRad);
            this.velocity.y = this.speed * Math.sin(angleRad);
            this.speed += 0.1;
        }
    }
    /**
     * @public
     * @description Возвращает координаты центра мяча
     * @returns {Vector2} Координаты центра
     */
    getCenter() {
        return {
            x: this.transform.x + this.radius,
            y: this.transform.y + this.radius,
        };
    }
    /**
     * @public
     * @description Отрисовывает мяч на canvas
     * @param {CanvasRenderingContext2D} ctx - Контекст рендеринга
     */
    draw(ctx) {
        const centerX = this.transform.x + this.radius;
        const centerY = this.transform.y + this.radius;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }
    /**
     * @public
     * @description Обновляет позицию мяча на основе его скорости
     * @param {number} _deltaTime - Дельта времени (не используется)
     */
    update(_deltaTime) {
        this.transform.x += this.velocity.x;
        this.transform.y += this.velocity.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7R0FFRztBQUNILENBQUMsR0FBUyxFQUFFO0lBQ1YsTUFBTSxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9zdHlsZS5jc3M/ZjY5NiIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9FbmdpbmUvQ29yZS50cyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vRW5naW5lL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL0VuZ2luZS9fY29sbGlkZXIvQWJzdHJhY3QudHMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL0VuZ2luZS9fY29sbGlkZXIvQm94LnRzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9FbmdpbmUvX2NvbGxpZGVyL0NpcmNsZS50cyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vRW5naW5lL19jb2xsaWRlci9VdGlscy50cyIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lLy4vRW5naW5lL19jb2xsaWRlci9pbnRlcmZhY2VzLnRzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9FbmdpbmUvX2NvbGxpZGVyL3R5cGVzLnRzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvLi9FbmdpbmUvY29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbXBsZV9lbmdpbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGVfZW5naW5lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2ltcGxlX2VuZ2luZS8uL3BpbmctcG9uZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4jbWVudSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21lbnUgaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbiNtZW51IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOlxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcbiAgICBjb2xvciAwLjNzO1xufVxuXG4jbWVudSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5jYW52YXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uZXhpdC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOlxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcbiAgICBjb2xvciAwLjNzO1xufVxuXG4uZXhpdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7O2NBRVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCOztjQUVZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNtZW51IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21lbnUgaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI21lbnUgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246XFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcXG4gICAgY29sb3IgMC4zcztcXG59XFxuXFxuI21lbnUgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5leGl0LWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxcbiAgICBjb2xvciAwLjNzO1xcbn1cXG5cXG4uZXhpdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICcuL0dhbWVPYmplY3QnO1xuaW1wb3J0IHsgSUVuZ2luZUNvcmVPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBAY2xhc3MgRW5naW5lQ29yZVxuICogQGRlc2NyaXB0aW9uINCv0LTRgNC+INC00LLQuNC20LrQsFxuICovXG5leHBvcnQgY2xhc3MgRW5naW5lQ29yZSB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XG4gICAqIEBkZXNjcmlwdGlvbiBIVE1MLdGN0LvQtdC80LXQvdGCIGNhbnZhcy5cbiAgICovXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9XG4gICAqIEBkZXNjcmlwdGlvbiDQmtC+0L3RgtC10LrRgdGCXG4gICAqL1xuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0dhbWVPYmplY3RbXX1cbiAgICogQGRlc2NyaXB0aW9uINCh0L/QuNGB0L7QuiDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQvtCyINC90LAg0YHRhtC10L3QtVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2FtZU9iamVjdHM6IEdhbWVPYmplY3RbXSA9IFtdO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlc2NyaXB0aW9uINCY0LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGC0LXQutGD0YnQtdCz0L4g0LrQsNC00YDQsCDQsNC90LjQvNCw0YbQuNC4XG4gICAqL1xuICBwcml2YXRlIGFuaW1hdGlvbkZyYW1lSWQ6IG51bWJlciA9IDA7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7KCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkfVxuICAgKiBAZGVzY3JpcHRpb24g0KTRg9C90LrRhtC40Y8g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCwg0LLRi9C30YvQstCw0LXRgtGB0Y8g0L/QtdGA0LXQtCDQvtCx0L3QvtCy0LvQtdC90LjQtdC8XG4gICAqL1xuICBwcml2YXRlIF9vbkJlZm9yZVVwZGF0ZT86ICgpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7KCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkfVxuICAgKiBAZGVzY3JpcHRpb24g0KTRg9C90LrRhtC40Y8g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCwg0LLRi9C30YvQstCw0LXRgtGB0Y8g0L/QtdGA0LXQtCDQvtGC0YDQuNGB0L7QstC60L7QuVxuICAgKi9cbiAgcHJpdmF0ZSBfb25CZWZvcmVEcmF3PzogKCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SUVuZ2luZUNvcmVPcHRpb25zfSBvcHRpb25zINCf0LDRgNCw0LzQtdGC0YDRiyDQtNC70Y8g0Y/QtNGA0LAg0LTQstC40LbQutCwXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IGNhbnZhc0lkLCBvbkJlZm9yZVVwZGF0ZSwgb25CZWZvcmVEcmF3IH06IElFbmdpbmVDb3JlT3B0aW9ucykge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgdGhpcy5fb25CZWZvcmVVcGRhdGUgPSBvbkJlZm9yZVVwZGF0ZTtcbiAgICB0aGlzLl9vbkJlZm9yZURyYXcgPSBvbkJlZm9yZURyYXc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBhZGRHYW1lT2JqZWN0c1xuICAgKiBAcGFyYW0ge0dhbWVPYmplY3RbXX0gb2JqZWN0cyDQntCx0YrQtdC60YLRiyDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y9cbiAgICogQGRlc2NyaXB0aW9uINCU0L7QsdCw0LLQu9GP0LXRgiDQvtCx0YrQtdC60YLRiyDQvdCwINGB0YbQtdC90YNcbiAgICovXG4gIGFkZEdhbWVPYmplY3RzKG9iamVjdHM6IEdhbWVPYmplY3RbXSk6IHZvaWQge1xuICAgIHRoaXMuX2dhbWVPYmplY3RzID0gWy4uLnRoaXMuX2dhbWVPYmplY3RzLCAuLi5vYmplY3RzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlbW92ZUdhbWVPYmplY3RcbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBvYmog0J7QsdGK0LXQutGCXG4gICAqIEBkZXNjcmlwdGlvbiDQo9C00LDQu9GP0LXRgiDQvtCx0LXQutGCINGB0L4g0YHRhtC10L3Ri1xuICAgKi9cbiAgcmVtb3ZlR2FtZU9iamVjdChvYmo6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHRoaXMuX2dhbWVPYmplY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gb2JqKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAqIEBkZXNjcmlwdGlvbiDQl9Cw0L/Rg9GB0LrQsNC10YIg0LjQs9GA0L7QstC+0Lkg0YbQuNC60LtcbiAgICovXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHN0b3BcbiAgICogQGRlc2NyaXB0aW9uINCe0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC40LPRgNC+0LLQvtC5INGG0LjQutC7XG4gICAqL1xuICBzdG9wKCk6IHZvaWQge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVJZCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBjaGVja0NvbGxpc2lvbnNcbiAgICogQGRlc2NyaXB0aW9uINCf0YDQvtCy0LXRgNGP0LXRgiDQvdCw0LvQuNGH0LjQtSDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Lkg0LzQtdC20LTRgyDQstGB0LXQvNC4INC40LPRgNC+0LLRi9C80Lgg0L7QsdGK0LXQutGC0LDQvNC4XG4gICAqL1xuICBjaGVja0NvbGxpc2lvbnMoKTogdm9pZCB7XG4gICAgY29uc3Qgb2JqZWN0cyA9IHRoaXMuX2dhbWVPYmplY3RzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhID0gb2JqZWN0c1tpXTtcbiAgICAgIGlmICghYS5jb2xsaWRlciB8fCAhYS5pc0VuYWJsZWQoKSkgY29udGludWU7XG5cbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG9iamVjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgYiA9IG9iamVjdHNbal07XG5cbiAgICAgICAgaWYgKCFiLmNvbGxpZGVyIHx8ICFiLmlzRW5hYmxlZCgpKSBjb250aW51ZTtcblxuICAgICAgICBpZiAoYS5jb2xsaWRlci5pc0NvbGxpZGluZ1dpdGgoYi5jb2xsaWRlcikpIHtcbiAgICAgICAgICBhLm9uQ29sbGlzaW9uKGIpO1xuICAgICAgICAgIGIub25Db2xsaXNpb24oYSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQG1ldGhvZCBnYW1lTG9vcFxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0g0KLQtdC60YPRidC10LUg0LLRgNC10LzRj1xuICAgKiBAZGVzY3JpcHRpb24g0J7RgdC90L7QstC90L7QuSDQuNCz0YDQvtCy0L7QuSDRhtC40LrQu1xuICAgKi9cbiAgcHJpdmF0ZSBnYW1lTG9vcCh0aW1lOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5fb25CZWZvcmVVcGRhdGU/LigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9nYW1lT2JqZWN0cykge1xuICAgICAgaWYgKGl0ZW0uaXNFbmFibGVkKCkpIHtcbiAgICAgICAgaXRlbS51cGRhdGUodGltZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLl9vbkJlZm9yZURyYXc/LigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9nYW1lT2JqZWN0cykge1xuICAgICAgaWYgKGl0ZW0uaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgaXRlbS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHRoaXMuX2dhbWVPYmplY3RzLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uaXNEZXN0cm95ZWQoKSk7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0KSA9PiB0aGlzLmdhbWVMb29wKHQpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUFic3RyYWN0Q29sbGlkZXIgfSBmcm9tICdFbmdpbmUvY29sbGlkZXInO1xuaW1wb3J0IHsgSUdhbWVPYmplY3QsIElHYW1lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuL1RyYW5zZm9ybSc7XG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi9WZWN0b3IyJztcblxuLyoqXG4gKiBAY2xhc3MgR2FtZU9iamVjdFxuICogQGRlc2NyaXB0aW9uINCR0LDQt9C+0LLRi9C5INC60LvQsNGB0YEg0LTQu9GPINCy0YHQtdGFINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtC+0LJcbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3QgaW1wbGVtZW50cyBJR2FtZU9iamVjdCB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlc2NyaXB0aW9uINCj0L3QuNGH0YLQvtC20LXQvSDQu9C4INC+0LHRitC10LrRglxuICAgKi9cbiAgcHJpdmF0ZSBfZGVzdHJveWVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlc2NyaXB0aW9uINCS0LjQtNC40LzQvtGB0YLRjCDQvdCwINGB0YbQtdC90LBcbiAgICovXG4gIHByaXZhdGUgX3Zpc2liaWxpdHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVzY3JpcHRpb24g0JDQutGC0LjQstCw0YbQuNGPLCDQvdC10LDQutGC0LjQstC40YDQvtCy0LDQvdC90YvQtSDQvtCx0LXQutGC0Ysg0L3QtSDRg9GH0LDRgdGC0LLRg9GO0YIg0LIg0YDQsNGB0YfQtdGC0LDRhVxuICAgKi9cbiAgcHJpdmF0ZSBfZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7KElBYnN0cmFjdENvbGxpZGVyIHwgbnVsbCl9XG4gICAqIEBkZXNjcmlwdGlvbiDQmtC+0LvQu9Cw0LnQtNC10YAg0L7QsdGK0LXQutGC0LBcbiAgICovXG4gIGNvbGxpZGVyOiBJQWJzdHJhY3RDb2xsaWRlciB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICogQHR5cGUge1RyYW5zZm9ybX1cbiAgICogQGRlc2NyaXB0aW9uINCf0L7Qt9C40YbQuNGPINC4INGA0LDQt9C80LXRgNGLINC+0LHRitC10LrRgtCwXG4gICAqL1xuICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcbiAgLyoqXG4gICAqIEB0eXBlIHtWZWN0b3IyfVxuICAgKiBAZGVzY3JpcHRpb24g0KHQutC+0YDQvtGB0YLRjCDQvtCx0YrQtdC60YLQsFxuICAgKi9cbiAgdmVsb2NpdHk6IFZlY3RvcjIgPSB7IHg6IDAsIHk6IDAgfTtcbiAgLyoqXG4gICAqIEB0eXBlIHtWZWN0b3IyfVxuICAgKiBAZGVzY3JpcHRpb24g0KPRgdC60L7RgNC10L3QuNC1INC+0LHRitC10LrRgtCwXG4gICAqL1xuICBhY2NlbGVyYXRpb246IFZlY3RvcjIgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SUdhbWVPYmplY3RPcHRpb25zfSDQmtC+0L3RhNC40LPRg9GA0LDRhtC40Y9cbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdHJhbnNmb3JtIH06IElHYW1lT2JqZWN0T3B0aW9ucykge1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZW5hYmxlXG4gICAqIEBkZXNjcmlwdGlvbiDQktC60LvRjtGH0LDQtdGCINC+0LHRitC10LrRglxuICAgKi9cbiAgZW5hYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGlzYWJsZVxuICAgKiBAZGVzY3JpcHRpb24g0JLRi9C60LvRjtGH0LDQtdGCINC+0LHRitC10LrRglxuICAgKi9cbiAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkZXN0cm95XG4gICAqIEBkZXNjcmlwdGlvbiDQn9C+0LzQtdGH0LDQtdGCINC+0LHRitC10LrRgiDQutCw0Log0YPQvdC40YfRgtC+0LbQtdC90L3Ri9C5XG4gICAqL1xuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBpc0VuYWJsZWRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBkZXNjcmlwdGlvbiDQktC+0LfQstGA0LDRidCw0LXRgiwg0LDQutGC0LjQstC10L0g0LvQuCDQvtCx0YrQtdC60YJcbiAgICovXG4gIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGlzRGVzdHJveWVkXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAZGVzY3JpcHRpb24g0JLQvtC30LLRgNCw0YnQsNC10YIsINGD0L3QuNGH0YLQvtC20LXQvSDQu9C4INC+0LHRitC10LrRglxuICAgKi9cbiAgaXNEZXN0cm95ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGlzVmlzaWJsZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQGRlc2NyaXB0aW9uINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCLCDQstC40LTQuNC8INC70Lgg0L7QsdGK0LXQutGCXG4gICAqL1xuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2liaWxpdHk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzZXRWaXNpYmlsaXR5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmlzaWJpbGl0eVxuICAgKiBAZGVzY3JpcHRpb24g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LLQuNC00LjQvNC+0YHRgtGMINC+0LHRitC10LrRgtCwXG4gICAqL1xuICBzZXRWaXNpYmlsaXR5KHZpc2liaWxpdHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl92aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFUaW1lXG4gICAqIEBkZXNjcmlwdGlvbiDQktGL0LfRi9Cy0LDQtdGC0YHRjyDQutCw0LbQtNGL0Lkg0LrQsNC00YBcbiAgICovXG4gIHVwZGF0ZShfZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5hY2NlbGVyYXRpb24ueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24ueTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRyYXdcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxuICAgKiBAZGVzY3JpcHRpb24g0JLRi9C30YvQstCw0LXRgtGB0Y8g0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuCDQvtCx0YrQtdC60YLQsFxuICAgKi9cbiAgZHJhdyhfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgb25Db2xsaXNpb25cbiAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBvdGhlclxuICAgKiBAZGVzY3JpcHRpb24g0JLRi9C30YvQstCw0LXRgtGB0Y8g0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuCDRgSDQtNGA0YPQs9C40Lwg0L7QsdGK0LXQutGC0L7QvC5cbiAgICovXG4gIG9uQ29sbGlzaW9uKF9vdGhlcjogR2FtZU9iamVjdCk6IHZvaWQge31cbn1cbiIsImltcG9ydCB7IElBYnN0cmFjdENvbGxpZGVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSAnRW5naW5lL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQ29sbGlkZXJUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uINCQ0LHRgdGC0YDQsNC60YLQvdGL0Lkg0LrQu9Cw0YHRgSDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICogQGltcGxlbWVudHMgSUFic3RyYWN0Q29sbGlkZXJcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0IGltcGxlbWVudHMgSUFic3RyYWN0Q29sbGlkZXIge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCi0LjQvyDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKi9cbiAgYWJzdHJhY3QgdHlwZTogQ29sbGlkZXJUeXBlO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gZ2FtZU9iamVjdCDQmNCz0YDQvtCy0L7QuSDQvtCx0YrQtdC60YIsINC6INC60L7RgtC+0YDQvtC80YMg0L/RgNC40LLRj9C30LDQvSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdCkge1xuICAgIHRoaXMuZ2FtZU9iamVjdC5jb2xsaWRlciA9IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCf0YDQvtCy0LXRgNGP0LXRgiwg0YHRgtCw0LvQutC40LLQsNC10YLRgdGPINC70Lgg0Y3RgtC+0YIg0LrQvtC70LvQsNC50LTQtdGAINGBINC00YDRg9Cz0LjQvFxuICAgKiBAcGFyYW0gb3RoZXIg0JTRgNGD0LPQvtC5INC60L7Qu9C70LDQudC00LXRgFxuICAgKiBAcmV0dXJucyB0cnVlLCDQtdGB0LvQuCDQtdGB0YLRjCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUsINC40L3QsNGH0LUgZmFsc2VcbiAgICovXG4gIGFic3RyYWN0IGlzQ29sbGlkaW5nV2l0aChvdGhlcjogSUFic3RyYWN0Q29sbGlkZXIpOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHsgSUdhbWVPYmplY3QgfSBmcm9tICdFbmdpbmUvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBYnN0cmFjdCBhcyBBYnN0cmFjdENvbGxpZGVyIH0gZnJvbSAnLi9BYnN0cmFjdCc7XG5pbXBvcnQgeyBJQWJzdHJhY3RDb2xsaWRlciwgSUJveENvbGxpZGVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGNoZWNrQ29sbGlzaW9uIH0gZnJvbSAnLi9VdGlscyc7XG5pbXBvcnQgeyBDb2xsaWRlclR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g0J/RgNGP0LzQvtGD0LPQvtC70YzQvdGL0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAZXh0ZW5kcyBBYnN0cmFjdENvbGxpZGVyXG4gKiBAaW1wbGVtZW50cyBJQm94Q29sbGlkZXJcbiAqL1xuZXhwb3J0IGNsYXNzIEJveENvbGxpZGVyIGV4dGVuZHMgQWJzdHJhY3RDb2xsaWRlciBpbXBsZW1lbnRzIElCb3hDb2xsaWRlciB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24g0KjQuNGA0LjQvdCwINC60L7Qu9C70LDQudC00LXRgNCwXG4gICAqL1xuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQktGL0YHQvtGC0LAg0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQotC40L8g0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIHB1YmxpYyB0eXBlOiBDb2xsaWRlclR5cGUgPSBDb2xsaWRlclR5cGUuQm94O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gZ2FtZU9iamVjdCDQmNCz0YDQvtCy0L7QuSDQvtCx0YrQtdC60YIsINC6INC60L7RgtC+0YDQvtC80YMg0L/RgNC40LLRj9C30LDQvSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICogQHBhcmFtIHdpZHRoINCo0LjRgNC40L3QsCDQutC+0LvQu9Cw0LnQtNC10YDQsCwg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0YjQuNGA0LjQvdCwINC+0LHQtdC60YLQsFxuICAgKiBAcGFyYW0gaGVpZ2h0INCS0YvRgdC+0YLQsCDQutC+0LvQu9Cw0LnQtNC10YDQsCwg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LLRi9GB0L7RgtCwINC+0LHRitC10LrRgtCwXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZ2FtZU9iamVjdDogSUdhbWVPYmplY3QsXG4gICAgd2lkdGg/OiBudW1iZXIsXG4gICAgaGVpZ2h0PzogbnVtYmVyLFxuICApIHtcbiAgICBzdXBlcihnYW1lT2JqZWN0KTtcblxuICAgIHRoaXMud2lkdGggPSB3aWR0aCA/PyBnYW1lT2JqZWN0LnRyYW5zZm9ybS53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCA/PyBnYW1lT2JqZWN0LnRyYW5zZm9ybS5oZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCf0YDQvtCy0LXRgNGP0LXRgiwg0YHRgtCw0LvQutC40LLQsNC10YLRgdGPINC70Lgg0Y3RgtC+0YIg0LrQvtC70LvQsNC50LTQtdGAINGBINC00YDRg9Cz0LjQvFxuICAgKiBAcGFyYW0gb3RoZXIg0JTRgNGD0LPQvtC5INC60L7Qu9C70LDQudC00LXRgFxuICAgKiBAcmV0dXJucyB0cnVlLCDQtdGB0LvQuCDQtdGB0YLRjCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUsINC40L3QsNGH0LUgZmFsc2VcbiAgICovXG4gIGlzQ29sbGlkaW5nV2l0aChvdGhlcjogSUFic3RyYWN0Q29sbGlkZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2hlY2tDb2xsaXNpb24odGhpcywgb3RoZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnRW5naW5lL1ZlY3RvcjInO1xuaW1wb3J0IHsgQWJzdHJhY3QgfSBmcm9tICcuL0Fic3RyYWN0JztcbmltcG9ydCB7IElBYnN0cmFjdENvbGxpZGVyLCBJQ2lyY2xlQ29sbGlkZXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSUdhbWVPYmplY3QgfSBmcm9tICdFbmdpbmUvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBjaGVja0NvbGxpc2lvbiB9IGZyb20gJy4vVXRpbHMnO1xuaW1wb3J0IHsgQ29sbGlkZXJUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uINCa0YDRg9Cz0LvRi9C5INC60L7Qu9C70LDQudC00LXRgFxuICogQGV4dGVuZHMgQWJzdHJhY3RcbiAqIEBpbXBsZW1lbnRzIElDaXJjbGVDb2xsaWRlclxuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ29sbGlkZXIgZXh0ZW5kcyBBYnN0cmFjdCBpbXBsZW1lbnRzIElDaXJjbGVDb2xsaWRlciB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24g0KLQuNC/INC60L7Qu9C70LDQudC00LXRgNCwXG4gICAqL1xuICByZWFkb25seSB0eXBlOiBDb2xsaWRlclR5cGUgPSBDb2xsaWRlclR5cGUuQ2lyY2xlO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCg0LDQtNC40YPRgSDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKi9cbiAgcmFkaXVzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBnYW1lT2JqZWN0INCY0LPRgNC+0LLQvtC5INC+0LHRitC10LrRgiwg0Log0LrQvtGC0L7RgNC+0LzRgyDQv9GA0LjQstGP0LfQsNC9INC60L7Qu9C70LDQudC00LXRgFxuICAgKiBAcGFyYW0gcmFkaXVzINCg0LDQtNC40YPRgSDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0LFxuICAgIHJhZGl1czogbnVtYmVyLFxuICApIHtcbiAgICBzdXBlcihnYW1lT2JqZWN0KTtcblxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQktC+0LfQstGA0LDRidCw0LXRgiDRhtC10L3RgtGAINC60L7Qu9C70LDQudC00LXRgNCwXG4gICAqIEByZXR1cm5zINCa0L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsFxuICAgKi9cbiAgZ2V0Q2VudGVyKCk6IFZlY3RvcjIge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLmdhbWVPYmplY3QudHJhbnNmb3JtLnggKyB0aGlzLnJhZGl1cyxcbiAgICAgIHk6IHRoaXMuZ2FtZU9iamVjdC50cmFuc2Zvcm0ueSArIHRoaXMucmFkaXVzLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCf0YDQvtCy0LXRgNGP0LXRgiwg0YHRgtCw0LvQutC40LLQsNC10YLRgdGPINC70Lgg0Y3RgtC+0YIg0LrQvtC70LvQsNC50LTQtdGAINGBINC00YDRg9Cz0LjQvFxuICAgKiBAcGFyYW0gb3RoZXIg0JTRgNGD0LPQvtC5INC60L7Qu9C70LDQudC00LXRgFxuICAgKiBAcmV0dXJucyB0cnVlLCDQtdGB0LvQuCDQtdGB0YLRjCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUsINC40L3QsNGH0LUgZmFsc2VcbiAgICovXG4gIGlzQ29sbGlkaW5nV2l0aChvdGhlcjogSUFic3RyYWN0Q29sbGlkZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2hlY2tDb2xsaXNpb24odGhpcywgb3RoZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gJy4vQm94JztcbmltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSAnLi9DaXJjbGUnO1xuaW1wb3J0IHsgSUFic3RyYWN0Q29sbGlkZXIsIElCb3hDb2xsaWRlciB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDb2xsaWRlclR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g0J/RgNC+0LLQtdGA0Y/QtdGCINGB0YLQvtC70LrQvdC+0LLQtdC90LjQtSDQvNC10LbQtNGDINC00LLRg9C80Y8g0LrQvtC70LvQsNC50LTQtdGA0LDQvNC4XG4gKiBAcGFyYW0gYSDQn9C10YDQstGL0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAcGFyYW0gYiDQktGC0L7RgNC+0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAcmV0dXJucyB0cnVlLCDQtdGB0LvQuCDQtdGB0YLRjCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUsINC40L3QsNGH0LUgZmFsc2VcbiAqIEB0aHJvd3Mg0J7RiNC40LHQutCwLCDQtdGB0LvQuCDQvdC1INC90LDQudC00LXQvdCwINGE0YPQvdC60YbQuNGPINC00LvRjyDQvtCx0YDQsNCx0L7RgtC60Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNGPXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVja0NvbGxpc2lvbiA9IChhOiBJQWJzdHJhY3RDb2xsaWRlciwgYjogSUFic3RyYWN0Q29sbGlkZXIpOiBib29sZWFuID0+IHtcbiAgc3dpdGNoIChhLnR5cGUgKyBiLnR5cGUpIHtcbiAgICBjYXNlIENvbGxpZGVyVHlwZS5Cb3ggKyBDb2xsaWRlclR5cGUuQm94OlxuICAgICAgcmV0dXJuIGJveEJveChhIGFzIEJveENvbGxpZGVyLCBiIGFzIEJveENvbGxpZGVyKTtcbiAgICBjYXNlIENvbGxpZGVyVHlwZS5DaXJjbGUgKyBDb2xsaWRlclR5cGUuQ2lyY2xlOlxuICAgICAgcmV0dXJuIGNpcmNsZUNpcmNsZShhIGFzIENpcmNsZUNvbGxpZGVyLCBiIGFzIENpcmNsZUNvbGxpZGVyKTtcbiAgICBjYXNlIENvbGxpZGVyVHlwZS5Cb3ggKyBDb2xsaWRlclR5cGUuQ2lyY2xlOlxuICAgICAgcmV0dXJuIGJveENpcmNsZShhIGFzIEJveENvbGxpZGVyLCBiIGFzIENpcmNsZUNvbGxpZGVyKTtcbiAgICBjYXNlIENvbGxpZGVyVHlwZS5DaXJjbGUgKyBDb2xsaWRlclR5cGUuQm94OlxuICAgICAgcmV0dXJuIGJveENpcmNsZShiIGFzIEJveENvbGxpZGVyLCBhIGFzIENpcmNsZUNvbGxpZGVyKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgRW5naW5lL2NvbGxpZGVyOlV0aWxzLmNoZWNrQ29sbGlzaW9uLCDQvdC1INC90LDQudC00LXQvdCwINGE0YPQvdC60YbQuNGPINC00LvRjyDQvtCx0YDQsNCx0L7RgtC60Lgg0LrQvtC70LjQt9C40LkgJHthLnR5cGV9IHggJHtiLnR5cGV9YCxcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uINCf0YDQvtCy0LXRgNGP0LXRgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUg0LzQtdC20LTRgyDQtNCy0YPQvNGPINC/0YDRj9C80L7Rg9Cz0L7Qu9GM0L3Ri9C80Lgg0LrQvtC70LvQsNC50LTQtdGA0LDQvNC4XG4gKiBAcGFyYW0gYSDQn9C10YDQstGL0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAcGFyYW0gYiDQktGC0L7RgNC+0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAcmV0dXJucyB0cnVlLCDQtdGB0LvQuCDQtdGB0YLRjCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUsINC40L3QsNGH0LUgZmFsc2VcbiAqL1xuY29uc3QgYm94Qm94ID0gKGE6IElCb3hDb2xsaWRlciwgYjogSUJveENvbGxpZGVyKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHRyYW5zZm9ybUEgPSBhLmdhbWVPYmplY3QudHJhbnNmb3JtO1xuICBjb25zdCB0cmFuc2Zvcm1CID0gYi5nYW1lT2JqZWN0LnRyYW5zZm9ybTtcbiAgcmV0dXJuIChcbiAgICB0cmFuc2Zvcm1BLnggPCB0cmFuc2Zvcm1CLnggKyBiLndpZHRoICYmXG4gICAgdHJhbnNmb3JtQS54ICsgYS53aWR0aCA+IHRyYW5zZm9ybUIueCAmJlxuICAgIHRyYW5zZm9ybUEueSA8IHRyYW5zZm9ybUIueSArIGIuaGVpZ2h0ICYmXG4gICAgdHJhbnNmb3JtQS55ICsgYS5oZWlnaHQgPiB0cmFuc2Zvcm1CLnlcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uINCf0YDQvtCy0LXRgNGP0LXRgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUg0LzQtdC20LTRgyDQtNCy0YPQvNGPINC60YDRg9Cz0LvRi9C80Lgg0LrQvtC70LvQsNC50LTQtdGA0LDQvNC4XG4gKiBAcGFyYW0gYSDQn9C10YDQstGL0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAcGFyYW0gYiDQktGC0L7RgNC+0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gKiBAcmV0dXJucyB0cnVlLCDQtdGB0LvQuCDQtdGB0YLRjCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUsINC40L3QsNGH0LUgZmFsc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGNpcmNsZUNpcmNsZSA9IChhOiBDaXJjbGVDb2xsaWRlciwgYjogQ2lyY2xlQ29sbGlkZXIpOiBib29sZWFuID0+IHtcbiAgY29uc3QgY2VudGVyQSA9IGEuZ2V0Q2VudGVyKCk7XG4gIGNvbnN0IGNlbnRlckIgPSBhLmdldENlbnRlcigpO1xuXG4gIGNvbnN0IGR4ID0gY2VudGVyQS54IC0gY2VudGVyQi54O1xuICBjb25zdCBkeSA9IGNlbnRlckEueSAtIGNlbnRlckIueTtcblxuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIHJldHVybiBkaXN0YW5jZSA8IGEucmFkaXVzICsgYi5yYWRpdXM7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQn9GA0L7QstC10YDRj9C10YIg0YHRgtC+0LvQutC90L7QstC10L3QuNC1INC80LXQttC00YMg0L/RgNGP0LzQvtGD0LPQvtC70YzQvdGL0Lwg0Lgg0LrRgNGD0LPQu9GL0Lwg0LrQvtC70LvQsNC50LTQtdGA0LDQvNC4XG4gKiBAcGFyYW0gYm94INCf0YDRj9C80L7Rg9Cz0L7Qu9GM0L3Ri9C5INC60L7Qu9C70LDQudC00LXRgFxuICogQHBhcmFtIGNpcmNsZSDQmtGA0YPQs9C70YvQuSDQutC+0LvQu9Cw0LnQtNC10YBcbiAqIEByZXR1cm5zIHRydWUsINC10YHQu9C4INC10YHRgtGMINGB0YLQvtC70LrQvdC+0LLQtdC90LjQtSwg0LjQvdCw0YfQtSBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgYm94Q2lyY2xlID0gKGJveDogQm94Q29sbGlkZXIsIGNpcmNsZTogQ2lyY2xlQ29sbGlkZXIpOiBib29sZWFuID0+IHtcbiAgY29uc3QgY2VudGVyID0gY2lyY2xlLmdldENlbnRlcigpO1xuXG4gIGNvbnN0IHJlY3QgPSB7XG4gICAgeDogYm94LmdhbWVPYmplY3QudHJhbnNmb3JtLngsXG4gICAgeTogYm94LmdhbWVPYmplY3QudHJhbnNmb3JtLnksXG4gICAgd2lkdGg6IGJveC5nYW1lT2JqZWN0LnRyYW5zZm9ybS53aWR0aCxcbiAgICBoZWlnaHQ6IGJveC5nYW1lT2JqZWN0LnRyYW5zZm9ybS5oZWlnaHQsXG4gIH07XG5cbiAgY29uc3QgY2xvc2VzZXRYID0gTWF0aC5tYXgocmVjdC54LCBNYXRoLm1pbihjZW50ZXIueCwgcmVjdC54ICsgcmVjdC53aWR0aCkpO1xuICBjb25zdCBjbG9zZXNldFkgPSBNYXRoLm1heChyZWN0LnksIE1hdGgubWluKGNlbnRlci55LCByZWN0LnkgKyByZWN0LmhlaWdodCkpO1xuXG4gIGNvbnN0IGR4ID0gY2VudGVyLnggLSBjbG9zZXNldFg7XG4gIGNvbnN0IGR5ID0gY2VudGVyLnkgLSBjbG9zZXNldFk7XG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICByZXR1cm4gZGlzdGFuY2UgPCBjaXJjbGUucmFkaXVzO1xufTtcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICdFbmdpbmUvVmVjdG9yMic7XG5pbXBvcnQgeyBDb2xsaWRlclR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSAnRW5naW5lL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQmNC90YLQtdGA0YTQtdC50YEg0LTQu9GPINCw0LHRgdGC0YDQsNC60YLQvdC+0LPQviDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdENvbGxpZGVyIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQotC40L8g0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIHR5cGU6IENvbGxpZGVyVHlwZTtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQmNCz0YDQvtCy0L7QuSDQvtCx0YrQtdC60YIsINC6INC60L7RgtC+0YDQvtC80YMg0L/RgNC40LLRj9C30LDQvSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICovXG4gIGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0O1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCf0YDQvtCy0LXRgNGP0LXRgiwg0YHRgtCw0LvQutC40LLQsNC10YLRgdGPINC70Lgg0Y3RgtC+0YIg0LrQvtC70LvQsNC50LTQtdGAINGBINC00YDRg9Cz0LjQvFxuICAgKiBAcGFyYW0gb3RoZXIg0JTRgNGD0LPQvtC5INC60L7Qu9C70LDQudC00LXRgFxuICAgKiBAcmV0dXJucyB0cnVlLCDQtdGB0LvQuCDQtdGB0YLRjCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUsINC40L3QsNGH0LUgZmFsc2VcbiAgICovXG4gIGlzQ29sbGlkaW5nV2l0aChvdGhlcjogSUFic3RyYWN0Q29sbGlkZXIpOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQmNC90YLQtdGA0YTQtdC50YEg0LTQu9GPINC/0YDRj9C80L7Rg9Cz0L7Qu9GM0L3QvtCz0L4g0LrQvtC70LvQsNC50LTQtdGA0LBcbiAqIEBleHRlbmRzIElBYnN0cmFjdENvbGxpZGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJveENvbGxpZGVyIGV4dGVuZHMgSUFic3RyYWN0Q29sbGlkZXIge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCo0LjRgNC40L3QsCDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQktGL0YHQvtGC0LAg0LrQvtC70LvQsNC50LTQtdGA0LBcbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDQmNC90YLQtdGA0YTQtdC50YEg0LTQu9GPINC60YDRg9Cz0LvQvtCz0L4g0LrQvtC70LvQsNC50LTQtdGA0LBcbiAqIEBleHRlbmRzIElBYnN0cmFjdENvbGxpZGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNpcmNsZUNvbGxpZGVyIGV4dGVuZHMgSUFic3RyYWN0Q29sbGlkZXIge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uINCg0LDQtNC40YPRgSDQutC+0LvQu9Cw0LnQtNC10YDQsFxuICAgKi9cbiAgcmFkaXVzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQktC+0LfQstGA0LDRidCw0LXRgiDRhtC10L3RgtGAINC60L7Qu9C70LDQudC00LXRgNCwXG4gICAqIEByZXR1cm5zINCa0L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsFxuICAgKi9cbiAgZ2V0Q2VudGVyKCk6IFZlY3RvcjI7XG59XG4iLCIvKipcbiAqIEBkZXNjcmlwdGlvbiDQotC40L/RiyDQutC+0LvQu9Cw0LnQtNC10YDQvtCyXG4gKi9cbmV4cG9ydCBlbnVtIENvbGxpZGVyVHlwZSB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24g0J/RgNGP0LzQvtGD0LPQvtC70YzQvdGL0Lkg0LrQvtC70LvQsNC50LTQtdGAXG4gICAqL1xuICBCb3ggPSAnYm94JyxcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiDQmtGA0YPQs9C70YvQuSDQutC+0LvQu9Cw0LnQtNC10YBcbiAgICovXG4gIENpcmNsZSA9ICdjaXJjbGUnLFxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9fY29sbGlkZXIvQWJzdHJhY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9fY29sbGlkZXIvQm94JztcbmV4cG9ydCAqIGZyb20gJy4vX2NvbGxpZGVyL0NpcmNsZSc7XG5leHBvcnQgKiBmcm9tICcuL19jb2xsaWRlci9VdGlscyc7XG5leHBvcnQgKiBmcm9tICcuL19jb2xsaWRlci9pbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vX2NvbGxpZGVyL3R5cGVzJztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgRW5naW5lQ29yZSB9IGZyb20gJ0VuZ2luZS9Db3JlJztcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICdFbmdpbmUvR2FtZU9iamVjdCc7XG5pbXBvcnQgeyBCb3hDb2xsaWRlciwgQ2lyY2xlQ29sbGlkZXIgfSBmcm9tICdFbmdpbmUvY29sbGlkZXInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnRW5naW5lL1ZlY3RvcjInO1xuXG5pbnRlcmZhY2UgSVBhZGRsZU9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgYmFsbD86IEJhbGw7XG4gIGFpPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAY2xhc3MgUGluZ1BvbmdHYW1lXG4gKiDQntGB0L3QvtCy0L3QvtC5INC60LvQsNGB0YEg0LjQs9GA0YsgXCLQn9C40L3Qsy3Qv9C+0L3Qs1wiLlxuICovXG5jbGFzcyBQaW5nUG9uZ0dhbWUge1xuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgZW5naW5lOiBFbmdpbmVDb3JlO1xuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIHBsYXllcjogUGFkZGxlO1xuICBwcml2YXRlIGNvbXB1dGVyOiBQYWRkbGU7XG4gIHByaXZhdGUgYmFsbDogQmFsbDtcbiAgcHJpdmF0ZSBrZXlzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHtcbiAgICBBcnJvd1VwOiBmYWxzZSxcbiAgICBBcnJvd0Rvd246IGZhbHNlLFxuICB9O1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhbnZhc0lkINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGN0LvQtdC80LXQvdGC0LAgY2FudmFzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYW52YXNJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgdGhpcy5lbmdpbmUgPSBuZXcgRW5naW5lQ29yZSh7XG4gICAgICBjYW52YXNJZCxcbiAgICAgIG9uQmVmb3JlVXBkYXRlOiB0aGlzLl9vbkJlZm9yZVVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgb25CZWZvcmVEcmF3OiB0aGlzLl9vbkJlZm9yZURyYXcuYmluZCh0aGlzKSxcbiAgICB9KTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQYWRkbGUoe1xuICAgICAgeDogMCxcbiAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA1MCxcbiAgICB9KTtcbiAgICB0aGlzLmNvbXB1dGVyID0gbmV3IFBhZGRsZSh7XG4gICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAtIDEwLFxuICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUwLFxuICAgICAgYWk6IHRydWUsXG4gICAgICBiYWxsOiB0aGlzLmJhbGwsXG4gICAgfSk7XG5cbiAgICB0aGlzLnBsYXllci5lbmFibGUoKTtcbiAgICB0aGlzLnBsYXllci5zZXRWaXNpYmlsaXR5KHRydWUpO1xuICAgIHRoaXMuY29tcHV0ZXIuZW5hYmxlKCk7XG4gICAgdGhpcy5jb21wdXRlci5zZXRWaXNpYmlsaXR5KHRydWUpO1xuICAgIHRoaXMuYmFsbC5lbmFibGUoKTtcbiAgICB0aGlzLmJhbGwuc2V0VmlzaWJpbGl0eSh0cnVlKTtcblxuICAgIHRoaXMuZW5naW5lLmFkZEdhbWVPYmplY3RzKFt0aGlzLnBsYXllciwgdGhpcy5jb21wdXRlciwgdGhpcy5iYWxsXSk7XG5cbiAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBkZXNjcmlwdGlvbiDQntGC0YDQuNGB0L7QstGL0LLQsNC10YIg0YTQvtC9INC4INGB0YfQtdGCXG4gICAqL1xuICBwcm90ZWN0ZWQgX29uQmVmb3JlRHJhdygpOiB2b2lkIHtcbiAgICAvLyDQoNC40YHRg9C10Lwg0YTQvtC9XG4gICAgdGhpcy5kcmF3UmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCAnYmxhY2snKTtcblxuICAgIC8vINCg0LjRgdGD0LXQvCDRgdGH0LXRglxuICAgIHRoaXMuZHJhd1RleHQodGhpcy5wbGF5ZXIuc2NvcmUudG9TdHJpbmcoKSwgdGhpcy5jYW52YXMud2lkdGggLyA0LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyA1LCAnd2hpdGUnKTtcbiAgICB0aGlzLmRyYXdUZXh0KHRoaXMuY29tcHV0ZXIuc2NvcmUudG9TdHJpbmcoKSwgKDMgKiB0aGlzLmNhbnZhcy53aWR0aCkgLyA0LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyA1LCAnd2hpdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBkZXNjcmlwdGlvbiDQntCx0L3QvtCy0LvRj9C10YIg0LTQstC40LbQtdC90LjQtSDQuNCz0YDQvtC60LAg0Lgg0L/RgNC+0LLQtdGA0Y/QtdGCLCDQt9Cw0LHQuNGCINC70Lgg0LPQvtC7LlxuICAgKi9cbiAgcHJvdGVjdGVkIF9vbkJlZm9yZVVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBsYXllciwgYmFsbCwga2V5cywgY2FudmFzIH0gPSB0aGlzO1xuXG4gICAgaWYgKGtleXMuQXJyb3dVcCkge1xuICAgICAgcGxheWVyLnRyYW5zZm9ybS55IC09IDg7XG4gICAgfVxuICAgIGlmIChrZXlzLkFycm93RG93bikge1xuICAgICAgcGxheWVyLnRyYW5zZm9ybS55ICs9IDg7XG4gICAgfVxuXG4gICAgaWYgKGJhbGwuZ2V0Q2VudGVyKCkueSArIGJhbGwucmFkaXVzID4gY2FudmFzLmhlaWdodCB8fCBiYWxsLmdldENlbnRlcigpLnkgLSBiYWxsLnJhZGl1cyA8IDApIHtcbiAgICAgIGJhbGwudmVsb2NpdHkueSA9IC1iYWxsLnZlbG9jaXR5Lnk7XG4gICAgfVxuXG4gICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQsdGL0Lsg0LvQuCDQt9Cw0LHQuNGCINCz0L7Qu1xuICAgIGlmIChiYWxsLmdldENlbnRlcigpLnggLSBiYWxsLnJhZGl1cyA8IDApIHtcbiAgICAgIHRoaXMuY29tcHV0ZXIuc2NvcmUrKztcbiAgICAgIHRoaXMucmVzZXRCYWxsKCk7XG4gICAgfSBlbHNlIGlmIChiYWxsLmdldENlbnRlcigpLnggKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgcGxheWVyLnNjb3JlKys7XG4gICAgICB0aGlzLnJlc2V0QmFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24g0JfQsNC/0YPRgdC60LDQtdGCINC40LPRgNC+0LLQvtC5INC00LLQuNC20L7QulxuICAgKi9cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5lbmdpbmUuc3RhcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24g0J3QsNGB0YLRgNCw0LjQstCw0LXRgiDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGB0L7QsdGL0YLQuNC5INC80YvRiNC4INC4INC60LvQsNCy0LjQsNGC0YPRgNGLXG4gICAqL1xuICBwcml2YXRlIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5wbGF5ZXIudHJhbnNmb3JtLnkgPSBldnQuY2xpZW50WSAtIHJlY3QudG9wIC0gdGhpcy5wbGF5ZXIudHJhbnNmb3JtLmhlaWdodCAvIDI7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZiAodGhpcy5rZXlzLmhhc093blByb3BlcnR5KGUua2V5KSkge1xuICAgICAgICB0aGlzLmtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBpZiAodGhpcy5rZXlzLmhhc093blByb3BlcnR5KGUua2V5KSkge1xuICAgICAgICB0aGlzLmtleXNbZS5rZXldID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC80Y/RhyDQsiDRhtC10L3RgtGAINC/0L7Qu9GPXG4gICAqL1xuICBwcml2YXRlIHJlc2V0QmFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGJhbGwgfSA9IHRoaXM7XG5cbiAgICBiYWxsLnRyYW5zZm9ybS54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyIC0gYmFsbC5yYWRpdXM7XG4gICAgYmFsbC50cmFuc2Zvcm0ueSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSBiYWxsLnJhZGl1cztcbiAgICBiYWxsLnNwZWVkID0gNTtcbiAgICBiYWxsLnZlbG9jaXR5LnggPSAtYmFsbC52ZWxvY2l0eS54O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiDQoNC40YHRg9C10YIg0L/RgNGP0LzQvtGD0LPQvtC70YzQvdC40Log0L3QsCBjYW52YXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSDQmtC+0L7RgNC00LjQvdCw0YLQsCBYXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0g0JrQvtC+0YDQtNC40L3QsNGC0LAgWVxuICAgKiBAcGFyYW0ge251bWJlcn0gdyAtINCo0LjRgNC40L3QsFxuICAgKiBAcGFyYW0ge251bWJlcn0gaCAtINCS0YvRgdC+0YLQsFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSDQptCy0LXRglxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3UmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24g0KDQuNGB0YPQtdGCINGC0LXQutGB0YIg0L3QsCBjYW52YXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSDQotC10LrRgdGCINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0g0JrQvtC+0YDQtNC40L3QsNGC0LAgWFxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtINCa0L7QvtGA0LTQuNC90LDRgtCwIFlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0g0KbQstC10YJcbiAgICovXG4gIHByaXZhdGUgZHJhd1RleHQodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnNzVweCBmYW50YXN5JztcbiAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBQYWRkbGVcbiAqIEBleHRlbmRzIEdhbWVPYmplY3RcbiAqIEBkZXNjcmlwdGlvbiDQn9GA0LXQtNGB0YLQsNCy0LvRj9C10YIg0YDQsNC60LXRgtC60YMg0LjQs9GA0L7QutCwLlxuICovXG5jbGFzcyBQYWRkbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG4gIHB1YmxpYyBzY29yZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfYmFsbDogQmFsbCB8IG51bGw7XG4gIHByaXZhdGUgX2FpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtJUGFkZGxlT3B0aW9uc30gb3B0aW9ucyAtINCe0L/RhtC40Lgg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0YDQsNC60LXRgtC60LguXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHgsIHksIGJhbGwsIGFpIH06IElQYWRkbGVPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdHJhbnNmb3JtOiB7IHgsIHksIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMDAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQm94Q29sbGlkZXIodGhpcyk7XG4gICAgdGhpcy5fYmFsbCA9IGJhbGwgPz8gbnVsbDtcbiAgICB0aGlzLl9haSA9IGFpID8/IGZhbHNlO1xuICAgIHRoaXMuY29sb3IgPSAnd2hpdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQGRlc2NyaXB0aW9uINCe0YLRgNC40YHQvtCy0YvQstCw0LXRgiDRgNCw0LrQtdGC0LrRg1xuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4IC0g0JrQvtC90YLQtdC60YHRgiDRgNC10L3QtNC10YDQuNC90LPQsFxuICAgKi9cbiAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMudHJhbnNmb3JtO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBkZXNjcmlwdGlvbiDQntCx0L3QvtCy0LvRj9C10YIg0L/QvtC30LjRhtC40Y4g0YDQsNC60LXRgtC60LggKNC00LvRjyDQmNCYKS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IF90aW1lIC0g0JTQtdC70YzRgtCwINCy0YDQtdC80LXQvdC4ICjQvdC1INC40YHQv9C+0LvRjNC30YPQtdGC0YHRjykuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKF90aW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYWkgJiYgdGhpcy5fYmFsbCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0ueSArPSAodGhpcy5fYmFsbC5nZXRDZW50ZXIoKS55IC0gKHRoaXMudHJhbnNmb3JtLnkgKyB0aGlzLnRyYW5zZm9ybS5oZWlnaHQgLyAyKSkgKiAwLjE7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIEJhbGxcbiAqIEBleHRlbmRzIEdhbWVPYmplY3RcbiAqIEBkZXNjcmlwdGlvbiDQn9GA0LXQtNGB0YLQsNCy0LvRj9C10YIg0LjQs9GA0L7QstC+0Lkg0LzRj9GHXG4gKi9cbmNsYXNzIEJhbGwgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJ3doaXRlJztcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0g0J3QsNGH0LDQu9GM0L3QsNGPINC60L7QvtGA0LTQuNC90LDRgtCwIFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSDQndCw0YfQsNC70YzQvdCw0Y8g0LrQvtC+0YDQtNC40L3QsNGC0LAgWVxuICAgKi9cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBjb25zdCByYWRpdXMgPSAxMDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHtcbiAgICAgIHg6IHggLSByYWRpdXMsXG4gICAgICB5OiB5IC0gcmFkaXVzLFxuICAgICAgd2lkdGg6IHJhZGl1cyAqIDIsXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqIDIsXG4gICAgfTtcblxuICAgIHN1cGVyKHsgdHJhbnNmb3JtIH0pO1xuICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIodGhpcywgcmFkaXVzKTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiA1LCB5OiA1IH07XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAZGVzY3JpcHRpb24g0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdGCINGB0YLQvtC70LrQvdC+0LLQtdC90LjQtSDRgSDQtNGA0YPQs9C40LzQuCDQuNCz0YDQvtCy0YvQvNC4INC+0LHRitC10LrRgtCw0LzQuFxuICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IG90aGVyIC0g0JTRgNGD0LPQvtC5INC40LPRgNC+0LLQvtC5INC+0LHRitC10LrRgiwg0YPRh9Cw0YHRgtCy0YPRjtGJ0LjQuSDQsiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LhcbiAgICovXG4gIG9uQ29sbGlzaW9uKG90aGVyOiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKG90aGVyIGluc3RhbmNlb2YgUGFkZGxlKSB7XG4gICAgICBsZXQgY29sbGlkZVBvaW50ID0gdGhpcy5nZXRDZW50ZXIoKS55IC0gKG90aGVyLnRyYW5zZm9ybS55ICsgb3RoZXIudHJhbnNmb3JtLmhlaWdodCAvIDIpO1xuXG4gICAgICBjb2xsaWRlUG9pbnQgPSBjb2xsaWRlUG9pbnQgLyAob3RoZXIudHJhbnNmb3JtLmhlaWdodCAvIDIpO1xuXG4gICAgICBjb25zdCBhbmdsZVJhZCA9IChNYXRoLlBJIC8gNCkgKiBjb2xsaWRlUG9pbnQ7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnRyYW5zZm9ybS54IDwgNDAwID8gMSA6IC0xO1xuXG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSBkaXJlY3Rpb24gKiB0aGlzLnNwZWVkICogTWF0aC5jb3MoYW5nbGVSYWQpO1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5zcGVlZCAqIE1hdGguc2luKGFuZ2xlUmFkKTtcblxuICAgICAgdGhpcy5zcGVlZCArPSAwLjE7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQGRlc2NyaXB0aW9uINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC60L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQvNGP0YfQsFxuICAgKiBAcmV0dXJucyB7VmVjdG9yMn0g0JrQvtC+0YDQtNC40L3QsNGC0Ysg0YbQtdC90YLRgNCwXG4gICAqL1xuICBwdWJsaWMgZ2V0Q2VudGVyKCk6IFZlY3RvcjIge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLnRyYW5zZm9ybS54ICsgdGhpcy5yYWRpdXMsXG4gICAgICB5OiB0aGlzLnRyYW5zZm9ybS55ICsgdGhpcy5yYWRpdXMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBkZXNjcmlwdGlvbiDQntGC0YDQuNGB0L7QstGL0LLQsNC10YIg0LzRj9GHINC90LAgY2FudmFzXG4gICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHggLSDQmtC+0L3RgtC10LrRgdGCINGA0LXQvdC00LXRgNC40L3Qs9CwXG4gICAqL1xuICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgIGNvbnN0IGNlbnRlclggPSB0aGlzLnRyYW5zZm9ybS54ICsgdGhpcy5yYWRpdXM7XG4gICAgY29uc3QgY2VudGVyWSA9IHRoaXMudHJhbnNmb3JtLnkgKyB0aGlzLnJhZGl1cztcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQGRlc2NyaXB0aW9uINCe0LHQvdC+0LLQu9GP0LXRgiDQv9C+0LfQuNGG0LjRjiDQvNGP0YfQsCDQvdCwINC+0YHQvdC+0LLQtSDQtdCz0L4g0YHQutC+0YDQvtGB0YLQuFxuICAgKiBAcGFyYW0ge251bWJlcn0gX2RlbHRhVGltZSAtINCU0LXQu9GM0YLQsCDQstGA0LXQvNC10L3QuCAo0L3QtSDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8pXG4gICAqL1xuICB1cGRhdGUoX2RlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2Zvcm0ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgdGhpcy50cmFuc2Zvcm0ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gSUlGRSDQtNC70Y8g0LfQsNC/0YPRgdC60LAg0LjQs9GA0YtcbiAqL1xuKCgpOiB2b2lkID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBQaW5nUG9uZ0dhbWUoJ2dhbWVDYW52YXMnKTtcbiAgZ2FtZS5zdGFydCgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==