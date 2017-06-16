(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("ReactDOM"));
	else
		root["ReStock"] = factory(root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_30__) {
return webpackJsonpReStock([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TypeChooser__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__TypeChooser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SaveChartAsImage__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__SaveChartAsImage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fitWidth__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__fitWidth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fitDimensions__ = __webpack_require__(131);
/* unused harmony reexport fitDimensions */






/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__XAxis__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__XAxis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__YAxis__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__YAxis__["a"]; });



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AreaSeries__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__AreaSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AreaOnlySeries__ = __webpack_require__(52);
/* unused harmony reexport AreaOnlySeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ScatterSeries__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__ScatterSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CircleMarker__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_3__CircleMarker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TriangleMarker__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_4__TriangleMarker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SquareMarker__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_5__SquareMarker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LineSeries__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__LineSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CandlestickSeries__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__CandlestickSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__OHLCSeries__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__OHLCSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__BarSeries__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__BarSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__StackedBarSeries__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_10__StackedBarSeries__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__GroupedBarSeries__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_11__GroupedBarSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__KagiSeries__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__KagiSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__PointAndFigureSeries__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__PointAndFigureSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__RenkoSeries__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_14__RenkoSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MACDSeries__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_15__MACDSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__BollingerSeries__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_16__BollingerSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__RSISeries__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_17__RSISeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__StochasticSeries__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_18__StochasticSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ElderRaySeries__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_19__ElderRaySeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__VolumeProfileSeries__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_20__VolumeProfileSeries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__StraightLine__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_21__StraightLine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__SARSeries__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_22__SARSeries__["a"]; });
























/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__discontinuousTimeScaleProvider__ = __webpack_require__(152);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__discontinuousTimeScaleProvider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__discontinuousTimeScaleProvider__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__financeDiscontinuousScale__ = __webpack_require__(71);
/* unused harmony reexport financeDiscontinuousScale */
/* unused harmony export defaultScaleProvider */




function defaultScaleProvider(xScale) {
	return function (data, xAccessor) {
		return { data: data, xScale: xScale, xAccessor: xAccessor, displayXAccessor: xAccessor };
	};
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EdgeIndicator__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__EdgeIndicator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CurrentCoordinate__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__CurrentCoordinate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MouseCoordinateX__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__MouseCoordinateX__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MouseCoordinateY__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__MouseCoordinateY__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CrossHairCursor__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__CrossHairCursor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PriceCoordinate__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__PriceCoordinate__["a"]; });







/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return BollingerBand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ATR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ForceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SmoothedForceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Change; });
/* unused harmony export Compare */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ElderRay; });
/* unused harmony export ElderImpulse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MACD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FullStochasticOscillator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RSI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return WMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return TMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Kagi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Renko; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PointAndFigure; });


var BollingerBand = {
	windowSize: 20,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	multiplier: 2,
	movingAverageType: "sma"
};

var ATR = {
	windowSize: 14
};

var ForceIndex = {
	sourcePath: "close", // "high", "low", "open", "close"
	volumePath: "volume"
};
var SmoothedForceIndex = {
	sourcePath: "close", // "high", "low", "open", "close"
	volumePath: "volume",
	smoothingType: "ema",
	smoothingWindow: 13
};
var Change = {
	sourcePath: "close" };
var Compare = {
	basePath: "close",
	mainKeys: ["open", "high", "low", "close"],
	compareKeys: []
};

var ElderRay = {
	windowSize: 13,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close", // "high", "low", "open", "close"
	movingAverageType: "sma"
};

var ElderImpulse = {
	sourcePath: "close" };

var SAR = {
	accelerationFactor: 0.02,
	maxAccelerationFactor: 0.2
};

var MACD = {
	fast: 12,
	slow: 26,
	signal: 9,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close"
};

var FullStochasticOscillator = {
	windowSize: 12,
	kWindowSize: 3,
	dWindowSize: 3
};

var RSI = {
	windowSize: 14,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close" };

var EMA = {
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	windowSize: 10
};

var SMA = {
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	windowSize: 10
};

var WMA = {
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	windowSize: 10
};

var TMA = {
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	windowSize: 10
};

var Kagi = {
	reversalType: "ATR", // "ATR", "FIXED"
	windowSize: 14,
	reversal: 2,
	sourcePath: "close" };

var Renko = {
	reversalType: "ATR", // "ATR", "FIXED"
	windowSize: 14,
	fixedBrickSize: 2,
	sourcePath: "high/low" };

var PointAndFigure = {
	boxSize: 0.5,
	reversal: 3,
	sourcePath: "high/low" };

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);




var i = 0;

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var id = i++,
	    accessor = void 0,
	    stroke = void 0,
	    fill = void 0,
	    echo = void 0,
	    type = void 0;

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
		if (!arguments.length) return !stroke ? stroke = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["H" /* overlayColors */])(id) : stroke;
		stroke = x;
		return baseIndicator;
	};
	baseIndicator.fill = function (x) {
		if (!arguments.length) return !fill ? fill = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["H" /* overlayColors */])(id) : fill;
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
	return baseIndicator;
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MACDTooltip__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__MACDTooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OHLCTooltip__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__OHLCTooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SingleValueTooltip__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__SingleValueTooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MovingAverageTooltip__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__MovingAverageTooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BollingerBandTooltip__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__BollingerBandTooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RSITooltip__ = __webpack_require__(177);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__RSITooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StochasticTooltip__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__StochasticTooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HoverTooltip__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__HoverTooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ToolTipText__ = __webpack_require__(25);
/* unused harmony reexport ToolTipText */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ToolTipTSpanLabel__ = __webpack_require__(24);
/* unused harmony reexport ToolTipTSpanLabel */











/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.fc = global.fc || {})));
}(this, (function (exports) { 'use strict';

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

})));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ema__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0__ema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sma__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__sma__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wma__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__wma__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tma__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__tma__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bollingerband__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__bollingerband__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heikinAshi__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__heikinAshi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kagi__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_6__kagi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pointAndFigure__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__pointAndFigure__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__renko__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__renko__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__macd__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__macd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rsi__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_10__rsi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sto__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_11__sto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__atr__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_12__atr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forceIndex__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_13__forceIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__smoothedForceIndex__ = __webpack_require__(119);
/* unused harmony reexport smoothedForceIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__elderRay__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_15__elderRay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sar__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_16__sar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__compare__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_17__compare__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__change__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_18__change__["a"]; });




















/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ema__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sma__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__sma__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wma__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__wma__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tma__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__tma__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bollingerBand__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__bollingerBand__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heikinAshi__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_5__heikinAshi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kagi__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_6__kagi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pointAndFigure__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__pointAndFigure__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__renko__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_8__renko__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__macd__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__macd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rsi__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_10__rsi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__atr__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__atr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stochasticOscillator__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_12__stochasticOscillator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forceIndex__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_13__forceIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sar__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_14__sar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__elderRay__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_15__elderRay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__change__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_16__change__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__elderImpulse__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_17__elderImpulse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__compare__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_18__compare__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__calculator_defaultOptionsForComputation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__defaultOptionsForAppearance__ = __webpack_require__(49);
/* unused harmony reexport defaultOptionsForComputation */
/* unused harmony reexport defaultOptionsForAppearance */


























/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function ToolTipTSpanLabel(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"tspan",
		_extends({ className: "react-stockcharts-tooltip-label", fill: "#4682B4" }, props),
		props.children
	);
}

ToolTipTSpanLabel.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (ToolTipTSpanLabel);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ToolTipText.propTypes = {
	fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};

ToolTipText.defaultProps = {
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 11
};

/* harmony default export */ __webpack_exports__["a"] = (ToolTipText);

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    highlightOnHover = _props.highlightOnHover,
			    yAccessor = _props.yAccessor,
			    hoverTolerance = _props.hoverTolerance;


			if (!highlightOnHover) return false;

			var mouseXY = moreProps.mouseXY,
			    currentItem = moreProps.currentItem,
			    xScale = moreProps.xScale,
			    plotData = moreProps.plotData;
			var _moreProps$chartConfi = moreProps.chartConfig,
			    yScale = _moreProps$chartConfi.yScale,
			    origin = _moreProps$chartConfi.origin;
			var xAccessor = moreProps.xAccessor;

			var _mouseXY = _slicedToArray(mouseXY, 2),
			    x = _mouseXY[0],
			    y = _mouseXY[1];

			var radius = hoverTolerance;

			var _getClosestItemIndexe = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["o" /* getClosestItemIndexes */])(plotData, xScale.invert(x), xAccessor),
			    left = _getClosestItemIndexe.left,
			    right = _getClosestItemIndexe.right;

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
			var _props2 = this.props,
			    yAccessor = _props2.yAccessor,
			    stroke = _props2.stroke,
			    strokeWidth = _props2.strokeWidth,
			    hoverStrokeWidth = _props2.hoverStrokeWidth,
			    defined = _props2.defined,
			    strokeDasharray = _props2.strokeDasharray,
			    interpolation = _props2.interpolation;
			var connectNulls = this.props.connectNulls;
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData,
			    hovering = moreProps.hovering;


			ctx.lineWidth = hovering ? hoverStrokeWidth : strokeWidth;

			ctx.strokeStyle = stroke;
			ctx.setLineDash(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["j" /* getStrokeDasharray */])(strokeDasharray).split(","));

			var dataSeries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_shape__["b" /* line */])().x(function (d) {
				return xScale(xAccessor(d));
			}).y(function (d) {
				return yScale(yAccessor(d));
			});

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(interpolation)) {
				dataSeries.curve(interpolation);
			}
			if (!connectNulls) {
				dataSeries.defined(function (d) {
					return defined(yAccessor(d));
				});
			}

			ctx.beginPath();
			dataSeries.context(ctx)(plotData);
			ctx.stroke();
			/*
   let points = [];
   for (let i = 0; i < plotData.length; i++) {
   	const d = plotData[i];
   	if (defined(yAccessor(d), i)) {
   		const [x, y] = [xScale(xAccessor(d)), yScale(yAccessor(d))];
   			points.push([x, y]);
   	} else if (points.length) {
   		segment(points, ctx);
   		points = connectNulls ? points : [];
   	}
   }
   	if (points.length) segment(points, ctx);*/
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props3 = this.props,
			    yAccessor = _props3.yAccessor,
			    stroke = _props3.stroke,
			    strokeWidth = _props3.strokeWidth,
			    hoverStrokeWidth = _props3.hoverStrokeWidth,
			    defined = _props3.defined,
			    strokeDasharray = _props3.strokeDasharray;
			var connectNulls = this.props.connectNulls;
			var interpolation = this.props.interpolation;
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData,
			    hovering = moreProps.hovering;


			var dataSeries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_shape__["b" /* line */])().x(function (d) {
				return xScale(xAccessor(d));
			}).y(function (d) {
				return yScale(yAccessor(d));
			});

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(interpolation)) {
				dataSeries.curve(interpolation);
			}
			if (!connectNulls) {
				dataSeries.defined(function (d) {
					return defined(yAccessor(d));
				});
			}
			var d = dataSeries(plotData);

			var _props4 = this.props,
			    fill = _props4.fill,
			    className = _props4.className;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: className + " " + (stroke ? "" : " line-stroke"),
				d: d,
				stroke: stroke,
				strokeWidth: hovering ? hoverStrokeWidth : strokeWidth,
				strokeDasharray: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["j" /* getStrokeDasharray */])(strokeDasharray),
				fill: fill
			});
		}
	}, {
		key: "render",
		value: function render() {
			var highlightOnHover = this.props.highlightOnHover;

			var hoverProps = highlightOnHover ? {
				isHover: this.isHover,
				drawOn: ["mousemove", "pan"],
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["a" /* getMouseCanvas */]
			} : {
				drawOn: ["pan"],
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["c" /* getAxisCanvas */]
			};

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], _extends({
				svgDraw: this.renderSVG,

				canvasDraw: this.drawOnCanvas,

				onClick: this.props.onClick,
				onDoubleClick: this.props.onDoubleClick,
				onContextMenu: this.props.onContextMenu
			}, hoverProps));
		}
	}]);

	return LineSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/*
function segment(points, ctx) {
	ctx.beginPath();

	const [x, y] = first(points);
	ctx.moveTo(x, y);
	for (let i = 1; i < points.length; i++) {
		const [x1, y1] = points[i];
		ctx.lineTo(x1, y1);
	}

	ctx.stroke();
}
*/

LineSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	hoverStrokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	defined: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	hoverTolerance: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	strokeDasharray: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__utils__["k" /* strokeDashTypes */]),
	highlightOnHover: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onDoubleClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onContextMenu: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	connectNulls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	interpolation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

LineSeries.defaultProps = {
	className: "line ",
	strokeWidth: 1,
	hoverStrokeWidth: 4,
	fill: "none",
	stroke: "#4682B4",
	strokeDasharray: "Solid",
	defined: function defined(d) {
		return !isNaN(d);
	},
	hoverTolerance: 6,
	highlightOnHover: false,
	connectNulls: false,
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

/* harmony default export */ __webpack_exports__["a"] = (LineSeries);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__ = __webpack_require__(17);


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["d" /* EMA */];

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize,
		    sourcePath = _options.sourcePath;


		var source = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* path */])(sourcePath);
		var alpha = 2 / (windowSize + 1);
		var previous = void 0;
		var initialAccumulator = 0;
		var skip = 0;

		return data.map(function (d, i) {
			var v = source(d, i);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(previous) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(v)) {
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
		var _options2 = options,
		    windowSize = _options2.windowSize;

		return windowSize - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["d" /* EMA */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    type = _props.type,
			    stroke = _props.stroke,
			    strokeWidth = _props.strokeWidth,
			    opacity = _props.opacity,
			    strokeDasharray = _props.strokeDasharray;
			var _props2 = this.props,
			    yValue = _props2.yValue,
			    xValue = _props2.xValue;
			var xScale = moreProps.xScale;
			var _moreProps$chartConfi = moreProps.chartConfig,
			    yScale = _moreProps$chartConfi.yScale,
			    width = _moreProps$chartConfi.width,
			    height = _moreProps$chartConfi.height;


			ctx.beginPath();

			ctx.strokeStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["i" /* hexToRGBA */])(stroke, opacity);
			ctx.lineWidth = strokeWidth;

			var _getLineCoordinates = getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height),
			    x1 = _getLineCoordinates.x1,
			    y1 = _getLineCoordinates.y1,
			    x2 = _getLineCoordinates.x2,
			    y2 = _getLineCoordinates.y2;

			ctx.setLineDash(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["j" /* getStrokeDasharray */])(strokeDasharray).split(","));
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var width = moreProps.width,
			    height = moreProps.height;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale;
			var className = this.props.className;
			var _props3 = this.props,
			    type = _props3.type,
			    stroke = _props3.stroke,
			    strokeWidth = _props3.strokeWidth,
			    opacity = _props3.opacity,
			    strokeDasharray = _props3.strokeDasharray;
			var _props4 = this.props,
			    yValue = _props4.yValue,
			    xValue = _props4.xValue;


			var lineCoordinates = getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height);

			/*
   type === "horizontal"
   	? { x1: xScale(first), y1: yScale(yValue), x2: xScale(last), y2: yScale(yValue) }
   	: { x1: xScale(xValue), y1: yScale(0), x2: xScale(xValue), y2: yScale(height) };*/

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", _extends({
				className: className,
				strokeDasharray: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["j" /* getStrokeDasharray */])(strokeDasharray),
				stroke: stroke,
				strokeWidth: strokeWidth,
				opacity: opacity
			}, lineCoordinates));
		}
	}]);

	return StraightLine;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height) {
	return type === "horizontal" ? { x1: 0, y1: yScale(yValue), x2: width, y2: yScale(yValue) } : { x1: xScale(xValue), y1: 0, x2: xScale(xValue), y2: height };
}

StraightLine.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["vertical", "horizontal"]),
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	strokeDasharray: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_2__utils__["k" /* strokeDashTypes */]),
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	yValue: function yValue(props, propName /* , componentName */) {
		if (props.type === "vertical" && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isDefined */])(props[propName])) return new Error("Do not define `yValue` when type is `vertical`, define the `xValue` prop");
		if (props.type === "horizontal" && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* isNotDefined */])(props[propName])) return new Error("when type = `horizontal` `yValue` is required");
		// if (isDefined(props[propName]) && typeof props[propName] !== "number") return new Error("prop `yValue` accepts a number");
	},
	xValue: function xValue(props, propName /* , componentName */) {
		if (props.type === "horizontal" && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isDefined */])(props[propName])) return new Error("Do not define `xValue` when type is `horizontal`, define the `yValue` prop");
		if (props.type === "vertical" && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* isNotDefined */])(props[propName])) return new Error("when type = `vertical` `xValue` is required");
		// if (isDefined(props[propName]) && typeof props[propName] !== "number") return new Error("prop `xValue` accepts a number");
	}
};

StraightLine.defaultProps = {
	className: "line ",
	type: "horizontal",
	stroke: "#000000",
	opacity: 0.5,
	strokeWidth: 1,
	strokeDasharray: "Solid"
};

/* harmony default export */ __webpack_exports__["a"] = (StraightLine);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["l"] = acos;
/* harmony export (immutable) */ __webpack_exports__["k"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (var j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_arc__ = __webpack_require__(225);
/* unused harmony reexport arc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_area__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_area__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_line__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pie__ = __webpack_require__(244);
/* unused harmony reexport pie */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_radialArea__ = __webpack_require__(245);
/* unused harmony reexport radialArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_radialLine__ = __webpack_require__(86);
/* unused harmony reexport radialLine */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_symbol__ = __webpack_require__(247);
/* unused harmony reexport symbol */
/* unused harmony reexport symbols */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_symbol_circle__ = __webpack_require__(87);
/* unused harmony reexport symbolCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_symbol_cross__ = __webpack_require__(88);
/* unused harmony reexport symbolCross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_symbol_diamond__ = __webpack_require__(89);
/* unused harmony reexport symbolDiamond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_symbol_square__ = __webpack_require__(90);
/* unused harmony reexport symbolSquare */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_symbol_star__ = __webpack_require__(91);
/* unused harmony reexport symbolStar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_symbol_triangle__ = __webpack_require__(92);
/* unused harmony reexport symbolTriangle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_symbol_wye__ = __webpack_require__(93);
/* unused harmony reexport symbolWye */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_curve_basisClosed__ = __webpack_require__(227);
/* unused harmony reexport curveBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_curve_basisOpen__ = __webpack_require__(228);
/* unused harmony reexport curveBasisOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_curve_basis__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_16__src_curve_basis__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_curve_bundle__ = __webpack_require__(229);
/* unused harmony reexport curveBundle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_curve_cardinalClosed__ = __webpack_require__(82);
/* unused harmony reexport curveCardinalClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_curve_cardinalOpen__ = __webpack_require__(83);
/* unused harmony reexport curveCardinalOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinal__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinal__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_curve_catmullRomClosed__ = __webpack_require__(230);
/* unused harmony reexport curveCatmullRomClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_curve_catmullRomOpen__ = __webpack_require__(231);
/* unused harmony reexport curveCatmullRomOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRom__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRom__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_curve_linearClosed__ = __webpack_require__(232);
/* unused harmony reexport curveLinearClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_curve_linear__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_25__src_curve_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_curve_monotone__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_26__src_curve_monotone__["a"]; });
/* unused harmony reexport curveMonotoneY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_curve_natural__ = __webpack_require__(234);
/* unused harmony reexport curveNatural */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_curve_step__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_step__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_step__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_step__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_stack__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_29__src_stack__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_offset_expand__ = __webpack_require__(238);
/* unused harmony reexport stackOffsetExpand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_offset_none__ = __webpack_require__(36);
/* unused harmony reexport stackOffsetNone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_offset_silhouette__ = __webpack_require__(239);
/* unused harmony reexport stackOffsetSilhouette */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_offset_wiggle__ = __webpack_require__(240);
/* unused harmony reexport stackOffsetWiggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_order_ascending__ = __webpack_require__(60);
/* unused harmony reexport stackOrderAscending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_order_descending__ = __webpack_require__(241);
/* unused harmony reexport stackOrderDescending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_order_insideOut__ = __webpack_require__(242);
/* unused harmony reexport stackOrderInsideOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_order_none__ = __webpack_require__(37);
/* unused harmony reexport stackOrderNone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_order_reverse__ = __webpack_require__(243);
/* unused harmony reexport stackOrderReverse */












































/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["b"] = renderSVG;
/* harmony export (immutable) */ __webpack_exports__["a"] = drawOnCanvas;






/* eslint-disable react/prop-types */
function renderSVG(props) {
	var className = props.className;


	var edge = helper(props);
	if (edge === null) return null;
	var line = void 0,
	    coordinateBase = void 0,
	    coordinate = void 0;

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(edge.line)) {
		line = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
			className: "react-stockcharts-cross-hair", opacity: edge.line.opacity, stroke: edge.line.stroke,
			x1: edge.line.x1, y1: edge.line.y1,
			x2: edge.line.x2, y2: edge.line.y2 });
	}
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(edge.coordinateBase)) {
		var _edge$coordinateBase = edge.coordinateBase,
		    rectWidth = _edge$coordinateBase.rectWidth,
		    rectHeight = _edge$coordinateBase.rectHeight,
		    arrowWidth = _edge$coordinateBase.arrowWidth;


		var path = edge.orient === "left" ? "M0,0L0," + rectHeight + "L" + rectWidth + "," + rectHeight + "L" + (rectWidth + arrowWidth) + ",10L" + rectWidth + ",0L0,0L0,0" : "M0," + arrowWidth + "L" + arrowWidth + "," + rectHeight + "L" + (rectWidth + arrowWidth) + "," + rectHeight + "L" + (rectWidth + arrowWidth) + ",0L" + arrowWidth + ",0L0," + arrowWidth;

		coordinateBase = edge.orient === "left" || edge.orient === "right" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			{ transform: "translate(" + edge.coordinateBase.edgeXRect + "," + edge.coordinateBase.edgeYRect + ")" },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: path, key: 1, className: "react-stockchart-text-background",
				height: rectHeight, width: rectWidth,
				fill: edge.coordinateBase.fill, opacity: edge.coordinateBase.opacity })
		) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { key: 1, className: "react-stockchart-text-background",
			x: edge.coordinateBase.edgeXRect,
			y: edge.coordinateBase.edgeYRect,
			height: rectHeight, width: rectWidth,
			fill: edge.coordinateBase.fill, opacity: edge.coordinateBase.opacity });

		coordinate = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		{ className: className },
		line,
		coordinateBase,
		coordinate
	);
}
/* eslint-enable react/prop-types */

function helper(props) {
	var displayCoordinate = props.coordinate,
	    show = props.show,
	    type = props.type,
	    orient = props.orient,
	    edgeAt = props.edgeAt,
	    hideLine = props.hideLine;
	var fill = props.fill,
	    opacity = props.opacity,
	    fontFamily = props.fontFamily,
	    fontSize = props.fontSize,
	    textFill = props.textFill,
	    lineStroke = props.lineStroke,
	    lineOpacity = props.lineOpacity,
	    arrowWidth = props.arrowWidth;
	var rectWidth = props.rectWidth,
	    rectHeight = props.rectHeight;
	var x1 = props.x1,
	    y1 = props.y1,
	    x2 = props.x2,
	    y2 = props.y2,
	    dx = props.dx;


	if (!show) return null;

	// rectWidth = rectWidth ? rectWidth : (type === "horizontal") ? 60 : 100;

	var edgeXRect = void 0,
	    edgeYRect = void 0,
	    edgeXText = void 0,
	    edgeYText = void 0;

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
	var coordinateBase = void 0,
	    coordinate = void 0;
	var textAnchor = "middle";
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(displayCoordinate)) {
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

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(edge.coordinateBase)) {
		var _edge$coordinateBase2 = edge.coordinateBase,
		    rectWidth = _edge$coordinateBase2.rectWidth,
		    rectHeight = _edge$coordinateBase2.rectHeight,
		    arrowWidth = _edge$coordinateBase2.arrowWidth;


		ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* hexToRGBA */])(edge.coordinateBase.fill, edge.coordinateBase.opacity);

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
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(edge.line)) {
		ctx.strokeStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* hexToRGBA */])(edge.line.stroke, edge.line.opacity);

		ctx.beginPath();
		ctx.moveTo(edge.line.x1, edge.line.y1);
		ctx.lineTo(edge.line.x2, edge.line.y2);
		ctx.stroke();
	}
}

// export default EdgeCoordinate;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_collection__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_shape__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["d"] = identityStack;
/* harmony export (immutable) */ __webpack_exports__["c"] = drawOnCanvasHelper;
/* harmony export (immutable) */ __webpack_exports__["e"] = svgHelper;
/* unused harmony export rotateXY */
/* harmony export (immutable) */ __webpack_exports__["b"] = getBarsSVG2;
/* harmony export (immutable) */ __webpack_exports__["a"] = drawOnCanvas2;
/* unused harmony export getBars */


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor;
			// var { xScale, chartConfig: { yScale }, plotData } = moreProps;

			drawOnCanvasHelper(ctx, this.props, moreProps, xAccessor, __WEBPACK_IMPORTED_MODULE_4_d3_shape__["a" /* stack */]);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = moreProps.xAccessor;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				svgHelper(this.props, moreProps, xAccessor, __WEBPACK_IMPORTED_MODULE_4_d3_shape__["a" /* stack */])
			);
		}
	}, {
		key: "render",
		value: function render() {
			var clip = this.props.clip;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__GenericChartComponent__["a" /* default */], {
				clip: clip,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_6__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}]);

	return StackedBarSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

StackedBarSeries.propTypes = {
	baseAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["up", "down"]).isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
	clip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

StackedBarSeries.defaultProps = {
	baseAt: function baseAt(xScale, yScale /* , d*/) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* head */])(yScale.range());
	},
	direction: "up",
	className: "bar",
	stroke: true,
	fill: "#4682B4",
	opacity: 0.5,
	width: __WEBPACK_IMPORTED_MODULE_7__utils__["n" /* plotDataLengthBarWidth */],
	clip: true
};

function identityStack() {
	var keys = [];
	function stack(data) {
		var response = keys.map(function (key, i) {
			// eslint-disable-next-line prefer-const
			var arrays = data.map(function (d) {
				// eslint-disable-next-line prefer-const
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
	var defaultPostAction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : __WEBPACK_IMPORTED_MODULE_7__utils__["g" /* identity */];
	var postRotateAction = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : rotateXY;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    plotData = moreProps.plotData;


	var bars = doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);

	drawOnCanvas2(props, ctx, bars);
}

function convertToArray(item) {
	return Array.isArray(item) ? item : [item];
}

function svgHelper(props, moreProps, xAccessor, stackFn) {
	var defaultPostAction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : __WEBPACK_IMPORTED_MODULE_7__utils__["g" /* identity */];
	var postRotateAction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : rotateXY;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    plotData = moreProps.plotData;

	var bars = doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
	return getBarsSVG2(props, bars);
}

function doStuff(props, xAccessor, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction) {
	var yAccessor = props.yAccessor,
	    swapScales = props.swapScales;


	var modifiedYAccessor = swapScales ? convertToArray(props.xAccessor) : convertToArray(yAccessor);
	var modifiedXAccessor = swapScales ? yAccessor : xAccessor;

	var modifiedXScale = swapScales ? yScale : xScale;
	var modifiedYScale = swapScales ? xScale : yScale;

	var postProcessor = swapScales ? postRotateAction : defaultPostAction;

	var bars = getBars(props, modifiedXAccessor, modifiedYAccessor, modifiedXScale, modifiedYScale, plotData, stackFn, postProcessor);

	return bars;
}

var rotateXY = function rotateXY(array) {
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
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", { key: idx, className: d.className,
				stroke: d.fill,
				x1: d.x, y1: d.y,
				x2: d.x, y2: d.y + d.height });
		}
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { key: idx, className: d.className,
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


	var nest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_collection__["b" /* nest */])().key(function (d) {
		return d.fill;
	}).entries(bars);

	nest.forEach(function (outer) {
		var key = outer.key,
		    values = outer.values;

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* head */])(values).width > 1) {
			ctx.strokeStyle = key;
		}
		ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["i" /* hexToRGBA */])(key, props.opacity);
		values.forEach(function (d) {
			if (d.width <= 1) {
				/* <line key={idx} className={d.className}
    			stroke={stroke}
    			fill={fill}
    			x1={d.x} y1={d.y}
    			x2={d.x} y2={d.y + d.height} />*/
				/*
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.height);
    ctx.stroke();
    */
				ctx.fillRect(d.x - 0.5, d.y, 1, d.height);
			} else {
				/* <rect key={idx} className={d.className}
    		stroke={stroke}
    		fill={fill}
    		x={d.x}
    		y={d.y}
    		width={d.width}
    		height={d.height} /> */
				/*
    ctx.beginPath();
    ctx.rect(d.x, d.y, d.width, d.height);
    ctx.fill();
    */
				ctx.fillRect(d.x, d.y, d.width, d.height);
				if (stroke) ctx.strokeRect(d.x, d.y, d.width, d.height);
			}
		});
	});
}

function getBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var stack = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : identityStack;
	var after = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : __WEBPACK_IMPORTED_MODULE_7__utils__["g" /* identity */];
	var baseAt = props.baseAt,
	    className = props.className,
	    fill = props.fill,
	    stroke = props.stroke,
	    _props$spaceBetweenBa = props.spaceBetweenBar,
	    spaceBetweenBar = _props$spaceBetweenBa === undefined ? 0 : _props$spaceBetweenBa;


	var getClassName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* functor */])(className);
	var getFill = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* functor */])(fill);
	var getBase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* functor */])(baseAt);

	var widthFunctor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* functor */])(props.width);
	var width = widthFunctor(props, {
		xScale: xScale,
		xAccessor: xAccessor,
		plotData: plotData
	});

	var barWidth = Math.round(width);

	var eachBarWidth = (barWidth - spaceBetweenBar * (yAccessor.length - 1)) / yAccessor.length;

	var offset = barWidth === 1 ? 0 : 0.5 * width;

	var ds = plotData.map(function (each) {
		// eslint-disable-next-line prefer-const
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
			// eslint-disable-next-line prefer-const
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

	var bars = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_array__["a" /* merge */])(newData)
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
			x: Math.round(xScale(d.data.x) - width / 2),
			y: y,
			groupOffset: Math.round(offset - (d.data.i > 0 ? (eachBarWidth + spaceBetweenBar) * d.data.i : 0)),
			groupWidth: Math.round(eachBarWidth),
			offset: Math.round(offset),
			height: h,
			width: barWidth
		});
	}).filter(function (bar) {
		return !isNaN(bar.y);
	});

	return after(bars);
}

/* harmony default export */ __webpack_exports__["f"] = (StackedBarSeries);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_path__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_path__["a"]; });



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Basis;
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

/* harmony default export */ __webpack_exports__["c"] = (function(context) {
  return new Basis(context);
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Cardinal;
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

/* harmony default export */ __webpack_exports__["c"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Linear(context);
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["h" /* ATR */];
	var source = function source(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize;


		var trueRangeAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["y" /* slidingWindow */])().windowSize(2).source(source).undefinedValue(function (d) {
			return d.high - d.low;
		}) // the first TR value is simply the High minus the Low
		.accumulator(function (values) {
			var prev = values[0];
			var d = values[1];
			return Math.max(d.high - d.low, d.high - prev.close, d.low - prev.close);
		});

		var prevATR = void 0;

		var atrAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["y" /* slidingWindow */])().skipInitial(1) // trueRange starts from index 1 so ATR starts from 1
		.windowSize(windowSize).accumulator(function (values) {
			var tr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* last */])(values);
			var atr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isDefined */])(prevATR) ? (prevATR * (windowSize - 1) + tr) / windowSize : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["l" /* sum */])(values) / windowSize;

			prevATR = atr;
			return atr;
		});

		var newData = atrAlgorithm(trueRangeAlgorithm(data));

		return newData;
	}
	calculator.undefinedLength = function () {
		var _options2 = options,
		    windowSize = _options2.windowSize;

		return windowSize - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["h" /* ATR */], x);
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
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export themes */
/* unused harmony export BollingerBand */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElderImpulse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MACD; });
/* unused harmony export FullStochasticOscillator */


var themes = {
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
				top: "#37a600",
				middle: "#b8ab00",
				bottom: "#37a600",
				dLine: "#17becf",
				kLine: "#ff7f0e"
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
				top: "#37a600",
				middle: "#b8ab00",
				bottom: "#37a600",
				dLine: "#ea2bff",
				kLine: "#74d400"
			}
		}
	}
};

var BollingerBand = themes.light.BollingerBand;
var ElderImpulse = themes.light.ElderImpulse;
var MACD = themes.light.MACD;
var FullStochasticOscillator = themes.light.FullStochasticOscillator;

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    yAccessor = _props.yAccessor,
			    defined = _props.defined,
			    base = _props.base;
			var _props2 = this.props,
			    fill = _props2.fill,
			    stroke = _props2.stroke,
			    opacity = _props2.opacity;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData,
			    xAccessor = moreProps.xAccessor;


			var newBase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(base);

			ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["i" /* hexToRGBA */])(fill, opacity);
			ctx.strokeStyle = stroke;

			var points0 = [],
			    points1 = [];

			for (var i = 0; i < plotData.length; i++) {
				var d = plotData[i];
				if (defined(yAccessor(d), i)) {
					var _ref = [xScale(xAccessor(d)), yScale(yAccessor(d)), newBase(yScale, d)],
					    x = _ref[0],
					    y1 = _ref[1],
					    y0 = _ref[2];


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
			var _props3 = this.props,
			    yAccessor = _props3.yAccessor,
			    defined = _props3.defined,
			    base = _props3.base;
			var _props4 = this.props,
			    stroke = _props4.stroke,
			    fill = _props4.fill,
			    className = _props4.className,
			    opacity = _props4.opacity;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData,
			    xAccessor = moreProps.xAccessor;


			var newBase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(base);
			var areaSeries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_shape__["c" /* area */])().defined(function (d) {
				return defined(yAccessor(d));
			}).x(function (d) {
				return xScale(xAccessor(d));
			}).y0(newBase.bind(null, yScale)).y1(function (d) {
				return yScale(yAccessor(d));
			});

			var d = areaSeries(plotData);
			var newClassName = className.concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(stroke) ? "" : " line-stroke");
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: d, stroke: stroke, fill: fill, className: newClassName, opacity: opacity });
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}]);

	return AreaOnlySeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AreaOnlySeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	defined: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	base: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number])
};

AreaOnlySeries.defaultProps = {
	className: "line ",
	fill: "none",
	opacity: 1,
	defined: function defined(d) {
		return !isNaN(d);
	},
	base: function base(yScale /* , d*/) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* first */])(yScale.range());
	}
};

function segment(points0, points1, ctx) {
	ctx.beginPath();

	var _first = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* first */])(points0),
	    _first2 = _slicedToArray(_first, 2),
	    x0 = _first2[0],
	    y0 = _first2[1];

	ctx.moveTo(x0, y0);

	var i = void 0;
	for (i = 0; i < points1.length; i++) {
		var _points1$i = _slicedToArray(points1[i], 2),
		    x1 = _points1$i[0],
		    y1 = _points1$i[1];

		ctx.lineTo(x1, y1);
	}

	for (i = points0.length - 1; i >= 0; i--) {
		var _points0$i = _slicedToArray(points0[i], 2),
		    _x = _points0$i[0],
		    _y = _points0$i[1];

		ctx.lineTo(_x, _y);
	}
	ctx.closePath();
	ctx.fill();
}

/* harmony default export */ __webpack_exports__["a"] = (AreaOnlySeries);

/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

/* harmony default export */ __webpack_exports__["a"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      delimiterCode = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns;
    return rows;
  }

  function parseRows(text, f) {
    var EOL = {}, // sentinel value for end-of-line
        EOF = {}, // sentinel value for end-of-file
        rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // the current line number
        t, // the current token
        eol; // is the current token followed by EOL?

    function token() {
      if (I >= N) return EOF; // special case: end of file
      if (eol) return eol = false, EOL; // special case: end of line

      // special case: quotes
      var j = I, c;
      if (text.charCodeAt(j) === 34) {
        var i = j;
        while (i++ < N) {
          if (text.charCodeAt(i) === 34) {
            if (text.charCodeAt(i + 1) !== 34) break;
            ++i;
          }
        }
        I = i + 2;
        c = text.charCodeAt(i + 1);
        if (c === 13) {
          eol = true;
          if (text.charCodeAt(i + 2) === 10) ++I;
        } else if (c === 10) {
          eol = true;
        }
        return text.slice(j + 1, i).replace(/""/g, "\"");
      }

      // common case: find next delimiter or newline
      while (I < N) {
        var k = 1;
        c = text.charCodeAt(I++);
        if (c === 10) eol = true; // \n
        else if (c === 13) { eol = true; if (text.charCodeAt(I) === 10) ++I, ++k; } // \r|\r\n
        else if (c !== delimiterCode) continue;
        return text.slice(j, I - k);
      }

      // special case: last token before EOF
      return text.slice(j);
    }

    while ((t = token()) !== EOF) {
      var a = [];
      while (t !== EOL && t !== EOF) {
        a.push(t);
        t = token();
      }
      if (f && (a = f(a, n++)) == null) continue;
      rows.push(a);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/\"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return (Math.random() - 0.5) * 1e-6;
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
});


/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(43);
/* harmony export (immutable) */ __webpack_exports__["a"] = point;



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["a" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["a" /* epsilon */]) {
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

/* harmony default export */ __webpack_exports__["b"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["a" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(85);





/* harmony default export */ __webpack_exports__["a"] = (function() {
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
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(37);
/* harmony export (immutable) */ __webpack_exports__["a"] = sum;


/* harmony default export */ __webpack_exports__["b"] = (function(series) {
  var sums = series.map(sum);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = now;
/* harmony export (immutable) */ __webpack_exports__["b"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["a"] = timer;
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, delay);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clockNow, interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_force__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AxisZoomCapture__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(1);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
		_this.saveNode = _this.saveNode.bind(_this);
		_this.getMoreProps = _this.getMoreProps.bind(_this);
		return _this;
	}

	_createClass(Axis, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.node = node;
		}
	}, {
		key: "getMoreProps",
		value: function getMoreProps() {
			return this.node.getMoreProps();
		}
	}, {
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props = this.props,
			    showDomain = _props.showDomain,
			    showTicks = _props.showTicks,
			    transform = _props.transform,
			    range = _props.range,
			    getScale = _props.getScale;


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
			var _props2 = this.props,
			    showDomain = _props2.showDomain,
			    showTicks = _props2.showTicks,
			    range = _props2.range,
			    getScale = _props2.getScale;


			var ticks = showTicks ? axisTicksSVG(this.props, getScale(moreProps)) : null;
			var domain = showDomain ? axisLineSVG(this.props, range) : null;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				ticks,
				domain
			);
		}
	}, {
		key: "render",
		value: function render() {
			var _props3 = this.props,
			    bg = _props3.bg,
			    axisZoomCallback = _props3.axisZoomCallback,
			    zoomCursorClassName = _props3.zoomCursorClassName,
			    zoomEnabled = _props3.zoomEnabled,
			    getScale = _props3.getScale,
			    inverted = _props3.inverted;
			var _props4 = this.props,
			    transform = _props4.transform,
			    getMouseDelta = _props4.getMouseDelta,
			    edgeClip = _props4.edgeClip;
			var _props5 = this.props,
			    onContextMenu = _props5.onContextMenu,
			    onDoubleClick = _props5.onDoubleClick;


			var zoomCapture = zoomEnabled ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__AxisZoomCapture__["a" /* default */], {
				bg: bg,
				getScale: getScale,
				getMoreProps: this.getMoreProps,
				getMouseDelta: getMouseDelta,
				axisZoomCallback: axisZoomCallback,
				zoomCursorClassName: zoomCursorClassName,
				inverted: inverted,
				onContextMenu: onContextMenu,
				onDoubleClick: onDoubleClick
			}) : null;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ transform: "translate(" + transform[0] + ", " + transform[1] + ")" },
				zoomCapture,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__GenericChartComponent__["a" /* default */], { ref: this.saveNode,
					canvasToDraw: __WEBPACK_IMPORTED_MODULE_5__GenericComponent__["c" /* getAxisCanvas */],
					clip: false,
					edgeClip: edgeClip,
					svgDraw: this.renderSVG,
					canvasDraw: this.drawOnCanvas,
					drawOn: ["pan"]
				})
			);
		}
	}]);

	return Axis;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Axis.propTypes = {
	innerTickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	outerTickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	tickPadding: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	ticks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	tickInterval: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	showDomain: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	showTicks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	axisZoomCallback: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	zoomEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	inverted: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	zoomCursorClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	transform: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number).isRequired,
	range: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number).isRequired,
	getMouseDelta: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	getScale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	bg: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
	edgeClip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
	onContextMenu: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onDoubleClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

Axis.defaultProps = {
	zoomEnabled: false,
	zoomCursorClassName: "",
	edgeClip: false
};

function tickHelper(props, scale) {
	var orient = props.orient,
	    innerTickSize = props.innerTickSize,
	    tickFormat = props.tickFormat,
	    tickPadding = props.tickPadding,
	    tickStrokeWidth = props.tickStrokeWidth,
	    tickStrokeDasharray = props.tickStrokeDasharray,
	    fontSize = props.fontSize,
	    fontFamily = props.fontFamily,
	    showTicks = props.showTicks,
	    flexTicks = props.flexTicks;
	var tickArguments = props.ticks,
	    tickValuesProp = props.tickValues,
	    tickStroke = props.tickStroke,
	    tickStrokeOpacity = props.tickStrokeOpacity,
	    tickInterval = props.tickInterval;

	// if (tickArguments) tickArguments = [tickArguments];

	var tickValues = void 0;
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* isDefined */])(tickValuesProp)) {
		tickValues = tickValuesProp;
	} else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* isDefined */])(tickInterval)) {
		var _scale$domain = scale.domain(),
		    _scale$domain2 = _slicedToArray(_scale$domain, 2),
		    min = _scale$domain2[0],
		    max = _scale$domain2[1];

		tickValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_array__["h" /* range */])(min, max, tickInterval);
	} else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* isDefined */])(scale.ticks)) {
		tickValues = scale.ticks(tickArguments, flexTicks);
	} else {
		tickValues = scale.domain();
	}

	var baseFormat = scale.tickFormat ? scale.tickFormat(tickArguments) : __WEBPACK_IMPORTED_MODULE_7__utils__["g" /* identity */];

	var format = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["f" /* isNotDefined */])(tickFormat) ? baseFormat : function (d) {
		return baseFormat(d) ? tickFormat(d) : "";
	};

	var sign = orient === "top" || orient === "left" ? -1 : 1;
	var tickSpacing = Math.max(innerTickSize, 0) + tickPadding;

	var ticks = void 0,
	    dy = void 0,
	    canvas_dy = void 0,
	    textAnchor = void 0;

	if (orient === "bottom" || orient === "top") {
		dy = sign < 0 ? "0em" : ".71em";
		canvas_dy = sign < 0 ? 0 : fontSize * .71;
		textAnchor = "middle";

		ticks = tickValues.map(function (d) {
			var x = scale(d);
			return {
				value: d,
				x1: x,
				y1: 0,
				x2: x,
				y2: sign * innerTickSize,
				labelX: x,
				labelY: sign * tickSpacing
			};
		});

		if (showTicks && flexTicks) {
			// console.log(ticks, showTicks);

			var nodes = ticks.map(function (d) {
				return { id: d.value, value: d.value, fy: d.y2, origX: d.x1 };
			});

			var simulation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_force__["a" /* forceSimulation */])(nodes).force("x", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_force__["b" /* forceX */])(function (d) {
				return d.origX;
			}).strength(1)).force("collide", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_force__["c" /* forceCollide */])(22))
			// .force("center", forceCenter())
			.stop();

			for (var i = 0; i < 100; ++i) {
				simulation.tick();
			} // console.log(nodes);

			var zip = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["p" /* zipper */])().combine(function (a, b) {
				if (Math.abs(b.x - b.origX) > 0.01) {
					return _extends({}, a, {
						x2: b.x,
						labelX: b.x
					});
				}
				return a;
			});

			ticks = zip(ticks, nodes);
		}
	} else {
		ticks = tickValues.map(function (d) {
			var y = scale(d);
			return {
				value: d,
				x1: 0,
				y1: y,
				x2: sign * innerTickSize,
				y2: y,
				labelX: sign * tickSpacing,
				labelY: y
			};
		});

		dy = ".32em";
		canvas_dy = fontSize * .32;
		textAnchor = sign < 0 ? "end" : "start";
	}

	return { ticks: ticks, scale: scale, tickStroke: tickStroke, tickStrokeOpacity: tickStrokeOpacity, tickStrokeWidth: tickStrokeWidth, tickStrokeDasharray: tickStrokeDasharray, dy: dy, canvas_dy: canvas_dy, textAnchor: textAnchor, fontSize: fontSize, fontFamily: fontFamily, format: format };
}

/* eslint-disable react/prop-types */
function axisLineSVG(props, range) {
	var orient = props.orient,
	    outerTickSize = props.outerTickSize;
	var domainClassName = props.domainClassName,
	    fill = props.fill,
	    stroke = props.stroke,
	    strokeWidth = props.strokeWidth,
	    opacity = props.opacity;


	var sign = orient === "top" || orient === "left" ? -1 : 1;

	var d = void 0;

	if (orient === "bottom" || orient === "top") {
		d = "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize;
	} else {
		d = "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize;
	}

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
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

	var orient = props.orient,
	    outerTickSize = props.outerTickSize,
	    stroke = props.stroke,
	    strokeWidth = props.strokeWidth,
	    opacity = props.opacity;


	var sign = orient === "top" || orient === "left" ? -1 : 1;
	var xAxis = orient === "bottom" || orient === "top";

	// var range = d3_scaleRange(xAxis ? xScale : yScale);

	ctx.lineWidth = strokeWidth;
	ctx.strokeStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["i" /* hexToRGBA */])(stroke, opacity);

	ctx.beginPath();

	if (xAxis) {
		ctx.moveTo(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["l" /* first */])(range), sign * outerTickSize);
		ctx.lineTo(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["l" /* first */])(range), 0);
		ctx.lineTo(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* last */])(range), 0);
		ctx.lineTo(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* last */])(range), sign * outerTickSize);
	} else {
		ctx.moveTo(sign * outerTickSize, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["l" /* first */])(range));
		ctx.lineTo(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["l" /* first */])(range));
		ctx.lineTo(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* last */])(range));
		ctx.lineTo(sign * outerTickSize, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* last */])(range));
	}
	ctx.stroke();
}

function Tick(props) {
	var tickStroke = props.tickStroke,
	    tickStrokeOpacity = props.tickStrokeOpacity,
	    tickStrokeDasharray = props.tickStrokeDasharray,
	    tickStrokeWidth = props.tickStrokeWidth,
	    textAnchor = props.textAnchor,
	    fontSize = props.fontSize,
	    fontFamily = props.fontFamily;
	var x1 = props.x1,
	    y1 = props.y1,
	    x2 = props.x2,
	    y2 = props.y2,
	    labelX = props.labelX,
	    labelY = props.labelY,
	    dy = props.dy;

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		{ className: "tick" },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
			shapeRendering: "crispEdges",
			opacity: tickStrokeOpacity,
			stroke: tickStroke,
			strokeWidth: tickStrokeWidth,
			strokeDasharray: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["j" /* getStrokeDasharray */])(tickStrokeDasharray),
			x1: x1, y1: y1,
			x2: x2, y2: y2 }),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"text",
			{
				dy: dy, x: labelX, y: labelY,
				fill: tickStroke,
				fontSize: fontSize,
				fontFamily: fontFamily,
				textAnchor: textAnchor },
			props.children
		)
	);
}

Tick.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	x1: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	y1: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	x2: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	y2: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	labelX: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	labelY: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	dy: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	tickStroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	tickStrokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickStrokeOpacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickStrokeDasharray: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_7__utils__["k" /* strokeDashTypes */]),
	textAnchor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

function axisTicksSVG(props, scale) {
	var result = tickHelper(props, scale);

	var tickStroke = result.tickStroke,
	    tickStrokeOpacity = result.tickStrokeOpacity,
	    tickStrokeWidth = result.tickStrokeWidth,
	    tickStrokeDasharray = result.tickStrokeDasharray,
	    textAnchor = result.textAnchor;
	var fontSize = result.fontSize,
	    fontFamily = result.fontFamily,
	    ticks = result.ticks,
	    format = result.format;
	var dy = result.dy;


	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		null,
		ticks.map(function (tick, idx) {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				Tick,
				{ key: idx,
					tickStroke: tickStroke,
					tickStrokeWidth: tickStrokeWidth,
					tickStrokeOpacity: tickStrokeOpacity,
					tickStrokeDasharray: tickStrokeDasharray,
					dy: dy,
					x1: tick.x1, y1: tick.y1,
					x2: tick.x2, y2: tick.y2,
					labelX: tick.labelX, labelY: tick.labelY,
					textAnchor: textAnchor,
					fontSize: fontSize, fontFamily: fontFamily },
				format(tick.value)
			);
		})
	);
}

function drawTicks(ctx, result) {
	var tickStroke = result.tickStroke,
	    tickStrokeOpacity = result.tickStrokeOpacity,
	    textAnchor = result.textAnchor,
	    fontSize = result.fontSize,
	    fontFamily = result.fontFamily,
	    ticks = result.ticks;


	ctx.strokeStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["i" /* hexToRGBA */])(tickStroke, tickStrokeOpacity);

	ctx.font = fontSize + "px " + fontFamily;
	ctx.fillStyle = tickStroke;
	ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;
	// ctx.textBaseline = 'middle';

	ticks.forEach(function (tick) {
		drawEachTick(ctx, tick, result);
	});
}

function drawEachTick(ctx, tick, result) {
	var canvas_dy = result.canvas_dy,
	    format = result.format,
	    tickStrokeWidth = result.tickStrokeWidth,
	    tickStrokeDasharray = result.tickStrokeDasharray;


	ctx.beginPath();

	ctx.moveTo(tick.x1, tick.y1);
	ctx.lineTo(tick.x2, tick.y2);
	ctx.lineWidth = tickStrokeWidth;
	ctx.setLineDash(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["j" /* getStrokeDasharray */])(tickStrokeDasharray).split(","));
	ctx.stroke();
	ctx.fillText(format(tick.value), tick.labelX, tick.labelY + canvas_dy);
}

/* harmony default export */ __webpack_exports__["a"] = (Axis);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["g" /* ForceIndex */];

	function calculator(data) {
		var _options = options,
		    sourcePath = _options.sourcePath,
		    volumePath = _options.volumePath;


		var source = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* path */])(sourcePath);
		var volume = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* path */])(volumePath);

		var forceIndexCalulator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["y" /* slidingWindow */])().windowSize(2).accumulator(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2),
			    prev = _ref2[0],
			    curr = _ref2[1];

			return (source(curr) - source(prev)) * volume(curr);
		});

		var forceIndex = forceIndexCalulator(data);

		return forceIndex;
	}
	calculator.undefinedLength = function () {
		return 2;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["g" /* ForceIndex */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["f" /* SMA */];

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize,
		    sourcePath = _options.sourcePath;


		var average = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().windowSize(windowSize).sourcePath(sourcePath).accumulator(function (values) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["o" /* mean */])(values);
		});

		return average(data);
	}
	calculator.undefinedLength = function () {
		var _options2 = options,
		    windowSize = _options2.windowSize;

		return windowSize - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["f" /* SMA */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = financeDiscontinuousScale;


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();







var tickLevels = [{ target: 50e2, level: 0 }, { target: 50e3, level: 1 }, { target: 10e4, level: 2 }, { target: 28e4, level: 3 }, { target: 55e4, level: 4 }, { target: 11e5, level: 5 }, { target: 21e5, level: 6 }, { target: 43e5, level: 7 }, { target: 59e5, level: 8 }, // not tested
{ target: 12e6, level: 9 }, // not tested
{ target: 58e6, level: 10 }, // not tested
{ target: 89e6, level: 11 }, { target: 11e7, level: 12 }, { target: 78e7, level: 13 }, { target: 16e8, level: 14 }, { target: 62e8, level: 15 }, { target: 10e20, level: 16 }];

var MAX_LEVEL = 17;

var tickLevelBisector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_array__["b" /* bisector */])(function (d) {
	return d.target;
}).left;

function financeDiscontinuousScale(index, interval) {
	var backingLinearScale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["c" /* scaleLinear */])();


	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isNotDefined */])(index) /* || isNotDefined(interval) */) throw new Error("Use the discontinuousTimeScaleProvider to create financeDiscontinuousScale");

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
	scale.ticks = function (m, flexTicks) {
		var backingTicks = backingLinearScale.ticks(m);
		var ticksMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])();

		var _backingLinearScale$d = backingLinearScale.domain(),
		    _backingLinearScale$d2 = _slicedToArray(_backingLinearScale$d, 2),
		    domainStart = _backingLinearScale$d2[0],
		    domainEnd = _backingLinearScale$d2[1];

		var start = Math.max(Math.ceil(domainStart), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index) + Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index);
		var end = Math.min(Math.floor(domainEnd), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* last */])(index).index) + Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index);

		var desiredTickCount = Math.ceil((end - start) / (domainEnd - domainStart) * backingTicks.length);

		for (var i = MAX_LEVEL; i >= 0; i--) {
			var ticksAtLevel = ticksMap.get(i);
			var temp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isNotDefined */])(ticksAtLevel) ? [] : ticksAtLevel.slice();

			for (var j = start; j <= end; j++) {
				if (index[j].level === i) {
					temp.push(index[j]);
				}
			}

			ticksMap.set(i, temp);
		}

		var unsortedTicks = [];
		for (var _i = MAX_LEVEL; _i >= 0; _i--) {
			if (ticksMap.get(_i).length + unsortedTicks.length > desiredTickCount * 1.5) break;
			unsortedTicks = unsortedTicks.concat(ticksMap.get(_i).map(function (d) {
				return d.index;
			}));
		}

		var ticks = unsortedTicks.sort(__WEBPACK_IMPORTED_MODULE_1_d3_array__["g" /* ascending */]);

		// console.log(backingTicks.length, desiredTickCount, ticks, ticksMap);

		if (!flexTicks && end - start > ticks.length) {
			var ticksSet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["c" /* set */])(ticks);

			var d = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index);

			// ignore ticks within this distance
			var distance = Math.ceil((backingTicks.length > 0 ? (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* last */])(backingTicks) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(backingTicks)) / backingTicks.length / 4 : 1) * 1.5);

			for (var _i2 = 0; _i2 < ticks.length - 1; _i2++) {
				for (var _j = _i2 + 1; _j < ticks.length; _j++) {
					if (ticks[_j] - ticks[_i2] <= distance) {
						ticksSet.remove(index[ticks[_i2] + d].level >= index[ticks[_j] + d].level ? ticks[_j] : ticks[_i2]);
					}
				}
			}

			var tickValues = ticksSet.values().map(function (d) {
				return parseInt(d, 10);
			});

			// console.log(ticks.length, tickValues, level);
			// console.log(ticks, tickValues, distance);

			return tickValues;
		}

		return ticks;
	};
	scale.ticksv1 = function (m) {
		var _backingLinearScale$d3 = backingLinearScale.domain(),
		    _backingLinearScale$d4 = _slicedToArray(_backingLinearScale$d3, 2),
		    domainStart = _backingLinearScale$d4[0],
		    domainEnd = _backingLinearScale$d4[1];

		var start = Math.max(Math.ceil(domainStart), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index) + Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index);
		var end = Math.min(Math.floor(domainEnd), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* last */])(index).index) + Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index);

		// console.log(index.length, domainStart, domainEnd, start, end)

		var newM = (end - start) / (domainEnd - domainStart) * m;
		// newM = newM <= 0 ? m : newM;
		var target = Math.round((end - start + 1) * interval / newM);

		// var subList = index.slice(start, end + 1);
		var levelIndex = tickLevelBisector(tickLevels, target);
		var level = tickLevels[levelIndex].level;
		// console.log(target, level, levelIndex)

		// console.log(target.toExponential(), level);

		var backingTicks = backingLinearScale.ticks(m);

		// console.log(backingTicks.length, ratio, distance, level)

		var ticks = [];
		for (var i = start; i < end + 1; i++) {
			if (index[i].level >= level) ticks.push(index[i].index);
		}

		// subList.filter(each => each.level >= level).map(d => d.index);

		var ticksSet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["c" /* set */])(ticks);
		// console.log(ticks);

		var d = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index);

		// ignore ticks within this distance
		var distance = Math.ceil((backingTicks.length > 0 ? (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* last */])(backingTicks) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(backingTicks)) / backingTicks.length / 4 : 1) * 1.5);

		for (var _i3 = 0; _i3 < ticks.length - 1; _i3++) {
			for (var j = _i3 + 1; j < ticks.length; j++) {
				if (ticks[j] - ticks[_i3] < distance) {
					ticksSet.remove(index[ticks[_i3] + d].level >= index[ticks[j] + d].level ? ticks[j] : ticks[_i3]);
				}
			}
		}

		var tickValues = ticksSet.values().map(function (d) {
			return parseInt(d, 10);
		});
		// console.log(ticks.length, tickValues, level, distance);
		return tickValues;
	};
	scale.tickFormat = function () {
		return function (x) {
			// console.log(x)
			var d = Math.abs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* head */])(index).index);
			var _index = index[x + d],
			    format = _index.format,
			    date = _index.date;

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

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			// const { xAccessor } = moreProps;

			// drawOnCanvasHelper(ctx, this.props, moreProps, xAccessor, identityStack);
			var bars = getBars(this.props, moreProps);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__["a" /* drawOnCanvas2 */])(this.props, ctx, bars);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			// const { xAccessor } = moreProps;

			// return <g>{svgHelper(this.props, moreProps, xAccessor, identityStack)}</g>;

			var bars = getBars(this.props, moreProps);
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__["b" /* getBarsSVG2 */])(this.props, bars)
			);
		}
	}, {
		key: "render",
		value: function render() {
			var clip = this.props.clip;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__["a" /* default */], {
				clip: clip,
				svgDraw: this.renderSVG,

				canvasToDraw: __WEBPACK_IMPORTED_MODULE_3__GenericComponent__["c" /* getAxisCanvas */],
				canvasDraw: this.drawOnCanvas,

				drawOn: ["pan"]
			});
		}
	}]);

	return BarSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BarSeries.propTypes = {
	baseAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
	clip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

BarSeries.defaultProps = __WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__["f" /* default */].defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (BarSeries);

/*
 Initially, this program was using StackedBarSeries.getBars
 to benefit from code reuse and having a single place that
 contains the logic for drawing all types of bar charts
 simple, grouped, horizontal, but turnes out
 making it highly cuztimizable also made it slow for the
 most simple case, a regular bar chart.
 This function contains just the necessary logic
 to create bars
*/
function getBars(props, moreProps) {
	var baseAt = props.baseAt,
	    fill = props.fill,
	    stroke = props.stroke,
	    yAccessor = props.yAccessor;
	var xScale = moreProps.xScale,
	    xAccessor = moreProps.xAccessor,
	    plotData = moreProps.plotData,
	    yScale = moreProps.chartConfig.yScale;


	var getFill = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(fill);
	var getBase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(baseAt);

	var widthFunctor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(props.width);
	var width = widthFunctor(props, {
		xScale: xScale,
		xAccessor: xAccessor,
		plotData: plotData
	});

	var barWidth = Math.round(width);
	var offset = Math.round(barWidth === 1 ? 0 : 0.5 * barWidth);

	var bars = plotData.map(function (d) {
		var yValue = yAccessor(d);
		var y = yScale(yValue);

		var x = Math.round(xScale(xAccessor(d))) - offset;
		var h = getBase(xScale, yScale, d) - yScale(yValue);

		if (h < 0) {
			y = y + h;
			h = -h;
		}

		return {
			// type: "line"
			x: x,
			y: Math.round(y),
			height: Math.round(h),
			width: offset * 2,
			fill: getFill(d, 0),
			stroke: stroke ? getFill(d, 0) : "none"
		};
	});

	return bars;
}

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_collection__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_timer__ = __webpack_require__(249);
/* harmony export (immutable) */ __webpack_exports__["b"] = x;
/* harmony export (immutable) */ __webpack_exports__["c"] = y;




function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* harmony default export */ __webpack_exports__["a"] = (function(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_collection__["a" /* map */])(),
      stepper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_timer__["a" /* timer */])(step),
      event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("tick", "end");

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick() {
    var i, n = nodes.length, node;

    alpha += (alphaTarget - alpha) * alphaDecay;

    forces.each(function(force) {
      force(alpha);
    });

    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (node.fx == null) node.x += node.vx *= velocityDecay;
      else node.x = node.fx, node.vx = 0;
      if (node.fy == null) node.y += node.vy *= velocityDecay;
      else node.y = node.fy, node.vy = 0;
    }
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
});


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_quadtree__ = __webpack_require__(207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_quadtree__["a"]; });



