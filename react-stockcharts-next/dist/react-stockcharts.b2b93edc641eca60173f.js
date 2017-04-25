(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "d3"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("React"), require("ReactDOM"), require("d3"));
	else
		root["ReStock"] = factory(root["React"], root["ReactDOM"], root["d3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 		script.src = __webpack_require__.p + "dist/" + chunkId + "." + {"0":"1cf437ea4691dc3c6179","1":"5be661891dba599553b5","2":"1c5ac211755f01a83532"}[chunkId] + ".js";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

// common components

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.utils = exports.version = exports.interactive = exports.helper = exports.annotation = exports.tooltip = exports.scale = exports.axes = exports.algorithm = exports.indicator = exports.coordinates = exports.series = exports.BackgroundText = exports.GenericComponent = exports.GenericChartComponent = exports.Chart = exports.ChartCanvas = undefined;

var _ChartCanvas = __webpack_require__(108);

var _ChartCanvas2 = _interopRequireDefault(_ChartCanvas);

var _Chart = __webpack_require__(35);

var _Chart2 = _interopRequireDefault(_Chart);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _GenericComponent = __webpack_require__(14);

var _GenericComponent2 = _interopRequireDefault(_GenericComponent);

var _BackgroundText = __webpack_require__(107);

var _BackgroundText2 = _interopRequireDefault(_BackgroundText);

var _series = __webpack_require__(117);

var series = _interopRequireWildcard(_series);

var _scale = __webpack_require__(116);

var scale = _interopRequireWildcard(_scale);

var _coordinates = __webpack_require__(112);

var coordinates = _interopRequireWildcard(_coordinates);

var _indicator = __webpack_require__(114);

var indicator = _interopRequireWildcard(_indicator);

var _algorithm = __webpack_require__(109);

var algorithm = _interopRequireWildcard(_algorithm);

var _annotation = __webpack_require__(110);

var annotation = _interopRequireWildcard(_annotation);

var _axes = __webpack_require__(111);

var axes = _interopRequireWildcard(_axes);

var _tooltip = __webpack_require__(118);

var tooltip = _interopRequireWildcard(_tooltip);

var _helper = __webpack_require__(113);

var helper = _interopRequireWildcard(_helper);

var _interactive = __webpack_require__(115);

var interactive = _interopRequireWildcard(_interactive);

var _utils = __webpack_require__(3);

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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isArray = exports.first = exports.overlayColors = exports.MOUSEUP = exports.MOUSEMOVE = exports.zipper = exports.slidingWindow = exports.shallowEqual = exports.noop = exports.identity = exports.merge = exports.mappedSlidingWindow = exports.accumulatingWindow = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.path = path;
exports.getClosestItemIndexes2 = getClosestItemIndexes2;
exports.getClosestValue = getClosestValue;
exports.d3Window = d3Window;
exports.getClosestItemIndexes = getClosestItemIndexes;
exports.getClosestItem = getClosestItem;
exports.rebind = rebind;
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _zipper = __webpack_require__(52);

var _zipper2 = _interopRequireDefault(_zipper);

var _merge = __webpack_require__(240);

var _merge2 = _interopRequireDefault(_merge);

var _slidingWindow = __webpack_require__(241);

var _slidingWindow2 = _interopRequireDefault(_slidingWindow);

var _identity = __webpack_require__(17);

var _identity2 = _interopRequireDefault(_identity);

var _noop = __webpack_require__(18);

var _noop2 = _interopRequireDefault(_noop);

var _shallowEqual = __webpack_require__(51);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _mappedSlidingWindow = __webpack_require__(239);

var _mappedSlidingWindow2 = _interopRequireDefault(_mappedSlidingWindow);

var _accumulatingWindow = __webpack_require__(238);

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

function getClosestItemIndexes2(array, value, accessor) {
	var left = _d2.default.bisector(accessor).left(array, value);
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

var overlayColors = exports.overlayColors = _d2.default.scale.category10();

function rebind(target, source, mappings) {
	if ((typeof mappings === "undefined" ? "undefined" : _typeof(mappings)) !== "object") {
		return _d2.default.rebind.apply(_d2.default, arguments);
	}
	Object.keys(mappings).forEach(function (targetName) {
		var method = source[mappings[targetName]];
		if (typeof method !== "function") {
			throw new Error("The method " + mappings[targetName] + " does not exist on the source object");
		}
		target[targetName] = function () {
			var value = method.apply(source, arguments);
			return value === source ? target : value;
		};
	});
	return target;
}

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

function clearCanvas(canvasList) {
	canvasList.forEach(function (each) {
		each.setTransform(1, 0, 0, 1, 0, 0);
		each.clearRect(-1, -1, each.canvas.width + 2, each.canvas.height + 2);
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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

var _GenericComponent2 = __webpack_require__(14);

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
			var _props = this.props;
			var clip = _props.clip;
			var edgeClip = _props.edgeClip;


			ctx.setTransform(1, 0, 0, 1, 0, 0);
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
	chartConfig: _react.PropTypes.object.isRequired
});

exports.default = GenericChartComponent;
function getAxisCanvas(contexts) {
	return contexts.axes;
}

/***/ },
/* 8 */
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

var _utils = __webpack_require__(3);

var i = 0;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.change = exports.compare = exports.elderRay = exports.forceIndex = exports.atr = exports.sto = exports.rsi = exports.macd = exports.renko = exports.pointAndFigure = exports.kagi = exports.heikinAshi = exports.bollingerband = exports.sma = exports.ema = undefined;

var _ema = __webpack_require__(22);

var _ema2 = _interopRequireDefault(_ema);

var _sma = __webpack_require__(189);

var _sma2 = _interopRequireDefault(_sma);

var _bollingerband = __webpack_require__(178);

var _bollingerband2 = _interopRequireDefault(_bollingerband);

var _heikinAshi = __webpack_require__(183);

var _heikinAshi2 = _interopRequireDefault(_heikinAshi);

var _kagi = __webpack_require__(184);

var _kagi2 = _interopRequireDefault(_kagi);

var _pointAndFigure = __webpack_require__(186);

var _pointAndFigure2 = _interopRequireDefault(_pointAndFigure);

var _renko = __webpack_require__(187);

var _renko2 = _interopRequireDefault(_renko);

var _macd = __webpack_require__(185);

var _macd2 = _interopRequireDefault(_macd);

var _rsi = __webpack_require__(188);

var _rsi2 = _interopRequireDefault(_rsi);

var _sto = __webpack_require__(190);

var _sto2 = _interopRequireDefault(_sto);

var _atr = __webpack_require__(27);

var _atr2 = _interopRequireDefault(_atr);

var _forceIndex = __webpack_require__(182);

var _forceIndex2 = _interopRequireDefault(_forceIndex);

var _elderRay = __webpack_require__(181);

var _elderRay2 = _interopRequireDefault(_elderRay);

var _compare = __webpack_require__(180);

var _compare2 = _interopRequireDefault(_compare);

var _change = __webpack_require__(179);

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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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


			var dataSeries = _d3.default.svg.line().defined(function (d) {
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
/* 14 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

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
	svgDraw: _d2.default.functor(null),
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
	isHover: _d2.default.functor(false),
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(3);

var _GenericChartComponent = __webpack_require__(7);

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
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },
/* 21 */,
/* 22 */
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

var _utils = __webpack_require__(3);

var _defaultOptionsForComputation = __webpack_require__(10);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.rotateXY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.drawOnCanvasHelper = drawOnCanvasHelper;
exports.svgHelper = svgHelper;
exports.getBarsSVG2 = getBarsSVG2;
exports.drawOnCanvas2 = drawOnCanvas2;
exports.getBars = getBars;

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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

			drawOnCanvasHelper(ctx, this.props, moreProps, xAccessor, _d2.default.layout.stack());
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;


			return _react2.default.createElement(
				"g",
				null,
				svgHelper(this.props, moreProps, xAccessor, _d2.default.layout.stack())
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


	var nest = _d2.default.nest().key(function (d) {
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
	var stack = arguments.length <= 6 || arguments[6] === undefined ? _utils.identity : arguments[6];
	var after = arguments.length <= 7 || arguments[7] === undefined ? _utils.identity : arguments[7];
	var baseAt = props.baseAt;
	var className = props.className;
	var fill = props.fill;
	var stroke = props.stroke;
	var widthRatio = props.widthRatio;
	var _props$spaceBetweenBa = props.spaceBetweenBar;
	var spaceBetweenBar = _props$spaceBetweenBa === undefined ? 0 : _props$spaceBetweenBa;


	var getClassName = _d2.default.functor(className);
	var getFill = _d2.default.functor(fill);
	var getBase = _d2.default.functor(baseAt);

	var width = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData))));
	var bw = width / (plotData.length - 1) * widthRatio;
	var barWidth = Math.round(bw);
	// console.log(barWidth)

	var eachBarWidth = (barWidth - spaceBetweenBar * (yAccessor.length - 1)) / yAccessor.length;

	var offset = barWidth === 1 ? 0 : 0.5 * bw;

	var layers = yAccessor.map(function (eachYAccessor, i) {
		return plotData.map(function (d) {
			return {
				series: xAccessor(d),
				datum: d,
				x: i,
				y: eachYAccessor(d),
				className: getClassName(d, i),
				stroke: stroke ? getFill(d, i) : "none",
				fill: getFill(d, i)
			};
		});
	});
	var data = stack(layers);

	var bars = _d2.default.merge(data).filter(function (d) {
		return (0, _utils.isDefined)(d.y);
	}).map(function (d) {
		// let baseValue = yScale.invert(getBase(xScale, yScale, d.datum));
		var y = yScale(d.y + (d.y0 || 0));
		/* let h = isDefined(d.y0) && d.y0 !== 0 && !isNaN(d.y0)
  	? yScale(d.y0) - y
  	: getBase(xScale, yScale, d.datum) - yScale(d.y)*/
		var h = getBase(xScale, yScale, d.datum) - yScale(d.y);
		// console.log(d.y, yScale.domain(), yScale.range())
		// let h = ;
		// if (d.y < 0) h = -h;
		if (h < 0) {
			y = y + h;
			h = -h;
		}
		/* console.log(d.series, d.datum.date, d.x,
  	getBase(xScale, yScale, d.datum), `d.y=${d.y}, d.y0=${d.y0}, y=${y}, h=${h}`)*/
		return {
			className: d.className,
			stroke: d.stroke,
			fill: d.fill,
			// series: d.series,
			// i: d.x,
			x: Math.round(xScale(d.series) - bw / 2),
			y: y,
			groupOffset: Math.round(offset - (d.x > 0 ? (eachBarWidth + spaceBetweenBar) * d.x : 0)),
			groupWidth: Math.round(eachBarWidth),
			offset: Math.round(offset),
			height: h,
			width: barWidth
		};
	});
	// console.log(bars)

	return after(bars);
}

exports.default = StackedBarSeries;

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
exports.renderSVG = renderSVG;
exports.drawOnCanvas = drawOnCanvas;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(3);

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
/* 27 */
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
			var atr = (0, _utils.isDefined)(prevATR) ? (prevATR * (windowSize - 1) + tr) / windowSize : _d2.default.sum(values) / windowSize;

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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 28 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _lodash = __webpack_require__(295);

var _lodash2 = _interopRequireDefault(_lodash);

var _Chart = __webpack_require__(35);

var _Chart2 = _interopRequireDefault(_Chart);

var _index = __webpack_require__(3);

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

			var yExtents = (0, _index.isDefined)(yExtentsProp) ? (Array.isArray(yExtentsProp) ? yExtentsProp : [yExtentsProp]).map(_d2.default.functor) : undefined;
			// console.log(yExtentsProp, yExtents);
			return {
				id: id,
				origin: _d2.default.functor(origin)(availableWidth, availableHeight),
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

	var realYDomain = yScale.invert ? _d2.default.extent(allYValues) : _d2.default.set(allYValues).values();

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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _shallowEqual = __webpack_require__(51);

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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
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

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _PureComponent2 = __webpack_require__(29);

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

var _utils = __webpack_require__(3);

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

			var chartConfig = this.context.chartConfig.filter(function (each) {
				return each.id === chartId;
			})[0];

			var width = chartConfig.width;
			var height = chartConfig.height;

			var canvasOriginX = 0.5 + chartConfig.origin[0] + this.context.margin.left;
			var canvasOriginY = 0.5 + chartConfig.origin[1] + this.context.margin.top;

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
	yScale: _d3.default.scale.linear(),
	flipYScale: false,
	yPan: true
};

Chart.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	chartConfig: _react.PropTypes.array,
	margin: _react.PropTypes.object.isRequired

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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

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


	var xFunc = _d2.default.functor(x);
	var yFunc = _d2.default.functor(y);

	var xPos = xFunc({ xScale: xScale, xAccessor: xAccessor, datum: datum, plotData: plotData });
	var yPos = yFunc({ yScale: yScale, datum: datum, plotData: plotData });


	return {
		xPos: xPos,
		yPos: yPos,
		text: _d2.default.functor(text)(datum),
		fill: _d2.default.functor(fill)(datum),
		tooltip: _d2.default.functor(tooltip)(datum)
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _AxisZoomCapture = __webpack_require__(167);

var _AxisZoomCapture2 = _interopRequireDefault(_AxisZoomCapture);

var _utils = __webpack_require__(3);

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
/* 46 */
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

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

var _ChartDataUtil = __webpack_require__(28);

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
			_d3.default.select(win).on(_utils.MOUSEMOVE, this.handleDrag).on(_utils.MOUSEUP, this.handleDragEnd);

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
			var e = _d3.default.event;
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
			var e = _d3.default.event;
			this.moveStartPosition = null;

			var win = (0, _utils.d3Window)(this.refs.component.getRef("capture"));

			_d3.default.select(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);

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
			_d3.default.select(win).on(_utils.MOUSEMOVE, this.handleDrag).on(_utils.MOUSEUP, this.handleDragEnd);

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
			var e = _d3.default.event;
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
			var e = _d3.default.event;
			this.moveStartPosition = null;

			var win = (0, _utils.d3Window)(this.refs.edge);

			_d3.default.select(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);

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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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
				isHover: _d2.default.functor(true),
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
	shouldDisableSnap: _d2.default.functor(false),
	stroke: "#000000",
	strokeWidth: 1,
	opacity: 1
};

exports.default = MouseLocationIndicator;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = financeDiscontinuousScale;

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tickLevels = [{ target: 50e2, level: 0 }, { target: 50e3, level: 1 }, { target: 10e4, level: 2 }, { target: 28e4, level: 3 }, { target: 55e4, level: 4 }, { target: 11e5, level: 5 }, { target: 21e5, level: 6 }, { target: 43e5, level: 7 }, { target: 59e5, level: 8 }, // not tested
{ target: 12e6, level: 9 }, // not tested
{ target: 58e6, level: 10 }, // not tested
{ target: 89e6, level: 11 }, { target: 11e7, level: 12 }, { target: 78e7, level: 13 }, { target: 16e8, level: 14 }, { target: 62e8, level: 15 }, { target: 10e20, level: 16 }];

var tickLevelBisector = _d3.default.bisector(function (d) {
	return d.target;
}).left;

function financeDiscontinuousScale(index, interval) {
	var backingLinearScale = arguments.length <= 2 || arguments[2] === undefined ? _d3.default.scale.linear() : arguments[2];


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

		var ticksSet = _d3.default.set(ticks);
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
/* 49 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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


			var newBase = _d2.default.functor(base);

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


			var newBase = _d2.default.functor(base);
			var areaSeries = _d2.default.svg.area().defined(function (d) {
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _StackedBarSeries = __webpack_require__(23);

var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);

var _utils = __webpack_require__(3);

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


			(0, _StackedBarSeries.drawOnCanvasHelper)(ctx, this.props, moreProps, xAccessor, _utils.identity);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;


			return _react2.default.createElement(
				"g",
				null,
				(0, _StackedBarSeries.svgHelper)(this.props, moreProps, xAccessor, _utils.identity)
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/* an extension to d3.zip so we call a function instead of an array */

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = zipper;

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _identity = __webpack_require__(17);

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function zipper() {
	var combine = _identity2.default;

	function zip() {
		var n = arguments.length;
		if (!n) return [];
		var i,
		    m = _d2.default.min(arguments, d3_zipLength),
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
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PureComponent2 = __webpack_require__(29);

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

var _utils = __webpack_require__(3);

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
/* 108 */
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

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _utils = __webpack_require__(3);

var _ChartDataUtil = __webpack_require__(28);

var _EventCapture = __webpack_require__(163);

var _EventCapture2 = _interopRequireDefault(_EventCapture);

var _CanvasContainer = __webpack_require__(162);

var _CanvasContainer2 = _interopRequireDefault(_CanvasContainer);

var _evaluator = __webpack_require__(213);

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

	var extent = typeof xExtentsProp === "function" ? xExtentsProp(data) : _d3.default.extent(xExtentsProp.map(function (d) {
		return _d3.default.functor(d);
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
				(0, _utils.clearCanvas)([canvases.axes, canvases.mouseCoord]);
			}
		}
	}, {
		key: "clearMouseCanvas",
		value: function clearMouseCanvas() {
			var canvases = this.getCanvasContexts();
			if (canvases && canvases.mouseCoord) {
				(0, _utils.clearCanvas)([canvases.mouseCoord]);
			}
		}
	}, {
		key: "clearThreeCanvas",
		value: function clearThreeCanvas() {
			var canvases = this.getCanvasContexts();
			if (canvases && canvases.axes) {
				(0, _utils.clearCanvas)([canvases.axes, canvases.mouseCoord, canvases.bg]);
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
				(0, _utils.clearCanvas)([contexts.mouseCoord]);
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
				_react2.default.createElement(_CanvasContainer2.default, { ref: "canvases", width: width, height: height, type: type, zIndex: zIndex }),
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
	xExtents: [_d3.default.min, _d3.default.max],
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
/* 109 */
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

var _utils = __webpack_require__(3);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Label = exports.SvgPathAnnotation = exports.LabelAnnotation = exports.Annotate = undefined;
exports.buyPath = buyPath;
exports.sellPath = sellPath;

var _Annotate = __webpack_require__(164);

var _Annotate2 = _interopRequireDefault(_Annotate);

var _LabelAnnotation = __webpack_require__(44);

var _LabelAnnotation2 = _interopRequireDefault(_LabelAnnotation);

var _SvgPathAnnotation = __webpack_require__(166);

var _SvgPathAnnotation2 = _interopRequireDefault(_SvgPathAnnotation);

var _Label = __webpack_require__(165);

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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YAxis = exports.XAxis = undefined;

var _XAxis = __webpack_require__(168);

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = __webpack_require__(169);

var _YAxis2 = _interopRequireDefault(_YAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.XAxis = _XAxis2.default;
exports.YAxis = _YAxis2.default;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CrossHairCursor = exports.MouseCoordinateY = exports.MouseCoordinateX = exports.CurrentCoordinate = exports.EdgeIndicator = undefined;

var _EdgeIndicator = __webpack_require__(172);

var _EdgeIndicator2 = _interopRequireDefault(_EdgeIndicator);

var _CurrentCoordinate = __webpack_require__(171);

var _CurrentCoordinate2 = _interopRequireDefault(_CurrentCoordinate);

var _MouseCoordinateX = __webpack_require__(173);

var _MouseCoordinateX2 = _interopRequireDefault(_MouseCoordinateX);

var _MouseCoordinateY = __webpack_require__(174);

var _MouseCoordinateY2 = _interopRequireDefault(_MouseCoordinateY);

var _CrossHairCursor = __webpack_require__(170);

var _CrossHairCursor2 = _interopRequireDefault(_CrossHairCursor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EdgeIndicator = _EdgeIndicator2.default;
exports.CurrentCoordinate = _CurrentCoordinate2.default;
exports.MouseCoordinateX = _MouseCoordinateX2.default;
exports.MouseCoordinateY = _MouseCoordinateY2.default;
exports.CrossHairCursor = _CrossHairCursor2.default;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fitWidth = exports.SaveChartAsImage = exports.TypeChooser = undefined;

var _TypeChooser = __webpack_require__(176);

var _TypeChooser2 = _interopRequireDefault(_TypeChooser);

var _SaveChartAsImage = __webpack_require__(175);

var _SaveChartAsImage2 = _interopRequireDefault(_SaveChartAsImage);

var _fitWidth = __webpack_require__(177);

var _fitWidth2 = _interopRequireDefault(_fitWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TypeChooser = _TypeChooser2.default;
exports.SaveChartAsImage = _SaveChartAsImage2.default;
exports.fitWidth = _fitWidth2.default;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.defaultOptionsForAppearance = exports.defaultOptionsForComputation = exports.compare = exports.elderImpulse = exports.change = exports.elderRay = exports.forceIndex = exports.stochasticOscillator = exports.atr = exports.rsi = exports.macd = exports.renko = exports.pointAndFigure = exports.kagi = exports.heikinAshi = exports.bollingerBand = exports.sma = exports.ema = undefined;

var _ema = __webpack_require__(197);

var _ema2 = _interopRequireDefault(_ema);

var _sma = __webpack_require__(205);

var _sma2 = _interopRequireDefault(_sma);

var _bollingerBand = __webpack_require__(192);

var _bollingerBand2 = _interopRequireDefault(_bollingerBand);

var _heikinAshi = __webpack_require__(199);

var _heikinAshi2 = _interopRequireDefault(_heikinAshi);

var _kagi = __webpack_require__(200);

var _kagi2 = _interopRequireDefault(_kagi);

var _pointAndFigure = __webpack_require__(202);

var _pointAndFigure2 = _interopRequireDefault(_pointAndFigure);

var _renko = __webpack_require__(203);

var _renko2 = _interopRequireDefault(_renko);

var _macd = __webpack_require__(201);

var _macd2 = _interopRequireDefault(_macd);

var _rsi = __webpack_require__(204);

var _rsi2 = _interopRequireDefault(_rsi);

var _atr = __webpack_require__(191);

var _atr2 = _interopRequireDefault(_atr);

var _stochasticOscillator = __webpack_require__(206);

var _stochasticOscillator2 = _interopRequireDefault(_stochasticOscillator);

var _forceIndex = __webpack_require__(198);

var _forceIndex2 = _interopRequireDefault(_forceIndex);

var _elderRay = __webpack_require__(196);

var _elderRay2 = _interopRequireDefault(_elderRay);

var _change = __webpack_require__(193);

var _change2 = _interopRequireDefault(_change);

var _elderImpulse = __webpack_require__(195);

var _elderImpulse2 = _interopRequireDefault(_elderImpulse);

var _compare = __webpack_require__(194);

var _compare2 = _interopRequireDefault(_compare);

var _defaultOptionsForComputation = __webpack_require__(10);

var defaultOptionsForComputation = _interopRequireWildcard(_defaultOptionsForComputation);

var _defaultOptionsForAppearance = __webpack_require__(15);

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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Brush = exports.ClickCallback = exports.FibonacciRetracement = exports.TrendLine = undefined;

var _TrendLine = __webpack_require__(210);

var _TrendLine2 = _interopRequireDefault(_TrendLine);

var _FibonacciRetracement = __webpack_require__(209);

var _FibonacciRetracement2 = _interopRequireDefault(_FibonacciRetracement);

var _ClickCallback = __webpack_require__(208);

var _ClickCallback2 = _interopRequireDefault(_ClickCallback);

var _Brush = __webpack_require__(207);

var _Brush2 = _interopRequireDefault(_Brush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TrendLine = _TrendLine2.default;
exports.FibonacciRetracement = _FibonacciRetracement2.default;
exports.ClickCallback = _ClickCallback2.default;
exports.Brush = _Brush2.default;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.financeDiscontinuousScale = exports.discontinuousTimeScaleProvider = exports.discontinuousTimeScaleProviderBuilder = undefined;
exports.defaultScaleProvider = defaultScaleProvider;

var _discontinuousTimeScaleProvider = __webpack_require__(212);

var _discontinuousTimeScaleProvider2 = _interopRequireDefault(_discontinuousTimeScaleProvider);

var _financeDiscontinuousScale = __webpack_require__(48);

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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StraightLine = exports.VolumeProfileSeries = exports.ElderRaySeries = exports.StochasticSeries = exports.RSISeries = exports.BollingerSeries = exports.MACDSeries = exports.RenkoSeries = exports.PointAndFigureSeries = exports.KagiSeries = exports.GroupedBarSeries = exports.StackedBarSeries = exports.BarSeries = exports.OHLCSeries = exports.CandlestickSeries = exports.LineSeries = exports.AreaSeries = exports.CircleMarker = exports.ScatterSeries = undefined;

var _AreaSeries = __webpack_require__(214);

var _AreaSeries2 = _interopRequireDefault(_AreaSeries);

var _ScatterSeries = __webpack_require__(227);

var _ScatterSeries2 = _interopRequireDefault(_ScatterSeries);

var _CircleMarker = __webpack_require__(217);

var _CircleMarker2 = _interopRequireDefault(_CircleMarker);

var _LineSeries = __webpack_require__(13);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _CandlestickSeries = __webpack_require__(216);

var _CandlestickSeries2 = _interopRequireDefault(_CandlestickSeries);

var _OHLCSeries = __webpack_require__(222);

var _OHLCSeries2 = _interopRequireDefault(_OHLCSeries);

var _BarSeries = __webpack_require__(50);

var _BarSeries2 = _interopRequireDefault(_BarSeries);

var _StackedBarSeries = __webpack_require__(23);

var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);

var _GroupedBarSeries = __webpack_require__(219);

var _GroupedBarSeries2 = _interopRequireDefault(_GroupedBarSeries);

var _KagiSeries = __webpack_require__(220);

var _KagiSeries2 = _interopRequireDefault(_KagiSeries);

var _PointAndFigureSeries = __webpack_require__(224);

var _PointAndFigureSeries2 = _interopRequireDefault(_PointAndFigureSeries);

var _RenkoSeries = __webpack_require__(226);

var _RenkoSeries2 = _interopRequireDefault(_RenkoSeries);

var _MACDSeries = __webpack_require__(221);

var _MACDSeries2 = _interopRequireDefault(_MACDSeries);

var _BollingerSeries = __webpack_require__(215);

var _BollingerSeries2 = _interopRequireDefault(_BollingerSeries);

var _RSISeries = __webpack_require__(225);

var _RSISeries2 = _interopRequireDefault(_RSISeries);

var _StochasticSeries = __webpack_require__(228);

var _StochasticSeries2 = _interopRequireDefault(_StochasticSeries);

var _ElderRaySeries = __webpack_require__(218);

var _ElderRaySeries2 = _interopRequireDefault(_ElderRaySeries);

var _VolumeProfileSeries = __webpack_require__(229);

var _VolumeProfileSeries2 = _interopRequireDefault(_VolumeProfileSeries);

var _StraightLine = __webpack_require__(16);

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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HoverTooltip = exports.StochasticTooltip = exports.RSITooltip = exports.BollingerBandTooltip = exports.MovingAverageTooltip = exports.SingleValueTooltip = exports.OHLCTooltip = exports.MACDTooltip = undefined;

var _MACDTooltip = __webpack_require__(232);

var _MACDTooltip2 = _interopRequireDefault(_MACDTooltip);

var _OHLCTooltip = __webpack_require__(234);

var _OHLCTooltip2 = _interopRequireDefault(_OHLCTooltip);

var _SingleValueTooltip = __webpack_require__(236);

var _SingleValueTooltip2 = _interopRequireDefault(_SingleValueTooltip);

var _MovingAverageTooltip = __webpack_require__(233);

var _MovingAverageTooltip2 = _interopRequireDefault(_MovingAverageTooltip);

var _BollingerBandTooltip = __webpack_require__(230);

var _BollingerBandTooltip2 = _interopRequireDefault(_BollingerBandTooltip);

var _RSITooltip = __webpack_require__(235);

var _RSITooltip2 = _interopRequireDefault(_RSITooltip);

var _StochasticTooltip = __webpack_require__(237);

var _StochasticTooltip2 = _interopRequireDefault(_StochasticTooltip);

var _HoverTooltip = __webpack_require__(231);

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
/* 119 */,
/* 120 */
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
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
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

var CanvasContainer = function (_Component) {
	_inherits(CanvasContainer, _Component);

	function CanvasContainer() {
		_classCallCheck(this, CanvasContainer);

		return _possibleConstructorReturn(this, (CanvasContainer.__proto__ || Object.getPrototypeOf(CanvasContainer)).apply(this, arguments));
	}

	_createClass(CanvasContainer, [{
		key: "getCanvasContexts",
		value: function getCanvasContexts() {
			var _refs = this.refs;
			var axesCanvasDOM = _refs.canvas_axes;
			var mouseCoordDOM = _refs.canvas_mouse_coordinates;
			var bgDOM = _refs.bg;


			if (this.refs.canvas_axes) {
				return {
					axes: axesCanvasDOM.getContext("2d"),
					mouseCoord: mouseCoordDOM.getContext("2d"),
					// interactive: interactiveDOM.getContext("2d"),
					bg: bgDOM.getContext("2d")
				};
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

			if (type === "svg") return null;
			return _react2.default.createElement(
				"div",
				{ style: { zIndex: zIndex } },
				_react2.default.createElement("canvas", { id: "bg", ref: "bg", width: width, height: height,
					style: { position: "absolute", left: 0, top: 0 } }),
				_react2.default.createElement("canvas", { id: "axes", ref: "canvas_axes", width: width, height: height,
					style: { position: "absolute", left: 0, top: 0 } }),
				_react2.default.createElement("canvas", { id: "mouse", ref: "canvas_mouse_coordinates", width: width, height: height,
					style: { position: "absolute", left: 0, top: 0 } })
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
	zIndex: _react.PropTypes.number
};

exports.default = CanvasContainer;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _ChartDataUtil = __webpack_require__(28);

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
			_d2.default.select(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);

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
					_d2.default.select(win).on(_utils.MOUSEMOVE, this.handlePan).on(_utils.MOUSEUP, this.handlePanEnd);
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
			var e = _d2.default.event;
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

			var e = _d2.default.event;

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
					_d2.default.select(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
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
				var dx = panStart.dx;
				var dy = panStart.dy;
				var panStartXScale = panStart.panStartXScale;
				var panOrigin = panStart.panOrigin;
				var chartsToPan = panStart.chartsToPan;


				var newPos = [touch.pageX - dx, touch.pageY - dy];

				if (panInProgress && panEnabled && onPan) {
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
/* 164 */
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

var _GenericChartComponent = __webpack_require__(7);

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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericComponent = __webpack_require__(14);

var _GenericComponent2 = _interopRequireDefault(_GenericComponent);

var _utils = __webpack_require__(3);

var _LabelAnnotation = __webpack_require__(44);

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
	return _d2.default.functor(props.text)(props);
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

	margin: _react.PropTypes.object.isRequired
};

Label.defaultProps = _extends({}, _LabelAnnotation.defaultProps, {
	selectCanvas: function selectCanvas(canvases) {
		return canvases.bg;
	}
});

function drawOnCanvas2(ctx, props, context, moreProps) {
	ctx.save();

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	var canvasOriginX = context.canvasOriginX;
	var canvasOriginY = context.canvasOriginY;
	var margin = context.margin;


	if ((0, _utils.isDefined)(canvasOriginX)) ctx.translate(canvasOriginX, canvasOriginY);else ctx.translate(margin.left + 0.5, margin.top + 0.5);

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
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

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


	var xFunc = _d2.default.functor(x);
	var yFunc = _d2.default.functor(y);

	var xPos = xFunc({ xScale: xScale, xAccessor: xAccessor, datum: datum, plotData: plotData });
	var yPos = yFunc({ yScale: yScale, datum: datum, plotData: plotData });


	return {
		x: xPos,
		y: yPos,
		fill: _d2.default.functor(fill)(datum),
		tooltip: _d2.default.functor(tooltip)(datum)
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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

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
				_d2.default.select((0, _utils.d3Window)(this.refs.capture)).on(_utils.MOUSEMOVE, this.handleDrag).on(_utils.MOUSEUP, this.handleDragEnd);

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
			var e = _d2.default.event;
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

				var center = _d2.default.mean(startScale.range());

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
			_d2.default.select((0, _utils.d3Window)(this.refs.capture)).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
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
/* 168 */
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

var _Axis = __webpack_require__(45);

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
/* 169 */
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

var _Axis = __webpack_require__(45);

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
/* 170 */
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

var _GenericComponent = __webpack_require__(14);

var _GenericComponent2 = _interopRequireDefault(_GenericComponent);

var _PureComponent2 = __webpack_require__(29);

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

var _utils = __webpack_require__(3);

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
				var margin = this.context.margin;

				var originX = 0.5 + margin.left;
				var originY = 0.5 + margin.top;

				ctx.save();
				ctx.setTransform(1, 0, 0, 1, 0, 0);
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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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
/* 172 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _EdgeCoordinateV = __webpack_require__(26);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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
	displayFormat: _d2.default.format(".2f"),
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
			fill: _d2.default.functor(fill)(item),
			fontFamily: fontFamily, fontSize: fontSize,
			textFill: _d2.default.functor(textFill)(item),
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
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EdgeCoordinateV = __webpack_require__(26);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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

/* function drawOnCanvas(canvasContext, props) {
	var { chartConfig, currentItem, xScale, mouseXY, currentCharts, show } = props;

	drawOnCanvasStatic(props, canvasContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);
}

// mouseContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem
function drawOnCanvasStatic(props, ctx, show, xScale, mouseXY, currentCharts, chartConfig, currentItem) {
	var { canvasOriginX, canvasOriginY } = props;

	var edgeProps = helper(props, xScale, chartConfig, mouseXY, currentItem);

	ctx.save();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.translate(canvasOriginX, canvasOriginY);

	EdgeCoordinate.drawOnCanvasStatic(ctx, edgeProps);

	ctx.restore();
} */

exports.default = MouseCoordinateX;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EdgeCoordinateV = __webpack_require__(26);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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

/* function drawOnCanvas(canvasContext, props) {
	var { chartConfig, currentItem, xScale, mouseXY, show, currentCharts } = props;

	drawOnCanvasStatic(props, canvasContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);
}

// mouseContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem
function drawOnCanvasStatic(props, ctx, show, xScale, mouseXY, currentCharts, chartConfig, currentItem) {
	var { canvasOriginX, canvasOriginY } = props;

	var edgeProps = helper(props, xScale, chartConfig, mouseXY, currentCharts, currentItem);

	ctx.save();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.translate(canvasOriginX, canvasOriginY);

	EdgeCoordinate.drawOnCanvasStatic(ctx, edgeProps);

	ctx.restore();
}
*/
exports.default = MouseCoordinateY;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _saveSvgAsPng = __webpack_require__(296);

var _saveSvgAsPng2 = _interopRequireDefault(_saveSvgAsPng);

var _utils = __webpack_require__(3);

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
/* 176 */
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
/* 177 */
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

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

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
	var minWidth = arguments.length <= 2 || arguments[2] === undefined ? 25 : arguments[2];

	var ResponsiveComponent = function (_Component) {
		_inherits(ResponsiveComponent, _Component);

		function ResponsiveComponent(props) {
			_classCallCheck(this, ResponsiveComponent);

			var _this = _possibleConstructorReturn(this, (ResponsiveComponent.__proto__ || Object.getPrototypeOf(ResponsiveComponent)).call(this, props));

			_this.handleWindowResize = _this.handleWindowResize.bind(_this);
			_this.getWrappedInstance = _this.getWrappedInstance.bind(_this);
			_this.saveNode = _this.saveNode.bind(_this);
			return _this;
		}

		_createClass(ResponsiveComponent, [{
			key: "saveNode",
			value: function saveNode(node) {
				this.node = node;
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("resize", this.handleWindowResize);
				var el = this.node;
				var w = el.parentNode.clientWidth;

				/* eslint-disable react/no-did-mount-set-state */
				this.setState({
					width: Math.max(w, minWidth)
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

				this.setState({
					width: Math.max(w, minWidth)
				});
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

				if (this.state && this.state.width) {
					return _react2.default.createElement(WrappedComponent, _extends({ width: this.state.width }, this.props, ref));
				} else {
					return _react2.default.createElement("div", ref);
				}
			}
		}]);

		return ResponsiveComponent;
	}(_react.Component);

	ResponsiveComponent.displayName = "fitWidth(" + getDisplayName(WrappedComponent) + ")";

	return ResponsiveComponent;
}

/***/ },
/* 178 */
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
			return _d2.default.mean(values);
		}).sourcePath(sourcePath);

		var bollingerBandAlgorithm = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
			var avg = (0, _utils.last)(values).mean;
			var stdDev = _d2.default.deviation(values, function (each) {
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _ema = __webpack_require__(22);

var _ema2 = _interopRequireDefault(_ema);

var _utils = __webpack_require__(3);

var _defaultOptionsForComputation = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 179 */
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

var _utils = __webpack_require__(3);

/***/ },
/* 180 */
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

var _utils = __webpack_require__(3);

/***/ },
/* 181 */
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
			return _d2.default.mean(values);
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _ema = __webpack_require__(22);

var _ema2 = _interopRequireDefault(_ema);

var _defaultOptionsForComputation = __webpack_require__(10);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 182 */
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

var _utils = __webpack_require__(3);

var _defaultOptionsForComputation = __webpack_require__(10);

/***/ },
/* 183 */
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

var _utils = __webpack_require__(3);

/***/ },
/* 184 */
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
			reversalThreshold = _d2.default.functor(reversal);
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _atr = __webpack_require__(27);

var _atr2 = _interopRequireDefault(_atr);

var _defaultOptionsForComputation = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 185 */
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

var _ema = __webpack_require__(22);

var _ema2 = _interopRequireDefault(_ema);

var _utils = __webpack_require__(3);

var _defaultOptionsForComputation = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 186 */
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

var _utils = __webpack_require__(3);

var _defaultOptionsForComputation = __webpack_require__(10);

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
/* 187 */
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
			brickSize = _d2.default.functor(fixedBrickSize);
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _atr = __webpack_require__(27);

var _atr2 = _interopRequireDefault(_atr);

var _defaultOptionsForComputation = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 188 */
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

			var avgGain = (0, _utils.isDefined)(prevAvgGain) ? (prevAvgGain * (windowSize - 1) + (0, _utils.last)(values).gain) / windowSize : _d2.default.mean(values, function (each) {
				return each.gain;
			});

			var avgLoss = (0, _utils.isDefined)(prevAvgLoss) ? (prevAvgLoss * (windowSize - 1) + (0, _utils.last)(values).loss) / windowSize : _d2.default.mean(values, function (each) {
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _defaultOptionsForComputation = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 189 */
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

		var mean = (0, _utils.slidingWindow)().windowSize(windowSize).sourcePath(sourcePath).accumulator(function (values) {
			return _d2.default.mean(values);
		});

		return mean(data);
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _defaultOptionsForComputation = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 190 */
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

			var highestHigh = _d2.default.max(values, high);
			var lowestLow = _d2.default.min(values, low);

			var currentClose = close((0, _utils.last)(values));
			var k = (currentClose - lowestLow) / (highestHigh - lowestLow) * 100;

			return k;
		});

		var kSmoothed = (0, _utils.slidingWindow)().skipInitial(windowSize - 1).windowSize(kWindowSize).accumulator(function (values) {
			return _d2.default.mean(values);
		});

		var dWindow = (0, _utils.slidingWindow)().skipInitial(windowSize - 1 + kWindowSize - 1).windowSize(dWindowSize).accumulator(function (values) {
			return _d2.default.mean(values);
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _defaultOptionsForComputation = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 191 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _defaultOptionsForComputation = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "ATR";

/***/ },
/* 192 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "sourcePath");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _defaultOptionsForAppearance = __webpack_require__(15);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _algorithm = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "BollingerBand";

/***/ },
/* 193 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "sourcePath");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Change";

/***/ },
/* 194 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	_d2.default.rebind(indicator, underlyingAlgorithm, "base", "mainKeys", "compareKeys");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Compare";

/***/ },
/* 195 */
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
	_d3.default.rebind(indicator, base, "id", "echo", "type", "stroke");
	// d3.rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");
	_d3.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _utils = __webpack_require__(3);

var _defaultOptionsForAppearance = __webpack_require__(15);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "ElderImpulse";

/***/ },
/* 196 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "sourcePath");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "ElderRay";

/***/ },
/* 197 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "sourcePath");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "EMA";

/***/ },
/* 198 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	_d2.default.rebind(indicator, underlyingAlgorithm, "sourcePath");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "ForceIndex";

/***/ },
/* 199 */
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

	_d2.default.rebind(indicator, base, "accessor", "stroke", "fill", "echo", "type");
	// d3.rebind(indicator, underlyingAlgorithm, "windowSize", "source");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "HeikinAshi";

/***/ },
/* 200 */
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

	_d2.default.rebind(indicator, base, "id", "stroke", "fill", "echo", "type");
	_d2.default.rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "indexMutator");
	// d3.rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Kagi";

/***/ },
/* 201 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "sourcePath", "fast", "slow", "signal", "undefinedLength");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _defaultOptionsForAppearance = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "MACD";

/***/ },
/* 202 */
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

	_d2.default.rebind(indicator, base, "id", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "indexMutator", "indexAccessor");
	_d2.default.rebind(indicator, underlyingAlgorithm, "reversal", "boxSize", "source");
	// d3.rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "PointAndFigure";

/***/ },
/* 203 */
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

	_d2.default.rebind(indicator, base, "id", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "indexMutator", "indexAccessor");
	_d2.default.rebind(indicator, underlyingAlgorithm, "reversal", "boxSize", "source");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Renko";

/***/ },
/* 204 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel", "domain", "tickValues");
	_d2.default.rebind(indicator, underlyingAlgorithm, "sourcePath", "windowSize");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "RSI";

/***/ },
/* 205 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "undefinedValue", "sourcePath", "skipInitial");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "SMA";

/***/ },
/* 206 */
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

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel", "domain", "tickValues");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "kWindowSize", "dWindowSize");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _algorithm = __webpack_require__(9);

var _baseIndicator = __webpack_require__(8);

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _defaultOptionsForAppearance = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "RSI";

/***/ },
/* 207 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _utils = __webpack_require__(3);

var _GenericChartComponent = __webpack_require__(7);

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
					isHover: _d2.default.functor(true),
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
/* 208 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(3);

var _GenericChartComponent = __webpack_require__(7);

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
				svgDraw: _d2.default.functor(null),
				isHover: _d2.default.functor(true),
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
/* 209 */
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

var _utils = __webpack_require__(3);

var _InteractiveLine = __webpack_require__(46);

var _InteractiveLine2 = _interopRequireDefault(_InteractiveLine);

var _MouseLocationIndicator = __webpack_require__(47);

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
/* 210 */
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

var _utils = __webpack_require__(3);

var _utils2 = __webpack_require__(211);

var _InteractiveLine = __webpack_require__(46);

var _InteractiveLine2 = _interopRequireDefault(_InteractiveLine);

var _MouseLocationIndicator = __webpack_require__(47);

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
/* 211 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getValueFromOverride = getValueFromOverride;

var _utils = __webpack_require__(3);

function getValueFromOverride(override, index, key, defaultValue) {
	if ((0, _utils.isDefined)(override) && override.index === index) return override[key];
	return defaultValue;
}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.discontinuousTimeScaleProviderBuilder = discontinuousTimeScaleProviderBuilder;

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _financeDiscontinuousScale = __webpack_require__(48);

var _financeDiscontinuousScale2 = _interopRequireDefault(_financeDiscontinuousScale);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yearFormat = "%Y";
var quarterFormat = "%b %Y";
var monthFormat = "%b";
var weekFormat = "%d %b";
var dayFormat = "%a %d";
var hourFormat = "%_I %p";
var minuteFormat = "%I:%M %p";
var secondFormat = "%I:%M:%S %p";
// const milliSecondFormat = d3.time.format("%L");

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

		var map = _d3.default.map();
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
				format: _d3.default.time.format(format)
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
/* 213 */
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

var _utils = __webpack_require__(3);

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
/* 214 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LineSeries = __webpack_require__(13);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _AreaOnlySeries = __webpack_require__(49);

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
/* 215 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LineSeries = __webpack_require__(13);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _AreaOnlySeries = __webpack_require__(49);

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
/* 216 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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

	var wickNest = _d2.default.nest().key(function (d) {
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

	var candleNest = _d2.default.nest().key(function (d) {
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

	var wickStroke = _d2.default.functor(wickStrokeProp);
	var className = _d2.default.functor(classNameProp);
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

	var fill = _d2.default.functor(fillProp);
	var stroke = _d2.default.functor(strokeProp);
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
/* 217 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Circle(props) {
	var className = props.className;
	var stroke = props.stroke;
	var strokeWidth = props.strokeWidth;
	var opacity = props.opacity;
	var fill = props.fill;
	var point = props.point;
	var r = props.r;

	var radius = _d2.default.functor(r)(point.datum);
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

	var radius = _d2.default.functor(r)(point.datum);

	ctx.moveTo(point.x, point.y);
	ctx.beginPath();
	ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.fill();
};

exports.default = Circle;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _OverlayBarSeries = __webpack_require__(223);

var _OverlayBarSeries2 = _interopRequireDefault(_OverlayBarSeries);

var _StraightLine = __webpack_require__(16);

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
/* 219 */
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

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _StackedBarSeries = __webpack_require__(23);

var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);

var _utils = __webpack_require__(3);

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


			(0, _StackedBarSeries.drawOnCanvasHelper)(ctx, this.props, moreProps, xAccessor, _utils.identity, postProcessor);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = this.context.xAccessor;

			// return <g>{svgHelper(this.props, moreProps, xAccessor, identity)}</g>;

			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-grouped-bar-series" },
				(0, _StackedBarSeries.svgHelper)(this.props, moreProps, xAccessor, _utils.identity, postProcessor)
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
/* 220 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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
				var dataSeries = _d2.default.svg.line().x(function (item) {
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
/* 221 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BarSeries = __webpack_require__(50);

var _BarSeries2 = _interopRequireDefault(_BarSeries);

var _LineSeries = __webpack_require__(13);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _StraightLine = __webpack_require__(16);

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
/* 222 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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


	var wickNest = _d2.default.nest().key(function (d) {
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


	var strokeFunc = _d2.default.functor(strokeProp);
	var classNameFunc = _d2.default.functor(classNamesProp);

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
/* 223 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _StackedBarSeries = __webpack_require__(23);

var _utils = __webpack_require__(3);

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


	var getClassName = _d2.default.functor(className);
	var getFill = _d2.default.functor(fill);
	var getBase = _d2.default.functor(baseAt);

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

	return _d2.default.merge(bars);
}

exports.default = OverlayBarSeries;

/***/ },
/* 224 */
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

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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
/* 225 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LineSeries = __webpack_require__(13);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _StraightLine = __webpack_require__(16);

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
/* 226 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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
/* 227 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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

		var fill = _d2.default.functor(mProps.fill);
		var stroke = _d2.default.functor(mProps.stroke);

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


	var nest = _d2.default.nest().key(function (d) {
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
/* 228 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LineSeries = __webpack_require__(13);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _StraightLine = __webpack_require__(16);

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
/* 229 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

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
	// fill: ({ type }) => { var c = type === "up" ? "#6BA583" : "#FF0000"; console.log(type, c); return c },
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

		var histogram = _d2.default.layout.histogram().value(source).bins(bins);

		var rollup = _d2.default.nest().key(function (d) {
			return d.direction;
		}).sortKeys(orient === "right" ? _d2.default.descending : _d2.default.ascending).rollup(function (leaves) {
			return _d2.default.sum(leaves, function (d) {
				return d.volume;
			});
		});

		var values = histogram(session);
		var volumeInBins = values.map(function (arr) {
			return arr.map(function (d) {
				return absoluteChange(d) > 0 ? { direction: "up", volume: volume(d) } : { direction: "down", volume: volume(d) };
			});
		}).map(function (arr) {
			return rollup.entries(arr);
		});

		var volumeValues = volumeInBins.map(function (each) {
			return _d2.default.sum(each.map(function (d) {
				return d.values;
			}));
		});

		var base = function base(xScale) {
			return (0, _utils.head)(xScale.range());
		};

		var _ref3 = orient === "right" ? [begin, begin + sessionWidth * maxProfileWidthPercent / 100] : [finish, finish - sessionWidth * (100 - maxProfileWidthPercent) / 100];

		var _ref4 = _slicedToArray(_ref3, 2);

		var start = _ref4[0];
		var end = _ref4[1];


		var xScale = _d2.default.scale.linear().domain([0, _d2.default.max(volumeValues)]).range([start, end]);

		var totalVolumes = volumeInBins.map(function (volumes) {

			var totalVolume = _d2.default.sum(volumes, function (d) {
				return d.values;
			});
			var totalVolumeX = xScale(totalVolume);
			var width = base(xScale) - totalVolumeX;
			var x = width < 0 ? totalVolumeX + width : totalVolumeX;

			var ws = volumes.map(function (d) {
				return {
					type: d.key,
					width: d.values * Math.abs(width) / totalVolume
				};
			});

			return { x: x, ws: ws, totalVolumeX: totalVolumeX };
		});

		var rects = _d2.default.zip(values, totalVolumes).map(function (_ref5) {
			var _ref6 = _slicedToArray(_ref5, 2);

			var d = _ref6[0];
			var _ref6$ = _ref6[1];
			var x = _ref6$.x;
			var ws = _ref6$.ws;

			var w1 = ws[0] || { type: "up", width: 0 };
			var w2 = ws[1] || { type: "down", width: 0 };

			return {
				y: yScale(d.x + d.dx),
				height: yScale(d.x - d.dx) - yScale(d.x),
				x: x,
				width: width,
				w1: w1.width,
				w2: w2.width,
				stroke1: _d2.default.functor(stroke)(w1),
				stroke2: _d2.default.functor(stroke)(w2),
				fill1: _d2.default.functor(fill)(w1),
				fill2: _d2.default.functor(fill)(w2)
			};
		});

		var sessionBg = {
			x: begin,
			y: (0, _utils.last)(rects).y,
			height: (0, _utils.head)(rects).y - (0, _utils.last)(rects).y + (0, _utils.head)(rects).height,
			width: sessionWidth
		};

		return { rects: rects, sessionBg: sessionBg };
	});

	return {
		rects: _d2.default.merge(allRects.map(function (d) {
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
/* 230 */
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

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

