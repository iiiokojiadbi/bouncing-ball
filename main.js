/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Ball.js":
/*!********************************!*\
  !*** ./src/components/Ball.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ball; });\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ \"./src/components/Item.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //компонент отвечающий за функционирование мяча\n\nvar Ball = /*#__PURE__*/function (_Item) {\n  _inherits(Ball, _Item);\n\n  var _super = _createSuper(Ball);\n\n  function Ball(selectors, width, height) {\n    var _this;\n\n    _classCallCheck(this, Ball);\n\n    _this = _super.call(this, selectors);\n\n    _defineProperty(_assertThisInitialized(_this), \"handleJump\", function () {\n      if (!_this._isAnim) {\n        _this._isAnim = true;\n\n        _this._handleAddAnimation();\n\n        _this._setJumpTimeout = setTimeout(function () {\n          _this._isAnim = false;\n\n          _this._handleRemoveAnimation();\n\n          clearTimeout(_this._setJumpTimeout);\n        }, 1500);\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getPosition\", function () {\n      var _this$_elem = _this._elem,\n          top = _this$_elem.offsetTop,\n          left = _this$_elem.offsetLeft;\n\n      var coordPoints = _this._getPoints(12);\n\n      return {\n        top: top,\n        left: left,\n        coordPoints: coordPoints\n      };\n    });\n\n    _this._width = width;\n    _this._height = height;\n    return _this;\n  } //метод для вызова состояния прыжка мяча\n\n\n  _createClass(Ball, [{\n    key: \"_getPoints\",\n    //внутренний метод получения точек на окружности мяча\n    value: function _getPoints(numberPoints) {\n      var _this$_elem2 = this._elem,\n          top = _this$_elem2.offsetTop,\n          left = _this$_elem2.offsetLeft;\n      var midWidth = Math.floor(this._width / 2);\n      var midHeight = Math.floor(this._height / 2);\n      var degree = 360;\n      var sectionDegree = degree / numberPoints;\n      var points = [];\n\n      for (var i = 0; i < numberPoints; i++) {\n        var point = {\n          x: left + midWidth + Math.floor(midWidth * Math.cos(degree)),\n          y: top + midHeight + Math.floor(midHeight * Math.sin(degree))\n        };\n        degree = degree - sectionDegree;\n        points = [point].concat(_toConsumableArray(points));\n      }\n\n      return points;\n    }\n  }]);\n\n  return Ball;\n}(_Item__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Ball.js?");

/***/ }),

/***/ "./src/components/Barrier.js":
/*!***********************************!*\
  !*** ./src/components/Barrier.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Barrier; });\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ \"./src/components/Item.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // компонент отвечающий за функционирование барьера\n\nvar Barrier = /*#__PURE__*/function (_Item) {\n  _inherits(Barrier, _Item);\n\n  var _super = _createSuper(Barrier);\n\n  function Barrier(selectors) {\n    var _this;\n\n    _classCallCheck(this, Barrier);\n\n    _this = _super.call(this, selectors);\n\n    _defineProperty(_assertThisInitialized(_this), \"handleMove\", function () {\n      _this._isAnim = true;\n\n      _this._handleAddAnimation();\n    });\n\n    _this._elem = _this._getTemplate();\n    _this._width = _this._getRandomSize();\n    _this._height = _this._getRandomSize();\n\n    _this._setSizeBarrier();\n\n    return _this;\n  } //метод для установки состояния движения барьера\n\n\n  _createClass(Barrier, [{\n    key: \"_getRandomSize\",\n    //внутренний метод для получения случайного размера барьера\n    value: function _getRandomSize() {\n      return Math.floor(Math.random() * 90 + 40);\n    } //внутренний метод для добавления инлайн стиля для установки размера барьера\n\n  }, {\n    key: \"_setSizeBarrier\",\n    value: function _setSizeBarrier() {\n      this._elem.style.width = this._width + 'px';\n      this._elem.style.height = this._height + 'px';\n    } //внутренний метод для получения html шаблона барьера из разметки\n\n  }, {\n    key: \"_getTemplate\",\n    value: function _getTemplate() {\n      var barrierElement = document.querySelector(this._selectors.template).content.querySelector(this._selectors.item).cloneNode(true);\n      return barrierElement;\n    }\n  }]);\n\n  return Barrier;\n}(_Item__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Barrier.js?");

/***/ }),