/***/ }),
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__(85);






/* harmony default export */ __webpack_exports__["a"] = (function() {
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
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(43);
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalClosed;



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
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cardinal__["b" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__(43);
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalOpen;


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
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cardinal__["b" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["a"] = curveRadial;


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


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(59);
/* harmony export (immutable) */ __webpack_exports__["a"] = radialLine;



function radialLine(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return radialLine(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* curveRadialLinear */]));
});


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(35);


/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["b" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */]);
  }
});


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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
});


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(35);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["b" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* tau */] / 10) * kr;

/* harmony default export */ __webpack_exports__["a"] = ({
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
});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["a"] = ({
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
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dsv__ = __webpack_require__(54);
/* unused harmony reexport dsvFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_csv__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["a"]; });
/* unused harmony reexport csvParseRows */
/* unused harmony reexport csvFormat */
/* unused harmony reexport csvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_tsv__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["a"]; });
/* unused harmony reexport tsvParseRows */
/* unused harmony reexport tsvFormat */
/* unused harmony reexport tsvFormatRows */





/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(253)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!../../node_modules/sass-loader/lib/loader.js?outputStyle=expanded!./re-stock.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!../../node_modules/sass-loader/lib/loader.js?outputStyle=expanded!./re-stock.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_stockcharts_lib_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_stockcharts_lib_tooltip__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_stockcharts_lib_indicator__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_stockcharts_lib_helper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_stockcharts_lib_utils__ = __webpack_require__(1);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var bbAppearance = {
	stroke: {
		top: "#964B00",
		middle: "#FF6600",
		bottom: "#964B00"
	},
	fill: "#4682B4"
};
var stoAppearance = {
	stroke: Object.assign({}, __WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["k" /* StochasticSeries */].defaultProps.stroke, { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" })
};

var CandleStickChartWithDarkTheme = function (_React$Component) {
	_inherits(CandleStickChartWithDarkTheme, _React$Component);

	function CandleStickChartWithDarkTheme() {
		_classCallCheck(this, CandleStickChartWithDarkTheme);

		return _possibleConstructorReturn(this, (CandleStickChartWithDarkTheme.__proto__ || Object.getPrototypeOf(CandleStickChartWithDarkTheme)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithDarkTheme, [{
		key: "render",
		value: function render() {
			var height = 750;
			var _props = this.props,
			    type = _props.type,
			    initialData = _props.data,
			    width = _props.width,
			    ratio = _props.ratio;


			var margin = { left: 70, right: 70, top: 20, bottom: 30 };

			var gridHeight = height - margin.top - margin.bottom;
			var gridWidth = width - margin.left - margin.right;

			var showGrid = true;
			var yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 } : {};
			var xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 } : {};

			var ema20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_stockcharts_lib_indicator__["a" /* ema */])().id(0).options({ windowSize: 20 }).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_stockcharts_lib_indicator__["a" /* ema */])().id(2).options({ windowSize: 50 }).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var slowSTO = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_stockcharts_lib_indicator__["i" /* stochasticOscillator */])().options({ windowSize: 14, kWindowSize: 3 }).merge(function (d, c) {
				d.slowSTO = c;
			}).accessor(function (d) {
				return d.slowSTO;
			});
			var fastSTO = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_stockcharts_lib_indicator__["i" /* stochasticOscillator */])().options({ windowSize: 14, kWindowSize: 1 }).merge(function (d, c) {
				d.fastSTO = c;
			}).accessor(function (d) {
				return d.fastSTO;
			});
			var fullSTO = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_stockcharts_lib_indicator__["i" /* stochasticOscillator */])().options({ windowSize: 14, kWindowSize: 3, dWindowSize: 4 }).merge(function (d, c) {
				d.fullSTO = c;
			}).accessor(function (d) {
				return d.fullSTO;
			});

			var bb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_stockcharts_lib_indicator__["m" /* bollingerBand */])().merge(function (d, c) {
				d.bb = c;
			}).accessor(function (d) {
				return d.bb;
			});

			var calculatedData = bb(ema20(ema50(slowSTO(fastSTO(fullSTO(initialData))))));
			var xScaleProvider = __WEBPACK_IMPORTED_MODULE_8_react_stockcharts_lib_scale__["a" /* discontinuousTimeScaleProvider */].inputDateAccessor(function (d) {
				return d.date;
			});

			var _xScaleProvider = xScaleProvider(calculatedData),
			    data = _xScaleProvider.data,
			    xScale = _xScaleProvider.xScale,
			    xAccessor = _xScaleProvider.xAccessor,
			    displayXAccessor = _xScaleProvider.displayXAccessor;

			var start = xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react_stockcharts_lib_utils__["b" /* last */])(data));
			var end = xAccessor(data[Math.max(0, data.length - 150)]);
			var xExtents = [start, end];

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["ChartCanvas"],
				{ height: 750,
					width: width,
					ratio: ratio,
					margin: margin,
					type: type,
					seriesName: "MSFT",
					data: data,
					xScale: xScale,
					xAccessor: xAccessor,
					displayXAccessor: displayXAccessor,
					xExtents: xExtents },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["Chart"],
					{ id: 1, height: 325,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, bb.accessor(), ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["b" /* YAxis */], _extends({ axisAt: "right", orient: "right", ticks: 5 }, yGrid, { inverted: true,
						tickStroke: "#FFFFFF" })),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["a" /* XAxis */], { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
						stroke: "#FFFFFF", opacity: 0.5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["a" /* MouseCoordinateY */], {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["a" /* CandlestickSeries */], {
						stroke: function stroke(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						},
						wickStroke: function wickStroke(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["c" /* LineSeries */], { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["c" /* LineSeries */], { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["m" /* BollingerSeries */], _extends({ yAccessor: function yAccessor(d) {
							return d.bb;
						}
					}, bbAppearance)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["d" /* CurrentCoordinate */], { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["d" /* CurrentCoordinate */], { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["e" /* EdgeIndicator */], { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_stockcharts_lib_tooltip__["a" /* OHLCTooltip */], { origin: [-40, -10] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_stockcharts_lib_tooltip__["b" /* MovingAverageTooltip */], {
						onClick: function onClick(e) {
							return console.log(e);
						},
						origin: [-38, 15],
						options: [{
							yAccessor: ema20.accessor(),
							type: ema20.type(),
							stroke: ema20.stroke(),
							windowSize: ema20.options().windowSize
						}, {
							yAccessor: ema50.accessor(),
							type: ema50.type(),
							stroke: ema50.stroke(),
							windowSize: ema50.options().windowSize
						}]
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_stockcharts_lib_tooltip__["g" /* BollingerBandTooltip */], {
						origin: [-38, 60],
						yAccessor: function yAccessor(d) {
							return d.bb;
						},
						options: bb.options()
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 100, origin: function origin(w, h) {
							return [0, h - 475];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["b" /* YAxis */], { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".0s"),
						tickStroke: "#FFFFFF" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["b" /* BarSeries */], {
						yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["Chart"],
					{ id: 3,
						yExtents: [0, 100],
						height: 125, origin: function origin(w, h) {
							return [0, h - 375];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["a" /* XAxis */], { axisAt: "bottom", orient: "bottom",
						showTicks: false,
						outerTickSize: 0,
						stroke: "#FFFFFF", opacity: 0.5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["b" /* YAxis */], { axisAt: "right", orient: "right",
						tickValues: [20, 50, 80],
						tickStroke: "#FFFFFF" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["a" /* MouseCoordinateY */], {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["k" /* StochasticSeries */], _extends({
						yAccessor: function yAccessor(d) {
							return d.slowSTO;
						}
					}, stoAppearance)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_stockcharts_lib_tooltip__["e" /* StochasticTooltip */], {
						origin: [-38, 15],
						yAccessor: function yAccessor(d) {
							return d.slowSTO;
						},
						options: slowSTO.options(),
						appearance: stoAppearance,
						label: "Slow STO" })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["Chart"],
					{ id: 4,
						yExtents: [0, 100],
						height: 125, origin: function origin(w, h) {
							return [0, h - 250];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["a" /* XAxis */], { axisAt: "bottom", orient: "bottom",
						showTicks: false,
						outerTickSize: 0,
						stroke: "#FFFFFF",
						opacity: 0.5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["b" /* YAxis */], { axisAt: "right", orient: "right",
						tickValues: [20, 50, 80],
						tickStroke: "#FFFFFF" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["a" /* MouseCoordinateY */], {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["k" /* StochasticSeries */], _extends({
						yAccessor: function yAccessor(d) {
							return d.fastSTO;
						}
					}, stoAppearance)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_stockcharts_lib_tooltip__["e" /* StochasticTooltip */], {
						origin: [-38, 15],
						yAccessor: function yAccessor(d) {
							return d.fastSTO;
						},
						options: fastSTO.options(),
						appearance: stoAppearance,
						label: "Fast STO" })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["Chart"],
					{ id: 5,
						yExtents: [0, 100],
						height: 125,
						origin: function origin(w, h) {
							return [0, h - 125];
						},
						padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["a" /* XAxis */], _extends({ axisAt: "bottom", orient: "bottom"
					}, xGrid, {
						tickStroke: "#FFFFFF",
						stroke: "#FFFFFF" })),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_stockcharts_lib_axes__["b" /* YAxis */], { axisAt: "right", orient: "right",
						tickValues: [20, 50, 80],
						tickStroke: "#FFFFFF" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["b" /* MouseCoordinateX */], {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_time_format__["c" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["a" /* MouseCoordinateY */], {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_stockcharts_lib_series__["k" /* StochasticSeries */], _extends({
						yAccessor: function yAccessor(d) {
							return d.fullSTO;
						}
					}, stoAppearance)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_stockcharts_lib_tooltip__["e" /* StochasticTooltip */], {
						origin: [-38, 15],
						yAccessor: function yAccessor(d) {
							return d.fullSTO;
						},
						options: fullSTO.options(),
						appearance: stoAppearance,
						label: "Full STO" })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_stockcharts_lib_coordinates__["c" /* CrossHairCursor */], { stroke: "#FFFFFF" })
			);
		}
	}]);

	return CandleStickChartWithDarkTheme;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartWithDarkTheme.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithDarkTheme.defaultProps = {
	type: "svg"
};
CandleStickChartWithDarkTheme = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_react_stockcharts_lib_helper__["b" /* fitWidth */])(CandleStickChartWithDarkTheme);

/* harmony default export */ __webpack_exports__["a"] = (CandleStickChartWithDarkTheme);

/***/ }),
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

		_this.handleDragStartMouse = _this.handleDragStartMouse.bind(_this);
		_this.handleDragStartTouch = _this.handleDragStartTouch.bind(_this);
		_this.handleDrag = _this.handleDrag.bind(_this);
		_this.handleDragEnd = _this.handleDragEnd.bind(_this);
		_this.handleRightClick = _this.handleRightClick.bind(_this);
		_this.saveNode = _this.saveNode.bind(_this);
		_this.state = {
			startPosition: null
		};
		return _this;
	}

	_createClass(AxisZoomCapture, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.node = node;
		}
	}, {
		key: "handleRightClick",
		value: function handleRightClick(e) {
			e.stopPropagation();
			e.preventDefault();

			var onContextMenu = this.props.onContextMenu;


			var mouseXY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["q" /* mousePosition */])(e, this.node.getBoundingClientRect());

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["a" /* select */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["r" /* d3Window */])(this.node)).on(__WEBPACK_IMPORTED_MODULE_4__utils__["s" /* MOUSEMOVE */], null).on(__WEBPACK_IMPORTED_MODULE_4__utils__["t" /* MOUSEUP */], null);
			this.setState({
				startPosition: null
			});

			onContextMenu(mouseXY, e);

			this.contextMenuClicked = true;
		}
	}, {
		key: "handleDragStartMouse",
		value: function handleDragStartMouse(e) {
			this.mouseInteraction = true;
			console.log("handleDragStartMouse");

			var _props = this.props,
			    getScale = _props.getScale,
			    getMoreProps = _props.getMoreProps;

			var startScale = getScale(getMoreProps());
			this.dragHappened = false;

			if (startScale.invert) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["a" /* select */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["r" /* d3Window */])(this.node)).on(__WEBPACK_IMPORTED_MODULE_4__utils__["s" /* MOUSEMOVE */], this.handleDrag, false).on(__WEBPACK_IMPORTED_MODULE_4__utils__["t" /* MOUSEUP */], this.handleDragEnd, false);

				var startXY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["q" /* mousePosition */])(e);

				this.setState({
					startPosition: {
						startXY: startXY,
						startScale: startScale
					}
				});
			}
			e.preventDefault();
		}
	}, {
		key: "handleDragStartTouch",
		value: function handleDragStartTouch(e) {
			this.mouseInteraction = false;

			var _props2 = this.props,
			    getScale = _props2.getScale,
			    getMoreProps = _props2.getMoreProps;

			var startScale = getScale(getMoreProps());
			this.dragHappened = false;

			if (e.touches.length === 1 && startScale.invert) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["a" /* select */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["r" /* d3Window */])(this.node)).on(__WEBPACK_IMPORTED_MODULE_4__utils__["u" /* TOUCHMOVE */], this.handleDrag).on(__WEBPACK_IMPORTED_MODULE_4__utils__["v" /* TOUCHEND */], this.handleDragEnd);

				var startXY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["w" /* touchPosition */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["x" /* getTouchProps */])(e.touches[0]), e);

				this.setState({
					startPosition: {
						startXY: startXY,
						startScale: startScale
					}
				});
			}
		}
	}, {
		key: "handleDrag",
		value: function handleDrag() {
			var startPosition = this.state.startPosition;
			var _props3 = this.props,
			    getMouseDelta = _props3.getMouseDelta,
			    inverted = _props3.inverted;


			this.dragHappened = true;
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(startPosition)) {
				var startScale = startPosition.startScale;
				var startXY = startPosition.startXY;


				var mouseXY = this.mouseInteraction ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* mouse */])(this.node) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["c" /* touches */])(this.node)[0];

				var diff = getMouseDelta(startXY, mouseXY);

				var center = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_array__["o" /* mean */])(startScale.range());

				var tempRange = startScale.range().map(function (d) {
					return inverted ? d - sign(d - center) * diff : d + sign(d - center) * diff;
				});

				var newDomain = tempRange.map(startScale.invert);

				if (sign(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* last */])(startScale.range()) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* first */])(startScale.range())) === sign(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* last */])(tempRange) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* first */])(tempRange))) {
					var axisZoomCallback = this.props.axisZoomCallback;
					// console.log(startXScale.domain(), newXDomain)

					axisZoomCallback(newDomain);
				}
			}
		}
	}, {
		key: "handleDragEnd",
		value: function handleDragEnd() {
			var _this2 = this;

			if (!this.dragHappened) {
				if (this.clicked) {
					var e = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["d" /* event */];
					var mouseXY = this.mouseInteraction ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* mouse */])(this.node) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["c" /* touches */])(this.node)[0];
					var onDoubleClick = this.props.onDoubleClick;


					onDoubleClick(mouseXY, e);
				} else {
					this.clicked = true;
					setTimeout(function () {
						_this2.clicked = false;
					}, 300);
				}
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["a" /* select */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["r" /* d3Window */])(this.node)).on(__WEBPACK_IMPORTED_MODULE_4__utils__["s" /* MOUSEMOVE */], null).on(__WEBPACK_IMPORTED_MODULE_4__utils__["t" /* MOUSEUP */], null).on(__WEBPACK_IMPORTED_MODULE_4__utils__["u" /* TOUCHMOVE */], null).on(__WEBPACK_IMPORTED_MODULE_4__utils__["v" /* TOUCHEND */], null);

			this.setState({
				startPosition: null
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _props4 = this.props,
			    bg = _props4.bg,
			    zoomCursorClassName = _props4.zoomCursorClassName;


			var cursor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(this.state.startPosition) ? zoomCursorClassName : "react-stockcharts-default-cursor";

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
				className: "react-stockcharts-enable-interaction " + cursor,
				ref: this.saveNode,
				x: bg.x, y: bg.y, opacity: 0, height: bg.h, width: bg.w,
				onContextMenu: this.handleRightClick,
				onMouseDown: this.handleDragStartMouse,
				onTouchStart: this.handleDragStartTouch
			});
		}
	}]);

	return AxisZoomCapture;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AxisZoomCapture.propTypes = {
	innerTickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	outerTickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	tickPadding: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	ticks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	showDomain: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	showTicks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	axisZoomCallback: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	inverted: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	bg: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
	zoomCursorClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	getMoreProps: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	getScale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	getMouseDelta: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	onDoubleClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	onContextMenu: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

AxisZoomCapture.defaultProps = {
	onDoubleClick: __WEBPACK_IMPORTED_MODULE_4__utils__["h" /* noop */],
	onContextMenu: __WEBPACK_IMPORTED_MODULE_4__utils__["h" /* noop */],
	inverted: true
};

/* harmony default export */ __webpack_exports__["a"] = (AxisZoomCapture);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Axis__ = __webpack_require__(66);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Axis__["a" /* default */], _extends({}, this.props, moreProps, { x: true,
				zoomEnabled: this.props.zoomEnabled && showTicks,
				axisZoomCallback: this.axisZoomCallback,
				zoomCursorClassName: "react-stockcharts-ew-resize-cursor" }));
		}
	}]);

	return XAxis;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

XAxis.propTypes = {
	axisAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["top", "bottom", "middle"]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]).isRequired,
	orient: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["top", "bottom"]).isRequired,
	innerTickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	outerTickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	tickPadding: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	ticks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	showTicks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	zoomEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
	onContextMenu: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onDoubleClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
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
	zoomEnabled: true,
	getMouseDelta: function getMouseDelta(startXY, mouseXY) {
		return startXY[0] - mouseXY[0];
	}
};

XAxis.contextTypes = {
	chartConfig: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
	xAxisZoom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

function helper(props, context) {
	var axisAt = props.axisAt,
	    xZoomHeight = props.xZoomHeight,
	    orient = props.orient;
	var _context$chartConfig = context.chartConfig,
	    width = _context$chartConfig.width,
	    height = _context$chartConfig.height;


	var axisLocation = void 0;
	var x = 0,
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
/* harmony default export */ __webpack_exports__["a"] = (XAxis);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Axis__ = __webpack_require__(66);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
			var _context = this.context,
			    chartId = _context.chartId,
			    yAxisZoom = _context.yAxisZoom;

			yAxisZoom(chartId, newYDomain);
		}
	}, {
		key: "render",
		value: function render() {
			var _helper = helper(this.props, this.context),
			    zoomEnabled = _helper.zoomEnabled,
			    moreProps = _objectWithoutProperties(_helper, ["zoomEnabled"]);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Axis__["a" /* default */], _extends({}, this.props, moreProps, {
				zoomEnabled: this.props.zoomEnabled && zoomEnabled,
				edgeClip: true,
				axisZoomCallback: this.axisZoomCallback,
				zoomCursorClassName: "react-stockcharts-ns-resize-cursor" }));
		}
	}]);

	return YAxis;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

YAxis.propTypes = {
	axisAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["left", "right", "middle"]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]).isRequired,
	orient: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["left", "right"]).isRequired,
	innerTickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	outerTickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	tickPadding: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	ticks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	yZoomWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	tickValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	showTicks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	zoomEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
	onContextMenu: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onDoubleClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
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
	zoomEnabled: true,
	getMouseDelta: function getMouseDelta(startXY, mouseXY) {
		return startXY[1] - mouseXY[1];
	}
};

