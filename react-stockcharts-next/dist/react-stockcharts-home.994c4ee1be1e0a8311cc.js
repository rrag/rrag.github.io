(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory();
	else
		root["ReStock"] = factory();
})(this, function() {
return webpackJsonpReStock([2],{

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

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

/* harmony default export */ exports["a"] = function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n]"),
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
};


/***/ },

/***/ 220:
/***/ function(module, exports) {

module.exports = "<h1>React Stockcharts</h1>\n<p>Highly customizable stock charts built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></p>\n";

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dsv__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_csv__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_tsv__ = __webpack_require__(71);
/* unused harmony reexport dsvFormat */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["a"]; });
/* unused harmony reexport csvParseRows */
/* unused harmony reexport csvFormat */
/* unused harmony reexport csvFormatRows */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["a"]; });
/* unused harmony reexport tsvParseRows */
/* unused harmony reexport tsvFormat */
/* unused harmony reexport tsvFormatRows */





/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(90)(content, {});
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

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_charts_CandleStickChartWithDarkTheme__ = __webpack_require__(58);
"use strict";








// import Chart from "./lib/charts/OHLCChartWithElderRayIndicator";

var ReadME = __webpack_require__(220);

__webpack_require__(43);

document.getElementById("content").innerHTML = ReadME;

var parseDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_time_format__["c" /* timeParse */])("%Y-%m-%d");

if (!window.Modernizr.fetch || !window.Modernizr.promises) {
	__webpack_require__.e/* nsure */(0).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
		__webpack_require__(24);
		__webpack_require__(25);
		loadPage();
	}).bind(null, __webpack_require__));
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

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src___ = __webpack_require__(2);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].AreaSeries;
var StochasticSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].StochasticSeries;
var BollingerSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].BollingerSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3__src___["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].MovingAverageTooltip;
var BollingerBandTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].BollingerBandTooltip;
var StochasticTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].StochasticTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3__src___["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3__src___["axes"].YAxis;
var stochasticOscillator = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].stochasticOscillator;
var ema = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].ema;
var bollingerBand = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].bollingerBand;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3__src___["helper"].fitWidth;

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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3__src___["ChartCanvas"],
				{ ratio: ratio, width: width, height: 750,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, slowSTO, fastSTO, fullSTO, bb],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3__src___["Chart"],
					{ id: 1, height: 325,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, bb.accessor(), ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, _extends({ axisAt: "right", orient: "right", ticks: 5 }, yGrid, {
						tickStroke: "#FFFFFF" })),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
						stroke: "#FFFFFF", opacity: 0.5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, {
						wickStroke: function wickStroke(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BollingerSeries, { calculator: bb }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, -10] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 10],
						calculators: [ema20, ema50] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BollingerBandTooltip, { origin: [-38, 60], calculator: bb })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3__src___["Chart"],
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 100, origin: function origin(w, h) {
							return [0, h - 475];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s"),
						tickStroke: "#FFFFFF" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3__src___["Chart"],
					{ id: 3,
						yExtents: slowSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 375];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
						stroke: "#FFFFFF", opacity: 0.5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: slowSTO.tickValues(),
						tickStroke: "#FFFFFF" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StochasticSeries, { calculator: slowSTO,
						stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						StochasticTooltip,
						{ calculator: slowSTO, origin: [-38, 15] },
						"Fast STO"
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3__src___["Chart"],
					{ id: 4,
						yExtents: fastSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 250];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
						stroke: "#FFFFFF", opacity: 0.5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fastSTO.tickValues(),
						tickStroke: "#FFFFFF" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StochasticSeries, { calculator: fastSTO,
						stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						StochasticTooltip,
						{ calculator: fastSTO, origin: [-38, 15] },
						"Slow STO"
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3__src___["Chart"],
					{ id: 5,
						yExtents: fullSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 125];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, _extends({ axisAt: "bottom", orient: "bottom" }, xGrid, {
						tickStroke: "#FFFFFF", stroke: "#FFFFFF" })),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fullSTO.tickValues(),
						tickStroke: "#FFFFFF" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StochasticSeries, { calculator: fullSTO,
						stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						StochasticTooltip,
						{ calculator: fullSTO, origin: [-38, 15] },
						"Full STO"
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, { stroke: "#FFFFFF" })
			);
		}
	}]);

	return CandleStickChartWithDarkTheme;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartWithDarkTheme.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithDarkTheme.defaultProps = {
	type: "svg"
};
CandleStickChartWithDarkTheme = fitWidth(CandleStickChartWithDarkTheme);

/* harmony default export */ exports["a"] = CandleStickChartWithDarkTheme;

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(65)();
// imports


// module
exports.push([module.i, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\naside table tbody > tr > td,\naside table tbody > tr > th,\naside table tfoot > tr > td,\naside table tfoot > tr > th,\naside table thead > tr > td,\naside table thead > tr > th {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #DDD;\n}\n\na.button {\n  background: transparent url(" + __webpack_require__(91) + ") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important;\n}\n\na.button small {\n  display: inline;\n  font-size: 13px;\n  margin-top: 15px;\n}\n\n.dark {\n  background: #303030;\n}\n\n.dark .react-stockcharts-tooltip {\n  fill: white;\n}\n\n.dark .react-stockcharts-tooltip-label {\n  fill: yellow;\n}\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white;\n}\n\n.jumbotron a {\n  color: yellow;\n}\n\n.top-spacing {\n  padding-top: 10px;\n}\n\n.navbar {\n  background-color: steelblue;\n}\n\n.navbar a {\n  color: white;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 5px 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-size: 13px;\n}\n\n.nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n.main {\n  top: 51px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\nimg[alt=\"Done\"] {\n  max-width: 20px;\n  max-height: 20px;\n  padding-bottom: 4px;\n}\n", ""]);

// exports


/***/ },

/***/ 65:
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

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return csvParse; });
/* unused harmony export csvParseRows */
/* unused harmony export csvFormat */
/* unused harmony export csvFormatRows */


var csv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;


/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return tsvParse; });
/* unused harmony export tsvParseRows */
/* unused harmony export tsvFormat */
/* unused harmony export tsvFormatRows */


var tsv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;


/***/ },

/***/ 90:
/***/ function(module, exports) {

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
	if(typeof DEBUG !== "undefined" && DEBUG) {
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

/***/ 91:
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }

},[529])
});
;
//# sourceMappingURL=react-stockcharts-home.994c4ee1be1e0a8311cc.js.map