var _ToolTipText = __webpack_require__(12);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(11);

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

			var origin = _d3.default.functor(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];

			var tooltipLabel = _d3.default.functor(calculator.tooltipLabel());

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
	displayFormat: _d3.default.format(".2f"),
	origin: [0, 10]
};

exports.default = BollingerBandTooltip;

/***/ },
/* 231 */
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

var _GenericComponent = __webpack_require__(14);

var _GenericComponent2 = _interopRequireDefault(_GenericComponent);

var _utils = __webpack_require__(3);

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
	margin: _react.PropTypes.object.isRequired
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
	var bgFill = props.bgFill;
	var bgOpacity = props.bgOpacity;
	var backgroundShapeCanvas = props.backgroundShapeCanvas;
	var tooltipCanvas = props.tooltipCanvas;


	var originX = 0.5 + margin.left;
	var originY = 0.5 + margin.top;

	ctx.save();

	ctx.setTransform(1, 0, 0, 1, 0, 0);
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
/* 232 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _ToolTipText = __webpack_require__(12);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(11);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

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

			var origin = _d3.default.functor(originProp);

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
	displayFormat: _d3.default.format(".2f")
};

exports.default = MACDTooltip;
// export default MACDTooltip;

/***/ },
/* 233 */
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _ToolTipText = __webpack_require__(12);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(11);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

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

			var origin = _d2.default.functor(originProp);

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
	displayFormat: _d2.default.format(".2f"),
	origin: [0, 10],
	width: 65
};