YAxis.contextTypes = {
	yAxisZoom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	chartId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	chartConfig: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

function helper(props, context) {
	var axisAt = props.axisAt,
	    yZoomWidth = props.yZoomWidth,
	    orient = props.orient;
	var _context$chartConfig = context.chartConfig,
	    width = _context$chartConfig.width,
	    height = _context$chartConfig.height;


	var axisLocation = void 0;
	var y = 0,
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
/* harmony default export */ __webpack_exports__["a"] = (YAxis);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ema__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultOptionsForComputation__ = __webpack_require__(17);


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








/* harmony default export */ __webpack_exports__["a"] = (function () {
	var options = __WEBPACK_IMPORTED_MODULE_3__defaultOptionsForComputation__["o" /* BollingerBand */];

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize,
		    multiplier = _options.multiplier,
		    movingAverageType = _options.movingAverageType,
		    sourcePath = _options.sourcePath;


		var source = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* path */])(sourcePath);
		var meanAlgorithm = movingAverageType === "ema" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ema__["a" /* default */])().windowSize(windowSize).sourcePath(sourcePath) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["y" /* slidingWindow */])().windowSize(windowSize).accumulator(function (values) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["o" /* mean */])(values);
		}).sourcePath(sourcePath);

		var bollingerBandAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["y" /* slidingWindow */])().windowSize(windowSize).accumulator(function (values) {
			var avg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* last */])(values).mean;
			var stdDev = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["r" /* deviation */])(values, function (each) {
				return source(each.datum);
			});
			return {
				top: avg + multiplier * stdDev,
				middle: avg,
				bottom: avg - multiplier * stdDev
			};
		});

		var zip = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["p" /* zipper */])().combine(function (datum, mean) {
			return { datum: datum, mean: mean };
		});

		var tuples = zip(data, meanAlgorithm(data));
		return bollingerBandAlgorithm(tuples);
	}
	calculator.undefinedLength = function () {
		var _options2 = options,
		    windowSize = _options2.windowSize;

		return windowSize - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_3__defaultOptionsForComputation__["o" /* BollingerBand */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




/* harmony default export */ __webpack_exports__["a"] = (function () {
	var options = __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["a" /* Change */];

	function calculator(data) {
		var _options = options,
		    sourcePath = _options.sourcePath;


		var algo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["y" /* slidingWindow */])().windowSize(2).sourcePath(sourcePath).accumulator(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2),
			    prev = _ref2[0],
			    curr = _ref2[1];

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
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["a" /* Change */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ __webpack_exports__["a"] = (function () {
	var options = __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["a" /* Change */];

	function calculator(data) {
		var _options = options,
		    basePath = _options.basePath,
		    mainKeys = _options.mainKeys,
		    compareKeys = _options.compareKeys;

		var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* path */])(basePath);

		var f = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* first */])(data);
		var b = base(f);
		var compareData = data.map(function (d) {
			// eslint-disable-next-line prefer-const
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
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["a" /* Change */], x);
		return calculator;
	};
	return calculator;
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ema__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["c" /* ElderRay */];
	var ohlc = function ohlc(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize,
		    sourcePath = _options.sourcePath,
		    movingAverageType = _options.movingAverageType;


		var meanAlgorithm = movingAverageType === "ema" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ema__["a" /* default */])().windowSize(windowSize).sourcePath(sourcePath) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["y" /* slidingWindow */])().windowSize(windowSize).accumulator(function (values) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["o" /* mean */])(values);
		}).sourcePath(sourcePath);

		var zip = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["p" /* zipper */])().combine(function (datum, mean) {
			var bullPower = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* isDefined */])(mean) ? ohlc(datum).high - mean : undefined;
			var bearPower = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* isDefined */])(mean) ? ohlc(datum).low - mean : undefined;
			return { bullPower: bullPower, bearPower: bearPower };
		});

		var newData = zip(data, meanAlgorithm(data));
		return newData;
	}
	calculator.undefinedLength = function () {
		var _options2 = options,
		    windowSize = _options2.windowSize;

		return windowSize - 1;
	};
	calculator.ohlc = function (x) {
		if (!arguments.length) {
			return ohlc;
		}
		ohlc = x;
		return calculator;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["c" /* ElderRay */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



/* harmony default export */ __webpack_exports__["a"] = (function () {

	var source = __WEBPACK_IMPORTED_MODULE_0__utils__["g" /* identity */];

	function calculator(data) {
		var algorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["G" /* mappedSlidingWindow */])().windowSize(2).undefinedValue(function (_ref) {
			var open = _ref.open,
			    high = _ref.high,
			    low = _ref.low,
			    close = _ref.close;

			close = (open + high + low + close) / 4;
			return { open: open, high: high, low: low, close: close };
		}).accumulator(function (_ref2) {
			var _ref3 = _slicedToArray(_ref2, 2),
			    prev = _ref3[0],
			    now = _ref3[1];

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
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__atr__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["n" /* Kagi */];
	var dateAccessor = function dateAccessor(d) {
		return d.date;
	};
	var dateMutator = function dateMutator(d, date) {
		d.date = date;
	};

	function calculator(data) {
		var _options = options,
		    reversalType = _options.reversalType,
		    windowSize = _options.windowSize,
		    reversal = _options.reversal,
		    sourcePath = _options.sourcePath;


		var source = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* path */])(sourcePath);
		var reversalThreshold = void 0;

		if (reversalType === "ATR") {
			// calculateATR(rawData, period);
			var atrAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__atr__["a" /* default */])().options({ windowSize: windowSize });

			var atrCalculator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["F" /* merge */])().algorithm(atrAlgorithm).merge(function (d, c) {
				d["atr" + windowSize] = c;
			});

			atrCalculator(data);
			reversalThreshold = function reversalThreshold(d) {
				return d["atr" + windowSize];
			};
		} else {
			reversalThreshold = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* functor */])(reversal);
		}

		var kagiData = [];

		var prevPeak = void 0,
		    prevTrough = void 0,
		    direction = void 0;
		var line = {};

		data.forEach(function (d) {
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(line.from)) {
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

				var nextChangePoint = void 0,
				    nextChangeTo = void 0;
				if (direction < 0 /* if direction so far has been -ve*/) {
						// compare with line.close becomes prevTrough
						if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(prevPeak)) prevPeak = line.open;
						prevTrough = line.close;
						if (source(d) > prevPeak) {
							nextChangePoint = prevPeak;
							nextChangeTo = "yang";
						}
					} else {
					if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(prevTrough)) prevTrough = line.open;
					prevPeak = line.close;
					if (source(d) < prevTrough) {
						nextChangePoint = prevTrough;
						nextChangeTo = "yin";
					}
				}
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(line.startAs)) {
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
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["n" /* Kagi */], x);
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
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ema__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (function () {
	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["k" /* MACD */];

	function calculator(data) {
		var _options = options,
		    fast = _options.fast,
		    slow = _options.slow,
		    signal = _options.signal,
		    sourcePath = _options.sourcePath;


		var fastEMA = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ema__["a" /* default */])().options({ windowSize: fast, sourcePath: sourcePath });

		var slowEMA = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ema__["a" /* default */])().options({ windowSize: slow, sourcePath: sourcePath });

		var signalEMA = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ema__["a" /* default */])().options({ windowSize: signal, sourcePath: undefined });

		var macdCalculator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["p" /* zipper */])().combine(function (fastEMA, slowEMA) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(fastEMA) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(slowEMA) ? fastEMA - slowEMA : undefined;
		});

		var macdArray = macdCalculator(fastEMA(data), slowEMA(data));

		var undefinedArray = new Array(slow);
		var signalArray = undefinedArray.concat(signalEMA(macdArray.slice(slow)));

		var zip = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["p" /* zipper */])().combine(function (macd, signal) {
			return {
				macd: macd,
				signal: signal,
				divergence: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(macd) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(signal) ? macd - signal : undefined
			};
		});

		var macd = zip(macdArray, signalArray);

		return macd;
	}

	calculator.undefinedLength = function () {
		var _options2 = options,
		    slow = _options2.slow,
		    signal = _options2.signal;

		return slow + signal - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["k" /* MACD */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




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
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(d.open)) d.open = eachBox.open;
			d.close = eachBox.close;
			d.high = Math.max(d.open, d.close);
			d.low = Math.min(d.open, d.close);

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(d.fromDate)) d.fromDate = eachBox.fromDate;
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(d.date)) d.date = eachBox.date;
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

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var options = __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["m" /* PointAndFigure */];
	var dateAccessor = function dateAccessor(d) {
		return d.date;
	};
	var dateMutator = function dateMutator(d, date) {
		d.date = date;
	};

	function calculator(rawData) {
		var _options = options,
		    reversal = _options.reversal,
		    boxSize = _options.boxSize,
		    sourcePath = _options.sourcePath;


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
						var prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(box, dateAccessor, dateMutator);
						// box = cloneMe(box);
						box.open = prevBoxClose;
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
						var _prevBoxClose = box.close;
						column.boxes.push(box);
						box = createBox(d, dateAccessor, dateMutator);
						box.open = _prevBoxClose;
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
							var _prevBoxClose2 = box.close;
							column.boxes.push(box);
							box = createBox(d, dateAccessor, dateMutator);
							box.open = _prevBoxClose2;
						}

						columnData.push(column);
					}
			}
		});
		updateColumns(columnData, dateAccessor, dateMutator);

		return columnData;
	}
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["m" /* PointAndFigure */], x);
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
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__atr__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







/* harmony default export */ __webpack_exports__["a"] = (function () {
	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["l" /* Renko */];

	var dateAccessor = function dateAccessor(d) {
		return d.date;
	};
	var dateMutator = function dateMutator(d, date) {
		d.date = date;
	};

	function calculator(rawData) {
		var _options = options,
		    reversalType = _options.reversalType,
		    fixedBrickSize = _options.fixedBrickSize,
		    sourcePath = _options.sourcePath,
		    windowSize = _options.windowSize;


		var source = sourcePath === "high/low" ? function (d) {
			return { high: d.high, low: d.low };
		} : function (d) {
			return { high: d.close, low: d.close };
		};

		var pricingMethod = source;
		var brickSize = void 0;

		if (reversalType === "ATR") {
			// calculateATR(rawData, period);
			var atrAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__atr__["a" /* default */])().options({ windowSize: windowSize });

			var atrCalculator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["F" /* merge */])().algorithm(atrAlgorithm).merge(function (d, c) {
				d["atr" + windowSize] = c;
			});

			atrCalculator(rawData);
			brickSize = function brickSize(d) {
				return d["atr" + windowSize];
			};
		} else {
			brickSize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* functor */])(fixedBrickSize);
		}

		var renkoData = [];

		var index = 0,
		    prevBrickClose = rawData[index].open,
		    prevBrickOpen = rawData[index].open;
		var brick = {},
		    direction = 0;

		rawData.forEach(function (d, idx) {
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(brick.from)) {
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
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["l" /* Renko */], x);
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
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["j" /* RSI */];

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize,
		    sourcePath = _options.sourcePath;


		var source = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* path */])(sourcePath);
		var prevAvgGain = void 0,
		    prevAvgLoss = void 0;
		var rsiAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().windowSize(windowSize).accumulator(function (values) {

			var avgGain = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(prevAvgGain) ? (prevAvgGain * (windowSize - 1) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* last */])(values).gain) / windowSize : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["o" /* mean */])(values, function (each) {
				return each.gain;
			});

			var avgLoss = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(prevAvgLoss) ? (prevAvgLoss * (windowSize - 1) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* last */])(values).loss) / windowSize : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["o" /* mean */])(values, function (each) {
				return each.loss;
			});

			var relativeStrength = avgGain / avgLoss;
			var rsi = 100 - 100 / (1 + relativeStrength);

			prevAvgGain = avgGain;
			prevAvgLoss = avgLoss;

			return rsi;
		});

		var gainsAndLossesCalculator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().windowSize(2).undefinedValue(function () {
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
		var _options2 = options,
		    windowSize = _options2.windowSize;


		return windowSize - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["j" /* RSI */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




function calc(prev, now) {
	var risingSar = prev.risingSar + prev.af * (prev.risingEp - prev.risingSar);

	var fallingSar = prev.fallingSar - prev.af * (prev.fallingSar - prev.fallingEp);

	var risingEp = Math.max(prev.risingEp, now.high);
	var fallingEp = Math.min(prev.fallingEp, now.low);

	return {
		risingSar: risingSar,
		fallingSar: fallingSar,
		risingEp: risingEp,
		fallingEp: fallingEp
	};
}

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["b" /* SAR */];

	function calculator(data) {
		var _options = options,
		    accelerationFactor = _options.accelerationFactor,
		    maxAccelerationFactor = _options.maxAccelerationFactor;


		var algorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["G" /* mappedSlidingWindow */])().windowSize(2).undefinedValue(function (_ref) {
			var high = _ref.high,
			    low = _ref.low;

			return {
				risingSar: low,
				risingEp: high,
				fallingSar: high,
				fallingEp: low,
				af: accelerationFactor
			};
		}).accumulator(function (_ref2) {
			var _ref3 = _slicedToArray(_ref2, 2),
			    prev = _ref3[0],
			    now = _ref3[1];

			var _calc = calc(prev, now),
			    risingSar = _calc.risingSar,
			    fallingSar = _calc.fallingSar,
			    risingEp = _calc.risingEp,
			    fallingEp = _calc.fallingEp;

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* isNotDefined */])(prev.use) && risingSar > now.low && fallingSar < now.high) {
				return {
					risingSar: risingSar,
					fallingSar: fallingSar,
					risingEp: risingEp,
					fallingEp: fallingEp
				};
			}

			var use = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isDefined */])(prev.use) ? prev.use === "rising" ? risingSar > now.low ? "falling" : "rising" : fallingSar < now.high ? "rising" : "falling" : risingSar > now.low ? "falling" : "rising";

			var current = prev.use === use ? {
				af: Math.min(maxAccelerationFactor, prev.af + accelerationFactor),
				fallingEp: fallingEp,
				risingEp: risingEp,
				fallingSar: fallingSar,
				risingSar: risingSar
			} : {
				af: accelerationFactor,
				fallingEp: now.low,
				risingEp: now.high,
				fallingSar: Math.max(prev.risingEp, now.high),
				risingSar: Math.min(prev.fallingEp, now.low)
			};

			var date = now.date,
			    high = now.high,
			    low = now.low;

			return _extends({
				date: date,
				high: high,
				low: low
			}, current, {
				use: use,
				sar: use === "falling" ? current.fallingSar : current.risingSar
			});
		});

		var calculatedData = algorithm(data).map(function (d) {
			return d.sar;
		});
		// console.log(calculatedData);

		return calculatedData;
	}
	calculator.undefinedLength = function () {
		return 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptionsForComputation__["b" /* SAR */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forceIndex__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ema__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sma__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







/* unused harmony default export */ var _unused_webpack_default_export = (function () {

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__forceIndex__["a" /* default */])();
	var merge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["p" /* zipper */])().combine(function (force, smoothed) {
		return { force: force, smoothed: smoothed };
	});

	var options = __WEBPACK_IMPORTED_MODULE_4__defaultOptionsForComputation__["e" /* SmoothedForceIndex */];
	function calculator(data) {
		var _options = options,
		    smoothingType = _options.smoothingType,
		    smoothingWindow = _options.smoothingWindow;
		var _options2 = options,
		    sourcePath = _options2.sourcePath,
		    volumePath = _options2.volumePath;


		var algo = underlyingAlgorithm.options({ sourcePath: sourcePath, volumePath: volumePath });

		var force = algo(data);

		var ma = smoothingType === "ema" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ema__["a" /* default */])() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sma__["a" /* default */])();
		var forceMA = ma.options({
			windowSize: smoothingWindow,
			sourcePath: undefined
		});

		var smoothed = forceMA(force);
		return merge(force, smoothed);
	}

	calculator.undefinedLength = function () {
		var _options3 = options,
		    smoothingWindow = _options3.smoothingWindow;

		return underlyingAlgorithm.undefinedLength() + smoothingWindow - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_4__defaultOptionsForComputation__["e" /* SmoothedForceIndex */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["i" /* FullStochasticOscillator */];

	var source = function source(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize,
		    kWindowSize = _options.kWindowSize,
		    dWindowSize = _options.dWindowSize;


		var high = function high(d) {
			return source(d).high;
		},
		    low = function low(d) {
			return source(d).low;
		},
		    close = function close(d) {
			return source(d).close;
		};

		var kWindow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().windowSize(windowSize).accumulator(function (values) {

			var highestHigh = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["m" /* max */])(values, high);
			var lowestLow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["i" /* min */])(values, low);

			var currentClose = close(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* last */])(values));
			var k = (currentClose - lowestLow) / (highestHigh - lowestLow) * 100;

			return k;
		});

		var kSmoothed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().skipInitial(windowSize - 1).windowSize(kWindowSize).accumulator(function (values) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["o" /* mean */])(values);
		});

		var dWindow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().skipInitial(windowSize - 1 + kWindowSize - 1).windowSize(dWindowSize).accumulator(function (values) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["o" /* mean */])(values);
		});

		var stoAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["p" /* zipper */])().combine(function (K, D) {
			return { K: K, D: D };
		});

		var kData = kSmoothed(kWindow(data));
		var dData = dWindow(kData);

		var indicatorData = stoAlgorithm(kData, dData);

		return indicatorData;
	}
	calculator.undefinedLength = function () {
		var _options2 = options,
		    windowSize = _options2.windowSize,
		    kWindowSize = _options2.kWindowSize,
		    dWindowSize = _options2.dWindowSize;

		return windowSize + kWindowSize + dWindowSize;
	};
	calculator.source = function (x) {
		if (!arguments.length) {
			return source;
		}
		source = x;
		return calculator;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["i" /* FullStochasticOscillator */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);


/*
 TRIMA (Triangular Moving Average).

 The Triangular Moving Average can be used like any other Moving Average, to obtain a smoother representation of the underlying data.
 It is important to note that the Triangular Moving Average is typically much smoother than other moving averages.

 Triangular moving averages give greater weight to prices at the centre of the chosen period andi it is calculated as double smoothed SMA (simple moving average).

 Examples:
   For TimeSerie={a,b,c,d,e,f...} ('a' is the older price)

   1st value for TMA 4-Period is:  ((1*a)+(2*b)+(2*c)+(1*d)) / 6
   2nd value for TMA 4-Period is:  ((1*b)+(2*c)+(2*d)+(1*e)) / 6

   1st value for TMA 5-Period is:  ((1*a)+(2*b)+(3*c)+(2*d)+(1*e)) / 9
   2nd value for TMA 5-Period is:  ((1*b)+(2*c)+(3*d)+(2*e)+(1*f)) / 9

 Using algebra, it can be demonstrated that the TMA is equivalent to
 doing a SMA of a SMA. The following explain the rules:

   (1) When the period is even, TMA(x,period)=SMA(SMA(x,period/2),(period/2)+1)
   (2) When the period is odd,  TMA(x,period)=SMA(SMA(x,(period+1)/2),(period+1)/2)

 In other word:
   (1) A period of 4 becomes TMA(x,4) = SMA( SMA( x, 2), 3 )
   (2) A period of 5 becomes TMA(x,5) = SMA( SMA( x, 3), 3 )

 The SMA of a SMA is the algorithm generally found in books.
*/

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (function () {
	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["p" /* TMA */];

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize,
		    sourcePath = _options.sourcePath;


		var n = Math.floor(windowSize / 2);
		var weight = windowSize % 2 === 0 ? n * (n + 1) : (n + 1) * (n + 1);

		var triaverage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().windowSize(windowSize).sourcePath(sourcePath).accumulator(function (values) {
			var total = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["l" /* sum */])(values, function (v, i) {
				return i < n ? (i + 1) * v : (windowSize - i) * v;
			});
			return total / weight;
		});

		return triaverage(data);
	}
	calculator.undefinedLength = function () {
		var _options2 = options,
		    windowSize = _options2.windowSize;

		return windowSize - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["p" /* TMA */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__ = __webpack_require__(17);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (function () {

	var options = __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["q" /* WMA */];

	function calculator(data) {
		var _options = options,
		    windowSize = _options.windowSize,
		    sourcePath = _options.sourcePath;


		var weight = windowSize * (windowSize + 1) / 2;

		var waverage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().windowSize(windowSize).sourcePath(sourcePath).accumulator(function (values) {
			var total = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["l" /* sum */])(values, function (v, i) {
				return (i + 1) * v;
			});
			return total / weight;
		});

		return waverage(data);
	}
	calculator.undefinedLength = function () {
		var _options2 = options,
		    windowSize = _options2.windowSize;


		return windowSize - 1;
	};
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForComputation__["q" /* WMA */], x);
		return calculator;
	};

	return calculator;
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CrossHairCursor = function (_Component) {
	_inherits(CrossHairCursor, _Component);

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
			var lines = helper(this.props, moreProps);

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* isDefined */])(lines)) {
				var _context = this.context,
				    margin = _context.margin,
				    ratio = _context.ratio;

				var originX = 0.5 * ratio + margin.left;
				var originY = 0.5 * ratio + margin.top;

				ctx.save();
				ctx.setTransform(1, 0, 0, 1, 0, 0);
				ctx.scale(ratio, ratio);

				ctx.translate(originX, originY);

				lines.forEach(function (line) {
					var dashArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getStrokeDasharray */])(line.strokeDasharray).split(",").map(function (d) {
						return +d;
					});

					ctx.strokeStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* hexToRGBA */])(line.stroke, line.opacity);
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

			var lines = helper(this.props, moreProps);

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isNotDefined */])(lines)) return null;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: "react-stockcharts-crosshair " + className },
				lines.map(function (_ref, idx) {
					var strokeDasharray = _ref.strokeDasharray,
					    rest = _objectWithoutProperties(_ref, ["strokeDasharray"]);

					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", _extends({
						key: idx,
						strokeDasharray: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getStrokeDasharray */])(strokeDasharray)
					}, rest));
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GenericComponent__["b" /* default */], {
				svgDraw: this.renderSVG,
				clip: false,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_2__GenericComponent__["a" /* getMouseCanvas */],
				drawOn: ["mousemove", "pan"]
			});
		}
	}]);

	return CrossHairCursor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CrossHairCursor.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	strokeDasharray: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_3__utils__["k" /* strokeDashTypes */])
};

CrossHairCursor.contextTypes = {
	margin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
};

CrossHairCursor.defaultProps = {
	stroke: "#000000",
	opacity: 0.3,
	strokeDasharray: "ShortDash",
	snapX: true
};

function helper(props, _ref2) {
	var mouseXY = _ref2.mouseXY,
	    xScale = _ref2.xScale,
	    currentItem = _ref2.currentItem,
	    show = _ref2.show,
	    height = _ref2.height,
	    width = _ref2.width,
	    xAccessor = _ref2.xAccessor;
	var snapX = props.snapX,
	    stroke = props.stroke,
	    opacity = props.opacity,
	    strokeDasharray = props.strokeDasharray;


	if (!show || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isNotDefined */])(currentItem)) return null;

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

/* harmony default export */ __webpack_exports__["a"] = (CrossHairCursor);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var circle = helper(this.props, moreProps);
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


			var circle = helper(this.props, moreProps);
			if (!circle) return null;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { className: className, cx: circle.x, cy: circle.y, r: circle.r, fill: circle.fill });
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["a" /* getMouseCanvas */],
				drawOn: ["mousemove", "pan"]
			});
		}
	}]);

	return CurrentCoordinate;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CurrentCoordinate.propTypes = {
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	r: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

CurrentCoordinate.defaultProps = {
	r: 3,
	className: "react-stockcharts-current-coordinate"
};

function helper(props, moreProps) {
	var fill = props.fill,
	    yAccessor = props.yAccessor,
	    r = props.r;
	var show = moreProps.show,
	    xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    currentItem = moreProps.currentItem,
	    xAccessor = moreProps.xAccessor;

	// console.log(show);

	if (!show || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isNotDefined */])(currentItem)) return null;

	var xValue = xAccessor(currentItem);
	var yValue = yAccessor(currentItem);

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isNotDefined */])(yValue)) return null;

	// console.log(chartConfig);
	var x = Math.round(xScale(xValue));
	var y = Math.round(yScale(yValue));

	return { x: x, y: y, r: r, fill: fill };
}

/* harmony default export */ __webpack_exports__["a"] = (CurrentCoordinate);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EdgeCoordinateV2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var edge = helper(this.props, moreProps);
			var props = _extends({}, this.props, edge);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__EdgeCoordinateV2__["a" /* drawOnCanvas */])(ctx, props);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var edge = helper(this.props, moreProps);
			var props = _extends({}, this.props, edge);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__EdgeCoordinateV2__["b" /* renderSVG */])(props);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__GenericChartComponent__["a" /* default */], {
				edgeClip: true,
				clip: false,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_5__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}]);

	return EdgeIndicator;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

EdgeIndicator.propTypes = {
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

	type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["horizontal"]).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	textFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	itemType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["first", "last"]).isRequired,
	orient: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["left", "right"]),
	edgeAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["left", "right"]),
	displayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	rectHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	rectWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	arrowWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
};

EdgeIndicator.defaultProps = {
	className: "react-stockcharts-edgeindicator",

	type: "horizontal",
	orient: "left",
	edgeAt: "left",
	textFill: "#FFFFFF",
	displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f"),
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

function helper(props, moreProps) {
	var itemType = props.itemType,
	    yAccessor = props.yAccessor;
	var plotData = moreProps.plotData;


	var item = itemType === "first" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["l" /* first */])(plotData, yAccessor) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* last */])(plotData, yAccessor);

	// var currentItem = ChartDataUtil.getCurrentItemForChartNew(currentItems, forChart);
	var edge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* isDefined */])(item) ? getEdge(props, moreProps, item) : null;

	return edge;
}

function getEdge(props, moreProps, item) {
	var edgeType = props.type,
	    displayFormat = props.displayFormat,
	    edgeAt = props.edgeAt,
	    yAxisPad = props.yAxisPad,
	    orient = props.orient;
	var yAccessor = props.yAccessor,
	    fill = props.fill,
	    textFill = props.textFill,
	    rectHeight = props.rectHeight,
	    rectWidth = props.rectWidth,
	    arrowWidth = props.arrowWidth;
	var fontFamily = props.fontFamily,
	    fontSize = props.fontSize;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    xAccessor = moreProps.xAccessor;


	var yValue = yAccessor(item),
	    xValue = xAccessor(item);

	var x1 = Math.round(xScale(xValue)),
	    y1 = Math.round(yScale(yValue));

	var _xScale$range = xScale.range(),
	    _xScale$range2 = _slicedToArray(_xScale$range, 2),
	    left = _xScale$range2[0],
	    right = _xScale$range2[1];

	var edgeX = edgeAt === "left" ? left - yAxisPad : right + yAxisPad;

	return {
		// ...props,
		coordinate: displayFormat(yValue),
		show: true,
		type: edgeType,
		orient: orient,
		edgeAt: edgeX,
		fill: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* functor */])(fill)(item),
		fontFamily: fontFamily, fontSize: fontSize,
		textFill: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* functor */])(textFill)(item),
		rectHeight: rectHeight, rectWidth: rectWidth, arrowWidth: arrowWidth,
		x1: x1,
		y1: y1,
		x2: edgeX,
		y2: y1
	};
}

/* harmony default export */ __webpack_exports__["a"] = (EdgeIndicator);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var props = helper(this.props, moreProps);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(props)) return null;

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__["a" /* drawOnCanvas */])(ctx, props);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var props = helper(this.props, moreProps);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(props)) return null;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__["b" /* renderSVG */])(props);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				clip: false,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["a" /* getMouseCanvas */],
				drawOn: ["mousemove", "pan" /*  , "mouseleave"*/]
			});
		}
	}]);

	return MouseCoordinateX;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

MouseCoordinateX.propTypes = {
	displayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
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

function helper(props, moreProps) {
	var xAccessor = moreProps.xAccessor,
	    displayXAccessor = moreProps.displayXAccessor;
	var show = moreProps.show,
	    currentItem = moreProps.currentItem,
	    xScale = moreProps.xScale,
	    mouseXY = moreProps.mouseXY;
	var height = moreProps.chartConfig.height;


	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(currentItem)) return null;

	var snapX = props.snapX;
	var orient = props.orient,
	    at = props.at,
	    rectWidth = props.rectWidth,
	    rectHeight = props.rectHeight,
	    displayFormat = props.displayFormat;
	var fill = props.fill,
	    opacity = props.opacity,
	    fontFamily = props.fontFamily,
	    fontSize = props.fontSize,
	    textFill = props.textFill;


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

/* harmony default export */ __webpack_exports__["a"] = (MouseCoordinateX);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var props = helper(this.props, moreProps);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(props)) return null;

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__["a" /* drawOnCanvas */])(ctx, props);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var props = helper(this.props, moreProps);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(props)) return null;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__["b" /* renderSVG */])(props);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				clip: false,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["a" /* getMouseCanvas */],
				drawOn: ["mousemove", "pan" /*  , "mouseleave"*/]
			});
		}
	}]);

	return MouseCoordinateY;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

MouseCoordinateY.propTypes = {
	displayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
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

function helper(props, moreProps) {
	var chartId = moreProps.chartId,
	    width = moreProps.width;
	var show = moreProps.show,
	    currentCharts = moreProps.currentCharts,
	    _moreProps$chartConfi = moreProps.chartConfig,
	    yScale = _moreProps$chartConfi.yScale,
	    origin = _moreProps$chartConfi.origin,
	    mouseXY = moreProps.mouseXY;


	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(mouseXY)) return null;

	if (currentCharts.indexOf(chartId) < 0) return null;

	var orient = props.orient,
	    at = props.at,
	    rectWidth = props.rectWidth,
	    rectHeight = props.rectHeight,
	    displayFormat = props.displayFormat,
	    dx = props.dx;
	var fill = props.fill,
	    opacity = props.opacity,
	    fontFamily = props.fontFamily,
	    fontSize = props.fontSize,
	    textFill = props.textFill,
	    arrowWidth = props.arrowWidth;


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

/* harmony default export */ __webpack_exports__["a"] = (MouseCoordinateY);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var PriceCoordinate = function (_Component) {
	_inherits(PriceCoordinate, _Component);

	function PriceCoordinate(props) {
		_classCallCheck(this, PriceCoordinate);

		var _this = _possibleConstructorReturn(this, (PriceCoordinate.__proto__ || Object.getPrototypeOf(PriceCoordinate)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(PriceCoordinate, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			// This is needed to trigger the render code before any mouse movements
			// to force the marker to show the instant the chart is loaded. Otherwise,
			// it will only appear when it detects mouse movement.
			this.refs.genericChartComponent.draw({ trigger: "pan", force: true });
		}
	}, {
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var props = helper(this.props, moreProps);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(props)) return null;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__["a" /* drawOnCanvas */])(ctx, props);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var props = helper(this.props, moreProps);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(props)) return null;
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__EdgeCoordinateV2__["b" /* renderSVG */])(props);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				ref: "genericChartComponent",
				clip: false,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["a" /* getMouseCanvas */],
				drawOn: ["mousemove", "pan" /*  , "mouseleave"*/]
			});
		}
	}]);

	return PriceCoordinate;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PriceCoordinate.propTypes = {
	displayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

PriceCoordinate.defaultProps = {
	yAxisPad: 0,
	rectWidth: 50,
	rectHeight: 20,
	orient: "left",
	at: "left",
	price: 0,
	dx: 0,
	arrowWidth: 0,
	fill: "#BAB8b8",
	opacity: 1,
	lineOpacity: 0.2,
	lineStroke: "#000000",
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 13,
	textFill: "#FFFFFF"
};

function helper(props, moreProps) {
	var width = moreProps.width;
	var yScale = moreProps.chartConfig.yScale;

	var lowerPrice = yScale.domain()[0];
	var upperPrice = yScale.domain()[1];
	var lowerYValue = yScale.range()[0];
	var upperYValue = yScale.range()[1];
	var rangeSlope = (lowerPrice - upperPrice) / (lowerYValue - upperYValue);

	var orient = props.orient,
	    at = props.at,
	    rectWidth = props.rectWidth,
	    rectHeight = props.rectHeight,
	    displayFormat = props.displayFormat,
	    dx = props.dx,
	    price = props.price;
	var fill = props.fill,
	    opacity = props.opacity,
	    fontFamily = props.fontFamily,
	    fontSize = props.fontSize,
	    textFill = props.textFill,
	    arrowWidth = props.arrowWidth,
	    lineOpacity = props.lineOpacity,
	    lineStroke = props.lineStroke;


	var x1 = 0,
	    x2 = width;
	var edgeAt = at === "right" ? width : 0;

	var type = "horizontal";
	var priceShowTolerance = 5;

	var y = 0;
	var show = void 0;

	if (price < upperPrice + priceShowTolerance || price > lowerPrice - priceShowTolerance) {
		y = price / rangeSlope + (lowerYValue - lowerPrice / rangeSlope);
		show = true;
	} else {
		show = false;
	}

	var coordinate = displayFormat(yScale.invert(y));
	var hideLine = false;

	var coordinateProps = {
		coordinate: coordinate,
		show: show,
		type: type,
		orient: orient,
		edgeAt: edgeAt,
		hideLine: hideLine,
		lineOpacity: lineOpacity,
		lineStroke: lineStroke,
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

/* harmony default export */ __webpack_exports__["a"] = (PriceCoordinate);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_save_svg_as_png__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_save_svg_as_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_save_svg_as_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);





var SaveChartAsImage = {
	save: function save(doc, container, background, cb) {
		__WEBPACK_IMPORTED_MODULE_0_save_svg_as_png___default.a.svgAsDataUri(container.getElementsByTagName("svg")[0], {}, function (uri) {
			// eslint-disable-next-line prefer-const
			var image = new Image();
			image.onload = function () {

				// eslint-disable-next-line prefer-const
				var canvas = doc.createElement("canvas");
				canvas.width = image.width;
				canvas.height = image.height;

				// eslint-disable-next-line prefer-const
				var context = canvas.getContext("2d");

				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(background)) {
					context.fillStyle = background;
					context.fillRect(0, 0, canvas.width, canvas.height);
				}
				var canvasList = container.getElementsByTagName("canvas");
				for (var i = 0; i < canvasList.length; i++) {
					var each = canvasList[i];
					if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(each)) {
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

/* harmony default export */ __webpack_exports__["a"] = (SaveChartAsImage);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"label",
					null,
					"Type: "
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"select",
					{ name: "type", id: "type", onChange: this.handleTypeChange, value: this.state.type },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"option",
						{ value: "svg" },
						"svg"
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"option",
						{ value: "hybrid" },
						"canvas + svg"
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ style: this.props.style },
					this.props.children(this.state.type)
				)
			);
		}
	}]);

	return TypeChooser;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TypeChooser.propTypes = {
	type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["svg", "hybrid"]),
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