/***/ "./src/components/Game.js":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var _utils_checkIntersection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/checkIntersection */ \"./src/utils/checkIntersection.js\");\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ball */ \"./src/components/Ball.js\");\n/* harmony import */ var _Barrier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Barrier */ \"./src/components/Barrier.js\");\n/* harmony import */ var _ShowFail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShowFail */ \"./src/components/ShowFail.js\");\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Section */ \"./src/components/Section.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // основной компонент отвечающий за всю логику мини-игры\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    var _this = this;\n\n    _classCallCheck(this, Game);\n\n    _defineProperty(this, \"_ballEl\", new _Ball__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"ballSelectors\"], 50, 50));\n\n    _defineProperty(this, \"_barrierEl\", new _Barrier__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"barrierSelectors\"]));\n\n    _defineProperty(this, \"_showFail\", new _ShowFail__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"gameShowSelectors\"]));\n\n    _defineProperty(this, \"_checkIntersection\", _utils_checkIntersection__WEBPACK_IMPORTED_MODULE_1__[\"checkIntersection\"]);\n\n    _defineProperty(this, \"_gameOverStatus\", false);\n\n    _defineProperty(this, \"_gameSection\", new _Section__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      items: this._renderBarriers(),\n      rendered: function rendered(item) {\n        if (!item) {\n          _this._showFail.showFail();\n\n          _this._gameSection.resetItems();\n\n          return;\n        }\n\n        var itemElem = item.getElem();\n        itemElem.classList.add(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"barrierSelectors\"].barrierMove);\n\n        _this._gameSection.addItem(itemElem);\n      },\n      setItem: function setItem(item) {\n        _this._setItem(item);\n      }\n    }, _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"gameSectionSelector\"]));\n\n    _defineProperty(this, \"_setItem\", function (barrier) {\n      if (!barrier) {\n        return;\n      }\n\n      _this._barrierEl = barrier;\n\n      _this._barrierEl.handleMove();\n    });\n\n    _defineProperty(this, \"_handleCheckIntersection\", function () {\n      var _this$_ballEl$getPosi = _this._ballEl.getPosition(),\n          ballTop = _this$_ballEl$getPosi.top,\n          ballLeft = _this$_ballEl$getPosi.left,\n          coordPointsBall = _this$_ballEl$getPosi.coordPoints;\n\n      var _this$_barrierEl$getP = _this._barrierEl.getPosition(),\n          barrierTop = _this$_barrierEl$getP.top,\n          barrierLeft = _this$_barrierEl$getP.left,\n          coordPointsBarrier = _this$_barrierEl$getP.coordPoints;\n\n      if (_this._checkIntersection(coordPointsBall, coordPointsBarrier)) {\n        _this._gameOverStatus = true;\n\n        _this._gameOver({\n          ballTop: ballTop,\n          ballLeft: ballLeft,\n          barrierTop: barrierTop,\n          barrierLeft: barrierLeft\n        });\n      }\n    });\n\n    _defineProperty(this, \"_gameOver\", function (_ref) {\n      var ballTop = _ref.ballTop,\n          ballLeft = _ref.ballLeft,\n          barrierTop = _ref.barrierTop,\n          barrierLeft = _ref.barrierLeft;\n\n      _this._clearIntevals();\n\n      _this._gameSection.stopRender();\n\n      _this._showFail.showFail();\n\n      _this._ballEl.setPosition({\n        top: ballTop,\n        left: ballLeft\n      });\n\n      _this._barrierEl.setPosition({\n        top: barrierTop,\n        left: barrierLeft\n      });\n    });\n\n    _defineProperty(this, \"_handlePressSpace\", function (evt) {\n      if (evt.code === _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"SPACE\"]) {\n        _this._ballEl.handleJump();\n      }\n    });\n  }\n\n  _createClass(Game, [{\n    key: \"startGame\",\n    //метод для старта игры\n    value: function startGame() {\n      if (!this._gameOverStatus) {\n        this._handleAddListener();\n\n        this._setIntervals();\n\n        this._gameSection.renderItems();\n      }\n    } //метод для сброса игры\n\n  }, {\n    key: \"resetGame\",\n    value: function resetGame() {\n      this._gameSection.resetItems();\n\n      this._gameSection.stopRender();\n\n      this._handleRemoveListener();\n\n      this._ballEl.handleResetStatus();\n\n      this._barrierEl.handleResetStatus();\n\n      this._showFail.hideFail();\n\n      this._clearIntevals();\n\n      this._gameOverStatus = false;\n      this._barrierEl = new _Barrier__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"barrierSelectors\"]);\n\n      this._gameSection.setItems(this._renderBarriers());\n    } //внутренний метод для создания барьеров\n\n  }, {\n    key: \"_renderBarriers\",\n    value: function _renderBarriers() {\n      var countBarriers = 10;\n      var arrBarriers = [];\n\n      for (var i = 0; i < countBarriers; i++) {\n        arrBarriers = [this._getBarrier()].concat(_toConsumableArray(arrBarriers));\n      }\n\n      return arrBarriers;\n    } //внутренний метод для получения нового барьера\n\n  }, {\n    key: \"_getBarrier\",\n    value: function _getBarrier() {\n      return new _Barrier__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"barrierSelectors\"]);\n    } //внутренний метод для установки барьера в текущий this._barrierEl\n    //и вызова метода установки состояния движения\n\n  }, {\n    key: \"_handleAddListener\",\n    //внутренний метод для добавления слушателя на документ\n    value: function _handleAddListener() {\n      document.addEventListener('keydown', this._handlePressSpace);\n    } //внутренний метод для удаления слушателя с документа\n\n  }, {\n    key: \"_handleRemoveListener\",\n    value: function _handleRemoveListener() {\n      document.removeEventListener('keydown', this._handlePressSpace);\n    } //внутренний метод для установки интервала\n\n  }, {\n    key: \"_setIntervals\",\n    value: function _setIntervals() {\n      var _this2 = this;\n\n      this._handleIntervals = setInterval(function () {\n        _this2._handleCheckIntersection();\n      }, 100);\n    } //внутренний метод для отчистки интервала\n\n  }, {\n    key: \"_clearIntevals\",\n    value: function _clearIntevals() {\n      clearInterval(this._handleIntervals);\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/Game.js?");