exports.default = MovingAverageTooltip;

/***/ },
/* 234 */
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

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

var _ToolTipText = __webpack_require__(12);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(11);

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

			var origin = _d3.default.functor(originProp);

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
	xDisplayFormat: _d3.default.time.format("%Y-%m-%d"),
	volumeFormat: _d3.default.format(".4s"),
	ohlcFormat: _d3.default.format(".2f"),
	origin: [0, 0]
};

exports.default = OHLCTooltip;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = __webpack_require__(3);

var _ToolTipText = __webpack_require__(12);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(11);

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

			var origin = _d3.default.functor(originProp);

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
	displayFormat: _d3.default.format(".2f"),
	origin: [0, 0]
};

exports.default = RSITooltip;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _ToolTipText = __webpack_require__(12);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(11);

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

var _utils = __webpack_require__(3);

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

			var origin = _d3.default.functor(originProp);

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
	yDisplayFormat: _d3.default.format(".2f"),
	xAccessor: _utils.noop,
	yAccessor: _utils.identity
};

exports.default = SingleValueTooltip;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d2 = __webpack_require__(1);

var _d3 = _interopRequireDefault(_d2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GenericChartComponent = __webpack_require__(7);

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _ToolTipText = __webpack_require__(12);

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = __webpack_require__(11);

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

			var origin = _d3.default.functor(originProp);

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
	displayFormat: _d3.default.format(".2f"),
	origin: [0, 0]
};