TypeChooser.defaultProps = {
	type: "hybrid",
	style: {}
};

/* harmony default export */ __webpack_exports__["a"] = (TypeChooser);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* unused harmony export default */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function getDisplayName(Series) {
	var name = Series.displayName || Series.name || "Series";
	return name;
}

function fitDimensions(WrappedComponent) {
	var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var _props$minWidth = props.minWidth,
	    minWidth = _props$minWidth === undefined ? 100 : _props$minWidth,
	    _props$minHeight = props.minHeight,
	    minHeight = _props$minHeight === undefined ? 100 : _props$minHeight,
	    ratio = props.ratio,
	    width = props.width,
	    height = props.height;


	function getDimensions(el) {
		var w = el.parentNode.clientWidth;
		var h = el.parentNode.clientHeight;

		return {
			width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isDefined */])(width) ? width : Math.max(w, minWidth),
			height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isDefined */])(height) ? height : Math.max(h, minHeight)
		};
	}

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
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isDefined */])(this.testCanvas)) {
					var context = this.testCanvas.getContext("2d");

					var devicePixelRatio = window.devicePixelRatio || 1;
					var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;

					var _ratio = devicePixelRatio / backingStoreRatio;
					// console.log("ratio = ", ratio);
					return _ratio;
				}
				return 1;
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("resize", this.handleWindowResize);
				var dimensions = getDimensions(this.node);

				/* eslint-disable react/no-did-mount-set-state */
				this.setState(_extends({}, dimensions, {
					ratio: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isDefined */])(ratio) ? ratio : this.getRatio()
				}));
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
				var node = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.node); // eslint-disable-line react/no-find-dom-node
				this.setState(getDimensions(node));
			}
		}, {
			key: "getWrappedInstance",
			value: function getWrappedInstance() {
				return this.node;
			}
		}, {
			key: "render",
			value: function render() {
				var ref = { ref: this.saveNode };

				if (this.state.width) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({
						height: this.state.height,
						width: this.state.width,
						ratio: this.state.ratio
					}, this.props, ref));
				} else {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						ref,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", { ref: this.setTestCanvas })
					);
				}
			}
		}]);

		return ResponsiveComponent;
	}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

	ResponsiveComponent.displayName = "fitDimensions(" + getDisplayName(WrappedComponent) + ")";

	return ResponsiveComponent;
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = fitWidth;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function getDisplayName(Series) {
	var name = Series.displayName || Series.name || "Series";
	return name;
}

function fitWidth(WrappedComponent) {
	var withRef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	var minWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

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
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isDefined */])(this.testCanvas)) {
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
				var el = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.node); // eslint-disable-line react/no-find-dom-node
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
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({ width: this.state.width, ratio: this.state.ratio }, this.props, ref));
				} else {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						ref,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", { ref: this.setTestCanvas })
					);
				}
			}
		}]);

		return ResponsiveComponent;
	}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

	ResponsiveComponent.displayName = "fitWidth(" + getDisplayName(WrappedComponent) + ")";

	return ResponsiveComponent;
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);









var ALGORITHM_TYPE = "ATR";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["g" /* atr */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.atr = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseIndicator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculator__ = __webpack_require__(21);









var ALGORITHM_TYPE = "BollingerBand";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__calculator__["n" /* bollingerband */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.bollingerBand = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);









var ALGORITHM_TYPE = "Change";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["b" /* change */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.absoluteChange = indicator.absoluteChange;
		datum.percentChange = indicator.percentChange;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);









var ALGORITHM_TYPE = "Compare";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.compare;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["a" /* compare */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.compare = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge");

	return indicator;
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultOptionsForAppearance__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();








var ALGORITHM_TYPE = "ElderImpulse";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var macdSource = void 0,
	    emaSource = void 0;

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE)
	// .stroke(d => stroke[d.elderImpulse])
	.stroke(__WEBPACK_IMPORTED_MODULE_2__defaultOptionsForAppearance__["a" /* ElderImpulse */].stroke).fill(undefined);

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["y" /* slidingWindow */])().windowSize(2).undefinedValue("neutral").accumulator(function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    prev = _ref2[0],
		    curr = _ref2[1];

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* isNotDefined */])(macdSource)) throw new Error("macdSource not defined for " + ALGORITHM_TYPE + " calculator");
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* isNotDefined */])(emaSource)) throw new Error("emaSource not defined for " + ALGORITHM_TYPE + " calculator");

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(macdSource(prev)) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDefined */])(emaSource(prev))) {
			var prevMACDDivergence = macdSource(prev).divergence;
			var currMACDDivergence = macdSource(curr).divergence;

			var prevEMA = emaSource(prev);
			var currEMA = emaSource(curr);

			if (currMACDDivergence >= prevMACDDivergence && currEMA >= prevEMA) return "up";

			if (currMACDDivergence <= prevMACDDivergence && currEMA <= prevEMA) return "down";
		}
		return "neutral";
	});

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.elderImpulse = indicator;
	});

	// eslint-disable-next-line prefer-const
	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		var newData = options.merge ? mergedAlgorithm(data) : underlyingAlgorithm(data);

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
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "echo", "type", "stroke");
	// rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);









var ALGORITHM_TYPE = "ElderRay";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.elderRay;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["c" /* elderRay */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.elderRay = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);








var ALGORITHM_TYPE = "EMA";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.ema;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["r" /* ema */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.ema = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options", "undefinedLength");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);









var ALGORITHM_TYPE = "ForceIndex";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.forceIndex;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["e" /* forceIndex */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.forceIndex = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseIndicator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var ALGORITHM_TYPE = "HeikinAshi";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.ha;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__calculator__["m" /* heikinAshi */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		return _extends({}, datum, indicator);
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "accessor", "stroke", "fill", "echo", "type");
	// rebind(indicator, underlyingAlgorithm, "windowSize", "source");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge");

	return indicator;
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseIndicator__ = __webpack_require__(18);







var ALGORITHM_TYPE = "Kagi";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__calculator__["l" /* kagi */])();

	var indicator = underlyingAlgorithm;

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");

	return indicator;
});

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultOptionsForAppearance__ = __webpack_require__(49);










var ALGORITHM_TYPE = "MACD";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).fill(__WEBPACK_IMPORTED_MODULE_4__defaultOptionsForAppearance__["b" /* MACD */].fill).stroke(__WEBPACK_IMPORTED_MODULE_4__defaultOptionsForAppearance__["b" /* MACD */].stroke).accessor(function (d) {
		return d.macd;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["i" /* macd */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.macd = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options", "undefinedLength");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseIndicator__ = __webpack_require__(18);







var ALGORITHM_TYPE = "PointAndFigure";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__calculator__["k" /* pointAndFigure */])();

	var indicator = underlyingAlgorithm;

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	// rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);

	return indicator;
});

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseIndicator__ = __webpack_require__(18);







var ALGORITHM_TYPE = "Renko";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__calculator__["j" /* renko */])();

	var indicator = underlyingAlgorithm;

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");

	return indicator;
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);









var ALGORITHM_TYPE = "RSI";

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.rsi;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["h" /* rsi */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.rsi = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options", "undefinedLength");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);










var ALGORITHM_TYPE = "SMA";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.sar;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["d" /* sar */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.sar = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "undefinedLength");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge");

	return indicator;
});

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);








var ALGORITHM_TYPE = "SMA";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.sma;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["q" /* sma */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.sma = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "undefinedLength");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);









var ALGORITHM_TYPE = "STO";

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["f" /* sto */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.sto = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options", "undefinedLength");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);










var ALGORITHM_TYPE = "TMA";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.tma;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["o" /* tma */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.tma = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "undefinedLength");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3fc_rebind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseIndicator__ = __webpack_require__(18);










var ALGORITHM_TYPE = "WMA";

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__baseIndicator__["a" /* default */])().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.wma;
	});

	var underlyingAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__calculator__["p" /* wma */])();

	var mergedAlgorithm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["F" /* merge */])().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.wma = indicator;
	});

	var indicator = function indicator(data) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { merge: true };

		if (options.merge) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		}
		return underlyingAlgorithm(data);
	};

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "undefinedLength");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, underlyingAlgorithm, "options");
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3fc_rebind__["rebind"])(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time_format__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__financeDiscontinuousScale__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["b"] = discontinuousTimeScaleProviderBuilder;


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


// import { map as d3Map } from "d3-collection";




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

var discontinuousIndexCalculator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["y" /* slidingWindow */])().windowSize(2).undefinedValue(function (d, idx, di) {
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
	var _ref2 = _slicedToArray(_ref, 2),
	    prevDate = _ref2[0],
	    nowDate = _ref2[1];

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
		/*
  var map = d3Map();
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
  	var entries = map.entries().sort((a, b) => a.value < b.value);
  	// For Renko/p&f
  	var interval = entries[0].value === 1
  	? Math.round((dateAccessor(last(data)) - dateAccessor(head(data))) / data.length)
  	: parseInt(entries[0].key, 10); */

		// return { index, interval };
		return { index: index };
	};
}

function discontinuousTimeScaleProviderBuilder() {
	var initialIndex = 0,
	    realDateAccessor = __WEBPACK_IMPORTED_MODULE_2__utils__["g" /* identity */];
	var inputDateAccessor = function inputDateAccessor(d) {
		return d.date;
	},
	    indexAccessor = function indexAccessor(d) {
		return d.idx;
	},
	    indexMutator = function indexMutator(d, idx) {
		return _extends({}, d, { idx: idx });
	},
	    withIndex = void 0,
	    withInterval = void 0;

	// eslint-disable-next-line prefer-const
	var discontinuousTimeScaleProvider = function discontinuousTimeScaleProvider(data) {
		console.warn("Are you sure you want to use a discontinuousTimeScale?" + " Use this only if you have discontinuous data which" + " needs to be displayed as continuous." + " If you have continuous data use a d3 scale like" + " `d3.scaleTime`");

		var index = withIndex;
		var interval = withInterval;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* isNotDefined */])(index)) {
			var response = doStuff(realDateAccessor, inputDateAccessor, initialIndex)(data);
			index = response.index;
			interval = response.interval;
		}
		// console.log(interval, entries[0].key);

		var inputIndex = index.map(function (each) {
			var format = each.format;

			return _extends({}, each, {
				date: new Date(each.date),
				format: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time_format__["c" /* timeFormat */])(format)
			});
		});

		var xScale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__financeDiscontinuousScale__["a" /* default */])(inputIndex, interval);

		var mergedData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["p" /* zipper */])().combine(indexMutator);

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

/* harmony default export */ __webpack_exports__["a"] = (discontinuousTimeScaleProviderBuilder());

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LineSeries__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AreaOnlySeries__ = __webpack_require__(52);








function AreaSeries(props) {
	var yAccessor = props.yAccessor,
	    baseAt = props.baseAt;
	var className = props.className,
	    opacity = props.opacity,
	    stroke = props.stroke,
	    strokeWidth = props.strokeWidth,
	    fill = props.fill;


	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		{ className: className },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LineSeries__["a" /* default */], {
			yAccessor: yAccessor,
			stroke: stroke, fill: "none",
			strokeWidth: strokeWidth,
			hoverHighlight: false }),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AreaOnlySeries__["a" /* default */], {
			yAccessor: yAccessor,
			base: baseAt,
			stroke: "none", fill: fill,
			opacity: opacity })
	);
}

AreaSeries.propTypes = {
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	baseAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

AreaSeries.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-area"
};

/* harmony default export */ __webpack_exports__["a"] = (AreaSeries);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LineSeries__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AreaOnlySeries__ = __webpack_require__(52);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && yAccessor(d).top;
		}
	}, {
		key: "yAccessorForMiddle",
		value: function yAccessorForMiddle(d) {
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && yAccessor(d).middle;
		}
	}, {
		key: "yAccessorForBottom",
		value: function yAccessorForBottom(d) {
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && yAccessor(d).bottom;
		}
	}, {
		key: "yAccessorForScalledBottom",
		value: function yAccessorForScalledBottom(scale, d) {
			var yAccessor = this.props.yAccessor;

			return scale(yAccessor(d) && yAccessor(d).bottom);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    areaClassName = _props.areaClassName,
			    className = _props.className,
			    opacity = _props.opacity;
			var _props2 = this.props,
			    stroke = _props2.stroke,
			    fill = _props2.fill;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LineSeries__["a" /* default */], { yAccessor: this.yAccessorForTop,
					stroke: stroke.top, fill: "none" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LineSeries__["a" /* default */], { yAccessor: this.yAccessorForMiddle,
					stroke: stroke.middle, fill: "none" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LineSeries__["a" /* default */], { yAccessor: this.yAccessorForBottom,
					stroke: stroke.bottom, fill: "none" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AreaOnlySeries__["a" /* default */], { className: areaClassName,
					yAccessor: this.yAccessorForTop,
					base: this.yAccessorForScalledBottom,
					stroke: "none", fill: fill,
					opacity: opacity })
			);
		}
	}]);

	return BollingerSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BollingerSeries.propTypes = {
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	areaClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		middle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
	}).isRequired,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

BollingerSeries.defaultProps = {
	className: "react-stockcharts-bollinger-band-series",
	areaClassName: "react-stockcharts-bollinger-band-series-area",
	opacity: 0.2
};

/* harmony default export */ __webpack_exports__["a"] = (BollingerSeries);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			_drawOnCanvas(ctx, this.props, moreProps);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props,
			    className = _props.className,
			    wickClassName = _props.wickClassName,
			    candleClassName = _props.candleClassName;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData,
			    xAccessor = moreProps.xAccessor;


			var candleData = getCandleData(this.props, xAccessor, xScale, yScale, plotData);

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"g",
				{ className: className },
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"g",
					{ className: wickClassName, key: "wicks" },
					getWicksSVG(candleData)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"g",
					{ className: candleClassName, key: "candles" },
					getCandlesSVG(this.props, candleData)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			var clip = this.props.clip;

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				clip: clip,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}]);

	return CandlestickSeries;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

CandlestickSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	wickClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	candleClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	widthRatio: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
	width: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func]).isRequired,
	classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
	fill: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
	wickStroke: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
	yAccessor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	clip: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
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
	width: __WEBPACK_IMPORTED_MODULE_5__utils__["n" /* plotDataLengthBarWidth */],
	wickStroke: "#000000",
	// wickStroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
	fill: function fill(d) {
		return d.close > d.open ? "#6BA583" : "#FF0000";
	},
	// stroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
	stroke: "#000000",
	candleStrokeWidth: 0.5,
	// stroke: "none",
	widthRatio: 0.8,
	opacity: 0.5,
	clip: true
};

function getWicksSVG(candleData) {

	var wicks = candleData.map(function (each, idx) {
		var d = each.wick;
		return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", { key: idx,
			className: each.className,
			stroke: d.stroke,
			d: "M" + d.x + "," + d.y1 + " L" + d.x + "," + d.y2 + " M" + d.x + "," + d.y3 + " L" + d.x + "," + d.y4 });
	});

	return wicks;
}

function getCandlesSVG(props, candleData) {

	/* eslint-disable react/prop-types */
	var opacity = props.opacity,
	    candleStrokeWidth = props.candleStrokeWidth;
	/* eslint-enable react/prop-types */

	var candles = candleData.map(function (d, idx) {
		if (d.width <= 1) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("line", { className: d.className, key: idx,
			x1: d.x, y1: d.y, x2: d.x, y2: d.y + d.height,
			stroke: d.fill });else if (d.height === 0) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("line", { key: idx,
			x1: d.x, y1: d.y, x2: d.x + d.width, y2: d.y + d.height,
			stroke: d.fill });
		return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", { key: idx, className: d.className,
			fillOpacity: opacity,
			x: d.x, y: d.y, width: d.width, height: d.height,
			fill: d.fill, stroke: d.stroke, strokeWidth: candleStrokeWidth });
	});
	return candles;
}

function _drawOnCanvas(ctx, props, moreProps) {
	var opacity = props.opacity,
	    candleStrokeWidth = props.candleStrokeWidth;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    plotData = moreProps.plotData,
	    xAccessor = moreProps.xAccessor;

	// const wickData = getWickData(props, xAccessor, xScale, yScale, plotData);

	var candleData = getCandleData(props, xAccessor, xScale, yScale, plotData);

	var wickNest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["b" /* nest */])().key(function (d) {
		return d.wick.stroke;
	}).entries(candleData);

	wickNest.forEach(function (outer) {
		var key = outer.key,
		    values = outer.values;

		ctx.strokeStyle = key;
		ctx.fillStyle = key;
		values.forEach(function (each) {
			/*
   ctx.moveTo(d.x, d.y1);
   ctx.lineTo(d.x, d.y2);
   	ctx.beginPath();
   ctx.moveTo(d.x, d.y3);
   ctx.lineTo(d.x, d.y4);
   ctx.stroke(); */
			var d = each.wick;

			ctx.fillRect(d.x - 0.5, d.y1, 1, d.y2 - d.y1);
			ctx.fillRect(d.x - 0.5, d.y3, 1, d.y4 - d.y3);
		});
	});

	// const candleData = getCandleData(props, xAccessor, xScale, yScale, plotData);

	var candleNest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["b" /* nest */])().key(function (d) {
		return d.stroke;
	}).key(function (d) {
		return d.fill;
	}).entries(candleData);

	candleNest.forEach(function (outer) {
		var strokeKey = outer.key,
		    strokeValues = outer.values;

		if (strokeKey !== "none") {
			ctx.strokeStyle = strokeKey;
			ctx.lineWidth = candleStrokeWidth;
		}
		strokeValues.forEach(function (inner) {
			var key = inner.key,
			    values = inner.values;

			ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["i" /* hexToRGBA */])(key, opacity);

			values.forEach(function (d) {
				if (d.width <= 1) {
					// <line className={d.className} key={idx} x1={d.x} y1={d.y} x2={d.x} y2={d.y + d.height}/>
					/*
     ctx.beginPath();
     ctx.moveTo(d.x, d.y);
     ctx.lineTo(d.x, d.y + d.height);
     ctx.stroke();
     */
					ctx.fillRect(d.x - 0.5, d.y, 1, d.height);
				} else if (d.height === 0) {
					// <line key={idx} x1={d.x} y1={d.y} x2={d.x + d.width} y2={d.y + d.height} />
					/*
     ctx.beginPath();
     ctx.moveTo(d.x, d.y);
     ctx.lineTo(d.x + d.width, d.y + d.height);
     ctx.stroke();
     */
					ctx.fillRect(d.x, d.y - 0.5, d.width, 1);
				} else {
					/*
     ctx.beginPath();
     ctx.rect(d.x, d.y, d.width, d.height);
     ctx.closePath();
     ctx.fill();
     if (strokeKey !== "none") ctx.stroke();
     */
					ctx.fillRect(d.x, d.y, d.width, d.height);
					if (strokeKey !== "none") ctx.strokeRect(d.x, d.y, d.width, d.height);
				}
			});
		});
	});
}
/*
function getWickData(props, xAccessor, xScale, yScale, plotData) {

	const { classNames: classNameProp, wickStroke: wickStrokeProp, yAccessor } = props;
	const wickStroke = functor(wickStrokeProp);
	const className = functor(classNameProp);
	const wickData = plotData
			.filter(d => isDefined(yAccessor(d).close))
			.map(d => {
				// console.log(yAccessor);
				const ohlc = yAccessor(d);

				const x = Math.round(xScale(xAccessor(d))),
					y1 = yScale(ohlc.high),
					y2 = yScale(Math.max(ohlc.open, ohlc.close)),
					y3 = yScale(Math.min(ohlc.open, ohlc.close)),
					y4 = yScale(ohlc.low);

				return {
					x,
					y1,
					y2,
					y3,
					y4,
					className: className(ohlc),
					direction: (ohlc.close - ohlc.open),
					stroke: wickStroke(ohlc),
				};
			});
	return wickData;
}
*/

function getCandleData(props, xAccessor, xScale, yScale, plotData) {
	var wickStrokeProp = props.wickStroke;

	var wickStroke = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(wickStrokeProp);

	var classNames = props.classNames,
	    fillProp = props.fill,
	    strokeProp = props.stroke,
	    yAccessor = props.yAccessor;

	var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(classNames);

	var fill = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(fillProp);
	var stroke = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(strokeProp);

	var widthFunctor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(props.width);
	var width = widthFunctor(props, {
		xScale: xScale,
		xAccessor: xAccessor,
		plotData: plotData
	});

	var candleWidth = Math.round(width);

	var offset = Math.round(candleWidth === 1 ? 0 : 0.5 * width);

	// eslint-disable-next-line prefer-const
	var candles = [];

	for (var i = 0; i < plotData.length; i++) {
		var d = plotData[i];
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(yAccessor(d).close)) {
			var x = Math.round(xScale(xAccessor(d)));
			// const x = Math.round(xScale(xAccessor(d)) - offset);

			var ohlc = yAccessor(d);
			var y = Math.round(yScale(Math.max(ohlc.open, ohlc.close)));
			var height = Math.round(Math.abs(yScale(ohlc.open) - yScale(ohlc.close)));

			candles.push({
				// type: "line"
				x: x - offset,
				y: y,
				wick: {
					stroke: wickStroke(ohlc),
					x: x,
					y1: Math.round(yScale(ohlc.high)),
					y2: y,
					y3: y + height, // Math.round(yScale(Math.min(ohlc.open, ohlc.close))),
					y4: Math.round(yScale(ohlc.low))
				},
				height: height,
				width: offset * 2,
				className: className(ohlc),
				fill: fill(ohlc),
				stroke: stroke(ohlc),
				direction: ohlc.close - ohlc.open
			});
		}
	}

	return candles;
}

/* harmony default export */ __webpack_exports__["a"] = (CandlestickSeries);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);







function Circle(props) {
	var className = props.className,
	    stroke = props.stroke,
	    strokeWidth = props.strokeWidth,
	    opacity = props.opacity,
	    fill = props.fill,
	    point = props.point,
	    r = props.r;

	var radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* functor */])(r)(point.datum);
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { className: className,
		cx: point.x, cy: point.y,
		stroke: stroke, strokeWidth: strokeWidth,
		fillOpacity: opacity, fill: fill, r: radius });
}

Circle.propTypes = {
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	point: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		datum: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
	}).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	r: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired
};

Circle.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-marker-circle"
};

Circle.drawOnCanvas = function (props, point, ctx) {
	var stroke = props.stroke,
	    fill = props.fill,
	    opacity = props.opacity,
	    strokeWidth = props.strokeWidth;


	ctx.strokeStyle = stroke;
	ctx.lineWidth = strokeWidth;

	if (fill !== "none") {
		ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["i" /* hexToRGBA */])(fill, opacity);
	}

	Circle.drawOnCanvasWithNoStateChange(props, point, ctx);
};

Circle.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
	var r = props.r;

	var radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* functor */])(r)(point.datum);

	ctx.moveTo(point.x, point.y);
	ctx.beginPath();
	ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.fill();
};

/* harmony default export */ __webpack_exports__["a"] = (Circle);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OverlayBarSeries__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StraightLine__ = __webpack_require__(32);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ElderRaySeries = function (_Component) {
	_inherits(ElderRaySeries, _Component);

	function ElderRaySeries(props) {
		_classCallCheck(this, ElderRaySeries);

		var _this = _possibleConstructorReturn(this, (ElderRaySeries.__proto__ || Object.getPrototypeOf(ElderRaySeries)).call(this, props));

		_this.fillForEachBar = _this.fillForEachBar.bind(_this);
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
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && Math.max(yAccessor(d).bullPower, 0);
		}
	}, {
		key: "yAccessorBullTop",
		value: function yAccessorBullTop(d) {
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && (yAccessor(d).bullPower > 0 ? yAccessor(d).bullPower : undefined);
		}
	}, {
		key: "yAccessorBearTop",
		value: function yAccessorBearTop(d) {
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && (yAccessor(d).bearPower > 0 ? yAccessor(d).bearPower : undefined);
		}
	}, {
		key: "yAccessorBullBottom",
		value: function yAccessorBullBottom(d) {
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && (yAccessor(d).bullPower < 0 ? 0 : undefined);
		}
	}, {
		key: "yAccessorBearBottom",
		value: function yAccessorBearBottom(d) {
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && (yAccessor(d).bullPower < 0 || yAccessor(d).bullPower * yAccessor(d).bearPower < 0 // bullPower is +ve and bearPower is -ve
			? Math.min(0, yAccessor(d).bullPower) : undefined);
		}
	}, {
		key: "yAccessorForBarBase",
		value: function yAccessorForBarBase(xScale, yScale, d) {
			var yAccessor = this.props.yAccessor;

			var y = yAccessor(d) && Math.min(yAccessor(d).bearPower, 0);
			return yScale(y);
		}
	}, {
		key: "fillForEachBar",
		value: function fillForEachBar(d, yAccessorNumber) {
			var _props = this.props,
			    bullPowerFill = _props.bullPowerFill,
			    bearPowerFill = _props.bearPowerFill;

			return yAccessorNumber % 2 === 0 ? bullPowerFill : bearPowerFill;
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props,
			    className = _props2.className,
			    opacity = _props2.opacity,
			    stroke = _props2.stroke,
			    straightLineStroke = _props2.straightLineStroke,
			    straightLineOpacity = _props2.straightLineOpacity,
			    widthRatio = _props2.widthRatio;
			var clip = this.props.clip;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__OverlayBarSeries__["a" /* default */], {
					baseAt: this.yAccessorForBarBase,
					className: "react-stockcharts-elderray-bar",
					stroke: stroke,
					fill: this.fillForEachBar,
					opacity: opacity,
					widthRatio: widthRatio,
					clip: clip,
					yAccessor: [this.yAccessorBullTop, this.yAccessorBearTop, this.yAccessorBullBottom, this.yAccessorBearBottom] }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StraightLine__["a" /* default */], {
					className: "react-stockcharts-elderray-straight-line",
					yValue: 0,
					stroke: straightLineStroke,
					opacity: straightLineOpacity })
			);
		}
	}]);

	return ElderRaySeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ElderRaySeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	bullPowerFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	bearPowerFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	straightLineStroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	straightLineOpacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	widthRatio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	clip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