/***/ }),

/***/ "./src/components/Item.js":
/*!********************************!*\
  !*** ./src/components/Item.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Item = /*#__PURE__*/function () {\n  function Item(selectors) {\n    var _this = this;\n\n    _classCallCheck(this, Item);\n\n    _defineProperty(this, \"setPosition\", function (_ref) {\n      var top = _ref.top,\n          left = _ref.left;\n\n      _this._handleRemoveAnimation();\n\n      _this._elem.style.top = top + 'px';\n      _this._elem.style.left = left + 'px';\n    });\n\n    _defineProperty(this, \"getPosition\", function () {\n      var _this$_elem = _this._elem,\n          top = _this$_elem.offsetTop,\n          left = _this$_elem.offsetLeft;\n      var coordPoints = {\n        pointLT: {\n          x: left,\n          y: top\n        },\n        pointRT: {\n          x: left + _this._width,\n          y: top\n        },\n        pointLB: {\n          x: left,\n          y: top + _this._height\n        }\n      };\n      return {\n        top: top,\n        left: left,\n        coordPoints: coordPoints\n      };\n    });\n\n    _defineProperty(this, \"handleResetStatus\", function () {\n      _this._isAnim = false;\n\n      _this._removeStyle();\n\n      _this._handleRemoveAnimation();\n    });\n\n    _defineProperty(this, \"getElem\", function () {\n      return _this._elem;\n    });\n\n    this._selectors = selectors;\n    this._elem = document.querySelector(selectors.item);\n    this._isAnim = false;\n  } //метод для фиксации позиции элемента при столкновении\n\n\n  _createClass(Item, [{\n    key: \"_removeStyle\",\n    //внутренний метод удаления инлайн стиля\n    value: function _removeStyle() {\n      this._elem.removeAttribute('style');\n    } //внутренний метод для добавления класса с анимацией\n\n  }, {\n    key: \"_handleAddAnimation\",\n    value: function _handleAddAnimation() {\n      this._elem.classList.add(this._selectors.anim);\n    } //внутренний метод для удаления класса с анимацией\n\n  }, {\n    key: \"_handleRemoveAnimation\",\n    value: function _handleRemoveAnimation() {\n      this._elem.classList.remove(this._selectors.anim);\n    }\n  }]);\n\n  return Item;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/Item.js?");

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Section; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/constants */ \"./src/utils/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // компонент отвечающий за рендер и добавление в разметку барьеров\n\nvar Section = function Section(_ref, containerSelector) {\n  var _this = this;\n\n  var _items = _ref.items,\n      rendered = _ref.rendered,\n      setItem = _ref.setItem;\n\n  _classCallCheck(this, Section);\n\n  _defineProperty(this, \"renderItems\", function () {\n    var item = _this._renderedItems.pop();\n\n    _this._rendered(item);\n\n    _this._setItem(item);\n\n    _this._intervalRender = setInterval(function () {\n      var item = _this._renderedItems.pop();\n\n      _this._container.querySelector(\".\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"barrierSelectors\"].barrierMove)).remove();\n\n      _this._rendered(item);\n\n      _this._setItem(item);\n    }, 3000);\n  });\n\n  _defineProperty(this, \"stopRender\", function () {\n    clearInterval(_this._intervalRender);\n  });\n\n  _defineProperty(this, \"resetItems\", function () {\n    _this._renderedItems = null;\n\n    _this._container.querySelectorAll(\".\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"barrierSelectors\"].barrierMove)).forEach(function (elem) {\n      elem.remove();\n    });\n  });\n\n  _defineProperty(this, \"setItems\", function (items) {\n    _this._renderedItems = items;\n  });\n\n  _defineProperty(this, \"addItem\", function (element) {\n    _this._container.prepend(element);\n  });\n\n  this._renderedItems = _items;\n  this._rendered = rendered;\n  this._setItem = setItem;\n  this._container = document.querySelector(containerSelector);\n} //метод для отрисовки компонента\n;\n\n\n\n//# sourceURL=webpack:///./src/components/Section.js?");

/***/ }),

