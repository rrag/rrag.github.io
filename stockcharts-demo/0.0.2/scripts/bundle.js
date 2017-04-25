/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(172);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var overlayColors = _d32["default"].scale.category10();
	
	var Utils = {
		overlayColors: overlayColors,
		isReactVersion13: function isReactVersion13() {
			var version = _react2["default"].version.split(".")[1];
			return version === "13";
		},
		isReactVersion14: function isReactVersion14() {
			return _react2["default"].version.split(".")[1] === "14";
		},
		cloneMe: function cloneMe(obj) {
			if (obj == null || typeof obj !== "object") {
				return obj;
			}
			if (obj instanceof Date) {
				return new Date(obj.getTime());
			}
			var temp = {}; // obj.constructor(); // changed
	
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					temp[key] = this.cloneMe(obj[key]);
				}
			}
			return temp;
		},
		displayDateFormat: _d32["default"].time.format("%Y-%m-%d"),
		displayNumberFormat: function displayNumberFormat(x) {
			return Utils.numberWithCommas(x.toFixed(2));
		},
		numberWithCommas: function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		isNumeric: function isNumeric(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		mergeRecursive: (function (_mergeRecursive) {
			function mergeRecursive(_x, _x2) {
				return _mergeRecursive.apply(this, arguments);
			}
	
			mergeRecursive.toString = function () {
				return _mergeRecursive.toString();
			};
	
			return mergeRecursive;
		})(function (obj1, obj2) {
			for (var p in obj2) {
				try {
					// Property in destination object set; update its value.
					if (obj2[p].constructor == Object) {
						obj1[p] = mergeRecursive(obj1[p], obj2[p]);
					} else {
						obj1[p] = obj2[p];
					}
				} catch (e) {
					// Property in destination object not set; create it and set its value.
					obj1[p] = obj2[p];
				}
			}
	
			return obj1;
		}),
		mousePosition: function mousePosition(e) {
			var container = e.currentTarget,
			    rect = container.getBoundingClientRect(),
			    x = e.clientX - rect.left - container.clientLeft,
			    y = e.clientY - rect.top - container.clientTop,
			    xy = [Math.round(x), Math.round(y)];
			return xy;
		},
		getValue: function getValue(d) {
			if (d instanceof Date) {
				return d.getTime();
			}
			return d;
		},
		getClosestItem: function getClosestItem(array, value, accessor) {
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
			if (accessor(array[lo]) === value) hi = lo;
			var closest = Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value) ? array[lo] : array[hi];
			// console.log(array[lo], array[hi], closest, lo, hi);
			return Utils.cloneMe(closest);
		},
		getClosestItemIndex: function getClosestItemIndex(array, value, accessor) {
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
			if (accessor(array[lo]) === value) hi = lo;
			var closestIndex = Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value) ? lo : hi;
	
			return closestIndex;
		},
		getClosestItemIndexes: function getClosestItemIndexes(array, value, accessor) {
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
			if (accessor(array[lo]) === value) hi = lo;
			// console.log(array[lo], array[hi], closestIndex, lo, hi);
			return {
				left: value > accessor(array[lo]) ? hi : lo,
				right: value >= accessor(array[hi]) ? hi + 1 : hi
			};
		},
	
		pluck: function pluck(array, key) {
			return array.map(function (each) {
				return Utils.getter(each, key);
			});
		},
		keysAsArray: function keysAsArray(obj) {
			return Object.keys(obj).filter(function (key) {
				return obj[key] !== null;
			}).map(function (key) {
				return obj[key];
			});
		},
		sum: function sum(array) {
			return array.reduce(function (d1, d2) {
				return d1 + d2;
			});
		},
		setter: function setter(obj, subObjectKey, key, value) {
			if (subObjectKey) {
				if (obj[subObjectKey] === undefined) obj[subObjectKey] = {};
				obj[subObjectKey][key] = value;
			} else {
				obj[key] = value;
			}
		},
		getter: function getter(obj, pluckKey) {
			var keys = pluckKey.split(".");
			var value;
			keys.forEach(function (key) {
				if (!value) value = obj[key];else value = value[key];
			});
			return value;
		},
		hexToRGBA: function hexToRGBA(inputHex, opacity) {
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
	};
	
	module.exports = Utils;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function getDisplayName(Series) {
		var name = Series.displayName || Series.name || "Series";
		return name;
	}
	
	function wrap(WrappedSeries) {
		var BaseCanvasSeries = (function (_React$Component) {
			_inherits(BaseCanvasSeries, _React$Component);
	
			function BaseCanvasSeries() {
				_classCallCheck(this, BaseCanvasSeries);
	
				_get(Object.getPrototypeOf(BaseCanvasSeries.prototype), "constructor", this).apply(this, arguments);
			}
	
			_createClass(BaseCanvasSeries, [{
				key: "componentDidMount",
				value: function componentDidMount() {
					var callback = WrappedSeries.drawOnCanvas;
					if (callback) {
						var type = this.props.type;
						var getCanvasContexts = this.context.getCanvasContexts;
	
						if (type !== "svg" && getCanvasContexts !== undefined) {
							var contexts = getCanvasContexts();
							var defaultProps = WrappedSeries.defaultProps;
	
							var props = _extends({}, defaultProps, this.props);
							if (contexts) BaseCanvasSeries.baseReStockDrawOnCanvasHelper(contexts.axes, this.context, props, callback);
						}
					}
				}
			}, {
				key: "componentDidUpdate",
				value: function componentDidUpdate() {
					this.componentDidMount();
				}
			}, {
				key: "componentWillMount",
				value: function componentWillMount() {
					this.componentWillReceiveProps(this.props, this.context);
				}
			}, {
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps, nextContext) {
					var callback = WrappedSeries.drawOnCanvas;
					if (callback) {
						var canvasOriginX = nextContext.canvasOriginX;
						var canvasOriginY = nextContext.canvasOriginY;
						var height = nextContext.height;
						var width = nextContext.width;
						var compareSeries = nextContext.compareSeries;
						var indicator = nextContext.indicator;
						var xAccessor = nextContext.xAccessor;
						var yAccessor = nextContext.yAccessor;
						var seriesId = nextContext.seriesId;
						var chartId = nextContext.chartId;
	
						var canvasOrigin = [canvasOriginX, canvasOriginY];
	
						var defaultProps = WrappedSeries.defaultProps;
	
						var props = _extends({}, defaultProps, nextProps);
	
						var draw = BaseCanvasSeries.baseReStockDrawOnCanvas.bind(null, props, callback, canvasOrigin, height, width, compareSeries, indicator, xAccessor, yAccessor);
	
						nextContext.secretToSuperFastCanvasDraw.push({
							chartId: chartId,
							seriesId: seriesId,
							draw: draw
						});
					}
				}
			}, {
				key: "render",
				value: function render() {
					var _context = this.context;
					var type = _context.type;
					var height = _context.height;
					var width = _context.width;
					var compareSeries = _context.compareSeries;
					var indicator = _context.indicator;
					var xAccessor = _context.xAccessor;
					var yAccessor = _context.yAccessor;
					var xScale = _context.xScale;
					var yScale = _context.yScale;
					var plotData = _context.plotData;
					var stroke = _context.stroke;
					var fill = _context.fill;
	
					var callback = WrappedSeries.drawOnCanvas;
	
					if (type !== "svg" && callback !== undefined) return null;
	
					var defaultProps = WrappedSeries.defaultProps;
	
					return _react2["default"].createElement(WrappedSeries, _extends({ ref: "wrappedSeries"
					}, defaultProps, {
						type: type,
						height: height, width: width,
						compareSeries: compareSeries,
						indicator: indicator,
						xAccessor: xAccessor, yAccessor: yAccessor,
						xScale: xScale, yScale: yScale,
						stroke: stroke, fill: fill,
						plotData: plotData
					}, this.props));
				}
			}]);
	
			return BaseCanvasSeries;
		})(_react2["default"].Component);
	
		;
	
		BaseCanvasSeries.displayName = "wrap(" + getDisplayName(WrappedSeries) + ")";
	
		BaseCanvasSeries.contextTypes = {
			getCanvasContexts: _react2["default"].PropTypes.func,
			canvasOriginX: _react2["default"].PropTypes.number,
			canvasOriginY: _react2["default"].PropTypes.number,
			height: _react2["default"].PropTypes.number.isRequired,
			width: _react2["default"].PropTypes.number.isRequired,
			secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired,
			chartId: _react2["default"].PropTypes.number.isRequired,
			seriesId: _react2["default"].PropTypes.number.isRequired,
			stroke: _react2["default"].PropTypes.string,
			fill: _react2["default"].PropTypes.string,
	
			type: _react2["default"].PropTypes.string,
			indicator: _react2["default"].PropTypes.func,
			xScale: _react2["default"].PropTypes.func.isRequired,
			yScale: _react2["default"].PropTypes.func.isRequired,
			xAccessor: _react2["default"].PropTypes.func.isRequired,
			yAccessor: _react2["default"].PropTypes.func.isRequired,
			compareSeries: _react2["default"].PropTypes.array.isRequired,
			plotData: _react2["default"].PropTypes.array.isRequired
		};
	
		BaseCanvasSeries.baseReStockDrawOnCanvasHelper = function (canvasContext, context, props, callback) {
			var height = context.height;
			var width = context.width;
			var compareSeries = context.compareSeries;
			var indicator = context.indicator;
			var xAccessor = context.xAccessor;
			var yAccessor = context.yAccessor;
			var xScale = context.xScale;
			var yScale = context.yScale;
			var plotData = context.plotData;
			var canvasOriginX = context.canvasOriginX;
			var canvasOriginY = context.canvasOriginY;
	
			var canvasOrigin = [canvasOriginX, canvasOriginY];
	
			BaseCanvasSeries.baseReStockDrawOnCanvas(props, callback, canvasOrigin, height, width, compareSeries, indicator, xAccessor, yAccessor, canvasContext, xScale, yScale, plotData);
		};
	
		BaseCanvasSeries.baseReStockDrawOnCanvas = function (props, callback, canvasOrigin, height, width, compareSeries, indicator, xAccessor, yAccessor, ctx, xScale, yScale, plotData) {
			ctx.save();
	
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.translate(canvasOrigin[0], canvasOrigin[1]);
	
			ctx.beginPath();
			ctx.rect(-1, -1, width + 1, height + 1);
			ctx.clip();
	
			if (callback) {
				var newProps = (0, _objectAssign2["default"])({}, { height: height, width: width, compareSeries: compareSeries, indicator: indicator, xAccessor: xAccessor, yAccessor: yAccessor }, props);
				callback(newProps, ctx, xScale, yScale, plotData);
			}
	
			ctx.restore();
		};
	
		Object.keys(WrappedSeries).filter(function (key) {
			return key !== "propTypes";
		}).filter(function (key) {
			return key !== "defaultProps";
		}).filter(function (key) {
			return key !== "displayName";
		}).filter(function (key) {
			return key !== "contextTypes";
		}).filter(function (key) {
			return key !== "childContextTypes";
		}).forEach(function (key) {
			return BaseCanvasSeries[key] = WrappedSeries[key];
		});
	
		// console.log(Object.keys(BaseCanvasSeries))
		return BaseCanvasSeries;
	}
	
	exports["default"] = wrap;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = d3;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsScaleUtils = __webpack_require__(127);
	
	var _utilsScaleUtils2 = _interopRequireDefault(_utilsScaleUtils);
	
	var _utilsOverlayUtils = __webpack_require__(126);
	
	var _utilsOverlayUtils2 = _interopRequireDefault(_utilsOverlayUtils);
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var overlayColors = _utils2["default"].overlayColors;
	var pluck = _utils2["default"].pluck;
	var keysAsArray = _utils2["default"].keysAsArray;
	
	var ChartDataUtil = {
		containsChart: function containsChart(props) {
			return this.getCharts(props).length > 0;
		},
		getCharts: function getCharts(props) {
			return this.getChildren(props.children, /Chart$/);
		},
		getChartDataForChart: function getChartDataForChart(props, context) {
			return this.getChartDataForChartNew(context.chartData, props.forChart);
		},
		getCurrentItemForChart: function getCurrentItemForChart(props, context) {
			return this.getCurrentItemForChartNew(context.currentItems, props.forChart);
		},
		getChartDataForChartNew: function getChartDataForChartNew(chartData, chartId) {
			return chartData.filter(function (each) {
				return each.id === chartId;
			})[0];
		},
		getCurrentItemForChartNew: function getCurrentItemForChartNew(currentItems, chartId) {
			var currentItem = currentItems.filter(function (each) {
				return each.id === chartId;
			})[0];
			var item = currentItem !== undefined ? currentItem.data : {};
			return item;
		},
		getChartOrigin: function getChartOrigin(origin, contextWidth, contextHeight) {
			var originCoordinates = typeof origin === "function" ? origin(contextWidth, contextHeight) : origin;
			return originCoordinates;
		},
		getChartData: function getChartData(props, innerDimensions, partialData, fullData, other, domainL, domainR) {
			var _this = this;
	
			var charts = this.getCharts(props);
	
			return charts.map(function (each) {
				var chartProps = each.props;
				var config = _this.getChartConfigFor(innerDimensions, chartProps, partialData, fullData, other);
				var plot = _this.getChartPlotFor(config, partialData, domainL, domainR);
	
				// console.log(config.compareSeries);
	
				return {
					id: each.props.id,
					config: config,
					plot: plot
				};
			});
		},
		getChildren: function getChildren(children, regex) {
			var matchingChildren = [];
			_react2["default"].Children.forEach(children, function (child) {
				if (_react2["default"].isValidElement(child) && regex.test(child.props.namespace)) matchingChildren.push(child);
			});
			return matchingChildren;
		},
		getMainChart: function getMainChart(children) {
			var eventCapture = this.getChildren(children, /EventCapture$/);
			if (eventCapture.length > 1) throw new Error("only one EventCapture allowed");
			if (eventCapture.length > 0) return eventCapture[0].props.mainChart;
			if (eventCapture.length === 0) return this.getChildren(children, /Chart$/)[0].props.id;
		},
		getClosestItem: function getClosestItem(plotData, mouseXY, chartData) {
			// console.log(chartData);
			var xValue = chartData.plot.scales.xScale.invert(mouseXY[0]);
			var item = _utils2["default"].getClosestItem(plotData, xValue, chartData.config.xAccessor);
			return item;
		},
		getDimensions: function getDimensions(innerDimension, chartProps, margin) {
	
			// console.log(margin);
			var availableWidth = innerDimension.width;
			var availableHeight = innerDimension.height;
	
			var fullWidth = chartProps.width || availableWidth;
			var fullHeight = chartProps.height || availableHeight;
	
			return {
				availableWidth: availableWidth,
				availableHeight: availableHeight,
				width: fullWidth,
				height: fullHeight
			};
		},
		getChartConfigFor: function getChartConfigFor(innerDimension, chartProps, partialData, fullData, passThroughProps) {
			var padding = chartProps.padding;
			var margin = chartProps.margin;
	
			var dimensions = this.getDimensions(innerDimension, chartProps);
			// var indicator = this.getIndicator(chartProps);
			// this.calculateIndicator(fullData, indicator);
	
			// var accessors = this.getXYAccessors(chartProps, passThroughProps, indicator);
			// identify overlays
			var xAccessor = this.getXAccessor(chartProps, passThroughProps);
			var overlaysToAdd = this.identifyOverlaysToAdd(chartProps);
			var compareBase = this.identifyCompareBase(chartProps);
			var compareSeries = this.identifyCompareSeries(chartProps);
			// console.log(compareBase, compareSeries);
			// calculate overlays
			this.calculateOverlays(fullData, overlaysToAdd);
			// this.calculateRateOfReturn(fullData, compareSeries, compareBase, accessors.yAccessor);
	
			var origin = typeof chartProps.origin === "function" ? chartProps.origin(dimensions.availableWidth, dimensions.availableHeight) : chartProps.origin;
	
			var scales = this.defineScales(chartProps, partialData, passThroughProps);
	
			var indicatorsWithTicks = overlaysToAdd.filter(function (overlay) {
				return overlay.indicator !== undefined;
			}).filter(function (overlay) {
				return overlay.indicator.yTicks !== undefined;
			});
	
			var yTicks;
			if (indicatorsWithTicks.length > 0) {
				yTicks = indicatorsWithTicks.map(function (overlay) {
					return overlay.indicator.yTicks();
				}).reduce(function (ticks1, ticks2) {
					return ticks1.concat(ticks2);
				});
			}
	
			var config = {
				width: dimensions.width,
				height: dimensions.height,
				mouseCoordinates: {
					at: chartProps.yMousePointerDisplayLocation,
					format: chartProps.yMousePointerDisplayFormat
				},
				// indicator: indicator,
				// indicatorOptions: indicator && indicator.options(),
				// domain: indicator && indicator.domain && indicator.domain(),
				origin: origin,
				padding: padding,
				xAccessor: xAccessor,
				overlays: overlaysToAdd,
				compareBase: compareBase,
				compareSeries: compareSeries,
				scaleType: scales,
				yTicks: yTicks
			};
			return config;
		},
		getChartPlotFor: function getChartPlotFor(config, partialData, domainL, domainR) {
			var yaccessors = pluck(keysAsArray(config.overlays), "yAccessor");
			// console.log(yaccessors);
			if (config.compareSeries.length > 0) {
				this.updateComparisonData(partialData, config.compareBase, config.compareSeries);
				yaccessors = [function (d) {
					return d.compare;
				}];
			}
			var xyValues = _utilsScaleUtils2["default"].flattenData(partialData, [config.xAccessor], yaccessors);
	
			var overlayValues = this.updateOverlayFirstLast(partialData, config.overlays);
			var indicators = pluck(keysAsArray(config.overlays), "indicator");
			var domains = indicators.filter(function (indicator) {
				return indicator !== undefined;
			}).filter(function (indicator) {
				return indicator.domain !== undefined;
			}).map(function (indicator) {
				return indicator.domain();
			});
	
			var domain;
			if (domains.length > 0) {
				domain = domains.reduce(function (a, b) {
					return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
				});
			}
	
			var scales = this.updateScales(xyValues, config.scaleType, partialData, config.width, config.height, config.padding, domain);
	
			if (domainL !== undefined && domainR !== undefined) {
				scales.xScale.domain([domainL, domainR]);
			}
	
			var plot = {
				overlayValues: overlayValues,
				scales: scales
			};
			return plot;
		},
		getCompareYAccessors: function getCompareYAccessors(compareWith) {
			var yAccessors = compareWith.map(function (eachCompare) {
				return function (d) {
					return d["compare_" + eachCompare.id + "_percent"];
				};
			});
			yAccessors.push(function (d) {
				return d.compare_base_percent;
			});
			return yAccessors;
		},
		updateComparisonData: function updateComparisonData(partialData, compareBase, compareSeries) {
	
			var first = partialData[0];
			var base = compareBase(first);
	
			partialData.forEach(function (d) {
				d.compare = {};
	
				d.compare.open = (d.open - base) / base;
				d.compare.high = (d.high - base) / base;
				d.compare.low = (d.low - base) / base;
				d.compare.close = (d.close - base) / base;
	
				compareSeries.forEach(function (eachSeries) {
					var key = "compare_" + eachSeries.id;
					d.compare[key] = (eachSeries.yAccessor(d) - eachSeries.yAccessor(first)) / eachSeries.yAccessor(first);
				});
			});
	
			// console.table(partialData);
			// console.log(partialData[7].compare);
		},
	
		defineScales: function defineScales(props, data, passThroughProps) {
			var xScale = props.xScale,
			    yScale = props.yScale;
	
			if (xScale === undefined && passThroughProps) xScale = passThroughProps.xScale;
	
			if (xScale === undefined) {
				var each = data[0];
				if (typeof each === "object") {
					Object.keys(each).forEach(function (key) {
						if (Object.prototype.toString.call(each[key]) === "[object Date]") {
							xScale = _d32["default"].time.scale();
						}
					});
				}
				if (xScale === undefined) xScale = _d32["default"].scale.linear();
				// xScale = polyLinearTimeScale();
			}
			if (yScale === undefined) {
				yScale = _d32["default"].scale.linear();
			}
			return { xScale: xScale, yScale: yScale };
		},
		getIndicator: function getIndicator(props) {
			var indicator; // = new Array();
			_react2["default"].Children.forEach(props.children, function (child) {
				if (["ReStock.DataSeries"].indexOf(child.props.namespace) > -1) {
	
					if (child.props && child.props.indicator) {
						var indicatorProp = child.props.indicator;
						indicator = indicatorProp(child.props.options, props, child.props);
					}
				}
			});
			return indicator;
		},
		getXAccessor: function getXAccessor(props, passThroughProps) {
			var xAccessor = passThroughProps !== undefined && passThroughProps.xAccessor || props.xAccessor !== undefined && props.xAccessor;
			return xAccessor;
		},
		getXYAccessors: function getXYAccessors(props, passThroughProps, indicator) {
			var accessor = { xAccessor: null, yAccessor: null };
	
			_react2["default"].Children.forEach(props.children, function (child) {
				if (["ReStock.DataSeries"].indexOf(child.props.namespace) > -1) {
					if (child.props) {
	
						var xAccessor = passThroughProps !== undefined && passThroughProps.xAccessor ? passThroughProps.xAccessor : child.props.xAccessor;
						accessor.xAccessor = xAccessor;
						accessor.yAccessor = child.props.yAccessor;
					}
				}
			});
			if (!accessor.yAccessor && indicator) {
				accessor.yAccessor = indicator.yAccessor();
			}
			// if (indicator) console.log(indicator.yAccessor());
	
			return accessor;
		},
		identifyOverlaysToAdd: function identifyOverlaysToAdd(chartProps) {
			var overlaysToAdd = [];
			_react2["default"].Children.forEach(chartProps.children, function (child) {
				if (_react2["default"].isValidElement(child) && /DataSeries$/.test(child.props.namespace)) {
					var yAccessor = child.props.yAccessor;
					var indicatorProp = child.props.indicator;
					if (yAccessor === undefined && indicatorProp === undefined) {
						console.error("Either have yAccessor or indicator which provides a yAccessor for Chart " + chartProps.id + " DataSeries " + child.props.id);
					}
					var indicator = indicatorProp !== undefined ? indicatorProp(child.props.options, chartProps, child.props) : undefined;
					var _child$props = child.props;
					var stroke = _child$props.stroke;
					var fill = _child$props.fill;
	
					if (stroke === undefined && indicator !== undefined && indicator.stroke !== undefined) stroke = indicator.stroke();
					if (fill === undefined && indicator !== undefined && indicator.fill !== undefined) fill = indicator.fill();
					var overlay = {
						id: child.props.id,
						chartId: chartProps.id,
						yAccessor: yAccessor || indicator.yAccessor(),
						indicator: indicator,
						stroke: stroke,
						fill: fill
					};
					// stroke: indicator.options().stroke || overlayColors(child.props.id)
					overlaysToAdd.push(overlay);
				}
			});
			return overlaysToAdd;
		},
		identifyCompareBase: function identifyCompareBase(props) {
			var compareBase;
			_react2["default"].Children.forEach(props.children, function (child) {
				if (_react2["default"].isValidElement(child) && /DataSeries$/.test(child.props.namespace)) {
					compareBase = child.props.compareBase;
				}
			});
			return compareBase;
		},
		identifyCompareSeries: function identifyCompareSeries(props) {
			var overlaysToAdd = [];
			_react2["default"].Children.forEach(props.children, function (child) {
				if (_react2["default"].isValidElement(child) && /DataSeries$/.test(child.props.namespace)) {
					_react2["default"].Children.forEach(child.props.children, function (grandChild) {
						if (_react2["default"].isValidElement(grandChild) && /CompareSeries$/.test(grandChild.props.namespace)) {
							overlaysToAdd.push({
								yAccessor: grandChild.props.yAccessor,
								id: grandChild.props.id,
								stroke: grandChild.props.stroke || overlayColors(grandChild.props.id),
								displayLabel: grandChild.props.displayLabel,
								percentYAccessor: function percentYAccessor(d) {
									return d.compare["compare_" + grandChild.props.id];
								}
							});
						}
					});
				}
			});
			return overlaysToAdd;
		},
		calculateOverlays: function calculateOverlays(fullData, overlays) {
			if (Array.isArray(fullData)) {
				overlays.filter(function (eachOverlay) {
					return eachOverlay.id !== undefined;
				}).forEach(function (overlay) {
					// OverlayUtils.calculateOverlay(fullData, overlay);
					overlay.indicator.calculate(fullData[key]);
				});
			} else {
				Object.keys(fullData).filter(function (key) {
					return ["D", "W", "M"].indexOf(key) > -1;
				}).forEach(function (key) {
					overlays.filter(function (eachOverlay) {
						return eachOverlay.indicator !== undefined;
					}).forEach(function (overlay) {
						overlay.indicator.calculate(fullData[key]);
						// OverlayUtils.calculateOverlay(fullData[key], overlay);
					});
				});
			}
			// console.table(fullData.M);
			// console.log(overlays);
		},
		calculateIndicator: function calculateIndicator(fullData, indicator) {
			Object.keys(fullData).filter(function (key) {
				return ["D", "W", "M"].indexOf(key) > -1;
			}).forEach(function (key) {
				if (indicator) indicator.calculate(fullData[key]);
			});
		},
		updateOverlayFirstLast: function updateOverlayFirstLast(data, overlays) {
			// console.log("updateOverlayFirstLast");
			var overlayValues = [];
	
			overlays.forEach(function (eachOverlay) {
				// console.log(JSON.stringify(first), Object.keys(first), yAccessor(first));
				overlayValues.push({
					id: eachOverlay.id,
					first: _utilsOverlayUtils2["default"].firstDefined(data, eachOverlay.yAccessor),
					last: _utilsOverlayUtils2["default"].lastDefined(data, eachOverlay.yAccessor)
				});
			});
			return overlayValues;
		},
		updateScales: function updateScales(xyValues, scales, data, width, height, padding, overrideDomain) {
			// console.log("updateScales");
			// width = width - margin.left - margin.right/**/
			// height = height - margin.top - margin.bottom/**/
	
			scales.xScale.range([padding.left, width - padding.right]);
			// if polylinear scale then set data
			if (scales.xScale.isPolyLinear && scales.xScale.isPolyLinear()) {
				scales.xScale.data(data);
			} else {
				// else set the domain
				scales.xScale.domain(_d32["default"].extent(xyValues.xValues));
			}
	
			scales.yScale.range([height - padding.top, padding.bottom]);
	
			if (overrideDomain !== undefined) {
				scales.yScale.domain(overrideDomain);
			} else {
				var domain = _d32["default"].extent(xyValues.yValues);
				scales.yScale.domain(domain);
			}
	
			return {
				xScale: scales.xScale.copy(),
				yScale: scales.yScale.copy()
			};
		},
		getCurrentItems: function getCurrentItems(chartData, mouseXY, plotData) {
			return chartData.map(function (eachChartData) {
				var xValue = eachChartData.plot.scales.xScale.invert(mouseXY[0]);
				var item = _utils2["default"].getClosestItem(plotData, xValue, eachChartData.config.xAccessor);
				return { id: eachChartData.id, data: item };
			});
		},
		getDataToPlotForDomain: function getDataToPlotForDomain(domainL, domainR, data, width, xAccessor) {
			var threshold = 0.5; // number of datapoints per 1 px
			var allowedIntervals = ["D", "W", "M"];
			// console.log(domainL, domainR, data, width);
	
			var dataForInterval, filteredData, interval, leftX, rightX, leftIndex, rightIndex;
			for (var i = 0; i < allowedIntervals.length; i++) {
				interval = allowedIntervals[i];
				dataForInterval = data[interval];
	
				leftIndex = _utils2["default"].getClosestItemIndexes(dataForInterval, domainL, xAccessor).left;
				rightIndex = _utils2["default"].getClosestItemIndexes(dataForInterval, domainR, xAccessor).right;
	
				// leftIndex = leftX.left;
				// rightIndex = rightX.right;
	
				filteredData = dataForInterval.slice(leftIndex, rightIndex);
	
				// console.log(filteredData.length, width * threshold);
				if (filteredData.length < width * threshold) break;
			}
	
			// console.log(leftX, rightX,  (dd[leftX.left]), xAccessor(dd[rightX.right]));
	
			return {
				interval: interval,
				data: filteredData,
				leftIndex: leftIndex,
				rightIndex: rightIndex
			};
		}
	};
	
	module.exports = ChartDataUtil;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(183)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(184)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(187)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createStore = __webpack_require__(65);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _utilsCombineReducers = __webpack_require__(299);
	
	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);
	
	var _utilsBindActionCreators = __webpack_require__(298);
	
	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);
	
	var _utilsApplyMiddleware = __webpack_require__(297);
	
	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);
	
	var _utilsCompose = __webpack_require__(66);
	
	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var Line = (function (_React$Component) {
		_inherits(Line, _React$Component);
	
		function Line() {
			_classCallCheck(this, Line);
	
			_get(Object.getPrototypeOf(Line.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Line, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var fill = props.fill;
				var className = props.className;
	
				className = className.concat(stroke ? "" : " line-stroke");
				return _react2["default"].createElement("path", { d: Line.getPath(props), stroke: stroke, fill: fill, className: className });
			}
		}]);
	
		return Line;
	})(_react2["default"].Component);
	
	Line.propTypes = {
		className: _react2["default"].PropTypes.string,
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	Line.defaultProps = {
		className: "line ",
		fill: "none",
		stroke: "black"
	};
	
	Line.getPath = function (props) {
		var plotData = props.plotData;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		var dataSeries = _d32["default"].svg.line().defined(function (d) {
			return yAccessor(d) !== undefined;
		}).x(function (d) {
			return xScale(xAccessor(d));
		}).y(function (d) {
			return yScale(yAccessor(d));
		});
		return dataSeries(plotData);
	};
	
	Line.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var stroke = props.stroke;
	
		var path = Line.getPath(props);
	
		ctx.strokeStyle = stroke;
		ctx.beginPath();
	
		var begin = true;
		plotData.forEach(function (d) {
			if (yAccessor(d) === undefined) {
				ctx.stroke();
				ctx.beginPath();
				begin = true;
			} else {
				if (begin) {
					begin = false;
					var x = ~ ~(0.5 + xScale(xAccessor(d)));
					var y = ~ ~(0.5 + yScale(yAccessor(d)));
	
					ctx.moveTo(x, y);
				}
				ctx.lineTo(xScale(xAccessor(d)), yScale(yAccessor(d)));
			}
		});
		ctx.stroke();
	};
	
	exports["default"] = (0, _wrap2["default"])(Line);
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequire = __webpack_require__(190)['default'];
	
	exports.__esModule = true;
	
	var _squashClickEvent = __webpack_require__(239);
	
	exports.SquashClickEventMixin = _interopRequire(_squashClickEvent);
	
	var _expandedStateHandler = __webpack_require__(238);
	
	exports.ExpandedStateHandlerMixin = _interopRequire(_expandedStateHandler);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(301);
	var assign = __webpack_require__(229);
	
	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});
	
	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;
	
	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();
	
	    delete reactMixin.getDefaultProps;
	  }
	}
	
	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;
	
	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }
	
	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }
	
	    delete reactMixin.getInitialState;
	  }
	}
	
	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);
	
	  var prototypeMethods = {};
	  var staticProps = {};
	
	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });
	
	  mixinProto(reactClass.prototype, prototypeMethods);
	
	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;
	
	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });
	
	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });
	
	    return result;
	  };
	
	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);
	
	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];
	
	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }
	
	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }
	
	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }
	
	  return reactClass;
	}
	
	module.exports = (function() {
	  var reactMixin = mixinProto;
	
	  reactMixin.onClass = function(reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };
	
	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };
	
	  return reactMixin;
	})();


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var BollingerBand = {
		period: 20,
		source: "close",
		multiplier: 2,
		movingAverageType: "sma"
	};
	
	exports.BollingerBand = BollingerBand;
	var MACD = {
		fast: 12,
		slow: 26,
		signal: 9,
		source: "close",
		fill: {
			histogram: 'steelblue'
		},
		stroke: {
			MACDLine: 'red',
			signalLine: 'green',
			histogram: 'steelblue'
		}
	};
	
	exports.MACD = MACD;
	var FullStochasticOscillator = {
		period: 12,
		K: 3,
		D: 3,
		ohlc: function ohlc(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		},
		stroke: {
			D: 'green',
			K: 'red'
		},
		overSold: 80,
		overBought: 20
	};
	
	exports.FullStochasticOscillator = FullStochasticOscillator;
	var RSI = {
		period: 14,
		source: "close",
		overSold: 70,
		overBought: 30
	};
	
	exports.RSI = RSI;
	var EMA = {
		source: "close",
		period: 10
	};
	
	exports.EMA = EMA;
	var SMA = {
		source: "close",
		period: 10
	};
	exports.SMA = SMA;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ToolTipTSpanLabel = (function (_React$Component) {
		_inherits(ToolTipTSpanLabel, _React$Component);
	
		function ToolTipTSpanLabel() {
			_classCallCheck(this, ToolTipTSpanLabel);
	
			_get(Object.getPrototypeOf(ToolTipTSpanLabel.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ToolTipTSpanLabel, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"tspan",
					_extends({ className: "react-stockcharts-tooltip-label", fill: "steelblue" }, this.props),
					this.props.children
				);
			}
		}]);
	
		return ToolTipTSpanLabel;
	})(_react2["default"].Component);
	
	module.exports = ToolTipTSpanLabel;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ToolTipText = (function (_React$Component) {
		_inherits(ToolTipText, _React$Component);
	
		function ToolTipText() {
			_classCallCheck(this, ToolTipText);
	
			_get(Object.getPrototypeOf(ToolTipText.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ToolTipText, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
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
	})(_react2["default"].Component);
	
	ToolTipText.propTypes = {
		fontFamily: _react2["default"].PropTypes.string.isRequired,
		fontSize: _react2["default"].PropTypes.number.isRequired
	};
	ToolTipText.defaultProps = {
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 11
	};
	
	module.exports = ToolTipText;

/***/ },
/* 19 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _componentsCreateAll = __webpack_require__(62);
	
	var _componentsCreateAll2 = _interopRequireDefault(_componentsCreateAll);
	
	var _createAll = _componentsCreateAll2['default'](_react2['default']);
	
	var Provider = _createAll.Provider;
	var connect = _createAll.connect;
	exports.Provider = Provider;
	exports.connect = connect;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var pluck = _utils2["default"].pluck;
	var sum = _utils2["default"].sum;
	
	var MACalculator = {
		setter: function setter(path, key, d, value) {
			var newD = d,
			    i = 0;
			for (i = 0; i < path.length; i++) {
				if (newD[path[i]] === undefined) newD[path[i]] = {};
				newD = newD[path[i]];
			}
			newD[key] = value;
			return d;
		},
		calculateEMANew: function calculateEMANew(data, period, pluckFunc, setFunc) {
			// console.log("calculating EMA", period, key, pluckKey);
			/*
	  EMA = Price(t) * k + EMA(y) * (1 – k)
	  t = today, y = yesterday, N = number of days in EMA (or period), k = 2/(N+1)
	  */
			if (data.length > period) {
				var firstSMA = data.slice(0, period).map(pluckFunc).reduce(function (a, b) {
					return a + b;
				}) / period;
	
				setFunc(data[period], firstSMA);
	
				// console.log(period, key, pluckKey, subObjectKey, firstSMA);
				var k = 2 / (period + 1),
				    prevEMA = firstSMA,
				    ema;
				// index of array starts with 0, so i starts with period - 1
				for (var i = period - 1; i < data.length; i++) {
					ema = pluckFunc(data[i]) * k + prevEMA * (1 - k);
					setFunc(data[i], ema);
					prevEMA = ema;
				}
			}
			return data;
		},
		calculateSMANew: function calculateSMANew(data, period, pluckFunc, setFunc) {
			// console.log("calculateSMA");
	
			var l = data.length - 1;
	
			data.map(function (each, i) {
				return data.slice(i - period + 1, i + 1);
			}).filter(function (array) {
				return array.length === period && array.length > 0;
			}).map(function (array) {
				return array.map(pluckFunc);
			}).map(function (array) {
				return array.reduce(function (a, b) {
					return a + b;
				});
			}).map(function (total) {
				return total / period;
			}).reverse().forEach(function (avg, i) {
				setFunc(data[l - i], avg);
			});
	
			return data;
		}
	};
	
	module.exports = MACalculator;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(211)('wks')
	  , Symbol = __webpack_require__(42).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(216))('Symbol.' + name));
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shallowEqual = __webpack_require__(50);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var PureComponent = (function (_React$Component) {
		_inherits(PureComponent, _React$Component);
	
		function PureComponent() {
			_classCallCheck(this, PureComponent);
	
			_get(Object.getPrototypeOf(PureComponent.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(PureComponent, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
				return !(0, _shallowEqual2["default"])(this.props, nextProps) || !(0, _shallowEqual2["default"])(this.state, nextState) || !(0, _shallowEqual2["default"])(this.context, nextContext);
			}
		}]);
	
		return PureComponent;
	})(_react2["default"].Component);
	
	module.exports = PureComponent;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var INCREMENT_COUNTER = "INCREMENT_COUNTER";
	exports.INCREMENT_COUNTER = INCREMENT_COUNTER;
	var DECREMENT_COUNTER = "DECREMENT_COUNTER";
	
	exports.DECREMENT_COUNTER = DECREMENT_COUNTER;
	var TOGGLE_HEADER = "TOGGLE_HEADER";
	exports.TOGGLE_HEADER = TOGGLE_HEADER;
	var TOGGLE_RIGHT_PANE = "TOGGLE_RIGHT_PANE";
	exports.TOGGLE_RIGHT_PANE = TOGGLE_RIGHT_PANE;
	var TOGGLE_LEFT_NAV = "TOGGLE_LEFT_NAV";
	
	exports.TOGGLE_LEFT_NAV = TOGGLE_LEFT_NAV;
	var CHANGE_ROUTE = "CHANGE_ROUTE";
	
	exports.CHANGE_ROUTE = CHANGE_ROUTE;
	var UN_FOCUS = "UN_FOCUS";
	
	exports.UN_FOCUS = UN_FOCUS;
	var CHART_PAGE_LAYOUT_CHANGE = "CHART_PAGE_LAYOUT_CHANGE";
	
	exports.CHART_PAGE_LAYOUT_CHANGE = CHART_PAGE_LAYOUT_CHANGE;
	var CHART_PAGE_SET_DATA = "CHART_PAGE_SET_DATA";
	exports.CHART_PAGE_SET_DATA = CHART_PAGE_SET_DATA;
	var CHART_SHOW_SETTINGS = "CHART_SHOW_SETTINGS";
	
	exports.CHART_SHOW_SETTINGS = CHART_SHOW_SETTINGS;
	var CHART_SHOW_INDICATOR_SETTINGS = "CHART_SHOW_INDICATOR_SETTINGS";
	exports.CHART_SHOW_INDICATOR_SETTINGS = CHART_SHOW_INDICATOR_SETTINGS;
	var CHART_HIDE_INDICATOR_SETTINGS = "CHART_HIDE_INDICATOR_SETTINGS";
	
	exports.CHART_HIDE_INDICATOR_SETTINGS = CHART_HIDE_INDICATOR_SETTINGS;
	var CHART_PAGE_EXCHANGE_DROPDOWN_TOGGLE = "CHART_PAGE_EXCHANGE_DROPDOWN_TOGGLE";
	exports.CHART_PAGE_EXCHANGE_DROPDOWN_TOGGLE = CHART_PAGE_EXCHANGE_DROPDOWN_TOGGLE;
	var CHART_PAGE_EXCHANGE_SELECT = "CHART_PAGE_EXCHANGE_SELECT";
	
	exports.CHART_PAGE_EXCHANGE_SELECT = CHART_PAGE_EXCHANGE_SELECT;
	var CHART_PAGE_SECURITY_FOCUS = "CHART_PAGE_SECURITY_FOCUS";
	exports.CHART_PAGE_SECURITY_FOCUS = CHART_PAGE_SECURITY_FOCUS;
	var CHART_PAGE_SECURITY_SEARCH = "CHART_PAGE_SECURITY_SEARCH";
	exports.CHART_PAGE_SECURITY_SEARCH = CHART_PAGE_SECURITY_SEARCH;
	var CHART_PAGE_LOADING = "CHART_PAGE_LOADING";
	exports.CHART_PAGE_LOADING = CHART_PAGE_LOADING;
	var CHART_PAGE_SECURITY_SELECT = "CHART_PAGE_SECURITY_SELECT";
	
	exports.CHART_PAGE_SECURITY_SELECT = CHART_PAGE_SECURITY_SELECT;
	var CHART_PAGE_CHART_TYPE_DROPDOWN_TOGGLE = "CHART_PAGE_CHART_TYPE_DROPDOWN_TOGGLE";
	exports.CHART_PAGE_CHART_TYPE_DROPDOWN_TOGGLE = CHART_PAGE_CHART_TYPE_DROPDOWN_TOGGLE;
	var CHART_PAGE_CHART_TYPE_SELECT = "CHART_PAGE_CHART_TYPE_SELECT";
	
	exports.CHART_PAGE_CHART_TYPE_SELECT = CHART_PAGE_CHART_TYPE_SELECT;
	var CHART_PAGE_CHART_INDICATOR_DROPDOWN_TOGGLE = "CHART_PAGE_CHART_INDICATOR_DROPDOWN_TOGGLE";
	exports.CHART_PAGE_CHART_INDICATOR_DROPDOWN_TOGGLE = CHART_PAGE_CHART_INDICATOR_DROPDOWN_TOGGLE;
	var CHART_PAGE_CHART_INDICATOR_ADD = "CHART_PAGE_CHART_INDICATOR_ADD";
	exports.CHART_PAGE_CHART_INDICATOR_ADD = CHART_PAGE_CHART_INDICATOR_ADD;
	var CHART_PAGE_CHART_INDICATOR_REMOVE = "CHART_PAGE_CHART_INDICATOR_REMOVE";
	exports.CHART_PAGE_CHART_INDICATOR_REMOVE = CHART_PAGE_CHART_INDICATOR_REMOVE;
	var CHART_PAGE_CHART_INDICATOR_UPDATE = "CHART_PAGE_CHART_INDICATOR_UPDATE";
	
	exports.CHART_PAGE_CHART_INDICATOR_UPDATE = CHART_PAGE_CHART_INDICATOR_UPDATE;
	var CHART_PAGE_CHART_SETTINGS_DROPDOWN_TOGGLE = "CHART_PAGE_CHART_SETTINGS_DROPDOWN_TOGGLE";
	exports.CHART_PAGE_CHART_SETTINGS_DROPDOWN_TOGGLE = CHART_PAGE_CHART_SETTINGS_DROPDOWN_TOGGLE;
	var CHART_PAGE_CHART_SETTINGS_CHANGE = "CHART_PAGE_CHART_SETTINGS_CHANGE";
	
	exports.CHART_PAGE_CHART_SETTINGS_CHANGE = CHART_PAGE_CHART_SETTINGS_CHANGE;
	var WINDOW_RESIZE = "WINDOW_RESIZE";
	exports.WINDOW_RESIZE = WINDOW_RESIZE;
	var CHART_PAGE_RESIZE_COMPLETE = "CHART_PAGE_RESIZE_COMPLETE";
	
	exports.CHART_PAGE_RESIZE_COMPLETE = CHART_PAGE_RESIZE_COMPLETE;
	var ESCAPE = "ESCAPE";
	exports.ESCAPE = ESCAPE;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(42)
	  , core      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports["default"] = function (hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	};
	
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var StraightLine = (function (_React$Component) {
		_inherits(StraightLine, _React$Component);
	
		function StraightLine() {
			_classCallCheck(this, StraightLine);
	
			_get(Object.getPrototypeOf(StraightLine.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(StraightLine, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var fill = props.fill;
				var className = props.className;
				var opacity = props.opacity;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var yValue = props.yValue;
	
				var first = xAccessor(plotData[0]);
				var last = xAccessor(plotData[plotData.length - 1]);
	
				return _react2["default"].createElement("line", { className: className,
					stroke: stroke, opacity: opacity,
					x1: xScale(first), y1: yScale(yValue),
					x2: xScale(last), y2: yScale(yValue) });
			}
		}]);
	
		return StraightLine;
	})(_react2["default"].Component);
	
	StraightLine.propTypes = {
		className: _react2["default"].PropTypes.string,
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		type: _react2["default"].PropTypes.string.isRequired,
		opacity: _react2["default"].PropTypes.number.isRequired,
		yValue: _react2["default"].PropTypes.number.isRequired
	};
	StraightLine.defaultProps = {
		className: "line ",
		fill: "none",
		stroke: "black",
		opacity: 0.5
	};
	
	StraightLine.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var type = props.type;
		var stroke = props.stroke;
		var fill = props.fill;
		var className = props.className;
		var opacity = props.opacity;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var yValue = props.yValue;
	
		var first = xAccessor(plotData[0]);
		var last = xAccessor(plotData[plotData.length - 1]);
	
		ctx.beginPath();
	
		ctx.strokeStyle = stroke;
		ctx.globalAlpha = opacity;
	
		ctx.moveTo(xScale(first), yScale(yValue));
		ctx.lineTo(xScale(last), yScale(yValue));
		ctx.stroke();
	};
	
	exports["default"] = (0, _wrap2["default"])(StraightLine);
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Kagi = {
		reversalType: "ATR", // "ATR", "FIXED"
		period: 14,
		reversal: 2,
		source: "close" };
	
	exports.Kagi = Kagi;
	// "high", "low", "open", "close"
	var Renko = {
		reversalType: "ATR", // "ATR", "FIXED"
		period: 14,
		fixedBrickSize: 2,
		source: "hi/lo" };
	
	exports.Renko = Renko;
	// "close", "hi/lo"
	var PointAndFigure = {
		boxSize: 0.5,
		reversal: 3,
		source: "hi/lo" };
	exports.PointAndFigure = PointAndFigure;
	// "close", "hi/lo"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.changeLayout = changeLayout;
	exports.loadData = loadData;
	exports.showChartIndicatorSettings = showChartIndicatorSettings;
	exports.showChartSettings = showChartSettings;
	exports.closeChartIndicatorSettings = closeChartIndicatorSettings;
	exports.updateChartIndicatorSettings = updateChartIndicatorSettings;
	exports.setData = setData;
	exports.resizeChartAsync = resizeChartAsync;
	exports.resizeChart = resizeChart;
	exports.exchangeSelectDropDownToggle = exchangeSelectDropDownToggle;
	exports.exchangeSelect = exchangeSelect;
	exports.securityFocus = securityFocus;
	exports.showLoading = showLoading;
	exports.securitySearch = securitySearch;
	exports.forSecurities = forSecurities;
	exports.chartTypeSelectDropDownToggle = chartTypeSelectDropDownToggle;
	exports.chartTypeSelect = chartTypeSelect;
	exports.changeChartSettings = changeChartSettings;
	exports.indicatorsDropDownToggle = indicatorsDropDownToggle;
	exports.addIndicator = addIndicator;
	exports.removeIndicator = removeIndicator;
	exports.settingsDropDownToggle = settingsDropDownToggle;
	exports.changeSettings = changeSettings;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _reactStockcharts = __webpack_require__(39);
	
	var _reactStockcharts2 = _interopRequireDefault(_reactStockcharts);
	
	var _constantsChartTypes = __webpack_require__(32);
	
	var ChartTypes = _interopRequireWildcard(_constantsChartTypes);
	
	var _constantsActionTypes = __webpack_require__(24);
	
	var _ReStock$indicator = _reactStockcharts2["default"].indicator;
	var indicatorOptions = _ReStock$indicator.defaultOptions;
	var MACD = _ReStock$indicator.MACD;
	var EMA = _ReStock$indicator.EMA;
	var SMA = _ReStock$indicator.SMA;
	var BollingerBand = _ReStock$indicator.BollingerBand;
	var RSI = _ReStock$indicator.RSI;
	var FullStochasticOscillator = _ReStock$indicator.FullStochasticOscillator;
	var transformOptions = _reactStockcharts2["default"].transforms.defaultOptions;
	var _ReStock$transforms = _reactStockcharts2["default"].transforms;
	var StockscaleTransformer = _ReStock$transforms.StockscaleTransformer;
	var HeikinAshiTransformer = _ReStock$transforms.HeikinAshiTransformer;
	var KagiTransformer = _ReStock$transforms.KagiTransformer;
	var PointAndFigureTransformer = _ReStock$transforms.PointAndFigureTransformer;
	var RenkoTransformer = _ReStock$transforms.RenkoTransformer;
	
	function changeLayout(layout) {
		return {
			type: _constantsActionTypes.CHART_PAGE_LAYOUT_CHANGE,
			layout: layout
		};
	}
	
	var parseDate = _d32["default"].time.format("%Y-%m-%d").parse;
	
	function loadData(index, security, exchange) {
		return function (dispatch, getState) {
			_d32["default"].tsv("resources/data/" + security + ".tsv", function (err, data) {
				data.forEach(function (d, i) {
					d.date = new Date(parseDate(d.date).getTime());
					d.open = +d.open;
					d.high = +d.high;
					d.low = +d.low;
					d.close = +d.close;
					d.volume = +d.volume;
					// console.log(d);
				});
				dispatch(setData(index, data));
			});
		};
	}
	
	function showChartIndicatorSettings(index, reference, settings) {
		return {
			type: _constantsActionTypes.CHART_SHOW_INDICATOR_SETTINGS,
			index: index,
			settings: _extends({}, reference, settings)
		};
	}
	
	function showChartSettings(index, settings) {
		return {
			type: _constantsActionTypes.CHART_SHOW_SETTINGS,
			index: index,
			settings: settings
		};
	}
	
	function closeChartIndicatorSettings(index) {
		return {
			type: _constantsActionTypes.CHART_HIDE_INDICATOR_SETTINGS,
			index: index
		};
	}
	
	function updateChartIndicatorSettings(index, indicator) {
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_INDICATOR_UPDATE,
			index: index,
			indicator: indicator
		};
	}
	
	function setData(index, data) {
		return {
			type: _constantsActionTypes.CHART_PAGE_SET_DATA,
			index: index,
			data: data
		};
	}
	
	function resizeChartAsync(dimensions) {
		return function (dispatch, getState) {
			setTimeout(function () {
				dispatch(resizeChart(dimensions));
			}, 100);
		};
	}
	
	function resizeChart(width, height) {
		return {
			type: _constantsActionTypes.CHART_PAGE_RESIZE_COMPLETE,
			width: width, height: height
		};
	}
	
	function exchangeSelectDropDownToggle(index, value) {
		return {
			type: _constantsActionTypes.CHART_PAGE_EXCHANGE_DROPDOWN_TOGGLE,
			index: index,
			value: value
		};
	}
	
	function exchangeSelect(index, exchange) {
		return {
			type: _constantsActionTypes.CHART_PAGE_EXCHANGE_SELECT,
			index: index,
			exchange: exchange
		};
	}
	
	function securityFocus(index) {
		return {
			type: _constantsActionTypes.CHART_PAGE_SECURITY_FOCUS,
			index: index
		};
	}
	
	function showLoading(index) {
		return {
			type: _constantsActionTypes.CHART_PAGE_LOADING,
			index: index
		};
	}
	
	function securitySearch(index, query) {
		return function (dispatch, getState) {
			if (query.length > 2) {
				dispatch(showLoading(index));
				setTimeout(function () {
					var state = getState();
					var _state$chartPage$chartComponent$index$securitySelector = state.chartPage.chartComponent[index].securitySelector;
					var exchange = _state$chartPage$chartComponent$index$securitySelector.exchange;
					var type = _state$chartPage$chartComponent$index$securitySelector.type;
	
					// state.chartPage.chartComponent[index].securitySelector;
					// console.log(index, query, state);
					_d32["default"].json("resources/data/securitysearch.json?q=" + query + "&exchange=" + exchange + "&type=" + type, function (data) {
						// console.log(data);
						dispatch(forSecurities(index, data));
					});
				}, 1000);
			}
		};
	}
	
	function forSecurities(index, securities) {
		return {
			type: _constantsActionTypes.CHART_PAGE_SECURITY_SEARCH,
			index: index,
			securities: securities
		};
	}
	
	function chartTypeSelectDropDownToggle(index, value) {
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_TYPE_DROPDOWN_TOGGLE,
			index: index,
			value: value
		};
	}
	
	function getTransforms(chartType, opt) {
		var transforms = [{ transform: StockscaleTransformer }];
		var options;
		// console.log(chartType);
		switch (chartType.value) {
			case ChartTypes.RENKO.value:
				{
					options = opt || transformOptions.Renko;
					transforms.push({ transform: RenkoTransformer, options: options });
					break;
				}
			case ChartTypes.HEIKIN_ASHI.value:
				{
					transforms.push({ transform: HeikinAshiTransformer });
					break;
				}
			case ChartTypes.KAGI.value:
				{
					options = opt || transformOptions.Kagi;
					transforms.push({ transform: KagiTransformer, options: options });
					break;
				}
			case ChartTypes.POINT_FIGURE.value:
				{
					options = opt || transformOptions.PointAndFigure;
					transforms.push({ transform: PointAndFigureTransformer, options: options });
					break;
				}
		}
		return transforms;
	}
	
	function chartTypeSelect(index, chartType) {
	
		var transforms = getTransforms(chartType);
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_TYPE_SELECT,
			index: index,
			chartType: chartType,
			transforms: transforms
		};
	}
	
	function changeChartSettings(index, chartType, settings) {
		var transforms = getTransforms(chartType, settings);
	
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_TYPE_SELECT,
			index: index,
			chartType: chartType,
			transforms: transforms
		};
	}
	
	function indicatorsDropDownToggle(index, value) {
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_INDICATOR_DROPDOWN_TOGGLE,
			index: index,
			value: value
		};
	}
	
	function addIndicator(index, indicator) {
	
		return function (dispatch, getState) {
			var state = getState();
			var list = state.chartPage.chartComponent[index].indicators.list;
	
			var maxChartId = list.map(function (each) {
				return each.chartId;
			}).reduce(function (a, b) {
				return Math.max(a, b);
			}, 1);
	
			var maxDataSeriesId = list.filter(function (each) {
				return each.chartId === 0;
			}).map(function (each) {
				return each.dataSeriesId;
			}).reduce(function (a, b) {
				return Math.max(a, b);
			}, 0);
	
			var options, chartId, dataSeriesId;
			switch (indicator) {
				case "BollingerBand":
					{
						options = indicatorOptions.BollingerBand;
						chartId = 0;
						dataSeriesId = maxDataSeriesId + 1;
						break;
					}
				case "SMA":
					{
						options = indicatorOptions.SMA;
						chartId = 0;
						dataSeriesId = maxDataSeriesId + 1;
						break;
					}
				case "EMA":
					{
						options = indicatorOptions.EMA;
						chartId = 0;
						dataSeriesId = maxDataSeriesId + 1;
						break;
					}
				case "MACD":
					{
						options = indicatorOptions.MACD;
						chartId = maxChartId + 1;
						dataSeriesId = 0;
						break;
					}
				case "RSI":
					{
						options = indicatorOptions.RSI;
						chartId = maxChartId + 1;
						dataSeriesId = 0;
						break;
					}
				case "FullStochasticOscillator":
					{
						options = indicatorOptions.FullStochasticOscillator;
						chartId = maxChartId + 1;
						dataSeriesId = 0;
						break;
					}
			};
			var indicatorToAdd = { type: indicator, options: options, chartId: chartId, dataSeriesId: dataSeriesId };
			dispatch(addIndicatorSync(index, indicatorToAdd));
		};
	}
	
	function addIndicatorSync(index, indicator) {
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_INDICATOR_ADD,
			index: index,
			indicator: indicator
		};
	}
	
	function removeIndicator(index, indicator) {
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_INDICATOR_REMOVE,
			index: index,
			indicator: indicator
		};
	}
	
	function settingsDropDownToggle(index, value) {
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_SETTINGS_DROPDOWN_TOGGLE,
			index: index,
			value: value
		};
	}
	
	function changeSettings(index, settings) {
		return {
			type: _constantsActionTypes.CHART_PAGE_CHART_SETTINGS_CHANGE,
			index: index,
			settings: settings
		};
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.toggleHeader = toggleHeader;
	exports.toggleRightPane = toggleRightPane;
	exports.toggleRightPaneSync = toggleRightPaneSync;
	exports.toggleLeftNav = toggleLeftNav;
	exports.escape = escape;
	exports.windowResize = windowResize;
	
	var _constantsActionTypes = __webpack_require__(24);
	
	function toggleHeader() {
		return {
			type: _constantsActionTypes.TOGGLE_HEADER
		};
	}
	
	function toggleRightPane() {
		return function (dispatch, getState) {
			dispatch(toggleRightPaneSync());
			setTimeout(function () {
				dispatch(windowResize());
			}, 20);
		};
	}
	
	function toggleRightPaneSync() {
		return {
			type: _constantsActionTypes.TOGGLE_RIGHT_PANE
		};
	}
	
	function toggleLeftNav() {
		return {
			type: _constantsActionTypes.TOGGLE_LEFT_NAV
		};
	}
	
	function escape() {
		return {
			type: _constantsActionTypes.ESCAPE
		};
	}
	
	function windowResize() {
		return {
			type: _constantsActionTypes.WINDOW_RESIZE
		};
	}
	
	/*
	export function toggleLeftNav() {
		return (dispatch, getState) => {
			const { shouldShow } = getState();

			if (shouldShow % 2 === 0) {
				return;
			}

			dispatch(increment());
		};
	}

	export function incrementAsync() {
		return dispatch => {
			setTimeout(() => {
				dispatch(increment());
			}, 1000);
		};
	}*/

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var AREA = { label: "Area", value: "AREA" };
	exports.AREA = AREA;
	var LINE = { label: "Line", value: "LINE" };
	exports.LINE = LINE;
	var CANDLESTICK = { label: "Candlestick", value: "CANDLESTICK" };
	exports.CANDLESTICK = CANDLESTICK;
	var HEIKIN_ASHI = { label: "Heikin Ashi", value: "HEIKIN_ASHI" };
	exports.HEIKIN_ASHI = HEIKIN_ASHI;
	var RENKO = { label: "Renko", value: "RENKO" };
	exports.RENKO = RENKO;
	var KAGI = { label: "Kagi", value: "KAGI" };
	exports.KAGI = KAGI;
	var POINT_FIGURE = { label: "Point & Figure", value: "POINT_FIGURE" };
	exports.POINT_FIGURE = POINT_FIGURE;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(19)
	  , createDesc = __webpack_require__(55);
	module.exports = __webpack_require__(213) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objType = __webpack_require__(240);
	
	var _objType2 = _interopRequireDefault(_objType);
	
	var _JSONObjectNode = __webpack_require__(236);
	
	var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);
	
	var _JSONArrayNode = __webpack_require__(230);
	
	var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);
	
	var _JSONIterableNode = __webpack_require__(233);
	
	var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);
	
	var _JSONStringNode = __webpack_require__(237);
	
	var _JSONStringNode2 = _interopRequireDefault(_JSONStringNode);
	
	var _JSONNumberNode = __webpack_require__(235);
	
	var _JSONNumberNode2 = _interopRequireDefault(_JSONNumberNode);
	
	var _JSONBooleanNode = __webpack_require__(231);
	
	var _JSONBooleanNode2 = _interopRequireDefault(_JSONBooleanNode);
	
	var _JSONNullNode = __webpack_require__(234);
	
	var _JSONNullNode2 = _interopRequireDefault(_JSONNullNode);
	
	var _JSONDateNode = __webpack_require__(232);
	
	var _JSONDateNode2 = _interopRequireDefault(_JSONDateNode);
	
	exports['default'] = function (key, value, prevValue, theme) {
	  var initialExpanded = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	
	  var nodeType = _objType2['default'](value);
	  if (nodeType === 'Object') {
	    return _react2['default'].createElement(_JSONObjectNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key });
	  } else if (nodeType === 'Array') {
	    return _react2['default'].createElement(_JSONArrayNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key });
	  } else if (nodeType === 'Iterable') {
	    return _react2['default'].createElement(_JSONIterableNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key });
	  } else if (nodeType === 'String') {
	    return _react2['default'].createElement(_JSONStringNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  } else if (nodeType === 'Number') {
	    return _react2['default'].createElement(_JSONNumberNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  } else if (nodeType === 'Boolean') {
	    return _react2['default'].createElement(_JSONBooleanNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  } else if (nodeType === 'Date') {
	    return _react2['default'].createElement(_JSONDateNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  } else if (nodeType === 'Null') {
	    return _react2['default'].createElement(_JSONNullNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  }
	  return false;
	};
	
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var Area = (function (_React$Component) {
		_inherits(Area, _React$Component);
	
		function Area() {
			_classCallCheck(this, Area);
	
			_get(Object.getPrototypeOf(Area.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Area, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var fill = props.fill;
				var className = props.className;
				var opacity = props.opacity;
	
				className = className.concat(stroke !== undefined ? "" : " line-stroke");
				return _react2["default"].createElement("path", { d: Area.getArea(props), stroke: stroke, fill: fill, className: className, opacity: opacity });
			}
		}]);
	
		return Area;
	})(_react2["default"].Component);
	
	;
	
	Area.propTypes = {
		className: _react2["default"].PropTypes.string,
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		plotData: _react2["default"].PropTypes.array.isRequired,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		opacity: _react2["default"].PropTypes.number,
		type: _react2["default"].PropTypes.string.isRequired,
		base: _react2["default"].PropTypes.func
	};
	
	Area.defaultProps = {
		className: "line ",
		fill: "none",
		opacity: 1
	};
	Area.getArea = function (props) {
		var plotData = props.plotData;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var base = props.base;
	
		var height = yScale.range()[0];
		if (base === undefined) base = function () {
			return height - 1;
		};
	
		var areaSeries = _d32["default"].svg.area().defined(function (d) {
			return yAccessor(d) !== undefined;
		}).x(function (d) {
			return xScale(xAccessor(d));
		}).y0(base.bind(null, yScale)).y1(function (d) {
			return yScale(yAccessor(d));
		});
	
		return areaSeries(plotData);
	};
	
	Area.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var fill = props.fill;
		var stroke = props.stroke;
		var opacity = props.opacity;
		var base = props.base;
	
		var begin = true;
		var height = yScale.range()[0];
		var newBase = base === undefined ? function () {
			return height - 1;
		} : base;
	
		ctx.fillStyle = fill;
		ctx.strokeStyle = stroke;
		ctx.globalAlpha = opacity;
	
		plotData.forEach(function (d) {
			if (yAccessor(d) !== undefined) {
				if (begin) {
					ctx.beginPath();
					begin = false;
					var x = ~ ~(0.5 + xScale(xAccessor(d)));
					var y = ~ ~(0.5 + yScale(yAccessor(d)));
	
					ctx.moveTo(x, newBase(yScale, d));
					ctx.lineTo(x, y);
				}
				ctx.lineTo(xScale(xAccessor(d)), yScale(yAccessor(d)));
			}
		});
	
		var last = plotData[plotData.length - 1];
		ctx.lineTo(xScale(xAccessor(last)), newBase(yScale, last));
	
		if (base !== undefined) {
			plotData.slice().reverse().forEach(function (d) {
				if (yAccessor(d) !== undefined) {
					ctx.lineTo(xScale(xAccessor(d)), base(yScale, d));
				}
			});
		}
		ctx.closePath();
		ctx.fill();
	};
	
	exports["default"] = (0, _wrap2["default"])(Area);
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var HistogramSeries = (function (_React$Component) {
		_inherits(HistogramSeries, _React$Component);
	
		function HistogramSeries() {
			_classCallCheck(this, HistogramSeries);
	
			_get(Object.getPrototypeOf(HistogramSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(HistogramSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
	
				return _react2["default"].createElement(
					"g",
					{ className: "histogram" },
					HistogramSeries.getBarsSVG(props)
				);
			}
		}]);
	
		return HistogramSeries;
	})(_react2["default"].Component);
	
	HistogramSeries.propTypes = {
		baseAt: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(["top", "bottom", "middle"]), _react2["default"].PropTypes.number, _react2["default"].PropTypes.func]).isRequired,
		direction: _react2["default"].PropTypes.oneOf(["up", "down"]).isRequired,
		stroke: _react2["default"].PropTypes.string,
		opacity: _react2["default"].PropTypes.number.isRequired,
		fill: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, _react2["default"].PropTypes.string]).isRequired,
		className: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, _react2["default"].PropTypes.string]).isRequired
	};
	
	HistogramSeries.defaultProps = {
		baseAt: "bottom",
		direction: "up",
		className: "bar",
		stroke: "none",
		fill: "steelblue",
		opacity: 0.5
	};
	
	HistogramSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var height = props.height;
		var width = props.width;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		var bars = HistogramSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		ctx.globalAlpha = props.opacity;
	
		var each,
		    group = {};
		for (var i = 0; i < bars.length; i++) {
			each = bars[i];
			if (each.x !== undefined) {
				if (group[each.fill] === undefined) {
					group[each.fill] = [];
				}
				group[each.fill].push(each);
			}
		};
	
		Object.keys(group).forEach(function (key) {
			if (group[key][0].barWidth < 1) {
				ctx.strokeStyle = key;
			} else {
				ctx.fillStyle = key;
			}
			group[key].forEach(function (d) {
				if (d.barWidth < 1) {
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
	    		width={d.barWidth}
	    		height={d.height} /> */
					ctx.beginPath();
					ctx.rect(d.x, d.y, d.barWidth, d.height);
					ctx.fill();
				}
			});
		});
	};
	
	HistogramSeries.getBarsSVG = function (props) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
	
		var bars = HistogramSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		return bars.map(function (d, idx) {
			if (d.barWidth <= 1) {
				return _react2["default"].createElement("line", { key: idx, className: d.className,
					stroke: d.stroke,
					fill: d.fill,
					x1: d.x, y1: d.y,
					x2: d.x, y2: d.y + d.height });
			}
			return _react2["default"].createElement("rect", { key: idx, className: d.className,
				stroke: d.stroke,
				fill: d.fill,
				x: d.x,
				y: d.y,
				width: d.barWidth,
				opacity: props.opacity,
				height: d.height });
		});
	};
	
	HistogramSeries.getBars = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var baseAt = props.baseAt;
		var direction = props.direction;
		var className = props.className;
		var fill = props.fill;
		var stroke = props.stroke;
	
		var base = baseAt === "top" ? 0 : baseAt === "bottom" ? yScale.range()[0] : baseAt === "middle" ? (yScale.range()[0] + yScale.range()[1]) / 2 : baseAt;
	
		var dir = direction === "up" ? -1 : 1;
	
		var getClassName = function getClassName() {
			return className;
		};
		if (typeof className === "function") {
			getClassName = className;
		}
	
		var getFill = function getFill() {
			return fill;
		};
		if (typeof fill === "function") {
			getFill = fill;
		}
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
		var barWidth = Math.round(width / plotData.length * 0.5);
	
		var bars = plotData.filter(function (d) {
			return yAccessor(d) !== undefined;
		}).map(function (d, idx) {
			var yValue = yAccessor(d);
			var x = Math.round(xScale(xAccessor(d))) - (barWidth === 1 ? 0 : 0.5 * barWidth),
			   
			// var x = (xScale(xAccessor(d))) - 0.5 * barWidth,
			className = getClassName(d),
			    y,
			    height;
	
			var newBase = base;
			if (typeof base === "function") {
				newBase = base(xScale, yScale, d);
			}
	
			if (dir > 0) {
				y = newBase;
				height = yScale.range()[0] - yScale(yValue);
			} else {
				y = yScale(yValue);
				height = newBase - y;
			}
	
			if (height < 0) {
				y = newBase;
				height = -height;
			}
			return {
				barWidth: barWidth,
				height: height,
				x: x,
				y: y,
				className: className,
				stroke: stroke,
				fill: getFill(d)
			};
		});
		return bars;
	};
	
	exports["default"] = (0, _wrap2["default"])(HistogramSeries);
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _DummyTransformer = __webpack_require__(120);
	
	var _DummyTransformer2 = _interopRequireDefault(_DummyTransformer);
	
	var _StockscaleTransformer = __webpack_require__(125);
	
	var _StockscaleTransformer2 = _interopRequireDefault(_StockscaleTransformer);
	
	var _HeikinAshiTransformer = __webpack_require__(121);
	
	var _HeikinAshiTransformer2 = _interopRequireDefault(_HeikinAshiTransformer);
	
	var _KagiTransformer = __webpack_require__(122);
	
	var _KagiTransformer2 = _interopRequireDefault(_KagiTransformer);
	
	var _RenkoTransformer = __webpack_require__(124);
	
	var _RenkoTransformer2 = _interopRequireDefault(_RenkoTransformer);
	
	var _PointAndFigureTransformer = __webpack_require__(123);
	
	var _PointAndFigureTransformer2 = _interopRequireDefault(_PointAndFigureTransformer);
	
	var _defaultOptions = __webpack_require__(29);
	
	var defaultOptions = _interopRequireWildcard(_defaultOptions);
	
	exports["default"] = {
		DummyTransformer: _DummyTransformer2["default"],
		StockscaleTransformer: _StockscaleTransformer2["default"],
		HeikinAshiTransformer: _HeikinAshiTransformer2["default"],
		KagiTransformer: _KagiTransformer2["default"],
		RenkoTransformer: _RenkoTransformer2["default"],
		PointAndFigureTransformer: _PointAndFigureTransformer2["default"],
		defaultOptions: defaultOptions
	};
	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// common components
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _libChartCanvas = __webpack_require__(72);
	
	var _libChartCanvas2 = _interopRequireDefault(_libChartCanvas);
	
	var _libChart = __webpack_require__(71);
	
	var _libChart2 = _interopRequireDefault(_libChart);
	
	var _libDataSeries = __webpack_require__(73);
	
	var _libDataSeries2 = _interopRequireDefault(_libDataSeries);
	
	// interaction components
	
	var _libEventCapture = __webpack_require__(74);
	
	var _libEventCapture2 = _interopRequireDefault(_libEventCapture);
	
	// chart types & Series
	
	var _libSeries = __webpack_require__(110);
	
	var _libSeries2 = _interopRequireDefault(_libSeries);
	
	var _libCoordinates = __webpack_require__(86);
	
	var _libCoordinates2 = _interopRequireDefault(_libCoordinates);
	
	var _libIndicator = __webpack_require__(97);
	
	var _libIndicator2 = _interopRequireDefault(_libIndicator);
	
	var _libTransforms = __webpack_require__(38);
	
	var _libTransforms2 = _interopRequireDefault(_libTransforms);
	
	var _libAxes = __webpack_require__(80);
	
	var _libAxes2 = _interopRequireDefault(_libAxes);
	
	var _libTooltip = __webpack_require__(119);
	
	var _libTooltip2 = _interopRequireDefault(_libTooltip);
	
	var _libHelper = __webpack_require__(90);
	
	var _libHelper2 = _interopRequireDefault(_libHelper);
	
	var version = "0.2.5";
	
	exports["default"] = {
		ChartCanvas: _libChartCanvas2["default"],
		Chart: _libChart2["default"],
		DataSeries: _libDataSeries2["default"],
		EventCapture: _libEventCapture2["default"],
		series: _libSeries2["default"],
		coordinates: _libCoordinates2["default"],
		indicator: _libIndicator2["default"],
		transforms: _libTransforms2["default"],
		axes: _libAxes2["default"],
		tooltip: _libTooltip2["default"],
		helper: _libHelper2["default"],
		version: version
	};
	module.exports = exports["default"];

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 43 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var styles = {
	  base: {
	    display: 'inline-block',
	    marginLeft: 0,
	    marginTop: 8,
	    marginRight: 5,
	    'float': 'left',
	    transition: '150ms',
	    WebkitTransition: '150ms',
	    MozTransition: '150ms',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent',
	    borderTopWidth: 5,
	    borderTopStyle: 'solid',
	    WebkitTransform: 'rotateZ(-90deg)',
	    MozTransform: 'rotateZ(-90deg)',
	    transform: 'rotateZ(-90deg)'
	  },
	  open: {
	    WebkitTransform: 'rotateZ(0deg)',
	    MozTransform: 'rotateZ(0deg)',
	    transform: 'rotateZ(0deg)'
	  }
	};
	
	var JSONArrow = (function (_React$Component) {
	  _inherits(JSONArrow, _React$Component);
	
	  function JSONArrow() {
	    _classCallCheck(this, JSONArrow);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONArrow.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      borderTopColor: this.props.theme.base0D
	    });
	    if (this.props.open) {
	      style = _extends({}, style, styles.open);
	    }
	    return _react2['default'].createElement('div', { style: style, onClick: this.props.onClick });
	  };
	
	  return JSONArrow;
	})(_react2['default'].Component);
	
	exports['default'] = JSONArrow;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AxisTicks = __webpack_require__(77);
	
	var _AxisTicks2 = _interopRequireDefault(_AxisTicks);
	
	var _AxisLine = __webpack_require__(76);
	
	var _AxisLine2 = _interopRequireDefault(_AxisLine);
	
	var Axis = (function (_React$Component) {
		_inherits(Axis, _React$Component);
	
		function Axis(props) {
			_classCallCheck(this, Axis);
	
			_get(Object.getPrototypeOf(Axis.prototype), "constructor", this).call(this, props);
			this.drawOnCanvas = this.drawOnCanvas.bind(this);
		}
	
		_createClass(Axis, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var axesCanvasContext = nextContext.axesCanvasContext;
				var chartData = nextContext.chartData;
				var margin = nextContext.margin;
				var chartId = nextContext.chartId;
				var canvasOriginX = nextContext.canvasOriginX;
				var canvasOriginY = nextContext.canvasOriginY;
	
				var draw = Axis.drawOnCanvasStatic.bind(null, margin, nextProps, [canvasOriginX, canvasOriginY]);
	
				nextContext.secretToSuperFastCanvasDraw.push({
					chartId: chartId,
					type: "axis",
					draw: draw
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				if (this.props.type !== "svg" && this.context.getCanvasContexts !== undefined) {
					var contexts = this.context.getCanvasContexts();
					if (contexts) this.drawOnCanvas(contexts.axes);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate(prevProps, prevState, prevContext) {
				this.componentDidMount();
			}
		}, {
			key: "drawOnCanvas",
			value: function drawOnCanvas(ctx) {
				var _context = this.context;
				var chartData = _context.chartData;
				var margin = _context.margin;
				var canvasOriginX = _context.canvasOriginX;
				var canvasOriginY = _context.canvasOriginY;
				var scale = this.props.scale;
	
				Axis.drawOnCanvasStatic(margin, this.props, [canvasOriginX, canvasOriginY], ctx, chartData, scale, scale);
			}
		}, {
			key: "render",
			value: function render() {
				if (this.context.type !== "svg") return null;
	
				var domain = this.props.showDomain ? _react2["default"].createElement(_AxisLine2["default"], this.props) : null;
				var ticks = this.props.showTicks ? _react2["default"].createElement(_AxisTicks2["default"], this.props) : null;
				var className = "";
				if (this.props.className) className = this.props.defaultClassName.concat(this.props.className);
				return _react2["default"].createElement(
					"g",
					{ className: className,
						transform: "translate(" + this.props.transform[0] + ", " + this.props.transform[1] + ")" },
					ticks,
					domain
				);
			}
		}]);
	
		return Axis;
	})(_react2["default"].Component);
	
	Axis.propTypes = {
		className: _react2["default"].PropTypes.string.isRequired,
		orient: _react2["default"].PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		outerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		tickSize: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.array,
		tickValues: _react2["default"].PropTypes.array,
		scale: _react2["default"].PropTypes.func.isRequired,
		showDomain: _react2["default"].PropTypes.bool.isRequired,
		showTicks: _react2["default"].PropTypes.bool.isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number.isRequired
	};
	
	Axis.defaultProps = {
		defaultClassName: "react-stockcharts-axis ",
		showDomain: true,
		showTicks: true,
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 12
	};
	
	Axis.contextTypes = {
		getCanvasContexts: _react2["default"].PropTypes.func,
		type: _react2["default"].PropTypes.string,
		chartData: _react2["default"].PropTypes.object.isRequired,
		chartId: _react2["default"].PropTypes.number.isRequired,
		margin: _react2["default"].PropTypes.object.isRequired,
		canvasOriginX: _react2["default"].PropTypes.number,
		canvasOriginY: _react2["default"].PropTypes.number,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired
	};
	
	Axis.drawOnCanvasStatic = function (margin, props, canvasOrigin, ctx, chartData, xScale, yScale) {
		var transform = props.transform;
		var showDomain = props.showDomain;
		var showTicks = props.showTicks;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOrigin[0] + transform[0], canvasOrigin[1] + transform[1]);
	
		if (showDomain) _AxisLine2["default"].drawOnCanvasStatic(props, ctx, chartData, xScale, yScale);
		if (showTicks) _AxisTicks2["default"].drawOnCanvasStatic(props, ctx, chartData, xScale, yScale);
	
		ctx.restore();
	};
	
	exports["default"] = Axis;
	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	// "../utils/Object.assign"
	
	var EdgeCoordinate = (function (_React$Component) {
		_inherits(EdgeCoordinate, _React$Component);
	
		function EdgeCoordinate() {
			_classCallCheck(this, EdgeCoordinate);
	
			_get(Object.getPrototypeOf(EdgeCoordinate.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(EdgeCoordinate, [{
			key: "render",
			value: function render() {
				var className = this.props.className;
	
				var edge = EdgeCoordinate.helper(this.props);
				if (edge === null) return null;
				var line, coordinateBase, coordinate;
	
				if (edge.line !== undefined) {
					line = _react2["default"].createElement("line", {
						className: "react-stockcharts-cross-hair", opacity: edge.line.opacity, stroke: edge.line.stroke,
						x1: edge.line.x1, y1: edge.line.y1,
						x2: edge.line.x2, y2: edge.line.y2 });
				}
				if (edge.coordinateBase !== undefined) {
					coordinateBase = _react2["default"].createElement("rect", { key: 1, className: "react-stockchart-text-background",
						x: edge.coordinateBase.edgeXRect,
						y: edge.coordinateBase.edgeYRect,
						height: edge.coordinateBase.rectHeight, width: edge.coordinateBase.rectWidth,
						fill: edge.coordinateBase.fill, opacity: edge.coordinateBase.opacity });
					coordinate = _react2["default"].createElement(
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
				return _react2["default"].createElement(
					"g",
					{ className: className },
					line,
					coordinateBase,
					coordinate
				);
			}
		}]);
	
		return EdgeCoordinate;
	})(_react2["default"].Component);
	
	EdgeCoordinate.propTypes = {
		type: _react2["default"].PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
		coordinate: _react2["default"].PropTypes.any.isRequired,
		x1: _react2["default"].PropTypes.number.isRequired,
		y1: _react2["default"].PropTypes.number.isRequired,
		x2: _react2["default"].PropTypes.number.isRequired,
		y2: _react2["default"].PropTypes.number.isRequired,
		orient: _react2["default"].PropTypes.oneOf(["bottom", "top", "left", "right"]),
		rectWidth: _react2["default"].PropTypes.number,
		hideLine: _react2["default"].PropTypes.bool,
		fill: _react2["default"].PropTypes.string,
		opacity: _react2["default"].PropTypes.number,
		fontFamily: _react2["default"].PropTypes.string.isRequired,
		fontSize: _react2["default"].PropTypes.number.isRequired
	};
	EdgeCoordinate.defaultProps = {
		namespace: "ReStock.EdgeCoordinate",
		orient: "left",
		hideLine: false,
		fill: "#8a8a8a",
		opacity: 1,
		textFill: "white",
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 13
	};
	
	EdgeCoordinate.helper = function (props) {
		var displayCoordinate = props.coordinate;
		var show = props.show;
		var rectWidth = props.rectWidth;
		var type = props.type;
		var orient = props.orient;
		var edgeAt = props.edgeAt;
		var hideLine = props.hideLine;
		var className = props.className;
		var fill = props.fill;
		var opacity = props.opacity;
		var fontFamily = props.fontFamily;
		var fontSize = props.fontSize;
		var textFill = props.textFill;
		var x1 = props.x1;
		var y1 = props.y1;
		var x2 = props.x2;
		var y2 = props.y2;
	
		if (!show) return null;
	
		rectWidth = rectWidth ? rectWidth : type === "horizontal" ? 60 : 100;
		var rectHeight = 20;
	
		var edgeXRect, edgeYRect, edgeXText, edgeYText;
	
		if (type === "horizontal") {
	
			edgeXRect = orient === "right" ? edgeAt + 1 : edgeAt - rectWidth - 1;
			edgeYRect = y1 - rectHeight / 2;
			edgeXText = orient === "right" ? edgeAt + rectWidth / 2 : edgeAt - rectWidth / 2;
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
		if (displayCoordinate !== undefined) {
			coordinateBase = {
				edgeXRect: edgeXRect, edgeYRect: edgeYRect, rectHeight: rectHeight, rectWidth: rectWidth, fill: fill, opacity: opacity
			};
			coordinate = {
				edgeXText: edgeXText, edgeYText: edgeYText, textAnchor: textAnchor, fontFamily: fontFamily, fontSize: fontSize, textFill: textFill, displayCoordinate: displayCoordinate
			};
		}
		var line = hideLine ? undefined : {
			opacity: 0.3, stroke: "black", x1: x1, y1: y1, x2: x2, y2: y2
		};
		return {
			coordinateBase: coordinateBase, coordinate: coordinate, line: line
		};
	};
	
	EdgeCoordinate.drawOnCanvasStatic = function (ctx, props) {
		props = (0, _objectAssign2["default"])({}, EdgeCoordinate.defaultProps, props);
	
		var edge = EdgeCoordinate.helper(props);
	
		if (edge === null) return;
	
		if (edge.coordinateBase !== undefined) {
			// var { globalAlpha, fillStyle } = ctx;
			ctx.globalAlpha = edge.coordinateBase.opacity;
			ctx.fillStyle = edge.coordinateBase.fill;
	
			ctx.beginPath();
			ctx.rect(edge.coordinateBase.edgeXRect, edge.coordinateBase.edgeYRect, edge.coordinateBase.rectWidth, edge.coordinateBase.rectHeight);
			ctx.fill();
	
			ctx.font = edge.coordinate.fontSize + "px " + edge.coordinate.fontFamily;
			ctx.fillStyle = edge.coordinate.textFill;
			ctx.textAlign = edge.coordinate.textAnchor === "middle" ? "center" : edge.coordinate.textAnchor;
			ctx.textBaseline = "middle";
	
			ctx.fillText(edge.coordinate.displayCoordinate, edge.coordinate.edgeXText, edge.coordinate.edgeYText);
		}
		if (edge.line !== undefined) {
			ctx.globalAlpha = edge.line.opacity;
			ctx.strokeStyle = edge.line.stroke;
	
			ctx.beginPath();
			ctx.moveTo(edge.line.x1, edge.line.y1);
			ctx.lineTo(edge.line.x2, edge.line.y2);
			ctx.stroke();
		}
	};
	
	module.exports = EdgeCoordinate;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	function sumOf(array, offset, length) {
		var sum = 0;
		for (var i = offset; i < offset + length; i++) {
			sum += array[i].trueRange;
		}
		return sum;
	}
	
	function calculateTR(rawData) {
		var prev = rawData[0];
		rawData.filter(function (d, idx) {
			return idx > 0;
		}).forEach(function (d, idx) {
			d.trueRange = Math.max(d.high - d.low, d.high - prev.close, d.low - prev.close);
			prev = rawData[idx];
		});
	}
	
	function calculateATR(rawData, period) {
		calculateTR(rawData);
	
		rawData.forEach(function (d, index) {
			if (index > period) {
				// trueRange starts from index 1 so ATR starts from period (not period -1)
				var num = sumOf(rawData, index - period, period) / period;
				d["atr" + period] = Math.round(num * 100) / 100;
			}
		});
	}
	
	module.exports = calculateATR;

/***/ },
/* 50 */
/***/ function(module, exports) {

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
	
	'use strict';
	
	function isPrimitive(value) {
		return value == null || typeof value !== 'function' && typeof value !== 'object';
	};
	
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
			if ( /* !isPrimitive(b[key]) || */!a.hasOwnProperty(key) || a[key] !== b[key]) {
				// console.log(key, a, b);
				return false;
			}
		}
		for (key in a) {
			numKeysA++;
		}
		return numKeysA === numKeysB;
	};
	
	module.exports = shallowEqual;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(52);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(207)
	  , $def            = __webpack_require__(26)
	  , $redef          = __webpack_require__(209)
	  , hide            = __webpack_require__(33)
	  , has             = __webpack_require__(43)
	  , SYMBOL_ITERATOR = __webpack_require__(22)('iterator')
	  , Iterators       = __webpack_require__(34)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(205)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(19).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(56)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(43)
	  , hide = __webpack_require__(33)
	  , TAG  = __webpack_require__(22)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(40);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(212)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(54)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(220);
	var Iterators = __webpack_require__(34);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.0.3
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			var _OldCookies = window.Cookies;
			var api = window.Cookies = factory(window.jQuery);
			api.noConflict = function () {
				window.Cookies = _OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init (converter) {
			function api (key, value, attributes) {
				var result;
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					value = encodeURIComponent(String(value));
					value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					return (document.cookie = [
						key, '=', value,
						attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
						attributes.path    && '; path=' + attributes.path,
						attributes.domain  && '; domain=' + attributes.domain,
						attributes.secure ? '; secure' : ''
					].join(''));
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var name = parts[0].replace(rdecode, decodeURIComponent);
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.get = api.set = api;
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init();
	}));


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
	// all credits and original code to the author
	// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
	// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>
	
	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _createClass = __webpack_require__(189)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _grabNode = __webpack_require__(35);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var _themesSolarized = __webpack_require__(241);
	
	var _themesSolarized2 = _interopRequireDefault(_themesSolarized);
	
	var styles = {
	  tree: {
	    border: 0,
	    padding: 0,
	    marginTop: 8,
	    marginBottom: 8,
	    marginLeft: 2,
	    marginRight: 0,
	    fontSize: '0.90em',
	    listStyle: 'none',
	    MozUserSelect: 'none',
	    WebkitUserSelect: 'none'
	  }
	};
	
	var JSONTree = (function (_React$Component) {
	  _inherits(JSONTree, _React$Component);
	
	  _createClass(JSONTree, null, [{
	    key: 'propTypes',
	    value: {
	      data: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      theme: _themesSolarized2['default']
	    },
	    enumerable: true
	  }]);
	
	  function JSONTree(props) {
	    _classCallCheck(this, JSONTree);
	
	    _React$Component.call(this, props);
	  }
	
	  JSONTree.prototype.render = function render() {
	    var keyName = this.props.keyName || 'root';
	    var rootNode = _grabNode2['default'](keyName, this.props.data, this.props.previousData, this.props.theme, true);
	    return _react2['default'].createElement(
	      'ul',
	      { style: _extends({}, styles.tree, this.props.style) },
	      rootNode
	    );
	  };
	
	  return JSONTree;
	})(_react2['default'].Component);
	
	exports['default'] = JSONTree;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createAll;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createProvider = __webpack_require__(243);
	
	var _createProvider2 = _interopRequireDefault(_createProvider);
	
	var _createConnect = __webpack_require__(242);
	
	var _createConnect2 = _interopRequireDefault(_createConnect);
	
	function createAll(React) {
	  var Provider = _createProvider2['default'](React);
	  var connect = _createConnect2['default'](React);
	
	  return { Provider: Provider, connect: connect };
	}
	
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = createStoreShape;
	
	function createStoreShape(PropTypes) {
	  return PropTypes.shape({
	    subscribe: PropTypes.func.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    getState: PropTypes.func.isRequired
	  });
	}
	
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = devTools;
	var ActionTypes = {
	  PERFORM_ACTION: 'PERFORM_ACTION',
	  RESET: 'RESET',
	  ROLLBACK: 'ROLLBACK',
	  COMMIT: 'COMMIT',
	  SWEEP: 'SWEEP',
	  TOGGLE_ACTION: 'TOGGLE_ACTION',
	  JUMP_TO_STATE: 'JUMP_TO_STATE',
	  SET_MONITOR_STATE: 'SET_MONITOR_STATE',
	  RECOMPUTE_STATES: 'RECOMPUTE_STATES'
	};
	
	var INIT_ACTION = {
	  type: '@@INIT'
	};
	
	function toggle(obj, key) {
	  var clone = _extends({}, obj);
	  if (clone[key]) {
	    delete clone[key];
	  } else {
	    clone[key] = true;
	  }
	  return clone;
	}
	
	/**
	 * Computes the next entry in the log by applying an action.
	 */
	function computeNextEntry(reducer, action, state, error) {
	  if (error) {
	    return {
	      state: state,
	      error: 'Interrupted by an error up the chain'
	    };
	  }
	
	  var nextState = state;
	  var nextError = undefined;
	  try {
	    nextState = reducer(state, action);
	  } catch (err) {
	    nextError = err.toString();
	    console.error(err.stack || err);
	  }
	
	  return {
	    state: nextState,
	    error: nextError
	  };
	}
	
	/**
	 * Runs the reducer on all actions to get a fresh computation log.
	 * It's probably a good idea to do this only if the code has changed,
	 * but until we have some tests we'll just do it every time an action fires.
	 */
	function recomputeStates(reducer, committedState, stagedActions, skippedActions) {
	  var computedStates = [];
	
	  for (var i = 0; i < stagedActions.length; i++) {
	    var action = stagedActions[i];
	
	    var previousEntry = computedStates[i - 1];
	    var previousState = previousEntry ? previousEntry.state : committedState;
	    var previousError = previousEntry ? previousEntry.error : undefined;
	
	    var shouldSkip = Boolean(skippedActions[i]);
	    var entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError);
	
	    computedStates.push(entry);
	  }
	
	  return computedStates;
	}
	
	/**
	 * Lifts the app state reducer into a DevTools state reducer.
	 */
	function liftReducer(reducer, initialState) {
	  var initialLiftedState = {
	    committedState: initialState,
	    stagedActions: [INIT_ACTION],
	    skippedActions: {},
	    currentStateIndex: 0,
	    monitorState: {
	      isVisible: true
	    },
	    timestamps: [Date.now()]
	  };
	
	  /**
	   * Manages how the DevTools actions modify the DevTools state.
	   */
	  return function liftedReducer(liftedState, liftedAction) {
	    if (liftedState === undefined) liftedState = initialLiftedState;
	    var committedState = liftedState.committedState;
	    var stagedActions = liftedState.stagedActions;
	    var skippedActions = liftedState.skippedActions;
	    var computedStates = liftedState.computedStates;
	    var currentStateIndex = liftedState.currentStateIndex;
	    var monitorState = liftedState.monitorState;
	    var timestamps = liftedState.timestamps;
	
	    switch (liftedAction.type) {
	      case ActionTypes.RESET:
	        committedState = initialState;
	        stagedActions = [INIT_ACTION];
	        skippedActions = {};
	        currentStateIndex = 0;
	        timestamps = [liftedAction.timestamp];
	        break;
	      case ActionTypes.COMMIT:
	        committedState = computedStates[currentStateIndex].state;
	        stagedActions = [INIT_ACTION];
	        skippedActions = {};
	        currentStateIndex = 0;
	        timestamps = [liftedAction.timestamp];
	        break;
	      case ActionTypes.ROLLBACK:
	        stagedActions = [INIT_ACTION];
	        skippedActions = {};
	        currentStateIndex = 0;
	        timestamps = [liftedAction.timestamp];
	        break;
	      case ActionTypes.TOGGLE_ACTION:
	        skippedActions = toggle(skippedActions, liftedAction.index);
	        break;
	      case ActionTypes.JUMP_TO_STATE:
	        currentStateIndex = liftedAction.index;
	        break;
	      case ActionTypes.SWEEP:
	        stagedActions = stagedActions.filter(function (_, i) {
	          return !skippedActions[i];
	        });
	        timestamps = timestamps.filter(function (_, i) {
	          return !skippedActions[i];
	        });
	        skippedActions = {};
	        currentStateIndex = Math.min(currentStateIndex, stagedActions.length - 1);
	        break;
	      case ActionTypes.PERFORM_ACTION:
	        if (currentStateIndex === stagedActions.length - 1) {
	          currentStateIndex++;
	        }
	        stagedActions = [].concat(stagedActions, [liftedAction.action]);
	        timestamps = [].concat(timestamps, [liftedAction.timestamp]);
	        break;
	      case ActionTypes.SET_MONITOR_STATE:
	        monitorState = liftedAction.monitorState;
	        break;
	      case ActionTypes.RECOMPUTE_STATES:
	        stagedActions = liftedAction.stagedActions;
	        timestamps = liftedAction.timestamps;
	        committedState = liftedAction.committedState;
	        currentStateIndex = stagedActions.length - 1;
	        skippedActions = {};
	        break;
	      default:
	        break;
	    }
	
	    computedStates = recomputeStates(reducer, committedState, stagedActions, skippedActions);
	
	    return {
	      committedState: committedState,
	      stagedActions: stagedActions,
	      skippedActions: skippedActions,
	      computedStates: computedStates,
	      currentStateIndex: currentStateIndex,
	      monitorState: monitorState,
	      timestamps: timestamps
	    };
	  };
	}
	
	/**
	 * Lifts an app action to a DevTools action.
	 */
	function liftAction(action) {
	  var liftedAction = {
	    type: ActionTypes.PERFORM_ACTION,
	    action: action,
	    timestamp: Date.now()
	  };
	  return liftedAction;
	}
	
	/**
	 * Unlifts the DevTools state to the app state.
	 */
	function unliftState(liftedState) {
	  var computedStates = liftedState.computedStates;
	  var currentStateIndex = liftedState.currentStateIndex;
	  var state = computedStates[currentStateIndex].state;
	
	  return state;
	}
	
	/**
	 * Unlifts the DevTools store to act like the app's store.
	 */
	function unliftStore(liftedStore, reducer) {
	  var lastDefinedState = undefined;
	  return _extends({}, liftedStore, {
	    devToolsStore: liftedStore,
	    dispatch: function dispatch(action) {
	      liftedStore.dispatch(liftAction(action));
	      return action;
	    },
	    getState: function getState() {
	      var state = unliftState(liftedStore.getState());
	      if (state !== undefined) {
	        lastDefinedState = state;
	      }
	      return lastDefinedState;
	    },
	    getReducer: function getReducer() {
	      return reducer;
	    },
	    replaceReducer: function replaceReducer(nextReducer) {
	      liftedStore.replaceReducer(liftReducer(nextReducer));
	    }
	  });
	}
	
	/**
	 * Action creators to change the DevTools state.
	 */
	var ActionCreators = {
	  reset: function reset() {
	    return { type: ActionTypes.RESET, timestamp: Date.now() };
	  },
	  rollback: function rollback() {
	    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
	  },
	  commit: function commit() {
	    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
	  },
	  sweep: function sweep() {
	    return { type: ActionTypes.SWEEP };
	  },
	  toggleAction: function toggleAction(index) {
	    return { type: ActionTypes.TOGGLE_ACTION, index: index };
	  },
	  jumpToState: function jumpToState(index) {
	    return { type: ActionTypes.JUMP_TO_STATE, index: index };
	  },
	  setMonitorState: function setMonitorState(monitorState) {
	    return { type: ActionTypes.SET_MONITOR_STATE, monitorState: monitorState };
	  },
	  recomputeStates: function recomputeStates(committedState, stagedActions) {
	    return {
	      type: ActionTypes.RECOMPUTE_STATES,
	      committedState: committedState,
	      stagedActions: stagedActions
	    };
	  }
	};
	
	exports.ActionCreators = ActionCreators;
	/**
	 * Redux DevTools middleware.
	 */
	
	function devTools() {
	  return function (next) {
	    return function (reducer, initialState) {
	      var liftedReducer = liftReducer(reducer, initialState);
	      var liftedStore = next(liftedReducer);
	      var store = unliftStore(liftedStore, reducer);
	      return store;
	    };
	  };
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createStore;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsIsPlainObject = __webpack_require__(67);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	
	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	
	    return function unsubscribe() {
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	
	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	
	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;
	
	  if (proto === null) {
	    return true;
	  }
	
	  var constructor = proto.constructor;
	
	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}
	
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = mapValues;
	
	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}
	
	module.exports = exports["default"];

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var CanvasContainer = (function (_React$Component) {
		_inherits(CanvasContainer, _React$Component);
	
		function CanvasContainer() {
			_classCallCheck(this, CanvasContainer);
	
			_get(Object.getPrototypeOf(CanvasContainer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CanvasContainer, [{
			key: "getCanvasContexts",
			value: function getCanvasContexts() {
				var axesCanvasDOM = _utilsUtils2["default"].isReactVersion14() ? this.refs.canvas_axes : _react2["default"].findDOMNode(this.refs.canvas_axes);
	
				var mouseCoordDOM = _utilsUtils2["default"].isReactVersion14() ? this.refs.canvas_mouse_coordinates : _react2["default"].findDOMNode(this.refs.canvas_mouse_coordinates);
	
				if (this.refs.canvas_axes) {
					return {
						axes: axesCanvasDOM.getContext('2d'),
						mouseCoord: mouseCoordDOM.getContext('2d')
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
				return _react2["default"].createElement(
					"div",
					{ style: { zIndex: zIndex } },
					_react2["default"].createElement("canvas", { ref: "canvas_axes", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0 } }),
					_react2["default"].createElement("canvas", { ref: "canvas_mouse_coordinates", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0 } })
				);
			}
		}]);
	
		return CanvasContainer;
	})(_react2["default"].Component);
	
	CanvasContainer.propTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	module.exports = CanvasContainer;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsPureComponent = __webpack_require__(23);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var Chart = (function (_PureComponent) {
		_inherits(Chart, _PureComponent);
	
		function Chart() {
			_classCallCheck(this, Chart);
	
			_get(Object.getPrototypeOf(Chart.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Chart, [{
			key: "getChildContext",
			value: function getChildContext() {
				var _this = this;
	
				var chartData = this.context.chartData.filter(function (each) {
					return each.id === _this.props.id;
				})[0];
	
				var originX = 0.5 + chartData.config.origin[0] + this.context.margin.left;
				var originY = 0.5 + chartData.config.origin[1] + this.context.margin.top;
	
				return {
					chartId: this.props.id,
					xScale: chartData.plot.scales.xScale,
					yScale: chartData.plot.scales.yScale,
					xAccessor: chartData.config.xAccessor,
					overlays: chartData.config.overlays,
					compareSeries: chartData.config.compareSeries,
					chartData: chartData,
					width: chartData.config.width,
					height: chartData.config.height,
					canvasOriginX: originX,
					canvasOriginY: originY
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var origin = _utilsChartDataUtil2["default"].getChartOrigin(this.props.origin, this.context.width, this.context.height);
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					if (child === undefined || child === null) return child;
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this2.getChildContext(), function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
					return newChild;
				});
				var x = origin[0]; // + 0.5; // refer to http://www.rgraph.net/docs/howto-get-crisp-lines-with-no-antialias.html - similar fix for svg here
				var y = origin[1]; // + 0.5; // refer to http://www.rgraph.net/docs/howto-get-crisp-lines-with-no-antialias.html - similar fix for svg here
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + x + ", " + y + ")" },
					children
				);
			}
		}]);
	
		return Chart;
	})(_utilsPureComponent2["default"]);
	
	Chart.propTypes = {
		height: _react2["default"].PropTypes.number,
		width: _react2["default"].PropTypes.number,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		id: _react2["default"].PropTypes.number.isRequired,
		xScale: _react2["default"].PropTypes.func,
		yScale: _react2["default"].PropTypes.func,
		xDomainUpdate: _react2["default"].PropTypes.bool,
		yDomainUpdate: _react2["default"].PropTypes.bool,
		yMousePointerDisplayLocation: _react2["default"].PropTypes.oneOf(["left", "right"]),
		yMousePointerDisplayFormat: _react2["default"].PropTypes.func,
		padding: _react2["default"].PropTypes.object.isRequired
	};
	
	Chart.defaultProps = {
		namespace: "ReStock.Chart",
		transformDataAs: "none",
		yDomainUpdate: true,
		origin: [0, 0],
		padding: { top: 0, right: 0, bottom: 0, left: 0 },
		id: 0
	};
	
	Chart.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array,
		margin: _react2["default"].PropTypes.object.isRequired,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	Chart.childContextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		xAccessor: _react2["default"].PropTypes.func.isRequired,
		chartData: _react2["default"].PropTypes.object.isRequired,
		overlays: _react2["default"].PropTypes.array.isRequired,
		compareSeries: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		canvasOriginX: _react2["default"].PropTypes.number,
		canvasOriginY: _react2["default"].PropTypes.number,
		chartId: _react2["default"].PropTypes.number.isRequired
	};
	
	module.exports = Chart;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _transforms = __webpack_require__(38);
	
	var _EventHandler = __webpack_require__(75);
	
	var _EventHandler2 = _interopRequireDefault(_EventHandler);
	
	var _CanvasContainer = __webpack_require__(70);
	
	var _CanvasContainer2 = _interopRequireDefault(_CanvasContainer);
	
	var ChartCanvas = (function (_React$Component) {
		_inherits(ChartCanvas, _React$Component);
	
		function ChartCanvas() {
			_classCallCheck(this, ChartCanvas);
	
			_get(Object.getPrototypeOf(ChartCanvas.prototype), "constructor", this).call(this);
			this.getCanvases = this.getCanvases.bind(this);
		}
	
		_createClass(ChartCanvas, [{
			key: "getDimensions",
			value: function getDimensions(props) {
				return {
					height: props.height - props.margin.top - props.margin.bottom,
					width: props.width - props.margin.left - props.margin.right
				};
			}
		}, {
			key: "pushData",
			value: function pushData(array) {
				this.refs.chartContainer.pushData(array);
			}
		}, {
			key: "alterData",
			value: function alterData(array) {
				this.refs.chartContainer.alterData(array);
			}
		}, {
			key: "getCanvases",
			value: function getCanvases() {
				if (this.refs && this.refs.canvases) {
					return this.refs.canvases.getCanvasContexts();
				}
			}
		}, {
			key: "render",
			value: function render() {
				var dimensions = this.getDimensions(this.props);
				var style = "<![CDATA[\n\t\t\t\t\t\t.react-stockcharts-grabbing-cursor {\n\t\t\t\t\t\t\tcursor: grabbing;\n\t\t\t\t\t\t\tcursor: -moz-grabbing;\n\t\t\t\t\t\t\tcursor: -webkit-grabbing;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.react-stockcharts-crosshair-cursor {\n\t\t\t\t\t\t\tcursor: crosshair;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.react-stockcharts-toottip-hover {\n\t\t\t\t\t\t\tpointer-events: all;\n\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t}\n\t\t\t\t\t]]>";
				var _props = this.props;
				var data = _props.data;
				var dataTransform = _props.dataTransform;
				var interval = _props.interval;
				var initialDisplay = _props.initialDisplay;
				var type = _props.type;
				var height = _props.height;
				var width = _props.width;
				var margin = _props.margin;
				var className = _props.className;
				var clip = _props.clip;
				var zIndex = _props.zIndex;
	
				return _react2["default"].createElement(
					"div",
					{ style: { position: "relative", height: height, width: width }, className: className },
					_react2["default"].createElement(_CanvasContainer2["default"], { ref: "canvases", width: width, height: height, type: this.props.type, zIndex: zIndex }),
					_react2["default"].createElement(
						"svg",
						{ width: width, height: height, style: { position: "absolute", zIndex: zIndex + 1 } },
						_react2["default"].createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: style } }),
						_react2["default"].createElement(
							"defs",
							null,
							_react2["default"].createElement(
								"clipPath",
								{ id: "chart-area-clip" },
								_react2["default"].createElement("rect", { x: "0", y: "0", width: dimensions.width, height: dimensions.height })
							)
						),
						_react2["default"].createElement(
							"g",
							{ transform: "translate(" + (margin.left + 0.5) + ", " + (margin.top + 0.5) + ")" },
							_react2["default"].createElement(
								_EventHandler2["default"],
								{ ref: "chartContainer",
									rawData: data, dataTransform: dataTransform, interval: interval,
									initialDisplay: initialDisplay,
									dimensions: dimensions, type: type, margin: margin, canvasContexts: this.getCanvases },
								this.props.children
							)
						)
					)
				);
			}
		}]);
	
		return ChartCanvas;
	})(_react2["default"].Component);
	
	ChartCanvas.propTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		margin: _react2["default"].PropTypes.object,
		interval: _react2["default"].PropTypes.oneOf(["D", "W", "M"]).isRequired, // ,"m1", "m5", "m15", "W", "M"
		type: _react2["default"].PropTypes.oneOf(["svg", "hybrid"]).isRequired,
		data: _react2["default"].PropTypes.array.isRequired,
		initialDisplay: _react2["default"].PropTypes.number,
		dataTransform: _react2["default"].PropTypes.array.isRequired,
		className: _react2["default"].PropTypes.string,
		zIndex: _react2["default"].PropTypes.number
	};
	
	// clip: React.PropTypes.bool.isRequired,
	ChartCanvas.defaultProps = {
		margin: { top: 20, right: 30, bottom: 30, left: 80 },
		interval: "D",
		type: "hybrid",
		// defaultDataTransform: [ { transform: DummyTransformer } ],
		dataTransform: [],
		className: "react-stockchart",
		zIndex: 1
	};
	
	// clip: true,
	// initialDisplay: 30
	module.exports = ChartCanvas;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var DataSeries = (function (_React$Component) {
		_inherits(DataSeries, _React$Component);
	
		function DataSeries() {
			_classCallCheck(this, DataSeries);
	
			_get(Object.getPrototypeOf(DataSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(DataSeries, [{
			key: "getChildContext",
			value: function getChildContext() {
				var _this = this;
	
				var overlay = this.context.overlays.filter(function (each) {
					return each.id === _this.props.id;
				})[0];
	
				return {
					seriesId: this.props.id,
					yAccessor: overlay.yAccessor,
					indicator: overlay.indicator,
					stroke: overlay.stroke,
					fill: overlay.fill
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this2.getChildContext(), function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					{ style: { "clipPath": "url(#chart-area-clip)" } },
					children
				);
			}
		}]);
	
		return DataSeries;
	})(_react2["default"].Component);
	
	DataSeries.propTypes = {
		// type: React.PropTypes.oneOf(["sma", "ema"]),
		id: _react2["default"].PropTypes.number.isRequired,
		// stroke: React.PropTypes.string
		// xAccessor: React.PropTypes.func,
		yAccessor: _react2["default"].PropTypes.func,
		indicator: _react2["default"].PropTypes.func,
		options: _react2["default"].PropTypes.object
	};
	DataSeries.defaultProps = {
		namespace: "ReStock.DataSeries",
		compareBase: function compareBase(d) {
			return d.close;
		}
	};
	DataSeries.contextTypes = {
		overlays: _react2["default"].PropTypes.array.isRequired
	};
	DataSeries.childContextTypes = {
		yAccessor: _react2["default"].PropTypes.func.isRequired,
		indicator: _react2["default"].PropTypes.func,
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string,
		seriesId: _react2["default"].PropTypes.number.isRequired
	};
	module.exports = DataSeries;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var mousemove = "mousemove.pan",
	    mouseup = "mouseup.pan";
	
	function d3Window(node) {
		var d3win = node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
		return d3win;
	}
	
	var EventCapture = (function (_React$Component) {
		_inherits(EventCapture, _React$Component);
	
		function EventCapture(props) {
			_classCallCheck(this, EventCapture);
	
			_get(Object.getPrototypeOf(EventCapture.prototype), "constructor", this).call(this, props);
			this.handleEnter = this.handleEnter.bind(this);
			this.handleLeave = this.handleLeave.bind(this);
			this.handleWheel = this.handleWheel.bind(this);
			this.handleMouseMove = this.handleMouseMove.bind(this);
			this.handleMouseDown = this.handleMouseDown.bind(this);
			this.handlePanEnd = this.handlePanEnd.bind(this);
			this.handlePan = this.handlePan.bind(this);
		}
	
		_createClass(EventCapture, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				if (this.context.onFocus) this.context.onFocus(this.props.defaultFocus);
			}
		}, {
			key: "handleEnter",
			value: function handleEnter() {
				if (this.context.onMouseEnter) {
					this.context.onMouseEnter();
				}
			}
		}, {
			key: "handleLeave",
			value: function handleLeave() {
				if (this.context.onMouseLeave) {
					this.context.onMouseLeave();
				}
			}
		}, {
			key: "handleWheel",
			value: function handleWheel(e) {
				if (this.props.zoom && this.context.onZoom && this.context.focus) {
					e.stopPropagation();
					e.preventDefault();
					var zoomDir = e.deltaY > 0 ? this.props.zoomMultiplier : -this.props.zoomMultiplier;
					var newPos = _utilsUtils2["default"].mousePosition(e);
					this.context.onZoom(zoomDir, newPos);
				}
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(e) {
				if (this.context.onMouseMove && this.props.mouseMove) {
					if (!this.context.panInProgress) {
						var newPos = _utilsUtils2["default"].mousePosition(e);
						this.context.onMouseMove(newPos);
					}
				}
			}
		}, {
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				var _this = this;
	
				var mouseEvent = e || _d32["default"].event;
	
				var chartData = this.context.chartData.filter(function (each) {
					return each.id === _this.props.mainChart;
				})[0];
				if (this.props.pan && this.context.onPanStart) {
					var mouseXY = _utilsUtils2["default"].mousePosition(mouseEvent);
					this.context.onPanStart(chartData.plot.scales.xScale.domain(), mouseXY);
	
					var dx = mouseEvent.pageX - mouseXY[0],
					    dy = mouseEvent.pageY - mouseXY[1];
	
					var captureDOM = _utilsUtils2["default"].isReactVersion14() ? this.refs.capture : _react2["default"].findDOMNode(this.refs.capture);
	
					var win = d3Window(captureDOM);
					_d32["default"].select(win).on(mousemove, this.handlePan).on(mouseup, this.handlePanEnd);
	
					this.context.deltaXY([dx, dy]);
				} else {
					if (!this.context.focus && this.context.onFocus) this.context.onFocus(true);
				}
				mouseEvent.preventDefault();
			}
		}, {
			key: "handlePan",
			value: function handlePan() {
				var _this2 = this;
	
				// console.log("handlePan")
	
				var deltaXY = this.context.deltaXY();
				var newPos = [_d32["default"].event.pageX - deltaXY[0], _d32["default"].event.pageY - deltaXY[1]];
				// console.log("moved from- ", startXY, " to ", newPos);
				if (this.props.pan && this.context.onPan) {
					var chartData = this.context.chartData.filter(function (each) {
						return each.id === _this2.props.mainChart;
					})[0];
					this.context.onPan(newPos, chartData.plot.scales.xScale.domain());
				}
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd(event) {
				var deltaXY = this.context.deltaXY();
				var newPos = [_d32["default"].event.pageX - deltaXY[0], _d32["default"].event.pageY - deltaXY[1]];
	
				var captureDOM = _utilsUtils2["default"].isReactVersion14() ? this.refs.capture : _react2["default"].findDOMNode(this.refs.capture);
	
				var win = d3Window(captureDOM);
	
				_d32["default"].select(win).on(mousemove, null).on(mouseup, null);
				if (this.props.pan && this.context.onPanEnd) {
					this.context.onPanEnd(newPos);
				}
				// e.preventDefault();
			}
		}, {
			key: "handleTouchStart",
			value: function handleTouchStart(e) {
				console.log("handleTouchStart", e);
			}
		}, {
			key: "handleTouchEnd",
			value: function handleTouchEnd(e) {
				console.log("handleTouchEnd", e);
			}
		}, {
			key: "handleTouchMove",
			value: function handleTouchMove(e) {
				console.log("handleTouchMove", e);
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.context.panInProgress ? "react-stockcharts-grabbing-cursor" : "react-stockcharts-crosshair-cursor";
	
				return _react2["default"].createElement("rect", { ref: "capture",
					className: className,
					width: this.context.width, height: this.context.height, style: { opacity: 0 },
					onMouseEnter: this.handleEnter,
					onMouseLeave: this.handleLeave,
					onMouseMove: this.handleMouseMove,
					onWheel: this.handleWheel,
					onMouseDown: this.handleMouseDown,
	
					onTouchStart: this.handleTouchStart,
					onTouchEnd: this.handleTouchEnd,
					onTouchMove: this.handleTouchMove
				});
			}
		}]);
	
		return EventCapture;
	})(_react2["default"].Component);
	
	EventCapture.propTypes = {
		mainChart: _react2["default"].PropTypes.number.isRequired,
		mouseMove: _react2["default"].PropTypes.bool.isRequired,
		zoom: _react2["default"].PropTypes.bool.isRequired,
		zoomMultiplier: _react2["default"].PropTypes.number.isRequired,
		pan: _react2["default"].PropTypes.bool.isRequired,
		panSpeedMultiplier: _react2["default"].PropTypes.number.isRequired,
		defaultFocus: _react2["default"].PropTypes.bool.isRequired
	};
	
	EventCapture.defaultProps = {
		namespace: "ReStock.EventCapture",
		mouseMove: false,
		zoom: false,
		zoomMultiplier: 1,
		pan: false,
		panSpeedMultiplier: 1,
		defaultFocus: false
	};
	
	EventCapture.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array,
		onMouseMove: _react2["default"].PropTypes.func,
		onMouseEnter: _react2["default"].PropTypes.func,
		onMouseLeave: _react2["default"].PropTypes.func,
		onZoom: _react2["default"].PropTypes.func,
		onPanStart: _react2["default"].PropTypes.func,
		onPan: _react2["default"].PropTypes.func,
		onPanEnd: _react2["default"].PropTypes.func,
		panInProgress: _react2["default"].PropTypes.bool,
		focus: _react2["default"].PropTypes.bool.isRequired,
		onFocus: _react2["default"].PropTypes.func,
		deltaXY: _react2["default"].PropTypes.func
	};
	
	module.exports = EventCapture;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsPureComponent = __webpack_require__(23);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _utilsShallowEqual = __webpack_require__(50);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _transforms = __webpack_require__(38);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function getLongValue(value) {
		if (value instanceof Date) {
			return value.getTime();
		}
		return value;
	}
	function deepEquals(arr1, arr2) {
		if (arr1.length === arr2.length) {
			var result = true;
			arr1.forEach(function (each, i) {
				result = result && each.transform === arr2[i].transform && each.options === arr2[i].options;
			});
			return result;
		}
		return false;
	}
	
	var EventHandler = (function (_PureComponent) {
		_inherits(EventHandler, _PureComponent);
	
		function EventHandler(props, context) {
			_classCallCheck(this, EventHandler);
	
			_get(Object.getPrototypeOf(EventHandler.prototype), "constructor", this).call(this, props, context);
			this.handleMouseMove = this.handleMouseMove.bind(this);
			this.handleMouseEnter = this.handleMouseEnter.bind(this);
			this.handleMouseLeave = this.handleMouseLeave.bind(this);
			this.handleZoom = this.handleZoom.bind(this);
			this.handlePanStart = this.handlePanStart.bind(this);
			this.handlePan = this.handlePan.bind(this);
			this.handlePanEnd = this.handlePanEnd.bind(this);
			this.handleFocus = this.handleFocus.bind(this);
			this.deltaXY = this.deltaXY.bind(this);
			this.getCanvasContexts = this.getCanvasContexts.bind(this);
	
			this.state = {
				focus: false,
				currentItems: [],
				show: false,
				mouseXY: [0, 0],
				panInProgress: false
			};
		}
	
		_createClass(EventHandler, [{
			key: "deltaXY",
			value: function deltaXY(dxy) {
				if (dxy) {
					this.setState({
						deltaXY: dxy
					});
				} else {
					return this.state.deltaXY;
				}
			}
		}, {
			key: "getTransformedData",
			value: function getTransformedData(rawData, defaultDataTransform, dataTransform, interval) {
				var i = 0,
				    eachTransform,
				    options = {},
				    data = rawData;
				var transforms = defaultDataTransform.concat(dataTransform);
				for (i = 0; i < transforms.length; i++) {
					// console.log(transforms[i]);
					eachTransform = transforms[i].transform();
					options = (0, _objectAssign2["default"])({}, options, transforms[i].options);
					options = eachTransform.options(options);
					data = eachTransform(data, interval);
				}
				return {
					data: data,
					options: options
				};
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				// console.log("EventHandler.componentWillMount");
				var props = this.props;
				var context = this.context;
				var initialDisplay = props.initialDisplay;
				var rawData = props.rawData;
				var defaultDataTransform = props.defaultDataTransform;
				var dataTransform = props.dataTransform;
				var interval = props.interval;
				var dimensions = props.dimensions;
	
				var transformedData = this.getTransformedData(rawData, defaultDataTransform, dataTransform, interval);
	
				var data = transformedData.data;
				var options = transformedData.options;
	
				var dataForInterval = data[interval];
				var mainChart = _utilsChartDataUtil2["default"].getMainChart(props.children);
				var beginIndex = Math.max(dataForInterval.length - initialDisplay, 0);
				var plotData = dataForInterval.slice(beginIndex);
	
				var chartData = _utilsChartDataUtil2["default"].getChartData(props, dimensions, plotData, data, options);
	
				this.setState({
					data: data,
					rawData: rawData,
					options: options,
					plotData: plotData,
					chartData: chartData,
					interval: this.props.interval,
					mainChart: mainChart,
					currentCharts: [mainChart],
					initialRender: true,
					secretToSuperFastCanvasDraw: []
				});
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var _props = this.props;
				var prevData = _props.rawData;
				var prevDataTransform = _props.dataTransform;
				var nextData = nextProps.rawData;
				var nextDataTransform = nextProps.dataTransform;
				var dimensions = nextProps.dimensions;
				var initialDisplay = nextProps.initialDisplay;
				var defaultDataTransform = nextProps.defaultDataTransform;
				var intervalProp = nextProps.interval;
				var _state = this.state;
				var data = _state.data;
				var options = _state.options;
				var interval = _state.interval;
				var chartData = _state.chartData;
				var plotData = _state.plotData;
				var rawData = _state.rawData;
	
				var prevDataForInterval = data[interval];
	
				var dataChanged = false;
				if (prevData !== nextData || !deepEquals(prevDataTransform, nextDataTransform)) {
					var transformedData = this.getTransformedData(nextData, defaultDataTransform, nextDataTransform, intervalProp);
					data = transformedData.data;
					options = transformedData.options;
	
					dataChanged = true;
					rawData = nextData;
				}
	
				var dataForInterval = data[interval];
	
				var mainChart = _utilsChartDataUtil2["default"].getMainChart(nextProps.children);
				var mainChartData = chartData.filter(function (each) {
					return each.id === mainChart;
				})[0];
				var xScale = mainChartData.plot.scales.xScale;
	
				var domainL,
				    domainR,
				    startDomain = xScale.domain();
				// console.log(dataPushed, lastItemVisible);
	
				if (dataChanged) {
					var beginIndex = Math.max(dataForInterval.length - initialDisplay, 0);
					var endIndex = dataForInterval.length;
	
					plotData = dataForInterval.slice(beginIndex, endIndex);
				} else {
	
					domainL = startDomain[0];
					domainR = startDomain[1];
				}
	
				// console.log(plotData[0], plotData[plotData.length - 1]);
				var newChartData = _utilsChartDataUtil2["default"].getChartData(nextProps, dimensions, plotData, data, options);
	
				newChartData = newChartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, plotData, domainL, domainR);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
	
				var newCurrentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, this.state.mouseXY, plotData);
	
				this.clearBothCanvas(nextProps);
	
				this.setState({
					rawData: rawData,
					data: data,
					options: options,
					chartData: newChartData,
					plotData: plotData,
					currentItems: newCurrentItems,
					mainChart: mainChart,
					initialRender: false,
					secretToSuperFastCanvasDraw: [],
					canvases: null
				});
			}
		}, {
			key: "pushData",
			value: function pushData(array) {
				var _this = this;
	
				if (array === undefined || array === null || array.length === 0) return;
	
				var _props2 = this.props;
				var dataTransform = _props2.dataTransform;
				var defaultDataTransform = _props2.defaultDataTransform;
				var dimensions = _props2.dimensions;
				var _state2 = this.state;
				var rawData = _state2.rawData;
				var data = _state2.data;
				var options = _state2.options;
				var interval = _state2.interval;
				var chartData = _state2.chartData;
				var plotData = _state2.plotData;
				var mainChart = _state2.mainChart;
	
				var newRawData = rawData.concat(array);
				var transformedData = this.getTransformedData(newRawData, defaultDataTransform, dataTransform, interval);
	
				var prevDataForInterval = data[interval];
				var dataForInterval = transformedData.data[interval];
	
				var mainChartData = chartData.filter(function (each) {
					return each.id === mainChart;
				})[0];
				var xAccessor = mainChartData.config.xAccessor;
				var xScale = mainChartData.plot.scales.xScale;
	
				var deltaPushed = array.length;
	
				var startDomain = xScale.domain();
				var domainL, domainR;
	
				var lastItemVisible = plotData[plotData.length - 1] === prevDataForInterval[prevDataForInterval.length - 1];
	
				var beginIndex, endIndex;
				if (lastItemVisible) {
					/* var left = xAccessor(plotData[deltaPushed]);
	    	var tick = xScale(xAccessor(plotData[1])) - xScale(xAccessor(plotData[0]));
	    	// console.log(tick);
	    	if ((xScale(xAccessor(plotData[0])) - xScale(startDomain[0])) > tick) {
	    	left = xAccessor(plotData[0]);
	    } */
	
					// beginIndex = Utils.getClosestItemIndexes(dataForInterval, left, xAccessor).left;
					endIndex = dataForInterval.length;
					beginIndex = dataForInterval.length - plotData.length;
				} else {
					//
					domainL = startDomain[0];
					domainR = startDomain[1];
					var beginIndex = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, domainL, xAccessor).left;
					var endIndex = beginIndex + plotData.length;
				}
	
				var newPlotData = dataForInterval.slice(beginIndex, endIndex);
				// console.log(newPlotData[newPlotData.length - 1]);
	
				if (lastItemVisible && domainL === undefined) {
					if (startDomain[1] > xAccessor(plotData[plotData.length - 1])) {
						domainL = startDomain[0] + (xAccessor(newPlotData[newPlotData.length - 1]) - xAccessor(plotData[plotData.length - 1]));
						domainR = startDomain[1] + (xAccessor(newPlotData[newPlotData.length - 1]) - xAccessor(plotData[plotData.length - 1]));
					}
				}
	
				var newChartData = _utilsChartDataUtil2["default"].getChartData(this.props, dimensions, newPlotData, transformedData.data, transformedData.options);
	
				if (domainL === undefined) {
					domainL = xAccessor(newPlotData[0]);
					domainR = xAccessor(newPlotData[newPlotData.length - 1]);
				}
	
				var l = 2,
				    i = 0,
				    speed = 16;
	
				var updateState = function updateState(L, R) {
					newChartData = newChartData.map(function (eachChart) {
						var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, newPlotData, L, R);
						return {
							id: eachChart.id,
							config: eachChart.config,
							plot: plot
						};
					});
	
					var newCurrentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, _this.state.mouseXY, newPlotData);
	
					_this.clearBothCanvas(_this.props);
	
					// console.log(L, R, this.state.secretToSuperFastCanvasDraw.length);
	
					_this.setState({
						rawData: newRawData,
						data: transformedData.data,
						options: transformedData.options,
						chartData: newChartData,
						plotData: newPlotData,
						currentItems: newCurrentItems,
						secretToSuperFastCanvasDraw: [],
						canvases: null
					});
				};
				if (lastItemVisible) {
	
					var timeout = setInterval(function () {
						var dxL = (startDomain[0] - domainL) / l;
						var dxR = (startDomain[1] - domainR) / l;
	
						i++;
	
						var L = i === l ? domainL : startDomain[0] - dxL * i;
						var R = i === l ? domainR : startDomain[1] - dxR * i;
						// console.log(i, L, domainL, R, domainR);
						// console.log(startDomain[0], domainL, startDomain[0] - dxL * i, i);
						// console.log(startDomain[1], domainR, startDomain[1] - dxR * i, i);
	
						updateState(L, R);
						if (i === l) clearInterval(timeout);
					}, speed);
				} else {
					this.setState({
						rawData: newRawData,
						data: transformedData.data,
						options: transformedData.options
					});
				}
			}
		}, {
			key: "alterData",
			// chartData: newChartData,
			// plotData: newPlotData,
			// currentItems: newCurrentItems,
			// secretToSuperFastCanvasDraw: [],
			// canvases: null,
			value: function alterData(newRawData) {
				if (newRawData === undefined || newRawData === null || newRawData.length === 0) return;
	
				var _props3 = this.props;
				var dataTransform = _props3.dataTransform;
				var defaultDataTransform = _props3.defaultDataTransform;
				var dimensions = _props3.dimensions;
				var _state3 = this.state;
				var rawData = _state3.rawData;
				var data = _state3.data;
				var options = _state3.options;
				var interval = _state3.interval;
				var chartData = _state3.chartData;
				var plotData = _state3.plotData;
				var mainChart = _state3.mainChart;
	
				if (rawData.length !== newRawData.length) {
					console.log(rawData.length, newRawData.length);
					throw Error("Have to update data of same length");
				}
	
				var transformedData = this.getTransformedData(newRawData, defaultDataTransform, dataTransform, interval);
	
				var dataForInterval = transformedData.data[interval];
	
				var mainChartData = chartData.filter(function (each) {
					return each.id === mainChart;
				})[0];
				var xAccessor = mainChartData.config.xAccessor;
				var xScale = mainChartData.plot.scales.xScale;
	
				var startDomain = xScale.domain();
	
				var left = xAccessor(plotData[0]);
				var beginIndex = _utilsUtils2["default"].getClosestItemIndexes(dataForInterval, left, xAccessor).left;
				var endIndex = beginIndex + plotData.length;
	
				var newPlotData = dataForInterval.slice(beginIndex, endIndex);
	
				var newChartData = _utilsChartDataUtil2["default"].getChartData(this.props, dimensions, newPlotData, transformedData.data, transformedData.options);
	
				newChartData = newChartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, newPlotData, startDomain[0], startDomain[1]);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
	
				var newCurrentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, this.state.mouseXY, newPlotData);
	
				this.clearBothCanvas(this.props);
	
				// console.log(newPlotData.length);
	
				this.setState({
					rawData: newRawData,
					data: transformedData.data,
					options: transformedData.options,
					chartData: newChartData,
					plotData: newPlotData,
					currentItems: newCurrentItems,
					secretToSuperFastCanvasDraw: [],
					canvases: null
				});
			}
		}, {
			key: "clearBothCanvas",
			value: function clearBothCanvas(props) {
				props = props || this.props;
				var canvases = props.canvasContexts();
				if (canvases && canvases.axes) {
					this.clearCanvas([canvases.axes, canvases.mouseCoord]);
				}
			}
		}, {
			key: "clearCanvas",
			value: function clearCanvas(canvasList) {
				canvasList.forEach(function (each) {
					each.setTransform(1, 0, 0, 1, 0, 0);
					each.clearRect(-1, -1, each.canvas.width + 2, each.canvas.height + 2);
				});
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				return {
					plotData: this.state.plotData,
					chartData: this.state.chartData,
					currentItems: this.state.currentItems,
					mainChart: this.state.mainChart,
					show: this.state.show,
					mouseXY: this.state.mouseXY,
					interval: this.state.interval,
					currentCharts: this.state.currentCharts,
					width: this.props.dimensions.width,
					height: this.props.dimensions.height,
					type: this.props.type,
					dateAccessor: this.state.options.dateAccessor,
					secretToSuperFastCanvasDraw: this.state.secretToSuperFastCanvasDraw,
					margin: this.props.margin,
					dataTransform: this.props.dataTransform,
	
					getCanvasContexts: this.getCanvasContexts,
					onMouseMove: this.handleMouseMove,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					onZoom: this.handleZoom,
					onPanStart: this.handlePanStart,
					onPan: this.handlePan,
					onPanEnd: this.handlePanEnd,
					onFocus: this.handleFocus,
					deltaXY: this.deltaXY,
					panInProgress: this.state.panInProgress,
					focus: this.state.focus
				};
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(mouseXY) {
				var currentCharts = this.state.chartData.filter(function (chartData) {
					var top = chartData.config.origin[1];
					var bottom = top + chartData.config.height;
					return mouseXY[1] > top && mouseXY[1] < bottom;
				}).map(function (chartData) {
					return chartData.id;
				});
				var currentItems = _utilsChartDataUtil2["default"].getCurrentItems(this.state.chartData, mouseXY, this.state.plotData);
	
				var chartData = this.state.chartData;
	
				var contexts = this.getCanvasContexts();
	
				if (contexts && contexts.mouseCoord) {
					var mouseCoord = contexts.mouseCoord;
	
					mouseCoord.setTransform(1, 0, 0, 1, 0, 0);
					mouseCoord.clearRect(-1, -1, mouseCoord.canvas.width + 2, mouseCoord.canvas.height + 2);
				}
	
				this.setState({
					mouseXY: mouseXY,
					currentItems: currentItems,
					show: true,
					currentCharts: currentCharts
				});
			}
		}, {
			key: "getCanvasContexts",
			value: function getCanvasContexts() {
				// console.log(this.state.canvases, this.props.canvasContexts())
				return this.state.canvases || this.props.canvasContexts();
			}
		}, {
			key: "handleMouseEnter",
			value: function handleMouseEnter() {
				// if type === svg remove state.canvases
				// if type !== svg get canvases and set in state if state.canvases is not present already
				var _props4 = this.props;
				var type = _props4.type;
				var canvasContexts = _props4.canvasContexts;
				var canvases = this.state.canvases;
	
				if (type === "svg") {
					canvases = null;
				} else {
					canvases = canvasContexts();
				}
				this.setState({
					show: true,
					canvases: canvases
				});
			}
		}, {
			key: "handleMouseLeave",
			value: function handleMouseLeave() {
				var contexts = this.getCanvasContexts();
	
				if (contexts && contexts.mouseCoord) {
					var mouseCoord = contexts.mouseCoord;
	
					mouseCoord.setTransform(1, 0, 0, 1, 0, 0);
					mouseCoord.clearRect(-1, -1, mouseCoord.canvas.width + 2, mouseCoord.canvas.height + 2);
				}
	
				this.setState({
					show: false
				});
			}
		}, {
			key: "handleZoom",
			value: function handleZoom(zoomDirection, mouseXY) {
				// console.log("zoomDirection ", zoomDirection, " mouseXY ", mouseXY);
				var _state4 = this.state;
				var data = _state4.data;
				var mainChart = _state4.mainChart;
				var chartData = _state4.chartData;
				var plotData = _state4.plotData;
				var interval = _state4.interval;
	
				var chart = chartData.filter(function (eachChart) {
					return eachChart.id === mainChart;
				})[0],
				    item = _utilsChartDataUtil2["default"].getClosestItem(plotData, mouseXY, chart),
				    xScale = chart.plot.scales.xScale,
				    domain = xScale.domain(),
				    centerX = chart.config.xAccessor(item),
				    leftX = centerX - domain[0],
				    rightX = domain[1] - centerX,
				    zoom = Math.pow(1 + Math.abs(zoomDirection) / 2, zoomDirection),
				    domainL = getLongValue(centerX) - leftX * zoom,
				    domainR = getLongValue(centerX) + rightX * zoom,
				    domainRange = Math.abs(domain[1] - domain[0]),
				    fullData = data[interval],
				    last = fullData[fullData.length - 1],
				    first = fullData[0];
	
				domainL = Math.max(getLongValue(chart.config.xAccessor(first)) - Math.floor(domainRange / 3), domainL);
				domainR = Math.min(getLongValue(chart.config.xAccessor(last)) + Math.floor(domainRange / 3), domainR);
	
				var dataToPlot = _utilsChartDataUtil2["default"].getDataToPlotForDomain(domainL, domainR, data, chart.config.width, chart.config.xAccessor);
				if (dataToPlot.data.length < 10) return;
				var newChartData = chartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, dataToPlot.data, domainL, domainR);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
				this.clearBothCanvas();
	
				this.setState({
					chartData: newChartData,
					plotData: dataToPlot.data,
					interval: dataToPlot.interval,
					secretToSuperFastCanvasDraw: []
				});
			}
		}, {
			key: "handlePanStart",
			value: function handlePanStart(panStartDomain, panOrigin) {
				// console.log("panStartDomain - ", panStartDomain, ", panOrigin - ", panOrigin);
				this.setState({
					panInProgress: true,
					panStartDomain: panStartDomain,
					panOrigin: panOrigin,
					focus: true
				});
			}
		}, {
			key: "panHelper",
			value: function panHelper(mousePosition) {
				var _state5 = this.state;
				var data = _state5.data;
				var mainChart = _state5.mainChart;
				var chartData = _state5.chartData;
				var interval = _state5.interval;
				var panStartDomain = _state5.panStartDomain;
				var panOrigin = _state5.panOrigin;
	
				var chart = chartData.filter(function (eachChart) {
					return eachChart.id === mainChart;
				})[0],
				    domainRange = panStartDomain[1] - panStartDomain[0],
				    fullData = data[interval],
				    last = fullData[fullData.length - 1],
				    first = fullData[0],
				    dx = mousePosition[0] - panOrigin[0],
				    xAccessor = chart.config.xAccessor;
	
				// console.log("pan -- mouse move - ", mousePosition, " dragged by ", dx, " pixels");
	
				var domainStart = getLongValue(panStartDomain[0]) - dx / chart.config.width * domainRange;
				if (domainStart < getLongValue(xAccessor(first)) - Math.floor(domainRange / 3)) {
					domainStart = getLongValue(xAccessor(first)) - Math.floor(domainRange / 3);
				} else {
					domainStart = Math.min(getLongValue(xAccessor(last)) + Math.ceil(domainRange / 3), domainStart + domainRange) - domainRange;
				}
				var domainL = domainStart,
				    domainR = domainStart + domainRange;
				if (panStartDomain[0] instanceof Date) {
					domainL = new Date(domainL);
					domainR = new Date(domainR);
				}
	
				var beginIndex = _utilsUtils2["default"].getClosestItemIndexes(fullData, domainL, xAccessor).left;
				var endIndex = _utilsUtils2["default"].getClosestItemIndexes(fullData, domainR, xAccessor).right;
	
				var filteredData = fullData.slice(beginIndex, endIndex);
	
				var newChartData = chartData.map(function (eachChart) {
					var plot = _utilsChartDataUtil2["default"].getChartPlotFor(eachChart.config, filteredData, domainL, domainR);
					return {
						id: eachChart.id,
						config: eachChart.config,
						plot: plot
					};
				});
				var currentItems = _utilsChartDataUtil2["default"].getCurrentItems(newChartData, mousePosition, filteredData);
	
				var currentCharts = newChartData.filter(function (eachChartData) {
					var top = eachChartData.config.origin[1];
					var bottom = top + eachChartData.config.height;
					return mousePosition[1] > top && mousePosition[1] < bottom;
				}).map(function (eachChartData) {
					return eachChartData.id;
				});
				return {
					plotData: filteredData,
					// show: true,
					mouseXY: mousePosition,
					currentCharts: currentCharts,
					chartData: newChartData,
					currentItems: currentItems
				};
			}
		}, {
			key: "getCurrentCanvasContext",
			value: function getCurrentCanvasContext(canvasList, chartId) {
				var canvasContextList = canvasList.filter(function (each) {
					return parseInt(each.id, 10) === chartId;
				});
				var canvasContext = canvasContextList.length > 0 ? canvasContextList[0].context : undefined;
				return canvasContext;
			}
		}, {
			key: "handlePan",
			value: function handlePan(mousePosition, startDomain) {
				var _this2 = this;
	
				/* can also use plotData, use this if you want to pan and show only within that data set*/
				if (this.state.panStartDomain === null) {
					this.handlePanStart(startDomain, mousePosition);
				} else {
	
					var state = this.panHelper(mousePosition);
					// console.log(this.state.secretToSuperFastCanvasDraw);
					if (this.props.type !== "svg") {
						var _context = this.context;
						var canvasList = _context.canvasList;
						var getCanvasContexts = _context.getCanvasContexts;
						var margin = _context.margin;
	
						var _getCanvasContexts = this.getCanvasContexts();
	
						var axesCanvasContext = _getCanvasContexts.axes;
						var mouseContext = _getCanvasContexts.mouseCoord;
						var chartData = state.chartData;
						var plotData = state.plotData;
	
						requestAnimationFrame(function () {
							_this2.clearCanvas([axesCanvasContext, mouseContext]);
	
							chartData.forEach(function (eachChart) {
								_this2.state.secretToSuperFastCanvasDraw.filter(function (each) {
									return eachChart.id === each.chartId;
								}).forEach(function (each) {
									var _eachChart$plot$scales = eachChart.plot.scales;
									var xScale = _eachChart$plot$scales.xScale;
									var yScale = _eachChart$plot$scales.yScale;
	
									eachChart.config.overlays.filter(function (eachOverlay) {
										return eachOverlay.id === each.seriesId;
									}).forEach(function (eachOverlay) {
										// console.log("Do Stuff here", i);
										var _eachChart$config = eachChart.config;
										var xAccessor = _eachChart$config.xAccessor;
										var compareSeries = _eachChart$config.compareSeries;
										var yAccessor = eachOverlay.yAccessor;
	
										// xScale, yScale, plotData
										each.draw(axesCanvasContext, xScale, yScale, plotData);
									});
									if (each.type === "axis") {
										each.draw(axesCanvasContext, eachChart, xScale, yScale);
									}
								});
							});
							_this2.state.secretToSuperFastCanvasDraw.filter(function (each) {
								return each.chartId === undefined;
							}).filter(function (each) {
								return each.type === "axis";
							}).forEach(function (each) {
								return each.draw(axesCanvasContext, chartData);
							});
	
							_this2.state.secretToSuperFastCanvasDraw.filter(function (each) {
								return each.type === "mouse";
							}).forEach(function (each) {
								return each.draw(mouseContext, _this2.state.show, state.mouseXY, state.currentCharts, state.chartData, state.currentItems);
							});
	
							_this2.state.secretToSuperFastCanvasDraw.filter(function (each) {
								return each.type === "currentcoordinate";
							}).forEach(function (each) {
								return each.draw(mouseContext, _this2.state.show, state.mouseXY, state.currentCharts, state.chartData, state.currentItems);
							});
						});
					} else {
						this.setState(state);
					}
				}
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd(mousePosition) {
				this.clearBothCanvas();
	
				var state = this.panHelper(mousePosition);
				this.setState((0, _objectAssign2["default"])({}, state, {
					show: this.state.show,
					panInProgress: false,
					panStartDomain: null,
					secretToSuperFastCanvasDraw: []
				}));
			}
		}, {
			key: "handleFocus",
			value: function handleFocus(focus) {
				// console.log(focus);
				this.setState({
					focus: focus
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this3.getChildContext(), function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
	
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					null,
					children
				);
			}
		}]);
	
		return EventHandler;
	})(_utilsPureComponent2["default"]);
	
	EventHandler.defaultProps = {
		defaultDataTransform: [{ transform: _transforms.DummyTransformer }]
	};
	
	EventHandler.childContextTypes = {
		plotData: _react2["default"].PropTypes.array,
		chartData: _react2["default"].PropTypes.array,
		currentItems: _react2["default"].PropTypes.array,
		show: _react2["default"].PropTypes.bool,
		mouseXY: _react2["default"].PropTypes.array,
		interval: _react2["default"].PropTypes.string,
		currentCharts: _react2["default"].PropTypes.array,
		mainChart: _react2["default"].PropTypes.number,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		type: _react2["default"].PropTypes.oneOf(["svg", "hybrid"]).isRequired,
		dateAccessor: _react2["default"].PropTypes.func,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired,
		margin: _react2["default"].PropTypes.object.isRequired,
		dataTransform: _react2["default"].PropTypes.array,
	
		getCanvasContexts: _react2["default"].PropTypes.func,
		onMouseMove: _react2["default"].PropTypes.func,
		onMouseEnter: _react2["default"].PropTypes.func,
		onMouseLeave: _react2["default"].PropTypes.func,
		onZoom: _react2["default"].PropTypes.func,
		onPanStart: _react2["default"].PropTypes.func,
		onPan: _react2["default"].PropTypes.func,
		onPanEnd: _react2["default"].PropTypes.func,
		panInProgress: _react2["default"].PropTypes.bool.isRequired,
		focus: _react2["default"].PropTypes.bool.isRequired,
		onFocus: _react2["default"].PropTypes.func,
		deltaXY: _react2["default"].PropTypes.func
	};
	
	module.exports = EventHandler;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function d3_scaleExtent(domain) {
		var start = domain[0],
		    stop = domain[domain.length - 1];
		return start < stop ? [start, stop] : [stop, start];
	}
	
	function d3_scaleRange(scale) {
		return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	}
	
	var AxisLine = (function (_React$Component) {
		_inherits(AxisLine, _React$Component);
	
		function AxisLine() {
			_classCallCheck(this, AxisLine);
	
			_get(Object.getPrototypeOf(AxisLine.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(AxisLine, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var orient = _props.orient;
				var scale = _props.scale;
				var outerTickSize = _props.outerTickSize;
				var fill = _props.fill;
				var stroke = _props.stroke;
				var strokeWidth = _props.strokeWidth;
				var className = _props.className;
				var shapeRendering = _props.shapeRendering;
				var opacity = _props.opacity;
	
				var sign = orient === "top" || orient === "left" ? -1 : 1;
	
				var range = d3_scaleRange(scale);
	
				var d;
	
				if (orient === "bottom" || orient === "top") {
					d = "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize;
				} else {
					d = "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize;
				}
	
				return _react2["default"].createElement("path", {
					className: className,
					shapeRendering: shapeRendering,
					d: d,
					fill: fill,
					opacity: opacity,
					stroke: stroke,
					strokeWidth: strokeWidth });
			}
		}]);
	
		return AxisLine;
	})(_react2["default"].Component);
	
	AxisLine.propTypes = {
		className: _react2["default"].PropTypes.string,
		shapeRendering: _react2["default"].PropTypes.string,
		orient: _react2["default"].PropTypes.string.isRequired,
		scale: _react2["default"].PropTypes.func.isRequired,
		outerTickSize: _react2["default"].PropTypes.number,
		fill: _react2["default"].PropTypes.string,
		stroke: _react2["default"].PropTypes.string,
		strokeWidth: _react2["default"].PropTypes.number,
		opacity: _react2["default"].PropTypes.number
	};
	
	AxisLine.defaultProps = {
		className: "react-stockcharts-axis-line",
		shapeRendering: "crispEdges",
		outerTickSize: 6,
		fill: "none",
		stroke: "#000",
		strokeWidth: 1,
		opacity: 1
	};
	
	AxisLine.drawOnCanvasStatic = function (props, ctx, chartData, xScale, yScale) {
		props = (0, _objectAssign2["default"])({}, AxisLine.defaultProps, props);
	
		var _props2 = props;
		var orient = _props2.orient;
		var outerTickSize = _props2.outerTickSize;
		var fill = _props2.fill;
		var stroke = _props2.stroke;
		var strokeWidth = _props2.strokeWidth;
		var className = _props2.className;
		var shapeRendering = _props2.shapeRendering;
		var opacity = _props2.opacity;
	
		var sign = orient === "top" || orient === "left" ? -1 : 1;
		var xAxis = orient === "bottom" || orient === "top";
	
		var range = d3_scaleRange(xAxis ? xScale : yScale);
	
		var strokeStyle = ctx.strokeStyle;
		var globalAlpha = ctx.globalAlpha;
	
		ctx.strokeStyle = stroke;
		ctx.globalAlpha = opacity;
	
		ctx.beginPath();
	
		if (xAxis) {
			ctx.moveTo(range[0], sign * outerTickSize);
			ctx.lineTo(range[0], 0);
			ctx.lineTo(range[1], 0);
			ctx.lineTo(range[1], sign * outerTickSize);
		} else {
			ctx.moveTo(sign * outerTickSize, range[0]);
			ctx.lineTo(0, range[0]);
			ctx.lineTo(0, range[1]);
			ctx.lineTo(sign * outerTickSize, range[1]);
		}
		ctx.stroke();
	
		ctx.strokeStyle = strokeStyle;
		ctx.globalAlpha = globalAlpha;
	};
	
	module.exports = AxisLine;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	function d3_identity(d) {
		return d;
	}
	
	function tickTransform_svg_axisX(scale, tick) {
		return [~ ~(0.5 + scale(tick)), 0];
	}
	
	function tickTransform_svg_axisY(scale, tick) {
		return [0, ~ ~(0.5 + scale(tick))];
	}
	
	var Tick = (function (_React$Component) {
		_inherits(Tick, _React$Component);
	
		function Tick() {
			_classCallCheck(this, Tick);
	
			_get(Object.getPrototypeOf(Tick.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Tick, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var transform = _props.transform;
				var tickStroke = _props.tickStroke;
				var tickStrokeOpacity = _props.tickStrokeOpacity;
				var textAnchor = _props.textAnchor;
				var fontSize = _props.fontSize;
				var fontFamily = _props.fontFamily;
				var _props2 = this.props;
				var x = _props2.x;
				var y = _props2.y;
				var x2 = _props2.x2;
				var y2 = _props2.y2;
				var dy = _props2.dy;
	
				return _react2["default"].createElement(
					"g",
					{ className: "tick", transform: "translate(" + transform[0] + ", " + transform[1] + ")" },
					_react2["default"].createElement("line", { shapeRendering: "crispEdges", opacity: tickStrokeOpacity, stroke: tickStroke, x2: x2, y2: y2 }),
					_react2["default"].createElement(
						"text",
						{
							dy: dy, x: x, y: y,
							fontSize: fontSize,
							fontFamily: fontFamily,
							textAnchor: textAnchor },
						this.props.children
					)
				);
			}
		}]);
	
		return Tick;
	})(_react2["default"].Component);
	
	Tick.drawOnCanvasStatic = function (tick, ctx, chartData, result) {
		var scale = result.scale;
		var tickTransform = result.tickTransform;
		var dy = result.dy;
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
	};
	
	var AxisTicks = (function (_React$Component2) {
		_inherits(AxisTicks, _React$Component2);
	
		function AxisTicks() {
			_classCallCheck(this, AxisTicks);
	
			_get(Object.getPrototypeOf(AxisTicks.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(AxisTicks, [{
			key: "render",
			value: function render() {
				var result = AxisTicks.helper(this.props, this.props.scale);
				var ticks = result.ticks;
				var scale = result.scale;
				var tickTransform = result.tickTransform;
				var tickStroke = result.tickStroke;
				var tickStrokeOpacity = result.tickStrokeOpacity;
				var dy = result.dy;
				var x = result.x;
				var y = result.y;
				var x2 = result.x2;
				var y2 = result.y2;
				var textAnchor = result.textAnchor;
				var fontSize = result.fontSize;
				var fontFamily = result.fontFamily;
				var format = result.format;
	
				return _react2["default"].createElement(
					"g",
					null,
					ticks.map(function (tick, idx) {
						return _react2["default"].createElement(
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
		}]);
	
		return AxisTicks;
	})(_react2["default"].Component);
	
	AxisTicks.propTypes = {
		orient: _react2["default"].PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.array,
		tickValues: _react2["default"].PropTypes.array,
		scale: _react2["default"].PropTypes.func.isRequired,
		tickStroke: _react2["default"].PropTypes.string,
		tickStrokeOpacity: _react2["default"].PropTypes.number
	};
	
	AxisTicks.defaultProps = {
		innerTickSize: 5,
		tickPadding: 6,
		ticks: [10],
		tickStroke: "#000",
		tickStrokeOpacity: 1
	};
	
	AxisTicks.helper = function (props, scale) {
		var orient = props.orient;
		var innerTickSize = props.innerTickSize;
		var tickFormat = props.tickFormat;
		var tickPadding = props.tickPadding;
		var fontSize = props.fontSize;
		var fontFamily = props.fontFamily;
		var tickStroke = props.tickStroke;
		var tickStrokeOpacity = props.tickStrokeOpacity;
		var tickSize = props.tickSize;
		var tickArguments = props.ticks;
		var tickValues = props.tickValues;
	
		var ticks = tickValues === undefined ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues;
	
		var format = tickFormat === undefined ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : d3_identity : tickFormat;
	
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
	};
	
	AxisTicks.drawOnCanvasStatic = function (props, ctx, chartData, xScale, yScale) {
		props = (0, _objectAssign2["default"])({}, AxisTicks.defaultProps, props);
	
		var _props3 = props;
		var orient = _props3.orient;
	
		var xAxis = orient === "bottom" || orient === "top";
	
		var result = AxisTicks.helper(props, xAxis ? xScale : yScale);
	
		var tickStroke = result.tickStroke;
		var tickStrokeOpacity = result.tickStrokeOpacity;
		var textAnchor = result.textAnchor;
		var fontSize = result.fontSize;
		var fontFamily = result.fontFamily;
	
		ctx.strokeStyle = _utilsUtils2["default"].hexToRGBA(tickStroke, tickStrokeOpacity);
	
		ctx.font = fontSize + "px " + fontFamily;
		ctx.fillStyle = tickStroke;
		ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;
		// ctx.textBaseline = 'middle';
	
		result.ticks.forEach(function (tick) {
			Tick.drawOnCanvasStatic(tick, ctx, chartData, result);
		});
	};
	
	module.exports = AxisTicks;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Axis = __webpack_require__(47);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var XAxis = (function (_React$Component) {
		_inherits(XAxis, _React$Component);
	
		function XAxis() {
			_classCallCheck(this, XAxis);
	
			_get(Object.getPrototypeOf(XAxis.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(XAxis, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var axisAt = _props.axisAt;
				var showTicks = _props.showTicks;
				var tickFormat = _props.tickFormat;
				var ticks = _props.ticks;
	
				var range = this.context.yScale.range(),
				    axisLocation;
				if (axisAt === "top") axisLocation = 0;else if (axisAt === "bottom") axisLocation = this.context.height;else if (axisAt === "middle") axisLocation = this.context.height / 2;else axisLocation = axisAt;
	
				if (tickFormat && this.context.xScale.isPolyLinear && this.context.xScale.isPolyLinear()) {
					console.warn("Cannot set tickFormat on a poly linear scale, ignoring tickFormat on XAxis");
					tickFormat = undefined;
				}
	
				if (ticks) ticks = [ticks];
				return _react2["default"].createElement(_Axis2["default"], _extends({}, this.props, {
					transform: [0, axisLocation],
					showTicks: showTicks, tickFormat: tickFormat, ticks: ticks,
					scale: this.context.xScale }));
			}
		}]);
	
		return XAxis;
	})(_react2["default"].Component);
	
	XAxis.propTypes = {
		axisAt: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(["top", "bottom", "middle"]), _react2["default"].PropTypes.number]).isRequired,
		orient: _react2["default"].PropTypes.oneOf(["top", "bottom"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		outerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		tickSize: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.number,
		tickValues: _react2["default"].PropTypes.array,
		showTicks: _react2["default"].PropTypes.bool,
		className: _react2["default"].PropTypes.string
	};
	XAxis.defaultProps = {
		namespace: "ReStock.XAxis",
		showGrid: false,
		showTicks: true,
		className: "react-stockcharts-x-axis",
		ticks: 10
	};
	
	XAxis.contextTypes = {
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		width: _react2["default"].PropTypes.number.isRequired
	};
	
	exports["default"] = XAxis;
	module.exports = exports["default"];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Axis = __webpack_require__(47);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var YAxis = (function (_React$Component) {
		_inherits(YAxis, _React$Component);
	
		function YAxis() {
			_classCallCheck(this, YAxis);
	
			_get(Object.getPrototypeOf(YAxis.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(YAxis, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var axisAt = _props.axisAt;
				var tickFormat = _props.tickFormat;
				var ticks = _props.ticks;
				var percentScale = _props.percentScale;
				var tickValues = _props.tickValues;
				var _context = this.context;
				var yScale = _context.yScale;
				var chartData = _context.chartData;
	
				if (percentScale) yScale = yScale.copy().domain([0, 1]);
	
				tickValues = tickValues || chartData.config.yTicks;
	
				var axisLocation;
	
				if (axisAt === "left") axisLocation = 0;else if (axisAt === "right") axisLocation = this.context.width;else if (axisAt === "middle") axisLocation = this.context.width / 2;else axisLocation = axisAt;
	
				if (this.context.compareSeries.length > 0) {
					tickFormat = d3.format(".0%");
				}
	
				return _react2["default"].createElement(_Axis2["default"], _extends({}, this.props, {
					transform: [axisLocation, 0],
					tickFormat: tickFormat, ticks: [ticks], tickValues: tickValues,
					scale: yScale }));
			}
		}]);
	
		return YAxis;
	})(_react2["default"].Component);
	
	YAxis.propTypes = {
		axisAt: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(["left", "right", "middle"]), _react2["default"].PropTypes.number]).isRequired,
		orient: _react2["default"].PropTypes.oneOf(["left", "right"]).isRequired,
		innerTickSize: _react2["default"].PropTypes.number,
		outerTickSize: _react2["default"].PropTypes.number,
		tickFormat: _react2["default"].PropTypes.func,
		tickPadding: _react2["default"].PropTypes.number,
		tickSize: _react2["default"].PropTypes.number,
		ticks: _react2["default"].PropTypes.number,
		tickValues: _react2["default"].PropTypes.array,
		percentScale: _react2["default"].PropTypes.bool,
		showTicks: _react2["default"].PropTypes.bool,
		showDomain: _react2["default"].PropTypes.bool,
		className: _react2["default"].PropTypes.string
	};
	YAxis.defaultProps = {
		namespace: "ReStock.YAxis",
		showGrid: false,
		showDomain: false,
		className: "react-stockcharts-y-axis",
		ticks: 10
	};
	YAxis.contextTypes = {
		chartData: _react2["default"].PropTypes.object.isRequired,
		xScale: _react2["default"].PropTypes.func.isRequired,
		yScale: _react2["default"].PropTypes.func.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		compareSeries: _react2["default"].PropTypes.array.isRequired
	};
	
	exports["default"] = YAxis;
	module.exports = exports["default"];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _XAxis = __webpack_require__(78);
	
	var _XAxis2 = _interopRequireDefault(_XAxis);
	
	var _YAxis = __webpack_require__(79);
	
	var _YAxis2 = _interopRequireDefault(_YAxis);
	
	exports["default"] = {
		XAxis: _XAxis2["default"],
		YAxis: _YAxis2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EdgeCoordinate = __webpack_require__(48);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	// "../utils/Object.assign"
	
	var CrossHair = (function (_React$Component) {
		_inherits(CrossHair, _React$Component);
	
		function CrossHair() {
			_classCallCheck(this, CrossHair);
	
			_get(Object.getPrototypeOf(CrossHair.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CrossHair, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				return nextProps.mouseXY !== this.props.mouseXY;
			}
		}, {
			key: "render",
			value: function render() {
				var result = CrossHair.helper(this.props);
				var line = result.line;
				var edges = result.edges;
	
				var svgLine = line !== undefined ? _react2["default"].createElement("line", { className: "react-stockcharts-cross-hair", opacity: line.opacity, stroke: line.stroke,
					x1: line.x1, y1: line.y1,
					x2: line.x2, y2: line.y2 }) : null;
				return _react2["default"].createElement(
					"g",
					{ className: "crosshair " },
					svgLine,
					edges.map(function (edge, idx) {
						return _react2["default"].createElement(_EdgeCoordinate2["default"], {
							key: idx,
							type: edge.type,
							className: "horizontal",
							show: edge.show,
							x1: edge.x1, y1: edge.y1,
							x2: edge.x2, y2: edge.y2,
							coordinate: edge.coordinate,
							edgeAt: edge.edgeAt,
							orient: edge.orient,
							hideLine: edge.hideLine
						});
					})
				);
			}
		}]);
	
		return CrossHair;
	})(_react2["default"].Component);
	
	CrossHair.propTypes = {
		yAxisPad: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		mouseXY: _react2["default"].PropTypes.array.isRequired,
		xDisplayValue: _react2["default"].PropTypes.string.isRequired,
		edges: _react2["default"].PropTypes.array.isRequired
	};
	
	CrossHair.defaultProps = {
		namespace: "ReStock.CrossHair",
		yAxisPad: 5
	};
	
	CrossHair.helper = function (props) {
		var width = props.width;
		var edges = props.edges;
		var yAxisPad = props.yAxisPad;
		var mouseXY = props.mouseXY;
		var xDisplayValue = props.xDisplayValue;
		var height = props.height;
	
		var x1 = 0,
		    x2 = width;
	
		var edges = edges.map(function (edge, idx) {
			if (edge.at === "left") {
				x1 = -yAxisPad;
			}
			if (edge.at === "right") {
				x2 = width + yAxisPad;
			}
			return {
				type: "horizontal",
				show: true,
				x1: 0,
				y1: mouseXY[1],
				x2: 0,
				y2: mouseXY[1],
				coordinate: edge.yDisplayValue,
				edgeAt: edge.at === "left" ? x1 : x2,
				orient: edge.at,
				hideLine: true
			};
		});
		edges.push({
			type: "vertical",
			show: true,
			x1: mouseXY[0],
			y1: 0,
			x2: mouseXY[0],
			y2: height,
			coordinate: xDisplayValue,
			edgeAt: height,
			orient: "bottom"
		});
		var line;
		if (edges.length > 1) {
			line = {
				opacity: 0.3,
				stroke: "black",
				x1: x1,
				y1: mouseXY[1],
				x2: x2,
				y2: mouseXY[1]
			};
		}
		return { edges: edges, line: line };
	};
	
	CrossHair.drawOnCanvasStatic = function (ctx, props) {
		props = (0, _objectAssign2["default"])({}, CrossHair.defaultProps, props);
	
		var result = CrossHair.helper(props);
		var line = result.line;
		var edges = result.edges;
	
		edges.forEach(function (edge) {
			return _EdgeCoordinate2["default"].drawOnCanvasStatic(ctx, edge);
		});
	
		if (line) {
			ctx.globalAlpha = line.opacity;
			ctx.strokeStype = line.stroke;
	
			ctx.beginPath();
			ctx.moveTo(line.x1, line.y1);
			ctx.lineTo(line.x2, line.y2);
			ctx.stroke();
		}
	};
	
	module.exports = CrossHair;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var CurrentCoordinate = (function (_React$Component) {
		_inherits(CurrentCoordinate, _React$Component);
	
		function CurrentCoordinate() {
			_classCallCheck(this, CurrentCoordinate);
	
			_get(Object.getPrototypeOf(CurrentCoordinate.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CurrentCoordinate, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _context = this.context;
				var type = _context.type;
				var getCanvasContexts = _context.getCanvasContexts;
	
				if (type !== "svg" && getCanvasContexts !== undefined) {
					var contexts = getCanvasContexts();
					if (contexts) CurrentCoordinate.drawOnCanvas(contexts.mouseCoord, this.context, this.props);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var draw = CurrentCoordinate.drawOnCanvasStatic.bind(null, nextContext, nextProps);
	
				var forChart = nextProps.forChart;
				var forCompareSeries = nextProps.forCompareSeries;
				var forDataSeries = nextProps.forDataSeries;
	
				var temp = nextContext.secretToSuperFastCanvasDraw.filter(function (each) {
					return each.type === "currentcoordinate" && each.forChart === forChart && each.forDataSeries === forDataSeries;
				}).filter(function (each) {
					return each.forCompareSeries === forCompareSeries;
				});
	
				if (temp.length === 0) {
					nextContext.secretToSuperFastCanvasDraw.push({
						type: "currentcoordinate",
						forChart: forChart,
						forDataSeries: forDataSeries,
						forCompareSeries: forCompareSeries,
						draw: draw
					});
				} else {
					temp[0].draw = draw;
				}
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.props.className;
				var _context2 = this.context;
				var type = _context2.type;
				var show = _context2.show;
				var chartData = _context2.chartData;
				var currentItems = _context2.currentItems;
	
				if (type !== "svg") return null;
	
				var circle = CurrentCoordinate.helper(this.props, show, chartData, currentItems);
	
				if (!circle) return null;
	
				return _react2["default"].createElement("circle", { className: className, cx: circle.x, cy: circle.y, r: circle.r, fill: circle.fill });
			}
		}]);
	
		return CurrentCoordinate;
	})(_react2["default"].Component);
	
	CurrentCoordinate.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		forDataSeries: _react2["default"].PropTypes.number.isRequired,
		forCompareSeries: _react2["default"].PropTypes.number,
		yAccessor: _react2["default"].PropTypes.func,
		r: _react2["default"].PropTypes.number.isRequired,
		className: _react2["default"].PropTypes.string
	};
	
	CurrentCoordinate.defaultProps = { namespace: "ReStock.CurrentCoordinate", r: 3 };
	
	CurrentCoordinate.contextTypes = {
		show: _react2["default"].PropTypes.bool.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		chartData: _react2["default"].PropTypes.array.isRequired,
	
		getCanvasContexts: _react2["default"].PropTypes.func,
		margin: _react2["default"].PropTypes.object.isRequired,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	CurrentCoordinate.drawOnCanvas = function (canvasContext, context, props) {
		var mouseXY = context.mouseXY;
		var currentCharts = context.currentCharts;
		var chartData = context.chartData;
		var currentItems = context.currentItems;
		var show = context.show;
	
		CurrentCoordinate.drawOnCanvasStatic(context, props, canvasContext, show, mouseXY, currentCharts, chartData, currentItems);
	};
	
	CurrentCoordinate.drawOnCanvasStatic = function (context, props, ctx, show, mouseXY, currentCharts, chartData, currentItems) {
		var margin = context.margin;
	
		var circle = CurrentCoordinate.helper(props, show, chartData, currentItems);
	
		if (!circle) return null;
	
		var originX = 0.5 + margin.left;
		var originY = 0.5 + margin.top;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(originX, originY);
	
		ctx.fillStyle = circle.fill;
		ctx.beginPath();
		ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
		ctx.fill();
		// CurrentCoordinate.drawOnCanvasStatic(ctx, pointer);
		ctx.restore();
	};
	
	CurrentCoordinate.helper = function (props, show, chartData, currentItems) {
		var forChart = props.forChart;
		var forCompareSeries = props.forCompareSeries;
		var forDataSeries = props.forDataSeries;
		var r = props.r;
	
		var chartData = chartData.filter(function (each) {
			return each.id === forChart;
		})[0];
		var currentItem = currentItems.filter(function (each) {
			return each.id === forChart;
		})[0];
		var item = currentItem ? currentItem.data : undefined;
		var fill = "black";
	
		if (!show || item === undefined) return null;
		var yAccessor;
	
		if (forCompareSeries !== undefined) {
			var compSeries = chartData.config.compareSeries.filter(function (each) {
				return each.id === forCompareSeries;
			});
	
			if (compSeries.length !== 1) {
				console.warn("Unique compareSeries with id={%s} not found", forCompareSeries);
				throw new Error("Unique compareSeries not found");
			}
			fill = compSeries[0].stroke;
			yAccessor = compSeries[0].percentYAccessor;
		} else if (forDataSeries !== undefined) {
			var overlays = chartData.config.overlays.filter(function (each) {
				return each.id === forDataSeries;
			});
	
			if (overlays.length !== 1) {
				console.warn("Unique DataSeries with id={%s} not found", forDataSeries);
				throw new Error("Unique DataSeries not found");
			}
	
			fill = overlays[0].stroke;
	
			yAccessor = overlays[0].yAccessor;
		}
	
		var xValue = chartData.config.xAccessor(item);
		var yValue = yAccessor(item);
	
		if (yValue === undefined) return null;
	
		var x = Math.round(chartData.plot.scales.xScale(xValue)) + chartData.config.origin[0];
		var y = Math.round(chartData.plot.scales.yScale(yValue)) + chartData.config.origin[1];
	
		return { x: x, y: y, r: r, fill: fill };
	};
	
	module.exports = CurrentCoordinate;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsPureComponent = __webpack_require__(23);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var EdgeContainer = (function (_PureComponent) {
		_inherits(EdgeContainer, _PureComponent);
	
		function EdgeContainer() {
			_classCallCheck(this, EdgeContainer);
	
			_get(Object.getPrototypeOf(EdgeContainer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(EdgeContainer, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.context, function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					null,
					children
				);
			}
		}]);
	
		return EdgeContainer;
	})(_utilsPureComponent2["default"]);
	
	EdgeContainer.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array.isRequired,
		// currentItems: React.PropTypes.array.isRequired,
		axesCanvasContext: _react2["default"].PropTypes.object,
		type: _react2["default"].PropTypes.string,
		margin: _react2["default"].PropTypes.object.isRequired,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired
	};
	
	module.exports = EdgeContainer;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _EdgeCoordinate = __webpack_require__(48);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var EdgeIndicator = (function (_React$Component) {
		_inherits(EdgeIndicator, _React$Component);
	
		function EdgeIndicator(props) {
			_classCallCheck(this, EdgeIndicator);
	
			_get(Object.getPrototypeOf(EdgeIndicator.prototype), "constructor", this).call(this, props);
			this.drawOnCanvas = this.drawOnCanvas.bind(this);
		}
	
		_createClass(EdgeIndicator, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var type = this.props.type;
				var getCanvasContexts = this.context.getCanvasContexts;
	
				if (type !== "svg" && getCanvasContexts !== undefined) {
					var contexts = getCanvasContexts();
					if (contexts) this.drawOnCanvas(contexts.axes);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var chartData = nextContext.chartData;
				var margin = nextContext.margin;
				var width = nextContext.width;
	
				var draw = EdgeIndicator.drawOnCanvasStatic.bind(null, margin, nextProps, width);
	
				nextContext.secretToSuperFastCanvasDraw.push({
					type: "axis",
					draw: draw
				});
			}
		}, {
			key: "drawOnCanvas",
			value: function drawOnCanvas(ctx) {
				var _context = this.context;
				var chartData = _context.chartData;
				var margin = _context.margin;
				var width = _context.width;
	
				EdgeIndicator.drawOnCanvasStatic(margin, this.props, width, ctx, chartData);
			}
		}, {
			key: "render",
			value: function render() {
				if (this.context.type !== "svg") return null;
	
				var _context2 = this.context;
				var width = _context2.width;
				var chartData = _context2.chartData;
	
				var edge = EdgeIndicator.helper(this.props, width, chartData);
	
				if (edge === undefined) return null;
				return _react2["default"].createElement(_EdgeCoordinate2["default"], {
					type: edge.type,
					className: "react-stockcharts-edge-coordinate",
					fill: edge.fill,
					show: edge.show,
					x1: edge.x1,
					y1: edge.y1,
					x2: edge.x2,
					y2: edge.y2,
					coordinate: edge.coordinate,
					edgeAt: edge.edgeAt,
					orient: edge.orient });
			}
		}]);
	
		return EdgeIndicator;
	})(_react2["default"].Component);
	
	EdgeIndicator.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		chartData: _react2["default"].PropTypes.array.isRequired,
		getCanvasContexts: _react2["default"].PropTypes.func,
		type: _react2["default"].PropTypes.string,
		margin: _react2["default"].PropTypes.object.isRequired,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired
	};
	
	EdgeIndicator.propTypes = {
		type: _react2["default"].PropTypes.oneOf(["horizontal"]).isRequired,
		className: _react2["default"].PropTypes.string,
		itemType: _react2["default"].PropTypes.oneOf(["first", "last", "current"]).isRequired,
		orient: _react2["default"].PropTypes.oneOf(["left", "right"]),
		edgeAt: _react2["default"].PropTypes.oneOf(["left", "right"]),
		forChart: _react2["default"].PropTypes.number.isRequired,
		forDataSeries: _react2["default"].PropTypes.number.isRequired,
		displayFormat: _react2["default"].PropTypes.func.isRequired
	};
	
	EdgeIndicator.defaultProps = {
		type: "horizontal",
		orient: "left",
		edgeAt: "left",
		displayFormat: _utilsUtils2["default"].displayNumberFormat,
		yAxisPad: 5,
		namespace: "ReStock.EdgeIndicator"
	};
	
	EdgeIndicator.drawOnCanvasStatic = function (margin, props, width, ctx, chartDataArray) {
		var edge = EdgeIndicator.helper(props, width, chartDataArray);
	
		if (edge === undefined) return null;
	
		var originX = margin.left;
		var originY = margin.top;
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(originX, originY);
	
		_EdgeCoordinate2["default"].drawOnCanvasStatic(ctx, edge);
		ctx.restore();
	};
	
	EdgeIndicator.helper = function (props, width, chartData) {
		var edgeType = props.type;
		var displayFormat = props.displayFormat;
		var forChart = props.forChart;
		var forDataSeries = props.forDataSeries;
		var itemType = props.itemType;
		var edgeAt = props.edgeAt;
		var yAxisPad = props.yAxisPad;
		var orient = props.orient;
	
		var currentChartData = _utilsChartDataUtil2["default"].getChartDataForChartNew(chartData, forChart);
		// var currentItem = ChartDataUtil.getCurrentItemForChartNew(currentItems, forChart);
		var edge = null,
		    item,
		    yAccessor;
		// console.log(chartData.config.compareSeries.length);
		var displayFormat = currentChartData.config.compareSeries.length > 0 ? _d32["default"].format(".0%") : displayFormat;
	
		if (forDataSeries !== undefined && currentChartData.config.overlays.length > 0 && currentChartData.plot.overlayValues.length > 0) {
	
			var overlay = currentChartData.config.overlays.filter(function (eachOverlay) {
				return eachOverlay.id === forDataSeries;
			});
			var overlayValue = currentChartData.plot.overlayValues.filter(function (eachOverlayValue) {
				return eachOverlayValue.id === forDataSeries;
			});
	
			item = itemType === "first" ? overlayValue[0].first : overlayValue[0].last;
	
			yAccessor = overlay[0].yAccessor;
	
			if (item !== undefined) {
				var yValue = yAccessor(item),
				    xValue = currentChartData.config.xAccessor(item);
				var x1 = Math.round(currentChartData.plot.scales.xScale(xValue)),
				    y1 = Math.round(currentChartData.plot.scales.yScale(yValue));
	
				var stroke = overlay[0].stroke;
				var edgeX = edgeAt === "left" ? 0 - yAxisPad : width + yAxisPad;
	
				edge = {
					type: edgeType,
					fill: stroke,
					show: true,
					x1: x1 + currentChartData.config.origin[0],
					y1: y1 + currentChartData.config.origin[1],
					x2: edgeX + currentChartData.config.origin[0],
					y2: y1 + currentChartData.config.origin[1],
					coordinate: displayFormat(yValue),
					edgeAt: edgeX,
					orient: orient,
					chartOrigin: currentChartData.config.origin
				};
			}
		}
		return edge;
	};
	
	module.exports = EdgeIndicator;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsPureComponent = __webpack_require__(23);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _CrossHair = __webpack_require__(81);
	
	var _CrossHair2 = _interopRequireDefault(_CrossHair);
	
	var MouseCoordinates = (function (_PureComponent) {
		_inherits(MouseCoordinates, _PureComponent);
	
		function MouseCoordinates() {
			_classCallCheck(this, MouseCoordinates);
	
			_get(Object.getPrototypeOf(MouseCoordinates.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MouseCoordinates, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _context = this.context;
				var type = _context.type;
				var getCanvasContexts = _context.getCanvasContexts;
	
				if (type !== "svg" && getCanvasContexts !== undefined) {
					var contexts = getCanvasContexts();
					if (contexts) MouseCoordinates.drawOnCanvas(contexts.mouseCoord, this.context, this.props);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var draw = MouseCoordinates.drawOnCanvasStatic.bind(null, nextContext, nextProps);
	
				var temp = nextContext.secretToSuperFastCanvasDraw.filter(function (each) {
					return each.type === "mouse";
				});
				if (temp.length === 0) {
					nextContext.secretToSuperFastCanvasDraw.push({
						type: "mouse",
						draw: draw
					});
				} else {
					temp[0].draw = draw;
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _context2 = this.context;
				var type = _context2.type;
				var mouseXY = _context2.mouseXY;
				var currentCharts = _context2.currentCharts;
				var chartData = _context2.chartData;
				var currentItems = _context2.currentItems;
				var show = _context2.show;
	
				if (type !== "svg") return null;
	
				var pointer = MouseCoordinates.helper(this.context, this.props, show, mouseXY, currentCharts, chartData, currentItems);
	
				if (!pointer) return null;
	
				return _react2["default"].createElement(_CrossHair2["default"], { height: pointer.height, width: pointer.width, mouseXY: pointer.mouseXY,
					xDisplayValue: pointer.xDisplayValue, edges: pointer.edges });
			}
		}]);
	
		return MouseCoordinates;
	})(_utilsPureComponent2["default"]);
	
	MouseCoordinates.contextTypes = {
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		mainChart: _react2["default"].PropTypes.number.isRequired,
		show: _react2["default"].PropTypes.bool,
		mouseXY: _react2["default"].PropTypes.array,
		dateAccessor: _react2["default"].PropTypes.func,
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		currentCharts: _react2["default"].PropTypes.array.isRequired,
		getCanvasContexts: _react2["default"].PropTypes.func,
		margin: _react2["default"].PropTypes.object.isRequired,
		secretToSuperFastCanvasDraw: _react2["default"].PropTypes.array.isRequired,
		type: _react2["default"].PropTypes.string.isRequired
	};
	
	MouseCoordinates.propTypes = {
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		yDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		type: _react2["default"].PropTypes.oneOf(["crosshair"]).isRequired
	};
	
	MouseCoordinates.defaultProps = {
		namespace: "ReStock.MouseCoordinates",
		show: false,
		snapX: true,
		type: "crosshair",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		yDisplayFormat: _utilsUtils2["default"].displayNumberFormat
	};
	
	MouseCoordinates.drawOnCanvas = function (canvasContext, context, props) {
		var mouseXY = context.mouseXY;
		var currentCharts = context.currentCharts;
		var chartData = context.chartData;
		var currentItems = context.currentItems;
		var show = context.show;
	
		MouseCoordinates.drawOnCanvasStatic(context, props, canvasContext, show, mouseXY, currentCharts, chartData, currentItems);
	};
	MouseCoordinates.drawOnCanvasStatic = function (context, props, ctx, show, mouseXY, currentCharts, chartData, currentItems) {
		var margin = context.margin;
	
		var pointer = MouseCoordinates.helper(context, props, show, mouseXY, currentCharts, chartData, currentItems);
	
		if (!pointer) return null;
	
		var originX = 0.5 + margin.left;
		var originY = 0.5 + margin.top;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(originX, originY);
	
		_CrossHair2["default"].drawOnCanvasStatic(ctx, pointer);
		ctx.restore();
	};
	
	MouseCoordinates.helper = function (context, props, show, mouseXY, currentCharts, chartData, currentItems) {
		if (!show) return;
		var mainChart = context.mainChart;
		var dateAccessor = context.dateAccessor;
		var height = context.height;
		var width = context.width;
		var snapX = props.snapX;
		var type = props.type;
		var xDisplayFormat = props.xDisplayFormat;
	
		var edges = chartData.filter(function (eachChartData) {
			return currentCharts.indexOf(eachChartData.id) > -1;
		}).map(function (each) {
			var yDisplayFormat = each.config.compareSeries.length > 0 ? function (d) {
				return (Math.round(d * 10000) / 100).toFixed(2) + "%";
			} : each.config.mouseCoordinates.format;
			var mouseY = mouseXY[1] - each.config.origin[1];
			var yValue = each.plot.scales.yScale.invert(mouseY);
			return {
				id: each.id,
				at: each.config.mouseCoordinates.at,
				yValue: yValue,
				yDisplayFormat: yDisplayFormat
			};
		}).filter(function (each) {
			return each.at !== undefined;
		}).filter(function (each) {
			return each.yDisplayFormat !== undefined;
		}).map(function (each) {
			each.yDisplayValue = each.yDisplayFormat(each.yValue);
			return each;
		});
	
		// console.log(edges);
		var singleChartData = chartData.filter(function (eachChartData) {
			return eachChartData.id === mainChart;
		})[0];
	
		// var yDisplayFormat = singleChartData.config.compareSeries.length > 0 ? (d) => (Math.round(d * 10000) / 100).toFixed(2) + "%" : this.props.yDisplayFormat;
	
		var item = currentItems.filter(function (eachItem) {
			return eachItem.id === mainChart;
		})[0]; // ChartDataUtil.getCurrentItemForChart(this.props, this.context);
		if (item === undefined) return null;
		item = item.data;
		// console.log(singleChartData, item);
		var xValue = singleChartData.config.xAccessor(item);
	
		var xDisplayValue = dateAccessor === undefined ? xValue : dateAccessor(item);
	
		// var yValue = singleChartData.plot.scales.yScale.invert(mouseXY[1]);
		if (xValue === undefined) return null;
		var x = snapX ? Math.round(singleChartData.plot.scales.xScale(xValue)) : mouseXY[0];
		var y = mouseXY[1];
	
		return { height: height, width: width, mouseXY: [x, y], xDisplayValue: xDisplayFormat(xDisplayValue), edges: edges };
	};
	
	module.exports = MouseCoordinates;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _EdgeContainer = __webpack_require__(83);
	
	var _EdgeContainer2 = _interopRequireDefault(_EdgeContainer);
	
	var _EdgeIndicator = __webpack_require__(84);
	
	var _EdgeIndicator2 = _interopRequireDefault(_EdgeIndicator);
	
	var _MouseCoordinates = __webpack_require__(85);
	
	var _MouseCoordinates2 = _interopRequireDefault(_MouseCoordinates);
	
	var _CurrentCoordinate = __webpack_require__(82);
	
	var _CurrentCoordinate2 = _interopRequireDefault(_CurrentCoordinate);
	
	exports["default"] = {
		EdgeContainer: _EdgeContainer2["default"],
		EdgeIndicator: _EdgeIndicator2["default"],
		MouseCoordinates: _MouseCoordinates2["default"],
		CurrentCoordinate: _CurrentCoordinate2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	// import ReactDOM from "react-dom";
	
	var ChartWidthMixin = {
		handleWindowResize: function handleWindowResize() {
			var el = _react2["default"].findDOMNode(this);
			// console.log(this.refs, el, this);
	
			var w = el.parentNode.clientWidth;
			// console.log("width = ", w);
			this.setState({
				width: w
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			// console.log("unmounting...")
			window.removeEventListener("resize", this.handleWindowResize);
		},
		componentDidMount: function componentDidMount() {
			window.addEventListener("resize", this.handleWindowResize);
			var el = _react2["default"].findDOMNode(this);
			// console.log(this.refs, el);
			var w = el.parentNode.clientWidth;
			this.setState({
				width: w
			});
		}
	};
	
	module.exports = ChartWidthMixin;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var saveAsPng = __webpack_require__(128);
	
	var SaveChartAsImage = {
		save: function save(doc, container, background, cb) {
			if (saveAsPng === undefined) {
				throw new Error("dependency save-svg-as-png is not installed, execute npm install -S save-svg-as-png");
			}
			saveAsPng.svgAsDataUri(container.getElementsByTagName("svg")[0], {}, function (uri) {
				var image = new Image();
				image.onload = function () {
					var canvas = doc.createElement('canvas');
					canvas.width = image.width;
					canvas.height = image.height;
					var context = canvas.getContext('2d');
	
					if (background !== undefined) {
						context.fillStyle = background;
						context.fillRect(0, 0, canvas.width, canvas.height);
					}
					var canvasList = container.getElementsByTagName("canvas");
					for (var i = 0; i < canvasList.length; i++) {
						var each = canvasList[i];
						if (each !== undefined) {
							var parent = each.parentNode.parentNode.getBoundingClientRect();
							var rect = each.getBoundingClientRect();
							context.drawImage(each, rect.left - parent.left, rect.top - parent.top);
						}
					};
	
					context.drawImage(image, 0, 0);
					cb(canvas.toDataURL('image/png'));
				};
				image.src = uri;
			});
		},
		saveWithWhiteBG: function saveWithWhiteBG(doc, container, cb) {
			return this.save(doc, container, "white", cb);
		},
		saveChartAsImage: function saveChartAsImage(container) {
			this.saveWithWhiteBG(document, container, function (src) {
				var a = document.createElement("a");
				a.setAttribute("href", src);
				a.setAttribute("download", "Chart.png");
	
				document.body.appendChild(a);
				a.addEventListener("click", function (e) {
					a.parentNode.removeChild(a);
				});
	
				a.click();
			});
		}
	};
	
	module.exports = SaveChartAsImage;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TypeChooser = (function (_React$Component) {
		_inherits(TypeChooser, _React$Component);
	
		function TypeChooser(props) {
			_classCallCheck(this, TypeChooser);
	
			_get(Object.getPrototypeOf(TypeChooser.prototype), "constructor", this).call(this, props);
			this.state = {
				type: this.props.type
			};
			this.handleTypeChange = this.handleTypeChange.bind(this);
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
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"label",
						{ forHtml: "type" },
						"Type: "
					),
					_react2["default"].createElement(
						"select",
						{ name: "type", id: "type", onChange: this.handleTypeChange, value: this.state.type },
						_react2["default"].createElement(
							"option",
							{ value: "svg" },
							"svg"
						),
						_react2["default"].createElement(
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
	})(_react2["default"].Component);
	
	TypeChooser.defaultProps = {
		type: "hybrid"
	};
	
	module.exports = TypeChooser;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _TypeChooser = __webpack_require__(89);
	
	var _TypeChooser2 = _interopRequireDefault(_TypeChooser);
	
	var _ChartWidthMixin = __webpack_require__(87);
	
	var _ChartWidthMixin2 = _interopRequireDefault(_ChartWidthMixin);
	
	var _SaveChartAsImage = __webpack_require__(88);
	
	var _SaveChartAsImage2 = _interopRequireDefault(_SaveChartAsImage);
	
	exports["default"] = {
		TypeChooser: _TypeChooser2["default"],
		ChartWidthMixin: _ChartWidthMixin2["default"],
		SaveChartAsImage: _SaveChartAsImage2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(21);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _defaultOptions = __webpack_require__(16);
	
	function BollingerBandIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, _defaultOptions.BollingerBand, options);
	
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.calculate = function (data) {
			var period = settings.period;
	
			var ma = settings.movingAverageType === "sma" ? _utilsMovingAverageCalculator2["default"].calculateSMANew : _utilsMovingAverageCalculator2["default"].calculateEMANew;
			var getter = function getter(d) {
				return d[settings.source];
			};
			var setter = _utilsMovingAverageCalculator2["default"].setter.bind(null, [prefix, key], "middle");
			var newData = ma(data, period, getter, setter);
	
			// console.log(period, newData.slice(0, 20));
	
			newData.map(function (each, i) {
				return newData.slice(i - period + 1, i + 1);
			}).filter(function (array) {
				return array.length === period && array.length > 0;
			}).map(function (array) {
				return {
					array: array,
					mean: array[array.length - 1][prefix][key].middle
				};
			}).forEach(function (meanAndArray) {
				var averageOfDeviationSquared = meanAndArray.array.map(getter).map(function (val) {
					return val - meanAndArray.mean;
				}).map(function (val) {
					return val * val;
				}).reduce(function (a, b) {
					return a + b;
				}) / meanAndArray.array.length;
				var standardDev = Math.sqrt(averageOfDeviationSquared);
				var item = meanAndArray.array[meanAndArray.array.length - 1][prefix][key];
				item.top = item.middle + settings.multiplier * standardDev;
				item.bottom = item.middle - settings.multiplier * standardDev;
				// console.log(meanAndArray.array[meanAndArray.array.length - 1]);
			});
			// console.log(newData[newData.length - 1]);
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				// console.log(d[prefix][key]);
				if (d && d[prefix]) return d[prefix][key];
			};
		};
		indicator.isBollingerBand = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = BollingerBandIndicator;
	module.exports = exports["default"];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(21);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _defaultOptions = __webpack_require__(16);
	
	function EMAIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, _defaultOptions.EMA, options);
		if (!settings.stroke) settings.stroke = (0, _utilsUtils.overlayColors)(dataSeriesProps.id);
	
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.stroke = function () {
			return settings.stroke;
		};
		indicator.calculate = function (data) {
	
			var setter = _utilsMovingAverageCalculator2["default"].setter.bind(null, [prefix], key);
			var source = settings.source;
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateEMANew(data, settings.period, function (d) {
				return d[source];
			}, setter);
			// console.log(settings.period, newData[newData.length - 3]);
	
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				if (d && d[prefix]) return d[prefix][key];
			};
		};
		indicator.tooltipLabel = function () {
			return "EMA (" + settings.period + ")";
		};
		indicator.isMovingAverage = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = EMAIndicator;
	module.exports = exports["default"];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(21);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _utilsUtilsJs = __webpack_require__(2);
	
	var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _defaultOptions = __webpack_require__(16);
	
	function FullStochasticOscillator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, _defaultOptions.FullStochasticOscillator, options);
	
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.calculate = function (data) {
			var arr, highAndLow, ohlc;
	
			var setter = function setter(setKey, d, value) {
				if (d[prefix] === undefined) d[prefix] = {};
				if (d[prefix][key] === undefined) d[prefix][key] = {};
				d[prefix][key][setKey] = value;
				return d;
			};
	
			for (var i = settings.period - 1; i < data.length; i++) {
				arr = data.slice(i - settings.period + 1, i + 1);
				highAndLow = arr.map(settings.ohlc).map(function (ohlc) {
					return [ohlc.high, ohlc.low];
				}).reduce(function (a, b) {
					return [Math.max(a[0], b[0]), Math.min(a[1], b[1])];
				});
				ohlc = settings.ohlc(data[i]);
	
				var oscilator = (ohlc.close - highAndLow[1]) / (highAndLow[0] - highAndLow[1]) * 100;
	
				setter("stochasticOscillatorBase", data[i], oscilator);
			}
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateSMANew(data.slice(settings.period), settings.K, function (d) {
				return d[prefix][key].stochasticOscillatorBase;
			}, setter.bind(null, "K"));
	
			newData = _utilsMovingAverageCalculator2["default"].calculateSMANew(newData.slice(settings.period), settings.D, function (d) {
				return d[prefix][key].K;
			}, setter.bind(null, "D"));
	
			// console.log(newData[newData.length - 1]);
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				if (d && d[prefix] && d[prefix][key]) {
					return { K: d[prefix][key].K, D: d[prefix][key].D };
					// return d[prefix][key].K;
				}
			};
		};
		indicator.domain = function () {
			return [0, 100];
		};
		indicator.yTicks = function () {
			return [settings.overSold, 50, settings.overBought];
		};
		indicator.isStochastic = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = FullStochasticOscillator;
	module.exports = exports["default"];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(21);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _utilsUtilsJs = __webpack_require__(2);
	
	var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _defaultOptions = __webpack_require__(16);
	
	function MACDIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, _defaultOptions.MACD, options);
	
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.calculate = function (data) {
			// console.log(prefix, options);
			var fastKey = "ema" + settings.fast;
			var slowKey = "ema" + settings.slow;
			var source = settings.source;
	
			var setter = function setter(setKey, d, value) {
				if (d[prefix] === undefined) d[prefix] = {};
				if (d[prefix][key] === undefined) d[prefix][key] = {};
				d[prefix][key][setKey] = value;
				return d;
			};
			var getter = function getter(d) {
				return d[source];
			};
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateEMANew(data, settings.fast, getter, setter.bind(null, fastKey));
			newData = _utilsMovingAverageCalculator2["default"].calculateEMANew(newData, settings.slow, getter, setter.bind(null, slowKey));
	
			newData.forEach(function (each) {
				if (each[prefix]) {
					if (each[prefix][key][slowKey] && each[prefix][key][fastKey]) {
						// each[prefix][key] = {};
						each[prefix][key].MACDLine = each[prefix][key][fastKey] - each[prefix][key][slowKey];
					}
				}
			});
			newData = _utilsMovingAverageCalculator2["default"].calculateEMANew(newData.slice(settings.slow), settings.signal, function (d) {
				return d[prefix][key].MACDLine;
			}, setter.bind(null, "signalLine"));
	
			newData.forEach(function (each) {
				if (each[prefix] && each[prefix][key]) {
					if (each[prefix][key].MACDLine && each[prefix][key].signalLine) {
						each[prefix][key].histogram = each[prefix][key].MACDLine - each[prefix][key].signalLine;
					}
				}
			});
	
			// console.table(newData);
			// console.log(newData[newData.length - 3]);
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				if (d && d[prefix] && d[prefix][key]) {
					return { MACDLine: d[prefix][key].MACDLine, signalLine: d[prefix][key].signalLine, histogram: d[prefix][key].histogram };
				}
			};
		};
		indicator.isMACD = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = MACDIndicator;
	module.exports = exports["default"];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _defaultOptions = __webpack_require__(16);
	
	function RSIIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, _defaultOptions.RSI, options);
		function indicator() {}
		indicator.options = function () {
			return settings;
		};
		indicator.calculate = function (data) {
			var period = settings.period;
			var source = settings.source;
	
			var getter = function getter(d) {
				return d[source];
			};
			var now, prev, change;
	
			var first = data[0];
			first[prefix] = {};
			first[prefix][key] = {};
	
			for (var i = 1; i < data.length; i++) {
				now = data[i];
				prev = data[i - 1];
				now[prefix] = {};
				now[prefix][key] = {};
	
				change = getter(now) - getter(prev);
				now[prefix][key].gain = Math.max(change, 0);
				now[prefix][key].loss = Math.min(change, 0);
	
				if (prev[prefix][key].avgGain === undefined) {
					// first avg gain & loss
					if (i >= period) {
						// calculate first average after n periods
						var firstN = data.slice(1, i - 1);
						now[prefix][key].avgGain = firstN.map(function (d) {
							return d[prefix][key].gain;
						}).reduce(function (a, b) {
							return a + b;
						}) / period;
	
						now[prefix][key].avgLoss = firstN.map(function (d) {
							return d[prefix][key].loss;
						}).reduce(function (a, b) {
							return a + b;
						}) / period;
					}
				} else {
					// subsequent avg gain & loss
					now[prefix][key].avgGain = (prev[prefix][key].avgGain * (period - 1) + now[prefix][key].gain) / period;
					now[prefix][key].avgLoss = (prev[prefix][key].avgLoss * (period - 1) + now[prefix][key].loss) / period;
				}
				if (now[prefix][key].avgGain !== undefined) {
					now[prefix][key].relativeStrength = now[prefix][key].avgGain / Math.abs(now[prefix][key].avgLoss);
					now[prefix][key].rsi = 100 - 100 / (1 + now[prefix][key].relativeStrength);
				}
			}
			// console.log(data[data.length - 3]);
			return data;
		};
		indicator.yAccessor = function () {
			return function (d) {
				// console.log(d[prefix][key]);
				if (d && d[prefix]) return d[prefix][key].rsi;
			};
		};
		indicator.domain = function () {
			return [0, 100];
		};
		indicator.yTicks = function () {
			return [settings.overSold, 50, settings.overBought];
		};
		indicator.isRSI = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = RSIIndicator;
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsMovingAverageCalculator = __webpack_require__(21);
	
	var _utilsMovingAverageCalculator2 = _interopRequireDefault(_utilsMovingAverageCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _defaultOptions = __webpack_require__(16);
	
	function SMAIndicator(options, chartProps, dataSeriesProps) {
	
		var prefix = "chart_" + chartProps.id;
		var key = "overlay_" + dataSeriesProps.id;
	
		var settings = (0, _objectAssign2["default"])({}, _defaultOptions.SMA, options);
		if (!settings.stroke) settings.stroke = (0, _utilsUtils.overlayColors)(dataSeriesProps.id);
	
		function indicator() {}
	
		indicator.options = function () {
			return settings;
		};
		indicator.stroke = function () {
			return settings.stroke;
		};
		indicator.calculate = function (data) {
			var setter = _utilsMovingAverageCalculator2["default"].setter.bind(null, [prefix], key);
	
			var source = settings.source;
	
			var newData = _utilsMovingAverageCalculator2["default"].calculateSMANew(data, settings.period, function (d) {
				return d[source];
			}, setter);
			return newData;
		};
		indicator.yAccessor = function () {
			return function (d) {
				if (d && d[prefix]) return d[prefix][key];
			};
		};
		indicator.tooltipLabel = function () {
			return "SMA (" + settings.period + ")";
		};
		indicator.isMovingAverage = function () {
			return true;
		};
		return indicator;
	}
	
	exports["default"] = SMAIndicator;
	module.exports = exports["default"];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _MACDIndicator = __webpack_require__(94);
	
	var _MACDIndicator2 = _interopRequireDefault(_MACDIndicator);
	
	var _EMAIndicator = __webpack_require__(92);
	
	var _EMAIndicator2 = _interopRequireDefault(_EMAIndicator);
	
	var _SMAIndicator = __webpack_require__(96);
	
	var _SMAIndicator2 = _interopRequireDefault(_SMAIndicator);
	
	var _BollingerBandIndicator = __webpack_require__(91);
	
	var _BollingerBandIndicator2 = _interopRequireDefault(_BollingerBandIndicator);
	
	var _RSIIndicator = __webpack_require__(95);
	
	var _RSIIndicator2 = _interopRequireDefault(_RSIIndicator);
	
	var _FullStochasticOscillator = __webpack_require__(93);
	
	var _FullStochasticOscillator2 = _interopRequireDefault(_FullStochasticOscillator);
	
	var _defaultOptions = __webpack_require__(16);
	
	var defaultOptions = _interopRequireWildcard(_defaultOptions);
	
	exports["default"] = {
		MACD: _MACDIndicator2["default"],
		EMA: _EMAIndicator2["default"],
		SMA: _SMAIndicator2["default"],
		BollingerBand: _BollingerBandIndicator2["default"],
		RSI: _RSIIndicator2["default"],
		FullStochasticOscillator: _FullStochasticOscillator2["default"],
		defaultOptions: defaultOptions
	};
	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	function financeTimeScale(drawableData, indexAccessor, backingLinearScale) {
	
		var timeScaleSteps = [{ step: 864e5, f: function f(d) {
				return d.date !== undefined && true;
			} }, // 1-day
		{ step: 1728e5, f: function f(d, i) {
				return d.date !== undefined && i % 2 === 0;
			} }, // 2-day
		{ step: 8380e5, f: function f(d, i, arr) {
				if (d.startOfMonth) return true;
				var list = [];
				if (i - 2 >= 0) list.push(arr[i - 2]);
				if (i - 1 >= 0) list.push(arr[i - 1]);
				list.push(arr[i]);
				if (i + 1 <= arr.length - 1) list.push(arr[i + 1]);
				if (i + 2 <= arr.length - 1) list.push(arr[i + 2]);
				var sm = list.map(function (each) {
					return each.startOfMonth;
				}).reduce(function (prev, curr) {
					return prev || curr;
				});
				return sm ? false : d.startOfWeek;
			} }, // 1-week
		{ step: 3525e6, f: function f(d) {
				return d.startOfMonth;
			} }, // 1-month
		{ step: 7776e6, f: function f(d) {
				return d.startOfQuarter;
			} }, // 3-month
		{ step: 31536e6, f: function f(d) {
				return d.startOfYear;
			} }, // 1-year
		{ step: 91536e15, f: function f(d) {
				return d.date !== undefined && (d.startOfYear && d.date.getFullYear() % 2 === 0);
			} } // 2-year
		];
		var timeScaleStepsBisector = _d32["default"].bisector(function (d) {
			return d.step;
		}).left;
		var bisectByIndex = _d32["default"].bisector(function (d) {
			return indexAccessor(d);
		}).left;
		var tickFormat = [[_d32["default"].time.format("%Y"), function (d) {
			return d.startOfYear;
		}], [_d32["default"].time.format("%b %Y"), function (d) {
			return d.startOfQuarter;
		}], [_d32["default"].time.format("%b"), function (d) {
			return d.startOfMonth;
		}], [_d32["default"].time.format("%d %b"), function (d) {
			return d.startOfWeek;
		}], [_d32["default"].time.format("%a %d "), function (d) {
			return true;
		}]];
		function formater(d) {
			var i = 0,
			    format = tickFormat[i];
			while (!format[1](d)) format = tickFormat[++i];
			var tickDisplay = format[0](d.date);
			// console.log(tickDisplay);
			return tickDisplay;
		}
	
		function scale(x) {
			return backingLinearScale(x);
		}
		scale.isPolyLinear = function () {
			return true;
		};
		scale.invert = function (x) {
			return backingLinearScale.invert(x);
		};
		scale.data = function (x) {
			if (!arguments.length) {
				return drawableData;
			} else {
				drawableData = x;
				// this.domain([drawableData.first().index, drawableData.last().index]);
				this.domain([indexAccessor(drawableData[0]), indexAccessor(drawableData[drawableData.length - 1])]);
				return scale;
			}
		};
		scale.domain = function (x) {
			if (!arguments.length) return backingLinearScale.domain();
			// console.log("before = %s, after = %s", JSON.stringify(backingLinearScale.domain()), JSON.stringify(x))
	
			var d = [x[0], x[1]];
			// console.log(d);
			backingLinearScale.domain(d);
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
			var start,
			    end,
			    count = 0;
			drawableData.forEach(function (d) {
				if (d.date !== undefined) {
					if (start === undefined) start = d;
					end = d;
					count++;
				}
			});
			m = count / drawableData.length * m;
			var span = end.date.getTime() - start.date.getTime();
			var target = span / m;
			/*
	  console.log(drawableData[drawableData.length - 1].date
	  	, drawableData[0].date
	  	, span
	  	, m
	  	, target
	  	, timeScaleStepsBisector(d3_time_scaleSteps, target)
	  	);
	  */
			var ticks = drawableData.filter(timeScaleSteps[timeScaleStepsBisector(timeScaleSteps, target)].f).map(function (d) {
				return indexAccessor(d);
			});
			// return the index of all the ticks to be displayed,
			// console.log(target, span, m, ticks);
			return ticks;
		};
		scale.tickFormat = function (ticks) {
			return function (d) {
				// for each index received from ticks() function derive the formatted output
				var tickIndex = bisectByIndex(drawableData, d);
				return formater(drawableData[tickIndex]);
			};
		};
		scale.nice = function (m) {
			backingLinearScale.nice(m);
			return scale;
		};
		scale.copy = function () {
			return financeTimeScale(drawableData, indexAccessor, backingLinearScale.copy());
		};
		return scale;
	}
	
	var defaultFinanceDateTimeScale = function defaultFinanceDateTimeScale(indexAccessor) {
		return financeTimeScale([0, 1], indexAccessor, _d32["default"].scale.linear());
	};
	
	module.exports = defaultFinanceDateTimeScale;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(12);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Area = __webpack_require__(36);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var AreaSeries = (function (_React$Component) {
		_inherits(AreaSeries, _React$Component);
	
		function AreaSeries() {
			_classCallCheck(this, AreaSeries);
	
			_get(Object.getPrototypeOf(AreaSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(AreaSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var type = props.type;
				var stroke = props.stroke;
				var fill = props.fill;
				var defaultStroke = props.defaultStroke;
				var opacity = props.opacity;
	
				return _react2["default"].createElement(
					"g",
					null,
					_react2["default"].createElement(_Line2["default"], {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: stroke, fill: "none",
						type: type }),
					_react2["default"].createElement(_Area2["default"], {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: "none", fill: fill, opacity: opacity,
						type: type })
				);
			}
		}]);
	
		return AreaSeries;
	})(_react2["default"].Component);
	
	AreaSeries.propTypes = {
		stroke: _react2["default"].PropTypes.string,
		fill: _react2["default"].PropTypes.string.isRequired,
		opacity: _react2["default"].PropTypes.number.isRequired,
		className: _react2["default"].PropTypes.string
	};
	
	AreaSeries.defaultProps = {
		stroke: "steelblue",
		opacity: 0.5,
		fill: "steelblue"
	};
	
	AreaSeries.yAccessor = function (d) {
		return d.close;
	};
	
	exports["default"] = (0, _wrap2["default"])(AreaSeries);
	module.exports = exports["default"];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HistogramSeries = __webpack_require__(37);
	
	var _HistogramSeries2 = _interopRequireDefault(_HistogramSeries);
	
	var _Line = __webpack_require__(12);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Area = __webpack_require__(36);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var BollingerSeries = (function (_React$Component) {
		_inherits(BollingerSeries, _React$Component);
	
		function BollingerSeries() {
			_classCallCheck(this, BollingerSeries);
	
			_get(Object.getPrototypeOf(BollingerSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(BollingerSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var type = props.type;
				var stroke = props.stroke;
				var className = props.className;
				var fill = props.fill;
				var opacity = props.opacity;
	
				return _react2["default"].createElement(
					"g",
					{ className: "bollinger-band-series" },
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).top;
						},
						plotData: plotData,
						stroke: stroke.top, fill: "none",
						type: type }),
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).middle;
						},
						plotData: plotData,
						stroke: stroke.middle, fill: "none",
						type: type }),
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).bottom;
						},
						plotData: plotData,
						stroke: stroke.bottom, fill: "none",
						type: type }),
					_react2["default"].createElement(_Area2["default"], {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).top;
						},
						base: function (scale, d) {
							return scale(yAccessor(d) && yAccessor(d).bottom);
						},
						plotData: plotData,
						stroke: "none", fill: fill, opacity: opacity,
						type: type })
				);
			}
		}]);
	
		return BollingerSeries;
	})(_react2["default"].Component);
	
	BollingerSeries.defaultProps = {
		stroke: {
			top: "brown",
			middle: "black",
			bottom: "brown"
		},
		fill: "steelblue",
		opacity: 0.2
	};
	
	exports["default"] = (0, _wrap2["default"])(BollingerSeries);
	module.exports = exports["default"];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var CandlestickSeries = (function (_React$Component) {
		_inherits(CandlestickSeries, _React$Component);
	
		function CandlestickSeries() {
			_classCallCheck(this, CandlestickSeries);
	
			_get(Object.getPrototypeOf(CandlestickSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CandlestickSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
	
				return _react2["default"].createElement(
					"g",
					{ className: "react-stockcharts-candlestick" },
					_react2["default"].createElement(
						"g",
						{ className: "react-stockcharts-candlestick-wick", key: "wicks" },
						CandlestickSeries.getWicksSVG(props)
					),
					_react2["default"].createElement(
						"g",
						{ className: "react-stockcharts-candlestick-candle", key: "candles" },
						CandlestickSeries.getCandlesSVG(props)
					)
				);
			}
		}]);
	
		return CandlestickSeries;
	})(_react2["default"].Component);
	
	CandlestickSeries.propTypes = {
		classNames: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		}),
		stroke: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		}),
		fill: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		})
	};
	
	CandlestickSeries.defaultProps = {
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
			down: "red"
		}
	};
	
	CandlestickSeries.getWicksSVG = function (props) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var compareSeries = props.compareSeries;
		var plotData = props.plotData;
	
		var wickData = CandlestickSeries.getWickData(props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData);
		var wicks = wickData.map(function (d, idx) {
			return _react2["default"].createElement("line", { key: idx,
				className: d.className, stroke: d.stroke, style: { shapeRendering: "crispEdges" },
				x1: d.x1, y1: d.y1,
				x2: d.x2, y2: d.y2 });
		});
		return wicks;
	};
	CandlestickSeries.getCandlesSVG = function (props) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var compareSeries = props.compareSeries;
		var plotData = props.plotData;
	
		var candleData = CandlestickSeries.getCandleData(props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData);
		var candles = candleData.map(function (d, idx) {
			if (d.width < 0) return _react2["default"].createElement("line", { className: d.className, key: idx, x1: d.x, y1: d.y, x2: d.x, y2: d.y + d.height, stroke: d.fill });else if (d.height === 0) return _react2["default"].createElement("line", { key: idx, x1: d.x, y1: d.y, x2: d.x + d.width, y2: d.y + d.height, stroke: d.fill });
			return _react2["default"].createElement("rect", { className: d.className, key: idx, x: d.x, y: d.y, width: d.width, height: d.height, fill: d.fill, stroke: d.stroke });
		});
		return candles;
	};
	
	CandlestickSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	CandlestickSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var compareSeries = props.compareSeries;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var stroke = props.stroke;
		var fill = props.fill;
	
		var wickData = CandlestickSeries.getWickData(props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData);
		wickData.forEach(function (d) {
			ctx.beginPath();
			ctx.moveTo(d.x1, d.y1);
			ctx.lineTo(d.x2, d.y2);
			ctx.stroke();
		});
		var candleData = CandlestickSeries.getCandleData(props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData);
	
		var each,
		    group = { up: [], down: [] };
		for (var i = 0; i < candleData.length; i++) {
			each = candleData[i];
			if (each.direction >= 0) {
				group.up.push(each);
			} else {
				group.down.push(each);
			}
		};
	
		ctx.fillStyle = fill.up;
		group.up.forEach(function (d) {
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
			}
		});
	
		ctx.fillStyle = fill.down;
		group.down.forEach(function (d) {
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
			}
		});
		// ctx.fillStyle = fillStyle;
	};
	
	CandlestickSeries.getWickData = function (props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData) {
		var isCompareSeries = compareSeries.length > 0;
	
		var classNames = props.classNames;
	
		var wickData = plotData.filter(function (d) {
			return d.close !== undefined;
		}).map(function (d, idx) {
			// console.log(yAccessor);
			var ohlc = isCompareSeries ? yAccessor(d.compare) : yAccessor(d);
	
			var x1 = Math.round(xScale(xAccessor(d))),
			    y1 = yScale(ohlc.high),
			    x2 = x1,
			    y2 = yScale(ohlc.low),
			    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down;
	
			return {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				className: className,
				direction: ohlc.close - ohlc.open,
				stroke: "black"
			};
		});
		return wickData;
	};
	
	CandlestickSeries.getCandleData = function (props, xAccessor, yAccessor, xScale, yScale, compareSeries, plotData) {
		var isCompareSeries = compareSeries.length > 0;
	
		var classNames = props.classNames;
		var fill = props.fill;
		var stroke = props.stroke;
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
		var cw = width / plotData.length * 0.5;
		var candleWidth = Math.round(cw); // Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw);
		var candles = plotData.filter(function (d) {
			return d.close !== undefined;
		}).map(function (d, idx) {
			var ohlc = isCompareSeries ? yAccessor(d.compare) : yAccessor(d);
			var x = Math.round(xScale(xAccessor(d))) - (candleWidth === 1 ? 0 : 0.5 * candleWidth),
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
				fill: ohlc.open <= ohlc.close ? fill.up : fill.down,
				stroke: ohlc.open <= ohlc.close ? stroke.up : stroke.down,
				direction: ohlc.close - ohlc.open
			};
		});
		return candles;
	};
	
	exports["default"] = (0, _wrap2["default"])(CandlestickSeries);
	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(12);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var CompareSeries = (function (_React$Component) {
		_inherits(CompareSeries, _React$Component);
	
		function CompareSeries() {
			_classCallCheck(this, CompareSeries);
	
			_get(Object.getPrototypeOf(CompareSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CompareSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var compareSeries = props.compareSeries;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var plotData = props.plotData;
				var type = props.type;
				var id = props.id;
	
				var thisSeries = compareSeries.filter(function (each) {
					return each.id === id;
				})[0];
				return _react2["default"].createElement(_Line2["default"], {
					className: className,
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: thisSeries.percentYAccessor,
					plotData: plotData,
					stroke: thisSeries.stroke, fill: "none",
					type: type });
			}
		}]);
	
		return CompareSeries;
	})(_react2["default"].Component);
	
	CompareSeries.propTypes = {
		className: _react2["default"].PropTypes.string,
		stroke: _react2["default"].PropTypes.string,
		displayLabel: _react2["default"].PropTypes.string.isRequired,
		id: _react2["default"].PropTypes.number.isRequired
	};
	
	CompareSeries.defaultProps = {
		className: "line "
	};
	
	exports["default"] = (0, _wrap2["default"])(CompareSeries);
	module.exports = exports["default"];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var KagiSeries = (function (_React$Component) {
		_inherits(KagiSeries, _React$Component);
	
		function KagiSeries() {
			_classCallCheck(this, KagiSeries);
	
			_get(Object.getPrototypeOf(KagiSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(KagiSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var stroke = props.stroke;
				var fill = props.fill;
				var strokeWidth = props.strokeWidth;
				var xAccessor = props.xAccessor;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var plotData = props.plotData;
	
				var paths = KagiSeries.helper(plotData, xAccessor).map(function (each, i) {
					var dataSeries = _d32["default"].svg.line().x(function (item) {
						return xScale(item[0]);
					}).y(function (item) {
						return yScale(item[1]);
					}).interpolate("step-before");
					return _react2["default"].createElement("path", { key: i, d: dataSeries(each.plot), className: each.type,
						stroke: stroke[each.type], fill: fill[each.type], strokeWidth: strokeWidth });
				});
				return _react2["default"].createElement(
					"g",
					{ className: className },
					paths
				);
			}
		}]);
	
		return KagiSeries;
	})(_react2["default"].Component);
	
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
		}
	};
	
	KagiSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	KagiSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var stroke = props.stroke;
		var fill = props.fill;
		var strokeWidth = props.strokeWidth;
	
		var begin = true;
	
		var paths = KagiSeries.helper(plotData, xAccessor);
	
		paths.forEach(function (each, i) {
			ctx.strokeStyle = stroke[each.type];
			ctx.lineWidth = strokeWidth;
	
			ctx.beginPath();
			var prevX, prevY;
			each.plot.forEach(function (d) {
				var x = xScale(d[0]);
				var y = yScale(d[1]);
	
				if (begin) {
					ctx.moveTo(x, y);
					begin = false;
				} else {
					if (prevX !== undefined) {
						ctx.lineTo(prevX, y);
					}
					ctx.lineTo(x, y);
				}
				prevX = x;
				prevY = y;
	
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
		ctx.strokeStyle = "black";
		ctx.moveTo(x - 10, y2);
		ctx.lineTo(x, y2);
		ctx.stroke();
	};
	
	KagiSeries.helper = function (plotData, xAccessor) {
		var kagiLine = [];
		var kagi = {};
		for (var i = 0; i < plotData.length; i++) {
			var d = plotData[i];
			if (d.close === undefined) continue;
			if (kagi.type === undefined) kagi.type = d.startAs;
			if (kagi.plot === undefined) kagi.plot = [];
			var idx = xAccessor(d);
			kagi.plot.push([idx, d.open]);
	
			if (d.changeTo !== undefined) {
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
	};
	
	exports["default"] = (0, _wrap2["default"])(KagiSeries);
	module.exports = exports["default"];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(12);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var LineSeries = (function (_React$Component) {
		_inherits(LineSeries, _React$Component);
	
		function LineSeries() {
			_classCallCheck(this, LineSeries);
	
			_get(Object.getPrototypeOf(LineSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(LineSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var stroke = props.stroke;
				var type = props.type;
	
				return _react2["default"].createElement(_Line2["default"], {
					className: className,
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: yAccessor,
					plotData: plotData,
					stroke: stroke, fill: "none",
					type: type });
			}
		}]);
	
		return LineSeries;
	})(_react2["default"].Component);
	
	LineSeries.propTypes = {
		className: _react2["default"].PropTypes.string
	};
	
	LineSeries.defaultProps = {
		stroke: "steelblue",
		className: "line "
	};
	
	LineSeries.yAccessor = function (d) {
		return d.close;
	};
	
	exports["default"] = (0, _wrap2["default"])(LineSeries);
	module.exports = exports["default"];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HistogramSeries = __webpack_require__(37);
	
	var _HistogramSeries2 = _interopRequireDefault(_HistogramSeries);
	
	var _Line = __webpack_require__(12);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(28);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var MACDSeries = (function (_React$Component) {
		_inherits(MACDSeries, _React$Component);
	
		function MACDSeries() {
			_classCallCheck(this, MACDSeries);
	
			_get(Object.getPrototypeOf(MACDSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MACDSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var indicator = props.indicator;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var type = props.type;
	
				var options = indicator.options();
	
				return _react2["default"].createElement(
					"g",
					{ className: "macd-series" },
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).MACDLine;
						},
						plotData: plotData,
						stroke: options.stroke.MACDLine, fill: "none",
						type: type }),
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).signalLine;
						},
						plotData: plotData,
						stroke: options.stroke.signalLine, fill: "none",
						type: type }),
					_react2["default"].createElement(_HistogramSeries2["default"], {
						baseAt: function (xScale, yScale, d) {
							return yScale(0);
						},
						className: "macd-histogram",
						stroke: options.stroke.histogram, fill: options.fill.histogram,
						yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).histogram;
						} }),
					MACDSeries.getHorizontalLine(props)
				);
			}
		}]);
	
		return MACDSeries;
	})(_react2["default"].Component);
	
	MACDSeries.getHorizontalLine = function (props) {
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
	
		var first = xAccessor(plotData[0]);
		var last = xAccessor(plotData[plotData.length - 1]);
	
		return _react2["default"].createElement(_StraightLine2["default"], {
			stroke: "black", opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: 0 });
	};
	
	MACDSeries.childContextTypes = {
		yAccessor: _react2["default"].PropTypes.func.isRequired
	};
	
	exports["default"] = (0, _wrap2["default"])(MACDSeries);
	module.exports = exports["default"];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var PointAndFigureSeries = (function (_React$Component) {
		_inherits(PointAndFigureSeries, _React$Component);
	
		function PointAndFigureSeries() {
			_classCallCheck(this, PointAndFigureSeries);
	
			_get(Object.getPrototypeOf(PointAndFigureSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(PointAndFigureSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var xScale = props.xScale;
				var xAccessor = props.xAccessor;
				var yScale = props.yScale;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
	
				var columns = PointAndFigureSeries.getColumns(xScale, xAccessor, yScale, yAccessor, plotData);
				var stroke = props.stroke;
				var fill = props.fill;
				var strokeWidth = props.strokeWidth;
				var className = props.className;
	
				return _react2["default"].createElement(
					"g",
					null,
					columns.map(function (col, idx) {
						return _react2["default"].createElement(
							"g",
							{ key: idx, className: col.className, transform: "translate(" + col.offset[0] + ", " + col.offset[1] + ")" },
							col.boxes.map(function (box, i) {
								if (col.direction > 0) {
									return _react2["default"].createElement(
										"g",
										{ key: idx + "-" + i },
										_react2["default"].createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
											x1: 0, y1: box.open, x2: box.columnWidth, y2: box.close }),
										_react2["default"].createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
											x1: 0, y1: box.close, x2: box.columnWidth, y2: box.open })
									);
								}
								return _react2["default"].createElement("ellipse", { key: idx + "-" + i,
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
	})(_react2["default"].Component);
	
	PointAndFigureSeries.defaultProps = {
		className: "react-stockcharts-point-and-figure",
		strokeWidth: 1,
		stroke: {
			up: "#6BA583",
			down: "red"
		},
		fill: {
			up: "none",
			down: "none"
		}
	};
	
	PointAndFigureSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	PointAndFigureSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		var columns = PointAndFigureSeries.getColumns(xScale, xAccessor, yScale, yAccessor, plotData);
		var stroke = props.stroke;
		var fill = props.fill;
		var strokeWidth = props.strokeWidth;
		var className = props.className;
	
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
	};
	
	PointAndFigureSeries.getColumns = function (xScale, xAccessor, yScale, yAccessor, plotData) {
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
	
		var columnWidth = width / (plotData.length - 1);
	
		var anyBox,
		    j = 0;
		while (anyBox === undefined) {
			if (plotData[j].close !== undefined) {
				anyBox = plotData[j].boxes[0];
			}
			j++;
		}
	
		var boxHeight = Math.abs(yScale(anyBox.open) - yScale(anyBox.close));
	
		var columns = plotData.filter(function (d) {
			return d.close !== undefined;
		}).map(function (d, idx) {
			var boxes = d.boxes.map(function (box, i) {
				return {
					columnWidth: columnWidth,
					boxHeight: boxHeight,
					open: yScale(box.open),
					close: yScale(box.close)
				};
			});
			// y2: yScale(box.close),
			var xOffset = xScale(xAccessor(d)) - columnWidth / 2;
			return {
				boxes: boxes,
				direction: d.direction,
				offset: [xOffset, 0]
			};
		});
		return columns;
	};
	
	exports["default"] = (0, _wrap2["default"])(PointAndFigureSeries);
	module.exports = exports["default"];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(12);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(28);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var RSISeries = (function (_React$Component) {
		_inherits(RSISeries, _React$Component);
	
		function RSISeries() {
			_classCallCheck(this, RSISeries);
	
			_get(Object.getPrototypeOf(RSISeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(RSISeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var indicator = props.indicator;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var stroke = props.stroke;
				var type = props.type;
	
				var options = indicator.options();
				return _react2["default"].createElement(
					"g",
					{ className: className },
					_react2["default"].createElement(_Line2["default"], {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: stroke, fill: "none",
						type: type }),
					RSISeries.getHorizontalLine(props, options.overSold, "brown"),
					RSISeries.getHorizontalLine(props, 50, "black"),
					RSISeries.getHorizontalLine(props, options.overBought, "brown")
				);
			}
		}]);
	
		return RSISeries;
	})(_react2["default"].Component);
	
	RSISeries.getHorizontalLine = function (props, yValue, stroke) {
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
	
		return _react2["default"].createElement(_StraightLine2["default"], {
			stroke: stroke, opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: yValue });
	};
	
	RSISeries.propTypes = {
		className: _react2["default"].PropTypes.string
	};
	
	RSISeries.defaultProps = {
		className: "react-stockcharts-rsi-series"
	};
	
	exports["default"] = (0, _wrap2["default"])(RSISeries);
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var RenkoSeries = (function (_React$Component) {
		_inherits(RenkoSeries, _React$Component);
	
		function RenkoSeries() {
			_classCallCheck(this, RenkoSeries);
	
			_get(Object.getPrototypeOf(RenkoSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(RenkoSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var plotData = props.plotData;
				var xScale = props.xScale;
				var xAccessor = props.xAccessor;
				var yScale = props.yScale;
				var yAccessor = props.yAccessor;
	
				var candles = RenkoSeries.getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor).map(function (each, idx) {
					return _react2["default"].createElement("rect", { key: idx, className: each.className,
						fill: each.fill,
						x: each.x,
						y: each.y,
						width: each.width,
						height: each.height });
				});
	
				return _react2["default"].createElement(
					"g",
					null,
					_react2["default"].createElement(
						"g",
						{ className: "candle" },
						candles
					)
				);
			}
		}]);
	
		return RenkoSeries;
	})(_react2["default"].Component);
	
	RenkoSeries.propTypes = {
		classNames: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		}),
		stroke: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		}),
		fill: _react2["default"].PropTypes.shape({
			up: _react2["default"].PropTypes.string,
			down: _react2["default"].PropTypes.string
		})
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
			partial: "steelblue"
		}
	};
	
	RenkoSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	RenkoSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		var renko = RenkoSeries.getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor);
		renko.forEach(function (d) {
			ctx.beginPath();
	
			ctx.strokeStyle = d.stroke;
			ctx.fillStyle = d.fill;
	
			ctx.rect(d.x, d.y, d.width, d.height);
			ctx.closePath();
			ctx.fill();
		});
	};
	
	RenkoSeries.getRenko = function (props, plotData, xScale, xAccessor, yScale, yAccessor) {
		var classNames = props.classNames;
		var fill = props.fill;
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
	
		var candleWidth = width / (plotData.length - 1);
		var candles = plotData.filter(function (d) {
			return d.close !== undefined;
		}).map(function (d, idx) {
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
	};
	
	exports["default"] = (0, _wrap2["default"])(RenkoSeries);
	module.exports = exports["default"];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _Line = __webpack_require__(12);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(28);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var StochasticSeries = (function (_React$Component) {
		_inherits(StochasticSeries, _React$Component);
	
		function StochasticSeries() {
			_classCallCheck(this, StochasticSeries);
	
			_get(Object.getPrototypeOf(StochasticSeries.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(StochasticSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var indicator = props.indicator;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var stroke = props.stroke;
				var type = props.type;
	
				var options = indicator.options();
	
				return _react2["default"].createElement(
					"g",
					{ className: className },
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).D;
						},
						plotData: plotData,
						stroke: options.stroke.D, fill: "none",
						type: type }),
					_react2["default"].createElement(_Line2["default"], {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: function (d) {
							return yAccessor(d) && yAccessor(d).K;
						},
						plotData: plotData,
						stroke: options.stroke.K, fill: "none",
						type: type }),
					StochasticSeries.getHorizontalLine(props, options.overSold, "brown"),
					StochasticSeries.getHorizontalLine(props, 50, "black"),
					StochasticSeries.getHorizontalLine(props, options.overBought, "brown")
				);
			}
		}]);
	
		return StochasticSeries;
	})(_react2["default"].Component);
	
	StochasticSeries.getHorizontalLine = function (props, yValue, stroke) {
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
	
		return _react2["default"].createElement(_StraightLine2["default"], {
			stroke: stroke, opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: yValue });
	};
	
	StochasticSeries.propTypes = {
		className: _react2["default"].PropTypes.string
	};
	
	StochasticSeries.defaultProps = {
		className: "react-stockcharts-rsi-series"
	};
	
	exports["default"] = (0, _wrap2["default"])(StochasticSeries);
	module.exports = exports["default"];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _AreaSeries = __webpack_require__(99);
	
	var _AreaSeries2 = _interopRequireDefault(_AreaSeries);
	
	var _LineSeries = __webpack_require__(104);
	
	var _LineSeries2 = _interopRequireDefault(_LineSeries);
	
	var _CompareSeries = __webpack_require__(102);
	
	var _CompareSeries2 = _interopRequireDefault(_CompareSeries);
	
	var _CandlestickSeries = __webpack_require__(101);
	
	var _CandlestickSeries2 = _interopRequireDefault(_CandlestickSeries);
	
	var _HistogramSeries = __webpack_require__(37);
	
	var _HistogramSeries2 = _interopRequireDefault(_HistogramSeries);
	
	var _KagiSeries = __webpack_require__(103);
	
	var _KagiSeries2 = _interopRequireDefault(_KagiSeries);
	
	var _PointAndFigureSeries = __webpack_require__(106);
	
	var _PointAndFigureSeries2 = _interopRequireDefault(_PointAndFigureSeries);
	
	var _RenkoSeries = __webpack_require__(108);
	
	var _RenkoSeries2 = _interopRequireDefault(_RenkoSeries);
	
	var _MACDSeries = __webpack_require__(105);
	
	var _MACDSeries2 = _interopRequireDefault(_MACDSeries);
	
	var _BollingerSeries = __webpack_require__(100);
	
	var _BollingerSeries2 = _interopRequireDefault(_BollingerSeries);
	
	var _RSISeries = __webpack_require__(107);
	
	var _RSISeries2 = _interopRequireDefault(_RSISeries);
	
	var _StochasticSeries = __webpack_require__(109);
	
	var _StochasticSeries2 = _interopRequireDefault(_StochasticSeries);
	
	var _Area = __webpack_require__(36);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _Line = __webpack_require__(12);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(28);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(4);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	exports["default"] = {
		AreaSeries: _AreaSeries2["default"],
		LineSeries: _LineSeries2["default"],
		CompareSeries: _CompareSeries2["default"],
		CandlestickSeries: _CandlestickSeries2["default"],
		HistogramSeries: _HistogramSeries2["default"],
		KagiSeries: _KagiSeries2["default"],
		PointAndFigureSeries: _PointAndFigureSeries2["default"],
		RenkoSeries: _RenkoSeries2["default"],
		MACDSeries: _MACDSeries2["default"],
		BollingerSeries: _BollingerSeries2["default"],
		RSISeries: _RSISeries2["default"],
		StochasticSeries: _StochasticSeries2["default"],
		Area: _Area2["default"],
		Line: _Line2["default"],
		StraightLine: _StraightLine2["default"],
		wrap: _wrap2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(18);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(17);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var BollingerBandTooltip = (function (_React$Component) {
		_inherits(BollingerBandTooltip, _React$Component);
	
		function BollingerBandTooltip() {
			_classCallCheck(this, BollingerBandTooltip);
	
			_get(Object.getPrototypeOf(BollingerBandTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(BollingerBandTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var onClick = _props.onClick;
				var forChart = _props.forChart;
				var forDataSeries = _props.forDataSeries;
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var top, middle, bottom;
				top = middle = bottom = "n/a";
	
				var overlays = chartData.config.overlays.filter(function (eachOverlay) {
					return forDataSeries === undefined ? true : forDataSeries === eachOverlay.id;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator !== undefined;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator.isBollingerBand && eachOverlay.indicator.isBollingerBand();
				});
	
				if (overlays.length > 1 || overlays.length === 0) {
					console.error("Could not find Exactly one DataSeries with BollingerBand indicator for Chart id=" + forChart + ", either use \n\t\t\t\tsingle BollingerBand indicator per chart\n\t\t\t\tor use forDataSeries property to narrow down to single Series");
				}
				var overlay = overlays[0];
				var options = overlay.indicator.options();
	
				var yAccessor = overlay.indicator.yAccessor();
				var value = yAccessor(item);
				var format = _utilsUtils2["default"].displayNumberFormat;
	
				if (value !== undefined) {
					top = format(value.top);
					middle = format(value.middle);
					bottom = format(value.bottom);
				}
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")",
						className: this.props.className,
						onClick: onClick.bind(null, options) },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"BB (" + options.period + ", " + options.source + ", " + options.multiplier + ", " + options.movingAverageType + "): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							top + ", " + middle + ", " + bottom
						)
					)
				);
			}
		}]);
	
		return BollingerBandTooltip;
	})(_react2["default"].Component);
	
	BollingerBandTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	BollingerBandTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		displayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.array.isRequired,
		onClick: _react2["default"].PropTypes.func,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.number,
		onClick: _react2["default"].PropTypes.func
	};
	
	BollingerBandTooltip.defaultProps = {
		namespace: "ReStock.BollingerBandTooltip",
		className: "react-stockcharts-moving-average-tooltip",
		displayFormat: _utilsUtils2["default"].displayNumberFormat,
		origin: [0, 10],
		width: 65
	};
	
	module.exports = BollingerBandTooltip;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(18);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(17);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var CompareTooltip = (function (_React$Component) {
		_inherits(CompareTooltip, _React$Component);
	
		function CompareTooltip() {
			_classCallCheck(this, CompareTooltip);
	
			_get(Object.getPrototypeOf(CompareTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(CompareTooltip, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var displayValue = "n/a";
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
	
				var thisSeries = chartData.config.compareSeries.filter(function (each) {
					return each.id === _this.props.forCompareSeries;
				})[0];
	
				if (item !== undefined && thisSeries.yAccessor(item) !== undefined) {
					displayValue = thisSeries.yAccessor(item);
				}
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")" },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label", x: 0, dy: "5", fill: thisSeries.stroke },
							thisSeries.displayLabel + ": "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value", fill: thisSeries.stroke },
							displayValue
						)
					)
				);
			}
		}]);
	
		return CompareTooltip;
	})(_react2["default"].Component);
	
	CompareTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	CompareTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		forCompareSeries: _react2["default"].PropTypes.number.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.array.isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number
	};
	
	CompareTooltip.defaultProps = {
		namespace: "ReStock.CompareTooltip",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = CompareTooltip;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(18);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(17);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var MACDTooltip = (function (_React$Component) {
		_inherits(MACDTooltip, _React$Component);
	
		function MACDTooltip() {
			_classCallCheck(this, MACDTooltip);
	
			_get(Object.getPrototypeOf(MACDTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MACDTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var onClick = _props.onClick;
				var forChart = _props.forChart;
				var forDataSeries = _props.forDataSeries;
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var overlays = chartData.config.overlays.filter(function (eachOverlay) {
					return forDataSeries === undefined ? true : forDataSeries === eachOverlay.id;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator !== undefined;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator.isMACD && eachOverlay.indicator.isMACD();
				});
	
				if (overlays.length > 1 || overlays.length === 0) {
					console.error("Could not find Exactly one DataSeries with MACD indicator for Chart id=" + forChart + ", either use \n\t\t\t\tsingle MACD indicator per chart\n\t\t\t\tor use forDataSeries property to narrow down to single Series");
				}
				var overlay = overlays[0];
				var options = overlay.indicator.options();
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var macd = overlay.yAccessor(item);
				var format = chartData.config.mouseCoordinates.format;
	
				var MACDLine = macd && macd.MACDLine && format(macd.MACDLine) || "n/a";
				var signalLine = macd && macd.signalLine && format(macd.signalLine) || "n/a";
				var histogram = macd && macd.histogram && format(macd.histogram) || "n/a";
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")",
						onClick: onClick.bind(null, options) },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"MACD ("
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.MACDLine },
							options.slow
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							", "
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.MACDLine },
							options.fast
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							MACDLine
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							" Signal ("
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.signalLine },
							options.signal
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							signalLine
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							" Histogram: "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							histogram
						)
					)
				);
			}
		}]);
	
		return MACDTooltip;
	})(_react2["default"].Component);
	
	MACDTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	MACDTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.number,
		onClick: _react2["default"].PropTypes.func
	};
	
	MACDTooltip.defaultProps = {
		namespace: "ReStock.MACDTooltip",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = MACDTooltip;
	// export default MACDTooltip;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(18);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(17);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var SingleMAToolTip = (function (_React$Component) {
		_inherits(SingleMAToolTip, _React$Component);
	
		function SingleMAToolTip() {
			_classCallCheck(this, SingleMAToolTip);
	
			_get(Object.getPrototypeOf(SingleMAToolTip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(SingleMAToolTip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var onClick = _props.onClick;
				var forChart = _props.forChart;
				var forDataSeries = _props.forDataSeries;
				var options = _props.options;
	
				var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
				return _react2["default"].createElement(
					"g",
					{ transform: translate },
					_react2["default"].createElement("line", { x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color, strokeWidth: "4px" }),
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 5, y: 11,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							this.props.displayName
						),
						_react2["default"].createElement(
							"tspan",
							{ x: "5", dy: "15" },
							this.props.value
						)
					),
					_react2["default"].createElement("rect", { x: 0, y: 0, width: 55, height: 30,
						onClick: onClick.bind(null, options),
						fill: "none", stroke: "none" })
				);
			}
		}]);
	
		return SingleMAToolTip;
	})(_react2["default"].Component);
	
	SingleMAToolTip.propTypes = {
		origin: _react2["default"].PropTypes.array.isRequired,
		color: _react2["default"].PropTypes.string.isRequired,
		displayName: _react2["default"].PropTypes.string.isRequired,
		value: _react2["default"].PropTypes.string.isRequired,
		onClick: _react2["default"].PropTypes.func,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number
	};
	
	var MovingAverageTooltip = (function (_React$Component2) {
		_inherits(MovingAverageTooltip, _React$Component2);
	
		function MovingAverageTooltip() {
			_classCallCheck(this, MovingAverageTooltip);
	
			_get(Object.getPrototypeOf(MovingAverageTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MovingAverageTooltip, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var _props2 = this.props;
				var onClick = _props2.onClick;
				var forChart = _props2.forChart;
				var forDataSeries = _props2.forDataSeries;
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")", className: this.props.className },
					chartData.config.overlays.filter(function (eachOverlay) {
						return eachOverlay.indicator !== undefined;
					}).filter(function (eachOverlay) {
						return eachOverlay.indicator.isMovingAverage && eachOverlay.indicator.isMovingAverage();
					}).filter(function (eachOverlay) {
						return forDataSeries === undefined ? true : forDataSeries.indexOf(eachOverlay.id) > -1;
					}).map(function (eachOverlay, idx) {
						var yValue = eachOverlay.yAccessor(item);
						var yDisplayValue = yValue ? _this.props.displayFormat(yValue) : "n/a";
						return _react2["default"].createElement(SingleMAToolTip, {
							key: idx,
							origin: [_this.props.width * idx, 0],
							color: eachOverlay.stroke,
							displayName: eachOverlay.indicator.tooltipLabel(),
							value: yDisplayValue,
							options: eachOverlay.indicator.options(),
							forChart: forChart, forDataSeries: eachOverlay.id, onClick: onClick,
							fontFamily: _this.props.fontFamily, fontSize: _this.props.fontSize });
					})
				);
			}
		}]);
	
		return MovingAverageTooltip;
	})(_react2["default"].Component);
	
	MovingAverageTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	MovingAverageTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		displayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.array.isRequired,
		onClick: _react2["default"].PropTypes.func,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.number)
	};
	
	MovingAverageTooltip.defaultProps = {
		namespace: "ReStock.MovingAverageTooltip",
		className: "react-stockcharts-moving-average-tooltip",
		displayFormat: _utilsUtils2["default"].displayNumberFormat,
		origin: [0, 10],
		width: 65
	};
	
	module.exports = MovingAverageTooltip;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(18);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(17);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var billion = 1 * 1000 * 1000 * 1000;
	var million = 1 * 1000 * 1000;
	var thousand = 1 * 1000;
	
	var OHLCTooltip = (function (_React$Component) {
		_inherits(OHLCTooltip, _React$Component);
	
		function OHLCTooltip() {
			_classCallCheck(this, OHLCTooltip);
	
			_get(Object.getPrototypeOf(OHLCTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(OHLCTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var onClick = _props.onClick;
				var xDisplayFormat = _props.xDisplayFormat;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var forChart = _props.forChart;
				var dataTransform = this.context.dataTransform;
	
				var displayDate, fromDate, toDate, open, high, low, close, volume;
	
				displayDate = fromDate = toDate = open = high = low = close = volume = "n/a";
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
	
				if (item !== undefined && item.close !== undefined) {
					volume = item.volume / billion > 1 ? (item.volume / billion).toFixed(2) + "b" : item.volume / million > 1 ? (item.volume / million).toFixed(2) + "m" : item.volume / thousand > 1 ? (item.volume / thousand).toFixed(2) + "k" : item.volume;
	
					displayDate = xDisplayFormat(item.date);
					open = _utilsUtils2["default"].displayNumberFormat(item.open);
					high = _utilsUtils2["default"].displayNumberFormat(item.high);
					low = _utilsUtils2["default"].displayNumberFormat(item.low);
					close = _utilsUtils2["default"].displayNumberFormat(item.close);
				}
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")",
						onClick: onClick },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: fontFamily, fontSize: fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label", x: 0, dy: "5" },
							"Date: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value" },
							displayDate
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_O" },
							" O: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_O" },
							open
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_H" },
							" H: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_H" },
							high
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_L" },
							" L: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_L" },
							low
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_C" },
							" C: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_C" },
							close
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							{ key: "label_Vol" },
							" Vol: "
						),
						_react2["default"].createElement(
							"tspan",
							{ key: "value_Vol" },
							volume
						)
					)
				);
			}
		}]);
	
		return OHLCTooltip;
	})(_react2["default"].Component);
	
	OHLCTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired,
		dataTransform: _react2["default"].PropTypes.array
	};
	
	OHLCTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		accessor: _react2["default"].PropTypes.func.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		onClick: _react2["default"].PropTypes.func
	};
	
	OHLCTooltip.defaultProps = {
		namespace: "ReStock.OHLCTooltip",
		accessor: function accessor(d) {
			return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
		},
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = OHLCTooltip;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(18);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(17);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var RSITooltip = (function (_React$Component) {
		_inherits(RSITooltip, _React$Component);
	
		function RSITooltip() {
			_classCallCheck(this, RSITooltip);
	
			_get(Object.getPrototypeOf(RSITooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(RSITooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var onClick = _props.onClick;
				var forChart = _props.forChart;
				var forDataSeries = _props.forDataSeries;
				var fontSize = _props.fontSize;
				var fontFamily = _props.fontFamily;
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
	
				var overlays = chartData.config.overlays.filter(function (eachOverlay) {
					return forDataSeries === undefined ? true : forDataSeries === eachOverlay.id;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator !== undefined;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator.isRSI && eachOverlay.indicator.isRSI();
				});
	
				if (overlays.length > 1 || overlays.length === 0) {
					console.error("Could not find Exactly one DataSeries with RSI indicator for Chart id=" + forChart + ", either use \n\t\t\t\tsingle RSI indicator per chart\n\t\t\t\tor use forDataSeries property to narrow down to single Series");
				}
	
				var overlay = overlays[0];
				var options = overlay.indicator.options();
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var rsi = overlay.yAccessor(item);
				var format = chartData.config.mouseCoordinates.format;
	
				var value = rsi !== undefined && format(rsi) || "n/a";
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")",
						onClick: onClick.bind(null, options) },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0,
							fontFamily: fontFamily, fontSize: fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"RSI (" + options.period + ", " + options.source + ", " + options.overSold + ", " + options.overBought + "): "
						),
						_react2["default"].createElement(
							"tspan",
							null,
							value
						)
					)
				);
			}
		}]);
	
		return RSITooltip;
	})(_react2["default"].Component);
	
	RSITooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	RSITooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		accessor: _react2["default"].PropTypes.func.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.number,
		onClick: _react2["default"].PropTypes.func
	};
	
	RSITooltip.defaultProps = {
		namespace: "ReStock.RSITooltip",
		accessor: function accessor(d) {
			return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
		},
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = RSITooltip;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsChartDataUtil = __webpack_require__(6);
	
	var _utilsChartDataUtil2 = _interopRequireDefault(_utilsChartDataUtil);
	
	var _ToolTipText = __webpack_require__(18);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(17);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var StochasticTooltip = (function (_React$Component) {
		_inherits(StochasticTooltip, _React$Component);
	
		function StochasticTooltip() {
			_classCallCheck(this, StochasticTooltip);
	
			_get(Object.getPrototypeOf(StochasticTooltip.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(StochasticTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var onClick = _props.onClick;
				var forChart = _props.forChart;
				var forDataSeries = _props.forDataSeries;
	
				var chartData = _utilsChartDataUtil2["default"].getChartDataForChart(this.props, this.context);
				var overlays = chartData.config.overlays.filter(function (eachOverlay) {
					return forDataSeries === undefined ? true : forDataSeries === eachOverlay.id;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator !== undefined;
				}).filter(function (eachOverlay) {
					return eachOverlay.indicator.isStochastic && eachOverlay.indicator.isStochastic();
				});
	
				if (overlays.length > 1 || overlays.length === 0) {
					console.error("Could not find Exactly one DataSeries with Stochastic indicator for Chart id=" + forChart + ", either use \n\t\t\t\tsingle Stochastic indicator per chart\n\t\t\t\tor use forDataSeries property to narrow down to single Series");
				}
				var overlay = overlays[0];
				var options = overlay.indicator.options();
	
				var item = _utilsChartDataUtil2["default"].getCurrentItemForChart(this.props, this.context);
				var stochastic = overlay.yAccessor(item);
				var format = chartData.config.mouseCoordinates.format;
	
				var K = stochastic && stochastic.K && format(stochastic.K) || "n/a";
				var D = stochastic && stochastic.D && format(stochastic.D) || "n/a";
	
				var _chartData$config = chartData.config;
				var origin = _chartData$config.origin;
				var height = _chartData$config.height;
				var width = _chartData$config.width;
	
				var relativeOrigin = typeof this.props.origin === "function" ? this.props.origin(this.context.width, this.context.height) : this.props.origin;
				var absoluteOrigin = [origin[0] + relativeOrigin[0], origin[1] + relativeOrigin[1]];
				var label = this.props.children || "Stochastic";
	
				return _react2["default"].createElement(
					"g",
					{ transform: "translate(" + absoluteOrigin[0] + ", " + absoluteOrigin[1] + ")",
						onClick: onClick.bind(null, options) },
					_react2["default"].createElement(
						_ToolTipText2["default"],
						{ x: 0, y: 0, fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							label + " %K("
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.K },
							options.period + ", " + options.K
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.K },
							K
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							" %D ("
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.D },
							options.D
						),
						_react2["default"].createElement(
							_ToolTipTSpanLabel2["default"],
							null,
							"): "
						),
						_react2["default"].createElement(
							"tspan",
							{ fill: options.stroke.D },
							D
						)
					)
				);
			}
		}]);
	
		return StochasticTooltip;
	})(_react2["default"].Component);
	
	StochasticTooltip.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired,
		width: _react2["default"].PropTypes.number.isRequired,
		height: _react2["default"].PropTypes.number.isRequired
	};
	
	StochasticTooltip.propTypes = {
		forChart: _react2["default"].PropTypes.number.isRequired,
		xDisplayFormat: _react2["default"].PropTypes.func.isRequired,
		origin: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.array, _react2["default"].PropTypes.func]).isRequired,
		fontFamily: _react2["default"].PropTypes.string,
		fontSize: _react2["default"].PropTypes.number,
		forDataSeries: _react2["default"].PropTypes.number,
		onClick: _react2["default"].PropTypes.func
	};
	
	StochasticTooltip.defaultProps = {
		namespace: "ReStock.StochasticTooltip",
		xDisplayFormat: _utilsUtils2["default"].displayDateFormat,
		origin: [0, 0]
	};
	
	module.exports = StochasticTooltip;
	// export default StochasticTooltip;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsUtils = __webpack_require__(2);
	
	var _utilsUtils2 = _interopRequireDefault(_utilsUtils);
	
	var _utilsPureComponent = __webpack_require__(23);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var TooltipContainer = (function (_PureComponent) {
		_inherits(TooltipContainer, _PureComponent);
	
		function TooltipContainer() {
			_classCallCheck(this, TooltipContainer);
	
			_get(Object.getPrototypeOf(TooltipContainer.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(TooltipContainer, [{
			key: "render",
			value: function render() {
				var _this = this;
	
				var children = _react2["default"].Children.map(this.props.children, function (child) {
					var newChild = _utilsUtils2["default"].isReactVersion13() ? _react2["default"].withContext(_this.context, function () {
						return _react2["default"].createElement(child.type, (0, _objectAssign2["default"])({ key: child.key, ref: child.ref }, child.props));
					}) : _react2["default"].cloneElement(child);
					// React.createElement(child.type, objectAssign({ key: child.key, ref: child.ref}, child.props));
					return newChild;
				});
				return _react2["default"].createElement(
					"g",
					{ className: "react-stockcharts-toottip-hover" },
					children
				);
			}
		}]);
	
		return TooltipContainer;
	})(_utilsPureComponent2["default"]);
	
	TooltipContainer.contextTypes = {
		chartData: _react2["default"].PropTypes.array.isRequired,
		currentItems: _react2["default"].PropTypes.array.isRequired
	};
	
	TooltipContainer.defaultProps = { namespace: "ReStock.TooltipContainer" };
	
	module.exports = TooltipContainer;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _MACDTooltip = __webpack_require__(113);
	
	var _MACDTooltip2 = _interopRequireDefault(_MACDTooltip);
	
	var _TooltipContainer = __webpack_require__(118);
	
	var _TooltipContainer2 = _interopRequireDefault(_TooltipContainer);
	
	var _OHLCTooltip = __webpack_require__(115);
	
	var _OHLCTooltip2 = _interopRequireDefault(_OHLCTooltip);
	
	var _CompareTooltip = __webpack_require__(112);
	
	var _CompareTooltip2 = _interopRequireDefault(_CompareTooltip);
	
	var _MovingAverageTooltip = __webpack_require__(114);
	
	var _MovingAverageTooltip2 = _interopRequireDefault(_MovingAverageTooltip);
	
	var _BollingerBandTooltip = __webpack_require__(111);
	
	var _BollingerBandTooltip2 = _interopRequireDefault(_BollingerBandTooltip);
	
	var _RSITooltip = __webpack_require__(116);
	
	var _RSITooltip2 = _interopRequireDefault(_RSITooltip);
	
	var _StochasticTooltip = __webpack_require__(117);
	
	var _StochasticTooltip2 = _interopRequireDefault(_StochasticTooltip);
	
	exports["default"] = {
		MACDTooltip: _MACDTooltip2["default"],
		TooltipContainer: _TooltipContainer2["default"],
		OHLCTooltip: _OHLCTooltip2["default"],
		CompareTooltip: _CompareTooltip2["default"],
		MovingAverageTooltip: _MovingAverageTooltip2["default"],
		BollingerBandTooltip: _BollingerBandTooltip2["default"],
		RSITooltip: _RSITooltip2["default"],
		StochasticTooltip: _StochasticTooltip2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	
	function DummyTransformer() {
		function transform(data, interval) {
			var responseData = {};
			responseData[interval] = data;
	
			return responseData;
		};
	
		transform.options = function (opt) {
			return opt;
		};
		return transform;
	}
	
	module.exports = DummyTransformer;

/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict";
	
	function buildHA(data, indexAccessor, indexMutator, dateAccessor, dateMutator) {
		var prevEach;
	
		var haData = data.map(function (d) {
			var each = {};
			indexMutator(each, indexAccessor(d));
			each.close = (d.open + d.high + d.low + d.close) / 4;
	
			dateMutator(each, dateAccessor(d));
	
			if (!prevEach) {
				each.open = d.open;
				each.high = d.high;
				each.low = d.low;
			} else {
				each.open = (prevEach.open + prevEach.close) / 2;
				each.high = Math.max(each.open, d.high, each.close);
				each.low = Math.min(each.open, d.low, each.close);
				each.trueRange = Math.max(d.high - d.low, d.high - prevEach.close, d.low - prevEach.close);
			}
			each.volume = d.volume;
	
			each.startOfWeek = d.startOfWeek;
			each.startOfMonth = d.startOfMonth;
			each.startOfQuarter = d.startOfQuarter;
			each.startOfYear = d.startOfYear;
	
			prevEach = each;
			return each;
		});
		// console.table(haData);
		return haData;
	}
	
	function HeikinAshiTransformer() {
		var newOptions;
		function transform(data) {
			var _newOptions = newOptions;
			var dateAccessor = _newOptions.dateAccessor;
			var dateMutator = _newOptions.dateMutator;
			var indexAccessor = _newOptions.indexAccessor;
			var indexMutator = _newOptions.indexMutator;
	
			// console.log(data, options);
	
			var haData = {};
			Object.keys(data).forEach(function (key) {
				return haData[key] = buildHA(data[key], indexAccessor, indexMutator, dateAccessor, dateMutator);
			});
	
			return haData;
		};
	
		transform.options = function (opt) {
			newOptions = opt;
			return opt;
		};
		return transform;
	}
	
	module.exports = HeikinAshiTransformer;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsATRCalculator = __webpack_require__(49);
	
	var _utilsATRCalculator2 = _interopRequireDefault(_utilsATRCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _defaultOptions = __webpack_require__(29);
	
	function KagiTransformer() {
		var newOptions;
		function transform(data) {
			var _newOptions = newOptions;
			var reversalType = _newOptions.reversalType;
			var period = _newOptions.period;
			var reversal = _newOptions.reversal;
			var source = _newOptions.source;
			var _newOptions2 = newOptions;
			var dateAccessor = _newOptions2.dateAccessor;
			var dateMutator = _newOptions2.dateMutator;
			var indexMutator = _newOptions2.indexMutator;
	
			var reversalThreshold, pricingMethod;
			if (reversalType === "ATR") {
				(0, _utilsATRCalculator2["default"])(data.D, period);
				reversalThreshold = function (d) {
					return d["atr" + period];
				};
			} else {
				reversalThreshold = function (d) {
					return reversal;
				};
			}
	
			pricingMethod = function (d) {
				return d[source];
			};
	
			var kagiData = [];
	
			var index = 0,
			    prevPeak,
			    prevTrough,
			    direction;
			var line = {};
	
			data.D.forEach(function (d) {
				if (line.from === undefined) {
					indexMutator(line, index++);
					dateMutator(line, dateAccessor(d));
					line.from = dateAccessor(d);
	
					if (!line.open) line.open = d.open;
					line.high = d.high;
					line.low = d.low;
					if (!line.close) line.close = pricingMethod(d);
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
	
				var priceMovement = pricingMethod(d) - line.close;
	
				if (line.close > line.open /* going up */ && priceMovement > 0 /* and moving in same direction */ || line.close < line.open /* going down */ && priceMovement < 0 /* and moving in same direction */) {
						line.close = pricingMethod(d);
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
									if (prevPeak === undefined) prevPeak = line.open;
									prevTrough = line.close;
									if (pricingMethod(d) > prevPeak) {
										nextChangePoint = prevPeak;
										nextChangeTo = "yang";
									}
								} else {
								if (prevTrough === undefined) prevTrough = line.open;
								prevPeak = line.close;
								if (pricingMethod(d) < prevTrough) {
									nextChangePoint = prevTrough;
									nextChangeTo = "yin";
								}
							}
							if (line.startAs === undefined) {
								line.startAs = direction > 0 ? "yang" : "yin";
							}
	
							var startAs = line.changeTo || line.startAs;
							line.added = true;
							kagiData.push(line);
							direction = -1 * direction; // direction is reversed
	
							line = (0, _objectAssign2["default"])({}, line);
							line.open = nextLineOpen;
							line.close = pricingMethod(d);
							line.startAs = startAs;
							line.changePoint = nextChangePoint;
							line.changeTo = nextChangeTo;
							line.added = false;
							line.from = undefined;
							line.volume = 0;
							indexMutator(line, index);
						} else {
						// console.log("MOVING IN REV DIR BUT..", line.open, line.close, pricingMethod(d));
					}
				line.current = pricingMethod(d);
				var dir = line.close - line.open;
				dir = dir / Math.abs(dir);
				line.reverseAt = dir > 0 ? line.close - reversalThreshold(d) : line.open - reversalThreshold(d);
			});
			if (!line.added) kagiData.push(line);
	
			return { "D": kagiData };
		};
	
		transform.options = function (opt) {
			newOptions = (0, _objectAssign2["default"])({}, _defaultOptions.Kagi, opt);
			return newOptions;
		};
		return transform;
	}
	
	module.exports = KagiTransformer;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _defaultOptions = __webpack_require__(29);
	
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
				if (d.open === undefined) d.open = eachBox.open;
				d.close = eachBox.close;
				d.high = Math.max(d.open, d.close);
				d.low = Math.min(d.open, d.close);
	
				if (d.fromDate === undefined) d.fromDate = eachBox.fromDate;
				if (d.date === undefined) d.date = eachBox.date;
				// if (d.displayDate === undefined) d.displayDate = eachBox.displayDate;
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
	
	function PointAndFigureTransformer() {
		var newOptions;
		function transform(rawData, interval) {
			var _newOptions = newOptions;
			var dateAccessor = _newOptions.dateAccessor;
			var dateMutator = _newOptions.dateMutator;
			var indexAccessor = _newOptions.indexAccessor;
			var indexMutator = _newOptions.indexMutator;
			var reversal = _newOptions.reversal;
			var boxSize = _newOptions.boxSize;
			var source = _newOptions.source;
	
			var pricingMethod;
			if (source = "hi/lo") {
				pricingMethod = function (d) {
					return { high: d.high, low: d.low };
				};
			} else {
				pricingMethod = function (d) {
					return { high: d.close, low: d.close };
				};
			}
	
			var columnData = [];
	
			var column = {
				boxes: [],
				open: rawData.D[0].open
			},
			    box = createBox(rawData.D[0], dateAccessor, dateMutator);
	
			indexMutator(column, 0);
			columnData.push(column);
	
			rawData.D.forEach(function (d) {
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
					var upwardMovement = Math.max(pricingMethod(d).high - box.open, 0); // upward movement
					var downwardMovement = Math.abs(Math.min(pricingMethod(d).low - box.open, 0)); // downward movement
	
					if (column.direction > 0 && upwardMovement > boxSize || /* rising column AND box can be formed */
					column.direction < 0 && downwardMovement > boxSize /* falling column AND box can be formed */) {
							// form another box
							box.close = box.open + column.direction * boxSize;
							box.toDate = dateAccessor(d);
							var _prevBoxClose2 = box.close;
							column.boxes.push(box);
							box = createBox(d, dateAccessor, dateMutator);
							box.open = _prevBoxClose2;
							box.fromDate = dateAccessor(d);
							dateMutator(box, dateAccessor(d));
						} else if (column.direction > 0 && downwardMovement > boxSize * reversal || /* rising column and there is downward movement to trigger a reversal */
					column.direction < 0 && upwardMovement > boxSize * reversal /* falling column and there is downward movement to trigger a reversal */) {
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
							var idx = indexAccessor(column) + 1;
							column = {
								boxes: [],
								volume: 0,
								direction: -1 * column.direction
							};
							indexMutator(column, idx);
							var noOfBoxes = column.direction > 0 ? Math.floor(upwardMovement / boxSize) : Math.floor(downwardMovement / boxSize);
							for (var i = 0; i < noOfBoxes; i++) {
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
	
			return { "D": columnData };
		};
	
		transform.options = function (opt) {
			newOptions = (0, _objectAssign2["default"])({}, _defaultOptions.PointAndFigure, opt);
			return newOptions;
		};
		return transform;
	}
	
	module.exports = PointAndFigureTransformer;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utilsATRCalculator = __webpack_require__(49);
	
	var _utilsATRCalculator2 = _interopRequireDefault(_utilsATRCalculator);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _defaultOptions = __webpack_require__(29);
	
	function RenkoTransformer() {
		var newOptions;
		function transform(rawData, interval) {
			var _newOptions = newOptions;
			var reversalType = _newOptions.reversalType;
			var fixedBrickSize = _newOptions.fixedBrickSize;
			var dateAccessor = _newOptions.dateAccessor;
			var dateMutator = _newOptions.dateMutator;
			var indexAccessor = _newOptions.indexAccessor;
			var indexMutator = _newOptions.indexMutator;
			var period = _newOptions.period;
			var source = _newOptions.source;
	
			var brickSize, pricingMethod;
			if (reversalType === "ATR") {
				(0, _utilsATRCalculator2["default"])(rawData.D, period);
				brickSize = function (d) {
					return d["atr" + period];
				};
			} else {
				brickSize = function (d) {
					return fixedBrickSize;
				};
			}
			if (source = "hi/lo") {
				pricingMethod = function (d) {
					return { high: d.high, low: d.low };
				};
			} else {
				pricingMethod = function (d) {
					return { high: d.close, low: d.close };
				};
			}
	
			var renkoData = [];
	
			var index = 0,
			    prevBrickClose = rawData.D[index].open,
			    prevBrickOpen = rawData.D[index].open;
			var brick = {},
			    direction = 0;
	
			rawData.D.forEach(function (d) {
				if (brick.from === undefined) {
					brick.high = d.high;
					brick.low = d.low;
					brick.startOfYear = d.startOfYear;
					brick.startOfQuarter = d.startOfQuarter;
					brick.startOfMonth = d.startOfMonth;
					brick.startOfWeek = d.startOfWeek;
	
					brick.from = indexAccessor(d);
					brick.fromDate = dateAccessor(d);
					indexMutator(brick, index++);
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
						for (var j = 0; j < noOfBricks; j++) {
							brick.close = brick.open < pricingMethod(d).high ?
							// if brick open is less than current price it means it is green/hollow brick
							brick.open + brickSize(d) : brick.open - brickSize(d);
							direction = brick.close > brick.open ? 1 : -1;
							brick.direction = direction;
							brick.to = indexAccessor(d);
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
							brick.from = indexAccessor(d);
							brick.fromDate = dateAccessor(d);
							indexMutator(brick, index + j);
							dateMutator(brick, dateAccessor(d));
							brick.volume = (brick.volume || 0) + d.volume;
						}
						index = index + j - 1;
						brick = {};
					} else {
						if (indexAccessor(d) === rawData.D.length - 1) {
							brick.close = direction > 0 ? pricingMethod(d).high : pricingMethod(d).low;
							brick.to = indexAccessor(d);
							brick.toDate = dateAccessor(d);
							dateMutator(brick, dateAccessor(d));
	
							brick.fullyFormed = false;
							renkoData.push(brick);
						}
					}
				}
			});
			return { "D": renkoData };
		};
	
		transform.options = function (opt) {
			newOptions = (0, _objectAssign2["default"])({}, _defaultOptions.Renko, opt);
			return newOptions;
		};
		return transform;
	}
	
	module.exports = RenkoTransformer;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _scalePolylineartimescale = __webpack_require__(98);
	
	var _scalePolylineartimescale2 = _interopRequireDefault(_scalePolylineartimescale);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultOptions = {
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		indexAccessor: function indexAccessor(d) {
			return d.idx;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, i) {
			d.idx = i;
		}
	};
	
	function buildWeeklyData(daily, indexMutator, dateAccesor, dateMutator) {
		var weekly = [],
		    prevWeek,
		    eachWeek = {};
	
		for (var i = 0; i < daily.length; i++) {
	
			var d = daily[i];
	
			if (dateAccesor(eachWeek)) indexMutator(eachWeek, i);
	
			dateMutator(eachWeek, dateAccesor(d));
	
			eachWeek.startOfWeek = eachWeek.startOfWeek || d.startOfWeek;
			eachWeek.startOfMonth = eachWeek.startOfMonth || d.startOfMonth;
			eachWeek.startOfQuarter = eachWeek.startOfQuarter || d.startOfQuarter;
			eachWeek.startOfYear = eachWeek.startOfYear || d.startOfYear;
	
			if (!eachWeek.open) eachWeek.open = d.open;
			if (!eachWeek.high) eachWeek.high = d.high;
			if (!eachWeek.low) eachWeek.low = d.low;
	
			eachWeek.close = d.close;
	
			eachWeek.high = Math.max(eachWeek.high, d.high);
			eachWeek.low = Math.min(eachWeek.low, d.low);
	
			if (!eachWeek.volume) eachWeek.volume = 0;
			eachWeek.volume += d.volume;
	
			eachWeek = (0, _objectAssign2["default"])({}, d, eachWeek);
	
			if (d.startOfWeek) {
				if (prevWeek) {
					eachWeek.trueRange = Math.max(eachWeek.high - eachWeek.low, eachWeek.high - prevWeek.close, eachWeek.low - prevWeek.close);
				}
				prevWeek = eachWeek;
				weekly.push(eachWeek);
				eachWeek = {};
			}
		}
		return weekly;
	}
	
	function buildMonthlyData(daily, indexMutator, dateAccesor) {
		var monthly = [],
		    prevMonth,
		    eachMonth = {};
		for (var i = 0; i < daily.length; i++) {
			var d = daily[i];
	
			if (!eachMonth.date) indexMutator(eachMonth, i);
	
			eachMonth.date = dateAccesor(d);
	
			eachMonth.startOfMonth = eachMonth.startOfMonth || d.startOfMonth;
			eachMonth.startOfQuarter = eachMonth.startOfQuarter || d.startOfQuarter;
			eachMonth.startOfYear = eachMonth.startOfYear || d.startOfYear;
	
			if (!eachMonth.open) eachMonth.open = d.open;
			if (!eachMonth.high) eachMonth.high = d.high;
			if (!eachMonth.low) eachMonth.low = d.low;
	
			eachMonth.close = d.close;
	
			eachMonth.high = Math.max(eachMonth.high, d.high);
			eachMonth.low = Math.min(eachMonth.low, d.low);
	
			if (!eachMonth.volume) eachMonth.volume = 0;
			eachMonth.volume += d.volume;
	
			eachMonth = (0, _objectAssign2["default"])({}, d, eachMonth);
	
			if (d.startOfMonth) {
				eachMonth.startOfWeek = d.startOfWeek;
				if (prevMonth) {
					eachMonth.trueRange = Math.max(eachMonth.high - eachMonth.low, eachMonth.high - prevMonth.close, eachMonth.low - prevMonth.close);
				}
				prevMonth = eachMonth;
				monthly.push(eachMonth);
				eachMonth = {};
			}
		}
		return monthly;
	}
	
	function StockscaleTransformer() {
		var newOptions;
		function transform(data, interval) {
			var _newOptions = newOptions;
			var dateAccessor = _newOptions.dateAccessor;
			var dateMutator = _newOptions.dateMutator;
			var indexMutator = _newOptions.indexMutator;
	
			var prevDate;
			var responseData = {};
			var dd = data[interval];
			responseData.D = dd.map(function (each, i) {
				var row = {};
				Object.keys(each).forEach(function (key) {
					row[key] = each[key];
				});
				indexMutator(row, i);
	
				row.startOfWeek = false;
				row.startOfMonth = false;
				row.startOfQuarter = false;
				row.startOfYear = false;
				var date = dateAccessor(row);
	
				if (prevDate !== undefined) {
					// According to ISO calendar
					// Sunday = 0, Monday = 1, ... Saturday = 6
					// day of week of today < day of week of yesterday then today is start of week
					row.startOfWeek = date.getDay() < prevDate.getDay();
					// month of today != month of yesterday then today is start of month
					row.startOfMonth = date.getMonth() !== prevDate.getMonth();
					// if start of month and month % 3 === 0 then it is start of quarter
					row.startOfQuarter = row.startOfMonth && date.getMonth() % 3 === 0;
					// year of today != year of yesterday then today is start of year
					row.startOfYear = date.getYear() !== prevDate.getYear();
				}
				prevDate = date;
				return row;
			});
			// console.table(responseData);
			responseData.W = buildWeeklyData(responseData.D, indexMutator, dateAccessor, dateMutator);
			responseData.M = buildMonthlyData(responseData.D, indexMutator, dateAccessor, dateMutator);
			return responseData;
		};
	
		transform.options = function (opt) {
			newOptions = (0, _objectAssign2["default"])({}, defaultOptions, opt);
			newOptions.xAccessor = newOptions.indexAccessor;
			newOptions.xScale = (0, _scalePolylineartimescale2["default"])(newOptions.xAccessor);
			return newOptions;
		};
		return transform;
	}
	
	module.exports = StockscaleTransformer;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _MovingAverageCalculator = __webpack_require__(21);
	
	var _MovingAverageCalculator2 = _interopRequireDefault(_MovingAverageCalculator);
	
	var OverlayUtils = {
		getToolTipLabel: function getToolTipLabel(props) {
			if (props.type === "sma" || props.type === "ema") {
				var tooltip = props.type.toUpperCase() + "(" + props.options.period + ")";
				return tooltip;
			}
			return "N/A";
		}, /*
	    getYAccessor(chartId, props) {
	    if (props.type === "sma" || props.type === "ema") {
	    var key = props.type + props.options.period + "_chart_" + chartId;
	    return (d) => d[key];
	    }
	    return false;
	    },*/
		getYAccessorKey: function getYAccessorKey(chartId, props) {
			if (props.type === "sma" || props.type === "ema") {
				var key = props.type + props.options.period + "_chart_" + chartId;
				return key;
			}
			return false;
		},
		firstDefined: function firstDefined(data, accessor) {
			var each;
			for (var i = 0; i < data.length; i++) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			}
			return _utils2["default"].cloneMe(each);
		},
		lastDefined: function lastDefined(data, accessor) {
			var each;
			for (var i = data.length - 1; i >= 0; i--) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			}
			return _utils2["default"].cloneMe(each);
		}
	};
	
	module.exports = OverlayUtils;

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";
	
	function pushToValues(values, eachValue) {
		if (typeof eachValue === "object" && Object.keys(eachValue).length > 0) {
			Object.keys(eachValue).forEach(function (key) {
				if (!isNaN(eachValue[key])) {
					values.push(eachValue[key]);
				}
			});
		} else {
			if (!isNaN(eachValue)) {
				values.push(eachValue);
			}
		}
	}
	
	var ScaleUtils = {
		flattenData: function flattenData(data, xAccessors, yAccessors) {
			// console.log(xAccessors, yAccessors);
			var xValues = [];
			var yValues = [];
			data.forEach(function (row) {
				xAccessors.forEach(function (xAccessor) {
					var x = xAccessor(row);
					if (x !== undefined) {
						pushToValues(xValues, x);
					}
				});
				yAccessors.forEach(function (yAccessor) {
					var y = yAccessor(row);
					if (y !== undefined) {
						pushToValues(yValues, y);
					}
				});
			});
			return {
				xValues: xValues,
				yValues: yValues
			};
		}
	};
	
	module.exports = ScaleUtils;

/***/ },
/* 128 */
/***/ function(module, exports) {

	(function() {
	  var out$ = typeof exports != 'undefined' && exports || this;
	
	  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
	
	  function isExternal(url) {
	    return url && url.lastIndexOf('http',0) == 0 && url.lastIndexOf(window.location.host) == -1;
	  }
	
	  function inlineImages(el, callback) {
	    var images = el.querySelectorAll('image');
	    var left = images.length;
	    if (left == 0) {
	      callback();
	    }
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
	        img.src = href;
	        img.onload = function() {
	          canvas.width = img.width;
	          canvas.height = img.height;
	          ctx.drawImage(img, 0, 0);
	          image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
	          left--;
	          if (left == 0) {
	            callback();
	          }
	        }
	        img.onerror = function() {
	          console.log("Could not load "+href);
	          left--;
	          if (left == 0) {
	            callback();
	          }
	        }
	      })(images[i]);
	    }
	  }
	
	  function styles(el, selectorRemap) {
	    var css = "";
	    var sheets = document.styleSheets;
	    for (var i = 0; i < sheets.length; i++) {
	      if (isExternal(sheets[i].href)) {
	        console.warn("Cannot include styles from other hosts: "+sheets[i].href);
	        continue;
	      }
	      var rules = sheets[i].cssRules;
	      if (rules != null) {
	        for (var j = 0; j < rules.length; j++) {
	          var rule = rules[j];
	          if (typeof(rule.style) != "undefined") {
	            var match = null;
	            try {
	              match = el.querySelector(rule.selectorText);
	            } catch(err) {
	              console.warn('Invalid CSS selector "' + rule.selectorText + '"', err);
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
	    return (clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim))) ||
	      el.getBoundingClientRect()[dim] ||
	      parseInt(clone.style[dim]) ||
	      parseInt(window.getComputedStyle(el).getPropertyValue(dim));
	  }
	
	  out$.svgAsDataUri = function(el, options, cb) {
	    options = options || {};
	    options.scale = options.scale || 1;
	    var xmlns = "http://www.w3.org/2000/xmlns/";
	
	    inlineImages(el, function() {
	      var outer = document.createElement("div");
	      var clone = el.cloneNode(true);
	      var width, height, viewBoxWidth, viewBoxHeight;
	      if(el.tagName == 'svg') {
	        width = getDimension(el, clone, 'width');
	        height = getDimension(el, clone, 'height');
	        if (typeof width === "undefined" || width === null || isNaN(parseFloat(width))) {
	          width = 0;
	        }
	        if (typeof height === "undefined" || height === null || isNaN(parseFloat(height))) {
	          height = 0;
	        }
	        viewBoxWidth = el.viewBox.baseVal && el.viewBox.baseVal.width !== 0 ? el.viewBox.baseVal.width : width;
	        viewBoxHeight = el.viewBox.baseVal && el.viewBox.baseVal.height !== 0 ? el.viewBox.baseVal.height : height;
	      } else {
	        var box = el.getBBox();
	        width = box.x + box.width;
	        height = box.y + box.height;
	        clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));
	        viewBoxWidth = width;
	        viewBoxHeight =  height;
	
	        var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
	        svg.appendChild(clone)
	        clone = svg;
	      }
	
	      clone.setAttribute("version", "1.1");
	      clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
	      clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
	      clone.setAttribute("width", width * options.scale);
	      clone.setAttribute("height", height * options.scale);
	      clone.setAttribute("viewBox", "0 0 " + viewBoxWidth + " " + viewBoxHeight);
	
	      outer.appendChild(clone);
	
	      var css = styles(el, options.selectorRemap);
	      var s = document.createElement('style');
	      s.setAttribute('type', 'text/css');
	      s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
	      var defs = document.createElement('defs');
	      defs.appendChild(s);
	      clone.insertBefore(defs, clone.firstChild);
	
	      var svg = doctype + outer.innerHTML;
	      // encode then decode to handle `btoa` on Unicode; see MDN for `btoa`.
	      var uri = 'data:image/svg+xml;base64,' + window.btoa(decodeURIComponent(encodeURIComponent(svg)));
	      if (cb) {
	        cb(uri);
	      }
	    });
	  }
	
	  out$.saveSvgAsPng = function(el, name, options) {
	    options = options || {};
	    out$.svgAsDataUri(el, options, function(uri) {
	      var image = new Image();
	      image.onload = function() {
	        var canvas = document.createElement('canvas');
	        canvas.width = image.width;
	        canvas.height = image.height;
	        var context = canvas.getContext('2d');
	        context.drawImage(image, 0, 0);
	
	        var a = document.createElement('a');
	        a.download = name;
	        a.href = canvas.toDataURL('image/png');
	        document.body.appendChild(a);
	        a.addEventListener("click", function(e) {
	          a.parentNode.removeChild(a);
	        });
	        a.click();
	      }
	      image.src = uri;
	    });
	  }
	})();


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ContentSection = (function (_Component) {
		_inherits(ContentSection, _Component);
	
		function ContentSection() {
			_classCallCheck(this, ContentSection);
	
			_get(Object.getPrototypeOf(ContentSection.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ContentSection, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: (this.props.rightPane ? "" : "expanded") + " page-mainarea" },
					this.props.children
				);
			}
		}]);
	
		return ContentSection;
	})(_react.Component);
	
	ContentSection.propTypes = {
		rightPane: _react.PropTypes.bool.isRequired
	};
	
	exports["default"] = ContentSection;
	module.exports = exports["default"];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _actionsPageActions = __webpack_require__(31);
	
	var PageActions = _interopRequireWildcard(_actionsPageActions);
	
	var PageContainer = function PageContainer(props) {
		var classes = (0, _classnames2["default"])({
			"page-container": true,
			"leftnav-hide": props.hideLeftNav,
			"header-hide": props.hideHeader
		});
	
		return _react2["default"].createElement(
			"div",
			{ className: classes },
			props.children
		);
	};
	
	exports["default"] = PageContainer;
	module.exports = exports["default"];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AccountAreaContainer = __webpack_require__(132);
	
	var _AccountAreaContainer2 = _interopRequireDefault(_AccountAreaContainer);
	
	var _Announcement = __webpack_require__(134);
	
	var _Announcement2 = _interopRequireDefault(_Announcement);
	
	var _Alerts = __webpack_require__(133);
	
	var _Alerts2 = _interopRequireDefault(_Alerts);
	
	var _MarqueeArea = __webpack_require__(138);
	
	var _MarqueeArea2 = _interopRequireDefault(_MarqueeArea);
	
	var _Profile = __webpack_require__(139);
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	var AccountArea = function AccountArea(props) {
		return _react2["default"].createElement(
			_AccountAreaContainer2["default"],
			null,
			_react2["default"].createElement(
				"ul",
				{ className: "account-area" },
				_react2["default"].createElement(_Announcement2["default"], null),
				_react2["default"].createElement(_Alerts2["default"], null),
				_react2["default"].createElement(_MarqueeArea2["default"], null),
				_react2["default"].createElement(_Profile2["default"], null)
			)
		);
	};
	
	exports["default"] = AccountArea;
	module.exports = exports["default"];
	/* new features, breaking news */ /* algorithm progress updates */ /* sparkline of BSE, NSE rotate to time of day, Fav stocks */ /* change theme, Signout, Go to profile page */

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var AccountAreaContainer = function AccountAreaContainer(_ref) {
		var children = _ref.children;
		return _react2["default"].createElement(
			"div",
			{ className: "navbar-header pull-right" },
			_react2["default"].createElement(
				"div",
				{ className: "navbar-account" },
				children
			)
		);
	};
	
	exports["default"] = AccountAreaContainer;
	module.exports = exports["default"];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Alerts = function Alerts(props) {
		return _react2["default"].createElement(
			"li",
			null,
			_react2["default"].createElement(
				"a",
				{ href: "#", title: "Help", className: "dropdown-toggle" },
				_react2["default"].createElement("i", { className: " icon fa fa-warning" }),
				_react2["default"].createElement(
					"span",
					{ className: "pulse animated infinite badge" },
					"4"
				)
			)
		);
	};
	
	exports["default"] = Alerts;
	module.exports = exports["default"];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Announcement = function Announcement(props) {
		return _react2["default"].createElement(
			"li",
			null,
			_react2["default"].createElement(
				"a",
				{ href: "#", title: "Help", className: " dropdown-toggle" },
				_react2["default"].createElement("i", { className: "icon fa fa-bullhorn" })
			)
		);
	};
	
	exports["default"] = Announcement;
	module.exports = exports["default"];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Brand = function Brand(props) {
		return _react2["default"].createElement(
			"div",
			{ className: "navbar-header pull-left" },
			_react2["default"].createElement(
				"a",
				{ href: "#", className: "navbar-brand" },
				_react2["default"].createElement(
					"big",
					null,
					"Chart XL"
				)
			)
		);
	};
	
	exports["default"] = Brand;
	module.exports = exports["default"];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HeaderContainer = __webpack_require__(137);
	
	var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);
	
	var _Brand = __webpack_require__(135);
	
	var _Brand2 = _interopRequireDefault(_Brand);
	
	var _SideBarCollapse = __webpack_require__(140);
	
	var _SideBarCollapse2 = _interopRequireDefault(_SideBarCollapse);
	
	var _AccountArea = __webpack_require__(131);
	
	var _AccountArea2 = _interopRequireDefault(_AccountArea);
	
	var Header = function Header(props) {
		return _react2["default"].createElement(
			_HeaderContainer2["default"],
			null,
			_react2["default"].createElement(_Brand2["default"], null),
			_react2["default"].createElement(_SideBarCollapse2["default"], null),
			_react2["default"].createElement(_AccountArea2["default"], null)
		);
	};
	
	exports["default"] = Header;
	module.exports = exports["default"];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var HeaderContainer = function HeaderContainer(_ref) {
		var children = _ref.children;
		return _react2["default"].createElement(
			"div",
			{ className: "navbar" },
			_react2["default"].createElement(
				"div",
				{ className: "navbar-inner" },
				_react2["default"].createElement(
					"div",
					{ className: "navbar-container" },
					children
				)
			)
		);
	};
	
	exports["default"] = HeaderContainer;
	module.exports = exports["default"];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var slideInterval = 10 * 1000; // 10s
	function slideRight(carousel) {
		var item_width = carousel.find("li").outerWidth();
		var left_indent = parseInt(carousel.css("left")) - item_width;
	
		// make the sliding effect using jQuery's animate function... '
		carousel.not(":animated").animate({ "left": left_indent }, 1000, function () {
			/* when the animation finishes use the if statement again, and make an ilussion
	  of infinity by changing place of last or first item */
			// ...and if it slided to right we put the first item after the last item
			carousel.children("li:last").after(carousel.children("li:first"));
			// ...and then just get back the default left indent
			carousel.css({ "left": "-200px" });
		});
	}
	
	var date = new Date();
	
	var MarqueeArea = (function (_React$Component) {
		_inherits(MarqueeArea, _React$Component);
	
		function MarqueeArea() {
			_classCallCheck(this, MarqueeArea);
	
			_get(Object.getPrototypeOf(MarqueeArea.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(MarqueeArea, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var carousel = $(this.refs.marqeeArea).find("#carousel");
				function defineTimer() {
					var timer = setInterval(function () {
						date = new Date();
						slideRight(carousel);
					}, slideInterval);
					return timer;
				}
				var timer = defineTimer();
	
				carousel.hover(function () {
					// stop the interval
					clearInterval(timer);
				}, function () {
					// and when mouseout start it again
					timer = defineTimer();
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"li",
					{ ref: "marqeeArea", className: "marqee-area" },
					_react2["default"].createElement(
						"ul",
						{ id: "carousel" },
						_react2["default"].createElement(
							"li",
							null,
							date.toTimeString()
						),
						_react2["default"].createElement(
							"li",
							null,
							"NSE sparkline here"
						),
						_react2["default"].createElement(
							"li",
							null,
							"BSE sparkline here"
						),
						_react2["default"].createElement(
							"li",
							null,
							"Fav Stock #1"
						)
					)
				);
			}
		}]);
	
		return MarqueeArea;
	})(_react2["default"].Component);
	
	exports["default"] = MarqueeArea;
	module.exports = exports["default"];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Profile = function Profile(props) {
		return _react2["default"].createElement(
			"li",
			null,
			_react2["default"].createElement(
				"a",
				{ href: "#", title: "Help", className: " dropdown-toggle" },
				_react2["default"].createElement("i", { className: "icon glyphicon glyphicon-user" })
			)
		);
	};
	
	exports["default"] = Profile;
	module.exports = exports["default"];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var SideBarCollapse = function SideBarCollapse(props) {
		return _react2["default"].createElement(
			"div",
			{ className: "sidebar-collapse", id: "sidebar-collapse" },
			_react2["default"].createElement("i", { className: "collapse-icon fa fa-bars" })
		);
	};
	
	exports["default"] = SideBarCollapse;
	module.exports = exports["default"];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _Header = __webpack_require__(136);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	;
	
	exports["default"] = _Header2["default"];
	module.exports = exports["default"];

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _PageContainer = __webpack_require__(130);
	
	var _PageContainer2 = _interopRequireDefault(_PageContainer);
	
	var _ContentSection = __webpack_require__(129);
	
	var _ContentSection2 = _interopRequireDefault(_ContentSection);
	
	var _header = __webpack_require__(141);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _leftnav = __webpack_require__(150);
	
	var _leftnav2 = _interopRequireDefault(_leftnav);
	
	var _rightpane = __webpack_require__(169);
	
	var _rightpane2 = _interopRequireDefault(_rightpane);
	
	var _page = __webpack_require__(167);
	
	var _page2 = _interopRequireDefault(_page);
	
	exports["default"] = {
		PageContainer: _PageContainer2["default"],
		ContentSection: _ContentSection2["default"],
		Header: _header2["default"],
		LeftNav: _leftnav2["default"],
		RightPane: _rightpane2["default"],
		Pages: _page2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LeftNavContainer = __webpack_require__(144);
	
	var _LeftNavContainer2 = _interopRequireDefault(_LeftNavContainer);
	
	var _NavItemCharts = __webpack_require__(146);
	
	var _NavItemCharts2 = _interopRequireDefault(_NavItemCharts);
	
	var _NavItemAlgorithm = __webpack_require__(145);
	
	var _NavItemAlgorithm2 = _interopRequireDefault(_NavItemAlgorithm);
	
	var _NavItemManageAlerts = __webpack_require__(149);
	
	var _NavItemManageAlerts2 = _interopRequireDefault(_NavItemManageAlerts);
	
	var _NavItemContactUs = __webpack_require__(148);
	
	var _NavItemContactUs2 = _interopRequireDefault(_NavItemContactUs);
	
	var _NavItemComingSoon = __webpack_require__(147);
	
	var _NavItemComingSoon2 = _interopRequireDefault(_NavItemComingSoon);
	
	var LeftNav = function LeftNav(props) {
		return _react2["default"].createElement(
			_LeftNavContainer2["default"],
			null,
			_react2["default"].createElement(_NavItemCharts2["default"], { size: props.size }),
			_react2["default"].createElement(_NavItemAlgorithm2["default"], { size: props.size }),
			_react2["default"].createElement(_NavItemManageAlerts2["default"], { size: props.size }),
			_react2["default"].createElement(_NavItemContactUs2["default"], { size: props.size }),
			_react2["default"].createElement(_NavItemComingSoon2["default"], { size: props.size })
		);
	};
	
	LeftNav.propTypes = {
		size: _react.PropTypes.number
	};
	
	exports["default"] = LeftNav;
	module.exports = exports["default"];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var LeftNavContainer = function LeftNavContainer(props) {
		return _react2["default"].createElement(
			"div",
			{ className: "sidebar-left" },
			_react2["default"].createElement(
				"ul",
				{ className: "nav nav-sidebar" },
				props.children
			)
		);
	};
	
	exports["default"] = LeftNavContainer;
	module.exports = exports["default"];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NavItemAlgorithm = (function (_React$Component) {
		_inherits(NavItemAlgorithm, _React$Component);
	
		function NavItemAlgorithm() {
			_classCallCheck(this, NavItemAlgorithm);
	
			_get(Object.getPrototypeOf(NavItemAlgorithm.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(NavItemAlgorithm, [{
			key: "handleClick",
			value: function handleClick() {
				console.log("Algorithm");
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"li",
					{ className: "var_nav", onClick: this.handleClick },
					_react2["default"].createElement("div", { className: "link_bg" }),
					_react2["default"].createElement(
						"div",
						{ className: "link_title" },
						_react2["default"].createElement(
							"div",
							{ className: "icon" },
							_react2["default"].createElement("i", { className: "fa fa-code fa-2x" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "title" },
							_react2["default"].createElement(
								"a",
								{ href: "#" },
								_react2["default"].createElement(
									"span",
									null,
									"Algorithm"
								)
							)
						)
					)
				);
			}
		}]);
	
		return NavItemAlgorithm;
	})(_react2["default"].Component);
	
	exports["default"] = NavItemAlgorithm;
	module.exports = exports["default"];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NavItemCharts = (function (_React$Component) {
		_inherits(NavItemCharts, _React$Component);
	
		function NavItemCharts() {
			_classCallCheck(this, NavItemCharts);
	
			_get(Object.getPrototypeOf(NavItemCharts.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(NavItemCharts, [{
			key: "handleClick",
			value: function handleClick() {
				console.log("Charts");
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"li",
					{ className: "var_nav", onClick: this.handleClick },
					_react2["default"].createElement("div", { className: "link_bg" }),
					_react2["default"].createElement(
						"div",
						{ className: "link_title" },
						_react2["default"].createElement(
							"div",
							{ className: "icon" },
							_react2["default"].createElement("i", { className: "fa fa-area-chart fa-2x" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "title" },
							_react2["default"].createElement(
								"a",
								{ href: "#" },
								_react2["default"].createElement(
									"span",
									null,
									"Charts"
								)
							)
						)
					)
				);
			}
		}]);
	
		return NavItemCharts;
	})(_react2["default"].Component);
	
	exports["default"] = NavItemCharts;
	module.exports = exports["default"];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NavItemComingSoon = (function (_React$Component) {
		_inherits(NavItemComingSoon, _React$Component);
	
		function NavItemComingSoon() {
			_classCallCheck(this, NavItemComingSoon);
	
			_get(Object.getPrototypeOf(NavItemComingSoon.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(NavItemComingSoon, [{
			key: "handleClick",
			value: function handleClick() {
				console.log("Charts");
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"li",
					{ className: "var_nav", onClick: this.handleClick },
					_react2["default"].createElement("div", { className: "link_bg" }),
					_react2["default"].createElement(
						"div",
						{ className: "link_title" },
						_react2["default"].createElement(
							"div",
							{ className: "icon" },
							_react2["default"].createElement("i", { className: "fa fa-bullhorn fa-2x" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "title" },
							_react2["default"].createElement(
								"a",
								{ href: "#" },
								_react2["default"].createElement(
									"span",
									null,
									"Coming soon..."
								)
							)
						)
					)
				);
			}
		}]);
	
		return NavItemComingSoon;
	})(_react2["default"].Component);
	
	exports["default"] = NavItemComingSoon;
	module.exports = exports["default"];

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NavItemContactUs = (function (_React$Component) {
		_inherits(NavItemContactUs, _React$Component);
	
		function NavItemContactUs() {
			_classCallCheck(this, NavItemContactUs);
	
			_get(Object.getPrototypeOf(NavItemContactUs.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(NavItemContactUs, [{
			key: "handleClick",
			value: function handleClick() {
				console.log("Charts");
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"li",
					{ className: "var_nav", onClick: this.handleClick },
					_react2["default"].createElement("div", { className: "link_bg" }),
					_react2["default"].createElement(
						"div",
						{ className: "link_title" },
						_react2["default"].createElement(
							"div",
							{ className: "icon" },
							_react2["default"].createElement("i", { className: "fa fa-phone fa-2x" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "title" },
							_react2["default"].createElement(
								"a",
								{ href: "#" },
								_react2["default"].createElement(
									"span",
									null,
									"Contact us"
								)
							)
						)
					)
				);
			}
		}]);
	
		return NavItemContactUs;
	})(_react2["default"].Component);
	
	exports["default"] = NavItemContactUs;
	module.exports = exports["default"];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NavItemManageAlerts = (function (_React$Component) {
		_inherits(NavItemManageAlerts, _React$Component);
	
		function NavItemManageAlerts() {
			_classCallCheck(this, NavItemManageAlerts);
	
			_get(Object.getPrototypeOf(NavItemManageAlerts.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(NavItemManageAlerts, [{
			key: "handleClick",
			value: function handleClick() {
				console.log("Charts");
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"li",
					{ className: "var_nav", onClick: this.handleClick },
					_react2["default"].createElement("div", { className: "link_bg" }),
					_react2["default"].createElement(
						"div",
						{ className: "link_title" },
						_react2["default"].createElement(
							"div",
							{ className: "icon" },
							_react2["default"].createElement("i", { className: "fa fa-bell-o fa-2x" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "title" },
							_react2["default"].createElement(
								"a",
								{ href: "#" },
								_react2["default"].createElement(
									"span",
									null,
									"Manage alerts"
								)
							)
						)
					)
				);
			}
		}]);
	
		return NavItemManageAlerts;
	})(_react2["default"].Component);
	
	exports["default"] = NavItemManageAlerts;
	module.exports = exports["default"];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _LeftNav = __webpack_require__(143);
	
	var _LeftNav2 = _interopRequireDefault(_LeftNav);

	exports["default"] = _LeftNav2["default"];
	module.exports = exports["default"];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(11);
	
	var _reactRedux = __webpack_require__(20);
	
	var _actionsPageActions = __webpack_require__(31);
	
	var PageActions = _interopRequireWildcard(_actionsPageActions);
	
	var EscHandler = (function (_Component) {
		_inherits(EscHandler, _Component);
	
		function EscHandler(props) {
			_classCallCheck(this, EscHandler);
	
			_get(Object.getPrototypeOf(EscHandler.prototype), "constructor", this).call(this, props);
			this.handleEscKeyPress = this.handleEscKeyPress.bind(this);
			this.handleClick = this.handleClick.bind(this);
		}
	
		_createClass(EscHandler, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("keyup", this.handleEscKeyPress);
				window.addEventListener("mousedown", this.handleClick);
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				window.removeEventListener("keyup", this.handleEscKeyPress);
				window.removeEventListener("mousedown", this.handleClick);
			}
		}, {
			key: "handleEscKeyPress",
			value: function handleEscKeyPress(e) {
				if (this.props.enabled && event.keyCode === 27) {
					this.props.escape();
					// let { dispatch } = this.props;
					// let actions = bindActionCreators(PageActions, dispatch);
					// actions.escape();
				}
			}
		}, {
			key: "handleClick",
			value: function handleClick(e) {
				var self = this.refs.container;
				var target = e.target;
				if (this.props.enabled && !self.contains(target)) {
					e.preventDefault();
					this.props.escape();
				}
			}
		}, {
			key: "render",
			value: function render() {
				// console.log(this.props);
				return _react2["default"].createElement(
					"div",
					{ ref: "container", className: "gcrow" },
					this.props.children
				);
			}
		}]);
	
		return EscHandler;
	})(_react.Component);
	
	EscHandler.propTypes = {
		enabled: _react.PropTypes.bool.isRequired
	};
	
	function mapDispatchToProps(dispatch) {
		return (0, _redux.bindActionCreators)(PageActions, dispatch);
	}
	
	exports["default"] = (0, _reactRedux.connect)(null, mapDispatchToProps)(EscHandler);
	module.exports = exports["default"];

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(20);
	
	var _redux = __webpack_require__(11);
	
	var _actionsPageActions = __webpack_require__(31);
	
	var PageActions = _interopRequireWildcard(_actionsPageActions);
	
	var HideRight = (function (_React$Component) {
		_inherits(HideRight, _React$Component);
	
		function HideRight() {
			_classCallCheck(this, HideRight);
	
			_get(Object.getPrototypeOf(HideRight.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(HideRight, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var rightPane = _props.rightPane;
				var toggleRightPane = _props.toggleRightPane;
	
				var d = rightPane ? "M 15 4 L 26 15 L 15 26" : "M 15 4 L 4 15 L 15 26";
				return _react2["default"].createElement(
					"div",
					{ className: "hideRight", onClick: toggleRightPane },
					_react2["default"].createElement(
						"svg",
						{ height: "30", width: "30" },
						_react2["default"].createElement("line", { x1: "4", y1: "15", x2: "26", y2: "15", stroke: "black", strokeWidth: "4" }),
						_react2["default"].createElement("path", { d: d, stroke: "black", strokeWidth: "4" })
					)
				);
			}
		}]);
	
		return HideRight;
	})(_react2["default"].Component);
	
	HideRight.propTypes = {
		rightPane: _react.PropTypes.bool.isRequired
	};
	
	function mapDispatchToProps(dispatch) {
		return { toggleRightPane: (0, _redux.bindActionCreators)(PageActions.toggleRightPane, dispatch) };
	}
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
		return state;
	}, mapDispatchToProps)(HideRight);
	
	// 					<path d="M 15 4 L 26 15 L 15 26" stroke="black" strokeWidth="4" />
	// 					<path d="M 15 4 L 4 15 L 15 26" stroke="black" strokeWidth="4" />
	module.exports = exports["default"];

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var BackgroundText = (function (_React$Component) {
		_inherits(BackgroundText, _React$Component);
	
		function BackgroundText() {
			_classCallCheck(this, BackgroundText);
	
			_get(Object.getPrototypeOf(BackgroundText.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(BackgroundText, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var x = _props.x;
				var y = _props.y;
				var height = _props.height;
				var security = _props.security;
				var interval = this.context.interval;
	
				return _react2["default"].createElement(
					"text",
					{ x: x, y: y,
						opacity: 0.4,
						fontSize: 0.08 * height,
						fill: "steelblue",
						textAnchor: "middle" },
					security + "(NASDAQ), " + interval
				);
			}
		}]);
	
		return BackgroundText;
	})(_react2["default"].Component);
	
	BackgroundText.contextTypes = {
		interval: _react2["default"].PropTypes.string.isRequired
	};
	
	exports["default"] = BackgroundText;
	module.exports = exports["default"];

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(11);
	
	var _reactRedux = __webpack_require__(20);
	
	var _SecuritySearchSelector = __webpack_require__(164);
	
	var _SecuritySearchSelector2 = _interopRequireDefault(_SecuritySearchSelector);
	
	var _ChartTypeSelector = __webpack_require__(159);
	
	var _ChartTypeSelector2 = _interopRequireDefault(_ChartTypeSelector);
	
	var _Indicators = __webpack_require__(162);
	
	var _Indicators2 = _interopRequireDefault(_Indicators);
	
	var _ChartSettings = __webpack_require__(158);
	
	var _ChartSettings2 = _interopRequireDefault(_ChartSettings);
	
	var _ChartWidget = __webpack_require__(160);
	
	var _ChartWidget2 = _interopRequireDefault(_ChartWidget);
	
	var _SettingsModal = __webpack_require__(165);
	
	var _SettingsModal2 = _interopRequireDefault(_SettingsModal);
	
	var _componentsMiscEscHandler = __webpack_require__(151);
	
	var _componentsMiscEscHandler2 = _interopRequireDefault(_componentsMiscEscHandler);
	
	var _actionsChartPageActions = __webpack_require__(30);
	
	var ChartPageActions = _interopRequireWildcard(_actionsChartPageActions);
	
	var ChartComponent = (function (_Component) {
		_inherits(ChartComponent, _Component);
	
		function ChartComponent(props) {
			_classCallCheck(this, ChartComponent);
	
			_get(Object.getPrototypeOf(ChartComponent.prototype), "constructor", this).call(this, props);
			this.handleIndicatorSettingsChange = this.handleIndicatorSettingsChange.bind(this);
			this.handleChartSettingsChange = this.handleChartSettingsChange.bind(this);
			// this.getDimensions = this.getDimensions.bind(this);
		}
	
		_createClass(ChartComponent, [{
			key: "handleSecuritySelect",
			value: function handleSecuritySelect(exchange, security) {
				var actions = this.props.actions;
	
				// actions.securitySearch(this.props.index, query)
				console.log(exchange, security);
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				var updateComponent = true;
				if (!this.props.resized && nextProps.resized) updateComponent = false;
				return updateComponent;
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				var _props = this.props;
				var data = _props.data;
				var actions = _props.actions;
				var index = _props.index;
				var securitySelector = _props.securitySelector;
				var security = securitySelector.security;
				var exchange = securitySelector.exchange;
	
				if (!data) actions.loadData(index, security, exchange);
			}
		}, {
			key: "componentWillUpdate",
			value: function componentWillUpdate() {
				var _props2 = this.props;
				var data = _props2.data;
				var actions = _props2.actions;
				var index = _props2.index;
				var securitySelector = _props2.securitySelector;
				var security = securitySelector.security;
				var exchange = securitySelector.exchange;
	
				// if (!data) actions.loadData(index, security, exchange);
			}
		}, {
			key: "handleChartSettingsChange",
			value: function handleChartSettingsChange(chartType, options) {
				var _props3 = this.props;
				var actions = _props3.actions;
				var index = _props3.index;
	
				// console.log(chartType, options);
				actions.showChartSettings(index, options);
			}
		}, {
			key: "handleIndicatorSettingsChange",
			value: function handleIndicatorSettingsChange(reference, options) {
				var _props4 = this.props;
				var actions = _props4.actions;
				var index = _props4.index;
	
				actions.showChartIndicatorSettings(index, reference, options);
			}
		}, {
			key: "render",
			value: function render() {
				var _props5 = this.props;
				var securitySelector = _props5.securitySelector;
				var chartSelector = _props5.chartSelector;
				var indicators = _props5.indicators;
				var chartSettings = _props5.chartSettings;
				var showSettings = _props5.showSettings;
				var settings = _props5.settings;
				var settingsType = _props5.settingsType;
				var _props6 = this.props;
				var actions = _props6.actions;
				var index = _props6.index;
				var width = _props6.width;
				var height = _props6.height;
				var resized = _props6.resized;
				var exchangeSelectDropDownToggle = actions.exchangeSelectDropDownToggle;
				var exchangeSelect = actions.exchangeSelect;
				var securityFocus = actions.securityFocus;
				var securitySearch = actions.securitySearch;
				var chartTypeSelectDropDownToggle = actions.chartTypeSelectDropDownToggle;
				var chartTypeSelect = actions.chartTypeSelect;
				var data = this.props.data;
				var indicatorsDropDownToggle = actions.indicatorsDropDownToggle;
				var addIndicator = actions.addIndicator;
				var removeIndicator = actions.removeIndicator;
				var updateChartIndicatorSettings = actions.updateChartIndicatorSettings;
				var showChartSettings = actions.showChartSettings;
				var closeChartIndicatorSettings = actions.closeChartIndicatorSettings;
				var settingsDropDownToggle = actions.settingsDropDownToggle;
				var changeSettings = actions.changeSettings;
				var changeChartSettings = actions.changeChartSettings;
	
				var widget = !data ? _react2["default"].createElement(
					"div",
					null,
					"Loading..."
				) : _react2["default"].createElement(_ChartWidget2["default"], {
					width: width, height: height,
					data: data,
					indicators: indicators.list,
					type: chartSelector.chartType,
					transforms: chartSelector.transforms,
					settings: chartSelector.options,
					exchange: securitySelector.exchange,
					security: securitySelector.security,
					grid: chartSettings.settings.showGrid,
					onIndicatorSettingsChange: this.handleIndicatorSettingsChange,
					onChartSettingsChange: this.handleChartSettingsChange });
	
				var settingsModal = showSettings ? _react2["default"].createElement(_SettingsModal2["default"], { title: "Change Settings",
					settingsType: settingsType, chartType: chartSelector.chartType,
					onSubmit: updateChartIndicatorSettings.bind(null, index),
					onChartSettingsChange: changeChartSettings.bind(null, index, chartSelector.chartType),
					onDestroy: removeIndicator.bind(null, index, settings),
					onClose: closeChartIndicatorSettings.bind(null, index),
					options: settings }) : null;
				return _react2["default"].createElement(
					"div",
					{ className: this.props.layout + " chart-component" },
					_react2["default"].createElement(
						_componentsMiscEscHandler2["default"],
						_extends({ enabled: securitySelector.showExchangeSelectorDropDown || securitySelector.focus || chartSelector.showDropDown || indicators.showDropDown || chartSettings.showDropDown }, this.props.pageActions),
						_react2["default"].createElement(_ChartTypeSelector2["default"], _extends({}, chartSelector, {
							onDropDownToggle: chartTypeSelectDropDownToggle.bind(null, index, !chartSelector.showDropDown),
							onChartTypeSelect: chartTypeSelect.bind(null, index) })),
						_react2["default"].createElement(_Indicators2["default"], _extends({}, indicators, {
							onDropDownToggle: indicatorsDropDownToggle.bind(null, index, !indicators.showDropDown),
							onIndicatorAdd: addIndicator.bind(null, index) })),
						_react2["default"].createElement(_ChartSettings2["default"], _extends({}, chartSettings, {
							onDropDownToggle: settingsDropDownToggle.bind(null, index, !chartSettings.showDropDown),
							onChangeSettings: changeSettings.bind(null, index) })),
						" />"
					),
					_react2["default"].createElement(
						"div",
						{ className: "chart-widget" },
						widget
					),
					settingsModal
				);
			}
		}]);
	
		return ChartComponent;
	})(_react.Component);
	
	ChartComponent.propTypes = {
		index: _react.PropTypes.number.isRequired,
		securitySelector: _react.PropTypes.object.isRequired,
		chartSelector: _react.PropTypes.object.isRequired,
		indicators: _react.PropTypes.object.isRequired,
		chartSettings: _react.PropTypes.object.isRequired,
		actions: _react.PropTypes.object.isRequired
	};
	
	function mapDispatchToProps(dispatch) {
		return { actions: (0, _redux.bindActionCreators)(ChartPageActions, dispatch) };
	}
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
		return state;
	}, mapDispatchToProps)(ChartComponent);
	module.exports = exports["default"];
	/* <SecuritySearchSelector {...securitySelector}
	onDropDownToggle={exchangeSelectDropDownToggle.bind(null, index, !securitySelector.showExchangeSelectorDropDown)}
	onExchangeSelect={exchangeSelect.bind(null, index)}
	onSecurityFocus={securityFocus.bind(null, index)}
	onSecuritySearch={securitySearch.bind(null, index)} 
	onSecuritySelect={this.handleSecuritySelect} /> */

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(11);
	
	var _reactRedux = __webpack_require__(20);
	
	var _actionsChartPageActions = __webpack_require__(30);
	
	var ChartPageActions = _interopRequireWildcard(_actionsChartPageActions);
	
	var ChartComponentLayoutChooser = (function (_React$Component) {
		_inherits(ChartComponentLayoutChooser, _React$Component);
	
		function ChartComponentLayoutChooser() {
			_classCallCheck(this, ChartComponentLayoutChooser);
	
			_get(Object.getPrototypeOf(ChartComponentLayoutChooser.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ChartComponentLayoutChooser, [{
			key: "handleLayoutChange",
			value: function handleLayoutChange(layoutType) {
				var layout = [];
				if (layoutType === "full") layout.push("full");
				if (layoutType === "2rows") layout.push("top", "bottom");
				if (layoutType === "3rows") layout.push("topof3", "middleof3", "bottomof3");
				if (layoutType === "2rows2cols") layout.push("top-left", "bottom-left", "top-right", "bottom-right");
				if (layoutType === "3rows2cols") {
					layout.push("topof3-left", "middleof3-left", "bottomof3-left", "topof3-right", "middleof3-right", "bottomof3-right");
				}
				this.props.onLayoutChange(layout);
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "chart-layout", "data-intro": "Choose a layout, view up to 6 charts at a time", "data-step": 5 },
					_react2["default"].createElement(
						"div",
						{ onClick: this.handleLayoutChange.bind(this, "full") },
						_react2["default"].createElement(
							"svg",
							{ height: "30", width: "30" },
							_react2["default"].createElement("rect", { x: "4", y: "4", height: "22", width: "22", stroke: "black", strokeWidth: "2", fill: "none" })
						)
					),
					_react2["default"].createElement(
						"div",
						{ onClick: this.handleLayoutChange.bind(this, "2rows") },
						_react2["default"].createElement(
							"svg",
							{ height: "30", width: "30" },
							_react2["default"].createElement("rect", { x: "4", y: "4", height: "22", width: "22", stroke: "black", strokeWidth: "2", fill: "none" }),
							_react2["default"].createElement("line", { x1: "4", y1: "15", x2: "26", y2: "15", stroke: "black", strokeWidth: "2" })
						)
					),
					_react2["default"].createElement(
						"div",
						{ onClick: this.handleLayoutChange.bind(this, "3rows") },
						_react2["default"].createElement(
							"svg",
							{ height: "30", width: "30" },
							_react2["default"].createElement("rect", { x: "4", y: "4", height: "22", width: "22", stroke: "black", strokeWidth: "2", fill: "none" }),
							_react2["default"].createElement("line", { x1: "4", y1: "11", x2: "26", y2: "11", stroke: "black", strokeWidth: "2" }),
							_react2["default"].createElement("line", { x1: "4", y1: "18", x2: "26", y2: "18", stroke: "black", strokeWidth: "2" })
						)
					),
					_react2["default"].createElement(
						"div",
						{ onClick: this.handleLayoutChange.bind(this, "2rows2cols") },
						_react2["default"].createElement(
							"svg",
							{ height: "30", width: "30" },
							_react2["default"].createElement("rect", { x: "4", y: "4", height: "22", width: "22", stroke: "black", strokeWidth: "2", fill: "none" }),
							_react2["default"].createElement("line", { x1: "4", y1: "15", x2: "26", y2: "15", stroke: "black", strokeWidth: "2" }),
							_react2["default"].createElement("line", { x1: "15", y1: "4", x2: "15", y2: "26", stroke: "black", strokeWidth: "2" })
						)
					),
					_react2["default"].createElement(
						"div",
						{ onClick: this.handleLayoutChange.bind(this, "3rows2cols") },
						_react2["default"].createElement(
							"svg",
							{ height: "30", width: "30" },
							_react2["default"].createElement("rect", { x: "4", y: "4", height: "22", width: "22", stroke: "black", strokeWidth: "2", fill: "none" }),
							_react2["default"].createElement("line", { x1: "4", y1: "11", x2: "26", y2: "11", stroke: "black", strokeWidth: "2" }),
							_react2["default"].createElement("line", { x1: "4", y1: "18", x2: "26", y2: "18", stroke: "black", strokeWidth: "2" }),
							_react2["default"].createElement("line", { x1: "15", y1: "4", x2: "15", y2: "26", stroke: "black", strokeWidth: "2" })
						)
					)
				);
			}
		}]);
	
		return ChartComponentLayoutChooser;
	})(_react2["default"].Component);
	
	function mapDispatchToProps(dispatch) {
		var _bindActionCreators = (0, _redux.bindActionCreators)(ChartPageActions, dispatch);
	
		var changeLayout = _bindActionCreators.changeLayout;
	
		return { onLayoutChange: changeLayout };
	}
	
	exports["default"] = (0, _reactRedux.connect)(null, mapDispatchToProps)(ChartComponentLayoutChooser);
	module.exports = exports["default"];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(11);
	
	var _reactRedux = __webpack_require__(20);
	
	var _ChartComponent = __webpack_require__(154);
	
	var _ChartComponent2 = _interopRequireDefault(_ChartComponent);
	
	var _actionsChartPageActions = __webpack_require__(30);
	
	var ChartPageActions = _interopRequireWildcard(_actionsChartPageActions);
	
	var ChartSectionContent = (function (_Component) {
		_inherits(ChartSectionContent, _Component);
	
		function ChartSectionContent(props) {
			_classCallCheck(this, ChartSectionContent);
	
			_get(Object.getPrototypeOf(ChartSectionContent.prototype), "constructor", this).call(this, props);
			this.handleWindowResize = this.handleWindowResize.bind(this);
		}
	
		_createClass(ChartSectionContent, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var resized = this.props.pageProps.resized;
	
				if (resized) this.handleWindowResize();
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				var resized = this.props.pageProps.resized;
	
				if (resized) this.handleWindowResize();
			}
		}, {
			key: "handleWindowResize",
			value: function handleWindowResize() {
				var el = this.refs.page;
				var width = el.clientWidth;
				var height = el.clientHeight;
				// console.log(el);
	
				var resizeChart = this.props.resizeChart;
	
				resizeChart(width, height);
			}
		}, {
			key: "render",
			value: function render() {
				var _this = this;
	
				return _react2["default"].createElement(
					"div",
					{ className: "section-body", ref: "page" },
					this.props.pageProps.chartComponent.map(function (item, i) {
						return _react2["default"].createElement(_ChartComponent2["default"], _extends({ key: i, ref: "chartComponent_" + i }, item, { resized: _this.props.pageProps.resized, index: i }));
					})
				);
			}
		}]);
	
		return ChartSectionContent;
	})(_react.Component);
	
	ChartSectionContent.propTypes = {
		pageProps: _react.PropTypes.object.isRequired
	};
	
	function mapDispatchToProps(dispatch) {
		return { resizeChart: (0, _redux.bindActionCreators)(ChartPageActions.resizeChart, dispatch) };
	}
	exports["default"] = (0, _reactRedux.connect)(function (state) {
		return state;
	}, mapDispatchToProps)(ChartSectionContent);
	module.exports = exports["default"];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _miscHideRight = __webpack_require__(152);
	
	var _miscHideRight2 = _interopRequireDefault(_miscHideRight);
	
	var _ChartComponentLayoutChooser = __webpack_require__(155);
	
	var _ChartComponentLayoutChooser2 = _interopRequireDefault(_ChartComponentLayoutChooser);
	
	var ChartSectionHead = (function (_React$Component) {
		_inherits(ChartSectionHead, _React$Component);
	
		function ChartSectionHead() {
			_classCallCheck(this, ChartSectionHead);
	
			_get(Object.getPrototypeOf(ChartSectionHead.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ChartSectionHead, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "section-head" },
					_react2["default"].createElement(_miscHideRight2["default"], this.props),
					_react2["default"].createElement(_ChartComponentLayoutChooser2["default"], null)
				);
			}
		}]);
	
		return ChartSectionHead;
	})(_react2["default"].Component);
	
	exports["default"] = ChartSectionHead;
	module.exports = exports["default"];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var ChartSettings = (function (_React$Component) {
		_inherits(ChartSettings, _React$Component);
	
		function ChartSettings() {
			_classCallCheck(this, ChartSettings);
	
			_get(Object.getPrototypeOf(ChartSettings.prototype), "constructor", this).call(this);
			this.handleShowGridToggle = this.handleShowGridToggle.bind(this);
		}
	
		_createClass(ChartSettings, [{
			key: "handleShowGridToggle",
			value: function handleShowGridToggle() {
				var settings = this.props.settings;
	
				this.props.onChangeSettings(_extends({}, settings, {
					showGrid: !settings.showGrid
				}));
				// console.log("toggleGrid ", settings);
			}
		}, {
			key: "render",
			value: function render() {
				var classes = (0, _classnames2["default"])({
					"chart-settings": true,
					"pull-right": false,
					"btn-group": true,
					"dropdown-menu-right": true,
					"open": this.props.showDropDown
				});
				var settings = this.props.settings;
	
				return _react2["default"].createElement(
					"div",
					{ className: classes, "data-intro": "change settings for the chart", "data-step": 3 },
					_react2["default"].createElement(
						"button",
						{ type: "button", className: "btn btn-default", onClick: this.props.onDropDownToggle },
						_react2["default"].createElement("span", { className: "glyphicon glyphicon-cog" })
					),
					_react2["default"].createElement(
						"ul",
						{ className: "dropdown-menu chart-settings-menu" },
						_react2["default"].createElement(
							"li",
							{ key: "0", onClick: this.handleShowGridToggle },
							_react2["default"].createElement(
								"div",
								{ className: "clearfix" },
								_react2["default"].createElement(
									"span",
									{ className: "pull-left" },
									"Grid"
								),
								_react2["default"].createElement(
									"div",
									{ className: "pull-right" },
									_react2["default"].createElement(
										"label",
										{ className: (0, _classnames2["default"])({ "btn": true, "btn-success active": settings.showGrid, "btn-default": !settings.showGrid }) },
										settings.showGrid ? "ON" : "OFF"
									)
								)
							)
						),
						_react2["default"].createElement(
							"li",
							{ key: "1" },
							_react2["default"].createElement(
								"div",
								{ className: "clearfix" },
								_react2["default"].createElement(
									"span",
									{ className: "pull-left" },
									"Another setting here"
								)
							)
						),
						_react2["default"].createElement(
							"li",
							{ key: "2" },
							_react2["default"].createElement(
								"div",
								{ className: "clearfix" },
								_react2["default"].createElement(
									"span",
									{ className: "pull-left" },
									"Another setting here.."
								)
							)
						)
					)
				);
			}
		}]);
	
		return ChartSettings;
	})(_react2["default"].Component);
	
	exports["default"] = ChartSettings;
	module.exports = exports["default"];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constantsChartTypes = __webpack_require__(32);
	
	var ChartTypes = _interopRequireWildcard(_constantsChartTypes);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var ChartTypeSelector = (function (_React$Component) {
		_inherits(ChartTypeSelector, _React$Component);
	
		function ChartTypeSelector() {
			_classCallCheck(this, ChartTypeSelector);
	
			_get(Object.getPrototypeOf(ChartTypeSelector.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ChartTypeSelector, [{
			key: "selectChartType",
			value: function selectChartType(chartType) {
				this.props.onChartTypeSelect(chartType);
			}
		}, {
			key: "render",
			value: function render() {
				var classes = (0, _classnames2["default"])({
					"chartTypeSelector": true,
					"dropdown": true,
					"open": this.props.showDropDown
				});
				return _react2["default"].createElement(
					"div",
					{ className: classes, "data-intro": "Choose a Chart Type, Candlestick, Line, Point & Figure and more ", "data-step": 1 },
					_react2["default"].createElement(
						"button",
						{ type: "button", className: "btn btn-default", onClick: this.props.onDropDownToggle },
						this.props.chartType.label,
						" ",
						_react2["default"].createElement("span", { className: "caret" })
					),
					_react2["default"].createElement(
						"ul",
						{ className: "dropdown-menu dropdown-menu-left", role: "menu" },
						_react2["default"].createElement(
							"li",
							{ key: "basicChartTypes", className: "dropdown-header" },
							"Basic Charts"
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								"a",
								{ href: "#", onClick: this.selectChartType.bind(this, ChartTypes.AREA) },
								ChartTypes.AREA.label
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								"a",
								{ href: "#", onClick: this.selectChartType.bind(this, ChartTypes.LINE) },
								ChartTypes.LINE.label
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								"a",
								{ href: "#", onClick: this.selectChartType.bind(this, ChartTypes.CANDLESTICK) },
								ChartTypes.CANDLESTICK.label
							)
						),
						_react2["default"].createElement(
							"li",
							{ key: "advancedChartTypes", className: "dropdown-header" },
							"Advanced Charts"
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								"a",
								{ href: "#", onClick: this.selectChartType.bind(this, ChartTypes.HEIKIN_ASHI) },
								ChartTypes.HEIKIN_ASHI.label
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								"a",
								{ href: "#", onClick: this.selectChartType.bind(this, ChartTypes.RENKO) },
								ChartTypes.RENKO.label
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								"a",
								{ href: "#", onClick: this.selectChartType.bind(this, ChartTypes.KAGI) },
								ChartTypes.KAGI.label
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								"a",
								{ href: "#", onClick: this.selectChartType.bind(this, ChartTypes.POINT_FIGURE) },
								ChartTypes.POINT_FIGURE.label
							)
						)
					)
				);
			}
		}]);
	
		return ChartTypeSelector;
	})(_react2["default"].Component);
	
	exports["default"] = ChartTypeSelector;
	module.exports = exports["default"];

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(69);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _reactStockcharts = __webpack_require__(39);
	
	var _reactStockcharts2 = _interopRequireDefault(_reactStockcharts);
	
	var _jsCookie = __webpack_require__(60);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var _utilsPureComponent = __webpack_require__(178);
	
	var _utilsPureComponent2 = _interopRequireDefault(_utilsPureComponent);
	
	var _constantsChartTypes = __webpack_require__(32);
	
	var ChartTypes = _interopRequireWildcard(_constantsChartTypes);
	
	var _BackgroundText = __webpack_require__(153);
	
	var _BackgroundText2 = _interopRequireDefault(_BackgroundText);
	
	var ChartCanvas = _reactStockcharts2["default"].ChartCanvas;
	var Chart = _reactStockcharts2["default"].Chart;
	var DataSeries = _reactStockcharts2["default"].DataSeries;
	var EventCapture = _reactStockcharts2["default"].EventCapture;
	var _ReStock$series = _reactStockcharts2["default"].series;
	var CandlestickSeries = _ReStock$series.CandlestickSeries;
	var HistogramSeries = _ReStock$series.HistogramSeries;
	var LineSeries = _ReStock$series.LineSeries;
	var AreaSeries = _ReStock$series.AreaSeries;
	var _ReStock$series2 = _reactStockcharts2["default"].series;
	var KagiSeries = _ReStock$series2.KagiSeries;
	var RenkoSeries = _ReStock$series2.RenkoSeries;
	var PointAndFigureSeries = _ReStock$series2.PointAndFigureSeries;
	var _ReStock$series3 = _reactStockcharts2["default"].series;
	var BollingerSeries = _ReStock$series3.BollingerSeries;
	var MACDSeries = _ReStock$series3.MACDSeries;
	var RSISeries = _ReStock$series3.RSISeries;
	var StochasticSeries = _ReStock$series3.StochasticSeries;
	var MouseCoordinates = _reactStockcharts2["default"].coordinates.MouseCoordinates;
	var _ReStock$tooltip = _reactStockcharts2["default"].tooltip;
	var TooltipContainer = _ReStock$tooltip.TooltipContainer;
	var OHLCTooltip = _ReStock$tooltip.OHLCTooltip;
	var MovingAverageTooltip = _ReStock$tooltip.MovingAverageTooltip;
	var BollingerBandTooltip = _ReStock$tooltip.BollingerBandTooltip;
	var MACDTooltip = _ReStock$tooltip.MACDTooltip;
	var RSITooltip = _ReStock$tooltip.RSITooltip;
	var StochasticTooltip = _ReStock$tooltip.StochasticTooltip;
	var _ReStock$transforms = _reactStockcharts2["default"].transforms;
	var StockscaleTransformer = _ReStock$transforms.StockscaleTransformer;
	var HeikinAshiTransformer = _ReStock$transforms.HeikinAshiTransformer;
	var KagiTransformer = _ReStock$transforms.KagiTransformer;
	var PointAndFigureTransformer = _ReStock$transforms.PointAndFigureTransformer;
	var RenkoTransformer = _ReStock$transforms.RenkoTransformer;
	var _ReStock$axes = _reactStockcharts2["default"].axes;
	var XAxis = _ReStock$axes.XAxis;
	var YAxis = _ReStock$axes.YAxis;
	var _ReStock$indicator = _reactStockcharts2["default"].indicator;
	var MACD = _ReStock$indicator.MACD;
	var EMA = _ReStock$indicator.EMA;
	var SMA = _ReStock$indicator.SMA;
	var BollingerBand = _ReStock$indicator.BollingerBand;
	var RSI = _ReStock$indicator.RSI;
	var FullStochasticOscillator = _ReStock$indicator.FullStochasticOscillator;
	
	var margin = { left: 70, right: 70, top: 10, bottom: 30 };
	var dateFormat = _d32["default"].time.format("%Y-%m-%d");
	
	function getXAxis(show, verticalGrid) {
		return show ? _react2["default"].createElement(XAxis, _extends({ axisAt: "bottom", orient: "bottom" }, verticalGrid)) : _react2["default"].createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 });
	}
	
	function getMainChartType(type) {
		switch (type.value) {
			case ChartTypes.AREA.value:
				{
					return AreaSeries;
				}
			case ChartTypes.LINE.value:
				{
					return LineSeries;
				}
			case ChartTypes.CANDLESTICK.value:
				{
					return CandlestickSeries;
				}
			case ChartTypes.HEIKIN_ASHI.value:
				{
					return CandlestickSeries;
				}
			case ChartTypes.RENKO.value:
				{
					return RenkoSeries;
				}
			case ChartTypes.KAGI.value:
				{
					return KagiSeries;
				}
			case ChartTypes.POINT_FIGURE.value:
				{
					return PointAndFigureSeries;
				}
		}
	}
	
	function getConfig(each, dy, movingAverageTooltipExists, chartHeight, verticalGrid, logger) {
		var chart, dataSeries, toolTip, toolTipDY, indicator;
		var chartId = each.chartId;
		var dataSeriesId = each.dataSeriesId;
		var options = each.options;
	
		// console.log(options);
		switch (each.type) {
			case "BollingerBand":
				{
					dataSeries = _react2["default"].createElement(
						DataSeries,
						{ key: dataSeriesId, id: dataSeriesId, indicator: BollingerBand, options: options },
						_react2["default"].createElement(BollingerSeries, null)
					);
					var start = dy + 20;
					toolTipDY = start + 5;
					toolTip = _react2["default"].createElement(BollingerBandTooltip, { forChart: chartId, forDataSeries: dataSeriesId, key: chartId + "-" + dataSeriesId,
						onClick: logger.bind(null, { chartId: chartId, dataSeriesId: dataSeriesId, indicatorType: each.type }), origin: [-48, start] });
					break;
				}
			case "SMA":
				{
					indicator = SMA;
				}
			case "EMA":
				{
					if (!indicator) indicator = EMA;
					dataSeries = _react2["default"].createElement(
						DataSeries,
						{ key: dataSeriesId, id: dataSeriesId, indicator: indicator, options: options },
						_react2["default"].createElement(LineSeries, null)
					);
					if (!movingAverageTooltipExists) {
						var start = dy + 5;
						toolTipDY = start + 25;
						toolTip = _react2["default"].createElement(MovingAverageTooltip, { forChart: chartId, key: chartId + "-" + dataSeriesId,
							onClick: logger.bind(null, { chartId: chartId, dataSeriesId: dataSeriesId, indicatorType: each.type }), origin: [-45, start] });
					}
					break;
				}
			case "MACD":
				{
					chart = function (showXAxis, dataSeries) {
						var noOfChartsAfter = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
						return _react2["default"].createElement(
							Chart,
							{ id: chartId, key: chartId, yMousePointerDisplayLocation: "right", yMousePointerDisplayFormat: function (y) {
									return y.toFixed(2);
								},
								height: chartHeight, origin: function (w, h) {
									return [0, h - chartHeight - chartHeight * noOfChartsAfter];
								}, padding: { top: 5, right: 0, bottom: 5, left: 0 } },
							getXAxis(showXAxis, verticalGrid),
							_react2["default"].createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
							_react2["default"].createElement(
								DataSeries,
								{ id: dataSeriesId, indicator: MACD, options: options },
								_react2["default"].createElement(MACDSeries, null)
							)
						);
					};
					toolTip = _react2["default"].createElement(MACDTooltip, { ref: "MACDTooltip", forChart: chartId, forDataSeries: dataSeriesId, key: chartId + "-" + dataSeriesId,
						onClick: logger.bind(null, { chartId: chartId, dataSeriesId: dataSeriesId, indicatorType: each.type }), origin: [-48, 15] });
					toolTipDY = dy;
					break;
				}
			case "RSI":
				{
					chart = function (showXAxis, dataSeries) {
						var noOfChartsAfter = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
						return _react2["default"].createElement(
							Chart,
							{ id: chartId, key: chartId, yMousePointerDisplayLocation: "right", yMousePointerDisplayFormat: function (y) {
									return y.toFixed(2);
								},
								height: chartHeight, origin: function (w, h) {
									return [0, h - chartHeight - chartHeight * noOfChartsAfter];
								}, padding: { top: 0, right: 0, bottom: 0, left: 0 } },
							getXAxis(showXAxis, verticalGrid),
							_react2["default"].createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
							_react2["default"].createElement(
								DataSeries,
								{ id: dataSeriesId, indicator: RSI, options: options },
								_react2["default"].createElement(RSISeries, null)
							)
						);
					};
					toolTip = _react2["default"].createElement(RSITooltip, { forChart: chartId, forDataSeries: dataSeriesId, key: chartId + "-" + dataSeriesId,
						onClick: logger.bind(null, { chartId: chartId, dataSeriesId: dataSeriesId, indicatorType: each.type }), origin: [-48, 15] });
					toolTipDY = dy;
					break;
				}
			case "FullStochasticOscillator":
				{
					chart = function (showXAxis, dataSeries) {
						var noOfChartsAfter = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
						return _react2["default"].createElement(
							Chart,
							{ id: chartId, key: chartId, yMousePointerDisplayLocation: "right", yMousePointerDisplayFormat: function (y) {
									return y.toFixed(2);
								},
								height: chartHeight, origin: function (w, h) {
									return [0, h - chartHeight - chartHeight * noOfChartsAfter];
								}, padding: { top: 5, right: 0, bottom: 5, left: 0 } },
							getXAxis(showXAxis, verticalGrid),
							_react2["default"].createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
							_react2["default"].createElement(
								DataSeries,
								{ id: dataSeriesId, indicator: FullStochasticOscillator, options: options },
								_react2["default"].createElement(StochasticSeries, null)
							)
						);
					};
					toolTip = _react2["default"].createElement(
						StochasticTooltip,
						{ forChart: chartId, forDataSeries: dataSeriesId, key: chartId + "-" + dataSeriesId,
							onClick: logger.bind(null, { chartId: chartId, dataSeriesId: dataSeriesId, indicatorType: each.type }), origin: [-48, 15] },
						"Full STO"
					);
					toolTipDY = dy;
					break;
				}
		}
		return { chart: chart, dataSeries: dataSeries, toolTip: toolTip, toolTipDY: toolTipDY };
	}
	
	var ChartWidget = (function (_PureComponent) {
		_inherits(ChartWidget, _PureComponent);
	
		function ChartWidget() {
			_classCallCheck(this, ChartWidget);
	
			_get(Object.getPrototypeOf(ChartWidget.prototype), "constructor", this).apply(this, arguments);
		}
	
		/* ChartWidget.propTypes = {
	 };
	 */
	
		_createClass(ChartWidget, [{
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				// console.log("componentWillUnmount");
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				// console.log("componentWillMount");
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var cookie = _jsCookie2["default"].get("demoComplete");
	
				if (cookie !== undefined) {
					var _props = this.props;
					var width = _props.width;
					var height = _props.height;
	
					var gridHeight = height - margin.bottom;
	
					var el = _reactDom2["default"].findDOMNode(this.refs.canvas).parentNode;
	
					var tooltip = _reactDom2["default"].findDOMNode(this.refs.MACDTooltip).innerHTML.replace(/data-reactid="[^"]*"/g, "");
					// d3.select(el).append("svg").attr("width", 400).attr("height", 20).append(svgTooltip);
					// tooltip.createElement
					_d32["default"].select(el).append("div").attr("style", "position: absolute; top: " + (gridHeight - 125) + "px; left: 15px; height: 20px; width: 400px").attr("data-intro", "Click on tooltip of any indicator to change its settings").attr("data-step", "4").attr("class", "removemeafterload").append("svg").attr("width", 400).attr("height", 20).append("g").attr("transform", "translate(" + 7.5 + ", " + 15.5 + ")").html(tooltip);
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var width = _props2.width;
				var height = _props2.height;
				var resized = _props2.resized;
				var data = _props2.data;
				var indicators = _props2.indicators;
				var type = _props2.type;
				var transforms = _props2.transforms;
				var exchange = _props2.exchange;
				var security = _props2.security;
				var grid = _props2.grid;
				var _props3 = this.props;
				var onIndicatorSettingsChange = _props3.onIndicatorSettingsChange;
				var onChartSettingsChange = _props3.onChartSettingsChange;
	
				var chartSettings = transforms[transforms.length - 1].options;
				// console.log(type, exchange, security);
				var MainChartSeries = getMainChartType(type);
	
				var gridHeight = height - margin.top - margin.bottom;
				var gridWidth = width - margin.left - margin.right;
	
				var chartHeight = Math.min(gridHeight / 5, 125);
	
				var horizontalGrid = grid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 } : {};
	
				var verticalGrid = grid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 } : {};
	
				var chartId = 3,
				    dataSeriesId = 1;
				var charts = [function (showXAxis, dataSeries) {
					var noOfChartsAfter = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
					return _react2["default"].createElement(
						Chart,
						{ id: 0, key: 0, yMousePointerDisplayLocation: "right",
							height: gridHeight - chartHeight * (noOfChartsAfter - 1), yMousePointerDisplayFormat: function (y) {
								return y.toFixed(2);
							} },
						_react2["default"].createElement(YAxis, _extends({ axisAt: "right", orient: "right", ticks: 5 }, horizontalGrid)),
						_react2["default"].createElement(
							DataSeries,
							{ id: 0, yAccessor: MainChartSeries.yAccessor },
							_react2["default"].createElement(MainChartSeries, null)
						),
						dataSeries
					);
				}, function (showXAxis, dataSeries) {
					var noOfChartsAfter = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
					return _react2["default"].createElement(
						Chart,
						{ id: 1, key: 1, yMousePointerDisplayLocation: "left", yMousePointerDisplayFormat: _d32["default"].format(".4s"),
							height: chartHeight, origin: function (w, h) {
								return [0, h - chartHeight - chartHeight * noOfChartsAfter];
							} },
						_react2["default"].createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: _d32["default"].format("s") }),
						getXAxis(showXAxis, verticalGrid),
						_react2["default"].createElement(
							DataSeries,
							{ id: 0, yAccessor: function (d) {
									return d.volume;
								} },
							_react2["default"].createElement(HistogramSeries, { fill: function (d) {
									return d.close > d.open ? "#6BA583" : "red";
								} })
						)
					);
				}];
				var dataSeries = [];
				var toolTips = [];
				var toolTipDY = 5;
	
				var movingAverageTooltipExists = false;
				for (var i = 0; i < indicators.length; i++) {
					var each = indicators[i];
					var config = getConfig(each, toolTipDY, movingAverageTooltipExists, chartHeight, verticalGrid, onIndicatorSettingsChange);
					if (config.chart) {
						charts.push(config.chart);
					}
					if (config.dataSeries) {
						dataSeries.push(config.dataSeries);
					}
					if (config.toolTip) {
						var ToolTip = config.toolTip;
						var forChart = config.chart ? chartId - 1 : 1;
						toolTips.push(config.toolTip); // <ToolTip key={`${ chartId }-${ dataSeriesId }`} forChart={forChart} origin={[-48, toolTipDY]} />);
						toolTipDY = config.toolTipDY;
					}
					if (each.type === "EMA" || each.type === "SMA") movingAverageTooltipExists = true;
				}
				var chartsJSX = [];
				for (var i = 0; i < charts.length; i++) {
					var each;
	
					if (i === charts.length - 1) {
						// last
						each = charts[i](true, dataSeries, charts.length - i - 1);
					} else {
						each = charts[i](false, dataSeries, charts.length - i - 1);
					}
					chartsJSX.push(each);
				};
				// console.log(chartsJSX[2]);
				return _react2["default"].createElement(
					ChartCanvas,
					{ ref: "canvas", width: width, height: height,
						margin: margin, initialDisplay: 200,
						dataTransform: transforms,
						data: data, type: "hybrid" },
					chartsJSX,
					_react2["default"].createElement(_BackgroundText2["default"], { x: width / 2 - margin.left, y: height / 2, height: height, security: security }),
					_react2["default"].createElement(MouseCoordinates, { xDisplayFormat: dateFormat, type: "crosshair" }),
					_react2["default"].createElement(EventCapture, { mouseMove: true, zoom: true, pan: true, mainChart: 1, defaultFocus: false }),
					_react2["default"].createElement(
						TooltipContainer,
						null,
						_react2["default"].createElement(OHLCTooltip, { forChart: 0, origin: [-48, 0], onClick: onChartSettingsChange.bind(null, type, chartSettings) }),
						toolTips
					)
				);
			}
		}]);
	
		return ChartWidget;
	})(_utilsPureComponent2["default"]);
	
	exports["default"] = ChartWidget;
	module.exports = exports["default"];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ExchangeList = (function (_React$Component) {
		_inherits(ExchangeList, _React$Component);
	
		function ExchangeList() {
			_classCallCheck(this, ExchangeList);
	
			_get(Object.getPrototypeOf(ExchangeList.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ExchangeList, [{
			key: "handleExchangeSelect",
			value: function handleExchangeSelect(exchange, e) {
				this.props.onExchangeSelect(exchange);
			}
		}, {
			key: "render",
			value: function render() {
				if (!this.props.showDropDown) return null;
				return _react2["default"].createElement(
					"ul",
					{ className: "dropdown-menu", role: "menu" },
					_react2["default"].createElement(
						"li",
						null,
						_react2["default"].createElement(
							"a",
							{ href: "#", onClick: this.handleExchangeSelect.bind(this, "ALL") },
							"ALL"
						)
					),
					_react2["default"].createElement(
						"li",
						null,
						_react2["default"].createElement(
							"a",
							{ href: "#", onClick: this.handleExchangeSelect.bind(this, "NSE") },
							"NSE"
						)
					),
					_react2["default"].createElement(
						"li",
						null,
						_react2["default"].createElement(
							"a",
							{ href: "#", onClick: this.handleExchangeSelect.bind(this, "BSE") },
							"BSE"
						)
					)
				);
			}
		}]);
	
		return ExchangeList;
	})(_react2["default"].Component);
	
	exports["default"] = ExchangeList;
	module.exports = exports["default"];

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var INDICATORS = [{ name: "Bollinger Bands", onClickParams: { type: "BollingerBand" } }, { name: "MACD", onClickParams: { type: "MACD" } }, { name: "Moving Average - Exponential", onClickParams: { type: "EMA" } }, { name: "Moving Average - Simple", onClickParams: { type: "SMA" } }, { name: "RSI", onClickParams: { type: "RSI" } }, { name: "Stochastics", onClickParams: { type: "FullStochasticOscillator" } }];
	
	var Indicators = (function (_React$Component) {
		_inherits(Indicators, _React$Component);
	
		function Indicators() {
			_classCallCheck(this, Indicators);
	
			_get(Object.getPrototypeOf(Indicators.prototype), "constructor", this).apply(this, arguments);
		}
	
		/*
	 						<li className=" search">
	 							<form className="navbar-form navbar-left" role="search">
	 								<div className="form-group">
	 									<input type="text" className="form-control" placeholder="Filter" />
	 								</div>
	 							</form>
	 						</li>
	 */
	
		_createClass(Indicators, [{
			key: "render",
			value: function render() {
				var classes = (0, _classnames2["default"])({
					"dropdown": true,
					"open": this.props.showDropDown
				});
				var onIndicatorAdd = this.props.onIndicatorAdd;
	
				return _react2["default"].createElement(
					"div",
					{ className: "indicators", "data-intro": "add indicators to a chart", "data-step": 2 },
					_react2["default"].createElement(
						"div",
						{ className: classes },
						_react2["default"].createElement(
							"button",
							{ className: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu1",
								"data-toggle": "dropdown", onClick: this.props.onDropDownToggle },
							"Indicators ",
							_react2["default"].createElement("span", { className: "caret" })
						),
						_react2["default"].createElement(
							"ul",
							{ className: "dropdown-menu" },
							INDICATORS.map(function (each, idx) {
								return _react2["default"].createElement(
									"li",
									{ key: idx },
									_react2["default"].createElement(
										"a",
										{ tabIndex: "-1", href: "#",
											onClick: onIndicatorAdd.bind(null, each.onClickParams.type) },
										each.name
									)
								);
							})
						)
					)
				);
			}
		}]);
	
		return Indicators;
	})(_react2["default"].Component);
	
	exports["default"] = Indicators;
	module.exports = exports["default"];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Loading = (function (_React$Component) {
		_inherits(Loading, _React$Component);
	
		function Loading() {
			_classCallCheck(this, Loading);
	
			_get(Object.getPrototypeOf(Loading.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Loading, [{
			key: "render",
			value: function render() {
				if (!this.props.loading) return null;
				return _react2["default"].createElement(
					"li",
					{ className: "ticker" },
					_react2["default"].createElement(
						"a",
						null,
						"Loading..."
					)
				);
			}
		}]);
	
		return Loading;
	})(_react2["default"].Component);
	
	var Error = (function (_React$Component2) {
		_inherits(Error, _React$Component2);
	
		function Error() {
			_classCallCheck(this, Error);
	
			_get(Object.getPrototypeOf(Error.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Error, [{
			key: "render",
			value: function render() {
				if (!this.props.isError) return null;
				return _react2["default"].createElement(
					"li",
					{ className: "ticker" },
					_react2["default"].createElement(
						"a",
						null,
						"Error Occured, please try again..."
					)
				);
			}
		}]);
	
		return Error;
	})(_react2["default"].Component);
	
	var EachResult = (function (_React$Component3) {
		_inherits(EachResult, _React$Component3);
	
		function EachResult() {
			_classCallCheck(this, EachResult);
	
			_get(Object.getPrototypeOf(EachResult.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(EachResult, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"li",
					{ className: "ticker", key: exchange.name + security.index },
					_react2["default"].createElement(
						"a",
						{ href: "#", onClick: self.onSelect.bind(self, exchange.name, security.type, security.id, security.name, security.code) },
						_react2["default"].createElement(
							"div",
							{ className: "clearfix" },
							_react2["default"].createElement(
								"div",
								{ className: "info" },
								security.name,
								_react2["default"].createElement("br", null),
								security.code,
								_react2["default"].createElement("br", null)
							)
						)
					)
				);
			}
		}]);
	
		return EachResult;
	})(_react2["default"].Component);
	
	var PageNavigation = (function (_React$Component4) {
		_inherits(PageNavigation, _React$Component4);
	
		function PageNavigation() {
			_classCallCheck(this, PageNavigation);
	
			_get(Object.getPrototypeOf(PageNavigation.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(PageNavigation, [{
			key: "showPrevPage",
			value: function showPrevPage() {}
		}, {
			key: "showNextPage",
			value: function showNextPage() {}
		}, {
			key: "render",
			value: function render() {
				var result = this.props.results.prevStartIndex || null;
				if (result === null) return null;
				return _react2["default"].createElement(
					"li",
					{ className: "pull-right", key: "page" },
					_react2["default"].createElement(
						"nav",
						null,
						_react2["default"].createElement(
							"ul",
							{ className: "pagination" },
							_react2["default"].createElement(
								"li",
								{ className: this.props.results.prevStartIndex === null ? "disabled" : "" },
								_react2["default"].createElement(
									"a",
									{ href: "#", onClick: this.showPrevPage },
									_react2["default"].createElement(
										"span",
										null,
										"Prev"
									)
								)
							),
							_react2["default"].createElement(
								"li",
								{ className: this.props.results.nextStartIndex === null ? "disabled" : "" },
								_react2["default"].createElement(
									"a",
									{ href: "#", onClick: this.showNextPage },
									_react2["default"].createElement(
										"span",
										null,
										"Next"
									)
								)
							)
						)
					)
				);
			}
		}]);
	
		return PageNavigation;
	})(_react2["default"].Component);
	
	var ExchangeHead = (function (_React$Component5) {
		_inherits(ExchangeHead, _React$Component5);
	
		function ExchangeHead() {
			_classCallCheck(this, ExchangeHead);
	
			_get(Object.getPrototypeOf(ExchangeHead.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ExchangeHead, [{
			key: "render",
			value: function render() {
				var exchange = this.props.exchange;
	
				return _react2["default"].createElement(
					"li",
					{ className: "dropdown-header" },
					exchange
				);
			}
		}]);
	
		return ExchangeHead;
	})(_react2["default"].Component);
	
	var ExchangeResult = (function (_React$Component6) {
		_inherits(ExchangeResult, _React$Component6);
	
		function ExchangeResult() {
			_classCallCheck(this, ExchangeResult);
	
			_get(Object.getPrototypeOf(ExchangeResult.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(ExchangeResult, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var security = _props.security;
				var exchange = _props.exchange;
				var onClick = _props.onClick;
	
				return _react2["default"].createElement(
					"li",
					{ className: "ticker" },
					_react2["default"].createElement(
						"a",
						{ href: "#", onClick: onClick.bind(this, exchange, security) },
						_react2["default"].createElement(
							"div",
							{ className: "clearfix" },
							_react2["default"].createElement(
								"div",
								{ className: "info" },
								security.name + " (" + security.code + ")"
							)
						)
					)
				);
			}
		}]);
	
		return ExchangeResult;
	})(_react2["default"].Component);
	
	var SecuritySearchResult = (function (_React$Component7) {
		_inherits(SecuritySearchResult, _React$Component7);
	
		function SecuritySearchResult() {
			_classCallCheck(this, SecuritySearchResult);
	
			_get(Object.getPrototypeOf(SecuritySearchResult.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(SecuritySearchResult, [{
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var showDropDown = _props2.showDropDown;
				var showLoading = _props2.showLoading;
				var results = _props2.results;
				var error = _props2.error;
				var onSelect = _props2.onSelect;
	
				if (!showDropDown) return null;
	
				var items = [];
				if (results.exchange) {
					items = results.exchange.map(function (exchange, idx) {
						var securityElement = exchange.securities.map(function (security, idx2) {
							return _react2["default"].createElement(ExchangeResult, { key: idx + "-" + idx2, exchange: exchange.name, security: security, onClick: onSelect });
						});
						return [_react2["default"].createElement(ExchangeHead, { key: idx, exchange: exchange.name })].concat(securityElement);
					}).reduce(function (a1, a2) {
						return a1.concat(a2);
					});
				}
				return _react2["default"].createElement(
					"ul",
					{ className: "dropdown-menu autocomplete", role: "menu" },
					_react2["default"].createElement(Loading, { loading: showLoading }),
					_react2["default"].createElement(Error, error),
					items,
					_react2["default"].createElement(PageNavigation, { results: results })
				);
			}
		}]);
	
		return SecuritySearchResult;
	})(_react2["default"].Component);
	
	exports["default"] = SecuritySearchResult;
	module.exports = exports["default"];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ExchangeList = __webpack_require__(161);
	
	var _ExchangeList2 = _interopRequireDefault(_ExchangeList);
	
	var _SecuritySearchResult = __webpack_require__(163);
	
	var _SecuritySearchResult2 = _interopRequireDefault(_SecuritySearchResult);
	
	var SecuritySearchSelector = (function (_React$Component) {
		_inherits(SecuritySearchSelector, _React$Component);
	
		function SecuritySearchSelector() {
			_classCallCheck(this, SecuritySearchSelector);
	
			_get(Object.getPrototypeOf(SecuritySearchSelector.prototype), "constructor", this).call(this);
			this.focusSearchText = this.focusSearchText.bind(this);
			// this.handleExchangeSelect = this.handleExchangeSelect.bind(this);
			this.handleSearch = this.handleSearch.bind(this);
		}
	
		_createClass(SecuritySearchSelector, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				this.focusSearchText();
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.focusSearchText();
			}
		}, {
			key: "focusSearchText",
			value: function focusSearchText() {
				if (this.props.focus) {
					this.refs.securitySearchText.focus();
					if (this.props.select) {
						this.refs.securitySearchText.select();
					}
				} else {
					this.refs.securitySearchText.blur();
				}
			}
		}, {
			key: "handleSearch",
			value: function handleSearch(e) {
				this.props.onSecuritySearch(e.target.value);
			}
		}, {
			key: "render",
			value: function render() {
				var classes = (0, _classnames2["default"])({
					"securitySearchSelector": true,
					"focus": this.props.focus
				});
				var open = this.props.searchInProgress || this.props.showSearchResultDropDown || this.props.showExchangeSelectorDropDown;
				// console.log(this.props.securitySearchResult);
				return _react2["default"].createElement(
					"div",
					{ className: classes },
					_react2["default"].createElement(
						"div",
						{ className: "input-group" },
						_react2["default"].createElement(
							"div",
							{ className: (0, _classnames2["default"])({ "input-group-btn": true, "open": open }) },
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-default", onClick: this.props.onDropDownToggle },
								this.props.exchange,
								" ",
								_react2["default"].createElement("span", { className: "caret" })
							),
							_react2["default"].createElement(_ExchangeList2["default"], { showDropDown: this.props.showExchangeSelectorDropDown, onExchangeSelect: this.props.onExchangeSelect }),
							_react2["default"].createElement(_SecuritySearchResult2["default"], { showDropDown: this.props.showSearchResultDropDown, results: this.props.securitySearchResult,
								showLoading: this.props.searchInProgress, error: this.props.searchError, onSelect: this.props.onSecuritySelect })
						),
						_react2["default"].createElement(
							"div",
							{ className: "inner-addon right-addon" },
							_react2["default"].createElement("span", { className: "glyphicon glyphicon-search" }),
							_react2["default"].createElement("input", { type: "text", className: "form-control", placeholder: "SecuritySearchSelector", ref: "securitySearchText",
								onChange: this.handleSearch,
								onClick: this.props.onSecurityFocus,
								defaultValue: this.props.security })
						)
					)
				);
			}
		}]);
	
		return SecuritySearchSelector;
	})(_react2["default"].Component);
	
	exports["default"] = SecuritySearchSelector;
	module.exports = exports["default"];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function getLabelFor(key) {
		return key.split("").map(function (each, idx) {
			return idx === 0 ? each.toUpperCase() : each;
		}).map(function (each, idx) {
			return idx !== 0 && each === each.toUpperCase() && key[idx - 1] !== key[idx - 1].toUpperCase() ? " " + each : each;
		}).join("");
	}
	function getOptionsFromState(options, state) {
		var newOptions = {};
		Object.keys(state).forEach(function (key) {
			var value = state[key];
			if (typeof options[key] === "number") value = Number(value);
			newOptions[key] = value;
		});
		return newOptions;
	}
	
	var SettingsModal = (function (_React$Component) {
		_inherits(SettingsModal, _React$Component);
	
		function SettingsModal(props) {
			_classCallCheck(this, SettingsModal);
	
			_get(Object.getPrototypeOf(SettingsModal.prototype), "constructor", this).call(this, props);
			this.initState = this.initState.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.valueLink = this.valueLink.bind(this);
			this.handleChange = this.handleChange.bind(this);
		}
	
		_createClass(SettingsModal, [{
			key: "handleSubmit",
			value: function handleSubmit(e) {
				e.preventDefault();
				var _props = this.props;
				var onSubmit = _props.onSubmit;
				var options = _props.options;
				var settingsType = _props.settingsType;
				var onChartSettingsChange = _props.onChartSettingsChange;
	
				var newOptions = getOptionsFromState(options, this.state);
				if (settingsType === "Chart") {
					onChartSettingsChange(newOptions);
				} else {
					var type = options.indicatorType;
					var chartId = options.chartId;
					var dataSeriesId = options.dataSeriesId;
	
					var indicatorToAdd = { type: type, chartId: chartId, dataSeriesId: dataSeriesId, options: newOptions };
	
					onSubmit(indicatorToAdd);
				}
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				if (this.refs.input_0) {
					this.refs.input_0.focus();
					this.refs.input_0.select();
				}
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.initState(this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				this.initState(nextProps);
			}
		}, {
			key: "initState",
			value: function initState(props) {
				var options = props.options;
	
				if (!options) return;
	
				var keys = Object.keys(options).filter(function (key) {
					return key !== "indicatorType";
				}).filter(function (key) {
					return key !== "chartId";
				}).filter(function (key) {
					return key !== "dataSeriesId";
				}).filter(function (key) {
					return typeof options[key] !== "object";
				}).filter(function (key) {
					return typeof options[key] !== "function";
				});
	
				var optionsInState = {};
				keys.forEach(function (key) {
					return optionsInState[key] = options[key];
				});
	
				this.setState(optionsInState);
			}
		}, {
			key: "handleChange",
			value: function handleChange(key, origValue, value) {
				var newState = {};
				newState[key] = value;
				this.setState(newState);
			}
		}, {
			key: "valueLink",
			value: function valueLink(key, origValue) {
				return {
					value: this.state[key],
					requestChange: this.handleChange.bind(null, key, origValue)
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this = this;
	
				var _props2 = this.props;
				var title = _props2.title;
				var options = _props2.options;
				var onSubmit = _props2.onSubmit;
				var onClose = _props2.onClose;
				var onDestroy = _props2.onDestroy;
				var settingsType = _props2.settingsType;
				var chartType = _props2.chartType;
	
				var submitLabel = "Change";
				var destroyLabel = "Remove this";
	
				var showDestroy = true;
				var settingsTitle;
				if (settingsType === "Chart" && ["RENKO", "KAGI", "POINT_FIGURE"].indexOf(chartType.value) > -1) {
					showDestroy = false;
					settingsTitle = chartType.label;
				} else if (settingsType === "Chart") {
					return null;
				} else {
					settingsTitle = title + " for " + options.indicatorType;
				}
	
				// console.log(settingsType, chartType);
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement("div", { className: "modal-backdrop fade in" }),
					_react2["default"].createElement(
						"div",
						{ tabIndex: "-1", style: { "display": "block" }, className: "modal fade in" },
						_react2["default"].createElement(
							"div",
							{ className: "modal-dialog  modal-md" },
							_react2["default"].createElement(
								"div",
								{ className: "modal-content" },
								_react2["default"].createElement(
									"form",
									{ className: "form-horizontal", onSubmit: this.handleSubmit },
									_react2["default"].createElement(
										"div",
										{ className: "modal-header" },
										_react2["default"].createElement(
											"button",
											{ type: "button", className: "close", "aria-hidden": "true", onClick: onClose },
											"×"
										),
										_react2["default"].createElement(
											"h4",
											{ className: "modal-title" },
											settingsTitle
										)
									),
									_react2["default"].createElement(
										"div",
										{ className: "modal-body" },
										Object.keys(this.state).map(function (key, idx) {
											return _react2["default"].createElement(
												"div",
												{ key: key, className: "form-group" },
												_react2["default"].createElement(
													"label",
													{ className: "control-label col-sm-5", htmlFor: "inputSuccess3" },
													getLabelFor(key)
												),
												_react2["default"].createElement(
													"div",
													{ className: "col-sm-4" },
													_react2["default"].createElement("input", { type: "text", className: "form-control",
														ref: "input_" + idx, name: key, valueLink: _this.valueLink(key, options[key]) })
												)
											);
										})
									),
									_react2["default"].createElement(
										"div",
										{ className: "modal-footer" },
										showDestroy ? _react2["default"].createElement(
											"button",
											{ type: "button", className: "btn btn-danger", onClick: onDestroy },
											destroyLabel
										) : null,
										_react2["default"].createElement(
											"button",
											{ type: "submit", className: "btn btn-success" },
											submitLabel
										)
									)
								)
							)
						)
					)
				);
			}
		}]);
	
		return SettingsModal;
	})(_react2["default"].Component);
	
	exports["default"] = SettingsModal;
	module.exports = exports["default"];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _ChartSectionHead = __webpack_require__(157);
	
	var _ChartSectionHead2 = _interopRequireDefault(_ChartSectionHead);
	
	var _ChartSectionContent = __webpack_require__(156);
	
	var _ChartSectionContent2 = _interopRequireDefault(_ChartSectionContent);
	
	var _actionsChartPageActions = __webpack_require__(30);
	
	var Actions = _interopRequireWildcard(_actionsChartPageActions);
	
	exports["default"] = {
		SectionHead: _ChartSectionHead2["default"],
		SectionContent: _ChartSectionContent2["default"],
		Actions: Actions
	};
	module.exports = exports["default"];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _ChartPage = __webpack_require__(166);
	
	var ChartPage = _interopRequireWildcard(_ChartPage);
	
	exports["default"] = [{ route: "/", page: ChartPage }, { route: "/chart", page: ChartPage }];
	module.exports = exports["default"];

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var RightPane = (function (_React$Component) {
		_inherits(RightPane, _React$Component);
	
		function RightPane() {
			_classCallCheck(this, RightPane);
	
			_get(Object.getPrototypeOf(RightPane.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(RightPane, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "rightpane" },
					_react2["default"].createElement(
						"div",
						null,
						"Right pane"
					)
				);
			}
		}]);
	
		return RightPane;
	})(_react2["default"].Component);
	
	exports["default"] = RightPane;
	module.exports = exports["default"];

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _RightPane = __webpack_require__(168);
	
	var _RightPane2 = _interopRequireDefault(_RightPane);

	exports["default"] = _RightPane2["default"];
	module.exports = exports["default"];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(11);
	
	var _reactRedux = __webpack_require__(20);
	
	var _reduxThunk = __webpack_require__(296);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _ChartXLBasePage = __webpack_require__(171);
	
	var _ChartXLBasePage2 = _interopRequireDefault(_ChartXLBasePage);
	
	var _reducers = __webpack_require__(175);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var DEBUG = false && (false);
	
	function getFinalStore() {
		var finalCreateStore = undefined;
		if (DEBUG) {
			var _require = __webpack_require__(248);
	
			var devTools = _require.devTools;
			var persistState = _require.persistState;
	
			finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2["default"]), devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(_redux.createStore);
		} else {
			finalCreateStore = (0, _redux.applyMiddleware)(_reduxThunk2["default"])(_redux.createStore);
		}
	
		return finalCreateStore(_reducers2["default"]);
	}
	
	var store = getFinalStore();
	
	if (false) {
		module.hot.accept("../reducers", function () {
			var nextReducer = require("../reducers");
			store.replaceReducer(nextReducer);
		});
	}
	
	var App = (function (_React$Component) {
		_inherits(App, _React$Component);
	
		function App() {
			_classCallCheck(this, App);
	
			_get(Object.getPrototypeOf(App.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(App, [{
			key: "render",
			value: function render() {
				var debug = null;
				if (DEBUG) {
					var _require2 = __webpack_require__(255);
	
					var DevTools = _require2.DevTools;
					var DebugPanel = _require2.DebugPanel;
					var LogMonitor = _require2.LogMonitor;
	
					debug = _react2["default"].createElement(
						DebugPanel,
						{ top: true, bottom: true, right: true },
						_react2["default"].createElement(DevTools, { store: store, monitor: LogMonitor })
					);
				}
	
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						_reactRedux.Provider,
						{ store: store },
						_react2["default"].createElement(_ChartXLBasePage2["default"], null)
					),
					debug
				);
			}
		}]);
	
		return App;
	})(_react2["default"].Component);
	
	exports["default"] = App;
	module.exports = exports["default"];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(5);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _reactRedux = __webpack_require__(20);
	
	var _redux = __webpack_require__(11);
	
	var _actionsPageActions = __webpack_require__(31);
	
	var PageActions = _interopRequireWildcard(_actionsPageActions);
	
	var _introJs = __webpack_require__(227);
	
	var _components = __webpack_require__(142);
	
	var _jsCookie = __webpack_require__(60);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var ChartXLBasePage = (function (_React$Component) {
		_inherits(ChartXLBasePage, _React$Component);
	
		function ChartXLBasePage(props) {
			_classCallCheck(this, ChartXLBasePage);
	
			_get(Object.getPrototypeOf(ChartXLBasePage.prototype), "constructor", this).call(this, props);
			this.handleWindowResize = this.handleWindowResize.bind(this);
		}
	
		/*
	 				<div className="modal-backdrop fade in" />
	 				<div style={{ position: "fixed", top: 0, right: 10, height: 40, width: 190, zIndex: 1999,
	 					backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
	 				</div>
	 */
	
		_createClass(ChartXLBasePage, [{
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				window.removeEventListener("resize", this.handleWindowResize);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("resize", this.handleWindowResize);
				var count = _jsCookie2["default"].get("demoComplete");
				var c = parseInt(count);
				if (isNaN(c)) {
					c = 0;
				}
				var finish = function finish() {
					_d32["default"].select(".removemeafterload").remove();
					_jsCookie2["default"].set("demoComplete", "" + (c + 1), { expires: 10, path: "/" });
				};
				var cookiePresent = c >= 2;
	
				// console.log(`value of cookie demoComplete is ${Cookies.get("demoComplete")}`)
				if (!cookiePresent) {
					setTimeout(function () {
						(0, _introJs.introJs)().setOptions({
							disableInteraction: true,
							showStepNumbers: false,
							exitOnOverlayClick: false
						}).start().oncomplete(finish).onexit(finish);
					}, 100);
				}
			}
		}, {
			key: "handleWindowResize",
			value: function handleWindowResize() {
				this.props.windowResize();
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props;
				var moduleToggle = _props.moduleToggle;
				var dispatch = _props.dispatch;
				var route = _props.route;
				var chartPageProps = _props.chartPageProps;
	
				var pages = _components.Pages.filter(function (each) {
					return each.route === route;
				});
				if (pages.length === 0) {
					route = "/404";
					pages = _components.Pages.filter(function (each) {
						return each.route === route;
					});
				}
				var Page = pages[0].page;
	
				var SectionHead = Page.SectionHead;
				var SectionContent = Page.SectionContent;
				var Actions = Page.Actions;
	
				var header = moduleToggle.showHeader ? _react2["default"].createElement(_components.Header, null) : null;
				var leftNav = moduleToggle.showLeftNav ? _react2["default"].createElement(_components.LeftNav, null) : null;
	
				return _react2["default"].createElement(
					"div",
					null,
					header,
					_react2["default"].createElement(
						_components.PageContainer,
						{ hideLeftNav: !moduleToggle.showLeftNav, hideHeader: !moduleToggle.showHeader },
						leftNav,
						_react2["default"].createElement(
							_components.ContentSection,
							{ rightPane: moduleToggle.showRightPane },
							_react2["default"].createElement(
								"div",
								{ className: "content" },
								_react2["default"].createElement(SectionHead, { rightPane: moduleToggle.showRightPane }),
								_react2["default"].createElement(SectionContent, { pageProps: chartPageProps })
							),
							_react2["default"].createElement(_components.RightPane, { show: moduleToggle.showRightPane })
						)
					)
				);
			}
		}]);
	
		return ChartXLBasePage;
	})(_react2["default"].Component);
	
	function mapStateToProps(state) {
		return {
			moduleToggle: state.moduleToggler,
			route: state.routeTo,
			chartPageProps: state.chartPage
		};
	}
	
	function mapDispatchToProps(dispatch) {
		return { windowResize: (0, _redux.bindActionCreators)(PageActions.windowResize, dispatch) };
	}
	
	exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChartXLBasePage);
	module.exports = exports["default"];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var styles = __webpack_require__(303);
	
	__webpack_require__(173);

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(69);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _containersApp = __webpack_require__(170);
	
	var _containersApp2 = _interopRequireDefault(_containersApp);
	
	var rootInstance = _reactDom2["default"].render(_react2["default"].createElement(_containersApp2["default"], null), document.getElementById("app"));

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _reactStockcharts = __webpack_require__(39);
	
	var _reactStockcharts2 = _interopRequireDefault(_reactStockcharts);
	
	var _constantsActionTypes = __webpack_require__(24);
	
	var _constantsChartTypes = __webpack_require__(32);
	
	var ChartTypes = _interopRequireWildcard(_constantsChartTypes);
	
	var _utils = __webpack_require__(179);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var StockscaleTransformer = _reactStockcharts2["default"].transforms.StockscaleTransformer;
	var defaultOptions = _reactStockcharts2["default"].indicator.defaultOptions;
	
	var initialState = {
		chartComponent: [{
			layout: "full",
			data: null,
			showSettings: false,
			settings: {},
			securitySelector: {
				showExchangeSelectorDropDown: false,
				showSearchResultDropDown: false,
				focus: true,
				select: true,
				exchange: "NSE",
				type: "ALL", // INDEX, ALL, EQ
				security: "MSFT",
				searchInProgress: false,
				securitySearchResult: {},
				searchError: {
					isError: false
				}
			},
			chartSelector: {
				showDropDown: false,
				chartType: ChartTypes.CANDLESTICK,
				transforms: [{ transform: StockscaleTransformer }],
				options: {}
			},
			indicators: {
				showDropDown: false,
				list: [{
					chartId: 2,
					dataSeriesId: 0,
					options: defaultOptions.MACD,
					type: "MACD"
				}]
			},
			chartSettings: {
				showDropDown: false,
				settings: {
					showGrid: true
				}
			}
		}],
		/*
	 {
	 layout: "bottom",
	 data: null,
	 showSettings: false,
	 settings: {},
	 securitySelector: {
	 showExchangeSelectorDropDown: false,
	 focus: false,
	 select: false,
	 exchange: "NSE",
	 type: "ALL", // INDEX, ALL, EQ
	 security: "MSFT",
	 searchInProgress: false,
	 securitySearchResult: {},
	 searchError: {
	 	isError: false
	 },
	 },
	 chartSelector: {
	 showDropDown: false,
	 chartType: ChartTypes.CANDLESTICK,
	 transforms: [ { transform: StockscaleTransformer } ],
	 options: {},
	 },
	 indicators: {
	 showDropDown: false,
	 list: []
	 },
	 chartSettings: {
	 showDropDown: false,
	 settings: {
	 	showGrid: true
	 }
	 }
	 },*/
		resized: true
	};
	// "full"
	// "top", "bottom"
	// "top-left", "top-right", "bottom-left", "bottom-right"
	
	function getEachDimension(n, width, height) {
		var eachWidth = n <= 3 ? width - 15 : (width - 30) / 2;
		var eachHeight = n === 1 ? height - 15 - 34 : n === 2 || n === 4 ? (height - (15 * 2 + 34 * 2)) / 2 - 1 : (height - (15 * 2 + 34 * 3)) / 3 - 1;
		return { width: eachWidth, height: eachHeight };
	}
	
	exports["default"] = function (state, action) {
		if (state === undefined) state = initialState;
	
		// console.log(state, action);
		switch (action.type) {
			case _constantsActionTypes.CHART_PAGE_LAYOUT_CHANGE:
				{
					var width, height, chartComponent;
					var l;
					var dim;
	
					var _ret = (function () {
						var _state = state;
						width = _state.width;
						height = _state.height;
						chartComponent = _state.chartComponent;
						l = action.layout.length;
						dim = getEachDimension(l, width, height);
	
						// console.log(width, height, dim);
						var last = chartComponent[chartComponent.length - 1];
						var newChartComponent = action.layout.map(function (each, i) {
							if (state.chartComponent.length > i) {
								return _extends({}, state.chartComponent[i], { layout: each }, dim);
							}
							return _extends({}, last, { layout: each }, dim);
						});
	
						return {
							v: _extends({}, state, { chartComponent: newChartComponent })
						};
					})();
	
					if (typeof _ret === "object") return _ret.v;
				}
			case _constantsActionTypes.CHART_PAGE_SET_DATA:
				{
					// console.log("CHART_PAGE_SET_DATA", action);
					var _state2 = state;
					var chartComponent = _state2.chartComponent;
	
					var newChartComponent = chartComponent.map(function (each, idx) {
						if (idx === action.index) return _extends({}, each, { data: action.data });
						return each;
					});
					return _extends({}, state, { chartComponent: newChartComponent });
				}
			case _constantsActionTypes.CHART_SHOW_SETTINGS:
				{
					var _state3 = state;
					var chartComponent = _state3.chartComponent;
	
					var newChartComponent = chartComponent.map(function (each, idx) {
						if (idx === action.index) return _extends({}, each, { showSettings: true, settingsType: "Chart", settings: action.settings });
						return each;
					});
					return _extends({}, state, { chartComponent: newChartComponent });
				}
			case _constantsActionTypes.CHART_SHOW_INDICATOR_SETTINGS:
				{
					var _state4 = state;
					var chartComponent = _state4.chartComponent;
	
					var newChartComponent = chartComponent.map(function (each, idx) {
						if (idx === action.index) return _extends({}, each, { showSettings: true, settingsType: "Indicator", settings: action.settings });
						return each;
					});
					return _extends({}, state, { chartComponent: newChartComponent });
				}
			case _constantsActionTypes.CHART_HIDE_INDICATOR_SETTINGS:
				{
					var _state5 = state;
					var chartComponent = _state5.chartComponent;
	
					var newChartComponent = chartComponent.map(function (each, idx) {
						if (idx === action.index) return _extends({}, each, { showSettings: false, settings: {} });
						return each;
					});
					return _extends({}, state, { chartComponent: newChartComponent });
				}
			case _constantsActionTypes.CHART_PAGE_EXCHANGE_DROPDOWN_TOGGLE:
				{
					state = handleEscape(state);
					var _newComponents = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return exchangeSelectorDropDownToggle(each, action.value, false);
						}
						return exchangeSelectorDropDownToggle(each, false, false);
					});
					return _extends({}, state, { chartComponent: _newComponents });
				}
			case _constantsActionTypes.CHART_PAGE_SECURITY_FOCUS:
				{
					state = handleEscape(state);
					var _newComponents2 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return exchangeSelectorDropDownToggle(each, false, true);
						}
						return exchangeSelectorDropDownToggle(each, false, false);
					});
					return _extends({}, state, { chartComponent: _newComponents2 });
				}
			case _constantsActionTypes.CHART_PAGE_EXCHANGE_SELECT:
				{
					var _newComponents3 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return exchangeSelectorSelectExchange(each, action.exchange);
						}
						return each;
					});
					return _extends({}, state, { chartComponent: _newComponents3 });
				}
			case _constantsActionTypes.CHART_PAGE_SECURITY_SEARCH:
				{
					// console.log(action);
					var _newComponents4 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return setSearchResult(each, action.securities);
						}
						return each;
					});
					return _extends({}, state, { chartComponent: _newComponents4 });
				}
			case _constantsActionTypes.CHART_PAGE_LOADING:
				{
					var _newComponents5 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return searchInProgress(each, action.securities);
						}
						return each;
					});
					return _extends({}, state, { chartComponent: _newComponents5 });
				}
			case _constantsActionTypes.CHART_PAGE_CHART_TYPE_DROPDOWN_TOGGLE:
				{
					state = handleEscape(state);
					var _newComponents6 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return chartTypeSelectorDropDownToggle(each, action.value);
						}
						return each;
					});
					return _extends({}, state, { chartComponent: _newComponents6 });
				}
			case _constantsActionTypes.CHART_PAGE_CHART_TYPE_SELECT:
				{
					var _newComponents7 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return chartTypeSelect(each, action.chartType, action.transforms);
						}
						return each;
					});
					return _extends({}, state, { chartComponent: _newComponents7 });
				}
			case _constantsActionTypes.CHART_PAGE_CHART_INDICATOR_DROPDOWN_TOGGLE:
				{
					state = handleEscape(state);
					var _newComponents8 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return chartIndicatorDropDownToggle(each, action.value);
						}
						return each;
					});
					return _extends({}, state, { chartComponent: _newComponents8 });
				}
			case _constantsActionTypes.CHART_PAGE_CHART_INDICATOR_ADD:
				{
					// console.log("CHART_PAGE_CHART_INDICATOR_ADD---", action.indicator);
					var _newComponents9 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return addIndicator(each, action.indicator);
						}
						return each;
					});
					console.log("HERE..........", _newComponents9[0].indicators.list);
					return _extends({}, state, { chartComponent: _newComponents9 });
				}
			case _constantsActionTypes.CHART_PAGE_CHART_INDICATOR_REMOVE:
				{
					// console.log("CHART_PAGE_CHART_INDICATOR_REMOVE---", action);
					var component = state.chartComponent.filter(function (each, idx) {
						return idx === action.index;
					})[0];
					var newIndicatorList = component.indicators.list.filter(function (each) {
						return !(each.chartId === action.indicator.chartId && each.dataSeriesId === action.indicator.dataSeriesId);
					});
	
					var newComponents = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							var newIndicator = _extends({}, component.indicators, { list: newIndicatorList });
	
							return _extends({}, each, { indicators: newIndicator, settings: {}, showSettings: false });
						}
						return each;
					});
					// console.log("HERE..........", newComponents[0].indicators.list);
					// return { ...state, chartComponent: newComponents };
					return _extends({}, state, { chartComponent: newComponents });
				}
			case _constantsActionTypes.CHART_PAGE_CHART_INDICATOR_UPDATE:
				{
					// console.log("CHART_PAGE_CHART_INDICATOR_UPDATE---", action);
					var component = state.chartComponent.filter(function (each, idx) {
						return idx === action.index;
					})[0];
					var newIndicatorList = component.indicators.list.map(function (each) {
						return each.chartId === action.indicator.chartId && each.dataSeriesId === action.indicator.dataSeriesId ? action.indicator : each;
					});
	
					var newComponents = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							var newIndicator = _extends({}, component.indicators, { list: newIndicatorList });
	
							return _extends({}, each, { indicators: newIndicator, settings: {}, showSettings: false });
						}
						return each;
					});
					// console.log("HERE..........", newComponents[0].indicators.list);
					// return { ...state, chartComponent: newComponents };
					return _extends({}, state, { chartComponent: newComponents });
					// return state;
				}
			case _constantsActionTypes.CHART_PAGE_CHART_SETTINGS_DROPDOWN_TOGGLE:
				{
					state = handleEscape(state);
					var _newComponents10 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return chartSettingsDropDownToggle(each, action.value);
						}
						return each;
					});
					return _extends({}, state, { chartComponent: _newComponents10 });
					// console.log(action);
					return state;
				}
			case _constantsActionTypes.CHART_PAGE_CHART_SETTINGS_CHANGE:
				{
					// console.log("HERE..........", action.settings);
	
					var _newComponents11 = state.chartComponent.map(function (each, idx) {
						if (idx === action.index) {
							return changeSettings(each, action.settings);
						}
						return each;
					});
					return _extends({}, state, { chartComponent: _newComponents11 });
				}
			case _constantsActionTypes.ESCAPE:
				{
					// console.log("Escape Action...", action.type);
					return handleEscape(state, false);
				}
			case _constantsActionTypes.CHART_PAGE_RESIZE_COMPLETE:
				{
					var _state6 = state;
					var chartComponent = _state6.chartComponent;
					var width = action.width;
					var height = action.height;
	
					var dim = getEachDimension(chartComponent.length, width, height);
	
					var newChartComponent = chartComponent.map(function (each) {
						return _extends({}, each, dim);
					});
	
					// console.log("CHART_PAGE_RESIZE_COMPLETE...", action);
	
					return _extends({}, state, { chartComponent: newChartComponent, width: width, height: height, resized: false });
				}
			case _constantsActionTypes.WINDOW_RESIZE:
				{
					// console.log("WINDOW_RESIZE...", action);
					return _extends({}, state, { resized: true });
				}
			default:
				return state;
		}
	};
	
	function exchangeSelectorDropDownToggle(singleChartComponent, value, focus) {
		var securitySelector = _extends({}, singleChartComponent.securitySelector, {
			showExchangeSelectorDropDown: value,
			focus: focus,
			showSearchResultDropDown: false,
			select: true
		});
		return _extends({}, singleChartComponent, {
			securitySelector: securitySelector
		});
	}
	
	function exchangeSelectorSelectExchange(singleChartComponent, exchange) {
		var securitySelector = _extends({}, singleChartComponent.securitySelector, {
			showExchangeSelectorDropDown: false,
			exchange: exchange,
			focus: true,
			select: true
		});
		return _extends({}, singleChartComponent, {
			securitySelector: securitySelector
		});
	}
	
	function searchInProgress(singleChartComponent, result) {
		var securitySelector = _extends({}, singleChartComponent.securitySelector, {
			searchInProgress: true,
			select: false,
			showSearchResultDropDown: true,
			securitySearchResult: {},
			searchError: {
				isError: false
			}
		});
		return _extends({}, singleChartComponent, {
			securitySelector: securitySelector
		});
	}
	function setSearchResult(singleChartComponent, result) {
		var securitySelector = _extends({}, singleChartComponent.securitySelector, {
			searchInProgress: false,
			select: false,
			showSearchResultDropDown: true,
			securitySearchResult: result.result,
			searchError: {
				isError: false
			}
		});
		// console.log(securitySelector);
		return _extends({}, singleChartComponent, {
			securitySelector: securitySelector
		});
	}
	function chartTypeSelectorDropDownToggle(singleChartComponent, value) {
		var chartSelector = _extends({}, singleChartComponent.chartSelector, {
			showDropDown: value
		});
		return _extends({}, singleChartComponent, {
			chartSelector: chartSelector
		});
	}
	function chartIndicatorDropDownToggle(singleChartComponent, value) {
		var indicators = _extends({}, singleChartComponent.indicators, {
			showDropDown: value
		});
		return _extends({}, singleChartComponent, {
			indicators: indicators
		});
	}
	
	function chartTypeSelect(singleChartComponent, chartType, transforms) {
		var chartSelector = _extends({}, singleChartComponent.chartSelector, {
			chartType: chartType,
			transforms: transforms,
			showDropDown: false
		});
		return _extends({}, singleChartComponent, {
			chartSelector: chartSelector,
			showSettings: false
		});
	}
	
	// var indicatorId = 0;
	function addIndicator(singleChartComponent, indicator) {
		// indicator.id = indicatorId++;
	
		var indicators = _extends({}, singleChartComponent.indicators, {
			list: [].concat(_toConsumableArray(singleChartComponent.indicators.list), [indicator]),
			showDropDown: false
		});
		return _extends({}, singleChartComponent, {
			indicators: indicators
		});
	}
	function chartSettingsDropDownToggle(singleChartComponent, value) {
		var chartSettings = _extends({}, singleChartComponent.chartSettings, {
			showDropDown: value
		});
		return _extends({}, singleChartComponent, {
			chartSettings: chartSettings
		});
	}
	function changeSettings(singleChartComponent, settings) {
		var chartSettings = _extends({}, singleChartComponent.chartSettings, {
			settings: _extends({}, settings)
		});
		return _extends({}, singleChartComponent, {
			chartSettings: chartSettings
		});
	}
	function handleEscape(state, focus) {
		var focusProvider = focus === undefined ? function (chartComponent) {
			return chartComponent.securitySelector.focus;
		} : function () {
			return focus;
		};
		var newComponents = state.chartComponent.map(function (each, idx) {
			return exchangeSelectorDropDownToggle(each, false, focusProvider(each));
		}).map(function (each, idx) {
			return chartTypeSelectorDropDownToggle(each, false);
		}).map(function (each, idx) {
			return chartIndicatorDropDownToggle(each, false);
		}).map(function (each, idx) {
			return chartSettingsDropDownToggle(each, false);
		});
		return _extends({}, state, { chartComponent: newComponents });
	}
	module.exports = exports["default"];

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _redux = __webpack_require__(11);
	
	var _moduleToggler = __webpack_require__(176);
	
	var _moduleToggler2 = _interopRequireDefault(_moduleToggler);
	
	var _route = __webpack_require__(177);
	
	var _route2 = _interopRequireDefault(_route);
	
	var _chartPage = __webpack_require__(174);
	
	var _chartPage2 = _interopRequireDefault(_chartPage);
	
	exports["default"] = (0, _redux.combineReducers)({
		moduleToggler: _moduleToggler2["default"],
		routeTo: _route2["default"],
		chartPage: _chartPage2["default"]
	});
	
	// rootReducer;
	module.exports = exports["default"];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _constantsActionTypes = __webpack_require__(24);
	
	var initialState = {
		showHeader: false,
		showRightPane: false,
		showLeftNav: false
	};
	
	exports["default"] = function (state, action) {
		if (state === undefined) state = initialState;
	
		// console.log(state, action);
		switch (action.type) {
			case _constantsActionTypes.TOGGLE_HEADER:
				return _extends({}, state, { showHeader: !state.showHeader });
			case _constantsActionTypes.TOGGLE_RIGHT_PANE:
				return _extends({}, state, { showRightPane: !state.showRightPane });
			case _constantsActionTypes.TOGGLE_LEFT_NAV:
				return _extends({}, state, { showLeftNav: !state.showLeftNav });
			default:
				return state;
		}
	};
	
	module.exports = exports["default"];

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _constantsActionTypes = __webpack_require__(24);
	
	var initialRoute = "/";
	
	exports["default"] = function (state, action) {
		if (state === undefined) state = initialRoute;
	
		// console.log(state, action);
		switch (action.type) {
			case _constantsActionTypes.CHANGE_ROUTE:
				return action.route;
			default:
				return state;
		}
	};
	
	module.exports = exports["default"];

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shallowEqual = __webpack_require__(180);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var PureComponent = (function (_React$Component) {
		_inherits(PureComponent, _React$Component);
	
		function PureComponent() {
			_classCallCheck(this, PureComponent);
	
			_get(Object.getPrototypeOf(PureComponent.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(PureComponent, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
				return !(0, _shallowEqual2["default"])(this.props, nextProps) || !(0, _shallowEqual2["default"])(this.state, nextState) || !(0, _shallowEqual2["default"])(this.context, nextContext);
			}
		}]);
	
		return PureComponent;
	})(_react2["default"].Component);
	
	module.exports = PureComponent;

/***/ },
/* 179 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.guid = guid;
	
	function guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
	}

/***/ },
/* 180 */
/***/ function(module, exports) {

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
	
	"use strict";
	
	function isPrimitive(value) {
		return value == null || typeof value !== "function" && typeof value !== "object";
	};
	
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
			if ( /* !isPrimitive(b[key]) || */!a.hasOwnProperty(key) || a[key] !== b[key]) {
				// console.log(key, a, b);
				return false;
			}
		}
		for (key in a) {
			numKeysA++;
		}
		return numKeysA === numKeysB;
	};
	
	module.exports = shallowEqual;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(191), __esModule: true };

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(193), __esModule: true };

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(194), __esModule: true };

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(195), __esModule: true };

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(196), __esModule: true };

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(197), __esModule: true };

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(198), __esModule: true };

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(185)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	__webpack_require__(58);
	module.exports = __webpack_require__(219);

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(221);
	module.exports = __webpack_require__(13).Number.isSafeInteger;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(222);
	module.exports = __webpack_require__(13).Object.assign;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223);
	module.exports = __webpack_require__(13).Object.keys;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224);
	module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	__webpack_require__(59);
	module.exports = __webpack_require__(22)('iterator');

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var toObject = __webpack_require__(57)
	  , IObject  = __webpack_require__(53)
	  , enumKeys = __webpack_require__(203)
	  , has      = __webpack_require__(43);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(41)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){   // eslint-disable-line no-unused-vars
	  var T = toObject(target)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = IObject(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(has(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(52)
	  , TAG = __webpack_require__(22)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(199);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(19);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(44)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(19)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(33)(IteratorPrototype, __webpack_require__(22)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(55)(1,next)});
	  __webpack_require__(56)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(26)
	    , fn   = (__webpack_require__(13).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(41)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(33);

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(19).getDesc
	  , isObject = __webpack_require__(44)
	  , anObject = __webpack_require__(51);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(202)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(42)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(214)
	  , defined   = __webpack_require__(40);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(41)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 214 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(53)
	  , defined = __webpack_require__(40);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 216 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(201)
	  , ITERATOR  = __webpack_require__(22)('iterator')
	  , Iterators = __webpack_require__(34);
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(51)
	  , get      = __webpack_require__(218);
	module.exports = __webpack_require__(13).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(217)
	  , step       = __webpack_require__(206)
	  , Iterators  = __webpack_require__(34)
	  , toIObject  = __webpack_require__(215);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(54)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $def      = __webpack_require__(26)
	  , isInteger = __webpack_require__(204)
	  , abs       = Math.abs;
	
	$def($def.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(26);
	
	$def($def.S + $def.F, 'Object', {assign: __webpack_require__(200)});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(57);
	
	__webpack_require__(208)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(26);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(210).set});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(226)();
	// imports
	
	
	// module
	exports.push([module.id, "@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\nhtml {\n  min-height: 100%;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\nbody {\n  padding-bottom: 0;\n  min-height: 100%;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n}\n\nbody:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  background-color: #eee;\n  color: #444;\n}\n\n.navbar {\n  padding: 0;\n  margin: 0;\n  border: none;\n  height: 45px;\n  min-height: 45px;\n  z-index: 200;\n}\n\n.navbar .navbar-inner {\n  border: 0;\n  border-radius: 0px;\n  background-clip: padding-box;\n  /* stops bg color from leaking outside the border: */\n  margin: 0;\n  padding-left: 0;\n  padding-right: 0;\n  min-height: 45px;\n  position: relative;\n  background: #2dc3e8;\n}\n\n.navbar .navbar-inner .navbar-container {\n  padding-left: 10px;\n  height: 45px;\n}\n\n.navbar .navbar-brand {\n  height: 45px;\n  width: 300px;\n  color: #000;\n}\n\n.navbar .sidebar-collapse {\n  text-align: center;\n  padding: 0;\n  position: absolute;\n  left: 300px;\n  top: 0px;\n  z-index: 2;\n  width: 35px;\n  height: 45px;\n}\n\n.navbar .sidebar-collapse:hover {\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n}\n\n.navbar .sidebar-collapse .collapse-icon {\n  display: inline-block;\n  cursor: pointer;\n  font-size: 18px;\n  color: #fff;\n  padding: 11px 5px;\n  line-height: 22px;\n  position: relative;\n  -webkit-transition: background-color 0.218s ease;\n  transition: background-color 0.218s ease;\n  -webkit-transition: box-shadow 0.218s ease;\n  transition: box-shadow 0.218s ease;\n  -webkit-transition: color 0.318s ease;\n  transition: color 0.318s ease;\n}\n\n.navbar .sidebar-collapse.active:hover {\n  box-shadow: none;\n}\n\n.navbar .sidebar-collapse.active .collapse-icon {\n  font-size: 14px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n  padding: 11px;\n}\n\n.navbar .account-area {\n  position: absolute;\n  top: 0;\n  right: 15px;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  list-style: none;\n  margin-bottom: 0;\n  display: inline-block;\n}\n\n.navbar .account-area > li {\n  float: left;\n  position: relative;\n  height: 45px;\n  min-width: 50px;\n  display: block;\n  z-index: 150;\n}\n\n.navbar .account-area > li > a:hover {\n  text-decoration: none;\n}\n\n.navbar .account-area > li:not(.marqee-area):hover {\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n}\n\n.navbar .account-area .icon {\n  display: block;\n  color: #fff;\n  font-size: 16px;\n  line-height: 45px;\n  text-align: center;\n  -webkit-transition: line-height 0.3s ease;\n  transition: line-height 0.3s ease;\n}\n\n.navbar .account-area .badge {\n  position: absolute;\n  top: 6px;\n  left: 4px;\n  padding: 2px;\n  cursor: pointer;\n  background-color: transparent !important;\n  border: 1px solid #fff;\n  width: 18px;\n  height: 18px;\n  box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2);\n}\n\n.navbar .account-area .marqee-area {\n  width: 200px;\n  line-height: 45px;\n  text-align: center;\n  color: #fff;\n  cursor: default;\n  overflow: hidden;\n}\n\n.navbar .account-area .marqee-area > ul {\n  position: relative;\n  left: -200px;\n  /* important (this should be negative number of list items width(including margin) */\n  list-style-type: none;\n  /* removing the default styling for unordered list items */\n  margin: 0px;\n  padding: 0px;\n  width: 9999px;\n  /* important */\n  /* non-important styling bellow */\n  padding-bottom: 0px;\n}\n\n.navbar .account-area .marqee-area > ul > li {\n  float: left;\n  /* important for inline positioning of the list items */\n  width: 200px;\n  /* fixed width, important */\n}\n\n.leftnav-hide .sidebar-left {\n  display: none;\n}\n\n.sidebar-left {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 85px;\n  display: block;\n}\n\n.sidebar-left.sidebar-fixed {\n  position: fixed;\n  top: 45px;\n  float: none !important;\n  z-index: 1000;\n}\n\n.sidebar-left.sidebar-fixed:before {\n  height: 5000px;\n  top: 45px;\n  bottom: auto;\n}\n\n.sidebar-left.hide {\n  display: none !important;\n}\n\n.sidebar-left.hide:before {\n  display: none;\n}\n\n.sidebar-left.hide + .page-content {\n  margin-left: 0 !important;\n}\n\n.sidebar-left.hide + .page-content .breadcrumbs-fixed {\n  left: 0 !important;\n}\n\n.sidebar-left.hide + .page-content .page-header-fixed {\n  left: 0 !important;\n}\n\n.sidebar-left:before {\n  content: \"\";\n  position: fixed;\n  display: block;\n  width: 80px;\n  bottom: 0;\n  top: 0;\n  left: 5px;\n  background-color: #fff;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.sidebar-left .nav-sidebar {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: 10px;\n  margin-top: 50px;\n}\n\n.sidebar-left .nav-sidebar > li {\n  position: relative;\n  background: #ccc;\n  width: 70px;\n  height: 70px;\n  margin-bottom: 5px;\n  z-index: 4;\n  cursor: pointer;\n}\n\n.sidebar-left .nav-sidebar > li .link_bg {\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  background: #444;\n  color: #fff;\n  z-index: 2;\n}\n\n.sidebar-left .nav-sidebar > li .link_title {\n  position: absolute;\n  height: 100%;\n  z-index: 3;\n  color: #fff;\n  width: 100%;\n}\n\n.sidebar-left .nav-sidebar > li .link_title .icon {\n  float: left;\n  width: 70px;\n  height: 70px;\n  text-align: center;\n}\n\n.sidebar-left .nav-sidebar > li .link_title .icon i {\n  top: 22px;\n  position: relative;\n}\n\n.sidebar-left .nav-sidebar > li .link_title .icon i.typcn {\n  top: 15px;\n}\n\n.sidebar-left .nav-sidebar > li .link_title .title {\n  float: left;\n  height: 100%;\n  visibility: visible;\n}\n\n.sidebar-left .nav-sidebar > li a {\n  margin: 0 auto;\n  font-family: arial;\n  color: #fff;\n  text-decoration: none;\n  width: 100%;\n  height: 70px;\n  text-align: center;\n}\n\n.sidebar-left .nav-sidebar > li a:hover, .sidebar-left .nav-sidebar > li a:focus {\n  background: none;\n}\n\n.sidebar-left .nav-sidebar > li span {\n  margin-top: 25px;\n  display: block;\n}\n\n.sidebar-left .nav-sidebar > li:hover {\n  width: 200px;\n}\n\n.sidebar-left .nav-sidebar > li:hover .link_bg {\n  width: 100%;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.sidebar-left .nav-sidebar > li:hover .title {\n  visibility: visible;\n  font-weight: bold;\n}\n\n.page-mainarea {\n  display: block;\n  margin-left: 85px;\n  position: absolute;\n  margin-right: 0;\n  margin-top: 0;\n  top: 45px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0;\n}\n\n.leftnav-hide .page-mainarea {\n  margin-left: 0px;\n}\n\n.header-hide .page-mainarea {\n  top: 0;\n}\n\n.content {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  right: 200px;\n}\n\n.content .section-head {\n  height: 30px;\n}\n\n.content .section-head .hideRight {\n  float: right;\n  margin-right: 15px;\n  background: white;\n}\n\n.content .section-head .chart-layout {\n  float: right;\n  margin-right: 3px;\n}\n\n.content .section-head .chart-layout ul {\n  min-width: 70px;\n}\n\n.content .section-head .chart-layout div {\n  float: left;\n  height: 30px;\n  background: white;\n  color: #fff;\n  margin: 0px 0px 0 0;\n}\n\n.content .section-head .chart-layout div span {\n  line-height: 30px;\n  margin: 0 5px;\n}\n\n.content .section-body {\n  position: absolute;\n  left: 0px;\n  top: 30px;\n  bottom: 0px;\n  right: 0px;\n  margin-right: 15px;\n}\n\n.content .section-body .full {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n.content .section-body .top {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  bottom: 50%;\n  right: 0px;\n}\n\n.content .section-body .bottom {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  bottom: 0px;\n  right: 0px;\n}\n\n.content .section-body .topof3 {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  bottom: 66%;\n  right: 0px;\n}\n\n.content .section-body .middleof3 {\n  position: absolute;\n  left: 0px;\n  top: 33%;\n  bottom: 33%;\n  right: 0px;\n}\n\n.content .section-body .bottomof3 {\n  position: absolute;\n  left: 0px;\n  top: 66%;\n  bottom: 0%;\n  right: 0px;\n}\n\n.content .section-body .topof3-left {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  bottom: 66%;\n  right: 50%;\n}\n\n.content .section-body .middleof3-left {\n  position: absolute;\n  left: 0px;\n  top: 33%;\n  bottom: 33%;\n  right: 50%;\n}\n\n.content .section-body .bottomof3-left {\n  position: absolute;\n  left: 0px;\n  top: 66%;\n  bottom: 0%;\n  right: 50%;\n}\n\n.content .section-body .topof3-right {\n  position: absolute;\n  left: 50%;\n  top: 0px;\n  bottom: 66%;\n  right: 0%;\n}\n\n.content .section-body .middleof3-right {\n  position: absolute;\n  left: 50%;\n  top: 33%;\n  bottom: 33%;\n  right: 0%;\n}\n\n.content .section-body .bottomof3-right {\n  position: absolute;\n  left: 50%;\n  top: 66%;\n  bottom: 0%;\n  right: 0%;\n}\n\n.content .section-body .top-left {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  bottom: 50%;\n  right: 50%;\n}\n\n.content .section-body .top-right {\n  position: absolute;\n  left: 50%;\n  top: 0px;\n  bottom: 50%;\n  right: 0px;\n}\n\n.content .section-body .bottom-left {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  bottom: 0px;\n  right: 50%;\n}\n\n.content .section-body .bottom-right {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  bottom: 0px;\n  right: 0px;\n}\n\n.expanded .content {\n  right: 0px;\n}\n\n.page-mainarea .rightpane {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 200px;\n  display: block;\n}\n\n.page-mainarea .rightpane:before {\n  content: \"\";\n  position: fixed;\n  width: 200px;\n  bottom: 0;\n  top: 0;\n  background-color: #fff;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.page-mainarea .rightpane div {\n  z-index: 2;\n  position: relative;\n  color: #000;\n}\n\n.expanded .rightpane {\n  display: none;\n}\n\n.chart-component {\n  display: block;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: #fff;\n  margin: 0px 0px 15px 15px;\n}\n\n.chart-component:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: #fff;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);\n  z-index: 0;\n}\n\n.chart-component .gcrow {\n  height: 34px;\n}\n\n.chart-component .gcrow > div {\n  float: left;\n}\n\n.chart-component .gcrow > div p {\n  height: 100%;\n  vertical-align: middle;\n}\n\n.chart-component .securitySearchSelector {\n  width: 160px;\n  /* enable absolute positioning */\n  /* style glyph */\n  /* align glyph */\n  /* add padding  */\n}\n\n.chart-component .securitySearchSelector.focus {\n  width: 400px;\n}\n\n.chart-component .securitySearchSelector .inner-addon {\n  position: relative;\n}\n\n.chart-component .securitySearchSelector ul.autocomplete {\n  width: 391px;\n}\n\n.chart-component .securitySearchSelector ul.autocomplete li.ticker {\n  border-bottom: 1px solid #f3f3f3;\n  font-size: 12px;\n}\n\n.chart-component .securitySearchSelector ul.autocomplete li.dropdown-header {\n  font-size: 11px;\n  background-color: #2dc3e8;\n}\n\n.chart-component .securitySearchSelector ul.autocomplete .pagination {\n  margin: 10px 10px 0 0;\n}\n\n.chart-component .securitySearchSelector ul.autocomplete .info {\n  float: left;\n  width: 170px;\n}\n\n.chart-component .securitySearchSelector .inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n  z-index: 3;\n}\n\n.chart-component .securitySearchSelector .left-addon .glyphicon {\n  left: 0px;\n}\n\n.chart-component .securitySearchSelector .right-addon .glyphicon {\n  right: 0px;\n}\n\n.chart-component .securitySearchSelector .left-addon input {\n  padding-left: 30px;\n}\n\n.chart-component .securitySearchSelector .right-addon input {\n  padding-right: 30px;\n}\n\n.chart-component .chartTypeSelector {\n  margin-left: 5px;\n}\n\n.chart-component .indicators {\n  margin-left: 5px;\n}\n\n.chart-component .indicators ul {\n  width: 391px;\n}\n\n.chart-component .indicators ul li.search {\n  background-color: #2dc3e8;\n}\n\n.chart-component .indicators ul li.search input {\n  width: 360px;\n}\n\n.chart-component .indicators ul .pagination {\n  margin: 10px 10px 0 0;\n}\n\n.chart-component .indicators ul .info {\n  float: left;\n  width: 170px;\n}\n\n.chart-component .chart-settings {\n  margin-left: 5px;\n}\n\n.chart-component .chart-settings .chart-settings-menu li {\n  margin: 0px 10px;\n}\n\n.chart-component .chart-settings .chart-settings-menu span {\n  line-height: 34px;\n}\n\n.chart-component .modal-container {\n  position: relative;\n}\n\n.chart-component .modal-container .modal, .chart-component .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n.chart-component .chart-widget {\n  position: absolute;\n  left: 0px;\n  top: 34px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.chart-component .chart-widget .centerMe {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n", ""]);
	
	// exports


/***/ },
/* 226 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Intro.js v1.1.1
	 * https://github.com/usablica/intro.js
	 * MIT licensed
	 *
	 * Copyright (C) 2013 usabli.ca - A weekend project by Afshin Mehrabani (@afshinmeh)
	 */
	
	(function (root, factory) {
	  if (true) {
	    // CommonJS
	    factory(exports);
	  } else if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module.
	    define(['exports'], factory);
	  } else {
	    // Browser globals
	    factory(root);
	  }
	} (this, function (exports) {
	  //Default config/variables
	  var VERSION = '1.1.1';
	
	  /**
	   * IntroJs main class
	   *
	   * @class IntroJs
	   */
	  function IntroJs(obj) {
	    this._targetElement = obj;
	
	    this._options = {
	      /* Next button label in tooltip box */
	      nextLabel: 'Next &rarr;',
	      /* Previous button label in tooltip box */
	      prevLabel: '&larr; Back',
	      /* Skip button label in tooltip box */
	      skipLabel: 'Skip',
	      /* Done button label in tooltip box */
	      doneLabel: 'Done',
	      /* Default tooltip box position */
	      tooltipPosition: 'bottom',
	      /* Next CSS class for tooltip boxes */
	      tooltipClass: '',
	      /* CSS class that is added to the helperLayer */
	      highlightClass: '',
	      /* Close introduction when pressing Escape button? */
	      exitOnEsc: true,
	      /* Close introduction when clicking on overlay layer? */
	      exitOnOverlayClick: true,
	      /* Show step numbers in introduction? */
	      showStepNumbers: true,
	      /* Let user use keyboard to navigate the tour? */
	      keyboardNavigation: true,
	      /* Show tour control buttons? */
	      showButtons: true,
	      /* Show tour bullets? */
	      showBullets: true,
	      /* Show tour progress? */
	      showProgress: false,
	      /* Scroll to highlighted element? */
	      scrollToElement: true,
	      /* Set the overlay opacity */
	      overlayOpacity: 0.8,
	      /* Precedence of positions, when auto is enabled */
	      positionPrecedence: ["bottom", "top", "right", "left"],
	      /* Disable an interaction with element? */
	      disableInteraction: false
	    };
	  }
	
	  /**
	   * Initiate a new introduction/guide from an element in the page
	   *
	   * @api private
	   * @method _introForElement
	   * @param {Object} targetElm
	   * @returns {Boolean} Success or not?
	   */
	  function _introForElement(targetElm) {
	    var introItems = [],
	        self = this;
	
	    if (this._options.steps) {
	      //use steps passed programmatically
	      for (var i = 0, stepsLength = this._options.steps.length; i < stepsLength; i++) {
	        var currentItem = _cloneObject(this._options.steps[i]);
	        //set the step
	        currentItem.step = introItems.length + 1;
	        //use querySelector function only when developer used CSS selector
	        if (typeof(currentItem.element) === 'string') {
	          //grab the element with given selector from the page
	          currentItem.element = document.querySelector(currentItem.element);
	        }
	
	        //intro without element
	        if (typeof(currentItem.element) === 'undefined' || currentItem.element == null) {
	          var floatingElementQuery = document.querySelector(".introjsFloatingElement");
	
	          if (floatingElementQuery == null) {
	            floatingElementQuery = document.createElement('div');
	            floatingElementQuery.className = 'introjsFloatingElement';
	
	            document.body.appendChild(floatingElementQuery);
	          }
	
	          currentItem.element  = floatingElementQuery;
	          currentItem.position = 'floating';
	        }
	
	        if (currentItem.element != null) {
	          introItems.push(currentItem);
	        }
	      }
	
	    } else {
	      //use steps from data-* annotations
	      var allIntroSteps = targetElm.querySelectorAll('*[data-intro]');
	      //if there's no element to intro
	      if (allIntroSteps.length < 1) {
	        return false;
	      }
	
	      //first add intro items with data-step
	      for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
	        var currentElement = allIntroSteps[i];
	        var step = parseInt(currentElement.getAttribute('data-step'), 10);
	
	        if (step > 0) {
	          introItems[step - 1] = {
	            element: currentElement,
	            intro: currentElement.getAttribute('data-intro'),
	            step: parseInt(currentElement.getAttribute('data-step'), 10),
	            tooltipClass: currentElement.getAttribute('data-tooltipClass'),
	            highlightClass: currentElement.getAttribute('data-highlightClass'),
	            position: currentElement.getAttribute('data-position') || this._options.tooltipPosition
	          };
	        }
	      }
	
	      //next add intro items without data-step
	      //todo: we need a cleanup here, two loops are redundant
	      var nextStep = 0;
	      for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
	        var currentElement = allIntroSteps[i];
	
	        if (currentElement.getAttribute('data-step') == null) {
	
	          while (true) {
	            if (typeof introItems[nextStep] == 'undefined') {
	              break;
	            } else {
	              nextStep++;
	            }
	          }
	
	          introItems[nextStep] = {
	            element: currentElement,
	            intro: currentElement.getAttribute('data-intro'),
	            step: nextStep + 1,
	            tooltipClass: currentElement.getAttribute('data-tooltipClass'),
	            highlightClass: currentElement.getAttribute('data-highlightClass'),
	            position: currentElement.getAttribute('data-position') || this._options.tooltipPosition
	          };
	        }
	      }
	    }
	
	    //removing undefined/null elements
	    var tempIntroItems = [];
	    for (var z = 0; z < introItems.length; z++) {
	      introItems[z] && tempIntroItems.push(introItems[z]);  // copy non-empty values to the end of the array
	    }
	
	    introItems = tempIntroItems;
	
	    //Ok, sort all items with given steps
	    introItems.sort(function (a, b) {
	      return a.step - b.step;
	    });
	
	    //set it to the introJs object
	    self._introItems = introItems;
	
	    //add overlay layer to the page
	    if(_addOverlayLayer.call(self, targetElm)) {
	      //then, start the show
	      _nextStep.call(self);
	
	      var skipButton     = targetElm.querySelector('.introjs-skipbutton'),
	          nextStepButton = targetElm.querySelector('.introjs-nextbutton');
	
	      self._onKeyDown = function(e) {
	        if (e.keyCode === 27 && self._options.exitOnEsc == true) {
	          //escape key pressed, exit the intro
	          //check if exit callback is defined
	          if (self._introExitCallback != undefined) {
	            self._introExitCallback.call(self);
	          }
	          _exitIntro.call(self, targetElm);
	        } else if(e.keyCode === 37) {
	          //left arrow
	          _previousStep.call(self);
	        } else if (e.keyCode === 39) {
	          //right arrow
	          _nextStep.call(self);
	        } else if (e.keyCode === 13) {
	          //srcElement === ie
	          var target = e.target || e.srcElement;
	          if (target && target.className.indexOf('introjs-prevbutton') > 0) {
	            //user hit enter while focusing on previous button
	            _previousStep.call(self);
	          } else if (target && target.className.indexOf('introjs-skipbutton') > 0) {
	            //user hit enter while focusing on skip button
	            if (self._introItems.length - 1 == self._currentStep && typeof (self._introCompleteCallback) === 'function') {
	                self._introCompleteCallback.call(self);
	            }
	            //check if any callback is defined
	            if (self._introExitCallback != undefined) {
	              self._introExitCallback.call(self);
	            }
	            _exitIntro.call(self, targetElm);
	          } else {
	            //default behavior for responding to enter
	            _nextStep.call(self);
	          }
	
	          //prevent default behaviour on hitting Enter, to prevent steps being skipped in some browsers
	          if(e.preventDefault) {
	            e.preventDefault();
	          } else {
	            e.returnValue = false;
	          }
	        }
	      };
	
	      self._onResize = function(e) {
	        _setHelperLayerPosition.call(self, document.querySelector('.introjs-helperLayer'));
	        _setHelperLayerPosition.call(self, document.querySelector('.introjs-tooltipReferenceLayer'));
	      };
	
	      if (window.addEventListener) {
	        if (this._options.keyboardNavigation) {
	          window.addEventListener('keydown', self._onKeyDown, true);
	        }
	        //for window resize
	        window.addEventListener('resize', self._onResize, true);
	      } else if (document.attachEvent) { //IE
	        if (this._options.keyboardNavigation) {
	          document.attachEvent('onkeydown', self._onKeyDown);
	        }
	        //for window resize
	        document.attachEvent('onresize', self._onResize);
	      }
	    }
	    return false;
	  }
	
	 /*
	   * makes a copy of the object
	   * @api private
	   * @method _cloneObject
	  */
	  function _cloneObject(object) {
	      if (object == null || typeof (object) != 'object' || typeof (object.nodeType) != 'undefined') {
	        return object;
	      }
	      var temp = {};
	      for (var key in object) {
	        if (typeof (jQuery) != 'undefined' && object[key] instanceof jQuery) {
	          temp[key] = object[key];
	        } else {
	          temp[key] = _cloneObject(object[key]);
	        }
	      }
	      return temp;
	  }
	  /**
	   * Go to specific step of introduction
	   *
	   * @api private
	   * @method _goToStep
	   */
	  function _goToStep(step) {
	    //because steps starts with zero
	    this._currentStep = step - 2;
	    if (typeof (this._introItems) !== 'undefined') {
	      _nextStep.call(this);
	    }
	  }
	
	  /**
	   * Go to next step on intro
	   *
	   * @api private
	   * @method _nextStep
	   */
	  function _nextStep() {
	    this._direction = 'forward';
	
	    if (typeof (this._currentStep) === 'undefined') {
	      this._currentStep = 0;
	    } else {
	      ++this._currentStep;
	    }
	
	    if ((this._introItems.length) <= this._currentStep) {
	      //end of the intro
	      //check if any callback is defined
	      if (typeof (this._introCompleteCallback) === 'function') {
	        this._introCompleteCallback.call(this);
	      }
	      _exitIntro.call(this, this._targetElement);
	      return;
	    }
	
	    var nextStep = this._introItems[this._currentStep];
	    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
	      this._introBeforeChangeCallback.call(this, nextStep.element);
	    }
	
	    _showElement.call(this, nextStep);
	  }
	
	  /**
	   * Go to previous step on intro
	   *
	   * @api private
	   * @method _nextStep
	   */
	  function _previousStep() {
	    this._direction = 'backward';
	
	    if (this._currentStep === 0) {
	      return false;
	    }
	
	    var nextStep = this._introItems[--this._currentStep];
	    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
	      this._introBeforeChangeCallback.call(this, nextStep.element);
	    }
	
	    _showElement.call(this, nextStep);
	  }
	
	  /**
	   * Exit from intro
	   *
	   * @api private
	   * @method _exitIntro
	   * @param {Object} targetElement
	   */
	  function _exitIntro(targetElement) {
	    //remove overlay layer from the page
	    var overlayLayer = targetElement.querySelector('.introjs-overlay');
	
	    //return if intro already completed or skipped
	    if (overlayLayer == null) {
	      return;
	    }
	
	    //for fade-out animation
	    overlayLayer.style.opacity = 0;
	    setTimeout(function () {
	      if (overlayLayer.parentNode) {
	        overlayLayer.parentNode.removeChild(overlayLayer);
	      }
	    }, 500);
	
	    //remove all helper layers
	    var helperLayer = targetElement.querySelector('.introjs-helperLayer');
	    if (helperLayer) {
	      helperLayer.parentNode.removeChild(helperLayer);
	    }
	
	    var referenceLayer = targetElement.querySelector('.introjs-tooltipReferenceLayer');
	    if (referenceLayer) {
	      referenceLayer.parentNode.removeChild(referenceLayer);
	    }
	    //remove disableInteractionLayer
	    var disableInteractionLayer = targetElement.querySelector('.introjs-disableInteraction');
	    if (disableInteractionLayer) {
	      disableInteractionLayer.parentNode.removeChild(disableInteractionLayer);
	    }
	
	    //remove intro floating element
	    var floatingElement = document.querySelector('.introjsFloatingElement');
	    if (floatingElement) {
	      floatingElement.parentNode.removeChild(floatingElement);
	    }
	
	    //remove `introjs-showElement` class from the element
	    var showElement = document.querySelector('.introjs-showElement');
	    if (showElement) {
	      showElement.className = showElement.className.replace(/introjs-[a-zA-Z]+/g, '').replace(/^\s+|\s+$/g, ''); // This is a manual trim.
	    }
	
	    //remove `introjs-fixParent` class from the elements
	    var fixParents = document.querySelectorAll('.introjs-fixParent');
	    if (fixParents && fixParents.length > 0) {
	      for (var i = fixParents.length - 1; i >= 0; i--) {
	        fixParents[i].className = fixParents[i].className.replace(/introjs-fixParent/g, '').replace(/^\s+|\s+$/g, '');
	      }
	    }
	
	    //clean listeners
	    if (window.removeEventListener) {
	      window.removeEventListener('keydown', this._onKeyDown, true);
	    } else if (document.detachEvent) { //IE
	      document.detachEvent('onkeydown', this._onKeyDown);
	    }
	
	    //set the step to zero
	    this._currentStep = undefined;
	  }
	
	  /**
	   * Render tooltip box in the page
	   *
	   * @api private
	   * @method _placeTooltip
	   * @param {HTMLElement} targetElement
	   * @param {HTMLElement} tooltipLayer
	   * @param {HTMLElement} arrowLayer
	   * @param {HTMLElement} helperNumberLayer
	   */
	  function _placeTooltip(targetElement, tooltipLayer, arrowLayer, helperNumberLayer) {
	    var tooltipCssClass = '',
	        currentStepObj,
	        tooltipOffset,
	        targetOffset,
	        windowSize,
	        currentTooltipPosition;
	
	    //reset the old style
	    tooltipLayer.style.top        = null;
	    tooltipLayer.style.right      = null;
	    tooltipLayer.style.bottom     = null;
	    tooltipLayer.style.left       = null;
	    tooltipLayer.style.marginLeft = null;
	    tooltipLayer.style.marginTop  = null;
	
	    arrowLayer.style.display = 'inherit';
	
	    if (typeof(helperNumberLayer) != 'undefined' && helperNumberLayer != null) {
	      helperNumberLayer.style.top  = null;
	      helperNumberLayer.style.left = null;
	    }
	
	    //prevent error when `this._currentStep` is undefined
	    if (!this._introItems[this._currentStep]) return;
	
	    //if we have a custom css class for each step
	    currentStepObj = this._introItems[this._currentStep];
	    if (typeof (currentStepObj.tooltipClass) === 'string') {
	      tooltipCssClass = currentStepObj.tooltipClass;
	    } else {
	      tooltipCssClass = this._options.tooltipClass;
	    }
	
	    tooltipLayer.className = ('introjs-tooltip ' + tooltipCssClass).replace(/^\s+|\s+$/g, '');
	
	    currentTooltipPosition = this._introItems[this._currentStep].position;
	    if ((currentTooltipPosition == "auto" || this._options.tooltipPosition == "auto")) {
	      if (currentTooltipPosition != "floating") { // Floating is always valid, no point in calculating
	        currentTooltipPosition = _determineAutoPosition.call(this, targetElement, tooltipLayer, currentTooltipPosition);
	      }
	    }
	    targetOffset  = _getOffset(targetElement);
	    tooltipOffset = _getOffset(tooltipLayer);
	    windowSize    = _getWinSize();
	    switch (currentTooltipPosition) {
	      case 'top':
	        arrowLayer.className = 'introjs-arrow bottom';
	
	        var tooltipLayerStyleLeft = 15;
	        _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
	        tooltipLayer.style.bottom = (targetOffset.height +  20) + 'px';
	        break;
	      case 'right':
	        tooltipLayer.style.left = (targetOffset.width + 20) + 'px';
	        if (targetOffset.top + tooltipOffset.height > windowSize.height) {
	          // In this case, right would have fallen below the bottom of the screen.
	          // Modify so that the bottom of the tooltip connects with the target
	          arrowLayer.className = "introjs-arrow left-bottom";
	          tooltipLayer.style.top = "-" + (tooltipOffset.height - targetOffset.height - 20) + "px";
	        } else {
	          arrowLayer.className = 'introjs-arrow left';
	        }
	        break;
	      case 'left':
	        if (this._options.showStepNumbers == true) {
	          tooltipLayer.style.top = '15px';
	        }
	
	        if (targetOffset.top + tooltipOffset.height > windowSize.height) {
	          // In this case, left would have fallen below the bottom of the screen.
	          // Modify so that the bottom of the tooltip connects with the target
	          tooltipLayer.style.top = "-" + (tooltipOffset.height - targetOffset.height - 20) + "px";
	          arrowLayer.className = 'introjs-arrow right-bottom';
	        } else {
	          arrowLayer.className = 'introjs-arrow right';
	        }
	        tooltipLayer.style.right = (targetOffset.width + 20) + 'px';
	
	        break;
	      case 'floating':
	        arrowLayer.style.display = 'none';
	
	        //we have to adjust the top and left of layer manually for intro items without element
	        tooltipLayer.style.left   = '50%';
	        tooltipLayer.style.top    = '50%';
	        tooltipLayer.style.marginLeft = '-' + (tooltipOffset.width / 2)  + 'px';
	        tooltipLayer.style.marginTop  = '-' + (tooltipOffset.height / 2) + 'px';
	
	        if (typeof(helperNumberLayer) != 'undefined' && helperNumberLayer != null) {
	          helperNumberLayer.style.left = '-' + ((tooltipOffset.width / 2) + 18) + 'px';
	          helperNumberLayer.style.top  = '-' + ((tooltipOffset.height / 2) + 18) + 'px';
	        }
	
	        break;
	      case 'bottom-right-aligned':
	        arrowLayer.className      = 'introjs-arrow top-right';
	
	        var tooltipLayerStyleRight = 0;
	        _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
	        tooltipLayer.style.top    = (targetOffset.height +  20) + 'px';
	        break;
	
	      case 'bottom-middle-aligned':
	        arrowLayer.className      = 'introjs-arrow top-middle';
	
	        var tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2;
	        if (_checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
	          tooltipLayer.style.right = null;
	          _checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
	        }
	        tooltipLayer.style.top = (targetOffset.height + 20) + 'px';
	        break;
	
	      case 'bottom-left-aligned':
	      // Bottom-left-aligned is the same as the default bottom
	      case 'bottom':
	      // Bottom going to follow the default behavior
	      default:
	        arrowLayer.className = 'introjs-arrow top';
	
	        var tooltipLayerStyleLeft = 0;
	        _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
	        tooltipLayer.style.top    = (targetOffset.height +  20) + 'px';
	        break;
	    }
	  }
	
	  /**
	   * Set tooltip left so it doesn't go off the right side of the window
	   *
	   * @return boolean true, if tooltipLayerStyleLeft is ok.  false, otherwise.
	   */
	  function _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer) {
	    if (targetOffset.left + tooltipLayerStyleLeft + tooltipOffset.width > windowSize.width) {
	      // off the right side of the window
	      tooltipLayer.style.left = (windowSize.width - tooltipOffset.width - targetOffset.left) + 'px';
	      return false;
	    }
	    tooltipLayer.style.left = tooltipLayerStyleLeft + 'px';
	    return true;
	  }
	
	  /**
	   * Set tooltip right so it doesn't go off the left side of the window
	   *
	   * @return boolean true, if tooltipLayerStyleRight is ok.  false, otherwise.
	   */
	  function _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer) {
	    if (targetOffset.left + targetOffset.width - tooltipLayerStyleRight - tooltipOffset.width < 0) {
	      // off the left side of the window
	      tooltipLayer.style.left = (-targetOffset.left) + 'px';
	      return false;
	    }
	    tooltipLayer.style.right = tooltipLayerStyleRight + 'px';
	    return true;
	  }
	
	  /**
	   * Determines the position of the tooltip based on the position precedence and availability
	   * of screen space.
	   *
	   * @param {Object} targetElement
	   * @param {Object} tooltipLayer
	   * @param {Object} desiredTooltipPosition
	   *
	   */
	  function _determineAutoPosition(targetElement, tooltipLayer, desiredTooltipPosition) {
	
	    // Take a clone of position precedence. These will be the available
	    var possiblePositions = this._options.positionPrecedence.slice();
	
	    var windowSize = _getWinSize();
	    var tooltipHeight = _getOffset(tooltipLayer).height + 10;
	    var tooltipWidth = _getOffset(tooltipLayer).width + 20;
	    var targetOffset = _getOffset(targetElement);
	
	    // If we check all the possible areas, and there are no valid places for the tooltip, the element
	    // must take up most of the screen real estate. Show the tooltip floating in the middle of the screen.
	    var calculatedPosition = "floating";
	
	    // Check if the width of the tooltip + the starting point would spill off the right side of the screen
	    // If no, neither bottom or top are valid
	    if (targetOffset.left + tooltipWidth > windowSize.width || ((targetOffset.left + (targetOffset.width / 2)) - tooltipWidth) < 0) {
	      _removeEntry(possiblePositions, "bottom");
	      _removeEntry(possiblePositions, "top");
	    } else {
	      // Check for space below
	      if ((targetOffset.height + targetOffset.top + tooltipHeight) > windowSize.height) {
	        _removeEntry(possiblePositions, "bottom");
	      }
	
	      // Check for space above
	      if (targetOffset.top - tooltipHeight < 0) {
	        _removeEntry(possiblePositions, "top");
	      }
	    }
	
	    // Check for space to the right
	    if (targetOffset.width + targetOffset.left + tooltipWidth > windowSize.width) {
	      _removeEntry(possiblePositions, "right");
	    }
	
	    // Check for space to the left
	    if (targetOffset.left - tooltipWidth < 0) {
	      _removeEntry(possiblePositions, "left");
	    }
	
	    // At this point, our array only has positions that are valid. Pick the first one, as it remains in order
	    if (possiblePositions.length > 0) {
	      calculatedPosition = possiblePositions[0];
	    }
	
	    // If the requested position is in the list, replace our calculated choice with that
	    if (desiredTooltipPosition && desiredTooltipPosition != "auto") {
	      if (possiblePositions.indexOf(desiredTooltipPosition) > -1) {
	        calculatedPosition = desiredTooltipPosition;
	      }
	    }
	
	    return calculatedPosition;
	  }
	
	  /**
	   * Remove an entry from a string array if it's there, does nothing if it isn't there.
	   *
	   * @param {Array} stringArray
	   * @param {String} stringToRemove
	   */
	  function _removeEntry(stringArray, stringToRemove) {
	    if (stringArray.indexOf(stringToRemove) > -1) {
	      stringArray.splice(stringArray.indexOf(stringToRemove), 1);
	    }
	  }
	
	  /**
	   * Update the position of the helper layer on the screen
	   *
	   * @api private
	   * @method _setHelperLayerPosition
	   * @param {Object} helperLayer
	   */
	  function _setHelperLayerPosition(helperLayer) {
	    if (helperLayer) {
	      //prevent error when `this._currentStep` in undefined
	      if (!this._introItems[this._currentStep]) return;
	
	      var currentElement  = this._introItems[this._currentStep],
	          elementPosition = _getOffset(currentElement.element),
	          widthHeightPadding = 10;
	
	      if (currentElement.position == 'floating') {
	        widthHeightPadding = 0;
	      }
	
	      //set new position to helper layer
	      helperLayer.setAttribute('style', 'width: ' + (elementPosition.width  + widthHeightPadding)  + 'px; ' +
	                                        'height:' + (elementPosition.height + widthHeightPadding)  + 'px; ' +
	                                        'top:'    + (elementPosition.top    - 5)   + 'px;' +
	                                        'left: '  + (elementPosition.left   - 5)   + 'px;');
	
	    }
	  }
	
	  /**
	   * Add disableinteraction layer and adjust the size and position of the layer
	   *
	   * @api private
	   * @method _disableInteraction
	   */
	  function _disableInteraction () {
	    var disableInteractionLayer = document.querySelector('.introjs-disableInteraction');
	    if (disableInteractionLayer === null) {
	      disableInteractionLayer = document.createElement('div');
	      disableInteractionLayer.className = 'introjs-disableInteraction';
	      this._targetElement.appendChild(disableInteractionLayer);
	    }
	
	    _setHelperLayerPosition.call(this, disableInteractionLayer);
	  }
	
	  /**
	   * Show an element on the page
	   *
	   * @api private
	   * @method _showElement
	   * @param {Object} targetElement
	   */
	  function _showElement(targetElement) {
	
	    if (typeof (this._introChangeCallback) !== 'undefined') {
	      this._introChangeCallback.call(this, targetElement.element);
	    }
	
	    var self = this,
	        oldHelperLayer = document.querySelector('.introjs-helperLayer'),
	        oldReferenceLayer = document.querySelector('.introjs-tooltipReferenceLayer'),
	        highlightClass = 'introjs-helperLayer',
	        elementPosition = _getOffset(targetElement.element);
	
	    //check for a current step highlight class
	    if (typeof (targetElement.highlightClass) === 'string') {
	      highlightClass += (' ' + targetElement.highlightClass);
	    }
	    //check for options highlight class
	    if (typeof (this._options.highlightClass) === 'string') {
	      highlightClass += (' ' + this._options.highlightClass);
	    }
	
	    if (oldHelperLayer != null) {
	      var oldHelperNumberLayer = oldReferenceLayer.querySelector('.introjs-helperNumberLayer'),
	          oldtooltipLayer      = oldReferenceLayer.querySelector('.introjs-tooltiptext'),
	          oldArrowLayer        = oldReferenceLayer.querySelector('.introjs-arrow'),
	          oldtooltipContainer  = oldReferenceLayer.querySelector('.introjs-tooltip'),
	          skipTooltipButton    = oldReferenceLayer.querySelector('.introjs-skipbutton'),
	          prevTooltipButton    = oldReferenceLayer.querySelector('.introjs-prevbutton'),
	          nextTooltipButton    = oldReferenceLayer.querySelector('.introjs-nextbutton');
	
	      //update or reset the helper highlight class
	      oldHelperLayer.className = highlightClass;
	      //hide the tooltip
	      oldtooltipContainer.style.opacity = 0;
	      oldtooltipContainer.style.display = "none";
	
	      if (oldHelperNumberLayer != null) {
	        var lastIntroItem = this._introItems[(targetElement.step - 2 >= 0 ? targetElement.step - 2 : 0)];
	
	        if (lastIntroItem != null && (this._direction == 'forward' && lastIntroItem.position == 'floating') || (this._direction == 'backward' && targetElement.position == 'floating')) {
	          oldHelperNumberLayer.style.opacity = 0;
	        }
	      }
	
	      //set new position to helper layer
	      _setHelperLayerPosition.call(self, oldHelperLayer);
	      _setHelperLayerPosition.call(self, oldReferenceLayer);
	
	      //remove `introjs-fixParent` class from the elements
	      var fixParents = document.querySelectorAll('.introjs-fixParent');
	      if (fixParents && fixParents.length > 0) {
	        for (var i = fixParents.length - 1; i >= 0; i--) {
	          fixParents[i].className = fixParents[i].className.replace(/introjs-fixParent/g, '').replace(/^\s+|\s+$/g, '');
	        };
	      }
	
	      //remove old classes
	      var oldShowElement = document.querySelector('.introjs-showElement');
	      oldShowElement.className = oldShowElement.className.replace(/introjs-[a-zA-Z]+/g, '').replace(/^\s+|\s+$/g, '');
	
	      //we should wait until the CSS3 transition is competed (it's 0.3 sec) to prevent incorrect `height` and `width` calculation
	      if (self._lastShowElementTimer) {
	        clearTimeout(self._lastShowElementTimer);
	      }
	      self._lastShowElementTimer = setTimeout(function() {
	        //set current step to the label
	        if (oldHelperNumberLayer != null) {
	          oldHelperNumberLayer.innerHTML = targetElement.step;
	        }
	        //set current tooltip text
	        oldtooltipLayer.innerHTML = targetElement.intro;
	        //set the tooltip position
	        oldtooltipContainer.style.display = "block";
	        _placeTooltip.call(self, targetElement.element, oldtooltipContainer, oldArrowLayer, oldHelperNumberLayer);
	
	        //change active bullet
	        oldReferenceLayer.querySelector('.introjs-bullets li > a.active').className = '';
	        oldReferenceLayer.querySelector('.introjs-bullets li > a[data-stepnumber="' + targetElement.step + '"]').className = 'active';
	
	        oldReferenceLayer.querySelector('.introjs-progress .introjs-progressbar').setAttribute('style', 'width:' + _getProgress.call(self) + '%;');
	
	        //show the tooltip
	        oldtooltipContainer.style.opacity = 1;
	        if (oldHelperNumberLayer) oldHelperNumberLayer.style.opacity = 1;
	
	        //reset button focus
	        if (nextTooltipButton.tabIndex === -1) {
	          //tabindex of -1 means we are at the end of the tour - focus on skip / done
	          skipTooltipButton.focus();
	        } else {
	          //still in the tour, focus on next
	          nextTooltipButton.focus();
	        }
	      }, 350);
	
	    } else {
	      var helperLayer       = document.createElement('div'),
	          referenceLayer    = document.createElement('div'),
	          arrowLayer        = document.createElement('div'),
	          tooltipLayer      = document.createElement('div'),
	          tooltipTextLayer  = document.createElement('div'),
	          bulletsLayer      = document.createElement('div'),
	          progressLayer     = document.createElement('div'),
	          buttonsLayer      = document.createElement('div');
	
	      helperLayer.className = highlightClass;
	      referenceLayer.className = 'introjs-tooltipReferenceLayer';
	
	      //set new position to helper layer
	      _setHelperLayerPosition.call(self, helperLayer);
	      _setHelperLayerPosition.call(self, referenceLayer);
	
	      //add helper layer to target element
	      this._targetElement.appendChild(helperLayer);
	      this._targetElement.appendChild(referenceLayer);
	
	      arrowLayer.className = 'introjs-arrow';
	
	      tooltipTextLayer.className = 'introjs-tooltiptext';
	      tooltipTextLayer.innerHTML = targetElement.intro;
	
	      bulletsLayer.className = 'introjs-bullets';
	
	      if (this._options.showBullets === false) {
	        bulletsLayer.style.display = 'none';
	      }
	
	      var ulContainer = document.createElement('ul');
	
	      for (var i = 0, stepsLength = this._introItems.length; i < stepsLength; i++) {
	        var innerLi    = document.createElement('li');
	        var anchorLink = document.createElement('a');
	
	        anchorLink.onclick = function() {
	          self.goToStep(this.getAttribute('data-stepnumber'));
	        };
	
	        if (i === (targetElement.step-1)) anchorLink.className = 'active';
	
	        anchorLink.href = 'javascript:void(0);';
	        anchorLink.innerHTML = "&nbsp;";
	        anchorLink.setAttribute('data-stepnumber', this._introItems[i].step);
	
	        innerLi.appendChild(anchorLink);
	        ulContainer.appendChild(innerLi);
	      }
	
	      bulletsLayer.appendChild(ulContainer);
	
	      progressLayer.className = 'introjs-progress';
	
	      if (this._options.showProgress === false) {
	        progressLayer.style.display = 'none';
	      }
	      var progressBar = document.createElement('div');
	      progressBar.className = 'introjs-progressbar';
	      progressBar.setAttribute('style', 'width:' + _getProgress.call(this) + '%;');
	
	      progressLayer.appendChild(progressBar);
	
	      buttonsLayer.className = 'introjs-tooltipbuttons';
	      if (this._options.showButtons === false) {
	        buttonsLayer.style.display = 'none';
	      }
	
	      tooltipLayer.className = 'introjs-tooltip';
	      tooltipLayer.appendChild(tooltipTextLayer);
	      tooltipLayer.appendChild(bulletsLayer);
	      tooltipLayer.appendChild(progressLayer);
	
	      //add helper layer number
	      if (this._options.showStepNumbers == true) {
	        var helperNumberLayer = document.createElement('span');
	        helperNumberLayer.className = 'introjs-helperNumberLayer';
	        helperNumberLayer.innerHTML = targetElement.step;
	        referenceLayer.appendChild(helperNumberLayer);
	      }
	
	      tooltipLayer.appendChild(arrowLayer);
	      referenceLayer.appendChild(tooltipLayer);
	
	      //next button
	      var nextTooltipButton = document.createElement('a');
	
	      nextTooltipButton.onclick = function() {
	        if (self._introItems.length - 1 != self._currentStep) {
	          _nextStep.call(self);
	        }
	      };
	
	      nextTooltipButton.href = 'javascript:void(0);';
	      nextTooltipButton.innerHTML = this._options.nextLabel;
	
	      //previous button
	      var prevTooltipButton = document.createElement('a');
	
	      prevTooltipButton.onclick = function() {
	        if (self._currentStep != 0) {
	          _previousStep.call(self);
	        }
	      };
	
	      prevTooltipButton.href = 'javascript:void(0);';
	      prevTooltipButton.innerHTML = this._options.prevLabel;
	
	      //skip button
	      var skipTooltipButton = document.createElement('a');
	      skipTooltipButton.className = 'introjs-button introjs-skipbutton';
	      skipTooltipButton.href = 'javascript:void(0);';
	      skipTooltipButton.innerHTML = this._options.skipLabel;
	
	      skipTooltipButton.onclick = function() {
	        if (self._introItems.length - 1 == self._currentStep && typeof (self._introCompleteCallback) === 'function') {
	          self._introCompleteCallback.call(self);
	        }
	
	        if (self._introItems.length - 1 != self._currentStep && typeof (self._introExitCallback) === 'function') {
	          self._introExitCallback.call(self);
	        }
	
	        _exitIntro.call(self, self._targetElement);
	      };
	
	      buttonsLayer.appendChild(skipTooltipButton);
	
	      //in order to prevent displaying next/previous button always
	      if (this._introItems.length > 1) {
	        buttonsLayer.appendChild(prevTooltipButton);
	        buttonsLayer.appendChild(nextTooltipButton);
	      }
	
	      tooltipLayer.appendChild(buttonsLayer);
	
	      //set proper position
	      _placeTooltip.call(self, targetElement.element, tooltipLayer, arrowLayer, helperNumberLayer);
	    }
	
	    //disable interaction
	    if (this._options.disableInteraction === true) {
	      _disableInteraction.call(self);
	    }
	
	    prevTooltipButton.removeAttribute('tabIndex');
	    nextTooltipButton.removeAttribute('tabIndex');
	
	    if (this._currentStep == 0 && this._introItems.length > 1) {
	      prevTooltipButton.className = 'introjs-button introjs-prevbutton introjs-disabled';
	      prevTooltipButton.tabIndex = '-1';
	      nextTooltipButton.className = 'introjs-button introjs-nextbutton';
	      skipTooltipButton.innerHTML = this._options.skipLabel;
	    } else if (this._introItems.length - 1 == this._currentStep || this._introItems.length == 1) {
	      skipTooltipButton.innerHTML = this._options.doneLabel;
	      prevTooltipButton.className = 'introjs-button introjs-prevbutton';
	      nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-disabled';
	      nextTooltipButton.tabIndex = '-1';
	    } else {
	      prevTooltipButton.className = 'introjs-button introjs-prevbutton';
	      nextTooltipButton.className = 'introjs-button introjs-nextbutton';
	      skipTooltipButton.innerHTML = this._options.skipLabel;
	    }
	
	    //Set focus on "next" button, so that hitting Enter always moves you onto the next step
	    nextTooltipButton.focus();
	
	    //add target element position style
	    targetElement.element.className += ' introjs-showElement';
	
	    var currentElementPosition = _getPropValue(targetElement.element, 'position');
	    if (currentElementPosition !== 'absolute' &&
	        currentElementPosition !== 'relative') {
	      //change to new intro item
	      targetElement.element.className += ' introjs-relativePosition';
	    }
	
	    var parentElm = targetElement.element.parentNode;
	    while (parentElm != null) {
	      if (parentElm.tagName.toLowerCase() === 'body') break;
	
	      //fix The Stacking Contenxt problem.
	      //More detail: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
	      var zIndex = _getPropValue(parentElm, 'z-index');
	      var opacity = parseFloat(_getPropValue(parentElm, 'opacity'));
	      var transform = _getPropValue(parentElm, 'transform') || _getPropValue(parentElm, '-webkit-transform') || _getPropValue(parentElm, '-moz-transform') || _getPropValue(parentElm, '-ms-transform') || _getPropValue(parentElm, '-o-transform');
	      if (/[0-9]+/.test(zIndex) || opacity < 1 || (transform !== 'none' && transform !== undefined)) {
	        parentElm.className += ' introjs-fixParent';
	      }
	
	      parentElm = parentElm.parentNode;
	    }
	
	    if (!_elementInViewport(targetElement.element) && this._options.scrollToElement === true) {
	      var rect = targetElement.element.getBoundingClientRect(),
	        winHeight = _getWinSize().height,
	        top = rect.bottom - (rect.bottom - rect.top),
	        bottom = rect.bottom - winHeight;
	
	      //Scroll up
	      if (top < 0 || targetElement.element.clientHeight > winHeight) {
	        window.scrollBy(0, top - 30); // 30px padding from edge to look nice
	
	      //Scroll down
	      } else {
	        window.scrollBy(0, bottom + 100); // 70px + 30px padding from edge to look nice
	      }
	    }
	
	    if (typeof (this._introAfterChangeCallback) !== 'undefined') {
	      this._introAfterChangeCallback.call(this, targetElement.element);
	    }
	  }
	
	  /**
	   * Get an element CSS property on the page
	   * Thanks to JavaScript Kit: http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
	   *
	   * @api private
	   * @method _getPropValue
	   * @param {Object} element
	   * @param {String} propName
	   * @returns Element's property value
	   */
	  function _getPropValue (element, propName) {
	    var propValue = '';
	    if (element.currentStyle) { //IE
	      propValue = element.currentStyle[propName];
	    } else if (document.defaultView && document.defaultView.getComputedStyle) { //Others
	      propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName);
	    }
	
	    //Prevent exception in IE
	    if (propValue && propValue.toLowerCase) {
	      return propValue.toLowerCase();
	    } else {
	      return propValue;
	    }
	  }
	
	  /**
	   * Provides a cross-browser way to get the screen dimensions
	   * via: http://stackoverflow.com/questions/5864467/internet-explorer-innerheight
	   *
	   * @api private
	   * @method _getWinSize
	   * @returns {Object} width and height attributes
	   */
	  function _getWinSize() {
	    if (window.innerWidth != undefined) {
	      return { width: window.innerWidth, height: window.innerHeight };
	    } else {
	      var D = document.documentElement;
	      return { width: D.clientWidth, height: D.clientHeight };
	    }
	  }
	
	  /**
	   * Add overlay layer to the page
	   * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	   *
	   * @api private
	   * @method _elementInViewport
	   * @param {Object} el
	   */
	  function _elementInViewport(el) {
	    var rect = el.getBoundingClientRect();
	
	    return (
	      rect.top >= 0 &&
	      rect.left >= 0 &&
	      (rect.bottom+80) <= window.innerHeight && // add 80 to get the text right
	      rect.right <= window.innerWidth
	    );
	  }
	
	  /**
	   * Add overlay layer to the page
	   *
	   * @api private
	   * @method _addOverlayLayer
	   * @param {Object} targetElm
	   */
	  function _addOverlayLayer(targetElm) {
	    var overlayLayer = document.createElement('div'),
	        styleText = '',
	        self = this;
	
	    //set css class name
	    overlayLayer.className = 'introjs-overlay';
	
	    //check if the target element is body, we should calculate the size of overlay layer in a better way
	    if (targetElm.tagName.toLowerCase() === 'body') {
	      styleText += 'top: 0;bottom: 0; left: 0;right: 0;position: fixed;';
	      overlayLayer.setAttribute('style', styleText);
	    } else {
	      //set overlay layer position
	      var elementPosition = _getOffset(targetElm);
	      if (elementPosition) {
	        styleText += 'width: ' + elementPosition.width + 'px; height:' + elementPosition.height + 'px; top:' + elementPosition.top + 'px;left: ' + elementPosition.left + 'px;';
	        overlayLayer.setAttribute('style', styleText);
	      }
	    }
	
	    targetElm.appendChild(overlayLayer);
	
	    overlayLayer.onclick = function() {
	      if (self._options.exitOnOverlayClick == true) {
	
	        //check if any callback is defined
	        if (self._introExitCallback != undefined) {
	          self._introExitCallback.call(self);
	        }
	        _exitIntro.call(self, targetElm);
	      }
	    };
	
	    setTimeout(function() {
	      styleText += 'opacity: ' + self._options.overlayOpacity.toString() + ';';
	      overlayLayer.setAttribute('style', styleText);
	    }, 10);
	
	    return true;
	  }
	
	  /**
	   * Get an element position on the page
	   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
	   *
	   * @api private
	   * @method _getOffset
	   * @param {Object} element
	   * @returns Element's position info
	   */
	  function _getOffset(element) {
	    var elementPosition = {};
	
	    //set width
	    elementPosition.width = element.offsetWidth;
	
	    //set height
	    elementPosition.height = element.offsetHeight;
	
	    //calculate element top and left
	    var _x = 0;
	    var _y = 0;
	    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
	      _x += element.offsetLeft;
	      _y += element.offsetTop;
	      element = element.offsetParent;
	    }
	    //set top
	    elementPosition.top = _y;
	    //set left
	    elementPosition.left = _x;
	
	    return elementPosition;
	  }
	
	  /**
	   * Gets the current progress percentage
	   *
	   * @api private
	   * @method _getProgress
	   * @returns current progress percentage
	   */
	  function _getProgress() {
	    // Steps are 0 indexed
	    var currentStep = parseInt((this._currentStep + 1), 10);
	    return ((currentStep / this._introItems.length) * 100);
	  }
	
	  /**
	   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
	   * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
	   *
	   * @param obj1
	   * @param obj2
	   * @returns obj3 a new object based on obj1 and obj2
	   */
	  function _mergeOptions(obj1,obj2) {
	    var obj3 = {};
	    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
	    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
	    return obj3;
	  }
	
	  var introJs = function (targetElm) {
	    if (typeof (targetElm) === 'object') {
	      //Ok, create a new instance
	      return new IntroJs(targetElm);
	
	    } else if (typeof (targetElm) === 'string') {
	      //select the target element with query selector
	      var targetElement = document.querySelector(targetElm);
	
	      if (targetElement) {
	        return new IntroJs(targetElement);
	      } else {
	        throw new Error('There is no element with given selector.');
	      }
	    } else {
	      return new IntroJs(document.body);
	    }
	  };
	
	  /**
	   * Current IntroJs version
	   *
	   * @property version
	   * @type String
	   */
	  introJs.version = VERSION;
	
	  //Prototype
	  introJs.fn = IntroJs.prototype = {
	    clone: function () {
	      return new IntroJs(this);
	    },
	    setOption: function(option, value) {
	      this._options[option] = value;
	      return this;
	    },
	    setOptions: function(options) {
	      this._options = _mergeOptions(this._options, options);
	      return this;
	    },
	    start: function () {
	      _introForElement.call(this, this._targetElement);
	      return this;
	    },
	    goToStep: function(step) {
	      _goToStep.call(this, step);
	      return this;
	    },
	    nextStep: function() {
	      _nextStep.call(this);
	      return this;
	    },
	    previousStep: function() {
	      _previousStep.call(this);
	      return this;
	    },
	    exit: function() {
	      _exitIntro.call(this, this._targetElement);
	      return this;
	    },
	    refresh: function() {
	      _setHelperLayerPosition.call(this, document.querySelector('.introjs-helperLayer'));
	      _setHelperLayerPosition.call(this, document.querySelector('.introjs-tooltipReferenceLayer'));
	      return this;
	    },
	    onbeforechange: function(providedCallback) {
	      if (typeof (providedCallback) === 'function') {
	        this._introBeforeChangeCallback = providedCallback;
	      } else {
	        throw new Error('Provided callback for onbeforechange was not a function');
	      }
	      return this;
	    },
	    onchange: function(providedCallback) {
	      if (typeof (providedCallback) === 'function') {
	        this._introChangeCallback = providedCallback;
	      } else {
	        throw new Error('Provided callback for onchange was not a function.');
	      }
	      return this;
	    },
	    onafterchange: function(providedCallback) {
	      if (typeof (providedCallback) === 'function') {
	        this._introAfterChangeCallback = providedCallback;
	      } else {
	        throw new Error('Provided callback for onafterchange was not a function');
	      }
	      return this;
	    },
	    oncomplete: function(providedCallback) {
	      if (typeof (providedCallback) === 'function') {
	        this._introCompleteCallback = providedCallback;
	      } else {
	        throw new Error('Provided callback for oncomplete was not a function.');
	      }
	      return this;
	    },
	    onexit: function(providedCallback) {
	      if (typeof (providedCallback) === 'function') {
	        this._introExitCallback = providedCallback;
	      } else {
	        throw new Error('Provided callback for onexit was not a function.');
	      }
	      return this;
	    }
	  };
	
	  exports.introJs = introJs;
	  return introJs;
	}));


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 229 */
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(15);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(14);
	
	var _JSONArrow = __webpack_require__(46);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	var _grabNode = __webpack_require__(35);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};
	
	var JSONArrayNode = (function (_React$Component) {
	  _inherits(JSONArrayNode, _React$Component);
	
	  function JSONArrayNode(props) {
	    _classCallCheck(this, _JSONArrayNode);
	
	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }
	
	  // Returns the child nodes for each element in the array. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.
	
	  JSONArrayNode.prototype.getChildNodes = function getChildNodes() {
	    var _this = this;
	
	    if (this.state.expanded && this.needsChildNodes) {
	      (function () {
	        var childNodes = [];
	        _this.props.data.forEach(function (element, idx) {
	          var prevData = undefined;
	          if (typeof _this.props.previousData !== 'undefined' && _this.props.previousData !== null) {
	            prevData = _this.props.previousData[idx];
	          }
	          var node = _grabNode2['default'](idx, element, prevData, _this.props.theme);
	          if (node !== false) {
	            childNodes.push(node);
	          }
	        });
	        _this.needsChildNodes = false;
	        _this.renderedChildren = childNodes;
	      })();
	    }
	    return this.renderedChildren;
	  };
	
	  // Returns the "n Items" string for this node, generating and
	  // caching it if it hasn't been created yet.
	
	  JSONArrayNode.prototype.getItemString = function getItemString() {
	    if (!this.itemString) {
	      this.itemString = this.props.data.length + ' item' + (this.props.data.length !== 1 ? 's' : '');
	    }
	    return this.itemString;
	  };
	
	  JSONArrayNode.prototype.render = function render() {
	    var childNodes = this.getChildNodes();
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0E
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: spanStyle, onClick: this.handleClick.bind(this) },
	        _react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '[]'
	        ),
	        this.getItemString()
	      ),
	      _react2['default'].createElement(
	        'ol',
	        { style: childListStyle },
	        childNodes
	      )
	    );
	  };
	
	  var _JSONArrayNode = JSONArrayNode;
	  JSONArrayNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONArrayNode) || JSONArrayNode;
	  return JSONArrayNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONArrayNode;
	module.exports = exports['default'];
	
	// flag to see if we still need to render our child nodes
	
	// cache store for our child nodes
	
	// cache store for the number of items string we display

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(15);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(14);
	
	var _utilsHexToRgb = __webpack_require__(27);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONBooleanNode = (function (_React$Component) {
	  _inherits(JSONBooleanNode, _React$Component);
	
	  function JSONBooleanNode() {
	    _classCallCheck(this, _JSONBooleanNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONBooleanNode.prototype.render = function render() {
	    var truthString = this.props.value ? 'true' : 'false';
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base09 } },
	        truthString
	      )
	    );
	  };
	
	  var _JSONBooleanNode = JSONBooleanNode;
	  JSONBooleanNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONBooleanNode) || JSONBooleanNode;
	  return JSONBooleanNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONBooleanNode;
	module.exports = exports['default'];

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(15);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(14);
	
	var _utilsHexToRgb = __webpack_require__(27);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONDateNode = (function (_React$Component) {
	  _inherits(JSONDateNode, _React$Component);
	
	  function JSONDateNode() {
	    _classCallCheck(this, _JSONDateNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONDateNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base0B } },
	        this.props.value.toISOString()
	      )
	    );
	  };
	
	  var _JSONDateNode = JSONDateNode;
	  JSONDateNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONDateNode) || JSONDateNode;
	  return JSONDateNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONDateNode;
	module.exports = exports['default'];

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _getIterator = __webpack_require__(181)['default'];
	
	var _Number$isSafeInteger = __webpack_require__(182)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(15);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(14);
	
	var _JSONArrow = __webpack_require__(46);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	var _grabNode = __webpack_require__(35);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};
	
	var JSONIterableNode = (function (_React$Component) {
	  _inherits(JSONIterableNode, _React$Component);
	
	  function JSONIterableNode(props) {
	    _classCallCheck(this, _JSONIterableNode);
	
	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }
	
	  // Returns the child nodes for each entry in iterable. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.
	
	  JSONIterableNode.prototype.getChildNodes = function getChildNodes() {
	    if (this.state.expanded && this.needsChildNodes) {
	      var childNodes = [];
	      for (var _iterator = this.props.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
	        var _ref;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }
	
	        var entry = _ref;
	
	        var key = null;
	        var value = null;
	        if (Array.isArray(entry)) {
	          key = entry[0];
	          value = entry[1];
	        } else {
	          key = childNodes.length;
	          value = entry;
	        }
	
	        var prevData = undefined;
	        if (typeof this.props.previousData !== 'undefined' && this.props.previousData !== null) {
	          prevData = this.props.previousData[key];
	        }
	        var node = _grabNode2['default'](key, value, prevData, this.props.theme);
	        if (node !== false) {
	          childNodes.push(node);
	        }
	      }
	      this.needsChildNodes = false;
	      this.renderedChildren = childNodes;
	    }
	    return this.renderedChildren;
	  };
	
	  // Returns the "n entries" string for this node, generating and
	  // caching it if it hasn't been created yet.
	
	  JSONIterableNode.prototype.getItemString = function getItemString() {
	    if (!this.itemString) {
	      var data = this.props.data;
	
	      var count = 0;
	      if (_Number$isSafeInteger(data.size)) {
	        count = data.size;
	      } else {
	        for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
	          var _ref2;
	
	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	          }
	
	          var entry = _ref2;
	          // eslint-disable-line no-unused-vars
	          count += 1;
	        }
	      }
	      this.itemString = count + ' entr' + (count !== 1 ? 'ies' : 'y');
	    }
	    return this.itemString;
	  };
	
	  JSONIterableNode.prototype.render = function render() {
	    var childNodes = this.getChildNodes();
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0E
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: spanStyle, onClick: this.handleClick.bind(this) },
	        _react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '()'
	        ),
	        this.getItemString()
	      ),
	      _react2['default'].createElement(
	        'ol',
	        { style: childListStyle },
	        childNodes
	      )
	    );
	  };
	
	  var _JSONIterableNode = JSONIterableNode;
	  JSONIterableNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONIterableNode) || JSONIterableNode;
	  return JSONIterableNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONIterableNode;
	module.exports = exports['default'];
	
	// flag to see if we still need to render our child nodes
	
	// cache store for our child nodes
	
	// cache store for the number of items string we display

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(15);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(14);
	
	var _utilsHexToRgb = __webpack_require__(27);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONNullNode = (function (_React$Component) {
	  _inherits(JSONNullNode, _React$Component);
	
	  function JSONNullNode() {
	    _classCallCheck(this, _JSONNullNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONNullNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base08 } },
	        'null'
	      )
	    );
	  };
	
	  var _JSONNullNode = JSONNullNode;
	  JSONNullNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONNullNode) || JSONNullNode;
	  return JSONNullNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONNullNode;
	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(15);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(14);
	
	var _utilsHexToRgb = __webpack_require__(27);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONNumberNode = (function (_React$Component) {
	  _inherits(JSONNumberNode, _React$Component);
	
	  function JSONNumberNode() {
	    _classCallCheck(this, _JSONNumberNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONNumberNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base09 } },
	        this.props.value
	      )
	    );
	  };
	
	  var _JSONNumberNode = JSONNumberNode;
	  JSONNumberNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONNumberNode) || JSONNumberNode;
	  return JSONNumberNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONNumberNode;
	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _Object$keys = __webpack_require__(186)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(15);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(14);
	
	var _JSONArrow = __webpack_require__(46);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	var _grabNode = __webpack_require__(35);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};
	
	var JSONObjectNode = (function (_React$Component) {
	  _inherits(JSONObjectNode, _React$Component);
	
	  function JSONObjectNode(props) {
	    _classCallCheck(this, _JSONObjectNode);
	
	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.itemString = false;
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }
	
	  // Returns the child nodes for each element in the object. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.
	
	  JSONObjectNode.prototype.getChildNodes = function getChildNodes() {
	    if (this.state.expanded && this.needsChildNodes) {
	      var obj = this.props.data;
	      var childNodes = [];
	      for (var k in obj) {
	        if (obj.hasOwnProperty(k)) {
	          var prevData = undefined;
	          if (typeof this.props.previousData !== 'undefined' && this.props.previousData !== null) {
	            prevData = this.props.previousData[k];
	          }
	          var node = _grabNode2['default'](k, obj[k], prevData, this.props.theme);
	          if (node !== false) {
	            childNodes.push(node);
	          }
	        }
	      }
	      this.needsChildNodes = false;
	      this.renderedChildren = childNodes;
	    }
	    return this.renderedChildren;
	  };
	
	  // Returns the "n Items" string for this node, generating and
	  // caching it if it hasn't been created yet.
	
	  JSONObjectNode.prototype.getItemString = function getItemString() {
	    if (!this.itemString) {
	      var len = _Object$keys(this.props.data).length;
	      this.itemString = len + ' key' + (len !== 1 ? 's' : '');
	    }
	    return this.itemString;
	  };
	
	  JSONObjectNode.prototype.render = function render() {
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0B
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: spanStyle, onClick: this.handleClick.bind(this) },
	        _react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '{}'
	        ),
	        this.getItemString()
	      ),
	      _react2['default'].createElement(
	        'ul',
	        { style: childListStyle },
	        this.getChildNodes()
	      )
	    );
	  };
	
	  var _JSONObjectNode = JSONObjectNode;
	  JSONObjectNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONObjectNode) || JSONObjectNode;
	  return JSONObjectNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONObjectNode;
	module.exports = exports['default'];
	
	// cache store for the number of items string we display
	
	// flag to see if we still need to render our child nodes
	
	// cache store for our child nodes

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(10)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	var _extends = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(15);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(14);
	
	var _utilsHexToRgb = __webpack_require__(27);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONStringNode = (function (_React$Component) {
	  _inherits(JSONStringNode, _React$Component);
	
	  function JSONStringNode() {
	    _classCallCheck(this, _JSONStringNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONStringNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base0B } },
	        '"',
	        this.props.value,
	        '"'
	      )
	    );
	  };
	
	  var _JSONStringNode = JSONStringNode;
	  JSONStringNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONStringNode) || JSONStringNode;
	  return JSONStringNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONStringNode;
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    this.setState({
	      expanded: !this.state.expanded
	    });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    // resets our caches and flags we need to build child nodes again
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.needsChildNodes = true;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 239 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol$iterator = __webpack_require__(188)['default'];
	
	exports.__esModule = true;
	
	exports['default'] = function (obj) {
	  if (obj !== null && typeof obj === 'object' && !Array.isArray(obj) && typeof obj[_Symbol$iterator] === 'function') {
	    return 'Iterable';
	  }
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};
	
	module.exports = exports['default'];

/***/ },
/* 241 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = createConnect;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _utilsCreateStoreShape = __webpack_require__(63);
	
	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);
	
	var _utilsShallowEqual = __webpack_require__(245);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsIsPlainObject = __webpack_require__(244);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	var _utilsWrapActionCreators = __webpack_require__(246);
	
	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);
	
	var _invariant = __webpack_require__(228);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function createConnect(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;
	
	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	    var shouldSubscribe = Boolean(mapStateToProps);
	    var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	    var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	    var finalMergeProps = mergeProps || defaultMergeProps;
	    var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	    var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	    var _options$pure = options.pure;
	    var pure = _options$pure === undefined ? true : _options$pure;
	
	    // Helps track hot reloading.
	    var version = nextVersion++;
	
	    function computeStateProps(store, props) {
	      var state = store.getState();
	      var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);
	
	      _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	      return stateProps;
	    }
	
	    function computeDispatchProps(store, props) {
	      var dispatch = store.dispatch;
	
	      var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);
	
	      _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	      return dispatchProps;
	    }
	
	    function _computeNextState(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	      return mergedProps;
	    }
	
	    return function wrapWithConnect(WrappedComponent) {
	      var Connect = (function (_Component) {
	        _inherits(Connect, _Component);
	
	        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	          if (!pure) {
	            this.updateState(nextProps);
	            return true;
	          }
	
	          var storeChanged = nextState.storeState !== this.state.storeState;
	          var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	          var mapStateProducedChange = false;
	          var dispatchPropsChanged = false;
	
	          if (storeChanged || propsChanged && shouldUpdateStateProps) {
	            mapStateProducedChange = this.updateStateProps(nextProps);
	          }
	
	          if (propsChanged && shouldUpdateDispatchProps) {
	            dispatchPropsChanged = this.updateDispatchProps(nextProps);
	          }
	
	          if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	            this.updateState(nextProps);
	            return true;
	          }
	
	          return false;
	        };
	
	        _createClass(Connect, null, [{
	          key: 'displayName',
	          value: 'Connect(' + getDisplayName(WrappedComponent) + ')',
	          enumerable: true
	        }, {
	          key: 'WrappedComponent',
	          value: WrappedComponent,
	          enumerable: true
	        }, {
	          key: 'contextTypes',
	          value: {
	            store: storeShape
	          },
	          enumerable: true
	        }, {
	          key: 'propTypes',
	          value: {
	            store: storeShape
	          },
	          enumerable: true
	        }]);
	
	        function Connect(props, context) {
	          _classCallCheck(this, Connect);
	
	          _Component.call(this, props, context);
	          this.version = version;
	          this.store = props.store || context.store;
	
	          _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));
	
	          this.stateProps = computeStateProps(this.store, props);
	          this.dispatchProps = computeDispatchProps(this.store, props);
	          this.state = { storeState: null };
	          this.updateState();
	        }
	
	        Connect.prototype.computeNextState = function computeNextState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	          return _computeNextState(this.stateProps, this.dispatchProps, props);
	        };
	
	        Connect.prototype.updateStateProps = function updateStateProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	          var nextStateProps = computeStateProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	            return false;
	          }
	
	          this.stateProps = nextStateProps;
	          return true;
	        };
	
	        Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	          var nextDispatchProps = computeDispatchProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	            return false;
	          }
	
	          this.dispatchProps = nextDispatchProps;
	          return true;
	        };
	
	        Connect.prototype.updateState = function updateState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	          this.nextState = this.computeNextState(props);
	        };
	
	        Connect.prototype.isSubscribed = function isSubscribed() {
	          return typeof this.unsubscribe === 'function';
	        };
	
	        Connect.prototype.trySubscribe = function trySubscribe() {
	          if (shouldSubscribe && !this.unsubscribe) {
	            this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	            this.handleChange();
	          }
	        };
	
	        Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	            this.unsubscribe = null;
	          }
	        };
	
	        Connect.prototype.componentDidMount = function componentDidMount() {
	          this.trySubscribe();
	        };
	
	        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	          this.tryUnsubscribe();
	        };
	
	        Connect.prototype.handleChange = function handleChange() {
	          if (!this.unsubscribe) {
	            return;
	          }
	
	          this.setState({
	            storeState: this.store.getState()
	          });
	        };
	
	        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	          return this.refs.wrappedInstance;
	        };
	
	        Connect.prototype.render = function render() {
	          return React.createElement(WrappedComponent, _extends({ ref: 'wrappedInstance'
	          }, this.nextState));
	        };
	
	        return Connect;
	      })(Component);
	
	      if (process.env.NODE_ENV !== 'production') {
	        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	          if (this.version === version) {
	            return;
	          }
	
	          // We are hot reloading!
	          this.version = version;
	
	          // Update the state and bindings.
	          this.trySubscribe();
	          this.updateStateProps();
	          this.updateDispatchProps();
	          this.updateState();
	        };
	      }
	
	      return Connect;
	    };
	  };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = createProvider;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _utilsCreateStoreShape = __webpack_require__(63);
	
	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);
	
	function isUsingOwnerContext(React) {
	  var version = React.version;
	
	  if (typeof version !== 'string') {
	    return true;
	  }
	
	  var sections = version.split('.');
	  var major = parseInt(sections[0], 10);
	  var minor = parseInt(sections[1], 10);
	
	  return major === 0 && minor === 13;
	}
	
	function createProvider(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;
	  var Children = React.Children;
	
	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);
	  var requireFunctionChild = isUsingOwnerContext(React);
	
	  var didWarnAboutChild = false;
	  function warnAboutFunctionChild() {
	    if (didWarnAboutChild || requireFunctionChild) {
	      return;
	    }
	
	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.14 and later versions, you no longer need to ' + 'wrap <Provider> child into a function.');
	  }
	  function warnAboutElementChild() {
	    if (didWarnAboutChild || !requireFunctionChild) {
	      return;
	    }
	
	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.13, you need to ' + 'wrap <Provider> child into a function. ' + 'This restriction will be removed with React 0.14.');
	  }
	
	  var didWarnAboutReceivingStore = false;
	  function warnAboutReceivingStore() {
	    if (didWarnAboutReceivingStore) {
	      return;
	    }
	
	    didWarnAboutReceivingStore = true;
	    console.error( // eslint-disable-line no-console
	    '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	  }
	
	  return (function (_Component) {
	    _inherits(Provider, _Component);
	
	    Provider.prototype.getChildContext = function getChildContext() {
	      return { store: this.store };
	    };
	
	    _createClass(Provider, null, [{
	      key: 'childContextTypes',
	      value: {
	        store: storeShape.isRequired
	      },
	      enumerable: true
	    }, {
	      key: 'propTypes',
	      value: {
	        store: storeShape.isRequired,
	        children: (requireFunctionChild ? PropTypes.func : PropTypes.element).isRequired
	      },
	      enumerable: true
	    }]);
	
	    function Provider(props, context) {
	      _classCallCheck(this, Provider);
	
	      _Component.call(this, props, context);
	      this.store = props.store;
	    }
	
	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var store = this.store;
	      var nextStore = nextProps.store;
	
	      if (store !== nextStore) {
	        warnAboutReceivingStore();
	      }
	    };
	
	    Provider.prototype.render = function render() {
	      var children = this.props.children;
	
	      if (typeof children === 'function') {
	        warnAboutFunctionChild();
	        children = children();
	      } else {
	        warnAboutElementChild();
	      }
	
	      return Children.only(children);
	    };
	
	    return Provider;
	  })(Component);
	}
	
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	
	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	
	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;
	
	  if (proto === null) {
	    return true;
	  }
	
	  var constructor = proto.constructor;
	
	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}
	
	module.exports = exports['default'];

/***/ },
/* 245 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = wrapActionCreators;
	
	var _redux = __webpack_require__(11);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = createDevTools;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _reactReduxLibComponentsCreateAll = __webpack_require__(62);
	
	var _reactReduxLibComponentsCreateAll2 = _interopRequireDefault(_reactReduxLibComponentsCreateAll);
	
	var _devTools = __webpack_require__(64);
	
	function createDevTools(React) {
	  var PropTypes = React.PropTypes;
	  var Component = React.Component;
	
	  var _createAll = _reactReduxLibComponentsCreateAll2['default'](React);
	
	  var connect = _createAll.connect;
	
	  var DevTools = (function (_Component) {
	    _inherits(DevTools, _Component);
	
	    function DevTools() {
	      _classCallCheck(this, _DevTools);
	
	      _Component.apply(this, arguments);
	    }
	
	    DevTools.prototype.render = function render() {
	      var Monitor = this.props.monitor;
	
	      return React.createElement(Monitor, this.props);
	    };
	
	    var _DevTools = DevTools;
	    DevTools = connect(function (state) {
	      return state;
	    }, _devTools.ActionCreators)(DevTools) || DevTools;
	    return DevTools;
	  })(Component);
	
	  return (function (_Component2) {
	    _inherits(DevToolsWrapper, _Component2);
	
	    _createClass(DevToolsWrapper, null, [{
	      key: 'propTypes',
	      value: {
	        monitor: PropTypes.func.isRequired,
	        store: PropTypes.shape({
	          devToolsStore: PropTypes.shape({
	            dispatch: PropTypes.func.isRequired
	          }).isRequired
	        }).isRequired
	      },
	      enumerable: true
	    }]);
	
	    function DevToolsWrapper(props, context) {
	      _classCallCheck(this, DevToolsWrapper);
	
	      if (props.store && !props.store.devToolsStore) {
	        console.error('Could not find the devTools store inside your store. ' + 'Have you applied devTools() store enhancer?');
	      }
	      _Component2.call(this, props, context);
	    }
	
	    DevToolsWrapper.prototype.render = function render() {
	      return React.createElement(DevTools, _extends({}, this.props, {
	        store: this.props.store.devToolsStore }));
	    };
	
	    return DevToolsWrapper;
	  })(Component);
	}
	
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _devTools = __webpack_require__(64);
	
	exports.devTools = _interopRequire(_devTools);
	
	var _persistState = __webpack_require__(249);
	
	exports.persistState = _interopRequire(_persistState);

/***/ },
/* 249 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = persistState;
	
	function persistState(sessionId) {
	  var stateDeserializer = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var actionDeserializer = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  if (!sessionId) {
	    return function (next) {
	      return function () {
	        return next.apply(undefined, arguments);
	      };
	    };
	  }
	
	  function deserializeState(fullState) {
	    return _extends({}, fullState, {
	      committedState: stateDeserializer(fullState.committedState),
	      computedStates: fullState.computedStates.map(function (computedState) {
	        return _extends({}, computedState, {
	          state: stateDeserializer(computedState.state)
	        });
	      })
	    });
	  }
	
	  function deserializeActions(fullState) {
	    return _extends({}, fullState, {
	      stagedActions: fullState.stagedActions.map(function (action) {
	        return actionDeserializer(action);
	      })
	    });
	  }
	
	  function deserialize(fullState) {
	    if (!fullState) {
	      return fullState;
	    }
	    var deserializedState = fullState;
	    if (typeof stateDeserializer === 'function') {
	      deserializedState = deserializeState(deserializedState);
	    }
	    if (typeof actionDeserializer === 'function') {
	      deserializedState = deserializeActions(deserializedState);
	    }
	    return deserializedState;
	  }
	
	  return function (next) {
	    return function (reducer, initialState) {
	      var key = 'redux-dev-session-' + sessionId;
	
	      var finalInitialState = undefined;
	      try {
	        finalInitialState = deserialize(JSON.parse(localStorage.getItem(key))) || initialState;
	        next(reducer, initialState);
	      } catch (e) {
	        console.warn('Could not read debug session from localStorage:', e);
	        try {
	          localStorage.removeItem(key);
	        } finally {
	          finalInitialState = undefined;
	        }
	      }
	
	      var store = next(reducer, finalInitialState);
	
	      return _extends({}, store, {
	        dispatch: function dispatch(action) {
	          store.dispatch(action);
	
	          try {
	            localStorage.setItem(key, JSON.stringify(store.getState()));
	          } catch (e) {
	            console.warn('Could not write debug session to localStorage:', e);
	          }
	
	          return action;
	        }
	      });
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.getDefaultStyle = getDefaultStyle;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function getDefaultStyle(props) {
	  var left = props.left;
	  var right = props.right;
	  var bottom = props.bottom;
	  var top = props.top;
	
	  if (typeof left === 'undefined' && typeof right === 'undefined') {
	    right = true;
	  }
	  if (typeof top === 'undefined' && typeof bottom === 'undefined') {
	    bottom = true;
	  }
	
	  return {
	    position: 'fixed',
	    zIndex: 10000,
	    fontSize: 17,
	    overflow: 'hidden',
	    opacity: 1,
	    color: 'white',
	    left: left ? 0 : undefined,
	    right: right ? 0 : undefined,
	    top: top ? 0 : undefined,
	    bottom: bottom ? 0 : undefined,
	    maxHeight: bottom && top ? '100%' : '30%',
	    maxWidth: left && right ? '100%' : '30%',
	    wordWrap: 'break-word',
	    boxSizing: 'border-box',
	    boxShadow: '-2px 0 7px 0 rgba(0, 0, 0, 0.5)'
	  };
	}
	
	var DebugPanel = (function (_Component) {
	  _inherits(DebugPanel, _Component);
	
	  function DebugPanel() {
	    _classCallCheck(this, DebugPanel);
	
	    _Component.apply(this, arguments);
	  }
	
	  DebugPanel.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      { style: _extends({}, this.props.getStyle(this.props), this.props.style) },
	      this.props.children
	    );
	  };
	
	  _createClass(DebugPanel, null, [{
	    key: 'propTypes',
	    value: {
	      left: _react.PropTypes.bool,
	      right: _react.PropTypes.bool,
	      bottom: _react.PropTypes.bool,
	      top: _react.PropTypes.bool,
	      getStyle: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      getStyle: getDefaultStyle
	    },
	    enumerable: true
	  }]);
	
	  return DebugPanel;
	})(_react.Component);
	
	exports['default'] = DebugPanel;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LogMonitorEntry = __webpack_require__(253);
	
	var _LogMonitorEntry2 = _interopRequireDefault(_LogMonitorEntry);
	
	var _LogMonitorButton = __webpack_require__(252);
	
	var _LogMonitorButton2 = _interopRequireDefault(_LogMonitorButton);
	
	var _themes = __webpack_require__(278);
	
	var themes = _interopRequireWildcard(_themes);
	
	var styles = {
	  container: {
	    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
	    position: 'relative',
	    overflowY: 'hidden',
	    width: '100%',
	    height: '100%',
	    minWidth: 300
	  },
	  buttonBar: {
	    textAlign: 'center',
	    borderBottomWidth: 1,
	    borderBottomStyle: 'solid',
	    borderColor: 'transparent',
	    zIndex: 1,
	    display: 'flex',
	    flexDirection: 'row'
	  },
	  elements: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 38,
	    bottom: 0,
	    overflowX: 'hidden',
	    overflowY: 'auto'
	  }
	};
	
	var LogMonitor = (function (_Component) {
	  _inherits(LogMonitor, _Component);
	
	  function LogMonitor(props) {
	    _classCallCheck(this, LogMonitor);
	
	    _Component.call(this, props);
	    if (typeof window !== 'undefined') {
	      window.addEventListener('keydown', this.handleKeyPress.bind(this));
	    }
	  }
	
	  LogMonitor.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var node = _react.findDOMNode(this.refs.elements);
	    if (!node) {
	      this.scrollDown = true;
	    } else if (this.props.stagedActions.length < nextProps.stagedActions.length) {
	      var scrollTop = node.scrollTop;
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;
	
	      this.scrollDown = Math.abs(scrollHeight - (scrollTop + offsetHeight)) < 20;
	    } else {
	      this.scrollDown = false;
	    }
	  };
	
	  LogMonitor.prototype.componentDidUpdate = function componentDidUpdate() {
	    var node = _react.findDOMNode(this.refs.elements);
	    if (!node) {
	      return;
	    }
	    if (this.scrollDown) {
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;
	
	      node.scrollTop = scrollHeight - offsetHeight;
	      this.scrollDown = false;
	    }
	  };
	
	  LogMonitor.prototype.componentWillMount = function componentWillMount() {
	    var visibleOnLoad = this.props.visibleOnLoad;
	    var monitorState = this.props.monitorState;
	
	    this.props.setMonitorState(_extends({}, monitorState, {
	      isVisible: visibleOnLoad
	    }));
	  };
	
	  LogMonitor.prototype.handleRollback = function handleRollback() {
	    this.props.rollback();
	  };
	
	  LogMonitor.prototype.handleSweep = function handleSweep() {
	    this.props.sweep();
	  };
	
	  LogMonitor.prototype.handleCommit = function handleCommit() {
	    this.props.commit();
	  };
	
	  LogMonitor.prototype.handleToggleAction = function handleToggleAction(index) {
	    this.props.toggleAction(index);
	  };
	
	  LogMonitor.prototype.handleReset = function handleReset() {
	    this.props.reset();
	  };
	
	  LogMonitor.prototype.handleKeyPress = function handleKeyPress(event) {
	    var monitorState = this.props.monitorState;
	
	    if (event.ctrlKey && event.keyCode === 72) {
	      // Ctrl+H
	      event.preventDefault();
	      this.props.setMonitorState(_extends({}, monitorState, {
	        isVisible: !monitorState.isVisible
	      }));
	    }
	  };
	
	  LogMonitor.prototype.render = function render() {
	    var elements = [];
	    var _props = this.props;
	    var monitorState = _props.monitorState;
	    var skippedActions = _props.skippedActions;
	    var stagedActions = _props.stagedActions;
	    var computedStates = _props.computedStates;
	    var select = _props.select;
	
	    var theme = undefined;
	    if (typeof this.props.theme === 'string') {
	      if (typeof themes[this.props.theme] !== 'undefined') {
	        theme = themes[this.props.theme];
	      } else {
	        console.warn('DevTools theme ' + this.props.theme + ' not found, defaulting to nicinabox');
	        theme = themes.nicinabox;
	      }
	    } else {
	      theme = this.props.theme;
	    }
	    if (!monitorState.isVisible) {
	      return null;
	    }
	
	    for (var i = 0; i < stagedActions.length; i++) {
	      var action = stagedActions[i];
	      var _computedStates$i = computedStates[i];
	      var state = _computedStates$i.state;
	      var error = _computedStates$i.error;
	
	      var previousState = undefined;
	      if (i > 0) {
	        previousState = computedStates[i - 1].state;
	      }
	      elements.push(_react2['default'].createElement(_LogMonitorEntry2['default'], { key: i,
	        index: i,
	        theme: theme,
	        select: select,
	        action: action,
	        state: state,
	        previousState: previousState,
	        collapsed: skippedActions[i],
	        error: error,
	        onActionClick: this.handleToggleAction.bind(this) }));
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { style: _extends({}, styles.container, { backgroundColor: theme.base00 }) },
	      _react2['default'].createElement(
	        'div',
	        { style: _extends({}, styles.buttonBar, { borderColor: theme.base02 }) },
	        _react2['default'].createElement(
	          _LogMonitorButton2['default'],
	          { theme: theme, onClick: this.handleReset.bind(this) },
	          'Reset'
	        ),
	        _react2['default'].createElement(
	          _LogMonitorButton2['default'],
	          { theme: theme, onClick: this.handleRollback.bind(this), enabled: computedStates.length },
	          'Revert'
	        ),
	        _react2['default'].createElement(
	          _LogMonitorButton2['default'],
	          { theme: theme, onClick: this.handleSweep.bind(this), enabled: Object.keys(skippedActions).some(function (key) {
	              return skippedActions[key];
	            }) },
	          'Sweep'
	        ),
	        _react2['default'].createElement(
	          _LogMonitorButton2['default'],
	          { theme: theme, onClick: this.handleCommit.bind(this), enabled: computedStates.length > 1 },
	          'Commit'
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { style: styles.elements, ref: 'elements' },
	        elements
	      )
	    );
	  };
	
	  _createClass(LogMonitor, null, [{
	    key: 'propTypes',
	    value: {
	      computedStates: _react.PropTypes.array.isRequired,
	      currentStateIndex: _react.PropTypes.number.isRequired,
	      monitorState: _react.PropTypes.object.isRequired,
	      stagedActions: _react.PropTypes.array.isRequired,
	      skippedActions: _react.PropTypes.object.isRequired,
	      reset: _react.PropTypes.func.isRequired,
	      commit: _react.PropTypes.func.isRequired,
	      rollback: _react.PropTypes.func.isRequired,
	      sweep: _react.PropTypes.func.isRequired,
	      toggleAction: _react.PropTypes.func.isRequired,
	      jumpToState: _react.PropTypes.func.isRequired,
	      setMonitorState: _react.PropTypes.func.isRequired,
	      select: _react.PropTypes.func.isRequired,
	      visibleOnLoad: _react.PropTypes.bool,
	      theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      select: function select(state) {
	        return state;
	      },
	      monitorState: { isVisible: true },
	      theme: 'nicinabox',
	      visibleOnLoad: true
	    },
	    enumerable: true
	  }]);
	
	  return LogMonitor;
	})(_react.Component);
	
	exports['default'] = LogMonitor;
	module.exports = exports['default'];

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsBrighten = __webpack_require__(295);
	
	var _utilsBrighten2 = _interopRequireDefault(_utilsBrighten);
	
	var styles = {
	  base: {
	    cursor: 'pointer',
	    fontWeight: 'bold',
	    borderRadius: 3,
	    padding: 4,
	    marginLeft: 3,
	    marginRight: 3,
	    marginTop: 5,
	    marginBottom: 5,
	    flexGrow: 1,
	    display: 'inline-block',
	    fontSize: '0.8em',
	    color: 'white',
	    textDecoration: 'none'
	  }
	};
	
	var LogMonitorButton = (function (_React$Component) {
	  _inherits(LogMonitorButton, _React$Component);
	
	  function LogMonitorButton(props) {
	    _classCallCheck(this, LogMonitorButton);
	
	    _React$Component.call(this, props);
	    this.state = {
	      hovered: false,
	      active: false
	    };
	  }
	
	  LogMonitorButton.prototype.handleMouseEnter = function handleMouseEnter() {
	    this.setState({ hovered: true });
	  };
	
	  LogMonitorButton.prototype.handleMouseLeave = function handleMouseLeave() {
	    this.setState({ hovered: false });
	  };
	
	  LogMonitorButton.prototype.handleMouseDown = function handleMouseDown() {
	    this.setState({ active: true });
	  };
	
	  LogMonitorButton.prototype.handleMouseUp = function handleMouseUp() {
	    this.setState({ active: false });
	  };
	
	  LogMonitorButton.prototype.onClick = function onClick() {
	    if (!this.props.enabled) {
	      return;
	    }
	    if (this.props.onClick) {
	      this.props.onClick();
	    }
	  };
	
	  LogMonitorButton.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      backgroundColor: this.props.theme.base02
	    });
	    if (this.props.enabled && this.state.hovered) {
	      style = _extends({}, style, {
	        backgroundColor: _utilsBrighten2['default'](this.props.theme.base02, 0.2)
	      });
	    }
	    if (!this.props.enabled) {
	      style = _extends({}, style, {
	        opacity: 0.2,
	        cursor: 'text',
	        backgroundColor: 'transparent'
	      });
	    }
	    return _react2['default'].createElement(
	      'a',
	      { onMouseEnter: this.handleMouseEnter.bind(this),
	        onMouseLeave: this.handleMouseLeave.bind(this),
	        onMouseDown: this.handleMouseDown.bind(this),
	        onMouseUp: this.handleMouseUp.bind(this),
	        style: style, onClick: this.onClick.bind(this) },
	      this.props.children
	    );
	  };
	
	  return LogMonitorButton;
	})(_react2['default'].Component);
	
	exports['default'] = LogMonitorButton;
	module.exports = exports['default'];

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(61);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	var _LogMonitorEntryAction = __webpack_require__(254);
	
	var _LogMonitorEntryAction2 = _interopRequireDefault(_LogMonitorEntryAction);
	
	var styles = {
	  entry: {
	    display: 'block',
	    WebkitUserSelect: 'none'
	  },
	  tree: {
	    paddingLeft: 0
	  }
	};
	
	var LogMonitorEntry = (function (_Component) {
	  _inherits(LogMonitorEntry, _Component);
	
	  function LogMonitorEntry() {
	    _classCallCheck(this, LogMonitorEntry);
	
	    _Component.apply(this, arguments);
	  }
	
	  LogMonitorEntry.prototype.printState = function printState(state, error) {
	    var errorText = error;
	    if (!errorText) {
	      try {
	        return _react2['default'].createElement(_reactJsonTree2['default'], {
	          theme: this.props.theme,
	          keyName: 'state',
	          data: this.props.select(state),
	          previousData: this.props.select(this.props.previousState),
	          style: styles.tree });
	      } catch (err) {
	        errorText = 'Error selecting state.';
	      }
	    }
	    return _react2['default'].createElement(
	      'div',
	      { style: {
	          color: this.props.theme.base08,
	          paddingTop: 20,
	          paddingLeft: 30,
	          paddingRight: 30,
	          paddingBottom: 35
	        } },
	      errorText
	    );
	  };
	
	  LogMonitorEntry.prototype.handleActionClick = function handleActionClick() {
	    var _props = this.props;
	    var index = _props.index;
	    var onActionClick = _props.onActionClick;
	
	    if (index > 0) {
	      onActionClick(index);
	    }
	  };
	
	  LogMonitorEntry.prototype.render = function render() {
	    var _props2 = this.props;
	    var index = _props2.index;
	    var error = _props2.error;
	    var action = _props2.action;
	    var state = _props2.state;
	    var collapsed = _props2.collapsed;
	
	    var styleEntry = {
	      opacity: collapsed ? 0.5 : 1,
	      cursor: index > 0 ? 'pointer' : 'default'
	    };
	    return _react2['default'].createElement(
	      'div',
	      { style: { textDecoration: collapsed ? 'line-through' : 'none' } },
	      _react2['default'].createElement(_LogMonitorEntryAction2['default'], {
	        theme: this.props.theme,
	        collapsed: collapsed,
	        action: action,
	        onClick: this.handleActionClick.bind(this),
	        style: _extends({}, styles.entry, styleEntry) }),
	      !collapsed && _react2['default'].createElement(
	        'div',
	        null,
	        this.printState(state, error)
	      )
	    );
	  };
	
	  _createClass(LogMonitorEntry, null, [{
	    key: 'propTypes',
	    value: {
	      index: _react.PropTypes.number.isRequired,
	      state: _react.PropTypes.object.isRequired,
	      action: _react.PropTypes.object.isRequired,
	      select: _react.PropTypes.func.isRequired,
	      error: _react.PropTypes.string,
	      onActionClick: _react.PropTypes.func.isRequired,
	      collapsed: _react.PropTypes.bool
	    },
	    enumerable: true
	  }]);
	
	  return LogMonitorEntry;
	})(_react.Component);
	
	exports['default'] = LogMonitorEntry;
	module.exports = exports['default'];

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(61);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	var styles = {
	  actionBar: {
	    paddingTop: 8,
	    paddingBottom: 7,
	    paddingLeft: 16
	  },
	  payload: {
	    margin: 0,
	    overflow: 'auto'
	  }
	};
	
	var LogMonitorAction = (function (_React$Component) {
	  _inherits(LogMonitorAction, _React$Component);
	
	  function LogMonitorAction() {
	    _classCallCheck(this, LogMonitorAction);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  LogMonitorAction.prototype.renderPayload = function renderPayload(payload) {
	    return _react2['default'].createElement(
	      'div',
	      { style: _extends({}, styles.payload, {
	          backgroundColor: this.props.theme.base00
	        }) },
	      Object.keys(payload).length > 0 ? _react2['default'].createElement(_reactJsonTree2['default'], { theme: this.props.theme, keyName: 'action', data: payload }) : ''
	    );
	  };
	
	  LogMonitorAction.prototype.render = function render() {
	    var _props$action = this.props.action;
	    var type = _props$action.type;
	
	    var payload = _objectWithoutProperties(_props$action, ['type']);
	
	    return _react2['default'].createElement(
	      'div',
	      { style: _extends({
	          backgroundColor: this.props.theme.base02,
	          color: this.props.theme.base06
	        }, this.props.style) },
	      _react2['default'].createElement(
	        'div',
	        { style: styles.actionBar,
	          onClick: this.props.onClick },
	        type
	      ),
	      !this.props.collapsed ? this.renderPayload(payload) : ''
	    );
	  };
	
	  return LogMonitorAction;
	})(_react2['default'].Component);
	
	exports['default'] = LogMonitorAction;
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createDevTools = __webpack_require__(247);
	
	var _createDevTools2 = _interopRequireDefault(_createDevTools);
	
	var DevTools = _createDevTools2['default'](_react2['default']);
	exports.DevTools = DevTools;
	
	var _LogMonitor = __webpack_require__(251);
	
	exports.LogMonitor = _interopRequire(_LogMonitor);
	
	var _DebugPanel = __webpack_require__(250);
	
	exports.DebugPanel = _interopRequire(_DebugPanel);

/***/ },
/* 256 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'apathy',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#031A16',
	  base01: '#0B342D',
	  base02: '#184E45',
	  base03: '#2B685E',
	  base04: '#5F9C92',
	  base05: '#81B5AC',
	  base06: '#A7CEC8',
	  base07: '#D2E7E4',
	  base08: '#3E9688',
	  base09: '#3E7996',
	  base0A: '#3E4C96',
	  base0B: '#883E96',
	  base0C: '#963E4C',
	  base0D: '#96883E',
	  base0E: '#4C963E',
	  base0F: '#3E965B'
	};
	module.exports = exports['default'];

/***/ },
/* 257 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ashes',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#1C2023',
	  base01: '#393F45',
	  base02: '#565E65',
	  base03: '#747C84',
	  base04: '#ADB3BA',
	  base05: '#C7CCD1',
	  base06: '#DFE2E5',
	  base07: '#F3F4F5',
	  base08: '#C7AE95',
	  base09: '#C7C795',
	  base0A: '#AEC795',
	  base0B: '#95C7AE',
	  base0C: '#95AEC7',
	  base0D: '#AE95C7',
	  base0E: '#C795AE',
	  base0F: '#C79595'
	};
	module.exports = exports['default'];

/***/ },
/* 258 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier dune',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
	  base00: '#20201d',
	  base01: '#292824',
	  base02: '#6e6b5e',
	  base03: '#7d7a68',
	  base04: '#999580',
	  base05: '#a6a28c',
	  base06: '#e8e4cf',
	  base07: '#fefbec',
	  base08: '#d73737',
	  base09: '#b65611',
	  base0A: '#cfb017',
	  base0B: '#60ac39',
	  base0C: '#1fad83',
	  base0D: '#6684e1',
	  base0E: '#b854d4',
	  base0F: '#d43552'
	};
	module.exports = exports['default'];

/***/ },
/* 259 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier forest',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
	  base00: '#1b1918',
	  base01: '#2c2421',
	  base02: '#68615e',
	  base03: '#766e6b',
	  base04: '#9c9491',
	  base05: '#a8a19f',
	  base06: '#e6e2e0',
	  base07: '#f1efee',
	  base08: '#f22c40',
	  base09: '#df5320',
	  base0A: '#d5911a',
	  base0B: '#5ab738',
	  base0C: '#00ad9c',
	  base0D: '#407ee7',
	  base0E: '#6666ea',
	  base0F: '#c33ff3'
	};
	module.exports = exports['default'];

/***/ },
/* 260 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier heath',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
	  base00: '#1b181b',
	  base01: '#292329',
	  base02: '#695d69',
	  base03: '#776977',
	  base04: '#9e8f9e',
	  base05: '#ab9bab',
	  base06: '#d8cad8',
	  base07: '#f7f3f7',
	  base08: '#ca402b',
	  base09: '#a65926',
	  base0A: '#bb8a35',
	  base0B: '#379a37',
	  base0C: '#159393',
	  base0D: '#516aec',
	  base0E: '#7b59c0',
	  base0F: '#cc33cc'
	};
	module.exports = exports['default'];

/***/ },
/* 261 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier lakeside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
	  base00: '#161b1d',
	  base01: '#1f292e',
	  base02: '#516d7b',
	  base03: '#5a7b8c',
	  base04: '#7195a8',
	  base05: '#7ea2b4',
	  base06: '#c1e4f6',
	  base07: '#ebf8ff',
	  base08: '#d22d72',
	  base09: '#935c25',
	  base0A: '#8a8a0f',
	  base0B: '#568c3b',
	  base0C: '#2d8f6f',
	  base0D: '#257fad',
	  base0E: '#5d5db1',
	  base0F: '#b72dd2'
	};
	module.exports = exports['default'];

/***/ },
/* 262 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier seaside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
	  base00: '#131513',
	  base01: '#242924',
	  base02: '#5e6e5e',
	  base03: '#687d68',
	  base04: '#809980',
	  base05: '#8ca68c',
	  base06: '#cfe8cf',
	  base07: '#f0fff0',
	  base08: '#e6193c',
	  base09: '#87711d',
	  base0A: '#c3c322',
	  base0B: '#29a329',
	  base0C: '#1999b3',
	  base0D: '#3d62f5',
	  base0E: '#ad2bee',
	  base0F: '#e619c3'
	};
	module.exports = exports['default'];

/***/ },
/* 263 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bespin',
	  author: 'jan t. sott',
	  base00: '#28211c',
	  base01: '#36312e',
	  base02: '#5e5d5c',
	  base03: '#666666',
	  base04: '#797977',
	  base05: '#8a8986',
	  base06: '#9d9b97',
	  base07: '#baae9e',
	  base08: '#cf6a4c',
	  base09: '#cf7d34',
	  base0A: '#f9ee98',
	  base0B: '#54be0d',
	  base0C: '#afc4db',
	  base0D: '#5ea6ea',
	  base0E: '#9b859d',
	  base0F: '#937121'
	};
	module.exports = exports['default'];

/***/ },
/* 264 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'brewer',
	  author: 'timothée poisot (http://github.com/tpoisot)',
	  base00: '#0c0d0e',
	  base01: '#2e2f30',
	  base02: '#515253',
	  base03: '#737475',
	  base04: '#959697',
	  base05: '#b7b8b9',
	  base06: '#dadbdc',
	  base07: '#fcfdfe',
	  base08: '#e31a1c',
	  base09: '#e6550d',
	  base0A: '#dca060',
	  base0B: '#31a354',
	  base0C: '#80b1d3',
	  base0D: '#3182bd',
	  base0E: '#756bb1',
	  base0F: '#b15928'
	};
	module.exports = exports['default'];

/***/ },
/* 265 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bright',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#303030',
	  base02: '#505050',
	  base03: '#b0b0b0',
	  base04: '#d0d0d0',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ffffff',
	  base08: '#fb0120',
	  base09: '#fc6d24',
	  base0A: '#fda331',
	  base0B: '#a1c659',
	  base0C: '#76c7b7',
	  base0D: '#6fb3d2',
	  base0E: '#d381c3',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 266 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'chalk',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#f5f5f5',
	  base08: '#fb9fb1',
	  base09: '#eda987',
	  base0A: '#ddb26f',
	  base0B: '#acc267',
	  base0C: '#12cfc0',
	  base0D: '#6fc2ef',
	  base0E: '#e1a3ee',
	  base0F: '#deaf8f'
	};
	module.exports = exports['default'];

/***/ },
/* 267 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'codeschool',
	  author: 'brettof86',
	  base00: '#232c31',
	  base01: '#1c3657',
	  base02: '#2a343a',
	  base03: '#3f4944',
	  base04: '#84898c',
	  base05: '#9ea7a6',
	  base06: '#a7cfa3',
	  base07: '#b5d8f6',
	  base08: '#2a5491',
	  base09: '#43820d',
	  base0A: '#a03b1e',
	  base0B: '#237986',
	  base0C: '#b02f30',
	  base0D: '#484d79',
	  base0E: '#c59820',
	  base0F: '#c98344'
	};
	module.exports = exports['default'];

/***/ },
/* 268 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'colors',
	  author: 'mrmrs (http://clrs.cc)',
	  base00: '#111111',
	  base01: '#333333',
	  base02: '#555555',
	  base03: '#777777',
	  base04: '#999999',
	  base05: '#bbbbbb',
	  base06: '#dddddd',
	  base07: '#ffffff',
	  base08: '#ff4136',
	  base09: '#ff851b',
	  base0A: '#ffdc00',
	  base0B: '#2ecc40',
	  base0C: '#7fdbff',
	  base0D: '#0074d9',
	  base0E: '#b10dc9',
	  base0F: '#85144b'
	};
	module.exports = exports['default'];

/***/ },
/* 269 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'default',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#181818',
	  base01: '#282828',
	  base02: '#383838',
	  base03: '#585858',
	  base04: '#b8b8b8',
	  base05: '#d8d8d8',
	  base06: '#e8e8e8',
	  base07: '#f8f8f8',
	  base08: '#ab4642',
	  base09: '#dc9656',
	  base0A: '#f7ca88',
	  base0B: '#a1b56c',
	  base0C: '#86c1b9',
	  base0D: '#7cafc2',
	  base0E: '#ba8baf',
	  base0F: '#a16946'
	};
	module.exports = exports['default'];

/***/ },
/* 270 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'eighties',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2d2d2d',
	  base01: '#393939',
	  base02: '#515151',
	  base03: '#747369',
	  base04: '#a09f93',
	  base05: '#d3d0c8',
	  base06: '#e8e6df',
	  base07: '#f2f0ec',
	  base08: '#f2777a',
	  base09: '#f99157',
	  base0A: '#ffcc66',
	  base0B: '#99cc99',
	  base0C: '#66cccc',
	  base0D: '#6699cc',
	  base0E: '#cc99cc',
	  base0F: '#d27b53'
	};
	module.exports = exports['default'];

/***/ },
/* 271 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'embers',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#16130F',
	  base01: '#2C2620',
	  base02: '#433B32',
	  base03: '#5A5047',
	  base04: '#8A8075',
	  base05: '#A39A90',
	  base06: '#BEB6AE',
	  base07: '#DBD6D1',
	  base08: '#826D57',
	  base09: '#828257',
	  base0A: '#6D8257',
	  base0B: '#57826D',
	  base0C: '#576D82',
	  base0D: '#6D5782',
	  base0E: '#82576D',
	  base0F: '#825757'
	};
	module.exports = exports['default'];

/***/ },
/* 272 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'flat',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2C3E50',
	  base01: '#34495E',
	  base02: '#7F8C8D',
	  base03: '#95A5A6',
	  base04: '#BDC3C7',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ECF0F1',
	  base08: '#E74C3C',
	  base09: '#E67E22',
	  base0A: '#F1C40F',
	  base0B: '#2ECC71',
	  base0C: '#1ABC9C',
	  base0D: '#3498DB',
	  base0E: '#9B59B6',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 273 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'google',
	  author: 'seth wright (http://sethawright.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#CC342B',
	  base09: '#F96A38',
	  base0A: '#FBA922',
	  base0B: '#198844',
	  base0C: '#3971ED',
	  base0D: '#3971ED',
	  base0E: '#A36AC7',
	  base0F: '#3971ED'
	};
	module.exports = exports['default'];

/***/ },
/* 274 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'grayscale',
	  author: 'alexandre gavioli (https://github.com/alexx2/)',
	  base00: '#101010',
	  base01: '#252525',
	  base02: '#464646',
	  base03: '#525252',
	  base04: '#ababab',
	  base05: '#b9b9b9',
	  base06: '#e3e3e3',
	  base07: '#f7f7f7',
	  base08: '#7c7c7c',
	  base09: '#999999',
	  base0A: '#a0a0a0',
	  base0B: '#8e8e8e',
	  base0C: '#868686',
	  base0D: '#686868',
	  base0E: '#747474',
	  base0F: '#5e5e5e'
	};
	module.exports = exports['default'];

/***/ },
/* 275 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'green screen',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#001100',
	  base01: '#003300',
	  base02: '#005500',
	  base03: '#007700',
	  base04: '#009900',
	  base05: '#00bb00',
	  base06: '#00dd00',
	  base07: '#00ff00',
	  base08: '#007700',
	  base09: '#009900',
	  base0A: '#007700',
	  base0B: '#00bb00',
	  base0C: '#005500',
	  base0D: '#009900',
	  base0E: '#00bb00',
	  base0F: '#005500'
	};
	module.exports = exports['default'];

/***/ },
/* 276 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'harmonic16',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#0b1c2c',
	  base01: '#223b54',
	  base02: '#405c79',
	  base03: '#627e99',
	  base04: '#aabcce',
	  base05: '#cbd6e2',
	  base06: '#e5ebf1',
	  base07: '#f7f9fb',
	  base08: '#bf8b56',
	  base09: '#bfbf56',
	  base0A: '#8bbf56',
	  base0B: '#56bf8b',
	  base0C: '#568bbf',
	  base0D: '#8b56bf',
	  base0E: '#bf568b',
	  base0F: '#bf5656'
	};
	module.exports = exports['default'];

/***/ },
/* 277 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'hopscotch',
	  author: 'jan t. sott',
	  base00: '#322931',
	  base01: '#433b42',
	  base02: '#5c545b',
	  base03: '#797379',
	  base04: '#989498',
	  base05: '#b9b5b8',
	  base06: '#d5d3d5',
	  base07: '#ffffff',
	  base08: '#dd464c',
	  base09: '#fd8b19',
	  base0A: '#fdcc59',
	  base0B: '#8fc13e',
	  base0C: '#149b93',
	  base0D: '#1290bf',
	  base0E: '#c85e7c',
	  base0F: '#b33508'
	};
	module.exports = exports['default'];

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _threezerotwofour = __webpack_require__(291);
	
	exports.threezerotwofour = _interopRequire(_threezerotwofour);
	
	var _apathy = __webpack_require__(256);
	
	exports.apathy = _interopRequire(_apathy);
	
	var _ashes = __webpack_require__(257);
	
	exports.ashes = _interopRequire(_ashes);
	
	var _atelierDune = __webpack_require__(258);
	
	exports.atelierDune = _interopRequire(_atelierDune);
	
	var _atelierForest = __webpack_require__(259);
	
	exports.atelierForest = _interopRequire(_atelierForest);
	
	var _atelierHeath = __webpack_require__(260);
	
	exports.atelierHeath = _interopRequire(_atelierHeath);
	
	var _atelierLakeside = __webpack_require__(261);
	
	exports.atelierLakeside = _interopRequire(_atelierLakeside);
	
	var _atelierSeaside = __webpack_require__(262);
	
	exports.atelierSeaside = _interopRequire(_atelierSeaside);
	
	var _bespin = __webpack_require__(263);
	
	exports.bespin = _interopRequire(_bespin);
	
	var _brewer = __webpack_require__(264);
	
	exports.brewer = _interopRequire(_brewer);
	
	var _bright = __webpack_require__(265);
	
	exports.bright = _interopRequire(_bright);
	
	var _chalk = __webpack_require__(266);
	
	exports.chalk = _interopRequire(_chalk);
	
	var _codeschool = __webpack_require__(267);
	
	exports.codeschool = _interopRequire(_codeschool);
	
	var _colors = __webpack_require__(268);
	
	exports.colors = _interopRequire(_colors);
	
	var _default = __webpack_require__(269);
	
	exports['default'] = _interopRequire(_default);
	
	var _eighties = __webpack_require__(270);
	
	exports.eighties = _interopRequire(_eighties);
	
	var _embers = __webpack_require__(271);
	
	exports.embers = _interopRequire(_embers);
	
	var _flat = __webpack_require__(272);
	
	exports.flat = _interopRequire(_flat);
	
	var _google = __webpack_require__(273);
	
	exports.google = _interopRequire(_google);
	
	var _grayscale = __webpack_require__(274);
	
	exports.grayscale = _interopRequire(_grayscale);
	
	var _greenscreen = __webpack_require__(275);
	
	exports.greenscreen = _interopRequire(_greenscreen);
	
	var _harmonic = __webpack_require__(276);
	
	exports.harmonic = _interopRequire(_harmonic);
	
	var _hopscotch = __webpack_require__(277);
	
	exports.hopscotch = _interopRequire(_hopscotch);
	
	var _isotope = __webpack_require__(279);
	
	exports.isotope = _interopRequire(_isotope);
	
	var _marrakesh = __webpack_require__(280);
	
	exports.marrakesh = _interopRequire(_marrakesh);
	
	var _mocha = __webpack_require__(281);
	
	exports.mocha = _interopRequire(_mocha);
	
	var _monokai = __webpack_require__(282);
	
	exports.monokai = _interopRequire(_monokai);
	
	var _ocean = __webpack_require__(284);
	
	exports.ocean = _interopRequire(_ocean);
	
	var _paraiso = __webpack_require__(285);
	
	exports.paraiso = _interopRequire(_paraiso);
	
	var _pop = __webpack_require__(286);
	
	exports.pop = _interopRequire(_pop);
	
	var _railscasts = __webpack_require__(287);
	
	exports.railscasts = _interopRequire(_railscasts);
	
	var _shapeshifter = __webpack_require__(288);
	
	exports.shapeshifter = _interopRequire(_shapeshifter);
	
	var _solarized = __webpack_require__(289);
	
	exports.solarized = _interopRequire(_solarized);
	
	var _summerfruit = __webpack_require__(290);
	
	exports.summerfruit = _interopRequire(_summerfruit);
	
	var _tomorrow = __webpack_require__(292);
	
	exports.tomorrow = _interopRequire(_tomorrow);
	
	var _tube = __webpack_require__(293);
	
	exports.tube = _interopRequire(_tube);
	
	var _twilight = __webpack_require__(294);
	
	exports.twilight = _interopRequire(_twilight);
	
	var _nicinabox = __webpack_require__(283);
	
	exports.nicinabox = _interopRequire(_nicinabox);

/***/ },
/* 279 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'isotope',
	  author: 'jan t. sott',
	  base00: '#000000',
	  base01: '#404040',
	  base02: '#606060',
	  base03: '#808080',
	  base04: '#c0c0c0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#ff0000',
	  base09: '#ff9900',
	  base0A: '#ff0099',
	  base0B: '#33ff00',
	  base0C: '#00ffff',
	  base0D: '#0066ff',
	  base0E: '#cc00ff',
	  base0F: '#3300ff'
	};
	module.exports = exports['default'];

/***/ },
/* 280 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'marrakesh',
	  author: 'alexandre gavioli (http://github.com/alexx2/)',
	  base00: '#201602',
	  base01: '#302e00',
	  base02: '#5f5b17',
	  base03: '#6c6823',
	  base04: '#86813b',
	  base05: '#948e48',
	  base06: '#ccc37a',
	  base07: '#faf0a5',
	  base08: '#c35359',
	  base09: '#b36144',
	  base0A: '#a88339',
	  base0B: '#18974e',
	  base0C: '#75a738',
	  base0D: '#477ca1',
	  base0E: '#8868b3',
	  base0F: '#b3588e'
	};
	module.exports = exports['default'];

/***/ },
/* 281 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'mocha',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#3B3228',
	  base01: '#534636',
	  base02: '#645240',
	  base03: '#7e705a',
	  base04: '#b8afad',
	  base05: '#d0c8c6',
	  base06: '#e9e1dd',
	  base07: '#f5eeeb',
	  base08: '#cb6077',
	  base09: '#d28b71',
	  base0A: '#f4bc87',
	  base0B: '#beb55b',
	  base0C: '#7bbda4',
	  base0D: '#8ab3b5',
	  base0E: '#a89bb9',
	  base0F: '#bb9584'
	};
	module.exports = exports['default'];

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'monokai',
	  author: 'wimer hazenberg (http://www.monokai.nl)',
	  base00: '#272822',
	  base01: '#383830',
	  base02: '#49483e',
	  base03: '#75715e',
	  base04: '#a59f85',
	  base05: '#f8f8f2',
	  base06: '#f5f4f1',
	  base07: '#f9f8f5',
	  base08: '#f92672',
	  base09: '#fd971f',
	  base0A: '#f4bf75',
	  base0B: '#a6e22e',
	  base0C: '#a1efe4',
	  base0D: '#66d9ef',
	  base0E: '#ae81ff',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 283 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'nicinabox',
	  author: 'nicinabox (http://github.com/nicinabox)',
	  base00: '#2A2F3A',
	  base01: '#3C444F',
	  base02: '#4F5A65',
	  base03: '#BEBEBE',
	  base04: '#b0b0b0', // unmodified
	  base05: '#d0d0d0', // unmodified
	  base06: '#FFFFFF',
	  base07: '#f5f5f5', // unmodified
	  base08: '#fb9fb1', // unmodified
	  base09: '#FC6D24',
	  base0A: '#ddb26f', // unmodified
	  base0B: '#A1C659',
	  base0C: '#12cfc0', // unmodified
	  base0D: '#6FB3D2',
	  base0E: '#D381C3',
	  base0F: '#deaf8f' // unmodified
	};
	module.exports = exports['default'];

/***/ },
/* 284 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ocean',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2b303b',
	  base01: '#343d46',
	  base02: '#4f5b66',
	  base03: '#65737e',
	  base04: '#a7adba',
	  base05: '#c0c5ce',
	  base06: '#dfe1e8',
	  base07: '#eff1f5',
	  base08: '#bf616a',
	  base09: '#d08770',
	  base0A: '#ebcb8b',
	  base0B: '#a3be8c',
	  base0C: '#96b5b4',
	  base0D: '#8fa1b3',
	  base0E: '#b48ead',
	  base0F: '#ab7967'
	};
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'paraiso',
	  author: 'jan t. sott',
	  base00: '#2f1e2e',
	  base01: '#41323f',
	  base02: '#4f424c',
	  base03: '#776e71',
	  base04: '#8d8687',
	  base05: '#a39e9b',
	  base06: '#b9b6b0',
	  base07: '#e7e9db',
	  base08: '#ef6155',
	  base09: '#f99b15',
	  base0A: '#fec418',
	  base0B: '#48b685',
	  base0C: '#5bc4bf',
	  base0D: '#06b6ef',
	  base0E: '#815ba4',
	  base0F: '#e96ba8'
	};
	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'pop',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#eb008a',
	  base09: '#f29333',
	  base0A: '#f8ca12',
	  base0B: '#37b349',
	  base0C: '#00aabb',
	  base0D: '#0e5a94',
	  base0E: '#b31e8d',
	  base0F: '#7a2d00'
	};
	module.exports = exports['default'];

/***/ },
/* 287 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'railscasts',
	  author: 'ryan bates (http://railscasts.com)',
	  base00: '#2b2b2b',
	  base01: '#272935',
	  base02: '#3a4055',
	  base03: '#5a647e',
	  base04: '#d4cfc9',
	  base05: '#e6e1dc',
	  base06: '#f4f1ed',
	  base07: '#f9f7f3',
	  base08: '#da4939',
	  base09: '#cc7833',
	  base0A: '#ffc66d',
	  base0B: '#a5c261',
	  base0C: '#519f50',
	  base0D: '#6d9cbe',
	  base0E: '#b6b3eb',
	  base0F: '#bc9458'
	};
	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'shapeshifter',
	  author: 'tyler benziger (http://tybenz.com)',
	  base00: '#000000',
	  base01: '#040404',
	  base02: '#102015',
	  base03: '#343434',
	  base04: '#555555',
	  base05: '#ababab',
	  base06: '#e0e0e0',
	  base07: '#f9f9f9',
	  base08: '#e92f2f',
	  base09: '#e09448',
	  base0A: '#dddd13',
	  base0B: '#0ed839',
	  base0C: '#23edda',
	  base0D: '#3b48e3',
	  base0E: '#f996e2',
	  base0F: '#69542d'
	};
	module.exports = exports['default'];

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'summerfruit',
	  author: 'christopher corley (http://cscorley.github.io/)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#B0B0B0',
	  base05: '#D0D0D0',
	  base06: '#E0E0E0',
	  base07: '#FFFFFF',
	  base08: '#FF0086',
	  base09: '#FD8900',
	  base0A: '#ABA800',
	  base0B: '#00C918',
	  base0C: '#1faaaa',
	  base0D: '#3777E6',
	  base0E: '#AD00A1',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'threezerotwofour',
	  author: 'jan t. sott (http://github.com/idleberg)',
	  base00: '#090300',
	  base01: '#3a3432',
	  base02: '#4a4543',
	  base03: '#5c5855',
	  base04: '#807d7c',
	  base05: '#a5a2a2',
	  base06: '#d6d5d4',
	  base07: '#f7f7f7',
	  base08: '#db2d20',
	  base09: '#e8bbd0',
	  base0A: '#fded02',
	  base0B: '#01a252',
	  base0C: '#b5e4f4',
	  base0D: '#01a0e4',
	  base0E: '#a16a94',
	  base0F: '#cdab53'
	};
	module.exports = exports['default'];

/***/ },
/* 292 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'tomorrow',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#cc6666',
	  base09: '#de935f',
	  base0A: '#f0c674',
	  base0B: '#b5bd68',
	  base0C: '#8abeb7',
	  base0D: '#81a2be',
	  base0E: '#b294bb',
	  base0F: '#a3685a'
	};
	module.exports = exports['default'];

/***/ },
/* 293 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'london tube',
	  author: 'jan t. sott',
	  base00: '#231f20',
	  base01: '#1c3f95',
	  base02: '#5a5758',
	  base03: '#737171',
	  base04: '#959ca1',
	  base05: '#d9d8d8',
	  base06: '#e7e7e8',
	  base07: '#ffffff',
	  base08: '#ee2e24',
	  base09: '#f386a1',
	  base0A: '#ffd204',
	  base0B: '#00853e',
	  base0C: '#85cebc',
	  base0D: '#009ddc',
	  base0E: '#98005d',
	  base0F: '#b06110'
	};
	module.exports = exports['default'];

/***/ },
/* 294 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'twilight',
	  author: 'david hart (http://hart-dev.com)',
	  base00: '#1e1e1e',
	  base01: '#323537',
	  base02: '#464b50',
	  base03: '#5f5a60',
	  base04: '#838184',
	  base05: '#a7a7a7',
	  base06: '#c3c3c3',
	  base07: '#ffffff',
	  base08: '#cf6a4c',
	  base09: '#cda869',
	  base0A: '#f9ee98',
	  base0B: '#8f9d6a',
	  base0C: '#afc4db',
	  base0D: '#7587a6',
	  base0E: '#9b859d',
	  base0F: '#9b703f'
	};
	module.exports = exports['default'];

/***/ },
/* 295 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (hexColor, lightness) {
	  var hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex.replace(/(.)/g, '$1$1');
	  }
	  var lum = lightness || 0;
	
	  var rgb = '#';
	  var c = undefined;
	  for (var i = 0; i < 3; ++i) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	  return rgb;
	};
	
	module.exports = exports['default'];

/***/ },
/* 296 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _compose = __webpack_require__(66);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsMapValues = __webpack_require__(68);
	
	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);
	
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    // eslint-disable-line no-eq-null
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  return _utilsMapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createStore = __webpack_require__(65);
	
	var _utilsIsPlainObject = __webpack_require__(67);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	var _utilsMapValues = __webpack_require__(68);
	
	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);
	
	var _utilsPick = __webpack_require__(300);
	
	var _utilsPick2 = _interopRequireDefault(_utilsPick);
	
	/* eslint-disable no-console */
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!_utilsIsPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	
	function combineReducers(reducers) {
	  var finalReducers = _utilsPick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;
	
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  var defaultState = _utilsMapValues2['default'](finalReducers, function () {
	    return undefined;
	  });
	
	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    var finalState = _utilsMapValues2['default'](finalReducers, function (reducer, key) {
	
	      var newState = reducer(state[key], action);
	      if (typeof newState === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      return newState;
	    });
	    // console.log(finalState);
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }
	
	    return finalState;
	  };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 300 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = pick;
	
	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}
	
	module.exports = exports["default"];

/***/ },
/* 301 */
/***/ function(module, exports) {

	var objToStr = function(x){ return Object.prototype.toString.call(x); };
	
	var thrower = function(error){
	    throw error;
	};
	
	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }
	
	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = function(left, right, key){
	            if (left !== undefined && right !== undefined) {
	                var getTypeName = function(obj){
	                    if (obj && obj.constructor && obj.constructor.name) {
	                        return obj.constructor.name;
	                    }
	                    else {
	                        return objToStr(obj).slice(8, -1);
	                    }
	                };
	                throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                        + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	            }
	            return left === undefined ? right : left;
	        };
	    }
	
	    function setNonEnumerable(target, key, value){
	        if (key in target){
	            target[key] = value;
	        }
	        else {
	            Object.defineProperty(target, key, {
	                value: value,
	                writable: true,
	                configurable: true
	            });
	        }
	    }
	
	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];
	
	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;
	
	            var wrapIfFunction = function(thing){
	                return typeof thing !== "function" ? thing
	                : function(){
	                    return thing.call(this, arguments);
	                };
	            };
	
	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }
	
	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";
	
	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }
	
	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};
	
	mixins._mergeObjects = function(obj1, obj2) {
	    var assertObject = function(obj, obj2){
	        var type = objToStr(obj);
	        if (type !== '[object Object]') {
	            var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	            var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	            thrower('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	        }
	    };
	
	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }
	
	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);
	
	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            thrower('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });
	
	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;
	
	}
	
	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }
	
	    var fn = left || right;
	
	    return function(args){
	        return fn.apply(this, args);
	    };
	};
	
	mixins.MANY = function(left, right, key){
	    return function(args){
	        if (right) right.apply(this, args);
	        return left ? left.apply(this, args) : undefined;
	    };
	};
	
	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if(left && right) {
	        return mixins._mergeObjects(left, right);
	    }
	
	    return left || right;
	}
	
	mixins.MANY_MERGED = function(left, right, key){
	    return function(args){
	        var res1 = right && right.apply(this, args);
	        var res2 = left && left.apply(this, args);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};
	
	
	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return right.call(this, left.apply(this, args));
	    };
	};
	
	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return left.call(this, right.apply(this, args));
	    };
	};
	


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(225);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(302)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map