ElderRaySeries.defaultProps = {
	className: "react-stockcharts-elderray-series",
	straightLineStroke: "#000000",
	straightLineOpacity: 0.3,
	opacity: 0.5,
	stroke: true,
	bullPowerFill: "#6BA583",
	bearPowerFill: "#FF0000",
	widthRatio: 0.8,
	clip: true
};

/* harmony default export */ __webpack_exports__["a"] = (ElderRaySeries);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__ = __webpack_require__(40);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor;


			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__["c" /* drawOnCanvasHelper */])(ctx, this.props, moreProps, xAccessor, __WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__["d" /* identityStack */], postProcessor);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = moreProps.xAccessor;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: "react-stockcharts-grouped-bar-series" },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__["e" /* svgHelper */])(this.props, moreProps, xAccessor, __WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__["d" /* identityStack */], postProcessor)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_3__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}]);

	return GroupedBarSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

GroupedBarSeries.propTypes = {
	baseAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["up", "down"]).isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
	widthRatio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func)
};

GroupedBarSeries.defaultProps = _extends({}, __WEBPACK_IMPORTED_MODULE_4__StackedBarSeries__["f" /* default */].defaultProps, {
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

/* harmony default export */ __webpack_exports__["a"] = (GroupedBarSeries);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor;


			_drawOnCanvas(ctx, this.props, moreProps, xAccessor);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["c" /* getAxisCanvas */],
				canvasDraw: this.drawOnCanvas,
				drawOn: ["pan"]
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;
			var _props = this.props,
			    className = _props.className,
			    stroke = _props.stroke,
			    fill = _props.fill,
			    strokeWidth = _props.strokeWidth;


			var paths = helper(plotData, xAccessor).map(function (each, i) {
				var dataSeries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_shape__["b" /* line */])().x(function (item) {
					return xScale(item[0]);
				}).y(function (item) {
					return yScale(item[1]);
				}).curve(__WEBPACK_IMPORTED_MODULE_2_d3_shape__["d" /* curveStepBefore */]);

				dataSeries(each.plot);

				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { key: i, d: dataSeries(each.plot), className: each.type,
					stroke: stroke[each.type], fill: fill[each.type], strokeWidth: strokeWidth });
			});
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				paths
			);
		}
	}]);

	return KagiSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

KagiSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
	strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
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
	var stroke = props.stroke,
	    strokeWidth = props.strokeWidth,
	    currentValueStroke = props.currentValueStroke;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    plotData = moreProps.plotData;


	var paths = helper(plotData, xAccessor);

	var begin = true;

	paths.forEach(function (each) {
		ctx.strokeStyle = stroke[each.type];
		ctx.lineWidth = strokeWidth;

		ctx.beginPath();
		var prevX = void 0;
		each.plot.forEach(function (d) {
			var _ref = [xScale(d[0]), yScale(d[1])],
			    x = _ref[0],
			    y = _ref[1];

			if (begin) {
				ctx.moveTo(x, y);
				begin = false;
			} else {
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(prevX)) {
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

	var _ref2 = [xScale(last[0]), yScale(last[2]), yScale(last[3])],
	    x = _ref2[0],
	    y1 = _ref2[1],
	    y2 = _ref2[2];
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

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(d.close)) continue;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(kagi.type)) kagi.type = d.startAs;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* isNotDefined */])(kagi.plot)) kagi.plot = [];

		idx = xAccessor(d);
		kagi.plot.push([idx, d.open]);

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(d.changeTo)) {
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

/* harmony default export */ __webpack_exports__["a"] = (KagiSeries);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BarSeries__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LineSeries__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StraightLine__ = __webpack_require__(32);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && yAccessor(d).macd;
		}
	}, {
		key: "yAccessorForSignal",
		value: function yAccessorForSignal(d) {
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && yAccessor(d).signal;
		}
	}, {
		key: "yAccessorForDivergence",
		value: function yAccessorForDivergence(d) {
			var yAccessor = this.props.yAccessor;

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
			var _props = this.props,
			    className = _props.className,
			    opacity = _props.opacity,
			    divergenceStroke = _props.divergenceStroke;
			var _props2 = this.props,
			    stroke = _props2.stroke,
			    fill = _props2.fill;
			var clip = this.props.clip;
			var _props3 = this.props,
			    zeroLineStroke = _props3.zeroLineStroke,
			    zeroLineOpacity = _props3.zeroLineOpacity;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__BarSeries__["a" /* default */], {
					baseAt: this.yAccessorForDivergenceBase,
					className: "macd-divergence",
					widthRatio: 0.5,
					stroke: divergenceStroke,
					fill: fill.divergence,
					opacity: opacity,
					clip: clip,
					yAccessor: this.yAccessorForDivergence }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__LineSeries__["a" /* default */], {
					yAccessor: this.yAccessorForMACD,
					stroke: stroke.macd,
					fill: "none" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__LineSeries__["a" /* default */], {
					yAccessor: this.yAccessorForSignal,
					stroke: stroke.signal,
					fill: "none" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__StraightLine__["a" /* default */], {
					stroke: zeroLineStroke,
					opacity: zeroLineOpacity,
					yValue: 0 })
			);
		}
	}]);

	return MACDSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

MACDSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	divergenceStroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	zeroLineStroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	zeroLineOpacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	clip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		macd: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		signal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
	}).isRequired,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		divergence: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
	}).isRequired
};

MACDSeries.defaultProps = {
	className: "react-stockcharts-macd-series",
	zeroLineStroke: "#000000",
	zeroLineOpacity: 0.3,
	opacity: 0.6,
	divergenceStroke: false,
	clip: true
};

/* harmony default export */ __webpack_exports__["a"] = (MACDSeries);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;


			var barData = getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);
			_drawOnCanvas(ctx, barData);
		}
	}, {
		key: "render",
		value: function render() {
			var clip = this.props.clip;


			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["c" /* getAxisCanvas */],
				canvasDraw: this.drawOnCanvas,
				clip: clip,
				drawOn: ["pan"]
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props,
			    className = _props.className,
			    yAccessor = _props.yAccessor;
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;


			var barData = getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);

			var strokeWidth = barData.strokeWidth,
			    bars = barData.bars;


			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"g",
				{ className: className },
				bars.map(function (d, idx) {
					return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", { key: idx,
						className: d.className, stroke: d.stroke, strokeWidth: strokeWidth,
						d: "M" + d.openX1 + " " + d.openY + " L" + d.openX2 + " " + d.openY + " M" + d.x + " " + d.y1 + " L" + d.x + " " + d.y2 + " M" + d.closeX1 + " " + d.closeY + " L" + d.closeX2 + " " + d.closeY });
				})
			);
		}
	}]);

	return OHLCSeries;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

OHLCSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
	yAccessor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	clip: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
};

OHLCSeries.defaultProps = {
	className: "react-stockcharts-ohlc",
	yAccessor: function yAccessor(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	},
	classNames: function classNames(d) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(d.absoluteChange) ? d.absoluteChange > 0 ? "up" : "down" : "firstbar";
	},
	stroke: function stroke(d) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(d.absoluteChange) ? d.absoluteChange > 0 ? "#6BA583" : "#FF0000" : "#000000";
	},
	clip: true
};

function _drawOnCanvas(ctx, barData) {
	var strokeWidth = barData.strokeWidth,
	    bars = barData.bars;


	var wickNest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["b" /* nest */])().key(function (d) {
		return d.stroke;
	}).entries(bars);

	ctx.lineWidth = strokeWidth;

	wickNest.forEach(function (outer) {
		var key = outer.key,
		    values = outer.values;

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
	var classNamesProp = props.classNames,
	    strokeProp = props.stroke;


	var strokeFunc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(strokeProp);
	var classNameFunc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(classNamesProp);

	var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));

	var barWidth = Math.max(1, Math.round(width / (plotData.length - 1) / 2) - 1.5);
	var strokeWidth = Math.min(barWidth, 6);

	var bars = plotData.filter(function (d) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(yAccessor(d).close);
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

		return { x: x, y1: y1, y2: y2, openX1: openX1, openX2: openX2, openY: openY, closeX1: closeX1, closeX2: closeX2, closeY: closeY, stroke: stroke, className: className };
	});
	return { barWidth: barWidth, strokeWidth: strokeWidth, bars: bars };
}

/* harmony default export */ __webpack_exports__["a"] = (OHLCSeries);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StackedBarSeries__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;


			var bars = getBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__StackedBarSeries__["a" /* drawOnCanvas2 */])(this.props, ctx, bars);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var yAccessor = this.props.yAccessor;
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;


			var bars = getBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"g",
				{ className: "react-stockcharts-bar-series" },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__StackedBarSeries__["b" /* getBarsSVG2 */])(this.props, bars)
			);
		}
	}, {
		key: "render",
		value: function render() {
			var clip = this.props.clip;


			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["c" /* getAxisCanvas */],
				canvasDraw: this.drawOnCanvas,
				clip: clip,
				drawOn: ["pan"]
			});
		}
	}]);

	return OverlayBarSeries;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

OverlayBarSeries.propTypes = {
	baseAt: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func]).isRequired,
	direction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(["up", "down"]).isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
	widthRatio: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
	fill: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
	xAccessor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	yAccessor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func),
	xScale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	yScale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	plotData: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
	clip: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
};

OverlayBarSeries.defaultProps = {
	baseAt: function baseAt(xScale, yScale /* , d*/) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["l" /* first */])(yScale.range());
	},
	direction: "up",
	className: "bar",
	stroke: false,
	fill: "#4682B4",
	opacity: 1,
	widthRatio: 0.5,
	clip: true
};

function getBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var baseAt = props.baseAt,
	    className = props.className,
	    fill = props.fill,
	    stroke = props.stroke,
	    widthRatio = props.widthRatio;


	var getClassName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* functor */])(className);
	var getFill = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* functor */])(fill);
	var getBase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* functor */])(baseAt);

	var width = Math.abs(xScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* last */])(plotData))) - xScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["l" /* first */])(plotData))));

	var bw = width / (plotData.length - 1) * widthRatio;
	var barWidth = Math.round(bw);
	var offset = barWidth === 1 ? 0 : 0.5 * bw;

	// console.log(xScale.domain(), yScale.domain());

	var bars = plotData.map(function (d) {
		// eslint-disable-next-line prefer-const
		var innerBars = yAccessor.map(function (eachYAccessor, i) {
			var yValue = eachYAccessor(d);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["f" /* isNotDefined */])(yValue)) return undefined;

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
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* isDefined */])(yValue);
		});

		var b = getBase(xScale, yScale, d);
		var h = void 0;
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

	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* merge */])(bars);
}

/* harmony default export */ __webpack_exports__["a"] = (OverlayBarSeries);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;

			var columns = getColumns(xScale, xAccessor, yScale, plotData);

			_drawOnCanvas(ctx, this.props, columns);
		}
	}, {
		key: "render",
		value: function render() {
			var clip = this.props.clip;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__["a" /* default */], {
				clip: clip,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_3__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;
			var _props = this.props,
			    stroke = _props.stroke,
			    fill = _props.fill,
			    strokeWidth = _props.strokeWidth,
			    className = _props.className;


			var columns = getColumns(xScale, xAccessor, yScale, plotData);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				columns.map(function (col, idx) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"g",
						{ key: idx, className: col.className, transform: "translate(" + col.offset[0] + ", " + col.offset[1] + ")" },
						col.boxes.map(function (box, i) {
							if (col.direction > 0) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									"g",
									{ key: idx + "-" + i },
									__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
										x1: 0, y1: box.open, x2: box.columnWidth, y2: box.close }),
									__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
										x1: 0, y1: box.close, x2: box.columnWidth, y2: box.open })
								);
							}
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ellipse", { key: idx + "-" + i,
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
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PointAndFigureSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
	clip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
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
	},
	clip: true
};

function _drawOnCanvas(ctx, props, columns) {
	var stroke = props.stroke,
	    fill = props.fill,
	    strokeWidth = props.strokeWidth;


	ctx.lineWidth = strokeWidth;

	columns.forEach(function (col) {
		var _col$offset = _slicedToArray(col.offset, 2),
		    offsetX = _col$offset[0],
		    offsetY = _col$offset[1];

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

				var x = offsetX + box.columnWidth / 2,
				    y = offsetY + box.open + box.boxHeight / 2;
				var rx = box.columnWidth / 2,
				    ry = box.boxHeight / 2;


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

	var anyBox = void 0,
	    j = 0;
	while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* isNotDefined */])(anyBox)) {
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(plotData[j].close)) {
			anyBox = plotData[j].boxes[0];
		} else {
			break;
		}
		j++;
	}

	var boxHeight = Math.abs(yScale(anyBox.open) - yScale(anyBox.close));

	var columns = plotData.filter(function (d) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(d.close);
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

/* harmony default export */ __webpack_exports__["a"] = (PointAndFigureSeries);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LineSeries__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StraightLine__ = __webpack_require__(32);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    className = _props.className,
			    stroke = _props.stroke;
			var yAccessor = this.props.yAccessor;
			var _props2 = this.props,
			    overSold = _props2.overSold,
			    middle = _props2.middle,
			    overBought = _props2.overBought;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LineSeries__["a" /* default */], {
					className: className,
					yAccessor: yAccessor,
					stroke: stroke.line, fill: "none" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StraightLine__["a" /* default */], {
					stroke: stroke.top, opacity: 0.3,
					yValue: overSold }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StraightLine__["a" /* default */], {
					stroke: stroke.middle, opacity: 0.3,
					yValue: middle }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StraightLine__["a" /* default */], {
					stroke: stroke.bottom, opacity: 0.3,
					yValue: overBought })
			);
		}
	}]);

	return RSISeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

RSISeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		line: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		middle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
	}).isRequired,
	overSold: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	middle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	overBought: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
};

RSISeries.defaultProps = {
	className: "react-stockcharts-rsi-series",
	stroke: {
		line: "#000000",
		top: "#964B00",
		middle: "#000000",
		bottom: "#964B00"
	},
	overSold: 70,
	middle: 50,
	overBought: 30
};

/* harmony default export */ __webpack_exports__["a"] = (RSISeries);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;
			var yAccessor = this.props.yAccessor;


			var candles = getRenko(this.props, plotData, xScale, xAccessor, yScale, yAccessor);

			_drawOnCanvas(ctx, candles);
		}
	}, {
		key: "render",
		value: function render() {
			var clip = this.props.clip;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__["a" /* default */], {
				clip: clip,
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_3__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var xAccessor = moreProps.xAccessor;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    plotData = moreProps.plotData;
			var yAccessor = this.props.yAccessor;


			var candles = getRenko(this.props, plotData, xScale, xAccessor, yScale, yAccessor).map(function (each, idx) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { key: idx, className: each.className,
					fill: each.fill,
					x: each.x,
					y: each.y,
					width: each.width,
					height: each.height });
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					{ className: "candle" },
					candles
				)
			);
		}
	}]);

	return RenkoSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

RenkoSeries.propTypes = {
	classNames: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		up: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
		down: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
	}),
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		up: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
		down: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
	}),
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		up: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
		down: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
		partial: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
	}),
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	clip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
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
	},
	clip: true
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
	var classNames = props.classNames,
	    fill = props.fill;

	var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));

	var candleWidth = width / (plotData.length - 1);
	var candles = plotData.filter(function (d) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(yAccessor(d).close);
	}).map(function (d) {
		var ohlc = yAccessor(d);
		var x = xScale(xAccessor(d)) - 0.5 * candleWidth,
		    y = yScale(Math.max(ohlc.open, ohlc.close)),
		    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
		    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down;

		var svgfill = d.fullyFormed ? ohlc.open <= ohlc.close ? fill.up : fill.down : fill.partial;

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

/* harmony default export */ __webpack_exports__["a"] = (RenkoSeries);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SARSeries = function (_Component) {
	_inherits(SARSeries, _Component);

	function SARSeries(props) {
		_classCallCheck(this, SARSeries);

		var _this = _possibleConstructorReturn(this, (SARSeries.__proto__ || Object.getPrototypeOf(SARSeries)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		_this.isHover = _this.isHover.bind(_this);
		return _this;
	}

	_createClass(SARSeries, [{
		key: "isHover",
		value: function isHover(moreProps) {
			var mouseXY = moreProps.mouseXY,
			    currentItem = moreProps.currentItem,
			    yScale = moreProps.chartConfig.yScale;
			var yAccessor = this.props.yAccessor;

			var y = mouseXY[1];
			var currentY = yScale(yAccessor(currentItem));
			return y < currentY + 5 && y > currentY - 5;
		}
	}, {
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props = this.props,
			    yAccessor = _props.yAccessor,
			    fill = _props.fill,
			    opacity = _props.opacity;
			var xAccessor = moreProps.xAccessor,
			    plotData = moreProps.plotData,
			    xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    hovering = moreProps.hovering;


			var width = xScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* last */])(plotData))) - xScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* first */])(plotData)));

			var d = width / plotData.length * 0.5 / 2;
			var rx = Math.max(0.5, d / 2) + (hovering ? 2 : 0);
			var ry = Math.min(2, Math.max(0.5, d)) + (hovering ? 0 : 0);

			plotData.forEach(function (each) {
				var centerX = xScale(xAccessor(each));
				var centerY = yScale(yAccessor(each));
				var color = yAccessor(each) > each.close ? fill.falling : fill.rising;

				ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["i" /* hexToRGBA */])(color, opacity);
				ctx.strokeStyle = color;

				ctx.beginPath();
				ctx.ellipse(centerX, centerY, rx, ry, 0, 0, 2 * Math.PI);
				ctx.closePath();
				ctx.fill();
				ctx.stroke();
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props2 = this.props,
			    className = _props2.className,
			    yAccessor = _props2.yAccessor;
			var xAccessor = moreProps.xAccessor,
			    plotData = moreProps.plotData,
			    xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale;
			// console.log(moreProps);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				plotData.map(function (each, idx) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { key: idx, cx: xScale(xAccessor(each)),
						cy: yScale(yAccessor(each)), r: 3, fill: "green" });
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			var highlightOnHover = this.props.highlightOnHover;

			var hoverProps = highlightOnHover ? {
				isHover: this.isHover,
				drawOn: ["mousemove", "pan"],
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_3__GenericComponent__["a" /* getMouseCanvas */]
			} : {
				drawOn: ["pan"],
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_3__GenericComponent__["c" /* getAxisCanvas */]
			};

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GenericChartComponent__["a" /* default */], _extends({
				svgDraw: this.renderSVG,

				canvasDraw: this.drawOnCanvas,

				onClick: this.props.onClick,
				onDoubleClick: this.props.onDoubleClick,
				onContextMenu: this.props.onContextMenu
			}, hoverProps));
		}
	}]);

	return SARSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SARSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onDoubleClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onContextMenu: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	highlightOnHover: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

SARSeries.defaultProps = {
	className: "react-stockcharts-sar",
	fill: {
		falling: "#4682B4",
		rising: "#15EC2E"
	},
	highlightOnHover: true,
	opacity: 0.2,
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

/* harmony default export */ __webpack_exports__["a"] = (SARSeries);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_collection__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor;


			var points = helper(this.props, moreProps, xAccessor);

			_drawOnCanvas(ctx, this.props, points);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props,
			    className = _props.className,
			    markerProps = _props.markerProps;
			var xAccessor = moreProps.xAccessor;


			var points = helper(this.props, moreProps, xAccessor);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				points.map(function (point, idx) {
					var Marker = point.marker;

					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Marker, _extends({ key: idx }, markerProps, { point: point }));
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_4__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}]);

	return ScatterSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ScatterSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	marker: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	markerProvider: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	markerProps: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

ScatterSeries.defaultProps = {
	className: "react-stockcharts-scatter"
};

function helper(props, moreProps, xAccessor) {
	var yAccessor = props.yAccessor,
	    markerProvider = props.markerProvider,
	    markerProps = props.markerProps;
	var Marker = props.marker;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    plotData = moreProps.plotData;


	if (!(markerProvider || Marker)) throw new Error("required prop, either marker or markerProvider missing");

	return plotData.map(function (d) {

		if (markerProvider) Marker = markerProvider(d);

		var mProps = _extends({}, Marker.defaultProps, markerProps);

		var fill = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(mProps.fill);
		var stroke = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(mProps.stroke);

		return {
			x: xScale(xAccessor(d)),
			y: yScale(yAccessor(d)),
			fill: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["i" /* hexToRGBA */])(fill(d), mProps.opacity),
			stroke: stroke(d),
			datum: d,
			marker: Marker
		};
	});
}

function _drawOnCanvas(ctx, props, points) {
	var markerProps = props.markerProps;


	var nest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_collection__["b" /* nest */])().key(function (d) {
		return d.fill;
	}).key(function (d) {
		return d.stroke;
	}).entries(points);

	nest.forEach(function (fillGroup) {
		var fillKey = fillGroup.key,
		    fillValues = fillGroup.values;


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

/* harmony default export */ __webpack_exports__["a"] = (ScatterSeries);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);






function Square(props) {
	var className = props.className,
	    stroke = props.stroke,
	    strokeWidth = props.strokeWidth,
	    opacity = props.opacity,
	    fill = props.fill,
	    point = props.point,
	    width = props.width;

	var w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* functor */])(width)(point.datum);
	var x = point.x - w / 2;
	var y = point.y - w / 2;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
		className: className,
		x: x,
		y: y,
		stroke: stroke,
		strokeWidth: strokeWidth,
		fillOpacity: opacity,
		fill: fill,
		width: w,
		height: w
	});
}
Square.propTypes = {
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	point: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		datum: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
	}).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired
};
Square.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-marker-rect"
};
Square.drawOnCanvas = function (props, point, ctx) {
	var stroke = props.stroke,
	    fill = props.fill,
	    opacity = props.opacity,
	    strokeWidth = props.strokeWidth;

	ctx.strokeStyle = stroke;
	ctx.lineWidth = strokeWidth;
	if (fill !== "none") {
		ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["i" /* hexToRGBA */])(fill, opacity);
	}
	Square.drawOnCanvasWithNoStateChange(props, point, ctx);
};
Square.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
	var width = props.width;

	var w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* functor */])(width)(point.datum);
	var x = point.x - w / 2;
	var y = point.y - w / 2;
	ctx.beginPath();
	ctx.rect(x, y, w, w);
	ctx.stroke();
	ctx.fill();
};
/* harmony default export */ __webpack_exports__["a"] = (Square);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LineSeries__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StraightLine__ = __webpack_require__(32);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && yAccessor(d).D;
		}
	}, {
		key: "yAccessorForK",
		value: function yAccessorForK(d) {
			var yAccessor = this.props.yAccessor;

			return yAccessor(d) && yAccessor(d).K;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    stroke = _props.stroke,
			    refLineOpacity = _props.refLineOpacity;
			var _props2 = this.props,
			    overSold = _props2.overSold,
			    middle = _props2.middle,
			    overBought = _props2.overBought;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LineSeries__["a" /* default */], { yAccessor: this.yAccessorForD,
					stroke: stroke.dLine,
					fill: "none" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LineSeries__["a" /* default */], { yAccessor: this.yAccessorForK,
					stroke: stroke.kLine,
					fill: "none" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StraightLine__["a" /* default */], {
					stroke: stroke.top,
					opacity: refLineOpacity,
					yValue: overSold }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StraightLine__["a" /* default */], {
					stroke: stroke.middle,
					opacity: refLineOpacity,
					yValue: middle }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StraightLine__["a" /* default */], {
					stroke: stroke.bottom,
					opacity: refLineOpacity,
					yValue: overBought })
			);
		}
	}]);

	return StochasticSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

StochasticSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		middle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		dLine: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		kLine: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
	}).isRequired,
	overSold: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	middle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	overBought: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	refLineOpacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
};

StochasticSeries.defaultProps = {
	className: "react-stockcharts-stochastic-series",
	stroke: {
		top: "#964B00",
		middle: "#000000",
		bottom: "#964B00",
		dLine: "#EA2BFF",
		kLine: "#74D400"
	},
	overSold: 80,
	middle: 50,
	overBought: 20,
	refLineOpacity: 0.3
};

/* harmony default export */ __webpack_exports__["a"] = (StochasticSeries);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);






function Triangle(props) {
	var className = props.className,
	    stroke = props.stroke,
	    strokeWidth = props.strokeWidth,
	    opacity = props.opacity,
	    fill = props.fill,
	    point = props.point,
	    width = props.width;

	var w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* functor */])(width)(point.datum);
	var x = point.x,
	    y = point.y;

	var _getTrianglePoints = getTrianglePoints(w),
	    innerOpposite = _getTrianglePoints.innerOpposite,
	    innerHypotenuse = _getTrianglePoints.innerHypotenuse;

	var points = "\n\t\t" + x + " " + (y - innerHypotenuse) + ",\n\t\t" + (x + w / 2) + " " + (y + innerOpposite) + ",\n\t\t" + (x - w / 2) + " " + (y + innerOpposite) + "\n\t";
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
		className: className,
		points: points,
		stroke: stroke,
		strokeWidth: strokeWidth,
		fillOpacity: opacity,
		fill: fill
	});
}
Triangle.propTypes = {
	stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	point: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		datum: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
	}).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired
};
Triangle.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-marker-triangle"
};
Triangle.drawOnCanvas = function (props, point, ctx) {
	var stroke = props.stroke,
	    fill = props.fill,
	    opacity = props.opacity,
	    strokeWidth = props.strokeWidth;

	ctx.strokeStyle = stroke;
	ctx.lineWidth = strokeWidth;
	if (fill !== "none") {
		ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["i" /* hexToRGBA */])(fill, opacity);
	}
	Triangle.drawOnCanvasWithNoStateChange(props, point, ctx);
};
Triangle.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
	var width = props.width;

	var w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* functor */])(width)(point.datum);
	var x = point.x,
	    y = point.y;

	var _getTrianglePoints2 = getTrianglePoints(w),
	    innerOpposite = _getTrianglePoints2.innerOpposite,
	    innerHypotenuse = _getTrianglePoints2.innerHypotenuse;

	ctx.beginPath();
	ctx.moveTo(x, y - innerHypotenuse);
	ctx.lineTo(x + w / 2, y + innerOpposite);
	ctx.lineTo(x - w / 2, y + innerOpposite);
	ctx.stroke();
	ctx.fill();
};
/* harmony default export */ __webpack_exports__["a"] = (Triangle);

function getTrianglePoints(width) {
	var innerHypotenuse = width / 2 * (1 / Math.cos(30 * Math.PI / 180));
	var innerOpposite = width / 2 * (1 / Math.tan(60 * Math.PI / 180));
	return {
		innerOpposite: innerOpposite,
		innerHypotenuse: innerHypotenuse
	};
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_collection__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var xAccessor = moreProps.xAccessor,
			    width = moreProps.width;

			var _helper = helper(this.props, moreProps, xAccessor, width),
			    rects = _helper.rects,
			    sessionBg = _helper.sessionBg;

			_drawOnCanvas(ctx, this.props, rects, sessionBg);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__GenericChartComponent__["a" /* default */], {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: __WEBPACK_IMPORTED_MODULE_6__GenericComponent__["c" /* getAxisCanvas */],
				drawOn: ["pan"]
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props = this.props,
			    className = _props.className,
			    opacity = _props.opacity;
			var _props2 = this.props,
			    showSessionBackground = _props2.showSessionBackground,
			    sessionBackGround = _props2.sessionBackGround,
			    sessionBackGroundOpacity = _props2.sessionBackGroundOpacity;
			var xAccessor = moreProps.xAccessor,
			    width = moreProps.width;

			var _helper2 = helper(this.props, moreProps, xAccessor, width),
			    rects = _helper2.rects,
			    sessionBg = _helper2.sessionBg;

			var sessionBgSvg = showSessionBackground ? sessionBg.map(function (d, idx) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", _extends({ key: idx }, d, { opacity: sessionBackGroundOpacity, fill: sessionBackGround }));
			}) : null;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className },
				sessionBgSvg,
				rects.map(function (d, i) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"g",
						{ key: i },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { x: d.x, y: d.y,
							width: d.w1, height: d.height,
							fill: d.fill1, stroke: d.stroke1, fillOpacity: opacity }),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { x: d.x + d.w1, y: d.y,
							width: d.w2, height: d.height,
							fill: d.fill2, stroke: d.stroke2, fillOpacity: opacity })
					);
				})
			);
		}
	}]);

	return VolumeProfileSeries;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