exports.default = StochasticTooltip;

/***/ },
/* 238 */
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

	var accumulateTill = _d2.default.functor(false),
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
		accumulateTill = _d2.default.functor(x);
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _noop = __webpack_require__(18);

var _noop2 = _interopRequireDefault(_noop);

var _identity = __webpack_require__(17);

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 239 */
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
		var size = _d2.default.functor(windowSize).apply(this, arguments);
		var windowData = [];
		var accumulatorIdx = 0;
		var undef = _d2.default.functor(undefinedValue);
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _noop = __webpack_require__(18);

var _noop2 = _interopRequireDefault(_noop);

var _identity = __webpack_require__(17);

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 240 */
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

var _identity = __webpack_require__(17);

var _identity2 = _interopRequireDefault(_identity);

var _zipper = __webpack_require__(52);

var _zipper2 = _interopRequireDefault(_zipper);

var _noop = __webpack_require__(18);

var _noop2 = _interopRequireDefault(_noop);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 241 */
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

		var size = _d2.default.functor(windowSize).apply(this, arguments);
		var windowData = data.slice(skipInitial, size + skipInitial).map(sourceFunction);
		var accumulatorIdx = 0;
		var undef = _d2.default.functor(undefinedValue);
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

var _d = __webpack_require__(1);

var _d2 = _interopRequireDefault(_d);

var _noop = __webpack_require__(18);

var _noop2 = _interopRequireDefault(_noop);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
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
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120)))

/***/ },
/* 296 */
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
//# sourceMappingURL=react-stockcharts.b2b93edc641eca60173f.js.map