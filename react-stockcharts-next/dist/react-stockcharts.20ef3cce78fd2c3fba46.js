(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("React"), require("ReactDOM"));
	else
		root["ReStock"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_44__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpReStock"];
/******/ 	window["webpackJsonpReStock"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		script.src = __webpack_require__.p + "dist/" + chunkId + "." + {"0":"3f25e34d758f7bfeb4c2","1":"a6b612a16fb62d6bdeab","2":"9797ed882fd4fa9b1f20"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		return installedChunks[chunkId][2] = promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

// common components

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.utils = exports.version = exports.interactive = exports.helper = exports.annotation = exports.tooltip = exports.scale = exports.axes = exports.algorithm = exports.indicator = exports.coordinates = exports.series = exports.BackgroundText = exports.GenericComponent = exports.GenericChartComponent = exports.Chart = exports.ChartCanvas = undefined;

var _ChartCanvas = __webpack_require__(209);

var _ChartCanvas2 = _interopRequireDefault(_ChartCanvas);

var _Chart = __webpack_require__(92);

var _Chart2 = _interopRequireDefault(_Chart);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _GenericComponent = __webpack_require__(29);

var _GenericComponent2 = _interopRequireDefault(_GenericComponent);

var _BackgroundText = __webpack_require__(208);

var _BackgroundText2 = _interopRequireDefault(_BackgroundText);

var _series = __webpack_require__(218);

var series = _interopRequireWildcard(_series);

var _scale = __webpack_require__(217);

var scale = _interopRequireWildcard(_scale);

var _coordinates = __webpack_require__(213);

var coordinates = _interopRequireWildcard(_coordinates);

var _indicator = __webpack_require__(215);

var indicator = _interopRequireWildcard(_indicator);

var _algorithm = __webpack_require__(210);

var algorithm = _interopRequireWildcard(_algorithm);

var _annotation = __webpack_require__(211);

var annotation = _interopRequireWildcard(_annotation);

var _axes = __webpack_require__(212);

var axes = _interopRequireWildcard(_axes);

var _tooltip = __webpack_require__(219);

var tooltip = _interopRequireWildcard(_tooltip);

var _helper = __webpack_require__(214);

var helper = _interopRequireWildcard(_helper);

var _interactive = __webpack_require__(216);

var interactive = _interopRequireWildcard(_interactive);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = "0.5.0";

// chart types & Series
exports.ChartCanvas = _ChartCanvas2.default;
exports.Chart = _Chart2.default;
exports.GenericChartComponent = _GenericChartComponent2.default;
exports.GenericComponent = _GenericComponent2.default;
exports.BackgroundText = _BackgroundText2.default;
exports.series = series;
exports.coordinates = coordinates;
exports.indicator = indicator;
exports.algorithm = algorithm;
exports.axes = axes;
exports.scale = scale;
exports.tooltip = tooltip;
exports.annotation = annotation;
exports.helper = helper;
exports.interactive = interactive;
exports.version = version;
exports.utils = utils;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isArray = exports.first = exports.overlayColors = exports.MOUSEUP = exports.MOUSEMOVE = exports.zipper = exports.slidingWindow = exports.shallowEqual = exports.noop = exports.identity = exports.merge = exports.mappedSlidingWindow = exports.accumulatingWindow = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.path = path;
exports.functor = functor;
exports.getClosestItemIndexes2 = getClosestItemIndexes2;
exports.getClosestValue = getClosestValue;
exports.d3Window = d3Window;
exports.getClosestItemIndexes = getClosestItemIndexes;
exports.getClosestItem = getClosestItem;
exports.head = head;
exports.tail = tail;
exports.last = last;
exports.isDefined = isDefined;
exports.isNotDefined = isNotDefined;
exports.isObject = isObject;
exports.touchPosition = touchPosition;
exports.mousePosition = mousePosition;
exports.clearCanvas = clearCanvas;
exports.capitalizeFirst = capitalizeFirst;
exports.hexToRGBA = hexToRGBA;

var _d3Scale = __webpack_require__(14);

var _d3Array = __webpack_require__(9);

var _zipper = __webpack_require__(107);

var _zipper2 = _interopRequireDefault(_zipper);

var _merge = __webpack_require__(341);

var _merge2 = _interopRequireDefault(_merge);

var _slidingWindow = __webpack_require__(342);

var _slidingWindow2 = _interopRequireDefault(_slidingWindow);

var _identity = __webpack_require__(32);

var _identity2 = _interopRequireDefault(_identity);

var _noop = __webpack_require__(33);

var _noop2 = _interopRequireDefault(_noop);

var _shallowEqual = __webpack_require__(106);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _mappedSlidingWindow = __webpack_require__(340);

var _mappedSlidingWindow2 = _interopRequireDefault(_mappedSlidingWindow);

var _accumulatingWindow = __webpack_require__(339);

var _accumulatingWindow2 = _interopRequireDefault(_accumulatingWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.accumulatingWindow = _accumulatingWindow2.default;
exports.mappedSlidingWindow = _mappedSlidingWindow2.default;
exports.merge = _merge2.default;
exports.identity = _identity2.default;
exports.noop = _noop2.default;
exports.shallowEqual = _shallowEqual2.default;
exports.slidingWindow = _slidingWindow2.default;
exports.zipper = _zipper2.default;
function path() {
	var path = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	var key = Array.isArray(path) ? path : [path];
	var length = key.length;

	return function (obj, defaultValue) {
		var index = 0;
		while (obj != null && index < length) {
			obj = obj[key[index++]];
		}
		return index === length ? obj : defaultValue;
	};
}

function functor(v) {
	return typeof v === "function" ? v : function () {
		return v;
	};
}

function getClosestItemIndexes2(array, value, accessor) {
	var left = (0, _d3Array.bisector)(accessor).left(array, value);
	left = Math.max(left - 1, 0);
	var right = Math.min(left + 1, array.length - 1);

	var item = accessor(array[left]);
	if (item >= value && item <= value) right = left;

	return { left: left, right: right };
}

function getClosestValue(values, currentValue) {
	var diff = values.map(function (each) {
		return each - currentValue;
	}).reduce(function (diff1, diff2) {
		return Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;
	});
	return currentValue + diff;
}

function d3Window(node) {
	var d3win = node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
	return d3win;
}

var MOUSEMOVE = exports.MOUSEMOVE = "mousemove.pan";
var MOUSEUP = exports.MOUSEUP = "mouseup.pan";

function getClosestItemIndexes(array, value, accessor, log) {
	var lo = 0,
	    hi = array.length - 1;
	while (hi - lo > 1) {
		var mid = Math.round((lo + hi) / 2);
		if (accessor(array[mid]) <= value) {
			lo = mid;
		} else {
			hi = mid;
		}
	}
	// for Date object === does not work, so using the <= in combination with >=
	// the same code works for both dates and numbers
	if (accessor(array[lo]) >= value && accessor(array[lo]) <= value) hi = lo;
	if (accessor(array[hi]) >= value && accessor(array[hi]) <= value) lo = hi;

	if (accessor(array[lo]) < value && accessor(array[hi]) < value) lo = hi;
	if (accessor(array[lo]) > value && accessor(array[hi]) > value) hi = lo;

	if (log) {}
	// console.log(lo, accessor(array[lo]), value, accessor(array[hi]), hi);
	// console.log(accessor(array[lo]), lo, value, accessor(array[lo]) >= value);
	// console.log(value, hi, accessor(array[hi]), accessor(array[lo]) <= value);

	// var left = value > accessor(array[lo]) ? lo : lo;
	// var right = gte(value, accessor(array[hi])) ? Math.min(hi + 1, array.length - 1) : hi;

	// console.log(value, accessor(array[left]), accessor(array[right]));
	return { left: lo, right: hi };
}

function getClosestItem(array, value, accessor, log) {
	var _getClosestItemIndexe = getClosestItemIndexes(array, value, accessor, log);

	var left = _getClosestItemIndexe.left;
	var right = _getClosestItemIndexe.right;


	if (left === right) {
		return array[left];
	}

	var closest = Math.abs(accessor(array[left]) - value) < Math.abs(accessor(array[right]) - value) ? array[left] : array[right];
	if (log) {
		console.log(array[left], array[right], closest, left, right);
	}
	return closest;
}

var overlayColors = exports.overlayColors = (0, _d3Scale.scaleOrdinal)(_d3Scale.schemeCategory10);

function head(array, accessor) {
	if (accessor && array) {
		var value;
		for (var i = 0; i < array.length; i++) {
			value = array[i];
			if (isDefined(accessor(value))) return value;
		}
		return undefined;
	}
	return array ? array[0] : undefined;
}

function tail(array, accessor) {
	if (accessor && array) {
		return array.map(accessor).slice(1);
	}
	return array ? array.slice(1) : undefined;
}

var first = exports.first = head;

function last(array, accessor) {
	if (accessor && array) {
		var value;
		for (var i = array.length - 1; i >= 0; i--) {
			value = array[i];
			if (isDefined(accessor(value))) return value;
		}
		return undefined;
	}
	var length = array ? array.length : 0;
	return length ? array[length - 1] : undefined;
}

function isDefined(d) {
	return d !== null && typeof d != "undefined";
}

function isNotDefined(d) {
	return !isDefined(d);
}

function isObject(d) {
	return isDefined(d) && (typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && !Array.isArray(d);
}

var isArray = exports.isArray = Array.isArray;

function touchPosition(touch, e) {
	var container = e.target,
	    rect = container.getBoundingClientRect(),
	    x = touch.clientX - rect.left - container.clientLeft,
	    y = touch.clientY - rect.top - container.clientTop,
	    xy = [Math.round(x), Math.round(y)];
	return xy;
}

function mousePosition(e) {
	var container = e.currentTarget,
	    rect = container.getBoundingClientRect(),
	    x = e.clientX - rect.left - container.clientLeft,
	    y = e.clientY - rect.top - container.clientTop,
	    xy = [Math.round(x), Math.round(y)];
	return xy;
}

function clearCanvas(canvasList, ratio) {
	canvasList.forEach(function (each) {
		each.setTransform(1, 0, 0, 1, 0, 0);
		each.clearRect(-1, -1, each.canvas.width + 2, each.canvas.height + 2);
		each.scale(ratio, ratio);
	});
}

function capitalizeFirst(str) {
	return str.charAt(0).toUpperCase() + str.substring(1);
}

function hexToRGBA(inputHex, opacity) {
	var hex = inputHex.replace("#", "");
	if (inputHex.indexOf("#") > -1 && (hex.length === 3 || hex.length === 6)) {

		var multiplier = hex.length === 3 ? 1 : 2;

		var r = parseInt(hex.substring(0, 1 * multiplier), 16);
		var g = parseInt(hex.substring(1 * multiplier, 2 * multiplier), 16);
		var b = parseInt(hex.substring(2 * multiplier, 3 * multiplier), 16);

		var result = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";

		return result;
	}
	return inputHex;
}

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__(372);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "format", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "formatPrefix", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "formatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "formatLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__src_locale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "formatSpecifier", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "precisionFixed", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "precisionPrefix", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "precisionRound", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["a"]; });








/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__(458);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "timeFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "timeParse", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "utcFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "utcParse", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "timeFormatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "timeFormatLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__src_locale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "isoFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "isoParse", function() { return __WEBPACK_IMPORTED_MODULE_3__src_isoParse__["a"]; });






/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.getAxisCanvas = getAxisCanvas;

var _react = __webpack_require__(0);

var _GenericComponent2 = __webpack_require__(29);

var _GenericComponent3 = _interopRequireDefault(_GenericComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericChartComponent = function (_GenericComponent) {
	_inherits(GenericChartComponent, _GenericComponent);

	function GenericChartComponent(props, context) {
		_classCallCheck(this, GenericChartComponent);

		var _this = _possibleConstructorReturn(this, (GenericChartComponent.__proto__ || Object.getPrototypeOf(GenericChartComponent)).call(this, props, context));

		_this.listener = _this.listener.bind(_this);
		_this.preCanvasDraw = _this.preCanvasDraw.bind(_this);
		_this.postCanvasDraw = _this.postCanvasDraw.bind(_this);
		return _this;
	}

	_createClass(GenericChartComponent, [{
		key: "preCanvasDraw",
		value: function preCanvasDraw(ctx) {
			ctx.save();
			var _context = this.context;
			var canvasOriginX = _context.canvasOriginX;
			var canvasOriginY = _context.canvasOriginY;
			var width = _context.width;
			var height = _context.height;
			var margin = _context.margin;
			var ratio = _context.ratio;
			var _props = this.props;
			var clip = _props.clip;
			var edgeClip = _props.edgeClip;


			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.scale(ratio, ratio);
			if (edgeClip) {
				ctx.beginPath();
				ctx.rect(-1, canvasOriginY - 10, width + margin.left + margin.right + 1, height + 20);
				ctx.clip();
			}

			ctx.translate(canvasOriginX, canvasOriginY);

			if (clip) {
				ctx.beginPath();
				ctx.rect(-1, -1, width + 1, height + 1);
				ctx.clip();
			}
		}
	}, {
		key: "postCanvasDraw",
		value: function postCanvasDraw(ctx) {
			ctx.restore();
		}
	}, {
		key: "updateMoreProps",
		value: function updateMoreProps(moreProps) {
			// console.log(type, moreProps, e)
			_get(GenericChartComponent.prototype.__proto__ || Object.getPrototypeOf(GenericChartComponent.prototype), "updateMoreProps", this).call(this, moreProps);
			var chartConfigList = moreProps.chartConfig;


			if (chartConfigList) {
				var chartId = this.context.chartId;

				var chartConfig = chartConfigList.filter(function (each) {
					return each.id === chartId;
				})[0];
				this.moreProps.chartConfig = chartConfig;
			}
		}
	}]);

	return GenericChartComponent;
}(_GenericComponent3.default);

GenericChartComponent.propTypes = _GenericComponent3.default.propTypes;

GenericChartComponent.defaultProps = _GenericComponent3.default.defaultProps;

GenericChartComponent.contextTypes = _extends({}, _GenericComponent3.default.contextTypes, {
	chartId: _react.PropTypes.number.isRequired,
	chartConfig: _react.PropTypes.object.isRequired,
	ratio: _react.PropTypes.number.isRequired
});

exports.default = GenericChartComponent;
function getAxisCanvas(contexts) {
	return contexts.axes;
}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_descending__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_deviation__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_extent__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_histogram__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_threshold_freedmanDiaconis__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_scott__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_sturges__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_max__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_mean__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_median__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_merge__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_min__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_pairs__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_permute__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_quantile__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_range__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_scan__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_shuffle__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_sum__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_ticks__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_transpose__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_variance__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_zip__ = __webpack_require__(358);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "bisect", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "bisectLeft", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "bisectRight", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ascending", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ascending__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "bisector", function() { return __WEBPACK_IMPORTED_MODULE_2__src_bisector__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "descending", function() { return __WEBPACK_IMPORTED_MODULE_3__src_descending__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "deviation", function() { return __WEBPACK_IMPORTED_MODULE_4__src_deviation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "extent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_extent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "histogram", function() { return __WEBPACK_IMPORTED_MODULE_6__src_histogram__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "thresholdFreedmanDiaconis", function() { return __WEBPACK_IMPORTED_MODULE_7__src_threshold_freedmanDiaconis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "thresholdScott", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold_scott__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "thresholdSturges", function() { return __WEBPACK_IMPORTED_MODULE_9__src_threshold_sturges__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "max", function() { return __WEBPACK_IMPORTED_MODULE_10__src_max__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "mean", function() { return __WEBPACK_IMPORTED_MODULE_11__src_mean__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "median", function() { return __WEBPACK_IMPORTED_MODULE_12__src_median__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "merge", function() { return __WEBPACK_IMPORTED_MODULE_13__src_merge__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "min", function() { return __WEBPACK_IMPORTED_MODULE_14__src_min__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_15__src_pairs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "permute", function() { return __WEBPACK_IMPORTED_MODULE_16__src_permute__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "quantile", function() { return __WEBPACK_IMPORTED_MODULE_17__src_quantile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "range", function() { return __WEBPACK_IMPORTED_MODULE_18__src_range__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scan", function() { return __WEBPACK_IMPORTED_MODULE_19__src_scan__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_20__src_shuffle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "sum", function() { return __WEBPACK_IMPORTED_MODULE_21__src_sum__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ticks", function() { return __WEBPACK_IMPORTED_MODULE_22__src_ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "tickStep", function() { return __WEBPACK_IMPORTED_MODULE_22__src_ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_23__src_transpose__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "variance", function() { return __WEBPACK_IMPORTED_MODULE_24__src_variance__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "zip", function() { return __WEBPACK_IMPORTED_MODULE_25__src_zip__["a"]; });




























/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var id = i++,
	    accessor,
	    stroke,
	    fill,
	    echo,
	    type,
	    tooltipLabel,
	    domain,
	    tickValues;

	function baseIndicator() {}

	baseIndicator.id = function (x) {
		if (!arguments.length) return id;
		id = x;
		return baseIndicator;
	};
	baseIndicator.accessor = function (x) {
		if (!arguments.length) return accessor;
		accessor = x;
		return baseIndicator;
	};
	baseIndicator.stroke = function (x) {
		if (!arguments.length) return !stroke ? stroke = (0, _utils.overlayColors)(id) : stroke;
		stroke = x;
		return baseIndicator;
	};
	baseIndicator.fill = function (x) {
		if (!arguments.length) return !fill ? fill = (0, _utils.overlayColors)(id) : fill;
		fill = x;
		return baseIndicator;
	};
	baseIndicator.echo = function (x) {
		if (!arguments.length) return echo;
		echo = x;
		return baseIndicator;
	};
	baseIndicator.type = function (x) {
		if (!arguments.length) return type;
		type = x;
		return baseIndicator;
	};
	baseIndicator.tooltipLabel = function (x) {
		if (!arguments.length) {
			if (typeof tooltipLabel === "function") return tooltipLabel();
			return tooltipLabel;
		}
		tooltipLabel = x;
		return baseIndicator;
	};
	baseIndicator.domain = function (x) {
		if (!arguments.length) return domain;
		domain = x;
		return baseIndicator;
	};
	baseIndicator.tickValues = function (x) {
		if (!arguments.length) return tickValues;
		tickValues = x;
		return baseIndicator;
	};
	return baseIndicator;
};

var _utils = __webpack_require__(2);

var i = 0;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.fc = global.fc || {})));
}(this, function (exports) { 'use strict';

  var createReboundMethod = (function (target, source, name) {
      var method = source[name];
      if (typeof method !== 'function') {
          throw new Error('Attempt to rebind ' + name + ' which isn\'t a function on the source object');
      }
      return function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          var value = method.apply(source, args);
          return value === source ? target : value;
      };
  });

  var rebind = (function (target, source) {
      for (var _len = arguments.length, names = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          names[_key - 2] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var name = _step.value;

              target[name] = createReboundMethod(target, source, name);
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }

      return target;
  });

  var createTransform = function createTransform(transforms) {
      return function (name) {
          return transforms.reduce(function (name, fn) {
              return name && fn(name);
          }, name);
      };
  };

  var rebindAll = (function (target, source) {
      for (var _len = arguments.length, transforms = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          transforms[_key - 2] = arguments[_key];
      }

      var transform = createTransform(transforms);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = Object.keys(source)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var name = _step.value;

              var result = transform(name);
              if (result) {
                  target[result] = createReboundMethod(target, source, name);
              }
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }

      return target;
  });

  var regexify = (function (strsOrRegexes) {
      return strsOrRegexes.map(function (strOrRegex) {
          return typeof strOrRegex === 'string' ? new RegExp('^' + strOrRegex + '$') : strOrRegex;
      });
  });

  var exclude = (function () {
      for (var _len = arguments.length, exclusions = Array(_len), _key = 0; _key < _len; _key++) {
          exclusions[_key] = arguments[_key];
      }

      exclusions = regexify(exclusions);
      return function (name) {
          return exclusions.every(function (exclusion) {
              return !exclusion.test(name);
          }) && name;
      };
  });

  var include = (function () {
      for (var _len = arguments.length, inclusions = Array(_len), _key = 0; _key < _len; _key++) {
          inclusions[_key] = arguments[_key];
      }

      inclusions = regexify(inclusions);
      return function (name) {
          return inclusions.some(function (inclusion) {
              return inclusion.test(name);
          }) && name;
      };
  });

  var includeMap = (function (mappings) {
    return function (name) {
      return mappings[name];
    };
  });

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  var prefix = (function (prefix) {
    return function (name) {
      return prefix + capitalizeFirstLetter(name);
    };
  });

  exports.rebind = rebind;
  exports.rebindAll = rebindAll;
  exports.exclude = exclude;
  exports.include = include;
  exports.includeMap = includeMap;
  exports.prefix = prefix;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.change = exports.compare = exports.elderRay = exports.forceIndex = exports.atr = exports.sto = exports.rsi = exports.macd = exports.renko = exports.pointAndFigure = exports.kagi = exports.heikinAshi = exports.bollingerband = exports.sma = exports.ema = undefined;

var _ema = __webpack_require__(46);

var _ema2 = _interopRequireDefault(_ema);

var _sma = __webpack_require__(290);

var _sma2 = _interopRequireDefault(_sma);

var _bollingerband = __webpack_require__(279);

var _bollingerband2 = _interopRequireDefault(_bollingerband);

var _heikinAshi = __webpack_require__(284);

var _heikinAshi2 = _interopRequireDefault(_heikinAshi);

var _kagi = __webpack_require__(285);

var _kagi2 = _interopRequireDefault(_kagi);

var _pointAndFigure = __webpack_require__(287);

var _pointAndFigure2 = _interopRequireDefault(_pointAndFigure);

var _renko = __webpack_require__(288);

var _renko2 = _interopRequireDefault(_renko);

var _macd = __webpack_require__(286);

var _macd2 = _interopRequireDefault(_macd);

var _rsi = __webpack_require__(289);

var _rsi2 = _interopRequireDefault(_rsi);

var _sto = __webpack_require__(291);

var _sto2 = _interopRequireDefault(_sto);

var _atr = __webpack_require__(60);

var _atr2 = _interopRequireDefault(_atr);

var _forceIndex = __webpack_require__(283);

var _forceIndex2 = _interopRequireDefault(_forceIndex);

var _elderRay = __webpack_require__(282);

var _elderRay2 = _interopRequireDefault(_elderRay);

var _compare = __webpack_require__(281);

var _compare2 = _interopRequireDefault(_compare);

var _change = __webpack_require__(280);

var _change2 = _interopRequireDefault(_change);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ema = _ema2.default;
exports.sma = _sma2.default;
exports.bollingerband = _bollingerband2.default;
exports.heikinAshi = _heikinAshi2.default;
exports.kagi = _kagi2.default;
exports.pointAndFigure = _pointAndFigure2.default;
exports.renko = _renko2.default;
exports.macd = _macd2.default;
exports.rsi = _rsi2.default;
exports.sto = _sto2.default;
exports.atr = _atr2.default;
exports.forceIndex = _forceIndex2.default;
exports.elderRay = _elderRay2.default;
exports.compare = _compare2.default;
exports.change = _change2.default; // import slidingWindow from "./slidingWindow";
// import merge from "./merge";
// import zipper from "./zipper";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      while (--step >= 0) while (offseti(date, 1), !test(date)) {} // eslint-disable-line no-empty
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_category10__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_category20b__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_category20c__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_category20__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_rainbow__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_viridis__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_sequential__ = __webpack_require__(396);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_identity__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_2__src_linear__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_3__src_log__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_6__src_quantile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_7__src_quantize__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_9__src_time__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcTime__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_11__src_category10__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "schemeCategory20b", function() { return __WEBPACK_IMPORTED_MODULE_12__src_category20b__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "schemeCategory20c", function() { return __WEBPACK_IMPORTED_MODULE_13__src_category20c__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "schemeCategory20", function() { return __WEBPACK_IMPORTED_MODULE_14__src_category20__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential__["a"]; });







































/***/ },
/* 15 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var BollingerBand = exports.BollingerBand = {
	windowSize: 20,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	multiplier: 2,
	movingAverageType: "sma"
};

var ATR = exports.ATR = {
	windowSize: 14
};

var ForceIndex = exports.ForceIndex = {
	sourcePath: "close" };

var ElderRay = exports.ElderRay = {
	windowSize: 13,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close", // "high", "low", "open", "close"
	movingAverageType: "sma"
};

var ElderImpulse = exports.ElderImpulse = {
	sourcePath: "close" };

var MACD = exports.MACD = {
	fast: 12,
	slow: 26,
	signal: 9,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close"
};

var FullStochasticOscillator = exports.FullStochasticOscillator = {
	windowSize: 12,
	kWindowSize: 3,
	dWindowSize: 3
};

var RSI = exports.RSI = {
	windowSize: 14,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close" };

var EMA = exports.EMA = {
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	windowSize: 10
};

var SMA = exports.SMA = {
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	windowSize: 10
};

var Kagi = exports.Kagi = {
	reversalType: "ATR", // "ATR", "FIXED"
	windowSize: 14,
	reversal: 2,
	sourcePath: "close" };

var Renko = exports.Renko = {
	reversalType: "ATR", // "ATR", "FIXED"
	windowSize: 14,
	fixedBrickSize: 2,
	sourcePath: "high/low" };

var PointAndFigure = exports.PointAndFigure = {
	boxSize: 0.5,
	reversal: 3,
	sourcePath: "high/low" };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(359);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "nest", function() { return __WEBPACK_IMPORTED_MODULE_0__src_nest__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "set", function() { return __WEBPACK_IMPORTED_MODULE_1__src_set__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "map", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "keys", function() { return __WEBPACK_IMPORTED_MODULE_3__src_keys__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "values", function() { return __WEBPACK_IMPORTED_MODULE_4__src_values__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "entries", function() { return __WEBPACK_IMPORTED_MODULE_5__src_entries__["a"]; });








/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__datum__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__on__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dispatch__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return root; });
/* harmony export (immutable) */ exports["a"] = Selection;






























var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["b" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["a" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_26__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_27__on__["b" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_28__dispatch__["a" /* default */]
};

/* harmony default export */ exports["c"] = selection;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(364);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolTipTSpanLabel = function (_Component) {
	_inherits(ToolTipTSpanLabel, _Component);

	function ToolTipTSpanLabel() {
		_classCallCheck(this, ToolTipTSpanLabel);

		return _possibleConstructorReturn(this, (ToolTipTSpanLabel.__proto__ || Object.getPrototypeOf(ToolTipTSpanLabel)).apply(this, arguments));
	}

	_createClass(ToolTipTSpanLabel, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"tspan",
				_extends({ className: "react-stockcharts-tooltip-label", fill: "#4682B4" }, this.props),
				this.props.children
			);
		}
	}]);

	return ToolTipTSpanLabel;
}(_react.Component);

ToolTipTSpanLabel.propTypes = {
	children: _react.PropTypes.node.isRequired
};

exports.default = ToolTipTSpanLabel;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolTipText = function (_Component) {
	_inherits(ToolTipText, _Component);

	function ToolTipText() {
		_classCallCheck(this, ToolTipText);

		return _possibleConstructorReturn(this, (ToolTipText.__proto__ || Object.getPrototypeOf(ToolTipText)).apply(this, arguments));
	}

	_createClass(ToolTipText, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"text",
				_extends({
					fontFamily: this.props.fontFamily,
					fontSize: this.props.fontSize
				}, this.props, {
					className: "react-stockcharts-tooltip" }),
				this.props.children
			);
		}
	}]);

	return ToolTipText;
}(_react.Component);

ToolTipText.propTypes = {
	fontFamily: _react.PropTypes.string.isRequired,
	fontSize: _react.PropTypes.number.isRequired,
	children: _react.PropTypes.node.isRequired
};

ToolTipText.defaultProps = {
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 11
};

exports.default = ToolTipText;

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ },
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Shape = __webpack_require__(52);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineSeries = function (_Component) {
	_inherits(LineSeries, _Component);

	function LineSeries(props) {
		_classCallCheck(this, LineSeries);

		var _this = _possibleConstructorReturn(this, (LineSeries.__proto__ || Object.getPrototypeOf(LineSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		_this.isHover = _this.isHover.bind(_this);
		return _this;
	}

	_createClass(LineSeries, [{
		key: "isHover",
		value: function isHover(moreProps) {
			// console.log("HERE")
			var _props = this.props;
			var highlightOnHover = _props.highlightOnHover;
			var yAccessor = _props.yAccessor;
			var hoverTolerance = _props.hoverTolerance;


			if (!highlightOnHover) return false;

			var mouseXY = moreProps.mouseXY;
			var currentItem = moreProps.currentItem;
			var xScale = moreProps.xScale;
			var plotData = moreProps.plotData;
			var _moreProps$chartConfi = moreProps.chartConfig;
			var yScale = _moreProps$chartConfi.yScale;
			var origin = _moreProps$chartConfi.origin;
			var xAccessor = this.context.xAccessor;

			var _mouseXY = _slicedToArray(mouseXY, 2);

			var x = _mouseXY[0];
			var y = _mouseXY[1];

			var radius = hoverTolerance;

			var _getClosestItemIndexe = (0, _utils.getClosestItemIndexes)(plotData, xScale.invert(x), xAccessor);

			var left = _getClosestItemIndexe.left;
			var right = _getClosestItemIndexe.right;

			if (left === right) {
				var cy = yScale(yAccessor(currentItem)) + origin[1];
				var cx = xScale(xAccessor(currentItem)) + origin[0];

				var hovering1 = Math.pow(x - cx, 2) + Math.pow(y - cy, 2) < Math.pow(radius, 2);

				return hovering1;
			} else {
				var l = plotData[left];
				var r = plotData[right];
				var x1 = xScale(xAccessor(l)) + origin[0];
				var y1 = yScale(yAccessor(l)) + origin[1];
				var x2 = xScale(xAccessor(r)) + origin[0];
				var y2 = yScale(yAccessor(r)) + origin[1];

				// y = m * x + b
				var m /* slope */ = (y2 - y1) / (x2 - x1);
				var b /* y intercept */ = -1 * m * x1 + y1;

				var desiredY = Math.round(m * x + b);

				var hovering2 = y >= desiredY - radius && y <= desiredY + radius;

				return hovering2;
			}
		}
	}, {
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props2 = this.props;
			var yAccessor = _props2.yAccessor;
			var stroke = _props2.stroke;
			var strokeWidth = _props2.strokeWidth;
			var hoverStrokeWidth = _props2.hoverStrokeWidth;
			var defined = _props2.defined;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var hovering = moreProps.hovering;


			ctx.lineWidth = hovering ? hoverStrokeWidth : strokeWidth;

			ctx.strokeStyle = stroke;

			var points = [];
			for (var i = 0; i < plotData.length; i++) {
				var d = plotData[i];
				if (defined(yAccessor(d), i)) {
					var x = xScale(xAccessor(d));
					var y = yScale(yAccessor(d));


					points.push([x, y]);
				} else if (points.length) {
					segment(points, ctx);
					points = [];
				}
			}

			if (points.length) segment(points, ctx);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props3 = this.props;
			var yAccessor = _props3.yAccessor;
			var stroke = _props3.stroke;
			var strokeWidth = _props3.strokeWidth;
			var hoverStrokeWidth = _props3.hoverStrokeWidth;
			var defined = _props3.defined;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var hovering = moreProps.hovering;


			var dataSeries = (0, _d3Shape.line)().defined(function (d) {
				return defined(yAccessor(d));
			}).x(function (d) {
				return xScale(xAccessor(d));
			}).y(function (d) {
				return yScale(yAccessor(d));
			});

			var d = dataSeries(plotData);

			var _props4 = this.props;
			var fill = _props4.fill;
			var className = _props4.className;


			return _react2.default.createElement("path", { className: className + " " + (stroke ? "" : " line-stroke"),
				d: d,
				stroke: stroke,
				strokeWidth: hovering ? hoverStrokeWidth : strokeWidth,
				fill: fill
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				isHover: this.isHover,
				onClick: this.props.onClick,
				onDoubleClick: this.props.onDoubleClick,
				onContextMenu: this.props.onContextMenu,
				drawOnPan: true
			});
		}
	}]);

	return LineSeries;
}(_react.Component);

function segment(points, ctx) {
	ctx.beginPath();

	var _first = (0, _utils.first)(points);

	var _first2 = _slicedToArray(_first, 2);

	var x = _first2[0];
	var y = _first2[1];

	ctx.moveTo(x, y);
	for (var i = 1; i < points.length; i++) {
		var _points$i = _slicedToArray(points[i], 2);

		var x1 = _points$i[0];
		var y1 = _points$i[1];

		ctx.lineTo(x1, y1);
	}

	ctx.stroke();
}

LineSeries.propTypes = {
	className: _react.PropTypes.string,
	strokeWidth: _react.PropTypes.number,
	stroke: _react.PropTypes.string,
	hoverStrokeWidth: _react.PropTypes.number,
	fill: _react.PropTypes.string,
	defined: _react.PropTypes.func,
	hoverTolerance: _react.PropTypes.number,
	highlightOnHover: _react.PropTypes.bool,
	onClick: _react.PropTypes.func,
	onDoubleClick: _react.PropTypes.func,
	onContextMenu: _react.PropTypes.func,
	yAccessor: _react.PropTypes.func
};

LineSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

LineSeries.defaultProps = {
	className: "line ",
	strokeWidth: 1,
	hoverStrokeWidth: 4,
	fill: "none",
	stroke: "#4682B4",
	defined: function defined(d) {
		return !isNaN(d);
	},
	hoverTolerance: 6,
	highlightOnHover: false,
	onClick: function onClick(e) {
		console.log("Click", e);
	},
	onDoubleClick: function onDoubleClick(e) {
		console.log("Double Click", e);
	},
	onContextMenu: function onContextMenu(e) {
		console.log("Right Click", e);
	}
};

exports.default = LineSeries;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x) {
  return function constant() {
    return x;
  };
};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var suscriberId = 0;

var GenericComponent = function (_Component) {
	_inherits(GenericComponent, _Component);

	function GenericComponent(props, context) {
		_classCallCheck(this, GenericComponent);

		var _this = _possibleConstructorReturn(this, (GenericComponent.__proto__ || Object.getPrototypeOf(GenericComponent)).call(this, props, context));

		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		_this.getMoreProps = _this.getMoreProps.bind(_this);
		_this.listener = _this.listener.bind(_this);
		_this.draw = _this.draw.bind(_this);
		_this.updateMoreProps = _this.updateMoreProps.bind(_this);
		_this.evaluateType = _this.evaluateType.bind(_this);
		_this.isHover = _this.isHover.bind(_this);
		_this.executeMouseMove = _this.executeMouseMove.bind(_this);
		_this.preCanvasDraw = _this.preCanvasDraw.bind(_this);
		_this.postCanvasDraw = _this.postCanvasDraw.bind(_this);
		_this.getRef = _this.getRef.bind(_this);

		_this.suscriberId = suscriberId++;

		_this.drawOnNextTick = false;

		_this.moreProps = {};
		_this.state = {
			updateCount: 0
		};
		return _this;
	}

	_createClass(GenericComponent, [{
		key: "getRef",
		value: function getRef(ref) {
			return this.refs[ref];
		}
	}, {
		key: "updateMoreProps",
		value: function updateMoreProps(moreProps) {
			this.prevMoreProps = this.moreProps;
			this.moreProps = Object.assign(this.moreProps, moreProps);
		}
	}, {
		key: "listener",
		value: function listener(type, moreProps, e) {
			// console.log(e.shiftKey)
			if ((0, _utils.isDefined)(moreProps)) {
				this.updateMoreProps(moreProps);
			}

			this.evaluateType(type, e);
		}
	}, {
		key: "executeMouseMove",
		value: function executeMouseMove(e) {
			this.moreProps.hovering = this.isHover(e);

			if (this.moreProps.hovering || this.props.drawOnMouseMove) {
				if (this.props.onMouseMove) this.props.onMouseMove(e);
				this.drawOnNextTick = true;
			} else {
				this.drawOnNextTick = false;
			}
		}
	}, {
		key: "evaluateType",
		value: function evaluateType(type, e) {
			// if (this.props.debug) console.log(this.props.debug, type);

			switch (type) {
				case "zoom":
				case "mouseenter":
					// DO NOT DRAW FOR THESE EVENTS
					break;
				case "contextmenu":
					{
						if (this.moreProps.hovering && this.props.onContextMenu) {
							this.props.onContextMenu(e);
						}
						break;
					}
				case "mousedown":
					{
						if (this.moreProps.hovering && this.props.onMouseDown) {
							this.props.onMouseDown(e);
						}
						break;
					}
				case "click":
					{
						if (this.moreProps.hovering && this.props.onClick) {
							this.props.onClick(e);
						}
						break;
					}
				case "mousemove":
					{
						this.executeMouseMove(e);
						break;
					}
				case "dblclick":
					{
						if (this.moreProps.hovering && this.props.onDoubleClick) {
							this.props.onDoubleClick(e);
						}
						break;
					}
				case "mouseleave":
					{
						this.drawOnNextTick = this.props.drawOnMouseExitOfCanvas;
						break;
					}
				case "pan":
					{
						this.moreProps.hovering = false;
						this.drawOnNextTick = this.props.drawOnPan;
						break;
					}
				case "draw":
					{
						if (this.drawOnNextTick) {
							this.draw();
						}
					}
			}
			if (this.props.debug) console.log(this.props.debug, type, this.drawOnNextTick);

			// if (type !== "mousemove" && type !== "ff") this.moreProps.prevHovering = false;
		}
	}, {
		key: "isHover",
		value: function isHover(e) {
			return this.props.isHover(this.moreProps, e);
		}
	}, {
		key: "draw",
		value: function draw() {
			var chartCanvasType = this.context.chartCanvasType;
			var canvasDraw = this.props.canvasDraw;


			if ((0, _utils.isNotDefined)(canvasDraw) || chartCanvasType === "svg") {
				var updateCount = this.state.updateCount;


				this.setState({
					updateCount: updateCount + 1
				});
			} else {
				this.drawOnCanvas();
			}
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			var subscribe = this.context.subscribe;

			subscribe(this.suscriberId, this.listener);
			this.componentWillReceiveProps(this.props, this.context);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var unsubscribe = this.context.unsubscribe;

			unsubscribe(this.suscriberId);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.componentDidUpdate();
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			var chartCanvasType = this.context.chartCanvasType;
			var canvasDraw = this.props.canvasDraw;


			if (this.props.debug) console.log(this.props.debug, "updated");

			if ((0, _utils.isDefined)(canvasDraw) && chartCanvasType !== "svg") {
				this.drawOnCanvas();
			}
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps, nextContext) {
			var xScale = nextContext.xScale;
			var plotData = nextContext.plotData;
			var chartConfig = nextContext.chartConfig;

			if (this.props.debug) console.log(nextContext);
			this.moreProps = _extends({}, this.moreProps, {
				xScale: xScale, plotData: plotData, chartConfig: chartConfig
			});
		}
	}, {
		key: "getMoreProps",
		value: function getMoreProps() {
			var _context = this.context;
			var xScale = _context.xScale;
			var plotData = _context.plotData;
			var chartConfig = _context.chartConfig;


			var moreProps = _extends({
				xScale: xScale, plotData: plotData, chartConfig: chartConfig
			}, this.moreProps);
			return moreProps;
		}
	}, {
		key: "getPrevMoreProps",
		value: function getPrevMoreProps() {
			return this.prevMoreProps;
		}
	}, {
		key: "preCanvasDraw",
		value: function preCanvasDraw() {
			// do nothing
		}
	}, {
		key: "postCanvasDraw",
		value: function postCanvasDraw() {
			// do nothing
		}
	}, {
		key: "drawOnCanvas",
		value: function drawOnCanvas() {
			var _props = this.props;
			var canvasDraw = _props.canvasDraw;
			var canvasToDraw = _props.canvasToDraw;
			var hoverCanvasToDraw = _props.hoverCanvasToDraw;
			var getCanvasContexts = this.context.getCanvasContexts;
			var hovering = this.moreProps.hovering;


			var ctx = hovering ? hoverCanvasToDraw(getCanvasContexts()) : canvasToDraw(getCanvasContexts());

			this.preCanvasDraw(ctx);
			canvasDraw(ctx, this.getMoreProps());

			this.postCanvasDraw(ctx);
		}
	}, {
		key: "render",
		value: function render() {
			var _context2 = this.context;
			var chartCanvasType = _context2.chartCanvasType;
			var chartId = _context2.chartId;
			var _props2 = this.props;
			var canvasDraw = _props2.canvasDraw;
			var clip = _props2.clip;
			var svgDraw = _props2.svgDraw;


			if ((0, _utils.isDefined)(canvasDraw) && chartCanvasType !== "svg") return null;

			var suffix = (0, _utils.isDefined)(chartId) ? "-" + chartId : "";

			var style = clip ? { "clipPath": "url(#chart-area-clip" + suffix + ")" } : null;

			return _react2.default.createElement(
				"g",
				{ style: style },
				svgDraw(this.getMoreProps())
			);
		}
	}]);

	return GenericComponent;
}(_react.Component);

GenericComponent.propTypes = {
	svgDraw: _react.PropTypes.func.isRequired,
	canvasDraw: _react.PropTypes.func,
	drawOnMouseMove: _react.PropTypes.bool.isRequired,
	drawOnPan: _react.PropTypes.bool.isRequired,
	clip: _react.PropTypes.bool.isRequired,
	edgeClip: _react.PropTypes.bool.isRequired,
	drawOnMouseExitOfCanvas: _react.PropTypes.bool.isRequired,
	canvasToDraw: _react.PropTypes.func.isRequired,
	hoverCanvasToDraw: _react.PropTypes.func.isRequired,
	isHover: _react.PropTypes.func.isRequired,

	onClick: _react.PropTypes.func,
	onDoubleClick: _react.PropTypes.func,
	onContextMenu: _react.PropTypes.func,
	onMouseMove: _react.PropTypes.func,
	onMouseDown: _react.PropTypes.func,

	debug: _react.PropTypes.string
};

GenericComponent.defaultProps = {
	svgDraw: (0, _utils.functor)(null),
	drawOnMouseMove: false,
	drawOnPan: false,
	drawOnHover: false,
	drawOnMouseExitOfCanvas: false,
	canvasToDraw: function canvasToDraw(contexts) {
		return contexts.mouseCoord;
	},
	hoverCanvasToDraw: function hoverCanvasToDraw(contexts) {
		return contexts.mouseCoord;
	},
	clip: true,
	edgeClip: false,
	isHover: (0, _utils.functor)(false),
	onMouseMove: _utils.noop,
	onMouseDown: _utils.noop
};

GenericComponent.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	margin: _react.PropTypes.object.isRequired,
	chartId: _react.PropTypes.number,
	getCanvasContexts: _react.PropTypes.func,

	chartCanvasType: _react.PropTypes.string,
	xScale: _react.PropTypes.func.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,
	plotData: _react.PropTypes.array.isRequired,

	chartConfig: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]).isRequired,

	canvasOriginX: _react.PropTypes.number,
	canvasOriginY: _react.PropTypes.number,

	subscribe: _react.PropTypes.func.isRequired,
	unsubscribe: _react.PropTypes.func.isRequired
};

exports.default = GenericComponent;

/***/ },
/* 30 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var themes = exports.themes = {
	light: {
		BollingerBand: {
			stroke: {
				top: "#964B00",
				middle: "#000000",
				bottom: "#964B00"
			},
			fill: "#4682B4"
		},
		ElderImpulse: {
			stroke: {
				up: "#6BA583",
				down: "#FF0000",
				neutral: "#0000FF"
			}
		},
		MACD: {
			fill: {
				divergence: "#4682B4"
			},
			stroke: {
				macd: "#FF0000",
				signal: "#00F300"
			}
		},
		FullStochasticOscillator: {
			stroke: {
				D: "#17becf",
				K: "#ff7f0e"
			}
		}
	},
	dark: {
		BollingerBand: {
			stroke: {
				top: "#964B00",
				middle: "#FF6600",
				bottom: "#964B00"
			},
			fill: "#4682B4"
		},
		ElderImpulse: {
			stroke: {
				up: "#6BA583",
				down: "#FF0000",
				neutral: "#0000FF"
			}
		},
		MACD: {
			fill: {
				divergence: "#FF6600"
			},
			stroke: {
				macd: "#ea2bff",
				signal: "#74d400"
			}
		},
		FullStochasticOscillator: {
			stroke: {
				D: "#ea2bff",
				K: "#74d400"
			}
		}
	}
};

var BollingerBand = exports.BollingerBand = themes.light.BollingerBand;
var ElderImpulse = exports.ElderImpulse = themes.light.ElderImpulse;
var MACD = exports.MACD = themes.light.MACD;
var FullStochasticOscillator = exports.FullStochasticOscillator = themes.light.FullStochasticOscillator;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StraightLine = function (_Component) {
	_inherits(StraightLine, _Component);

	function StraightLine(props) {
		_classCallCheck(this, StraightLine);

		var _this = _possibleConstructorReturn(this, (StraightLine.__proto__ || Object.getPrototypeOf(StraightLine)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(StraightLine, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props = this.props;
			var stroke = _props.stroke;
			var opacity = _props.opacity;
			var yValue = _props.yValue;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;


			var first = xAccessor(plotData[0]);
			var last = xAccessor(plotData[plotData.length - 1]);

			ctx.beginPath();

			ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);

			ctx.moveTo(xScale(first), yScale(yValue));
			ctx.lineTo(xScale(last), yScale(yValue));
			ctx.stroke();
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var _props2 = this.props;
			var stroke = _props2.stroke;
			var className = _props2.className;
			var opacity = _props2.opacity;
			var yValue = _props2.yValue;


			var first = xAccessor(plotData[0]);
			var last = xAccessor(plotData[plotData.length - 1]);

			return _react2.default.createElement("line", { className: className,
				stroke: stroke, opacity: opacity,
				x1: xScale(first), y1: yScale(yValue),
				x2: xScale(last), y2: yScale(yValue) });
		}
	}]);

	return StraightLine;
}(_react.Component);

StraightLine.propTypes = {
	className: _react.PropTypes.string,
	stroke: _react.PropTypes.string,
	opacity: _react.PropTypes.number.isRequired,
	yValue: _react.PropTypes.number.isRequired
};
StraightLine.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

StraightLine.defaultProps = {
	className: "line ",
	stroke: "#000000",
	opacity: 0.5
};

exports.default = StraightLine;

/***/ },
/* 32 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (d) {
  return d;
};

/***/ },
/* 33 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x) {
  return x === null ? NaN : +x;
};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(377);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* unused harmony reexport interpolateArray */
/* unused harmony reexport interpolateBasis */
/* unused harmony reexport interpolateBasisClosed */
/* unused harmony reexport interpolateDate */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* unused harmony reexport interpolateObject */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* unused harmony reexport interpolateString */
/* unused harmony reexport interpolateTransformCss */
/* unused harmony reexport interpolateTransformSvg */
/* unused harmony reexport interpolateZoom */
/* unused harmony reexport interpolateRgb */
/* unused harmony reexport interpolateRgbBasis */
/* unused harmony reexport interpolateRgbBasisClosed */
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* unused harmony reexport interpolateLab */
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* unused harmony reexport quantize */



















/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(126);
/* harmony export (immutable) */ exports["c"] = hue;
/* harmony export (immutable) */ exports["a"] = gamma;
/* harmony export (immutable) */ exports["b"] = nogamma;


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(398);
/* harmony export (immutable) */ exports["a"] = linearish;
/* harmony export (immutable) */ exports["b"] = linear;





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    var d = domain(),
        i = d.length - 1,
        n = count == null ? 10 : count,
        start = d[0],
        stop = d[i],
        step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, n);

    if (step) {
      step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
      d[0] = Math.floor(start / step) * step;
      d[i] = Math.ceil(stop / step) * step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]);

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return tau; });
var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (var j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
};


/***/ },
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/exponentialMovingAverage.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var windowSize = _defaultOptionsForComputation.EMA.windowSize;
	var sourcePath = _defaultOptionsForComputation.EMA.sourcePath;


	function calculator(data) {

		var source = (0, _utils.path)(sourcePath);
		var alpha = 2 / (windowSize + 1);
		var previous;
		var initialAccumulator = 0;
		var skip = 0;

		return data.map(function (d, i) {
			var v = source(d, i);
			if ((0, _utils.isNotDefined)(previous) && (0, _utils.isNotDefined)(v)) {
				skip++;
				return undefined;
			} else if (i < windowSize + skip - 1) {
				initialAccumulator += v;
				return undefined;
			} else if (i === windowSize + skip - 1) {
				initialAccumulator += v;
				var initialValue = initialAccumulator / windowSize;
				previous = initialValue;
				return initialValue;
			} else {
				var nextValue = v * alpha + (1 - alpha) * previous;
				previous = nextValue;
				return nextValue;
			}
		});
	}
	calculator.undefinedLength = function () {
		return windowSize;
	};
	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};

	calculator.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return calculator;
	};

	return calculator;
};

var _utils = __webpack_require__(2);

var _defaultOptionsForComputation = __webpack_require__(15);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.rotateXY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.identityStack = identityStack;
exports.drawOnCanvasHelper = drawOnCanvasHelper;
exports.svgHelper = svgHelper;
exports.getBarsSVG2 = getBarsSVG2;
exports.drawOnCanvas2 = drawOnCanvas2;
exports.getBars = getBars;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Collection = __webpack_require__(16);

var _d3Array = __webpack_require__(9);

var _d3Shape = __webpack_require__(52);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackedBarSeries = function (_Component) {
	_inherits(StackedBarSeries, _Component);

	function StackedBarSeries(props) {
		_classCallCheck(this, StackedBarSeries);

		var _this = _possibleConstructorReturn(this, (StackedBarSeries.__proto__ || Object.getPrototypeOf(StackedBarSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(StackedBarSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var xAccessor = this.context.xAccessor;
			// var { xScale, chartConfig: { yScale }, plotData } = moreProps;

			drawOnCanvasHelper(ctx, this.props, moreProps, xAccessor, _d3Shape.stack);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;


			return _react2.default.createElement(
				"g",
				null,
				svgHelper(this.props, moreProps, xAccessor, _d3Shape.stack)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}]);

	return StackedBarSeries;
}(_react.Component);

StackedBarSeries.propTypes = {
	baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	direction: _react.PropTypes.oneOf(["up", "down"]).isRequired,
	stroke: _react.PropTypes.bool.isRequired,
	widthRatio: _react.PropTypes.number.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired
};

StackedBarSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

StackedBarSeries.defaultProps = {
	baseAt: function baseAt(xScale, yScale /* , d*/) {
		return (0, _utils.first)(yScale.range());
	},
	direction: "up",
	className: "bar",
	stroke: true,
	fill: "#4682B4",
	opacity: 0.5,
	widthRatio: 0.8
};

function identityStack() {
	var keys = [];
	function stack(data) {
		var response = keys.map(function (key, i) {
			var arrays = data.map(function (d) {

				var array = [0, d[key]];
				array.data = d;
				return array;
			});
			arrays.key = key;
			arrays.index = i;
			return arrays;
		});
		return response;
	}
	stack.keys = function (x) {
		if (!arguments.length) {
			return keys;
		}
		keys = x;
		return stack;
	};
	return stack;
}

function drawOnCanvasHelper(ctx, props, moreProps, xAccessor, stackFn) {
	var defaultPostAction = arguments.length <= 5 || arguments[5] === undefined ? _utils.identity : arguments[5];
	var postRotateAction = arguments.length <= 6 || arguments[6] === undefined ? rotateXY : arguments[6];
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;


	var bars = doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);

	drawOnCanvas2(props, ctx, bars);
}

function convertToArray(item) {
	return Array.isArray(item) ? item : [item];
}

function svgHelper(props, moreProps, xAccessor, stackFn) {
	var defaultPostAction = arguments.length <= 4 || arguments[4] === undefined ? _utils.identity : arguments[4];
	var postRotateAction = arguments.length <= 5 || arguments[5] === undefined ? rotateXY : arguments[5];
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;

	var bars = doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
	return getBarsSVG2(props, bars);
}

function doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction) {
	var yAccessor = props.yAccessor;
	var swapScales = props.swapScales;


	var modifiedYAccessor = swapScales ? convertToArray(props.xAccessor) : convertToArray(yAccessor);
	var modifiedXAccessor = swapScales ? yAccessor : xAccessor;

	var modifiedXScale = swapScales ? yScale : xScale;
	var modifiedYScale = swapScales ? xScale : yScale;

	var postProcessor = swapScales ? postRotateAction : defaultPostAction;

	var bars = getBars(props, modifiedXAccessor, modifiedYAccessor, modifiedXScale, modifiedYScale, plotData, stackFn, postProcessor);

	return bars;
}

var rotateXY = exports.rotateXY = function rotateXY(array) {
	return array.map(function (each) {
		return _extends({}, each, {
			x: each.y,
			y: each.x,
			height: each.width,
			width: each.height
		});
	});
};

function getBarsSVG2(props, bars) {
	/* eslint-disable react/prop-types */
	var opacity = props.opacity;
	/* eslint-enable react/prop-types */

	return bars.map(function (d, idx) {
		if (d.width <= 1) {
			return _react2.default.createElement("line", { key: idx, className: d.className,
				stroke: d.fill,
				x1: d.x, y1: d.y,
				x2: d.x, y2: d.y + d.height });
		}
		return _react2.default.createElement("rect", { key: idx, className: d.className,
			stroke: d.stroke,
			fill: d.fill,
			x: d.x,
			y: d.y,
			width: d.width,
			fillOpacity: opacity,
			height: d.height });
	});
}

function drawOnCanvas2(props, ctx, bars) {
	var stroke = props.stroke;


	var nest = (0, _d3Collection.nest)().key(function (d) {
		return d.fill;
	}).entries(bars);

	nest.forEach(function (outer) {
		var key = outer.key;
		var values = outer.values;

		if (values[0].width < 1) {
			ctx.strokeStyle = key;
		} else {
			ctx.strokeStyle = key;
			ctx.fillStyle = (0, _utils.hexToRGBA)(key, props.opacity);
		}
		values.forEach(function (d) {
			if (d.width < 1) {
				/* <line key={idx} className={d.className}
    			stroke={stroke}
    			fill={fill}
    			x1={d.x} y1={d.y}
    			x2={d.x} y2={d.y + d.height} />*/
				ctx.beginPath();
				ctx.moveTo(d.x, d.y);
				ctx.lineTo(d.x, d.y + d.height);
				ctx.stroke();
			} else {
				/* <rect key={idx} className={d.className}
    		stroke={stroke}
    		fill={fill}
    		x={d.x}
    		y={d.y}
    		width={d.width}
    		height={d.height} /> */
				ctx.beginPath();
				ctx.rect(d.x, d.y, d.width, d.height);
				ctx.fill();
				if (stroke) ctx.stroke();
			}
		});
	});
}

function getBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var stack = arguments.length <= 6 || arguments[6] === undefined ? identityStack : arguments[6];
	var after = arguments.length <= 7 || arguments[7] === undefined ? _utils.identity : arguments[7];
	var baseAt = props.baseAt;
	var className = props.className;
	var fill = props.fill;
	var stroke = props.stroke;
	var widthRatio = props.widthRatio;
	var _props$spaceBetweenBa = props.spaceBetweenBar;
	var spaceBetweenBar = _props$spaceBetweenBa === undefined ? 0 : _props$spaceBetweenBa;


	var getClassName = (0, _utils.functor)(className);
	var getFill = (0, _utils.functor)(fill);
	var getBase = (0, _utils.functor)(baseAt);

	var width = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData))));
	var bw = width / (plotData.length - 1) * widthRatio;
	var barWidth = Math.round(bw);
	// console.log(barWidth)

	var eachBarWidth = (barWidth - spaceBetweenBar * (yAccessor.length - 1)) / yAccessor.length;

	var offset = barWidth === 1 ? 0 : 0.5 * bw;

	var ds = plotData.map(function (each) {
		var d = {
			appearance: {},
			x: xAccessor(each)
		};
		yAccessor.forEach(function (eachYAccessor, i) {
			var key = "y" + i;
			d[key] = eachYAccessor(each);
			var appearance = {
				className: getClassName(each, i),
				stroke: stroke ? getFill(each, i) : "none",
				fill: getFill(each, i)
			};
			d.appearance[key] = appearance;
		});
		return d;
	});

	var keys = yAccessor.map(function (_, i) {
		return "y" + i;
	});

	// console.log(ds);

	var data = stack().keys(keys)(ds);

	// console.log(data);

	var newData = data.map(function (each, i) {
		var key = each.key;
		return each.map(function (d) {
			var array = [d[0], d[1]];
			array.data = {
				x: d.data.x,
				i: i,
				appearance: d.data.appearance[key]
			};
			return array;
		});
	});
	// console.log(newData);
	// console.log(merge(newData));

	var bars = (0, _d3Array.merge)(newData)
	// .filter(d => isDefined(d.y))
	.map(function (d) {
		// let baseValue = yScale.invert(getBase(xScale, yScale, d.datum));
		var y = yScale(d[1]);
		/* let h = isDefined(d.y0) && d.y0 !== 0 && !isNaN(d.y0)
  	? yScale(d.y0) - y
  	: getBase(xScale, yScale, d.datum) - yScale(d.y)*/
		var h = getBase(xScale, yScale, d.data) - yScale(d[1] - d[0]);
		// console.log(d.y, yScale.domain(), yScale.range())
		// let h = ;
		// if (d.y < 0) h = -h;
		// console.log(d, y, h)
		if (h < 0) {
			y = y + h;
			h = -h;
		}
		// console.log(d.data.i, Math.round(offset - (d.data.i > 0 ? (eachBarWidth + spaceBetweenBar) * d.data.i : 0)))
		/* console.log(d.series, d.datum.date, d.x,
  	getBase(xScale, yScale, d.datum), `d.y=${d.y}, d.y0=${d.y0}, y=${y}, h=${h}`)*/
		return _extends({}, d.data.appearance, {
			// series: d.series,
			// i: d.x,
			x: Math.round(xScale(d.data.x) - bw / 2),
			y: y,
			groupOffset: Math.round(offset - (d.data.i > 0 ? (eachBarWidth + spaceBetweenBar) * d.data.i : 0)),
			groupWidth: Math.round(eachBarWidth),
			offset: Math.round(offset),
			height: h,
			width: barWidth
		});
	});
	// console.log(bars)

	return after(bars);
}

exports.default = StackedBarSeries;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(71);


/* harmony default export */ exports["a"] = function(x) {
  return x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_path__ = __webpack_require__(383);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_path__["a"]; });



/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(132);
/* harmony export (immutable) */ exports["b"] = deinterpolateLinear;
/* harmony export (immutable) */ exports["c"] = copy;
/* harmony export (immutable) */ exports["a"] = continuous;






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_arc__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_area__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_line__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pie__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_radialArea__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_radialLine__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_symbol__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_symbol_circle__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_symbol_cross__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_symbol_diamond__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_symbol_square__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_symbol_star__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_symbol_triangle__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_symbol_wye__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_curve_basisClosed__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_curve_basisOpen__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_curve_basis__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_curve_bundle__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_curve_cardinalClosed__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_curve_cardinalOpen__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinal__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_curve_catmullRomClosed__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_curve_catmullRomOpen__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRom__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_curve_linearClosed__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_curve_linear__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_curve_monotone__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_curve_natural__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_curve_step__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_stack__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_offset_expand__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_offset_none__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_offset_silhouette__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_offset_wiggle__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_order_ascending__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_order_descending__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_order_insideOut__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_order_none__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_order_reverse__ = __webpack_require__(453);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "arc", function() { return __WEBPACK_IMPORTED_MODULE_0__src_arc__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "area", function() { return __WEBPACK_IMPORTED_MODULE_1__src_area__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "line", function() { return __WEBPACK_IMPORTED_MODULE_2__src_line__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "pie", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pie__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "radialArea", function() { return __WEBPACK_IMPORTED_MODULE_4__src_radialArea__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "radialLine", function() { return __WEBPACK_IMPORTED_MODULE_5__src_radialLine__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_6__src_symbol__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbol", function() { return __WEBPACK_IMPORTED_MODULE_6__src_symbol__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbolCircle", function() { return __WEBPACK_IMPORTED_MODULE_7__src_symbol_circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbolCross", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol_cross__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbolDiamond", function() { return __WEBPACK_IMPORTED_MODULE_9__src_symbol_diamond__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbolSquare", function() { return __WEBPACK_IMPORTED_MODULE_10__src_symbol_square__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbolStar", function() { return __WEBPACK_IMPORTED_MODULE_11__src_symbol_star__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbolTriangle", function() { return __WEBPACK_IMPORTED_MODULE_12__src_symbol_triangle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "symbolWye", function() { return __WEBPACK_IMPORTED_MODULE_13__src_symbol_wye__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_14__src_curve_basisClosed__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveBasisOpen", function() { return __WEBPACK_IMPORTED_MODULE_15__src_curve_basisOpen__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveBasis", function() { return __WEBPACK_IMPORTED_MODULE_16__src_curve_basis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveBundle", function() { return __WEBPACK_IMPORTED_MODULE_17__src_curve_bundle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveCardinalClosed", function() { return __WEBPACK_IMPORTED_MODULE_18__src_curve_cardinalClosed__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveCardinalOpen", function() { return __WEBPACK_IMPORTED_MODULE_19__src_curve_cardinalOpen__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveCardinal", function() { return __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinal__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveCatmullRomClosed", function() { return __WEBPACK_IMPORTED_MODULE_21__src_curve_catmullRomClosed__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveCatmullRomOpen", function() { return __WEBPACK_IMPORTED_MODULE_22__src_curve_catmullRomOpen__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveCatmullRom", function() { return __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRom__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveLinearClosed", function() { return __WEBPACK_IMPORTED_MODULE_24__src_curve_linearClosed__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveLinear", function() { return __WEBPACK_IMPORTED_MODULE_25__src_curve_linear__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveMonotoneY", function() { return __WEBPACK_IMPORTED_MODULE_26__src_curve_monotone__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveMonotoneX", function() { return __WEBPACK_IMPORTED_MODULE_26__src_curve_monotone__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveNatural", function() { return __WEBPACK_IMPORTED_MODULE_27__src_curve_natural__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveStep", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_step__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveStepAfter", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_step__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "curveStepBefore", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_step__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stack", function() { return __WEBPACK_IMPORTED_MODULE_29__src_stack__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOffsetExpand", function() { return __WEBPACK_IMPORTED_MODULE_30__src_offset_expand__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOffsetNone", function() { return __WEBPACK_IMPORTED_MODULE_31__src_offset_none__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOffsetSilhouette", function() { return __WEBPACK_IMPORTED_MODULE_32__src_offset_silhouette__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOffsetWiggle", function() { return __WEBPACK_IMPORTED_MODULE_33__src_offset_wiggle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOrderAscending", function() { return __WEBPACK_IMPORTED_MODULE_34__src_order_ascending__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOrderDescending", function() { return __WEBPACK_IMPORTED_MODULE_35__src_order_descending__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOrderInsideOut", function() { return __WEBPACK_IMPORTED_MODULE_36__src_order_insideOut__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOrderNone", function() { return __WEBPACK_IMPORTED_MODULE_37__src_order_none__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "stackOrderReverse", function() { return __WEBPACK_IMPORTED_MODULE_38__src_order_reverse__["a"]; });












































/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = point;
/* harmony export (immutable) */ exports["c"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ exports["b"] = function(context) {
  return new Basis(context);
};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = point;
/* harmony export (immutable) */ exports["c"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ exports["b"] = (function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ exports["a"] = function(context) {
  return new Linear(context);
};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function() {};


/***/ },
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.renderSVG = renderSVG;
exports.drawOnCanvas = drawOnCanvas;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */
function renderSVG(props) {
	var className = props.className;


	var edge = helper(props);
	if (edge === null) return null;
	var line, coordinateBase, coordinate;

	if ((0, _utils.isDefined)(edge.line)) {
		line = _react2.default.createElement("line", {
			className: "react-stockcharts-cross-hair", opacity: edge.line.opacity, stroke: edge.line.stroke,
			x1: edge.line.x1, y1: edge.line.y1,
			x2: edge.line.x2, y2: edge.line.y2 });
	}
	if ((0, _utils.isDefined)(edge.coordinateBase)) {
		var _edge$coordinateBase = edge.coordinateBase;
		var rectWidth = _edge$coordinateBase.rectWidth;
		var rectHeight = _edge$coordinateBase.rectHeight;
		var arrowWidth = _edge$coordinateBase.arrowWidth;


		var path = edge.orient === "left" ? "M0,0L0," + rectHeight + "L" + rectWidth + "," + rectHeight + "L" + (rectWidth + arrowWidth) + ",10L" + rectWidth + ",0L0,0L0,0" : "M0," + arrowWidth + "L" + arrowWidth + "," + rectHeight + "L" + (rectWidth + arrowWidth) + "," + rectHeight + "L" + (rectWidth + arrowWidth) + ",0L" + arrowWidth + ",0L0," + arrowWidth;

		coordinateBase = edge.orient === "left" || edge.orient === "right" ? _react2.default.createElement(
			"g",
			{ transform: "translate(" + edge.coordinateBase.edgeXRect + "," + edge.coordinateBase.edgeYRect + ")" },
			_react2.default.createElement("path", { d: path, key: 1, className: "react-stockchart-text-background",
				height: rectHeight, width: rectWidth,
				fill: edge.coordinateBase.fill, opacity: edge.coordinateBase.opacity })
		) : _react2.default.createElement("rect", { key: 1, className: "react-stockchart-text-background",
			x: edge.coordinateBase.edgeXRect,
			y: edge.coordinateBase.edgeYRect,
			height: rectHeight, width: rectWidth,
			fill: edge.coordinateBase.fill, opacity: edge.coordinateBase.opacity });

		coordinate = _react2.default.createElement(
			"text",
			{ key: 2, x: edge.coordinate.edgeXText,
				y: edge.coordinate.edgeYText,
				textAnchor: edge.coordinate.textAnchor,
				fontFamily: edge.coordinate.fontFamily,
				fontSize: edge.coordinate.fontSize,
				dy: ".32em", fill: edge.coordinate.textFill },
			edge.coordinate.displayCoordinate
		);
	}
	return _react2.default.createElement(
		"g",
		{ className: className },
		line,
		coordinateBase,
		coordinate
	);
}
/* eslint-enable react/prop-types */

function helper(props) {
	var displayCoordinate = props.coordinate;
	var show = props.show;
	var type = props.type;
	var orient = props.orient;
	var edgeAt = props.edgeAt;
	var hideLine = props.hideLine;
	var fill = props.fill;
	var opacity = props.opacity;
	var fontFamily = props.fontFamily;
	var fontSize = props.fontSize;
	var textFill = props.textFill;
	var lineStroke = props.lineStroke;
	var lineOpacity = props.lineOpacity;
	var arrowWidth = props.arrowWidth;
	var rectWidth = props.rectWidth;
	var rectHeight = props.rectHeight;
	var x1 = props.x1;
	var y1 = props.y1;
	var x2 = props.x2;
	var y2 = props.y2;
	var dx = props.dx;


	if (!show) return null;

	// rectWidth = rectWidth ? rectWidth : (type === "horizontal") ? 60 : 100;

	var edgeXRect, edgeYRect, edgeXText, edgeYText;

	if (type === "horizontal") {

		edgeXRect = dx + (orient === "right" ? edgeAt + 1 : edgeAt - rectWidth - arrowWidth - 1);
		edgeYRect = y1 - rectHeight / 2;
		edgeXText = dx + (orient === "right" ? edgeAt + rectWidth / 2 + arrowWidth : edgeAt - rectWidth / 2 - arrowWidth);
		edgeYText = y1;
	} else {
		edgeXRect = x1 - rectWidth / 2;
		edgeYRect = orient === "bottom" ? edgeAt : edgeAt - rectHeight;
		edgeXText = x1;
		edgeYText = orient === "bottom" ? edgeAt + rectHeight / 2 : edgeAt - rectHeight / 2;
	}
	var coordinateBase,
	    coordinate,
	    textAnchor = "middle";
	if ((0, _utils.isDefined)(displayCoordinate)) {
		coordinateBase = {
			edgeXRect: edgeXRect, edgeYRect: edgeYRect, rectHeight: rectHeight, rectWidth: rectWidth, fill: fill, opacity: opacity, arrowWidth: arrowWidth
		};
		coordinate = {
			edgeXText: edgeXText, edgeYText: edgeYText, textAnchor: textAnchor, fontFamily: fontFamily, fontSize: fontSize, textFill: textFill, displayCoordinate: displayCoordinate
		};
	}

	var line = hideLine ? undefined : {
		opacity: lineOpacity, stroke: lineStroke, x1: x1, y1: y1, x2: x2, y2: y2
	};
	return {
		coordinateBase: coordinateBase, coordinate: coordinate, line: line, orient: orient
	};
}

function drawOnCanvas(ctx, props) {
	var edge = helper(props);

	if (edge === null) return;

	if ((0, _utils.isDefined)(edge.coordinateBase)) {
		var _edge$coordinateBase2 = edge.coordinateBase;
		var rectWidth = _edge$coordinateBase2.rectWidth;
		var rectHeight = _edge$coordinateBase2.rectHeight;
		var arrowWidth = _edge$coordinateBase2.arrowWidth;


		ctx.fillStyle = (0, _utils.hexToRGBA)(edge.coordinateBase.fill, edge.coordinateBase.opacity);

		var x = edge.coordinateBase.edgeXRect;
		var y = edge.coordinateBase.edgeYRect;

		ctx.beginPath();

		if (edge.orient === "right") {
			ctx.moveTo(x, y + rectHeight / 2);
			ctx.lineTo(x + arrowWidth, y);
			ctx.lineTo(x + rectWidth + arrowWidth, y);
			ctx.lineTo(x + rectWidth + arrowWidth, y + rectHeight);
			ctx.lineTo(x + arrowWidth, y + rectHeight);
			ctx.closePath();
		} else if (edge.orient === "left") {
			ctx.moveTo(x, y);
			ctx.lineTo(x + rectWidth, y);
			ctx.lineTo(x + rectWidth + arrowWidth, y + rectHeight / 2);
			ctx.lineTo(x + rectWidth, y + rectHeight);
			ctx.lineTo(x, y + rectHeight);
			ctx.closePath();
		} else {
			ctx.rect(x, y, rectWidth, rectHeight);
		}
		ctx.fill();

		ctx.font = edge.coordinate.fontSize + "px " + edge.coordinate.fontFamily;
		ctx.fillStyle = edge.coordinate.textFill;
		ctx.textAlign = edge.coordinate.textAnchor === "middle" ? "center" : edge.coordinate.textAnchor;
		ctx.textBaseline = "middle";

		ctx.fillText(edge.coordinate.displayCoordinate, edge.coordinate.edgeXText, edge.coordinate.edgeYText);
	}
	if ((0, _utils.isDefined)(edge.line)) {
		ctx.strokeStyle = (0, _utils.hexToRGBA)(edge.line.stroke, edge.line.opacity);

		ctx.beginPath();
		ctx.moveTo(edge.line.x1, edge.line.y1);
		ctx.lineTo(edge.line.x2, edge.line.y2);
		ctx.stroke();
	}
}

// export default EdgeCoordinate;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var windowSize = 9,
	    source = function source(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};

	function calculator(data) {

		var trueRangeAlgorithm = (0, _utils.slidingWindow)().windowSize(2).source(source).undefinedValue(function (d) {
			return d.high - d.low;
		}) // the first TR value is simply the High minus the Low
		.accumulator(function (values) {
			var prev = values[0];
			var d = values[1];
			return Math.max(d.high - d.low, d.high - prev.close, d.low - prev.close);
		});

		var prevATR;

		var atrAlgorithm = (0, _utils.slidingWindow)().skipInitial(1) // trueRange starts from index 1 so ATR starts from 1
		.windowSize(windowSize).accumulator(function (values) {
			var tr = (0, _utils.last)(values);
			var atr = (0, _utils.isDefined)(prevATR) ? (prevATR * (windowSize - 1) + tr) / windowSize : (0, _d3Array.sum)(values) / windowSize;

			prevATR = atr;
			return atr;
		});

		var newData = atrAlgorithm(trueRangeAlgorithm(data));

		return newData;
	}
	calculator.undefinedLength = function () {
		return windowSize;
	};
	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};

	calculator.source = function (x) {
		if (!arguments.length) {
			return source;
		}
		source = x;
		return calculator;
	};

	return calculator;
};

var _d3Array = __webpack_require__(9);

var _utils = __webpack_require__(2);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getChartOrigin = getChartOrigin;
exports.getDimensions = getDimensions;
exports.getNewChartConfig = getNewChartConfig;
exports.getCurrentCharts = getCurrentCharts;
exports.getChartConfigWithUpdatedYScales = getChartConfigWithUpdatedYScales;
exports.getCurrentItem = getCurrentItem;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Array = __webpack_require__(9);

var _d3Collection = __webpack_require__(16);

var _lodash = __webpack_require__(526);

var _lodash2 = _interopRequireDefault(_lodash);

var _Chart = __webpack_require__(92);

var _Chart2 = _interopRequireDefault(_Chart);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChartOrigin(origin, contextWidth, contextHeight) {
	var originCoordinates = typeof origin === "function" ? origin(contextWidth, contextHeight) : origin;
	return originCoordinates;
}

function getDimensions(_ref, chartProps) {
	var width = _ref.width;
	var height = _ref.height;


	var chartWidth = chartProps.width || width;
	var chartHeight = chartProps.height || height;

	return {
		availableWidth: width,
		availableHeight: height,
		width: chartWidth,
		height: chartHeight
	};
}

function values(func) {
	return function (d) {
		var obj = func(d);
		return (0, _index.isObject)(obj) ? Object.keys(obj).map(function (key) {
			return obj[key];
		}) : obj;
	};
}

function getNewChartConfig(innerDimension, children) {

	return _react2.default.Children.map(children, function (each) {
		if (each.type === _Chart2.default) {
			var _each$props = each.props;
			var id = _each$props.id;
			var origin = _each$props.origin;
			var padding = _each$props.padding;
			var yExtentsProp = _each$props.yExtents;
			var yScale = _each$props.yScale;
			var flipYScale = _each$props.flipYScale;
			var yExtentsCalculator = _each$props.yExtentsCalculator;

			var _getDimensions = getDimensions(innerDimension, each.props);

			var width = _getDimensions.width;
			var height = _getDimensions.height;
			var availableWidth = _getDimensions.availableWidth;
			var availableHeight = _getDimensions.availableHeight;
			var yPan = each.props.yPan;
			// var { yMousePointerRectWidth: rectWidth, yMousePointerRectHeight: rectHeight, yMousePointerArrowWidth: arrowWidth } = each.props;
			// var mouseCoordinates = { at, yDisplayFormat, rectHeight, rectWidth, arrowWidth };

			var yExtents = (0, _index.isDefined)(yExtentsProp) ? (Array.isArray(yExtentsProp) ? yExtentsProp : [yExtentsProp]).map(_index.functor) : undefined;
			// console.log(yExtentsProp, yExtents);
			return {
				id: id,
				origin: (0, _index.functor)(origin)(availableWidth, availableHeight),
				padding: padding,
				yExtents: yExtents,
				yExtentsCalculator: yExtentsCalculator,
				flipYScale: flipYScale,
				yScale: yScale,
				yPan: yPan,
				// mouseCoordinates,
				width: width,
				height: height
			};
		}
		return undefined;
	}).filter(function (each) {
		return (0, _index.isDefined)(each);
	});
}
function getCurrentCharts(chartConfig, mouseXY) {
	var currentCharts = chartConfig.filter(function (eachConfig) {
		var top = eachConfig.origin[1];
		var bottom = top + eachConfig.height;
		return mouseXY[1] > top && mouseXY[1] < bottom;
	}).map(function (config) {
		return config.id;
	});

	return currentCharts;
}

function setRange(scale, height, padding, flipYScale) {
	if (scale.rangeRoundPoints) {
		if (isNaN(padding)) throw new Error("padding has to be a number for ordinal scale");
		scale.rangeRoundPoints(flipYScale ? [0, height] : [height, 0], padding);
	} else {
		var _ref2 = isNaN(padding) ? padding : { top: padding, bottom: padding };

		var top = _ref2.top;
		var bottom = _ref2.bottom;


		scale.range(flipYScale ? [top, height - bottom] : [height - bottom, top]);
	}
	return scale;
}

function yDomainFromYExtents(yExtents, yScale, plotData) {
	var yValues = yExtents.map(function (eachExtent) {
		return plotData.map(values(eachExtent));
	});

	var allYValues = (0, _lodash2.default)(yValues);

	var realYDomain = yScale.invert ? (0, _d3Array.extent)(allYValues) : (0, _d3Collection.set)(allYValues).values();

	return realYDomain;
}

function getChartConfigWithUpdatedYScales(chartConfig, plotData, dy, chartsToPan) {

	var yDomains = chartConfig.map(function (_ref3) {
		var yExtentsCalculator = _ref3.yExtentsCalculator;
		var yExtents = _ref3.yExtents;
		var yScale = _ref3.yScale;


		var realYDomain = (0, _index.isDefined)(yExtentsCalculator) ? yExtentsCalculator(plotData) : yDomainFromYExtents(yExtents, yScale, plotData);

		var yDomainDY = (0, _index.isDefined)(dy) ? yScale.range().map(function (each) {
			return each - dy;
		}).map(yScale.invert) : yScale.domain();
		return {
			realYDomain: realYDomain,
			yDomainDY: yDomainDY,
			prevYDomain: yScale.domain()
		};
	});

	var combine = (0, _index.zipper)().combine(function (config, _ref4) {
		var realYDomain = _ref4.realYDomain;
		var yDomainDY = _ref4.yDomainDY;
		var prevYDomain = _ref4.prevYDomain;
		var id = config.id;
		var padding = config.padding;
		var height = config.height;
		var yScale = config.yScale;
		var yPan = config.yPan;
		var flipYScale = config.flipYScale;
		var _config$yPanEnabled = config.yPanEnabled;
		var yPanEnabled = _config$yPanEnabled === undefined ? false : _config$yPanEnabled;


		var another = (0, _index.isDefined)(chartsToPan) ? chartsToPan.indexOf(id) > -1 : true;
		var domain = yPan && yPanEnabled ? another ? yDomainDY : prevYDomain : realYDomain;
		// console.log(yPan, yPanEnabled, properYDomain, domain, realYDomain)
		return _extends({}, config, {
			yScale: setRange(yScale.copy().domain(domain), height, padding, flipYScale),
			realYDomain: realYDomain
		});
		// return { ...config, yScale: yScale.copy().domain(domain).range([height - padding, padding]) };
	});

	var updatedChartConfig = combine(chartConfig, yDomains);
	return updatedChartConfig;
}

function getCurrentItem(xScale, xAccessor, mouseXY, plotData) {
	var xValue, item;
	if (xScale.invert) {
		xValue = xScale.invert(mouseXY[0]);
		item = (0, _index.getClosestItem)(plotData, xValue, xAccessor);
	} else {
		var d = xScale.range().map(function (d, idx) {
			return { x: Math.abs(d - mouseXY[0]), idx: idx };
		}).reduce(function (a, b) {
			return a.x < b.x ? a : b;
		});
		item = (0, _index.isDefined)(d) ? plotData[d.idx] : plotData[0];
		// console.log(d, item);
	}
	return item;
}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _shallowEqual = __webpack_require__(106);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PureComponent = function (_Component) {
	_inherits(PureComponent, _Component);

	function PureComponent() {
		_classCallCheck(this, PureComponent);

		return _possibleConstructorReturn(this, (PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).apply(this, arguments));
	}

	_createClass(PureComponent, [{
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
			return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
		}
	}]);

	return PureComponent;
}(_react.Component);

exports.default = PureComponent;

/***/ },
/* 63 */,
/* 64 */,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(34);


/* harmony default export */ exports["a"] = function(array, p, f) {
  if (f == null) f = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = array.length)) return;
  if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
  if (p >= 1) return +f(array[n - 1], n - 1, array);
  var n,
      h = (n - 1) * p,
      i = Math.floor(h),
      a = +f(array[i], i, array),
      b = +f(array[i + 1], i + 1, array);
  return a + (b - a) * (h - i);
};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ exports["a"] = map;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(68);
/* harmony export (immutable) */ exports["c"] = Color;
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return brighter; });
/* harmony export (immutable) */ exports["g"] = color;
/* harmony export (immutable) */ exports["b"] = rgbConvert;
/* harmony export (immutable) */ exports["f"] = rgb;
/* harmony export (immutable) */ exports["a"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ exports["h"] = hsl;


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,
    reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,
    reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,
    reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,
    reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,
    reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = extend;
/* harmony default export */ exports["a"] = function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
};

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ },
/* 69 */,
/* 70 */,
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ exports["a"] = function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ exports["b"] = function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(126);









/* harmony default export */ exports["a"] = function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x) {
  return function() {
    return x;
  };
};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_creator__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_local__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_matcher__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mouse__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_namespace__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespaces__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_select__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_selectAll__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_selection_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selector__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selectorAll__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_touch__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_touches__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_window__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_selection_on__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "creator", function() { return __WEBPACK_IMPORTED_MODULE_0__src_creator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "local", function() { return __WEBPACK_IMPORTED_MODULE_1__src_local__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_2__src_matcher__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_3__src_mouse__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_4__src_namespace__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_5__src_namespaces__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "select", function() { return __WEBPACK_IMPORTED_MODULE_6__src_select__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_7__src_selectAll__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "selection", function() { return __WEBPACK_IMPORTED_MODULE_8__src_selection_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "selector", function() { return __WEBPACK_IMPORTED_MODULE_9__src_selector__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_10__src_selectorAll__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "touch", function() { return __WEBPACK_IMPORTED_MODULE_11__src_touch__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "touches", function() { return __WEBPACK_IMPORTED_MODULE_12__src_touches__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "window", function() { return __WEBPACK_IMPORTED_MODULE_13__src_window__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "event", function() { return __WEBPACK_IMPORTED_MODULE_14__src_selection_on__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_14__src_selection_on__["c"]; });

















/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(78);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ exports["a"] = function(name) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
};


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(78);


/* harmony default export */ exports["a"] = function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ exports["a"] = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return event; });
/* harmony export (immutable) */ exports["c"] = customEvent;
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ exports["b"] = function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
};

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ exports["a"] = function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
};


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(80);


/* harmony default export */ exports["a"] = function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["a" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
};


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
};


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(54);
/* harmony export (immutable) */ exports["a"] = point;



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["b" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["b" /* epsilon */]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ exports["b"] = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["c" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(143);





/* harmony default export */ exports["a"] = function() {
  var x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      defined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(41);
/* harmony export (immutable) */ exports["b"] = sum;


/* harmony default export */ exports["a"] = function(series) {
  var sums = series.map(sum);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[a] - sums[b]; });
};

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return utcParse; });
/* harmony export (immutable) */ exports["e"] = defaultLocale;


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__(470);
/* unused harmony reexport timeInterval */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* unused harmony reexport utcMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "t", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport timeSeconds */
/* unused harmony reexport utcSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["a"]; });
/* unused harmony reexport timeDays */
/* unused harmony reexport timeWednesday */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWeeks */
/* unused harmony reexport timeWednesdays */
/* unused harmony reexport timeThursday */
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "r", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* unused harmony reexport utcHours */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "q", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* unused harmony reexport utcThursday */
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ },
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Scale = __webpack_require__(14);

var _PureComponent2 = __webpack_require__(62);

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = function (_PureComponent) {
	_inherits(Chart, _PureComponent);

	function Chart(props, context) {
		_classCallCheck(this, Chart);

		var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props, context));

		_this.yScale = _this.yScale.bind(_this);
		return _this;
	}

	_createClass(Chart, [{
		key: "yScale",
		value: function yScale() {
			var _this2 = this;

			var chartConfig = this.context.chartConfig.filter(function (each) {
				return each.id === _this2.props.id;
			})[0];
			return chartConfig.yScale.copy();
		}
	}, {
		key: "getChildContext",
		value: function getChildContext() {
			var chartId = this.props.id;
			var _context = this.context;
			var ratio = _context.ratio;
			var margin = _context.margin;

			var chartConfig = this.context.chartConfig.filter(function (each) {
				return each.id === chartId;
			})[0];

			var width = chartConfig.width;
			var height = chartConfig.height;

			var canvasOriginX = 0.5 * ratio + chartConfig.origin[0] + margin.left;
			var canvasOriginY = 0.5 * ratio + chartConfig.origin[1] + margin.top;

			return { chartId: chartId, chartConfig: chartConfig, canvasOriginX: canvasOriginX, canvasOriginY: canvasOriginY, width: width, height: height };
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var origin = this.context.chartConfig.filter(function (each) {
				return each.id === _this3.props.id;
			})[0].origin;

			var _origin = _slicedToArray(origin, 2);

			var x = _origin[0];
			var y = _origin[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + x + ", " + y + ")" },
				this.props.children
			);
		}
	}]);

	return Chart;
}(_PureComponent3.default);

Chart.propTypes = {
	height: _react.PropTypes.number,
	width: _react.PropTypes.number,
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	id: _react.PropTypes.number.isRequired,
	yExtents: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]),
	yExtentsCalculator: function yExtentsCalculator(props, propName, componentName) {
		if ((0, _utils.isNotDefined)(props.yExtents) && typeof props.yExtentsCalculator !== "function") return new Error("yExtents or yExtentsCalculator must" + (" be present on " + componentName + ". Validation failed."));
	},
	yScale: _react.PropTypes.func.isRequired,
	yMousePointerDisplayLocation: _react.PropTypes.oneOf(["left", "right"]),
	yMousePointerDisplayFormat: _react.PropTypes.func,
	flipYScale: _react.PropTypes.bool.isRequired,
	padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
		top: _react.PropTypes.number,
		bottom: _react.PropTypes.number
	})]).isRequired,
	children: _react.PropTypes.node
};

Chart.defaultProps = {
	id: 0,
	origin: [0, 0],
	padding: 0,
	yScale: (0, _d3Scale.scaleLinear)(),
	flipYScale: false,
	yPan: true
};

Chart.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	chartConfig: _react.PropTypes.array,
	margin: _react.PropTypes.object.isRequired,
	ratio: _react.PropTypes.number.isRequired

};

Chart.childContextTypes = {
	height: _react.PropTypes.number,
	width: _react.PropTypes.number,
	chartConfig: _react.PropTypes.object.isRequired,
	canvasOriginX: _react.PropTypes.number,
	canvasOriginY: _react.PropTypes.number,
	chartId: _react.PropTypes.number.isRequired
};

exports.default = Chart;

/***/ },
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.helper = helper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelAnnotation = function (_Component) {
	_inherits(LabelAnnotation, _Component);

	function LabelAnnotation(props) {
		_classCallCheck(this, LabelAnnotation);

		var _this = _possibleConstructorReturn(this, (LabelAnnotation.__proto__ || Object.getPrototypeOf(LabelAnnotation)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(LabelAnnotation, [{
		key: "handleClick",
		value: function handleClick(e) {
			var onClick = this.props.onClick;


			if (onClick) {
				var _props = this.props;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var datum = _props.datum;

				onClick({ xScale: xScale, yScale: yScale, datum: datum }, e);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props;
			var className = _props2.className;
			var textAnchor = _props2.textAnchor;
			var fontFamily = _props2.fontFamily;
			var fontSize = _props2.fontSize;
			var opacity = _props2.opacity;
			var rotate = _props2.rotate;
			var _props3 = this.props;
			var xAccessor = _props3.xAccessor;
			var xScale = _props3.xScale;
			var yScale = _props3.yScale;

			var _helper = helper(this.props, xAccessor, xScale, yScale);

			var xPos = _helper.xPos;
			var yPos = _helper.yPos;
			var fill = _helper.fill;
			var text = _helper.text;
			var tooltip = _helper.tooltip;


			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(
					"title",
					null,
					tooltip
				),
				_react2.default.createElement(
					"text",
					{ x: xPos, y: yPos,
						fontFamily: fontFamily, fontSize: fontSize,
						fill: fill,
						opacity: opacity,
						transform: "rotate(" + rotate + ", " + xPos + ", " + yPos + ")",
						onClick: this.handleClick,
						textAnchor: textAnchor },
					text
				)
			);
		}
	}]);

	return LabelAnnotation;
}(_react.Component);

function helper(props, xAccessor, xScale, yScale) {
	var x = props.x;
	var y = props.y;
	var datum = props.datum;
	var fill = props.fill;
	var text = props.text;
	var tooltip = props.tooltip;
	var plotData = props.plotData;


	var xFunc = (0, _utils.functor)(x);
	var yFunc = (0, _utils.functor)(y);

	var xPos = xFunc({ xScale: xScale, xAccessor: xAccessor, datum: datum, plotData: plotData });
	var yPos = yFunc({ yScale: yScale, datum: datum, plotData: plotData });


	return {
		xPos: xPos,
		yPos: yPos,
		text: (0, _utils.functor)(text)(datum),
		fill: (0, _utils.functor)(fill)(datum),
		tooltip: (0, _utils.functor)(tooltip)(datum)
	};
}

LabelAnnotation.propTypes = {
	className: _react.PropTypes.string,
	text: _react.PropTypes.string,
	textAnchor: _react.PropTypes.string,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	opacity: _react.PropTypes.number,
	rotate: _react.PropTypes.number,
	onClick: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	datum: _react.PropTypes.object,
	x: _react.PropTypes.func,
	y: _react.PropTypes.func
};

var defaultProps = exports.defaultProps = {
	textAnchor: "middle",
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 12,
	fill: "#000000",
	opacity: 1,
	rotate: 0,
	x: function x(_ref) {
		var xScale = _ref.xScale;
		var xAccessor = _ref.xAccessor;
		var datum = _ref.datum;
		return xScale(xAccessor(datum));
	}
};

LabelAnnotation.defaultProps = _extends({}, defaultProps, {
	className: "react-stockcharts-labelannotation"
});

exports.default = LabelAnnotation;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _AxisZoomCapture = __webpack_require__(268);

var _AxisZoomCapture2 = _interopRequireDefault(_AxisZoomCapture);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Axis = function (_Component) {
	_inherits(Axis, _Component);

	function Axis(props) {
		_classCallCheck(this, Axis);

		var _this = _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		_this.getMoreProps = _this.getMoreProps.bind(_this);

		return _this;
	}

	_createClass(Axis, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props = this.props;
			var showDomain = _props.showDomain;
			var showTicks = _props.showTicks;
			var transform = _props.transform;
			var range = _props.range;
			var getScale = _props.getScale;


			ctx.save();
			ctx.translate(transform[0], transform[1]);

			if (showDomain) drawAxisLine(ctx, this.props, range);
			if (showTicks) {
				var tickProps = tickHelper(this.props, getScale(moreProps));
				drawTicks(ctx, tickProps);
			}

			ctx.restore();
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var className = this.props.className;
			var _props2 = this.props;
			var showDomain = _props2.showDomain;
			var showTicks = _props2.showTicks;
			var range = _props2.range;
			var getScale = _props2.getScale;


			var ticks = showTicks ? axisTicksSVG(this.props, getScale(moreProps)) : null;
			var domain = showDomain ? axisLineSVG(this.props, range) : null;

			return _react2.default.createElement(
				"g",
				{ className: className },
				ticks,
				domain
			);
		}
	}, {
		key: "getMoreProps",
		value: function getMoreProps() {
			return this.refs.propProvider.getMoreProps();
		}
	}, {
		key: "render",
		value: function render() {
			var _props3 = this.props;
			var bg = _props3.bg;
			var axisZoomCallback = _props3.axisZoomCallback;
			var zoomCursorClassName = _props3.zoomCursorClassName;
			var zoomEnabled = _props3.zoomEnabled;
			var getScale = _props3.getScale;
			var _props4 = this.props;
			var transform = _props4.transform;
			var getMouseDelta = _props4.getMouseDelta;
			var edgeClip = _props4.edgeClip;


			var zoomCapture = zoomEnabled ? _react2.default.createElement(_AxisZoomCapture2.default, {
				bg: bg,
				getScale: getScale,
				getMoreProps: this.getMoreProps,
				getMouseDelta: getMouseDelta,
				axisZoomCallback: axisZoomCallback,
				zoomCursorClassName: zoomCursorClassName }) : null;

			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + transform[0] + ", " + transform[1] + ")" },
				zoomCapture,
				_react2.default.createElement(_GenericChartComponent2.default, { ref: "propProvider",
					canvasToDraw: _GenericChartComponent.getAxisCanvas,
					clip: false,
					edgeClip: edgeClip,
					svgDraw: this.renderSVG,
					canvasDraw: this.drawOnCanvas,
					drawOnPan: true
				})
			);
		}
	}]);

	return Axis;
}(_react.Component);

Axis.propTypes = {
	innerTickSize: _react.PropTypes.number,
	outerTickSize: _react.PropTypes.number,
	tickFormat: _react.PropTypes.func,
	tickPadding: _react.PropTypes.number,
	tickSize: _react.PropTypes.number,
	ticks: _react.PropTypes.number,
	tickValues: _react.PropTypes.array,
	showDomain: _react.PropTypes.bool,
	showTicks: _react.PropTypes.bool,
	className: _react.PropTypes.string,
	axisZoomCallback: _react.PropTypes.func,
	zoomEnabled: _react.PropTypes.bool,
	zoomCursorClassName: _react.PropTypes.string,
	transform: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
	range: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
	getMouseDelta: _react.PropTypes.func.isRequired,
	getScale: _react.PropTypes.func.isRequired,
	bg: _react.PropTypes.object.isRequired,
	edgeClip: _react.PropTypes.bool.isRequired
};

Axis.defaultProps = {
	zoomEnabled: false,
	zoomCursorClassName: "",
	edgeClip: false
};

Axis.contextTypes = {
	height: _react.PropTypes.number.isRequired,
	width: _react.PropTypes.number.isRequired
};

function tickTransform_svg_axisX(scale, tick) {
	return [Math.round(scale(tick)), 0];
}

function tickTransform_svg_axisY(scale, tick) {
	return [0, Math.round(scale(tick))];
}

function tickHelper(props, scale) {
	var orient = props.orient;
	var innerTickSize = props.innerTickSize;
	var tickFormat = props.tickFormat;
	var tickPadding = props.tickPadding;
	var fontSize = props.fontSize;
	var fontFamily = props.fontFamily;
	var tickArguments = props.ticks;
	var tickValues = props.tickValues;
	var tickStroke = props.tickStroke;
	var tickStrokeOpacity = props.tickStrokeOpacity;


	if (tickArguments) tickArguments = [tickArguments];

	var ticks = (0, _utils.isNotDefined)(tickValues) ? (0, _utils.isDefined)(scale.ticks) ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues;

	var baseFormat = scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _utils.identity;

	var format = (0, _utils.isNotDefined)(tickFormat) ? baseFormat : function (d) {
		return baseFormat(d) ? tickFormat(d) : "";
	};

	var sign = orient === "top" || orient === "left" ? -1 : 1;
	var tickSpacing = Math.max(innerTickSize, 0) + tickPadding;

	var tickTransform, x, y, x2, y2, dy, canvas_dy, textAnchor;

	if (orient === "bottom" || orient === "top") {
		tickTransform = tickTransform_svg_axisX;
		x2 = 0;
		y2 = sign * innerTickSize;
		x = 0;
		y = sign * tickSpacing;
		dy = sign < 0 ? "0em" : ".71em";
		canvas_dy = sign < 0 ? 0 : fontSize * .71;
		textAnchor = "middle";
	} else {
		tickTransform = tickTransform_svg_axisY;
		x2 = sign * innerTickSize;
		y2 = 0;
		x = sign * tickSpacing;
		y = 0;
		dy = ".32em";
		canvas_dy = fontSize * .32;
		textAnchor = sign < 0 ? "end" : "start";
	}
	return { ticks: ticks, scale: scale, tickTransform: tickTransform, tickStroke: tickStroke, tickStrokeOpacity: tickStrokeOpacity, dy: dy, canvas_dy: canvas_dy, x: x, y: y, x2: x2, y2: y2, textAnchor: textAnchor, fontSize: fontSize, fontFamily: fontFamily, format: format };
}

/* eslint-disable react/prop-types */
function axisLineSVG(props, range) {
	var orient = props.orient;
	var outerTickSize = props.outerTickSize;
	var domainClassName = props.domainClassName;
	var fill = props.fill;
	var stroke = props.stroke;
	var strokeWidth = props.strokeWidth;
	var opacity = props.opacity;


	var sign = orient === "top" || orient === "left" ? -1 : 1;

	var d;

	if (orient === "bottom" || orient === "top") {
		d = "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize;
	} else {
		d = "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize;
	}

	return _react2.default.createElement("path", {
		className: domainClassName,
		d: d,
		fill: fill,
		opacity: opacity,
		stroke: stroke,
		strokeWidth: strokeWidth });
}
/* eslint-enable react/prop-types */

function drawAxisLine(ctx, props, range) {
	// props = { ...AxisLine.defaultProps, ...props };

	var orient = props.orient;
	var outerTickSize = props.outerTickSize;
	var stroke = props.stroke;
	var strokeWidth = props.strokeWidth;
	var opacity = props.opacity;


	var sign = orient === "top" || orient === "left" ? -1 : 1;
	var xAxis = orient === "bottom" || orient === "top";

	// var range = d3_scaleRange(xAxis ? xScale : yScale);

	ctx.lineWidth = strokeWidth;
	ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);

	ctx.beginPath();

	if (xAxis) {
		ctx.moveTo((0, _utils.first)(range), sign * outerTickSize);
		ctx.lineTo((0, _utils.first)(range), 0);
		ctx.lineTo((0, _utils.last)(range), 0);
		ctx.lineTo((0, _utils.last)(range), sign * outerTickSize);
	} else {
		ctx.moveTo(sign * outerTickSize, (0, _utils.first)(range));
		ctx.lineTo(0, (0, _utils.first)(range));
		ctx.lineTo(0, (0, _utils.last)(range));
		ctx.lineTo(sign * outerTickSize, (0, _utils.last)(range));
	}
	ctx.stroke();
}

function Tick(props) {
	var transform = props.transform;
	var tickStroke = props.tickStroke;
	var tickStrokeOpacity = props.tickStrokeOpacity;
	var textAnchor = props.textAnchor;
	var fontSize = props.fontSize;
	var fontFamily = props.fontFamily;
	var x = props.x;
	var y = props.y;
	var x2 = props.x2;
	var y2 = props.y2;
	var dy = props.dy;

	return _react2.default.createElement(
		"g",
		{ className: "tick", transform: "translate(" + transform[0] + ", " + transform[1] + ")" },
		_react2.default.createElement("line", { shapeRendering: "crispEdges", opacity: tickStrokeOpacity, stroke: tickStroke, x2: x2, y2: y2 }),
		_react2.default.createElement(
			"text",
			{
				dy: dy, x: x, y: y,
				fill: tickStroke,
				fontSize: fontSize,
				fontFamily: fontFamily,
				textAnchor: textAnchor },
			props.children
		)
	);
}

Tick.propTypes = {
	children: _react.PropTypes.string.isRequired,
	x: _react.PropTypes.number.isRequired,
	y: _react.PropTypes.number.isRequired,
	x2: _react.PropTypes.number.isRequired,
	y2: _react.PropTypes.number.isRequired,
	dy: _react.PropTypes.string.isRequired,
	transform: _react.PropTypes.array,
	tickStroke: _react.PropTypes.string,
	tickStrokeOpacity: _react.PropTypes.number,
	textAnchor: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	fontFamily: _react.PropTypes.string
};

function axisTicksSVG(props, scale) {
	var result = tickHelper(props, scale);

	var tickStroke = result.tickStroke;
	var tickStrokeOpacity = result.tickStrokeOpacity;
	var textAnchor = result.textAnchor;
	var tickTransform = result.tickTransform;
	var fontSize = result.fontSize;
	var fontFamily = result.fontFamily;
	var ticks = result.ticks;
	var format = result.format;
	var dy = result.dy;
	var x = result.x;
	var y = result.y;
	var x2 = result.x2;
	var y2 = result.y2;


	return _react2.default.createElement(
		"g",
		null,
		ticks.map(function (tick, idx) {
			return _react2.default.createElement(
				Tick,
				{ key: idx, transform: tickTransform(scale, tick),
					tickStroke: tickStroke, tickStrokeOpacity: tickStrokeOpacity,
					dy: dy, x: x, y: y,
					x2: x2, y2: y2, textAnchor: textAnchor,
					fontSize: fontSize, fontFamily: fontFamily },
				format(tick)
			);
		})
	);
}

function drawTicks(ctx, result) {
	var tickStroke = result.tickStroke;
	var tickStrokeOpacity = result.tickStrokeOpacity;
	var textAnchor = result.textAnchor;
	var fontSize = result.fontSize;
	var fontFamily = result.fontFamily;
	var ticks = result.ticks;


	ctx.strokeStyle = (0, _utils.hexToRGBA)(tickStroke, tickStrokeOpacity);

	ctx.font = fontSize + "px " + fontFamily;
	ctx.fillStyle = tickStroke;
	ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;
	// ctx.textBaseline = 'middle';

	ticks.forEach(function (tick) {
		drawEachTick(ctx, tick, result);
	});
}

function drawEachTick(ctx, tick, result) {
	var scale = result.scale;
	var tickTransform = result.tickTransform;
	var canvas_dy = result.canvas_dy;
	var x = result.x;
	var y = result.y;
	var x2 = result.x2;
	var y2 = result.y2;
	var format = result.format;


	var origin = tickTransform(scale, tick);

	ctx.beginPath();

	ctx.moveTo(origin[0], origin[1]);
	ctx.lineTo(origin[0] + x2, origin[1] + y2);
	ctx.stroke();

	ctx.fillText(format(tick), origin[0] + x, origin[1] + y + canvas_dy);
}

exports.default = Axis;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Selection = __webpack_require__(75);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

var _ChartDataUtil = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InteractiveLine = function (_Component) {
	_inherits(InteractiveLine, _Component);

	function InteractiveLine(props) {
		_classCallCheck(this, InteractiveLine);

		var _this = _possibleConstructorReturn(this, (InteractiveLine.__proto__ || Object.getPrototypeOf(InteractiveLine)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleDrag = _this.handleDrag.bind(_this);
		_this.handleDragEnd = _this.handleDragEnd.bind(_this);

		_this.handleEdgeDrag1 = _this.handleEdgeDrag1.bind(_this);
		_this.handleEdgeDrag2 = _this.handleEdgeDrag2.bind(_this);
		_this.handleEdgeDragEnd = _this.handleEdgeDragEnd.bind(_this);
		return _this;
	}

	_createClass(InteractiveLine, [{
		key: "handleMouseDown",
		value: function handleMouseDown(e) {
			e.preventDefault();

			var win = (0, _utils.d3Window)(this.refs.component.getRef("capture"));
			(0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, this.handleDrag).on(_utils.MOUSEUP, this.handleDragEnd);

			var mouseXY = [e.pageX, e.pageY];

			var _props = this.props;
			var x1Value = _props.x1Value;
			var x2Value = _props.x2Value;
			var y1Value = _props.y1Value;
			var y2Value = _props.y2Value;


			this.moveStartPosition = {
				mouseXY: mouseXY,
				x1Value: x1Value, x2Value: x2Value, y1Value: y1Value, y2Value: y2Value
			};
		}
	}, {
		key: "handleDrag",
		value: function handleDrag() {
			var e = _d3Selection.event;
			var moreProps = this.refs.component.getMoreProps();
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var xAccessor = this.context.xAccessor;
			var _moveStartPosition = this.moveStartPosition;
			var mouseXY = _moveStartPosition.mouseXY;
			var x1Value = _moveStartPosition.x1Value;
			var x2Value = _moveStartPosition.x2Value;
			var y1Value = _moveStartPosition.y1Value;
			var y2Value = _moveStartPosition.y2Value;

			var x1 = xScale(x1Value);
			var y1 = yScale(y1Value);
			var x2 = xScale(x2Value);
			var y2 = yScale(y2Value);

			var newPos = [e.pageX, e.pageY];

			var dx = mouseXY[0] - newPos[0];
			var dy = mouseXY[1] - newPos[1];

			var newX1Value = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [x1 - dx, y1 - dy], plotData));
			var newY1Value = yScale.invert(y1 - dy);
			var newX2Value = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [x2 - dx, y2 - dy], plotData));
			var newY2Value = yScale.invert(y2 - dy);

			this.props.onDrag(this.props.echo, {
				x1Value: newX1Value,
				y1Value: newY1Value,
				x2Value: newX2Value,
				y2Value: newY2Value,
				dx: dx, dy: dy
			}, {
				x1Value: x1Value,
				y1Value: y1Value,
				x2Value: x2Value,
				y2Value: y2Value
			}, e);
		}
	}, {
		key: "handleDragEnd",
		value: function handleDragEnd() {
			var e = _d3Selection.event;
			this.moveStartPosition = null;

			var win = (0, _utils.d3Window)(this.refs.component.getRef("capture"));

			(0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);

			this.props.onDragComplete(this.props.echo, e);
		}
	}, {
		key: "handleEdgeDrag1",
		value: function handleEdgeDrag1(edge, origEdge, e) {
			var _edge = _slicedToArray(edge, 2);

			var newCX = _edge[0];
			var newCY = _edge[1];

			var _origEdge = _slicedToArray(origEdge, 2);

			var cx = _origEdge[0];
			var cy = _origEdge[1];


			var moreProps = this.refs.component.getMoreProps();
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var xAccessor = this.context.xAccessor;
			var _props2 = this.props;
			var x2Value = _props2.x2Value;
			var y2Value = _props2.y2Value;


			var newXValue = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [newCX, newCY], plotData));
			var newYValue = yScale.invert(newCY);
			var oldXValue = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [cx, cy], plotData));
			var oldYValue = yScale.invert(cy);

			this.props.onEdge1Drag(this.props.echo, {
				x1Value: newXValue,
				y1Value: newYValue,
				x2Value: x2Value,
				y2Value: y2Value
			}, {
				x1Value: oldXValue,
				y1Value: oldYValue,
				x2Value: x2Value,
				y2Value: y2Value
			}, e);
		}
	}, {
		key: "handleEdgeDrag2",
		value: function handleEdgeDrag2(edge, origEdge, e) {
			var _edge2 = _slicedToArray(edge, 2);

			var newCX = _edge2[0];
			var newCY = _edge2[1];

			var _origEdge2 = _slicedToArray(origEdge, 2);

			var cx = _origEdge2[0];
			var cy = _origEdge2[1];


			var moreProps = this.refs.component.getMoreProps();
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var xAccessor = this.context.xAccessor;
			var _props3 = this.props;
			var x1Value = _props3.x1Value;
			var y1Value = _props3.y1Value;


			var newXValue = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [newCX, newCY], plotData));
			var newYValue = yScale.invert(newCY);
			var oldXValue = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [cx, cy], plotData));
			var oldYValue = yScale.invert(cy);

			this.props.onEdge2Drag(this.props.echo, {
				x1Value: x1Value,
				y1Value: y1Value,
				x2Value: newXValue,
				y2Value: newYValue
			}, {
				x1Value: x1Value,
				y1Value: y1Value,
				x2Value: oldXValue,
				y2Value: oldYValue
			}, e);
		}
	}, {
		key: "handleEdgeDragEnd",
		value: function handleEdgeDragEnd(e) {
			this.props.onDragComplete(this.props.echo, e);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props4 = this.props;
			var x1Value = _props4.x1Value;
			var x2Value = _props4.x2Value;
			var y1Value = _props4.y1Value;
			var y2Value = _props4.y2Value;
			var withEdge = _props4.withEdge;
			var type = _props4.type;
			var _props5 = this.props;
			var defaultClassName = _props5.defaultClassName;
			var stroke = _props5.stroke;
			var strokeWidth = _props5.strokeWidth;
			var opacity = _props5.opacity;
			var _props6 = this.props;
			var r = _props6.r;
			var edgeFill = _props6.edgeFill;
			var edgeStroke = _props6.edgeStroke;
			var edgeStrokeWidth = _props6.edgeStrokeWidth;
			var children = _props6.children;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var xAccessor = this.context.xAccessor;


			var modLine = generateLine(type, [x1Value, y1Value], [x2Value, y2Value], xAccessor, plotData);

			var x1 = xScale(modLine.x1);
			var y1 = yScale(modLine.y1);
			var x2 = xScale(modLine.x2);
			var y2 = yScale(modLine.y2);
			var childrenToRender = children(moreProps, this.props, modLine);

			return _react2.default.createElement(
				"g",
				{ ref: "capture" },
				_react2.default.createElement("line", {
					x1: x1, y1: y1, x2: x2, y2: y2,
					stroke: stroke, strokeWidth: strokeWidth,
					opacity: opacity }),
				_react2.default.createElement("line", { className: defaultClassName,
					onMouseDown: this.handleMouseDown,
					x1: x1, y1: y1, x2: x2, y2: y2,
					stroke: stroke, strokeWidth: 8, opacity: 0 }),
				withEdge ? _react2.default.createElement(ClickableCircle, { className: defaultClassName,
					onDrag: this.handleEdgeDrag1,
					onDragComplete: this.handleEdgeDragEnd,
					cx: x1, cy: y1, r: r,
					fill: edgeFill, stroke: edgeStroke,
					strokeWidth: edgeStrokeWidth,
					hoverOpacity: 1 }) : null,
				withEdge ? _react2.default.createElement(ClickableCircle, { className: defaultClassName,
					onDrag: this.handleEdgeDrag2,
					onDragComplete: this.handleEdgeDragEnd,
					cx: x2, cy: y2, r: r,
					fill: edgeFill, stroke: edgeStroke,
					strokeWidth: edgeStrokeWidth,
					hoverOpacity: 1 }) : null,
				childrenToRender
			);
		}
	}, {
		key: "render",
		value: function render() {
			// console.log("FOO")
			return _react2.default.createElement(_GenericChartComponent2.default, { ref: "component",
				svgDraw: this.renderSVG,
				drawOnPan: true
			});
		}
	}]);

	return InteractiveLine;
}(_react.Component);

function generateLine(type, start, end, xAccessor, plotData) {
	/* if (end[0] - start[0] === 0) {
 	// vertical line
 	throw new Error("Trendline cannot be a vertical line")
 } */
	var m /* slope */ = end[0] === start[0] ? 0 : (end[1] - start[1]) / (end[0] - start[0]);
	// console.log(end[0] - start[0], m)
	var b /* y intercept */ = -1 * m * end[0] + end[1];
	// y = m * x + b
	var x1 = type === "XLINE" ? xAccessor((0, _utils.head)(plotData)) : start[0]; // RAY or LINE start is the same

	var y1 = m * x1 + b;

	var x2 = type === "XLINE" ? xAccessor((0, _utils.last)(plotData)) : type === "RAY" ? end[0] > start[0] ? xAccessor((0, _utils.last)(plotData)) : xAccessor((0, _utils.head)(plotData)) : end[0];
	var y2 = m * x2 + b;
	return { x1: x1, y1: y1, x2: x2, y2: y2 };
}

InteractiveLine.propTypes = {
	x1Value: _react.PropTypes.any.isRequired,
	x2Value: _react.PropTypes.any.isRequired,
	y1Value: _react.PropTypes.any.isRequired,
	y2Value: _react.PropTypes.any.isRequired,

	stroke: _react.PropTypes.string.isRequired,
	strokeWidth: _react.PropTypes.number.isRequired,
	type: _react.PropTypes.oneOf(["XLINE", // extends from -Infinity to +Infinity
	"RAY", // extends to +/-Infinity in one direction
	"LINE"]).isRequired,
	onDrag: _react.PropTypes.func.isRequired,
	onEdge1Drag: _react.PropTypes.func.isRequired,
	onEdge2Drag: _react.PropTypes.func.isRequired,
	onDragComplete: _react.PropTypes.func.isRequired,
	r: _react.PropTypes.number.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	edgeFill: _react.PropTypes.string.isRequired,
	defaultClassName: _react.PropTypes.string,
	echo: _react.PropTypes.any,
	edgeStroke: _react.PropTypes.string.isRequired,
	edgeStrokeWidth: _react.PropTypes.number.isRequired,
	withEdge: _react.PropTypes.bool.isRequired,
	children: _react.PropTypes.func.isRequired
};

InteractiveLine.defaultProps = {
	onDrag: _utils.noop,
	onEdge1Drag: _utils.noop,
	onEdge2Drag: _utils.noop,
	onDragComplete: _utils.noop,
	edgeStrokeWidth: 3,
	edgeStroke: "#000000",
	edgeFill: "#FFFFFF",
	r: 10,
	withEdge: false,
	strokeWidth: 1,
	children: _utils.noop
};

InteractiveLine.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

var ClickableCircle = function (_Component2) {
	_inherits(ClickableCircle, _Component2);

	function ClickableCircle(props) {
		_classCallCheck(this, ClickableCircle);

		var _this2 = _possibleConstructorReturn(this, (ClickableCircle.__proto__ || Object.getPrototypeOf(ClickableCircle)).call(this, props));

		_this2.handleMouseEnter = _this2.handleMouseEnter.bind(_this2);
		_this2.handleMouseLeave = _this2.handleMouseLeave.bind(_this2);
		_this2.handleMouseDown = _this2.handleMouseDown.bind(_this2);
		_this2.handleDrag = _this2.handleDrag.bind(_this2);
		_this2.handleDragEnd = _this2.handleDragEnd.bind(_this2);
		_this2.state = {
			hover: false
		};
		return _this2;
	}

	_createClass(ClickableCircle, [{
		key: "handleMouseEnter",
		value: function handleMouseEnter() {
			this.setState({
				hover: true
			});
		}
	}, {
		key: "handleMouseLeave",
		value: function handleMouseLeave() {
			this.setState({
				hover: false
			});
		}
	}, {
		key: "handleMouseDown",
		value: function handleMouseDown(e) {
			e.preventDefault();

			var win = (0, _utils.d3Window)(this.refs.edge);
			(0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, this.handleDrag).on(_utils.MOUSEUP, this.handleDragEnd);

			var mouseXY = [e.pageX, e.pageY];

			var _props7 = this.props;
			var cx = _props7.cx;
			var cy = _props7.cy;


			this.moveStartPosition = {
				mouseXY: mouseXY,
				cx: cx, cy: cy
			};
		}
	}, {
		key: "handleDrag",
		value: function handleDrag() {
			var e = _d3Selection.event;
			var newPos = [e.pageX, e.pageY];

			var _moveStartPosition2 = this.moveStartPosition;
			var mouseXY = _moveStartPosition2.mouseXY;
			var cx = _moveStartPosition2.cx;
			var cy = _moveStartPosition2.cy;


			var dx = mouseXY[0] - newPos[0];
			var dy = mouseXY[1] - newPos[1];

			var newCX = cx - dx;
			var newCY = cy - dy;

			this.props.onDrag([newCX, newCY], [cx, cy], e);
		}
	}, {
		key: "handleDragEnd",
		value: function handleDragEnd() {
			var e = _d3Selection.event;
			this.moveStartPosition = null;

			var win = (0, _utils.d3Window)(this.refs.edge);

			(0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);

			this.props.onDragComplete(e);
		}
	}, {
		key: "render",
		value: function render() {
			var _props8 = this.props;
			var className = _props8.className;
			var cx = _props8.cx;
			var cy = _props8.cy;
			var r = _props8.r;
			var fill = _props8.fill;
			var stroke = _props8.stroke;
			var strokeWidth = _props8.strokeWidth;
			var hoverOpacity = _props8.hoverOpacity;

			var opacity = this.state.hover ? hoverOpacity : 0;
			return _react2.default.createElement("circle", { ref: "edge", className: className,
				onMouseEnter: this.handleMouseEnter,
				onMouseLeave: this.handleMouseLeave,
				onMouseDown: this.handleMouseDown,
				cx: cx, cy: cy, r: r,
				fill: fill, stroke: stroke,
				strokeWidth: strokeWidth,
				opacity: opacity });
		}
	}]);

	return ClickableCircle;
}(_react.Component);

ClickableCircle.propTypes = {
	onDrag: _react.PropTypes.func.isRequired,
	onDragComplete: _react.PropTypes.func.isRequired,
	hoverOpacity: _react.PropTypes.number.isRequired,
	strokeWidth: _react.PropTypes.number.isRequired,
	stroke: _react.PropTypes.string.isRequired,
	fill: _react.PropTypes.string.isRequired,
	r: _react.PropTypes.number.isRequired,
	cx: _react.PropTypes.number.isRequired,
	cy: _react.PropTypes.number.isRequired,
	className: _react.PropTypes.string.isRequired
};

ClickableCircle.defaultProps = {
	onDrag: _utils.noop,
	onDragComplete: _utils.noop
};

exports.default = InteractiveLine;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { getCurrentCharts } from "../utils/ChartDataUtil";

var MouseLocationIndicator = function (_Component) {
	_inherits(MouseLocationIndicator, _Component);

	function MouseLocationIndicator(props) {
		_classCallCheck(this, MouseLocationIndicator);

		var _this = _possibleConstructorReturn(this, (MouseLocationIndicator.__proto__ || Object.getPrototypeOf(MouseLocationIndicator)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);

		_this.handleMousePosChange = _this.handleMousePosChange.bind(_this);
		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		_this.xy = _this.xy.bind(_this);

		_this.mutableState = {};
		return _this;
	}

	_createClass(MouseLocationIndicator, [{
		key: "handleMouseDown",
		value: function handleMouseDown(e) {
			var moreProps = this.refs.component.getMoreProps();
			var pos = this.xy(moreProps, e);
			if ((0, _utils.isDefined)(pos)) {
				var xValue = pos.xValue;
				var yValue = pos.yValue;
				var x = pos.x;
				var y = pos.y;

				this.mutableState = { x: x, y: y };
				this.props.onMouseDown([xValue, yValue], e);
			}
		}
	}, {
		key: "handleClick",
		value: function handleClick(e) {
			var moreProps = this.refs.component.getMoreProps();
			var pos = this.xy(moreProps, e);
			if ((0, _utils.isDefined)(pos)) {
				var xValue = pos.xValue;
				var yValue = pos.yValue;
				var x = pos.x;
				var y = pos.y;

				this.mutableState = { x: x, y: y };
				this.props.onClick([xValue, yValue], e);
			}
		}
	}, {
		key: "xy",
		value: function xy(moreProps, e) {
			var xAccessor = this.context.xAccessor;
			var mouseXY = moreProps.mouseXY;
			var currentItem = moreProps.currentItem;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var _props = this.props;
			var enabled = _props.enabled;
			var snap = _props.snap;
			var shouldDisableSnap = _props.shouldDisableSnap;
			var snapTo = _props.snapTo;


			if (enabled && (0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(e)) {

				var xValue = xAccessor(currentItem);
				var yValue = snap && !shouldDisableSnap(e) ? (0, _utils.getClosestValue)(snapTo(currentItem), yScale.invert(mouseXY[1])) : yScale.invert(mouseXY[1]);

				var x = xScale(xValue);
				var y = yScale(yValue);

				return { xValue: xValue, yValue: yValue, x: x, y: y };
			}
		}
	}, {
		key: "handleMousePosChange",
		value: function handleMousePosChange(e) {
			// var { idx, onMouseEnter } = this.props;
			var moreProps = this.refs.component.getMoreProps();
			var prevMoreProps = this.refs.component.getPrevMoreProps();

			if (!(0, _utils.shallowEqual)(moreProps.mousXY, prevMoreProps.mouseXY)) {
				var pos = this.xy(moreProps, e);
				// console.log("HERE11", pos)
				if ((0, _utils.isDefined)(pos)) {
					var xValue = pos.xValue;
					var yValue = pos.yValue;
					var x = pos.x;
					var y = pos.y;

					this.mutableState = { x: x, y: y };
					this.props.onMouseMove([xValue, yValue], e);
				}
			}
			// console.log(this.refs.component.getRef("capture"))
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props2 = this.props;
			var enabled = _props2.enabled;
			var r = _props2.r;
			var stroke = _props2.stroke;
			var strokeWidth = _props2.strokeWidth;
			var opacity = _props2.opacity;
			var _mutableState = this.mutableState;
			var x = _mutableState.x;
			var y = _mutableState.y;
			var show = moreProps.show;
			// console.log("HERE")

			// console.log(stroke, strokeWidth, opacity)

			return enabled && show && (0, _utils.isDefined)(x) ? _react2.default.createElement("circle", { ref: "capture",
				className: "react-stockcharts-avoid-interaction",
				cx: x,
				cy: y,
				r: r,
				stroke: stroke,
				opacity: opacity,
				fill: "none",
				strokeWidth: strokeWidth }) : null;
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, { ref: "component",
				svgDraw: this.renderSVG,
				onMouseMove: this.handleMousePosChange,
				isHover: (0, _utils.functor)(true),
				onMouseDown: this.handleMouseDown,
				onClick: this.handleClick,
				onContextMenu: this.handleContextMenu,
				drawOnMouseExitOfCanvas: true
			});
		}
	}]);

	return MouseLocationIndicator;
}(_react.Component);

MouseLocationIndicator.propTypes = {
	enabled: _react.PropTypes.bool.isRequired,
	snap: _react.PropTypes.bool.isRequired,
	shouldDisableSnap: _react.PropTypes.func.isRequired,
	snapTo: _react.PropTypes.func,

	onMouseMove: _react.PropTypes.func.isRequired,
	onMouseDown: _react.PropTypes.func.isRequired,
	onClick: _react.PropTypes.func.isRequired,
	r: _react.PropTypes.number.isRequired,
	stroke: _react.PropTypes.string.isRequired,
	strokeWidth: _react.PropTypes.number.isRequired,
	opacity: _react.PropTypes.number.isRequired
};

MouseLocationIndicator.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

MouseLocationIndicator.defaultProps = {
	onMouseMove: _utils.noop,
	onMouseDown: _utils.noop,
	onClick: _utils.noop,
	shouldDisableSnap: (0, _utils.functor)(false),
	stroke: "#000000",
	strokeWidth: 1,
	opacity: 1
};

exports.default = MouseLocationIndicator;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = financeDiscontinuousScale;

var _d3Collection = __webpack_require__(16);

var _d3Array = __webpack_require__(9);

var _d3Scale = __webpack_require__(14);

var _utils = __webpack_require__(2);

var tickLevels = [{ target: 50e2, level: 0 }, { target: 50e3, level: 1 }, { target: 10e4, level: 2 }, { target: 28e4, level: 3 }, { target: 55e4, level: 4 }, { target: 11e5, level: 5 }, { target: 21e5, level: 6 }, { target: 43e5, level: 7 }, { target: 59e5, level: 8 }, // not tested
{ target: 12e6, level: 9 }, // not tested
{ target: 58e6, level: 10 }, // not tested
{ target: 89e6, level: 11 }, { target: 11e7, level: 12 }, { target: 78e7, level: 13 }, { target: 16e8, level: 14 }, { target: 62e8, level: 15 }, { target: 10e20, level: 16 }];

var tickLevelBisector = (0, _d3Array.bisector)(function (d) {
	return d.target;
}).left;

function financeDiscontinuousScale(index, interval) {
	var backingLinearScale = arguments.length <= 2 || arguments[2] === undefined ? (0, _d3Scale.scaleLinear)() : arguments[2];


	if ((0, _utils.isNotDefined)(index) || (0, _utils.isNotDefined)(interval)) throw new Error("Use the discontinuousTimeScaleProvider to create financeDiscontinuousScale");

	function scale(x) {
		return backingLinearScale(x);
	}
	scale.invert = function (x) {
		var inverted = backingLinearScale.invert(x);
		return Math.round(inverted * 10000) / 10000;
	};
	scale.domain = function (x) {
		if (!arguments.length) return backingLinearScale.domain();
		backingLinearScale.domain(x);
		return scale;
	};
	scale.range = function (x) {
		if (!arguments.length) return backingLinearScale.range();
		backingLinearScale.range(x);
		return scale;
	};
	scale.rangeRound = function (x) {
		return backingLinearScale.range(x);
	};
	scale.clamp = function (x) {
		if (!arguments.length) return backingLinearScale.clamp();
		backingLinearScale.clamp(x);
		return scale;
	};
	scale.interpolate = function (x) {
		if (!arguments.length) return backingLinearScale.interpolate();
		backingLinearScale.interpolate(x);
		return scale;
	};
	scale.ticks = function (m) {
		var _backingLinearScale$d = backingLinearScale.domain();

		var _backingLinearScale$d2 = _slicedToArray(_backingLinearScale$d, 2);

		var domainStart = _backingLinearScale$d2[0];
		var domainEnd = _backingLinearScale$d2[1];

		var start = Math.max(Math.ceil(domainStart), (0, _utils.head)(index).index) + Math.abs((0, _utils.head)(index).index);
		var end = Math.min(Math.floor(domainEnd), (0, _utils.last)(index).index) + Math.abs((0, _utils.head)(index).index);

		// console.log(index.length, domainStart, domainEnd, start, end)

		var newM = (end - start) / (domainEnd - domainStart) * m;
		// newM = newM <= 0 ? m : newM;
		var target = Math.round((end - start + 1) * interval / newM);

		// var subList = index.slice(start, end + 1);
		var levelIndex = tickLevelBisector(tickLevels, target);
		// console.log(target, levelIndex)
		var level = tickLevels[levelIndex].level;

		// console.log(target.toExponential(), level);

		var backingTicks = backingLinearScale.ticks(m);
		var distance = backingTicks.length > 0 ? ((0, _utils.last)(backingTicks) - (0, _utils.head)(backingTicks)) / (backingTicks.length - 1) / 4 : 1;

		var ticks = [];
		for (var i = start; i < end + 1; i++) {
			if (index[i].level >= level) ticks.push(index[i].index);
		}

		// subList.filter(each => each.level >= level).map(d => d.index);

		var ticksSet = (0, _d3Collection.set)(ticks);
		// console.log(ticks);

		var d = Math.abs((0, _utils.head)(index).index);

		for (var _i = 0; _i < ticks.length - 1; _i++) {
			for (var j = _i + 1; j < ticks.length; j++) {
				if (ticks[j] - ticks[_i] < distance) {
					ticksSet.remove(index[ticks[_i] + d].level >= index[ticks[j] + d].level ? ticks[j] : ticks[_i]);
				}
			}
		}

		var tickValues = ticksSet.values().map(function (d) {
			return parseInt(d, 10);
		});
		return tickValues;
	};
	scale.tickFormat = function () {
		return function (x) {
			// console.log(x)
			var d = Math.abs((0, _utils.head)(index).index);
			var _index = index[x + d];
			var format = _index.format;
			var date = _index.date;

			return format(date);
		};
	};
	scale.nice = function (m) {
		backingLinearScale.nice(m);
		return scale;
	};
	scale.copy = function () {
		return financeDiscontinuousScale(index, interval, backingLinearScale.copy());
	};
	return scale;
}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Shape = __webpack_require__(52);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaOnlySeries = function (_Component) {
	_inherits(AreaOnlySeries, _Component);

	function AreaOnlySeries(props) {
		_classCallCheck(this, AreaOnlySeries);

		var _this = _possibleConstructorReturn(this, (AreaOnlySeries.__proto__ || Object.getPrototypeOf(AreaOnlySeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(AreaOnlySeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props = this.props;
			var yAccessor = _props.yAccessor;
			var defined = _props.defined;
			var base = _props.base;
			var _props2 = this.props;
			var fill = _props2.fill;
			var stroke = _props2.stroke;
			var opacity = _props2.opacity;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;


			var newBase = (0, _utils.functor)(base);

			ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
			ctx.strokeStyle = stroke;

			var points0 = [],
			    points1 = [];

			for (var i = 0; i < plotData.length; i++) {
				var d = plotData[i];
				if (defined(yAccessor(d), i)) {
					var x = xScale(xAccessor(d));
					var y1 = yScale(yAccessor(d));
					var y0 = newBase(yScale, d);


					points0.push([x, y0]);
					points1.push([x, y1]);
				} else if (points0.length) {
					segment(points0, points1, ctx);
					points0 = [];
					points1 = [];
				}
			}
			if (points0.length) segment(points0, points1, ctx);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props3 = this.props;
			var yAccessor = _props3.yAccessor;
			var defined = _props3.defined;
			var base = _props3.base;
			var _props4 = this.props;
			var stroke = _props4.stroke;
			var fill = _props4.fill;
			var className = _props4.className;
			var opacity = _props4.opacity;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;


			var newBase = (0, _utils.functor)(base);
			var areaSeries = (0, _d3Shape.area)().defined(function (d) {
				return defined(yAccessor(d));
			}).x(function (d) {
				return xScale(xAccessor(d));
			}).y0(newBase.bind(null, yScale)).y1(function (d) {
				return yScale(yAccessor(d));
			});

			var d = areaSeries(plotData);
			className = className.concat((0, _utils.isDefined)(stroke) ? "" : " line-stroke");
			return _react2.default.createElement("path", { d: d, stroke: stroke, fill: fill, className: className, opacity: opacity });
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}]);

	return AreaOnlySeries;
}(_react.Component);

AreaOnlySeries.propTypes = {
	className: _react.PropTypes.string,
	yAccessor: _react.PropTypes.func.isRequired,
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	defined: _react.PropTypes.func,
	base: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number])
};
AreaOnlySeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

AreaOnlySeries.defaultProps = {
	className: "line ",
	fill: "none",
	opacity: 1,
	defined: function defined(d) {
		return !isNaN(d);
	},
	base: function base(yScale /* , d*/) {
		return (0, _utils.first)(yScale.range());
	}
};

function segment(points0, points1, ctx) {
	ctx.beginPath();

	var _first = (0, _utils.first)(points0);

	var _first2 = _slicedToArray(_first, 2);

	var x0 = _first2[0];
	var y0 = _first2[1];

	ctx.moveTo(x0, y0);

	var i;
	for (i = 0; i < points1.length; i++) {
		var _points1$i = _slicedToArray(points1[i], 2);

		var x1 = _points1$i[0];
		var y1 = _points1$i[1];

		ctx.lineTo(x1, y1);
	}

	for (i = points0.length - 1; i >= 0; i--) {
		var _points0$i = _slicedToArray(points0[i], 2);

		var _x = _points0$i[0];
		var _y = _points0$i[1];

		ctx.lineTo(_x, _y);
	}
	ctx.closePath();
	ctx.fill();
}

exports.default = AreaOnlySeries;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _StackedBarSeries = __webpack_require__(47);

var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarSeries = function (_Component) {
	_inherits(BarSeries, _Component);

	function BarSeries(props) {
		_classCallCheck(this, BarSeries);

		var _this = _possibleConstructorReturn(this, (BarSeries.__proto__ || Object.getPrototypeOf(BarSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(BarSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var xAccessor = this.context.xAccessor;


			(0, _StackedBarSeries.drawOnCanvasHelper)(ctx, this.props, moreProps, xAccessor, _StackedBarSeries.identityStack);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;


			return _react2.default.createElement(
				"g",
				null,
				(0, _StackedBarSeries.svgHelper)(this.props, moreProps, xAccessor, _StackedBarSeries.identityStack)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}]);

	return BarSeries;
}(_react.Component);

BarSeries.propTypes = {
	baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	stroke: _react.PropTypes.bool.isRequired,
	widthRatio: _react.PropTypes.number.isRequired,
	yAccessor: _react.PropTypes.func.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired
};

BarSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

BarSeries.defaultProps = _StackedBarSeries2.default.defaultProps;

exports.default = BarSeries;

/***/ },
/* 106 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = shallowEqual;
// https://github.com/jonschlinkert/is-equal-shallow/

/*
The MIT License (MIT)

Copyright (c) 2015, Jon Schlinkert.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

function isDate(date) {
	return Object.prototype.toString.call(date) === "[object Date]";
}

function isEqual(val1, val2) {
	return isDate(val1) && isDate(val2) ? val1.getTime() === val2.getTime() : val1 === val2;
}

function shallowEqual(a, b) {
	if (!a && !b) {
		return true;
	}
	if (!a && b || a && !b) {
		return false;
	}

	var numKeysA = 0,
	    numKeysB = 0,
	    key;
	for (key in b) {
		numKeysB++;
		if ( /* !isPrimitive(b[key]) || */!a.hasOwnProperty(key) || !isEqual(a[key], b[key])) {
			// console.log(key, a, b);
			return false;
		}
	}
	for (key in a) {
		numKeysA++;
	}
	return numKeysA === numKeysB;
}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/* an extension to d3.zip so we call a function instead of an array */

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = zipper;

var _d3Array = __webpack_require__(9);

var _identity = __webpack_require__(32);

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function zipper() {
	var combine = _identity2.default;

	function zip() {
		var n = arguments.length;
		if (!n) return [];
		var i,
		    m = (0, _d3Array.min)(arguments, d3_zipLength),
		    zips = new Array(m);
		for (i = -1; ++i < m;) {
			for (var j = -1, zip = zips[i] = new Array(n); ++j < n;) {
				zip[j] = arguments[j][i];
			}
			zips[i] = combine.apply(this, zips[i]);
		}
		return zips;
	}
	function d3_zipLength(d) {
		return d.length;
	}
	zip.combine = function (x) {
		if (!arguments.length) {
			return combine;
		}
		combine = x;
		return zip;
	};
	return zip;
}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return bisectLeft; });



var ascendingBisect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ exports["a"] = bisectRight;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(27);


/* harmony default export */ exports["a"] = function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
};

function ascendingComparator(f) {
  return function(d, x) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(118);


/* harmony default export */ exports["a"] = function(array, f) {
  var v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
};


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b,
      c;

  if (f == null) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = c = b; break; }
    while (++i < n) if ((b = array[i]) != null) {
      if (a > b) a = b;
      if (c < b) c = b;
    }
  }

  else {
    while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = c = b; break; }
    while (++i < n) if ((b = f(array[i], i, array)) != null) {
      if (a > b) a = b;
      if (c < b) c = b;
    }
  }

  return [a, c];
};


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b;

  if (f == null) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = array[i]) != null && a > b) a = b;
  }

  else {
    while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = f(array[i], i, array)) != null && a > b) a = b;
  }

  return a;
};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
};


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__(114);
/* harmony export (immutable) */ exports["b"] = tickStep;


var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ exports["a"] = function(start, stop, count) {
  var step = tickStep(start, stop, count);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["a" /* default */])(
    Math.ceil(start / step) * step,
    Math.floor(stop / step) * step + step / 2, // inclusive
    step
  );
};

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(113);


/* harmony default export */ exports["a"] = function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
};

function length(d) {
  return d.length;
}


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(34);


/* harmony default export */ exports["a"] = function(array, f) {
  var n = array.length,
      m = 0,
      a,
      d,
      s = 0,
      i = -1,
      j = 0;

  if (f == null) {
    while (++i < n) {
      if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(array[i]))) {
        d = a - m;
        m += d / ++j;
        s += d * (a - m);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(f(array[i], i, array)))) {
        d = a - m;
        m += d / ++j;
        s += d * (a - m);
      }
    }
  }

  if (j > 1) return s / (j - 1);
};


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return prefixExponent; });


var prefixExponent;

/* harmony default export */ exports["a"] = function(x, p) {
  var d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
};


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatTypes__ = __webpack_require__(122);


// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

/* harmony default export */ exports["a"] = function(specifier) {
  return new FormatSpecifier(specifier);
};

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

  var match,
      fill = match[1] || " ",
      align = match[2] || ">",
      sign = match[3] || "-",
      symbol = match[4] || "",
      zero = !!match[5],
      width = match[6] && +match[6],
      comma = !!match[7],
      precision = match[8] && +match[8].slice(1),
      type = match[9] || "";

  // The "n" type is an alias for ",g".
  if (type === "n") comma = true, type = "g";

  // Map invalid types to the default format.
  else if (!__WEBPACK_IMPORTED_MODULE_0__formatTypes__["a" /* default */][type]) type = "";

  // If zero fill is specified, padding goes after sign and before digits.
  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + this.type;
};


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDefault__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatRounded__ = __webpack_require__(369);




/* harmony default export */ exports["a"] = {
  "": __WEBPACK_IMPORTED_MODULE_0__formatDefault__["a" /* default */],
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatSpecifier__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatTypes__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatPrefixAuto__ = __webpack_require__(120);






var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function identity(x) {
  return x;
}

/* harmony default export */ exports["a"] = function(locale) {
  var group = locale.grouping && locale.thousands ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : identity,
      currency = locale.currency,
      decimal = locale.decimal;

  function newFormat(specifier) {
    specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        type = specifier.type;

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_3__formatTypes__["a" /* default */][type],
        maybeSuffix = !type || /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? (type ? 6 : 12)
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Convert negative to positive, and compute the prefix.
        // Note that -0 is not less than 0, but 1 / -0 is!
        var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);

        // Perform the initial formatting.
        value = formatType(value, precision);

        // If the original value was negative, it may be rounded to zero during
        // formatting; treat this as (positive) zero.
        if (valueNegative) {
          i = -1, n = value.length;
          valueNegative = false;
          while (++i < n) {
            if (c = value.charCodeAt(i), (48 < c && c < 58)
                || (type === "x" && 96 < c && c < 103)
                || (type === "X" && 64 < c && c < 71)) {
              valueNegative = true;
              break;
            }
          }
        }

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_4__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": return valuePrefix + value + valueSuffix + padding;
        case "=": return valuePrefix + padding + value + valueSuffix;
        case "^": return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
      }
      return padding + valuePrefix + value + valueSuffix;
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
};


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(73);


/* harmony default export */ exports["a"] = function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(nb),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
};


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(72);


/* harmony default export */ exports["a"] = function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
};


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x) {
  return function() {
    return x;
  };
};


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
};


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(73);


/* harmony default export */ exports["a"] = function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
};


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(36);
/* unused harmony export rgbBasis */
/* unused harmony export rgbBasisClosed */





/* harmony default export */ exports["a"] = (function rgbGamma(y) {
  var color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* rgb */])(start)).r, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = color(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1);

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(49);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ exports["a"] = function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
};


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
};


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x) {
  return +x;
};


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return implicit; });
/* harmony export (immutable) */ exports["a"] = ordinal;



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(131);
/* harmony export (immutable) */ exports["b"] = calendar;








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, interval);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["b" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ exports["a"] = function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["i" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["m" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
};


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ exports["a"] = matcher;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);
/* harmony export (immutable) */ exports["a"] = EnterNode;



/* harmony default export */ exports["b"] = function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
};

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(update) {
  return new Array(update.length);
};


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ exports["a"] = function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
};


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__(143);






/* harmony default export */ exports["a"] = function() {
  var x0 = __WEBPACK_IMPORTED_MODULE_4__point__["a" /* x */],
      x1 = null,
      y0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      y1 = __WEBPACK_IMPORTED_MODULE_4__point__["b" /* y */],
      defined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__line__["a" /* default */])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
};


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(54);
/* harmony export (immutable) */ exports["b"] = CardinalClosed;



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cardinal__["a" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ exports["a"] = (function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__(54);
/* harmony export (immutable) */ exports["b"] = CardinalOpen;


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cardinal__["a" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ exports["a"] = (function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return curveRadialLinear; });
/* harmony export (immutable) */ exports["a"] = curveRadial;


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* default */]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = x;
/* harmony export (immutable) */ exports["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(85);
/* harmony export (immutable) */ exports["a"] = radialLine;



function radialLine(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ exports["b"] = function() {
  return radialLine(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* curveRadialLinear */]));
};


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(39);


/* harmony default export */ exports["a"] = {
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["d" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */]);
  }
};


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ exports["a"] = {
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
};


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(39);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["d" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */] / 10) * kr;

/* harmony default export */ exports["a"] = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = __WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ exports["a"] = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ exports["a"] = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return isoSpecifier; });


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["a" /* utcFormat */])(isoSpecifier);

/* harmony default export */ exports["b"] = formatIso;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(88);
/* harmony export (immutable) */ exports["a"] = formatLocale;


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "S": formatSeconds,
    "U": formatWeekNumberSunday,
    "w": formatWeekdayNumber,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "S": formatUTCSeconds,
    "U": formatUTCWeekNumberSunday,
    "w": formatUTCWeekdayNumber,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "S": parseSeconds,
    "U": parseWeekNumberSunday,
    "w": parseWeekdayNumber,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0);
      if (i != string.length) return null;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "W" in d ? 1 : 0;
        var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["b" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["c" /* timeSunday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["b" /* timeYear */])(d), d), p, 2);
}

function formatWeekdayNumber(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["d" /* timeMonday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["b" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* utcDay */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["f" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["g" /* utcSunday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["f" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekdayNumber(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* utcMonday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["f" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}


/***/ },
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PureComponent2 = __webpack_require__(62);

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackgroundText = function (_PureComponent) {
	_inherits(BackgroundText, _PureComponent);

	function BackgroundText() {
		_classCallCheck(this, BackgroundText);

		return _possibleConstructorReturn(this, (BackgroundText.__proto__ || Object.getPrototypeOf(BackgroundText)).apply(this, arguments));
	}

	_createClass(BackgroundText, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			if (this.context.chartCanvasType !== "svg" && (0, _utils.isDefined)(this.context.getCanvasContexts)) {
				var contexts = this.context.getCanvasContexts();
				if (contexts) BackgroundText.drawOnCanvas(contexts.bg, this.props, this.context, this.props.children);
			}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.componentDidMount();
		}
	}, {
		key: "render",
		value: function render() {
			var chartCanvasType = this.context.chartCanvasType;


			if (chartCanvasType !== "svg") return null;

			var _props = this.props;
			var x = _props.x;
			var y = _props.y;
			var fill = _props.fill;
			var opacity = _props.opacity;
			var stroke = _props.stroke;
			var strokeOpacity = _props.strokeOpacity;
			var fontFamily = _props.fontFamily;
			var fontSize = _props.fontSize;
			var textAnchor = _props.textAnchor;

			var props = { x: x, y: y, fill: fill, opacity: opacity, stroke: stroke, strokeOpacity: strokeOpacity, fontFamily: fontFamily, fontSize: fontSize, textAnchor: textAnchor };
			return _react2.default.createElement(
				"text",
				props,
				"this.props.children(interval)"
			);
		}
	}]);

	return BackgroundText;
}(_PureComponent3.default);

BackgroundText.drawOnCanvas = function (ctx, props, _ref, getText) {
	var interval = _ref.interval;

	ctx.clearRect(-1, -1, ctx.canvas.width + 2, ctx.canvas.height + 2);
	ctx.save();

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.translate(0.5, 0.5);

	var x = props.x;
	var y = props.y;
	var fill = props.fill;
	var opacity = props.opacity;
	var stroke = props.stroke;
	var strokeOpacity = props.strokeOpacity;
	var fontFamily = props.fontFamily;
	var fontSize = props.fontSize;
	var textAnchor = props.textAnchor;


	var text = getText(interval);

	ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);

	ctx.font = fontSize + "px " + fontFamily;
	ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
	ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;

	if (stroke !== "none") ctx.strokeText(text, x, y);
	ctx.fillText(text, x, y);

	ctx.restore();
};

BackgroundText.propTypes = {
	x: _react.PropTypes.number.isRequired,
	y: _react.PropTypes.number.isRequired,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number.isRequired,
	fill: _react.PropTypes.string,
	stroke: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	strokeOpacity: _react.PropTypes.number,
	textAnchor: _react.PropTypes.string,
	children: _react.PropTypes.func
};

BackgroundText.defaultProps = {
	opacity: 0.3,
	fill: "#9E7523",
	stroke: "#9E7523",
	strokeOpacity: 1,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 12,
	textAnchor: "middle"
};

BackgroundText.contextTypes = {
	interval: _react.PropTypes.string.isRequired,
	getCanvasContexts: _react.PropTypes.func,
	chartCanvasType: _react.PropTypes.string
};

exports.default = BackgroundText;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Array = __webpack_require__(9);

var _utils = __webpack_require__(2);

var _ChartDataUtil = __webpack_require__(61);

var _EventCapture = __webpack_require__(264);

var _EventCapture2 = _interopRequireDefault(_EventCapture);

var _CanvasContainer = __webpack_require__(263);

var _CanvasContainer2 = _interopRequireDefault(_CanvasContainer);

var _evaluator = __webpack_require__(314);

var _evaluator2 = _interopRequireDefault(_evaluator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CANDIDATES_FOR_RESET = ["seriesName", /* "data",*/
"xScaleProvider", /* "xAccessor",*/"map", "indexAccessor", "indexMutator"];

function shouldResetChart(thisProps, nextProps) {
	return !CANDIDATES_FOR_RESET.every(function (key) {
		var result = (0, _utils.shallowEqual)(thisProps[key], nextProps[key]);
		// console.log(key, result);
		return result;
	});
}

function getCursorStyle(useCrossHairStyleCursor) {
	var style = "\n\t.react-stockcharts-grabbing-cursor {\n\t\tpointer-events: all;\n\t\tcursor: grabbing;\n\t}\n\t.react-stockcharts-crosshair-cursor {\n\t\tpointer-events: all;\n\t\tcursor: crosshair;\n\t}\n\t.react-stockcharts-toottip-hover {\n\t\tpointer-events: all;\n\t\tcursor: pointer;\n\t}";
	var tooltipStyle = "\n\t.react-stockcharts-avoid-interaction {\n\t\tpointer-events: none;\n\t}\n\t.react-stockcharts-enable-interaction {\n\t\tpointer-events: all;\n\t}\n\t.react-stockcharts-default-cursor {\n\t\tcursor: default;\n\t}\n\t.react-stockcharts-move-cursor {\n\t\tcursor: move;\n\t}\n\t.react-stockcharts-ns-resize-cursor {\n\t\tcursor: ns-resize;\n\t}\n\t.react-stockcharts-ew-resize-cursor {\n\t\tcursor: ew-resize;\n\t}";
	/* return (<style
 	type="text/css"
 	dangerouslySetInnerHTML={{
 		__html: shouldShowCrossHairStyle(children) ? style + tooltipStyle : tooltipStyle
 	}}></style>);*/
	return _react2.default.createElement(
		"style",
		{ type: "text/css" },
		useCrossHairStyleCursor ? style + tooltipStyle : tooltipStyle
	);
}

function getDimensions(props) {
	return {
		height: props.height - props.margin.top - props.margin.bottom,
		width: props.width - props.margin.left - props.margin.right
	};
}

function getXScaleDirection(flipXScale) {
	return flipXScale ? -1 : 1;
}

function calculateFullData(props) {
	var inputData = props.data;
	var calculator = props.calculator;
	var plotFull = props.plotFull;
	var xScaleProp = props.xScale;
	var inputXAccesor = props.xAccessor;
	var map = props.map;
	var xScaleProvider = props.xScaleProvider;
	var indexAccessor = props.indexAccessor;
	var indexMutator = props.indexMutator;


	var wholeData = (0, _utils.isDefined)(plotFull) ? plotFull : inputXAccesor === _utils.identity;

	// xScale = discontinuousTimeScaleProvider(data);
	var dimensions = getDimensions(props);
	var evaluate = (0, _evaluator2.default)()
	// .allowedIntervals(allowedIntervals)
	// .intervalCalculator(intervalCalculator)
	.xAccessor(inputXAccesor)
	// .discontinuous(discontinuous)
	.indexAccessor(indexAccessor).indexMutator(indexMutator).map(map).useWholeData(wholeData).width(dimensions.width).scaleProvider(xScaleProvider).xScale(xScaleProp).calculator(calculator);

	var _evaluate = evaluate(inputData);

	var xAccessor = _evaluate.xAccessor;
	var displayXAccessor = _evaluate.displayXAccessor;
	var xScale = _evaluate.xScale;
	var fullData = _evaluate.fullData;
	var filterData = _evaluate.filterData;
	var firstItem = _evaluate.firstItem;
	var lastItem = _evaluate.lastItem;


	return { xAccessor: xAccessor, displayXAccessor: displayXAccessor, xScale: xScale, fullData: fullData, filterData: filterData, firstItem: firstItem, lastItem: lastItem };
}
function resetChart(props) {
	var firstCalculation = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	if (false) {
		if (!firstCalculation) console.log("CHART RESET");
	}

	var state = calculateState(props);
	var initialPlotData = state.plotData;
	var xScale = state.xScale;
	var postCalculator = props.postCalculator;
	var children = props.children;


	var plotData = postCalculator(initialPlotData);

	var dimensions = getDimensions(props);
	var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);

	return _extends({}, state, {
		xScale: xScale,
		plotData: plotData,
		chartConfig: chartConfig
	});
}

function updateChart(newState, initialXScale, props, prevLastItem) {
	var firstItem = newState.firstItem;
	var lastItem = newState.lastItem;
	var xScale = newState.xScale;
	var xAccessor = newState.xAccessor;
	var filterData = newState.filterData;

	var lastItemVisible = lastItem === prevLastItem;
	if (false) {
		if (lastItemVisible) console.log("DATA CHANGED AND LAST ITEM VISIBLE");else console.log("TRIVIAL CHANGE");
	}
	var postCalculator = props.postCalculator;
	var children = props.children;
	var padding = props.padding;
	var flipXScale = props.flipXScale;

	var direction = getXScaleDirection(flipXScale);
	var dimensions = getDimensions(props);

	var updatedXScale = setXRange(xScale, dimensions, padding, direction);

	var _initialXScale$domain = initialXScale.domain();

	var _initialXScale$domain2 = _slicedToArray(_initialXScale$domain, 2);

	var start = _initialXScale$domain2[0];
	var end = _initialXScale$domain2[1];

	var initialPlotData;
	if (!lastItemVisible || end >= xAccessor(lastItem)) {
		// get plotData between [start, end] and do not change the domain
		initialPlotData = filterData([start, end], xAccessor, updatedXScale).plotData;
		updatedXScale.domain([start, end]);
		// console.log("HERE!!!!!", start, end);
	} else {
		// get plotData between [xAccessor(l) - (end - start), xAccessor(l)] and DO change the domain
		var dx = updatedXScale(xAccessor(lastItem)) - updatedXScale.range()[1];

		var _updatedXScale$range$ = updatedXScale.range().map(function (x) {
			return x + dx;
		}).map(updatedXScale.invert);

		var _updatedXScale$range$2 = _slicedToArray(_updatedXScale$range$, 2);

		var newStart = _updatedXScale$range$2[0];
		var newEnd = _updatedXScale$range$2[1];


		initialPlotData = filterData([newStart, newEnd], xAccessor, updatedXScale).plotData;
		// if last item was visible, then shift
		updatedXScale.domain([newStart, newEnd]);
	}
	// plotData = getDataOfLength(fullData, showingInterval, plotData.length)
	var plotData = postCalculator(initialPlotData);
	var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);

	return {
		firstItem: firstItem,
		lastItem: lastItem,
		xScale: updatedXScale,
		xAccessor: xAccessor,
		filterData: filterData,
		chartConfig: chartConfig,
		plotData: plotData
	};
}

function calculateState(props) {
	var inputXAccesor = props.xAccessor;
	var xExtentsProp = props.xExtents;
	var data = props.data;
	var padding = props.padding;
	var flipXScale = props.flipXScale;


	var direction = getXScaleDirection(flipXScale);
	var dimensions = getDimensions(props);

	var extent = typeof xExtentsProp === "function" ? xExtentsProp(data) : (0, _d3Array.extent)(xExtentsProp.map(function (d) {
		return (0, _utils.functor)(d);
	}).map(function (each) {
		return each(data, inputXAccesor);
	}));

	var _calculateFullData = calculateFullData(props);

	var xAccessor = _calculateFullData.xAccessor;
	var displayXAccessor = _calculateFullData.displayXAccessor;
	var xScale = _calculateFullData.xScale;
	var fullData = _calculateFullData.fullData;
	var filterData = _calculateFullData.filterData;
	var firstItem = _calculateFullData.firstItem;
	var lastItem = _calculateFullData.lastItem;

	var updatedXScale = setXRange(xScale, dimensions, padding, direction);

	var _filterData = filterData(extent, inputXAccesor, updatedXScale);

	var plotData = _filterData.plotData;
	var domain = _filterData.domain;


	return {
		plotData: plotData,
		fullData: fullData,
		xScale: updatedXScale.domain(domain),
		xAccessor: xAccessor,
		filterData: filterData,
		firstItem: firstItem,
		lastItem: lastItem,
		displayXAccessor: displayXAccessor
	};
}

function setXRange(xScale, dimensions, padding) {
	var direction = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];

	if (xScale.rangeRoundPoints) {
		if (isNaN(padding)) throw new Error("padding has to be a number for ordinal scale");
		xScale.rangeRoundPoints([0, dimensions.width], padding);
	} else if (xScale.padding) {
		if (isNaN(padding)) throw new Error("padding has to be a number for ordinal scale");
		xScale.range([0, dimensions.width]);
		xScale.padding(padding / 2);
	} else {
		var _ref = isNaN(padding) ? padding : { left: padding, right: padding };

		var left = _ref.left;
		var right = _ref.right;

		if (direction > 0) {
			xScale.range([left, dimensions.width - right]);
		} else {
			xScale.range([dimensions.width - right, left]);
		}
	}
	return xScale;
}

var ChartCanvas = function (_Component) {
	_inherits(ChartCanvas, _Component);

	function ChartCanvas() {
		_classCallCheck(this, ChartCanvas);

		var _this = _possibleConstructorReturn(this, (ChartCanvas.__proto__ || Object.getPrototypeOf(ChartCanvas)).call(this));

		_this.getDataInfo = _this.getDataInfo.bind(_this);
		_this.getCanvasContexts = _this.getCanvasContexts.bind(_this);

		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
		_this.handleZoom = _this.handleZoom.bind(_this);
		_this.handlePinchZoom = _this.handlePinchZoom.bind(_this);
		_this.handlePan = _this.handlePan.bind(_this);
		_this.handlePanEnd = _this.handlePanEnd.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
		// this.handleFocus = this.handleFocus.bind(this);
		_this.handleContextMenu = _this.handleContextMenu.bind(_this);
		_this.xAxisZoom = _this.xAxisZoom.bind(_this);
		_this.yAxisZoom = _this.yAxisZoom.bind(_this);
		_this.calculateStateForDomain = _this.calculateStateForDomain.bind(_this);

		_this.pinchCoordinates = _this.pinchCoordinates.bind(_this);

		// this.setInteractiveState = this.setInteractiveState.bind(this);
		// this.getInteractiveState = this.getInteractiveState.bind(this);

		_this.subscriptions = [];
		_this.subscribe = _this.subscribe.bind(_this);
		_this.unsubscribe = _this.unsubscribe.bind(_this);
		_this.draw = _this.draw.bind(_this);
		// this.canvasDrawCallbackList = [];
		_this.interactiveState = [];

		_this.state = {};
		return _this;
	}

	_createClass(ChartCanvas, [{
		key: "getDataInfo",
		value: function getDataInfo() {
			return this.refs.chartContainer.getDataInfo();
		}
	}, {
		key: "getCanvasContexts",
		value: function getCanvasContexts() {
			if (this.refs && this.refs.canvases) {
				return this.refs.canvases.getCanvasContexts();
			}
		}
	}, {
		key: "clearBothCanvas",
		value: function clearBothCanvas() {
			var canvases = this.getCanvasContexts();
			if (canvases && canvases.axes) {
				// console.log("CLEAR");
				(0, _utils.clearCanvas)([canvases.axes, canvases.mouseCoord], this.props.ratio);
			}
		}
	}, {
		key: "clearMouseCanvas",
		value: function clearMouseCanvas() {
			var canvases = this.getCanvasContexts();
			if (canvases && canvases.mouseCoord) {
				(0, _utils.clearCanvas)([canvases.mouseCoord], this.props.ratio);
			}
		}
	}, {
		key: "clearThreeCanvas",
		value: function clearThreeCanvas() {
			var canvases = this.getCanvasContexts();
			if (canvases && canvases.axes) {
				(0, _utils.clearCanvas)([canvases.axes, canvases.mouseCoord, canvases.bg], this.props.ratio);
			}
		}
	}, {
		key: "subscribe",
		value: function subscribe(id, callback) {
			this.subscriptions = this.subscriptions.concat({
				id: id, callback: callback
			});
		}
	}, {
		key: "unsubscribe",
		value: function unsubscribe(id) {
			this.subscriptions = this.subscriptions.filter(function (each) {
				return each.id !== id;
			});
		}
	}, {
		key: "handleMouseEnter",
		value: function handleMouseEnter(e) {
			this.triggerEvent("mouseenter", {
				show: true
			}, e);
		}
	}, {
		key: "handleMouseMove",
		value: function handleMouseMove(mouseXY, inputType, e) {
			var _this2 = this;

			var _state = this.state;
			var chartConfig = _state.chartConfig;
			var plotData = _state.plotData;
			var xScale = _state.xScale;
			var xAccessor = _state.xAccessor;


			var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);

			var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);

			this.triggerEvent("mousemove", {
				show: true,
				mouseXY: mouseXY,
				currentItem: currentItem,
				currentCharts: currentCharts
			}, e);

			requestAnimationFrame(function () {
				_this2.clearMouseCanvas();
				_this2.draw();
			});
		}
	}, {
		key: "handleContextMenu",
		value: function handleContextMenu(mouseXY, e) {
			var _state2 = this.state;
			var xAccessor = _state2.xAccessor;
			var chartConfig = _state2.chartConfig;
			var plotData = _state2.plotData;
			var xScale = _state2.xScale;


			var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
			var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);

			this.triggerEvent("contextmenu", {
				mouseXY: mouseXY,
				currentItem: currentItem,
				currentCharts: currentCharts
			}, e);
			this.draw();
		}
	}, {
		key: "handleMouseLeave",
		value: function handleMouseLeave(e) {
			var contexts = this.getCanvasContexts();

			// this.clearInteractiveCanvas();

			if (contexts && contexts.mouseCoord) {
				(0, _utils.clearCanvas)([contexts.mouseCoord], this.props.ratio);
			}
			this.triggerEvent("mouseleave", { show: false }, e);
			this.draw();
			/* this.setState({
   	show: false
   }); */
		}
	}, {
		key: "pinchCoordinates",
		value: function pinchCoordinates(pinch) {
			var touch1Pos = pinch.touch1Pos;
			var touch2Pos = pinch.touch2Pos;


			return {
				topLeft: [Math.min(touch1Pos[0], touch2Pos[0]), Math.min(touch1Pos[1], touch2Pos[1])],
				bottomRight: [Math.max(touch1Pos[0], touch2Pos[0]), Math.max(touch1Pos[1], touch2Pos[1])]
			};
		}
	}, {
		key: "handlePinchZoom",
		value: function handlePinchZoom(initialPinch, finalPinch) {
			var _this3 = this;

			var initialPinchXScale = initialPinch.xScale;
			var _state3 = this.state;
			var initialXScale = _state3.xScale;
			var initialChartConfig = _state3.chartConfig;
			var initialPlotData = _state3.plotData;
			var xAccessor = _state3.xAccessor;
			var filterData = _state3.filterData;
			var postCalculator = this.props.postCalculator;

			var _pinchCoordinates = this.pinchCoordinates(initialPinch);

			var iTL = _pinchCoordinates.topLeft;
			var iBR = _pinchCoordinates.bottomRight;

			var _pinchCoordinates2 = this.pinchCoordinates(finalPinch);

			var fTL = _pinchCoordinates2.topLeft;
			var fBR = _pinchCoordinates2.bottomRight;


			var e = initialPinchXScale.range()[1];

			// var fR1 = e - fTL[0];
			// var fR2 = e - fBR[0];
			// var iR1 = e - iTL[0];
			// var iR2 = e - iBR[0];

			var xDash = Math.round(-(iBR[0] * fTL[0] - iTL[0] * fBR[0]) / (iTL[0] - iBR[0]));
			var yDash = Math.round(e + ((e - iBR[0]) * (e - fTL[0]) - (e - iTL[0]) * (e - fBR[0])) / (e - iTL[0] - (e - iBR[0])));

			var x = Math.round(-xDash * iTL[0] / (-xDash + fTL[0]));
			var y = Math.round(e - (yDash - e) * (e - iTL[0]) / (yDash + (e - fTL[0])));

			// document.getElementById("debug_here").innerHTML = `**${[s, e]} to ${[xDash, yDash]} to ${[x, y]}`;
			// var left = ((final.leftxy[0] - range[0]) / (final.rightxy[0] - final.leftxy[0])) * (initial.right - initial.left);
			// var right = ((range[1] - final.rightxy[0]) / (final.rightxy[0] - final.leftxy[0])) * (initial.right - initial.left);

			var newDomain = [x, y].map(initialPinchXScale.invert);
			// var domainR = initial.right + right;

			var _filterData2 = filterData(newDomain, xAccessor, initialPinchXScale, initialPlotData, initialXScale.domain());

			var plotData = _filterData2.plotData;
			var domain = _filterData2.domain;


			plotData = postCalculator(plotData);
			var updatedScale = initialXScale.copy().domain(domain);

			var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData);

			requestAnimationFrame(function () {
				_this3.clearThreeCanvas();
				// this.clearInteractiveCanvas();

				// this.clearCanvasDrawCallbackList();
				_this3.setState({
					chartConfig: chartConfig,
					xScale: updatedScale,
					plotData: plotData
				});
			});

			// document.getElementById("debug_here").innerHTML = `${panInProgress}`;

			// document.getElementById("debug_here").innerHTML = `${initial.left} - ${initial.right} to ${final.left} - ${final.right}`;
			// document.getElementById("debug_here").innerHTML = `${id[1] - id[0]} = ${initial.left - id[0]} + ${initial.right - initial.left} + ${id[1] - initial.right}`;
			// document.getElementById("debug_here").innerHTML = `${range[1] - range[0]}, ${i1[0]}, ${i2[0]}`;
		}
	}, {
		key: "handleZoom",
		value: function handleZoom(zoomDirection, mouseXY, e) {
			// console.log("zoomDirection ", zoomDirection, " mouseXY ", mouseXY);
			var _state4 = this.state;
			var xAccessor = _state4.xAccessor;
			var initialXScale = _state4.xScale;
			var initialPlotData = _state4.plotData;


			var item = (0, _ChartDataUtil.getCurrentItem)(initialXScale, xAccessor, mouseXY, initialPlotData),
			    cx = initialXScale(xAccessor(item)),
			    c = zoomDirection > 0 ? 2 : 0.5,
			    newDomain = initialXScale.range().map(function (x) {
				return cx + (x - cx) * c;
			}).map(initialXScale.invert);

			var _calculateStateForDom = this.calculateStateForDomain(newDomain);

			var xScale = _calculateStateForDom.xScale;
			var plotData = _calculateStateForDom.plotData;
			var chartConfig = _calculateStateForDom.chartConfig;


			var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
			var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
			this.clearBothCanvas();
			// this.clearInteractiveCanvas();

			this.triggerEvent("zoom", {
				mouseXY: mouseXY,
				currentCharts: currentCharts,
				currentItem: currentItem
			}, e);

			var firstItem = this.state.firstItem;

			var start = (0, _utils.first)(xScale.domain());
			var end = xAccessor(firstItem);
			var onLoadMore = this.props.onLoadMore;


			this.setState({
				xScale: xScale,
				plotData: plotData,
				chartConfig: chartConfig
			}, function () {
				if (start < end) onLoadMore(start, end);
			});
		}
	}, {
		key: "calculateStateForDomain",
		value: function calculateStateForDomain(newDomain) {
			var _state5 = this.state;
			var xAccessor = _state5.xAccessor;
			var filterData = _state5.filterData;
			var initialXScale = _state5.xScale;
			var initialChartConfig = _state5.chartConfig;
			var initialPlotData = _state5.plotData;
			var postCalculator = this.props.postCalculator;

			var _filterData3 = filterData(newDomain, xAccessor, initialXScale, initialPlotData, initialXScale.domain());

			var plotData = _filterData3.plotData;
			var domain = _filterData3.domain;


			plotData = postCalculator(plotData);
			var updatedScale = initialXScale.copy().domain(domain);
			var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData);

			return {
				xScale: updatedScale,
				plotData: plotData,
				chartConfig: chartConfig
			};
		}
	}, {
		key: "xAxisZoom",
		value: function xAxisZoom(newDomain) {
			var _calculateStateForDom2 = this.calculateStateForDomain(newDomain);

			var xScale = _calculateStateForDom2.xScale;
			var plotData = _calculateStateForDom2.plotData;
			var chartConfig = _calculateStateForDom2.chartConfig;

			this.clearBothCanvas();

			var _state6 = this.state;
			var firstItem = _state6.firstItem;
			var xAccessor = _state6.xAccessor;

			var start = (0, _utils.first)(xScale.domain());
			var end = xAccessor(firstItem);
			var onLoadMore = this.props.onLoadMore;


			this.setState({
				xScale: xScale,
				plotData: plotData,
				chartConfig: chartConfig
			}, function () {
				if (start < end) onLoadMore(start, end);
			});
		}
	}, {
		key: "yAxisZoom",
		value: function yAxisZoom(chartId, newDomain) {
			this.clearThreeCanvas();
			var initialChartConfig = this.state.chartConfig;

			var chartConfig = initialChartConfig.map(function (each) {
				if (each.id === chartId) {
					var yScale = each.yScale;

					return _extends({}, each, {
						yScale: yScale.copy().domain(newDomain),
						yPanEnabled: true
					});
				} else {
					return each;
				}
			});

			this.setState({
				chartConfig: chartConfig
			});
		}
	}, {
		key: "panHelper",
		value: function panHelper(mouseXY, initialXScale, panOrigin, chartsToPan) {
			var _state7 = this.state;
			var xAccessor = _state7.xAccessor;
			var filterData = _state7.filterData;
			var initialChartConfig = _state7.chartConfig;
			var postCalculator = this.props.postCalculator;


			var dx = mouseXY[0] - panOrigin[0];
			var dy = mouseXY[1] - panOrigin[1];

			if ((0, _utils.isNotDefined)(initialXScale.invert)) throw new Error("xScale provided does not have an invert() method." + "You are likely using an ordinal scale. This scale does not support zoom, pan");

			var newDomain = initialXScale.range().map(function (x) {
				return x - dx;
			}).map(initialXScale.invert);

			var _filterData4 = filterData(newDomain, xAccessor, initialXScale, this.hackyWayToStopPanBeyondBounds__plotData, this.hackyWayToStopPanBeyondBounds__domain);

			var plotData = _filterData4.plotData;
			var domain = _filterData4.domain;


			var updatedScale = initialXScale.copy().domain(domain);
			plotData = postCalculator(plotData);
			// console.log(last(plotData));
			var currentItem = (0, _ChartDataUtil.getCurrentItem)(updatedScale, xAccessor, mouseXY, plotData);

			var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData, dy, chartsToPan);

			var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);

			return {
				xScale: updatedScale,
				plotData: plotData,
				mouseXY: mouseXY,
				currentCharts: currentCharts,
				chartConfig: chartConfig,
				currentItem: currentItem
			};
		}
	}, {
		key: "draw",
		value: function draw() {
			/*
   var { chartCanvasType } = this.props;
   if (chartCanvasType === "svg") {
   this.setState({
   random: Math.random()
   });
   } else {*/
			this.subscriptions.forEach(function (each) {
				// console.log(each)
				each.callback("draw");
			});
			// }
		}
	}, {
		key: "triggerEvent",
		value: function triggerEvent(type, props, e) {
			this.subscriptions.forEach(function (each) {
				// console.log(each)
				each.callback(type, props, e);
			});
		}
	}, {
		key: "handlePan",
		value: function handlePan(mousePosition, panStartXScale, panOrigin, chartsToPan, e) {
			var _this4 = this;

			this.hackyWayToStopPanBeyondBounds__plotData = this.hackyWayToStopPanBeyondBounds__plotData || this.state.plotData;
			this.hackyWayToStopPanBeyondBounds__domain = this.hackyWayToStopPanBeyondBounds__domain || this.state.xScale.domain();

			var state = this.panHelper(mousePosition, panStartXScale, panOrigin, chartsToPan);

			this.hackyWayToStopPanBeyondBounds__plotData = state.plotData;
			this.hackyWayToStopPanBeyondBounds__domain = state.xScale.domain();

			this.triggerEvent("pan", state, e);
			requestAnimationFrame(function () {
				_this4.clearBothCanvas();
				_this4.draw();
			});
		}
	}, {
		key: "handleMouseDown",
		value: function handleMouseDown(mousePosition, currentCharts, e) {
			this.triggerEvent("mousedown", null, e);
		}
	}, {
		key: "handleClick",
		value: function handleClick(mousePosition, e) {
			// console.log("clicked", e.shiftKey);
			this.triggerEvent("click", {}, e);
		}
	}, {
		key: "handleDoubleClick",
		value: function handleDoubleClick(mousePosition, e) {
			console.log("double clicked");
			this.triggerEvent("dblclick", {}, e);
		}
	}, {
		key: "handlePanEnd",
		value: function handlePanEnd(mousePosition, panStartXScale, panOrigin, chartsToPan, e) {
			var _this5 = this;

			var state = this.panHelper(mousePosition, panStartXScale, panOrigin, chartsToPan);
			// console.log(this.canvasDrawCallbackList.map(d => d.type));
			this.hackyWayToStopPanBeyondBounds__plotData = null;
			this.hackyWayToStopPanBeyondBounds__domain = null;

			this.triggerEvent("panend", state, e);
			// console.log("PANEND", panEnd++);
			var xScale = state.xScale;
			var plotData = state.plotData;
			var chartConfig = state.chartConfig;


			requestAnimationFrame(function () {
				var _state8 = _this5.state;
				var xAccessor = _state8.xAccessor;
				var firstItem = _state8.firstItem;


				var start = (0, _utils.first)(xScale.domain());
				var end = xAccessor(firstItem);
				// console.log(start, end, start < end ? "Load more" : "I have it");

				var onLoadMore = _this5.props.onLoadMore;

				_this5.clearThreeCanvas();
				_this5.setState({
					xScale: xScale,
					plotData: plotData,
					chartConfig: chartConfig
				}, function () {
					if (start < end) onLoadMore(start, end);
				});
			});
		} /*
    setInteractiveState(id, chartId, interactive) {
    var everyThingElse = this.interactiveState
    	.filter(each => !(each.id === id && each.chartId === chartId));
    	this.interactiveState = everyThingElse.concat({ id, chartId, interactive });
    }
    getInteractiveState(forChart, id, initialState) {
    var state = this.interactiveState
    	.filter(each => each.chartId === forChart)
    	.filter(each => each.id === id);
    	var response = (state.length > 0)
    	? response = state[0].interactive
    	: initialState;
    return response;
    }*/

	}, {
		key: "getChildContext",
		value: function getChildContext() {
			var dimensions = getDimensions(this.props);

			return {
				fullData: this.state.fullData,
				plotData: this.state.plotData,
				width: dimensions.width,
				height: dimensions.height,
				chartConfig: this.state.chartConfig,
				xScale: this.state.xScale,
				xAccessor: this.state.xAccessor,
				displayXAccessor: this.props.displayXAccessor || this.state.displayXAccessor,
				chartCanvasType: this.props.type,
				margin: this.props.margin,
				ratio: this.props.ratio,
				xAxisZoom: this.xAxisZoom,
				yAxisZoom: this.yAxisZoom,
				// getInteractiveState: this.getInteractiveState,
				// setInteractiveState: this.setInteractiveState,
				getCanvasContexts: this.getCanvasContexts,
				subscribe: this.subscribe,
				unsubscribe: this.unsubscribe
			};
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			var state = resetChart(this.props, true);
			this.setState(state);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var reset = shouldResetChart(this.props, nextProps);

			var interaction = isInteractionEnabled(this.state.xScale, this.state.xAccessor, this.state.plotData);

			var newState;
			if (!interaction || reset || !(0, _utils.shallowEqual)(this.props.xExtents, nextProps.xExtents)) {
				if (false) {
					if (!interaction) console.log("RESET CHART, changes to a non interactive chart");else if (reset) console.log("RESET CHART, one or more of these props changed", CANDIDATES_FOR_RESET);else console.log("xExtents changed");
				}
				// do reset
				newState = resetChart(nextProps);
			} else {
				if (false) {
					if (this.props.data !== nextProps.data) console.log("data is changed but seriesName did not, change the seriesName if you wish to reset the chart");else if (!(0, _utils.shallowEqual)(this.props.calculator, nextProps.calculator)) console.log("calculator changed");else console.log("Trivial change, may be width/height or type changed, but that does not matter");
				}

				var calculatedState = calculateFullData(nextProps);

				newState = updateChart(calculatedState, this.state.xScale, nextProps, (0, _utils.last)(this.state.plotData));
			}

			var initialChartConfig = this.state.chartConfig;


			if (!reset) {
				newState.chartConfig.forEach(function (each) {
					var sourceChartConfig = initialChartConfig.filter(function (d) {
						return d.id === each.id;
					});
					if (sourceChartConfig.length > 0 && sourceChartConfig[0].yPanEnabled) {
						each.yScale.domain(sourceChartConfig[0].yScale.domain());
						each.yPanEnabled = sourceChartConfig[0].yPanEnabled;
					}
				});
			}

			this.clearThreeCanvas();
			this.setState(newState);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var type = _props.type;
			var height = _props.height;
			var width = _props.width;
			var margin = _props.margin;
			var className = _props.className;
			var zIndex = _props.zIndex;
			var defaultFocus = _props.defaultFocus;
			var ratio = _props.ratio;
			var _props2 = this.props;
			var useCrossHairStyleCursor = _props2.useCrossHairStyleCursor;
			var drawMode = _props2.drawMode;
			var _state9 = this.state;
			var plotData = _state9.plotData;
			var xScale = _state9.xScale;
			var xAccessor = _state9.xAccessor;
			var chartConfig = _state9.chartConfig;

			var dimensions = getDimensions(this.props);

			var interaction = isInteractionEnabled(xScale, xAccessor, plotData);

			var cursor = getCursorStyle(useCrossHairStyleCursor && interaction);
			return _react2.default.createElement(
				"div",
				{ style: { position: "relative", height: height, width: width }, className: className },
				_react2.default.createElement(_CanvasContainer2.default, { ref: "canvases", width: width, height: height, ratio: ratio, type: type, zIndex: zIndex }),
				_react2.default.createElement(
					"svg",
					{ className: className, width: width, height: height, style: { position: "absolute", zIndex: zIndex + 5 } },
					cursor,
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement(
							"clipPath",
							{ id: "chart-area-clip" },
							_react2.default.createElement("rect", { x: "0", y: "0", width: dimensions.width, height: dimensions.height })
						),
						chartConfig.map(function (each, idx) {
							return _react2.default.createElement(
								"clipPath",
								{ key: idx, id: "chart-area-clip-" + each.id },
								_react2.default.createElement("rect", { x: "0", y: "0", width: each.width, height: each.height })
							);
						})
					),
					_react2.default.createElement(
						"g",
						{ transform: "translate(" + (margin.left + 0.5) + ", " + (margin.top + 0.5) + ")" },
						_react2.default.createElement(_EventCapture2.default, {
							mouseMove: interaction,
							zoom: interaction,
							pan: interaction && !drawMode,

							width: dimensions.width,
							height: dimensions.height,
							chartConfig: chartConfig,
							xScale: xScale,
							xAccessor: xAccessor,
							focus: defaultFocus,

							onContextMenu: this.handleContextMenu,
							onClick: this.handleClick,
							onDoubleClick: this.handleDoubleClick,
							onMouseDown: this.handleMouseDown,
							onMouseMove: this.handleMouseMove,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							onZoom: this.handleZoom,
							onPinchZoom: this.handlePinchZoom,
							onPan: this.handlePan,
							onPanEnd: this.handlePanEnd
						}),
						_react2.default.createElement(
							"g",
							{ className: "react-stockcharts-avoid-interaction" },
							this.props.children
						)
					)
				)
			);
		}
	}]);

	return ChartCanvas;
}(_react.Component);

function isInteractionEnabled(xScale, xAccessor, data) {
	var interaction = !isNaN(xScale(xAccessor((0, _utils.first)(data)))) && (0, _utils.isDefined)(xScale.invert);
	return interaction;
}

ChartCanvas.propTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	margin: _react.PropTypes.object,
	ratio: _react.PropTypes.number.isRequired,
	// interval: PropTypes.oneOf(["D", "W", "M"]), // ,"m1", "m5", "m15", "W", "M"
	type: _react.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
	data: _react.PropTypes.array.isRequired,
	// initialDisplay: PropTypes.number,
	calculator: _react.PropTypes.arrayOf(_react.PropTypes.func).isRequired,
	xAccessor: _react.PropTypes.func,
	xExtents: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	// xScale: PropTypes.func.isRequired,
	className: _react.PropTypes.string,
	seriesName: _react.PropTypes.string.isRequired,
	zIndex: _react.PropTypes.number,
	children: _react.PropTypes.node.isRequired,
	xScaleProvider: function xScaleProvider(props, propName /* , componentName */) {
		if ((0, _utils.isDefined)(props[propName]) && typeof props[propName] === "function" && (0, _utils.isDefined)(props.xScale)) {
			return new Error("Do not define both xScaleProvider and xScale choose only one");
		}
	},
	xScale: function xScale(props, propName /* , componentName */) {
		if ((0, _utils.isDefined)(props[propName]) && typeof props[propName] === "function" && (0, _utils.isDefined)(props.xScaleProvider)) {
			return new Error("Do not define both xScaleProvider and xScale choose only one");
		}
	},
	postCalculator: _react.PropTypes.func.isRequired,
	flipXScale: _react.PropTypes.bool.isRequired,
	useCrossHairStyleCursor: _react.PropTypes.bool.isRequired,
	drawMode: _react.PropTypes.bool.isRequired,
	padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
		left: _react.PropTypes.number,
		right: _react.PropTypes.number
	})]).isRequired,
	defaultFocus: _react.PropTypes.bool,
	onLoadMore: _react.PropTypes.func,
	displayXAccessor: _react.PropTypes.func
};

ChartCanvas.defaultProps = {
	margin: { top: 20, right: 30, bottom: 30, left: 80 },
	indexAccessor: function indexAccessor(d) {
		return d.idx;
	},
	indexMutator: function indexMutator(d, idx) {
		return _extends({}, d, { idx: idx });
	},
	map: _utils.identity,
	type: "hybrid",
	calculator: [],
	className: "react-stockchart",
	zIndex: 1,
	xExtents: [_d3Array.min, _d3Array.max],
	// dataEvaluator: evaluator,
	postCalculator: _utils.identity,
	padding: 0,
	xAccessor: _utils.identity,
	flipXScale: false,
	useCrossHairStyleCursor: true,
	drawMode: false,
	defaultFocus: true,
	onLoadMore: _utils.noop
};

ChartCanvas.childContextTypes = {
	plotData: _react.PropTypes.array,
	fullData: _react.PropTypes.array,
	chartConfig: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		id: _react.PropTypes.number.isRequired,
		origin: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
		padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
			top: _react.PropTypes.number,
			bottom: _react.PropTypes.number
		})]),
		yExtents: _react.PropTypes.arrayOf(_react.PropTypes.func),
		yExtentsProvider: _react.PropTypes.func,
		yScale: _react.PropTypes.func.isRequired,
		mouseCoordinates: _react.PropTypes.shape({
			at: _react.PropTypes.string,
			format: _react.PropTypes.func
		}),
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	})).isRequired,
	xScale: _react.PropTypes.func.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,
	displayXAccessor: _react.PropTypes.func.isRequired,
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	chartCanvasType: _react.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
	margin: _react.PropTypes.object.isRequired,
	ratio: _react.PropTypes.number.isRequired,
	getCanvasContexts: _react.PropTypes.func,
	xAxisZoom: _react.PropTypes.func,
	yAxisZoom: _react.PropTypes.func,
	subscribe: _react.PropTypes.func,
	unsubscribe: _react.PropTypes.func
};

ChartCanvas.ohlcv = function (d) {
	return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
};

exports.default = ChartCanvas;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var windowSize = 1,
	    accumulator = _utils.identity,
	    mergeAs = _utils.identity;

	function algorithm(data) {

		var defaultAlgorithm = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(accumulator);

		var calculator = (0, _utils.merge)().algorithm(defaultAlgorithm).merge(mergeAs);

		var newData = calculator(data);

		return newData;
	}

	algorithm.accumulator = function (x) {
		if (!arguments.length) {
			return accumulator;
		}
		accumulator = x;
		return algorithm;
	};

	algorithm.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return algorithm;
	};
	algorithm.merge = function (x) {
		if (!arguments.length) {
			return mergeAs;
		}
		mergeAs = x;
		return algorithm;
	};

	return algorithm;
};

var _utils = __webpack_require__(2);

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Label = exports.SvgPathAnnotation = exports.LabelAnnotation = exports.Annotate = undefined;
exports.buyPath = buyPath;
exports.sellPath = sellPath;

var _Annotate = __webpack_require__(265);

var _Annotate2 = _interopRequireDefault(_Annotate);

var _LabelAnnotation = __webpack_require__(99);

var _LabelAnnotation2 = _interopRequireDefault(_LabelAnnotation);

var _SvgPathAnnotation = __webpack_require__(267);

var _SvgPathAnnotation2 = _interopRequireDefault(_SvgPathAnnotation);

var _Label = __webpack_require__(266);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Annotate = _Annotate2.default;
exports.LabelAnnotation = _LabelAnnotation2.default;
exports.SvgPathAnnotation = _SvgPathAnnotation2.default;
exports.Label = _Label2.default;


var halfWidth = 10;
var bottomWidth = 3;
var height = 20;

function buyPath(_ref) {
	var x = _ref.x;
	var y = _ref.y;

	return "M" + x + " " + y + " " + ("L" + (x + halfWidth) + " " + (y + halfWidth) + " ") + ("L" + (x + bottomWidth) + " " + (y + halfWidth) + " ") + ("L" + (x + bottomWidth) + " " + (y + height) + " ") + ("L" + (x - bottomWidth) + " " + (y + height) + " ") + ("L" + (x - bottomWidth) + " " + (y + halfWidth) + " ") + ("L" + (x - halfWidth) + " " + (y + halfWidth) + " ") + "Z";
}

function sellPath(_ref2) {
	var x = _ref2.x;
	var y = _ref2.y;

	return "M" + x + " " + y + " " + ("L" + (x + halfWidth) + " " + (y - halfWidth) + " ") + ("L" + (x + bottomWidth) + " " + (y - halfWidth) + " ") + ("L" + (x + bottomWidth) + " " + (y - height) + " ") + ("L" + (x - bottomWidth) + " " + (y - height) + " ") + ("L" + (x - bottomWidth) + " " + (y - halfWidth) + " ") + ("L" + (x - halfWidth) + " " + (y - halfWidth) + " ") + "Z";
}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YAxis = exports.XAxis = undefined;

var _XAxis = __webpack_require__(269);

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = __webpack_require__(270);

var _YAxis2 = _interopRequireDefault(_YAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.XAxis = _XAxis2.default;
exports.YAxis = _YAxis2.default;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CrossHairCursor = exports.MouseCoordinateY = exports.MouseCoordinateX = exports.CurrentCoordinate = exports.EdgeIndicator = undefined;

var _EdgeIndicator = __webpack_require__(273);

var _EdgeIndicator2 = _interopRequireDefault(_EdgeIndicator);

var _CurrentCoordinate = __webpack_require__(272);

var _CurrentCoordinate2 = _interopRequireDefault(_CurrentCoordinate);

var _MouseCoordinateX = __webpack_require__(274);

var _MouseCoordinateX2 = _interopRequireDefault(_MouseCoordinateX);

var _MouseCoordinateY = __webpack_require__(275);

var _MouseCoordinateY2 = _interopRequireDefault(_MouseCoordinateY);

var _CrossHairCursor = __webpack_require__(271);

var _CrossHairCursor2 = _interopRequireDefault(_CrossHairCursor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EdgeIndicator = _EdgeIndicator2.default;
exports.CurrentCoordinate = _CurrentCoordinate2.default;
exports.MouseCoordinateX = _MouseCoordinateX2.default;
exports.MouseCoordinateY = _MouseCoordinateY2.default;
exports.CrossHairCursor = _CrossHairCursor2.default;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fitWidth = exports.SaveChartAsImage = exports.TypeChooser = undefined;

var _TypeChooser = __webpack_require__(277);

var _TypeChooser2 = _interopRequireDefault(_TypeChooser);

var _SaveChartAsImage = __webpack_require__(276);

var _SaveChartAsImage2 = _interopRequireDefault(_SaveChartAsImage);

var _fitWidth = __webpack_require__(278);

var _fitWidth2 = _interopRequireDefault(_fitWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TypeChooser = _TypeChooser2.default;
exports.SaveChartAsImage = _SaveChartAsImage2.default;
exports.fitWidth = _fitWidth2.default;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.defaultOptionsForAppearance = exports.defaultOptionsForComputation = exports.compare = exports.elderImpulse = exports.change = exports.elderRay = exports.forceIndex = exports.stochasticOscillator = exports.atr = exports.rsi = exports.macd = exports.renko = exports.pointAndFigure = exports.kagi = exports.heikinAshi = exports.bollingerBand = exports.sma = exports.ema = undefined;

var _ema = __webpack_require__(298);

var _ema2 = _interopRequireDefault(_ema);

var _sma = __webpack_require__(306);

var _sma2 = _interopRequireDefault(_sma);

var _bollingerBand = __webpack_require__(293);

var _bollingerBand2 = _interopRequireDefault(_bollingerBand);

var _heikinAshi = __webpack_require__(300);

var _heikinAshi2 = _interopRequireDefault(_heikinAshi);

var _kagi = __webpack_require__(301);

var _kagi2 = _interopRequireDefault(_kagi);

var _pointAndFigure = __webpack_require__(303);

var _pointAndFigure2 = _interopRequireDefault(_pointAndFigure);

var _renko = __webpack_require__(304);

var _renko2 = _interopRequireDefault(_renko);

var _macd = __webpack_require__(302);

var _macd2 = _interopRequireDefault(_macd);

var _rsi = __webpack_require__(305);

var _rsi2 = _interopRequireDefault(_rsi);

var _atr = __webpack_require__(292);

var _atr2 = _interopRequireDefault(_atr);

var _stochasticOscillator = __webpack_require__(307);

var _stochasticOscillator2 = _interopRequireDefault(_stochasticOscillator);

var _forceIndex = __webpack_require__(299);

var _forceIndex2 = _interopRequireDefault(_forceIndex);

var _elderRay = __webpack_require__(297);

var _elderRay2 = _interopRequireDefault(_elderRay);

var _change = __webpack_require__(294);

var _change2 = _interopRequireDefault(_change);

var _elderImpulse = __webpack_require__(296);

var _elderImpulse2 = _interopRequireDefault(_elderImpulse);

var _compare = __webpack_require__(295);

var _compare2 = _interopRequireDefault(_compare);

var _defaultOptionsForComputation = __webpack_require__(15);

var defaultOptionsForComputation = _interopRequireWildcard(_defaultOptionsForComputation);

var _defaultOptionsForAppearance = __webpack_require__(30);

var defaultOptionsForAppearance = _interopRequireWildcard(_defaultOptionsForAppearance);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ema = _ema2.default;
exports.sma = _sma2.default;
exports.bollingerBand = _bollingerBand2.default;
exports.heikinAshi = _heikinAshi2.default;
exports.kagi = _kagi2.default;
exports.pointAndFigure = _pointAndFigure2.default;
exports.renko = _renko2.default;
exports.macd = _macd2.default;
exports.rsi = _rsi2.default;
exports.atr = _atr2.default;
exports.stochasticOscillator = _stochasticOscillator2.default;
exports.forceIndex = _forceIndex2.default;
exports.elderRay = _elderRay2.default;
exports.change = _change2.default;
exports.elderImpulse = _elderImpulse2.default;
exports.compare = _compare2.default;
exports.defaultOptionsForComputation = defaultOptionsForComputation;
exports.defaultOptionsForAppearance = defaultOptionsForAppearance;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Brush = exports.ClickCallback = exports.FibonacciRetracement = exports.TrendLine = undefined;

var _TrendLine = __webpack_require__(311);

var _TrendLine2 = _interopRequireDefault(_TrendLine);

var _FibonacciRetracement = __webpack_require__(310);

var _FibonacciRetracement2 = _interopRequireDefault(_FibonacciRetracement);

var _ClickCallback = __webpack_require__(309);

var _ClickCallback2 = _interopRequireDefault(_ClickCallback);

var _Brush = __webpack_require__(308);

var _Brush2 = _interopRequireDefault(_Brush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TrendLine = _TrendLine2.default;
exports.FibonacciRetracement = _FibonacciRetracement2.default;
exports.ClickCallback = _ClickCallback2.default;
exports.Brush = _Brush2.default;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.financeDiscontinuousScale = exports.discontinuousTimeScaleProvider = exports.discontinuousTimeScaleProviderBuilder = undefined;
exports.defaultScaleProvider = defaultScaleProvider;

var _discontinuousTimeScaleProvider = __webpack_require__(313);

var _discontinuousTimeScaleProvider2 = _interopRequireDefault(_discontinuousTimeScaleProvider);

var _financeDiscontinuousScale = __webpack_require__(103);

var _financeDiscontinuousScale2 = _interopRequireDefault(_financeDiscontinuousScale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.discontinuousTimeScaleProviderBuilder = _discontinuousTimeScaleProvider.discontinuousTimeScaleProviderBuilder;
exports.discontinuousTimeScaleProvider = _discontinuousTimeScaleProvider2.default;
exports.financeDiscontinuousScale = _financeDiscontinuousScale2.default;
function defaultScaleProvider(xScale) {
	return function (data, xAccessor) {
		return { data: data, xScale: xScale, xAccessor: xAccessor, displayXAccessor: xAccessor };
	};
}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StraightLine = exports.VolumeProfileSeries = exports.ElderRaySeries = exports.StochasticSeries = exports.RSISeries = exports.BollingerSeries = exports.MACDSeries = exports.RenkoSeries = exports.PointAndFigureSeries = exports.KagiSeries = exports.GroupedBarSeries = exports.StackedBarSeries = exports.BarSeries = exports.OHLCSeries = exports.CandlestickSeries = exports.LineSeries = exports.AreaSeries = exports.CircleMarker = exports.ScatterSeries = undefined;

var _AreaSeries = __webpack_require__(315);

var _AreaSeries2 = _interopRequireDefault(_AreaSeries);

var _ScatterSeries = __webpack_require__(328);

var _ScatterSeries2 = _interopRequireDefault(_ScatterSeries);

var _CircleMarker = __webpack_require__(318);

var _CircleMarker2 = _interopRequireDefault(_CircleMarker);

var _LineSeries = __webpack_require__(26);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _CandlestickSeries = __webpack_require__(317);

var _CandlestickSeries2 = _interopRequireDefault(_CandlestickSeries);

var _OHLCSeries = __webpack_require__(323);

var _OHLCSeries2 = _interopRequireDefault(_OHLCSeries);

var _BarSeries = __webpack_require__(105);

var _BarSeries2 = _interopRequireDefault(_BarSeries);

var _StackedBarSeries = __webpack_require__(47);

var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);

var _GroupedBarSeries = __webpack_require__(320);

var _GroupedBarSeries2 = _interopRequireDefault(_GroupedBarSeries);

var _KagiSeries = __webpack_require__(321);

var _KagiSeries2 = _interopRequireDefault(_KagiSeries);

var _PointAndFigureSeries = __webpack_require__(325);

var _PointAndFigureSeries2 = _interopRequireDefault(_PointAndFigureSeries);

var _RenkoSeries = __webpack_require__(327);

var _RenkoSeries2 = _interopRequireDefault(_RenkoSeries);

var _MACDSeries = __webpack_require__(322);

var _MACDSeries2 = _interopRequireDefault(_MACDSeries);

var _BollingerSeries = __webpack_require__(316);

var _BollingerSeries2 = _interopRequireDefault(_BollingerSeries);

var _RSISeries = __webpack_require__(326);

var _RSISeries2 = _interopRequireDefault(_RSISeries);

var _StochasticSeries = __webpack_require__(329);

var _StochasticSeries2 = _interopRequireDefault(_StochasticSeries);

var _ElderRaySeries = __webpack_require__(319);

var _ElderRaySeries2 = _interopRequireDefault(_ElderRaySeries);

var _VolumeProfileSeries = __webpack_require__(330);

var _VolumeProfileSeries2 = _interopRequireDefault(_VolumeProfileSeries);

var _StraightLine = __webpack_require__(31);

var _StraightLine2 = _interopRequireDefault(_StraightLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ScatterSeries = _ScatterSeries2.default;
exports.CircleMarker = _CircleMarker2.default;
exports.AreaSeries = _AreaSeries2.default;
exports.LineSeries = _LineSeries2.default;
exports.CandlestickSeries = _CandlestickSeries2.default;
exports.OHLCSeries = _OHLCSeries2.default;
exports.BarSeries = _BarSeries2.default;
exports.StackedBarSeries = _StackedBarSeries2.default;
exports.GroupedBarSeries = _GroupedBarSeries2.default;
exports.KagiSeries = _KagiSeries2.default;
exports.PointAndFigureSeries = _PointAndFigureSeries2.default;
exports.RenkoSeries = _RenkoSeries2.default;
exports.MACDSeries = _MACDSeries2.default;
exports.BollingerSeries = _BollingerSeries2.default;
exports.RSISeries = _RSISeries2.default;
exports.StochasticSeries = _StochasticSeries2.default;
exports.ElderRaySeries = _ElderRaySeries2.default;
exports.VolumeProfileSeries = _VolumeProfileSeries2.default;
exports.StraightLine = _StraightLine2.default;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HoverTooltip = exports.StochasticTooltip = exports.RSITooltip = exports.BollingerBandTooltip = exports.MovingAverageTooltip = exports.SingleValueTooltip = exports.OHLCTooltip = exports.MACDTooltip = undefined;

var _MACDTooltip = __webpack_require__(333);

var _MACDTooltip2 = _interopRequireDefault(_MACDTooltip);

var _OHLCTooltip = __webpack_require__(335);

var _OHLCTooltip2 = _interopRequireDefault(_OHLCTooltip);

var _SingleValueTooltip = __webpack_require__(337);

var _SingleValueTooltip2 = _interopRequireDefault(_SingleValueTooltip);

var _MovingAverageTooltip = __webpack_require__(334);

var _MovingAverageTooltip2 = _interopRequireDefault(_MovingAverageTooltip);

var _BollingerBandTooltip = __webpack_require__(331);

var _BollingerBandTooltip2 = _interopRequireDefault(_BollingerBandTooltip);

var _RSITooltip = __webpack_require__(336);

var _RSITooltip2 = _interopRequireDefault(_RSITooltip);

var _StochasticTooltip = __webpack_require__(338);

var _StochasticTooltip2 = _interopRequireDefault(_StochasticTooltip);

var _HoverTooltip = __webpack_require__(332);

var _HoverTooltip2 = _interopRequireDefault(_HoverTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MACDTooltip = _MACDTooltip2.default;
exports.OHLCTooltip = _OHLCTooltip2.default;
exports.SingleValueTooltip = _SingleValueTooltip2.default;
exports.MovingAverageTooltip = _MovingAverageTooltip2.default;
exports.BollingerBandTooltip = _BollingerBandTooltip2.default;
exports.RSITooltip = _RSITooltip2.default;
exports.StochasticTooltip = _StochasticTooltip2.default;
exports.HoverTooltip = _HoverTooltip2.default;
// import TooltipContainer from "./TooltipContainer";

/***/ },
/* 220 */,
/* 221 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasContainer = function (_Component) {
	_inherits(CanvasContainer, _Component);

	function CanvasContainer(props) {
		_classCallCheck(this, CanvasContainer);

		var _this = _possibleConstructorReturn(this, (CanvasContainer.__proto__ || Object.getPrototypeOf(CanvasContainer)).call(this, props));

		_this.setDrawCanvas = _this.setDrawCanvas.bind(_this);
		_this.drawCanvas = {};
		return _this;
	}

	_createClass(CanvasContainer, [{
		key: "setDrawCanvas",
		value: function setDrawCanvas(node) {
			if ((0, _utils.isDefined)(node)) this.drawCanvas[node.id] = node.getContext("2d");else this.drawCanvas = {};
		}
	}, {
		key: "getCanvasContexts",
		value: function getCanvasContexts() {
			if ((0, _utils.isDefined)(this.drawCanvas.axes)) {
				return this.drawCanvas;
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var height = _props.height;
			var width = _props.width;
			var type = _props.type;
			var zIndex = _props.zIndex;
			var ratio = _props.ratio;

			if (type === "svg") return null;
			console.log("using ratio ", ratio);
			return _react2.default.createElement(
				"div",
				{ style: { zIndex: zIndex } },
				_react2.default.createElement("canvas", { id: "bg", ref: this.setDrawCanvas, width: width * ratio, height: height * ratio,
					style: { position: "absolute", left: 0, top: 0, width: width, height: height } }),
				_react2.default.createElement("canvas", { id: "axes", ref: this.setDrawCanvas, width: width * ratio, height: height * ratio,
					style: { position: "absolute", left: 0, top: 0, width: width, height: height } }),
				_react2.default.createElement("canvas", { id: "mouseCoord", ref: this.setDrawCanvas, width: width * ratio, height: height * ratio,
					style: { position: "absolute", left: 0, top: 0, width: width, height: height } })
			);
		}
	}]);

	return CanvasContainer;
}(_react.Component);

/*
				<canvas ref="canvas_interactive" width={width} height={height}
					style={{ position: "absolute", left: 0, top: 0 }} />
*/

CanvasContainer.propTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	type: _react.PropTypes.string.isRequired,
	zIndex: _react.PropTypes.number,
	ratio: _react.PropTypes.number.isRequired
};

exports.default = CanvasContainer;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Selection = __webpack_require__(75);

var _utils = __webpack_require__(2);

var _ChartDataUtil = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getTouchProps(touch) {
	if (!touch) return {};
	return {
		pageX: touch.pageX,
		pageY: touch.pageY,
		clientX: touch.clientX,
		clientY: touch.clientY
	};
}

var EventCapture = function (_Component) {
	_inherits(EventCapture, _Component);

	function EventCapture(props) {
		_classCallCheck(this, EventCapture);

		var _this = _possibleConstructorReturn(this, (EventCapture.__proto__ || Object.getPrototypeOf(EventCapture)).call(this, props));

		_this.handleEnter = _this.handleEnter.bind(_this);
		_this.handleLeave = _this.handleLeave.bind(_this);
		_this.handleWheel = _this.handleWheel.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handlePanEnd = _this.handlePanEnd.bind(_this);
		_this.handlePan = _this.handlePan.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleRightClick = _this.handleRightClick.bind(_this);
		_this.lastTouch = {};
		_this.initialPinch = {};
		_this.mouseInteraction = true;
		_this.state = {
			panInProgress: false
		};
		return _this;
	}

	_createClass(EventCapture, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.focus = this.props.focus;
		}
	}, {
		key: "handleEnter",
		value: function handleEnter(e) {
			var onMouseEnter = this.props.onMouseEnter;

			onMouseEnter(e);
		}
	}, {
		key: "handleLeave",
		value: function handleLeave(e) {
			var onMouseLeave = this.props.onMouseLeave;

			onMouseLeave(e);
		}
	}, {
		key: "handleWheel",
		value: function handleWheel(e) {
			var _props = this.props;
			var zoom = _props.zoom;
			var onZoom = _props.onZoom;
			var zoomMultiplier = _props.zoomMultiplier;


			if (zoom && this.focus) {
				e.preventDefault();

				var newPos = (0, _utils.mousePosition)(e);
				var zoomDir = e.deltaY > 0 ? zoomMultiplier : -zoomMultiplier;

				onZoom(zoomDir, newPos, e);
			}
		}
	}, {
		key: "handleMouseMove",
		value: function handleMouseMove(e) {
			var _props2 = this.props;
			var onMouseMove = _props2.onMouseMove;
			var mouseMove = _props2.mouseMove;


			if (this.mouseInteraction && mouseMove && !this.state.panInProgress) {

				var newPos = (0, _utils.mousePosition)(e);

				onMouseMove(newPos, "mouse", e);
			}
		}
	}, {
		key: "handleRightClick",
		value: function handleRightClick(e) {
			e.stopPropagation();
			e.preventDefault();

			var _props3 = this.props;
			var onContextMenu = _props3.onContextMenu;
			var onPanEnd = _props3.onPanEnd;
			var _state$panStart = this.state.panStart;
			var dx = _state$panStart.dx;
			var dy = _state$panStart.dy;
			var panStartXScale = _state$panStart.panStartXScale;
			var panOrigin = _state$panStart.panOrigin;
			var chartsToPan = _state$panStart.chartsToPan;


			var newPos = [e.pageX - dx, e.pageY - dy];

			if (this.panHappened) {
				onPanEnd(newPos, panStartXScale, panOrigin, chartsToPan, e);
			}

			onContextMenu(newPos, e);

			var win = (0, _utils.d3Window)(this.refs.capture);
			(0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);

			this.contextMenuClicked = true;
			this.setState({
				panInProgress: false,
				panStart: null
			});
			// onPanEnd(newPos, e);
		}
	}, {
		key: "handleMouseDown",
		value: function handleMouseDown(e) {
			var _this2 = this;

			var _props4 = this.props;
			var pan = _props4.pan;
			var xScale = _props4.xScale;
			var chartConfig = _props4.chartConfig;
			var onMouseDown = _props4.onMouseDown;

			this.panHappened = false;
			this.focus = true;

			if (!this.state.panInProgress && this.mouseInteraction) {

				var mouseXY = (0, _utils.mousePosition)(e);

				var dx = e.pageX - mouseXY[0],
				    dy = e.pageY - mouseXY[1];

				var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);

				this.setState({
					panInProgress: pan,
					panStart: {
						panStartXScale: xScale,
						panOrigin: mouseXY,
						dx: dx, dy: dy,
						chartsToPan: currentCharts
					}
				});

				if (pan) {
					var win = (0, _utils.d3Window)(this.refs.capture);
					(0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, this.handlePan).on(_utils.MOUSEUP, this.handlePanEnd);
				}

				if (!pan) {
					e.persist();
					setTimeout(function () {
						if (!_this2.contextMenuClicked) {
							// console.log("NO RIGHT")
							onMouseDown(mouseXY, currentCharts, e);
						}
						_this2.contextMenuClicked = false;
					}, 100);
				}
			}
			e.preventDefault();
		}
	}, {
		key: "handlePan",
		value: function handlePan() {
			var e = _d3Selection.event;
			var _props5 = this.props;
			var panEnabled = _props5.pan;
			var onPan = _props5.onPan;

			// console.log("moved from- ", startXY, " to ", newPos);

			if (this.mouseInteraction && panEnabled && onPan && (0, _utils.isDefined)(this.state.panStart)) {

				this.panHappened = true;

				var _state$panStart2 = this.state.panStart;
				var dx = _state$panStart2.dx;
				var dy = _state$panStart2.dy;
				var panStartXScale = _state$panStart2.panStartXScale;
				var panOrigin = _state$panStart2.panOrigin;
				var chartsToPan = _state$panStart2.chartsToPan;

				var newPos = [e.pageX - dx, e.pageY - dy];

				onPan(newPos, panStartXScale, panOrigin, chartsToPan, e);
			}
		}
	}, {
		key: "handlePanEnd",
		value: function handlePanEnd() {
			var _this3 = this;

			var e = _d3Selection.event;

			var _props6 = this.props;
			var panEnabled = _props6.pan;
			var onPanEnd = _props6.onPanEnd;
			var onClick = _props6.onClick;
			var onDoubleClick = _props6.onDoubleClick;


			if ((0, _utils.isDefined)(this.state.panStart)) {
				var _state$panStart3 = this.state.panStart;
				var dx = _state$panStart3.dx;
				var dy = _state$panStart3.dy;
				var panStartXScale = _state$panStart3.panStartXScale;
				var panOrigin = _state$panStart3.panOrigin;
				var chartsToPan = _state$panStart3.chartsToPan;


				var newPos = [e.pageX - dx, e.pageY - dy];

				if (!this.panHappened) {
					if (this.clicked) {
						onDoubleClick(newPos, e);
					} else {
						this.clicked = true;
						setTimeout(function () {
							_this3.clicked = false;
						}, 300);
						onClick(newPos, e);
					}
				}

				if (this.mouseInteraction && this.panHappened
				// && !this.contextMenuClicked
				&& panEnabled && onPanEnd) {
					var win = (0, _utils.d3Window)(this.refs.capture);
					(0, _d3Selection.select)(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
					onPanEnd(newPos, panStartXScale, panOrigin, chartsToPan, e);
				}

				this.setState({
					panInProgress: false,
					panStart: null
				});
			}
		}
	}, {
		key: "handleTouchStart",
		value: function handleTouchStart(e) {
			this.mouseInteraction = false;

			var panEnabled = this.props.pan;
			var _props7 = this.props;
			var xScale = _props7.xScale;
			var onPanEnd = _props7.onPanEnd;


			if (e.touches.length === 1) {
				var touch = getTouchProps(e.touches[0]);
				var touchXY = (0, _utils.touchPosition)(touch, e);
				this.lastTouch = touch;
				// onMouseMove(touchXY, "touch", e);
				if (panEnabled) {
					var dx = touch.pageX - touchXY[0],
					    dy = touch.pageY - touchXY[1];

					this.setState({
						panInProgress: true,
						panStart: {
							panStartXScale: xScale,
							panOrigin: touchXY,
							dx: dx, dy: dy
						}
					});
				}
			} else if (e.touches.length === 2) {
				// pinch zoom begin
				// do nothing pinch zoom is handled in handleTouchMove
				var touch1 = getTouchProps(e.touches[0]);
				var _state = this.state;
				var panInProgress = _state.panInProgress;
				var panStart = _state.panStart;


				if (panInProgress && panEnabled && onPanEnd) {
					var _dx = panStart.dx;
					var _dy = panStart.dy;
					var panStartXScale = panStart.panStartXScale;
					var panOrigin = panStart.panOrigin;

					// end pan first

					var newPos = [touch1.pageX - _dx, touch1.pageY - _dy];
					this.lastTouch = null;

					this.setState({
						panInProgress: false,
						panStart: null
					});
					onPanEnd(newPos, panStartXScale, panOrigin, e);
				}
			}

			if (e.touches.length !== 2) this.initialPinch = null;

			// console.log("handleTouchStart", e);
			e.preventDefault();
		}
	}, {
		key: "handleTouchMove",
		value: function handleTouchMove(e) {
			var _props8 = this.props;
			var panEnabled = _props8.pan;
			var zoomEnabled = _props8.zoom;
			var _props9 = this.props;
			var xScale = _props9.xScale;
			var onPan = _props9.onPan;
			var onPinchZoom = _props9.onPinchZoom;
			var _state2 = this.state;
			var panInProgress = _state2.panInProgress;
			var panStart = _state2.panStart;


			if (e.touches.length === 1) {
				// pan
				var touch = this.lastTouch = getTouchProps(e.touches[0]);

				if (panInProgress && panEnabled && onPan) {
					var dx = panStart.dx;
					var dy = panStart.dy;
					var panStartXScale = panStart.panStartXScale;
					var panOrigin = panStart.panOrigin;
					var chartsToPan = panStart.chartsToPan;


					var newPos = [touch.pageX - dx, touch.pageY - dy];
					onPan(newPos, panStartXScale, panOrigin, chartsToPan, e);
				}
			} else if (e.touches.length === 2) {
				// pinch zoom
				if (zoomEnabled && onPinchZoom && focus) {
					var touch1 = getTouchProps(e.touches[0]);
					var touch2 = getTouchProps(e.touches[1]);

					var touch1Pos = (0, _utils.touchPosition)(touch1, e);
					var touch2Pos = (0, _utils.touchPosition)(touch2, e);

					if (this.initialPinch === null) {
						this.initialPinch = {
							touch1Pos: touch1Pos,
							touch2Pos: touch2Pos,
							xScale: xScale,
							range: xScale.range()
						};
					} else if (this.initialPinch && !panInProgress) {
						onPinchZoom(this.initialPinch, {
							touch1Pos: touch1Pos,
							touch2Pos: touch2Pos,
							xScale: xScale
						});
					}
				}
			}
			e.preventDefault();

			// console.log("handleTouchMove", e);
		}
	}, {
		key: "handleTouchEnd",
		value: function handleTouchEnd(e) {
			// TODO enableMouseInteraction
			var _props10 = this.props;
			var panEnabled = _props10.pan;
			var onPanEnd = _props10.onPanEnd;
			var _state3 = this.state;
			var panInProgress = _state3.panInProgress;
			var panStart = _state3.panStart;


			if (this.lastTouch && (0, _utils.isDefined)(panStart)) {
				var dx = panStart.dx;
				var dy = panStart.dy;
				var panStartXScale = panStart.panStartXScale;
				var panOrigin = panStart.panOrigin;
				var chartsToPan = panStart.chartsToPan;

				var newPos = [this.lastTouch.pageX - dx, this.lastTouch.pageY - dy];

				this.initialPinch = null;

				if (panInProgress && panEnabled && onPanEnd) {

					onPanEnd(newPos, panStartXScale, panOrigin, chartsToPan, e);
				}
			}
			// console.log("handleTouchEnd", dxdy, newPos, e);
			this.mouseInteraction = true;
			e.preventDefault();
		}
	}, {
		key: "render",
		value: function render() {
			var _props11 = this.props;
			var height = _props11.height;
			var width = _props11.width;

			var className = this.state.panInProgress ? "react-stockcharts-grabbing-cursor" : "react-stockcharts-crosshair-cursor";
			return _react2.default.createElement("rect", { ref: "capture",
				className: className,
				width: width, height: height, style: { opacity: 0 },
				onMouseEnter: this.handleEnter,
				onMouseLeave: this.handleLeave,
				onMouseMove: this.handleMouseMove,
				onWheel: this.handleWheel,
				onMouseDown: this.handleMouseDown,
				onContextMenu: this.handleRightClick,
				onTouchStart: this.handleTouchStart,
				onTouchEnd: this.handleTouchEnd,
				onTouchMove: this.handleTouchMove });
		}
	}]);

	return EventCapture;
}(_react.Component);

EventCapture.propTypes = {
	mouseMove: _react.PropTypes.bool.isRequired,
	zoom: _react.PropTypes.bool.isRequired,
	zoomMultiplier: _react.PropTypes.number.isRequired,
	pan: _react.PropTypes.bool.isRequired,
	panSpeedMultiplier: _react.PropTypes.number.isRequired,
	focus: _react.PropTypes.bool.isRequired,

	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	chartConfig: _react.PropTypes.array,
	xScale: _react.PropTypes.func.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,

	onMouseMove: _react.PropTypes.func,
	onMouseEnter: _react.PropTypes.func,
	onMouseLeave: _react.PropTypes.func,
	onZoom: _react.PropTypes.func,
	onPinchZoom: _react.PropTypes.func,
	onPan: _react.PropTypes.func,
	onPanEnd: _react.PropTypes.func,

	onClick: _react.PropTypes.func,
	onDoubleClick: _react.PropTypes.func,
	onContextMenu: _react.PropTypes.func,
	onMouseDown: _react.PropTypes.func,
	children: _react.PropTypes.node
};

EventCapture.defaultProps = {
	mouseMove: false,
	zoom: false,
	zoomMultiplier: 1,
	pan: false,
	panSpeedMultiplier: 1,
	focus: false
};

exports.default = EventCapture;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Annotate = function (_Component) {
	_inherits(Annotate, _Component);

	function Annotate(props) {
		_classCallCheck(this, Annotate);

		var _this = _possibleConstructorReturn(this, (Annotate.__proto__ || Object.getPrototypeOf(Annotate)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		return _this;
	}

	_createClass(Annotate, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				svgDraw: this.renderSVG,
				drawOnPan: true
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var _props = this.props;
			var className = _props.className;
			var usingProps = _props.usingProps;
			var Annotation = _props.with;

			var data = helper(this.props, plotData);

			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-enable-interaction " + className },
				data.map(function (d, idx) {
					return _react2.default.createElement(Annotation, _extends({ key: idx
					}, usingProps, {
						xScale: xScale,
						yScale: yScale,
						xAccessor: xAccessor,
						plotData: plotData,
						datum: d }));
				})
			);
		}
	}]);

	return Annotate;
}(_react.Component);

Annotate.propTypes = {
	className: _react.PropTypes.string.isRequired,
	with: _react.PropTypes.func,
	when: _react.PropTypes.func,
	usingProps: _react.PropTypes.object
};

Annotate.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

Annotate.defaultProps = {
	className: "react-stockcharts-annotate react-stockcharts-default-cursor"
};

function helper(_ref, plotData) {
	var when = _ref.when;

	return plotData.filter(when);
}

exports.default = Annotate;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericComponent = __webpack_require__(29);

var _GenericComponent2 = _interopRequireDefault(_GenericComponent);

var _utils = __webpack_require__(2);

var _LabelAnnotation = __webpack_require__(99);

var _LabelAnnotation2 = _interopRequireDefault(_LabelAnnotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = function (_Component) {
	_inherits(Label, _Component);

	function Label(props) {
		_classCallCheck(this, Label);

		var _this = _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(Label, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			drawOnCanvas2(ctx, this.props, this.context, moreProps);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericComponent2.default, {
				canvasToDraw: this.props.selectCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var chartConfig = moreProps.chartConfig;


			return _react2.default.createElement(_LabelAnnotation2.default, _extends({ yScale: getYScale(chartConfig) }, this.props, { text: getText(this.props) }));
		}
	}]);

	return Label;
}(_react.Component);

function getText(props) {
	return (0, _utils.functor)(props.text)(props);
}

function getYScale(chartConfig) {
	return Array.isArray(chartConfig) ? undefined : chartConfig.yScale;
}

Label.propTypes = {
	className: _react.PropTypes.string,
	selectCanvas: _react.PropTypes.func.isRequired,
	text: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired
};

Label.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired,
	canvasOriginX: _react.PropTypes.number,
	canvasOriginY: _react.PropTypes.number,

	margin: _react.PropTypes.object.isRequired,
	ratio: _react.PropTypes.number.isRequired
};

Label.defaultProps = _extends({}, _LabelAnnotation.defaultProps, {
	selectCanvas: function selectCanvas(canvases) {
		return canvases.bg;
	}
});

function drawOnCanvas2(ctx, props, context, moreProps) {
	ctx.save();

	var canvasOriginX = context.canvasOriginX;
	var canvasOriginY = context.canvasOriginY;
	var margin = context.margin;
	var ratio = context.ratio;

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.scale(ratio, ratio);

	if ((0, _utils.isDefined)(canvasOriginX)) ctx.translate(canvasOriginX, canvasOriginY);else ctx.translate(margin.left + 0.5 * ratio, margin.top + 0.5 * ratio);

	drawOnCanvas(ctx, props, context, moreProps);

	ctx.restore();
}

function drawOnCanvas(ctx, props, context, moreProps) {
	var textAnchor = props.textAnchor;
	var fontFamily = props.fontFamily;
	var fontSize = props.fontSize;
	var opacity = props.opacity;
	var rotate = props.rotate;
	var xScale = moreProps.xScale;
	var chartConfig = moreProps.chartConfig;
	var xAccessor = context.xAccessor;

	var _helper = (0, _LabelAnnotation.helper)(props, xAccessor, xScale, getYScale(chartConfig));

	var xPos = _helper.xPos;
	var yPos = _helper.yPos;
	var fill = _helper.fill;
	var text = _helper.text;


	var radians = rotate / 180 * Math.PI;
	ctx.save();
	ctx.translate(xPos, yPos);
	ctx.rotate(radians);

	ctx.font = fontSize + "px " + fontFamily;
	ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
	ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;

	ctx.beginPath();
	ctx.fillText(text, 0, 0);
	ctx.restore();
}

exports.default = Label;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgPathAnnotation = function (_Component) {
	_inherits(SvgPathAnnotation, _Component);

	function SvgPathAnnotation(props) {
		_classCallCheck(this, SvgPathAnnotation);

		var _this = _possibleConstructorReturn(this, (SvgPathAnnotation.__proto__ || Object.getPrototypeOf(SvgPathAnnotation)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(SvgPathAnnotation, [{
		key: "handleClick",
		value: function handleClick(e) {
			var onClick = this.props.onClick;


			if (onClick) {
				var _props = this.props;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var datum = _props.datum;

				onClick({ xScale: xScale, yScale: yScale, datum: datum }, e);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props;
			var className = _props2.className;
			var stroke = _props2.stroke;
			var opacity = _props2.opacity;
			var _props3 = this.props;
			var xAccessor = _props3.xAccessor;
			var xScale = _props3.xScale;
			var yScale = _props3.yScale;
			var path = _props3.path;

			var _helper = helper(this.props, xAccessor, xScale, yScale);

			var x = _helper.x;
			var y = _helper.y;
			var fill = _helper.fill;
			var tooltip = _helper.tooltip;


			return _react2.default.createElement(
				"g",
				{ className: className, onClick: this.handleClick },
				_react2.default.createElement(
					"title",
					null,
					tooltip
				),
				_react2.default.createElement("path", { d: path({ x: x, y: y }), stroke: stroke, fill: fill, opacity: opacity })
			);
		}
	}]);

	return SvgPathAnnotation;
}(_react.Component);

function helper(props, xAccessor, xScale, yScale) {
	var x = props.x;
	var y = props.y;
	var datum = props.datum;
	var fill = props.fill;
	var tooltip = props.tooltip;
	var plotData = props.plotData;


	var xFunc = (0, _utils.functor)(x);
	var yFunc = (0, _utils.functor)(y);

	var xPos = xFunc({ xScale: xScale, xAccessor: xAccessor, datum: datum, plotData: plotData });
	var yPos = yFunc({ yScale: yScale, datum: datum, plotData: plotData });


	return {
		x: xPos,
		y: yPos,
		fill: (0, _utils.functor)(fill)(datum),
		tooltip: (0, _utils.functor)(tooltip)(datum)
	};
}

SvgPathAnnotation.propTypes = {
	className: _react.PropTypes.string,
	path: _react.PropTypes.func.isRequired,
	onClick: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	datum: _react.PropTypes.object,
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string,
	opacity: _react.PropTypes.number
};

SvgPathAnnotation.defaultProps = {
	className: "react-stockcharts-svgpathannotation",
	opacity: 1,
	x: function x(_ref) {
		var xScale = _ref.xScale;
		var xAccessor = _ref.xAccessor;
		var datum = _ref.datum;
		return xScale(xAccessor(datum));
	}
};

exports.default = SvgPathAnnotation;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Selection = __webpack_require__(75);

var _d3Array = __webpack_require__(9);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function sign(x) {
	return (x > 0) - (x < 0);
}

var AxisZoomCapture = function (_Component) {
	_inherits(AxisZoomCapture, _Component);

	function AxisZoomCapture(props) {
		_classCallCheck(this, AxisZoomCapture);

		var _this = _possibleConstructorReturn(this, (AxisZoomCapture.__proto__ || Object.getPrototypeOf(AxisZoomCapture)).call(this, props));

		_this.handleDragStart = _this.handleDragStart.bind(_this);
		_this.handleDrag = _this.handleDrag.bind(_this);
		_this.handleDragEnd = _this.handleDragEnd.bind(_this);
		_this.state = {
			startPosition: null
		};
		return _this;
	}

	_createClass(AxisZoomCapture, [{
		key: "handleDragStart",
		value: function handleDragStart(e) {
			var _props = this.props;
			var getScale = _props.getScale;
			var getMoreProps = _props.getMoreProps;

			var startScale = getScale(getMoreProps());

			if (startScale.invert) {
				(0, _d3Selection.select)((0, _utils.d3Window)(this.refs.capture)).on(_utils.MOUSEMOVE, this.handleDrag).on(_utils.MOUSEUP, this.handleDragEnd);

				var startXY = (0, _utils.mousePosition)(e);
				var leftX = e.pageX - startXY[0],
				    topY = e.pageY - startXY[1];

				this.setState({
					startPosition: {
						startXY: startXY,
						leftX: leftX,
						topY: topY,
						startScale: startScale
					}
				});
			}
			e.preventDefault();
		}
	}, {
		key: "handleDrag",
		value: function handleDrag() {
			var e = _d3Selection.event;
			e.preventDefault();

			var startPosition = this.state.startPosition;
			var getMouseDelta = this.props.getMouseDelta;


			if ((0, _utils.isDefined)(startPosition)) {
				var startScale = startPosition.startScale;
				var startXY = startPosition.startXY;
				var leftX = startPosition.leftX;
				var topY = startPosition.topY;


				var mouseXY = [e.pageX - leftX, e.pageY - topY];

				var diff = getMouseDelta(startXY, mouseXY);

				var center = (0, _d3Array.mean)(startScale.range());

				var tempRange = startScale.range().map(function (d) {
					return d + sign(d - center) * diff;
				});

				var newDomain = tempRange.map(startScale.invert);

				if (sign((0, _utils.last)(startScale.range()) - (0, _utils.first)(startScale.range())) === sign((0, _utils.last)(tempRange) - (0, _utils.first)(tempRange))) {
					var axisZoomCallback = this.props.axisZoomCallback;
					// console.log(startXScale.domain(), newXDomain)

					axisZoomCallback(newDomain);
				}
			}
		}
	}, {
		key: "handleDragEnd",
		value: function handleDragEnd() {
			(0, _d3Selection.select)((0, _utils.d3Window)(this.refs.capture)).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
			this.setState({
				startPosition: null
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props;
			var bg = _props2.bg;
			var zoomCursorClassName = _props2.zoomCursorClassName;


			var cursor = (0, _utils.isDefined)(this.state.startPosition) ? zoomCursorClassName : "react-stockcharts-default-cursor";

			return _react2.default.createElement("rect", {
				className: "react-stockcharts-enable-interaction " + cursor,
				ref: "capture",
				x: bg.x, y: bg.y, opacity: 0, height: bg.h, width: bg.w,
				onMouseDown: this.handleDragStart });
		}
	}]);

	return AxisZoomCapture;
}(_react.Component);

AxisZoomCapture.propTypes = {
	innerTickSize: _react.PropTypes.number,
	outerTickSize: _react.PropTypes.number,
	tickFormat: _react.PropTypes.func,
	tickPadding: _react.PropTypes.number,
	tickSize: _react.PropTypes.number,
	ticks: _react.PropTypes.number,
	tickValues: _react.PropTypes.array,
	showDomain: _react.PropTypes.bool,
	showTicks: _react.PropTypes.bool,
	className: _react.PropTypes.string,
	axisZoomCallback: _react.PropTypes.func,

	bg: _react.PropTypes.object.isRequired,
	zoomCursorClassName: _react.PropTypes.string.isRequired,
	getMoreProps: _react.PropTypes.func.isRequired,
	getScale: _react.PropTypes.func.isRequired,
	getMouseDelta: _react.PropTypes.func.isRequired
};

AxisZoomCapture.contextTypes = {
	height: _react.PropTypes.number.isRequired,
	width: _react.PropTypes.number.isRequired
};

exports.default = AxisZoomCapture;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Axis = __webpack_require__(100);

var _Axis2 = _interopRequireDefault(_Axis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XAxis = function (_Component) {
	_inherits(XAxis, _Component);

	function XAxis(props, context) {
		_classCallCheck(this, XAxis);

		var _this = _possibleConstructorReturn(this, (XAxis.__proto__ || Object.getPrototypeOf(XAxis)).call(this, props, context));

		_this.axisZoomCallback = _this.axisZoomCallback.bind(_this);
		return _this;
	}

	_createClass(XAxis, [{
		key: "axisZoomCallback",
		value: function axisZoomCallback(newXDomain) {
			var xAxisZoom = this.context.xAxisZoom;

			xAxisZoom(newXDomain);
		}
	}, {
		key: "render",
		value: function render() {
			var showTicks = this.props.showTicks;

			var moreProps = helper(this.props, this.context);

			return _react2.default.createElement(_Axis2.default, _extends({}, this.props, moreProps, {
				axisZoomCallback: this.axisZoomCallback,
				zoomEnabled: showTicks,
				zoomCursorClassName: "react-stockcharts-ew-resize-cursor" }));
		}
	}]);

	return XAxis;
}(_react.Component);

XAxis.propTypes = {
	axisAt: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(["top", "bottom", "middle"]), _react.PropTypes.number]).isRequired,
	orient: _react.PropTypes.oneOf(["top", "bottom"]).isRequired,
	innerTickSize: _react.PropTypes.number,
	outerTickSize: _react.PropTypes.number,
	tickFormat: _react.PropTypes.func,
	tickPadding: _react.PropTypes.number,
	tickSize: _react.PropTypes.number,
	ticks: _react.PropTypes.number,
	tickValues: _react.PropTypes.array,
	showTicks: _react.PropTypes.bool,
	className: _react.PropTypes.string
};

XAxis.defaultProps = {
	showGrid: false,
	showTicks: true,
	showDomain: true,
	className: "react-stockcharts-x-axis",
	ticks: 10,
	outerTickSize: 0,
	fill: "none",
	stroke: "#000000",
	strokeWidth: 1,
	opacity: 1,
	domainClassName: "react-stockcharts-axis-domain",
	innerTickSize: 5,
	tickPadding: 6,
	tickStroke: "#000000",
	tickStrokeOpacity: 1,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 12,
	xZoomHeight: 25,
	getMouseDelta: function getMouseDelta(startXY, mouseXY) {
		return startXY[0] - mouseXY[0];
	}
};

XAxis.contextTypes = {
	height: _react.PropTypes.number.isRequired,
	width: _react.PropTypes.number.isRequired,
	xAxisZoom: _react.PropTypes.func.isRequired
};

function helper(props, context) {
	var axisAt = props.axisAt;
	var xZoomHeight = props.xZoomHeight;
	var orient = props.orient;
	var width = context.width;
	var height = context.height;


	var axisLocation,
	    x = 0,
	    w = width,
	    h = xZoomHeight;

	if (axisAt === "top") axisLocation = 0;else if (axisAt === "bottom") axisLocation = height;else if (axisAt === "middle") axisLocation = height / 2;else axisLocation = axisAt;

	var y = orient === "top" ? -xZoomHeight : 0;

	return {
		transform: [0, axisLocation],
		range: [0, width],
		getScale: function getScale(moreProps) {
			return moreProps.xScale;
		},
		bg: { x: x, y: y, h: h, w: w }
	};
}
exports.default = XAxis;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Axis = __webpack_require__(100);

var _Axis2 = _interopRequireDefault(_Axis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YAxis = function (_Component) {
	_inherits(YAxis, _Component);

	function YAxis(props, context) {
		_classCallCheck(this, YAxis);

		var _this = _possibleConstructorReturn(this, (YAxis.__proto__ || Object.getPrototypeOf(YAxis)).call(this, props, context));

		_this.axisZoomCallback = _this.axisZoomCallback.bind(_this);
		return _this;
	}

	_createClass(YAxis, [{
		key: "axisZoomCallback",
		value: function axisZoomCallback(newYDomain) {
			var _context = this.context;
			var chartId = _context.chartId;
			var yAxisZoom = _context.yAxisZoom;

			yAxisZoom(chartId, newYDomain);
		}
	}, {
		key: "render",
		value: function render() {
			var moreProps = helper(this.props, this.context);
			return _react2.default.createElement(_Axis2.default, _extends({}, this.props, moreProps, {
				edgeClip: true,
				axisZoomCallback: this.axisZoomCallback,
				zoomCursorClassName: "react-stockcharts-ns-resize-cursor" }));
		}
	}]);

	return YAxis;
}(_react.Component);

YAxis.propTypes = {
	axisAt: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(["left", "right", "middle"]), _react.PropTypes.number]).isRequired,
	orient: _react.PropTypes.oneOf(["left", "right"]).isRequired,
	innerTickSize: _react.PropTypes.number,
	outerTickSize: _react.PropTypes.number,
	tickFormat: _react.PropTypes.func,
	tickPadding: _react.PropTypes.number,
	tickSize: _react.PropTypes.number,
	ticks: _react.PropTypes.number,
	yZoomWidth: _react.PropTypes.number,
	tickValues: _react.PropTypes.array,
	showTicks: _react.PropTypes.bool,
	className: _react.PropTypes.string
};

YAxis.defaultProps = {
	showGrid: false,
	showTicks: true,
	showDomain: true,
	className: "react-stockcharts-y-axis",
	ticks: 10,
	outerTickSize: 0,
	domainClassName: "react-stockcharts-axis-domain",
	fill: "none",
	stroke: "#FFFFFF",
	strokeWidth: 1,
	opacity: 1,
	innerTickSize: 5,
	tickPadding: 6,
	tickStroke: "#000000",
	tickStrokeOpacity: 1,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 12,
	yZoomWidth: 40,
	// zoomEnabled: true,
	getMouseDelta: function getMouseDelta(startXY, mouseXY) {
		return startXY[1] - mouseXY[1];
	}
};

YAxis.contextTypes = {
	height: _react.PropTypes.number.isRequired,
	width: _react.PropTypes.number.isRequired,
	yAxisZoom: _react.PropTypes.func.isRequired,
	chartId: _react.PropTypes.number.isRequired,
	chartConfig: _react.PropTypes.object.isRequired
};

function helper(props, context) {
	var axisAt = props.axisAt;
	var yZoomWidth = props.yZoomWidth;
	var orient = props.orient;
	var width = context.width;
	var height = context.height;


	var axisLocation,
	    y = 0,
	    w = yZoomWidth,
	    h = height;

	if (axisAt === "left") {
		axisLocation = 0;
	} else if (axisAt === "right") {
		axisLocation = width;
	} else if (axisAt === "middle") {
		axisLocation = width / 2;
	} else {
		axisLocation = axisAt;
	}

	var x = orient === "left" ? -yZoomWidth : 0;

	return {
		transform: [axisLocation, 0],
		range: [0, height],
		getScale: function getScale(moreProps) {
			return moreProps.chartConfig.yScale;
		},
		bg: { x: x, y: y, h: h, w: w },
		zoomEnabled: context.chartConfig.yPan
	};
}
exports.default = YAxis;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericComponent = __webpack_require__(29);

var _GenericComponent2 = _interopRequireDefault(_GenericComponent);

var _PureComponent2 = __webpack_require__(62);

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CrossHairCursor = function (_PureComponent) {
	_inherits(CrossHairCursor, _PureComponent);

	function CrossHairCursor(props) {
		_classCallCheck(this, CrossHairCursor);

		var _this = _possibleConstructorReturn(this, (CrossHairCursor.__proto__ || Object.getPrototypeOf(CrossHairCursor)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(CrossHairCursor, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var lines = helper(this.props, this.context, moreProps);

			if ((0, _utils.isDefined)(lines)) {
				var _context = this.context;
				var margin = _context.margin;
				var ratio = _context.ratio;

				var originX = 0.5 * ratio + margin.left;
				var originY = 0.5 * ratio + margin.top;

				ctx.save();
				ctx.setTransform(1, 0, 0, 1, 0, 0);
				ctx.scale(ratio, ratio);

				ctx.translate(originX, originY);

				lines.forEach(function (line) {

					ctx.strokeStyle = (0, _utils.hexToRGBA)(line.stroke, line.opacity);
					var dashArray = line.strokeDasharray.split(",").map(function (d) {
						return +d;
					});
					ctx.setLineDash(dashArray);
					ctx.beginPath();
					ctx.moveTo(line.x1, line.y1);
					ctx.lineTo(line.x2, line.y2);
					ctx.stroke();
				});

				ctx.restore();
			}
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var className = this.props.className;

			var lines = helper(this.props, this.context, moreProps);

			if ((0, _utils.isNotDefined)(lines)) return null;

			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-crosshair " + className },
				lines.map(function (each, idx) {
					return _react2.default.createElement("line", _extends({ key: idx }, each));
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericComponent2.default, {
				svgDraw: this.renderSVG,
				clip: false,
				canvasDraw: this.drawOnCanvas,
				drawOnMouseMove: true,
				drawOnPan: true,
				drawOnMouseExitOfCanvas: true
			});
		}
	}]);

	return CrossHairCursor;
}(_PureComponent3.default);

CrossHairCursor.propTypes = {
	className: _react.PropTypes.string
};

CrossHairCursor.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired,
	height: _react.PropTypes.number.isRequired,
	width: _react.PropTypes.number.isRequired,
	margin: _react.PropTypes.object.isRequired,
	ratio: _react.PropTypes.number.isRequired,

	// xScale for getting update event upon pan end
	xScale: _react.PropTypes.func.isRequired
};

CrossHairCursor.defaultProps = {
	stroke: "#000000",
	opacity: 0.3,
	strokeDasharray: "4, 2",
	snapX: true
};

function helper(props, context, _ref) {
	var mouseXY = _ref.mouseXY;
	var xScale = _ref.xScale;
	var currentItem = _ref.currentItem;
	var show = _ref.show;
	var height = context.height;
	var width = context.width;
	var xAccessor = context.xAccessor;
	var snapX = props.snapX;
	var stroke = props.stroke;
	var opacity = props.opacity;
	var strokeDasharray = props.strokeDasharray;


	if (!show || (0, _utils.isNotDefined)(currentItem)) return null;

	var line1 = {
		x1: 0,
		x2: width,
		y1: mouseXY[1],
		y2: mouseXY[1],
		stroke: stroke, strokeDasharray: strokeDasharray, opacity: opacity
	};
	var x = snapX ? Math.round(xScale(xAccessor(currentItem))) : mouseXY[0];

	var line2 = {
		x1: x,
		x2: x,
		y1: 0,
		y2: height,
		stroke: stroke, strokeDasharray: strokeDasharray, opacity: opacity
	};
	return [line1, line2];
}

exports.default = CrossHairCursor;

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentCoordinate = function (_Component) {
	_inherits(CurrentCoordinate, _Component);

	function CurrentCoordinate(props) {
		_classCallCheck(this, CurrentCoordinate);

		var _this = _possibleConstructorReturn(this, (CurrentCoordinate.__proto__ || Object.getPrototypeOf(CurrentCoordinate)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(CurrentCoordinate, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var circle = helper(this.props, this.context, moreProps);
			if (!circle) return null;

			ctx.fillStyle = circle.fill;
			ctx.beginPath();
			ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
			ctx.fill();
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var className = this.props.className;


			var circle = helper(this.props, this.context, moreProps);
			if (!circle) return null;

			return _react2.default.createElement("circle", { className: className, cx: circle.x, cy: circle.y, r: circle.r, fill: circle.fill });
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnMouseMove: true,
				drawOnPan: true,
				drawOnMouseExitOfCanvas: true
			});
		}
	}]);

	return CurrentCoordinate;
}(_react.Component);

CurrentCoordinate.propTypes = {
	yAccessor: _react.PropTypes.func,
	r: _react.PropTypes.number.isRequired,
	className: _react.PropTypes.string
};

CurrentCoordinate.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

CurrentCoordinate.defaultProps = {
	r: 3,
	className: "react-stockcharts-current-coordinate"
};

function helper(props, context, moreProps) {
	var fill = props.fill;
	var yAccessor = props.yAccessor;
	var r = props.r;
	var xAccessor = context.xAccessor;
	var show = moreProps.show;
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var currentItem = moreProps.currentItem;

	// console.log(show);

	if (!show || (0, _utils.isNotDefined)(currentItem)) return null;

	var xValue = xAccessor(currentItem);
	var yValue = yAccessor(currentItem);

	if ((0, _utils.isNotDefined)(yValue)) return null;

	// console.log(chartConfig);
	var x = Math.round(xScale(xValue));
	var y = Math.round(yScale(yValue));

	return { x: x, y: y, r: r, fill: fill };
}

exports.default = CurrentCoordinate;

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _EdgeCoordinateV = __webpack_require__(59);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EdgeIndicator = function (_Component) {
	_inherits(EdgeIndicator, _Component);

	function EdgeIndicator(props) {
		_classCallCheck(this, EdgeIndicator);

		var _this = _possibleConstructorReturn(this, (EdgeIndicator.__proto__ || Object.getPrototypeOf(EdgeIndicator)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(EdgeIndicator, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var edge = helper(this.props, this.context, moreProps);
			var props = _extends({}, this.props, edge);
			(0, _EdgeCoordinateV.drawOnCanvas)(ctx, props);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var edge = helper(this.props, this.context, moreProps);
			var props = _extends({}, this.props, edge);
			return (0, _EdgeCoordinateV.renderSVG)(props);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				edgeClip: true,
				clip: false,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}]);

	return EdgeIndicator;
}(_react.Component);

EdgeIndicator.propTypes = {
	yAccessor: _react.PropTypes.func,

	type: _react.PropTypes.oneOf(["horizontal"]).isRequired,
	className: _react.PropTypes.string,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
	textFill: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
	itemType: _react.PropTypes.oneOf(["first", "last"]).isRequired,
	orient: _react.PropTypes.oneOf(["left", "right"]),
	edgeAt: _react.PropTypes.oneOf(["left", "right"]),
	displayFormat: _react.PropTypes.func.isRequired,
	rectHeight: _react.PropTypes.number.isRequired,
	rectWidth: _react.PropTypes.number.isRequired,
	arrowWidth: _react.PropTypes.number.isRequired
};
EdgeIndicator.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

EdgeIndicator.defaultProps = {
	className: "react-stockcharts-edgeindicator",

	type: "horizontal",
	orient: "left",
	edgeAt: "left",
	textFill: "#FFFFFF",
	displayFormat: (0, _d3Format.format)(".2f"),
	yAxisPad: 0,
	rectHeight: 20,
	rectWidth: 50,
	arrowWidth: 10,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 13,
	dx: 0,
	hideLine: false,
	fill: "#8a8a8a",
	opacity: 1,
	lineStroke: "#000000",
	lineOpacity: 0.3
};

function helper(props, context, moreProps) {
	var edgeType = props.type;
	var displayFormat = props.displayFormat;
	var itemType = props.itemType;
	var edgeAt = props.edgeAt;
	var yAxisPad = props.yAxisPad;
	var orient = props.orient;
	var yAccessor = props.yAccessor;
	var fill = props.fill;
	var textFill = props.textFill;
	var rectHeight = props.rectHeight;
	var rectWidth = props.rectWidth;
	var arrowWidth = props.arrowWidth;
	var fontFamily = props.fontFamily;
	var fontSize = props.fontSize;
	var xAccessor = context.xAccessor;
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;

	// var currentItem = ChartDataUtil.getCurrentItemForChartNew(currentItems, forChart);

	var edge = null;
	// console.log(chartData.config.compareSeries.length);

	var item = itemType === "first" ? (0, _utils.first)(plotData, yAccessor) : (0, _utils.last)(plotData, yAccessor);

	if ((0, _utils.isDefined)(item)) {
		var yValue = yAccessor(item),
		    xValue = xAccessor(item);

		var x1 = Math.round(xScale(xValue)),
		    y1 = Math.round(yScale(yValue));

		var _xScale$range = xScale.range();

		var _xScale$range2 = _slicedToArray(_xScale$range, 2);

		var left = _xScale$range2[0];
		var right = _xScale$range2[1];

		var edgeX = edgeAt === "left" ? left - yAxisPad : right + yAxisPad;

		edge = {
			// ...props,
			coordinate: displayFormat(yValue),
			show: true,
			type: edgeType,
			orient: orient,
			edgeAt: edgeX,
			fill: (0, _utils.functor)(fill)(item),
			fontFamily: fontFamily, fontSize: fontSize,
			textFill: (0, _utils.functor)(textFill)(item),
			rectHeight: rectHeight, rectWidth: rectWidth, arrowWidth: arrowWidth,
			x1: x1,
			y1: y1,
			x2: edgeX,
			y2: y1
		};
	}
	return edge;
}

exports.default = EdgeIndicator;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EdgeCoordinateV = __webpack_require__(59);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouseCoordinateX = function (_Component) {
	_inherits(MouseCoordinateX, _Component);

	function MouseCoordinateX(props) {
		_classCallCheck(this, MouseCoordinateX);

		var _this = _possibleConstructorReturn(this, (MouseCoordinateX.__proto__ || Object.getPrototypeOf(MouseCoordinateX)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(MouseCoordinateX, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var props = helper(this.props, this.context, moreProps);
			if ((0, _utils.isNotDefined)(props)) return null;

			(0, _EdgeCoordinateV.drawOnCanvas)(ctx, props);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var props = helper(this.props, this.context, moreProps);
			if ((0, _utils.isNotDefined)(props)) return null;

			return (0, _EdgeCoordinateV.renderSVG)(props);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				svgDraw: this.renderSVG,
				clip: false,
				canvasDraw: this.drawOnCanvas,
				drawOnMouseMove: true,
				drawOnPan: true,
				drawOnMouseExitOfCanvas: true
			});
		}
	}]);

	return MouseCoordinateX;
}(_react.Component);

MouseCoordinateX.propTypes = {
	displayFormat: _react.PropTypes.func.isRequired
};

MouseCoordinateX.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired,
	displayXAccessor: _react.PropTypes.func.isRequired,
	height: _react.PropTypes.number.isRequired
};

MouseCoordinateX.defaultProps = {
	yAxisPad: 0,
	rectWidth: 80,
	rectHeight: 20,
	orient: "bottom",
	at: "bottom",

	fill: "#525252",
	opacity: 1,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 13,
	textFill: "#FFFFFF",
	snapX: true
};

function helper(props, context, moreProps) {
	var height = context.height;
	var xAccessor = context.xAccessor;
	var displayXAccessor = context.displayXAccessor;
	var show = moreProps.show;
	var currentItem = moreProps.currentItem;
	var xScale = moreProps.xScale;
	var mouseXY = moreProps.mouseXY;
	// var { chartConfig: { yScale, origin } } = moreProps;

	if ((0, _utils.isNotDefined)(currentItem)) return null;

	var snapX = props.snapX;
	var orient = props.orient;
	var at = props.at;
	var rectWidth = props.rectWidth;
	var rectHeight = props.rectHeight;
	var displayFormat = props.displayFormat;
	var fill = props.fill;
	var opacity = props.opacity;
	var fontFamily = props.fontFamily;
	var fontSize = props.fontSize;
	var textFill = props.textFill;


	var x = snapX ? xScale(xAccessor(currentItem)) : mouseXY[0];
	var edgeAt = at === "bottom" ? height : 0;

	var coordinate = snapX ? displayFormat(displayXAccessor(currentItem)) : displayFormat(xScale.invert(x));
	var type = "vertical";
	var y1 = 0,
	    y2 = height;
	var hideLine = true;

	var coordinateProps = {
		coordinate: coordinate,
		show: show,
		type: type,
		orient: orient,
		edgeAt: edgeAt,
		hideLine: hideLine,
		fill: fill, opacity: opacity, fontFamily: fontFamily, fontSize: fontSize, textFill: textFill,
		rectWidth: rectWidth,
		rectHeight: rectHeight,
		arrowWidth: 0,
		x1: x,
		x2: x,
		y1: y1,
		y2: y2
	};
	return coordinateProps;
}

exports.default = MouseCoordinateX;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EdgeCoordinateV = __webpack_require__(59);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouseCoordinateY = function (_Component) {
	_inherits(MouseCoordinateY, _Component);

	function MouseCoordinateY(props) {
		_classCallCheck(this, MouseCoordinateY);

		var _this = _possibleConstructorReturn(this, (MouseCoordinateY.__proto__ || Object.getPrototypeOf(MouseCoordinateY)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(MouseCoordinateY, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var props = helper(this.props, this.context, moreProps);
			if ((0, _utils.isNotDefined)(props)) return null;

			(0, _EdgeCoordinateV.drawOnCanvas)(ctx, props);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var props = helper(this.props, this.context, moreProps);
			if ((0, _utils.isNotDefined)(props)) return null;

			return (0, _EdgeCoordinateV.renderSVG)(props);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				clip: false,
				drawOnMouseMove: true,
				drawOnPan: true,
				drawOnMouseExitOfCanvas: true
			});
		}
	}]);

	return MouseCoordinateY;
}(_react.Component);

MouseCoordinateY.propTypes = {
	displayFormat: _react.PropTypes.func.isRequired
};

MouseCoordinateY.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	// height: PropTypes.number.isRequired,
	// margin: PropTypes.object.isRequired,
	chartId: _react.PropTypes.number.isRequired
};

MouseCoordinateY.defaultProps = {
	yAxisPad: 0,
	rectWidth: 50,
	rectHeight: 20,
	orient: "left",
	at: "left",
	dx: 0,
	arrowWidth: 10,
	fill: "#525252",
	opacity: 1,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 13,
	textFill: "#FFFFFF"
};

function helper(props, context, moreProps) {
	var chartId = context.chartId;
	var width = context.width;
	var show = moreProps.show;
	var currentCharts = moreProps.currentCharts;
	var _moreProps$chartConfi = moreProps.chartConfig;
	var yScale = _moreProps$chartConfi.yScale;
	var origin = _moreProps$chartConfi.origin;
	var mouseXY = moreProps.mouseXY;


	if ((0, _utils.isNotDefined)(mouseXY)) return null;

	if (currentCharts.indexOf(chartId) < 0) return null;

	var orient = props.orient;
	var at = props.at;
	var rectWidth = props.rectWidth;
	var rectHeight = props.rectHeight;
	var displayFormat = props.displayFormat;
	var dx = props.dx;
	var fill = props.fill;
	var opacity = props.opacity;
	var fontFamily = props.fontFamily;
	var fontSize = props.fontSize;
	var textFill = props.textFill;
	var arrowWidth = props.arrowWidth;


	var x1 = 0,
	    x2 = width;
	var edgeAt = at === "right" ? width : 0;

	var type = "horizontal";
	var y = mouseXY[1] - origin[1];
	var coordinate = displayFormat(yScale.invert(y));
	var hideLine = true;

	var coordinateProps = {
		coordinate: coordinate,
		show: show,
		type: type,
		orient: orient,
		edgeAt: edgeAt,
		hideLine: hideLine,
		fill: fill, opacity: opacity, fontFamily: fontFamily, fontSize: fontSize, textFill: textFill,
		rectWidth: rectWidth,
		rectHeight: rectHeight,
		arrowWidth: arrowWidth,
		dx: dx,
		x1: x1,
		x2: x2,
		y1: y,
		y2: y
	};
	return coordinateProps;
}

exports.default = MouseCoordinateY;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _saveSvgAsPng = __webpack_require__(527);

var _saveSvgAsPng2 = _interopRequireDefault(_saveSvgAsPng);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveChartAsImage = {
	save: function save(doc, container, background, cb) {
		_saveSvgAsPng2.default.svgAsDataUri(container.getElementsByTagName("svg")[0], {}, function (uri) {
			var image = new Image();
			image.onload = function () {
				var canvas = doc.createElement("canvas");
				canvas.width = image.width;
				canvas.height = image.height;
				var context = canvas.getContext("2d");

				if ((0, _utils.isDefined)(background)) {
					context.fillStyle = background;
					context.fillRect(0, 0, canvas.width, canvas.height);
				}
				var canvasList = container.getElementsByTagName("canvas");
				for (var i = 0; i < canvasList.length; i++) {
					var each = canvasList[i];
					if ((0, _utils.isDefined)(each)) {
						var parent = each.parentNode.parentNode.getBoundingClientRect();
						var rect = each.getBoundingClientRect();
						context.drawImage(each, rect.left - parent.left, rect.top - parent.top);
					}
				}

				context.drawImage(image, 0, 0);
				cb(canvas.toDataURL("image/png"));
			};
			image.src = uri;
		});
	},
	saveWithWhiteBG: function saveWithWhiteBG(doc, container, cb) {
		return this.saveWithBG(doc, container, "white", cb);
	},
	saveWithDarkBG: function saveWithDarkBG(doc, container, cb) {
		return this.saveWithBG(doc, container, "#303030", cb);
	},
	saveWithBG: function saveWithBG(doc, container, background, cb) {
		return this.save(doc, container, background, cb);
	},
	saveChartAsImage: function saveChartAsImage(container) {
		this.saveWithWhiteBG(document, container, function (src) {
			var a = document.createElement("a");
			a.setAttribute("href", src);
			a.setAttribute("download", "Chart.png");

			document.body.appendChild(a);
			a.addEventListener("click", function () /* e */{
				a.parentNode.removeChild(a);
			});

			a.click();
		});
	}
};

exports.default = SaveChartAsImage;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypeChooser = function (_Component) {
	_inherits(TypeChooser, _Component);

	function TypeChooser(props) {
		_classCallCheck(this, TypeChooser);

		var _this = _possibleConstructorReturn(this, (TypeChooser.__proto__ || Object.getPrototypeOf(TypeChooser)).call(this, props));

		_this.state = {
			type: _this.props.type
		};
		_this.handleTypeChange = _this.handleTypeChange.bind(_this);
		return _this;
	}

	_createClass(TypeChooser, [{
		key: "handleTypeChange",
		value: function handleTypeChange(e) {
			// console.log(e.target.value);
			this.setState({
				type: e.target.value
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"label",
					null,
					"Type: "
				),
				_react2.default.createElement(
					"select",
					{ name: "type", id: "type", onChange: this.handleTypeChange, value: this.state.type },
					_react2.default.createElement(
						"option",
						{ value: "svg" },
						"svg"
					),
					_react2.default.createElement(
						"option",
						{ value: "hybrid" },
						"canvas + svg"
					)
				),
				this.props.children(this.state.type)
			);
		}
	}]);

	return TypeChooser;
}(_react.Component);

TypeChooser.propTypes = {
	type: _react.PropTypes.oneOf(["svg", "hybrid"]),
	children: _react.PropTypes.func.isRequired
};

TypeChooser.defaultProps = {
	type: "hybrid"
};

exports.default = TypeChooser;

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = fitWidth;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(44);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(Series) {
	var name = Series.displayName || Series.name || "Series";
	return name;
}

function fitWidth(WrappedComponent) {
	var withRef = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	var minWidth = arguments.length <= 2 || arguments[2] === undefined ? 100 : arguments[2];

	var ResponsiveComponent = function (_Component) {
		_inherits(ResponsiveComponent, _Component);

		function ResponsiveComponent(props) {
			_classCallCheck(this, ResponsiveComponent);

			var _this = _possibleConstructorReturn(this, (ResponsiveComponent.__proto__ || Object.getPrototypeOf(ResponsiveComponent)).call(this, props));

			_this.handleWindowResize = _this.handleWindowResize.bind(_this);
			_this.getWrappedInstance = _this.getWrappedInstance.bind(_this);
			_this.saveNode = _this.saveNode.bind(_this);
			_this.setTestCanvas = _this.setTestCanvas.bind(_this);
			_this.state = {};
			return _this;
		}

		_createClass(ResponsiveComponent, [{
			key: "saveNode",
			value: function saveNode(node) {
				this.node = node;
			}
		}, {
			key: "setTestCanvas",
			value: function setTestCanvas(node) {
				this.testCanvas = node;
			}
		}, {
			key: "getRatio",
			value: function getRatio() {
				if ((0, _utils.isDefined)(this.testCanvas)) {
					var context = this.testCanvas.getContext("2d");

					var devicePixelRatio = window.devicePixelRatio || 1;
					var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;

					var ratio = devicePixelRatio / backingStoreRatio;
					// console.log("ratio = ", ratio);
					return ratio;
				}
				return 1;
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("resize", this.handleWindowResize);
				var el = this.node;
				var w = el.parentNode.clientWidth;

				/* eslint-disable react/no-did-mount-set-state */
				this.setState({
					width: Math.max(w, minWidth),
					ratio: this.getRatio()
				});
				/* eslint-enable react/no-did-mount-set-state */
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				window.removeEventListener("resize", this.handleWindowResize);
			}
		}, {
			key: "handleWindowResize",
			value: function handleWindowResize() {
				var el = _reactDom2.default.findDOMNode(this.node); // eslint-disable-line react/no-find-dom-node
				var w = el.parentNode.clientWidth;

				if (w > minWidth) {
					this.setState({
						width: w
					});
				}
			}
		}, {
			key: "getWrappedInstance",
			value: function getWrappedInstance() {
				return this.node;
			}
		}, {
			key: "render",
			value: function render() {
				var ref = withRef ? { ref: this.saveNode } : {};

				if (this.state.width) {
					return _react2.default.createElement(WrappedComponent, _extends({ width: this.state.width, ratio: this.state.ratio }, this.props, ref));
				} else {
					return _react2.default.createElement(
						"div",
						ref,
						_react2.default.createElement("canvas", { ref: this.setTestCanvas })
					);
				}
			}
		}]);

		return ResponsiveComponent;
	}(_react.Component);

	ResponsiveComponent.displayName = "fitWidth(" + getDisplayName(WrappedComponent) + ")";

	return ResponsiveComponent;
}

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/bollingerBands.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var windowSize = _defaultOptionsForComputation.BollingerBand.windowSize;
	var multiplier = _defaultOptionsForComputation.BollingerBand.multiplier;
	var movingAverageType = _defaultOptionsForComputation.BollingerBand.movingAverageType;
	var sourcePath = _defaultOptionsForComputation.BollingerBand.sourcePath;


	function calculator(data) {
		var source = (0, _utils.path)(sourcePath);
		var meanAlgorithm = movingAverageType === "ema" ? (0, _ema2.default)().windowSize(windowSize).sourcePath(sourcePath) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
			return (0, _d3Array.mean)(values);
		}).sourcePath(sourcePath);

		var bollingerBandAlgorithm = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
			var avg = (0, _utils.last)(values).mean;
			var stdDev = (0, _d3Array.deviation)(values, function (each) {
				return source(each.datum);
			});
			return {
				top: avg + multiplier * stdDev,
				middle: avg,
				bottom: avg - multiplier * stdDev
			};
		});

		var zip = (0, _utils.zipper)().combine(function (datum, mean) {
			return { datum: datum, mean: mean };
		});

		var tuples = zip(data, meanAlgorithm(data));
		return bollingerBandAlgorithm(tuples);
	}
	calculator.undefinedLength = function () {
		return windowSize;
	};
	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};

	calculator.multiplier = function (x) {
		if (!arguments.length) {
			return multiplier;
		}
		multiplier = x;
		return calculator;
	};

	calculator.movingAverageType = function (x) {
		if (!arguments.length) {
			return movingAverageType;
		}
		movingAverageType = x;
		return calculator;
	};

	calculator.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return calculator;
	};

	return calculator;
};

var _d3Array = __webpack_require__(9);

var _ema = __webpack_require__(46);

var _ema2 = _interopRequireDefault(_ema);

var _utils = __webpack_require__(2);

var _defaultOptionsForComputation = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function () {

	var sourcePath = "close";
	function calculator(data) {

		var algo = (0, _utils.slidingWindow)().windowSize(2).sourcePath(sourcePath).accumulator(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2);

			var prev = _ref2[0];
			var curr = _ref2[1];

			var absoluteChange = curr - prev;
			var percentChange = absoluteChange * 100 / prev;
			return { absoluteChange: absoluteChange, percentChange: percentChange };
		});

		var newData = algo(data);

		return newData;
	}
	calculator.undefinedLength = function () {
		return 1;
	};

	calculator.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return calculator;
	};

	return calculator;
};

var _utils = __webpack_require__(2);

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var base = function base(d) {
		return d.close;
	};
	var mainKeys = [];
	var compareKeys = [];

	function calculator(data) {
		var f = (0, _utils.first)(data);
		var b = base(f);
		var compareData = data.map(function (d) {
			var result = {};

			mainKeys.forEach(function (key) {
				result[key] = (d[key] - b) / b;
			});

			compareKeys.forEach(function (key) {
				result[key] = (d[key] - f[key]) / f[key];
			});
			return result;
		});
		// console.log(compareData[20]);
		return compareData;
	}
	calculator.base = function (x) {
		if (!arguments.length) {
			return base;
		}
		base = x;
		return calculator;
	};
	calculator.mainKeys = function (x) {
		if (!arguments.length) {
			return mainKeys;
		}
		mainKeys = x;
		return calculator;
	};
	calculator.compareKeys = function (x) {
		if (!arguments.length) {
			return compareKeys;
		}
		compareKeys = x;
		return calculator;
	};
	return calculator;
};

var _utils = __webpack_require__(2);

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/elderRay.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var windowSize = _defaultOptionsForComputation.ElderRay.windowSize;
	var sourcePath = _defaultOptionsForComputation.ElderRay.sourcePath;
	var movingAverageType = _defaultOptionsForComputation.ElderRay.movingAverageType;

	var ohlc = function ohlc(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};

	function calculator(data) {

		var meanAlgorithm = movingAverageType === "ema" ? (0, _ema2.default)().windowSize(windowSize).sourcePath(sourcePath) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
			return (0, _d3Array.mean)(values);
		}).sourcePath(sourcePath);

		var zip = (0, _utils.zipper)().combine(function (datum, mean) {
			var bullPower = (0, _utils.isDefined)(mean) ? ohlc(datum).high - mean : undefined;
			var bearPower = (0, _utils.isDefined)(mean) ? ohlc(datum).low - mean : undefined;
			return { bullPower: bullPower, bearPower: bearPower };
		});

		var newData = zip(data, meanAlgorithm(data));
		return newData;
	}
	calculator.undefinedLength = function () {
		return windowSize;
	};
	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};
	calculator.ohlc = function (x) {
		if (!arguments.length) {
			return ohlc;
		}
		ohlc = x;
		return calculator;
	};

	calculator.movingAverageType = function (x) {
		if (!arguments.length) {
			return movingAverageType;
		}
		movingAverageType = x;
		return calculator;
	};

	calculator.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return calculator;
	};

	return calculator;
};

var _d3Array = __webpack_require__(9);

var _ema = __webpack_require__(46);

var _ema2 = _interopRequireDefault(_ema);

var _defaultOptionsForComputation = __webpack_require__(15);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function () {
	var sourcePath = _defaultOptionsForComputation.ForceIndex.sourcePath;

	var volumePath = "volume";

	function calculator(data) {

		var source = (0, _utils.path)(sourcePath);
		var volume = (0, _utils.path)(volumePath);

		var forceIndexCalulator = (0, _utils.slidingWindow)().windowSize(2).accumulator(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2);

			var prev = _ref2[0];
			var curr = _ref2[1];
			return (source(curr) - source(prev)) * volume(curr);
		});

		var forceIndex = forceIndexCalulator(data);

		return forceIndex;
	}
	calculator.undefinedLength = function () {
		return 2;
	};
	calculator.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return calculator;
	};

	calculator.volumePath = function (x) {
		if (!arguments.length) {
			return volumePath;
		}
		volumePath = x;
		return calculator;
	};

	return calculator;
};

var _utils = __webpack_require__(2);

var _defaultOptionsForComputation = __webpack_require__(15);

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function () {

	var source = _utils.identity;

	function calculator(data) {
		var algorithm = (0, _utils.mappedSlidingWindow)().windowSize(2).undefinedValue(function (_ref) {
			var open = _ref.open;
			var high = _ref.high;
			var low = _ref.low;
			var close = _ref.close;

			close = (open + high + low + close) / 4;
			return { open: open, high: high, low: low, close: close };
		}).accumulator(function (_ref2) {
			var _ref3 = _slicedToArray(_ref2, 2);

			var prev = _ref3[0];
			var now = _ref3[1];

			// console.log(prev, now);
			var close = (now.open + now.high + now.low + now.close) / 4;
			var open = (prev.open + prev.close) / 2;
			var high = Math.max(open, now.high, close);
			var low = Math.min(open, now.low, close);
			return { open: open, high: high, low: low, close: close };
		});

		return algorithm(data);
	}
	calculator.source = function (x) {
		if (!arguments.length) {
			return source;
		}
		source = x;
		return calculator;
	};

	return calculator;
};

var _utils = __webpack_require__(2);

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var reversalType = _defaultOptionsForComputation.Kagi.reversalType;
	var windowSize = _defaultOptionsForComputation.Kagi.windowSize;
	var reversal = _defaultOptionsForComputation.Kagi.reversal;
	var sourcePath = _defaultOptionsForComputation.Kagi.sourcePath;

	var dateAccessor = function dateAccessor(d) {
		return d.date;
	};
	var dateMutator = function dateMutator(d, date) {
		d.date = date;
	};

	function calculator(data) {
		var source = (0, _utils.path)(sourcePath);
		var reversalThreshold;

		if (reversalType === "ATR") {
			// calculateATR(rawData, period);
			var atrAlgorithm = (0, _atr2.default)().windowSize(windowSize);

			var atrCalculator = (0, _utils.merge)().algorithm(atrAlgorithm).merge(function (d, c) {
				d["atr" + windowSize] = c;
			});

			atrCalculator(data);
			reversalThreshold = function reversalThreshold(d) {
				return d["atr" + windowSize];
			};
		} else {
			reversalThreshold = (0, _utils.functor)(reversal);
		}

		var kagiData = [];

		var prevPeak, prevTrough, direction;
		var line = {};

		data.forEach(function (d) {
			if ((0, _utils.isNotDefined)(line.from)) {
				dateMutator(line, dateAccessor(d));
				line.from = dateAccessor(d);

				if (!line.open) line.open = d.open;
				line.high = d.high;
				line.low = d.low;
				if (!line.close) line.close = source(d);
				line.startOfYear = d.startOfYear;
				line.startOfQuarter = d.startOfQuarter;
				line.startOfMonth = d.startOfMonth;
				line.startOfWeek = d.startOfWeek;
			}

			if (!line.startOfYear) {
				line.startOfYear = d.startOfYear;
				if (line.startOfYear) {
					line.date = d.date;
					// line.displayDate = d.displayDate;
				}
			}

			if (!line.startOfQuarter) {
				line.startOfQuarter = d.startOfQuarter;
				if (line.startOfQuarter && !line.startOfYear) {
					line.date = d.date;
					// line.displayDate = d.displayDate;
				}
			}

			if (!line.startOfMonth) {
				line.startOfMonth = d.startOfMonth;
				if (line.startOfMonth && !line.startOfQuarter) {
					line.date = d.date;
					// line.displayDate = d.displayDate;
				}
			}
			if (!line.startOfWeek) {
				line.startOfWeek = d.startOfWeek;
				if (line.startOfWeek && !line.startOfMonth) {
					line.date = d.date;
					// line.displayDate = d.displayDate;
				}
			}
			line.volume = (line.volume || 0) + d.volume;
			line.high = Math.max(line.high, d.high);
			line.low = Math.min(line.low, d.low);
			line.to = dateAccessor(d);

			var priceMovement = source(d) - line.close;

			// console.log(source(d), priceMovement)
			if (line.close > line.open /* going up */ && priceMovement > 0 /* and moving in same direction */ || line.close < line.open /* going down */ && priceMovement < 0 /* and moving in same direction */) {
				line.close = source(d);
				if (prevTrough && line.close < prevTrough) {
					// going below the prevTrough, so change from yang to yin
					// A yin line forms when a Kagi line breaks below the prior trough.
					line.changePoint = prevTrough;
					if (line.startAs !== "yin") {
						line.changeTo = "yin";
						// line.startAs = "yang";
					}
				}
				if (prevPeak && line.close > prevPeak) {
					// going above the prevPeak, so change from yin to yang
					// A yang line forms when a Kagi line breaks above the prior peak
					line.changePoint = prevPeak;
					if (line.startAs !== "yang") {
						line.changeTo = "yang";
						// line.startAs = "yin";
					}
				}
			} else if (line.close > line.open /* going up */
			&& priceMovement < 0 /* and moving in other direction */
			&& Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */ || line.close < line.open /* going down */
			&& priceMovement > 0 /* and moving in other direction */
			&& Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */) {
				// reverse direction
				var nextLineOpen = line.close;

				direction = (line.close - line.open) / Math.abs(line.close - line.open);

				var nextChangePoint, nextChangeTo;
				if (direction < 0 /* if direction so far has been -ve*/) {
						// compare with line.close becomes prevTrough
						if ((0, _utils.isNotDefined)(prevPeak)) prevPeak = line.open;
						prevTrough = line.close;
						if (source(d) > prevPeak) {
							nextChangePoint = prevPeak;
							nextChangeTo = "yang";
						}
					} else {
					if ((0, _utils.isNotDefined)(prevTrough)) prevTrough = line.open;
					prevPeak = line.close;
					if (source(d) < prevTrough) {
						nextChangePoint = prevTrough;
						nextChangeTo = "yin";
					}
				}
				if ((0, _utils.isNotDefined)(line.startAs)) {
					line.startAs = direction > 0 ? "yang" : "yin";
				}

				var startAs = line.changeTo || line.startAs;
				line.added = true;
				kagiData.push(line);
				direction = -1 * direction; // direction is reversed

				line = _extends({}, line);
				line.open = nextLineOpen;
				line.close = source(d);
				line.startAs = startAs;
				line.changePoint = nextChangePoint;
				line.changeTo = nextChangeTo;
				line.added = false;
				line.from = undefined;
				line.volume = 0;
			} else {
				// console.log("MOVING IN REV DIR BUT..", line.open, line.close, source(d));
			}
			line.current = source(d);
			var dir = line.close - line.open;
			dir = dir / Math.abs(dir);
			line.reverseAt = dir > 0 ? line.close - reversalThreshold(d) : line.open - reversalThreshold(d);
		});
		if (!line.added) kagiData.push(line);

		return kagiData;
	}
	calculator.reversalType = function (x) {
		if (!arguments.length) return reversalType;
		reversalType = x;
		return calculator;
	};
	calculator.dateMutator = function (x) {
		if (!arguments.length) return dateMutator;
		dateMutator = x;
		return calculator;
	};
	calculator.dateAccessor = function (x) {
		if (!arguments.length) return dateAccessor;
		dateAccessor = x;
		return calculator;
	};
	return calculator;
};

var _utils = __webpack_require__(2);

var _atr = __webpack_require__(60);

var _atr2 = _interopRequireDefault(_atr);

var _defaultOptionsForComputation = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/macd.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var fast = _defaultOptionsForComputation.MACD.fast;
	var slow = _defaultOptionsForComputation.MACD.slow;
	var signal = _defaultOptionsForComputation.MACD.signal;
	var sourcePath = _defaultOptionsForComputation.MACD.sourcePath;


	function calculator(data) {

		var fastEMA = (0, _ema2.default)().windowSize(fast).sourcePath(sourcePath);
		var slowEMA = (0, _ema2.default)().windowSize(slow).sourcePath(sourcePath);
		var signalEMA = (0, _ema2.default)().windowSize(signal).sourcePath(undefined);

		var macdCalculator = (0, _utils.zipper)().combine(function (fastEMA, slowEMA) {
			return (0, _utils.isDefined)(fastEMA) && (0, _utils.isDefined)(slowEMA) ? fastEMA - slowEMA : undefined;
		});

		var macdArray = macdCalculator(fastEMA(data), slowEMA(data));

		var undefinedArray = new Array(slow);
		var signalArray = undefinedArray.concat(signalEMA(macdArray.slice(slow)));

		var zip = (0, _utils.zipper)().combine(function (macd, signal) {
			return {
				macd: macd,
				signal: signal,
				divergence: (0, _utils.isDefined)(macd) && (0, _utils.isDefined)(signal) ? macd - signal : undefined
			};
		});

		var macd = zip(macdArray, signalArray);

		return macd;
	}

	calculator.undefinedLength = function () {
		return slow + signal;
	};
	calculator.fast = function (x) {
		if (!arguments.length) {
			return fast;
		}
		fast = x;
		return calculator;
	};

	calculator.slow = function (x) {
		if (!arguments.length) {
			return slow;
		}
		slow = x;
		return calculator;
	};

	calculator.signal = function (x) {
		if (!arguments.length) {
			return signal;
		}
		signal = x;
		return calculator;
	};

	calculator.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return calculator;
	};

	/* calculator.options = function(options) {
 	if (options) {
 		var { fast, slow, signal, source } = options;
 		underlyingAlgorithm
 			.fast(fast)
 			.slow(slow)
 			.signal(signal)
 			.source()
 	}
 	return {
 		}
 }; */

	return calculator;
};

var _ema = __webpack_require__(46);

var _ema2 = _interopRequireDefault(_ema);

var _utils = __webpack_require__(2);

var _defaultOptionsForComputation = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var reversal = _defaultOptionsForComputation.PointAndFigure.reversal;
	var boxSize = _defaultOptionsForComputation.PointAndFigure.boxSize;
	var sourcePath = _defaultOptionsForComputation.PointAndFigure.sourcePath;

	var dateAccessor = function dateAccessor(d) {
		return d.date;
	};
	var dateMutator = function dateMutator(d, date) {
		d.date = date;
	};

	function calculator(rawData) {
		var source = sourcePath === "high/low" ? function (d) {
			return { high: d.high, low: d.low };
		} : function (d) {
			return { high: d.close, low: d.close };
		};

		var pricingMethod = source;
		var columnData = [];

		var column = {
			boxes: [],
			open: rawData[0].open
		},
		    box = createBox(rawData[0], dateAccessor, dateMutator);

		columnData.push(column);

		rawData.forEach(function (d) {
			column.volume = (column.volume || 0) + d.volume;

			if (!box.startOfYear) {
				box.startOfYear = d.startOfYear;
				if (box.startOfYear) {
					dateMutator(box, dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}

			if (!box.startOfYear && !box.startOfQuarter) {
				box.startOfQuarter = d.startOfQuarter;
				if (box.startOfQuarter && !box.startOfYear) {
					dateMutator(box, dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}

			if (!box.startOfQuarter && !box.startOfMonth) {
				box.startOfMonth = d.startOfMonth;
				if (box.startOfMonth && !box.startOfQuarter) {
					dateMutator(box, dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}
			if (!box.startOfMonth && !box.startOfWeek) {
				box.startOfWeek = d.startOfWeek;
				if (box.startOfWeek && !box.startOfMonth) {
					dateMutator(box, dateAccessor(d));
					// box.displayDate = d.displayDate;
				}
			}

			if (columnData.length === 1 && column.boxes.length === 0) {
				var upwardMovement = Math.max(pricingMethod(d).high - column.open, 0); // upward movement
				var downwardMovement = Math.abs(Math.min(column.open - pricingMethod(d).low, 0)); // downward movement
				column.direction = upwardMovement > downwardMovement ? 1 : -1;
				if (boxSize * reversal < upwardMovement || boxSize * reversal < downwardMovement) {
					// enough movement to trigger a reversal
					box.toDate = dateAccessor(d);
					box.open = column.open;
					var noOfBoxes = column.direction > 0 ? Math.floor(upwardMovement / boxSize) : Math.floor(downwardMovement / boxSize);
					for (var i = 0; i < noOfBoxes; i++) {
						box.close = box.open + column.direction * boxSize;
						var _prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(box, dateAccessor, dateMutator);
						// box = cloneMe(box);
						box.open = _prevBoxClose;
					}
					box.fromDate = dateAccessor(d);
					box.date = dateAccessor(d);
				}
			} else {
				// one or more boxes already formed in the current column
				var _upwardMovement = Math.max(pricingMethod(d).high - box.open, 0); // upward movement
				var _downwardMovement = Math.abs(Math.min(pricingMethod(d).low - box.open, 0)); // downward movement

				if (column.direction > 0 && _upwardMovement > boxSize || /* rising column AND box can be formed */
				column.direction < 0 && _downwardMovement > boxSize /* falling column AND box can be formed */) {
						// form another box
						box.close = box.open + column.direction * boxSize;
						box.toDate = dateAccessor(d);
						var _prevBoxClose2 = box.close;
						column.boxes.push(box);
						box = createBox(d, dateAccessor, dateMutator);
						box.open = _prevBoxClose2;
						box.fromDate = dateAccessor(d);
						dateMutator(box, dateAccessor(d));
					} else if (column.direction > 0 && _downwardMovement > boxSize * reversal || /* rising column and there is downward movement to trigger a reversal */
				column.direction < 0 && _upwardMovement > boxSize * reversal /* falling column and there is downward movement to trigger a reversal */) {
						// reversal

						box.open = box.open + -1 * column.direction * boxSize;
						box.toDate = dateAccessor(d);
						// box.displayDate = d.displayDate;
						dateMutator(box, dateAccessor(d));
						// box.startOfYear = d.startOfYear;
						// box.startOfQuarter = d.startOfQuarter;
						// box.startOfMonth = d.startOfMonth;
						// box.startOfWeek = d.startOfWeek;
						// console.table(column.boxes);
						// var idx = index + 1;
						column = {
							boxes: [],
							volume: 0,
							direction: -1 * column.direction
						};
						var _noOfBoxes = column.direction > 0 ? Math.floor(_upwardMovement / boxSize) : Math.floor(_downwardMovement / boxSize);
						for (var _i = 0; _i < _noOfBoxes; _i++) {
							box.close = box.open + column.direction * boxSize;
							var prevBoxClose = box.close;
							column.boxes.push(box);
							box = createBox(d, dateAccessor, dateMutator);
							box.open = prevBoxClose;
						}

						columnData.push(column);
					}
			}
		});
		updateColumns(columnData, dateAccessor, dateMutator);

		return columnData;
	}
	calculator.reversal = function (x) {
		if (!arguments.length) return reversal;
		reversal = x;
		return calculator;
	};
	calculator.boxSize = function (x) {
		if (!arguments.length) return boxSize;
		boxSize = x;
		return calculator;
	};
	calculator.sourcePath = function (x) {
		if (!arguments.length) return sourcePath;
		sourcePath = x;
		return calculator;
	};
	calculator.dateMutator = function (x) {
		if (!arguments.length) return dateMutator;
		dateMutator = x;
		return calculator;
	};
	calculator.dateAccessor = function (x) {
		if (!arguments.length) return dateAccessor;
		dateAccessor = x;
		return calculator;
	};

	return calculator;
};

var _utils = __webpack_require__(2);

var _defaultOptionsForComputation = __webpack_require__(15);

function createBox(d, dateAccessor, dateMutator) {
	var box = {
		open: d.open,
		fromDate: dateAccessor(d),
		toDate: dateAccessor(d),
		startOfYear: d.startOfYear,
		startOfQuarter: d.startOfQuarter,
		startOfMonth: d.startOfMonth,
		startOfWeek: d.startOfWeek
	};
	dateMutator(box, dateAccessor(d));
	return box;
}

function updateColumns(columnData, dateAccessor, dateMutator) {
	columnData.forEach(function (d) {
		// var lastBox = d.boxes[d.boxes.length - 1];

		d.startOfYear = false;
		d.startOfQuarter = false;
		d.startOfMonth = false;
		d.startOfWeek = false;

		d.boxes.forEach(function (eachBox) {
			if ((0, _utils.isNotDefined)(d.open)) d.open = eachBox.open;
			d.close = eachBox.close;
			d.high = Math.max(d.open, d.close);
			d.low = Math.min(d.open, d.close);

			if ((0, _utils.isNotDefined)(d.fromDate)) d.fromDate = eachBox.fromDate;
			if ((0, _utils.isNotDefined)(d.date)) d.date = eachBox.date;
			d.toDate = eachBox.toDate;

			if (eachBox.startOfYear) {
				d.startOfYear = d.startOfYear || eachBox.startOfYear;
				d.startOfQuarter = eachBox.startOfQuarter;
				d.startOfMonth = eachBox.startOfMonth;
				d.startOfWeek = eachBox.startOfWeek;

				dateMutator(d, dateAccessor(eachBox));
			}
			if (d.startOfQuarter !== true && eachBox.startOfQuarter) {
				d.startOfQuarter = eachBox.startOfQuarter;
				d.startOfMonth = eachBox.startOfMonth;
				d.startOfWeek = eachBox.startOfWeek;
				// d.displayDate = eachBox.displayDate;
				dateMutator(d, dateAccessor(eachBox));
			}
			if (d.startOfMonth !== true && eachBox.startOfMonth) {
				d.startOfMonth = eachBox.startOfMonth;
				d.startOfWeek = eachBox.startOfWeek;
				// d.displayDate = eachBox.displayDate;
				dateMutator(d, dateAccessor(eachBox));
			}
			if (d.startOfWeek !== true && eachBox.startOfWeek) {
				d.startOfWeek = eachBox.startOfWeek;
				// d.displayDate = eachBox.displayDate;
				dateMutator(d, dateAccessor(eachBox));
			}
		});
	});

	// console.table(columnData);
	// console.table(rawData);
	return columnData;
}

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var reversalType = _defaultOptionsForComputation.Renko.reversalType;
	var fixedBrickSize = _defaultOptionsForComputation.Renko.fixedBrickSize;
	var sourcePath = _defaultOptionsForComputation.Renko.sourcePath;
	var windowSize = _defaultOptionsForComputation.Renko.windowSize;

	var dateAccessor = function dateAccessor(d) {
		return d.date;
	};
	var dateMutator = function dateMutator(d, date) {
		d.date = date;
	};

	function calculator(rawData) {
		var source = sourcePath === "high/low" ? function (d) {
			return { high: d.high, low: d.low };
		} : function (d) {
			return { high: d.close, low: d.close };
		};

		var pricingMethod = source,
		    brickSize;

		if (reversalType === "ATR") {
			// calculateATR(rawData, period);
			var atrAlgorithm = (0, _atr2.default)().windowSize(windowSize);

			var atrCalculator = (0, _utils.merge)().algorithm(atrAlgorithm).merge(function (d, c) {
				d["atr" + windowSize] = c;
			});

			atrCalculator(rawData);
			brickSize = function brickSize(d) {
				return d["atr" + windowSize];
			};
		} else {
			brickSize = (0, _utils.functor)(fixedBrickSize);
		}

		var renkoData = [];

		var index = 0,
		    prevBrickClose = rawData[index].open,
		    prevBrickOpen = rawData[index].open;
		var brick = {},
		    direction = 0;

		rawData.forEach(function (d, idx) {
			if ((0, _utils.isNotDefined)(brick.from)) {
				brick.high = d.high;
				brick.low = d.low;
				brick.startOfYear = d.startOfYear;
				brick.startOfQuarter = d.startOfQuarter;
				brick.startOfMonth = d.startOfMonth;
				brick.startOfWeek = d.startOfWeek;

				brick.from = idx;
				brick.fromDate = dateAccessor(d);
				// indexMutator(brick, index++);
				dateMutator(brick, dateAccessor(d));
			}
			brick.volume = (brick.volume || 0) + d.volume;

			var prevCloseToHigh = prevBrickClose - pricingMethod(d).high,
			    prevCloseToLow = prevBrickClose - pricingMethod(d).low,
			    prevOpenToHigh = prevBrickOpen - pricingMethod(d).high,
			    prevOpenToLow = prevBrickOpen - pricingMethod(d).low,
			    priceMovement = Math.min(Math.abs(prevCloseToHigh), Math.abs(prevCloseToLow), Math.abs(prevOpenToHigh), Math.abs(prevOpenToLow));

			brick.high = Math.max(brick.high, d.high);
			brick.low = Math.min(brick.low, d.low);

			if (!brick.startOfYear) {
				brick.startOfYear = d.startOfYear;
				if (brick.startOfYear) {
					dateMutator(brick, dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}

			if (!brick.startOfQuarter) {
				brick.startOfQuarter = d.startOfQuarter;
				if (brick.startOfQuarter && !brick.startOfYear) {
					dateMutator(brick, dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}

			if (!brick.startOfMonth) {
				brick.startOfMonth = d.startOfMonth;
				if (brick.startOfMonth && !brick.startOfQuarter) {
					dateMutator(brick, dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}
			if (!brick.startOfWeek) {
				brick.startOfWeek = d.startOfWeek;
				if (brick.startOfWeek && !brick.startOfMonth) {
					dateMutator(brick, dateAccessor(d));
					// brick.displayDate = d.displayDate;
				}
			}

			// d.brick = JSON.stringify(brick);
			if (brickSize(d)) {
				var noOfBricks = Math.floor(priceMovement / brickSize(d));

				brick.open = Math.abs(prevCloseToHigh) < Math.abs(prevOpenToHigh) || Math.abs(prevCloseToLow) < Math.abs(prevOpenToLow) ? prevBrickClose : prevBrickOpen;

				if (noOfBricks >= 1) {
					var j = 0;
					for (j = 0; j < noOfBricks; j++) {
						brick.close = brick.open < pricingMethod(d).high ?
						// if brick open is less than current price it means it is green/hollow brick
						brick.open + brickSize(d) : brick.open - brickSize(d);
						direction = brick.close > brick.open ? 1 : -1;
						brick.direction = direction;
						brick.to = idx;
						brick.toDate = dateAccessor(d);
						// brick.diff = brick.open - brick.close;
						// brick.atr = d.atr;
						brick.fullyFormed = true;
						renkoData.push(brick);

						prevBrickClose = brick.close;
						prevBrickOpen = brick.open;

						var newBrick = {
							high: brick.high,
							low: brick.low,
							open: brick.close,
							startOfYear: false,
							startOfMonth: false,
							startOfQuarter: false,
							startOfWeek: false
						};
						brick = newBrick;
						brick.from = idx;
						brick.fromDate = dateAccessor(d);
						// indexMutator(brick, index + j);
						dateMutator(brick, dateAccessor(d));
						brick.volume = (brick.volume || 0) + d.volume;
					}
					index = index + j - 1;
					brick = {};
				} else {
					if (idx === rawData.length - 1) {
						brick.close = direction > 0 ? pricingMethod(d).high : pricingMethod(d).low;
						brick.to = idx;
						brick.toDate = dateAccessor(d);
						dateMutator(brick, dateAccessor(d));
						brick.fullyFormed = false;
						renkoData.push(brick);
					}
				}
			}
		});
		return renkoData;
	}
	calculator.reversalType = function (x) {
		if (!arguments.length) return reversalType;
		reversalType = x;
		return calculator;
	};
	calculator.fixedBrickSize = function (x) {
		if (!arguments.length) return fixedBrickSize;
		fixedBrickSize = x;
		return calculator;
	};
	calculator.sourcePath = function (x) {
		if (!arguments.length) return sourcePath;
		sourcePath = x;
		return calculator;
	};
	calculator.windowSize = function (x) {
		if (!arguments.length) return windowSize;
		windowSize = x;
		return calculator;
	};
	calculator.dateMutator = function (x) {
		if (!arguments.length) return dateMutator;
		dateMutator = x;
		return calculator;
	};
	calculator.dateAccessor = function (x) {
		if (!arguments.length) return dateAccessor;
		dateAccessor = x;
		return calculator;
	};

	return calculator;
};

var _utils = __webpack_require__(2);

var _atr = __webpack_require__(60);

var _atr2 = _interopRequireDefault(_atr);

var _defaultOptionsForComputation = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/relativeStrengthIndex.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var windowSize = _defaultOptionsForComputation.RSI.windowSize;
	var sourcePath = _defaultOptionsForComputation.RSI.sourcePath;


	function calculator(data) {

		var source = (0, _utils.path)(sourcePath);
		var prevAvgGain, prevAvgLoss;
		var rsiAlgorithm = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {

			var avgGain = (0, _utils.isDefined)(prevAvgGain) ? (prevAvgGain * (windowSize - 1) + (0, _utils.last)(values).gain) / windowSize : (0, _d3Array.mean)(values, function (each) {
				return each.gain;
			});

			var avgLoss = (0, _utils.isDefined)(prevAvgLoss) ? (prevAvgLoss * (windowSize - 1) + (0, _utils.last)(values).loss) / windowSize : (0, _d3Array.mean)(values, function (each) {
				return each.loss;
			});

			var relativeStrength = avgGain / avgLoss;
			var rsi = 100 - 100 / (1 + relativeStrength);

			prevAvgGain = avgGain;
			prevAvgLoss = avgLoss;

			return rsi;
		});

		var gainsAndLossesCalculator = (0, _utils.slidingWindow)().windowSize(2).undefinedValue(function () {
			return [0, 0];
		}).accumulator(function (tuple) {
			var prev = tuple[0];
			var now = tuple[1];
			var change = source(now) - source(prev);
			return {
				gain: Math.max(change, 0),
				loss: Math.abs(Math.min(change, 0))
			};
		});

		var gainsAndLosses = gainsAndLossesCalculator(data);

		var rsiData = rsiAlgorithm(gainsAndLosses);

		return rsiData;
	}
	calculator.undefinedLength = function () {
		return windowSize;
	};
	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};
	calculator.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return calculator;
	};

	return calculator;
};

var _d3Array = __webpack_require__(9);

var _utils = __webpack_require__(2);

var _defaultOptionsForComputation = __webpack_require__(15);

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var windowSize = _defaultOptionsForComputation.SMA.windowSize;
	var sourcePath = _defaultOptionsForComputation.SMA.sourcePath;


	function calculator(data) {

		var average = (0, _utils.slidingWindow)().windowSize(windowSize).sourcePath(sourcePath).accumulator(function (values) {
			return (0, _d3Array.mean)(values);
		});

		return average(data);
	}
	calculator.undefinedLength = function () {
		return windowSize;
	};
	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};

	calculator.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return calculator;
	};

	return calculator;
};

var _d3Array = __webpack_require__(9);

var _utils = __webpack_require__(2);

var _defaultOptionsForComputation = __webpack_require__(15);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/stochasticOscillator.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var windowSize = _defaultOptionsForComputation.FullStochasticOscillator.windowSize;
	var kWindowSize = _defaultOptionsForComputation.FullStochasticOscillator.kWindowSize;
	var dWindowSize = _defaultOptionsForComputation.FullStochasticOscillator.dWindowSize;


	var source = function source(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	var high = function high(d) {
		return source(d).high;
	},
	    low = function low(d) {
		return source(d).low;
	},
	    close = function close(d) {
		return source(d).close;
	};

	function calculator(data) {
		var kWindow = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {

			var highestHigh = (0, _d3Array.max)(values, high);
			var lowestLow = (0, _d3Array.min)(values, low);

			var currentClose = close((0, _utils.last)(values));
			var k = (currentClose - lowestLow) / (highestHigh - lowestLow) * 100;

			return k;
		});

		var kSmoothed = (0, _utils.slidingWindow)().skipInitial(windowSize - 1).windowSize(kWindowSize).accumulator(function (values) {
			return (0, _d3Array.mean)(values);
		});

		var dWindow = (0, _utils.slidingWindow)().skipInitial(windowSize - 1 + kWindowSize - 1).windowSize(dWindowSize).accumulator(function (values) {
			return (0, _d3Array.mean)(values);
		});

		var stoAlgorithm = (0, _utils.zipper)().combine(function (K, D) {
			return { K: K, D: D };
		});

		var kData = kSmoothed(kWindow(data));
		var dData = dWindow(kData);

		var newData = stoAlgorithm(kData, dData);

		return newData;
	}
	calculator.undefinedLength = function () {
		return Math.min(windowSize + kWindowSize, dWindowSize);
	};
	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};
	calculator.kWindowSize = function (x) {
		if (!arguments.length) {
			return kWindowSize;
		}
		kWindowSize = x;
		return calculator;
	};
	calculator.dWindowSize = function (x) {
		if (!arguments.length) {
			return dWindowSize;
		}
		dWindowSize = x;
		return calculator;
	};
	calculator.source = function (x) {
		if (!arguments.length) {
			return source;
		}
		source = x;
		return calculator;
	};

	return calculator;
};

var _d3Array = __webpack_require__(9);

var _utils = __webpack_require__(2);

var _defaultOptionsForComputation = __webpack_require__(15);

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.atr;
	});

	var underlyingAlgorithm = (0, _algorithm.atr)().windowSize(_defaultOptionsForComputation.ATR.period);

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.atr = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	base.tooltipLabel(function () {
		return ALGORITHM_TYPE + "(" + underlyingAlgorithm.windowSize() + ")";
	});

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "windowSize");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _defaultOptionsForComputation = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "ATR";

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.bollingerBand;
	}).stroke(_defaultOptionsForAppearance.BollingerBand.stroke).fill(_defaultOptionsForAppearance.BollingerBand.fill);

	var underlyingAlgorithm = (0, _algorithm.bollingerband)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.bollingerBand = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");

		var newData = mergedAlgorithm(data);
		return newData;
	};

	base.tooltipLabel(function () {
		return "BB (" + underlyingAlgorithm.windowSize() + ", " + underlyingAlgorithm.multiplier() + (", " + underlyingAlgorithm.movingAverageType() + "): ");
	});

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "sourcePath");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _defaultOptionsForAppearance = __webpack_require__(30);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _algorithm = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "BollingerBand";

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.elderRay;
	});

	var underlyingAlgorithm = (0, _algorithm.change)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.absoluteChange = indicator.absoluteChange;
		datum.percentChange = indicator.percentChange;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "sourcePath");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Change";

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.compare;
	});

	var underlyingAlgorithm = (0, _algorithm.compare)().base(function (d) {
		return d.close;
	}).mainKeys(["open", "high", "low", "close"]);

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.compare = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "base", "mainKeys", "compareKeys");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Compare";

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function () {

	var macdSource, emaSource;

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE)
	// .stroke(d => stroke[d.elderImpulse])
	.stroke(_defaultOptionsForAppearance.ElderImpulse.stroke).fill(undefined);

	var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(2).undefinedValue("neutral").accumulator(function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2);

		var prev = _ref2[0];
		var curr = _ref2[1];

		if ((0, _utils.isNotDefined)(macdSource)) throw new Error("macdSource not defined for " + ALGORITHM_TYPE + " calculator");
		if ((0, _utils.isNotDefined)(emaSource)) throw new Error("emaSource not defined for " + ALGORITHM_TYPE + " calculator");

		if ((0, _utils.isDefined)(macdSource(prev)) && (0, _utils.isDefined)(emaSource(prev))) {
			var prevMACDDivergence = macdSource(prev).divergence;
			var currMACDDivergence = macdSource(curr).divergence;

			var prevEMA = emaSource(prev);
			var currEMA = emaSource(curr);

			if (currMACDDivergence >= prevMACDDivergence && currEMA >= prevEMA) return "up";

			if (currMACDDivergence <= prevMACDDivergence && currEMA <= prevEMA) return "down";
		}
		return "neutral";
	});

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.elderImpulse = indicator;
	});

	var indicator = function indicator(data) {
		var newData = mergedAlgorithm(data);
		return newData;
	};
	indicator.macdSource = function (x) {
		if (!arguments.length) return macdSource;
		macdSource = x;
		return indicator;
	};
	indicator.emaSource = function (x) {
		if (!arguments.length) return emaSource;
		emaSource = x;
		return indicator;
	};
	(0, _d3fcRebind.rebind)(indicator, base, "id", "echo", "type", "stroke");
	// rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _defaultOptionsForAppearance = __webpack_require__(30);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "ElderImpulse";

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.elderRay;
	});

	var underlyingAlgorithm = (0, _algorithm.elderRay)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.elderRay = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	base.tooltipLabel(ALGORITHM_TYPE + ": ");

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "sourcePath");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "ElderRay";

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.ema;
	});

	var underlyingAlgorithm = (0, _algorithm.ema)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.ema = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};
	base.tooltipLabel(function () {
		return ALGORITHM_TYPE + "(" + underlyingAlgorithm.windowSize() + ")";
	});

	indicator.undefinedLength = function () {
		return underlyingAlgorithm.windowSize();
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "windowSize", "sourcePath");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "EMA";

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.forceIndex;
	});

	var underlyingAlgorithm = (0, _algorithm.forceIndex)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.forceIndex = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "sourcePath");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "ForceIndex";

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.ha;
	});

	var underlyingAlgorithm = (0, _algorithm.heikinAshi)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		return _extends({}, datum, indicator);
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	(0, _d3fcRebind.rebind)(indicator, base, "accessor", "stroke", "fill", "echo", "type");
	// rebind(indicator, underlyingAlgorithm, "windowSize", "source");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "HeikinAshi";

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = (0, _algorithm.kagi)();

	var indicator = underlyingAlgorithm;

	(0, _d3fcRebind.rebind)(indicator, base, "id", "stroke", "fill", "echo", "type");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator");
	// rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Kagi";

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).fill(_defaultOptionsForAppearance.MACD.fill).stroke(_defaultOptionsForAppearance.MACD.stroke).accessor(function (d) {
		return d.macd;
	});

	var underlyingAlgorithm = (0, _algorithm.macd)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.macd = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "sourcePath", "fast", "slow", "signal", "undefinedLength");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _defaultOptionsForAppearance = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "MACD";

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = (0, _algorithm.pointAndFigure)();

	var indicator = function indicator(data) {
		return underlyingAlgorithm(data);
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "stroke", "fill", "echo", "type", "tooltipLabel");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "reversal", "boxSize", "sourcePath");
	// rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "PointAndFigure";

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = (0, _algorithm.renko)();

	var indicator = function indicator(data) {
		return underlyingAlgorithm(data);
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "stroke", "fill", "echo", "type", "tooltipLabel");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "reversalType", "fixedBrickSize", "sourcePath", "windowSize");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Renko";

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var overSold = 70,
	    middle = 50,
	    overBought = 30;

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.rsi;
	});

	var underlyingAlgorithm = (0, _algorithm.rsi)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.rsi = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};
	base.tooltipLabel(function () {
		return ALGORITHM_TYPE + " (" + underlyingAlgorithm.windowSize() + "): ";
	});

	base.domain([0, 100]);
	base.tickValues([overSold, middle, overBought]);

	indicator.overSold = function (x) {
		if (!arguments.length) return overSold;
		overSold = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};
	indicator.middle = function (x) {
		if (!arguments.length) return middle;
		middle = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};
	indicator.overBought = function (x) {
		if (!arguments.length) return overBought;
		overBought = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel", "domain", "tickValues");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "sourcePath", "windowSize");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "RSI";

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.sma;
	});

	var underlyingAlgorithm = (0, _algorithm.sma)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.sma = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		var newData = mergedAlgorithm(data);
		return newData;
	};
	indicator.undefinedLength = function () {
		return underlyingAlgorithm.windowSize();
	};

	base.tooltipLabel(function () {
		return ALGORITHM_TYPE + "(" + underlyingAlgorithm.windowSize() + ")";
	});

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "windowSize", "undefinedLength", "sourcePath");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "SMA";

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var overSold = 80,
	    overBought = 20,
	    middle = 50;

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).stroke(_defaultOptionsForAppearance.FullStochasticOscillator.stroke).accessor(function (d) {
		return d.sto;
	});

	var underlyingAlgorithm = (0, _algorithm.sto)();

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.sto = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};
	base.tooltipLabel(function () {
		return ALGORITHM_TYPE + " (" + underlyingAlgorithm.windowSize() + (", " + underlyingAlgorithm.kWindowSize() + ", " + underlyingAlgorithm.dWindowSize() + "): ");
	});

	base.domain([0, 100]);
	base.tickValues([overSold, middle, overBought]);

	indicator.overSold = function (x) {
		if (!arguments.length) return overSold;
		overSold = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};
	indicator.middle = function (x) {
		if (!arguments.length) return middle;
		middle = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};
	indicator.overBought = function (x) {
		if (!arguments.length) return overBought;
		overBought = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};

	(0, _d3fcRebind.rebind)(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel", "domain", "tickValues");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "windowSize", "kWindowSize", "dWindowSize");
	(0, _d3fcRebind.rebind)(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d3fcRebind = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _algorithm = __webpack_require__(12);

var _baseIndicator = __webpack_require__(10);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _defaultOptionsForAppearance = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "RSI";

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brush = function (_Component) {
	_inherits(Brush, _Component);

	function Brush(props) {
		_classCallCheck(this, Brush);

		var _this = _possibleConstructorReturn(this, (Brush.__proto__ || Object.getPrototypeOf(Brush)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawBrush = _this.handleDrawBrush.bind(_this);
		_this.state = {};
		return _this;
	}

	_createClass(Brush, [{
		key: "terminate",
		value: function terminate() {
			this.setState({
				x1: null, y1: null,
				x2: null, y2: null,
				startItem: null,
				startClick: null,
				rect: null
			});
		}
	}, {
		key: "handleDrawBrush",
		value: function handleDrawBrush() {
			var moreProps = this.refs.component.getMoreProps();

			var xScale = moreProps.xScale;
			var mouseXY = moreProps.mouseXY;
			var currentItem = moreProps.currentItem;
			var chartConfig = moreProps.chartConfig;
			var enabled = this.props.enabled;
			var xAccessor = this.context.xAccessor;
			var _state = this.state;
			var startClick = _state.startClick;
			var startItem = _state.startItem;


			if (enabled && (0, _utils.isDefined)(startItem)) {
				var yScale = chartConfig.yScale;


				var y1Value = yScale.invert(startClick[1]);
				var y2Value = yScale.invert(mouseXY[1]);

				var x1 = xScale(xAccessor(startItem));
				var y1 = yScale(y1Value);
				var x2 = xScale(xAccessor(currentItem));
				var y2 = yScale(y2Value);

				var height = Math.abs(y2 - y1);
				var width = Math.abs(x2 - x1);

				this.setState({
					rect: {
						x: Math.min(x1, x2),
						y: Math.min(y1, y2),
						height: height,
						width: width
					}
				});
			}
		}
	}, {
		key: "handleStartAndEnd",
		value: function handleStartAndEnd(e) {
			var moreProps = this.refs.component.getMoreProps();

			var mouseXY = moreProps.mouseXY;
			var currentItem = moreProps.currentItem;
			var chartConfig = moreProps.chartConfig;
			var displayXAccessor = this.context.displayXAccessor;
			var _props = this.props;
			var enabled = _props.enabled;
			var onBrush = _props.onBrush;


			if (enabled) {
				var _state2 = this.state;
				var x1 = _state2.x1;
				var y1 = _state2.y1;
				var startItem = _state2.startItem;
				var startClick = _state2.startClick;
				var yScale = chartConfig.yScale;

				var xValue = displayXAccessor(currentItem);
				var yValue = yScale.invert(mouseXY[1]);

				if ((0, _utils.isDefined)(startItem)) {
					// brush complete
					onBrush({
						x1: x1,
						y1: y1,
						x2: displayXAccessor(currentItem),
						y2: yValue,
						startItem: startItem,
						currentItem: currentItem,
						startClick: startClick,
						mouseXY: mouseXY
					}, e);
					this.terminate();
				} else {
					// brush start
					this.setState({
						x1: xValue,
						y1: yValue,
						x2: null,
						y2: null,
						startItem: currentItem,
						startClick: mouseXY
					});
				}
			}
		}
	}, {
		key: "render",
		value: function render() {
			var rect = this.state.rect;
			var _props2 = this.props;
			var fill = _props2.fill;
			var stroke = _props2.stroke;
			var opacity = _props2.opacity;

			var rectProps = { fill: fill, stroke: stroke, opacity: opacity };

			return _react2.default.createElement(
				"g",
				null,
				(0, _utils.isDefined)(rect) ? _react2.default.createElement("rect", _extends({}, rect, rectProps)) : null,
				_react2.default.createElement(_GenericChartComponent2.default, { ref: "component",
					svgDraw: this.renderSVG,
					isHover: (0, _utils.functor)(true),
					onMouseDown: this.handleStartAndEnd,
					onMouseMove: this.handleDrawBrush,
					drawOnMouseExitOfCanvas: true
				})
			);
		}
	}]);

	return Brush;
}(_react.Component);

Brush.propTypes = {
	enabled: _react.PropTypes.bool.isRequired,
	onStart: _react.PropTypes.func.isRequired,
	onBrush: _react.PropTypes.func.isRequired,

	type: _react.PropTypes.oneOf(["1D", "2D"]),
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	interactiveState: _react.PropTypes.object
};
Brush.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired,
	displayXAccessor: _react.PropTypes.func.isRequired
};

Brush.defaultProps = {
	type: "2D",
	stroke: "#000000",
	opacity: 0.3,
	fill: "#3h3h3h",
	onBrush: _utils.noop,
	onStart: _utils.noop
};

exports.default = Brush;

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClickCallback = function (_Component) {
	_inherits(ClickCallback, _Component);

	function ClickCallback(props) {
		_classCallCheck(this, ClickCallback);

		var _this = _possibleConstructorReturn(this, (ClickCallback.__proto__ || Object.getPrototypeOf(ClickCallback)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(ClickCallback, [{
		key: "handleClick",
		value: function handleClick(e) {
			var moreProps = this.refs.component.getMoreProps();

			var mouseXY = moreProps.mouseXY;
			var currentItem = moreProps.currentItem;
			var chartConfig = moreProps.chartConfig;
			var displayXAccessor = this.context.displayXAccessor;
			var yScale = chartConfig.yScale;


			var yValue = yScale.invert(mouseXY[1]);
			var xValue = displayXAccessor(currentItem);
			this.props.onClick({
				xy: [xValue, yValue],
				mouseXY: mouseXY,
				currentItem: currentItem
			}, e);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, { ref: "component",
				svgDraw: (0, _utils.functor)(null),
				isHover: (0, _utils.functor)(true),
				onClick: this.handleClick,
				onContextMenu: this.handleContextMenu
			});
		}
	}]);

	return ClickCallback;
}(_react.Component);

ClickCallback.drawOnCanvas = _utils.noop;

ClickCallback.propTypes = {
	onClick: _react.PropTypes.func.isRequired
};
ClickCallback.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired,
	displayXAccessor: _react.PropTypes.func.isRequired
};

ClickCallback.defaultProps = {
	onClick: function onClick(e) {
		console.log(e);
	}
};

exports.default = ClickCallback;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

var _InteractiveLine = __webpack_require__(101);

var _InteractiveLine2 = _interopRequireDefault(_InteractiveLine);

var _MouseLocationIndicator = __webpack_require__(102);

var _MouseLocationIndicator2 = _interopRequireDefault(_MouseLocationIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FibonacciRetracement = function (_Component) {
	_inherits(FibonacciRetracement, _Component);

	function FibonacciRetracement(props) {
		_classCallCheck(this, FibonacciRetracement);

		var _this = _possibleConstructorReturn(this, (FibonacciRetracement.__proto__ || Object.getPrototypeOf(FibonacciRetracement)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawRetracement = _this.handleDrawRetracement.bind(_this);

		_this.handleEdge1Drag = _this.handleEdge1Drag.bind(_this);
		_this.handleEdge2Drag = _this.handleEdge2Drag.bind(_this);

		_this.handleDrag = _this.handleDrag.bind(_this);
		_this.handleDragComplete = _this.handleDragComplete.bind(_this);

		_this.state = _this.props.init;
		return _this;
	}

	_createClass(FibonacciRetracement, [{
		key: "removeLast",
		value: function removeLast() {
			var retracements = this.state.retracements;

			if ((0, _utils.isDefined)(retracements) && retracements.length > 0) {
				this.setState({
					retracements: retracements.slice(0, retracements.length - 1)
				});
			}
		}
	}, {
		key: "terminate",
		value: function terminate() {
			this.setState({
				current: null,
				override: null
			});
		}
	}, {
		key: "handleStartAndEnd",
		value: function handleStartAndEnd(xyValue) {
			var _this2 = this;

			var _state = this.state;
			var current = _state.current;
			var retracements = _state.retracements;


			if ((0, _utils.isNotDefined)(current) || (0, _utils.isNotDefined)(current.x1)) {
				this.setState({
					current: {
						x1: xyValue[0],
						y1: xyValue[1],
						x2: null,
						y2: null
					}
				}, function () {
					_this2.props.onStart();
				});
			} else {
				this.setState({
					retracements: retracements.concat(_extends({}, current, { x2: xyValue[0], y2: xyValue[1] })),
					current: null
				}, function () {
					_this2.props.onComplete();
				});
			}
		}
	}, {
		key: "handleDrawRetracement",
		value: function handleDrawRetracement(xyValue) {
			var current = this.state.current;


			if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.x1)) {
				this.setState({
					current: _extends({}, current, {
						x2: xyValue[0],
						y2: xyValue[1]
					})
				});
			}
		}
	}, {
		key: "handleDrag",
		value: function handleDrag(echo, newXYValue, origXYValue) {
			var retracements = this.state.retracements;
			var index = echo.index;

			var dy = origXYValue.y1Value - newXYValue.y1Value;

			this.setState({
				override: {
					index: index,
					x1: newXYValue.x1Value,
					y1: retracements[index].y1 - dy,
					x2: newXYValue.x2Value,
					y2: retracements[index].y2 - dy
				}
			});
		}
	}, {
		key: "handleEdge1Drag",
		value: function handleEdge1Drag(echo, newXYValue, origXYValue) {
			var retracements = this.state.retracements;
			var index = echo.index;


			var dx = origXYValue.x1Value - newXYValue.x1Value;

			this.setState({
				override: {
					index: index,
					x1: retracements[index].x1 - dx,
					y1: retracements[index].y1,
					x2: retracements[index].x2,
					y2: retracements[index].y2
				}
			});
		}
	}, {
		key: "handleEdge2Drag",
		value: function handleEdge2Drag(echo, newXYValue, origXYValue) {
			var retracements = this.state.retracements;
			var index = echo.index;


			var dx = origXYValue.x2Value - newXYValue.x2Value;

			this.setState({
				override: {
					index: index,
					x1: retracements[index].x1,
					y1: retracements[index].y1,
					x2: retracements[index].x2 - dx,
					y2: retracements[index].y2
				}
			});
		}
	}, {
		key: "handleDragComplete",
		value: function handleDragComplete() {
			var _state2 = this.state;
			var retracements = _state2.retracements;
			var override = _state2.override;


			if ((0, _utils.isDefined)(override)) {
				var index = override.index;

				var rest = _objectWithoutProperties(override, ["index"]);

				var newRetracements = retracements.map(function (each, idx) {
					return idx === index ? rest : each;
				});

				this.setState({
					override: null,
					retracements: newRetracements
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var _state3 = this.state;
			var retracements = _state3.retracements;
			var current = _state3.current;
			var override = _state3.override;
			var _props = this.props;
			var stroke = _props.stroke;
			var strokeWidth = _props.strokeWidth;
			var opacity = _props.opacity;
			var fontFamily = _props.fontFamily;
			var fontSize = _props.fontSize;
			var fontStroke = _props.fontStroke;
			var type = _props.type;


			var lineType = type === "EXTEND" ? "XLINE" : "LINE";

			var enabled = this.props.enabled;


			var currentRetracement = null;
			if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.x2)) {
				var lines = helper(current);
				var dir = (0, _utils.head)(lines).y1 > (0, _utils.last)(lines).y1 ? 3 : -1.3;

				currentRetracement = lines.map(function (line, idx) {
					var text = line.y.toFixed(2) + " (" + line.percent.toFixed(2) + "%)";

					return _react2.default.createElement(
						_InteractiveLine2.default,
						{ key: idx,
							type: lineType,
							x1Value: line.x1,
							y1Value: line.y,
							x2Value: line.x2,
							y2Value: line.y,

							childProps: { dir: dir, text: text, fontFamily: fontFamily, fontSize: fontSize, fontStroke: fontStroke },

							stroke: stroke, strokeWidth: strokeWidth, opacity: opacity },
						retracementText
					);
				});
			}

			return _react2.default.createElement(
				"g",
				null,
				retracements.map(function (each, idx) {
					var lines = helper((0, _utils.isDefined)(override) && override.index === idx ? override : each);

					var dir = (0, _utils.head)(lines).y1 > (0, _utils.last)(lines).y1 ? 3 : -1.3;
					return lines.map(function (line, j) {
						var text = line.y.toFixed(2) + " (" + line.percent.toFixed(2) + "%)";

						return _react2.default.createElement(
							_InteractiveLine2.default,
							{ key: idx + "-" + j, withEdge: true,
								echo: { index: idx, idx: j }, type: lineType,
								defaultClassName: "react-stockcharts-enable-interaction react-stockcharts-move-cursor",
								x1Value: line.x1,
								y1Value: line.y,
								x2Value: line.x2,
								y2Value: line.y,

								childProps: { dir: dir, text: text, fontFamily: fontFamily, fontSize: fontSize, fontStroke: fontStroke },

								stroke: stroke, strokeWidth: strokeWidth, opacity: opacity,
								onEdge1Drag: _this3.handleEdge1Drag,
								onEdge2Drag: _this3.handleEdge2Drag,
								onDrag: _this3.handleDrag,
								onDragComplete: _this3.handleDragComplete },
							retracementText
						);
					});
				}),
				currentRetracement,
				_react2.default.createElement(_MouseLocationIndicator2.default, {
					enabled: enabled,
					snap: false,
					r: 0,
					onMouseDown: this.handleStartAndEnd,
					onMouseMove: this.handleDrawRetracement })
			);
		}
	}]);

	return FibonacciRetracement;
}(_react.Component);

/* eslint-disable react/prop-types */

function retracementText(_ref, props, modLine) {
	var xScale = _ref.xScale;
	var chartConfig = _ref.chartConfig;
	var _props$childProps = props.childProps;
	var text = _props$childProps.text;
	var dir = _props$childProps.dir;
	var fontStroke = _props$childProps.fontStroke;
	var fontFamily = _props$childProps.fontFamily;
	var fontSize = _props$childProps.fontSize;
	var x1 = modLine.x1;
	var y1 = modLine.y1;
	var x2 = modLine.x2;

	return _react2.default.createElement(
		"text",
		{
			x: xScale(Math.min(x1, x2)) + 10,
			y: chartConfig.yScale(y1) + dir * 4,
			fontFamily: fontFamily,
			fontSize: fontSize,
			fill: fontStroke },
		text
	);
}
/* eslint-enable react/prop-types */

function helper(_ref2) {
	var x1 = _ref2.x1;
	var y1 = _ref2.y1;
	var x2 = _ref2.x2;
	var y2 = _ref2.y2;

	var dy = y2 - y1;
	var retracements = [100, 61.8, 50, 38.2, 23.6, 0].map(function (each) {
		return {
			percent: each,
			x1: x1,
			x2: x2,
			y: y2 - each / 100 * dy
		};
	});

	return retracements;
}

FibonacciRetracement.propTypes = {
	enabled: _react.PropTypes.bool.isRequired,
	fontFamily: _react.PropTypes.string.isRequired,
	fontSize: _react.PropTypes.number.isRequired,
	chartCanvasType: _react.PropTypes.string,
	chartConfig: _react.PropTypes.object,
	plotData: _react.PropTypes.array,
	xAccessor: _react.PropTypes.func,
	xScale: _react.PropTypes.func,
	interactive: _react.PropTypes.object,
	width: _react.PropTypes.number,
	strokeWidth: _react.PropTypes.number,
	stroke: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	fontStroke: _react.PropTypes.string,
	onStart: _react.PropTypes.func,
	onComplete: _react.PropTypes.func,
	type: _react.PropTypes.oneOf(["EXTEND", // extends from -Infinity to +Infinity
	"BOUND"]).isRequired,
	mouseXY: _react.PropTypes.array,
	currentItem: _react.PropTypes.object,
	interactiveState: _react.PropTypes.object,
	overrideInteractive: _react.PropTypes.func,
	childProps: _react.PropTypes.any,
	init: _react.PropTypes.object.isRequired
};

FibonacciRetracement.defaultProps = {
	enabled: true,
	stroke: "#000000",
	strokeWidth: 1,
	opacity: 0.4,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 10,
	fontStroke: "#000000",
	type: "EXTEND",
	init: { retracements: [] },
	onStart: _utils.noop,
	onComplete: _utils.noop
};

exports.default = FibonacciRetracement;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

var _utils2 = __webpack_require__(312);

var _InteractiveLine = __webpack_require__(101);

var _InteractiveLine2 = _interopRequireDefault(_InteractiveLine);

var _MouseLocationIndicator = __webpack_require__(102);

var _MouseLocationIndicator2 = _interopRequireDefault(_MouseLocationIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrendLine = function (_Component) {
	_inherits(TrendLine, _Component);

	function TrendLine(props) {
		_classCallCheck(this, TrendLine);

		var _this = _possibleConstructorReturn(this, (TrendLine.__proto__ || Object.getPrototypeOf(TrendLine)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawLine = _this.handleDrawLine.bind(_this);
		_this.handleDragLine = _this.handleDragLine.bind(_this);
		_this.handleDragLineComplete = _this.handleDragLineComplete.bind(_this);

		_this.state = _this.props.init;
		return _this;
	}

	_createClass(TrendLine, [{
		key: "removeLast",
		value: function removeLast() {
			var trends = this.state.trends;

			if ((0, _utils.isDefined)(trends) && trends.length > 0) {
				this.setState({
					trends: trends.slice(0, trends.length - 1)
				});
			}
		}
	}, {
		key: "terminate",
		value: function terminate() {
			this.setState({
				current: null,
				override: null
			});
		}
	}, {
		key: "handleDragLine",
		value: function handleDragLine(index, newXYValue) {
			this.setState({
				override: _extends({
					index: index
				}, newXYValue)
			});
		}
	}, {
		key: "handleDragLineComplete",
		value: function handleDragLineComplete() {
			var _state = this.state;
			var trends = _state.trends;
			var override = _state.override;

			var newTrends = trends.map(function (each, idx) {
				return idx === override.index ? {
					start: [override.x1Value, override.y1Value],
					end: [override.x2Value, override.y2Value]
				} : each;
			});
			this.setState({
				trends: newTrends,
				override: null
			});
		}
	}, {
		key: "handleDrawLine",
		value: function handleDrawLine(xyValue) {
			var current = this.state.current;


			if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.start)) {
				this.setState({
					current: {
						start: current.start,
						end: xyValue
					}
				});
			}
		}
	}, {
		key: "handleStartAndEnd",
		value: function handleStartAndEnd(xyValue) {
			var _this2 = this;

			var _state2 = this.state;
			var current = _state2.current;
			var trends = _state2.trends;


			if ((0, _utils.isNotDefined)(current) || (0, _utils.isNotDefined)(current.start)) {
				this.setState({
					current: {
						start: xyValue,
						end: null
					}
				}, function () {
					_this2.props.onStart();
				});
			} else {
				this.setState({
					trends: trends.concat({ start: current.start, end: xyValue }),
					current: null
				}, function () {
					_this2.props.onComplete();
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var _props = this.props;
			var stroke = _props.stroke;
			var opacity = _props.opacity;
			var strokeWidth = _props.strokeWidth;
			var _props2 = this.props;
			var enabled = _props2.enabled;
			var snap = _props2.snap;
			var shouldDisableSnap = _props2.shouldDisableSnap;
			var snapTo = _props2.snapTo;
			var type = _props2.type;
			var _props3 = this.props;
			var currentPositionRadius = _props3.currentPositionRadius;
			var currentPositionStroke = _props3.currentPositionStroke;
			var _props4 = this.props;
			var currentPositionOpacity = _props4.currentPositionOpacity;
			var currentPositionStrokeWidth = _props4.currentPositionStrokeWidth;
			var _state3 = this.state;
			var trends = _state3.trends;
			var current = _state3.current;
			var override = _state3.override;


			var tempLine = (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.end) ? _react2.default.createElement(_InteractiveLine2.default, { type: type,
				x1Value: current.start[0], y1Value: current.start[1],
				x2Value: current.end[0], y2Value: current.end[1],
				stroke: stroke, strokeWidth: strokeWidth, opacity: opacity }) : null;

			return _react2.default.createElement(
				"g",
				null,
				trends.map(function (each, idx) {
					return _react2.default.createElement(_InteractiveLine2.default, { key: idx, withEdge: true,
						echo: idx, type: type,
						defaultClassName: "react-stockcharts-enable-interaction react-stockcharts-move-cursor",
						x1Value: (0, _utils2.getValueFromOverride)(override, idx, "x1Value", each.start[0]),
						y1Value: (0, _utils2.getValueFromOverride)(override, idx, "y1Value", each.start[1]),
						x2Value: (0, _utils2.getValueFromOverride)(override, idx, "x2Value", each.end[0]),
						y2Value: (0, _utils2.getValueFromOverride)(override, idx, "y2Value", each.end[1]),
						stroke: stroke, strokeWidth: strokeWidth, opacity: opacity,
						onDrag: _this3.handleDragLine,
						onEdge1Drag: _this3.handleDragLine,
						onEdge2Drag: _this3.handleDragLine,
						onDragComplete: _this3.handleDragLineComplete
					});
				}),
				tempLine,
				_react2.default.createElement(_MouseLocationIndicator2.default, {
					enabled: enabled,
					snap: snap,
					shouldDisableSnap: shouldDisableSnap,
					snapTo: snapTo,
					r: currentPositionRadius,
					stroke: currentPositionStroke,
					opacity: currentPositionOpacity,
					strokeWidth: currentPositionStrokeWidth,
					onMouseDown: this.handleStartAndEnd,
					onMouseMove: this.handleDrawLine })
			);
		}
	}]);

	return TrendLine;
}(_react.Component);

TrendLine.propTypes = {
	snap: _react.PropTypes.bool.isRequired,
	show: _react.PropTypes.bool,
	enabled: _react.PropTypes.bool.isRequired,
	snapTo: _react.PropTypes.func,
	shouldDisableSnap: _react.PropTypes.func.isRequired,
	onStart: _react.PropTypes.func.isRequired,
	onComplete: _react.PropTypes.func.isRequired,
	interactive: _react.PropTypes.object,
	strokeWidth: _react.PropTypes.number.isRequired,
	currentPositionStroke: _react.PropTypes.string,
	currentPositionStrokeWidth: _react.PropTypes.number,
	currentPositionOpacity: _react.PropTypes.number,
	currentPositionRadius: _react.PropTypes.number,
	stroke: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	type: _react.PropTypes.oneOf(["XLINE", // extends from -Infinity to +Infinity
	"RAY", // extends to +/-Infinity in one direction
	"LINE"]),
	endPointCircleFill: _react.PropTypes.string,
	endPointCircleRadius: _react.PropTypes.number,
	init: _react.PropTypes.object.isRequired
};

TrendLine.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

TrendLine.defaultProps = {
	stroke: "#000000",
	type: "XLINE",
	opacity: 0.7,
	strokeWidth: 2,
	onStart: _utils.noop,
	onComplete: _utils.noop,
	shouldDisableSnap: function shouldDisableSnap(e) {
		return e.button === 2 || e.shiftKey;
	},
	currentPositionStroke: "#000000",
	currentPositionOpacity: 1,
	currentPositionStrokeWidth: 3,
	currentPositionRadius: 4,
	endPointCircleFill: "#000000",
	endPointCircleRadius: 5,
	init: { trends: [] }
};

exports.default = TrendLine;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getValueFromOverride = getValueFromOverride;

var _utils = __webpack_require__(2);

function getValueFromOverride(override, index, key, defaultValue) {
	if ((0, _utils.isDefined)(override) && override.index === index) return override[key];
	return defaultValue;
}

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.discontinuousTimeScaleProviderBuilder = discontinuousTimeScaleProviderBuilder;

var _d3TimeFormat = __webpack_require__(7);

var _d3Collection = __webpack_require__(16);

var _financeDiscontinuousScale = __webpack_require__(103);

var _financeDiscontinuousScale2 = _interopRequireDefault(_financeDiscontinuousScale);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yearFormat = "%Y";
var quarterFormat = "%b %Y";
var monthFormat = "%b";
var weekFormat = "%d %b";
var dayFormat = "%a %d";
var hourFormat = "%_I %p";
var minuteFormat = "%I:%M %p";
var secondFormat = "%I:%M:%S %p";
// const milliSecondFormat = "%L";

var levelDefinition = [

/* eslint-disable no-unused-vars */
/* 17 */function (d, date, i) {
	return d.startOfYear && date.getFullYear() % 2 === 0 && yearFormat;
},
/* 16 */function (d, date, i) {
	return d.startOfYear && yearFormat;
},
/* 15 */function (d, date, i) {
	return d.startOfQuarter && quarterFormat;
},
/* 14 */function (d, date, i) {
	return d.startOfMonth && monthFormat;
},
/* 13 */function (d, date, i) {
	return d.startOfWeek && weekFormat;
},
/* 12 */function (d, date, i) {
	return d.startOfDay && i % 2 === 0 && dayFormat;
},
/* 11 */function (d, date, i) {
	return d.startOfDay && dayFormat;
},
/* 10 */function (d, date, i) {
	return d.startOfHalfDay && hourFormat;
}, // 12h
/*  9 */function (d, date, i) {
	return d.startOfQuarterDay && hourFormat;
}, // 6h
/*  8 */function (d, date, i) {
	return d.startOfEighthOfADay && hourFormat;
}, // 3h
/*  7 */function (d, date, i) {
	return d.startOfHour && date.getHours() % 2 === 0 && hourFormat;
}, // 2h -- REMOVE THIS
/*  6 */function (d, date, i) {
	return d.startOfHour && hourFormat;
}, // 1h
/*  5 */function (d, date, i) {
	return d.startOf30Minutes && minuteFormat;
},
/*  4 */function (d, date, i) {
	return d.startOf15Minutes && minuteFormat;
},
/*  3 */function (d, date, i) {
	return d.startOf5Minutes && minuteFormat;
},
/*  2 */function (d, date, i) {
	return d.startOfMinute && minuteFormat;
},
/*  1 */function (d, date, i) {
	return d.startOf30Seconds && secondFormat;
},
/*  0 */function (d, date, i) {
	return secondFormat;
}];

function evaluateLevel(d, date, i) {
	return levelDefinition.map(function (l, idx) {
		return { level: levelDefinition.length - idx - 1, format: l(d, date, i) };
	}).find(function (l) {
		return !!l.format;
	});
}

var discontinuousIndexCalculator = (0, _utils.slidingWindow)().windowSize(2).undefinedValue(function (d, idx, di) {
	var i = di;
	var row = {
		date: d.getTime(),
		startOf30Seconds: false,
		startOfMinute: false,
		startOf5Minutes: false,
		startOf15Minutes: false,
		startOf30Minutes: false,
		startOfHour: false,
		startOfEighthOfADay: false,
		startOfQuarterDay: false,
		startOfHalfDay: false,
		startOfDay: true,
		startOfWeek: false,
		startOfMonth: false,
		startOfQuarter: false,
		startOfYear: false
	};
	var level = evaluateLevel(row, d, i);
	return _extends({}, row, { index: i }, level);
});

var discontinuousIndexCalculatorLocalTime = discontinuousIndexCalculator.accumulator(function (_ref, i, idx, di) {
	var _ref2 = _slicedToArray(_ref, 2);

	var prevDate = _ref2[0];
	var nowDate = _ref2[1];

	var startOf30Seconds = nowDate.getSeconds() % 30 === 0;

	var startOfMinute = nowDate.getMinutes() !== prevDate.getMinutes();
	var startOf5Minutes = startOfMinute && nowDate.getMinutes() % 5 <= prevDate.getMinutes() % 5;
	var startOf15Minutes = startOfMinute && nowDate.getMinutes() % 15 <= prevDate.getMinutes() % 15;
	var startOf30Minutes = startOfMinute && nowDate.getMinutes() % 30 <= prevDate.getMinutes() % 30;

	var startOfHour = nowDate.getHours() !== prevDate.getHours();

	var startOfEighthOfADay = startOfHour && nowDate.getHours() % 3 === 0;
	var startOfQuarterDay = startOfHour && nowDate.getHours() % 6 === 0;
	var startOfHalfDay = startOfHour && nowDate.getHours() % 12 === 0;

	var startOfDay = nowDate.getDay() !== prevDate.getDay();
	// According to ISO calendar
	// Sunday = 0, Monday = 1, ... Saturday = 6
	// day of week of today < day of week of yesterday then today is start of week
	var startOfWeek = nowDate.getDay() < prevDate.getDay();
	// month of today != month of yesterday then today is start of month
	var startOfMonth = nowDate.getMonth() !== prevDate.getMonth();
	// if start of month and month % 3 === 0 then it is start of quarter
	var startOfQuarter = startOfMonth && nowDate.getMonth() % 3 <= prevDate.getMonth() % 3;
	// year of today != year of yesterday then today is start of year
	var startOfYear = nowDate.getYear() !== prevDate.getYear();

	var row = {
		date: nowDate.getTime(),
		startOf30Seconds: startOf30Seconds,
		startOfMinute: startOfMinute,
		startOf5Minutes: startOf5Minutes,
		startOf15Minutes: startOf15Minutes,
		startOf30Minutes: startOf30Minutes,
		startOfHour: startOfHour,
		startOfEighthOfADay: startOfEighthOfADay,
		startOfQuarterDay: startOfQuarterDay,
		startOfHalfDay: startOfHalfDay,
		startOfDay: startOfDay,
		startOfWeek: startOfWeek,
		startOfMonth: startOfMonth,
		startOfQuarter: startOfQuarter,
		startOfYear: startOfYear
	};
	var level = evaluateLevel(row, nowDate, i);
	return _extends({}, row, { index: i + di }, level);
});

function doStuff(realDateAccessor, inputDateAccessor, initialIndex) {
	return function (data) {
		var dateAccessor = realDateAccessor(inputDateAccessor);
		var calculate = discontinuousIndexCalculatorLocalTime.source(dateAccessor).misc(initialIndex);
		var index = calculate(data);

		var map = (0, _d3Collection.map)();
		for (var i = 0; i < data.length - 1; i++) {

			var nextDate = dateAccessor(data[i + 1]);
			var nowDate = dateAccessor(data[i]);
			var diff = nextDate - nowDate;

			if (map.has(diff)) {
				var count = parseInt(map.get(diff), 10) + 1;
				map.set(diff, count);
			} else {
				map.set(diff, 1);
			}
		}

		var entries = map.entries().sort(function (a, b) {
			return a.value < b.value;
		});

		// For Renko/p&f
		var interval = entries[0].value === 1 ? Math.round((dateAccessor((0, _utils.last)(data)) - dateAccessor((0, _utils.head)(data))) / data.length) : parseInt(entries[0].key, 10);

		return { index: index, interval: interval };
	};
}

function discontinuousTimeScaleProviderBuilder() {
	var initialIndex = 0,
	    realDateAccessor = _utils.identity;
	var inputDateAccessor = function inputDateAccessor(d) {
		return d.date;
	},
	    indexAccessor = function indexAccessor(d) {
		return d.idx;
	},
	    indexMutator = function indexMutator(d, idx) {
		return _extends({}, d, { idx: idx });
	},
	    withIndex,
	    withInterval;

	var discontinuousTimeScaleProvider = function discontinuousTimeScaleProvider(data) {

		var index = withIndex;
		var interval = withInterval;
		if ((0, _utils.isNotDefined)(index)) {
			var response = doStuff(realDateAccessor, inputDateAccessor, initialIndex)(data);
			index = response.index;
			interval = response.interval;
		}
		// console.log(interval, entries[0].key);

		var inputIndex = index.map(function (each) {
			var format = each.format;

			return _extends({}, each, {
				date: new Date(each.date),
				format: (0, _d3TimeFormat.timeFormat)(format)
			});
		});

		var xScale = (0, _financeDiscontinuousScale2.default)(inputIndex, interval);

		var mergedData = (0, _utils.zipper)().combine(indexMutator);

		var finalData = mergedData(data, inputIndex);

		return {
			data: finalData,
			xScale: xScale,
			xAccessor: function xAccessor(d) {
				return d && indexAccessor(d).index;
			},
			displayXAccessor: realDateAccessor(inputDateAccessor)
		};
	};

	discontinuousTimeScaleProvider.initialIndex = function (x) {
		if (!arguments.length) {
			return initialIndex;
		}
		initialIndex = x;
		return discontinuousTimeScaleProvider;
	};
	discontinuousTimeScaleProvider.inputDateAccessor = function (x) {
		if (!arguments.length) {
			return inputDateAccessor;
		}
		inputDateAccessor = x;
		return discontinuousTimeScaleProvider;
	};
	discontinuousTimeScaleProvider.indexAccessor = function (x) {
		if (!arguments.length) {
			return indexAccessor;
		}
		indexAccessor = x;
		return discontinuousTimeScaleProvider;
	};
	discontinuousTimeScaleProvider.indexMutator = function (x) {
		if (!arguments.length) {
			return indexMutator;
		}
		indexMutator = x;
		return discontinuousTimeScaleProvider;
	};
	discontinuousTimeScaleProvider.withIndex = function (x) {
		if (!arguments.length) {
			return withIndex;
		}
		withIndex = x;
		return discontinuousTimeScaleProvider;
	};
	discontinuousTimeScaleProvider.withInterval = function (x) {
		if (!arguments.length) {
			return withInterval;
		}
		withInterval = x;
		return discontinuousTimeScaleProvider;
	};
	discontinuousTimeScaleProvider.utc = function () {
		realDateAccessor = function realDateAccessor(dateAccessor) {
			return function (d) {
				var date = dateAccessor(d);
				// The getTimezoneOffset() method returns the time-zone offset from UTC, in minutes, for the current locale.
				var offsetInMillis = date.getTimezoneOffset() * 60 * 1000;
				return new Date(date.getTime() + offsetInMillis);
			};
		};
		return discontinuousTimeScaleProvider;
	};
	discontinuousTimeScaleProvider.indexCalculator = function () {
		return doStuff(realDateAccessor, inputDateAccessor, initialIndex);
	};

	return discontinuousTimeScaleProvider;
}

/* discontinuousTimeScaleProvider.utc = function(data,
		dateAccessor,
		indexAccessor,
		indexMutator) {
	var utcDateAccessor = d => {
		var date = dateAccessor(d);
		// The getTimezoneOffset() method returns the time-zone offset from UTC, in minutes, for the current locale.
		var offsetInMillis = date.getTimezoneOffset() * 60 * 1000;
		return new Date(date.getTime() + offsetInMillis);
	};
	return discontinuousTimeScaleProvider(data, utcDateAccessor, indexAccessor, indexMutator);
};*/

exports.default = discontinuousTimeScaleProviderBuilder();

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var xAccessor,
	    useWholeData,
	    width,
	    xScale,
	    map,
	    calculator = [],
	    scaleProvider,
	    indexAccessor,
	    indexMutator;

	function evaluate(data) {

		if (false) console.time("evaluation");
		var mappedData = data.map(map);

		var composedCalculator = compose(calculator);

		var calculatedData = composedCalculator(mappedData);
		if (false) console.timeEnd("evaluation");

		if ((0, _utils.isDefined)(scaleProvider)) {
			var scaleProvider2 = scaleProvider.inputDateAccessor(xAccessor).indexAccessor(indexAccessor).indexMutator(indexMutator);

			var _scaleProvider = scaleProvider2(calculatedData);

			var finalData = _scaleProvider.data;
			var modifiedXScale = _scaleProvider.xScale;
			var realXAccessor = _scaleProvider.xAccessor;
			var displayXAccessor = _scaleProvider.displayXAccessor;


			return {
				filterData: extentsWrapper(finalData, xAccessor, realXAccessor, useWholeData || (0, _utils.isNotDefined)(modifiedXScale.invert)),
				fullData: finalData,
				xScale: modifiedXScale,
				xAccessor: realXAccessor,
				displayXAccessor: displayXAccessor,
				lastItem: (0, _utils.last)(finalData),
				firstItem: (0, _utils.first)(finalData)
			};
		}

		return {
			filterData: extentsWrapper(calculatedData, xAccessor, xAccessor, useWholeData || (0, _utils.isNotDefined)(xScale.invert)),
			fullData: calculatedData,
			xScale: xScale,
			xAccessor: xAccessor,
			displayXAccessor: xAccessor,
			lastItem: (0, _utils.last)(calculatedData),
			firstItem: (0, _utils.first)(calculatedData)
		};
	}
	evaluate.xAccessor = function (x) {
		if (!arguments.length) return xAccessor;
		xAccessor = x;
		return evaluate;
	};
	evaluate.map = function (x) {
		if (!arguments.length) return map;
		map = x;
		return evaluate;
	};
	evaluate.indexAccessor = function (x) {
		if (!arguments.length) return indexAccessor;
		indexAccessor = x;
		return evaluate;
	};
	evaluate.indexMutator = function (x) {
		if (!arguments.length) return indexMutator;
		indexMutator = x;
		return evaluate;
	};
	evaluate.scaleProvider = function (x) {
		if (!arguments.length) return scaleProvider;
		scaleProvider = x;
		return evaluate;
	};
	evaluate.xScale = function (x) {
		if (!arguments.length) return xScale;
		xScale = x;
		return evaluate;
	};
	evaluate.useWholeData = function (x) {
		if (!arguments.length) return useWholeData;
		useWholeData = x;
		return evaluate;
	};
	evaluate.width = function (x) {
		if (!arguments.length) return width;
		width = x;
		return evaluate;
	};
	evaluate.calculator = function (x) {
		if (!arguments.length) return calculator;
		calculator = x;
		return evaluate;
	};

	return evaluate;
};

var _utils = __webpack_require__(2);

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function extentsWrapper(data, inputXAccessor, realXAccessor, useWholeData) {
	function domain(inputDomain, xAccessor, initialXScale, currentPlotData, currentDomain) {
		if (useWholeData) {
			return { plotData: data, domain: inputDomain };
		}

		var left = (0, _utils.first)(inputDomain);
		var right = (0, _utils.last)(inputDomain);

		var filteredData = getFilteredResponse(data, left, right, xAccessor);

		var realInputDomain = realXAccessor === xAccessor ? inputDomain : [realXAccessor((0, _utils.first)(filteredData)), realXAccessor((0, _utils.last)(filteredData))];

		var xScale = initialXScale.copy().domain(realInputDomain);

		var width = Math.floor(xScale(realXAccessor((0, _utils.last)(filteredData))) - xScale(realXAccessor((0, _utils.first)(filteredData))));

		var plotData, domain;

		var chartWidth = xScale.range()[1] - xScale.range()[0];

		console.debug("Trying to show " + filteredData.length + " in " + width + "px while the chart width is " + chartWidth + "px");

		if (canShowTheseManyPeriods(width, filteredData.length)) {
			plotData = filteredData;
			domain = realInputDomain;
			console.debug("AND IT WORKED");
		} else {
			plotData = currentPlotData || filteredData.slice(filteredData.length - showMax(width));
			domain = currentDomain || [realXAccessor((0, _utils.first)(plotData)), realXAccessor((0, _utils.last)(plotData))];

			var newXScale = xScale.copy().domain(domain);
			var newWidth = Math.floor(newXScale(realXAccessor((0, _utils.last)(plotData))) - newXScale(realXAccessor((0, _utils.first)(plotData))));

			console.debug("and ouch, that is too much, so instead showing " + plotData.length + " in " + newWidth + "px");
		}

		return { plotData: plotData, domain: domain };
	}

	return domain;
}

function canShowTheseManyPeriods(width, arrayLength) {
	var threshold = 1; // number of datapoints per 1 px
	return arrayLength < width * threshold && arrayLength > 1;
}

function showMax(width) {
	var threshold = 0.99; // number of datapoints per 1 px
	return Math.floor(width * threshold);
}

function getFilteredResponse(data, left, right, xAccessor) {
	var newLeftIndex = (0, _utils.getClosestItemIndexes)(data, left, xAccessor).right;
	var newRightIndex = (0, _utils.getClosestItemIndexes)(data, right, xAccessor).left;

	var filteredData = data.slice(newLeftIndex, newRightIndex + 1);
	// console.log(right, newRightIndex, dataForInterval.length);

	return filteredData;
}

function compose(funcs) {
	if (funcs.length === 0) {
		return _utils.identity;
	}

	if (funcs.length === 1) {
		return funcs[0];
	}

	var _funcs = _toArray(funcs);

	var head = _funcs[0];

	var tail = _funcs.slice(1);

	return function (args) {
		return tail.reduce(function (composed, f) {
			return f(composed);
		}, head(args));
	};
}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LineSeries = __webpack_require__(26);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _AreaOnlySeries = __webpack_require__(104);

var _AreaOnlySeries2 = _interopRequireDefault(_AreaOnlySeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AreaSeries(props) {
	var yAccessor = props.yAccessor;
	var baseAt = props.baseAt;
	var className = props.className;
	var opacity = props.opacity;
	var stroke = props.stroke;
	var strokeWidth = props.strokeWidth;
	var fill = props.fill;


	return _react2.default.createElement(
		"g",
		{ className: className },
		_react2.default.createElement(_LineSeries2.default, {
			yAccessor: yAccessor,
			stroke: stroke, fill: "none",
			strokeWidth: strokeWidth,
			hoverHighlight: false }),
		_react2.default.createElement(_AreaOnlySeries2.default, {
			yAccessor: yAccessor,
			base: baseAt,
			stroke: "none", fill: fill,
			opacity: opacity })
	);
}

AreaSeries.propTypes = {
	stroke: _react.PropTypes.string,
	strokeWidth: _react.PropTypes.number,
	fill: _react.PropTypes.string.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	className: _react.PropTypes.string,
	yAccessor: _react.PropTypes.func.isRequired,
	baseAt: _react.PropTypes.func
};

AreaSeries.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-area"
};

exports.default = AreaSeries;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LineSeries = __webpack_require__(26);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _AreaOnlySeries = __webpack_require__(104);

var _AreaOnlySeries2 = _interopRequireDefault(_AreaOnlySeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BollingerSeries = function (_Component) {
	_inherits(BollingerSeries, _Component);

	function BollingerSeries(props) {
		_classCallCheck(this, BollingerSeries);

		var _this = _possibleConstructorReturn(this, (BollingerSeries.__proto__ || Object.getPrototypeOf(BollingerSeries)).call(this, props));

		_this.yAccessorForTop = _this.yAccessorForTop.bind(_this);
		_this.yAccessorForMiddle = _this.yAccessorForMiddle.bind(_this);
		_this.yAccessorForBottom = _this.yAccessorForBottom.bind(_this);
		_this.yAccessorForScalledBottom = _this.yAccessorForScalledBottom.bind(_this);
		return _this;
	}

	_createClass(BollingerSeries, [{
		key: "yAccessorForTop",
		value: function yAccessorForTop(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).top;
		}
	}, {
		key: "yAccessorForMiddle",
		value: function yAccessorForMiddle(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).middle;
		}
	}, {
		key: "yAccessorForBottom",
		value: function yAccessorForBottom(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).bottom;
		}
	}, {
		key: "yAccessorForScalledBottom",
		value: function yAccessorForScalledBottom(scale, d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return scale(yAccessor(d) && yAccessor(d).bottom);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var calculator = _props.calculator;
			var areaClassName = _props.areaClassName;
			var className = _props.className;
			var opacity = _props.opacity;


			var stroke = calculator.stroke();
			var fill = calculator.fill();

			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_LineSeries2.default, { yAccessor: this.yAccessorForTop,
					stroke: stroke.top, fill: "none" }),
				_react2.default.createElement(_LineSeries2.default, { yAccessor: this.yAccessorForMiddle,
					stroke: stroke.middle, fill: "none" }),
				_react2.default.createElement(_LineSeries2.default, { yAccessor: this.yAccessorForBottom,
					stroke: stroke.bottom, fill: "none" }),
				_react2.default.createElement(_AreaOnlySeries2.default, { className: areaClassName,
					yAccessor: this.yAccessorForTop,
					base: this.yAccessorForScalledBottom,
					stroke: "none", fill: fill,
					opacity: opacity })
			);
		}
	}]);

	return BollingerSeries;
}(_react.Component);

BollingerSeries.propTypes = {
	xAccessor: _react.PropTypes.func,
	calculator: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]).isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array,
	className: _react.PropTypes.string,
	areaClassName: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	type: _react.PropTypes.string
};

BollingerSeries.defaultProps = {
	className: "react-stockcharts-bollinger-band-series",
	areaClassName: "react-stockcharts-bollinger-band-series-area",
	opacity: 0.2
};

exports.default = BollingerSeries;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Collection = __webpack_require__(16);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = function (_Component) {
	_inherits(CandlestickSeries, _Component);

	function CandlestickSeries(props) {
		_classCallCheck(this, CandlestickSeries);

		var _this = _possibleConstructorReturn(this, (CandlestickSeries.__proto__ || Object.getPrototypeOf(CandlestickSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(CandlestickSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			_drawOnCanvas(ctx, this.props, this.context, moreProps);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var className = _props.className;
			var wickClassName = _props.wickClassName;
			var candleClassName = _props.candleClassName;


			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(
					"g",
					{ className: wickClassName, key: "wicks" },
					getWicksSVG(this.props, this.context, moreProps)
				),
				_react2.default.createElement(
					"g",
					{ className: candleClassName, key: "candles" },
					getCandlesSVG(this.props, this.context, moreProps)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}]);

	return CandlestickSeries;
}(_react.Component);

CandlestickSeries.propTypes = {
	className: _react.PropTypes.string,
	wickClassName: _react.PropTypes.string,
	candleClassName: _react.PropTypes.string,
	widthRatio: _react.PropTypes.number.isRequired,
	classNames: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	stroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	wickStroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	xAccessor: _react.PropTypes.func,
	yAccessor: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};
CandlestickSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

CandlestickSeries.defaultProps = {
	className: "react-stockcharts-candlestick",
	wickClassName: "react-stockcharts-candlestick-wick",
	candleClassName: "react-stockcharts-candlestick-candle",
	yAccessor: function yAccessor(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	},
	classNames: function classNames(d) {
		return d.close > d.open ? "up" : "down";
	},
	widthRatio: 0.8,
	wickStroke: "#000000",
	// wickStroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
	fill: function fill(d) {
		return d.close > d.open ? "#6BA583" : "#FF0000";
	},
	// stroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
	stroke: "#000000",
	candleStrokeWidth: 0.5,
	// stroke: "none",
	opacity: 0.5
};

function getWicksSVG(props, context, moreProps) {

	/* eslint-disable react/prop-types */
	var xAccessor = context.xAccessor;
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;
	/* eslint-enable react/prop-types */

	var wickData = getWickData(props, xAccessor, xScale, yScale, plotData);
	var wicks = wickData.map(function (d, idx) {
		return _react2.default.createElement("path", { key: idx,
			className: d.className, stroke: d.stroke, style: { shapeRendering: "crispEdges" },
			d: "M" + d.x + "," + d.y1 + " L" + d.x + "," + d.y2 + " M" + d.x + "," + d.y3 + " L" + d.x + "," + d.y4 });
	});
	return wicks;
}

function getCandlesSVG(props, context, moreProps) {

	/* eslint-disable react/prop-types */
	var opacity = props.opacity;
	var candleStrokeWidth = props.candleStrokeWidth;
	var xAccessor = context.xAccessor;
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;
	/* eslint-enable react/prop-types */

	var candleData = getCandleData(props, xAccessor, xScale, yScale, plotData);
	var candles = candleData.map(function (d, idx) {
		if (d.width < 0) return _react2.default.createElement("line", { className: d.className, key: idx,
			x1: d.x, y1: d.y, x2: d.x, y2: d.y + d.height,
			stroke: d.fill });else if (d.height === 0) return _react2.default.createElement("line", { key: idx,
			x1: d.x, y1: d.y, x2: d.x + d.width, y2: d.y + d.height,
			stroke: d.fill });
		return _react2.default.createElement("rect", { key: idx, className: d.className,
			fillOpacity: opacity,
			x: d.x, y: d.y, width: d.width, height: d.height,
			fill: d.fill, stroke: d.stroke, strokeWidth: candleStrokeWidth });
	});
	return candles;
}

function _drawOnCanvas(ctx, props, context, moreProps) {
	var opacity = props.opacity;
	var candleStrokeWidth = props.candleStrokeWidth;
	var xAccessor = context.xAccessor;
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;

	var wickData = getWickData(props, xAccessor, xScale, yScale, plotData);

	var wickNest = (0, _d3Collection.nest)().key(function (d) {
		return d.stroke;
	}).entries(wickData);

	wickNest.forEach(function (outer) {
		var key = outer.key;
		var values = outer.values;

		ctx.strokeStyle = key;
		values.forEach(function (d) {
			ctx.beginPath();
			ctx.moveTo(d.x, d.y1);
			ctx.lineTo(d.x, d.y2);

			ctx.moveTo(d.x, d.y3);
			ctx.lineTo(d.x, d.y4);
			ctx.stroke();
		});
	});

	var candleData = getCandleData(props, xAccessor, xScale, yScale, plotData);

	var candleNest = (0, _d3Collection.nest)().key(function (d) {
		return d.stroke;
	}).key(function (d) {
		return d.fill;
	}).entries(candleData);

	candleNest.forEach(function (outer) {
		var strokeKey = outer.key;
		var strokeValues = outer.values;

		if (strokeKey !== "none") {
			ctx.strokeStyle = strokeKey;
			ctx.lineWidth = candleStrokeWidth;
		}
		strokeValues.forEach(function (inner) {
			var key = inner.key;
			var values = inner.values;

			ctx.fillStyle = (0, _utils.hexToRGBA)(key, opacity);

			values.forEach(function (d) {
				if (d.width < 0) {
					// <line className={d.className} key={idx} x1={d.x} y1={d.y} x2={d.x} y2={d.y + d.height}/>
					ctx.beginPath();
					ctx.moveTo(d.x, d.y);
					ctx.lineTo(d.x, d.y + d.height);
					ctx.stroke();
				} else if (d.height === 0) {
					// <line key={idx} x1={d.x} y1={d.y} x2={d.x + d.width} y2={d.y + d.height} />
					ctx.beginPath();
					ctx.moveTo(d.x, d.y);
					ctx.lineTo(d.x + d.width, d.y + d.height);
					ctx.stroke();
				} else {
					ctx.beginPath();
					ctx.rect(d.x, d.y, d.width, d.height);
					ctx.closePath();
					ctx.fill();
					if (strokeKey !== "none") ctx.stroke();
				}
			});
		});
	});
}

function getWickData(props, xAccessor, xScale, yScale, plotData) {
	var classNameProp = props.classNames;
	var wickStrokeProp = props.wickStroke;
	var yAccessor = props.yAccessor;

	var wickStroke = (0, _utils.functor)(wickStrokeProp);
	var className = (0, _utils.functor)(classNameProp);
	var wickData = plotData.filter(function (d) {
		return (0, _utils.isDefined)(yAccessor(d).close);
	}).map(function (d) {
		// console.log(yAccessor);
		var ohlc = yAccessor(d);

		var x = Math.round(xScale(xAccessor(d))),
		    y1 = yScale(ohlc.high),
		    y2 = yScale(Math.max(ohlc.open, ohlc.close)),
		    y3 = yScale(Math.min(ohlc.open, ohlc.close)),
		    y4 = yScale(ohlc.low);

		return {
			x: x,
			y1: y1,
			y2: y2,
			y3: y3,
			y4: y4,
			className: className(ohlc),
			direction: ohlc.close - ohlc.open,
			stroke: wickStroke(ohlc)
		};
	});
	return wickData;
}

function getCandleData(props, xAccessor, xScale, yScale, plotData) {
	var classNames = props.classNames;
	var fillProp = props.fill;
	var strokeProp = props.stroke;
	var widthRatio = props.widthRatio;
	var yAccessor = props.yAccessor;

	var fill = (0, _utils.functor)(fillProp);
	var stroke = (0, _utils.functor)(strokeProp);
	// console.log(plotData);
	var width = xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)));
	var cw = width / (plotData.length - 1) * widthRatio;
	var candleWidth = Math.round(cw); // Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw);

	var offset = candleWidth === 1 ? 0 : 0.5 * cw;
	var candles = plotData.filter(function (d) {
		return (0, _utils.isDefined)(yAccessor(d).close);
	}).map(function (d) {
		var ohlc = yAccessor(d);
		var x = Math.round(xScale(xAccessor(d)) - offset),
		    y = yScale(Math.max(ohlc.open, ohlc.close)),
		    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
		    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down;
		return {
			// type: "line"
			x: x,
			y: y,
			height: height,
			width: candleWidth,
			className: className,
			fill: fill(ohlc),
			stroke: stroke(ohlc),
			direction: ohlc.close - ohlc.open
		};
	});
	return candles;
}

exports.default = CandlestickSeries;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Circle(props) {
	var className = props.className;
	var stroke = props.stroke;
	var strokeWidth = props.strokeWidth;
	var opacity = props.opacity;
	var fill = props.fill;
	var point = props.point;
	var r = props.r;

	var radius = (0, _utils.functor)(r)(point.datum);
	return _react2.default.createElement("circle", { className: className,
		cx: point.x, cy: point.y,
		stroke: stroke, strokeWidth: strokeWidth,
		fillOpacity: opacity, fill: fill, r: radius });
}

Circle.propTypes = {
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	point: _react.PropTypes.shape({
		x: _react.PropTypes.number.isRequired,
		y: _react.PropTypes.number.isRequired,
		datum: _react.PropTypes.object.isRequired
	}).isRequired,
	className: _react.PropTypes.string,
	strokeWidth: _react.PropTypes.number,
	r: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired
};

Circle.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-marker-circle"
};

Circle.drawOnCanvas = function (props, point, ctx) {
	var stroke = props.stroke;
	var fill = props.fill;
	var opacity = props.opacity;
	var strokeWidth = props.strokeWidth;


	ctx.strokeStyle = stroke;
	ctx.lineWidth = strokeWidth;

	if (fill !== "none") {
		ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
	}

	Circle.drawOnCanvasWithNoStateChange(props, point, ctx);
};

Circle.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
	var r = props.r;

	var radius = (0, _utils.functor)(r)(point.datum);

	ctx.moveTo(point.x, point.y);
	ctx.beginPath();
	ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.fill();
};

exports.default = Circle;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _OverlayBarSeries = __webpack_require__(324);

var _OverlayBarSeries2 = _interopRequireDefault(_OverlayBarSeries);

var _StraightLine = __webpack_require__(31);

var _StraightLine2 = _interopRequireDefault(_StraightLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElderRaySeries = function (_Component) {
	_inherits(ElderRaySeries, _Component);

	function ElderRaySeries(props) {
		_classCallCheck(this, ElderRaySeries);

		var _this = _possibleConstructorReturn(this, (ElderRaySeries.__proto__ || Object.getPrototypeOf(ElderRaySeries)).call(this, props));

		_this.yAccessorTop = _this.yAccessorTop.bind(_this);
		_this.yAccessorBullTop = _this.yAccessorBullTop.bind(_this);
		_this.yAccessorBearTop = _this.yAccessorBearTop.bind(_this);
		_this.yAccessorBullBottom = _this.yAccessorBullBottom.bind(_this);
		_this.yAccessorBearBottom = _this.yAccessorBearBottom.bind(_this);
		_this.yAccessorForBarBase = _this.yAccessorForBarBase.bind(_this);
		return _this;
	}

	_createClass(ElderRaySeries, [{
		key: "yAccessorTop",
		value: function yAccessorTop(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && Math.max(yAccessor(d).bullPower, 0);
		}
	}, {
		key: "yAccessorBullTop",
		value: function yAccessorBullTop(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && (yAccessor(d).bullPower > 0 ? yAccessor(d).bullPower : undefined);
		}
	}, {
		key: "yAccessorBearTop",
		value: function yAccessorBearTop(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && (yAccessor(d).bearPower > 0 ? yAccessor(d).bearPower : undefined);
		}
	}, {
		key: "yAccessorBullBottom",
		value: function yAccessorBullBottom(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && (yAccessor(d).bullPower < 0 ? 0 : undefined);
		}
	}, {
		key: "yAccessorBearBottom",
		value: function yAccessorBearBottom(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && (yAccessor(d).bullPower < 0 || yAccessor(d).bullPower * yAccessor(d).bearPower < 0 // bullPower is +ve and bearPower is -ve
			? Math.min(0, yAccessor(d).bullPower) : undefined);
		}
	}, {
		key: "yAccessorForBarBase",
		value: function yAccessorForBarBase(xScale, yScale, d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			var y = yAccessor(d) && Math.min(yAccessor(d).bearPower, 0);
			return yScale(y);
		}
	}, {
		key: "fillForEachBar",
		value: function fillForEachBar(d, yAccessorNumber) {
			return yAccessorNumber % 2 === 0 ? "#6BA583" : "#FF0000";
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var xScale = _props.xScale;
			var yScale = _props.yScale;
			var plotData = _props.plotData;
			var opacity = _props.opacity;


			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_OverlayBarSeries2.default, {
					xScale: xScale, yScale: yScale,
					baseAt: this.yAccessorForBarBase,
					className: "elderray-bar",
					stroke: false, fill: this.fillForEachBar,
					opacity: opacity,
					plotData: plotData,
					yAccessor: [this.yAccessorBullTop, this.yAccessorBearTop, this.yAccessorBullBottom, this.yAccessorBearBottom] }),
				_react2.default.createElement(_StraightLine2.default, { yValue: 0 })
			);
		}
	}]);

	return ElderRaySeries;
}(_react.Component);

ElderRaySeries.propTypes = {
	className: _react.PropTypes.string,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	calculator: _react.PropTypes.func.isRequired,
	plotData: _react.PropTypes.array,
	type: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	divergenceStroke: _react.PropTypes.bool
};

ElderRaySeries.defaultProps = {
	className: "react-stockcharts-elderray-series",
	zeroLineStroke: "#000000",
	zeroLineOpacity: 0.3,
	opacity: 1,
	divergenceStroke: false
};

exports.default = ElderRaySeries;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _StackedBarSeries = __webpack_require__(47);

var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupedBarSeries = function (_Component) {
	_inherits(GroupedBarSeries, _Component);

	function GroupedBarSeries(props) {
		_classCallCheck(this, GroupedBarSeries);

		var _this = _possibleConstructorReturn(this, (GroupedBarSeries.__proto__ || Object.getPrototypeOf(GroupedBarSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(GroupedBarSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var xAccessor = this.context.xAccessor;


			(0, _StackedBarSeries.drawOnCanvasHelper)(ctx, this.props, moreProps, xAccessor, _StackedBarSeries.identityStack, postProcessor);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;

			// return <g>{svgHelper(this.props, moreProps, xAccessor, identityStack)}</g>;

			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-grouped-bar-series" },
				(0, _StackedBarSeries.svgHelper)(this.props, moreProps, xAccessor, _StackedBarSeries.identityStack, postProcessor)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}]);

	return GroupedBarSeries;
}(_react.Component);

GroupedBarSeries.propTypes = {
	baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	direction: _react.PropTypes.oneOf(["up", "down"]).isRequired,
	stroke: _react.PropTypes.bool.isRequired,
	widthRatio: _react.PropTypes.number.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	xAccessor: _react.PropTypes.func,
	yAccessor: _react.PropTypes.arrayOf(_react.PropTypes.func),
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};
GroupedBarSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

GroupedBarSeries.defaultProps = _extends({}, _StackedBarSeries2.default.defaultProps, {
	widthRatio: 0.8,
	spaceBetweenBar: 5
});

function postProcessor(array) {
	return array.map(function (each) {
		return _extends({}, each, {
			x: each.x + each.offset - each.groupOffset,
			width: each.groupWidth
		});
	});
}

exports.default = GroupedBarSeries;

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Shape = __webpack_require__(52);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KagiSeries = function (_Component) {
	_inherits(KagiSeries, _Component);

	function KagiSeries(props) {
		_classCallCheck(this, KagiSeries);

		var _this = _possibleConstructorReturn(this, (KagiSeries.__proto__ || Object.getPrototypeOf(KagiSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(KagiSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var xAccessor = this.context.xAccessor;


			_drawOnCanvas(ctx, this.props, moreProps, xAccessor);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var _props = this.props;
			var className = _props.className;
			var stroke = _props.stroke;
			var fill = _props.fill;
			var strokeWidth = _props.strokeWidth;


			var paths = helper(plotData, xAccessor).map(function (each, i) {
				var dataSeries = (0, _d3Shape.line)().x(function (item) {
					return xScale(item[0]);
				}).y(function (item) {
					return yScale(item[1]);
				}).interpolate("step-before");
				return _react2.default.createElement("path", { key: i, d: dataSeries(each.plot), className: each.type,
					stroke: stroke[each.type], fill: fill[each.type], strokeWidth: strokeWidth });
			});
			return _react2.default.createElement(
				"g",
				{ className: className },
				paths
			);
		}
	}]);

	return KagiSeries;
}(_react.Component);

KagiSeries.propTypes = {
	className: _react.PropTypes.string,
	stroke: _react.PropTypes.object,
	fill: _react.PropTypes.object,
	strokeWidth: _react.PropTypes.number.isRequired,
	xAccessor: _react.PropTypes.func,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};
KagiSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

KagiSeries.defaultProps = {
	className: "react-stockcharts-kagi",
	strokeWidth: 2,
	stroke: {
		yang: "#6BA583",
		yin: "#E60000"
	},
	fill: {
		yang: "none",
		yin: "none"
	},
	currentValueStroke: "#000000"
};

function _drawOnCanvas(ctx, props, moreProps, xAccessor) {
	var stroke = props.stroke;
	var strokeWidth = props.strokeWidth;
	var currentValueStroke = props.currentValueStroke;
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;


	var paths = helper(plotData, xAccessor);

	var begin = true;

	paths.forEach(function (each) {
		ctx.strokeStyle = stroke[each.type];
		ctx.lineWidth = strokeWidth;

		ctx.beginPath();
		var prevX;
		each.plot.forEach(function (d) {
			var x = xScale(d[0]);
			var y = yScale(d[1]);

			if (begin) {
				ctx.moveTo(x, y);
				begin = false;
			} else {
				if ((0, _utils.isDefined)(prevX)) {
					ctx.lineTo(prevX, y);
				}
				ctx.lineTo(x, y);
			}
			prevX = x;
			// console.log(d);
		});
		ctx.stroke();
	});
	var lastPlot = paths[paths.length - 1].plot;
	var last = lastPlot[lastPlot.length - 1];
	ctx.beginPath();
	// ctx.strokeStyle = "black";
	ctx.lineWidth = 1;

	var x = xScale(last[0]);
	var y1 = yScale(last[2]);
	var y2 = yScale(last[3]);
	// console.log(last, x, y);

	ctx.moveTo(x, y1);
	ctx.lineTo(x + 10, y1);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = currentValueStroke;
	ctx.moveTo(x - 10, y2);
	ctx.lineTo(x, y2);
	ctx.stroke();
}

function helper(plotData, xAccessor) {
	var kagiLine = [];
	var kagi = {};
	var d = plotData[0];
	var idx = xAccessor(d);

	for (var i = 0; i < plotData.length; i++) {
		d = plotData[i];

		if ((0, _utils.isNotDefined)(d.close)) continue;
		if ((0, _utils.isNotDefined)(kagi.type)) kagi.type = d.startAs;
		if ((0, _utils.isNotDefined)(kagi.plot)) kagi.plot = [];

		idx = xAccessor(d);
		kagi.plot.push([idx, d.open]);

		if ((0, _utils.isDefined)(d.changeTo)) {
			kagi.plot.push([idx, d.changePoint]);
			kagi.added = true;
			kagiLine.push(kagi);

			kagi = {
				type: d.changeTo,
				plot: [],
				added: false
			};
			kagi.plot.push([idx, d.changePoint]);
		}
	}

	if (!kagi.added) {
		kagi.plot.push([idx, d.close, d.current, d.reverseAt]);
		kagiLine.push(kagi);
	}

	// console.log(d.reverseAt);

	return kagiLine;
}

exports.default = KagiSeries;

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BarSeries = __webpack_require__(105);

var _BarSeries2 = _interopRequireDefault(_BarSeries);

var _LineSeries = __webpack_require__(26);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _StraightLine = __webpack_require__(31);

var _StraightLine2 = _interopRequireDefault(_StraightLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MACDSeries = function (_Component) {
	_inherits(MACDSeries, _Component);

	function MACDSeries(props) {
		_classCallCheck(this, MACDSeries);

		var _this = _possibleConstructorReturn(this, (MACDSeries.__proto__ || Object.getPrototypeOf(MACDSeries)).call(this, props));

		_this.yAccessorForMACD = _this.yAccessorForMACD.bind(_this);
		_this.yAccessorForSignal = _this.yAccessorForSignal.bind(_this);
		_this.yAccessorForDivergence = _this.yAccessorForDivergence.bind(_this);
		_this.yAccessorForDivergenceBase = _this.yAccessorForDivergenceBase.bind(_this);
		return _this;
	}

	_createClass(MACDSeries, [{
		key: "yAccessorForMACD",
		value: function yAccessorForMACD(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).macd;
		}
	}, {
		key: "yAccessorForSignal",
		value: function yAccessorForSignal(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).signal;
		}
	}, {
		key: "yAccessorForDivergence",
		value: function yAccessorForDivergence(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).divergence;
		}
	}, {
		key: "yAccessorForDivergenceBase",
		value: function yAccessorForDivergenceBase(xScale, yScale /* , d */) {
			return yScale(0);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var type = _props.type;
			var opacity = _props.opacity;
			var divergenceStroke = _props.divergenceStroke;
			var calculator = _props.calculator;

			var stroke = calculator.stroke();
			var fill = calculator.fill();
			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_LineSeries2.default, {
					yAccessor: this.yAccessorForMACD,
					stroke: stroke.macd, fill: "none",
					type: type }),
				_react2.default.createElement(_LineSeries2.default, {
					yAccessor: this.yAccessorForSignal,
					stroke: stroke.signal, fill: "none",
					type: type }),
				_react2.default.createElement(_BarSeries2.default, {
					baseAt: this.yAccessorForDivergenceBase,
					className: "macd-divergence",
					widthRatio: 0.5,
					stroke: divergenceStroke, fill: fill.divergence, opacity: opacity,
					yAccessor: this.yAccessorForDivergence }),
				getHorizontalLine(this.props)
			);
		}
	}]);

	return MACDSeries;
}(_react.Component);

function getHorizontalLine(props) {

	/* eslint-disable react/prop-types */
	var zeroLineStroke = props.zeroLineStroke;
	var zeroLineOpacity = props.zeroLineOpacity;
	/* eslint-enable react/prop-types */

	return _react2.default.createElement(_StraightLine2.default, {
		stroke: zeroLineStroke, opacity: zeroLineOpacity,
		yValue: 0 });
}

MACDSeries.propTypes = {
	className: _react.PropTypes.string,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	calculator: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]).isRequired,
	plotData: _react.PropTypes.array,
	type: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	divergenceStroke: _react.PropTypes.bool
};

MACDSeries.defaultProps = {
	className: "react-stockcharts-macd-series",
	zeroLineStroke: "#000000",
	zeroLineOpacity: 0.3,
	opacity: 0.6,
	divergenceStroke: false
};

exports.default = MACDSeries;

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Collection = __webpack_require__(16);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OHLCSeries = function (_Component) {
	_inherits(OHLCSeries, _Component);

	function OHLCSeries(props) {
		_classCallCheck(this, OHLCSeries);

		var _this = _possibleConstructorReturn(this, (OHLCSeries.__proto__ || Object.getPrototypeOf(OHLCSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(OHLCSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var yAccessor = this.props.yAccessor;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;


			var barData = getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);
			_drawOnCanvas(ctx, barData);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var className = _props.className;
			var yAccessor = _props.yAccessor;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;


			var barData = getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);

			var strokeWidth = barData.strokeWidth;
			var bars = barData.bars;


			return _react2.default.createElement(
				"g",
				{ className: className },
				bars.map(function (d, idx) {
					return _react2.default.createElement("path", { key: idx,
						className: d.className, stroke: d.stroke, strokeWidth: strokeWidth,
						d: "M" + d.openX1 + " " + d.openY + " L" + d.openX2 + " " + d.openY + " M" + d.x + " " + d.y1 + " L" + d.x + " " + d.y2 + " M" + d.closeX1 + " " + d.closeY + " L" + d.closeX2 + " " + d.closeY });
				})
			);
		}
	}]);

	return OHLCSeries;
}(_react.Component);

OHLCSeries.propTypes = {
	className: _react.PropTypes.string,
	classNames: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	stroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	yAccessor: _react.PropTypes.func.isRequired
};

OHLCSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

OHLCSeries.defaultProps = {
	className: "react-stockcharts-ohlc",
	yAccessor: function yAccessor(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	},
	classNames: function classNames(d) {
		return (0, _utils.isDefined)(d.absoluteChange) ? d.absoluteChange > 0 ? "up" : "down" : "firstbar";
	},
	stroke: function stroke(d) {
		return (0, _utils.isDefined)(d.absoluteChange) ? d.absoluteChange > 0 ? "#6BA583" : "#FF0000" : "#000000";
	},
	opacity: 1
};

function _drawOnCanvas(ctx, barData) {
	var strokeWidth = barData.strokeWidth;
	var bars = barData.bars;


	var wickNest = (0, _d3Collection.nest)().key(function (d) {
		return d.stroke;
	}).entries(bars);

	ctx.lineWidth = strokeWidth;

	wickNest.forEach(function (outer) {
		var key = outer.key;
		var values = outer.values;

		ctx.strokeStyle = key;
		values.forEach(function (d) {
			ctx.beginPath();
			ctx.moveTo(d.x, d.y1);
			ctx.lineTo(d.x, d.y2);

			ctx.moveTo(d.openX1, d.openY);
			ctx.lineTo(d.openX2, d.openY);

			ctx.moveTo(d.closeX1, d.closeY);
			ctx.lineTo(d.closeX2, d.closeY);

			ctx.stroke();
		});
	});
}

function getOHLCBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var classNamesProp = props.classNames;
	var strokeProp = props.stroke;


	var strokeFunc = (0, _utils.functor)(strokeProp);
	var classNameFunc = (0, _utils.functor)(classNamesProp);

	var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));

	var barWidth = Math.max(1, Math.round(width / (plotData.length - 1) / 2) - 1.5);
	var strokeWidth = Math.min(barWidth, 6);

	var bars = plotData.filter(function (d) {
		return (0, _utils.isDefined)(yAccessor(d).close);
	}).map(function (d) {
		var ohlc = yAccessor(d),
		    x = Math.round(xScale(xAccessor(d))),
		    y1 = yScale(ohlc.high),
		    y2 = yScale(ohlc.low),
		    openX1 = x - barWidth,
		    openX2 = x + strokeWidth / 2,
		    openY = yScale(ohlc.open),
		    closeX1 = x - strokeWidth / 2,
		    closeX2 = x + barWidth,
		    closeY = yScale(ohlc.close),
		    className = classNameFunc(d),
		    stroke = strokeFunc(d);
		// console.log(d);
		return { x: x, y1: y1, y2: y2, openX1: openX1, openX2: openX2, openY: openY, closeX1: closeX1, closeX2: closeX2, closeY: closeY, stroke: stroke, className: className };
	});
	return { barWidth: barWidth, strokeWidth: strokeWidth, bars: bars };
}

exports.default = OHLCSeries;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Array = __webpack_require__(9);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _StackedBarSeries = __webpack_require__(47);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverlayBarSeries = function (_Component) {
	_inherits(OverlayBarSeries, _Component);

	function OverlayBarSeries(props) {
		_classCallCheck(this, OverlayBarSeries);

		var _this = _possibleConstructorReturn(this, (OverlayBarSeries.__proto__ || Object.getPrototypeOf(OverlayBarSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(OverlayBarSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var yAccessor = this.props.yAccessor;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;


			var bars = getBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);

			(0, _StackedBarSeries.drawOnCanvas2)(this.props, ctx, bars);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var yAccessor = this.props.yAccessor;
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;


			var bars = getBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);
			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-bar-series" },
				(0, _StackedBarSeries.getBarsSVG2)(this.props, bars)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}]);

	return OverlayBarSeries;
}(_react.Component);

OverlayBarSeries.propTypes = {
	baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	direction: _react.PropTypes.oneOf(["up", "down"]).isRequired,
	stroke: _react.PropTypes.bool.isRequired,
	widthRatio: _react.PropTypes.number.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	xAccessor: _react.PropTypes.func,
	yAccessor: _react.PropTypes.arrayOf(_react.PropTypes.func),
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};

OverlayBarSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

OverlayBarSeries.defaultProps = {
	baseAt: function baseAt(xScale, yScale /* , d*/) {
		return (0, _utils.first)(yScale.range());
	},
	direction: "up",
	className: "bar",
	stroke: false,
	fill: "#4682B4",
	opacity: 1,
	widthRatio: 0.5
};

function getBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var baseAt = props.baseAt;
	var className = props.className;
	var fill = props.fill;
	var stroke = props.stroke;
	var widthRatio = props.widthRatio;


	var getClassName = (0, _utils.functor)(className);
	var getFill = (0, _utils.functor)(fill);
	var getBase = (0, _utils.functor)(baseAt);

	var width = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData))));

	var bw = width / (plotData.length - 1) * widthRatio;
	var barWidth = Math.round(bw);
	var offset = barWidth === 1 ? 0 : 0.5 * barWidth;

	// console.log(xScale.domain(), yScale.domain());

	var bars = plotData.map(function (d) {
		var innerBars = yAccessor.map(function (eachYAccessor, i) {
			var yValue = eachYAccessor(d);
			if ((0, _utils.isNotDefined)(yValue)) return undefined;

			var xValue = xAccessor(d);
			var x = Math.round(xScale(xValue)) - offset;
			var y = yScale(yValue);
			// console.log(yValue, y, xValue, x)
			return {
				width: barWidth,
				x: x,
				y: y,
				className: getClassName(d, i),
				stroke: stroke ? getFill(d, i) : "none",
				fill: getFill(d, i),
				i: i
			};
		}).filter(function (yValue) {
			return (0, _utils.isDefined)(yValue);
		});

		var b = getBase(xScale, yScale, d);
		var h;
		for (var i = innerBars.length - 1; i >= 0; i--) {
			h = b - innerBars[i].y;
			if (h < 0) {
				innerBars[i].y = b;
				h = -1 * h;
			}
			innerBars[i].height = h;
			b = innerBars[i].y;
		}
		return innerBars;
	});

	return (0, _d3Array.merge)(bars);
}

exports.default = OverlayBarSeries;

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PointAndFigureSeries = function (_Component) {
	_inherits(PointAndFigureSeries, _Component);

	function PointAndFigureSeries(props) {
		_classCallCheck(this, PointAndFigureSeries);

		var _this = _possibleConstructorReturn(this, (PointAndFigureSeries.__proto__ || Object.getPrototypeOf(PointAndFigureSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(PointAndFigureSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;


			var columns = getColumns(xScale, xAccessor, yScale, plotData);

			_drawOnCanvas(ctx, this.props, columns);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var _props = this.props;
			var stroke = _props.stroke;
			var fill = _props.fill;
			var strokeWidth = _props.strokeWidth;
			var className = _props.className;


			var columns = getColumns(xScale, xAccessor, yScale, plotData);

			return _react2.default.createElement(
				"g",
				{ className: className },
				columns.map(function (col, idx) {
					return _react2.default.createElement(
						"g",
						{ key: idx, className: col.className, transform: "translate(" + col.offset[0] + ", " + col.offset[1] + ")" },
						col.boxes.map(function (box, i) {
							if (col.direction > 0) {
								return _react2.default.createElement(
									"g",
									{ key: idx + "-" + i },
									_react2.default.createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
										x1: 0, y1: box.open, x2: box.columnWidth, y2: box.close }),
									_react2.default.createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
										x1: 0, y1: box.close, x2: box.columnWidth, y2: box.open })
								);
							}
							return _react2.default.createElement("ellipse", { key: idx + "-" + i,
								className: "down", strokeWidth: strokeWidth, stroke: stroke.down, fill: fill.down,
								cx: box.columnWidth / 2, cy: (box.open + box.close) / 2,
								rx: box.columnWidth / 2, ry: box.boxHeight / 2 });
						})
					);
				})
			);
		}
	}]);

	return PointAndFigureSeries;
}(_react.Component);

PointAndFigureSeries.propTypes = {
	className: _react.PropTypes.string,
	strokeWidth: _react.PropTypes.number.isRequired,
	stroke: _react.PropTypes.object.isRequired,
	fill: _react.PropTypes.object.isRequired
};

PointAndFigureSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

PointAndFigureSeries.defaultProps = {
	className: "react-stockcharts-point-and-figure",
	strokeWidth: 1,
	stroke: {
		up: "#6BA583",
		down: "#FF0000"
	},
	fill: {
		up: "none",
		down: "none"
	}
};

function _drawOnCanvas(ctx, props, columns) {
	var stroke = props.stroke;
	var fill = props.fill;
	var strokeWidth = props.strokeWidth;


	ctx.lineWidth = strokeWidth;

	columns.forEach(function (col) {
		var _col$offset = _slicedToArray(col.offset, 2);

		var offsetX = _col$offset[0];
		var offsetY = _col$offset[1];

		col.boxes.forEach(function (box) {
			if (col.direction > 0) {
				ctx.fillStyle = fill.up;
				ctx.strokeStyle = stroke.up;

				ctx.beginPath();

				ctx.moveTo(offsetX, offsetY + box.open);
				ctx.lineTo(offsetX + box.columnWidth, offsetY + box.close);
				ctx.moveTo(offsetX, offsetY + box.close);
				ctx.lineTo(offsetX + box.columnWidth, offsetY + box.open);

				ctx.stroke();
			} else {
				ctx.fillStyle = fill.down;
				ctx.strokeStyle = stroke.down;

				ctx.beginPath();

				var x = offsetX + box.columnWidth / 2;
				var y = offsetY + box.open + box.boxHeight / 2;
				var rx = box.columnWidth / 2;
				var ry = box.boxHeight / 2;


				ctx.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
				ctx.stroke();
			}
		});
	});

	ctx.stroke();
}

function getColumns(xScale, xAccessor, yScale, plotData) {

	var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));

	var columnWidth = width / (plotData.length - 1);

	var anyBox,
	    j = 0;
	while ((0, _utils.isNotDefined)(anyBox)) {
		if ((0, _utils.isDefined)(plotData[j].close)) {
			anyBox = plotData[j].boxes[0];
		}
		j++;
	}

	var boxHeight = Math.abs(yScale(anyBox.open) - yScale(anyBox.close));

	var columns = plotData.filter(function (d) {
		return (0, _utils.isDefined)(d.close);
	}).map(function (d) {
		var boxes = d.boxes.map(function (box) {
			return {
				columnWidth: columnWidth,
				boxHeight: boxHeight,
				open: yScale(box.open),
				close: yScale(box.close)
			};
		});

		var xOffset = xScale(xAccessor(d)) - columnWidth / 2;
		return {
			boxes: boxes,
			direction: d.direction,
			offset: [xOffset, 0]
		};
	});
	return columns;
}

exports.default = PointAndFigureSeries;

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LineSeries = __webpack_require__(26);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _StraightLine = __webpack_require__(31);

var _StraightLine2 = _interopRequireDefault(_StraightLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSISeries = function (_Component) {
	_inherits(RSISeries, _Component);

	function RSISeries() {
		_classCallCheck(this, RSISeries);

		return _possibleConstructorReturn(this, (RSISeries.__proto__ || Object.getPrototypeOf(RSISeries)).apply(this, arguments));
	}

	_createClass(RSISeries, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var calculator = _props.calculator;
			var stroke = _props.stroke;
			var type = _props.type;

			var yAccessor = calculator.accessor();
			var overSold = calculator.overSold();
			var middle = calculator.middle();
			var overBought = calculator.overBought();

			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_LineSeries2.default, {
					className: className,
					yAccessor: yAccessor,
					stroke: stroke.line, fill: "none",
					type: type }),
				getHorizontalLine(this.props, overSold, stroke.top),
				getHorizontalLine(this.props, middle, stroke.middle),
				getHorizontalLine(this.props, overBought, stroke.bottom)
			);
		}
	}]);

	return RSISeries;
}(_react.Component);

function getHorizontalLine(props, yValue, stroke) {
	/* eslint-disable react/prop-types */
	var yAccessor = props.yAccessor;
	/* eslint-enable react/prop-types */

	return _react2.default.createElement(_StraightLine2.default, {
		stroke: stroke, opacity: 0.3,
		yAccessor: yAccessor,
		yValue: yValue });
}

RSISeries.propTypes = {
	className: _react.PropTypes.string,

	calculator: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	plotData: _react.PropTypes.array,
	stroke: _react.PropTypes.object,
	type: _react.PropTypes.string
};

RSISeries.defaultProps = {
	className: "react-stockcharts-rsi-series",
	stroke: {
		line: "#000000",
		top: "#964B00",
		middle: "#000000",
		bottom: "#964B00"
	}
};

exports.default = RSISeries;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenkoSeries = function (_Component) {
	_inherits(RenkoSeries, _Component);

	function RenkoSeries(props) {
		_classCallCheck(this, RenkoSeries);

		var _this = _possibleConstructorReturn(this, (RenkoSeries.__proto__ || Object.getPrototypeOf(RenkoSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(RenkoSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var yAccessor = this.props.yAccessor;


			var candles = getRenko(this.props, plotData, xScale, xAccessor, yScale, yAccessor);

			_drawOnCanvas(ctx, candles);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;
			var xScale = moreProps.xScale;
			var yScale = moreProps.chartConfig.yScale;
			var plotData = moreProps.plotData;
			var yAccessor = this.props.yAccessor;


			var candles = getRenko(this.props, plotData, xScale, xAccessor, yScale, yAccessor).map(function (each, idx) {
				return _react2.default.createElement("rect", { key: idx, className: each.className,
					fill: each.fill,
					x: each.x,
					y: each.y,
					width: each.width,
					height: each.height });
			});

			return _react2.default.createElement(
				"g",
				null,
				_react2.default.createElement(
					"g",
					{ className: "candle" },
					candles
				)
			);
		}
	}]);

	return RenkoSeries;
}(_react.Component);

RenkoSeries.propTypes = {
	classNames: _react.PropTypes.shape({
		up: _react.PropTypes.string,
		down: _react.PropTypes.string
	}),
	stroke: _react.PropTypes.shape({
		up: _react.PropTypes.string,
		down: _react.PropTypes.string
	}),
	fill: _react.PropTypes.shape({
		up: _react.PropTypes.string,
		down: _react.PropTypes.string
	}),
	yAccessor: _react.PropTypes.func.isRequired
};
RenkoSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

RenkoSeries.defaultProps = {
	classNames: {
		up: "up",
		down: "down"
	},
	stroke: {
		up: "none",
		down: "none"
	},
	fill: {
		up: "#6BA583",
		down: "#E60000",
		partial: "#4682B4"
	},
	yAccessor: function yAccessor(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	}
};

function _drawOnCanvas(ctx, renko) {
	renko.forEach(function (d) {
		ctx.beginPath();

		ctx.strokeStyle = d.stroke;
		ctx.fillStyle = d.fill;

		ctx.rect(d.x, d.y, d.width, d.height);
		ctx.closePath();
		ctx.fill();
	});
}

function getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor) {
	var classNames = props.classNames;
	var fill = props.fill;

	var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));

	var candleWidth = width / (plotData.length - 1);
	var candles = plotData.filter(function (d) {
		return (0, _utils.isDefined)(yAccessor(d).close);
	}).map(function (d) {
		var ohlc = yAccessor(d);
		var x = xScale(xAccessor(d)) - 0.5 * candleWidth,
		    y = yScale(Math.max(ohlc.open, ohlc.close)),
		    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
		    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down,
		    svgfill = ohlc.open <= ohlc.close ? fill.up : fill.down;

		if (!d.fullyFormed) {
			svgfill = fill.partial;
		}
		return {
			className: className,
			fill: svgfill,
			x: x,
			y: y,
			height: height,
			width: candleWidth
		};
	});
	return candles;
}

exports.default = RenkoSeries;

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Collection = __webpack_require__(16);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScatterSeries = function (_Component) {
	_inherits(ScatterSeries, _Component);

	function ScatterSeries(props) {
		_classCallCheck(this, ScatterSeries);

		var _this = _possibleConstructorReturn(this, (ScatterSeries.__proto__ || Object.getPrototypeOf(ScatterSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(ScatterSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var xAccessor = this.context.xAccessor;


			var points = helper(this.props, moreProps, xAccessor);

			_drawOnCanvas(ctx, this.props, points);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var className = _props.className;
			var markerProps = _props.markerProps;
			var xAccessor = this.context.xAccessor;


			var points = helper(this.props, moreProps, xAccessor);

			return _react2.default.createElement(
				"g",
				{ className: className },
				points.map(function (point, idx) {
					var Marker = point.marker;

					return _react2.default.createElement(Marker, _extends({ key: idx }, markerProps, { point: point }));
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}]);

	return ScatterSeries;
}(_react.Component);

ScatterSeries.propTypes = {
	className: _react.PropTypes.string,
	yAccessor: _react.PropTypes.func.isRequired,
	marker: _react.PropTypes.func,
	markerProvider: _react.PropTypes.func,
	markerProps: _react.PropTypes.object
};

ScatterSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired
};

ScatterSeries.defaultProps = {
	className: "react-stockcharts-scatter"
};

function helper(props, moreProps, xAccessor) {
	var yAccessor = props.yAccessor;
	var Marker = props.marker;
	var markerProvider = props.markerProvider;
	var markerProps = props.markerProps;
	var xScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;


	if (!(markerProvider || Marker)) throw new Error("required prop, either marker or markerProvider missing");

	return plotData.map(function (d) {

		if (markerProvider) Marker = markerProvider(d);

		var mProps = _extends({}, Marker.defaultProps, markerProps);

		var fill = (0, _utils.functor)(mProps.fill);
		var stroke = (0, _utils.functor)(mProps.stroke);

		return {
			x: xScale(xAccessor(d)),
			y: yScale(yAccessor(d)),
			fill: (0, _utils.hexToRGBA)(fill(d), mProps.opacity),
			stroke: stroke(d),
			datum: d,
			marker: Marker
		};
	});
}

function _drawOnCanvas(ctx, props, points) {
	var markerProps = props.markerProps;


	var nest = (0, _d3Collection.nest)().key(function (d) {
		return d.fill;
	}).key(function (d) {
		return d.stroke;
	}).entries(points);

	nest.forEach(function (fillGroup) {
		var fillKey = fillGroup.key;
		var fillValues = fillGroup.values;


		if (fillKey !== "none") {
			ctx.fillStyle = fillKey;
		}

		fillValues.forEach(function (strokeGroup) {
			// var { key: strokeKey, values: strokeValues } = strokeGroup;
			var strokeValues = strokeGroup.values;


			strokeValues.forEach(function (point) {
				var marker = point.marker;

				marker.drawOnCanvas(_extends({}, marker.defaultProps, markerProps, { fill: fillKey }), point, ctx);
			});
		});
	});
}

exports.default = ScatterSeries;

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LineSeries = __webpack_require__(26);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _StraightLine = __webpack_require__(31);

var _StraightLine2 = _interopRequireDefault(_StraightLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StochasticSeries = function (_Component) {
	_inherits(StochasticSeries, _Component);

	function StochasticSeries(props) {
		_classCallCheck(this, StochasticSeries);

		var _this = _possibleConstructorReturn(this, (StochasticSeries.__proto__ || Object.getPrototypeOf(StochasticSeries)).call(this, props));

		_this.yAccessorForD = _this.yAccessorForD.bind(_this);
		_this.yAccessorForK = _this.yAccessorForK.bind(_this);
		return _this;
	}

	_createClass(StochasticSeries, [{
		key: "yAccessorForD",
		value: function yAccessorForD(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).D;
		}
	}, {
		key: "yAccessorForK",
		value: function yAccessorForK(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).K;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var calculator = _props.calculator;
			var stroke = _props.stroke;
			var type = _props.type;

			var seriesStroke = calculator.stroke();
			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_LineSeries2.default, { yAccessor: this.yAccessorForD,
					stroke: seriesStroke.D, fill: "none",
					type: type }),
				_react2.default.createElement(_LineSeries2.default, { yAccessor: this.yAccessorForK,
					stroke: seriesStroke.K, fill: "none",
					type: type }),
				getHorizontalLine(this.props, calculator.overSold(), stroke.top),
				getHorizontalLine(this.props, calculator.middle(), stroke.middle),
				getHorizontalLine(this.props, calculator.overBought(), stroke.bottom)
			);
		}
	}]);

	return StochasticSeries;
}(_react.Component);

function getHorizontalLine(props, yValue, stroke) {

	/* eslint-disable react/prop-types */
	var yAccessor = props.yAccessor;
	/* eslint-enable react/prop-types */

	return _react2.default.createElement(_StraightLine2.default, {
		stroke: stroke, opacity: 0.3,
		yAccessor: yAccessor,
		yValue: yValue });
}

StochasticSeries.propTypes = {
	className: _react.PropTypes.string,
	calculator: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	plotData: _react.PropTypes.array,
	stroke: _react.PropTypes.object,
	type: _react.PropTypes.string
};

StochasticSeries.defaultProps = {
	className: "react-stockcharts-stochastic-series",
	stroke: {
		top: "#964B00",
		middle: "#000000",
		bottom: "#964B00"
	}
};

exports.default = StochasticSeries;

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Array = __webpack_require__(9);

var _d3Collection = __webpack_require__(16);

var _d3Scale = __webpack_require__(14);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VolumeProfileSeries = function (_Component) {
	_inherits(VolumeProfileSeries, _Component);

	function VolumeProfileSeries(props) {
		_classCallCheck(this, VolumeProfileSeries);

		var _this = _possibleConstructorReturn(this, (VolumeProfileSeries.__proto__ || Object.getPrototypeOf(VolumeProfileSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(VolumeProfileSeries, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _context = this.context;
			var xAccessor = _context.xAccessor;
			var width = _context.width;

			var _helper = helper(this.props, moreProps, xAccessor, width);

			var rects = _helper.rects;
			var sessionBg = _helper.sessionBg;


			_drawOnCanvas(ctx, this.props, rects, sessionBg);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				canvasToDraw: _GenericChartComponent.getAxisCanvas,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnPan: true
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var className = _props.className;
			var opacity = _props.opacity;
			var _props2 = this.props;
			var showSessionBackground = _props2.showSessionBackground;
			var sessionBackGround = _props2.sessionBackGround;
			var sessionBackGroundOpacity = _props2.sessionBackGroundOpacity;
			var _context2 = this.context;
			var xAccessor = _context2.xAccessor;
			var width = _context2.width;

			var _helper2 = helper(this.props, moreProps, xAccessor, width);

			var rects = _helper2.rects;
			var sessionBg = _helper2.sessionBg;


			var sessionBgSvg = showSessionBackground ? sessionBg.map(function (d, idx) {
				return _react2.default.createElement("rect", _extends({ key: idx }, d, { opacity: sessionBackGroundOpacity, fill: sessionBackGround }));
			}) : null;

			return _react2.default.createElement(
				"g",
				{ className: className },
				sessionBgSvg,
				rects.map(function (d, i) {
					return _react2.default.createElement(
						"g",
						{ key: i },
						_react2.default.createElement("rect", { x: d.x, y: d.y,
							width: d.w1, height: d.height,
							fill: d.fill1, stroke: d.stroke1, fillOpacity: opacity }),
						_react2.default.createElement("rect", { x: d.x + d.w1, y: d.y,
							width: d.w2, height: d.height,
							fill: d.fill2, stroke: d.stroke2, fillOpacity: opacity })
					);
				})
			);
		}
	}]);

	return VolumeProfileSeries;
}(_react.Component);

VolumeProfileSeries.propTypes = {
	className: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array,
	showSessionBackground: _react.PropTypes.bool,
	sessionBackGround: _react.PropTypes.string,
	sessionBackGroundOpacity: _react.PropTypes.number
};

VolumeProfileSeries.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired,
	width: _react.PropTypes.number.isRequired
};

VolumeProfileSeries.defaultProps = {
	opacity: 0.5,
	className: "line ",
	bins: 20,
	maxProfileWidthPercent: 50,
	source: function source(d) {
		return d.close;
	},
	volume: function volume(d) {
		return d.volume;
	},
	absoluteChange: function absoluteChange(d) {
		return d.absoluteChange;
	},
	bySession: false,
	/* eslint-disable no-unused-vars */
	sessionStart: function sessionStart(_ref) {
		var d = _ref.d;
		var i = _ref.i;
		var plotData = _ref.plotData;
		return d.idx.startOfMonth;
	},
	/* eslint-enable no-unused-vars */
	orient: "left",
	fill: function fill(_ref2) {
		var type = _ref2.type;
		return type === "up" ? "#6BA583" : "#FF0000";
	},
	// // fill: ({ type }) => { var c = type === "up" ? "#6BA583" : "#FF0000"; console.log(type, c); return c },
	// stroke: ({ type }) =>  type === "up" ? "#6BA583" : "#FF0000",
	// stroke: "none",
	stroke: "#FFFFFF",
	showSessionBackground: false,
	sessionBackGround: "#4682B4",
	sessionBackGroundOpacity: 0.3,
	partialStartOK: false,
	partialEndOK: true
};

function helper(props, moreProps, xAccessor, width) {
	var realXScale = moreProps.xScale;
	var yScale = moreProps.chartConfig.yScale;
	var plotData = moreProps.plotData;
	var sessionStart = props.sessionStart;
	var bySession = props.bySession;
	var partialStartOK = props.partialStartOK;
	var partialEndOK = props.partialEndOK;
	var bins = props.bins;
	var maxProfileWidthPercent = props.maxProfileWidthPercent;
	var source = props.source;
	var volume = props.volume;
	var absoluteChange = props.absoluteChange;
	var orient = props.orient;
	var fill = props.fill;
	var stroke = props.stroke;


	var sessionBuilder = (0, _utils.accumulatingWindow)().discardTillStart(!partialStartOK).discardTillEnd(!partialEndOK).accumulateTill(function (d, i) {
		return sessionStart({ d: d, i: i, plotData: plotData });
	}).accumulator(_utils.identity);

	var dx = plotData.length > 1 ? realXScale(xAccessor(plotData[1])) - realXScale(xAccessor((0, _utils.head)(plotData))) : 0;

	var sessions = bySession ? sessionBuilder(plotData) : [plotData];

	var allRects = sessions.map(function (session) {

		var begin = bySession ? realXScale(xAccessor((0, _utils.head)(session))) : 0;
		var finish = bySession ? realXScale(xAccessor((0, _utils.last)(session))) : width;
		var sessionWidth = finish - begin + dx;

		// console.log(session)

		/* var histogram = d3.layout.histogram()
  		.value(source)
  		.bins(bins);*/

		var histogram2 = (0, _d3Array.histogram)()
		// .domain(xScale.domain())
		.value(source).thresholds(bins);

		// console.log(bins, histogram(session))
		// console.log(bins, histogram2(session))
		var rollup = (0, _d3Collection.nest)().key(function (d) {
			return d.direction;
		}).sortKeys(orient === "right" ? _d3Array.descending : _d3Array.ascending).rollup(function (leaves) {
			return (0, _d3Array.sum)(leaves, function (d) {
				return d.volume;
			});
		});

		var values = histogram2(session);
		// console.log("values", values)

		var volumeInBins = values.map(function (arr) {
			return arr.map(function (d) {
				return absoluteChange(d) > 0 ? { direction: "up", volume: volume(d) } : { direction: "down", volume: volume(d) };
			});
		}).map(function (arr) {
			return rollup.entries(arr);
		});

		// console.log("volumeInBins", volumeInBins)
		var volumeValues = volumeInBins.map(function (each) {
			return (0, _d3Array.sum)(each.map(function (d) {
				return d.value;
			}));
		});

		// console.log("volumeValues", volumeValues)
		var base = function base(xScale) {
			return (0, _utils.head)(xScale.range());
		};

		var _ref3 = orient === "right" ? [begin, begin + sessionWidth * maxProfileWidthPercent / 100] : [finish, finish - sessionWidth * (100 - maxProfileWidthPercent) / 100];

		var _ref4 = _slicedToArray(_ref3, 2);

		var start = _ref4[0];
		var end = _ref4[1];


		var xScale = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(volumeValues)]).range([start, end]);

		// console.log(xScale.domain())

		var totalVolumes = volumeInBins.map(function (volumes) {

			var totalVolume = (0, _d3Array.sum)(volumes, function (d) {
				return d.value;
			});
			var totalVolumeX = xScale(totalVolume);
			var width = base(xScale) - totalVolumeX;
			var x = width < 0 ? totalVolumeX + width : totalVolumeX;

			var ws = volumes.map(function (d) {
				return {
					type: d.key,
					width: d.value * Math.abs(width) / totalVolume
				};
			});

			return { x: x, ws: ws, totalVolumeX: totalVolumeX };
		});
		// console.log("totalVolumes", totalVolumes)

		var rects = (0, _d3Array.zip)(values, totalVolumes).map(function (_ref5) {
			var _ref6 = _slicedToArray(_ref5, 2);

			var d = _ref6[0];
			var _ref6$ = _ref6[1];
			var x = _ref6$.x;
			var ws = _ref6$.ws;

			var w1 = ws[0] || { type: "up", width: 0 };
			var w2 = ws[1] || { type: "down", width: 0 };

			return {
				// y: yScale(d.x + d.dx),
				y: yScale(d.x1),
				// height: yScale(d.x - d.dx) - yScale(d.x),
				height: yScale(d.x1) - yScale(d.x0),
				x: x,
				width: width,
				w1: w1.width,
				w2: w2.width,
				stroke1: (0, _utils.functor)(stroke)(w1),
				stroke2: (0, _utils.functor)(stroke)(w2),
				fill1: (0, _utils.functor)(fill)(w1),
				fill2: (0, _utils.functor)(fill)(w2)
			};
		});

		// console.log("rects", rects)

		var sessionBg = {
			x: begin,
			y: (0, _utils.last)(rects).y,
			height: (0, _utils.head)(rects).y - (0, _utils.last)(rects).y + (0, _utils.head)(rects).height,
			width: sessionWidth
		};

		return { rects: rects, sessionBg: sessionBg };
	});

	return {
		rects: (0, _d3Array.merge)(allRects.map(function (d) {
			return d.rects;
		})),
		sessionBg: allRects.map(function (d) {
			return d.sessionBg;
		})
	};
}

function _drawOnCanvas(ctx, props, rects, sessionBg) {
	var opacity = props.opacity;
	var sessionBackGround = props.sessionBackGround;
	var sessionBackGroundOpacity = props.sessionBackGroundOpacity;
	var showSessionBackground = props.showSessionBackground;

	// var { rects, sessionBg } = helper(props, xScale, yScale, plotData);

	if (showSessionBackground) {
		ctx.fillStyle = (0, _utils.hexToRGBA)(sessionBackGround, sessionBackGroundOpacity);

		sessionBg.forEach(function (each) {
			var x = each.x;
			var y = each.y;
			var height = each.height;
			var width = each.width;


			ctx.beginPath();
			ctx.rect(x, y, width, height);
			ctx.closePath();
			ctx.fill();
		});
	}

	rects.forEach(function (each) {
		var x = each.x;
		var y = each.y;
		var height = each.height;
		var w1 = each.w1;
		var w2 = each.w2;
		var stroke1 = each.stroke1;
		var stroke2 = each.stroke2;
		var fill1 = each.fill1;
		var fill2 = each.fill2;


		if (w1 > 0) {
			ctx.fillStyle = (0, _utils.hexToRGBA)(fill1, opacity);
			if (stroke1 !== "none") ctx.strokeStyle = stroke1;

			ctx.beginPath();
			ctx.rect(x, y, w1, height);
			ctx.closePath();
			ctx.fill();

			if (stroke1 !== "none") ctx.stroke();
		}

		if (w2 > 0) {
			ctx.fillStyle = (0, _utils.hexToRGBA)(fill2, opacity);
			if (stroke2 !== "none") ctx.strokeStyle = stroke2;

			ctx.beginPath();
			ctx.rect(x + w1, y, w2, height);
			ctx.closePath();
			ctx.fill();

			if (stroke2 !== "none") ctx.stroke();
		}
	});
}

exports.default = VolumeProfileSeries;

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

var _ToolTipText = __webpack_require__(21);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(20);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BollingerBandTooltip = function (_Component) {
	_inherits(BollingerBandTooltip, _Component);

	function BollingerBandTooltip(props) {
		_classCallCheck(this, BollingerBandTooltip);

		var _this = _possibleConstructorReturn(this, (BollingerBandTooltip.__proto__ || Object.getPrototypeOf(BollingerBandTooltip)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		return _this;
	}

	_createClass(BollingerBandTooltip, [{
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var onClick = _props.onClick;
			var displayFormat = _props.displayFormat;
			var calculator = _props.calculator;
			var _context = this.context;
			var width = _context.width;
			var height = _context.height;
			var currentItem = moreProps.currentItem;


			var top, middle, bottom;
			top = middle = bottom = "n/a";
			var accessor = calculator.accessor();

			if ((0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(accessor(currentItem))) {
				var item = accessor(currentItem);
				top = displayFormat(item.top);
				middle = displayFormat(item.middle);
				bottom = displayFormat(item.bottom);
			}

			var originProp = this.props.origin;

			var origin = (0, _utils.functor)(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];

			var tooltipLabel = (0, _utils.functor)(calculator.tooltipLabel());

			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + x + ", " + y + ")",
					className: this.props.className, onClick: onClick },
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 0, y: 0,
						fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						tooltipLabel()
					),
					_react2.default.createElement(
						"tspan",
						null,
						top + ", " + middle + ", " + bottom
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOnMouseMove: true
			});
		}
	}]);

	return BollingerBandTooltip;
}(_react.Component);

BollingerBandTooltip.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired
};
BollingerBandTooltip.propTypes = {
	className: _react.PropTypes.string,
	calculator: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]).isRequired,
	displayFormat: _react.PropTypes.func.isRequired,
	origin: _react.PropTypes.array.isRequired,
	onClick: _react.PropTypes.func,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	forDataSeries: _react.PropTypes.number
};

BollingerBandTooltip.defaultProps = {
	className: "react-stockcharts-bollingerband-tooltip",
	displayFormat: (0, _d3Format.format)(".2f"),
	origin: [0, 10]
};

exports.default = BollingerBandTooltip;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericComponent = __webpack_require__(29);

var _GenericComponent2 = _interopRequireDefault(_GenericComponent);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoverTooltip = function (_Component) {
	_inherits(HoverTooltip, _Component);

	function HoverTooltip(props) {
		_classCallCheck(this, HoverTooltip);

		var _this = _possibleConstructorReturn(this, (HoverTooltip.__proto__ || Object.getPrototypeOf(HoverTooltip)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(HoverTooltip, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var pointer = helper(this.props, moreProps, this.context);

			if ((0, _utils.isNotDefined)(pointer)) return null;
			_drawOnCanvas(ctx, this.props, this.context, pointer);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericComponent2.default, {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOnMouseMove: true,
				drawOnPan: true,
				drawOnMouseExitOfCanvas: true
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var pointer = helper(this.props, moreProps, this.context);

			if ((0, _utils.isNotDefined)(pointer)) return null;

			var _props = this.props;
			var bgFill = _props.bgFill;
			var bgOpacity = _props.bgOpacity;
			var backgroundShapeSVG = _props.backgroundShapeSVG;
			var height = this.context.height;
			var x = pointer.x;
			var y = pointer.y;
			var content = pointer.content;
			var centerX = pointer.centerX;
			var drawWidth = pointer.drawWidth;


			return _react2.default.createElement(
				"g",
				null,
				_react2.default.createElement("rect", { x: centerX - drawWidth / 2, y: 0, width: drawWidth, height: height, fill: bgFill, opacity: bgOpacity }),
				_react2.default.createElement(
					"g",
					{ className: "react-stockcharts-tooltip-content", transform: "translate(" + x + ", " + y + ")" },
					backgroundShapeSVG(this.props),
					tooltipSVG(this.props, content)
				)
			);
		}
	}]);

	return HoverTooltip;
}(_react.Component);

HoverTooltip.propTypes = {
	backgroundShapeSVG: _react.PropTypes.func,
	bgwidth: _react.PropTypes.number.isRequired,
	bgheight: _react.PropTypes.number.isRequired,
	bgFill: _react.PropTypes.string.isRequired,
	bgOpacity: _react.PropTypes.number.isRequired,
	tooltipContent: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]).isRequired,
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number
};

HoverTooltip.contextTypes = {
	xAccessor: _react.PropTypes.func.isRequired,
	displayXAccessor: _react.PropTypes.func.isRequired,
	height: _react.PropTypes.number.isRequired,
	width: _react.PropTypes.number.isRequired,
	margin: _react.PropTypes.object.isRequired,
	ratio: _react.PropTypes.number.isRequired
};

HoverTooltip.defaultProps = {
	bgwidth: 150,
	bgheight: 50,
	tooltipSVG: tooltipSVG,
	tooltipCanvas: tooltipCanvas,
	origin: origin,
	fill: "#D4E2FD",
	bgFill: "#D4E2FD",
	bgOpacity: 0.5,
	stroke: "#9B9BFF",
	fontFill: "#000000",
	opacity: 0.8,
	backgroundShapeSVG: backgroundShapeSVG,
	backgroundShapeCanvas: backgroundShapeCanvas,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 12
};

var PADDING = 5;

/* eslint-disable react/prop-types */
function backgroundShapeSVG(_ref) {
	var bgheight = _ref.bgheight;
	var bgwidth = _ref.bgwidth;
	var fill = _ref.fill;
	var stroke = _ref.stroke;
	var opacity = _ref.opacity;

	return _react2.default.createElement("rect", { height: bgheight, width: bgwidth, fill: fill, opacity: opacity, stroke: stroke });
}

function tooltipSVG(_ref2, content) {
	var fontFamily = _ref2.fontFamily;
	var fontSize = _ref2.fontSize;
	var fontFill = _ref2.fontFill;

	var tspans = [];
	for (var i = 0; i < content.y.length; i++) {
		var y = content.y[i];
		tspans.push(_react2.default.createElement(
			"tspan",
			{ key: "L-" + i, x: 10, dy: fontSize, fill: y.stroke },
			y.label
		));
		tspans.push(_react2.default.createElement(
			"tspan",
			{ key: "" + i },
			": "
		));
		tspans.push(_react2.default.createElement(
			"tspan",
			{ key: "V-" + i },
			y.value
		));
	}
	return _react2.default.createElement(
		"text",
		{ fontFamily: fontFamily, fontSize: fontSize, fill: fontFill },
		_react2.default.createElement(
			"tspan",
			{ x: 10, y: 15 },
			content.x
		),
		tspans
	);
}
/* eslint-enable react/prop-types */

function backgroundShapeCanvas(_ref3, ctx) {
	var bgheight = _ref3.bgheight;
	var bgwidth = _ref3.bgwidth;
	var fill = _ref3.fill;
	var stroke = _ref3.stroke;
	var opacity = _ref3.opacity;

	ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
	ctx.strokeStyle = stroke;
	ctx.beginPath();
	ctx.rect(0, 0, bgwidth, bgheight);
	ctx.fill();
	ctx.stroke();
}

function tooltipCanvas(_ref4, content, ctx) {
	var fontFamily = _ref4.fontFamily;
	var fontSize = _ref4.fontSize;
	var fontFill = _ref4.fontFill;

	ctx.font = fontSize + "px " + fontFamily;
	ctx.fillStyle = fontFill;
	ctx.textAlign = "left";

	var X = 10;
	var Y = 15;
	ctx.fillText(content.x, X, Y);

	for (var i = 0; i < content.y.length; i++) {
		var y = content.y[i];
		var textY = Y + fontSize * (i + 1);
		ctx.fillStyle = y.stroke || fontFill;
		ctx.fillText(y.label, X, textY);

		ctx.fillStyle = fontFill;
		ctx.fillText(": " + y.value, X + ctx.measureText(y.label).width, textY);
	}
}

function origin(mouseXY, bgheight, bgwidth, xAccessor, currentItem, xScale) {
	var y = (0, _utils.last)(mouseXY);

	var snapX = xScale(xAccessor(currentItem));
	var originX = snapX - bgwidth - PADDING * 2 < 0 ? snapX + PADDING : snapX - bgwidth - PADDING;
	// originX = (x - width - PADDING * 2 < 0) ? x + PADDING : x - width - PADDING;

	var originY = y - bgheight / 2;
	return [originX, originY];
}

function _drawOnCanvas(ctx, props, context, pointer) {
	var height = context.height;
	var margin = context.margin;
	var ratio = context.ratio;
	var bgFill = props.bgFill;
	var bgOpacity = props.bgOpacity;
	var backgroundShapeCanvas = props.backgroundShapeCanvas;
	var tooltipCanvas = props.tooltipCanvas;


	var originX = 0.5 * ratio + margin.left;
	var originY = 0.5 * ratio + margin.top;

	ctx.save();

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.scale(ratio, ratio);

	ctx.translate(originX, originY);

	var x = pointer.x;
	var y = pointer.y;
	var content = pointer.content;
	var centerX = pointer.centerX;
	var drawWidth = pointer.drawWidth;


	ctx.fillStyle = (0, _utils.hexToRGBA)(bgFill, bgOpacity);
	ctx.beginPath();
	ctx.rect(centerX - drawWidth / 2, 0, drawWidth, height);
	ctx.fill();

	ctx.translate(x, y);
	backgroundShapeCanvas(props, ctx);
	tooltipCanvas(props, content, ctx);

	ctx.restore();
}

function helper(props, moreProps, context) {
	var show = moreProps.show;
	var xScale = moreProps.xScale;
	var mouseXY = moreProps.mouseXY;
	var currentItem = moreProps.currentItem;
	var plotData = moreProps.plotData;
	var bgheight = props.bgheight;
	var bgwidth = props.bgwidth;
	var origin = props.origin;
	var tooltipContent = props.tooltipContent;
	var xAccessor = context.xAccessor;
	var displayXAccessor = context.displayXAccessor;


	if (!show || (0, _utils.isNotDefined)(currentItem)) return;

	var xValue = xAccessor(currentItem);

	if (!show || (0, _utils.isNotDefined)(xValue)) return;

	var _origin = origin(mouseXY, bgheight, bgwidth, xAccessor, currentItem, xScale);

	var _origin2 = _slicedToArray(_origin, 2);

	var x = _origin2[0];
	var y = _origin2[1];


	var content = tooltipContent({ currentItem: currentItem, xAccessor: displayXAccessor });
	var centerX = xScale(xValue);
	var drawWidth = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)))) / (plotData.length - 1);

	return { x: x, y: y, content: content, centerX: centerX, drawWidth: drawWidth };
}

exports.default = HoverTooltip;

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Format = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _ToolTipText = __webpack_require__(21);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(20);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MACDTooltip = function (_Component) {
	_inherits(MACDTooltip, _Component);

	function MACDTooltip(props) {
		_classCallCheck(this, MACDTooltip);

		var _this = _possibleConstructorReturn(this, (MACDTooltip.__proto__ || Object.getPrototypeOf(MACDTooltip)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		return _this;
	}

	_createClass(MACDTooltip, [{
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var onClick = _props.onClick;
			var fontFamily = _props.fontFamily;
			var fontSize = _props.fontSize;
			var calculator = _props.calculator;
			var displayFormat = _props.displayFormat;
			var _context = this.context;
			var width = _context.width;
			var height = _context.height;
			var currentItem = moreProps.currentItem;


			var yAccessor = calculator.accessor();

			var macdValue = currentItem && yAccessor(currentItem);

			var macd = macdValue && macdValue.macd && displayFormat(macdValue.macd) || "n/a";
			var signal = macdValue && macdValue.signal && displayFormat(macdValue.signal) || "n/a";
			var divergence = macdValue && macdValue.divergence && displayFormat(macdValue.divergence) || "n/a";

			var originProp = this.props.origin;

			var origin = (0, _utils.functor)(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						"MACD ("
					),
					_react2.default.createElement(
						"tspan",
						{ fill: calculator.stroke().macd },
						calculator.slow()
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						", "
					),
					_react2.default.createElement(
						"tspan",
						{ fill: calculator.stroke().macd },
						calculator.fast()
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						"): "
					),
					_react2.default.createElement(
						"tspan",
						{ fill: calculator.stroke().macd },
						macd
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						" Signal ("
					),
					_react2.default.createElement(
						"tspan",
						{ fill: calculator.stroke().signal },
						calculator.signal()
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						"): "
					),
					_react2.default.createElement(
						"tspan",
						{ fill: calculator.stroke().signal },
						signal
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						" Divergence: "
					),
					_react2.default.createElement(
						"tspan",
						{ fill: calculator.fill().divergence },
						divergence
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOnMouseMove: true
			});
		}
	}]);

	return MACDTooltip;
}(_react.Component);

MACDTooltip.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired
};

MACDTooltip.propTypes = {
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	calculator: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]).isRequired,
	displayFormat: _react.PropTypes.func.isRequired,
	onClick: _react.PropTypes.func
};

MACDTooltip.defaultProps = {
	origin: [0, 0],
	displayFormat: (0, _d3Format.format)(".2f")
};

exports.default = MACDTooltip;
// export default MACDTooltip;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _ToolTipText = __webpack_require__(21);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(20);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleMAToolTip = function (_Component) {
	_inherits(SingleMAToolTip, _Component);

	function SingleMAToolTip(props) {
		_classCallCheck(this, SingleMAToolTip);

		var _this = _possibleConstructorReturn(this, (SingleMAToolTip.__proto__ || Object.getPrototypeOf(SingleMAToolTip)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(SingleMAToolTip, [{
		key: "handleClick",
		value: function handleClick(e) {
			var _props = this.props;
			var onClick = _props.onClick;
			var forChart = _props.forChart;
			var options = _props.options;

			onClick(_extends({ chartId: forChart }, options), e);
		}
	}, {
		key: "render",
		value: function render() {
			var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
			return _react2.default.createElement(
				"g",
				{ transform: translate },
				_react2.default.createElement("line", { x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color, strokeWidth: "4px" }),
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 5, y: 11,
						fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						this.props.displayName
					),
					_react2.default.createElement(
						"tspan",
						{ x: "5", dy: "15" },
						this.props.value
					)
				),
				_react2.default.createElement("rect", { x: 0, y: 0, width: 55, height: 30,
					onClick: this.handleClick,
					fill: "none", stroke: "none" })
			);
		}
	}]);

	return SingleMAToolTip;
}(_react.Component);

SingleMAToolTip.propTypes = {
	origin: _react.PropTypes.array.isRequired,
	color: _react.PropTypes.string.isRequired,
	displayName: _react.PropTypes.string.isRequired,
	value: _react.PropTypes.string.isRequired,
	onClick: _react.PropTypes.func,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	forChart: _react.PropTypes.number.isRequired,
	options: _react.PropTypes.object.isRequired
};

var MovingAverageTooltip = function (_Component2) {
	_inherits(MovingAverageTooltip, _Component2);

	function MovingAverageTooltip(props) {
		_classCallCheck(this, MovingAverageTooltip);

		var _this2 = _possibleConstructorReturn(this, (MovingAverageTooltip.__proto__ || Object.getPrototypeOf(MovingAverageTooltip)).call(this, props));

		_this2.renderSVG = _this2.renderSVG.bind(_this2);
		return _this2;
	}

	_createClass(MovingAverageTooltip, [{
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _context = this.context;
			var height = _context.height;
			var chartId = _context.chartId;
			var chartConfig = moreProps.chartConfig;
			var currentItem = moreProps.currentItem;
			var _props2 = this.props;
			var className = _props2.className;
			var onClick = _props2.onClick;
			var width = _props2.width;
			var fontFamily = _props2.fontFamily;
			var fontSize = _props2.fontSize;
			var originProp = _props2.origin;
			var calculators = _props2.calculators;
			var displayFormat = _props2.displayFormat;


			var config = chartConfig;

			var origin = (0, _utils.functor)(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];

			var _config$origin = _slicedToArray(config.origin, 2);

			var ox = _config$origin[0];
			var oy = _config$origin[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", className: className },
				calculators.map(function (each, idx) {
					var yValue = currentItem && each.accessor()(currentItem);
					var options = {
						type: each.type(),
						windowSize: each.windowSize(),
						sourcePath: each.sourcePath(),
						echo: each.echo()
					};
					var yDisplayValue = yValue ? displayFormat(yValue) : "n/a";
					return _react2.default.createElement(SingleMAToolTip, {
						key: idx,
						origin: [width * idx, 0],
						color: each.stroke(),
						displayName: each.tooltipLabel(),
						value: yDisplayValue,
						options: options,
						forChart: chartId, onClick: onClick,
						fontFamily: fontFamily, fontSize: fontSize });
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOnMouseMove: true
			});
		}
	}]);

	return MovingAverageTooltip;
}(_react.Component);

MovingAverageTooltip.contextTypes = {
	height: _react.PropTypes.number.isRequired,
	chartId: _react.PropTypes.number.isRequired
};

MovingAverageTooltip.propTypes = {
	className: _react.PropTypes.string,
	displayFormat: _react.PropTypes.func.isRequired,
	origin: _react.PropTypes.array.isRequired,
	onClick: _react.PropTypes.func,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	width: _react.PropTypes.number,
	calculators: _react.PropTypes.array.isRequired,
	forDataSeries: _react.PropTypes.arrayOf(_react.PropTypes.number)
};

MovingAverageTooltip.defaultProps = {
	className: "react-stockcharts-moving-average-tooltip",
	displayFormat: (0, _d3Format.format)(".2f"),
	origin: [0, 10],
	width: 65
};

exports.default = MovingAverageTooltip;

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

var _ToolTipText = __webpack_require__(21);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(20);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OHLCTooltip = function (_Component) {
	_inherits(OHLCTooltip, _Component);

	function OHLCTooltip(props) {
		_classCallCheck(this, OHLCTooltip);

		var _this = _possibleConstructorReturn(this, (OHLCTooltip.__proto__ || Object.getPrototypeOf(OHLCTooltip)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		return _this;
	}

	_createClass(OHLCTooltip, [{
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var className = this.props.className;
			var _context = this.context;
			var width = _context.width;
			var height = _context.height;
			var currentItem = moreProps.currentItem;
			var _props = this.props;
			var onClick = _props.onClick;
			var xDisplayFormat = _props.xDisplayFormat;
			var fontFamily = _props.fontFamily;
			var fontSize = _props.fontSize;
			var accessor = _props.accessor;
			var volumeFormat = _props.volumeFormat;
			var ohlcFormat = _props.ohlcFormat;


			var displayDate, open, high, low, close, volume;

			displayDate = open = height = low = close = volume = "n/a";

			if ((0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(accessor(currentItem)) && (0, _utils.isDefined)(accessor(currentItem).close)) {
				var item = accessor(currentItem);
				volume = volumeFormat(item.volume);

				displayDate = xDisplayFormat(item.date);
				open = ohlcFormat(item.open);
				high = ohlcFormat(item.high);
				low = ohlcFormat(item.low);
				close = ohlcFormat(item.close);
			}

			var originProp = this.props.origin;

			var origin = (0, _utils.functor)(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];


			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-toottip-hover " + className,
					transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ key: "label", x: 0, dy: "5" },
						"Date: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value" },
						displayDate
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ key: "label_O" },
						" O: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_O" },
						open
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ key: "label_H" },
						" H: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_H" },
						high
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ key: "label_L" },
						" L: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_L" },
						low
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ key: "label_C" },
						" C: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_C" },
						close
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ key: "label_Vol" },
						" Vol: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_Vol" },
						volume
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOnMouseMove: true
			});
		}
	}]);

	return OHLCTooltip;
}(_react.Component);

OHLCTooltip.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired
};

OHLCTooltip.propTypes = {
	className: _react.PropTypes.string,
	accessor: _react.PropTypes.func.isRequired,
	xDisplayFormat: _react.PropTypes.func.isRequired,
	ohlcFormat: _react.PropTypes.func.isRequired,
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	onClick: _react.PropTypes.func,
	volumeFormat: _react.PropTypes.func
};

OHLCTooltip.defaultProps = {
	accessor: function accessor(d) {
		return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
	},
	xDisplayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d"),
	volumeFormat: (0, _d3Format.format)(".4s"),
	ohlcFormat: (0, _d3Format.format)(".2f"),
	origin: [0, 0]
};

exports.default = OHLCTooltip;

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Format = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

var _ToolTipText = __webpack_require__(21);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(20);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSITooltip = function (_Component) {
	_inherits(RSITooltip, _Component);

	function RSITooltip(props) {
		_classCallCheck(this, RSITooltip);

		var _this = _possibleConstructorReturn(this, (RSITooltip.__proto__ || Object.getPrototypeOf(RSITooltip)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		return _this;
	}

	_createClass(RSITooltip, [{
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var onClick = _props.onClick;
			var fontFamily = _props.fontFamily;
			var fontSize = _props.fontSize;
			var calculator = _props.calculator;
			var displayFormat = _props.displayFormat;
			var _context = this.context;
			var width = _context.width;
			var height = _context.height;
			var currentItem = moreProps.currentItem;


			var yAccessor = calculator.accessor();

			var rsi = (0, _utils.isDefined)(currentItem) && yAccessor(currentItem);
			var value = rsi && displayFormat(rsi) || "n/a";

			var originProp = this.props.origin;

			var origin = (0, _utils.functor)(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						calculator.tooltipLabel()
					),
					_react2.default.createElement(
						"tspan",
						null,
						value
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOnMouseMove: true
			});
		}
	}]);

	return RSITooltip;
}(_react.Component);

RSITooltip.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired
};

RSITooltip.propTypes = {
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	onClick: _react.PropTypes.func,
	calculator: _react.PropTypes.func.isRequired,
	displayFormat: _react.PropTypes.func.isRequired
};

RSITooltip.defaultProps = {
	displayFormat: (0, _d3Format.format)(".2f"),
	origin: [0, 0]
};

exports.default = RSITooltip;

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _ToolTipText = __webpack_require__(21);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(20);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleValueTooltip = function (_Component) {
	_inherits(SingleValueTooltip, _Component);

	function SingleValueTooltip(props) {
		_classCallCheck(this, SingleValueTooltip);

		var _this = _possibleConstructorReturn(this, (SingleValueTooltip.__proto__ || Object.getPrototypeOf(SingleValueTooltip)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		return _this;
	}

	_createClass(SingleValueTooltip, [{
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var onClick = _props.onClick;
			var fontFamily = _props.fontFamily;
			var fontSize = _props.fontSize;
			var labelStroke = _props.labelStroke;
			var valueStroke = _props.valueStroke;
			var _props2 = this.props;
			var xDisplayFormat = _props2.xDisplayFormat;
			var yDisplayFormat = _props2.yDisplayFormat;
			var xLabel = _props2.xLabel;
			var yLabel = _props2.yLabel;
			var xAccessor = _props2.xAccessor;
			var yAccessor = _props2.yAccessor;
			var _context = this.context;
			var width = _context.width;
			var height = _context.height;
			var currentItem = moreProps.currentItem;


			var xDisplayValue = (0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(xAccessor(currentItem)) ? xDisplayFormat(xAccessor(currentItem)) : "n/a";
			var yDisplayValue = (0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(yAccessor(currentItem)) ? yDisplayFormat(yAccessor(currentItem)) : "n/a";

			var originProp = this.props.origin;

			var origin = (0, _utils.functor)(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					xLabel ? _react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ x: 0, dy: "5", fill: labelStroke },
						xLabel + ": "
					) : null,
					xLabel ? _react2.default.createElement(
						"tspan",
						{ fill: valueStroke },
						xDisplayValue + " "
					) : null,
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ fill: labelStroke },
						yLabel + ": "
					),
					_react2.default.createElement(
						"tspan",
						{ fill: valueStroke },
						yDisplayValue
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOnMouseMove: true
			});
		}
	}]);

	return SingleValueTooltip;
}(_react.Component);

SingleValueTooltip.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired
};

SingleValueTooltip.propTypes = {
	xDisplayFormat: _react.PropTypes.func,
	yDisplayFormat: _react.PropTypes.func.isRequired,
	xLabel: _react.PropTypes.string,
	yLabel: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
	labelStroke: _react.PropTypes.string.isRequired,
	valueStroke: _react.PropTypes.string,
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	onClick: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	yAccessor: _react.PropTypes.func
};

SingleValueTooltip.defaultProps = {
	origin: [0, 0],
	labelStroke: "#4682B4",
	valueStroke: "#000000",
	yDisplayFormat: (0, _d3Format.format)(".2f"),
	xAccessor: _utils.noop,
	yAccessor: _utils.identity
};

exports.default = SingleValueTooltip;

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Format = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(8);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(2);

var _ToolTipText = __webpack_require__(21);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(20);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StochasticTooltip = function (_Component) {
	_inherits(StochasticTooltip, _Component);

	function StochasticTooltip(props) {
		_classCallCheck(this, StochasticTooltip);

		var _this = _possibleConstructorReturn(this, (StochasticTooltip.__proto__ || Object.getPrototypeOf(StochasticTooltip)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		return _this;
	}

	_createClass(StochasticTooltip, [{
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props;
			var onClick = _props.onClick;
			var fontFamily = _props.fontFamily;
			var fontSize = _props.fontSize;
			var calculator = _props.calculator;
			var displayFormat = _props.displayFormat;
			var children = _props.children;
			var _context = this.context;
			var width = _context.width;
			var height = _context.height;
			var currentItem = moreProps.currentItem;


			var yAccessor = calculator.accessor();
			var stroke = calculator.stroke();
			var stochastic = currentItem && yAccessor(currentItem);

			var K = stochastic && stochastic.K && displayFormat(stochastic.K) || "n/a";
			var D = stochastic && stochastic.D && displayFormat(stochastic.D) || "n/a";
			var label = children || "Stochastic";

			var originProp = this.props.origin;

			var origin = (0, _utils.functor)(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 0, y: 0, fontFamily: fontFamily, fontSize: fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						label + " %K("
					),
					_react2.default.createElement(
						"tspan",
						{ fill: stroke.K },
						calculator.windowSize() + ", " + calculator.kWindowSize()
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						"): "
					),
					_react2.default.createElement(
						"tspan",
						{ fill: stroke.K },
						K
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						" %D ("
					),
					_react2.default.createElement(
						"tspan",
						{ fill: stroke.D },
						calculator.dWindowSize()
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						"): "
					),
					_react2.default.createElement(
						"tspan",
						{ fill: stroke.D },
						D
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_GenericChartComponent2.default, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOnMouseMove: true
			});
		}
	}]);

	return StochasticTooltip;
}(_react.Component);

StochasticTooltip.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired
};

StochasticTooltip.propTypes = {
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	onClick: _react.PropTypes.func,
	calculator: _react.PropTypes.func.isRequired,
	displayFormat: _react.PropTypes.func.isRequired,
	children: _react.PropTypes.node.isRequired
};

StochasticTooltip.defaultProps = {
	displayFormat: (0, _d3Format.format)(".2f"),
	origin: [0, 0]
};

exports.default = StochasticTooltip;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/*

Taken from https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/slidingWindow.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var accumulateTill = (0, _index.functor)(false),
	    accumulator = _noop2.default,
	    value = _identity2.default,
	    discardTillStart = false,
	    discardTillEnd = false;

	var accumulatingWindow = function accumulatingWindow(data) {
		var accumulatedWindow = discardTillStart ? undefined : [];
		var response = [];
		var accumulatorIdx = 0;
		var i = 0;
		for (i = 0; i < data.length; i++) {
			var d = data[i];
			// console.log(d, accumulateTill(d));
			if (accumulateTill(d, i)) {
				if (accumulatedWindow && accumulatedWindow.length > 0) response.push(accumulator(accumulatedWindow, i, accumulatorIdx++));
				accumulatedWindow = [value(d)];
			} else {
				if (accumulatedWindow) accumulatedWindow.push(value(d));
			}
		}
		if (!discardTillEnd) response.push(accumulator(accumulatedWindow, i, accumulatorIdx));
		return response;
	};

	accumulatingWindow.accumulateTill = function (x) {
		if (!arguments.length) {
			return accumulateTill;
		}
		accumulateTill = (0, _index.functor)(x);
		return accumulatingWindow;
	};
	accumulatingWindow.accumulator = function (x) {
		if (!arguments.length) {
			return accumulator;
		}
		accumulator = x;
		return accumulatingWindow;
	};
	accumulatingWindow.value = function (x) {
		if (!arguments.length) {
			return value;
		}
		value = x;
		return accumulatingWindow;
	};
	accumulatingWindow.discardTillStart = function (x) {
		if (!arguments.length) {
			return discardTillStart;
		}
		discardTillStart = x;
		return accumulatingWindow;
	};
	accumulatingWindow.discardTillEnd = function (x) {
		if (!arguments.length) {
			return discardTillEnd;
		}
		discardTillEnd = x;
		return accumulatingWindow;
	};
	return accumulatingWindow;
};

var _noop = __webpack_require__(33);

var _noop2 = _interopRequireDefault(_noop);

var _identity = __webpack_require__(32);

var _identity2 = _interopRequireDefault(_identity);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var undefinedValue = undefined,
	    windowSize = 10,
	    accumulator = _noop2.default,
	    source = _identity2.default,
	    skipInitial = 0;

	var mappedSlidingWindow = function mappedSlidingWindow(data) {
		var size = (0, _index.functor)(windowSize).apply(this, arguments);
		var windowData = [];
		var accumulatorIdx = 0;
		var undef = (0, _index.functor)(undefinedValue);
		// console.log(skipInitial, size, data.length, windowData.length);
		var result = [];
		data.forEach(function (d, i) {
			// console.log(d, i, windowData.length);
			var mapped;
			if (i < skipInitial + size - 1) {
				mapped = undef(d, i);
				result.push(mapped);
				windowData.push(mapped);
				return;
			}
			if (i >= skipInitial + size) {
				// Treat windowData as FIFO rolling buffer
				windowData.shift();
			}
			windowData.push(source(d, i));
			mapped = accumulator(windowData, i, accumulatorIdx++);
			result.push(mapped);
			windowData.pop();
			windowData.push(mapped);
			return;
		});
		return result;
	};

	mappedSlidingWindow.undefinedValue = function (x) {
		if (!arguments.length) {
			return undefinedValue;
		}
		undefinedValue = x;
		return mappedSlidingWindow;
	};
	mappedSlidingWindow.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return mappedSlidingWindow;
	};
	mappedSlidingWindow.accumulator = function (x) {
		if (!arguments.length) {
			return accumulator;
		}
		accumulator = x;
		return mappedSlidingWindow;
	};
	mappedSlidingWindow.skipInitial = function (x) {
		if (!arguments.length) {
			return skipInitial;
		}
		skipInitial = x;
		return mappedSlidingWindow;
	};
	mappedSlidingWindow.source = function (x) {
		if (!arguments.length) {
			return source;
		}
		source = x;
		return mappedSlidingWindow;
	};

	return mappedSlidingWindow;
};

var _noop = __webpack_require__(33);

var _noop2 = _interopRequireDefault(_noop);

var _identity = __webpack_require__(32);

var _identity2 = _interopRequireDefault(_identity);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var algorithm = _identity2.default,
	    skipUndefined = true,
	    merge = _noop2.default;

	function mergeCompute(data) {
		var zip = (0, _zipper2.default)().combine(function (datum, indicator) {
			var result = skipUndefined && (0, _index.isNotDefined)(indicator) ? datum : merge(datum, indicator);
			return (0, _index.isNotDefined)(result) ? datum : result;
		});

		// console.log(data);
		return zip(data, algorithm(data));
	}

	mergeCompute.algorithm = function (x) {
		if (!arguments.length) {
			return algorithm;
		}
		algorithm = x;
		return mergeCompute;
	};

	mergeCompute.merge = function (x) {
		if (!arguments.length) {
			return merge;
		}
		merge = x;
		return mergeCompute;
	};
	mergeCompute.skipUndefined = function (x) {
		if (!arguments.length) {
			return skipUndefined;
		}
		skipUndefined = x;
		return mergeCompute;
	};

	return mergeCompute;
};

var _identity = __webpack_require__(32);

var _identity2 = _interopRequireDefault(_identity);

var _zipper = __webpack_require__(107);

var _zipper2 = _interopRequireDefault(_zipper);

var _noop = __webpack_require__(33);

var _noop2 = _interopRequireDefault(_noop);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/*

Taken from https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/slidingWindow.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var undefinedValue = undefined,
	    windowSize = 10,
	    accumulator = _noop2.default,
	    sourcePath,
	    source,
	    skipInitial = 0,
	    misc;

	var slidingWindow = function slidingWindow(data) {
		var sourceFunction = source || (0, _index.path)(sourcePath);

		var size = (0, _index.functor)(windowSize).apply(this, arguments);
		var windowData = data.slice(skipInitial, size + skipInitial).map(sourceFunction);
		var accumulatorIdx = 0;
		var undef = (0, _index.functor)(undefinedValue);
		// console.log(skipInitial, size, data.length, windowData.length);
		return data.map(function (d, i) {
			// console.log(d, i);
			if (i < skipInitial + size - 1) {
				return undef(sourceFunction(d), i, misc);
			}
			if (i >= skipInitial + size) {
				// Treat windowData as FIFO rolling buffer
				windowData.shift();
				windowData.push(sourceFunction(d, i));
			}
			return accumulator(windowData, i, accumulatorIdx++, misc);
		});
	};

	slidingWindow.undefinedValue = function (x) {
		if (!arguments.length) {
			return undefinedValue;
		}
		undefinedValue = x;
		return slidingWindow;
	};
	slidingWindow.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return slidingWindow;
	};
	slidingWindow.misc = function (x) {
		if (!arguments.length) {
			return misc;
		}
		misc = x;
		return slidingWindow;
	};
	slidingWindow.accumulator = function (x) {
		if (!arguments.length) {
			return accumulator;
		}
		accumulator = x;
		return slidingWindow;
	};
	slidingWindow.skipInitial = function (x) {
		if (!arguments.length) {
			return skipInitial;
		}
		skipInitial = x;
		return slidingWindow;
	};
	slidingWindow.sourcePath = function (x) {
		if (!arguments.length) {
			return sourcePath;
		}
		sourcePath = x;
		return slidingWindow;
	};
	slidingWindow.source = function (x) {
		if (!arguments.length) {
			return source;
		}
		source = x;
		return slidingWindow;
	};

	return slidingWindow;
};

var _noop = __webpack_require__(33);

var _noop2 = _interopRequireDefault(_noop);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x) {
  return function() {
    return x;
  };
};


/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticks__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__threshold_sturges__ = __webpack_require__(115);








/* harmony default export */ exports["a"] = function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_6__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ticks__["a" /* default */])(x0, x1, tz);

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] >= x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
};


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x) {
  return x;
};


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b;

  if (f == null) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = array[i]) != null && b > a) a = b;
  }

  else {
    while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = f(array[i], i, array)) != null && b > a) a = b;
  }

  return a;
};


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(34);


/* harmony default export */ exports["a"] = function(array, f) {
  var s = 0,
      n = array.length,
      a,
      i = -1,
      j = n;

  if (f == null) {
    while (++i < n) if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(array[i]))) s += a; else --j;
  }

  else {
    while (++i < n) if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(f(array[i], i, array)))) s += a; else --j;
  }

  if (j) return s / j;
};


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(65);




/* harmony default export */ exports["a"] = function(array, f) {
  var numbers = [],
      n = array.length,
      a,
      i = -1;

  if (f == null) {
    while (++i < n) if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(array[i]))) numbers.push(a);
  }

  else {
    while (++i < n) if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(f(array[i], i, array)))) numbers.push(a);
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
};


/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
};


/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(array) {
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = [p, p = array[++i]];
  return pairs;
};


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
};


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(27);


/* harmony default export */ exports["a"] = function(array, compare) {
  if (!(n = array.length)) return;
  var i = 0,
      n,
      j = 0,
      xi,
      xj = array[j];

  if (!compare) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;

  if (compare(xj, xj) === 0) return j;
};


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
};


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(array, f) {
  var s = 0,
      n = array.length,
      a,
      i = -1;

  if (f == null) {
    while (++i < n) if (a = +array[i]) s += a; // Note: zero and null are equivalent.
  }

  else {
    while (++i < n) if (a = +f(array[i], i, array)) s += a;
  }

  return s;
};


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(65);





/* harmony default export */ exports["a"] = function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["b" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
};


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(111);


/* harmony default export */ exports["a"] = function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
};


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(117);


/* harmony default export */ exports["a"] = function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
};


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
};


/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
};


/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(66);


/* harmony default export */ exports["a"] = function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) return rollup != null
        ? rollup(array) : (sortValues != null
        ? array.sort(sortValues)
        : array);

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
};

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(66);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ exports["a"] = set;


/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
};


/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(119);
/* harmony export (immutable) */ exports["a"] = cubehelix;
/* unused harmony export Cubehelix */




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */])) o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["e" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["e" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(119);
/* harmony export (immutable) */ exports["a"] = lab;
/* unused harmony export Lab */
/* harmony export (immutable) */ exports["b"] = hcl;
/* unused harmony export Hcl */




var Kn = 18,
    Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */])) o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* rgbConvert */])(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */](
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return formatPrefix; });
/* harmony export (immutable) */ exports["c"] = defaultLocale;


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x, p) {
  x = x.toPrecision(p);

  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (x[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      case "e": break out;
      default: if (i0 > 0) i0 = 0; break;
    }
  }

  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
};


/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
};


/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(71);


/* harmony default export */ exports["a"] = function(x, p) {
  var d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
};


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(48);


/* harmony default export */ exports["a"] = function(step) {
  return Math.max(0, -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
};


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(48);


/* harmony default export */ exports["a"] = function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
};


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(48);


/* harmony default export */ exports["a"] = function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
};


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return cubehelixLong; });



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])(end)).h),
          s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.s, end.s),
          l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.l, end.l),
          opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]);
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */]);


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(36);
/* unused harmony export hclLong */



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* hcl */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* hcl */])(end)).h),
        c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.c, end.c),
        l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.l, end.l),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]);
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */]);


/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(36);
/* unused harmony export hslLong */



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hsl */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hsl */])(end)).h),
        s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.s, end.s),
        l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.l, end.l),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]);
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */]);


/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(36);
/* unused harmony export default */



function lab(start, end) {
  var l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* lab */])(start)).l, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* lab */])(end)).l),
      a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.a, end.a),
      b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.b, end.b),
      opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
};


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
};


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ exports["b"] = function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
};


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(381);
/* unused harmony export interpolateTransformCss */
/* unused harmony export interpolateTransformSvg */



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(379);
/* harmony export (immutable) */ exports["a"] = parseCss;
/* harmony export (immutable) */ exports["b"] = parseSvg;


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  value = value.matrix;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
};


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = [];
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._.push("Z");
    }
  },
  lineTo: function(x, y) {
    this._.push("L", this._x1 = +x, ",", this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._.push("Q", +x1, ",", +y1, ",", this._x1 = +x, ",", this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._.push("C", +x1, ",", +y1, ",", +x2, ",", +y2, ",", this._x1 = +x, ",", this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._.push(
        "M", this._x1 = x1, ",", this._y1 = y1
      );
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._.push(
        "L", this._x1 = x1, ",", this._y1 = y1
      );
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._.push(
          "L", x1 + t01 * x01, ",", y1 + t01 * y01
        );
      }

      this._.push(
        "A", r, ",", r, ",0,0,", +(y01 * x20 > x01 * y20), ",", this._x1 = x1 + t21 * x21, ",", this._y1 = y1 + t21 * y21
      );
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._.push(
        "M", x0, ",", y0
      );
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._.push(
        "L", x0, ",", y0
      );
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._.push(
        "A", r, ",", r, ",0,1,", cw, ",", x - dx, ",", y - dy,
        "A", r, ",", r, ",0,1,", cw, ",", this._x1 = x0, ",", this._y1 = y0
      );
    }

    // Otherwise, draw an arc!
    else {
      if (da < 0) da = da % tau + tau;
      this._.push(
        "A", r, ",", r, ",0,", +(da >= pi), ",", cw, ",", this._x1 = x + r * Math.cos(a1), ",", this._y1 = y + r * Math.sin(a1)
      );
    }
  },
  rect: function(x, y, w, h) {
    this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y, "h", +w, "v", +h, "h", -w, "Z");
  },
  toString: function() {
    return this._.join("");
  }
};

/* harmony default export */ exports["a"] = path;


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(133);
/* harmony export (immutable) */ exports["a"] = band;
/* harmony export (immutable) */ exports["b"] = point;



function band() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(37);


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(37);


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(37);


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(37);


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");


/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(35);



/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateCubehelixLong */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])(300, 0.5, 0.0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])(-240, 0.5, 1.0));


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(132);
/* harmony export (immutable) */ exports["a"] = identity;




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["b" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__linear__["a" /* linearish */])(scale);
}


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(51);
/* harmony export (immutable) */ exports["a"] = log;






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__continuous__["c" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(51);
/* harmony export (immutable) */ exports["a"] = pow;
/* harmony export (immutable) */ exports["b"] = sqrt;




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* copy */])(scale, pow().exponent(exponent));
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__linear__["a" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(23);
/* harmony export (immutable) */ exports["a"] = quantile;



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(38);
/* harmony export (immutable) */ exports["a"] = quantize;




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__linear__["a" /* linearish */])(scale);
}


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return cool; });



var warm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateCubehelixLong */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])(-100, 0.75, 0.35), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])(80, 1.50, 0.8));

var cool = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateCubehelixLong */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])(260, 0.75, 0.35), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])(80, 1.50, 0.8));

var rainbow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* cubehelix */])();

/* harmony default export */ exports["a"] = function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
};


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(38);
/* harmony export (immutable) */ exports["a"] = sequential;


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* linearish */])(scale);
}


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(23);
/* harmony export (immutable) */ exports["a"] = threshold;



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);



/* harmony default export */ exports["a"] = function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["format"])(specifier);
};


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(88);




/* harmony default export */ exports["a"] = function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__time__["b" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["o" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["p" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["e" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["q" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["s" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["t" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
};


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return plasma; });


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ exports["a"] = ramp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

var magma = ramp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(x) {
  return function() {
    return x;
  };
};


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = local;
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(79);



/* harmony default export */ exports["a"] = function(node) {
  var event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
};


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(17);


/* harmony default export */ exports["a"] = function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* root */]);
};


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(17);


/* harmony default export */ exports["a"] = function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* root */]);
};


/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(76);


/* harmony default export */ exports["a"] = function(name) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
};


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(77);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ exports["a"] = function(name, value) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
};


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
};


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ exports["a"] = function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
};


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(401);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ exports["a"] = function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
};


/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
};


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(83);


function dispatchEvent(node, type, params) {
  var window = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (event) {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ exports["a"] = function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
};


/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
};


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function() {
  return !this.node();
};


/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



/* harmony default export */ exports["a"] = function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
};


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(135);



/* harmony default export */ exports["a"] = function(match) {
  if (typeof match !== "function") match = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
};


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ exports["a"] = function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
};


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(81);



function constantNull() {
  return null;
}

/* harmony default export */ exports["a"] = function(name, before) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
};


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ exports["a"] = function() {
  return this.each(lower);
};


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(17);


/* harmony default export */ exports["a"] = function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](merges, this._parents);
};


/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
};


/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
};


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
};


/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ exports["a"] = function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
};


/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ exports["a"] = function() {
  return this.each(raise);
};


/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ exports["a"] = function() {
  return this.each(remove);
};


/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(81);



/* harmony default export */ exports["a"] = function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
};


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(138);



/* harmony default export */ exports["a"] = function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, parents);
};


/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
};


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(17);


/* harmony default export */ exports["a"] = function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](sortgroups, this._parents).order();
};

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(83);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ exports["a"] = function(name, value, priority) {
  var node;
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node = this.node())
          .getComputedStyle(node, null)
          .getPropertyValue(name);
};


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ exports["a"] = function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
};


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(79);



/* harmony default export */ exports["a"] = function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
};


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(79);



/* harmony default export */ exports["a"] = function(node, touches) {
  if (touches == null) touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
};


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(39);




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function asin(x) {
  return x >= 1 ? __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */] : x <= -1 ? -__WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */] : Math.asin(x);
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ exports["a"] = function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */],
        da = Math.abs(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math__["c" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) {
      context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) {
        context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
          rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) {
        var p0 = asin(rp / r0 * Math.sin(ap)),
            p1 = asin(rp / r1 * Math.sin(ap));
        if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Math.cos(a01),
          y01 = r1 * Math.sin(a01),
          x10 = r0 * Math.cos(a10),
          y10 = r0 * Math.sin(a10);

      // Apply rounded corners?
      if (rc > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) {
        var x11 = r1 * Math.cos(a11),
            y11 = r1 * Math.sin(a11),
            x00 = r0 * Math.cos(a00),
            y00 = r0 * Math.sin(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < __WEBPACK_IMPORTED_MODULE_2__math__["d" /* pi */]) {
          var oc = da0 > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
              lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math__["b" /* epsilon */]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math__["d" /* pi */] / 2;
    return [Math.cos(a) * r, Math.sin(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
};


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(53);



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__basis__["a" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ exports["a"] = function(context) {
  return new BasisClosed(context);
};


/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(53);


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ exports["a"] = function(context) {
  return new BasisOpen(context);
};


/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(53);


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis__["c" /* Basis */](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ exports["a"] = (function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis__["c" /* Basis */](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85);


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom__ = __webpack_require__(84);




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__catmullRom__["a" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ exports["a"] = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__["b" /* CardinalClosed */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);


/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom__ = __webpack_require__(84);



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__catmullRom__["a" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ exports["a"] = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__["b" /* CardinalOpen */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);


/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(56);


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ exports["a"] = function(context) {
  return new LinearClosed(context);
};


/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = monotoneX;
/* harmony export (immutable) */ exports["a"] = monotoneY;
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ exports["a"] = function(context) {
  return new Natural(context);
};


/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["c"] = stepBefore;
/* harmony export (immutable) */ exports["b"] = stepAfter;
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ exports["a"] = function(context) {
  return new Step(context, 0.5);
};

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};


/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function(d) {
  return d;
};


/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(40);


/* harmony default export */ exports["a"] = function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
};


/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(40);


/* harmony default export */ exports["a"] = function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
};


/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(40);


/* harmony default export */ exports["a"] = function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
};


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(86);


/* harmony default export */ exports["a"] = function(series) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(series).reverse();
};


/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(86);



/* harmony default export */ exports["a"] = function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending__["b" /* sum */]),
      order = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
};


/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(41);


/* harmony default export */ exports["a"] = function(series) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).reverse();
};


/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__descending__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(39);





/* harmony default export */ exports["a"] = function() {
  var value = __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */],
      sortValues = __WEBPACK_IMPORTED_MODULE_1__descending__["a" /* default */],
      sort = null,
      startAngle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0),
      endAngle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__math__["c" /* tau */]),
      padAngle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(__WEBPACK_IMPORTED_MODULE_3__math__["c" /* tau */], Math.max(-__WEBPACK_IMPORTED_MODULE_3__math__["c" /* tau */], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : padAngle;
  };

  return pie;
};


/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radialLine__ = __webpack_require__(144);




/* harmony default export */ exports["a"] = function() {
  var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* curveRadialLinear */]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__radialLine__["a" /* radialLine */])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__radialLine__["a" /* radialLine */])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__radialLine__["a" /* radialLine */])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__radialLine__["a" /* radialLine */])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* default */])(_)) : c()._curve;
  };

  return a;
};


/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none__ = __webpack_require__(41);





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ exports["a"] = function() {
  var keys = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([]),
      order = __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */],
      offset = __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */] : typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */] : _, stack) : offset;
  };

  return stack;
};


/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return symbols; });










var symbols = [
  __WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__symbol_cross__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__symbol_square__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__symbol_star__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__symbol_wye__["a" /* default */]
];

/* harmony default export */ exports["b"] = function() {
  var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */]),
      size = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
};


/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(87);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["b" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["a" /* isoSpecifier */]);

/* harmony default export */ exports["a"] = parseIso;


/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* unused harmony export days */



var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ exports["a"] = day;
var days = day.range;


/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* unused harmony export hours */



var hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ exports["a"] = hour;
var hours = hour.range;


/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* unused harmony export milliseconds */


var millisecond = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ exports["a"] = millisecond;
var milliseconds = millisecond.range;


/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* unused harmony export minutes */



var minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ exports["a"] = minute;
var minutes = minute.range;


/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* unused harmony export months */


var month = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ exports["a"] = month;
var months = month.range;


/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* unused harmony export seconds */



var second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ exports["a"] = second;
var seconds = second.range;


/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* unused harmony export utcDays */



var utcDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ exports["a"] = utcDay;
var utcDays = utcDay.range;


/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* unused harmony export utcHours */



var utcHour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ exports["a"] = utcHour;
var utcHours = utcHour.range;


/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* unused harmony export utcMinutes */



var utcMinute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ exports["a"] = utcMinute;
var utcMinutes = utcMinute.range;


/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* unused harmony export utcMonths */


var utcMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ exports["a"] = utcMonth;
var utcMonths = utcMonth.range;


/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* unused harmony export utcThursday */
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */



function utcWeekday(i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* unused harmony export utcYears */


var utcYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ exports["a"] = utcYear;
var utcYears = utcYear.range;


/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* unused harmony export thursday */
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */



function weekday(i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(13);
/* unused harmony export years */


var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ exports["a"] = year;
var years = year.range;


/***/ },
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(array, INFINITY) : [];
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = flattenDeep;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(221)))

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  var out$ = typeof exports != 'undefined' && exports || "function" != 'undefined' && {} || this;

  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

  function isElement(obj) {
    return obj instanceof HTMLElement || obj instanceof SVGElement;
  }

  function requireDomNode(el) {
    if (!isElement(el)) {
      throw new Error('an HTMLElement or SVGElement is required; got ' + el);
    }
  }

  function isExternal(url) {
    return url && url.lastIndexOf('http',0) == 0 && url.lastIndexOf(window.location.host) == -1;
  }

  function inlineImages(el, callback) {
    requireDomNode(el);

    var images = el.querySelectorAll('image'),
        left = images.length,
        checkDone = function() {
          if (left === 0) {
            callback();
          }
        };

    checkDone();
    for (var i = 0; i < images.length; i++) {
      (function(image) {
        var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        if (href) {
          if (isExternal(href.value)) {
            console.warn("Cannot render embedded images linking to external hosts: "+href.value);
            return;
          }
        }
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        href = href || image.getAttribute('href');
        if (href) {
          img.src = href;
          img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
            left--;
            checkDone();
          }
          img.onerror = function() {
            console.log("Could not load "+href);
            left--;
            checkDone();
          }
        } else {
          left--;
          checkDone();
        }
      })(images[i]);
    }
  }

  function styles(el, selectorRemap) {
    var css = "";
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      try {
        var rules = sheets[i].cssRules;
      } catch (e) {
        console.warn("Stylesheet could not be loaded: "+sheets[i].href);
        continue;
      }

      if (rules != null) {
        for (var j = 0; j < rules.length; j++) {
          var rule = rules[j];
          if (typeof(rule.style) != "undefined") {
            var match, selectorText;

            try {
              selectorText = rule.selectorText;
            } catch(err) {
              console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
            }

            try {
              if (selectorText) {
                match = el.querySelector(selectorText);
              }
            } catch(err) {
              console.warn('Invalid CSS selector "' + selectorText + '"', err);
            }

            if (match) {
              var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
              css += selector + " { " + rule.style.cssText + " }\n";
            } else if(rule.cssText.match(/^@font-face/)) {
              css += rule.cssText + '\n';
            }
          }
        }
      }
    }
    return css;
  }

  function getDimension(el, clone, dim) {
    var v = (el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim]) ||
      (clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim))) ||
      el.getBoundingClientRect()[dim] ||
      parseInt(clone.style[dim]) ||
      parseInt(window.getComputedStyle(el).getPropertyValue(dim));
    return (typeof v === 'undefined' || v === null || isNaN(parseFloat(v))) ? 0 : v;
  }

  function reEncode(data) {
    data = encodeURIComponent(data);
    data = data.replace(/%([0-9A-F]{2})/g, function(match, p1) {
      var c = String.fromCharCode('0x'+p1);
      return c === '%' ? '%25' : c;
    });
    return decodeURIComponent(data);
  }

  out$.svgAsDataUri = function(el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.scale = options.scale || 1;
    options.responsive = options.responsive || false;
    var xmlns = "http://www.w3.org/2000/xmlns/";

    inlineImages(el, function() {
      var outer = document.createElement("div");
      var clone = el.cloneNode(true);
      var width, height;
      if(el.tagName == 'svg') {
        width = options.width || getDimension(el, clone, 'width');
        height = options.height || getDimension(el, clone, 'height');
      } else if(el.getBBox) {
        var box = el.getBBox();
        width = box.x + box.width;
        height = box.y + box.height;
        clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

        var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
        svg.appendChild(clone)
        clone = svg;
      } else {
        console.error('Attempted to render non-SVG element', el);
        return;
      }

      clone.setAttribute("version", "1.1");
      if (!clone.getAttribute('xmlns')) {
        clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
      }
      if (!clone.getAttribute('xmlns:xlink')) {
        clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
      }

      if (options.responsive) {
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      } else {
        clone.setAttribute("width", width * options.scale);
        clone.setAttribute("height", height * options.scale);
      }

      clone.setAttribute("viewBox", [
        options.left || 0,
        options.top || 0,
        width,
        height
      ].join(" "));

      var fos = clone.querySelectorAll('foreignObject > *');
      for (var i = 0; i < fos.length; i++) {
        fos[i].setAttributeNS(xmlns, "xmlns", "http://www.w3.org/1999/xhtml");
      }

      outer.appendChild(clone);

      var css = styles(el, options.selectorRemap);
      var s = document.createElement('style');
      s.setAttribute('type', 'text/css');
      s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
      var defs = document.createElement('defs');
      defs.appendChild(s);
      clone.insertBefore(defs, clone.firstChild);

      var svg = doctype + outer.innerHTML;
      var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(svg));
      if (cb) {
        cb(uri);
      }
    });
  }

  out$.svgAsPngUri = function(el, options, cb) {
    requireDomNode(el);

    out$.svgAsDataUri(el, options, function(uri) {
      var image = new Image();
      image.onload = function() {
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext('2d');
        if(options && options.backgroundColor){
          context.fillStyle = options.backgroundColor;
          context.fillRect(0, 0, canvas.width, canvas.height);
        }
        context.drawImage(image, 0, 0);
        var a = document.createElement('a'), png;
        try {
          png = canvas.toDataURL('image/png');
        } catch (e) {
          if ((typeof SecurityError !== 'undefined' && e instanceof SecurityError) || e.name == "SecurityError") {
            console.error("Rendered SVG images cannot be downloaded in this browser.");
            return;
          } else {
            throw e;
          }
        }
        cb(png);
      }
      image.onerror = function(error) {
        console.error('There was an error loading the data URI as an image', error);
      }
      image.src = uri;
    });
  }

  function download(name, uri) {
    var a = document.createElement('a');
    a.download = name;
    a.href = uri;
    document.body.appendChild(a);
    a.addEventListener("click", function(e) {
      a.parentNode.removeChild(a);
    });
    a.click();
  }

  out$.saveSvg = function(el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsDataUri(el, options, function(uri) {
      download(name, uri);
    });
  }

  out$.saveSvgAsPng = function(el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsPngUri(el, options, function(uri) {
      download(name, uri);
    });
  }

  // if define is defined create as an AMD module
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return out$;
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})();


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-stockcharts.20ef3cce78fd2c3fba46.js.map