VolumeProfileSeries.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	opacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	showSessionBackground: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	sessionBackGround: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	sessionBackGroundOpacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
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
		var d = _ref.d,
		    i = _ref.i,
		    plotData = _ref.plotData;
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
	var realXScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    plotData = moreProps.plotData;
	var sessionStart = props.sessionStart,
	    bySession = props.bySession,
	    partialStartOK = props.partialStartOK,
	    partialEndOK = props.partialEndOK;
	var bins = props.bins,
	    maxProfileWidthPercent = props.maxProfileWidthPercent,
	    source = props.source,
	    volume = props.volume,
	    absoluteChange = props.absoluteChange,
	    orient = props.orient,
	    fill = props.fill,
	    stroke = props.stroke;


	var sessionBuilder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["m" /* accumulatingWindow */])().discardTillStart(!partialStartOK).discardTillEnd(!partialEndOK).accumulateTill(function (d, i) {
		return sessionStart({ d: d, i: i, plotData: plotData });
	}).accumulator(__WEBPACK_IMPORTED_MODULE_7__utils__["g" /* identity */]);

	var dx = plotData.length > 1 ? realXScale(xAccessor(plotData[1])) - realXScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* head */])(plotData))) : 0;

	var sessions = bySession ? sessionBuilder(plotData) : [plotData];

	var allRects = sessions.map(function (session) {

		var begin = bySession ? realXScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* head */])(session))) : 0;
		var finish = bySession ? realXScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* last */])(session))) : width;
		var sessionWidth = finish - begin + dx;

		// console.log(session)

		/* var histogram = d3.layout.histogram()
  		.value(source)
  		.bins(bins);*/

		var histogram2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_array__["j" /* histogram */])()
		// .domain(xScale.domain())
		.value(source).thresholds(bins);

		// console.log(bins, histogram(session))
		// console.log(bins, histogram2(session))
		var rollup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_collection__["b" /* nest */])().key(function (d) {
			return d.direction;
		}).sortKeys(orient === "right" ? __WEBPACK_IMPORTED_MODULE_2_d3_array__["k" /* descending */] : __WEBPACK_IMPORTED_MODULE_2_d3_array__["g" /* ascending */]).rollup(function (leaves) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_array__["l" /* sum */])(leaves, function (d) {
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
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_array__["l" /* sum */])(each.map(function (d) {
				return d.value;
			}));
		});

		// console.log("volumeValues", volumeValues)
		var base = function base(xScale) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* head */])(xScale.range());
		};

		var _ref3 = orient === "right" ? [begin, begin + sessionWidth * maxProfileWidthPercent / 100] : [finish, finish - sessionWidth * (100 - maxProfileWidthPercent) / 100],
		    _ref4 = _slicedToArray(_ref3, 2),
		    start = _ref4[0],
		    end = _ref4[1];

		var xScale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["c" /* scaleLinear */])().domain([0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_array__["m" /* max */])(volumeValues)]).range([start, end]);

		// console.log(xScale.domain())

		var totalVolumes = volumeInBins.map(function (volumes) {

			var totalVolume = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_array__["l" /* sum */])(volumes, function (d) {
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

		var rects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_array__["n" /* zip */])(values, totalVolumes).map(function (_ref5) {
			var _ref6 = _slicedToArray(_ref5, 2),
			    d = _ref6[0],
			    _ref6$ = _ref6[1],
			    x = _ref6$.x,
			    ws = _ref6$.ws;

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
				stroke1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* functor */])(stroke)(w1),
				stroke2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* functor */])(stroke)(w2),
				fill1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* functor */])(fill)(w1),
				fill2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* functor */])(fill)(w2)
			};
		});

		// console.log("rects", rects)

		var sessionBg = {
			x: begin,
			y: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* last */])(rects).y,
			height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* head */])(rects).y - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* last */])(rects).y + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* head */])(rects).height,
			width: sessionWidth
		};

		return { rects: rects, sessionBg: sessionBg };
	});

	return {
		rects: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_array__["a" /* merge */])(allRects.map(function (d) {
			return d.rects;
		})),
		sessionBg: allRects.map(function (d) {
			return d.sessionBg;
		})
	};
}

function _drawOnCanvas(ctx, props, rects, sessionBg) {
	var opacity = props.opacity,
	    sessionBackGround = props.sessionBackGround,
	    sessionBackGroundOpacity = props.sessionBackGroundOpacity,
	    showSessionBackground = props.showSessionBackground;

	// var { rects, sessionBg } = helper(props, xScale, yScale, plotData);

	if (showSessionBackground) {
		ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["i" /* hexToRGBA */])(sessionBackGround, sessionBackGroundOpacity);

		sessionBg.forEach(function (each) {
			var x = each.x,
			    y = each.y,
			    height = each.height,
			    width = each.width;


			ctx.beginPath();
			ctx.rect(x, y, width, height);
			ctx.closePath();
			ctx.fill();
		});
	}

	rects.forEach(function (each) {
		var x = each.x,
		    y = each.y,
		    height = each.height,
		    w1 = each.w1,
		    w2 = each.w2,
		    stroke1 = each.stroke1,
		    stroke2 = each.stroke2,
		    fill1 = each.fill1,
		    fill2 = each.fill2;


		if (w1 > 0) {
			ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["i" /* hexToRGBA */])(fill1, opacity);
			if (stroke1 !== "none") ctx.strokeStyle = stroke1;

			ctx.beginPath();
			ctx.rect(x, y, w1, height);
			ctx.closePath();
			ctx.fill();

			if (stroke1 !== "none") ctx.stroke();
		}

		if (w2 > 0) {
			ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["i" /* hexToRGBA */])(fill2, opacity);
			if (stroke2 !== "none") ctx.strokeStyle = stroke2;

			ctx.beginPath();
			ctx.rect(x + w1, y, w2, height);
			ctx.closePath();
			ctx.fill();

			if (stroke2 !== "none") ctx.stroke();
		}
	});
}

/* harmony default export */ __webpack_exports__["a"] = (VolumeProfileSeries);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ToolTipText__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__ = __webpack_require__(24);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    onClick = _props.onClick,
			    displayFormat = _props.displayFormat,
			    yAccessor = _props.yAccessor,
			    options = _props.options,
			    textFill = _props.textFill,
			    labelFill = _props.labelFill;
			var _moreProps$chartConfi = moreProps.chartConfig,
			    width = _moreProps$chartConfi.width,
			    height = _moreProps$chartConfi.height;
			var currentItem = moreProps.currentItem;


			var top = void 0,
			    middle = void 0,
			    bottom = void 0;
			top = middle = bottom = "n/a";

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(currentItem) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(yAccessor(currentItem))) {
				var item = yAccessor(currentItem);
				top = displayFormat(item.top);
				middle = displayFormat(item.middle);
				bottom = displayFormat(item.bottom);
			}

			var originProp = this.props.origin;

			var origin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* functor */])(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			var sourcePath = options.sourcePath,
			    windowSize = options.windowSize,
			    multiplier = options.multiplier,
			    movingAverageType = options.movingAverageType;

			var tooltipLabel = "BB(" + sourcePath + ", " + windowSize + ", " + multiplier + ", " + movingAverageType + "): ";
			var tooltipValue = top + ", " + middle + ", " + bottom;
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ transform: "translate(" + x + ", " + y + ")",
					className: this.props.className, onClick: onClick },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_5__ToolTipText__["a" /* default */],
					{ x: 0, y: 0,
						fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						tooltipLabel
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ fill: textFill },
						tooltipValue
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return BollingerBandTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BollingerBandTooltip.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	displayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	origin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
	onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		sourcePath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		windowSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		multiplier: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		movingAverageType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
	}).isRequired,
	textFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	labelFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};

BollingerBandTooltip.defaultProps = {
	className: "react-stockcharts-toottip react-stockcharts-bollingerband-tooltip",
	displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f"),
	origin: [0, 10]
};

/* harmony default export */ __webpack_exports__["a"] = (BollingerBandTooltip);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
			var pointer = helper(this.props, moreProps, ctx);
			var height = moreProps.height;


			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* isNotDefined */])(pointer)) return null;
			_drawOnCanvas(ctx, this.props, this.context, pointer, height, moreProps);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GenericComponent__["b" /* default */], {
				svgDraw: this.renderSVG,
				canvasDraw: this.drawOnCanvas,
				drawOn: ["mousemove", "pan" /* , "mouseleave" */]
			});
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var pointer = helper(this.props, moreProps);

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* isNotDefined */])(pointer)) return null;

			var _props = this.props,
			    bgFill = _props.bgFill,
			    bgOpacity = _props.bgOpacity,
			    backgroundShapeSVG = _props.backgroundShapeSVG,
			    tooltipSVG = _props.tooltipSVG;
			var _props2 = this.props,
			    bgheight = _props2.bgheight,
			    bgwidth = _props2.bgwidth;
			var height = moreProps.height;
			var x = pointer.x,
			    y = pointer.y,
			    content = pointer.content,
			    centerX = pointer.centerX,
			    pointWidth = pointer.pointWidth,
			    bgSize = pointer.bgSize;


			var bgShape = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(bgwidth) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(bgheight) ? { width: bgwidth, height: bgheight } : bgSize;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { x: centerX - pointWidth / 2,
					y: 0,
					width: pointWidth,
					height: height,
					fill: bgFill,
					opacity: bgOpacity }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					{ className: "react-stockcharts-tooltip-content", transform: "translate(" + x + ", " + y + ")" },
					backgroundShapeSVG(this.props, bgShape),
					tooltipSVG(this.props, content)
				)
			);
		}
	}]);

	return HoverTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

HoverTooltip.propTypes = {
	chartId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	tooltipSVG: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	backgroundShapeSVG: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	bgwidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	bgheight: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	bgFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	bgOpacity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	tooltipContent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	origin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};

HoverTooltip.contextTypes = {
	margin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
};

HoverTooltip.defaultProps = {
	// bgwidth: 150,
	// bgheight: 50,
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
var X = 10;
var Y = 10;

/* eslint-disable react/prop-types */
function backgroundShapeSVG(_ref, _ref2) {
	var fill = _ref.fill,
	    stroke = _ref.stroke,
	    opacity = _ref.opacity;
	var height = _ref2.height,
	    width = _ref2.width;

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
		height: height,
		width: width,
		fill: fill,
		opacity: opacity,
		stroke: stroke });
}

function tooltipSVG(_ref3, content) {
	var fontFamily = _ref3.fontFamily,
	    fontSize = _ref3.fontSize,
	    fontFill = _ref3.fontFill;

	var tspans = [];
	var startY = Y + fontSize * 0.9;

	for (var i = 0; i < content.y.length; i++) {
		var y = content.y[i];
		var textY = startY + fontSize * (i + 1);

		tspans.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"tspan",
			{ key: "L-" + i, x: X, y: textY, fill: y.stroke },
			y.label
		));
		tspans.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"tspan",
			{ key: i },
			": "
		));
		tspans.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"tspan",
			{ key: "V-" + i },
			y.value
		));
	}
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"text",
		{ fontFamily: fontFamily, fontSize: fontSize, fill: fontFill },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"tspan",
			{ x: X, y: startY },
			content.x
		),
		tspans
	);
}
/* eslint-enable react/prop-types */

function backgroundShapeCanvas(props, _ref4, ctx) {
	var width = _ref4.width,
	    height = _ref4.height;
	var fill = props.fill,
	    stroke = props.stroke,
	    opacity = props.opacity;


	ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["i" /* hexToRGBA */])(fill, opacity);
	ctx.strokeStyle = stroke;
	ctx.beginPath();
	ctx.rect(0, 0, width, height);
	ctx.fill();
	ctx.stroke();
}

function tooltipCanvas(_ref5, content, ctx) {
	var fontFamily = _ref5.fontFamily,
	    fontSize = _ref5.fontSize,
	    fontFill = _ref5.fontFill;

	var startY = Y + fontSize * 0.9;
	ctx.font = fontSize + "px " + fontFamily;
	ctx.fillStyle = fontFill;
	ctx.textAlign = "left";
	ctx.fillText(content.x, X, startY);

	for (var i = 0; i < content.y.length; i++) {
		var y = content.y[i];
		var textY = startY + fontSize * (i + 1);
		ctx.fillStyle = y.stroke || fontFill;
		ctx.fillText(y.label, X, textY);

		ctx.fillStyle = fontFill;
		ctx.fillText(": " + y.value, X + ctx.measureText(y.label).width, textY);
	}
}

function _drawOnCanvas(ctx, props, context, pointer, height) {
	var margin = context.margin,
	    ratio = context.ratio;
	var bgFill = props.bgFill,
	    bgOpacity = props.bgOpacity;
	var backgroundShapeCanvas = props.backgroundShapeCanvas,
	    tooltipCanvas = props.tooltipCanvas;


	var originX = 0.5 * ratio + margin.left;
	var originY = 0.5 * ratio + margin.top;

	ctx.save();

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.scale(ratio, ratio);

	ctx.translate(originX, originY);

	var x = pointer.x,
	    y = pointer.y,
	    content = pointer.content,
	    centerX = pointer.centerX,
	    pointWidth = pointer.pointWidth,
	    bgSize = pointer.bgSize;


	ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["i" /* hexToRGBA */])(bgFill, bgOpacity);
	ctx.beginPath();
	ctx.rect(centerX - pointWidth / 2, 0, pointWidth, height);
	ctx.fill();

	ctx.translate(x, y);
	backgroundShapeCanvas(props, bgSize, ctx);
	tooltipCanvas(props, content, ctx);

	ctx.restore();
}

function calculateTooltipSize(_ref6, content, ctx) {
	var fontFamily = _ref6.fontFamily,
	    fontSize = _ref6.fontSize,
	    fontFill = _ref6.fontFill;

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* isNotDefined */])(ctx)) {
		var canvas = document.createElement("canvas");
		ctx = canvas.getContext("2d");
	}

	ctx.font = fontSize + "px " + fontFamily;
	ctx.fillStyle = fontFill;
	ctx.textAlign = "left";

	var measureText = function measureText(str) {
		return {
			width: ctx.measureText(str).width,
			height: fontSize
		};
	};

	var _content$y$map$reduce = content.y.map(function (_ref7) {
		var label = _ref7.label,
		    value = _ref7.value;
		return measureText(label + ": " + value);
	})
	// Sum all y and x sizes (begin with x label size)
	.reduce(function (res, size) {
		return sumSizes(res, size);
	}, measureText(String(content.x))),
	    width = _content$y$map$reduce.width,
	    height = _content$y$map$reduce.height;

	return {
		width: width + 2 * X,
		height: height + 2 * Y
	};
}

function sumSizes() {
	for (var _len = arguments.length, sizes = Array(_len), _key = 0; _key < _len; _key++) {
		sizes[_key] = arguments[_key];
	}

	return {
		width: Math.max.apply(Math, _toConsumableArray(sizes.map(function (size) {
			return size.width;
		}))),
		height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_array__["l" /* sum */])(sizes, function (d) {
			return d.height;
		})
	};
}

function normalizeX(x, bgSize, pointWidth, width) {
	// return x - bgSize.width - pointWidth / 2 - PADDING * 2 < 0
	return x < width / 2 ? x + pointWidth / 2 + PADDING : x - bgSize.width - pointWidth / 2 - PADDING;
}

function normalizeY(y, bgSize) {
	return y - bgSize.height <= 0 ? y + PADDING : y - bgSize.height - PADDING;
}

function origin(props, moreProps, bgSize, pointWidth) {
	var chartId = props.chartId,
	    yAccessor = props.yAccessor;
	var mouseXY = moreProps.mouseXY,
	    xAccessor = moreProps.xAccessor,
	    currentItem = moreProps.currentItem,
	    xScale = moreProps.xScale,
	    chartConfig = moreProps.chartConfig,
	    width = moreProps.width;

	var y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* last */])(mouseXY);

	var xValue = xAccessor(currentItem);
	var x = Math.round(xScale(xValue));

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(chartId) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(yAccessor) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(chartConfig) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(chartConfig.findIndex)) {
		var yValue = yAccessor(currentItem);
		var chartIndex = chartConfig.findIndex(function (x) {
			return x.id === chartId;
		});

		y = Math.round(chartConfig[chartIndex].yScale(yValue));
	}

	x = normalizeX(x, bgSize, pointWidth, width);
	y = normalizeY(y, bgSize);

	return [x, y];
}

function helper(props, moreProps, ctx) {
	var show = moreProps.show,
	    xScale = moreProps.xScale,
	    currentItem = moreProps.currentItem,
	    plotData = moreProps.plotData;
	var origin = props.origin,
	    tooltipContent = props.tooltipContent;
	var xAccessor = moreProps.xAccessor,
	    displayXAccessor = moreProps.displayXAccessor;


	if (!show || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* isNotDefined */])(currentItem)) return;

	var xValue = xAccessor(currentItem);

	if (!show || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* isNotDefined */])(xValue)) return;

	var content = tooltipContent({ currentItem: currentItem, xAccessor: displayXAccessor });
	var centerX = xScale(xValue);
	var pointWidth = Math.abs(xScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* last */])(plotData))) - xScale(xAccessor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* first */])(plotData)))) / (plotData.length - 1);

	var bgSize = calculateTooltipSize(props, content, ctx);

	var _origin = origin(props, moreProps, bgSize, pointWidth),
	    _origin2 = _slicedToArray(_origin, 2),
	    x = _origin2[0],
	    y = _origin2[1];

	return { x: x, y: y, content: content, centerX: centerX, pointWidth: pointWidth, bgSize: bgSize };
}

/* harmony default export */ __webpack_exports__["a"] = (HoverTooltip);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ToolTipText__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    onClick = _props.onClick,
			    fontFamily = _props.fontFamily,
			    fontSize = _props.fontSize,
			    displayFormat = _props.displayFormat,
			    className = _props.className;
			var _props2 = this.props,
			    yAccessor = _props2.yAccessor,
			    options = _props2.options,
			    appearance = _props2.appearance,
			    labelFill = _props2.labelFill;
			var _moreProps$chartConfi = moreProps.chartConfig,
			    width = _moreProps$chartConfi.width,
			    height = _moreProps$chartConfi.height;
			var currentItem = moreProps.currentItem;


			var macdValue = currentItem && yAccessor(currentItem);

			var macd = macdValue && macdValue.macd && displayFormat(macdValue.macd) || "n/a";
			var signal = macdValue && macdValue.signal && displayFormat(macdValue.signal) || "n/a";
			var divergence = macdValue && macdValue.divergence && displayFormat(macdValue.divergence) || "n/a";

			var originProp = this.props.origin;

			var origin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* functor */])(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"g",
				{ className: className, transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4__ToolTipText__["a" /* default */],
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						"MACD ("
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: appearance.stroke.macd },
						options.slow
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						", "
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: appearance.stroke.macd },
						options.fast
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						"): "
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: appearance.stroke.macd },
						macd
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						" Signal ("
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: appearance.stroke.signal },
						options.signal
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						"): "
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: appearance.stroke.signal },
						signal
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						" Divergence: "
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: appearance.fill.divergence },
						divergence
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return MACDTooltip;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

MACDTooltip.propTypes = {
	origin: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func]).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	fontFamily: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
	labelFill: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

	yAccessor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
		slow: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
		fast: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
		signal: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
	}).isRequired,
	appearance: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
		stroke: {
			macd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
			signal: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
		}.isRequired,
		fill: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
			divergence: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
		}).isRequired
	}).isRequired,
	displayFormat: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};

MACDTooltip.defaultProps = {
	origin: [0, 0],
	displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".2f"),
	className: "react-stockcharts-toottip"
};

/* harmony default export */ __webpack_exports__["a"] = (MACDTooltip);
// export default MACDTooltip;

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ToolTipText__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    onClick = _props.onClick,
			    forChart = _props.forChart,
			    options = _props.options;

			onClick(_extends({ chartId: forChart }, options), e);
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props,
			    textFill = _props2.textFill,
			    labelFill = _props2.labelFill;

			var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ transform: translate },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", { x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color, strokeWidth: "4px" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4__ToolTipText__["a" /* default */],
					{ x: 5, y: 11,
						fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						this.props.displayName
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ x: "5", dy: "15", fill: textFill },
						this.props.value
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { x: 0, y: 0, width: 55, height: 30,
					onClick: this.handleClick,
					fill: "none", stroke: "none" })
			);
		}
	}]);

	return SingleMAToolTip;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SingleMAToolTip.propTypes = {
	origin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
	color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	displayName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	textFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	labelFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	forChart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
	options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
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
			var chartId = moreProps.chartId;
			var chartConfig = moreProps.chartConfig,
			    currentItem = moreProps.currentItem;
			var _props3 = this.props,
			    className = _props3.className,
			    onClick = _props3.onClick,
			    width = _props3.width,
			    fontFamily = _props3.fontFamily,
			    fontSize = _props3.fontSize,
			    textFill = _props3.textFill,
			    labelFill = _props3.labelFill;
			var _props4 = this.props,
			    originProp = _props4.origin,
			    displayFormat = _props4.displayFormat,
			    options = _props4.options;
			var height = moreProps.chartConfig.height;


			var config = chartConfig;

			var origin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* functor */])(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			var _config$origin = _slicedToArray(config.origin, 2),
			    ox = _config$origin[0],
			    oy = _config$origin[1];

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", className: className },
				options.map(function (each, idx) {
					var yValue = currentItem && each.yAccessor(currentItem);

					var tooltipLabel = each.type + " (" + each.windowSize + ")";
					var yDisplayValue = yValue ? displayFormat(yValue) : "n/a";
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleMAToolTip, {
						key: idx,
						origin: [width * idx, 0],
						color: each.stroke,
						displayName: tooltipLabel,
						value: yDisplayValue,
						options: each,
						forChart: chartId,
						onClick: onClick,
						fontFamily: fontFamily,
						fontSize: fontSize,
						textFill: textFill,
						labelFill: labelFill
					});
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return MovingAverageTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

MovingAverageTooltip.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	displayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	origin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
	onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	textFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	labelFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
		yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
		type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		stroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
		windowSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
		echo: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
	}))
};

MovingAverageTooltip.defaultProps = {
	className: "react-stockcharts-toottip react-stockcharts-moving-average-tooltip",
	displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f"),
	origin: [0, 10],
	width: 65
};

/* harmony default export */ __webpack_exports__["a"] = (MovingAverageTooltip);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ToolTipText__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ToolTipTSpanLabel__ = __webpack_require__(24);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    className = _props.className,
			    textFill = _props.textFill,
			    labelFill = _props.labelFill;
			var _moreProps$chartConfi = moreProps.chartConfig,
			    width = _moreProps$chartConfi.width,
			    height = _moreProps$chartConfi.height,
			    displayXAccessor = moreProps.displayXAccessor;
			var currentItem = moreProps.currentItem;
			var _props2 = this.props,
			    onClick = _props2.onClick,
			    xDisplayFormat = _props2.xDisplayFormat,
			    fontFamily = _props2.fontFamily,
			    fontSize = _props2.fontSize,
			    accessor = _props2.accessor,
			    volumeFormat = _props2.volumeFormat,
			    ohlcFormat = _props2.ohlcFormat;


			var displayDate = void 0,
			    open = void 0,
			    high = void 0,
			    low = void 0,
			    close = void 0,
			    volume = void 0;

			displayDate = open = high = low = close = volume = "n/a";

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(currentItem) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(accessor(currentItem)) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(accessor(currentItem).close)) {
				var item = accessor(currentItem);
				volume = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* isDefined */])(item.volume) ? volumeFormat(item.volume) : "n/a";

				displayDate = xDisplayFormat(displayXAccessor(item));
				open = ohlcFormat(item.open);
				high = ohlcFormat(item.high);
				low = ohlcFormat(item.low);
				close = ohlcFormat(item.close);
			}

			var originProp = this.props.origin;

			var origin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* functor */])(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: "react-stockcharts-toottip-hover " + className,
					transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_6__ToolTipText__["a" /* default */],
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill, key: "label", x: 0, dy: "5" },
						"Date: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ key: "value", fill: textFill },
						displayDate
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill, key: "label_O" },
						" O: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ key: "value_O", fill: textFill },
						open
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill, key: "label_H" },
						" H: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ key: "value_H", fill: textFill },
						high
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill, key: "label_L" },
						" L: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ key: "value_L", fill: textFill },
						low
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill, key: "label_C" },
						" C: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ key: "value_C", fill: textFill },
						close
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill, key: "label_Vol" },
						" Vol: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ key: "value_Vol", fill: textFill },
						volume
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__GenericChartComponent__["a" /* default */], {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return OHLCTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

OHLCTooltip.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	accessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	xDisplayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	ohlcFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	origin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	volumeFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	textFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	labelFill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

OHLCTooltip.defaultProps = {
	accessor: function accessor(d) {
		return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
	},
	xDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_time_format__["c" /* timeFormat */])("%Y-%m-%d"),
	volumeFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".4s"),
	ohlcFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f"),
	origin: [0, 0]
};

/* harmony default export */ __webpack_exports__["a"] = (OHLCTooltip);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ToolTipText__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__ = __webpack_require__(24);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    onClick = _props.onClick,
			    fontFamily = _props.fontFamily,
			    fontSize = _props.fontSize,
			    yAccessor = _props.yAccessor,
			    displayFormat = _props.displayFormat,
			    className = _props.className;
			var _props2 = this.props,
			    options = _props2.options,
			    labelFill = _props2.labelFill,
			    textFill = _props2.textFill;
			var _moreProps$chartConfi = moreProps.chartConfig,
			    width = _moreProps$chartConfi.width,
			    height = _moreProps$chartConfi.height;
			var currentItem = moreProps.currentItem;


			var rsi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* isDefined */])(currentItem) && yAccessor(currentItem);
			var value = rsi && displayFormat(rsi) || "n/a";

			var originProp = this.props.origin;

			var origin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* functor */])(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			var tooltipLabel = "RSI (" + options.windowSize + "): ";
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"g",
				{ className: className, transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_5__ToolTipText__["a" /* default */],
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						tooltipLabel
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: textFill },
						value
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return RSITooltip;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

RSITooltip.propTypes = {
	origin: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func]).isRequired,
	options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
		windowSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
	}).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	fontFamily: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	yAccessor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	displayFormat: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	textFill: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	labelFill: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

RSITooltip.defaultProps = {
	displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".2f"),
	origin: [0, 0],
	className: "react-stockcharts-toottip"
};