/***/ "./src/components/ShowFail.js":
/*!************************************!*\
  !*** ./src/components/ShowFail.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShowFail; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// компонент отвечающий за показ ошибки\nvar ShowFail = function ShowFail(showSelector) {\n  var _this = this;\n\n  _classCallCheck(this, ShowFail);\n\n  _defineProperty(this, \"showFail\", function () {\n    _this._showEl.classList.add('game__show_active');\n  });\n\n  _defineProperty(this, \"hideFail\", function () {\n    _this._showEl.classList.remove('game__show_active');\n  });\n\n  this._showEl = document.querySelector(showSelector);\n};\n\n\n\n//# sourceURL=webpack:///./src/components/ShowFail.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Game */ \"./src/components/Game.js\");\n\n\n\nvar btnStart = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"btnStartSelector\"]);\nvar btnReset = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"btnResetSelector\"]);\nvar game = new _components_Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nfunction toogleBtnStatus(btn) {\n  if (btn.classList.contains('btn_is_active')) {\n    btn.setAttribute('disabled', 'disabled');\n  } else {\n    btn.removeAttribute('disabled');\n  }\n\n  btn.classList.toggle('btn_is_disabled');\n  btn.classList.toggle('btn_is_active');\n}\n\nbtnStart.addEventListener('click', function () {\n  toogleBtnStatus(btnStart);\n  toogleBtnStatus(btnReset);\n  game.startGame();\n});\nbtnReset.addEventListener('click', function () {\n  toogleBtnStatus(btnStart);\n  toogleBtnStatus(btnReset);\n  game.resetGame();\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/utils/checkIntersection.js":
/*!****************************************!*\
  !*** ./src/utils/checkIntersection.js ***!
  \****************************************/
/*! exports provided: checkIntersection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIntersection\", function() { return checkIntersection; });\nvar checkIntersection = function checkIntersection(ball, barrier) {\n  var isEntry = ball.find(function (point) {\n    var coordY = barrier.pointLB.y >= point.y && point.y >= barrier.pointLT.y;\n    var coordX = barrier.pointLT.x <= point.x && point.x <= barrier.pointRT.x;\n\n    if (coordX && coordY) {\n      return true;\n    }\n\n    return false;\n  });\n  return isEntry;\n};\n\n//# sourceURL=webpack:///./src/utils/checkIntersection.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: btnStartSelector, btnResetSelector, ballSelectors, barrierSelectors, gameSectionSelector, gameShowSelectors, SPACE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnStartSelector\", function() { return btnStartSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnResetSelector\", function() { return btnResetSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ballSelectors\", function() { return ballSelectors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barrierSelectors\", function() { return barrierSelectors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameSectionSelector\", function() { return gameSectionSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameShowSelectors\", function() { return gameShowSelectors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPACE\", function() { return SPACE; });\nvar btnStartSelector = '.btn_type_start';\nvar btnResetSelector = '.btn_type_reset';\nvar ballSelectors = {\n  item: '.ball',\n  anim: 'ball_is_jump'\n};\nvar barrierSelectors = {\n  template: '#barrier-template',\n  item: '.barrier',\n  anim: 'barrier_is_move'\n};\nvar gameSectionSelector = '.game';\nvar gameShowSelectors = '.game__show';\nvar SPACE = 'Space';\n\n//# sourceURL=webpack:///./src/utils/constants.js?");

/***/ })

/******/ });