(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "d3"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("React"), require("ReactDOM"), require("d3"));
	else
		root["ReStock"] = factory(root["React"], root["ReactDOM"], root["d3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return webpackJsonpReStock([2,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _CandleStickChartWithDarkTheme = __webpack_require__(238);
	
	var _CandleStickChartWithDarkTheme2 = _interopRequireDefault(_CandleStickChartWithDarkTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Chart from "./lib/charts/OHLCChartWithElderRayIndicator";
	
	var ReadME = __webpack_require__(299);
	
	__webpack_require__(130);
	
	document.getElementById("content").innerHTML = ReadME;
	
	var parseDate = _d2.default.time.format("%Y-%m-%d").parse;
	_d2.default.tsv("data/MSFT.tsv", function (err, data) {
		data.forEach(function (d, i) {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;
			// console.log(d);
		});
	
		_reactDom2.default.render(_react2.default.createElement(_CandleStickChartWithDarkTheme2.default, { data: data, type: "hybrid" }), document.getElementById("chart"));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// common components
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ChartCanvas = __webpack_require__(5);
	
	var _ChartCanvas2 = _interopRequireDefault(_ChartCanvas);
	
	var _Chart = __webpack_require__(20);
	
	var _Chart2 = _interopRequireDefault(_Chart);
	
	var _BackgroundText = __webpack_require__(25);
	
	var _BackgroundText2 = _interopRequireDefault(_BackgroundText);
	
	var _EventCapture = __webpack_require__(19);
	
	var _EventCapture2 = _interopRequireDefault(_EventCapture);
	
	var _series = __webpack_require__(26);
	
	var series = _interopRequireWildcard(_series);
	
	var _scale = __webpack_require__(51);
	
	var scale = _interopRequireWildcard(_scale);
	
	var _coordinates = __webpack_require__(54);
	
	var coordinates = _interopRequireWildcard(_coordinates);
	
	var _indicator = __webpack_require__(61);
	
	var indicator = _interopRequireWildcard(_indicator);
	
	var _algorithm = __webpack_require__(94);
	
	var algorithm = _interopRequireWildcard(_algorithm);
	
	var _annotation = __webpack_require__(95);
	
	var annotation = _interopRequireWildcard(_annotation);
	
	var _axes = __webpack_require__(100);
	
	var axes = _interopRequireWildcard(_axes);
	
	var _tooltip = __webpack_require__(106);
	
	var tooltip = _interopRequireWildcard(_tooltip);
	
	var _helper = __webpack_require__(118);
	
	var helper = _interopRequireWildcard(_helper);
	
	var _interactive = __webpack_require__(124);
	
	var interactive = _interopRequireWildcard(_interactive);
	
	var _utils = __webpack_require__(7);
	
	var Utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// interaction components
	
	
	var version = "0.5.0-alpha1";
	
	// chart types & Series
	
	
	exports.default = {
		ChartCanvas: _ChartCanvas2.default,
		Chart: _Chart2.default,
		EventCapture: _EventCapture2.default,
		BackgroundText: _BackgroundText2.default,
		series: series,
		coordinates: coordinates,
		indicator: indicator,
		algorithm: algorithm,
		axes: axes,
		scale: scale,
		tooltip: tooltip,
		annotation: annotation,
		helper: helper,
		interactive: interactive,
		version: version,
		Utils: Utils
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _ChartDataUtil = __webpack_require__(16);
	
	var _EventHandler = __webpack_require__(22);
	
	var _EventHandler2 = _interopRequireDefault(_EventHandler);
	
	var _CanvasContainer = __webpack_require__(23);
	
	var _CanvasContainer2 = _interopRequireDefault(_CanvasContainer);
	
	var _evaluator = __webpack_require__(24);
	
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
	
	function getDimensions(props) {
		return {
			height: props.height - props.margin.top - props.margin.bottom,
			width: props.width - props.margin.left - props.margin.right
		};
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
		var filterData = _evaluate.filterData;
		var lastItem = _evaluate.lastItem;
	
	
		return { xAccessor: xAccessor, displayXAccessor: displayXAccessor, xScale: xScale, filterData: filterData, lastItem: lastItem };
	}
	
	function calculateState(props) {
		var inputXAccesor = props.xAccessor;
		var xExtentsProp = props.xExtents;
		var data = props.data;
	
	
		var extent = typeof xExtentsProp === "function" ? xExtentsProp(data) : _d2.default.extent(xExtentsProp.map(function (d) {
			return _d2.default.functor(d);
		}).map(function (each) {
			return each(data, inputXAccesor);
		}));
	
		var _calculateFullData = calculateFullData(props);
	
		var xAccessor = _calculateFullData.xAccessor;
		var displayXAccessor = _calculateFullData.displayXAccessor;
		var xScale = _calculateFullData.xScale;
		var filterData = _calculateFullData.filterData;
		var lastItem = _calculateFullData.lastItem;
	
		var _filterData = filterData(extent, inputXAccesor);
	
		var plotData = _filterData.plotData;
		var domain = _filterData.domain;
	
	
		return {
			plotData: plotData,
			filterData: filterData,
			xScale: xScale.domain(domain),
			xAccessor: xAccessor,
			displayXAccessor: displayXAccessor,
			dataAltered: false,
			lastItem: lastItem
		};
	}
	
	function getCursorStyle(children) {
		var style = "\n\t.react-stockcharts-grabbing-cursor {\n\t\tcursor: grabbing;\n\t\tcursor: -moz-grabbing;\n\t\tcursor: -webkit-grabbing;\n\t}\n\t.react-stockcharts-crosshair-cursor {\n\t\tcursor: crosshair;\n\t}\n\t.react-stockcharts-toottip-hover {\n\t\tpointer-events: all;\n\t\tcursor: pointer;\n\t}";
		var tooltipStyle = "\n\t.react-stockcharts-avoid-interaction {\n  \t\tpointer-events: none;\n\t}\n\t.react-stockcharts-default-cursor {\n\t\tcursor: default;\n\t}\n\t.react-stockcharts-move-cursor {\n\t\tcursor: move;\n\t}\n\t.react-stockcharts-ns-resize-cursor {\n\t\tcursor: ns-resize;\n\t}\n\t.react-stockcharts-ew-resize-cursor {\n\t\tcursor: ew-resize;\n\t}";
		/* return (<style
	 	type="text/css"
	 	dangerouslySetInnerHTML={{
	 		__html: shouldShowCrossHairStyle(children) ? style + tooltipStyle : tooltipStyle
	 	}}></style>);*/
		return _react2.default.createElement(
			"style",
			{ type: "text/css" },
			(0, _ChartDataUtil.shouldShowCrossHairStyle)(children) ? style + tooltipStyle : tooltipStyle
		);
	}
	
	var ChartCanvas = function (_Component) {
		_inherits(ChartCanvas, _Component);
	
		function ChartCanvas() {
			_classCallCheck(this, ChartCanvas);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChartCanvas).call(this));
	
			_this.getDataInfo = _this.getDataInfo.bind(_this);
			_this.getCanvases = _this.getCanvases.bind(_this);
			return _this;
		}
	
		_createClass(ChartCanvas, [{
			key: "getDataInfo",
			value: function getDataInfo() {
				return this.refs.chartContainer.getDataInfo();
			}
		}, {
			key: "getCanvases",
			value: function getCanvases() {
				if (this.refs && this.refs.canvases) {
					return this.refs.canvases.getCanvasContexts();
				}
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.setState(calculateState(this.props));
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var reset = shouldResetChart(this.props, nextProps);
				// console.log("shouldResetChart =", reset);
	
				/*
	   plotData,
	   filterData,
	   xScale: xScale.domain(domain),
	   xAccessor,
	   dataAltered: false,
	   lastItem, */
	
				if (reset) {
					if (process.env.NODE_ENV !== "production") console.log("RESET CHART, one or more of these props changed", CANDIDATES_FOR_RESET);
					this.setState(calculateState(nextProps));
				} else if (!(0, _utils.shallowEqual)(this.props.xExtents, nextProps.xExtents)) {
					if (process.env.NODE_ENV !== "production") console.log("xExtents changed");
					// since the xExtents changed update plotData, xScale, filterData to state
	
					var _calculateState = calculateState(nextProps);
	
					var plotData = _calculateState.plotData;
					var xScale = _calculateState.xScale;
					var xAccessor = _calculateState.xAccessor;
					var filterData = _calculateState.filterData;
					var lastItem = _calculateState.lastItem;
	
					this.setState({ plotData: plotData, xScale: xScale, xAccessor: xAccessor, filterData: filterData, lastItem: lastItem, dataAltered: false });
				} else if (this.props.data !== nextProps.data) {
					if (process.env.NODE_ENV !== "production") console.log("data is changed but seriesName did not");
					// this means there are more points pushed/removed or existing points are altered
	
					var _calculateFullData2 = calculateFullData(nextProps);
	
					var _xScale = _calculateFullData2.xScale;
					var _xAccessor = _calculateFullData2.xAccessor;
					var _filterData2 = _calculateFullData2.filterData;
					var _lastItem = _calculateFullData2.lastItem;
	
					this.setState({ xScale: _xScale, xAccessor: _xAccessor, filterData: _filterData2, lastItem: _lastItem, dataAltered: true });
				} else if (!(0, _utils.shallowEqual)(this.props.calculator, nextProps.calculator)) {
					if (process.env.NODE_ENV !== "production") console.log("calculator changed");
					// data did not change but calculator changed, so update only the filterData to state
	
					var _calculateFullData3 = calculateFullData(nextProps);
	
					var _xAccessor2 = _calculateFullData3.xAccessor;
					var _filterData3 = _calculateFullData3.filterData;
					var _lastItem2 = _calculateFullData3.lastItem;
	
					this.setState({ xAccessor: _xAccessor2, filterData: _filterData3, lastItem: _lastItem2, dataAltered: false });
				} else {
					if (process.env.NODE_ENV !== "production") console.log("Trivial change, may be width/height or type changed, but that does not matter");
				}
			}
		}, {
			key: "render",
			value: function render() {
				var cursor = getCursorStyle(this.props.children);
	
				var _props = this.props;
				var type = _props.type;
				var height = _props.height;
				var width = _props.width;
				var margin = _props.margin;
				var className = _props.className;
				var zIndex = _props.zIndex;
				var postCalculator = _props.postCalculator;
				var flipXScale = _props.flipXScale;
				var padding = this.props.padding;
				var _state = this.state;
				var plotData = _state.plotData;
				var filterData = _state.filterData;
				var xScale = _state.xScale;
				var xAccessor = _state.xAccessor;
				var dataAltered = _state.dataAltered;
				var lastItem = _state.lastItem;
				var displayXAccessor = _state.displayXAccessor;
	
				var dimensions = getDimensions(this.props);
				// var stateProps = { fullData, plotData, showingInterval, xExtentsCalculator, xScale, xAccessor, dataAltered };
				var props = { padding: padding, type: type, margin: margin, postCalculator: postCalculator };
				var stateProps = { plotData: plotData, filterData: filterData, xScale: xScale, xAccessor: xAccessor, dataAltered: dataAltered, lastItem: lastItem, displayXAccessor: displayXAccessor };
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
							)
						),
						_react2.default.createElement(
							"g",
							{ transform: "translate(" + (margin.left + 0.5) + ", " + (margin.top + 0.5) + ")" },
							_react2.default.createElement(
								_EventHandler2.default,
								_extends({ ref: "chartContainer"
								}, props, stateProps, {
									direction: flipXScale ? -1 : 1,
									dimensions: dimensions,
									canvasContexts: this.getCanvases }),
								this.props.children
							)
						)
					)
				);
			}
		}]);
	
		return ChartCanvas;
	}(_react.Component);
	
	/*
								lastItem={last(data)}
	
	*/
	
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
		padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
			left: _react.PropTypes.number,
			right: _react.PropTypes.number
		})]).isRequired
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
		xExtents: [_d2.default.min, _d2.default.max],
		// dataEvaluator: evaluator,
		postCalculator: _utils.identity,
		padding: 0,
		xAccessor: _utils.identity,
		flipXScale: false
	};
	
	ChartCanvas.ohlcv = function (d) {
		return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
	};
	
	exports.default = ChartCanvas;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
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
	    var timeout = cachedSetTimeout(cleanUpNextTick);
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
	    cachedClearTimeout(timeout);
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
	        cachedSetTimeout(drainQueue, 0);
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.isArray = exports.first = exports.overlayColors = exports.MOUSEUP = exports.MOUSEMOVE = exports.zipper = exports.slidingWindow = exports.shallowEqual = exports.noop = exports.identity = exports.merge = exports.mappedSlidingWindow = exports.accumulatingWindow = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.getClosestItemIndexes2 = getClosestItemIndexes2;
	exports.d3Window = d3Window;
	exports.getClosestItemIndexes = getClosestItemIndexes;
	exports.getClosestItem = getClosestItem;
	exports.rebind = rebind;
	exports.head = head;
	exports.last = last;
	exports.isDefined = isDefined;
	exports.isNotDefined = isNotDefined;
	exports.isObject = isObject;
	exports.touchPosition = touchPosition;
	exports.mousePosition = mousePosition;
	exports.clearCanvas = clearCanvas;
	exports.capitalizeFirst = capitalizeFirst;
	exports.hexToRGBA = hexToRGBA;
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _zipper = __webpack_require__(8);
	
	var _zipper2 = _interopRequireDefault(_zipper);
	
	var _merge = __webpack_require__(10);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _slidingWindow = __webpack_require__(12);
	
	var _slidingWindow2 = _interopRequireDefault(_slidingWindow);
	
	var _identity = __webpack_require__(9);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _noop = __webpack_require__(11);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _shallowEqual = __webpack_require__(13);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _mappedSlidingWindow = __webpack_require__(14);
	
	var _mappedSlidingWindow2 = _interopRequireDefault(_mappedSlidingWindow);
	
	var _accumulatingWindow = __webpack_require__(15);
	
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
	function getClosestItemIndexes2(array, value, accessor) {
		var left = _d2.default.bisector(accessor).left(array, value);
		left = Math.max(left - 1, 0);
		var right = Math.min(left + 1, array.length - 1);
	
		var item = accessor(array[left]);
		if (item >= value && item <= value) right = left;
	
		return { left: left, right: right };
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* an extension to d3.zip so we call a function instead of an array */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = zipper;
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _identity = __webpack_require__(9);
	
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
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (d) {
	  return d;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _identity = __webpack_require__(9);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _zipper = __webpack_require__(8);
	
	var _zipper2 = _interopRequireDefault(_zipper);
	
	var _noop = __webpack_require__(11);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _index = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

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
		    source = _identity2.default,
		    skipInitial = 0;
	
		var slidingWindow = function slidingWindow(data) {
			var size = _d2.default.functor(windowSize).apply(this, arguments);
			var windowData = data.slice(skipInitial, size + skipInitial).map(source);
			var accumulatorIdx = 0;
			var undef = _d2.default.functor(undefinedValue);
			// console.log(skipInitial, size, data.length, windowData.length);
			return data.map(function (d, i) {
				// console.log(d, i);
				if (i < skipInitial + size - 1) {
					return undef(source(d), i);
				}
				if (i >= skipInitial + size) {
					// Treat windowData as FIFO rolling buffer
					windowData.shift();
					windowData.push(source(d, i));
				}
				return accumulator(windowData, i, accumulatorIdx++);
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
		slidingWindow.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return slidingWindow;
		};
	
		return slidingWindow;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _noop = __webpack_require__(11);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _identity = __webpack_require__(9);
	
	var _identity2 = _interopRequireDefault(_identity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 13 */
/***/ function(module, exports) {

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _noop = __webpack_require__(11);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _identity = __webpack_require__(9);
	
	var _identity2 = _interopRequireDefault(_identity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _noop = __webpack_require__(11);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _identity = __webpack_require__(9);
	
	var _identity2 = _interopRequireDefault(_identity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.getChartOrigin = getChartOrigin;
	exports.getDimensions = getDimensions;
	exports.shouldShowCrossHairStyle = shouldShowCrossHairStyle;
	exports.getNewChartConfig = getNewChartConfig;
	exports.getCurrentCharts = getCurrentCharts;
	exports.getChartConfigWithUpdatedYScales = getChartConfigWithUpdatedYScales;
	exports.getCurrentItem = getCurrentItem;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _EventCapture = __webpack_require__(19);
	
	var _EventCapture2 = _interopRequireDefault(_EventCapture);
	
	var _Chart = __webpack_require__(20);
	
	var _Chart2 = _interopRequireDefault(_Chart);
	
	var _index = __webpack_require__(7);
	
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
	
	function shouldShowCrossHairStyle(children) {
		return _react2.default.Children.map(children, function (each) {
			if (each.type === _EventCapture2.default) {
				return each.props.useCrossHairStyle;
			}
			return undefined;
		}).filter(_index.isDefined)[0];
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
	
				var _getDimensions = getDimensions(innerDimension, each.props);
	
				var width = _getDimensions.width;
				var height = _getDimensions.height;
				var availableWidth = _getDimensions.availableWidth;
				var availableHeight = _getDimensions.availableHeight;
				// var { yMousePointerDisplayLocation: at, yMousePointerDisplayFormat: yDisplayFormat } = each.props;
				// var { yMousePointerRectWidth: rectWidth, yMousePointerRectHeight: rectHeight, yMousePointerArrowWidth: arrowWidth } = each.props;
				// var mouseCoordinates = { at, yDisplayFormat, rectHeight, rectWidth, arrowWidth };
	
				var yExtents = (Array.isArray(yExtentsProp) ? yExtentsProp : [yExtentsProp]).map(_d2.default.functor);
				// console.log(yExtentsProp, yExtents);
				return {
					id: id,
					origin: _d2.default.functor(origin)(availableWidth, availableHeight),
					padding: padding,
					yExtents: yExtents,
					flipYScale: flipYScale,
					yScale: yScale,
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
	
	function getChartConfigWithUpdatedYScales(chartConfig, plotData) {
	
		var yDomains = chartConfig.map(function (_ref3) {
			var yExtents = _ref3.yExtents;
			var yScale = _ref3.yScale;
	
			var yValues = yExtents.map(function (eachExtent) {
				return plotData.map(values(eachExtent));
			});
			yValues = (0, _lodash2.default)(yValues);
	
			var yDomains = yScale.invert ? _d2.default.extent(yValues) : _d2.default.set(yValues).values();
	
			return yDomains;
		});
	
		var combine = (0, _index.zipper)().combine(function (config, domain) {
			var padding = config.padding;
			var height = config.height;
			var yScale = config.yScale;
			var flipYScale = config.flipYScale;
	
	
			return _extends({}, config, { yScale: setRange(yScale.copy().domain(domain), height, padding, flipYScale) });
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var baseFlatten = __webpack_require__(18);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
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
	
	module.exports = flattenDeep;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
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
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
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
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
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
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
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
	  return value != null && isLength(getLength(value)) && !isFunction(value);
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
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
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
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
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
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
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
	
	module.exports = baseFlatten;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(7);
	
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
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EventCapture).call(this, props));
	
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
			_this.lastTouch = {};
			_this.initialPinch = {};
			_this.mouseInteraction = true;
			return _this;
		}
	
		_createClass(EventCapture, [{
			key: "getChildContext",
			value: function getChildContext() {
				return {
					eventMeta: this.eventMeta
				};
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				if (this.context.onFocus) this.context.onFocus(this.props.defaultFocus);
			}
		}, {
			key: "handleEnter",
			value: function handleEnter(e) {
				var eventMeta = this.props.eventMeta;
	
				this.eventMeta = eventMeta(e, ["enter"]);
	
				if (this.context.onMouseEnter) {
					this.context.onMouseEnter(e);
				}
			}
		}, {
			key: "handleLeave",
			value: function handleLeave(e) {
				var eventMeta = this.props.eventMeta;
	
				this.eventMeta = eventMeta(e, ["exit"]);
	
				if (this.context.onMouseLeave) this.context.onMouseLeave(e);
			}
		}, {
			key: "handleWheel",
			value: function handleWheel(e) {
				var _props = this.props;
				var zoom = _props.zoom;
				var onZoom = _props.onZoom;
				var zoomMultiplier = _props.zoomMultiplier;
				var eventMeta = _props.eventMeta;
	
	
				if (zoom && this.context.onZoom && this.context.focus) {
					// e.stopPropagation();
					e.preventDefault();
					var newPos = (0, _utils.mousePosition)(e);
					var zoomDir = e.deltaY > 0 ? zoomMultiplier : -zoomMultiplier;
	
					this.eventMeta = eventMeta(e, ["zoom"]);
	
					this.context.onZoom(zoomDir, newPos, e);
	
					if (onZoom) {
						onZoom(newPos, e);
					}
				}
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(e) {
				var _props2 = this.props;
				var eventMeta = _props2.eventMeta;
				var onMouseMove = _props2.onMouseMove;
	
				this.eventMeta = eventMeta(e, ["mousemove"]);
	
				var newPos = (0, _utils.mousePosition)(e);
	
				if (this.mouseInteraction && this.context.onMouseMove && this.props.mouseMove && !this.context.panInProgress) {
					this.context.onMouseMove(newPos, "mouse", e);
				}
				if (onMouseMove) onMouseMove(newPos, e);
			}
		}, {
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				var mouseEvent = e || _d3.default.event;
				var _props3 = this.props;
				var pan = _props3.pan;
				var eventMeta = _props3.eventMeta;
	
	
				this.eventMeta = eventMeta(mouseEvent, ["mousedown"]);
	
				var _context = this.context;
				var onPanStart = _context.onPanStart;
				var focus = _context.focus;
				var onFocus = _context.onFocus;
				var xScale = _context.xScale;
	
				if (this.mouseInteraction && pan && onPanStart) {
					var mouseXY = (0, _utils.mousePosition)(mouseEvent);
					this.panStart = mouseXY;
	
					var dx = mouseEvent.pageX - mouseXY[0],
					    dy = mouseEvent.pageY - mouseXY[1];
	
					var captureDOM = this.refs.capture;
	
					var win = (0, _utils.d3Window)(captureDOM);
					_d3.default.select(win).on(_utils.MOUSEMOVE, this.handlePan).on(_utils.MOUSEUP, this.handlePanEnd);
	
					onPanStart(xScale.domain(), mouseXY, [dx, dy]);
				} else {
					if (!focus && onFocus) onFocus(true);
				}
				mouseEvent.preventDefault();
			}
		}, {
			key: "handleRightClick",
			value: function handleRightClick(e) {
				e.preventDefault();
				// console.log("RIGHT CLICK");
			}
		}, {
			key: "handlePan",
			value: function handlePan() {
				// console.log("handlePan")
				var e = _d3.default.event;
	
				var eventMeta = this.props.eventMeta;
				var _props4 = this.props;
				var panEnabled = _props4.pan;
				var panListener = _props4.onPan;
				var _context2 = this.context;
				var dxdy = _context2.deltaXY;
				var xScale = _context2.xScale;
				var onPan = _context2.onPan;
	
	
				var newPos = [e.pageX - dxdy[0], e.pageY - dxdy[1]];
	
				this.eventMeta = eventMeta(e, ["pan"]);
				// console.log("moved from- ", startXY, " to ", newPos);
				if (this.mouseInteraction && panEnabled && onPan) {
	
					onPan(newPos, xScale.domain(), e);
					if (panListener) {
						panListener(newPos, e);
					}
				}
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd() {
				var e = _d3.default.event;
	
				var _props5 = this.props;
				var panEnabled = _props5.pan;
				var eventMeta = _props5.eventMeta;
				var _context3 = this.context;
				var dxdy = _context3.deltaXY;
				var onPanEnd = _context3.onPanEnd;
	
				var _panStart = _slicedToArray(this.panStart, 2);
	
				var startX = _panStart[0];
				var startY = _panStart[1];
				var x = e.pageX - dxdy[0];
				var y = e.pageY - dxdy[1];
	
	
				var eventType = startX === x && startY === y ? ["click"] : [];
	
				this.eventMeta = eventMeta(e, ["mouseup"].concat(eventType));
				this.panStart = null;
	
				var captureDOM = this.refs.capture;
	
				var win = (0, _utils.d3Window)(captureDOM);
	
				if (this.mouseInteraction && panEnabled && onPanEnd) {
					_d3.default.select(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
					onPanEnd([x, y], e);
				}
				// e.preventDefault();
			}
		}, {
			key: "handleTouchStart",
			value: function handleTouchStart(e) {
				this.mouseInteraction = false;
	
				var panEnabled = this.props.pan;
				var dxdy = this.context.deltaXY;
				var _context4 = this.context;
				var onPanStart = _context4.onPanStart;
				var onMouseMove = _context4.onMouseMove;
				var xScale = _context4.xScale;
				var onPanEnd = _context4.onPanEnd;
				var panInProgress = _context4.panInProgress;
	
	
				if (e.touches.length === 1) {
					var touch = getTouchProps(e.touches[0]);
					this.lastTouch = touch;
					var touchXY = (0, _utils.touchPosition)(touch, e);
					onMouseMove(touchXY, "touch", e);
					if (panEnabled && onPanStart) {
						var dx = touch.pageX - touchXY[0],
						    dy = touch.pageY - touchXY[1];
	
						onPanStart(xScale.domain(), touchXY, [dx, dy]);
					}
				} else if (e.touches.length === 2) {
					// pinch zoom begin
					// do nothing pinch zoom is handled in handleTouchMove
					var touch1 = getTouchProps(e.touches[0]);
	
					if (panInProgress && panEnabled && onPanEnd) {
						// end pan first
						var newPos = [touch1.pageX - dxdy[0], touch1.pageY - dxdy[1]];
						onPanEnd(newPos, e);
						this.lastTouch = null;
					}
				}
	
				if (e.touches.length !== 2) this.initialPinch = null;
				// var newPos = mousePosition(e);
				// console.log("handleTouchStart", e);
				e.preventDefault();
				// e.stopPropagation();
				// this.context.onMouseMove(newPos, e);
			}
		}, {
			key: "handleTouchMove",
			value: function handleTouchMove(e) {
				var _props6 = this.props;
				var panEnabled = _props6.pan;
				var panListener = _props6.onPan;
				var zoomEnabled = _props6.zoom;
				var _context5 = this.context;
				var dxdy = _context5.deltaXY;
				var xScale = _context5.xScale;
				var onPan = _context5.onPan;
				var onPinchZoom = _context5.onPinchZoom;
				var focus = _context5.focus;
				var panInProgress = _context5.panInProgress;
	
	
				if (e.touches.length === 1) {
					// pan
					var touch = this.lastTouch = getTouchProps(e.touches[0]);
	
					var newPos = [touch.pageX - dxdy[0], touch.pageY - dxdy[1]];
					if (panInProgress && panEnabled && onPan) {
						onPan(newPos, xScale.domain());
						if (panListener) {
							panListener(e);
						}
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
				var panEnabled = this.props.pan;
				var _context6 = this.context;
				var dxdy = _context6.deltaXY;
				var onPanEnd = _context6.onPanEnd;
				var panInProgress = _context6.panInProgress;
	
	
				if (this.lastTouch) {
					var newPos = [this.lastTouch.pageX - dxdy[0], this.lastTouch.pageY - dxdy[1]];
	
					this.initialPinch = null;
					if (panInProgress && panEnabled && onPanEnd) {
						onPanEnd(newPos, e);
					}
				}
				// console.log("handleTouchEnd", dxdy, newPos, e);
				this.mouseInteraction = true;
				e.preventDefault();
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.context.panInProgress ? "react-stockcharts-grabbing-cursor" : "react-stockcharts-crosshair-cursor";
				var clipStyle = { "clipPath": "url(#chart-area-clip)" };
				return _react2.default.createElement(
					"g",
					{ style: clipStyle },
					_react2.default.createElement("rect", { ref: "capture",
						className: className,
						width: this.context.width, height: this.context.height, style: { opacity: 0 },
						onMouseEnter: this.handleEnter,
						onMouseLeave: this.handleLeave,
						onMouseMove: this.handleMouseMove,
						onWheel: this.handleWheel,
						onMouseDown: this.handleMouseDown,
						onContextMenu: this.handleRightClick,
						onTouchStart: this.handleTouchStart,
						onTouchEnd: this.handleTouchEnd,
						onTouchMove: this.handleTouchMove }),
					this.props.children
				);
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
		defaultFocus: _react.PropTypes.bool.isRequired,
		useCrossHairStyle: _react.PropTypes.bool.isRequired,
		onZoom: _react.PropTypes.func,
		onPan: _react.PropTypes.func,
		onMouseMove: _react.PropTypes.func,
		eventMeta: _react.PropTypes.func,
		children: _react.PropTypes.node
	};
	
	EventCapture.defaultProps = {
		mouseMove: false,
		zoom: false,
		zoomMultiplier: 1,
		pan: false,
		panSpeedMultiplier: 1,
		defaultFocus: false,
		useCrossHairStyle: true,
		eventMeta: function eventMeta(e, type) {
			var button = e.button;
			var shiftKey = e.shiftKey;
			return { button: button, shiftKey: shiftKey, type: type };
		}
	};
	
	EventCapture.contextTypes = {
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		panInProgress: _react.PropTypes.bool,
		focus: _react.PropTypes.bool.isRequired,
		chartConfig: _react.PropTypes.array,
		xScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		deltaXY: _react.PropTypes.arrayOf(Number),
	
		onMouseMove: _react.PropTypes.func,
		onMouseEnter: _react.PropTypes.func,
		onMouseLeave: _react.PropTypes.func,
		onZoom: _react.PropTypes.func,
		onPinchZoom: _react.PropTypes.func,
		onPanStart: _react.PropTypes.func,
		onPan: _react.PropTypes.func,
		onPanEnd: _react.PropTypes.func,
		onFocus: _react.PropTypes.func
	};
	
	EventCapture.childContextTypes = {
		eventMeta: _react.PropTypes.object
	};
	
	exports.default = EventCapture;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _PureComponent2 = __webpack_require__(21);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chart = function (_PureComponent) {
		_inherits(Chart, _PureComponent);
	
		function Chart(props, context) {
			_classCallCheck(this, Chart);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chart).call(this, props, context));
	
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
		yExtents: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		yScale: _react.PropTypes.func.isRequired,
		yMousePointerDisplayLocation: _react.PropTypes.oneOf(["left", "right"]),
		yMousePointerDisplayFormat: _react.PropTypes.func,
		flipYScale: _react.PropTypes.bool.isRequired,
		padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
			top: _react.PropTypes.number,
			bottom: _react.PropTypes.number
		})]).isRequired
	};
	
	Chart.defaultProps = {
		id: 0,
		origin: [0, 0],
		padding: 0,
		yScale: _d3.default.scale.linear(),
		yMousePointerRectWidth: 50,
		yMousePointerRectHeight: 20,
		yMousePointerArrowWidth: 10,
		flipYScale: false
	};
	
	Chart.contextTypes = {
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		chartConfig: _react.PropTypes.array,
		margin: _react.PropTypes.object.isRequired,
	
		// adding here even when this is not used by Chart, refer to https://github.com/facebook/react/issues/2517
		// used by CurrentCoordinate
		currentItem: _react.PropTypes.object,
		mouseXY: _react.PropTypes.array,
		show: _react.PropTypes.bool
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _shallowEqual = __webpack_require__(13);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PureComponent = function (_Component) {
		_inherits(PureComponent, _Component);
	
		function PureComponent() {
			_classCallCheck(this, PureComponent);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(PureComponent).apply(this, arguments));
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	var _ChartDataUtil = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var subscriptionCount = 0;
	
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
	
	var EventHandler = function (_Component) {
		_inherits(EventHandler, _Component);
	
		function EventHandler(props, context) {
			_classCallCheck(this, EventHandler);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EventHandler).call(this, props, context));
	
			_this.handleMouseMove = _this.handleMouseMove.bind(_this);
			_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
			_this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
			_this.handleZoom = _this.handleZoom.bind(_this);
			_this.handlePinchZoom = _this.handlePinchZoom.bind(_this);
			_this.handlePanStart = _this.handlePanStart.bind(_this);
			_this.handlePan = _this.handlePan.bind(_this);
			_this.handlePanEnd = _this.handlePanEnd.bind(_this);
			_this.handleFocus = _this.handleFocus.bind(_this);
			_this.getCanvasContexts = _this.getCanvasContexts.bind(_this);
			_this.pushCallbackForCanvasDraw = _this.pushCallbackForCanvasDraw.bind(_this);
			_this.getAllCanvasDrawCallback = _this.getAllCanvasDrawCallback.bind(_this);
			_this.subscribe = _this.subscribe.bind(_this);
			_this.unsubscribe = _this.unsubscribe.bind(_this);
			_this.pinchCoordinates = _this.pinchCoordinates.bind(_this);
			_this.setInteractiveState = _this.setInteractiveState.bind(_this);
			_this.getInteractiveState = _this.getInteractiveState.bind(_this);
	
			_this.subscriptions = [];
			_this.canvasDrawCallbackList = [];
			_this.panHappened = false;
			_this.interactiveState = [];
	
			_this.state = {
				focus: false,
				// currentItem: {},
				show: false,
				mouseXY: [0, 0],
				panInProgress: false,
				currentCharts: [],
				receivedProps: 0
			};
			return _this;
		}
	
		_createClass(EventHandler, [{
			key: "componentWillMount",
			value: function componentWillMount() {
	
				/* var props = { padding, type, margin, postCalculator };
	   var stateProps = { plotData, filterData, xScale, xAccessor, dataAltered }; */
	
				var _props = this.props;
				var plotData = _props.plotData;
				var direction = _props.direction;
				var _props2 = this.props;
				var xScale = _props2.xScale;
				var dimensions = _props2.dimensions;
				var children = _props2.children;
				var postCalculator = _props2.postCalculator;
				var padding = _props2.padding;
	
	
				plotData = postCalculator(plotData);
	
				var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);
	
				this.setState({
					xScale: setXRange(xScale, dimensions, padding, direction),
					plotData: plotData,
					chartConfig: chartConfig
				});
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var plotData = nextProps.plotData;
				var padding = nextProps.padding;
				var direction = nextProps.direction;
				var lastItem = nextProps.lastItem;
				var filterData = nextProps.filterData;
				var xScale = nextProps.xScale;
				var xAccessor = nextProps.xAccessor;
				var dimensions = nextProps.dimensions;
				var children = nextProps.children;
				var postCalculator = nextProps.postCalculator;
				var dataAltered = nextProps.dataAltered;
	
	
				var reset = !(0, _utils.shallowEqual)(this.props.plotData, nextProps.plotData);
	
				var newState;
				if (reset) {
					if (process.env.NODE_ENV !== "production") {
						console.log("DATA VIEW PORT CHANGED - CHART RESET");
					}
	
					plotData = postCalculator(plotData);
	
					var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);
	
					newState = {
						xScale: setXRange(xScale, dimensions, padding, direction),
						plotData: plotData,
						chartConfig: chartConfig
					};
				} else if (dataAltered && this.props.lastItem === (0, _utils.last)(this.state.plotData)
				/* && xAccessor(this.props.lastItem) >= xAccessor(last(this.state.plotData))
	   && xAccessor(this.props.lastItem) <= xAccessor(last(this.state.plotData))*/) {
	
						if (process.env.NODE_ENV !== "production") {
							console.log("DATA CHANGED AND LAST ITEM VISIBLE");
						}
						// if last item was visible, then shift
	
						var _state$xScale$domain = this.state.xScale.domain();
	
						var _state$xScale$domain2 = _slicedToArray(_state$xScale$domain, 2);
	
						var start = _state$xScale$domain2[0];
						var end = _state$xScale$domain2[1];
	
	
						var updatedXScale = setXRange(xScale, dimensions, padding, direction);
						updatedXScale.domain([start, end]);
	
						if (end >= xAccessor(lastItem)) {
							// get plotData between [start, end] and do not change the domain
							plotData = filterData([start, end], xAccessor).plotData;
						} else {
							// get plotData between [xAccessor(l) - (end - start), xAccessor(l)] and DO change the domain
							var dx = updatedXScale(xAccessor(lastItem)) - updatedXScale.range()[1];
	
							var _updatedXScale$range$ = updatedXScale.range().map(function (x) {
								return x + dx;
							}).map(updatedXScale.invert);
	
							var _updatedXScale$range$2 = _slicedToArray(_updatedXScale$range$, 2);
	
							var newStart = _updatedXScale$range$2[0];
							var newEnd = _updatedXScale$range$2[1];
	
	
							plotData = filterData([newStart, newEnd], xAccessor).plotData;
							updatedXScale.domain([newStart, newEnd]);
						}
						// plotData = getDataOfLength(fullData, showingInterval, plotData.length)
						plotData = postCalculator(plotData);
						var _chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);
	
						newState = {
							xScale: updatedXScale,
							chartConfig: _chartConfig,
							plotData: plotData
						};
					} else {
					console.log("TRIVIAL CHANGE");
					// this.state.plotData or plotData
	
					plotData = postCalculator(filterData(this.state.xScale.domain(), xAccessor).plotData);
	
					var _chartConfig2 = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);
	
					newState = {
						xScale: setXRange(xScale, dimensions, padding, direction).domain(this.state.xScale.domain()),
						chartConfig: _chartConfig2,
						plotData: plotData
					};
				}
	
				if ((0, _utils.isDefined)(newState)) {
					if (!this.state.panInProgress) {
						this.clearThreeCanvas(nextProps);
						// this.clearInteractiveCanvas(nextProps);
						this.clearCanvasDrawCallbackList();
					}
					this.setState(_extends({}, newState, {
						receivedProps: this.state.receivedProps + 1
					}));
				}
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState) {
				return !(this.state.receivedProps < nextState.receivedProps && this.props.type === "hybrid" && this.state.panInProgress) && !(this.state.panInProgress && this.props.type === "hybrid" && this.state.show !== nextState.show && this.state.receivedPropsOnPanStart < nextState.receivedProps && this.state.receivedProps === nextState.receivedProps);
			}
		}, {
			key: "clearBothCanvas",
			value: function clearBothCanvas(props) {
				props = props || this.props;
				var canvases = props.canvasContexts();
				if (canvases && canvases.axes) {
					// console.log("CLEAR");
					(0, _utils.clearCanvas)([canvases.axes, canvases.mouseCoord]);
				}
			}
		}, {
			key: "clearThreeCanvas",
			value: function clearThreeCanvas(props) {
				props = props || this.props;
				var canvases = props.canvasContexts();
				if (canvases && canvases.axes) {
					// console.log("CLEAR");
					(0, _utils.clearCanvas)([canvases.axes, canvases.mouseCoord, canvases.bg]);
				}
			}
			/* clearInteractiveCanvas(props) {
	  	// DO NOTHING, since now the interactive canvas is no longer used
	  	props = props || this.props;
	  	var canvases = props.canvasContexts();
	  	if (canvases && canvases.interactive) {
	  		// console.error("CLEAR");
	  		clearCanvas([canvases.interactive]);
	  	}
	  }*/
	
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				// var { showingInterval } = this.state;
				// var { fullData } = this.props;
				return {
					plotData: this.state.plotData,
					// data: isDefined(showingInterval) ? fullData[showingInterval] : fullData,
					chartConfig: this.state.chartConfig,
					currentCharts: this.state.currentCharts,
					currentItem: this.state.currentItem,
					show: this.state.show,
					mouseXY: this.state.mouseXY,
					// interval: this.state.showingInterval,
					width: this.props.dimensions.width,
					height: this.props.dimensions.height,
					chartCanvasType: this.props.type,
					xScale: this.state.xScale,
					xAccessor: this.props.xAccessor,
					displayXAccessor: this.props.displayXAccessor,
					margin: this.props.margin,
	
					callbackForCanvasDraw: this.pushCallbackForCanvasDraw,
					getAllCanvasDrawCallback: this.getAllCanvasDrawCallback,
					subscribe: this.subscribe,
					unsubscribe: this.unsubscribe,
					getInteractiveState: this.getInteractiveState,
					setInteractiveState: this.setInteractiveState,
					getCanvasContexts: this.getCanvasContexts,
					onMouseMove: this.handleMouseMove,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					onZoom: this.handleZoom,
					onPinchZoom: this.handlePinchZoom,
					onPanStart: this.handlePanStart,
					onPan: this.handlePan,
					onPanEnd: this.handlePanEnd,
					onFocus: this.handleFocus,
					deltaXY: this.state.deltaXY,
					panInProgress: this.state.panInProgress,
					focus: this.state.focus
				};
			}
		}, {
			key: "pushCallbackForCanvasDraw",
			value: function pushCallbackForCanvasDraw(findThis, replaceWith) {
				var canvasDrawCallbackList = this.canvasDrawCallbackList;
				// console.log(findThis, canvasDrawCallbackList.length);
	
				if (replaceWith) {
					canvasDrawCallbackList.forEach(function (each, idx) {
						if (each === findThis) {
							canvasDrawCallbackList[idx] = replaceWith;
						}
					});
				} else {
					// console.log(findThis);
					canvasDrawCallbackList.push(findThis);
				}
			}
		}, {
			key: "getAllCanvasDrawCallback",
			value: function getAllCanvasDrawCallback() {
				return this.canvasDrawCallbackList;
			}
		}, {
			key: "subscribe",
			value: function subscribe(forChart, eventType, callback) {
				subscriptionCount++;
	
				this.subscriptions.push({
					forChart: forChart,
					subscriptionId: subscriptionCount,
					eventType: eventType,
					callback: callback
				});
				return subscriptionCount;
			}
		}, {
			key: "unsubscribe",
			value: function unsubscribe(subscriptionId) {
				// console.log(subscriptionId);
				this.subscriptions = this.subscriptions.filter(function (each) {
					return each.subscriptionId === subscriptionId;
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
			value: function handleMouseEnter() /* e */{
				// if type === svg remove state.canvases
				// if type !== svg get canvases and set in state if state.canvases is not present already
				/* var { type, canvasContexts } = this.props;
	   var { canvases } = this.state;
	   if (type === "svg") {
	   	canvases = null;
	   } else {
	   	canvases = canvasContexts();
	   }*/
				this.setState({
					show: true
				});
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(mouseXY /* , inputType, e */) {
				var _state = this.state;
				var chartConfig = _state.chartConfig;
				var plotData = _state.plotData;
				var xScale = _state.xScale;
				var xAccessor = this.props.xAccessor;
	
	
				var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
	
				var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
				// optimization oportunity do not change currentItem if it is not the same as prev
	
				var contexts = this.getCanvasContexts();
				if (contexts && contexts.mouseCoord) {
					(0, _utils.clearCanvas)([contexts.mouseCoord]);
					// this.clearInteractiveCanvas();
				}
				// console.log(interactiveState === this.state.interactiveState);
				// if (interactiveState !== this.state.interactiveState) this.clearInteractiveCanvas();
	
				this.setState({
					mouseXY: mouseXY,
					currentItem: currentItem,
					currentCharts: currentCharts
				});
			}
		}, {
			key: "handleMouseLeave",
			value: function handleMouseLeave() /* e */{
				var contexts = this.getCanvasContexts();
	
				// this.clearInteractiveCanvas();
	
				if (contexts && contexts.mouseCoord) {
					(0, _utils.clearCanvas)([contexts.mouseCoord]);
				}
				this.setState({
					show: false
				});
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
				var _this2 = this;
	
				var initialPinchXScale = initialPinch.xScale;
				var _state2 = this.state;
				var initialXScale = _state2.xScale;
				var initialChartConfig = _state2.chartConfig;
				var initialPlotData = _state2.plotData;
				var _props3 = this.props;
				var xAccessor = _props3.xAccessor;
				var filterData = _props3.filterData;
				var postCalculator = _props3.postCalculator;
	
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
	
				var _filterData = filterData(newDomain, xAccessor, initialPlotData, initialXScale.domain());
	
				var plotData = _filterData.plotData;
				var domain = _filterData.domain;
	
	
				plotData = postCalculator(plotData);
				var updatedScale = initialXScale.copy().domain(domain);
	
				var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData);
	
				requestAnimationFrame(function () {
					_this2.clearThreeCanvas();
					// this.clearInteractiveCanvas();
	
					_this2.clearCanvasDrawCallbackList();
					_this2.setState({
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
			value: function handleZoom(zoomDirection, mouseXY) {
				// console.log("zoomDirection ", zoomDirection, " mouseXY ", mouseXY);
				var _state3 = this.state;
				var initialXScale = _state3.xScale;
				var initialChartConfig = _state3.chartConfig;
				var initialPlotData = _state3.plotData;
				var _props4 = this.props;
				var xAccessor = _props4.xAccessor;
				var filterData = _props4.filterData;
				var postCalculator = _props4.postCalculator;
	
	
				var item = (0, _ChartDataUtil.getCurrentItem)(initialXScale, xAccessor, mouseXY, initialPlotData),
				    cx = initialXScale(xAccessor(item)),
				    c = zoomDirection > 0 ? 2 : 0.5,
				    newDomain = initialXScale.range().map(function (x) {
					return cx + (x - cx) * c;
				}).map(initialXScale.invert);
	
				var _filterData2 = filterData(newDomain, xAccessor, initialPlotData, initialXScale.domain());
	
				var plotData = _filterData2.plotData;
				var domain = _filterData2.domain;
	
	
				plotData = postCalculator(plotData);
				var updatedScale = initialXScale.copy().domain(domain);
	
				var currentItem = (0, _ChartDataUtil.getCurrentItem)(updatedScale, xAccessor, mouseXY, plotData);
				var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData);
				var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
				this.clearThreeCanvas();
				// this.clearInteractiveCanvas();
	
				// console.log(showingInterval, updatedInterval);
				this.clearCanvasDrawCallbackList();
				this.setState({
					xScale: updatedScale,
					plotData: plotData,
					mouseXY: mouseXY,
					currentCharts: currentCharts,
					chartConfig: chartConfig,
					currentItem: currentItem
				}); /**/
			}
		}, {
			key: "handlePanStart",
			value: function handlePanStart(panStartDomain, panOrigin, dxy) {
				// console.log("panStartDomain - ", panStartDomain, ", panOrigin - ", panOrigin);
				this.setState({
					panInProgress: true,
					// panStartDomain: panStartDomain,
					panStartXScale: this.state.xScale,
					panOrigin: panOrigin,
					focus: true,
					deltaXY: dxy, // used in EventCapture
					receivedPropsOnPanStart: this.state.receivedProps
				});
				this.panHappened = false;
			}
		}, {
			key: "panHelper",
			value: function panHelper(mouseXY) {
				var _state4 = this.state;
				var initialXScale = _state4.panStartXScale;
				var initialChartConfig = _state4.chartConfig;
				var panOrigin = this.state.panOrigin;
				var _props5 = this.props;
				var xAccessor = _props5.xAccessor;
				var filterData = _props5.filterData;
				var postCalculator = _props5.postCalculator;
	
	
				var dx = mouseXY[0] - panOrigin[0];
	
				if ((0, _utils.isNotDefined)(initialXScale.invert)) throw new Error("xScale provided does not have an invert() method." + "You are likely using an ordinal scale. This scale does not support zoom, pan");
				var newDomain = initialXScale.range().map(function (x) {
					return x - dx;
				}).map(initialXScale.invert);
	
				var _filterData3 = filterData(newDomain, xAccessor, this.hackyWayToStopPanBeyondBounds__plotData, this.hackyWayToStopPanBeyondBounds__domain);
	
				var plotData = _filterData3.plotData;
				var domain = _filterData3.domain;
	
	
				var updatedScale = initialXScale.copy().domain(domain);
				plotData = postCalculator(plotData);
				// console.log(last(plotData));
				var currentItem = (0, _ChartDataUtil.getCurrentItem)(updatedScale, xAccessor, mouseXY, plotData);
				var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData);
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
			key: "handlePan",
			value: function handlePan(mousePosition /* , e*/) {
				var _this3 = this;
	
				this.panHappened = true;
				var state = this.panHelper(mousePosition);
	
				this.hackyWayToStopPanBeyondBounds__plotData = state.plotData;
				this.hackyWayToStopPanBeyondBounds__domain = state.xScale.domain();
	
				if (this.props.type !== "svg") {
					var _getCanvasContexts = this.getCanvasContexts();
	
					var axesCanvasContext = _getCanvasContexts.axes;
					var mouseContext = _getCanvasContexts.mouseCoord;
					var mouseXY = state.mouseXY;
					var chartConfig = state.chartConfig;
					var plotData = state.plotData;
					var currentItem = state.currentItem;
					var xScale = state.xScale;
					var currentCharts = state.currentCharts;
					var show = this.state.show;
					var canvasDrawCallbackList = this.canvasDrawCallbackList;
	
	
					requestAnimationFrame(function () {
						// this.clearCanvas([axesCanvasContext, mouseContext]);
						// this.clearCanvas([axesCanvasContext, mouseContext]);
						_this3.clearBothCanvas();
						// this.clearInteractiveCanvas();
	
						// console.log(canvasDrawCallbackList.length)
	
						chartConfig.forEach(function (eachChart) {
							canvasDrawCallbackList.filter(function (each) {
								return eachChart.id === each.chartId;
							}).forEach(function (each) {
								var yScale = eachChart.yScale;
	
	
								if (each.type === "axis") {
									each.draw(axesCanvasContext, xScale, yScale);
								} else if (each.type === "currentcoordinate") {
									each.draw(mouseContext, show, xScale, yScale, currentItem);
								} else if (each.type === "mouse") {
									each.draw(mouseContext, show, xScale, mouseXY, currentCharts, eachChart, currentItem);
								} else if (each.type !== "interactive") {
									each.draw(axesCanvasContext, xScale, yScale, plotData);
								}
							});
						});
						_this3.drawInteractive(state);
						canvasDrawCallbackList.filter(function (each) {
							return (0, _utils.isNotDefined)(each.chartId);
						}).filter(function (each) {
							return each.type === "axis";
						}).forEach(function (each) {
							return each.draw(axesCanvasContext, chartConfig);
						});
	
						canvasDrawCallbackList.filter(function (each) {
							return each.type === "mouse";
						}).filter(function (each) {
							return (0, _utils.isNotDefined)(each.chartId);
						}).forEach(function (each) {
							return each.draw(mouseContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);
						});
	
						canvasDrawCallbackList.filter(function (each) {
							return each.type === "annotation";
						}).forEach(function (each) {
							return each.draw({
								xScale: xScale,
								chartConfig: chartConfig,
								plotData: plotData,
								mouseXY: mouseXY,
								currentCharts: currentCharts,
								currentItem: currentItem
							});
						});
					});
				} else {
					this.setState(state);
				}
			}
		}, {
			key: "drawInteractive",
			value: function drawInteractive(_ref2) {
				var plotData = _ref2.plotData;
				var chartConfig = _ref2.chartConfig;
				var xScale = _ref2.xScale;
	
				var _getCanvasContexts2 = this.getCanvasContexts();
	
				var interactive = _getCanvasContexts2.interactive;
	
	
				this.canvasDrawCallbackList.filter(function (each) {
					return each.type === "interactive";
				}).forEach(function (each) {
					chartConfig.filter(function (eachChart) {
						return eachChart.id === each.chartId;
					}).forEach(function (eachChart) {
						each.draw(interactive, { xScale: xScale, plotData: plotData, chartConfig: eachChart });
						// console.log("DRAW");
					});
				});
			}
		}, {
			key: "clearCanvasDrawCallbackList",
			value: function clearCanvasDrawCallbackList() {
				this.canvasDrawCallbackList = [];
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd(mousePosition) {
				var state = this.panHelper(mousePosition);
				// console.log(this.canvasDrawCallbackList.map(d => d.type));
				this.hackyWayToStopPanBeyondBounds__plotData = null;
				this.hackyWayToStopPanBeyondBounds__domain = null;
	
				this.clearCanvasDrawCallbackList();
	
				this.clearThreeCanvas();
	
				// console.log(interactiveState[0].interactive);
				this.setState(_extends({}, state, {
					show: this.state.show,
					panInProgress: false,
					panStartXScale: null
				}));
			}
		}, {
			key: "setInteractiveState",
			value: function setInteractiveState(id, chartId, interactive) {
				var everyThingElse = this.interactiveState.filter(function (each) {
					return !(each.id === id && each.chartId === chartId);
				});
	
				this.interactiveState = everyThingElse.concat({ id: id, chartId: chartId, interactive: interactive });
			}
		}, {
			key: "getInteractiveState",
			value: function getInteractiveState(forChart, id, initialState) {
				var state = this.interactiveState.filter(function (each) {
					return each.chartId === forChart;
				}).filter(function (each) {
					return each.id === id;
				});
	
				var response = state.length > 0 ? response = state[0].interactive : initialState;
				return response;
			}
		}, {
			key: "handleFocus",
			value: function handleFocus(focus) {
				// console.log(focus);interactive
				this.setState({
					focus: focus
				});
			}
		}, {
			key: "render",
			value: function render() {
				// var { chartConfig } = this.state;
				// var { dimensions } = this.props;
				return _react2.default.createElement(
					"g",
					null,
					this.props.children
				);
			}
		}]);
	
		return EventHandler;
	}(_react.Component);
	
	EventHandler.propTypes = {
		children: _react.PropTypes.node.isRequired,
		type: _react.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		// interval: PropTypes.string,
		dimensions: _react.PropTypes.object,
		postCalculator: _react.PropTypes.func.isRequired,
		canvasContexts: _react.PropTypes.func.isRequired,
		margin: _react.PropTypes.object.isRequired,
		plotData: _react.PropTypes.array,
		padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
			left: _react.PropTypes.number,
			right: _react.PropTypes.number
		})]).isRequired,
		direction: _react.PropTypes.oneOf([-1, 1]).isRequired,
		lastItem: _react.PropTypes.object,
		displayXAccessor: _react.PropTypes.func,
		filterData: _react.PropTypes.func
	};
	
	EventHandler.childContextTypes = {
		plotData: _react.PropTypes.array,
		data: _react.PropTypes.array,
		chartConfig: _react.PropTypes.arrayOf(_react.PropTypes.shape({
			id: _react.PropTypes.number.isRequired,
			origin: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
			padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
				top: _react.PropTypes.number,
				bottom: _react.PropTypes.number
			})]),
			yExtents: _react.PropTypes.arrayOf(_react.PropTypes.func).isRequired,
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
		currentItem: _react.PropTypes.object,
		show: _react.PropTypes.bool,
		mouseXY: _react.PropTypes.array,
		// interval: PropTypes.string,
		currentCharts: _react.PropTypes.array,
		mainChart: _react.PropTypes.number,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		chartCanvasType: _react.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
	
		margin: _react.PropTypes.object.isRequired,
		dataTransform: _react.PropTypes.array,
	
		subscribe: _react.PropTypes.func,
		unsubscribe: _react.PropTypes.func,
		getInteractiveState: _react.PropTypes.func.isRequired,
		setInteractiveState: _react.PropTypes.func,
		callbackForCanvasDraw: _react.PropTypes.func,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		getCanvasContexts: _react.PropTypes.func,
		onMouseMove: _react.PropTypes.func,
		onMouseEnter: _react.PropTypes.func,
		onMouseLeave: _react.PropTypes.func,
		onZoom: _react.PropTypes.func,
		onPinchZoom: _react.PropTypes.func,
		onPanStart: _react.PropTypes.func,
		onPan: _react.PropTypes.func,
		onPanEnd: _react.PropTypes.func,
		panInProgress: _react.PropTypes.bool.isRequired,
		focus: _react.PropTypes.bool.isRequired,
		onFocus: _react.PropTypes.func,
		deltaXY: _react.PropTypes.arrayOf(Number)
	};
	
	exports.default = EventHandler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CanvasContainer = function (_Component) {
		_inherits(CanvasContainer, _Component);
	
		function CanvasContainer() {
			_classCallCheck(this, CanvasContainer);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CanvasContainer).apply(this, arguments));
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
					_react2.default.createElement("canvas", { ref: "bg", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0 } }),
					_react2.default.createElement("canvas", { ref: "canvas_axes", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0 } }),
					_react2.default.createElement("canvas", { ref: "canvas_mouse_coordinates", width: width, height: height,
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

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
	
			var mappedData = data.map(map);
	
			var composedCalculator = compose(calculator);
			var calculatedData = composedCalculator(mappedData);
	
			if ((0, _utils.isDefined)(scaleProvider)) {
				var _scaleProvider = scaleProvider(calculatedData, xAccessor, indexAccessor, indexMutator);
	
				var finalData = _scaleProvider.data;
				var modifiedXScale = _scaleProvider.xScale;
				var realXAccessor = _scaleProvider.xAccessor;
				var displayXAccessor = _scaleProvider.displayXAccessor;
	
	
				return {
					filterData: extentsWrapper(finalData, xAccessor, realXAccessor, width, useWholeData || (0, _utils.isNotDefined)(modifiedXScale.invert)),
					xScale: modifiedXScale,
					xAccessor: realXAccessor,
					displayXAccessor: displayXAccessor,
					lastItem: (0, _utils.last)(finalData)
				};
			}
	
			return {
				filterData: extentsWrapper(calculatedData, xAccessor, xAccessor, width, useWholeData || (0, _utils.isNotDefined)(xScale.invert)),
				xScale: xScale,
				xAccessor: xAccessor,
				displayXAccessor: xAccessor,
				lastItem: (0, _utils.last)(calculatedData)
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
	
	var _utils = __webpack_require__(7);
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	function extentsWrapper(data, inputXAccessor, realXAccessor, width, useWholeData) {
		function domain(inputDomain, xAccessor, currentPlotData, currentDomain) {
			if (useWholeData) {
				return { plotData: data, domain: inputDomain };
			}
	
			var left = (0, _utils.first)(inputDomain);
			var right = (0, _utils.last)(inputDomain);
	
			var filteredData = getFilteredResponse(data, left, right, xAccessor);
	
			var plotData, domain;
			if (canShowTheseManyPeriods(width, filteredData.length)) {
				plotData = filteredData;
				// domain = subsequent ? inputDomain : [realXAccessor(first(plotData)), realXAccessor(last(plotData))]
				domain = realXAccessor === xAccessor ? inputDomain : [realXAccessor((0, _utils.first)(plotData)), realXAccessor((0, _utils.last)(plotData))];
			} else {
				plotData = currentPlotData || filteredData.slice(filteredData.length - showMax(width));
				domain = currentDomain || [realXAccessor((0, _utils.first)(plotData)), realXAccessor((0, _utils.last)(plotData))];
			}
	
			return { plotData: plotData, domain: domain };
		}
	
		return domain;
	}
	
	function canShowTheseManyPeriods(width, arrayLength) {
		var threshold = 0.75; // number of datapoints per 1 px
		return arrayLength < width * threshold && arrayLength > 1;
	}
	
	function showMax(width) {
		var threshold = 0.75; // number of datapoints per 1 px
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PureComponent2 = __webpack_require__(21);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BackgroundText = function (_PureComponent) {
		_inherits(BackgroundText, _PureComponent);
	
		function BackgroundText() {
			_classCallCheck(this, BackgroundText);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BackgroundText).apply(this, arguments));
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
		fontSize: _react.PropTypes.number.isRequired
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.wrap = exports.StraightLine = exports.Line = exports.Area = exports.VolumeProfileSeries = exports.ElderRaySeries = exports.StochasticSeries = exports.RSISeries = exports.BollingerSeries = exports.MACDSeries = exports.RenkoSeries = exports.PointAndFigureSeries = exports.KagiSeries = exports.GroupedBarSeries = exports.StackedBarSeries = exports.BarSeries = exports.OHLCSeries = exports.CandlestickSeries = exports.LineSeries = exports.AreaSeries = exports.CircleMarker = exports.ScatterSeries = undefined;
	
	var _AreaSeries = __webpack_require__(27);
	
	var _AreaSeries2 = _interopRequireDefault(_AreaSeries);
	
	var _ScatterSeries = __webpack_require__(32);
	
	var _ScatterSeries2 = _interopRequireDefault(_ScatterSeries);
	
	var _CircleMarker = __webpack_require__(33);
	
	var _CircleMarker2 = _interopRequireDefault(_CircleMarker);
	
	var _LineSeries = __webpack_require__(34);
	
	var _LineSeries2 = _interopRequireDefault(_LineSeries);
	
	var _CandlestickSeries = __webpack_require__(35);
	
	var _CandlestickSeries2 = _interopRequireDefault(_CandlestickSeries);
	
	var _OHLCSeries = __webpack_require__(36);
	
	var _OHLCSeries2 = _interopRequireDefault(_OHLCSeries);
	
	var _BarSeries = __webpack_require__(37);
	
	var _BarSeries2 = _interopRequireDefault(_BarSeries);
	
	var _StackedBarSeries = __webpack_require__(38);
	
	var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);
	
	var _GroupedBarSeries = __webpack_require__(39);
	
	var _GroupedBarSeries2 = _interopRequireDefault(_GroupedBarSeries);
	
	var _KagiSeries = __webpack_require__(40);
	
	var _KagiSeries2 = _interopRequireDefault(_KagiSeries);
	
	var _PointAndFigureSeries = __webpack_require__(41);
	
	var _PointAndFigureSeries2 = _interopRequireDefault(_PointAndFigureSeries);
	
	var _RenkoSeries = __webpack_require__(42);
	
	var _RenkoSeries2 = _interopRequireDefault(_RenkoSeries);
	
	var _MACDSeries = __webpack_require__(43);
	
	var _MACDSeries2 = _interopRequireDefault(_MACDSeries);
	
	var _BollingerSeries = __webpack_require__(45);
	
	var _BollingerSeries2 = _interopRequireDefault(_BollingerSeries);
	
	var _RSISeries = __webpack_require__(46);
	
	var _RSISeries2 = _interopRequireDefault(_RSISeries);
	
	var _StochasticSeries = __webpack_require__(47);
	
	var _StochasticSeries2 = _interopRequireDefault(_StochasticSeries);
	
	var _ElderRaySeries = __webpack_require__(48);
	
	var _ElderRaySeries2 = _interopRequireDefault(_ElderRaySeries);
	
	var _VolumeProfileSeries = __webpack_require__(50);
	
	var _VolumeProfileSeries2 = _interopRequireDefault(_VolumeProfileSeries);
	
	var _Area = __webpack_require__(31);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import ElderImpulseBackground from "./ElderImpulseBackground";
	
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
	exports.Area = _Area2.default;
	exports.Line = _Line2.default;
	exports.StraightLine = _StraightLine2.default;
	exports.wrap = _wrap2.default;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Area = __webpack_require__(31);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AreaSeries = function (_Component) {
		_inherits(AreaSeries, _Component);
	
		function AreaSeries() {
			_classCallCheck(this, AreaSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaSeries).apply(this, arguments));
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
				var strokeWidth = props.strokeWidth;
				var fill = props.fill;
				var baseAt = props.baseAt;
				var opacity = props.opacity;
	
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: stroke, fill: "none",
						strokeWidth: strokeWidth,
						type: type }),
					_react2.default.createElement(_Area2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						base: baseAt,
						stroke: "none", fill: fill, opacity: opacity,
						type: type })
				);
			}
		}]);
	
		return AreaSeries;
	}(_react.Component);
	
	AreaSeries.propTypes = {
		stroke: _react.PropTypes.string,
		strokeWidth: _react.PropTypes.number,
		fill: _react.PropTypes.string.isRequired,
		opacity: _react.PropTypes.number.isRequired,
		className: _react.PropTypes.string
	};
	
	AreaSeries.defaultProps = {
		stroke: "#4682B4",
		strokeWidth: 1,
		opacity: 0.5,
		fill: "#4682B4",
		className: "react-stockcharts-area"
	};
	
	AreaSeries.yAccessor = function (d) {
		return d.close;
	};
	
	exports.default = (0, _wrap2.default)(AreaSeries);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Line = function (_Component) {
		_inherits(Line, _Component);
	
		function Line() {
			_classCallCheck(this, Line);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Line).apply(this, arguments));
		}
	
		_createClass(Line, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var stroke = _props.stroke;
				var strokeWidth = _props.strokeWidth;
				var fill = _props.fill;
				var className = _props.className;
	
	
				className = className.concat(stroke ? "" : " line-stroke");
				return _react2.default.createElement("path", { d: Line.getPath(this.props), stroke: stroke, strokeWidth: strokeWidth, fill: fill, className: className });
			}
		}]);
	
		return Line;
	}(_react.Component);
	
	Line.propTypes = {
		className: _react.PropTypes.string,
		xScale: _react.PropTypes.func.isRequired,
		yScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		yAccessor: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array.isRequired,
		stroke: _react.PropTypes.string,
		strokeWidth: _react.PropTypes.number,
		fill: _react.PropTypes.string
	};
	
	Line.defaultProps = {
		className: "line ",
		fill: "none",
		stroke: "black",
		strokeWidth: 1,
		defined: function defined(d) {
			return !isNaN(d);
		}
	};
	
	Line.getPath = function (props) {
		var plotData = props.plotData;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var defined = props.defined;
	
	
		var dataSeries = _d2.default.svg.line().defined(function (d) {
			return defined(yAccessor(d));
		}).x(function (d) {
			return xScale(xAccessor(d));
		}).y(function (d) {
			return yScale(yAccessor(d));
		});
		return dataSeries(plotData);
	};
	
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
	
	Line.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var stroke = props.stroke;
		var strokeWidth = props.strokeWidth;
		var defined = props.defined;
	
	
		ctx.lineWidth = strokeWidth;
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
	};
	
	exports.default = (0, _wrap2.default)(Line);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getDisplayName(Series) {
		var name = Series.displayName || Series.name || "Series";
		return name;
	}
	
	function wrap(WrappedSeries) {
		var BaseCanvasSeries = function (_Component) {
			_inherits(BaseCanvasSeries, _Component);
	
			function BaseCanvasSeries() {
				_classCallCheck(this, BaseCanvasSeries);
	
				return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseCanvasSeries).apply(this, arguments));
			}
	
			_createClass(BaseCanvasSeries, [{
				key: "componentDidMount",
				value: function componentDidMount() {
					var callback = WrappedSeries.drawOnCanvas;
					if (callback) {
						var _props = this.props;
						var chartCanvasType = _props.chartCanvasType;
						var getCanvasContexts = _props.getCanvasContexts;
	
	
						if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
							var contexts = getCanvasContexts();
							var props = _extends({}, WrappedSeries.defaultProps, this.props);
	
							if (contexts) BaseCanvasSeries.baseReStockDrawOnCanvasHelper(contexts.axes, props, callback);
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
					this.componentWillReceiveProps(this.props);
				}
			}, {
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps) {
					// console.log("HERE1");
					var chartCanvasType = nextProps.chartCanvasType;
	
					var callback = WrappedSeries.drawOnCanvas;
	
					if (callback && chartCanvasType !== "svg") {
						var canvasOriginX = nextProps.canvasOriginX;
						var canvasOriginY = nextProps.canvasOriginY;
						var height = nextProps.height;
						var width = nextProps.width;
						var xAccessor = nextProps.xAccessor;
						var yAccessor = nextProps.yAccessor;
						var chartId = nextProps.chartId;
	
	
						var canvasOrigin = [canvasOriginX, canvasOriginY];
	
						var props = _extends({}, WrappedSeries.defaultProps, nextProps);
	
						var draw = BaseCanvasSeries.baseReStockDrawOnCanvas.bind(null, props, callback, canvasOrigin, height, width, xAccessor, yAccessor);
	
						nextProps.callbackForCanvasDraw({
							chartId: chartId,
							type: "series",
							// seriesId: seriesId,
							draw: draw
						});
					}
				}
			}, {
				key: "render",
				value: function render() {
					var callback = WrappedSeries.drawOnCanvas;
					var _props2 = this.props;
					var clip = _props2.clip;
					var chartCanvasType = _props2.chartCanvasType;
					var chartConfig = _props2.chartConfig;
	
	
					if (chartCanvasType !== "svg" && (0, _utils.isDefined)(callback)) return null;
					var style = clip ? { "clipPath": "url(#chart-area-clip)" } : null;
	
					// Idea: send plotData + 1 row on left + 1 row on right so the chart shows a continuity when pan
					// Problems:
					// 		Edge coordinate will not seem consistent
					// 		yExtents will not be valid any more
					// 		candle width will not be valid any more
	
					return _react2.default.createElement(
						"g",
						{ style: style },
						_react2.default.createElement(WrappedSeries, _extends({ ref: "wrappedSeries",
							yScale: chartConfig.yScale
						}, this.props))
					);
				}
			}]);
	
			return BaseCanvasSeries;
		}(_react.Component);
	
		BaseCanvasSeries.displayName = "wrap(" + getDisplayName(WrappedSeries) + ")";
	
		BaseCanvasSeries.baseReStockDrawOnCanvasHelper = function (canvasContext, props, callback) {
			var height = props.height;
			var width = props.width;
			var xAccessor = props.xAccessor;
			var yAccessor = props.yAccessor;
			var xScale = props.xScale;
			var chartConfig = props.chartConfig;
			var yScale = props.yScale;
			var plotData = props.plotData;
			var canvasOriginX = props.canvasOriginX;
			var canvasOriginY = props.canvasOriginY;
	
			var canvasOrigin = [canvasOriginX, canvasOriginY];
	
			BaseCanvasSeries.baseReStockDrawOnCanvas(props, callback, canvasOrigin, height, width, xAccessor, yAccessor, canvasContext, xScale, yScale || chartConfig.yScale, plotData);
		};
	
		BaseCanvasSeries.baseReStockDrawOnCanvas = function (props, callback, canvasOrigin, height, width, xAccessor, yAccessor, ctx, xScale, yScale, plotData) {
	
			ctx.save();
	
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.translate(canvasOrigin[0], canvasOrigin[1]);
	
			if (props.clip) {
				ctx.beginPath();
				ctx.rect(-1, -1, width + 1, height + 1);
				ctx.clip();
			}
	
			// console.log(canvasOrigin, width, height);
	
			// console.log("HERE");
			if (callback) {
				var newProps = _extends({ height: height, width: width, xAccessor: xAccessor, yAccessor: yAccessor }, props);
	
				callback(newProps, ctx, xScale, yScale, plotData);
			}
	
			ctx.restore();
		};
	
		BaseCanvasSeries.defaultProps = _extends({}, WrappedSeries.defaultProps, {
			clip: true
		});
	
		BaseCanvasSeries.propTypes = {
			getCanvasContexts: _react.PropTypes.func,
			chartConfig: _react.PropTypes.object,
			chartCanvasType: _react.PropTypes.string,
			clip: _react.PropTypes.bool.isRequired
		};
	
		// console.log(Object.keys(BaseCanvasSeries))
		return (0, _pure2.default)(BaseCanvasSeries, {
			getCanvasContexts: _react.PropTypes.func,
			canvasOriginX: _react.PropTypes.number,
			canvasOriginY: _react.PropTypes.number,
			height: _react.PropTypes.number.isRequired,
			width: _react.PropTypes.number.isRequired,
			callbackForCanvasDraw: _react.PropTypes.func.isRequired,
			chartId: _react.PropTypes.number.isRequired,
			// seriesId: PropTypes.number.isRequired,
			// stroke: PropTypes.string,
			// fill: PropTypes.string,
			chartConfig: _react.PropTypes.object.isRequired,
			chartCanvasType: _react.PropTypes.string,
			xScale: _react.PropTypes.func.isRequired,
			// yScale: PropTypes.func.isRequired,
			xAccessor: _react.PropTypes.func.isRequired,
			plotData: _react.PropTypes.array.isRequired
		});
	}
	
	exports.default = wrap;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getDisplayName(Series) {
		var name = Series.displayName || Series.name || "Series";
		return name;
	}
	
	function pure(PureSeries, contextShape) {
		var ignorePropKeys = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
		var PureCanvasSeries = function (_Component) {
			_inherits(PureCanvasSeries, _Component);
	
			function PureCanvasSeries() {
				_classCallCheck(this, PureCanvasSeries);
	
				return _possibleConstructorReturn(this, Object.getPrototypeOf(PureCanvasSeries).apply(this, arguments));
			}
	
			_createClass(PureCanvasSeries, [{
				key: "shouldComponentUpdate",
				value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
					return !(0, _utils.shallowEqual)(this.props, nextProps) || !(0, _utils.shallowEqual)(this.state, nextState) || !(0, _utils.shallowEqual)(this.context, nextContext);
				}
			}, {
				key: "getWrappedComponent",
				value: function getWrappedComponent() {
					return this.refs.pureSeries;
				}
			}, {
				key: "render",
				value: function render() {
					var _this2 = this;
	
					var ctx = {};
					Object.keys(this.context).filter(function (key) {
						return ignorePropKeys.indexOf(key) === -1;
					}).forEach(function (key) {
						ctx[key] = _this2.context[key];
					});
					return _react2.default.createElement(PureSeries, _extends({ ref: "pureSeries"
					}, ctx, this.props));
				}
			}]);
	
			return PureCanvasSeries;
		}(_react.Component);
	
		PureCanvasSeries.displayName = "pure(" + getDisplayName(PureSeries) + ")";
	
		PureCanvasSeries.contextTypes = contextShape;
	
		var defaultProps = {};
	
		if (PureSeries.defaultProps) {
			Object.keys(PureSeries.defaultProps).forEach(function (key) {
				defaultProps[key] = PureSeries.defaultProps[key];
			});
			PureCanvasSeries.defaultProps = defaultProps;
		}
	
		/* Object.keys(PureSeries)
	 	.filter((key) => key !== "propTypes")
	 	.filter(key => key !== "defaultProps")
	 	.filter(key => key !== "displayName")
	 	.filter(key => key !== "contextTypes")
	 	.filter(key => key !== "childContextTypes")
	 	.forEach(key => PureCanvasSeries[key] = PureSeries[key]);*/
	
		// console.log(Object.keys(PureCanvasSeries))
		return PureCanvasSeries;
	}
	
	exports.default = pure;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Area = function (_Component) {
		_inherits(Area, _Component);
	
		function Area() {
			_classCallCheck(this, Area);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).apply(this, arguments));
		}
	
		_createClass(Area, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var fill = props.fill;
				var className = props.className;
				var opacity = props.opacity;
	
	
				className = className.concat((0, _utils.isDefined)(stroke) ? "" : " line-stroke");
				return _react2.default.createElement("path", { d: Area.getArea(props), stroke: stroke, fill: fill, className: className, opacity: opacity });
			}
		}]);
	
		return Area;
	}(_react.Component);
	
	Area.propTypes = {
		className: _react.PropTypes.string,
		xScale: _react.PropTypes.func.isRequired,
		yScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		yAccessor: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array.isRequired,
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		base: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number])
	};
	
	Area.defaultProps = {
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
	Area.getArea = function (props) {
		var plotData = props.plotData;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var base = props.base;
		var defined = props.defined;
	
		var newBase = _d2.default.functor(base);
	
		var areaSeries = _d2.default.svg.area().defined(function (d) {
			return defined(yAccessor(d));
		}).x(function (d) {
			return xScale(xAccessor(d));
		}).y0(newBase.bind(null, yScale)).y1(function (d) {
			return yScale(yAccessor(d));
		});
	
		// console.log("HERE", yAccessor(plotData[0]));
		return areaSeries(plotData);
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
	
	Area.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var fill = props.fill;
		var stroke = props.stroke;
		var opacity = props.opacity;
		var base = props.base;
		var defined = props.defined;
		// var height = yScale.range()[0];
	
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
	};
	
	exports.default = (0, _wrap2.default)(Area);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScatterSeries = function (_Component) {
		_inherits(ScatterSeries, _Component);
	
		function ScatterSeries() {
			_classCallCheck(this, ScatterSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ScatterSeries).apply(this, arguments));
		}
	
		_createClass(ScatterSeries, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var markerProps = _props.markerProps;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var plotData = _props.plotData;
	
				var points = ScatterSeries.helper(this.props, xScale, yScale, plotData);
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					points.map(function (point, idx) {
						var Marker = point.marker;
	
						return _react2.default.createElement(Marker, _extends({ key: idx }, markerProps, { point: point }));
					})
				);
			}
		}]);
	
		return ScatterSeries;
	}(_react.Component);
	
	ScatterSeries.propTypes = {
		className: _react.PropTypes.string,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array,
		marker: _react.PropTypes.func,
		markerProvider: _react.PropTypes.func,
		markerProps: _react.PropTypes.object
	};
	
	ScatterSeries.defaultProps = {
		className: "react-stockcharts-scatter"
	};
	
	ScatterSeries.yAccessor = function (d) {
		return d.close;
	};
	
	ScatterSeries.helper = function (props, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var Marker = props.marker;
		var markerProvider = props.markerProvider;
		var markerProps = props.markerProps;
	
	
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
	};
	
	ScatterSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var markerProps = props.markerProps;
	
	
		var points = ScatterSeries.helper(props, xScale, yScale, plotData);
	
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
				var strokeKey = strokeGroup.key;
				var strokeValues = strokeGroup.values;
	
	
				ctx.strokeStyle = strokeKey;
	
				strokeValues.forEach(function (point) {
					var marker = point.marker;
	
					marker.drawOnCanvasWithNoStateChange(_extends({}, marker.defaultProps, markerProps), point, ctx);
				});
			});
		});
	};
	
	exports.default = (0, _wrap2.default)(ScatterSeries);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Circle(props) {
		var className = props.className;
		var stroke = props.stroke;
		var opacity = props.opacity;
		var fill = props.fill;
		var point = props.point;
		var r = props.r;
	
		var radius = _d2.default.functor(r)(point.datum);
		return _react2.default.createElement("circle", { className: className, cx: point.x, cy: point.y, stroke: stroke, fillOpacity: opacity, fill: fill, r: radius });
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
		r: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired
	};
	
	Circle.defaultProps = {
		stroke: "#4682B4",
		opacity: 0.5,
		fill: "#4682B4",
		className: "react-stockcharts-marker-circle"
	};
	
	Circle.drawOnCanvas = function (props, point, ctx) {
		var stroke = props.stroke;
		var fill = props.fill;
		var opacity = props.opacity;
	
	
		ctx.strokeStyle = stroke;
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineSeries = function (_Component) {
		_inherits(LineSeries, _Component);
	
		function LineSeries() {
			_classCallCheck(this, LineSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(LineSeries).apply(this, arguments));
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
				var strokeWidth = props.strokeWidth;
				var type = props.type;
	
				return _react2.default.createElement(_Line2.default, {
					className: className,
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: yAccessor,
					plotData: plotData,
					stroke: stroke, fill: "none",
					strokeWidth: strokeWidth,
					type: type });
			}
		}]);
	
		return LineSeries;
	}(_react.Component);
	
	LineSeries.propTypes = {
		className: _react.PropTypes.string,
		strokeWidth: _react.PropTypes.number
	};
	
	LineSeries.defaultProps = {
		stroke: "#4682B4",
		className: "line ",
		strokeWidth: 1
	};
	
	LineSeries.yAccessor = function (d) {
		return d.close;
	};
	
	exports.default = (0, _wrap2.default)(LineSeries);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CandlestickSeries = function (_Component) {
		_inherits(CandlestickSeries, _Component);
	
		function CandlestickSeries() {
			_classCallCheck(this, CandlestickSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CandlestickSeries).apply(this, arguments));
		}
	
		_createClass(CandlestickSeries, [{
			key: "render",
			value: function render() {
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
						getWicksSVG(this.props)
					),
					_react2.default.createElement(
						"g",
						{ className: candleClassName, key: "candles" },
						getCandlesSVG(this.props)
					)
				);
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
		widthRatio: 0.5,
		wickStroke: "#000000",
		// wickStroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
		fill: function fill(d) {
			return d.close > d.open ? "#6BA583" : "#FF0000";
		},
		// stroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
		// stroke: "#000000",
		stroke: "none",
		opacity: 1
	};
	
	function getWicksSVG(props) {
	
		/* eslint-disable react/prop-types */
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
		/* eslint-enable react/prop-types */
	
		var wickData = getWickData(props, xAccessor, yAccessor, xScale, yScale, plotData);
		var wicks = wickData.map(function (d, idx) {
			return _react2.default.createElement("line", { key: idx,
				className: d.className, stroke: d.stroke, style: { shapeRendering: "crispEdges" },
				x1: d.x1, y1: d.y1,
				x2: d.x2, y2: d.y2 });
		});
		return wicks;
	}
	
	function getCandlesSVG(props) {
	
		/* eslint-disable react/prop-types */
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
		var opacity = props.opacity;
		/* eslint-enable react/prop-types */
	
		var candleData = getCandleData(props, xAccessor, yAccessor, xScale, yScale, plotData);
		var candles = candleData.map(function (d, idx) {
			if (d.width < 0) return _react2.default.createElement("line", { className: d.className, key: idx,
				x1: d.x, y1: d.y, x2: d.x, y2: d.y + d.height,
				stroke: d.fill });else if (d.height === 0) return _react2.default.createElement("line", { key: idx,
				x1: d.x, y1: d.y, x2: d.x + d.width, y2: d.y + d.height,
				stroke: d.fill });
			return _react2.default.createElement("rect", { key: idx, className: d.className,
				fillOpacity: opacity,
				x: d.x, y: d.y, width: d.width, height: d.height,
				fill: d.fill, stroke: d.stroke });
		});
		return candles;
	}
	
	CandlestickSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var opacity = props.opacity;
	
		var wickData = getWickData(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		var wickNest = _d2.default.nest().key(function (d) {
			return d.stroke;
		}).entries(wickData);
	
		wickNest.forEach(function (outer) {
			var key = outer.key;
			var values = outer.values;
	
			ctx.strokeStyle = key;
			values.forEach(function (d) {
				ctx.beginPath();
				ctx.moveTo(d.x1, d.y1);
				ctx.lineTo(d.x2, d.y2);
				ctx.stroke();
			});
		});
	
		var candleData = getCandleData(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		var candleNest = _d2.default.nest().key(function (d) {
			return d.stroke;
		}).key(function (d) {
			return d.fill;
		}).entries(candleData);
	
		candleNest.forEach(function (outer) {
			var strokeKey = outer.key;
			var strokeValues = outer.values;
	
			if (strokeKey !== "none") ctx.strokeStyle = strokeKey;
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
	};
	
	function getWickData(props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var classNameProp = props.classNames;
		var wickStrokeProp = props.wickStroke;
	
		var wickStroke = _d2.default.functor(wickStrokeProp);
		var className = _d2.default.functor(classNameProp);
		var wickData = plotData.filter(function (d) {
			return (0, _utils.isDefined)(d.close);
		}).map(function (d) {
			// console.log(yAccessor);
			var ohlc = yAccessor(d);
	
			var x1 = Math.round(xScale(xAccessor(d))),
			    y1 = yScale(ohlc.high),
			    x2 = x1,
			    y2 = yScale(ohlc.low);
	
			return {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				className: className(ohlc),
				direction: ohlc.close - ohlc.open,
				stroke: wickStroke(ohlc)
			};
		});
		return wickData;
	}
	
	function getCandleData(props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var classNames = props.classNames;
		var fillProp = props.fill;
		var strokeProp = props.stroke;
		var widthRatio = props.widthRatio;
	
		var fill = _d2.default.functor(fillProp);
		var stroke = _d2.default.functor(strokeProp);
		// console.log(plotData);
		var width = xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)));
		var cw = width / (plotData.length - 1) * widthRatio;
		var candleWidth = Math.round(cw); // Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw);
		var offset = candleWidth === 1 ? 0 : 0.5 * candleWidth;
		var candles = plotData.filter(function (d) {
			return (0, _utils.isDefined)(d.close);
		}).map(function (d) {
			var ohlc = yAccessor(d);
			var x = Math.round(xScale(xAccessor(d))) - offset,
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
	
	exports.default = (0, _wrap2.default)(CandlestickSeries);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OHLCSeries = function (_Component) {
		_inherits(OHLCSeries, _Component);
	
		function OHLCSeries() {
			_classCallCheck(this, OHLCSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(OHLCSeries).apply(this, arguments));
		}
	
		_createClass(OHLCSeries, [{
			key: "render",
			value: function render() {
				var className = this.props.className;
				var _props = this.props;
				var xAccessor = _props.xAccessor;
				var yAccessor = _props.yAccessor;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var plotData = _props.plotData;
	
	
				var barData = OHLCSeries.getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);
	
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
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
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
	
	OHLCSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
	
		var barData = OHLCSeries.getOHLCBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
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
	};
	
	OHLCSeries.getOHLCBars = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var classNamesProp = props.classNames;
		var strokeProp = props.stroke;
	
	
		var strokeFunc = _d2.default.functor(strokeProp);
		var classNameFunc = _d2.default.functor(classNamesProp);
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
	
		var barWidth = Math.max(1, Math.round(width / (plotData.length - 1) / 2) - 1.5);
		var strokeWidth = Math.min(barWidth, 6);
	
		var bars = plotData.filter(function (d) {
			return (0, _utils.isDefined)(d.close);
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
	};
	
	exports.default = (0, _wrap2.default)(OHLCSeries);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _StackedBarSeries = __webpack_require__(38);
	
	var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BarSeries = function (_Component) {
		_inherits(BarSeries, _Component);
	
		function BarSeries() {
			_classCallCheck(this, BarSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BarSeries).apply(this, arguments));
		}
	
		_createClass(BarSeries, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-bar-series" },
					BarSeries.getBarsSVG(this.props)
				);
			}
		}]);
	
		return BarSeries;
	}(_react.Component);
	
	BarSeries.propTypes = {
		baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
		stroke: _react.PropTypes.bool.isRequired,
		widthRatio: _react.PropTypes.number.isRequired,
		opacity: _react.PropTypes.number.isRequired,
		fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	BarSeries.defaultProps = _StackedBarSeries2.default.defaultProps;
	
	BarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var yAccessor = props.yAccessor;
		var xAccessor = props.xAccessor;
	
		(0, _StackedBarSeries.drawOnCanvasHelper)(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, _utils.identity);
	};
	
	BarSeries.getBarsSVG = function (props) {
		return (0, _StackedBarSeries.svgHelper)(props, _utils.identity);
	};
	
	exports.default = (0, _wrap2.default)(BarSeries);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StackedBarSeries = function (_Component) {
		_inherits(StackedBarSeries, _Component);
	
		function StackedBarSeries() {
			_classCallCheck(this, StackedBarSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(StackedBarSeries).apply(this, arguments));
		}
	
		_createClass(StackedBarSeries, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-bar-series" },
					svgHelper(this.props, _d2.default.layout.stack())
				);
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
		className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		xAccessor: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.func), _react.PropTypes.func]).isRequired,
		yAccessor: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.func), _react.PropTypes.func]).isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	StackedBarSeries.defaultProps = {
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
	
	StackedBarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var yAccessor = props.yAccessor;
		var xAccessor = props.xAccessor;
	
		drawOnCanvasHelper(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, _d2.default.layout.stack());
	};
	
	function drawOnCanvasHelper(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, stackFn) {
		var defaultPostAction = arguments.length <= 8 || arguments[8] === undefined ? _utils.identity : arguments[8];
		var postRotateAction = arguments.length <= 9 || arguments[9] === undefined ? rotateXY : arguments[9];
	
		var bars = doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
		drawOnCanvas2(props, ctx, bars);
	}
	
	function convertToArray(item) {
		return Array.isArray(item) ? item : [item];
	}
	
	function svgHelper(props, stackFn) {
		var defaultPostAction = arguments.length <= 2 || arguments[2] === undefined ? _utils.identity : arguments[2];
		var postRotateAction = arguments.length <= 3 || arguments[3] === undefined ? rotateXY : arguments[3];
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
	
		var bars = doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
	
		return getBarsSVG2(props, bars);
	}
	
	function doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction) {
		var yAccessor = props.yAccessor;
		var xAccessor = props.xAccessor;
		var swapScales = props.swapScales;
	
	
		var modifiedYAccessor = swapScales ? convertToArray(xAccessor) : convertToArray(yAccessor);
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
	
		var eachBarWidth = (barWidth - spaceBetweenBar * (yAccessor.length - 1)) / yAccessor.length;
	
		var offset = barWidth === 1 ? 0 : 0.5 * barWidth;
	
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
				x: xScale(d.series) - barWidth / 2,
				y: y,
				groupOffset: offset - (d.x > 0 ? (eachBarWidth + spaceBetweenBar) * d.x : 0),
				groupWidth: eachBarWidth,
				offset: barWidth / 2,
				height: h,
				width: barWidth
			};
		});
		return after(bars);
	}
	
	exports.default = (0, _wrap2.default)(StackedBarSeries);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _StackedBarSeries = __webpack_require__(38);
	
	var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GroupedBarSeries = function (_Component) {
		_inherits(GroupedBarSeries, _Component);
	
		function GroupedBarSeries() {
			_classCallCheck(this, GroupedBarSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(GroupedBarSeries).apply(this, arguments));
		}
	
		_createClass(GroupedBarSeries, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-grouped-bar-series" },
					GroupedBarSeries.getBarsSVG(this.props)
				);
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
	
	GroupedBarSeries.defaultProps = _extends({}, _StackedBarSeries2.default.defaultProps, {
		widthRatio: 0.8,
		spaceBetweenBar: 5
	});
	
	GroupedBarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		(0, _StackedBarSeries.drawOnCanvasHelper)(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, _utils.identity, postProcessor);
	};
	
	GroupedBarSeries.getBarsSVG = function (props) {
		return (0, _StackedBarSeries.svgHelper)(props, _utils.identity, postProcessor);
	};
	
	function postProcessor(array) {
		return array.map(function (each) {
			return _extends({}, each, {
				x: each.x + each.offset - each.groupOffset,
				width: each.groupWidth
			});
		});
	}
	
	exports.default = (0, _wrap2.default)(GroupedBarSeries);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KagiSeries = function (_Component) {
		_inherits(KagiSeries, _Component);
	
		function KagiSeries() {
			_classCallCheck(this, KagiSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(KagiSeries).apply(this, arguments));
		}
	
		_createClass(KagiSeries, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var stroke = _props.stroke;
				var fill = _props.fill;
				var strokeWidth = _props.strokeWidth;
				var _props2 = this.props;
				var xAccessor = _props2.xAccessor;
				var xScale = _props2.xScale;
				var yScale = _props2.yScale;
				var plotData = _props2.plotData;
	
	
				var paths = KagiSeries.helper(plotData, xAccessor).map(function (each, i) {
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
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string,
		strokeWidth: _react.PropTypes.number.isRequired,
		xAccessor: _react.PropTypes.func,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
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
	
	KagiSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	KagiSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var stroke = props.stroke;
		var strokeWidth = props.strokeWidth;
		var currentValueStroke = props.currentValueStroke;
	
		var begin = true;
	
		var paths = KagiSeries.helper(plotData, xAccessor);
	
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
	};
	
	KagiSeries.helper = function (plotData, xAccessor) {
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
	};
	
	exports.default = (0, _wrap2.default)(KagiSeries);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PointAndFigureSeries = function (_Component) {
		_inherits(PointAndFigureSeries, _Component);
	
		function PointAndFigureSeries() {
			_classCallCheck(this, PointAndFigureSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(PointAndFigureSeries).apply(this, arguments));
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
	};
	
	PointAndFigureSeries.getColumns = function (xScale, xAccessor, yScale, yAccessor, plotData) {
	
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
	};
	
	exports.default = (0, _wrap2.default)(PointAndFigureSeries);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RenkoSeries = function (_Component) {
		_inherits(RenkoSeries, _Component);
	
		function RenkoSeries() {
			_classCallCheck(this, RenkoSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(RenkoSeries).apply(this, arguments));
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
			partial: "#4682B4"
		},
		yAccessor: function yAccessor(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		}
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
			return (0, _utils.isDefined)(d.close);
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
	};
	
	exports.default = (0, _wrap2.default)(RenkoSeries);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BarSeries = __webpack_require__(37);
	
	var _BarSeries2 = _interopRequireDefault(_BarSeries);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MACDSeries = function (_Component) {
		_inherits(MACDSeries, _Component);
	
		function MACDSeries(props) {
			_classCallCheck(this, MACDSeries);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MACDSeries).call(this, props));
	
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
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var xAccessor = _props.xAccessor;
				var plotData = _props.plotData;
				var type = _props.type;
				var opacity = _props.opacity;
				var divergenceStroke = _props.divergenceStroke;
				var calculator = _props.calculator;
	
				var stroke = calculator.stroke();
				var fill = calculator.fill();
				// console.log(this.props.yAccessor)
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForMACD,
						plotData: plotData,
						stroke: stroke.macd, fill: "none",
						type: type }),
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForSignal,
						plotData: plotData,
						stroke: stroke.signal, fill: "none",
						type: type }),
					_react2.default.createElement(_BarSeries2.default, {
						baseAt: this.yAccessorForDivergenceBase,
						className: "macd-divergence",
						stroke: divergenceStroke, fill: fill.divergence, opacity: opacity,
						yAccessor: this.yAccessorForDivergence }),
					MACDSeries.getHorizontalLine(this.props)
				);
			}
		}]);
	
		return MACDSeries;
	}(_react.Component);
	
	MACDSeries.getHorizontalLine = function (props) {
	
		/* eslint-disable react/prop-types */
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
		var zeroLineStroke = props.zeroLineStroke;
		var zeroLineOpacity = props.zeroLineOpacity;
		/* eslint-enable react/prop-types */
	
		return _react2.default.createElement(_StraightLine2.default, {
			stroke: zeroLineStroke, opacity: zeroLineOpacity, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: 0 });
	};
	
	MACDSeries.propTypes = {
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
	
	MACDSeries.defaultProps = {
		className: "react-stockcharts-macd-series",
		zeroLineStroke: "#000000",
		zeroLineOpacity: 0.3,
		opacity: 0.6,
		divergenceStroke: false
	};
	
	exports.default = (0, _wrap2.default)(MACDSeries);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StraightLine = function (_Component) {
		_inherits(StraightLine, _Component);
	
		function StraightLine() {
			_classCallCheck(this, StraightLine);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(StraightLine).apply(this, arguments));
		}
	
		_createClass(StraightLine, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var className = props.className;
				var opacity = props.opacity;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var plotData = props.plotData;
				var yValue = props.yValue;
	
	
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
		xScale: _react.PropTypes.func.isRequired,
		yScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		stroke: _react.PropTypes.string,
		opacity: _react.PropTypes.number.isRequired,
		yValue: _react.PropTypes.number.isRequired
	};
	
	StraightLine.defaultProps = {
		className: "line ",
		stroke: "#000000",
		opacity: 0.5
	};
	
	StraightLine.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var stroke = props.stroke;
		var opacity = props.opacity;
		var xAccessor = props.xAccessor;
		var yValue = props.yValue;
	
	
		var first = xAccessor(plotData[0]);
		var last = xAccessor(plotData[plotData.length - 1]);
	
		ctx.beginPath();
	
		ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);
	
		ctx.moveTo(xScale(first), yScale(yValue));
		ctx.lineTo(xScale(last), yScale(yValue));
		ctx.stroke();
	};
	
	exports.default = (0, _wrap2.default)(StraightLine);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Area = __webpack_require__(31);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BollingerSeries = function (_Component) {
		_inherits(BollingerSeries, _Component);
	
		function BollingerSeries(props) {
			_classCallCheck(this, BollingerSeries);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BollingerSeries).call(this, props));
	
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
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var xAccessor = _props.xAccessor;
				var plotData = _props.plotData;
				var type = _props.type;
				var _props2 = this.props;
				var calculator = _props2.calculator;
				var areaClassName = _props2.areaClassName;
				var className = _props2.className;
				var opacity = _props2.opacity;
	
	
				var stroke = calculator.stroke();
				var fill = calculator.fill();
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForTop,
						plotData: plotData,
						stroke: stroke.top, fill: "none",
						type: type }),
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForMiddle,
						plotData: plotData,
						stroke: stroke.middle, fill: "none",
						type: type }),
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForBottom,
						plotData: plotData,
						stroke: stroke.bottom, fill: "none",
						type: type }),
					_react2.default.createElement(_Area2.default, {
						className: areaClassName,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForTop,
						base: this.yAccessorForScalledBottom,
						plotData: plotData,
						stroke: "none", fill: fill, opacity: opacity,
						type: type })
				);
			}
		}]);
	
		return BollingerSeries;
	}(_react.Component);
	
	BollingerSeries.propTypes = {
		xAccessor: _react.PropTypes.func,
		calculator: _react.PropTypes.func.isRequired,
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
	
	exports.default = (0, _wrap2.default)(BollingerSeries);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RSISeries = function (_Component) {
		_inherits(RSISeries, _Component);
	
		function RSISeries() {
			_classCallCheck(this, RSISeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(RSISeries).apply(this, arguments));
		}
	
		_createClass(RSISeries, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var xAccessor = _props.xAccessor;
				var calculator = _props.calculator;
				var plotData = _props.plotData;
				var stroke = _props.stroke;
				var type = _props.type;
	
				var yAccessor = calculator.accessor();
				var overSold = calculator.overSold();
				var middle = calculator.middle();
				var overBought = calculator.overBought();
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: stroke.line, fill: "none",
						type: type }),
					RSISeries.getHorizontalLine(this.props, overSold, stroke.top),
					RSISeries.getHorizontalLine(this.props, middle, stroke.middle),
					RSISeries.getHorizontalLine(this.props, overBought, stroke.bottom)
				);
			}
		}]);
	
		return RSISeries;
	}(_react.Component);
	
	RSISeries.getHorizontalLine = function (props, yValue, stroke) {
		/* eslint-disable react/prop-types */
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
		/* eslint-enable react/prop-types */
	
		return _react2.default.createElement(_StraightLine2.default, {
			stroke: stroke, opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: yValue });
	};
	
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
	
	exports.default = (0, _wrap2.default)(RSISeries);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StochasticSeries = function (_Component) {
		_inherits(StochasticSeries, _Component);
	
		function StochasticSeries(props) {
			_classCallCheck(this, StochasticSeries);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StochasticSeries).call(this, props));
	
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
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var xAccessor = _props.xAccessor;
				var plotData = _props.plotData;
				var stroke = _props.stroke;
				var type = _props.type;
	
				var seriesStroke = calculator.stroke();
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForD,
						plotData: plotData,
						stroke: seriesStroke.D, fill: "none",
						type: type }),
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForK,
						plotData: plotData,
						stroke: seriesStroke.K, fill: "none",
						type: type }),
					StochasticSeries.getHorizontalLine(this.props, calculator.overSold(), stroke.top),
					StochasticSeries.getHorizontalLine(this.props, calculator.middle(), stroke.middle),
					StochasticSeries.getHorizontalLine(this.props, calculator.overBought(), stroke.bottom)
				);
			}
		}]);
	
		return StochasticSeries;
	}(_react.Component);
	
	StochasticSeries.getHorizontalLine = function (props, yValue, stroke) {
	
		/* eslint-disable react/prop-types */
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
		/* eslint-enable react/prop-types */
	
		return _react2.default.createElement(_StraightLine2.default, {
			stroke: stroke, opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: yValue });
	};
	
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
	
	exports.default = (0, _wrap2.default)(StochasticSeries);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _OverlayBarSeries = __webpack_require__(49);
	
	var _OverlayBarSeries2 = _interopRequireDefault(_OverlayBarSeries);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ElderRaySeries = function (_Component) {
		_inherits(ElderRaySeries, _Component);
	
		function ElderRaySeries(props) {
			_classCallCheck(this, ElderRaySeries);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ElderRaySeries).call(this, props));
	
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
	
	exports.default = (0, _wrap2.default)(ElderRaySeries);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _StackedBarSeries = __webpack_require__(38);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OverlayBarSeries = function (_Component) {
		_inherits(OverlayBarSeries, _Component);
	
		function OverlayBarSeries() {
			_classCallCheck(this, OverlayBarSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(OverlayBarSeries).apply(this, arguments));
		}
	
		_createClass(OverlayBarSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
	
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-bar-series" },
					OverlayBarSeries.getBarsSVG(props)
				);
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
	
	OverlayBarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
	
		var bars = OverlayBarSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		// console.log(bars);
		(0, _StackedBarSeries.drawOnCanvas2)(props, ctx, bars);
	};
	
	OverlayBarSeries.getBarsSVG = function (props) {
	
		/* eslint-disable react/prop-types */
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
		/* eslint-enable react/prop-types */
	
		var bars = OverlayBarSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
		return (0, _StackedBarSeries.getBarsSVG2)(props, bars);
	};
	
	OverlayBarSeries.getBars = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
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
	};
	
	// export { OverlayBarSeries };
	exports.default = (0, _wrap2.default)(OverlayBarSeries);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VolumeProfileSeries = function (_Component) {
		_inherits(VolumeProfileSeries, _Component);
	
		function VolumeProfileSeries() {
			_classCallCheck(this, VolumeProfileSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeProfileSeries).apply(this, arguments));
		}
	
		_createClass(VolumeProfileSeries, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var opacity = _props.opacity;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var plotData = _props.plotData;
				var _props2 = this.props;
				var showSessionBackground = _props2.showSessionBackground;
				var sessionBackGround = _props2.sessionBackGround;
				var sessionBackGroundOpacity = _props2.sessionBackGroundOpacity;
	
				var _helper = helper(this.props, xScale, yScale, plotData);
	
				var rects = _helper.rects;
				var sessionBg = _helper.sessionBg;
	
	
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
	
	function helper(props, realXScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var width = props.width;
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
	
	VolumeProfileSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var opacity = props.opacity;
		var sessionBackGround = props.sessionBackGround;
		var sessionBackGroundOpacity = props.sessionBackGroundOpacity;
		var showSessionBackground = props.showSessionBackground;
	
		var _helper2 = helper(props, xScale, yScale, plotData);
	
		var rects = _helper2.rects;
		var sessionBg = _helper2.sessionBg;
	
	
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
	};
	
	exports.default = (0, _wrap2.default)(VolumeProfileSeries);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.discontinuousTimeScaleProvider = undefined;
	exports.defaultScaleProvider = defaultScaleProvider;
	
	var _discontinuousTimeScaleProvider = __webpack_require__(52);
	
	var _discontinuousTimeScaleProvider2 = _interopRequireDefault(_discontinuousTimeScaleProvider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.discontinuousTimeScaleProvider = _discontinuousTimeScaleProvider2.default;
	/*
	import financeEODCalculator from "./financeEODCalculator";
	import financeEODDiscontinuousScale from "./financeEODDiscontinuousScale";
	import eodIntervalCalculator from "./eodIntervalCalculator";
	import identityIntervalCalculator from "./identityIntervalCalculator";
	import financeIntradayDiscontinuousScale from "./financeIntradayDiscontinuousScale";
	import financeIntradayCalculator from "./financeIntradayCalculator";
	import intradayIntervalCalculator from "./intradayIntervalCalculator";
	*/
	
	function defaultScaleProvider(xScale) {
		return function (data, xAccessor) {
			return { data: data, xScale: xScale, xAccessor: xAccessor, displayXAccessor: xAccessor };
		};
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _financeDiscontinuousScale = __webpack_require__(53);
	
	var _financeDiscontinuousScale2 = _interopRequireDefault(_financeDiscontinuousScale);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var yearFormat = _d3.default.time.format("%Y");
	var quarterFormat = _d3.default.time.format("%b %Y");
	var monthFormat = _d3.default.time.format("%b");
	var weekFormat = _d3.default.time.format("%d %b");
	var dayFormat = _d3.default.time.format("%a %d");
	var hourFormat = _d3.default.time.format("%_I %p");
	var minuteFormat = _d3.default.time.format("%I:%M %p");
	var secondFormat = _d3.default.time.format("%I:%M:%S %p");
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
	
	var discontinuousIndexCalculator = (0, _utils.slidingWindow)().windowSize(2).undefinedValue(function (d) {
		var i = 0;
		var row = {
			date: d,
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
	
	var discontinuousIndexCalculatorLocalTime = discontinuousIndexCalculator.accumulator(function (_ref, i) {
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
			date: nowDate,
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
		return _extends({}, row, { index: i }, level);
	});
	
	function discontinuousTimeScaleProvider(data, dateAccessor, indexAccessor, indexMutator) {
	
		var calculate = discontinuousIndexCalculatorLocalTime.source(dateAccessor);
		var index = calculate(data);
		// var interval1 = Math.round((dateAccessor(last(data)) - dateAccessor(head(data))) / data.length)
		// console.log(interval, interval1);
	
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
	
		// console.log(interval, entries[0].key);
	
		var xScale = (0, _financeDiscontinuousScale2.default)(index, interval);
	
		// console.log(index);
		var mergedData = (0, _utils.zipper)().combine(indexMutator);
	
		var finalData = mergedData(data, index);
	
		return {
			data: finalData,
			xScale: xScale,
			xAccessor: function xAccessor(d) {
				return d && indexAccessor(d).index;
			},
			displayXAccessor: dateAccessor
		};
	}
	
	discontinuousTimeScaleProvider.utc = function (data, dateAccessor, indexAccessor, indexMutator) {
		var utcDateAccessor = function utcDateAccessor(d) {
			var date = dateAccessor(d);
			// The getTimezoneOffset() method returns the time-zone offset from UTC, in minutes, for the current locale.
			var offsetInMillis = date.getTimezoneOffset() * 60 * 1000;
			return new Date(date.getTime() + offsetInMillis);
		};
		return discontinuousTimeScaleProvider(data, utcDateAccessor, indexAccessor, indexMutator);
	};
	
	exports.default = discontinuousTimeScaleProvider;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = financeDiscontinuousScale;
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tickLevels = [{ target: 50e2, level: 0 }, { target: 50e3, level: 1 }, { target: 10e4, level: 2 }, { target: 28e4, level: 3 }, { target: 55e4, level: 4 }, { target: 11e5, level: 5 }, { target: 21e5, level: 6 }, { target: 43e5, level: 7 }, { target: 49e5, level: 8 }, // not tested
	{ target: 50e5, level: 9 }, // not tested
	{ target: 58e6, level: 10 }, // not tested
	{ target: 58e6, level: 11 }, { target: 11e7, level: 12 }, { target: 78e7, level: 13 }, { target: 16e8, level: 14 }, { target: 62e8, level: 15 }, { target: 10e20, level: 16 }];
	
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
	
			var start = Math.max(Math.ceil(domainStart), 0);
			var end = Math.min(Math.floor(domainEnd), index.length - 1);
	
			// console.log(index.length, domainStart, domainEnd, start, end)
	
			var newM = (end - start) / (domainEnd - domainStart) * m;
			// newM = newM <= 0 ? m : newM;
			var target = Math.round((end - start + 1) * interval / newM);
	
			// var subList = index.slice(start, end + 1);
			var levelIndex = tickLevelBisector(tickLevels, target);
			// console.log(target, levelIndex)
			var level = tickLevels[levelIndex].level;
	
			// console.log(target, level);
	
			var backingTicks = backingLinearScale.ticks(m);
			var distance = backingTicks.length > 0 ? ((0, _utils.last)(backingTicks) - (0, _utils.head)(backingTicks)) / (backingTicks.length - 1) / 4 : 1;
	
			var ticks = [];
			for (var i = start; i < end + 1; i++) {
				if (index[i].level >= level) ticks.push(index[i].index);
			}
	
			// subList.filter(each => each.level >= level).map(d => d.index);
	
			var ticksSet = _d3.default.set(ticks);
	
			for (var _i = 0; _i < ticks.length - 1; _i++) {
				for (var j = _i + 1; j < ticks.length; j++) {
					if (ticks[j] - ticks[_i] < distance) {
						ticksSet.remove(index[ticks[_i]].level >= index[ticks[j]].level ? ticks[j] : ticks[_i]);
					}
				}
			}
	
			return ticksSet.values().map(function (d) {
				return parseInt(d, 10);
			});
		};
		scale.tickFormat = function () {
			return function (x) {
				var _index$x = index[x];
				var format = _index$x.format;
				var date = _index$x.date;
	
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CrossHairCursor = exports.MouseCoordinateY = exports.MouseCoordinateX = exports.CurrentCoordinate = exports.EdgeIndicator = undefined;
	
	var _EdgeIndicator = __webpack_require__(55);
	
	var _EdgeIndicator2 = _interopRequireDefault(_EdgeIndicator);
	
	var _CurrentCoordinate = __webpack_require__(57);
	
	var _CurrentCoordinate2 = _interopRequireDefault(_CurrentCoordinate);
	
	var _MouseCoordinateX = __webpack_require__(58);
	
	var _MouseCoordinateX2 = _interopRequireDefault(_MouseCoordinateX);
	
	var _MouseCoordinateY = __webpack_require__(59);
	
	var _MouseCoordinateY2 = _interopRequireDefault(_MouseCoordinateY);
	
	var _CrossHairCursor = __webpack_require__(60);
	
	var _CrossHairCursor2 = _interopRequireDefault(_CrossHairCursor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.EdgeIndicator = _EdgeIndicator2.default;
	exports.CurrentCoordinate = _CurrentCoordinate2.default;
	exports.MouseCoordinateX = _MouseCoordinateX2.default;
	exports.MouseCoordinateY = _MouseCoordinateY2.default;
	exports.CrossHairCursor = _CrossHairCursor2.default;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _EdgeCoordinate = __webpack_require__(56);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EdgeIndicator = function (_Component) {
		_inherits(EdgeIndicator, _Component);
	
		function EdgeIndicator() {
			_classCallCheck(this, EdgeIndicator);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(EdgeIndicator).apply(this, arguments));
		}
	
		_createClass(EdgeIndicator, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _props = this.props;
				var chartCanvasType = _props.chartCanvasType;
				var getCanvasContexts = _props.getCanvasContexts;
	
	
				if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
					var contexts = getCanvasContexts();
					if (contexts) EdgeIndicator.drawOnCanvas(this.props, contexts.axes);
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
				this.componentWillReceiveProps(this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var draw = EdgeIndicator.drawOnCanvasStatic.bind(null, nextProps);
	
				var chartId = nextProps.chartId;
	
	
				nextProps.callbackForCanvasDraw({
					type: "edge",
					chartId: chartId, draw: draw
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var xScale = _props2.xScale;
				var chartConfig = _props2.chartConfig;
				var plotData = _props2.plotData;
				var chartCanvasType = _props2.chartCanvasType;
	
	
				if (chartCanvasType !== "svg") return null;
	
				var edge = EdgeIndicator.helper(this.props, xScale, chartConfig.yScale, plotData);
	
				if ((0, _utils.isNotDefined)(edge)) return null;
	
				return _react2.default.createElement(_EdgeCoordinate2.default, _extends({
					className: "react-stockcharts-edge-coordinate"
				}, edge));
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
	
	EdgeIndicator.defaultProps = {
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
		fontSize: 13
	};
	
	EdgeIndicator.drawOnCanvas = function (props, canvasContext) {
		var chartConfig = props.chartConfig;
		var xScale = props.xScale;
		var plotData = props.plotData;
	
		EdgeIndicator.drawOnCanvasStatic(props, canvasContext, xScale, chartConfig.yScale, plotData);
	};
	
	EdgeIndicator.drawOnCanvasStatic = function (props, ctx, xScale, yScale, plotData) {
		var canvasOriginX = props.canvasOriginX;
		var canvasOriginY = props.canvasOriginY;
	
		var edge = EdgeIndicator.helper(props, xScale, yScale, plotData);
	
		if ((0, _utils.isNotDefined)(edge)) return null;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOriginX, canvasOriginY);
	
		_EdgeCoordinate2.default.drawOnCanvasStatic(ctx, edge);
		ctx.restore();
	};
	
	EdgeIndicator.helper = function (props, xScale, yScale, plotData) {
		var edgeType = props.type;
		var displayFormat = props.displayFormat;
		var itemType = props.itemType;
		var edgeAt = props.edgeAt;
		var yAxisPad = props.yAxisPad;
		var orient = props.orient;
		var yAccessor = props.yAccessor;
		var xAccessor = props.xAccessor;
		var fill = props.fill;
		var textFill = props.textFill;
		var rectHeight = props.rectHeight;
		var rectWidth = props.rectWidth;
		var arrowWidth = props.arrowWidth;
		var fontFamily = props.fontFamily;
		var fontSize = props.fontSize;
	
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
	};
	
	EdgeIndicator.propTypes = {
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
		chartConfig: _react.PropTypes.object.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		chartId: _react.PropTypes.number.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		margin: _react.PropTypes.object.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string.isRequired,
		plotData: _react.PropTypes.array.isRequired
	};
	
	exports.default = (0, _pure2.default)(EdgeIndicator, {
		// width: PropTypes.number.isRequired,
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
		chartConfig: _react.PropTypes.object.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		chartId: _react.PropTypes.number.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		margin: _react.PropTypes.object.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string.isRequired,
		plotData: _react.PropTypes.array.isRequired
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EdgeCoordinate = function (_Component) {
		_inherits(EdgeCoordinate, _Component);
	
		function EdgeCoordinate() {
			_classCallCheck(this, EdgeCoordinate);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(EdgeCoordinate).apply(this, arguments));
		}
	
		_createClass(EdgeCoordinate, [{
			key: "render",
			value: function render() {
				var className = this.props.className;
	
	
				var edge = helper(this.props);
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
		}]);
	
		return EdgeCoordinate;
	}(_react.Component);
	
	EdgeCoordinate.propTypes = {
		className: _react.PropTypes.string,
		type: _react.PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
		coordinate: _react.PropTypes.any.isRequired,
		x1: _react.PropTypes.number.isRequired,
		y1: _react.PropTypes.number.isRequired,
		x2: _react.PropTypes.number.isRequired,
		y2: _react.PropTypes.number.isRequired,
		orient: _react.PropTypes.oneOf(["bottom", "top", "left", "right"]),
		rectWidth: _react.PropTypes.number,
		hideLine: _react.PropTypes.bool,
		fill: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		fontFamily: _react.PropTypes.string.isRequired,
		fontSize: _react.PropTypes.number.isRequired
	};
	
	EdgeCoordinate.defaultProps = {
		className: "react-stockcharts-edgecoordinate",
		orient: "left",
		hideLine: false,
		fill: "#8a8a8a",
		opacity: 1,
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 13,
		textFill: "#FFFFFF",
		lineStroke: "#000000",
		lineOpacity: 0.3,
		arrowWidth: 10
	};
	
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
	
	
		if (!show) return null;
	
		// rectWidth = rectWidth ? rectWidth : (type === "horizontal") ? 60 : 100;
	
		var edgeXRect, edgeYRect, edgeXText, edgeYText;
	
		if (type === "horizontal") {
	
			edgeXRect = orient === "right" ? edgeAt + 1 : edgeAt - rectWidth - arrowWidth - 1;
			edgeYRect = y1 - rectHeight / 2;
			edgeXText = orient === "right" ? edgeAt + rectWidth / 2 + arrowWidth : edgeAt - rectWidth / 2 - arrowWidth;
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
	
	EdgeCoordinate.drawOnCanvasStatic = function (ctx, props) {
		props = _extends({}, EdgeCoordinate.defaultProps, props);
	
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
	};
	
	exports.default = EdgeCoordinate;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CurrentCoordinate = function (_Component) {
		_inherits(CurrentCoordinate, _Component);
	
		function CurrentCoordinate() {
			_classCallCheck(this, CurrentCoordinate);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentCoordinate).apply(this, arguments));
		}
	
		_createClass(CurrentCoordinate, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _props = this.props;
				var chartCanvasType = _props.chartCanvasType;
				var getCanvasContexts = _props.getCanvasContexts;
	
	
				if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
					var contexts = getCanvasContexts();
					if (contexts) CurrentCoordinate.drawOnCanvas(contexts.mouseCoord, this.props);
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
				this.componentWillReceiveProps(this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var draw = CurrentCoordinate.drawOnCanvasStatic.bind(null, nextProps);
				var id = nextProps.id;
				var chartId = nextProps.chartId;
	
	
				if (!(0, _utils.shallowEqual)(this.props, nextProps)) {
					var temp = nextProps.getAllCanvasDrawCallback().filter(function (each) {
						return each.type === "currentcoordinate";
					}).filter(function (each) {
						return each.chartId === chartId;
					}).filter(function (each) {
						return each.id === id;
					});
	
					if (temp.length === 0) {
						nextProps.callbackForCanvasDraw({
							type: "currentcoordinate",
							id: id, chartId: chartId, draw: draw
						});
					} else {
						nextProps.callbackForCanvasDraw(temp[0], {
							type: "currentcoordinate",
							id: id, chartId: chartId, draw: draw
						});
					}
				}
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.props.className;
				var _props2 = this.props;
				var chartCanvasType = _props2.chartCanvasType;
				var show = _props2.show;
				var chartConfig = _props2.chartConfig;
				var currentItem = _props2.currentItem;
				var xScale = _props2.xScale;
	
	
				if (chartCanvasType !== "svg") return null;
	
				var circle = CurrentCoordinate.helper(this.props, show, xScale, chartConfig.yScale, currentItem);
	
				if (!circle) return null;
	
				return _react2.default.createElement("circle", { className: className, cx: circle.x, cy: circle.y, r: circle.r, fill: circle.fill });
			}
		}]);
	
		return CurrentCoordinate;
	}(_react.Component);
	
	CurrentCoordinate.propTypes = {
		id: _react.PropTypes.number.isRequired,
		yAccessor: _react.PropTypes.func,
		r: _react.PropTypes.number.isRequired,
		className: _react.PropTypes.string,
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		chartCanvasType: _react.PropTypes.string,
		getCanvasContexts: _react.PropTypes.func,
		show: _react.PropTypes.bool,
		chartId: _react.PropTypes.number.isRequired,
	
		chartConfig: _react.PropTypes.object.isRequired,
		currentItem: _react.PropTypes.object
	
	};
	
	CurrentCoordinate.defaultProps = {
		r: 3,
		className: "react-stockcharts-current-coordinate"
	};
	
	CurrentCoordinate.drawOnCanvas = function (canvasContext, props) {
		var chartConfig = props.chartConfig;
		var currentItem = props.currentItem;
		var xScale = props.xScale;
		var show = props.show;
	
	
		CurrentCoordinate.drawOnCanvasStatic(props, canvasContext, show, xScale, chartConfig.yScale, currentItem);
	};
	
	// mouseContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem
	
	CurrentCoordinate.drawOnCanvasStatic = function (props, ctx, show, xScale, yScale, currentItem) {
		var canvasOriginX = props.canvasOriginX;
		var canvasOriginY = props.canvasOriginY;
	
	
		var circle = CurrentCoordinate.helper(props, show, xScale, yScale, currentItem);
	
		if (!circle) return null;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOriginX, canvasOriginY);
	
		ctx.fillStyle = circle.fill;
		ctx.beginPath();
		ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
		ctx.fill();
		// CurrentCoordinate.drawOnCanvasStatic(ctx, pointer);
		ctx.restore();
	};
	
	CurrentCoordinate.helper = function (props, show, xScale, yScale, currentItem) {
		var fill = props.fill;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var r = props.r;
	
		// console.log(show);
	
		if (!show || (0, _utils.isNotDefined)(currentItem)) return null;
	
		var xValue = xAccessor(currentItem);
		var yValue = yAccessor(currentItem);
	
		if ((0, _utils.isNotDefined)(yValue)) return null;
	
		// console.log(chartConfig);
		var x = Math.round(xScale(xValue));
		var y = Math.round(yScale(yValue));
	
		return { x: x, y: y, r: r, fill: fill };
	};
	
	exports.default = (0, _pure2.default)(CurrentCoordinate, {
		show: _react.PropTypes.bool.isRequired,
		currentItem: _react.PropTypes.object,
		chartConfig: _react.PropTypes.object.isRequired,
		mouseXY: _react.PropTypes.array, // this is to avoid the flicker
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
	
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		chartId: _react.PropTypes.number.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		margin: _react.PropTypes.object.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string.isRequired
	}, ["mouseXY"]);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EdgeCoordinate = __webpack_require__(56);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MouseCoordinateX = function (_Component) {
		_inherits(MouseCoordinateX, _Component);
	
		function MouseCoordinateX() {
			_classCallCheck(this, MouseCoordinateX);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(MouseCoordinateX).apply(this, arguments));
		}
	
		_createClass(MouseCoordinateX, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _props = this.props;
				var chartCanvasType = _props.chartCanvasType;
				var getCanvasContexts = _props.getCanvasContexts;
	
	
				if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
					var contexts = getCanvasContexts();
					if (contexts) drawOnCanvas(contexts.mouseCoord, this.props);
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
				this.componentWillReceiveProps(this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var draw = drawOnCanvasStatic.bind(null, nextProps);
				var id = nextProps.id;
				var chartId = nextProps.chartId;
	
	
				if (!(0, _utils.shallowEqual)(this.props, nextProps)) {
					var temp = nextProps.getAllCanvasDrawCallback().filter(function (each) {
						return each.type === "mouse";
					}).filter(function (each) {
						return each.subType === "MouseCoordinateX";
					}).filter(function (each) {
						return each.chartId === chartId;
					}).filter(function (each) {
						return each.id === id;
					});
	
					if (temp.length === 0) {
						nextProps.callbackForCanvasDraw({
							type: "mouse",
							subType: "MouseCoordinateX",
							id: id, chartId: chartId, draw: draw
						});
					} else {
						nextProps.callbackForCanvasDraw(temp[0], {
							type: "mouse",
							subType: "MouseCoordinateX",
							id: id, chartId: chartId, draw: draw
						});
					}
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var chartCanvasType = _props2.chartCanvasType;
				var chartConfig = _props2.chartConfig;
				var currentItem = _props2.currentItem;
				var xScale = _props2.xScale;
				var mouseXY = _props2.mouseXY;
	
				if (chartCanvasType !== "svg") return null;
	
				var props = helper(this.props, xScale, chartConfig, mouseXY, currentItem);
				if ((0, _utils.isNotDefined)(props)) return null;
	
				return _react2.default.createElement(_EdgeCoordinate2.default, _extends({
					className: "horizontal"
				}, props));
			}
		}]);
	
		return MouseCoordinateX;
	}(_react.Component);
	
	MouseCoordinateX.propTypes = {
		id: _react.PropTypes.number.isRequired,
		displayFormat: _react.PropTypes.func.isRequired,
	
		chartCanvasType: _react.PropTypes.string.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		chartConfig: _react.PropTypes.object.isRequired,
		mouseXY: _react.PropTypes.array,
		xScale: _react.PropTypes.func.isRequired,
		currentCharts: _react.PropTypes.arrayOf(_react.PropTypes.number),
		currentItem: _react.PropTypes.object
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
	
	function helper(props, xScale, _ref, mouseXY, currentItem) {
		var yScale = _ref.yScale;
	
		if ((0, _utils.isNotDefined)(currentItem)) return null;
	
		var xAccessor = props.xAccessor;
		var height = props.height;
		var show = props.show;
		var snapX = props.snapX;
		var orient = props.orient;
		var at = props.at;
		var rectWidth = props.rectWidth;
		var rectHeight = props.rectHeight;
		var displayFormat = props.displayFormat;
		var displayXAccessor = props.displayXAccessor;
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
			x1: x,
			x2: x,
			y1: y1,
			y2: y2
		};
		return coordinateProps;
	}
	
	function drawOnCanvas(canvasContext, props) {
		var chartConfig = props.chartConfig;
		var currentItem = props.currentItem;
		var xScale = props.xScale;
		var mouseXY = props.mouseXY;
		var currentCharts = props.currentCharts;
		var show = props.show;
	
	
		drawOnCanvasStatic(props, canvasContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);
	}
	
	// mouseContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem
	function drawOnCanvasStatic(props, ctx, show, xScale, mouseXY, currentCharts, chartConfig, currentItem) {
		var canvasOriginX = props.canvasOriginX;
		var canvasOriginY = props.canvasOriginY;
	
	
		var edgeProps = helper(props, xScale, chartConfig, mouseXY, currentItem);
	
		ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOriginX, canvasOriginY);
	
		_EdgeCoordinate2.default.drawOnCanvasStatic(ctx, edgeProps);
	
		ctx.restore();
	}
	
	exports.default = (0, _pure2.default)(MouseCoordinateX, {
		show: _react.PropTypes.bool.isRequired,
		currentItem: _react.PropTypes.object,
		chartConfig: _react.PropTypes.object.isRequired,
		mouseXY: _react.PropTypes.array, // this is to avoid the flicker
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
	
		height: _react.PropTypes.number.isRequired,
		displayXAccessor: _react.PropTypes.func.isRequired,
	
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		chartId: _react.PropTypes.number.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		margin: _react.PropTypes.object.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string.isRequired
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EdgeCoordinate = __webpack_require__(56);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MouseCoordinateY = function (_Component) {
		_inherits(MouseCoordinateY, _Component);
	
		function MouseCoordinateY() {
			_classCallCheck(this, MouseCoordinateY);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(MouseCoordinateY).apply(this, arguments));
		}
	
		_createClass(MouseCoordinateY, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _props = this.props;
				var chartCanvasType = _props.chartCanvasType;
				var getCanvasContexts = _props.getCanvasContexts;
	
	
				if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
					var contexts = getCanvasContexts();
					if (contexts) drawOnCanvas(contexts.mouseCoord, this.props);
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
				this.componentWillReceiveProps(this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var draw = drawOnCanvasStatic.bind(null, nextProps);
				var id = nextProps.id;
				var chartId = nextProps.chartId;
	
	
				if (!(0, _utils.shallowEqual)(this.props, nextProps)) {
					var temp = nextProps.getAllCanvasDrawCallback().filter(function (each) {
						return each.type === "mouse";
					}).filter(function (each) {
						return each.subType === "MouseCoordinateY";
					}).filter(function (each) {
						return each.chartId === chartId;
					}).filter(function (each) {
						return each.id === id;
					});
	
					if (temp.length === 0) {
						nextProps.callbackForCanvasDraw({
							type: "mouse",
							subType: "MouseCoordinateY",
							id: id, chartId: chartId, draw: draw
						});
					} else {
						nextProps.callbackForCanvasDraw(temp[0], {
							type: "mouse",
							subType: "MouseCoordinateY",
							id: id, chartId: chartId, draw: draw
						});
					}
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var chartCanvasType = _props2.chartCanvasType;
				var chartConfig = _props2.chartConfig;
				var mouseXY = _props2.mouseXY;
				var xScale = _props2.xScale;
				var currentCharts = _props2.currentCharts;
				var currentItem = _props2.currentItem;
	
				if (chartCanvasType !== "svg") return null;
	
				var props = helper(this.props, xScale, chartConfig, mouseXY, currentCharts, currentItem);
				if ((0, _utils.isNotDefined)(props)) return null;
	
				return _react2.default.createElement(_EdgeCoordinate2.default, _extends({
					className: "vertical"
				}, props));
			}
		}]);
	
		return MouseCoordinateY;
	}(_react.Component);
	
	MouseCoordinateY.propTypes = {
		id: _react.PropTypes.number.isRequired,
		displayFormat: _react.PropTypes.func.isRequired,
	
		chartCanvasType: _react.PropTypes.string.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		chartConfig: _react.PropTypes.object.isRequired,
		mouseXY: _react.PropTypes.array,
		xScale: _react.PropTypes.func.isRequired,
		currentCharts: _react.PropTypes.arrayOf(_react.PropTypes.number),
		currentItem: _react.PropTypes.object
	};
	
	MouseCoordinateY.defaultProps = {
		yAxisPad: 0,
		rectWidth: 50,
		rectHeight: 20,
		orient: "left",
		at: "left",
		arrowWidth: 10,
		fill: "#525252",
		opacity: 1,
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 13,
		textFill: "#FFFFFF"
	};
	
	function helper(props, xScale, _ref, mouseXY, currentCharts /* , currentItem */) {
		var id = _ref.id;
		var yScale = _ref.yScale;
		var origin = _ref.origin;
	
		if ((0, _utils.isNotDefined)(mouseXY)) return null;
		if (currentCharts.indexOf(id) < 0) return null;
	
		var width = props.width;
		var show = props.show;
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
			x1: x1,
			x2: x2,
			y1: y,
			y2: y
		};
		return coordinateProps;
	}
	
	function drawOnCanvas(canvasContext, props) {
		var chartConfig = props.chartConfig;
		var currentItem = props.currentItem;
		var xScale = props.xScale;
		var mouseXY = props.mouseXY;
		var show = props.show;
		var currentCharts = props.currentCharts;
	
	
		drawOnCanvasStatic(props, canvasContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);
	}
	
	// mouseContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem
	function drawOnCanvasStatic(props, ctx, show, xScale, mouseXY, currentCharts, chartConfig, currentItem) {
		var canvasOriginX = props.canvasOriginX;
		var canvasOriginY = props.canvasOriginY;
	
	
		var edgeProps = helper(props, xScale, chartConfig, mouseXY, currentCharts, currentItem);
	
		ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOriginX, canvasOriginY);
	
		_EdgeCoordinate2.default.drawOnCanvasStatic(ctx, edgeProps);
	
		ctx.restore();
	}
	
	exports.default = (0, _pure2.default)(MouseCoordinateY, {
		show: _react.PropTypes.bool.isRequired,
		currentItem: _react.PropTypes.object,
		chartConfig: _react.PropTypes.object.isRequired,
		mouseXY: _react.PropTypes.array,
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
	
		width: _react.PropTypes.number.isRequired,
		displayXAccessor: _react.PropTypes.func.isRequired,
		currentCharts: _react.PropTypes.arrayOf(_react.PropTypes.number),
	
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		chartId: _react.PropTypes.number.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		margin: _react.PropTypes.object.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string.isRequired
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CrossHairCursor = function (_Component) {
		_inherits(CrossHairCursor, _Component);
	
		function CrossHairCursor() {
			_classCallCheck(this, CrossHairCursor);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CrossHairCursor).apply(this, arguments));
		}
	
		_createClass(CrossHairCursor, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _props = this.props;
				var chartCanvasType = _props.chartCanvasType;
				var getCanvasContexts = _props.getCanvasContexts;
	
	
				if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
					var contexts = getCanvasContexts();
					if (contexts) drawOnCanvas(contexts.mouseCoord, this.props);
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
				this.componentWillReceiveProps(this.props, this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var draw = drawOnCanvasStatic.bind(null, nextProps);
	
				var temp = nextProps.getAllCanvasDrawCallback().filter(function (each) {
					return (0, _utils.isNotDefined)(each.chartId);
				}).filter(function (each) {
					return each.type === "mouse";
				}).filter(function (each) {
					return each.subType === "crosshair";
				});
				if (temp.length === 0) {
					nextProps.callbackForCanvasDraw({
						type: "mouse",
						subType: "crosshair",
						draw: draw
					});
				} else {
					nextProps.callbackForCanvasDraw(temp[0], {
						type: "mouse",
						subType: "crosshair",
						draw: draw
					});
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var chartCanvasType = _props2.chartCanvasType;
				var mouseXY = _props2.mouseXY;
				var xScale = _props2.xScale;
				var currentItem = _props2.currentItem;
				var show = _props2.show;
	
				if (chartCanvasType !== "svg") return null;
	
				var lines = helper(this.props, mouseXY, xScale, currentItem, show);
	
				if ((0, _utils.isNotDefined)(lines)) return null;
	
				return _react2.default.createElement(
					"g",
					{ className: "CrossHairCursor " },
					lines.map(function (each, idx) {
						return _react2.default.createElement("line", _extends({ key: idx }, each));
					})
				);
			}
		}]);
	
		return CrossHairCursor;
	}(_react.Component);
	
	CrossHairCursor.propTypes = {
		height: _react.PropTypes.number.isRequired,
		width: _react.PropTypes.number.isRequired,
		mouseXY: _react.PropTypes.array.isRequired,
		show: _react.PropTypes.bool,
		xScale: _react.PropTypes.func.isRequired,
		chartCanvasType: _react.PropTypes.string.isRequired,
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		currentCharts: _react.PropTypes.arrayOf(_react.PropTypes.number),
		getCanvasContexts: _react.PropTypes.func,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func
	
	};
	
	CrossHairCursor.defaultProps = {
		stroke: "#000000",
		opacity: 0.3,
		strokeDasharray: "4, 2",
		snapX: true
	};
	
	function helper(props, mouseXY, xScale, currentItem, show) {
		var height = props.height;
		var width = props.width;
		var xAccessor = props.xAccessor;
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
		var x = snapX ? xScale(xAccessor(currentItem)) : mouseXY[0];
		var line2 = {
			x1: x,
			x2: x,
			y1: 0,
			y2: height,
			stroke: stroke, strokeDasharray: strokeDasharray, opacity: opacity
		};
		return [line1, line2];
	}
	function drawOnCanvas(canvasContext, props) {
		var mouseXY = props.mouseXY;
		var currentCharts = props.currentCharts;
		var chartConfig = props.chartConfig;
		var currentItem = props.currentItem;
		var xScale = props.xScale;
		var show = props.show;
	
		// console.log(props.currentCharts);
	
		drawOnCanvasStatic(props, canvasContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);
	}
	
	function drawOnCanvasStatic(props, ctx, show, xScale, mouseXY, currentCharts, chartConfig, currentItem) {
		var margin = props.margin;
	
	
		var lines = helper(props, mouseXY, xScale, currentItem, show);
	
		if ((0, _utils.isDefined)(lines)) {
			var originX = margin.left;
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
	
	exports.default = (0, _pure2.default)(CrossHairCursor, {
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		margin: _react.PropTypes.object.isRequired,
		show: _react.PropTypes.bool,
		mouseXY: _react.PropTypes.array,
	
		xScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		chartCanvasType: _react.PropTypes.string.isRequired,
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		currentCharts: _react.PropTypes.arrayOf(_react.PropTypes.number),
	
		getCanvasContexts: _react.PropTypes.func,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.defaultOptions = exports.compare = exports.elderImpulse = exports.change = exports.elderRay = exports.forceIndex = exports.stochasticOscillator = exports.atr = exports.rsi = exports.macd = exports.renko = exports.pointAndFigure = exports.kagi = exports.haikinAshi = exports.bollingerBand = exports.sma = exports.ema = undefined;
	
	var _defaultOptions = __webpack_require__(62);
	
	var defaultOptions = _interopRequireWildcard(_defaultOptions);
	
	var _ema = __webpack_require__(63);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _sma = __webpack_require__(79);
	
	var _sma2 = _interopRequireDefault(_sma);
	
	var _bollingerBand = __webpack_require__(80);
	
	var _bollingerBand2 = _interopRequireDefault(_bollingerBand);
	
	var _haikinAshi = __webpack_require__(81);
	
	var _haikinAshi2 = _interopRequireDefault(_haikinAshi);
	
	var _kagi = __webpack_require__(82);
	
	var _kagi2 = _interopRequireDefault(_kagi);
	
	var _pointAndFigure = __webpack_require__(83);
	
	var _pointAndFigure2 = _interopRequireDefault(_pointAndFigure);
	
	var _renko = __webpack_require__(84);
	
	var _renko2 = _interopRequireDefault(_renko);
	
	var _macd = __webpack_require__(85);
	
	var _macd2 = _interopRequireDefault(_macd);
	
	var _rsi = __webpack_require__(86);
	
	var _rsi2 = _interopRequireDefault(_rsi);
	
	var _atr = __webpack_require__(87);
	
	var _atr2 = _interopRequireDefault(_atr);
	
	var _stochasticOscillator = __webpack_require__(88);
	
	var _stochasticOscillator2 = _interopRequireDefault(_stochasticOscillator);
	
	var _forceIndex = __webpack_require__(89);
	
	var _forceIndex2 = _interopRequireDefault(_forceIndex);
	
	var _elderRay = __webpack_require__(90);
	
	var _elderRay2 = _interopRequireDefault(_elderRay);
	
	var _change = __webpack_require__(91);
	
	var _change2 = _interopRequireDefault(_change);
	
	var _elderImpulse = __webpack_require__(92);
	
	var _elderImpulse2 = _interopRequireDefault(_elderImpulse);
	
	var _compare = __webpack_require__(93);
	
	var _compare2 = _interopRequireDefault(_compare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.ema = _ema2.default;
	exports.sma = _sma2.default;
	exports.bollingerBand = _bollingerBand2.default;
	exports.haikinAshi = _haikinAshi2.default;
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
	exports.defaultOptions = defaultOptions;

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var BollingerBand = exports.BollingerBand = {
		period: 20,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		multiplier: 2,
		movingAverageType: "sma"
	};
	
	var ATR = exports.ATR = {
		period: 14,
		source: function source(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		}
	};
	
	var ForceIndex = exports.ForceIndex = {
		close: function close(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		volume: function volume(d) {
			return d.volume;
		}
	};
	
	var ElderRay = exports.ElderRay = {
		period: 13,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		movingAverageType: "sma",
		ohlc: function ohlc(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		}
	};
	
	var ElderImpulse = exports.ElderImpulse = {
		stroke: {
			up: "#6BA583",
			down: "#FF0000",
			neutral: "#0000FF"
		}
	};
	
	var MACD = exports.MACD = {
		fast: 12,
		slow: 26,
		signal: 9,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		fill: {
			divergence: "#4682B4"
		},
		stroke: {
			macd: "#FF0000",
			signal: "#00F300"
		}
	};
	
	var FullStochasticOscillator = exports.FullStochasticOscillator = {
		period: 12,
		K: 3,
		D: 3,
		source: function source(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		},
		stroke: {
			D: "#17becf",
			K: "#ff7f0e"
		},
		overSold: 80,
		middle: 50,
		overBought: 20
	};
	
	var RSI = exports.RSI = {
		period: 14,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		overSold: 70,
		middle: 50,
		overBought: 30
	};
	
	var EMA = exports.EMA = {
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		period: 10
	};
	
	var SMA = exports.SMA = {
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		period: 10
	};
	
	var Kagi = exports.Kagi = {
		reversalType: "ATR", // "ATR", "FIXED"
		period: 14,
		reversal: 2,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, idx) {
			d.idx = idx;
		}
	};
	
	var Renko = exports.Renko = {
		reversalType: "ATR", // "ATR", "FIXED"
		period: 14,
		fixedBrickSize: 2,
		source: function source(d) {
			return { high: d.high, low: d.low };
		}, // "close", "hi/lo"
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, idx) {
			d.idx = idx;
		},
		indexAccessor: function indexAccessor(d) {
			return d.idx;
		}
	};
	
	var PointAndFigure = exports.PointAndFigure = {
		boxSize: 0.5,
		reversal: 3,
		source: function source(d) {
			return { high: d.high, low: d.low };
		}, // "close", "hi/lo"
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, idx) {
			d.idx = idx;
		},
		indexAccessor: function indexAccessor(d) {
			return d.idx;
		}
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.ema;
		});
	
		var underlyingAlgorithm = (0, _algorithm.ema)().windowSize(_defaultOptions.EMA.period).source(_defaultOptions.EMA.source);
	
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
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "source");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "EMA";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.compare = exports.elderRay = exports.forceIndex = exports.atr = exports.sto = exports.rsi = exports.macd = exports.renko = exports.pointAndFigure = exports.kagi = exports.haikinAshi = exports.bollingerband = exports.ema = undefined;
	
	var _ema = __webpack_require__(65);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _bollingerband = __webpack_require__(66);
	
	var _bollingerband2 = _interopRequireDefault(_bollingerband);
	
	var _haikinAshi = __webpack_require__(67);
	
	var _haikinAshi2 = _interopRequireDefault(_haikinAshi);
	
	var _kagi = __webpack_require__(68);
	
	var _kagi2 = _interopRequireDefault(_kagi);
	
	var _pointAndFigure = __webpack_require__(70);
	
	var _pointAndFigure2 = _interopRequireDefault(_pointAndFigure);
	
	var _renko = __webpack_require__(71);
	
	var _renko2 = _interopRequireDefault(_renko);
	
	var _macd = __webpack_require__(72);
	
	var _macd2 = _interopRequireDefault(_macd);
	
	var _rsi = __webpack_require__(73);
	
	var _rsi2 = _interopRequireDefault(_rsi);
	
	var _sto = __webpack_require__(74);
	
	var _sto2 = _interopRequireDefault(_sto);
	
	var _atr = __webpack_require__(69);
	
	var _atr2 = _interopRequireDefault(_atr);
	
	var _forceIndex = __webpack_require__(75);
	
	var _forceIndex2 = _interopRequireDefault(_forceIndex);
	
	var _elderRay = __webpack_require__(76);
	
	var _elderRay2 = _interopRequireDefault(_elderRay);
	
	var _compare = __webpack_require__(77);
	
	var _compare2 = _interopRequireDefault(_compare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.ema = _ema2.default;
	exports.bollingerband = _bollingerband2.default;
	exports.haikinAshi = _haikinAshi2.default;
	exports.kagi = _kagi2.default;
	exports.pointAndFigure = _pointAndFigure2.default;
	exports.renko = _renko2.default;
	exports.macd = _macd2.default;
	exports.rsi = _rsi2.default;
	exports.sto = _sto2.default;
	exports.atr = _atr2.default;
	exports.forceIndex = _forceIndex2.default;
	exports.elderRay = _elderRay2.default;
	exports.compare = _compare2.default; // import slidingWindow from "./slidingWindow";
	// import merge from "./merge";
	// import zipper from "./zipper";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

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
	
		var windowSize = 9,
		    source = _utils.identity;
	
		function calculator(data) {
	
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
	
	var _utils = __webpack_require__(7);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

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
		var windowSize = _defaultOptions.BollingerBand.period;
		var multiplier = _defaultOptions.BollingerBand.multiplier;
		var movingAverageType = _defaultOptions.BollingerBand.movingAverageType;
	
		var source = _utils.identity;
	
		function calculator(data) {
	
			var meanAlgorithm = movingAverageType === "ema" ? (0, _ema2.default)().windowSize(windowSize).source(source) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
				return _d2.default.mean(values);
			}).source(source);
	
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
	
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _ema = __webpack_require__(65);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _utils = __webpack_require__(7);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function () {
		var reversalType = _defaultOptions.Kagi.reversalType;
		var windowSize = _defaultOptions.Kagi.period;
		var reversal = _defaultOptions.Kagi.reversal;
		var source = _defaultOptions.Kagi.source;
		var dateAccessor = _defaultOptions.Kagi.dateAccessor;
		var dateMutator = _defaultOptions.Kagi.dateMutator;
	
	
		function calculator(data) {
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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _atr = __webpack_require__(69);
	
	var _atr2 = _interopRequireDefault(_atr);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var windowSize = 9,
		    source = function source(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		};
	
		function atr(data) {
	
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
	
		atr.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return atr;
		};
	
		atr.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return atr;
		};
	
		return atr;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var reversal = _defaultOptions.PointAndFigure.reversal;
		var boxSize = _defaultOptions.PointAndFigure.boxSize;
		var source = _defaultOptions.PointAndFigure.source;
		var dateAccessor = _defaultOptions.PointAndFigure.dateAccessor;
		var dateMutator = _defaultOptions.PointAndFigure.dateMutator;
	
	
		function calculator(rawData) {
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
		calculator.source = function (x) {
			if (!arguments.length) return source;
			source = x;
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
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var reversalType = _defaultOptions.Renko.reversalType;
		var fixedBrickSize = _defaultOptions.Renko.fixedBrickSize;
		var source = _defaultOptions.Renko.source;
		var windowSize = _defaultOptions.Renko.period;
		var dateAccessor = _defaultOptions.Renko.dateAccessor;
		var dateMutator = _defaultOptions.Renko.dateMutator;
	
	
		function calculator(rawData) {
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
		calculator.source = function (x) {
			if (!arguments.length) return source;
			source = x;
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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _atr = __webpack_require__(69);
	
	var _atr2 = _interopRequireDefault(_atr);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

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
		var fast = _defaultOptions.MACD.fast;
		var slow = _defaultOptions.MACD.slow;
		var signal = _defaultOptions.MACD.signal;
	
		var source = _utils.identity;
	
		function calculator(data) {
	
			var fastEMA = (0, _ema2.default)().windowSize(fast).source(source);
			var slowEMA = (0, _ema2.default)().windowSize(slow).source(source);
			var signalEMA = (0, _ema2.default)().windowSize(signal);
	
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
	
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _ema = __webpack_require__(65);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

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
		var windowSize = _defaultOptions.RSI.period;
	
		var source = _utils.identity;
	
		function calculator(data) {
	
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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

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
		var windowSize = _defaultOptions.FullStochasticOscillator.period;
		var kWindowSize = _defaultOptions.FullStochasticOscillator.K;
		var dWindowSize = _defaultOptions.FullStochasticOscillator.D;
		var source = _defaultOptions.FullStochasticOscillator.source;
	
	
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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = function () {
		var close = _defaultOptions.ForceIndex.close;
		var volume = _defaultOptions.ForceIndex.volume;
	
	
		function calculator(data) {
	
			var forceIndexCalulator = (0, _utils.slidingWindow)().windowSize(2).accumulator(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2);
	
				var prev = _ref2[0];
				var curr = _ref2[1];
				return (close(curr) - close(prev)) * volume(curr);
			});
	
			var forceIndex = forceIndexCalulator(data);
	
			return forceIndex;
		}
	
		calculator.close = function (x) {
			if (!arguments.length) {
				return close;
			}
			close = x;
			return calculator;
		};
	
		calculator.volume = function (x) {
			if (!arguments.length) {
				return volume;
			}
			volume = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

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
		var windowSize = _defaultOptions.ElderRay.period;
		var src = _defaultOptions.ElderRay.source;
		var movingAverageType = _defaultOptions.ElderRay.movingAverageType;
		var ohlc = _defaultOptions.ElderRay.ohlc;
	
		var source = _d2.default.functor(src);
	
		function calculator(data) {
	
			var meanAlgorithm = movingAverageType === "ema" ? (0, _ema2.default)().windowSize(windowSize).source(source) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
				return _d2.default.mean(values);
			}).source(source);
	
			var zip = (0, _utils.zipper)().combine(function (datum, mean) {
				var bullPower = (0, _utils.isDefined)(mean) ? ohlc(datum).high - mean : undefined;
				var bearPower = (0, _utils.isDefined)(mean) ? ohlc(datum).low - mean : undefined;
				return { bullPower: bullPower, bearPower: bearPower };
			});
	
			var newData = zip(data, meanAlgorithm(data));
			return newData;
		}
	
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
	
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _ema = __webpack_require__(65);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _defaultOptions = __webpack_require__(62);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _utils = __webpack_require__(7);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _utils = __webpack_require__(7);
	
	var i = 0;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.sma;
		});
	
		var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(_defaultOptions.SMA.period).source(_defaultOptions.SMA.source).accumulator(function (values) {
			return _d2.default.mean(values);
		});
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.sma = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			var newData = mergedAlgorithm(data);
			return newData;
		};
	
		base.tooltipLabel(function () {
			return ALGORITHM_TYPE + "(" + underlyingAlgorithm.windowSize() + ")";
		});
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "source", "undefinedValue", "skipInitial");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "SMA";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.bollingerBand;
		}).stroke({
			top: "#964B00",
			middle: "#000000",
			bottom: "#964B00"
		}).fill("#4682B4");
	
		var underlyingAlgorithm = (0, _algorithm.bollingerband)().windowSize(_defaultOptions.BollingerBand.period).movingAverageType(_defaultOptions.BollingerBand.movingAverageType).multiplier(_defaultOptions.BollingerBand.multiplier).source(_defaultOptions.BollingerBand.source);
	
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
		_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _algorithm = __webpack_require__(64);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "BollingerBand";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.ha;
		});
	
		var underlyingAlgorithm = (0, _algorithm.haikinAshi)();
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.ha = indicator;
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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "HaikinAshi";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);
	
		var underlyingAlgorithm = (0, _algorithm.kagi)();
	
		var indicator = function indicator(data) {
			return underlyingAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "stroke", "fill", "echo", "type");
		_d2.default.rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "indexMutator");
		// d3.rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "Kagi";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "PointAndFigure";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "Renko";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).fill(_defaultOptions.MACD.fill).stroke(_defaultOptions.MACD.stroke).accessor(function (d) {
			return d.macd;
		});
	
		var underlyingAlgorithm = (0, _algorithm.macd)().fast(_defaultOptions.MACD.fast).slow(_defaultOptions.MACD.slow).signal(_defaultOptions.MACD.signal).source(_defaultOptions.MACD.source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.macd = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "source", "fast", "slow", "signal");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "MACD";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var overSold = _defaultOptions.RSI.overSold;
		var middle = _defaultOptions.RSI.middle;
		var overBought = _defaultOptions.RSI.overBought;
	
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.rsi;
		});
	
		var underlyingAlgorithm = (0, _algorithm.rsi)().windowSize(_defaultOptions.RSI.period).source(_defaultOptions.RSI.source);
	
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
		_d2.default.rebind(indicator, underlyingAlgorithm, "source", "windowSize");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "RSI";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.atr;
		});
	
		var underlyingAlgorithm = (0, _algorithm.atr)().windowSize(_defaultOptions.ATR.period).source(_defaultOptions.ATR.source);
	
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
		_d2.default.rebind(indicator, underlyingAlgorithm, "source", "windowSize");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "ATR";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var K = _defaultOptions.FullStochasticOscillator.K;
		var D = _defaultOptions.FullStochasticOscillator.D;
		var source = _defaultOptions.FullStochasticOscillator.source;
		var period = _defaultOptions.FullStochasticOscillator.period;
		var overSold = _defaultOptions.FullStochasticOscillator.overSold;
		var overBought = _defaultOptions.FullStochasticOscillator.overBought;
		var middle = _defaultOptions.FullStochasticOscillator.middle;
		var stroke = _defaultOptions.FullStochasticOscillator.stroke;
	
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).stroke(stroke).accessor(function (d) {
			return d.sto;
		});
	
		var underlyingAlgorithm = (0, _algorithm.sto)().windowSize(period).kWindowSize(K).dWindowSize(D).source(source);
	
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
		_d2.default.rebind(indicator, underlyingAlgorithm, "source", "windowSize", "kWindowSize", "dWindowSize");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "RSI";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.forceIndex;
		});
	
		var underlyingAlgorithm = (0, _algorithm.forceIndex)().volume(_defaultOptions.ForceIndex.volume).close(_defaultOptions.ForceIndex.close);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.forceIndex = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
		_d2.default.rebind(indicator, underlyingAlgorithm, "close", "volume");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "ForceIndex";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.elderRay;
		});
	
		var underlyingAlgorithm = (0, _algorithm.elderRay)().windowSize(_defaultOptions.ElderRay.period).ohlc(_defaultOptions.ElderRay.ohlc).movingAverageType(_defaultOptions.ElderRay.movingAverageType).source(_defaultOptions.ElderRay.source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.elderRay = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		base.tooltipLabel(ALGORITHM_TYPE + ": ");
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "ohlc", "movingAverageType", "source");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "ElderRay";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.elderRay;
		});
	
		var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(2).source(function (d) {
			return d.close;
		}).accumulator(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2);
	
			var prev = _ref2[0];
			var curr = _ref2[1];
	
			var absoluteChange = curr - prev;
			var percentChange = absoluteChange * 100 / prev;
			return { absoluteChange: absoluteChange, percentChange: percentChange };
		});
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.absoluteChange = indicator.absoluteChange;
			datum.percentChange = indicator.percentChange;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		_d3.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
		_d3.default.rebind(indicator, underlyingAlgorithm, "windowSize", "source");
		_d3.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(7);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "Change";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = function () {
	
		var macdSource, emaSource;
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).stroke(function (d) {
			return _defaultOptions.ElderImpulse.stroke[d.elderImpulse];
		}).accessor([function (d) {
			return d.close;
		}]).fill(undefined);
	
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
		_d3.default.rebind(indicator, base, "id", "stroke", "echo", "type");
		// d3.rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");
		_d3.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(7);
	
	var _defaultOptions = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "ElderImpulse";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(7);
	
	var _algorithm = __webpack_require__(64);
	
	var _baseIndicator = __webpack_require__(78);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "Compare";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _utils = __webpack_require__(7);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Label = exports.SvgPathAnnotation = exports.LabelAnnotation = exports.Annotate = undefined;
	exports.buyPath = buyPath;
	exports.sellPath = sellPath;
	
	var _Annotate = __webpack_require__(96);
	
	var _Annotate2 = _interopRequireDefault(_Annotate);
	
	var _LabelAnnotation = __webpack_require__(97);
	
	var _LabelAnnotation2 = _interopRequireDefault(_LabelAnnotation);
	
	var _SvgPathAnnotation = __webpack_require__(98);
	
	var _SvgPathAnnotation2 = _interopRequireDefault(_SvgPathAnnotation);
	
	var _Label = __webpack_require__(99);
	
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Annotate = function (_Component) {
		_inherits(Annotate, _Component);
	
		function Annotate(props) {
			_classCallCheck(this, Annotate);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Annotate).call(this, props));
	
			_this.annotate = _this.annotate.bind(_this);
			return _this;
		}
	
		_createClass(Annotate, [{
			key: "annotate",
			value: function annotate(_ref) {
				var xScale = _ref.xScale;
				var chartConfig = _ref.chartConfig;
				var plotData = _ref.plotData;
				var chartId = this.props.chartId;
				var yScale = chartConfig.filter(function (each) {
					return each.id === chartId;
				})[0].yScale;
	
				this.setState({ plotData: plotData, xScale: xScale, yScale: yScale });
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var plotData = nextProps.plotData;
				var xScale = nextProps.xScale;
				var chartConfig = nextProps.chartConfig;
				var chartId = nextProps.chartId;
				var yScale = chartConfig.filter(function (each) {
					return each.id === chartId;
				})[0].yScale;
	
	
				this.setState({ plotData: plotData, xScale: xScale, yScale: yScale });
	
				var id = nextProps.id;
				var chartCanvasType = nextProps.chartCanvasType;
				var callbackForCanvasDraw = nextProps.callbackForCanvasDraw;
				var getAllCanvasDrawCallback = nextProps.getAllCanvasDrawCallback;
	
	
				if (chartCanvasType !== "svg") {
					var temp = getAllCanvasDrawCallback().filter(function (each) {
						return each.type === "annotation";
					}).filter(function (each) {
						return each.id === id;
					});
					if (temp.length === 0) {
						callbackForCanvasDraw({
							id: id,
							type: "annotation",
							draw: this.annotate
						});
					} else {
						callbackForCanvasDraw(temp[0], {
							id: id,
							type: "annotation",
							draw: this.annotate
						});
					}
				}
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props);
			}
		}, {
			key: "render",
			value: function render() {
				var _state = this.state;
				var yScale = _state.yScale;
				var xScale = _state.xScale;
				var plotData = _state.plotData;
				var _props = this.props;
				var className = _props.className;
				var xAccessor = _props.xAccessor;
				var usingProps = _props.usingProps;
				var Annotation = _props.with;
	
				var data = helper(this.props, plotData);
	
				return _react2.default.createElement(
					"g",
					{ className: className },
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
		id: _react.PropTypes.number.isRequired,
		chartId: _react.PropTypes.number.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array.isRequired,
		with: _react.PropTypes.func,
		when: _react.PropTypes.func,
		usingProps: _react.PropTypes.object
	};
	
	Annotate.defaultProps = {
		className: "react-stockcharts-annotate react-stockcharts-default-cursor"
	};
	
	function helper(_ref2, plotData) {
		var when = _ref2.when;
	
		return plotData.filter(when);
	}
	
	exports.default = (0, _pure2.default)(Annotate, {
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		chartConfig: _react.PropTypes.array.isRequired,
		chartCanvasType: _react.PropTypes.string,
		xScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array.isRequired
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.defaultProps = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.helper = helper;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LabelAnnotation = function (_Component) {
		_inherits(LabelAnnotation, _Component);
	
		function LabelAnnotation(props) {
			_classCallCheck(this, LabelAnnotation);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LabelAnnotation).call(this, props));
	
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SvgPathAnnotation = function (_Component) {
		_inherits(SvgPathAnnotation, _Component);
	
		function SvgPathAnnotation(props) {
			_classCallCheck(this, SvgPathAnnotation);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SvgPathAnnotation).call(this, props));
	
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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(7);
	
	var _LabelAnnotation = __webpack_require__(97);
	
	var _LabelAnnotation2 = _interopRequireDefault(_LabelAnnotation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Label = function (_Component) {
		_inherits(Label, _Component);
	
		function Label() {
			_classCallCheck(this, Label);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Label).apply(this, arguments));
		}
	
		_createClass(Label, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _props = this.props;
				var selectCanvas = _props.selectCanvas;
				var getCanvasContexts = _props.getCanvasContexts;
				var chartConfig = _props.chartConfig;
				var chartCanvasType = _props.chartCanvasType;
	
				if (chartCanvasType !== "svg") {
					var ctx = selectCanvas(getCanvasContexts());
					var yScale = getYScale(chartConfig);
	
					drawOnCanvas2(_extends({}, this.props, { yScale: yScale, text: getText(this.props) }), ctx);
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
				var _props2 = this.props;
				var chartConfig = _props2.chartConfig;
				var chartCanvasType = _props2.chartCanvasType;
	
				if (chartCanvasType !== "svg") return null;
	
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
		getCanvasContexts: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string,
		chartConfig: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]).isRequired,
		text: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired
	};
	
	Label.defaultProps = _extends({}, _LabelAnnotation.defaultProps, {
		selectCanvas: function selectCanvas(canvases) {
			return canvases.bg;
		}
	});
	
	function drawOnCanvas2(props, ctx) {
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		var canvasOriginX = props.canvasOriginX;
		var canvasOriginY = props.canvasOriginY;
		var margin = props.margin;
	
	
		if ((0, _utils.isDefined)(canvasOriginX)) ctx.translate(canvasOriginX, canvasOriginY);else ctx.translate(margin.left + 0.5, margin.top + 0.5);
	
		drawOnCanvas(props, ctx);
	
		ctx.restore();
	}
	
	function drawOnCanvas(props, ctx) {
		var textAnchor = props.textAnchor;
		var fontFamily = props.fontFamily;
		var fontSize = props.fontSize;
		var opacity = props.opacity;
		var xAccessor = props.xAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var rotate = props.rotate;
	
		var _helper = (0, _LabelAnnotation.helper)(props, xAccessor, xScale, yScale);
	
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
	
	exports.default = (0, _pure2.default)(Label, {
		xScale: _react.PropTypes.func,
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
		xAccessor: _react.PropTypes.func,
		chartConfig: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]).isRequired,
		chartCanvasType: _react.PropTypes.string,
		getCanvasContexts: _react.PropTypes.func,
		interval: _react.PropTypes.string,
		plotData: _react.PropTypes.array,
		margin: _react.PropTypes.object
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.YAxis = exports.XAxis = undefined;
	
	var _XAxis = __webpack_require__(101);
	
	var _XAxis2 = _interopRequireDefault(_XAxis);
	
	var _YAxis = __webpack_require__(105);
	
	var _YAxis2 = _interopRequireDefault(_YAxis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.XAxis = _XAxis2.default;
	exports.YAxis = _YAxis2.default;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Axis = __webpack_require__(102);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var _PureComponent2 = __webpack_require__(21);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var XAxis = function (_PureComponent) {
		_inherits(XAxis, _PureComponent);
	
		function XAxis() {
			_classCallCheck(this, XAxis);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(XAxis).apply(this, arguments));
		}
	
		_createClass(XAxis, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var axisAt = _props.axisAt;
				var showTicks = _props.showTicks;
				var tickFormat = _props.tickFormat;
				var ticks = _props.ticks;
	
	
				var axisLocation;
				if (axisAt === "top") axisLocation = 0;else if (axisAt === "bottom") axisLocation = this.context.height;else if (axisAt === "middle") axisLocation = this.context.height / 2;else axisLocation = axisAt;
	
				if (tickFormat && this.context.xScale.isPolyLinear && this.context.xScale.isPolyLinear()) {
					console.warn("Cannot set tickFormat on a poly linear scale, ignoring tickFormat on XAxis");
					tickFormat = undefined;
				}
	
				if (ticks) ticks = [ticks];
				return _react2.default.createElement(_Axis2.default, _extends({}, this.props, {
					range: [0, this.context.width],
					transform: [0, axisLocation],
					showTicks: showTicks, tickFormat: tickFormat, ticks: ticks,
					scale: this.context.xScale }));
			}
		}]);
	
		return XAxis;
	}(_PureComponent3.default);
	
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
		className: "react-stockcharts-x-axis",
		ticks: 10
	};
	
	XAxis.contextTypes = {
		xScale: _react.PropTypes.func.isRequired,
		chartConfig: _react.PropTypes.object.isRequired,
		height: _react.PropTypes.number.isRequired,
		width: _react.PropTypes.number.isRequired
	};
	
	exports.default = XAxis;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AxisTicks = __webpack_require__(103);
	
	var _AxisTicks2 = _interopRequireDefault(_AxisTicks);
	
	var _AxisLine = __webpack_require__(104);
	
	var _AxisLine2 = _interopRequireDefault(_AxisLine);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Axis = function (_Component) {
		_inherits(Axis, _Component);
	
		function Axis(props) {
			_classCallCheck(this, Axis);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Axis).call(this, props));
	
			_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
			return _this;
		}
	
		_createClass(Axis, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var margin = nextContext.margin;
				var chartId = nextContext.chartId;
				var canvasOriginX = nextContext.canvasOriginX;
				var canvasOriginY = nextContext.canvasOriginY;
	
				var draw = Axis.drawOnCanvasStatic.bind(null, margin, nextProps, [canvasOriginX, canvasOriginY]);
	
				nextContext.callbackForCanvasDraw({
					chartId: chartId,
					type: "axis",
					draw: draw
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				if (this.context.chartCanvasType !== "svg" && (0, _utils.isDefined)(this.context.getCanvasContexts)) {
					var contexts = this.context.getCanvasContexts();
					if (contexts) this.drawOnCanvas(contexts.axes);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "drawOnCanvas",
			value: function drawOnCanvas(ctx) {
				var _context = this.context;
				var margin = _context.margin;
				var canvasOriginX = _context.canvasOriginX;
				var canvasOriginY = _context.canvasOriginY;
				var scale = this.props.scale;
	
	
				Axis.drawOnCanvasStatic(margin, this.props, [canvasOriginX, canvasOriginY], ctx, scale, scale);
			}
		}, {
			key: "render",
			value: function render() {
				if (this.context.chartCanvasType !== "svg") return null;
	
				var domain = this.props.showDomain ? _react2.default.createElement(_AxisLine2.default, this.props) : null;
				var ticks = this.props.showTicks ? _react2.default.createElement(_AxisTicks2.default, this.props) : null;
	
				var className = "";
				if (this.props.className) className = this.props.defaultClassName.concat(this.props.className);
				return _react2.default.createElement(
					"g",
					{ className: className,
						transform: "translate(" + this.props.transform[0] + ", " + this.props.transform[1] + ")" },
					ticks,
					domain
				);
			}
		}]);
	
		return Axis;
	}(_react.Component);
	
	Axis.propTypes = {
		className: _react.PropTypes.string.isRequired,
		defaultClassName: _react.PropTypes.string.isRequired,
		transform: _react.PropTypes.arrayOf(Number).isRequired,
		orient: _react.PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
		innerTickSize: _react.PropTypes.number,
		outerTickSize: _react.PropTypes.number,
		tickFormat: _react.PropTypes.func,
		tickPadding: _react.PropTypes.number,
		tickSize: _react.PropTypes.number,
		ticks: _react.PropTypes.array,
		tickValues: _react.PropTypes.array,
		scale: _react.PropTypes.func.isRequired,
		showDomain: _react.PropTypes.bool.isRequired,
		showTicks: _react.PropTypes.bool.isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number.isRequired
	};
	
	Axis.defaultProps = {
		defaultClassName: "react-stockcharts-axis ",
		showDomain: true,
		showTicks: true,
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 12
	};
	
	Axis.contextTypes = {
		getCanvasContexts: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string,
		chartId: _react.PropTypes.number.isRequired,
		margin: _react.PropTypes.object.isRequired,
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
		// secretToSuperFastCanvasDraw: PropTypes.array.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired
	};
	
	Axis.drawOnCanvasStatic = function (margin, props, canvasOrigin, ctx, xScale, yScale) {
		var transform = props.transform;
		var showDomain = props.showDomain;
		var showTicks = props.showTicks;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOrigin[0] + transform[0], canvasOrigin[1] + transform[1]);
	
		if (showDomain) _AxisLine2.default.drawOnCanvasStatic(props, ctx, xScale, yScale);
		if (showTicks) _AxisTicks2.default.drawOnCanvasStatic(props, ctx, xScale, yScale);
	
		ctx.restore();
	};
	
	exports.default = Axis;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function tickTransform_svg_axisX(scale, tick) {
		return [~~(0.5 + scale(tick)), 0];
	}
	
	function tickTransform_svg_axisY(scale, tick) {
		return [0, ~~(0.5 + scale(tick))];
	}
	
	var Tick = function (_Component) {
		_inherits(Tick, _Component);
	
		function Tick() {
			_classCallCheck(this, Tick);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Tick).apply(this, arguments));
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
						this.props.children
					)
				);
			}
		}]);
	
		return Tick;
	}(_react.Component);
	
	Tick.propTypes = {
		transform: _react.PropTypes.arrayOf(Number),
		tickStroke: _react.PropTypes.string,
		tickStrokeOpacity: _react.PropTypes.number,
		textAnchor: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		fontFamily: _react.PropTypes.string,
		x: _react.PropTypes.number,
		y: _react.PropTypes.number,
		x2: _react.PropTypes.number,
		y2: _react.PropTypes.number,
		dy: _react.PropTypes.string,
		children: _react.PropTypes.node.isRequired
	};
	
	Tick.drawOnCanvasStatic = function (tick, ctx, result) {
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
	};
	
	var AxisTicks = function (_Component2) {
		_inherits(AxisTicks, _Component2);
	
		function AxisTicks() {
			_classCallCheck(this, AxisTicks);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AxisTicks).apply(this, arguments));
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
		}]);
	
		return AxisTicks;
	}(_react.Component);
	
	AxisTicks.propTypes = {
		orient: _react.PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
		innerTickSize: _react.PropTypes.number,
		tickFormat: _react.PropTypes.func,
		tickPadding: _react.PropTypes.number,
		ticks: _react.PropTypes.array,
		tickValues: _react.PropTypes.array,
		scale: _react.PropTypes.func.isRequired,
		tickStroke: _react.PropTypes.string,
		tickStrokeOpacity: _react.PropTypes.number
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
		var tickArguments = props.ticks;
		var tickValues = props.tickValues;
		var tickStroke = props.tickStroke;
		var tickStrokeOpacity = props.tickStrokeOpacity;
	
	
		var ticks = (0, _utils.isNotDefined)(tickValues) ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues;
	
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
	};
	
	AxisTicks.drawOnCanvasStatic = function (props, ctx, xScale, yScale) {
		props = _extends({}, AxisTicks.defaultProps, props);
	
		var _props3 = props;
		var orient = _props3.orient;
	
		var xAxis = orient === "bottom" || orient === "top";
	
		var result = AxisTicks.helper(props, xAxis ? xScale : yScale);
	
		var tickStroke = result.tickStroke;
		var tickStrokeOpacity = result.tickStrokeOpacity;
		var textAnchor = result.textAnchor;
		var fontSize = result.fontSize;
		var fontFamily = result.fontFamily;
	
	
		ctx.strokeStyle = (0, _utils.hexToRGBA)(tickStroke, tickStrokeOpacity);
	
		ctx.font = fontSize + "px " + fontFamily;
		ctx.fillStyle = tickStroke;
		ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;
		// ctx.textBaseline = 'middle';
	
		result.ticks.forEach(function (tick) {
			Tick.drawOnCanvasStatic(tick, ctx, result);
		});
	};
	
	exports.default = AxisTicks;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	function d3_scaleExtent(domain) {
		var start = domain[0], stop = domain[domain.length - 1];
		return start < stop ? [start, stop] : [stop, start];
	}
	
	function d3_scaleRange(scale) {
		return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	}
	*/
	
	var AxisLine = function (_Component) {
		_inherits(AxisLine, _Component);
	
		function AxisLine() {
			_classCallCheck(this, AxisLine);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AxisLine).apply(this, arguments));
		}
	
		_createClass(AxisLine, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var orient = _props.orient;
				var outerTickSize = _props.outerTickSize;
				var fill = _props.fill;
				var stroke = _props.stroke;
				var strokeWidth = _props.strokeWidth;
				var className = _props.className;
				var shapeRendering = _props.shapeRendering;
				var opacity = _props.opacity;
				var range = _props.range;
	
				var sign = orient === "top" || orient === "left" ? -1 : 1;
	
				// var range = d3_scaleRange(scale);
	
				var d;
	
				if (orient === "bottom" || orient === "top") {
					d = "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize;
				} else {
					d = "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize;
				}
	
				return _react2.default.createElement("path", {
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
	}(_react.Component);
	
	AxisLine.propTypes = {
		className: _react.PropTypes.string,
		shapeRendering: _react.PropTypes.string,
		orient: _react.PropTypes.string.isRequired,
		scale: _react.PropTypes.func.isRequired,
		outerTickSize: _react.PropTypes.number,
		fill: _react.PropTypes.string,
		stroke: _react.PropTypes.string,
		strokeWidth: _react.PropTypes.number,
		opacity: _react.PropTypes.number,
		range: _react.PropTypes.array
	};
	
	AxisLine.defaultProps = {
		className: "react-stockcharts-axis-line",
		shapeRendering: "crispEdges",
		outerTickSize: 0,
		fill: "none",
		stroke: "#000000",
		strokeWidth: 1,
		opacity: 1
	};
	
	AxisLine.drawOnCanvasStatic = function (props, ctx /* , xScale, yScale*/) {
		props = _extends({}, AxisLine.defaultProps, props);
	
		var _props2 = props;
		var orient = _props2.orient;
		var outerTickSize = _props2.outerTickSize;
		var stroke = _props2.stroke;
		var strokeWidth = _props2.strokeWidth;
		var opacity = _props2.opacity;
		var range = _props2.range;
	
	
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
	
		// ctx.strokeStyle = strokeStyle;
	};
	
	exports.default = AxisLine;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Axis = __webpack_require__(102);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var _PureComponent2 = __webpack_require__(21);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var YAxis = function (_PureComponent) {
		_inherits(YAxis, _PureComponent);
	
		function YAxis() {
			_classCallCheck(this, YAxis);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(YAxis).apply(this, arguments));
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
				var chartConfig = this.context.chartConfig;
	
				var yScale = percentScale ? chartConfig.yScale.copy().domain([0, 1]) : chartConfig.yScale;
	
				tickValues = tickValues || chartConfig.yTicks;
	
				var axisLocation;
	
				if (axisAt === "left") axisLocation = 0;else if (axisAt === "right") axisLocation = this.context.width;else if (axisAt === "middle") axisLocation = this.context.width / 2;else axisLocation = axisAt;
	
				return _react2.default.createElement(_Axis2.default, _extends({}, this.props, {
					transform: [axisLocation, 0],
					range: [0, this.context.height],
					tickFormat: tickFormat, ticks: [ticks], tickValues: tickValues,
					scale: yScale }));
			}
		}]);
	
		return YAxis;
	}(_PureComponent3.default);
	
	YAxis.propTypes = {
		axisAt: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(["left", "right", "middle"]), _react.PropTypes.number]).isRequired,
		orient: _react.PropTypes.oneOf(["left", "right"]).isRequired,
		innerTickSize: _react.PropTypes.number,
		outerTickSize: _react.PropTypes.number,
		tickFormat: _react.PropTypes.func,
		tickPadding: _react.PropTypes.number,
		tickSize: _react.PropTypes.number,
		ticks: _react.PropTypes.number,
		tickValues: _react.PropTypes.array,
		percentScale: _react.PropTypes.bool,
		showTicks: _react.PropTypes.bool,
		showDomain: _react.PropTypes.bool,
		className: _react.PropTypes.string
	};
	YAxis.defaultProps = {
		showGrid: false,
		showDomain: false,
		className: "react-stockcharts-y-axis",
		ticks: 10
	};
	YAxis.contextTypes = {
		chartConfig: _react.PropTypes.object.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		width: _react.PropTypes.number.isRequired
	};
	
	exports.default = YAxis;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HoverTooltip = exports.StochasticTooltip = exports.RSITooltip = exports.BollingerBandTooltip = exports.MovingAverageTooltip = exports.SingleValueTooltip = exports.OHLCTooltip = exports.TooltipContainer = exports.MACDTooltip = undefined;
	
	var _MACDTooltip = __webpack_require__(107);
	
	var _MACDTooltip2 = _interopRequireDefault(_MACDTooltip);
	
	var _TooltipContainer = __webpack_require__(110);
	
	var _TooltipContainer2 = _interopRequireDefault(_TooltipContainer);
	
	var _OHLCTooltip = __webpack_require__(111);
	
	var _OHLCTooltip2 = _interopRequireDefault(_OHLCTooltip);
	
	var _SingleValueTooltip = __webpack_require__(112);
	
	var _SingleValueTooltip2 = _interopRequireDefault(_SingleValueTooltip);
	
	var _MovingAverageTooltip = __webpack_require__(113);
	
	var _MovingAverageTooltip2 = _interopRequireDefault(_MovingAverageTooltip);
	
	var _BollingerBandTooltip = __webpack_require__(114);
	
	var _BollingerBandTooltip2 = _interopRequireDefault(_BollingerBandTooltip);
	
	var _RSITooltip = __webpack_require__(115);
	
	var _RSITooltip2 = _interopRequireDefault(_RSITooltip);
	
	var _StochasticTooltip = __webpack_require__(116);
	
	var _StochasticTooltip2 = _interopRequireDefault(_StochasticTooltip);
	
	var _HoverTooltip = __webpack_require__(117);
	
	var _HoverTooltip2 = _interopRequireDefault(_HoverTooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.MACDTooltip = _MACDTooltip2.default;
	exports.TooltipContainer = _TooltipContainer2.default;
	exports.OHLCTooltip = _OHLCTooltip2.default;
	exports.SingleValueTooltip = _SingleValueTooltip2.default;
	exports.MovingAverageTooltip = _MovingAverageTooltip2.default;
	exports.BollingerBandTooltip = _BollingerBandTooltip2.default;
	exports.RSITooltip = _RSITooltip2.default;
	exports.StochasticTooltip = _StochasticTooltip2.default;
	exports.HoverTooltip = _HoverTooltip2.default;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ToolTipText = __webpack_require__(108);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(109);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MACDTooltip = function (_Component) {
		_inherits(MACDTooltip, _Component);
	
		function MACDTooltip() {
			_classCallCheck(this, MACDTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(MACDTooltip).apply(this, arguments));
		}
	
		_createClass(MACDTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var calculator = _props.calculator;
				var displayFormat = _props.displayFormat;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
	
				var yAccessor = calculator.accessor();
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
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
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
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
		}]);
	
		return MACDTooltip;
	}(_react.Component);
	
	MACDTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	MACDTooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
		origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		calculator: _react.PropTypes.func.isRequired,
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ToolTipText = function (_Component) {
		_inherits(ToolTipText, _Component);
	
		function ToolTipText() {
			_classCallCheck(this, ToolTipText);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ToolTipText).apply(this, arguments));
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ToolTipTSpanLabel = function (_Component) {
		_inherits(ToolTipTSpanLabel, _Component);
	
		function ToolTipTSpanLabel() {
			_classCallCheck(this, ToolTipTSpanLabel);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ToolTipTSpanLabel).apply(this, arguments));
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PureComponent2 = __webpack_require__(21);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TooltipContainer = function (_PureComponent) {
		_inherits(TooltipContainer, _PureComponent);
	
		function TooltipContainer() {
			_classCallCheck(this, TooltipContainer);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(TooltipContainer).apply(this, arguments));
		}
	
		_createClass(TooltipContainer, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-toottip-hover" },
					this.props.children
				);
			}
		}]);
	
		return TooltipContainer;
	}(_PureComponent3.default);
	
	TooltipContainer.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object
	};
	
	exports.default = TooltipContainer;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(7);
	
	var _ToolTipText = __webpack_require__(108);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(109);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OHLCTooltip = function (_Component) {
		_inherits(OHLCTooltip, _Component);
	
		function OHLCTooltip() {
			_classCallCheck(this, OHLCTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(OHLCTooltip).apply(this, arguments));
		}
	
		_createClass(OHLCTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var xDisplayFormat = _props.xDisplayFormat;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var accessor = _props.accessor;
				var volumeFormat = _props.volumeFormat;
				var ohlcFormat = _props.ohlcFormat;
	
	
				var displayDate, open, high, low, close, volume;
	
				displayDate = open = high = low = close = volume = "n/a";
	
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
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
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
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
		}]);
	
		return OHLCTooltip;
	}(_react.Component);
	
	OHLCTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	OHLCTooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ToolTipText = __webpack_require__(108);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(109);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SingleValueTooltip = function (_Component) {
		_inherits(SingleValueTooltip, _Component);
	
		function SingleValueTooltip() {
			_classCallCheck(this, SingleValueTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SingleValueTooltip).apply(this, arguments));
		}
	
		_createClass(SingleValueTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
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
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
	
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
				var xDisplayValue = (0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(xAccessor(currentItem)) ? xDisplayFormat(xAccessor(currentItem)) : "n/a";
				var yDisplayValue = (0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(yAccessor(currentItem)) ? yDisplayFormat(yAccessor(currentItem)) : "n/a";
	
				var originProp = this.props.origin;
	
				var origin = _d3.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
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
		}]);
	
		return SingleValueTooltip;
	}(_react.Component);
	
	SingleValueTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	SingleValueTooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _ToolTipText = __webpack_require__(108);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(109);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SingleMAToolTip = function (_Component) {
		_inherits(SingleMAToolTip, _Component);
	
		function SingleMAToolTip(props) {
			_classCallCheck(this, SingleMAToolTip);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SingleMAToolTip).call(this, props));
	
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
	
		function MovingAverageTooltip() {
			_classCallCheck(this, MovingAverageTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(MovingAverageTooltip).apply(this, arguments));
		}
	
		_createClass(MovingAverageTooltip, [{
			key: "render",
			value: function render() {
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var height = _context.height;
				var _props2 = this.props;
				var className = _props2.className;
				var onClick = _props2.onClick;
				var forChart = _props2.forChart;
				var width = _props2.width;
				var fontFamily = _props2.fontFamily;
				var fontSize = _props2.fontSize;
				var originProp = _props2.origin;
				var calculators = _props2.calculators;
				var displayFormat = _props2.displayFormat;
	
	
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
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
							maType: each.type(),
							period: each.windowSize(),
							source: each.source(),
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
							forChart: forChart, onClick: onClick,
							fontFamily: fontFamily, fontSize: fontSize });
					})
				);
			}
		}]);
	
		return MovingAverageTooltip;
	}(_react.Component);
	
	MovingAverageTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		height: _react.PropTypes.number.isRequired
	};
	
	MovingAverageTooltip.propTypes = {
		className: _react.PropTypes.string,
		forChart: _react.PropTypes.number.isRequired,
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(7);
	
	var _ToolTipText = __webpack_require__(108);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(109);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BollingerBandTooltip = function (_Component) {
		_inherits(BollingerBandTooltip, _Component);
	
		function BollingerBandTooltip() {
			_classCallCheck(this, BollingerBandTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BollingerBandTooltip).apply(this, arguments));
		}
	
		_createClass(BollingerBandTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var onClick = _props.onClick;
				var forChart = _props.forChart;
				var displayFormat = _props.displayFormat;
				var calculator = _props.calculator;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
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
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
				var tooltipLabel = _d3.default.functor(calculator.tooltipLabel());
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")",
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
		}]);
	
		return BollingerBandTooltip;
	}(_react.Component);
	
	BollingerBandTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	BollingerBandTooltip.propTypes = {
		className: _react.PropTypes.string,
		forChart: _react.PropTypes.number.isRequired,
		calculator: _react.PropTypes.func.isRequired,
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	var _ToolTipText = __webpack_require__(108);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(109);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RSITooltip = function (_Component) {
		_inherits(RSITooltip, _Component);
	
		function RSITooltip() {
			_classCallCheck(this, RSITooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(RSITooltip).apply(this, arguments));
		}
	
		_createClass(RSITooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var calculator = _props.calculator;
				var displayFormat = _props.displayFormat;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
	
				var yAccessor = calculator.accessor();
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
				var rsi = (0, _utils.isDefined)(currentItem) && yAccessor(currentItem);
				var value = rsi && displayFormat(rsi) || "n/a";
	
				var originProp = this.props.origin;
	
				var origin = _d3.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
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
		}]);
	
		return RSITooltip;
	}(_react.Component);
	
	RSITooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	RSITooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	var _ToolTipText = __webpack_require__(108);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(109);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StochasticTooltip = function (_Component) {
		_inherits(StochasticTooltip, _Component);
	
		function StochasticTooltip() {
			_classCallCheck(this, StochasticTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(StochasticTooltip).apply(this, arguments));
		}
	
		_createClass(StochasticTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var calculator = _props.calculator;
				var displayFormat = _props.displayFormat;
				var children = _props.children;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
	
				var yAccessor = calculator.accessor();
				var stroke = calculator.stroke();
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
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
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
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
		}]);
	
		return StochasticTooltip;
	}(_react.Component);
	
	StochasticTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	StochasticTooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(7);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HoverTooltip = function (_Component) {
		_inherits(HoverTooltip, _Component);
	
		function HoverTooltip() {
			_classCallCheck(this, HoverTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(HoverTooltip).apply(this, arguments));
		}
	
		_createClass(HoverTooltip, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _props = this.props;
				var getCanvasContexts = _props.getCanvasContexts;
				var chartCanvasType = _props.chartCanvasType;
	
	
				if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
					var contexts = getCanvasContexts();
	
					if (contexts) drawOnCanvas(contexts.mouseCoord, this.props);
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
				this.componentWillReceiveProps(this.props);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var draw = drawOnCanvasStatic.bind(null, nextProps);
	
				var temp = nextProps.getAllCanvasDrawCallback().filter(function (each) {
					return each.type === "mouse";
				}).filter(function (each) {
					return each.subType === "HoverTooltip";
				});
				if (temp.length === 0) {
					nextProps.callbackForCanvasDraw({
						type: "mouse",
						subType: "HoverTooltip",
						draw: draw
					});
				} else {
					nextProps.callbackForCanvasDraw(temp[0], {
						type: "mouse",
						subType: "HoverTooltip",
						draw: draw
					});
				}
			}
		}, {
			key: "render",
			value: function render() {
				var backgroundShapeSVG = this.props.backgroundShapeSVG;
				var _props2 = this.props;
				var chartConfig = _props2.chartConfig;
				var currentItem = _props2.currentItem;
				var height = _props2.height;
				var mouseXY = _props2.mouseXY;
				var _props3 = this.props;
				var chartCanvasType = _props3.chartCanvasType;
				var show = _props3.show;
				var xScale = _props3.xScale;
				var bgFill = _props3.bgFill;
				var bgOpacity = _props3.bgOpacity;
	
	
				if (chartCanvasType !== "svg") return null;
				var pointer = helper(this.props, show, xScale, mouseXY, chartConfig, currentItem);
	
				if ((0, _utils.isNotDefined)(pointer)) return null;
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
		// forChart: PropTypes.number.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string,
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		mouseXY: _react.PropTypes.array,
		show: _react.PropTypes.bool,
		xScale: _react.PropTypes.func.isRequired,
	
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
	
	function origin(_ref5) {
		var mouseXY = _ref5.mouseXY;
		var bgheight = _ref5.bgheight;
		var bgwidth = _ref5.bgwidth;
		var xAccessor = _ref5.xAccessor;
		var currentItem = _ref5.currentItem;
		var xScale = _ref5.xScale;
	
		var y = (0, _utils.last)(mouseXY);
	
		var snapX = xScale(xAccessor(currentItem));
		var originX = snapX - bgwidth - PADDING * 2 < 0 ? snapX + PADDING : snapX - bgwidth - PADDING;
		// originX = (x - width - PADDING * 2 < 0) ? x + PADDING : x - width - PADDING;
	
		var originY = y - bgheight / 2;
		return [originX, originY];
	}
	
	function drawOnCanvas(canvasContext, props) {
		var mouseXY = props.mouseXY;
		var chartConfig = props.chartConfig;
		var currentItem = props.currentItem;
		var xScale = props.xScale;
		var show = props.show;
	
		// console.log(props.
	
		drawOnCanvasStatic(props, canvasContext, show, xScale, mouseXY, null, chartConfig, currentItem);
	}
	
	function drawOnCanvasStatic(props, ctx, show, xScale, mouseXY, currentCharts, chartConfig, currentItem) {
		var height = props.height;
		var margin = props.margin;
		var bgFill = props.bgFill;
		var bgOpacity = props.bgOpacity;
		var backgroundShapeCanvas = props.backgroundShapeCanvas;
		var tooltipCanvas = props.tooltipCanvas;
	
	
		var pointer = helper(props, show, xScale, mouseXY, chartConfig, currentItem);
	
		if (!pointer) return;
	
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
	
	function helper(props, show, xScale, mouseXY, chartConfig, currentItem) {
		var origin = props.origin;
		var tooltipContent = props.tooltipContent;
		var xAccessor = props.xAccessor;
		var displayXAccessor = props.displayXAccessor;
		var plotData = props.plotData;
	
	
		if (!show || (0, _utils.isNotDefined)(currentItem)) return;
	
		var xValue = xAccessor(currentItem);
	
		if (!show || (0, _utils.isNotDefined)(xValue)) return;
	
		var _origin = origin(_extends({}, props, { show: show, xScale: xScale, mouseXY: mouseXY, chartConfig: chartConfig, currentItem: currentItem }));
	
		var _origin2 = _slicedToArray(_origin, 2);
	
		var x = _origin2[0];
		var y = _origin2[1];
	
	
		var content = tooltipContent({ currentItem: currentItem, xAccessor: displayXAccessor });
		var centerX = xScale(xValue);
		var drawWidth = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)))) / (plotData.length - 1);
	
		return { x: x, y: y, content: content, centerX: centerX, drawWidth: drawWidth };
	}
	
	exports.default = (0, _pure2.default)(HoverTooltip, {
		margin: _react.PropTypes.object.isRequired,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
	
		getCanvasContexts: _react.PropTypes.func,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string,
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object,
		mouseXY: _react.PropTypes.array,
		xScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		displayXAccessor: _react.PropTypes.func.isRequired,
		show: _react.PropTypes.bool,
		plotData: _react.PropTypes.array,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.fitWidth = exports.SaveChartAsImage = exports.ChartWidthMixin = exports.TypeChooser = undefined;
	
	var _TypeChooser = __webpack_require__(119);
	
	var _TypeChooser2 = _interopRequireDefault(_TypeChooser);
	
	var _ChartWidthMixin = __webpack_require__(120);
	
	var _ChartWidthMixin2 = _interopRequireDefault(_ChartWidthMixin);
	
	var _SaveChartAsImage = __webpack_require__(121);
	
	var _SaveChartAsImage2 = _interopRequireDefault(_SaveChartAsImage);
	
	var _fitWidth = __webpack_require__(123);
	
	var _fitWidth2 = _interopRequireDefault(_fitWidth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.TypeChooser = _TypeChooser2.default;
	exports.ChartWidthMixin = _ChartWidthMixin2.default;
	exports.SaveChartAsImage = _SaveChartAsImage2.default;
	exports.fitWidth = _fitWidth2.default;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TypeChooser = function (_Component) {
		_inherits(TypeChooser, _Component);
	
		function TypeChooser(props) {
			_classCallCheck(this, TypeChooser);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TypeChooser).call(this, props));
	
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
						{ forHtml: "type" },
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ChartWidthMixin = {
		handleWindowResize: function handleWindowResize() {
			var el = _reactDom2.default.findDOMNode(this);
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
			var el = _reactDom2.default.findDOMNode(this);
			// console.log(this.refs, el);
			var w = el.parentNode.clientWidth;
	
			/* eslint-disable react/no-did-mount-set-state */
			this.setState({
				width: w
			});
			/* eslint-enable react/no-did-mount-set-state */
		}
	};
	
	exports.default = ChartWidthMixin;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _saveSvgAsPng = __webpack_require__(122);
	
	var _saveSvgAsPng2 = _interopRequireDefault(_saveSvgAsPng);
	
	var _utils = __webpack_require__(7);
	
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
/* 122 */
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
	    var v = (el.viewBox.baseVal && el.viewBox.baseVal[dim]) ||
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
	    options = options || {};
	    options.scale = options.scale || 1;
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
	      clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
	      clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
	      clone.setAttribute("width", width * options.scale);
	      clone.setAttribute("height", height * options.scale);
	      clone.setAttribute("viewBox", [
	        options.left || 0,
	        options.top || 0,
	        width,
	        height
	      ].join(" "));
	
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
	          if (e instanceof SecurityError) {
	            console.error("Rendered SVG images cannot be downloaded in this browser.");
	            return;
	          } else {
	            throw e;
	          }
	        }
	        cb(png);
	      }
	      image.src = uri;
	    });
	  }
	
	  out$.saveSvgAsPng = function(el, name, options) {
	    options = options || {};
	    out$.svgAsPngUri(el, options, function(uri) {
	      var a = document.createElement('a');
	      a.download = name;
	      a.href = uri;
	      document.body.appendChild(a);
	      a.addEventListener("click", function(e) {
	        a.parentNode.removeChild(a);
	      });
	      a.click();
	    });
	  }
	})();


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = fitWidth;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
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
	
		var ResponsiveComponent = function (_Component) {
			_inherits(ResponsiveComponent, _Component);
	
			function ResponsiveComponent(props) {
				_classCallCheck(this, ResponsiveComponent);
	
				var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResponsiveComponent).call(this, props));
	
				_this.handleWindowResize = _this.handleWindowResize.bind(_this);
				_this.getWrappedInstance = _this.getWrappedInstance.bind(_this);
				return _this;
			}
	
			_createClass(ResponsiveComponent, [{
				key: "componentDidMount",
				value: function componentDidMount() {
					window.addEventListener("resize", this.handleWindowResize);
					var el = _reactDom2.default.findDOMNode(this);
					var w = el.parentNode.clientWidth;
	
					/* eslint-disable react/no-did-mount-set-state */
					this.setState({
						width: w
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
					var el = _reactDom2.default.findDOMNode(this);
					var w = el.parentNode.clientWidth;
					this.setState({
						width: w
					});
				}
			}, {
				key: "getWrappedInstance",
				value: function getWrappedInstance() {
					return this.refs.component;
				}
			}, {
				key: "render",
				value: function render() {
					var ref = withRef ? { ref: "component" } : {};
	
					if (this.state && this.state.width) {
						return _react2.default.createElement(WrappedComponent, _extends({ width: this.state.width }, this.props, ref));
					} else {
						return _react2.default.createElement("div", null);
					}
				}
			}]);
	
			return ResponsiveComponent;
		}(_react.Component);
	
		ResponsiveComponent.displayName = "fitWidth(" + getDisplayName(WrappedComponent) + ")";
	
		return ResponsiveComponent;
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.makeInteractive = exports.Brush = exports.ClickCallback = exports.FibonacciRetracement = exports.TrendLine = undefined;
	
	var _TrendLine = __webpack_require__(125);
	
	var _TrendLine2 = _interopRequireDefault(_TrendLine);
	
	var _FibonacciRetracement = __webpack_require__(127);
	
	var _FibonacciRetracement2 = _interopRequireDefault(_FibonacciRetracement);
	
	var _ClickCallback = __webpack_require__(128);
	
	var _ClickCallback2 = _interopRequireDefault(_ClickCallback);
	
	var _Brush = __webpack_require__(129);
	
	var _Brush2 = _interopRequireDefault(_Brush);
	
	var _makeInteractive = __webpack_require__(126);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.TrendLine = _TrendLine2.default;
	exports.FibonacciRetracement = _FibonacciRetracement2.default;
	exports.ClickCallback = _ClickCallback2.default;
	exports.Brush = _Brush2.default;
	exports.makeInteractive = _makeInteractive2.default;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _makeInteractive = __webpack_require__(126);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getYValue(values, currentValue) {
		var diff = values.map(function (each) {
			return each - currentValue;
		}).reduce(function (diff1, diff2) {
			return Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;
		});
		return currentValue + diff;
	}
	
	var TrendLine = function (_Component) {
		_inherits(TrendLine, _Component);
	
		function TrendLine(props) {
			_classCallCheck(this, TrendLine);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TrendLine).call(this, props));
	
			_this.onMousemove = _this.onMousemove.bind(_this);
			_this.onClick = _this.onClick.bind(_this);
	
			_this.handleEnter = _this.handleEnter.bind(_this);
			_this.handleLeave = _this.handleLeave.bind(_this);
			_this.handleEdgeMouseDown = _this.handleEdgeMouseDown.bind(_this);
			_this.handleEdgeDrag = _this.handleEdgeDrag.bind(_this);
			_this.handleEdgeDrop = _this.handleEdgeDrop.bind(_this);
	
			_this.handleLineMouseDown = _this.handleLineMouseDown.bind(_this);
	
			_this.state = {
				hover: null
			};
			return _this;
		}
	
		_createClass(TrendLine, [{
			key: "removeLast",
			value: function removeLast(interactive) {
				var trends = interactive.trends;
				var start = interactive.start;
	
				if (!start && trends.length > 0) {
					return _extends({}, interactive, { trends: trends.slice(0, trends.length - 1) });
				}
				return interactive;
			}
		}, {
			key: "terminate",
			value: function terminate(interactive) {
				var start = interactive.start;
	
				if (start) {
					return _extends({}, interactive, { start: null });
				}
				return interactive;
			}
		}, {
			key: "onMousemove",
			value: function onMousemove(state) {
				var mouseXY = state.mouseXY;
				var currentItem = state.currentItem;
				var chartConfig = state.chartConfig;
				var interactiveState = state.interactiveState;
				var eventMeta = state.eventMeta;
				var yScale = chartConfig.yScale;
	
				var currentPos = currentPosition(this.props, { eventMeta: eventMeta, mouseXY: mouseXY, currentItem: currentItem, yScale: yScale });
				var status = "inprogress";
	
				return _extends({}, interactiveState, { currentPos: currentPos, status: status });
			}
		}, {
			key: "onClick",
			value: function onClick(state) {
				var mouseXY = state.mouseXY;
				var currentItem = state.currentItem;
				var chartConfig = state.chartConfig;
				var interactiveState = state.interactiveState;
				var eventMeta = state.eventMeta;
				var _props = this.props;
				var enabled = _props.enabled;
				var snapTo = _props.snapTo;
				var snap = _props.snap;
				var shouldDisableSnap = _props.shouldDisableSnap;
				var xAccessor = this.props.xAccessor;
	
	
				if (enabled) {
					var start = interactiveState.start;
					var trends = interactiveState.trends;
					var yScale = chartConfig.yScale;
	
					var _xy = xy(snapTo, snap, shouldDisableSnap, xAccessor, eventMeta, currentItem, mouseXY, yScale);
	
					var _xy2 = _slicedToArray(_xy, 2);
	
					var xValue = _xy2[0];
					var yValue = _xy2[1];
	
	
					if ((0, _utils.isDefined)(start)) {
						return _extends({}, interactiveState, {
							start: null,
							currentPos: null,
							trends: trends.concat({ start: start, end: [xValue, yValue] }),
							status: "complete"
						});
					} else if (eventMeta.button === 0) {
						return _extends({}, interactiveState, {
							start: [xValue, yValue],
							status: "start"
						});
					}
				}
				return interactiveState;
			}
		}, {
			key: "handleEnter",
			value: function handleEnter(idx) {
				this.setState({
					hover: idx
				});
			}
		}, {
			key: "handleLeave",
			value: function handleLeave() {
				this.setState({
					hover: null
				});
			}
		}, {
			key: "handleLineMouseDown",
			value: function handleLineMouseDown(idx, e) {
				var captureDOM = this.refs.trend;
	
				var _props2 = this.props;
				var mouseXY = _props2.mouseXY;
				var chartConfig = _props2.chartConfig;
				var xAccessor = _props2.xAccessor;
				var currentItem = _props2.currentItem;
				var yScale = chartConfig.yScale;
	
	
				var startY = mouseXY[1];
				this.moveStartPosition = [xAccessor(currentItem), yScale.invert(startY)];
	
				var win = (0, _utils.d3Window)(captureDOM);
				_d3.default.select(win).on(_utils.MOUSEMOVE, this.handleLineDrag.bind(this, idx)).on(_utils.MOUSEUP, this.handleLineDrop.bind(this, idx));
				e.preventDefault();
			}
		}, {
			key: "handleLineDrag",
			value: function handleLineDrag(idx) {
				var _props3 = this.props;
				var mouseXY = _props3.mouseXY;
				var chartConfig = _props3.chartConfig;
				var xAccessor = _props3.xAccessor;
				var currentItem = _props3.currentItem;
				var interactiveState = _props3.interactiveState;
				var yScale = chartConfig.yScale;
	
	
				var endXValue = xAccessor(currentItem);
				var endYValue = yScale.invert(mouseXY[1]);
	
				var _moveStartPosition = _slicedToArray(this.moveStartPosition, 2);
	
				var startXValue = _moveStartPosition[0];
				var startYValue = _moveStartPosition[1];
	
	
				var dx = endXValue - startXValue;
				var dy = endYValue - startYValue;
	
				var _interactiveState$tre = interactiveState.trends[idx];
				var start = _interactiveState$tre.start;
				var end = _interactiveState$tre.end;
	
	
				this.setState({
					hover: idx,
					override: {
						index: idx,
						x1: start[0] + dx,
						y1: start[1] + dy,
						x2: end[0] + dx,
						y2: end[1] + dy
					}
				});
			}
		}, {
			key: "handleLineDrop",
			value: function handleLineDrop(idx) {
				var _this2 = this;
	
				var _props4 = this.props;
				var overrideInteractive = _props4.overrideInteractive;
				var interactiveState = _props4.interactiveState;
				var override = this.state.override;
	
	
				if ((0, _utils.isDefined)(override)) {
					var x1 = override.x1;
					var y1 = override.y1;
					var x2 = override.x2;
					var y2 = override.y2;
	
					var newTrend = {
						start: [x1, y1],
						end: [x2, y2]
					};
	
					var trends = interactiveState.trends.map(function (each, i) {
						return i === idx ? newTrend : each;
					});
	
					overrideInteractive({ trends: trends }, function () {
						_this2.setState({
							override: null,
							hover: null
						});
					});
				}
	
				this.moveStartPosition = null;
				var captureDOM = this.refs.trend;
				var win = (0, _utils.d3Window)(captureDOM);
				_d3.default.select(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
			}
		}, {
			key: "handleEdgeMouseDown",
			value: function handleEdgeMouseDown(side, idx, e) {
				var captureDOM = this.refs.trend;
	
				var win = (0, _utils.d3Window)(captureDOM);
				_d3.default.select(win).on(_utils.MOUSEMOVE, this.handleEdgeDrag.bind(this, side, idx)).on(_utils.MOUSEUP, this.handleEdgeDrop.bind(this, side, idx));
				e.preventDefault();
			}
		}, {
			key: "handleEdgeDrag",
			value: function handleEdgeDrag(side, idx) {
				var _props5 = this.props;
				var mouseXY = _props5.mouseXY;
				var chartConfig = _props5.chartConfig;
				var xAccessor = _props5.xAccessor;
				var currentItem = _props5.currentItem;
				var yScale = chartConfig.yScale;
	
	
				var xValue = xAccessor(currentItem);
				var yValue = yScale.invert(mouseXY[1]);
	
				if (side === "left") {
					this.setState({
						hover: idx,
						override: {
							index: idx,
							x1: xValue,
							y1: yValue
						}
					});
				} else {
					this.setState({
						hover: idx,
						override: {
							index: idx,
							x2: xValue,
							y2: yValue
						}
					});
				}
	
				// console.log("DRAG", side, idx, mouseXY)
			}
		}, {
			key: "handleEdgeDrop",
			value: function handleEdgeDrop(side, idx) {
				var _this3 = this;
	
				// console.log("DROP", side, idx)
	
				var captureDOM = this.refs.trend;
				var _props6 = this.props;
				var overrideInteractive = _props6.overrideInteractive;
				var interactiveState = _props6.interactiveState;
	
	
				var trend = interactiveState.trends[idx];
				var newTrend = trend;
	
				var override = this.state.override;
	
				if ((0, _utils.isDefined)(override)) {
					var x1 = override.x1;
					var y1 = override.y1;
					var x2 = override.x2;
					var y2 = override.y2;
	
					if ((0, _utils.isDefined)(x1) && (0, _utils.isDefined)(y1)) {
						newTrend = {
							start: [x1, y1],
							end: trend.end
						};
					} else if ((0, _utils.isDefined)(x2) && (0, _utils.isDefined)(y2)) {
						newTrend = {
							start: trend.start,
							end: [x2, y2]
						};
					}
	
					var trends = interactiveState.trends.map(function (each, i) {
						return i === idx ? newTrend : each;
					});
	
					overrideInteractive({ trends: trends }, function () {
						_this3.setState({
							override: null,
							hover: null
						});
					});
				}
	
				var win = (0, _utils.d3Window)(captureDOM);
				_d3.default.select(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
			}
		}, {
			key: "render",
			value: function render() {
				var _this4 = this;
	
				var _props7 = this.props;
				var enabled = _props7.enabled;
				var endPointCircleFill = _props7.endPointCircleFill;
				var endPointCircleRadius = _props7.endPointCircleRadius;
				var _props8 = this.props;
				var xScale = _props8.xScale;
				var chartConfig = _props8.chartConfig;
				var plotData = _props8.plotData;
				var xAccessor = _props8.xAccessor;
				var interactiveState = _props8.interactiveState;
				var show = _props8.show;
				var yScale = chartConfig.yScale;
				var _props9 = this.props;
				var currentPositionStroke = _props9.currentPositionStroke;
				var currentPositionStrokeWidth = _props9.currentPositionStrokeWidth;
				var currentPositionOpacity = _props9.currentPositionOpacity;
				var currentPositionRadius = _props9.currentPositionRadius;
				var _props10 = this.props;
				var stroke = _props10.stroke;
				var opacity = _props10.opacity;
				var type = _props10.type;
				var currentPos = interactiveState.currentPos;
	
	
				var circle = currentPos && enabled && show ? _react2.default.createElement("circle", { className: "react-stockcharts-avoid-interaction", cx: xScale(currentPos[0]), cy: yScale(currentPos[1]),
					stroke: currentPositionStroke,
					opacity: currentPositionOpacity,
					fill: "none",
					strokeWidth: currentPositionStrokeWidth,
					r: currentPositionRadius }) : null;
	
				var lines = helper(plotData, type, xAccessor, interactiveState);
				var adjustClassName = !enabled ? "react-stockcharts-move-cursor" : "";
	
				var _state = this.state;
				var override = _state.override;
				var hover = _state.hover;
	
	
				var className = enabled || (0, _utils.isDefined)(override) ? "react-stockcharts-avoid-interaction" : "";
	
				return _react2.default.createElement(
					"g",
					{ ref: "trend", className: className },
					circle,
					lines.map(function (coords, idx) {
						var x1 = xScale(getCoordinate(idx, override, coords, "x1"));
						var y1 = yScale(getCoordinate(idx, override, coords, "y1"));
						var x2 = xScale(getCoordinate(idx, override, coords, "x2"));
						var y2 = yScale(getCoordinate(idx, override, coords, "y2"));
	
						var circleOpacity = hover === idx ? 0.5 : 0.1;
						var strokeWidth = hover === idx ? 2 : 1;
	
						return _react2.default.createElement(
							"g",
							{ key: idx },
							_react2.default.createElement("line", { className: adjustClassName,
								x1: x1, y1: y1, x2: x2, y2: y2,
								stroke: stroke, strokeWidth: strokeWidth,
								opacity: opacity }),
							_react2.default.createElement(ClickableLine, { className: adjustClassName, idx: idx,
								onMouseEnter: _this4.handleEnter,
								onMouseLeave: _this4.handleLeave,
								onMouseDown: _this4.handleLineMouseDown,
								x1: x1, y1: y1, x2: x2, y2: y2,
								stroke: stroke, strokeWidth: 8, opacity: 0 }),
							_react2.default.createElement(ClickableCircle, { className: adjustClassName, idx: idx, side: "left",
								onMouseEnter: _this4.handleEnter,
								onMouseLeave: _this4.handleLeave,
								onMouseDown: _this4.handleEdgeMouseDown,
								cx: x1, cy: y1, r: endPointCircleRadius,
								fill: endPointCircleFill, opacity: circleOpacity }),
							_react2.default.createElement(ClickableCircle, { className: adjustClassName, idx: idx, side: "right",
								onMouseEnter: _this4.handleEnter,
								onMouseLeave: _this4.handleLeave,
								onMouseDown: _this4.handleEdgeMouseDown,
								cx: x2, cy: y2, r: endPointCircleRadius,
								fill: endPointCircleFill, opacity: circleOpacity })
						);
					})
				);
			}
		}]);
	
		return TrendLine;
	}(_react.Component);
	
	/* eslint-disable react/prop-types */
	
	
	var ClickableLine = function (_Component2) {
		_inherits(ClickableLine, _Component2);
	
		function ClickableLine(props) {
			_classCallCheck(this, ClickableLine);
	
			var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(ClickableLine).call(this, props));
	
			_this5.handleMouseEnter = _this5.handleMouseEnter.bind(_this5);
			_this5.handleMouseLeave = _this5.handleMouseLeave.bind(_this5);
			_this5.handleMouseDown = _this5.handleMouseDown.bind(_this5);
			return _this5;
		}
	
		_createClass(ClickableLine, [{
			key: "handleMouseEnter",
			value: function handleMouseEnter(e) {
				var _props11 = this.props;
				var idx = _props11.idx;
				var onMouseEnter = _props11.onMouseEnter;
	
				onMouseEnter(idx, e);
			}
		}, {
			key: "handleMouseLeave",
			value: function handleMouseLeave(e) {
				var _props12 = this.props;
				var idx = _props12.idx;
				var onMouseLeave = _props12.onMouseLeave;
	
				onMouseLeave(idx, e);
			}
		}, {
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				var _props13 = this.props;
				var idx = _props13.idx;
				var onMouseDown = _props13.onMouseDown;
	
				onMouseDown(idx, e);
			}
		}, {
			key: "render",
			value: function render() {
				var _props14 = this.props;
				var className = _props14.className;
				var x1 = _props14.x1;
				var x2 = _props14.x2;
				var y1 = _props14.y1;
				var y2 = _props14.y2;
				var stroke = _props14.stroke;
				var strokeWidth = _props14.strokeWidth;
				var opacity = _props14.opacity;
	
	
				return _react2.default.createElement("line", { className: className,
					onMouseEnter: this.handleEnter,
					onMouseLeave: this.handleLeave,
					onMouseDown: this.handleMouseDown,
					x1: x1, y1: y1, x2: x2, y2: y2,
					stroke: stroke, strokeWidth: strokeWidth, opacity: opacity });
			}
		}]);
	
		return ClickableLine;
	}(_react.Component);
	
	var ClickableCircle = function (_Component3) {
		_inherits(ClickableCircle, _Component3);
	
		function ClickableCircle(props) {
			_classCallCheck(this, ClickableCircle);
	
			var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(ClickableCircle).call(this, props));
	
			_this6.handleMouseEnter = _this6.handleMouseEnter.bind(_this6);
			_this6.handleMouseLeave = _this6.handleMouseLeave.bind(_this6);
			_this6.handleMouseDown = _this6.handleMouseDown.bind(_this6);
			return _this6;
		}
	
		_createClass(ClickableCircle, [{
			key: "handleMouseEnter",
			value: function handleMouseEnter(e) {
				var _props15 = this.props;
				var idx = _props15.idx;
				var onMouseEnter = _props15.onMouseEnter;
	
				onMouseEnter(idx, e);
			}
		}, {
			key: "handleMouseLeave",
			value: function handleMouseLeave(e) {
				var _props16 = this.props;
				var idx = _props16.idx;
				var onMouseLeave = _props16.onMouseLeave;
	
				onMouseLeave(idx, e);
			}
		}, {
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				var _props17 = this.props;
				var idx = _props17.idx;
				var side = _props17.side;
				var onMouseDown = _props17.onMouseDown;
	
				onMouseDown(side, idx, e);
			}
		}, {
			key: "render",
			value: function render() {
				var _props18 = this.props;
				var className = _props18.className;
				var cx = _props18.cx;
				var cy = _props18.cy;
				var r = _props18.r;
				var fill = _props18.fill;
				var opacity = _props18.opacity;
	
	
				return _react2.default.createElement("circle", { className: className,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					onMouseDown: this.handleMouseDown,
					cx: cx, cy: cy, r: r,
					fill: fill, opacity: opacity });
			}
		}]);
	
		return ClickableCircle;
	}(_react.Component);
	/* eslint-enable react/prop-types */
	
	function getCoordinate(idx, override, coords, key) {
		if ((0, _utils.isDefined)(override)) {
			var index = override.index;
	
			if (index === idx) {
				if ((0, _utils.isDefined)(override[key])) {
					return override[key];
				}
			}
		}
		return coords[key];
	}
	
	function currentPosition(_ref, _ref2) {
		var enabled = _ref.enabled;
		var snapTo = _ref.snapTo;
		var snap = _ref.snap;
		var shouldDisableSnap = _ref.shouldDisableSnap;
		var xAccessor = _ref.xAccessor;
		var eventMeta = _ref2.eventMeta;
		var mouseXY = _ref2.mouseXY;
		var currentItem = _ref2.currentItem;
		var yScale = _ref2.yScale;
	
		if (enabled && eventMeta && currentItem) {
	
			return xy(snapTo, snap, shouldDisableSnap, xAccessor, eventMeta, currentItem, mouseXY, yScale);
		}
	}
	
	function xy(snapTo, snap, shouldDisableSnap, xAccessor, eventMeta, currentItem, mouseXY, yScale) {
		var yValue = snap && !shouldDisableSnap(eventMeta) ? getYValue(snapTo(currentItem), yScale.invert(mouseXY[1])) : yScale.invert(mouseXY[1]);
		var xValue = xAccessor(currentItem);
	
		return [xValue, yValue];
	}
	
	function helper(plotData, type, xAccessor, interactive /* , chartConfig */) {
		var currentPos = interactive.currentPos;
		var start = interactive.start;
		var trends = interactive.trends;
	
		var temp = trends;
		if (start && currentPos) {
			temp = temp.concat({ start: start, end: currentPos });
		}
		var lines = temp.filter(function (each) {
			return each.start[0] !== each.end[0];
		}).map(function (each) {
			return generateLine(type, each.start, each.end, xAccessor, plotData);
		});
	
		return lines;
	}
	
	function generateLine(type, start, end, xAccessor, plotData) {
		/* if (end[0] - start[0] === 0) {
	 	// vertical line
	 	throw new Error("Trendline cannot be a vertical line")
	 } */
		var m /* slope */ = (end[1] - start[1]) / (end[0] - start[0]);
		var b /* y intercept */ = -1 * m * end[0] + end[1];
		// y = m * x + b
		var x1 = type === "XLINE" ? xAccessor(plotData[0]) : start[0]; // RAY or LINE start is the same
	
		var y1 = m * x1 + b;
	
		var x2 = type === "XLINE" ? xAccessor((0, _utils.last)(plotData)) : type === "RAY" ? end[0] > start[0] ? xAccessor((0, _utils.last)(plotData)) : xAccessor((0, _utils.head)(plotData)) : end[0];
		var y2 = m * x2 + b;
		return { x1: x1, y1: y1, x2: x2, y2: y2 };
	}
	
	TrendLine.propTypes = {
		snap: _react.PropTypes.bool.isRequired,
		show: _react.PropTypes.bool,
		enabled: _react.PropTypes.bool.isRequired,
		snapTo: _react.PropTypes.func,
		shouldDisableSnap: _react.PropTypes.func.isRequired,
		chartCanvasType: _react.PropTypes.string,
		chartConfig: _react.PropTypes.object,
		plotData: _react.PropTypes.array,
		xScale: _react.PropTypes.func,
		xAccessor: _react.PropTypes.func,
		onStart: _react.PropTypes.func.isRequired,
		onComplete: _react.PropTypes.func.isRequired,
		interactive: _react.PropTypes.object,
		currentPositionStroke: _react.PropTypes.string,
		currentPositionStrokeWidth: _react.PropTypes.number,
		currentPositionOpacity: _react.PropTypes.number,
		currentPositionRadius: _react.PropTypes.number,
		stroke: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		type: _react.PropTypes.oneOf(["XLINE", // extends from -Infinity to +Infinity
		"RAY", // extends to +/-Infinity in one direction
		"LINE"]),
		interactiveState: _react.PropTypes.object,
		currentItem: _react.PropTypes.object,
		mouseXY: _react.PropTypes.array,
		overrideInteractive: _react.PropTypes.func,
		endPointCircleFill: _react.PropTypes.string,
		endPointCircleRadius: _react.PropTypes.number
	};
	
	TrendLine.defaultProps = {
		stroke: "#000000",
		type: "XLINE",
		opacity: 0.7,
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
		endPointCircleRadius: 5
	};
	
	exports.default = (0, _makeInteractive2.default)(TrendLine, { trends: [] });

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = makeInteractive;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getDisplayName(Series) {
		var name = Series.displayName || Series.name || "Series";
		return name;
	}
	
	function makeInteractive(InteractiveComponent, initialState) {
		var InteractiveComponentWrapper = function (_Component) {
			_inherits(InteractiveComponentWrapper, _Component);
	
			function InteractiveComponentWrapper(props) {
				_classCallCheck(this, InteractiveComponentWrapper);
	
				// this.subscription = this.subscription.bind(this);
	
				var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InteractiveComponentWrapper).call(this, props));
	
				_this.updateInteractiveState = _this.updateInteractiveState.bind(_this);
				// var { subscribe, chartId } = props;
	
				// this.subscriptionIds = subscription.map(each => subscribe(chartId, each, this.subscription.bind(this, each)));
				_this.panHandler = _this.panHandler.bind(_this);
				_this.overrideInteractive = _this.overrideInteractive.bind(_this);
				return _this;
			}
	
			_createClass(InteractiveComponentWrapper, [{
				key: "panHandler",
				value: function panHandler(propOverride) {
					var _props = this.props;
					var forChart = _props.forChart;
					var id = _props.id;
					var getInteractiveState = _props.getInteractiveState;
					var chartConfig = propOverride.chartConfig;
	
	
					var singleChartConfig = chartConfig.filter(function (each) {
						return each.id === forChart;
					})[0];
	
					this.setState(_extends({}, propOverride, {
						chartConfig: singleChartConfig,
						interactiveState: getInteractiveState(forChart, id, initialState)
					}));
				}
			}, {
				key: "updateInteractiveState",
				value: function updateInteractiveState(interactive) {
					var _props2 = this.props;
					var setInteractiveState = _props2.setInteractiveState;
					var id = _props2.id;
					var forChart = _props2.forChart;
	
					setInteractiveState(id, forChart, interactive);
				}
			}, {
				key: "overrideInteractive",
				value: function overrideInteractive(newInteractiveState) {
					var callback = arguments.length <= 1 || arguments[1] === undefined ? _utils.noop : arguments[1];
	
					this.updateInteractiveState(newInteractiveState);
	
					this.setState({
						interactiveState: newInteractiveState
					}, callback);
				}
			}, {
				key: "componentWillMount",
				value: function componentWillMount() {
					this.componentWillReceiveProps(this.props);
				}
			}, {
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps) {
					var _this2 = this;
	
					var plotData = nextProps.plotData;
					var xScale = nextProps.xScale;
					var chartConfig = nextProps.chartConfig;
					var forChart = nextProps.forChart;
					var id = nextProps.id;
					var getInteractiveState = nextProps.getInteractiveState;
					var mouseXY = nextProps.mouseXY;
					var currentItem = nextProps.currentItem;
					var currentCharts = nextProps.currentCharts;
					var eventMeta = nextProps.eventMeta;
	
	
					var singleChartConfig = chartConfig.filter(function (each) {
						return each.id === forChart;
					})[0];
					var interactiveState = getInteractiveState(forChart, id, initialState);
	
					var newState = {
						xScale: xScale,
						plotData: plotData,
						mouseXY: mouseXY,
						currentCharts: currentCharts,
						currentItem: currentItem,
						chartConfig: singleChartConfig,
						interactiveState: interactiveState,
						eventMeta: eventMeta
					};
	
					if ((0, _utils.isDefined)(eventMeta)) {
						// console.log(eventMeta.type)
						eventMeta.type.forEach(function (each) {
							var invoke = _this2.refs.interactive["on" + (0, _utils.capitalizeFirst)(each)];
							if ((0, _utils.isDefined)(invoke)) {
								interactiveState = invoke(newState);
							}
						});
					}
	
					this.updateInteractiveState(interactiveState);
	
					var chartCanvasType = nextProps.chartCanvasType;
					var callbackForCanvasDraw = nextProps.callbackForCanvasDraw;
					var getAllCanvasDrawCallback = nextProps.getAllCanvasDrawCallback;
	
	
					if (chartCanvasType !== "svg") {
						var temp = getAllCanvasDrawCallback().filter(function (each) {
							return each.type === "annotation";
						}).filter(function (each) {
							return each.id === id;
						});
						if (temp.length === 0) {
							callbackForCanvasDraw({
								id: id,
								type: "annotation",
								draw: this.panHandler
							});
						} else {
							callbackForCanvasDraw(temp[0], {
								id: id,
								type: "annotation",
								draw: this.panHandler
							});
						}
					}
	
					this.setState(_extends({}, newState, {
						interactiveState: interactiveState
					}), function () {
						if ((0, _utils.isDefined)(interactiveState)) {
							var _interactiveState = interactiveState;
							var status = _interactiveState.status;
							var callbackProps = _interactiveState.callbackProps;
	
							if ((0, _utils.isDefined)(status)) {
								var callback = "on" + (0, _utils.capitalizeFirst)(status);
	
								if ((0, _utils.isDefined)(_this2.props[callback])) {
	
									_this2.props[callback].apply(null, callbackProps);
								}
							}
						}
					});
				}
			}, {
				key: "removeLast",
				value: function removeLast() {
					var _props3 = this.props;
					var id = _props3.id;
					var forChart = _props3.forChart;
					var getInteractiveState = _props3.getInteractiveState;
	
					var interactive = getInteractiveState(forChart, id, initialState);
	
					if (this.refs.interactive.removeLast) {
						var newInteractive = this.refs.interactive.removeLast(interactive);
						this.updateInteractiveState(newInteractive);
	
						this.setState({
							interactiveState: newInteractive
						});
					}
				}
			}, {
				key: "terminate",
				value: function terminate() {
					var _props4 = this.props;
					var id = _props4.id;
					var forChart = _props4.forChart;
					var getInteractiveState = _props4.getInteractiveState;
	
					var interactive = getInteractiveState(forChart, id, initialState);
	
					if (this.refs.interactive.terminate) {
						var newInteractive = this.refs.interactive.terminate(interactive);
						this.updateInteractiveState(newInteractive);
	
						this.setState({
							interactiveState: newInteractive
						});
					}
				}
			}, {
				key: "render",
				value: function render() {
					/* var { id, forChart, getInteractiveState } = this.props;
	    var interactive = getInteractiveState(forChart, id, initialState);
	    	console.log(interactive)*/
					return _react2.default.createElement(InteractiveComponent, _extends({
						ref: "interactive"
					}, this.props, this.state, {
						overrideInteractive: this.overrideInteractive }));
					// return null;
				}
			}]);
	
			return InteractiveComponentWrapper;
		}(_react.Component);
	
		InteractiveComponentWrapper.displayName = getDisplayName(InteractiveComponent);
	
		InteractiveComponentWrapper.propTypes = {
			id: _react.PropTypes.number.isRequired,
			enabled: _react.PropTypes.bool.isRequired,
			forChart: _react.PropTypes.number.isRequired,
	
			/* comes from pure converted from context to prop - START */
			getInteractiveState: _react.PropTypes.func.isRequired,
			getCanvasContexts: _react.PropTypes.func,
			callbackForCanvasDraw: _react.PropTypes.func.isRequired,
			getAllCanvasDrawCallback: _react.PropTypes.func,
			chartCanvasType: _react.PropTypes.string.isRequired,
			setInteractiveState: _react.PropTypes.func.isRequired,
			plotData: _react.PropTypes.array.isRequired,
			xAccessor: _react.PropTypes.func.isRequired,
			xScale: _react.PropTypes.func.isRequired,
			chartConfig: _react.PropTypes.array.isRequired,
			currentItem: _react.PropTypes.object,
			show: _react.PropTypes.bool.isRequired,
			displayXAccessor: _react.PropTypes.func.isRequired
		};
	
		return (0, _pure2.default)(InteractiveComponentWrapper, {
			callbackForCanvasDraw: _react.PropTypes.func.isRequired,
			getAllCanvasDrawCallback: _react.PropTypes.func,
			chartCanvasType: _react.PropTypes.string,
	
			getInteractiveState: _react.PropTypes.func.isRequired,
			setInteractiveState: _react.PropTypes.func.isRequired,
			plotData: _react.PropTypes.array.isRequired,
			xAccessor: _react.PropTypes.func.isRequired,
			xScale: _react.PropTypes.func.isRequired,
			chartConfig: _react.PropTypes.array.isRequired,
			mouseXY: _react.PropTypes.array,
			currentItem: _react.PropTypes.object,
			currentCharts: _react.PropTypes.arrayOf(_react.PropTypes.number),
			eventMeta: _react.PropTypes.object,
			show: _react.PropTypes.bool.isRequired,
			displayXAccessor: _react.PropTypes.func.isRequired
		});
	}
	exports.default = makeInteractive;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(3);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _makeInteractive = __webpack_require__(126);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FibonacciRetracement = function (_Component) {
		_inherits(FibonacciRetracement, _Component);
	
		function FibonacciRetracement(props) {
			_classCallCheck(this, FibonacciRetracement);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FibonacciRetracement).call(this, props));
	
			_this.onMousemove = _this.onMousemove.bind(_this);
			_this.onClick = _this.onClick.bind(_this);
			_this.handleMoveStart = _this.handleMoveStart.bind(_this);
			_this.handleResizeStart = _this.handleResizeStart.bind(_this);
	
			_this.state = {
				hover: false
			};
			return _this;
		}
	
		_createClass(FibonacciRetracement, [{
			key: "removeLast",
			value: function removeLast(interactive) {
				var retracements = interactive.retracements;
				var start = interactive.start;
	
				if (!start && retracements.length > 0) {
					return _extends({}, interactive, { retracements: retracements.slice(0, retracements.length - 1) });
				}
				return interactive;
			}
		}, {
			key: "terminate",
			value: function terminate(interactive) {
				var start = interactive.start;
	
				if (start) {
					return _extends({}, interactive, { start: null });
				}
				return interactive;
			}
		}, {
			key: "handleMoveStart",
			value: function handleMoveStart(idx, lineIndex, e) {
				var _props = this.props;
				var mouseXY = _props.mouseXY;
				var chartConfig = _props.chartConfig;
				var xAccessor = _props.xAccessor;
				var currentItem = _props.currentItem;
				var yScale = chartConfig.yScale;
	
	
				var startY = mouseXY[1];
	
				this.moveStartPosition = [xAccessor(currentItem), yScale.invert(startY)];
	
				var win = (0, _utils.d3Window)(this.refs.fib);
				_d3.default.select(win).on(_utils.MOUSEMOVE, this.handleMove.bind(this, idx)).on(_utils.MOUSEUP, this.handleMoveEnd.bind(this, idx));
	
				e.preventDefault();
			}
		}, {
			key: "handleResizeStart",
			value: function handleResizeStart(idx, line, e) {
				// var { mouseXY } = this.props;
	
				console.log(idx, line);
				e.preventDefault();
			}
		}, {
			key: "handleMove",
			value: function handleMove(idx) {
				var _props2 = this.props;
				var mouseXY = _props2.mouseXY;
				var interactiveState = _props2.interactiveState;
				var chartConfig = _props2.chartConfig;
				var _props3 = this.props;
				var type = _props3.type;
				var xAccessor = _props3.xAccessor;
				var currentItem = _props3.currentItem;
				var plotData = _props3.plotData;
				var yScale = chartConfig.yScale;
	
				var endY = mouseXY[1];
	
				var _moveStartPosition = _slicedToArray(this.moveStartPosition, 2);
	
				var startXValue = _moveStartPosition[0];
				var startYValue = _moveStartPosition[1];
				var endXValue = xAccessor(currentItem);
				var endYValue = yScale.invert(endY);
	
	
				var dx = endXValue - startXValue;
				var dy = endYValue - startYValue;
	
				var _interactiveState$ret = interactiveState.retracements[idx];
				var start = _interactiveState$ret.start;
				var end = _interactiveState$ret.end;
	
				var newStart = [start[0] + dx, start[1] + dy];
				var newEnd = [end[0] + dx, end[1] + dy];
	
				var retracement = generateLine(type, newStart, newEnd, xAccessor, plotData);
	
				var override = {
					index: idx,
					retracement: retracement,
					start: newStart,
					end: newEnd
				};
	
				this.setState({
					override: override
				});
			}
		}, {
			key: "handleMoveEnd",
			value: function handleMoveEnd(idx) {
				var _this2 = this;
	
				var win = (0, _utils.d3Window)(this.refs.fib);
				var _props4 = this.props;
				var overrideInteractive = _props4.overrideInteractive;
				var interactiveState = _props4.interactiveState;
				var override = this.state.override;
				var start = override.start;
				var end = override.end;
	
	
				if ((0, _utils.isDefined)(override)) {
					var retracements = interactiveState.retracements.map(function (each, i) {
						return i === idx ? { start: start, end: end } : each;
					});
	
					overrideInteractive({ retracements: retracements }, function () {
						_this2.setState({
							override: null
						});
					});
				}
				this.moveStartPosition = null;
				_d3.default.select(win).on(_utils.MOUSEMOVE, null).on(_utils.MOUSEUP, null);
			}
		}, {
			key: "isStart",
			value: function isStart(interactive) {
				return interactive.status === "start";
			}
		}, {
			key: "isComplete",
			value: function isComplete(interactive) {
				return interactive.status === "complete";
			}
		}, {
			key: "onMousemove",
			value: function onMousemove(state) {
				var mouseXY = state.mouseXY;
				var currentItem = state.currentItem;
				var chartConfig = state.chartConfig;
				var interactiveState = state.interactiveState;
				var _props5 = this.props;
				var enabled = _props5.enabled;
				var xAccessor = _props5.xAccessor;
	
				if (enabled) {
					var yScale = chartConfig.yScale;
	
	
					var yValue = yScale.invert(mouseXY[1]);
					var xValue = xAccessor(currentItem);
	
					if (interactiveState.start) {
						var status = "inprogress";
						return _extends({}, interactiveState, { tempEnd: [xValue, yValue], status: status });
					}
				}
				return interactiveState;
			}
		}, {
			key: "onClick",
			value: function onClick(state) {
				var mouseXY = state.mouseXY;
				var currentItem = state.currentItem;
				var chartConfig = state.chartConfig;
				var interactiveState = state.interactiveState;
				var eventMeta = state.eventMeta;
				var _props6 = this.props;
				var enabled = _props6.enabled;
				var xAccessor = _props6.xAccessor;
	
				if (enabled) {
					var start = interactiveState.start;
					var retracements = interactiveState.retracements;
					var yScale = chartConfig.yScale;
	
	
					var yValue = yScale.invert(mouseXY[1]);
					var xValue = xAccessor(currentItem);
	
					if (start) {
						return _extends({}, interactiveState, {
							start: null,
							tempEnd: null,
							retracements: retracements.concat({ start: start, end: [xValue, yValue] }),
							status: "complete"
						});
					} else if (eventMeta.button === 0) {
						return _extends({}, interactiveState, {
							start: [xValue, yValue],
							tempEnd: null,
							status: "start"
						});
					}
				}
				return interactiveState;
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;
	
				var _props7 = this.props;
				var chartConfig = _props7.chartConfig;
				var plotData = _props7.plotData;
				var xScale = _props7.xScale;
				var xAccessor = _props7.xAccessor;
				var interactiveState = _props7.interactiveState;
				var _props8 = this.props;
				var stroke = _props8.stroke;
				var opacity = _props8.opacity;
				var fontFamily = _props8.fontFamily;
				var fontSize = _props8.fontSize;
				var fontStroke = _props8.fontStroke;
				var type = _props8.type;
				var enabled = _props8.enabled;
				var override = this.state.override;
				var yScale = chartConfig.yScale;
	
				var retracements = helper(plotData, type, xAccessor, interactiveState, chartConfig);
				var className = enabled || (0, _utils.isDefined)(override) ? "react-stockcharts-avoid-interaction" : "";
				return _react2.default.createElement(
					"g",
					{ className: className, ref: "fib" },
					retracements.map(function (eachRetracement, idx) {
						if ((0, _utils.isDefined)(override) && idx === override.index) {
							eachRetracement = override.retracement;
						}
						var dir = eachRetracement[0].y1 > eachRetracement[eachRetracement.length - 1].y1 ? 3 : -1.3;
	
						return _react2.default.createElement(
							"g",
							{ key: idx },
							eachRetracement.map(function (line, i) {
								var text = line.y.toFixed(2) + " (" + line.percent.toFixed(2) + "%)";
	
								var _ref = enabled ? {} : i === 0 || i === eachRetracement.length - 1 ? {
									className: "react-stockcharts-ns-resize-cursor",
									onMouseDown: _this3.handleResizeStart
								} : {
									className: "react-stockcharts-move-cursor",
									onMouseDown: _this3.handleMoveStart
								};
	
								var cursorClassName = _ref.className;
								var onMouseDown = _ref.onMouseDown;
	
	
								return _react2.default.createElement(EachRetracement, { key: i, idx: idx, lineIndex: i,
									className: cursorClassName,
									onMouseDown: onMouseDown,
									x1: xScale(line.x1),
									x2: xScale(line.x2),
									y: yScale(line.y),
									stroke: stroke,
									opacity: opacity,
									fontFamily: fontFamily,
									fontSize: fontSize,
									fontStroke: fontStroke,
									text: text,
									textX: xScale(Math.min(line.x1, line.x2)) + 10,
									textY: yScale(line.y) + dir * 4
								});
							})
						);
					})
				);
			}
		}]);
	
		return FibonacciRetracement;
	}(_react.Component);
	
	/* eslint-disable react/prop-types */
	
	
	var EachRetracement = function (_Component2) {
		_inherits(EachRetracement, _Component2);
	
		function EachRetracement(props) {
			_classCallCheck(this, EachRetracement);
	
			var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(EachRetracement).call(this, props));
	
			_this4.handleMouseDown = _this4.handleMouseDown.bind(_this4);
			return _this4;
		}
	
		_createClass(EachRetracement, [{
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				var _props9 = this.props;
				var idx = _props9.idx;
				var lineIndex = _props9.lineIndex;
				var onMouseDown = _props9.onMouseDown;
	
				onMouseDown(idx, lineIndex, e);
			}
		}, {
			key: "render",
			value: function render() {
				var _props10 = this.props;
				var className = _props10.className;
				var x1 = _props10.x1;
				var x2 = _props10.x2;
				var y = _props10.y;
				var stroke = _props10.stroke;
				var opacity = _props10.opacity;
				var fontFamily = _props10.fontFamily;
				var fontSize = _props10.fontSize;
				var fontStroke = _props10.fontStroke;
				var _props11 = this.props;
				var text = _props11.text;
				var textX = _props11.textX;
				var textY = _props11.textY;
	
				return _react2.default.createElement(
					"g",
					{ className: className,
						onMouseDown: this.handleMouseDown },
					_react2.default.createElement("line", {
						x1: x1, y1: y,
						x2: x2, y2: y,
						stroke: stroke, opacity: opacity }),
					_react2.default.createElement("line", {
						x1: x1, y1: y,
						x2: x2, y2: y,
						stroke: stroke, strokeWidth: 7, opacity: 0 }),
					_react2.default.createElement(
						"text",
						{ x: textX, y: textY,
							fontFamily: fontFamily, fontSize: fontSize, fill: fontStroke },
						text
					)
				);
			}
		}]);
	
		return EachRetracement;
	}(_react.Component);
	/* eslint-enable react/prop-types */
	
	function helper(plotData, type, xAccessor, interactive /* , chartConfig */) {
		var retracements = interactive.retracements;
		var start = interactive.start;
		var tempEnd = interactive.tempEnd;
	
	
		var temp = retracements;
	
		if (start && tempEnd) {
			temp = temp.concat({ start: start, end: tempEnd });
		}
		var lines = temp.map(function (each) {
			return generateLine(type, each.start, each.end, xAccessor, plotData);
		});
	
		return lines;
	}
	
	function generateLine(type, start, end, xAccessor, plotData) {
		var dy = end[1] - start[1];
		var retracements = [100, 61.8, 50, 38.2, 23.6, 0].map(function (each) {
			return {
				percent: each,
				x1: type === "EXTEND" ? xAccessor((0, _utils.head)(plotData)) : start[0],
				x2: type === "EXTEND" ? xAccessor((0, _utils.last)(plotData)) : end[0],
				y: end[1] - each / 100 * dy
			};
		});
	
		return retracements;
	}
	
	FibonacciRetracement.propTypes = {
		snap: _react.PropTypes.bool.isRequired,
		enabled: _react.PropTypes.bool.isRequired,
		snapTo: _react.PropTypes.func,
		fontFamily: _react.PropTypes.string.isRequired,
		fontSize: _react.PropTypes.number.isRequired,
		chartCanvasType: _react.PropTypes.string,
		chartConfig: _react.PropTypes.object,
		plotData: _react.PropTypes.array,
		xAccessor: _react.PropTypes.func,
		xScale: _react.PropTypes.func,
		interactive: _react.PropTypes.object,
		width: _react.PropTypes.number,
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
		overrideInteractive: _react.PropTypes.func
	};
	
	FibonacciRetracement.defaultProps = {
		snap: true,
		enabled: true,
		stroke: "#000000",
		opacity: 0.4,
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 10,
		fontStroke: "#000000",
		type: "EXTEND"
	
	};
	
	exports.default = (0, _makeInteractive2.default)(FibonacciRetracement, { retracements: [] });

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _makeInteractive = __webpack_require__(126);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ClickCallback = function (_Component) {
		_inherits(ClickCallback, _Component);
	
		function ClickCallback(props) {
			_classCallCheck(this, ClickCallback);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClickCallback).call(this, props));
	
			_this.onClick = _this.onClick.bind(_this);
			return _this;
		}
	
		_createClass(ClickCallback, [{
			key: "onClick",
			value: function onClick(state) {
				var mouseXY = state.mouseXY;
				var currentItem = state.currentItem;
				var chartConfig = state.chartConfig;
				var interactiveState = state.interactiveState;
				var eventMeta = state.eventMeta;
				var _props = this.props;
				var onClick = _props.onClick;
				var displayXAccessor = _props.displayXAccessor;
				var yScale = chartConfig.yScale;
	
	
				var yValue = yScale.invert(mouseXY[1]);
				var xValue = displayXAccessor(currentItem);
				onClick({
					xy: [xValue, yValue],
					mouseXY: mouseXY,
					currentItem: currentItem
				}, eventMeta);
				return interactiveState;
			}
		}, {
			key: "render",
			value: function render() {
				return null;
			}
		}]);
	
		return ClickCallback;
	}(_react.Component);
	
	ClickCallback.drawOnCanvas = _utils.noop;
	
	ClickCallback.propTypes = {
		onClick: _react.PropTypes.func.isRequired,
		/* comes from pure converted from context to prop - START */
		displayXAccessor: _react.PropTypes.func.isRequired
	};
	
	ClickCallback.defaultProps = {
		onClick: function onClick(e) {
			console.log(e);
		}
	};
	
	exports.default = (0, _makeInteractive2.default)(ClickCallback);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _makeInteractive = __webpack_require__(126);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Brush = function (_Component) {
		_inherits(Brush, _Component);
	
		function Brush(props) {
			_classCallCheck(this, Brush);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Brush).call(this, props));
	
			_this.onMousemove = _this.onMousemove.bind(_this);
			_this.onClick = _this.onClick.bind(_this);
			return _this;
		}
	
		_createClass(Brush, [{
			key: "terminate",
			value: function terminate() {
				return {
					x1: null, y1: null,
					x2: null, y2: null,
					startItem: null,
					startClick: null,
					status: null
				};
			}
		}, {
			key: "onMousemove",
			value: function onMousemove(state) {
				var mouseXY = state.mouseXY;
				var currentItem = state.currentItem;
				var chartConfig = state.chartConfig;
				var interactiveState = state.interactiveState;
				var _props = this.props;
				var enabled = _props.enabled;
				var xAccessor = _props.xAccessor;
				var x1 = interactiveState.x1;
				var y1 = interactiveState.y1;
	
	
				var status = "mousemove";
				if (enabled && (0, _utils.isDefined)(x1) && (0, _utils.isDefined)(y1)) {
					var yScale = chartConfig.yScale;
	
	
					var x2 = xAccessor(currentItem);
					var y2 = yScale.invert(mouseXY[1]);
	
					return _extends({}, interactiveState, { x2: x2, y2: y2, status: status });
				}
				return _extends({}, interactiveState, { status: status, callbackProps: null });
			}
		}, {
			key: "onClick",
			value: function onClick(state) {
				var mouseXY = state.mouseXY;
				var currentItem = state.currentItem;
				var chartConfig = state.chartConfig;
				var interactiveState = state.interactiveState;
				var eventMeta = state.eventMeta;
				var _props2 = this.props;
				var displayXAccessor = _props2.displayXAccessor;
				var xAccessor = _props2.xAccessor;
				var enabled = this.props.enabled;
	
	
				if (enabled) {
					var x1 = interactiveState.x1;
					var y1 = interactiveState.y1;
					var startItem = interactiveState.startItem;
					var startClick = interactiveState.startClick;
					var yScale = chartConfig.yScale;
	
	
					var xValue = xAccessor(currentItem);
					var yValue = yScale.invert(mouseXY[1]);
	
					if (interactiveState.status === "brush") {
						return _extends({}, interactiveState, {
							status: null
						});
					} else if ((0, _utils.isDefined)(x1)) {
						var callbackProps = [{
							x1: displayXAccessor(startItem),
							y1: y1,
							x2: displayXAccessor(currentItem),
							y2: yValue,
							startItem: startItem,
							currentItem: currentItem,
							startClick: startClick,
							mouseXY: mouseXY
						}, eventMeta];
	
						var interactive = {
							// ...interactiveState,
							x1: null, y1: null,
							x2: null, y2: null,
							startItem: null,
							startClick: null,
							status: "brush",
							callbackProps: callbackProps
						};
						// return { interactive: onCompleteBrushCoords, callback: onCompleteCallback };
						return interactive;
					} else if (eventMeta.button === 0) {
	
						return {
							x1: xValue,
							y1: yValue,
							startItem: currentItem,
							startClick: mouseXY,
							x2: null,
							y2: null,
							status: "start"
						};
					}
				}
				return interactiveState;
			}
		}, {
			key: "render",
			value: function render() {
				var _props3 = this.props;
				var chartConfig = _props3.chartConfig;
				var plotData = _props3.plotData;
				var xScale = _props3.xScale;
				var xAccessor = _props3.xAccessor;
				var interactiveState = _props3.interactiveState;
				var enabled = _props3.enabled;
				var _props4 = this.props;
				var type = _props4.type;
				var fill = _props4.fill;
				var stroke = _props4.stroke;
				var opacity = _props4.opacity;
				var x1 = interactiveState.x1;
				var y1 = interactiveState.y1;
				var x2 = interactiveState.x2;
				var y2 = interactiveState.y2;
	
	
				if (enabled && (0, _utils.isDefined)(x1) && (0, _utils.isDefined)(y1) && (0, _utils.isDefined)(x2) && (0, _utils.isDefined)(y2)) {
					var brush = helper(type, plotData, xScale, xAccessor, chartConfig, { x1: x1, y1: y1, x2: x2, y2: y2 });
					return _react2.default.createElement("rect", _extends({ className: "react-stockcharts-avoid-interaction"
					}, brush, { fill: fill, stroke: stroke, fillOpacity: opacity }));
				}
				return null;
			}
		}]);
	
		return Brush;
	}(_react.Component);
	
	function helper(type, plotData, xScale, xAccessor, chartConfig, _ref) {
		var x1 = _ref.x1;
		var y1 = _ref.y1;
		var x2 = _ref.x2;
		var y2 = _ref.y2;
		var yScale = chartConfig.yScale;
	
	
		var left = Math.min(x1, x2);
		var right = Math.max(x1, x2);
	
		var top = Math.max(y1, y2);
		var bottom = Math.min(y1, y2);
	
		var x = xScale(left);
		var width = xScale(right) - xScale(left);
	
		var y = type === "1D" ? 0 : yScale(top);
		var height = type === "1D" ? chartConfig.height : yScale(bottom) - yScale(top);
	
		// console.log(chartConfig);
		return {
			x: x,
			y: y,
			width: width,
			height: height
		};
	}
	
	Brush.propTypes = {
		enabled: _react.PropTypes.bool.isRequired,
		onStart: _react.PropTypes.func.isRequired,
		onBrush: _react.PropTypes.func.isRequired,
	
		type: _react.PropTypes.oneOf(["1D", "2D"]),
		chartCanvasType: _react.PropTypes.string,
		chartConfig: _react.PropTypes.object,
		plotData: _react.PropTypes.array,
		xAccessor: _react.PropTypes.func,
		xScale: _react.PropTypes.func,
		interactive: _react.PropTypes.object,
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		displayXAccessor: _react.PropTypes.func,
		interactiveState: _react.PropTypes.object
	};
	
	Brush.defaultProps = {
		type: "2D",
		stroke: "#000000",
		opacity: 0.3,
		fill: "#3h3h3h",
		onBrush: _utils.noop,
		onStart: _utils.noop
	};
	
	exports.default = (0, _makeInteractive2.default)(Brush, {});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(134)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./re-stock.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./re-stock.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\naside table tbody > tr > td,\naside table tbody > tr > th,\naside table tfoot > tr > td,\naside table tfoot > tr > th,\naside table thead > tr > td,\naside table thead > tr > th {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #DDD;\n}\n\na.button {\n  background: transparent url(" + __webpack_require__(133) + ") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important;\n}\n\na.button small {\n  display: inline;\n  font-size: 13px;\n  margin-top: 15px;\n}\n\n.dark {\n  background: #303030;\n}\n\n.dark .react-stockcharts-tooltip {\n  fill: white;\n}\n\n.dark .react-stockcharts-tooltip-label {\n  fill: yellow;\n}\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white;\n}\n\n.jumbotron a {\n  color: yellow;\n}\n\n.top-spacing {\n  padding-top: 10px;\n}\n\n.navbar {\n  background-color: steelblue;\n}\n\n.navbar a {\n  color: white;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 5px 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-size: 13px;\n}\n\n.nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\nimg[alt=\"Done\"] {\n  max-width: 20px;\n  max-height: 20px;\n  padding-bottom: 4px;\n}\n", ""]);
	
	// exports


/***/ },
/* 132 */
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
/* 133 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABQCAQAAADykSIGAAAF1UlEQVR4Ae3df4zXdR3A8cfnvnccd7i7gwMiCCE6BzlwImVFpqgnykANZ66RawHTQJrnVizJymwENKUcJSBjsEqyJrIEQiHQSoutWBA4BYwLGCi/Tu7O7pDv/fj0R2vfHdx9J3ef7925vR9/v/577j6/vrfXO9IjgrhYkb4K0OR9jc4BEMUATHe7z/mEAkF3anLI3/3e85rbRvm4VSr1pOAV9zmUiXK17cq96+de8IbzChQrkdLihLQgSfmGSmlwRiug0Bh3qjJAjZvsJYoZ5W/KbfZVZ2XkGaifFm9rFiTnI4o1OOVCJdaZ5owJjkYx291sszvELjRYP41OCpJSZIgWx7S6WMomU2x1WxTfbqMaFWpdLM/HpJzUKEhGuRJn1WrfcLuVmxrFq822yCPaV6a/ejWCZAzTx3Fp7etjoflWRPEbPunTdnU4NkzacUEyRoocFmtf5FYv2hfFaQWKvN/h2Eixw4LuiJKnwgFNURwjL8vYCK2OCLrn8jVMNf+LUijdCy5f4UZfpn8mSn+14Ubfk4/EmWfdTJQRmbHwSNwjL4+Zt8IT/48yKuvYSUEuP7O0/X7SlPlLyTbWLElBH0OktKjXqIkLvjTGmRt9trGkBfkGKtLWOWc0k4kSZR0LcqFYscJ2fuTKRMk6FnSnTBQfWiHKEP9W7y+e95y0D6LUvab5jGbDnZcDIcr9nga8bYkVmmVzmW97UAngVtvkQIiy2mwZ/1Sl3kRjXWGoQVJa1Kl1yn67xX5sqIzvWSgHQpQtpuisp82RAyHKq67TWevcKwdClM2m6qxlquRAiLLIAp31davkQIgy0xqd9QdTNUlYiDLCHmU67wnzBQlHedFtuqLFp+wRJBjls3bqqvW+JEgwymqzdVXaEGcFiUU5ariuu9NGQUJRStVKwncsFiQUpcJbkrDUtwQJRRltvyQsN0+QUJThjkrCEgsECUXp65wkPOqHgoSi8I4huu4BKwSJRdlqsq4Lvz8mGuVhi3XdYKcFlxylwGilWuRpViCtSKMydQbbKE/XHDRDpEytYucUapKvRUqdg9KCDqOMV60OQLFhykGeRW7QNcs9q1mk1buOawRQapTdgg6jEBmjVEqMBu84BRjpdf103ikV3gMMMlQpYk1qHRDLKvylcFCD9txlvUjnxKZ7QXv6GS22W9DJ/5D8srX6unSt5lkpyEkUxllpoktz2GwvCxKNUmCsY04DmOwbJiv0Qeyy0q+kBQlHqfQSfukh9QBK3WCiq1UYKaWtFsdUe9NOrzksyEkUbvQbg+11vTptPWSpPG21+qYnBTmOwpV2Krno/xwne0nkYrEptgpyHIW5lqPKMhk73KR9fzJJkPMo+Q65HL/wU3vFRrvHo1IAjuJyAK1KNAhyHIUqTwLS6ANIe8YsrJYyE8+6RwpjHBDkPEqBLSpd6BXbLMYKzMUCU12Hq+wT5DwKhR43RwEyfm3fBVHGmdF9UUIU+KhbXKHASc2W9Y4oIUrGOHtDlA9/lCBECVGe0uLBEKWno3zBn7HO6xZjCR7GAmN9Bdd7VdCx9o8gyETJMpTNGjMxX6nvYoG0pVio1hNYa5b2BfnKFWurUY1mmShZhjpymcfNwT9MskElrhLbhx2m+6NrsNJ8/3Epwsav813Z9zXej5ywzQaft12e5ebhKQ9odYvXzHCjQR6x26UIu/GOJLMZ73cq/MwqMSL3qfKWL+qcsEWyuvftkAz7Vo/0vm2rYTPx2d63lzjs8D7f+zZ4hyMIWgkHEPSuKCXqNETxm8YYb084gKBXXL4m2GV/FK/1NY/5Qa+4fIUb/WO+b00U3+05p1Wo7/EbfXgkLvMv5e6K4iJbTLLB3eIefSQOL4+RjabZoTKKucY25dab5b0ee3kMn1lKPWOaGteqjmLyTfJbA5zxE5sc0BQOIOjWD5L9XOkOcw1Qo9Ieohj6mGCRSYKe9LL7M8fUQr6BprjZtUZJCbrTOdX+apNNkIkiHEDQm/wXb4bZSIeJkMcAAAAASUVORK5CYII="

/***/ },
/* 134 */
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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
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
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
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
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _src = __webpack_require__(4);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChartCanvas = _src2.default.ChartCanvas;
	var Chart = _src2.default.Chart;
	var EventCapture = _src2.default.EventCapture;
	var _ReStock$series = _src2.default.series;
	var CandlestickSeries = _ReStock$series.CandlestickSeries;
	var BarSeries = _ReStock$series.BarSeries;
	var LineSeries = _ReStock$series.LineSeries;
	var AreaSeries = _ReStock$series.AreaSeries;
	var StochasticSeries = _ReStock$series.StochasticSeries;
	var BollingerSeries = _ReStock$series.BollingerSeries;
	var discontinuousTimeScaleProvider = _src2.default.scale.discontinuousTimeScaleProvider;
	var _ReStock$coordinates = _src2.default.coordinates;
	var CrossHairCursor = _ReStock$coordinates.CrossHairCursor;
	var MouseCoordinateX = _ReStock$coordinates.MouseCoordinateX;
	var MouseCoordinateY = _ReStock$coordinates.MouseCoordinateY;
	var CurrentCoordinate = _ReStock$coordinates.CurrentCoordinate;
	var EdgeIndicator = _src2.default.coordinates.EdgeIndicator;
	var _ReStock$tooltip = _src2.default.tooltip;
	var TooltipContainer = _ReStock$tooltip.TooltipContainer;
	var OHLCTooltip = _ReStock$tooltip.OHLCTooltip;
	var MovingAverageTooltip = _ReStock$tooltip.MovingAverageTooltip;
	var BollingerBandTooltip = _ReStock$tooltip.BollingerBandTooltip;
	var StochasticTooltip = _ReStock$tooltip.StochasticTooltip;
	var _ReStock$axes = _src2.default.axes;
	var XAxis = _ReStock$axes.XAxis;
	var YAxis = _ReStock$axes.YAxis;
	var _ReStock$indicator = _src2.default.indicator;
	var stochasticOscillator = _ReStock$indicator.stochasticOscillator;
	var ema = _ReStock$indicator.ema;
	var bollingerBand = _ReStock$indicator.bollingerBand;
	var fitWidth = _src2.default.helper.fitWidth;
	
	var CandleStickChartWithDarkTheme = function (_React$Component) {
		_inherits(CandleStickChartWithDarkTheme, _React$Component);
	
		function CandleStickChartWithDarkTheme() {
			_classCallCheck(this, CandleStickChartWithDarkTheme);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CandleStickChartWithDarkTheme).apply(this, arguments));
		}
	
		_createClass(CandleStickChartWithDarkTheme, [{
			key: "render",
			value: function render() {
				var height = 750;
				var _props = this.props;
				var data = _props.data;
				var type = _props.type;
				var width = _props.width;
	
	
				var margin = { left: 70, right: 70, top: 20, bottom: 30 };
	
				var gridHeight = height - margin.top - margin.bottom;
				var gridWidth = width - margin.left - margin.right;
	
				var showGrid = true;
				var yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 } : {};
				var xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 } : {};
	
				var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
					d.ema20 = c;
				}).accessor(function (d) {
					return d.ema20;
				});
	
				var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
					d.ema50 = c;
				}).accessor(function (d) {
					return d.ema50;
				});
	
				var slowSTO = stochasticOscillator().windowSize(14).kWindowSize(1).stroke({ D: "#ea2bff", K: "#74d400", top: "#37a600", middle: "#b8ab00", bottom: "#37a600" }).merge(function (d, c) {
					d.slowSTO = c;
				}).accessor(function (d) {
					return d.slowSTO;
				});
				var fastSTO = stochasticOscillator().windowSize(14).kWindowSize(3).stroke({ D: "#ea2bff", K: "#74d400", top: "#37a600", middle: "#b8ab00", bottom: "#37a600" }).merge(function (d, c) {
					d.fastSTO = c;
				}).accessor(function (d) {
					return d.fastSTO;
				});
				var fullSTO = stochasticOscillator().windowSize(14).kWindowSize(3).dWindowSize(4).stroke({ D: "#ea2bff", K: "#74d400" }).merge(function (d, c) {
					d.fullSTO = c;
				}).accessor(function (d) {
					return d.fullSTO;
				});
	
				var bb = bollingerBand().stroke({ top: "#964B00", middle: "#8c9900", bottom: "#964B00" }).fill("#adffaf");
	
				return _react2.default.createElement(
					ChartCanvas,
					{ width: width, height: 750,
						margin: margin, type: type,
						seriesName: "MSFT",
						data: data, calculator: [ema20, ema50, slowSTO, fastSTO, fullSTO, bb],
						xAccessor: function xAccessor(d) {
							return d.date;
						}, xScaleProvider: discontinuousTimeScaleProvider,
						xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
					_react2.default.createElement(
						Chart,
						{ id: 1, height: 325,
							yExtents: function yExtents(d) {
								return [d.high, d.low];
							},
							padding: { top: 10, bottom: 20 } },
						_react2.default.createElement(YAxis, _extends({ axisAt: "right", orient: "right", ticks: 5 }, yGrid, {
							tickStroke: "#FFFFFF", stroke: "#FFFFFF" })),
						_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
							stroke: "#FFFFFF", opacity: 0.5 }),
						_react2.default.createElement(MouseCoordinateY, { id: 0,
							at: "right",
							orient: "right",
							displayFormat: _d2.default.format(".2f") }),
						_react2.default.createElement(CandlestickSeries, {
							wickStroke: function wickStroke(d) {
								return d.close > d.open ? "#6BA583" : "#DB0000";
							},
							fill: function fill(d) {
								return d.close > d.open ? "#6BA583" : "#DB0000";
							} }),
						_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
						_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
						_react2.default.createElement(BollingerSeries, { calculator: bb }),
						_react2.default.createElement(CurrentCoordinate, { id: 1, yAccessor: ema20.accessor(), fill: ema20.stroke() }),
						_react2.default.createElement(CurrentCoordinate, { id: 2, yAccessor: ema50.accessor(), fill: ema50.stroke() }),
						_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
							yAccessor: function yAccessor(d) {
								return d.close;
							}, fill: function fill(d) {
								return d.close > d.open ? "#6BA583" : "#DB0000";
							} })
					),
					_react2.default.createElement(
						Chart,
						{ id: 2,
							yExtents: function yExtents(d) {
								return d.volume;
							},
							height: 100, origin: function origin(w, h) {
								return [0, h - 475];
							} },
						_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: _d2.default.format("s"),
							tickStroke: "#FFFFFF" }),
						_react2.default.createElement(BarSeries, {
							yAccessor: function yAccessor(d) {
								return d.volume;
							},
							fill: function fill(d) {
								return d.close > d.open ? "#6BA583" : "#DB0000";
							} })
					),
					_react2.default.createElement(
						Chart,
						{ id: 3,
							yExtents: slowSTO.domain(),
							height: 125, origin: function origin(w, h) {
								return [0, h - 375];
							}, padding: { top: 10, bottom: 10 } },
						_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
							stroke: "#FFFFFF", opacity: 0.5 }),
						_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: slowSTO.tickValues(),
							tickStroke: "#FFFFFF" }),
						_react2.default.createElement(MouseCoordinateY, { id: 0,
							at: "right",
							orient: "right",
							displayFormat: _d2.default.format(".2f") }),
						_react2.default.createElement(StochasticSeries, { calculator: slowSTO,
							stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } })
					),
					_react2.default.createElement(
						Chart,
						{ id: 4,
							yExtents: fastSTO.domain(),
							height: 125, origin: function origin(w, h) {
								return [0, h - 250];
							}, padding: { top: 10, bottom: 10 } },
						_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
							stroke: "#FFFFFF", opacity: 0.5 }),
						_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fastSTO.tickValues(),
							tickStroke: "#FFFFFF" }),
						_react2.default.createElement(MouseCoordinateY, { id: 0,
							at: "right",
							orient: "right",
							displayFormat: _d2.default.format(".2f") }),
						_react2.default.createElement(StochasticSeries, { calculator: fastSTO,
							stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } })
					),
					_react2.default.createElement(
						Chart,
						{ id: 5,
							yExtents: fullSTO.domain(),
							height: 125, origin: function origin(w, h) {
								return [0, h - 125];
							}, padding: { top: 10, bottom: 10 } },
						_react2.default.createElement(XAxis, _extends({ axisAt: "bottom", orient: "bottom" }, xGrid, {
							tickStroke: "#FFFFFF", stroke: "#FFFFFF" })),
						_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fullSTO.tickValues(),
							tickStroke: "#FFFFFF" }),
						_react2.default.createElement(MouseCoordinateX, { id: 0,
							at: "bottom",
							orient: "bottom",
							displayFormat: _d2.default.time.format("%Y-%m-%d") }),
						_react2.default.createElement(MouseCoordinateY, { id: 0,
							at: "right",
							orient: "right",
							displayFormat: _d2.default.format(".2f") }),
						_react2.default.createElement(StochasticSeries, { calculator: fullSTO,
							stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } })
					),
					_react2.default.createElement(CrossHairCursor, { stroke: "#FFFFFF" }),
					_react2.default.createElement(EventCapture, { mouseMove: true, zoom: true, pan: true }),
					_react2.default.createElement(
						TooltipContainer,
						null,
						_react2.default.createElement(OHLCTooltip, { forChart: 1, origin: [-40, -10] }),
						_react2.default.createElement(MovingAverageTooltip, { forChart: 1, onClick: function onClick(e) {
								return console.log(e);
							}, origin: [-38, 10],
							calculators: [ema20, ema50] }),
						_react2.default.createElement(BollingerBandTooltip, { forChart: 1, origin: [-38, 60], calculator: bb }),
						_react2.default.createElement(
							StochasticTooltip,
							{ forChart: 3, calculator: slowSTO, origin: [-38, 15] },
							"Fast STO"
						),
						_react2.default.createElement(
							StochasticTooltip,
							{ forChart: 4, calculator: fastSTO, origin: [-38, 15] },
							"Slow STO"
						),
						_react2.default.createElement(
							StochasticTooltip,
							{ forChart: 5, calculator: fullSTO, origin: [-38, 15] },
							"Full STO"
						)
					)
				);
			}
		}]);
	
		return CandleStickChartWithDarkTheme;
	}(_react2.default.Component);
	
	CandleStickChartWithDarkTheme.propTypes = {
		data: _react2.default.PropTypes.array.isRequired,
		width: _react2.default.PropTypes.number.isRequired,
		type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
	};
	
	CandleStickChartWithDarkTheme.defaultProps = {
		type: "svg"
	};
	CandleStickChartWithDarkTheme = fitWidth(CandleStickChartWithDarkTheme);
	
	exports.default = CandleStickChartWithDarkTheme;

/***/ },
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
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */
/***/ function(module, exports) {

	module.exports = "<h1>React Stockcharts</h1>\n<p>Highly customizable stock charts built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></p>\n";

/***/ }
])
});
;
//# sourceMappingURL=react-stockcharts-home.js.map