/* harmony default export */ __webpack_exports__["a"] = (RSITooltip);

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ToolTipText__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    onClick = _props.onClick,
			    fontFamily = _props.fontFamily,
			    fontSize = _props.fontSize,
			    labelStroke = _props.labelStroke,
			    valueStroke = _props.valueStroke,
			    className = _props.className;
			var _props2 = this.props,
			    xDisplayFormat = _props2.xDisplayFormat,
			    yDisplayFormat = _props2.yDisplayFormat,
			    xLabel = _props2.xLabel,
			    yLabel = _props2.yLabel,
			    xAccessor = _props2.xAccessor,
			    yAccessor = _props2.yAccessor;
			var _moreProps$chartConfi = moreProps.chartConfig,
			    width = _moreProps$chartConfi.width,
			    height = _moreProps$chartConfi.height;
			var currentItem = moreProps.currentItem;


			var xDisplayValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* isDefined */])(currentItem) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* isDefined */])(xAccessor(currentItem)) ? xDisplayFormat(xAccessor(currentItem)) : "n/a";
			var yDisplayValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* isDefined */])(currentItem) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* isDefined */])(yAccessor(currentItem)) ? yDisplayFormat(yAccessor(currentItem)) : "n/a";

			var originProp = this.props.origin;

			var origin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* functor */])(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ className: className, transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4__ToolTipText__["a" /* default */],
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					xLabel ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ x: 0, dy: "5", fill: labelStroke },
						xLabel + ": "
					) : null,
					xLabel ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"tspan",
						{ fill: valueStroke },
						xDisplayValue + " "
					) : null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelStroke },
						yLabel + ": "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return SingleValueTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SingleValueTooltip.propTypes = {
	xDisplayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	yDisplayFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	xLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	yLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	labelStroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	valueStroke: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	origin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	xAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	yAccessor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

SingleValueTooltip.defaultProps = {
	origin: [0, 0],
	labelStroke: "#4682B4",
	valueStroke: "#000000",
	yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f"),
	xAccessor: __WEBPACK_IMPORTED_MODULE_6__utils__["h" /* noop */],
	yAccessor: __WEBPACK_IMPORTED_MODULE_6__utils__["g" /* identity */],
	className: "react-stockcharts-tooltip"
};

/* harmony default export */ __webpack_exports__["a"] = (SingleValueTooltip);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ToolTipText__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__ = __webpack_require__(24);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			var _props = this.props,
			    onClick = _props.onClick,
			    fontFamily = _props.fontFamily,
			    fontSize = _props.fontSize,
			    yAccessor = _props.yAccessor,
			    displayFormat = _props.displayFormat,
			    label = _props.label;
			var _props2 = this.props,
			    className = _props2.className,
			    options = _props2.options,
			    appearance = _props2.appearance,
			    labelFill = _props2.labelFill;
			var _moreProps$chartConfi = moreProps.chartConfig,
			    width = _moreProps$chartConfi.width,
			    height = _moreProps$chartConfi.height;
			var currentItem = moreProps.currentItem;
			var stroke = appearance.stroke;

			var stochastic = currentItem && yAccessor(currentItem);

			var K = stochastic && stochastic.K && displayFormat(stochastic.K) || "n/a";
			var D = stochastic && stochastic.D && displayFormat(stochastic.D) || "n/a";

			var originProp = this.props.origin;

			var origin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* functor */])(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"g",
				{ className: className, transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_5__ToolTipText__["a" /* default */],
					{ x: 0, y: 0, fontFamily: fontFamily, fontSize: fontSize },
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						label + " %K("
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: stroke.kLine },
						options.windowSize + ", " + options.kWindowSize
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						"): "
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: stroke.kLine },
						K
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						" %D ("
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: stroke.dLine },
						options.dWindowSize
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_6__ToolTipTSpanLabel__["a" /* default */],
						{ fill: labelFill },
						"): "
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"tspan",
						{ fill: stroke.dLine },
						D
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GenericChartComponent__["a" /* default */], {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return StochasticTooltip;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

StochasticTooltip.propTypes = {
	origin: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func]).isRequired,
	className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	fontFamily: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	fontSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
	labelFill: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	yAccessor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
		windowSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
		kWindowSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
		dWindowSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
	}).isRequired,
	appearance: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
		stroke: {
			dLine: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
			kLine: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
		}.isRequired
	}).isRequired,
	displayFormat: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};

StochasticTooltip.defaultProps = {
	displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".2f"),
	origin: [0, 0],
	className: "react-stockcharts-toottip",
	label: "STO"
};

/* harmony default export */ __webpack_exports__["a"] = (StochasticTooltip);

/***/ }),
/* 180 */,
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(182)(undefined);
// imports


// module
exports.push([module.i, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\naside table tbody > tr > td,\naside table tbody > tr > th,\naside table tfoot > tr > td,\naside table tfoot > tr > th,\naside table thead > tr > td,\naside table thead > tr > th {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #DDD;\n}\n\na.button {\n  background: transparent url(" + __webpack_require__(255) + ") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important;\n}\n\na.button small {\n  display: inline;\n  font-size: 13px;\n  margin-top: 15px;\n}\n\n.dark {\n  background: #303030;\n}\n\n.dark .react-stockcharts-tooltip {\n  fill: white;\n}\n\n.dark .react-stockcharts-tooltip-label {\n  fill: yellow;\n}\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white;\n}\n\n.jumbotron a {\n  color: yellow;\n}\n\n.top-spacing {\n  padding-top: 10px;\n}\n\n.navbar {\n  background-color: steelblue;\n}\n\n.navbar a {\n  color: white;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 5px 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-size: 13px;\n}\n\n.nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n.main {\n  top: 51px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\nimg[alt=\"Done\"] {\n  max-width: 20px;\n  max-height: 20px;\n  padding-bottom: 4px;\n}\n", ""]);

// exports


/***/ }),
/* 182 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatch__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dispatch__["a"]; });



/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* unused harmony export csvParseRows */
/* unused harmony export csvFormat */
/* unused harmony export csvFormatRows */


var csv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvParse; });
/* unused harmony export tsvParseRows */
/* unused harmony export tsvFormat */
/* unused harmony export tsvFormatRows */


var tsv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_center__ = __webpack_require__(192);
/* unused harmony reexport forceCenter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_collide__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_collide__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_link__ = __webpack_require__(194);
/* unused harmony reexport forceLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_manyBody__ = __webpack_require__(195);
/* unused harmony reexport forceManyBody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_simulation__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__src_simulation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_x__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__src_x__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_y__ = __webpack_require__(197);
/* unused harmony reexport forceY */









/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(x, y) {
  var nodes;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jiggle__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_quadtree__ = __webpack_require__(78);




function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/* harmony default export */ __webpack_exports__["a"] = (function(radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_quadtree__["a" /* quadtree */])(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])(), l += x * x;
            if (y === 0) y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initialize(), force) : radius;
  };

  return force;
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jiggle__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_collection__ = __webpack_require__(23);




function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("missing: " + nodeId);
  return node;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(30),
      distances,
      nodes,
      count,
      bias,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])();
        y = target.y + target.vy - source.y - source.vy || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])();
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_collection__["a" /* map */])(nodes, id),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initializeDistance(), force) : distance;
  };

  return force;
});


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jiggle__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_quadtree__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simulation__ = __webpack_require__(75);





/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var nodes,
      node,
      alpha,
      strength = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_quadtree__["a" /* quadtree */])(nodes, __WEBPACK_IMPORTED_MODULE_3__simulation__["b" /* x */], __WEBPACK_IMPORTED_MODULE_3__simulation__["c" /* y */]).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, x, y, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = q.value)) {
          strength += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / strength;
      quad.y = y / strength;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])(), l += x * x;
        if (y === 0) y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])(), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])(), l += x * x;
      if (y === 0) y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])(), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
});


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(33);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  var strength = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initialize(), force) : strength;
  };

  force.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initialize(), force) : x;
  };

  return force;
});


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(33);


/* unused harmony default export */ var _unused_webpack_default_export = (function(y) {
  var strength = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initialize(), force) : strength;
  };

  force.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initialize(), force) : y;
  };

  return force;
});


/***/ }),
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
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
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
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
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
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
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (path);


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = addAll;
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
});

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, inherit the existing extent.
  if (x1 < x0) x0 = this._x0, x1 = this._x1;
  if (y1 < y0) y0 = this._y0, y1 = this._y1;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else if (x0 > x || x > x1 || y0 > y || y > y1) {
    var z = x1 - x0,
        node = this._root,
        parent,
        i;

    switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
      case 0: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
        break;
      }
      case 1: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
        break;
      }
      case 2: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
        break;
      }
      case 3: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
        break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  // If the quadtree covers the point already, just return.
  else return this;

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
});


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
});


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
});


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad__ = __webpack_require__(56);


/* harmony default export */ __webpack_exports__["a"] = (function(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node[3], xm, ym, x2, y2),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node[2], x1, ym, xm, y2),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node[1], xm, y1, x2, ym),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cover__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remove__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__size__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visit__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visitAfter__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__x__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__y__ = __webpack_require__(214);
/* harmony export (immutable) */ __webpack_exports__["a"] = quadtree;













function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? __WEBPACK_IMPORTED_MODULE_10__x__["a" /* defaultX */] : x, y == null ? __WEBPACK_IMPORTED_MODULE_11__y__["a" /* defaultY */] : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = __WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */];
treeProto.addAll = __WEBPACK_IMPORTED_MODULE_0__add__["b" /* addAll */];
treeProto.cover = __WEBPACK_IMPORTED_MODULE_1__cover__["a" /* default */];
treeProto.data = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* default */];
treeProto.extent = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */];
treeProto.find = __WEBPACK_IMPORTED_MODULE_4__find__["a" /* default */];
treeProto.remove = __WEBPACK_IMPORTED_MODULE_5__remove__["a" /* default */];
treeProto.removeAll = __WEBPACK_IMPORTED_MODULE_5__remove__["b" /* removeAll */];
treeProto.root = __WEBPACK_IMPORTED_MODULE_6__root__["a" /* default */];
treeProto.size = __WEBPACK_IMPORTED_MODULE_7__size__["a" /* default */];
treeProto.visit = __WEBPACK_IMPORTED_MODULE_8__visit__["a" /* default */];
treeProto.visitAfter = __WEBPACK_IMPORTED_MODULE_9__visitAfter__["a" /* default */];
treeProto.x = __WEBPACK_IMPORTED_MODULE_10__x__["b" /* default */];
treeProto.y = __WEBPACK_IMPORTED_MODULE_11__y__["b" /* default */];


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = removeAll;
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
});

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this._root;
});


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad__ = __webpack_require__(56);


/* harmony default export */ __webpack_exports__["a"] = (function(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](child, x0, y0, xm, ym));
    }
  }
  return this;
});


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad__ = __webpack_require__(56);


/* harmony default export */ __webpack_exports__["a"] = (function(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
});


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultX;
function defaultX(d) {
  return d[0];
}

/* harmony default export */ __webpack_exports__["b"] = (function(_) {
  return arguments.length ? (this._x = _, this) : this._x;
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultY;
function defaultY(d) {
  return d[1];
}

/* harmony default export */ __webpack_exports__["b"] = (function(_) {
  return arguments.length ? (this._y = _, this) : this._y;
});


/***/ }),
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
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(35);




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
      lo = (cw ? rc : -rc) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(x01 * x01 + y01 * y01),
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
      d = (dy < 0 ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* max */])(0, r * r * d2 - D * D)),
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

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
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
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["f" /* halfPi */],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["f" /* halfPi */],
        da = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* abs */])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math__["c" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
      context.moveTo(r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a0), r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        context.moveTo(r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a1), r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a1));
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
          rp = (ap > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) && (padRadius ? +padRadius.apply(this, arguments) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(r0 * r0 + r1 * r1)),
          rc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["j" /* min */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* abs */])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        var p0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* asin */])(rp / r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(ap)),
            p1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* asin */])(rp / r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(ap));
        if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a01),
          y01 = r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a01),
          x10 = r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a10),
          y10 = r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a10);

      // Apply rounded corners?
      if (rc > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        var x11 = r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a11),
            y11 = r1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a11),
            x00 = r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a00),
            y00 = r0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < __WEBPACK_IMPORTED_MODULE_2__math__["b" /* pi */]) {
          var oc = da0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* acos */])((ax * bx + ay * by) / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(ax * ax + ay * ay) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(bx * bx + by * by))) / 2),
              lc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sqrt */])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["j" /* min */])(rc, (r0 - lc) / (kc - 1));
          rc1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["j" /* min */])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y01, t0.x01), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y01, t0.x01), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y11, t1.x11), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* epsilon */]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y01, t0.x01), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y01, t0.x01), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y11, t1.x11), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* atan2 */])(t1.y01, t1.x01), !cw);
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
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* pi */] / 2;
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(a) * r, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* sin */])(a) * r];
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
});


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(42);



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
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new BasisClosed(context);
});


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(42);


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
      default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__basis__["b" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new BasisOpen(context);
});


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(42);


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context);
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

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom__ = __webpack_require__(58);




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

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__["a" /* CardinalClosed */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom__ = __webpack_require__(58);



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

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__["a" /* CardinalOpen */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(45);


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

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new LinearClosed(context);
});


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = monotoneX;
/* unused harmony export monotoneY */
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


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new Natural(context);
});


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stepBefore;
/* harmony export (immutable) */ __webpack_exports__["c"] = stepAfter;
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

/* harmony default export */ __webpack_exports__["b"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  return d;
});


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(36);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(36);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(36);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series, order) {
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
});


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(60);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["b" /* default */])(series).reverse();
});


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(60);



/* unused harmony default export */ var _unused_webpack_default_export = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* sum */]),
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
});


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(37);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).reverse();
});


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__descending__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(35);





/* unused harmony default export */ var _unused_webpack_default_export = (function() {
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
});


/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radialLine__ = __webpack_require__(86);




/* unused harmony default export */ var _unused_webpack_default_export = (function() {
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
});


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none__ = __webpack_require__(37);





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
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
});


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant__ = __webpack_require__(29);
/* unused harmony export symbols */










var symbols = [
  __WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__symbol_cross__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__symbol_square__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__symbol_star__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__symbol_wye__["a" /* default */]
];

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
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
});


/***/ }),
/* 248 */,
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timer__ = __webpack_require__(61);
/* unused harmony reexport now */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["a"]; });
/* unused harmony reexport timerFlush */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout__ = __webpack_require__(251);
/* unused harmony reexport timeout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_interval__ = __webpack_require__(250);
/* unused harmony reexport interval */







/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(61);


/* unused harmony default export */ var _unused_webpack_default_export = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["b" /* Timer */], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timer__["c" /* now */])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(61);


/* unused harmony default export */ var _unused_webpack_default_export = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["b" /* Timer */];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  var out$ = typeof exports != 'undefined' && exports || "function" != 'undefined' && {} || this;

  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>';

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
        img.crossOrigin="anonymous";
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

  function styles(el, options, cssLoadedCallback) {
    var selectorRemap = options.selectorRemap;
    var modifyStyle = options.modifyStyle;
    var css = "";
    // each font that has extranl link is saved into queue, and processed
    // asynchronously
    var fontsQueue = [];
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      try {
        var rules = sheets[i].cssRules;
      } catch (e) {
        console.warn("Stylesheet could not be loaded: "+sheets[i].href);
        continue;
      }

      if (rules != null) {
        for (var j = 0, match; j < rules.length; j++, match = null) {
          var rule = rules[j];
          if (typeof(rule.style) != "undefined") {
            var selectorText;

            try {
              selectorText = rule.selectorText;
            } catch(err) {
              console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
            }

            try {
              if (selectorText) {
                match = el.querySelector(selectorText) || el.parentNode.querySelector(selectorText);
              }
            } catch(err) {
              console.warn('Invalid CSS selector "' + selectorText + '"', err);
            }

            if (match) {
              var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
              var cssText = modifyStyle ? modifyStyle(rule.style.cssText) : rule.style.cssText;
              css += selector + " { " + cssText + " }\n";
            } else if(rule.cssText.match(/^@font-face/)) {
              // below we are trying to find matches to external link. E.g.
              // @font-face {
              //   // ...
              //   src: local('Abel'), url(https://fonts.gstatic.com/s/abel/v6/UzN-iejR1VoXU2Oc-7LsbvesZW2xOQ-xsNqO47m55DA.woff2);
              // }
              //
              // This regex will save extrnal link into first capture group
              var fontUrlRegexp = /url\(["']?(.+?)["']?\)/;
              // TODO: This needs to be changed to support multiple url declarations per font.
              var fontUrlMatch = rule.cssText.match(fontUrlRegexp);

              var externalFontUrl = (fontUrlMatch && fontUrlMatch[1]) || '';
              var fontUrlIsDataURI = externalFontUrl.match(/^data:/);
              if (fontUrlIsDataURI) {
                // We should ignore data uri - they are already embedded
                externalFontUrl = '';
              }

              if (externalFontUrl) {
                // okay, we are lucky. We can fetch this font later

                //handle url if relative
                if (externalFontUrl.startsWith('../')) {
                  externalFontUrl = sheets[i].href + '/../' + externalFontUrl
                } else if (externalFontUrl.startsWith('./')) {
                  externalFontUrl = sheets[i].href + '/.' + externalFontUrl
                }

                fontsQueue.push({
                  text: rule.cssText,
                  // Pass url regex, so that once font is downladed, we can run `replace()` on it
                  fontUrlRegexp: fontUrlRegexp,
                  format: getFontMimeTypeFromUrl(externalFontUrl),
                  url: externalFontUrl
                });
              } else {
                // otherwise, use previous logic
                css += rule.cssText + '\n';
              }
            }
          }
        }
      }
    }

    // Now all css is processed, it's time to handle scheduled fonts
    processFontQueue(fontsQueue);

    function getFontMimeTypeFromUrl(fontUrl) {
      var supportedFormats = {
        'woff2': 'font/woff2',
        'woff': 'font/woff',
        'otf': 'application/x-font-opentype',
        'ttf': 'application/x-font-ttf',
        'eot': 'application/vnd.ms-fontobject',
        'sfnt': 'application/font-sfnt',
        'svg': 'image/svg+xml'
      };
      var extensions = Object.keys(supportedFormats);
      for (var i = 0; i < extensions.length; ++i) {
        var extension = extensions[i];
        // TODO: This is not bullet proof, it needs to handle edge cases...
        if (fontUrl.indexOf('.' + extension) > 0) {
          return supportedFormats[extension];
        }
      }

      // If you see this error message, you probably need to update code above.
      console.error('Unknown font format for ' + fontUrl+ '; Fonts may not be working correctly');
      return 'application/octet-stream';
    }

    function processFontQueue(queue) {
      if (queue.length > 0) {
        // load fonts one by one until we have anything in the queue:
        var font = queue.pop();
        processNext(font);
      } else {
        // no more fonts to load.
        cssLoadedCallback(css);
      }

      function processNext(font) {
        // TODO: This could benefit from caching.
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', fontLoaded);
        oReq.addEventListener('error', transferFailed);
        oReq.addEventListener('abort', transferFailed);
        oReq.open('GET', font.url);
        oReq.responseType = 'arraybuffer';
        oReq.send();

        function fontLoaded() {
          // TODO: it may be also worth to wait until fonts are fully loaded before
          // attempting to rasterize them. (e.g. use https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet )
          var fontBits = oReq.response;
          var fontInBase64 = arrayBufferToBase64(fontBits);
          updateFontStyle(font, fontInBase64);
        }

        function transferFailed(e) {
          console.warn('Failed to load font from: ' + font.url);
          console.warn(e)
          css += font.text + '\n';
          processFontQueue();
        }

        function updateFontStyle(font, fontInBase64) {
          var dataUrl = 'url("data:' + font.format + ';base64,' + fontInBase64 + '")';
          css += font.text.replace(font.fontUrlRegexp, dataUrl) + '\n';

          // schedule next font download on next tick.
          setTimeout(function() {
            processFontQueue(queue)
          }, 0);
        }

      }
    }

    function arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;

      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
      }

      return window.btoa(binary);
    }
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

  out$.prepareSvg = function(el, options, cb) {
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
        if (!fos[i].getAttribute('xmlns')) {
          fos[i].setAttributeNS(xmlns, "xmlns", "http://www.w3.org/1999/xhtml");
        }
      }

      outer.appendChild(clone);

      // In case of custom fonts we need to fetch font first, and then inline
      // its url into data-uri format (encode as base64). That's why style
      // processing is done asynchonously. Once all inlining is finshed
      // cssLoadedCallback() is called.
      styles(el, options, cssLoadedCallback);

      function cssLoadedCallback(css) {
        // here all fonts are inlined, so that we can render them properly.
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
        var defs = document.createElement('defs');
        defs.appendChild(s);
        clone.insertBefore(defs, clone.firstChild);

        if (cb) {
          var outHtml = outer.innerHTML;
          outHtml = outHtml.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
          cb(outHtml, width, height);
        }
      }
    });
  }

  out$.svgAsDataUri = function(el, options, cb) {
    out$.prepareSvg(el, options, function(svg) {
      var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(doctype + svg));
      if (cb) {
        cb(uri);
      }
    });
  }

  out$.svgAsPngUri = function(el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.encoderType = options.encoderType || 'image/png';
    options.encoderOptions = options.encoderOptions || 0.8;

    var convertToPng = function(src, w, h) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;

      if(options.canvg) {
        options.canvg(canvas, src);
      } else {
        context.drawImage(src, 0, 0);
      }

      if(options.backgroundColor){
        context.globalCompositeOperation = 'destination-over';
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      var png;
      try {
        png = canvas.toDataURL(options.encoderType, options.encoderOptions);
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

    if(options.canvg) {
      out$.prepareSvg(el, options, convertToPng);
    } else {
      out$.svgAsDataUri(el, options, function(uri) {
        var image = new Image();

        image.onload = function() {
          convertToPng(image, image.width, image.height);
        }

        image.onerror = function() {
          console.error(
            'There was an error loading the data URI as an image on the following SVG\n',
            window.atob(uri.slice(26)), '\n',
            "Open the following link to see browser's diagnosis\n",
            uri);
        }

        image.src = uri;
      });
    }
  }

  out$.download = function(name, uri) {
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(uriToBlob(uri), name);
    } else {
      var saveLink = document.createElement('a');
      var downloadSupported = 'download' in saveLink;
      if (downloadSupported) {
        saveLink.download = name;
        saveLink.style.display = 'none';
        document.body.appendChild(saveLink);
        try {
          var blob = uriToBlob(uri);
          var url = URL.createObjectURL(blob);
          saveLink.href = url;
          saveLink.onclick = function() {
            requestAnimationFrame(function() {
              URL.revokeObjectURL(url);
            })
          };
        } catch (e) {
          console.warn('This browser does not support object URLs. Falling back to string URL.');
          saveLink.href = uri;
        }
        saveLink.click();
        document.body.removeChild(saveLink);
      }
      else {
        window.open(uri, '_temp', 'menubar=no,toolbar=no,status=no');
      }
    }
  }

  function uriToBlob(uri) {
    var byteString = window.atob(uri.split(',')[1]);
    var mimeString = uri.split(',')[0].split(':')[1].split(';')[0]
    var buffer = new ArrayBuffer(byteString.length);
    var intArray = new Uint8Array(buffer);
    for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([buffer], {type: mimeString});
  }

  out$.saveSvg = function(el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsDataUri(el, options, function(uri) {
      out$.download(name, uri);
    });
  }

  out$.saveSvgAsPng = function(el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsPngUri(el, options, function(uri) {
      out$.download(name, uri);
    });
  }

  // if define is defined create as an AMD module
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return out$;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

})();


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

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
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(254);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
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
			var newStyles = listToStyles(newList, options);
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
};

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

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
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
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
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
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

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
		update = updateLink.bind(null, styleElement, options);
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

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

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


/***/ }),
/* 254 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABQCAQAAADykSIGAAAF1UlEQVR4Ae3df4zXdR3A8cfnvnccd7i7gwMiCCE6BzlwImVFpqgnykANZ66RawHTQJrnVizJymwENKUcJSBjsEqyJrIEQiHQSoutWBA4BYwLGCi/Tu7O7pDv/fj0R2vfHdx9J3ef7925vR9/v/577j6/vrfXO9IjgrhYkb4K0OR9jc4BEMUATHe7z/mEAkF3anLI3/3e85rbRvm4VSr1pOAV9zmUiXK17cq96+de8IbzChQrkdLihLQgSfmGSmlwRiug0Bh3qjJAjZvsJYoZ5W/KbfZVZ2XkGaifFm9rFiTnI4o1OOVCJdaZ5owJjkYx291sszvELjRYP41OCpJSZIgWx7S6WMomU2x1WxTfbqMaFWpdLM/HpJzUKEhGuRJn1WrfcLuVmxrFq822yCPaV6a/ejWCZAzTx3Fp7etjoflWRPEbPunTdnU4NkzacUEyRoocFmtf5FYv2hfFaQWKvN/h2Eixw4LuiJKnwgFNURwjL8vYCK2OCLrn8jVMNf+LUijdCy5f4UZfpn8mSn+14Ubfk4/EmWfdTJQRmbHwSNwjL4+Zt8IT/48yKuvYSUEuP7O0/X7SlPlLyTbWLElBH0OktKjXqIkLvjTGmRt9trGkBfkGKtLWOWc0k4kSZR0LcqFYscJ2fuTKRMk6FnSnTBQfWiHKEP9W7y+e95y0D6LUvab5jGbDnZcDIcr9nga8bYkVmmVzmW97UAngVtvkQIiy2mwZ/1Sl3kRjXWGoQVJa1Kl1yn67xX5sqIzvWSgHQpQtpuisp82RAyHKq67TWevcKwdClM2m6qxlquRAiLLIAp31davkQIgy0xqd9QdTNUlYiDLCHmU67wnzBQlHedFtuqLFp+wRJBjls3bqqvW+JEgwymqzdVXaEGcFiUU5ariuu9NGQUJRStVKwncsFiQUpcJbkrDUtwQJRRltvyQsN0+QUJThjkrCEgsECUXp65wkPOqHgoSi8I4huu4BKwSJRdlqsq4Lvz8mGuVhi3XdYKcFlxylwGilWuRpViCtSKMydQbbKE/XHDRDpEytYucUapKvRUqdg9KCDqOMV60OQLFhykGeRW7QNcs9q1mk1buOawRQapTdgg6jEBmjVEqMBu84BRjpdf103ikV3gMMMlQpYk1qHRDLKvylcFCD9txlvUjnxKZ7QXv6GS22W9DJ/5D8srX6unSt5lkpyEkUxllpoktz2GwvCxKNUmCsY04DmOwbJiv0Qeyy0q+kBQlHqfQSfukh9QBK3WCiq1UYKaWtFsdUe9NOrzksyEkUbvQbg+11vTptPWSpPG21+qYnBTmOwpV2Krno/xwne0nkYrEptgpyHIW5lqPKMhk73KR9fzJJkPMo+Q65HL/wU3vFRrvHo1IAjuJyAK1KNAhyHIUqTwLS6ANIe8YsrJYyE8+6RwpjHBDkPEqBLSpd6BXbLMYKzMUCU12Hq+wT5DwKhR43RwEyfm3fBVHGmdF9UUIU+KhbXKHASc2W9Y4oIUrGOHtDlA9/lCBECVGe0uLBEKWno3zBn7HO6xZjCR7GAmN9Bdd7VdCx9o8gyETJMpTNGjMxX6nvYoG0pVio1hNYa5b2BfnKFWurUY1mmShZhjpymcfNwT9MskElrhLbhx2m+6NrsNJ8/3Epwsav813Z9zXej5ywzQaft12e5ebhKQ9odYvXzHCjQR6x26UIu/GOJLMZ73cq/MwqMSL3qfKWL+qcsEWyuvftkAz7Vo/0vm2rYTPx2d63lzjs8D7f+zZ4hyMIWgkHEPSuKCXqNETxm8YYb084gKBXXL4m2GV/FK/1NY/5Qa+4fIUb/WO+b00U3+05p1Wo7/EbfXgkLvMv5e6K4iJbTLLB3eIefSQOL4+RjabZoTKKucY25dab5b0ee3kMn1lKPWOaGteqjmLyTfJbA5zxE5sc0BQOIOjWD5L9XOkOcw1Qo9Ieohj6mGCRSYKe9LL7M8fUQr6BprjZtUZJCbrTOdX+apNNkIkiHEDQm/wXb4bZSIeJkMcAAAAASUVORK5CYII="

/***/ }),
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
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */
/***/ (function(module, exports) {

module.exports = "<h1>React Stockcharts</h1>\n<p>Highly customizable stock charts built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></p>\n";

/***/ }),
/* 363 */,
/* 364 */,
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_charts_CandleStickChartWithDarkTheme__ = __webpack_require__(102);









// import Chart from "./lib/charts/OHLCChartWithElderRayIndicator";

var ReadME = __webpack_require__(362);

__webpack_require__(95);

document.getElementById("content").innerHTML = ReadME;

var parseDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_time_format__["a" /* timeParse */])("%Y-%m-%d");

if (!window.Modernizr.fetch || !window.Modernizr.promises) {
	__webpack_require__.e/* require.ensure */(0).then((function (require) {
		__webpack_require__(62);
		__webpack_require__(63);
		loadPage();
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
} else {
	loadPage();
}

function loadPage() {
	fetch("data/MSFT.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["a" /* tsvParse */])(data, function (d) {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;

			return d;
		});
	}).then(function (data) {
		__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__lib_charts_CandleStickChartWithDarkTheme__["a" /* default */], { data: data, type: "hybrid" }), document.getElementById("chart"));
	});
}

/***/ })
],[365]);
});
//# sourceMappingURL=react-stockcharts-home.23781ea757fae27c0ec8.js.map