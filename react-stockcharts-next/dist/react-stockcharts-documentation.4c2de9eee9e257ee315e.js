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
return webpackJsonpReStock([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Row = function (_React$Component) {
	_inherits(Row, _React$Component);

	function Row() {
		_classCallCheck(this, Row);

		return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
	}

	_createClass(Row, [{
		key: 'render',
		value: function render() {
			var anchor = this.props.anchor || this.props.title;
			var title = this.props.title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'h4',
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'a',
					{ id: anchor, href: '#' + anchor },
					this.props.title
				)
			) : null;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'row' },
				title,
				this.props.children
			);
		}
	}]);

	return Row;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Row.propTypes = {
	title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
	anchor: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/* harmony default export */ exports["a"] = Row;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ContentSection = function (_React$Component) {
	_inherits(ContentSection, _React$Component);

	function ContentSection() {
		_classCallCheck(this, ContentSection);

		return _possibleConstructorReturn(this, (ContentSection.__proto__ || Object.getPrototypeOf(ContentSection)).apply(this, arguments));
	}

	_createClass(ContentSection, [{
		key: "render",
		value: function render() {
			var className = this.props.className;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ id: "ContentSection", className: "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main " + className },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"h1",
					{ className: "page-header" },
					this.props.title
				),
				this.props.children
			);
		}
	}]);

	return ContentSection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

ContentSection.propTypes = {
	title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
};

/* harmony default export */ exports["a"] = ContentSection;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Section = function (_React$Component) {
	_inherits(Section, _React$Component);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			var className = this.props.className + ' col-md-' + 6 * this.props.colSpan;
			var title = this.props.title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'h4',
				null,
				this.props.title
			) : null;
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: className },
				title,
				this.props.children
			);
		}
	}]);

	return Section;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Section.propTypes = {
	colSpan: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

Section.defaultProps = {
	colSpan: 1
};

/* harmony default export */ exports["a"] = Section;

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dsv__ = __webpack_require__(23);
/* unused harmony reexport dsvFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_csv__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["a"]; });
/* unused harmony reexport csvParseRows */
/* unused harmony reexport csvFormat */
/* unused harmony reexport csvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_tsv__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["a"]; });
/* unused harmony reexport tsvParseRows */
/* unused harmony reexport tsvFormat */
/* unused harmony reexport tsvFormatRows */





/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(93)(content, {});
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ exports["a"] = updatingDataWrapper;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



function getDisplayName(ChartComponent) {
	var name = ChartComponent.displayName || ChartComponent.name || "ChartComponent";
	return name;
}

function updatingDataWrapper(ChartComponent) {
	var LENGTH = 130;

	var UpdatingComponentHOC = function (_React$Component) {
		_inherits(UpdatingComponentHOC, _React$Component);

		function UpdatingComponentHOC(props) {
			_classCallCheck(this, UpdatingComponentHOC);

			var _this = _possibleConstructorReturn(this, (UpdatingComponentHOC.__proto__ || Object.getPrototypeOf(UpdatingComponentHOC)).call(this, props));

			_this.state = {
				length: LENGTH,
				data: _this.props.data.slice(0, LENGTH)
			};
			_this.speed = 1000;
			_this.onKeyPress = _this.onKeyPress.bind(_this);
			return _this;
		}

		_createClass(UpdatingComponentHOC, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				document.addEventListener("keyup", this.onKeyPress);
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				if (this.interval) clearInterval(this.interval);
				document.removeEventListener("keyup", this.onKeyPress);
			}
		}, {
			key: "onKeyPress",
			value: function onKeyPress(e) {
				var _this2 = this;

				var keyCode = e.which;
				console.log(keyCode);
				switch (keyCode) {
					case 50:
						{
							// 2 (50) - Start alter data
							this.func = function () {
								if (_this2.state.length < _this2.props.data.length) {
									_this2.setState({
										length: _this2.state.length + 1,
										data: _this2.props.data.slice(0, _this2.state.length + 1)
									});
								}
							};
							break;
						}
					case 80:
					// P (80)
					case 49:
						{
							// 1 (49) - Start Push data
							this.func = function () {
								if (_this2.state.length < _this2.props.data.length) {
									_this2.setState({
										length: _this2.state.length + 1,
										data: _this2.props.data.slice(0, _this2.state.length + 1)
									});
								}
							};
							break;
						}
					case 27:
						{
							// ESC (27) - Clear interval
							this.func = null;
							if (this.interval) clearInterval(this.interval);
							break;
						}
					case 107:
						{
							// + (107) - increase the this.speed
							this.speed = Math.max(this.speed / 2, 50);
							break;
						}
					case 109:
					case 189:
						{
							// - (189, 109) - reduce the this.speed
							var delta = Math.min(this.speed, 1000);
							this.speed = this.speed + delta;
							break;
						}
				}
				if (this.func) {
					if (this.interval) clearInterval(this.interval);
					console.log("this.speed  = ", this.speed);
					this.interval = setInterval(this.func, this.speed);
				}
			}
		}, {
			key: "render",
			value: function render() {
				var type = this.props.type;
				var data = this.state.data;


				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChartComponent, { ref: "component", data: data, type: type });
			}
		}]);

		return UpdatingComponentHOC;
	}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

	UpdatingComponentHOC.defaultProps = {
		type: "svg"
	};
	UpdatingComponentHOC.displayName = "updatingDataWrapper(" + getDisplayName(ChartComponent) + ")";

	return UpdatingComponentHOC;
}

/***/ },
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].AreaSeries,
    StochasticSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].StochasticSeries,
    BollingerSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].BollingerSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3__src___["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].MovingAverageTooltip,
    BollingerBandTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].BollingerBandTooltip,
    StochasticTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].StochasticTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3__src___["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3__src___["axes"].YAxis;
var stochasticOscillator = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].stochasticOscillator,
    ema = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].ema,
    bollingerBand = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].bollingerBand;
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
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, _extends({ axisAt: "right", orient: "right", ticks: 5 }, yGrid, { inverted: true,
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
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(65)();
// imports


// module
exports.push([module.i, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\naside table tbody > tr > td,\naside table tbody > tr > th,\naside table tfoot > tr > td,\naside table tfoot > tr > th,\naside table thead > tr > td,\naside table thead > tr > th {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #DDD;\n}\n\na.button {\n  background: transparent url(" + __webpack_require__(94) + ") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important;\n}\n\na.button small {\n  display: inline;\n  font-size: 13px;\n  margin-top: 15px;\n}\n\n.dark {\n  background: #303030;\n}\n\n.dark .react-stockcharts-tooltip {\n  fill: white;\n}\n\n.dark .react-stockcharts-tooltip-label {\n  fill: yellow;\n}\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white;\n}\n\n.jumbotron a {\n  color: yellow;\n}\n\n.top-spacing {\n  padding-top: 10px;\n}\n\n.navbar {\n  background-color: steelblue;\n}\n\n.navbar a {\n  color: white;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 5px 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-size: 13px;\n}\n\n.nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n.main {\n  top: 51px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\nimg[alt=\"Done\"] {\n  max-width: 20px;\n  max-height: 20px;\n  padding-bottom: 4px;\n}\n", ""]);

// exports


/***/ },
/* 65 */
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
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(23);
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(23);
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
/* 93 */
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
/* 94 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartForDiscontinuousIntraDay = function (_React$Component) {
	_inherits(CandleStickChartForDiscontinuousIntraDay, _React$Component);

	function CandleStickChartForDiscontinuousIntraDay() {
		_classCallCheck(this, CandleStickChartForDiscontinuousIntraDay);

		return _possibleConstructorReturn(this, (CandleStickChartForDiscontinuousIntraDay.__proto__ || Object.getPrototypeOf(CandleStickChartForDiscontinuousIntraDay)).apply(this, arguments));
	}

	_createClass(CandleStickChartForDiscontinuousIntraDay, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


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

			var smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, smaVolume50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: "#0F0F0F" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: "#0F0F0F" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: smaVolume50.accessor(), displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: smaVolume50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: smaVolume50.accessor(), displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 40, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						rectWidth: 60,
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%H:%M:%S") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0], xDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d %H:%M:%S") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartForDiscontinuousIntraDay;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartForDiscontinuousIntraDay.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartForDiscontinuousIntraDay.defaultProps = {
	type: "svg"
};
CandleStickChartForDiscontinuousIntraDay = fitWidth(CandleStickChartForDiscontinuousIntraDay);

/* harmony default export */ exports["default"] = CandleStickChartForDiscontinuousIntraDay;

/***/ },
/* 96 */,
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithEdge = function (_React$Component) {
	_inherits(CandleStickChartWithEdge, _React$Component);

	function CandleStickChartWithEdge() {
		_classCallCheck(this, CandleStickChartWithEdge);

		return _possibleConstructorReturn(this, (CandleStickChartWithEdge.__proto__ || Object.getPrototypeOf(CandleStickChartWithEdge)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithEdge, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


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

			var smaVolume70 = sma().id(3).windowSize(70).sourcePath("volume").merge(function (d, c) {
				d.smaVolume70 = c;
			}).accessor(function (d) {
				return d.smaVolume70;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 450,
					margin: { left: 90, right: 90, top: 70, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, smaVolume70],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2016, 0, 1), new Date(2016, 9, 11)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume70.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume70.accessor(), stroke: smaVolume70.stroke(), fill: smaVolume70.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: smaVolume70.accessor(), fill: smaVolume70.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: "#0F0F0F" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: "#0F0F0F" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: smaVolume70.accessor(), displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: smaVolume70.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: smaVolume70.accessor(), displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: smaVolume70.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yPan: true, yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "top", orient: "top", flexTicks: true }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke(), highlightOnHover: true }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke(), highlightOnHover: true }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "top",
						orient: "top",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, -65] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, -55],
						calculators: [ema20, ema50] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithEdge;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/*


*/

CandleStickChartWithEdge.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithEdge.defaultProps = {
	type: "svg"
};
CandleStickChartWithEdge = fitWidth(CandleStickChartWithEdge);

/* harmony default export */ exports["a"] = CandleStickChartWithEdge;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithMACDIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithMACDIndicator, _React$Component);

	function CandleStickChartWithMACDIndicator() {
		_classCallCheck(this, CandleStickChartWithMACDIndicator);

		return _possibleConstructorReturn(this, (CandleStickChartWithMACDIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithMACDIndicator)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithMACDIndicator, [{
		key: "getChartCanvas",
		value: function getChartCanvas() {
			return this.refs.chartCanvas;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ref: "chartCanvas", ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDSeries, { calculator: macdCalculator }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithMACDIndicator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

CandleStickChartWithMACDIndicator.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithMACDIndicator.defaultProps = {
	type: "svg"
};

CandleStickChartWithMACDIndicator = fitWidth(CandleStickChartWithMACDIndicator);

/* harmony default export */ exports["a"] = CandleStickChartWithMACDIndicator;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithZoomPan = function (_React$Component) {
	_inherits(CandleStickChartWithZoomPan, _React$Component);

	function CandleStickChartWithZoomPan(props) {
		_classCallCheck(this, CandleStickChartWithZoomPan);

		var _this = _possibleConstructorReturn(this, (CandleStickChartWithZoomPan.__proto__ || Object.getPrototypeOf(CandleStickChartWithZoomPan)).call(this, props));

		_this.saveNode = _this.saveNode.bind(_this);
		_this.resetYDomain = _this.resetYDomain.bind(_this);
		return _this;
	}

	_createClass(CandleStickChartWithZoomPan, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.node = node;
		}
	}, {
		key: "resetYDomain",
		value: function resetYDomain() {
			this.node.resetYDomain();
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;
			var _props2 = this.props,
			    mouseMoveEvent = _props2.mouseMoveEvent,
			    panEvent = _props2.panEvent,
			    zoomEvent = _props2.zoomEvent;
			var clamp = this.props.clamp;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ref: this.saveNode,
					ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					mouseMoveEvent: mouseMoveEvent,
					panEvent: panEvent,
					zoomEvent: zoomEvent,
					clamp: clamp,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2016, 0, 1), new Date(2016, 9, 11)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}] },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", zoomEnabled: !zoomEvent }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5, zoomEnabled: !zoomEvent }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s"), zoomEnabled: !zoomEvent }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithZoomPan;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartWithZoomPan.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithZoomPan.defaultProps = {
	type: "svg",
	mouseMoveEvent: true,
	panEvent: true,
	zoomEvent: true,
	clamp: false
};

CandleStickChartWithZoomPan = fitWidth(CandleStickChartWithZoomPan);

/* harmony default export */ exports["a"] = CandleStickChartWithZoomPan;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    KagiSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].KagiSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var kagi = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].kagi;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var Kagi = function (_React$Component) {
	_inherits(Kagi, _React$Component);

	function Kagi() {
		_classCallCheck(this, Kagi);

		return _possibleConstructorReturn(this, (Kagi.__proto__ || Object.getPrototypeOf(Kagi)).apply(this, arguments));
	}

	_createClass(Kagi, [{
		key: "getChartCanvas",
		value: function getChartCanvas() {
			return this.refs.chartCanvas;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			var kagiCalculator = kagi();
			console.log(type);
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ref: "chartCanvas", ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [kagiCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(KagiSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return d.volume;
						},
						stroke: true,
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.5 })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return Kagi;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Kagi.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

Kagi.defaultProps = {
	type: "svg"
};
Kagi = fitWidth(Kagi);

/* harmony default export */ exports["a"] = Kagi;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var pointAndFigureTransformOptions = { boxSize: 0.25 };

var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    PointAndFigureSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].PointAndFigureSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var pointAndFigure = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].pointAndFigure;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var PointAndFigure = function (_React$Component) {
	_inherits(PointAndFigure, _React$Component);

	function PointAndFigure() {
		_classCallCheck(this, PointAndFigure);

		return _possibleConstructorReturn(this, (PointAndFigure.__proto__ || Object.getPrototypeOf(PointAndFigure)).apply(this, arguments));
	}

	_createClass(PointAndFigure, [{
		key: "getChartCanvas",
		value: function getChartCanvas() {
			return this.refs.chartCanvas;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			var pAndF = pointAndFigure();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ref: "chartCanvas", ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [pAndF],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PointAndFigureSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return PointAndFigure;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PointAndFigure.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

PointAndFigure.defaultProps = {
	type: "svg"
};
PointAndFigure = fitWidth(PointAndFigure);

/* harmony default export */ exports["a"] = PointAndFigure;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    RenkoSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].RenkoSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var renko = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].renko;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var Renko = function (_React$Component) {
	_inherits(Renko, _React$Component);

	function Renko() {
		_classCallCheck(this, Renko);

		return _possibleConstructorReturn(this, (Renko.__proto__ || Object.getPrototypeOf(Renko)).apply(this, arguments));
	}

	_createClass(Renko, [{
		key: "getChartCanvas",
		value: function getChartCanvas() {
			return this.refs.chartCanvas;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			var renkoCalculator = renko();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ref: "chartCanvas", ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [renkoCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RenkoSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return Renko;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Renko.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

Renko.defaultProps = {
	type: "svg"
};
Renko = fitWidth(Renko);

/* harmony default export */ exports["a"] = Renko;

/***/ },
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
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
/* 161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MenuItem = function (_React$Component) {
	_inherits(MenuItem, _React$Component);

	function MenuItem() {
		_classCallCheck(this, MenuItem);

		return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
	}

	_createClass(MenuItem, [{
		key: 'render',
		value: function render() {
			var className = this.props.current ? 'active' : '';
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'li',
				{ className: className },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'a',
					{ href: '#/' + this.props.anchor },
					this.props.title
				)
			);
		}
	}]);

	return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

MenuItem.propTypes = {
	current: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool.isRequired,
	title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
	anchor: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
};

MenuItem.defaultProps = {
	active: false
};

// onClick={this.handleClick}
/* harmony default export */ exports["a"] = MenuItem;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_row__ = __webpack_require__(3);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MainContainer = function (_React$Component) {
	_inherits(MainContainer, _React$Component);

	function MainContainer() {
		_classCallCheck(this, MainContainer);

		return _possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).apply(this, arguments));
	}

	_createClass(MainContainer, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: "container-fluid", id: "MainContainer" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_lib_row__["a" /* default */],
					null,
					this.props.children
				)
			);
		}
	}]);

	return MainContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ exports["a"] = MainContainer;
;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MenuGroup = function (_React$Component) {
	_inherits(MenuGroup, _React$Component);

	function MenuGroup() {
		_classCallCheck(this, MenuGroup);

		return _possibleConstructorReturn(this, (MenuGroup.__proto__ || Object.getPrototypeOf(MenuGroup)).apply(this, arguments));
	}

	_createClass(MenuGroup, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"ul",
				{ className: "nav nav-sidebar" },
				this.props.children
			);
		}
	}]);

	return MenuGroup;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ exports["a"] = MenuGroup;
;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"nav",
				{ className: "navbar navbar-fixed-top" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: "container-fluid" },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: "navbar-header" },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"a",
							{ className: "navbar-brand", href: "index.html" },
							"React Stockcharts"
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: "debug_here" })
					)
				)
			);
		}
	}]);

	return Nav;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ exports["a"] = Nav;
;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithAnnotation__ = __webpack_require__(238);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var AnnotationsPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "AnnotationsPage",

	statics: {
		title: "Annotations"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: AnnotationsPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithAnnotation__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(510) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = AnnotationsPage;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_charts_AreaChart__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_AreaChartWithYPercent__ = __webpack_require__(231);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';










var OverviewPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "OverviewPage",

	statics: {
		title: 'Area Chart'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: OverviewPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_lib_charts_AreaChart__["a" /* default */], { data: this.props.someData, type: "svg" })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(511) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_AreaChartWithYPercent__["a" /* default */], { data: this.props.someData, type: "svg" })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = OverviewPage;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_BarChart__ = __webpack_require__(233);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';



var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;








var BarChartPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "BarChartPage",

	statics: {
		title: "Bar Chart"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: BarChartPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_BarChart__["a" /* default */], { data: _this.props.barData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(512) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BarChartPage;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithBollingerBandOverlay__ = __webpack_require__(239);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';









var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var BollingerBandOverlayPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "BollingerBandOverlayPage",

	statics: {
		title: 'Bollinger Band'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: BollingerBandOverlayPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ type: "hybrid" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithBollingerBandOverlay__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(513) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BollingerBandOverlayPage;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithBrush__ = __webpack_require__(240);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var BrushSupportPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "BrushSupportPage",

	statics: {
		title: "Brush"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: BrushSupportPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(514) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithBrush__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BrushSupportPage;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_BubbleChart__ = __webpack_require__(234);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';



var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;








var BubbleChartPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "BubbleChartPage",

	statics: {
		title: "Bubble Chart"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: BubbleChartPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_BubbleChart__["a" /* default */], { data: _this.props.bubbleData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(515) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BubbleChartPage;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickChart__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickStockScaleChart__ = __webpack_require__(252);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';









var CandleStickChartPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "CandleStickChartPage",

	statics: {
		title: 'Candlestick Chart'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: CandleStickChartPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				{ title: "" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickChart__["a" /* default */], { data: this.props.someData, type: "svg" })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(517) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickStockScaleChart__["a" /* default */], { data: this.props.someData, type: "svg" })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(516) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				{ title: "stocktime scale" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(529) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = CandleStickChartPage;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';






var BreakingChangesPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "BreakingChangesPage",

	statics: {
		title: 'Change log'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: BreakingChangesPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(518) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BreakingChangesPage;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithClickHandlerCallback__ = __webpack_require__(242);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var ClickHandlerCallbackPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "ClickHandlerCallbackPage",

	statics: {
		title: "Click callback"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: ClickHandlerCallbackPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(519) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithClickHandlerCallback__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = ClickHandlerCallbackPage;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';






var ComingSoonPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "ComingSoonPage",

	statics: {
		title: 'Coming soon'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: ComingSoonPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(520) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = ComingSoonPage;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithCompare__ = __webpack_require__(243);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';








var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;




var CompareWithPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "CompareWithPage",

	statics: {
		title: 'Compare'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: CompareWithPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithCompare__["a" /* default */], { data: _this.props.compareData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(521) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = CompareWithPage;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';






var CreatingCustomChartSeriesPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "CreatingCustomChartSeriesPage",

	statics: {
		title: 'Custom - Create XXXSeries'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: CreatingCustomChartSeriesPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(523) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = CreatingCustomChartSeriesPage;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';






var CreatingCustomIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "CreatingCustomIndicatorPage",

	statics: {
		title: 'Custom - Create indicator'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: CreatingCustomIndicatorPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(522) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = CreatingCustomIndicatorPage;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickChartWithDarkTheme__ = __webpack_require__(59);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var TypeChooser = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].TypeChooser,
    SaveChartAsImage = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].SaveChartAsImage;

var DarkThemePage = function (_React$Component) {
	_inherits(DarkThemePage, _React$Component);

	function DarkThemePage(props) {
		_classCallCheck(this, DarkThemePage);

		var _this = _possibleConstructorReturn(this, (DarkThemePage.__proto__ || Object.getPrototypeOf(DarkThemePage)).call(this, props));

		_this.saveNode = _this.saveNode.bind(_this);
		_this.saveChartAsImage = _this.saveChartAsImage.bind(_this);
		return _this;
	}

	_createClass(DarkThemePage, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.chart = node;
		}
	}, {
		key: "saveChartAsImage",
		value: function saveChartAsImage() {
			var container = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.chart); // eslint-disable-line react/no-find-dom-node
			SaveChartAsImage.saveChartAsImage(container);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_content_section__["a" /* default */],
				{ title: DarkThemePage.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(524) } })
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5_lib_section__["a" /* default */],
						{ colSpan: 2, className: "dark" },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							null,
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickChartWithDarkTheme__["a" /* default */], { ref: _this2.saveNode, data: _this2.props.someData, type: type });
							}
						)
					)
				)
			);
		}
	}]);

	return DarkThemePage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

DarkThemePage.title = "Theme - Dark";

/* harmony default export */ exports["default"] = DarkThemePage;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithEdge__ = __webpack_require__(97);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';









var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var EdgeCoordinatesPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "EdgeCoordinatesPage",

	statics: {
		title: 'Edge coordinate'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: EdgeCoordinatesPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithEdge__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(525) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = EdgeCoordinatesPage;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_OHLCChartWithElderImpulseIndicator__ = __webpack_require__(265);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var ElderImpulseIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "ElderImpulseIndicatorPage",

	statics: {
		title: "Elder Impulse"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: ElderImpulseIndicatorPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(526) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_OHLCChartWithElderImpulseIndicator__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = ElderImpulseIndicatorPage;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_OHLCChartWithElderRayIndicator__ = __webpack_require__(266);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var ElderRayIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "ElderRayIndicatorPage",

	statics: {
		title: "ElderRay"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: ElderRayIndicatorPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(527) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_OHLCChartWithElderRayIndicator__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = ElderRayIndicatorPage;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartForDiscontinuousIntraDay__ = __webpack_require__(95);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';









var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var IntraDayContinuousDataPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "IntraDayContinuousDataPage",

	statics: {
		title: "Intra day with discontinuous scale"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: IntraDayContinuousDataPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartForDiscontinuousIntraDay__["default"], { data: _this.props.intraDayDiscontinuousData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(538) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = IntraDayContinuousDataPage;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithFibonacciInteractiveIndicator__ = __webpack_require__(244);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";








var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;




var FibonacciInteractiveIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "FibonacciInteractiveIndicatorPage",

	statics: {
		title: "Fibonacci Retracement"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: FibonacciInteractiveIndicatorPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(528) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithFibonacciInteractiveIndicator__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = FibonacciInteractiveIndicatorPage;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithForceIndexIndicator__ = __webpack_require__(245);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;

var ForceIndexIndicatorPage = function (_React$Component) {
	_inherits(ForceIndexIndicatorPage, _React$Component);

	function ForceIndexIndicatorPage() {
		_classCallCheck(this, ForceIndexIndicatorPage);

		return _possibleConstructorReturn(this, (ForceIndexIndicatorPage.__proto__ || Object.getPrototypeOf(ForceIndexIndicatorPage)).apply(this, arguments));
	}

	_createClass(ForceIndexIndicatorPage, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
				{ title: ForceIndexIndicatorPage.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(530) } })
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							null,
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithForceIndexIndicator__["a" /* default */], { data: _this2.props.someData, type: type });
							}
						)
					)
				)
			);
		}
	}]);

	return ForceIndexIndicatorPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ForceIndexIndicatorPage.title = "ForceIndex";

/* harmony default export */ exports["default"] = ForceIndexIndicatorPage;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_LineAndScatterChartGrid__ = __webpack_require__(262);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;








var GridPage = function (_React$Component) {
	_inherits(GridPage, _React$Component);

	function GridPage(params) {
		_classCallCheck(this, GridPage);

		var _this = _possibleConstructorReturn(this, (GridPage.__proto__ || Object.getPrototypeOf(GridPage)).call(this, params));

		_this.handleGridChange = _this.handleGridChange.bind(_this);
		_this.handleGridOpacityChange = _this.handleGridOpacityChange.bind(_this);
		_this.handleGridWidthChange = _this.handleGridWidthChange.bind(_this);
		_this.state = {
			tickStrokeDasharray: "Solid",
			tickStrokeOpacity: 0.2,
			tickStrokeWidth: 1
		};
		return _this;
	}

	_createClass(GridPage, [{
		key: "handleGridChange",
		value: function handleGridChange(e) {
			this.setState({
				tickStrokeDasharray: e.target.value
			});
		}
	}, {
		key: "handleGridOpacityChange",
		value: function handleGridOpacityChange(e) {
			this.setState({
				tickStrokeOpacity: parseFloat(e.target.value)
			});
		}
	}, {
		key: "handleGridWidthChange",
		value: function handleGridWidthChange(e) {
			this.setState({
				tickStrokeWidth: parseInt(e.target.value)
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    tickStrokeDasharray = _state.tickStrokeDasharray,
			    tickStrokeOpacity = _state.tickStrokeOpacity,
			    tickStrokeWidth = _state.tickStrokeWidth;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
				{ title: GridPage.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							{ ref: "container" },
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_LineAndScatterChartGrid__["a" /* default */], {
									gridProps: {
										tickStrokeOpacity: tickStrokeOpacity,
										tickStrokeDasharray: tickStrokeDasharray,
										tickStrokeWidth: tickStrokeWidth
									},
									data: _this2.props.someData,
									type: type });
							}
						),
						"Grid style:",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"select",
							{ onChange: this.handleGridChange, value: tickStrokeDasharray },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "Solid" },
								"Solid"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "ShortDash" },
								"ShortDash"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "ShortDot" },
								"ShortDot"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "ShortDashDot" },
								"ShortDashDot"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "ShortDashDotDot" },
								"ShortDashDotDot"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "Dot" },
								"Dot"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "Dash" },
								"Dash"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "LongDash" },
								"LongDash"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "DashDot" },
								"DashDot"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "LongDashDot" },
								"LongDashDot"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "LongDashDotDot" },
								"LongDashDotDot"
							)
						),
						" ",
						"Stroke opacity:",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"select",
							{ onChange: this.handleGridOpacityChange, value: tickStrokeOpacity },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "1" },
								"1"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.9" },
								"0.9"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.8" },
								"0.8"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.7" },
								"0.7"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.6" },
								"0.6"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.5" },
								"0.5"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.4" },
								"0.4"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.3" },
								"0.3"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.2" },
								"0.2"
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"option",
								{ value: "0.1" },
								"0.1"
							)
						),
						" ",
						"Stroke width:",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", value: tickStrokeWidth, onChange: this.handleGridWidthChange }),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", null)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(531) } })
					)
				)
			);
		}
	}]);

	return GridPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

GridPage.title = "Grid";

/* harmony default export */ exports["default"] = GridPage;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_GroupedBarChart__ = __webpack_require__(256);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';



var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;








var GroupedBarChartPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "GroupedBarChartPage",

	statics: {
		title: "Grouped Bar Chart"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: GroupedBarChartPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_GroupedBarChart__["a" /* default */], { data: _this.props.groupedBarData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(532) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = GroupedBarChartPage;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_HeikinAshi__ = __webpack_require__(257);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var HeikinAshiPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "HeikinAshiPage",

	statics: {
		title: 'Heikin Ashi'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: HeikinAshiPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(533) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_HeikinAshi__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = HeikinAshiPage;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_HorizontalBarChart__ = __webpack_require__(258);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';








var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;




var HorizontalBarChartPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "HorizontalBarChartPage",

	statics: {
		title: "Horizontal Bar Chart"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: HorizontalBarChartPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_HorizontalBarChart__["a" /* default */], { data: _this.props.horizontalBarData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(534) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = HorizontalBarChartPage;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_HorizontalStackedBarChart__ = __webpack_require__(259);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';








var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;




var HorizontalBarChartPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "HorizontalBarChartPage",

	statics: {
		title: "Horizontal Stacked Bar"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: HorizontalBarChartPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_HorizontalStackedBarChart__["a" /* default */], { data: _this.props.horizontalGroupedBarData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(535) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = HorizontalBarChartPage;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartForContinuousIntraDay__ = __webpack_require__(236);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';









var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var IntraDayContinuousDataPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "IntraDayContinuousDataPage",

	statics: {
		title: "Intra day with Continuous scale"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: IntraDayContinuousDataPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartForContinuousIntraDay__["a" /* default */], { data: _this.props.intraDayContinuousData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(537) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = IntraDayContinuousDataPage;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_Kagi__ = __webpack_require__(100);
Object.defineProperty(exports, "__esModule", { value: true });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;

var KagiPage = function (_React$Component) {
	_inherits(KagiPage, _React$Component);

	function KagiPage() {
		_classCallCheck(this, KagiPage);

		return _possibleConstructorReturn(this, (KagiPage.__proto__ || Object.getPrototypeOf(KagiPage)).apply(this, arguments));
	}

	_createClass(KagiPage, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
				{ title: KagiPage.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(539) } })
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							null,
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_Kagi__["a" /* default */], { data: _this2.props.lotsOfData, type: type });
							}
						)
					)
				)
			);
		}
	}]);

	return KagiPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

KagiPage.title = "Kagi";

/* harmony default export */ exports["default"] = KagiPage;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_LineAndScatterChart__ = __webpack_require__(261);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';



var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;








var LineAndScatterChartPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "LineAndScatterChartPage",

	statics: {
		title: 'Line & Scatter'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: LineAndScatterChartPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_LineAndScatterChart__["a" /* default */], { data: _this.props.compareData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(550) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = LineAndScatterChartPage;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartPanToLoadMore__ = __webpack_require__(237);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';









var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var LoadMoreDataPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "LoadMoreDataPage",

	statics: {
		title: 'Load more data on pan'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: LoadMoreDataPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartPanToLoadMore__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = LoadMoreDataPage;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithEdge__ = __webpack_require__(97);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var LotsOfDataPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "LotsOfDataPage",

	statics: {
		title: 'Lots of data'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: LotsOfDataPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(540) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithEdge__["a" /* default */], { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = LotsOfDataPage;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithMACDIndicator__ = __webpack_require__(98);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var MACDIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "MACDIndicatorPage",

	statics: {
		title: "MACD"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: MACDIndicatorPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(543) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithMACDIndicator__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = MACDIndicatorPage;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithMA__ = __webpack_require__(249);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var MAOverlayPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "MAOverlayPage",

	statics: {
		title: 'Moving Average'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: MAOverlayPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ type: "hybrid" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithMA__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(545) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = MAOverlayPage;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_AreaChartWithZoomPan__ = __webpack_require__(232);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var MiscChartsPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "MiscChartsPage",

	statics: {
		title: 'Misc Charts'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: MiscChartsPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(551) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_AreaChartWithZoomPan__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = MiscChartsPage;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithHoverTooltip__ = __webpack_require__(247);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;

var MouseFollowingTooltipPage = function (_React$Component) {
	_inherits(MouseFollowingTooltipPage, _React$Component);

	function MouseFollowingTooltipPage() {
		_classCallCheck(this, MouseFollowingTooltipPage);

		return _possibleConstructorReturn(this, (MouseFollowingTooltipPage.__proto__ || Object.getPrototypeOf(MouseFollowingTooltipPage)).apply(this, arguments));
	}

	_createClass(MouseFollowingTooltipPage, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
				{ title: MouseFollowingTooltipPage.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							{ type: "svg" },
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithHoverTooltip__["a" /* default */], { data: _this2.props.someData, type: type });
							}
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(536) } })
					)
				)
			);
		}
	}]);

	return MouseFollowingTooltipPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

MouseFollowingTooltipPage.title = "Hover Tooltip";

/* harmony default export */ exports["default"] = MouseFollowingTooltipPage;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickChartWithCHMousePointer__ = __webpack_require__(241);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';








var MousePointerPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "MousePointerPage",

	statics: {
		title: 'Mouse pointer'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: MousePointerPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickChartWithCHMousePointer__["a" /* default */], { data: this.props.someData, type: "svg" })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(544) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = MousePointerPage;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_MovingAverageCrossOverAlgorithmV1__ = __webpack_require__(263);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var AnnotationsPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "AnnotationsPage",

	statics: {
		title: "MA Crossover - Using text annotation"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: AnnotationsPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_MovingAverageCrossOverAlgorithmV1__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(541) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = AnnotationsPage;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_MovingAverageCrossOverAlgorithmV2__ = __webpack_require__(264);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var MovingAverageCrossoverAlgorithmPage2 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "MovingAverageCrossoverAlgorithmPage2",

	statics: {
		title: "MA Crossover - Using svg shape"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: MovingAverageCrossoverAlgorithmPage2.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_MovingAverageCrossOverAlgorithmV2__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(542) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = MovingAverageCrossoverAlgorithmPage2;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';







var OverviewPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "OverviewPage",

	statics: {
		title: 'Overview'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: OverviewPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(546) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = OverviewPage;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_PointAndFigure__ = __webpack_require__(101);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var PointAndFigurePage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "PointAndFigurePage",

	statics: {
		title: 'Point & Figure'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: PointAndFigurePage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(547) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_PointAndFigure__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = PointAndFigurePage;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithRSIIndicator__ = __webpack_require__(250);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var RSIIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "RSIIndicatorPage",

	statics: {
		title: "RSI and ATR"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: RSIIndicatorPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithRSIIndicator__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(549) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = RSIIndicatorPage;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_Renko__ = __webpack_require__(102);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var RenkoPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "RenkoPage",

	statics: {
		title: 'Renko'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: RenkoPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(548) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						null,
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_Renko__["a" /* default */], { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = RenkoPage;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_StackedBarChart__ = __webpack_require__(269);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';



var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;








var StackedBarChartPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "StackedBarChartPage",

	statics: {
		title: "Stacked Bar Chart"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: StackedBarChartPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_StackedBarChart__["a" /* default */], { data: _this.props.groupedBarData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(552) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = StackedBarChartPage;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickChartWithFullStochasticsIndicator__ = __webpack_require__(246);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var TypeChooser = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].TypeChooser,
    SaveChartAsImage = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].SaveChartAsImage;

var StochasticIndicatorPage = function (_React$Component) {
	_inherits(StochasticIndicatorPage, _React$Component);

	function StochasticIndicatorPage(props) {
		_classCallCheck(this, StochasticIndicatorPage);

		var _this = _possibleConstructorReturn(this, (StochasticIndicatorPage.__proto__ || Object.getPrototypeOf(StochasticIndicatorPage)).call(this, props));

		_this.saveNode = _this.saveNode.bind(_this);
		_this.saveChartAsImage = _this.saveChartAsImage.bind(_this);
		return _this;
	}

	_createClass(StochasticIndicatorPage, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.chart = node;
		}
	}, {
		key: "saveChartAsImage",
		value: function saveChartAsImage() {
			var container = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.chart); // eslint-disable-line react/no-find-dom-node
			SaveChartAsImage.saveChartAsImage(container);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_content_section__["a" /* default */],
				{ title: StochasticIndicatorPage.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"button",
							{ type: "button", className: "btn btn-success btn-lg pull-right", onClick: this.saveChartAsImage },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "glyphicon glyphicon-floppy-save", "aria-hidden": "true" })
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							null,
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickChartWithFullStochasticsIndicator__["a" /* default */], { ref: _this2.saveNode, data: _this2.props.someData, type: type });
							}
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(553) } })
					)
				)
			);
		}
	}]);

	return StochasticIndicatorPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

StochasticIndicatorPage.title = "Stochastic Oscillator";

/* harmony default export */ exports["default"] = StochasticIndicatorPage;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithZoomPan__ = __webpack_require__(99);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';



var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;








var SvgVsCanvasPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "SvgVsCanvasPage",

	statics: {
		title: 'Svg vs Canvas'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: SvgVsCanvasPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(554) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ type: "svg" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithZoomPan__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = SvgVsCanvasPage;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickChartWithInteractiveIndicator__ = __webpack_require__(248);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var TypeChooser = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].TypeChooser,
    SaveChartAsImage = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].SaveChartAsImage;

var TrendLineInteractiveIndicatorPage = function (_React$Component) {
	_inherits(TrendLineInteractiveIndicatorPage, _React$Component);

	function TrendLineInteractiveIndicatorPage(props) {
		_classCallCheck(this, TrendLineInteractiveIndicatorPage);

		var _this = _possibleConstructorReturn(this, (TrendLineInteractiveIndicatorPage.__proto__ || Object.getPrototypeOf(TrendLineInteractiveIndicatorPage)).call(this, props));

		_this.saveNode = _this.saveNode.bind(_this);
		_this.saveChartAsImage = _this.saveChartAsImage.bind(_this);
		return _this;
	}

	_createClass(TrendLineInteractiveIndicatorPage, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.chart = node;
		}
	}, {
		key: "saveChartAsImage",
		value: function saveChartAsImage() {
			var container = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.chart); // eslint-disable-line react/no-find-dom-node
			SaveChartAsImage.saveChartAsImage(container);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_content_section__["a" /* default */],
				{ title: TrendLineInteractiveIndicatorPage.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(555) } })
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"button",
							{ type: "button", className: "btn btn-success btn-lg pull-right", onClick: this.saveChartAsImage },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "glyphicon glyphicon-floppy-save", "aria-hidden": "true" })
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							null,
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickChartWithInteractiveIndicator__["a" /* default */], { ref: _this2.saveNode, data: _this2.props.someData, type: type });
							}
						)
					)
				)
			);
		}
	}]);

	return TrendLineInteractiveIndicatorPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

TrendLineInteractiveIndicatorPage.title = "Trendline";

/* harmony default export */ exports["default"] = TrendLineInteractiveIndicatorPage;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithUpdatingData__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lib_charts_KagiWithUpdatingData__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lib_charts_PointAndFigureWithUpdatingData__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lib_charts_RenkoWithUpdatingData__ = __webpack_require__(268);
Object.defineProperty(exports, "__esModule", { value: true });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;

var UpdatingDataPageForCandleStick = function (_React$Component) {
	_inherits(UpdatingDataPageForCandleStick, _React$Component);

	function UpdatingDataPageForCandleStick() {
		_classCallCheck(this, UpdatingDataPageForCandleStick);

		return _possibleConstructorReturn(this, (UpdatingDataPageForCandleStick.__proto__ || Object.getPrototypeOf(UpdatingDataPageForCandleStick)).apply(this, arguments));
	}

	_createClass(UpdatingDataPageForCandleStick, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
				{ title: UpdatingDataPageForCandleStick.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							null,
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithUpdatingData__["a" /* default */], { data: _this2.props.lotsOfData, type: type });
							}
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(556) } })
					)
				)
			);
		}
	}]);

	return UpdatingDataPageForCandleStick;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

UpdatingDataPageForCandleStick.title = "Updating Data";

/* harmony default export */ exports["default"] = UpdatingDataPageForCandleStick;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickStockScaleChartWithVolumeBarV1__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickStockScaleChartWithVolumeBarV2__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickStockScaleChartWithVolumeBarV3__ = __webpack_require__(255);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';










var VolumeBarPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "VolumeBarPage",

	statics: {
		title: 'Volume bar'
	},
	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_lib_content_section__["a" /* default */],
			{ title: VolumeBarPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(559) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickStockScaleChartWithVolumeBarV1__["a" /* default */], { data: this.props.someData, type: "svg" })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(560) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickStockScaleChartWithVolumeBarV2__["a" /* default */], { data: this.props.someData, type: "svg" })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(557) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickStockScaleChartWithVolumeBarV3__["a" /* default */], { data: this.props.someData, type: "svg" })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(558) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = VolumeBarPage;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_VolumeProfileBySessionChart__ = __webpack_require__(270);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';









var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var VolumeProfileBySessionPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "VolumeProfileBySessionPage",

	statics: {
		title: "Volume profile by Session"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: VolumeProfileBySessionPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_VolumeProfileBySessionChart__["a" /* default */], { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(561) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = VolumeProfileBySessionPage;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_VolumeProfileChart__ = __webpack_require__(271);
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';









var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var VolumeProfilePage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "VolumeProfilePage",

	statics: {
		title: "Volume profile"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: VolumeProfilePage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_VolumeProfileChart__["a" /* default */], { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(562) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = VolumeProfilePage;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithZoomPan__ = __webpack_require__(99);
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;

var ZoomAndPanPage = function (_React$Component) {
	_inherits(ZoomAndPanPage, _React$Component);

	function ZoomAndPanPage(props) {
		_classCallCheck(this, ZoomAndPanPage);

		var _this = _possibleConstructorReturn(this, (ZoomAndPanPage.__proto__ || Object.getPrototypeOf(ZoomAndPanPage)).call(this, props));

		_this.state = {
			mouseMoveEvent: true,
			panEvent: true,
			zoomEvent: true,
			clamp: false
		};
		_this.toggleState = _this.toggleState.bind(_this);
		_this.saveNode = _this.saveNode.bind(_this);
		_this.resetYDomain = _this.resetYDomain.bind(_this);
		return _this;
	}

	_createClass(ZoomAndPanPage, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.node = node;
		}
	}, {
		key: "resetYDomain",
		value: function resetYDomain() {
			this.node.getWrappedInstance().resetYDomain();
		}
	}, {
		key: "toggleState",
		value: function toggleState(property) {
			var value = this.state[property];
			this.setState(_defineProperty({}, property, !value));
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    mouseMoveEvent = _state.mouseMoveEvent,
			    panEvent = _state.panEvent,
			    zoomEvent = _state.zoomEvent,
			    clamp = _state.clamp;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
				{ title: ZoomAndPanPage.title },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							TypeChooser,
							null,
							function (type) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithZoomPan__["a" /* default */], {
									ref: _this2.saveNode,
									data: _this2.props.someData,
									mouseMoveEvent: mouseMoveEvent,
									panEvent: panEvent,
									zoomEvent: zoomEvent,
									clamp: clamp,
									type: type });
							}
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ style: { textAlign: "center" } },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"button",
							{ type: "button", onClick: this.toggleState.bind(this, "mouseMoveEvent") },
							mouseMoveEvent ? "Disable" : "Enable",
							" Mouse Moves"
						),
						" ",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"button",
							{ type: "button", onClick: this.toggleState.bind(this, "panEvent") },
							panEvent ? "Disable" : "Enable",
							" Pan"
						),
						" ",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"button",
							{ type: "button", onClick: this.toggleState.bind(this, "zoomEvent") },
							zoomEvent ? "Disable" : "Enable",
							" Zoom"
						),
						" ",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"button",
							{ type: "button", onClick: this.toggleState.bind(this, "clamp") },
							clamp ? "Disable" : "Enable",
							" Clamp"
						),
						" ",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"button",
							{ type: "button", onClick: this.resetYDomain },
							"Reset y domain"
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
						{ colSpan: 2 },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(563) } })
					)
				)
			);
		}
	}]);

	return ZoomAndPanPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ZoomAndPanPage.title = "Zoom and Pan";

/* harmony default export */ exports["default"] = ZoomAndPanPage;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SideBar = function (_React$Component) {
	_inherits(SideBar, _React$Component);

	function SideBar() {
		_classCallCheck(this, SideBar);

		return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
	}

	_createClass(SideBar, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: "col-sm-3 col-md-2 sidebar" },
				this.props.children
			);
		}
	}]);

	return SideBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ exports["a"] = SideBar;

/***/ },
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
/* 230 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var AreaSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].AreaSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].fitWidth;

var AreaChart = function (_React$Component) {
	_inherits(AreaChart, _React$Component);

	function AreaChart() {
		_classCallCheck(this, AreaChart);

		return _possibleConstructorReturn(this, (AreaChart.__proto__ || Object.getPrototypeOf(AreaChart)).apply(this, arguments));
	}

	_createClass(AreaChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 },
					seriesName: "MSFT",
					data: data, type: type,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["d" /* scaleTime */])(),
					xExtents: [new Date(2011, 0, 1), new Date(2013, 0, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 0, yExtents: function yExtents(d) {
							return d.close;
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 6 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						} })
				)
			);
		}
	}]);

	return AreaChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/*

*/

AreaChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

AreaChart.defaultProps = {
	type: "svg"
};
AreaChart = fitWidth(AreaChart);

/* harmony default export */ exports["a"] = AreaChart;

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var AreaChartWithYPercent = function (_React$Component) {
	_inherits(AreaChartWithYPercent, _React$Component);

	function AreaChartWithYPercent() {
		_classCallCheck(this, AreaChartWithYPercent);

		return _possibleConstructorReturn(this, (AreaChartWithYPercent.__proto__ || Object.getPrototypeOf(AreaChartWithYPercent)).apply(this, arguments));
	}

	_createClass(AreaChartWithYPercent, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 },
					seriesName: "MSFT",
					data: data, type: type,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_scale__["d" /* scaleTime */])(),
					xExtents: [new Date(2011, 0, 1), new Date(2013, 0, 2)] },
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 0, yExtents: function yExtents(d) {
							return d.close;
						} },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 6 }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left" }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", percentScale: true, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0%") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(AreaSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						} })
				)
			);
		}
	}]);

	return AreaChartWithYPercent;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

AreaChartWithYPercent.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

AreaChartWithYPercent.defaultProps = {
	type: "svg"
};
AreaChartWithYPercent = fitWidth(AreaChartWithYPercent);

/* harmony default export */ exports["a"] = AreaChartWithYPercent;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var AreaChartWithEdge = function (_React$Component) {
	_inherits(AreaChartWithEdge, _React$Component);

	function AreaChartWithEdge() {
		_classCallCheck(this, AreaChartWithEdge);

		return _possibleConstructorReturn(this, (AreaChartWithEdge.__proto__ || Object.getPrototypeOf(AreaChartWithEdge)).apply(this, arguments));
	}

	_createClass(AreaChartWithEdge, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						xLabel: "Date" /* xLabel is optional, absense will not show the x value */, yLabel: "C",
						yAccessor: function yAccessor(d) {
							return d.close;
						},
						xDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d"), yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f")
						/* valueStroke="green" - optional prop */
						/* labelStroke="#4682B4" - optional prop */
						, origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yLabel: "Volume", yAccessor: function yAccessor(d) {
							return d.volume;
						},
						origin: [-40, 20] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						stroke: true, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.4,
						widthRatio: 1 })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return AreaChartWithEdge;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

AreaChartWithEdge.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

AreaChartWithEdge.defaultProps = {
	type: "svg"
};
AreaChartWithEdge = fitWidth(AreaChartWithEdge);

/* harmony default export */ exports["a"] = AreaChartWithEdge;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BarSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].BarSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].fitWidth;

var BarChart = function (_React$Component) {
	_inherits(BarChart, _React$Component);

	function BarChart() {
		_classCallCheck(this, BarChart);

		return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).apply(this, arguments));
	}

	_createClass(BarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    unsortedData = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var data = unsortedData.slice().sort(function (a, b) {
				return a.income - b.income;
			});

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(list) {
						return list.map(function (d) {
							return d.x;
						});
					},
					data: data,
					xAccessor: function xAccessor(d) {
						return d.x;
					}, xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_scale__["f" /* scalePoint */])(),
					padding: 1 },
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return [0, d.y];
						} },
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left" }),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.y;
						} })
				)
			);
		}
	}]);

	return BarChart;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BarChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_1_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_1_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_1_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_1_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

BarChart.defaultProps = {
	type: "svg"
};

BarChart = fitWidth(BarChart);

/* harmony default export */ exports["a"] = BarChart;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var ScatterSeries = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["series"].ScatterSeries,
    CircleMarker = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["series"].CircleMarker;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["coordinates"].MouseCoordinateY;
var XAxis = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["helper"].fitWidth;

var BubbleChart = function (_React$Component) {
	_inherits(BubbleChart, _React$Component);

	function BubbleChart() {
		_classCallCheck(this, BubbleChart);

		return _possibleConstructorReturn(this, (BubbleChart.__proto__ || Object.getPrototypeOf(BubbleChart)).apply(this, arguments));
	}

	_createClass(BubbleChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    unsortedData = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var data = unsortedData.slice().sort(function (a, b) {
				return a.income - b.income;
			});
			var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["c" /* scaleLinear */])().range([2, 20]).domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_array__["i" /* extent */])(data, function (d) {
				return d.population;
			}));

			var f = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["a" /* scaleOrdinal */])(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["b" /* schemeCategory10 */]).domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["b" /* set */])(data.map(function (d) {
				return d.region;
			})));

			var fill = function fill(d) {
				return f(d.region);
			};
			var radius = function radius(d) {
				return r(d.population);
			};
			return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "Wealth & Health of Nations",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.income;
					}, xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["e" /* scaleLog */])(),
					padding: { left: 20, right: 20 }
				},
				__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return d.lifeExpectancy;
						},
						yMousePointerRectWidth: 45,
						padding: { top: 20, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 2, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(",d") }),
					__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left" }),
					__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ScatterSeries, { yAccessor: function yAccessor(d) {
							return d.lifeExpectancy;
						}, marker: CircleMarker,
						fill: fill,
						markerProps: { r: radius, fill: fill } }),
					__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MouseCoordinateX, { snapX: false,
						at: "bottom",
						orient: "bottom",
						rectWidth: 50,
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".0f") }),
					__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f") })
				),
				__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CrossHairCursor, { snapX: false })
			);
		}
	}]);

	return BubbleChart;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

BubbleChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_4_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_4_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_4_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_4_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

BubbleChart.defaultProps = {
	type: "svg"
};
BubbleChart = fitWidth(BubbleChart);

/* harmony default export */ exports["a"] = BubbleChart;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].CandlestickSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].fitWidth;

var CandleStickChart = function (_React$Component) {
	_inherits(CandleStickChart, _React$Component);

	function CandleStickChart() {
		_classCallCheck(this, CandleStickChart);

		return _possibleConstructorReturn(this, (CandleStickChart.__proto__ || Object.getPrototypeOf(CandleStickChart)).apply(this, arguments));
	}

	_createClass(CandleStickChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    type = _props.type,
			    width = _props.width,
			    data = _props.data,
			    ratio = _props.ratio;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["d" /* scaleTime */])(),
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 1)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 1, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 6 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null)
				)
			);
		}
	}]);

	return CandleStickChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChart.defaultProps = {
	type: "svg"
};
CandleStickChart = fitWidth(CandleStickChart);

/* harmony default export */ exports["a"] = CandleStickChart;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].AreaSeries;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["helper"].fitWidth;

var CandleStickChartForContinuousIntraDay = function (_React$Component) {
	_inherits(CandleStickChartForContinuousIntraDay, _React$Component);

	function CandleStickChartForContinuousIntraDay() {
		_classCallCheck(this, CandleStickChartForContinuousIntraDay);

		return _possibleConstructorReturn(this, (CandleStickChartForContinuousIntraDay.__proto__ || Object.getPrototypeOf(CandleStickChartForContinuousIntraDay)).apply(this, arguments));
	}

	_createClass(CandleStickChartForContinuousIntraDay, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


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

			var smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, smaVolume50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["d" /* scaleTime */])() },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".4s"), fill: "#0F0F0F" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".4s"), fill: "#0F0F0F" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: smaVolume50.accessor(), displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".4s"), fill: smaVolume50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: smaVolume50.accessor(), displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".4s"), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 40, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						rectWidth: 60,
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */])("%H:%M:%S") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0], xDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d %H:%M:%S") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartForContinuousIntraDay;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartForContinuousIntraDay.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartForContinuousIntraDay.defaultProps = {
	type: "svg"
};
CandleStickChartForContinuousIntraDay = fitWidth(CandleStickChartForContinuousIntraDay);

/* harmony default export */ exports["a"] = CandleStickChartForContinuousIntraDay;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProviderBuilder = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProviderBuilder;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;
var head = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["utils"].head,
    last = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["utils"].last;


function getMaxUndefined(calculators) {
	return calculators.map(function (each) {
		return each.undefinedLength();
	}).reduce(function (a, b) {
		return Math.max(a, b);
	});
}
var LENGTH_TO_SHOW = 180;

var CandleStickChartPanToLoadMore = function (_React$Component) {
	_inherits(CandleStickChartPanToLoadMore, _React$Component);

	function CandleStickChartPanToLoadMore(props) {
		_classCallCheck(this, CandleStickChartPanToLoadMore);

		var _this = _possibleConstructorReturn(this, (CandleStickChartPanToLoadMore.__proto__ || Object.getPrototypeOf(CandleStickChartPanToLoadMore)).call(this, props));

		var inputData = props.data;


		var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
			d.ema26 = c;
		}).accessor(function (d) {
			return d.ema26;
		});

		var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
			d.ema12 = c;
		}).accessor(function (d) {
			return d.ema12;
		});

		var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
			d.macd = c;
		}).accessor(function (d) {
			return d.macd;
		});

		var smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge(function (d, c) {
			d.smaVolume50 = c;
		}).accessor(function (d) {
			return d.smaVolume50;
		});

		var maxWindowSize = getMaxUndefined([ema26, ema12, macdCalculator, smaVolume50]);
		/* SERVER - START */
		var dataToCalculate = inputData.slice(-LENGTH_TO_SHOW - maxWindowSize);

		var calculatedData = ema26(ema12(macdCalculator(smaVolume50(dataToCalculate))));
		var indexCalculator = discontinuousTimeScaleProviderBuilder().indexCalculator();

		// console.log(inputData.length, dataToCalculate.length, maxWindowSize)

		var _indexCalculator = indexCalculator(calculatedData),
		    index = _indexCalculator.index,
		    interval = _indexCalculator.interval;
		/* SERVER - END */

		var xScaleProvider = discontinuousTimeScaleProviderBuilder().withIndex(index).withInterval(interval);

		var _xScaleProvider = xScaleProvider(calculatedData.slice(-LENGTH_TO_SHOW)),
		    linearData = _xScaleProvider.data,
		    xScale = _xScaleProvider.xScale,
		    xAccessor = _xScaleProvider.xAccessor,
		    displayXAccessor = _xScaleProvider.displayXAccessor;

		// console.log(head(linearData), last(linearData))
		// console.log(linearData.length)

		_this.state = {
			ema26: ema26,
			ema12: ema12,
			macdCalculator: macdCalculator,
			smaVolume50: smaVolume50,
			linearData: linearData,
			data: linearData,
			xScale: xScale,
			xAccessor: xAccessor, displayXAccessor: displayXAccessor
		};
		_this.handleDownloadMore = _this.handleDownloadMore.bind(_this);
		return _this;
	}

	_createClass(CandleStickChartPanToLoadMore, [{
		key: "handleDownloadMore",
		value: function handleDownloadMore(start, end) {
			var _this2 = this;

			if (Math.ceil(start) === end) return;
			// console.log("rows to download", rowsToDownload, start, end)
			var _state = this.state,
			    prevData = _state.data,
			    ema26 = _state.ema26,
			    ema12 = _state.ema12,
			    macdCalculator = _state.macdCalculator,
			    smaVolume50 = _state.smaVolume50;
			var inputData = this.props.data;


			if (inputData.length === prevData.length) return;

			var rowsToDownload = end - Math.ceil(start);

			var maxWindowSize = getMaxUndefined([ema26, ema12, macdCalculator, smaVolume50]);

			/* SERVER - START */
			var dataToCalculate = inputData.slice(-rowsToDownload - maxWindowSize - prevData.length, -prevData.length);

			var calculatedData = ema26(ema12(macdCalculator(smaVolume50(dataToCalculate))));
			var indexCalculator = discontinuousTimeScaleProviderBuilder().initialIndex(Math.ceil(start)).indexCalculator();

			var _indexCalculator2 = indexCalculator(calculatedData.slice(-rowsToDownload).concat(prevData)),
			    index = _indexCalculator2.index,
			    interval = _indexCalculator2.interval;
			/* SERVER - END */

			var xScaleProvider = discontinuousTimeScaleProviderBuilder().initialIndex(Math.ceil(start)).withIndex(index).withInterval(interval);

			var _xScaleProvider2 = xScaleProvider(calculatedData.slice(-rowsToDownload).concat(prevData)),
			    linearData = _xScaleProvider2.data,
			    xScale = _xScaleProvider2.xScale,
			    xAccessor = _xScaleProvider2.xAccessor,
			    displayXAccessor = _xScaleProvider2.displayXAccessor;

			// console.log(linearData.length)


			setTimeout(function () {
				// simulate a lag for ajax
				_this2.setState({
					data: linearData,
					xScale: xScale,
					xAccessor: xAccessor,
					displayXAccessor: displayXAccessor
				});
			}, 300);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;
			var _state2 = this.state,
			    data = _state2.data,
			    ema26 = _state2.ema26,
			    ema12 = _state2.ema12,
			    macdCalculator = _state2.macdCalculator,
			    smaVolume50 = _state2.smaVolume50,
			    xScale = _state2.xScale,
			    xAccessor = _state2.xAccessor,
			    displayXAccessor = _state2.displayXAccessor;


			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xScale: xScale, xAccessor: xAccessor, displayXAccessor: displayXAccessor,
					onLoadMore: this.handleDownloadMore },
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] })
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MACDSeries, { calculator: macdCalculator }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartPanToLoadMore;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

;

/*

*/

CandleStickChartPanToLoadMore.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartPanToLoadMore.defaultProps = {
	type: "svg"
};

CandleStickChartPanToLoadMore = fitWidth(CandleStickChartPanToLoadMore);

/* harmony default export */ exports["a"] = CandleStickChartPanToLoadMore;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var Annotate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Annotate,
    LabelAnnotation = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].LabelAnnotation,
    Label = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Label;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithAnnotation = function (_React$Component) {
	_inherits(CandleStickChartWithAnnotation, _React$Component);

	function CandleStickChartWithAnnotation() {
		_classCallCheck(this, CandleStickChartWithAnnotation);

		return _possibleConstructorReturn(this, (CandleStickChartWithAnnotation.__proto__ || Object.getPrototypeOf(CandleStickChartWithAnnotation)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithAnnotation, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(13).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var annotationProps = {
				fontFamily: "Glyphicons Halflings",
				fontSize: 20,
				fill: "#060F8F",
				opacity: 0.8,
				text: "\uE182",
				y: function y(_ref) {
					var yScale = _ref.yScale;
					return yScale.range()[0];
				},
				onClick: console.log.bind(console),
				tooltip: function tooltip(d) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%B")(d.date);
				}
			};

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40,
			    yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: height,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 5, 8)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Label, { x: (width - margin.left - margin.right) / 2, y: 30,
					fontSize: "30", text: "Chart title here" }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Label, { x: (width - margin.left - margin.right) / 2, y: height - 45,
						fontSize: "12", text: "XAxis Label here" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Label, { x: yAxisLabelX, y: yAxisLabelY,
						rotate: -90,
						fontSize: "12", text: "YAxis Label here" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Annotate, { "with": LabelAnnotation,
						when: function when(d) {
							return d.date.getDate() === 1;
						} /* some condition */,
						usingProps: annotationProps })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, { strokeDasharray: "LongDashDot" })
			);
		}
	}]);

	return CandleStickChartWithAnnotation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/*


*/

CandleStickChartWithAnnotation.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithAnnotation.defaultProps = {
	type: "svg"
};

CandleStickChartWithAnnotation = fitWidth(CandleStickChartWithAnnotation);

/* harmony default export */ exports["a"] = CandleStickChartWithAnnotation;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    BollingerSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BollingerSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    BollingerBandTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].BollingerBandTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma,
    bollingerBand = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].bollingerBand;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithBollingerBandOverlay = function (_React$Component) {
	_inherits(CandleStickChartWithBollingerBandOverlay, _React$Component);

	function CandleStickChartWithBollingerBandOverlay() {
		_classCallCheck(this, CandleStickChartWithBollingerBandOverlay);

		return _possibleConstructorReturn(this, (CandleStickChartWithBollingerBandOverlay.__proto__ || Object.getPrototypeOf(CandleStickChartWithBollingerBandOverlay)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithBollingerBandOverlay, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var ema20 = ema().windowSize(20) // optional will default to 10
			.sourcePath("close") // optional will default to close as the source
			.skipUndefined(true) // defaults to true
			.merge(function (d, c) {
				d.ema20 = c;
			}) // Required, if not provided, log a error
			.accessor(function (d) {
				return d.ema20;
			}) // Required, if not provided, log an error during calculation
			.stroke("blue"); // Optional

			var sma20 = sma().windowSize(20).sourcePath("close").merge(function (d, c) {
				d.sma20 = c;
			}).accessor(function (d) {
				return d.sma20;
			});

			var ema50 = ema().windowSize(50).sourcePath("close").merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var smaVolume50 = sma().windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			}).stroke("#4682B4").fill("#4682B4");

			var bb = bollingerBand().merge(function (d, c) {
				d.bb = c;
			}).accessor(function (d) {
				return d.bb;
			});
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [sma20, ema20, ema50, smaVolume50, bb],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, sma20.accessor(), ema20.accessor(), ema50.accessor(), bb.accessor()],
						padding: { top: 10, bottom: 20 },
						onContextMenu: function onContextMenu() {
							for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
								rest[_key] = arguments[_key];
							}

							console.log("chart - context menu", rest);
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5,
						onDoubleClick: function onDoubleClick() {
							for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
								rest[_key2] = arguments[_key2];
							}

							console.log("yAxis - double click", rest);
						},
						onContextMenu: function onContextMenu() {
							for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
								rest[_key3] = arguments[_key3];
							}

							console.log("yAxis - context menu", rest);
						}
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: sma20.accessor(), stroke: sma20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BollingerSeries, { calculator: bb }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: sma20.accessor(), fill: sma20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [sma20, ema20, ema50] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BollingerBandTooltip, { origin: [-38, 60], calculator: bb })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithBollingerBandOverlay;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/*
*/

CandleStickChartWithBollingerBandOverlay.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithBollingerBandOverlay.defaultProps = {
	type: "svg"
};
CandleStickChartWithBollingerBandOverlay = fitWidth(CandleStickChartWithBollingerBandOverlay);

/* harmony default export */ exports["a"] = CandleStickChartWithBollingerBandOverlay;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;
var Brush = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].Brush;


var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
	d.ema26 = c;
}).accessor(function (d) {
	return d.ema26;
});

var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
	d.ema12 = c;
}).accessor(function (d) {
	return d.ema12;
});

var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
	d.macd = c;
}).accessor(function (d) {
	return d.macd;
});

var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
	d.smaVolume50 = c;
}).accessor(function (d) {
	return d.smaVolume50;
});

var BRUSH_TYPE = "2D"; // Valid values = "2D", "1D"

var CandlestickChart = function (_React$Component) {
	_inherits(CandlestickChart, _React$Component);

	function CandlestickChart(props) {
		_classCallCheck(this, CandlestickChart);

		var _this = _possibleConstructorReturn(this, (CandlestickChart.__proto__ || Object.getPrototypeOf(CandlestickChart)).call(this, props));

		_this.handleBrush = _this.handleBrush.bind(_this);
		_this.onKeyPress = _this.onKeyPress.bind(_this);

		_this.state = {
			xExtents: [new Date(2012, 0, 3), new Date(2012, 5, 29)],
			yExtents: [function (d) {
				return [d.high, d.low];
			}, ema26.accessor(), ema12.accessor()],
			brushEnabled: true
		};
		return _this;
	}

	_createClass(CandlestickChart, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			document.addEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			document.removeEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "onKeyPress",
		value: function onKeyPress(e) {
			var keyCode = e.which;
			console.log(keyCode);
			switch (keyCode) {
				case 27:
					{
						// ESC
						this.refs.brush.terminate();
					}
			}
		}
	}, {
		key: "handleBrush",
		value: function handleBrush(brushCoords, startAndEndItem, startAndEndMouseLocation, event) {
			console.log(arguments);
			var left = Math.min(brushCoords.x1, brushCoords.x2);
			var right = Math.max(brushCoords.x1, brushCoords.x2);

			var low = Math.min(brushCoords.y1, brushCoords.y2);
			var high = Math.max(brushCoords.y1, brushCoords.y2);

			// uncomment the line below to make the brush to zoom
			this.setState({
				xExtents: [left, right],
				yExtents: BRUSH_TYPE === "2D" ? [low, high] : this.state.yExtents,
				brushEnabled: false
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: this.state.xExtents,
					drawMode: this.state.brushEnabled },
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 400,
						yExtents: this.state.yExtents,
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Brush, { ref: "brush",
						enabled: true,
						type: BRUSH_TYPE,
						onBrush: this.handleBrush })
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MACDSeries, { calculator: macdCalculator }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MACDTooltip, { forChart: 3, origin: [-38, 15], calculator: macdCalculator })
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandlestickChart;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

CandlestickChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandlestickChart.defaultProps = {
	type: "svg"
};

var CandleStickChartWithBrush = fitWidth(CandlestickChart);

/* harmony default export */ exports["a"] = CandleStickChartWithBrush;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithCHMousePointer = function (_React$Component) {
	_inherits(CandleStickChartWithCHMousePointer, _React$Component);

	function CandleStickChartWithCHMousePointer() {
		_classCallCheck(this, CandleStickChartWithCHMousePointer);

		return _possibleConstructorReturn(this, (CandleStickChartWithCHMousePointer.__proto__ || Object.getPrototypeOf(CandleStickChartWithCHMousePointer)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithCHMousePointer, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}] },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { forChart: 1, origin: [-40, 0] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithCHMousePointer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/*


*/
CandleStickChartWithCHMousePointer.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithCHMousePointer.defaultProps = {
	type: "svg"
};
CandleStickChartWithCHMousePointer = fitWidth(CandleStickChartWithCHMousePointer);

/* harmony default export */ exports["a"] = CandleStickChartWithCHMousePointer;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;
var ClickCallback = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].ClickCallback;

var CandlestickChart = function (_React$Component) {
	_inherits(CandlestickChart, _React$Component);

	function CandlestickChart() {
		_classCallCheck(this, CandlestickChart);

		return _possibleConstructorReturn(this, (CandlestickChart.__proto__ || Object.getPrototypeOf(CandlestickChart)).apply(this, arguments));
	}

	_createClass(CandlestickChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ClickCallback, { enabled: true,
						onClick: function onClick(e) {
							console.log("mouse position = " + e.mouseXY, e);
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDSeries, { calculator: macdCalculator }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandlestickChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandlestickChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandlestickChart.defaultProps = {
	type: "svg"
};

var CandleStickChartWithClickHandlerCallback = fitWidth(CandlestickChart);

/* harmony default export */ exports["a"] = CandleStickChartWithClickHandlerCallback;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    CompareSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CompareSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var compare = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].compare,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithCompare = function (_React$Component) {
	_inherits(CandleStickChartWithCompare, _React$Component);

	function CandleStickChartWithCompare() {
		_classCallCheck(this, CandleStickChartWithCompare);

		return _possibleConstructorReturn(this, (CandleStickChartWithCompare.__proto__ || Object.getPrototypeOf(CandleStickChartWithCompare)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithCompare, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var compareCalculator = compare().base(function (d) {
				return d.close;
			}).mainKeys(["open", "high", "low", "close"]).compareKeys(["AAPLClose", "SP500Close"]).accessor(function (d) {
				return d.compare;
			}).merge(function (d, c) {
				d.compare = c;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [smaVolume50], postCalculator: compareCalculator,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return d.compare;
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0%") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, { yAccessor: function yAccessor(d) {
							return d.compare;
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: function yAccessor(d) {
							return d.compare.AAPLClose;
						}, stroke: "#ff7f0e" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: function yAccessor(d) {
							return d.compare.SP500Close;
						}, stroke: "#2ca02c" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.compare.AAPLClose;
						}, fill: "#ff7f0e",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0%") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.compare.SP500Close;
						}, fill: "#2ca02c",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0%") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.compare.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0%") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yAccessor: function yAccessor(d) {
							return d.AAPLClose;
						},
						yLabel: "AAPL",
						yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f"),
						valueStroke: "#ff7f0e"
						/* labelStroke="#4682B4" - optional prop */
						, origin: [-40, 20] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yAccessor: function yAccessor(d) {
							return d.SP500Close;
						},
						yLabel: "S&P 500",
						yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f"),
						valueStroke: "#2ca02c"
						/* labelStroke="#4682B4" - optional prop */
						, origin: [-40, 35] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithCompare;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

CandleStickChartWithCompare.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithCompare.defaultProps = {
	type: "svg"
};
CandleStickChartWithCompare = fitWidth(CandleStickChartWithCompare);

/* harmony default export */ exports["a"] = CandleStickChartWithCompare;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;
var FibonacciRetracement = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].FibonacciRetracement,
    TrendLine = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].TrendLine;

var CandleStickChartWithFibonacciInteractiveIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithFibonacciInteractiveIndicator, _React$Component);

	function CandleStickChartWithFibonacciInteractiveIndicator(props) {
		_classCallCheck(this, CandleStickChartWithFibonacciInteractiveIndicator);

		var _this = _possibleConstructorReturn(this, (CandleStickChartWithFibonacciInteractiveIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithFibonacciInteractiveIndicator)).call(this, props));

		_this.onKeyPress = _this.onKeyPress.bind(_this);
		_this.onFibComplete = _this.onFibComplete.bind(_this);
		_this.state = {
			enableFib: true
		};
		return _this;
	}

	_createClass(CandleStickChartWithFibonacciInteractiveIndicator, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			document.addEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			document.removeEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "onFibComplete",
		value: function onFibComplete() {
			this.setState({
				enableFib: false
			});
		}
	}, {
		key: "onKeyPress",
		value: function onKeyPress(e) {
			var keyCode = e.which;
			switch (keyCode) {
				case 46:
					{
						// DEL
						this.refs.fib.removeLast();
						break;
					}
				case 27:
					{
						// ESC
						this.refs.fib.terminate();
						this.setState({
							enableFib: false
						});
						break;
					}
				case 68: // D - Draw Fib
				case 69:
					{
						// E - Enable Fib
						this.setState({
							enableFib: true
						});
						break;
					}
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)],
					drawMode: this.state.enableFib },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FibonacciRetracement, { ref: "fib",
						enabled: this.state.enableFib,
						type: "BOUND",
						onComplete: this.onFibComplete })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDSeries, { calculator: macdCalculator }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithFibonacciInteractiveIndicator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartWithFibonacciInteractiveIndicator.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithFibonacciInteractiveIndicator.defaultProps = {
	type: "svg"
};

CandleStickChartWithFibonacciInteractiveIndicator = fitWidth(CandleStickChartWithFibonacciInteractiveIndicator);

/* harmony default export */ exports["a"] = CandleStickChartWithFibonacciInteractiveIndicator;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    RSISeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].RSISeries,
    StraightLine = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].StraightLine;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip,
    RSITooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].RSITooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
//console.log(indicator);

var forceIndex = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].forceIndex,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithForceIndexIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithForceIndexIndicator, _React$Component);

	function CandleStickChartWithForceIndexIndicator() {
		_classCallCheck(this, CandleStickChartWithForceIndexIndicator);

		return _possibleConstructorReturn(this, (CandleStickChartWithForceIndexIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithForceIndexIndicator)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithForceIndexIndicator, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var fi = forceIndex().merge(function (d, c) {
				d.fi = c;
			}).accessor(function (d) {
				return d.fi;
			});

			var fiEMA13 = ema().id(1).windowSize(13).sourcePath("fi").merge(function (d, c) {
				d.fiEMA13 = c;
			}).accessor(function (d) {
				return d.fiEMA13;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 550,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [fi, fiEMA13],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 300,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, right: 0, bottom: 20, left: 0 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, -10] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						origin: function origin(w, h) {
							return [0, h - 350];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.5 })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 100,
						yExtents: fi.accessor(),
						origin: function origin(w, h) {
							return [0, h - 200];
						},
						padding: { top: 10, right: 0, bottom: 10, left: 0 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { baseAt: function baseAt(scale) {
							return scale(0);
						}, yAccessor: fi.accessor() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StraightLine, { yValue: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yAccessor: fi.accessor(),
						yLabel: "ForceIndex (1)",
						yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"),
						origin: [-40, 15] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 4, height: 100,
						yExtents: fiEMA13.accessor(),
						origin: function origin(w, h) {
							return [0, h - 100];
						},
						padding: { top: 10, right: 0, bottom: 10, left: 0 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { baseAt: function baseAt(scale) {
							return scale(0);
						}, yAccessor: fiEMA13.accessor() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StraightLine, { yValue: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yAccessor: fiEMA13.accessor(),
						yLabel: "ForceIndex (" + fiEMA13.windowSize() + ")",
						yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"),
						origin: [-40, 15] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithForceIndexIndicator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

CandleStickChartWithForceIndexIndicator.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithForceIndexIndicator.defaultProps = {
	type: "svg"
};
CandleStickChartWithForceIndexIndicator = fitWidth(CandleStickChartWithForceIndexIndicator);

/* harmony default export */ exports["a"] = CandleStickChartWithForceIndexIndicator;

/***/ },
/* 246 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].LineSeries,
    StraightLine = __WEBPACK_IMPORTED_MODULE_3__src___["series"].StraightLine,
    StochasticSeries = __WEBPACK_IMPORTED_MODULE_3__src___["series"].StochasticSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3__src___["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].MovingAverageTooltip,
    StochasticTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].StochasticTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3__src___["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3__src___["axes"].YAxis;
var stochasticOscillator = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].stochasticOscillator,
    ema = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].ema;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3__src___["helper"].fitWidth;

var CandleStickChartWithFullStochasticsIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithFullStochasticsIndicator, _React$Component);

	function CandleStickChartWithFullStochasticsIndicator() {
		_classCallCheck(this, CandleStickChartWithFullStochasticsIndicator);

		return _possibleConstructorReturn(this, (CandleStickChartWithFullStochasticsIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithFullStochasticsIndicator)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithFullStochasticsIndicator, [{
		key: "render",
		value: function render() {
			var height = 750;
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var margin = { left: 70, right: 70, top: 20, bottom: 30 };

			var gridHeight = height - margin.top - margin.bottom;
			var gridWidth = width - margin.left - margin.right;

			var showGrid = true;
			var yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.1 } : {};
			var xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.1 } : {};

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

			var slowSTO = stochasticOscillator().windowSize(14).kWindowSize(1).merge(function (d, c) {
				d.slowSTO = c;
			}).accessor(function (d) {
				return d.slowSTO;
			});
			var fastSTO = stochasticOscillator().windowSize(14).kWindowSize(3).merge(function (d, c) {
				d.fastSTO = c;
			}).accessor(function (d) {
				return d.fastSTO;
			});
			var fullSTO = stochasticOscillator().windowSize(14).kWindowSize(3).dWindowSize(4).merge(function (d, c) {
				d.fullSTO = c;
			}).accessor(function (d) {
				return d.fullSTO;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3__src___["ChartCanvas"],
				{ ratio: ratio, width: width, height: 750,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, slowSTO, fastSTO, fullSTO],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3__src___["Chart"],
					{ id: 1, height: 325,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, _extends({ axisAt: "right", orient: "right", ticks: 5 }, yGrid)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StraightLine, { type: "vertical", xValue: 608 }),
					";",
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StraightLine, { type: "vertical", xValue: 558, strokeDasharray: "Dot" }),
					";",
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StraightLine, { type: "vertical", xValue: 578, strokeDasharray: "LongDash" }),
					";",
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, -10] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3__src___["Chart"],
					{ id: 3,
						yExtents: slowSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 375];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: slowSTO.tickValues() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StochasticSeries, { calculator: slowSTO }),
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fastSTO.tickValues() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StochasticSeries, { calculator: fastSTO }),
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, _extends({ axisAt: "bottom", orient: "bottom" }, xGrid)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fullSTO.tickValues() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StochasticSeries, { calculator: fullSTO }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						StochasticTooltip,
						{ calculator: fullSTO, origin: [-38, 15] },
						"Full STO"
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithFullStochasticsIndicator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartWithFullStochasticsIndicator.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithFullStochasticsIndicator.defaultProps = {
	type: "svg"
};
CandleStickChartWithFullStochasticsIndicator = fitWidth(CandleStickChartWithFullStochasticsIndicator);

/* harmony default export */ exports["a"] = CandleStickChartWithFullStochasticsIndicator;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    HoverTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].HoverTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;


var dateFormat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d");
var numberFormat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f");

function tooltipContent(calculators) {
	return function (_ref) {
		var currentItem = _ref.currentItem,
		    xAccessor = _ref.xAccessor;

		return {
			x: dateFormat(xAccessor(currentItem)),
			y: [{ label: "open", value: currentItem.open && numberFormat(currentItem.open) }, { label: "high", value: currentItem.high && numberFormat(currentItem.high) }, { label: "low", value: currentItem.low && numberFormat(currentItem.low) }, { label: "close", value: currentItem.close && numberFormat(currentItem.close) }].concat(calculators.map(function (each) {
				return {
					label: each.tooltipLabel(),
					value: numberFormat(each.accessor()(currentItem)),
					stroke: each.stroke()
				};
			})).filter(function (line) {
				return line.value;
			})
		};
	};
}

var keyValues = ["high", "low", "open"];

var CandleStickChartWithHoverTooltip = function (_React$Component) {
	_inherits(CandleStickChartWithHoverTooltip, _React$Component);

	function CandleStickChartWithHoverTooltip() {
		_classCallCheck(this, CandleStickChartWithHoverTooltip);

		return _possibleConstructorReturn(this, (CandleStickChartWithHoverTooltip.__proto__ || Object.getPrototypeOf(CandleStickChartWithHoverTooltip)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithHoverTooltip, [{
		key: "removeRandomValues",
		value: function removeRandomValues(data) {
			return data.map(function (item) {
				var numberOfDeletion = Math.floor(Math.random() * keyValues.length) + 1;
				for (var i = 0; i < numberOfDeletion; i += 1) {
					var randomKey = keyValues[Math.floor(Math.random() * keyValues.length)];
					item[randomKey] = undefined;
				}
				return item;
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			// remove some of the data to be able to see
			// the tooltip resize

			data = this.removeRandomValues(data);

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

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio,
					width: width,
					height: height,
					margin: margin,
					type: type,
					seriesName: "MSFT",
					data: data,
					calculator: [ema20, ema50],
					xAccessor: function xAccessor(d) {
						return d.date;
					},
					xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 5, 8)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last",
						orient: "right",
						edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HoverTooltip, {
					chartId: 1,
					yAccessor: ema50.accessor(),
					tooltipContent: tooltipContent([ema20, ema50]),
					fontSize: 15 })
			);
		}
	}]);

	return CandleStickChartWithHoverTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartWithHoverTooltip.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithHoverTooltip.defaultProps = {
	type: "svg"
};
CandleStickChartWithHoverTooltip = fitWidth(CandleStickChartWithHoverTooltip);

/* harmony default export */ exports["a"] = CandleStickChartWithHoverTooltip;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;
var Interactive = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].Interactive,
    TrendLine = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].TrendLine;

var CandlestickChart = function (_React$Component) {
	_inherits(CandlestickChart, _React$Component);

	function CandlestickChart(props) {
		_classCallCheck(this, CandlestickChart);

		var _this = _possibleConstructorReturn(this, (CandlestickChart.__proto__ || Object.getPrototypeOf(CandlestickChart)).call(this, props));

		_this.onKeyPress = _this.onKeyPress.bind(_this);
		_this.onTrendLineComplete = _this.onTrendLineComplete.bind(_this);
		_this.state = {
			enableTrendLine: true
		};
		return _this;
	}

	_createClass(CandlestickChart, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			document.addEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			document.removeEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "onTrendLineComplete",
		value: function onTrendLineComplete() {
			this.setState({
				enableTrendLine: false
			});
		}
	}, {
		key: "onKeyPress",
		value: function onKeyPress(e) {
			var keyCode = e.which;
			console.log(keyCode);
			switch (keyCode) {
				case 46:
					{
						// DEL
						this.refs.trend.removeLast();
						break;
					}
				case 27:
					{
						// ESC
						this.refs.trend.terminate();
						this.setState({
							enableTrendLine: false
						});
						break;
					}
				case 68: // D - Draw trendline
				case 69:
					{
						// E - Enable trendline
						this.setState({
							enableTrendLine: true
						});
						break;
					}
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)],
					drawMode: this.state.enableTrendLine },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TrendLine, { ref: "trend",
						enabled: this.state.enableTrendLine,
						type: "LINE",
						snap: true, snapTo: function snapTo(d) {
							return [d.high, d.low];
						},
						onStart: function onStart() {
							return console.log("START");
						},
						onComplete: this.onTrendLineComplete
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDSeries, { calculator: macdCalculator }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandlestickChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandlestickChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandlestickChart.defaultProps = {
	type: "svg"
};

var CandleStickChartWithInteractiveIndicator = fitWidth(CandlestickChart);

/* harmony default export */ exports["a"] = CandleStickChartWithInteractiveIndicator;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithMA = function (_React$Component) {
	_inherits(CandleStickChartWithMA, _React$Component);

	function CandleStickChartWithMA() {
		_classCallCheck(this, CandleStickChartWithMA);

		return _possibleConstructorReturn(this, (CandleStickChartWithMA.__proto__ || Object.getPrototypeOf(CandleStickChartWithMA)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithMA, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var ema20 = ema().windowSize(20) // optional will default to 10
			.sourcePath("close") // optional will default to close as the source
			.skipUndefined(true) // defaults to true
			.merge(function (d, c) {
				d.ema20 = c;
			}) // Required, if not provided, log a error
			.accessor(function (d) {
				return d.ema20;
			}) // Required, if not provided, log an error during calculation
			.stroke("blue"); // Optional

			var sma20 = sma().windowSize(20).sourcePath("close").merge(function (d, c) {
				d.sma20 = c;
			}).accessor(function (d) {
				return d.sma20;
			});

			var ema50 = ema().windowSize(50).sourcePath("close").merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var smaVolume50 = sma().windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			}).stroke("#4682B4").fill("#4682B4");

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [sma20, ema20, ema50, smaVolume50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, sma20.accessor(), ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: sma20.accessor(), stroke: sma20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: sma20.accessor(), fill: sma20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [sma20, ema20, ema50] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "red";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithMA;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartWithMA.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithMA.defaultProps = {
	type: "svg"
};
CandleStickChartWithMA = fitWidth(CandleStickChartWithMA);

/* harmony default export */ exports["a"] = CandleStickChartWithMA;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    RSISeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].RSISeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip,
    RSITooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].RSITooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var rsi = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].rsi,
    atr = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].atr,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithRSIIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithRSIIndicator, _React$Component);

	function CandleStickChartWithRSIIndicator() {
		_classCallCheck(this, CandleStickChartWithRSIIndicator);

		return _possibleConstructorReturn(this, (CandleStickChartWithRSIIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithRSIIndicator)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithRSIIndicator, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			var rsiCalculator = rsi().windowSize(14).merge(function (d, c) {
				d.rsi = c;
			}).accessor(function (d) {
				return d.rsi;
			});

			var atr14 = atr().windowSize(14).merge(function (d, c) {
				d.atr14 = c;
			}).accessor(function (d) {
				return d.atr14;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, rsiCalculator, atr14],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 300,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 400];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3,
						yExtents: rsiCalculator.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 250];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: rsiCalculator.tickValues() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RSISeries, { calculator: rsiCalculator }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RSITooltip, { origin: [-38, 15], calculator: rsiCalculator })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 8,
						yExtents: atr14.accessor(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 125];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: atr14.accessor(), stroke: atr14.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yAccessor: atr14.accessor(),
						yLabel: "ATR (" + atr14.windowSize() + ")",
						yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f")
						/* valueStroke={atr14.stroke()} - optional prop */
						/* labelStroke="#4682B4" - optional prop */
						, origin: [-40, 15] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithRSIIndicator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

CandleStickChartWithRSIIndicator.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithRSIIndicator.defaultProps = {
	type: "svg"
};
CandleStickChartWithRSIIndicator = fitWidth(CandleStickChartWithRSIIndicator);

/* harmony default export */ exports["a"] = CandleStickChartWithRSIIndicator;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CandleStickChartWithMACDIndicator__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__ = __webpack_require__(47);
"use strict";




var CandleStickChartWithUpdatingData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__CandleStickChartWithMACDIndicator__["a" /* default */]);

/* harmony default export */ exports["a"] = CandleStickChartWithUpdatingData;

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["series"].CandlestickSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var XAxis = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].fitWidth;

var CandleStickStockScaleChart = function (_React$Component) {
	_inherits(CandleStickStockScaleChart, _React$Component);

	function CandleStickStockScaleChart() {
		_classCallCheck(this, CandleStickStockScaleChart);

		return _possibleConstructorReturn(this, (CandleStickStockScaleChart.__proto__ || Object.getPrototypeOf(CandleStickStockScaleChart)).apply(this, arguments));
	}

	_createClass(CandleStickStockScaleChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    type = _props.type,
			    data = _props.data,
			    width = _props.width,
			    ratio = _props.ratio;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["Chart"],
					{ id: 1, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 6 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null)
				)
			);
		}
	}]);

	return CandleStickStockScaleChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickStockScaleChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChart.defaultProps = {
	type: "svg"
};
CandleStickStockScaleChart = fitWidth(CandleStickStockScaleChart);

/* harmony default export */ exports["a"] = CandleStickStockScaleChart;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].fitWidth;

var CandleStickStockScaleChartWithVolumeBarV1 = function (_React$Component) {
	_inherits(CandleStickStockScaleChartWithVolumeBarV1, _React$Component);

	function CandleStickStockScaleChartWithVolumeBarV1() {
		_classCallCheck(this, CandleStickStockScaleChartWithVolumeBarV1);

		return _possibleConstructorReturn(this, (CandleStickStockScaleChartWithVolumeBarV1.__proto__ || Object.getPrototypeOf(CandleStickStockScaleChartWithVolumeBarV1)).apply(this, arguments));
	}

	_createClass(CandleStickStockScaleChartWithVolumeBarV1, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 1, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 2, yExtents: function yExtents(d) {
							return d.volume;
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						} })
				)
			);
		}
	}]);

	return CandleStickStockScaleChartWithVolumeBarV1;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickStockScaleChartWithVolumeBarV1.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChartWithVolumeBarV1.defaultProps = {
	type: "svg"
};
CandleStickStockScaleChartWithVolumeBarV1 = fitWidth(CandleStickStockScaleChartWithVolumeBarV1);

/* harmony default export */ exports["a"] = CandleStickStockScaleChartWithVolumeBarV1;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].fitWidth;

var CandleStickStockScaleChartWithVolumeBarV2 = function (_React$Component) {
	_inherits(CandleStickStockScaleChartWithVolumeBarV2, _React$Component);

	function CandleStickStockScaleChartWithVolumeBarV2() {
		_classCallCheck(this, CandleStickStockScaleChartWithVolumeBarV2);

		return _possibleConstructorReturn(this, (CandleStickStockScaleChartWithVolumeBarV2.__proto__ || Object.getPrototypeOf(CandleStickStockScaleChartWithVolumeBarV2)).apply(this, arguments));
	}

	_createClass(CandleStickStockScaleChartWithVolumeBarV2, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 1, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 2, origin: function origin(w, h) {
							return [0, h - 150];
						}, height: 150, yExtents: function yExtents(d) {
							return d.volume;
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "red";
						} })
				)
			);
		}
	}]);

	return CandleStickStockScaleChartWithVolumeBarV2;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickStockScaleChartWithVolumeBarV2.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChartWithVolumeBarV2.defaultProps = {
	type: "svg"
};
CandleStickStockScaleChartWithVolumeBarV2 = fitWidth(CandleStickStockScaleChartWithVolumeBarV2);

/* harmony default export */ exports["a"] = CandleStickStockScaleChartWithVolumeBarV2;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["helper"].fitWidth;

var CandleStickStockScaleChartWithVolumeBarV3 = function (_React$Component) {
	_inherits(CandleStickStockScaleChartWithVolumeBarV3, _React$Component);

	function CandleStickStockScaleChartWithVolumeBarV3() {
		_classCallCheck(this, CandleStickStockScaleChartWithVolumeBarV3);

		return _possibleConstructorReturn(this, (CandleStickStockScaleChartWithVolumeBarV3.__proto__ || Object.getPrototypeOf(CandleStickStockScaleChartWithVolumeBarV3)).apply(this, arguments));
	}

	_createClass(CandleStickStockScaleChartWithVolumeBarV3, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 1, height: 400, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["Chart"],
					{ id: 2, origin: function origin(w, h) {
							return [0, h - 150];
						}, height: 150, yExtents: function yExtents(d) {
							return d.volume;
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "red";
						} })
				)
			);
		}
	}]);

	return CandleStickStockScaleChartWithVolumeBarV3;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickStockScaleChartWithVolumeBarV3.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChartWithVolumeBarV3.defaultProps = {
	type: "svg"
};
CandleStickStockScaleChartWithVolumeBarV3 = fitWidth(CandleStickStockScaleChartWithVolumeBarV3);

/* harmony default export */ exports["a"] = CandleStickStockScaleChartWithVolumeBarV3;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_collection__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var GroupedBarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].GroupedBarSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var GroupedBarChart = function (_React$Component) {
	_inherits(GroupedBarChart, _React$Component);

	function GroupedBarChart() {
		_classCallCheck(this, GroupedBarChart);

		return _possibleConstructorReturn(this, (GroupedBarChart.__proto__ || Object.getPrototypeOf(GroupedBarChart)).apply(this, arguments));
	}

	_createClass(GroupedBarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var f = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["a" /* scaleOrdinal */])(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["b" /* schemeCategory10 */]).domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_collection__["b" /* set */])(data.map(function (d) {
				return d.region;
			})));

			var fill = function fill(d, i) {
				return f(i);
			};
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 40, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(list) {
						return list.map(function (d) {
							return d.x;
						});
					},
					data: data,
					xAccessor: function xAccessor(d) {
						return d.x;
					}, xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["f" /* scalePoint */])(),
					padding: 1 },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [0, function (d) {
							return [d.y1, d.y2, d.y3, d.y4];
						}] },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GroupedBarSeries, { yAccessor: [function (d) {
							return d.y1;
						}, function (d) {
							return d.y2;
						}, function (d) {
							return d.y3;
						}, function (d) {
							return d.y4;
						}],
						fill: fill,
						spaceBetweenBar: 3 })
				)
			);
		}
	}]);

	return GroupedBarChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

GroupedBarChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

GroupedBarChart.defaultProps = {
	type: "svg"
};
GroupedBarChart = fitWidth(GroupedBarChart);

/* harmony default export */ exports["a"] = GroupedBarChart;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma,
    heikinAshi = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].heikinAshi;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var HeikinAshi = function (_React$Component) {
	_inherits(HeikinAshi, _React$Component);

	function HeikinAshi() {
		_classCallCheck(this, HeikinAshi);

		return _possibleConstructorReturn(this, (HeikinAshi.__proto__ || Object.getPrototypeOf(HeikinAshi)).apply(this, arguments));
	}

	_createClass(HeikinAshi, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var ha = heikinAshi();
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

			var smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ha, ema20, ema50, smaVolume50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".1f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: "#0F0F0F" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: "#0F0F0F" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: smaVolume50.accessor(), displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: smaVolume50.fill() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: smaVolume50.accessor(), displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s"), fill: smaVolume50.fill() })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return HeikinAshi;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

HeikinAshi.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

HeikinAshi.defaultProps = {
	type: "svg"
};

HeikinAshi = fitWidth(HeikinAshi);

/* harmony default export */ exports["a"] = HeikinAshi;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var HorizontalBarChart = function (_React$Component) {
	_inherits(HorizontalBarChart, _React$Component);

	function HorizontalBarChart() {
		_classCallCheck(this, HorizontalBarChart);

		return _possibleConstructorReturn(this, (HorizontalBarChart.__proto__ || Object.getPrototypeOf(HorizontalBarChart)).apply(this, arguments));
	}

	_createClass(HorizontalBarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 90, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(data) {
						return [0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* max */])(data, function (d) {
							return d.x;
						})];
					},
					data: data,
					xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["c" /* scaleLinear */])(), flipXScale: false,
					useCrossHairStyleCursor: false },
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: data.map(function (d) {
							return d.y;
						}),
						yScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["f" /* scalePoint */])(),
						padding: 1 },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left" }),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.y;
						}, xAccessor: function xAccessor(d) {
							return d.x;
						}, swapScales: true })
				)
			);
		}
	}]);

	return HorizontalBarChart;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

HorizontalBarChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

HorizontalBarChart.defaultProps = {
	type: "svg"
};
HorizontalBarChart = fitWidth(HorizontalBarChart);

/* harmony default export */ exports["a"] = HorizontalBarChart;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_collection__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var StackedBarSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].StackedBarSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["helper"].fitWidth;

var HorizontalStackedBarChart = function (_React$Component) {
	_inherits(HorizontalStackedBarChart, _React$Component);

	function HorizontalStackedBarChart() {
		_classCallCheck(this, HorizontalStackedBarChart);

		return _possibleConstructorReturn(this, (HorizontalStackedBarChart.__proto__ || Object.getPrototypeOf(HorizontalStackedBarChart)).apply(this, arguments));
	}

	_createClass(HorizontalStackedBarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var f = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_scale__["a" /* scaleOrdinal */])(__WEBPACK_IMPORTED_MODULE_0_d3_scale__["b" /* schemeCategory10 */]).domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_collection__["b" /* set */])(data.map(function (d) {
				return d.region;
			})));

			var fill = function fill(d, i) {
				return f(i);
			};
			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 90, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(data) {
						return [0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_array__["j" /* max */])(data, function (d) {
							return d.x1 + d.x2 + d.x3 + d.x4;
						})];
					},
					data: data,
					xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_scale__["c" /* scaleLinear */])(), flipXScale: false },
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: data.map(function (d) {
							return d.y;
						}),
						yScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_scale__["f" /* scalePoint */])(),
						padding: 1 },
					__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left" }),
					__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(StackedBarSeries, {
						yAccessor: function yAccessor(d) {
							return d.y;
						},
						xAccessor: [function (d) {
							return d.x1;
						}, function (d) {
							return d.x2;
						}, function (d) {
							return d.x3;
						}, function (d) {
							return d.x4;
						}],
						fill: fill,
						swapScales: true })
				)
			);
		}
	}]);

	return HorizontalStackedBarChart;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

HorizontalStackedBarChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_3_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_3_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_3_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_3_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

HorizontalStackedBarChart.defaultProps = {
	type: "svg"
};
HorizontalStackedBarChart = fitWidth(HorizontalStackedBarChart);

/* harmony default export */ exports["a"] = HorizontalStackedBarChart;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Kagi__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__ = __webpack_require__(47);
"use strict";




var KagiWithUpdatingData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__Kagi__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = KagiWithUpdatingData;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    ScatterSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].ScatterSeries,
    CircleMarker = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CircleMarker,
    SquareMarker = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].SquareMarker,
    TriangleMarker = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].TriangleMarker;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var LineAndScatterChart = function (_React$Component) {
	_inherits(LineAndScatterChart, _React$Component);

	function LineAndScatterChart() {
		_classCallCheck(this, LineAndScatterChart);

		return _possibleConstructorReturn(this, (LineAndScatterChart.__proto__ || Object.getPrototypeOf(LineAndScatterChart)).apply(this, arguments));
	}

	_createClass(LineAndScatterChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 },
					type: type,
					pointsPerPxThreshold: 1,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 2, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low, d.AAPLClose, d.GEClose];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, {
						axisAt: "right",
						orient: "right"
						// tickInterval={5}
						// tickValues={[40, 60]}
						, ticks: 5
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, {
						yAccessor: function yAccessor(d) {
							return d.AAPLClose;
						},
						stroke: "#ff7f0e",
						strokeDasharray: "Dot" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScatterSeries, {
						yAccessor: function yAccessor(d) {
							return d.AAPLClose;
						},
						marker: SquareMarker,
						markerProps: { width: 6, stroke: "#ff7f0e", fill: "#ff7f0e" } }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, {
						yAccessor: function yAccessor(d) {
							return d.GEClose;
						},
						stroke: "#2ca02c" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScatterSeries, {
						yAccessor: function yAccessor(d) {
							return d.GEClose;
						},
						marker: TriangleMarker,
						markerProps: { width: 8, stroke: "#2ca02c", fill: "#2ca02c" } }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, {
						yAccessor: function yAccessor(d) {
							return d.close;
						},
						strokeDasharray: "LongDash" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScatterSeries, {
						yAccessor: function yAccessor(d) {
							return d.close;
						},
						marker: CircleMarker,
						markerProps: { r: 3 } }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { forChart: 1, origin: [-40, 0] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return LineAndScatterChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

LineAndScatterChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

LineAndScatterChart.defaultProps = {
	type: "svg"
};
LineAndScatterChart = fitWidth(LineAndScatterChart);

/* harmony default export */ exports["a"] = LineAndScatterChart;

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    ScatterSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].ScatterSeries,
    CircleMarker = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CircleMarker,
    SquareMarker = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].SquareMarker,
    TriangleMarker = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].TriangleMarker;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var LineAndScatterChartGrid = function (_React$Component) {
	_inherits(LineAndScatterChartGrid, _React$Component);

	function LineAndScatterChartGrid() {
		_classCallCheck(this, LineAndScatterChartGrid);

		return _possibleConstructorReturn(this, (LineAndScatterChartGrid.__proto__ || Object.getPrototypeOf(LineAndScatterChartGrid)).apply(this, arguments));
	}

	_createClass(LineAndScatterChartGrid, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio,
			    gridProps = _props.gridProps;

			var margin = { left: 70, right: 70, top: 20, bottom: 30 };

			var height = 400;
			var gridHeight = height - margin.top - margin.bottom;
			var gridWidth = width - margin.left - margin.right;

			var showGrid = true;
			var yGrid = showGrid ? { innerTickSize: -1 * gridWidth } : {};
			var xGrid = showGrid ? { innerTickSize: -1 * gridHeight } : {};

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: height,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 2, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, _extends({
						axisAt: "bottom",
						orient: "bottom"
					}, gridProps, xGrid)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, _extends({
						axisAt: "right",
						orient: "right",
						ticks: 5
					}, gridProps, yGrid)),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, {
						yAccessor: function yAccessor(d) {
							return d.close;
						},
						stroke: "#ff7f0e"
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScatterSeries, {
						yAccessor: function yAccessor(d) {
							return d.close;
						},
						marker: SquareMarker,
						markerProps: { width: 6, stroke: "#ff7f0e", fill: "#ff7f0e" } }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { forChart: 1, origin: [-40, 0] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return LineAndScatterChartGrid;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

LineAndScatterChartGrid.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

LineAndScatterChartGrid.defaultProps = {
	type: "svg"
};
LineAndScatterChartGrid = fitWidth(LineAndScatterChartGrid);

/* harmony default export */ exports["a"] = LineAndScatterChartGrid;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var Annotate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Annotate,
    LabelAnnotation = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].LabelAnnotation,
    Label = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Label;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;


var algo = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["algorithm"].default;

var MovingAverageCrossOverAlgorithmV1 = function (_React$Component) {
	_inherits(MovingAverageCrossOverAlgorithmV1, _React$Component);

	function MovingAverageCrossOverAlgorithmV1() {
		_classCallCheck(this, MovingAverageCrossOverAlgorithmV1);

		return _possibleConstructorReturn(this, (MovingAverageCrossOverAlgorithmV1.__proto__ || Object.getPrototypeOf(MovingAverageCrossOverAlgorithmV1)).apply(this, arguments));
	}

	_createClass(MovingAverageCrossOverAlgorithmV1, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(13).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var buySell = algo().windowSize(2).accumulator(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    prev = _ref2[0],
				    now = _ref2[1];

				var prevShortTerm = prev.ema20,
				    prevLongTerm = prev.ema50;
				var nowShortTerm = now.ema20,
				    nowLongTerm = now.ema50;

				if (prevShortTerm < prevLongTerm && nowShortTerm > nowLongTerm) return "LONG";
				if (prevShortTerm > prevLongTerm && nowShortTerm < nowLongTerm) return "SHORT";
			}).merge(function (d, c) {
				d.longShort = c;
			});

			var defaultAnnotationProps = {
				fontFamily: "Glyphicons Halflings",
				fontSize: 20,
				opacity: 0.8,
				onClick: console.log.bind(console)
			};

			var longAnnotationProps = _extends({}, defaultAnnotationProps, {
				fill: "#006517",
				text: "\uE093",
				y: function y(_ref3) {
					var yScale = _ref3.yScale,
					    datum = _ref3.datum;
					return yScale(datum.low) + 20;
				},
				tooltip: "Go long"
			});

			var shortAnnotationProps = _extends({}, defaultAnnotationProps, {
				fill: "#E20000",
				text: "\uE094",
				y: function y(_ref4) {
					var yScale = _ref4.yScale,
					    datum = _ref4.datum;
					return yScale(datum.high);
				},
				tooltip: "Go short"
			});

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40,
			    yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: height,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, buySell],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 5, 8)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Label, { x: (width - margin.left - margin.right) / 2, y: height - 45,
						fontSize: "12", text: "XAxis Label here" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Label, { x: yAxisLabelX, y: yAxisLabelY,
						rotate: -90,
						fontSize: "12", text: "YAxis Label here" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Annotate, { "with": LabelAnnotation, when: function when(d) {
							return d.longShort === "LONG";
						},
						usingProps: longAnnotationProps }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Annotate, { "with": LabelAnnotation, when: function when(d) {
							return d.longShort === "SHORT";
						},
						usingProps: shortAnnotationProps })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return MovingAverageCrossOverAlgorithmV1;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

MovingAverageCrossOverAlgorithmV1.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

MovingAverageCrossOverAlgorithmV1.defaultProps = {
	type: "svg"
};

MovingAverageCrossOverAlgorithmV1 = fitWidth(MovingAverageCrossOverAlgorithmV1);

/* harmony default export */ exports["a"] = MovingAverageCrossOverAlgorithmV1;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var Annotate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Annotate,
    SvgPathAnnotation = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].SvgPathAnnotation,
    Label = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Label,
    buyPath = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].buyPath,
    sellPath = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].sellPath;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;


var algo = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["algorithm"].default;

var MovingAverageCrossOverAlgorithmV2 = function (_React$Component) {
	_inherits(MovingAverageCrossOverAlgorithmV2, _React$Component);

	function MovingAverageCrossOverAlgorithmV2() {
		_classCallCheck(this, MovingAverageCrossOverAlgorithmV2);

		return _possibleConstructorReturn(this, (MovingAverageCrossOverAlgorithmV2.__proto__ || Object.getPrototypeOf(MovingAverageCrossOverAlgorithmV2)).apply(this, arguments));
	}

	_createClass(MovingAverageCrossOverAlgorithmV2, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(13).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var buySell = algo().windowSize(2).accumulator(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    prev = _ref2[0],
				    now = _ref2[1];

				var prevShortTerm = prev.ema20,
				    prevLongTerm = prev.ema50;
				var nowShortTerm = now.ema20,
				    nowLongTerm = now.ema50;

				if (prevShortTerm < prevLongTerm && nowShortTerm > nowLongTerm) return "LONG";
				if (prevShortTerm > prevLongTerm && nowShortTerm < nowLongTerm) return "SHORT";
			}).merge(function (d, c) {
				d.longShort = c;
			});

			var defaultAnnotationProps = {
				onClick: console.log.bind(console)
			};

			var longAnnotationProps = _extends({}, defaultAnnotationProps, {
				y: function y(_ref3) {
					var yScale = _ref3.yScale,
					    datum = _ref3.datum;
					return yScale(datum.low);
				},
				fill: "#006517",
				path: buyPath,
				tooltip: "Go long"
			});

			var shortAnnotationProps = _extends({}, defaultAnnotationProps, {
				y: function y(_ref4) {
					var yScale = _ref4.yScale,
					    datum = _ref4.datum;
					return yScale(datum.high);
				},
				fill: "#FF0000",
				path: sellPath,
				tooltip: "Go short"
			});

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40,
			    yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: height,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, buySell],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 5, 8)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Label, { x: (width - margin.left - margin.right) / 2, y: height - 45,
						fontSize: "12", text: "XAxis Label here" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Label, { x: yAxisLabelX, y: yAxisLabelY,
						rotate: -90,
						fontSize: "12", text: "YAxis Label here" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Annotate, { "with": SvgPathAnnotation, when: function when(d) {
							return d.longShort === "LONG";
						},
						usingProps: longAnnotationProps }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Annotate, { "with": SvgPathAnnotation, when: function when(d) {
							return d.longShort === "SHORT";
						},
						usingProps: shortAnnotationProps })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return MovingAverageCrossOverAlgorithmV2;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/*
					<LineSeries yAccessor={d => d.close} stroke="#000000" />

*/

MovingAverageCrossOverAlgorithmV2.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

MovingAverageCrossOverAlgorithmV2.defaultProps = {
	type: "svg"
};

MovingAverageCrossOverAlgorithmV2 = fitWidth(MovingAverageCrossOverAlgorithmV2);

/* harmony default export */ exports["a"] = MovingAverageCrossOverAlgorithmV2;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var OHLCSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].OHLCSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries,
    ElderImpulseBackground = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].ElderImpulseBackground;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var elderImpulse = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].elderImpulse,
    change = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].change,
    macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd,
    ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var OHLCChartWithElderImpulseIndicator = function (_React$Component) {
	_inherits(OHLCChartWithElderImpulseIndicator, _React$Component);

	function OHLCChartWithElderImpulseIndicator() {
		_classCallCheck(this, OHLCChartWithElderImpulseIndicator);

		return _possibleConstructorReturn(this, (OHLCChartWithElderImpulseIndicator.__proto__ || Object.getPrototypeOf(OHLCChartWithElderImpulseIndicator)).apply(this, arguments));
	}

	_createClass(OHLCChartWithElderImpulseIndicator, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var changeCalculator = change();

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var elderImpulseCalculator = elderImpulse().macdSource(macdCalculator.accessor()).emaSource(ema12.accessor());

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 500,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [changeCalculator, ema12, macdCalculator, elderImpulseCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 300,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCSeries, { stroke: function stroke(d) {
							return elderImpulseCalculator.stroke()[d.elderImpulse];
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, -10] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { origin: [-38, 5],
						calculators: [ema12] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.4 })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDSeries, { calculator: macdCalculator }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return OHLCChartWithElderImpulseIndicator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;
OHLCChartWithElderImpulseIndicator.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

OHLCChartWithElderImpulseIndicator.defaultProps = {
	type: "svg"
};
OHLCChartWithElderImpulseIndicator = fitWidth(OHLCChartWithElderImpulseIndicator);

/* harmony default export */ exports["a"] = OHLCChartWithElderImpulseIndicator;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var OHLCSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].OHLCSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    ElderRaySeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].ElderRaySeries,
    StraightLine = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].StraightLine;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip,
    SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip,
    RSITooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].RSITooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var elderRay = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].elderRay,
    change = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].change;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var OHLCChartWithElderRayIndicator = function (_React$Component) {
	_inherits(OHLCChartWithElderRayIndicator, _React$Component);

	function OHLCChartWithElderRayIndicator() {
		_classCallCheck(this, OHLCChartWithElderRayIndicator);

		return _possibleConstructorReturn(this, (OHLCChartWithElderRayIndicator.__proto__ || Object.getPrototypeOf(OHLCChartWithElderRayIndicator)).apply(this, arguments));
	}

	_createClass(OHLCChartWithElderRayIndicator, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var elder = elderRay();
			var changeCalculator = change();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 650,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [changeCalculator, elder],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1, height: 300,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, right: 0, bottom: 20, left: 0 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, -10] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2, height: 150,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						origin: function origin(w, h) {
							return [0, h - 450];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.4 })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 3, height: 100,
						yExtents: [0, elder.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						},
						padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ElderRaySeries, { yAccessor: elder.accessor() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yAccessor: elder.accessor(),
						yLabel: "Elder Ray",
						yDisplayFormat: function yDisplayFormat(d) {
							return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f")(d.bullPower) + ", " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f")(d.bearPower);
						},
						origin: [-40, 15] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 4, height: 100,
						yExtents: [0, function (d) {
							return elder.accessor()(d) && elder.accessor()(d).bullPower;
						}],
						origin: function origin(w, h) {
							return [0, h - 200];
						},
						padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return elder.accessor()(d) && elder.accessor()(d).bullPower;
						},
						baseAt: function baseAt(xScale, yScale, d) {
							return yScale(0);
						},
						fill: "#6BA583" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StraightLine, { yValue: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yAccessor: function yAccessor(d) {
							return elder.accessor()(d) && elder.accessor()(d).bullPower;
						},
						yLabel: "Elder Ray - Bull power",
						yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f"),
						origin: [-40, 15] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 5, height: 100,
						yExtents: [0, function (d) {
							return elder.accessor()(d) && elder.accessor()(d).bearPower;
						}],
						origin: function origin(w, h) {
							return [0, h - 100];
						},
						padding: { top: 10, bottom: 10 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return elder.accessor()(d) && elder.accessor()(d).bearPower;
						},
						baseAt: function baseAt(xScale, yScale, d) {
							return yScale(0);
						},
						fill: "#FF0000" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StraightLine, { yValue: 0 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleValueTooltip, {
						yAccessor: function yAccessor(d) {
							return elder.accessor()(d) && elder.accessor()(d).bearPower;
						},
						yLabel: "Elder Ray - Bear power",
						yDisplayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f"),
						origin: [-40, 15] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return OHLCChartWithElderRayIndicator;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

OHLCChartWithElderRayIndicator.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

OHLCChartWithElderRayIndicator.defaultProps = {
	type: "svg"
};
OHLCChartWithElderRayIndicator = fitWidth(OHLCChartWithElderRayIndicator);

/* harmony default export */ exports["a"] = OHLCChartWithElderRayIndicator;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PointAndFigure__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__ = __webpack_require__(47);
"use strict";




var PointAndFigureWithUpdatingData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__PointAndFigure__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = PointAndFigureWithUpdatingData;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Renko__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__ = __webpack_require__(47);
"use strict";




var RenkoWithUpdatingData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__Renko__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = RenkoWithUpdatingData;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_collection__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var StackedBarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].StackedBarSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var StackedBarChart = function (_React$Component) {
	_inherits(StackedBarChart, _React$Component);

	function StackedBarChart() {
		_classCallCheck(this, StackedBarChart);

		return _possibleConstructorReturn(this, (StackedBarChart.__proto__ || Object.getPrototypeOf(StackedBarChart)).apply(this, arguments));
	}

	_createClass(StackedBarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


			var f = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleOrdinal */])(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["b" /* schemeCategory10 */]).domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_collection__["b" /* set */])(data.map(function (d) {
				return d.region;
			})));

			var fill = function fill(d, i) {
				return f(i);
			};
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 40, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(list) {
						return list.map(function (d) {
							return d.x;
						});
					},
					data: data,
					xAccessor: function xAccessor(d) {
						return d.x;
					}, xScale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["f" /* scalePoint */])(),
					padding: 1 },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [0, function (d) {
							return d.y1 + d.y2 + d.y3 + d.y4;
						}] },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StackedBarSeries, { yAccessor: [function (d) {
							return d.y1;
						}, function (d) {
							return d.y2;
						}, function (d) {
							return d.y3;
						}, function (d) {
							return d.y4;
						}],
						fill: fill })
				)
			);
		}
	}]);

	return StackedBarChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

StackedBarChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

StackedBarChart.defaultProps = {
	type: "svg"
};
StackedBarChart = fitWidth(StackedBarChart);

/* harmony default export */ exports["a"] = StackedBarChart;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    VolumeProfileSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].VolumeProfileSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma,
    change = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].change;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var VolumeProfileBySessionChart = function (_React$Component) {
	_inherits(VolumeProfileBySessionChart, _React$Component);

	function VolumeProfileBySessionChart() {
		_classCallCheck(this, VolumeProfileBySessionChart);

		return _possibleConstructorReturn(this, (VolumeProfileBySessionChart.__proto__ || Object.getPrototypeOf(VolumeProfileBySessionChart)).apply(this, arguments));
	}

	_createClass(VolumeProfileBySessionChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


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

			var changeCalculator = change();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, changeCalculator],
					xExtents: [new Date(2014, 9, 1), new Date(2015, 2, 2)],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						widthRatio: 0.95,
						opacity: 0.3,
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 40, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(VolumeProfileSeries, { bySession: true, orient: "right", showSessionBackground: true }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return VolumeProfileBySessionChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

VolumeProfileBySessionChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

VolumeProfileBySessionChart.defaultProps = {
	type: "svg"
};
VolumeProfileBySessionChart = fitWidth(VolumeProfileBySessionChart);

/* harmony default export */ exports["a"] = VolumeProfileBySessionChart;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries,
    BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries,
    LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries,
    AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries,
    VolumeProfileSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].VolumeProfileSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor,
    MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX,
    MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY,
    CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip,
    MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis,
    YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema,
    sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma,
    change = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].change;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var VolumeProfileChart = function (_React$Component) {
	_inherits(VolumeProfileChart, _React$Component);

	function VolumeProfileChart() {
		_classCallCheck(this, VolumeProfileChart);

		return _possibleConstructorReturn(this, (VolumeProfileChart.__proto__ || Object.getPrototypeOf(VolumeProfileChart)).apply(this, arguments));
	}

	_createClass(VolumeProfileChart, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    width = _props.width,
			    ratio = _props.ratio;


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

			var changeCalculator = change();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, changeCalculator],
					xExtents: [new Date(2014, 9, 1), new Date(2015, 2, 2)],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".0s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".4s") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						widthRatio: 0.95,
						opacity: 0.3,
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["Chart"],
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 40, bottom: 20 } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f") }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(VolumeProfileSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CandlestickSeries, null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OHLCTooltip, { origin: [-40, 0] }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return VolumeProfileChart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

VolumeProfileChart.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

VolumeProfileChart.defaultProps = {
	type: "svg"
};
VolumeProfileChart = fitWidth(VolumeProfileChart);

/* harmony default export */ exports["a"] = VolumeProfileChart;

/***/ },
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
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
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
/* 510 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithAnnotation.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/46a2db7be6336500bedee27f5fa08713\">block</a>, <a href=\"http://plnkr.co/edit/gist:46a2db7be6336500bedee27f5fa08713?p=preview\">plunker</a></p>\n";

/***/ },
/* 511 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/AreaChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b9658ffa431f1ffb8d6b\">block</a>, <a href=\"http://plnkr.co/edit/gist:b9658ffa431f1ffb8d6b?p=preview\">plunker</a></p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2011-01-24</td><td>5743.25</td></tr>\n<tr><td>2011-01-25</td><td>5687.4</td></tr>\n<tr><td>2011-01-27</td><td>5604.3</td></tr>\n<tr><td>2011-01-28</td><td>5512.15</td></tr>\n<tr><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> timeParse <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-time-format\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> tsv <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-request\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> scaleTime <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-scale\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> format <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-format\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> parseDate <span class=\"token operator\">=</span> <span class=\"token function\">timeParse</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"%Y-%m-%d\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">tsv</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"path/to/data.tsv\"</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> data<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        d<span class=\"token punctuation\">.</span>date <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token function\">parseDate</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">getTime</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        d<span class=\"token punctuation\">.</span>close <span class=\"token operator\">=</span> <span class=\"token operator\">+</span>d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token operator\">...</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCanvas</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">400</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">margin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> left<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> right<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> bottom<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">seriesName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>MSFT<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>svg<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">xAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">xScale</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">scaleTime</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2011</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2013</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>XAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">6</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AreaSeries</span> <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ChartCanvas</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p>Let us review each line</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCanvas</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">400</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">margin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> left<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> right<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> bottom<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">seriesName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>MSFT<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>svg<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">xAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">xScale</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">scaleTime</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2011</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2013</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p>Creates an <code>svg</code> element with the provided <code>height</code> and <code>width</code> and creates a <code>svg:g</code> element with the provided <code>margin</code>. and <code>data</code> is used to plot.</p>\n<ul>\n<li><p><code>xAccessor</code> is self explanatory</p></li>\n<li><p><code>xScale</code> knowledge of d3 <a href=\"https://github.com/mbostock/d3/wiki/Scales\">scales</a> will certainly help. For starters, it is easier to understand scale as a function which converts a <code>domain</code> say 2011-01-01 to 2013-01-02 to a <code>range</code> say 0 to 500 pixels. This scale can now interpolate an input date to a value in pixels. <code>d3.scaleTime()</code> is a linear time scale</p></li>\n<li><p><code>xExtents</code> is the start and end points to show on initial render. This is an optional prop</p></li>\n<li><p><code>seriesName</code> this does not add value to this simple chart, you will see its use explained better later in the <a href=\"#/zoom_and_pan\">zoom and pan</a> section</p></li>\n<li><p><code>type</code> can take 2 values <code>svg</code> or <code>hybrid</code>.</p>\n<p>Choosing <code>svg</code> will create the entire chart using <code>svg</code> elements\nChoosing <code>hybrid</code> will create the contents of the <code>DataSeries</code> using <code>canvas</code> but the axis and other elements are <code>svg</code></p>\n<p>So irrespective of what type you choose, you will have a <code>svg</code> element</p></li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p>There can be one or more <code>Chart</code>s in each <code>ChartCanvas</code> and hence the need for an <code>id</code> attribute.</p>\n<p><code>Chart</code> also takes an optional prop <code>yScale</code> which defaults to <code>d3.scaleLinear()</code></p>\n<p>With SVG &amp; Canvas it is important to understand the coordinate system and where the origin <code>(0, 0)</code> is located. for a SVG of size 300x100, the</p>\n<p><img src=\"http://www.w3.org/TR/SVG/images/coords/InitialCoords.png\" alt=\"alt text\" title=\"SVG/Canvas coordinate system\"></p>\n<p>For more details about the coordinate system see <a href=\"http://www.w3.org/TR/SVG/coords.jsx\">here</a></p>\n<p>Back to scales,</p>\n<p>X Axis uses a time scale\nA time scale converts a date/time domain to a range, this is used as the xScale, the xDomain is calculated from the input <code>data</code> and the <code>xExtents</code> prop, and the range is calculated as <code>width - margin.left - margin.right</code>.</p>\n<p>Y Axis uses a linear scale\nA Linear scale converts a <code>domain</code> say 10 - 45 to a <code>range</code> say 0 to 300 pixels. Like the name represents the data in between is interpolated linear.</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>XAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">6</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p>The <code>ticks</code> attribute simple passes on the value to the scale, the <code>XAxis</code> also has the following optional attributes <code>innerTickSize, outerTickSize, tickFormat, tickPadding, tickSize, ticks, tickValues</code> all of which correspond to a function with the same name in <a href=\"https://github.com/d3/d3-axis\">d3-axis</a>.</p>\n<p><code>axisAt</code> takes on possible values as <code>top, middle, bottom</code> for advanced cases, you can also pass in a number indicating the pixel position where the axis has to be drawn.</p>\n<p><code>orient</code> takes on possible values as <code>top, bottom</code>, this orients the axis ticks on the top/bottom</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p>Similar to <code>XAxis</code> except left/right instead of top/bottom</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AreaSeries</span> <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p><code>yAccessor</code> is self explanatory</p>\n<h3>Highly customizable you say, how?</h3>\n<p>So you don’t want to display the <code>YAxis</code> at all, go ahead and just remove that.</p>\n<p>Want to display <code>YAxis</code> on both left and right? add</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p>next to the existing <code>YAxis</code></p>\n<p>Want to add a <code>YAxis</code> with a percent scale on the right? add</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">percentScale</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">tickFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".0%\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p>and you get.</p>\n";

/***/ },
/* 512 */
/***/ function(module, exports) {

module.exports = "<p>and a simple bar chart too</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/BarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b87d124b8879c671f140\">block</a>, <a href=\"http://plnkr.co/edit/gist:b87d124b8879c671f140?p=preview\">plunker</a></p>\n";

/***/ },
/* 513 */
/***/ function(module, exports) {

module.exports = "<p>Learn more about constructing a Bollinger Band <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:bollinger_bands\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithBollingerBandOverlay.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b993d5fcc5c09dd66a6e\">block</a>, <a href=\"http://plnkr.co/edit/gist:b993d5fcc5c09dd66a6e?p=preview\">plunker</a></p>\n";

/***/ },
/* 514 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>click to start, move to the end and click again</li>\n<li>Types of Brush\n<ul>\n<li>1D (default)</li>\n<li>2D</li>\n</ul></li>\n</ul>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithBrush.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/11c28c8e6612055ba8a7\">block</a>, <a href=\"http://plnkr.co/edit/gist:11c28c8e6612055ba8a7?p=preview\">plunker</a> of this example, search for <code>handleBrush</code> to see how to make the chart zoom in on brush complete</p>\n";

/***/ },
/* 515 */
/***/ function(module, exports) {

module.exports = "<p>Inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a> <a href=\"https://d3fc.io/examples/bubble/index.html\">example</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/BubbleChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/cb4bb2831987d787a98c\">block</a>, <a href=\"http://plnkr.co/edit/gist:cb4bb2831987d787a98c?p=preview\">plunker</a></p>\n";

/***/ },
/* 516 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/1eac0cb78f27b31415ac\">block</a>, <a href=\"http://plnkr.co/edit/gist:1eac0cb78f27b31415ac?p=preview\">plunker</a></p>\n<p>That is better. let us see how to create it</p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>open</th><th>high</th><th>low</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2013-08-16</td><td>5705.45</td><td>5716.6</td><td>5496.05</td><td>5507.85</td></tr>\n<tr><td>2013-08-19</td><td>5497.55</td><td>5499.65</td><td>5360.65</td><td>5414.75</td></tr>\n<tr><td>2013-08-20</td><td>5353.45</td><td>5417.8</td><td>5306.35</td><td>5401.45</td></tr>\n<tr><td>…</td><td>…</td><td>…</td><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> timeParse <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-time-format\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> tsv <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-request\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> parseDate <span class=\"token operator\">=</span> <span class=\"token function\">timeParse</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"%Y-%m-%d\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">tsv</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"path/to/data.tsv\"</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> data<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        d<span class=\"token punctuation\">.</span>date <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token function\">parseDate</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">getTime</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        d<span class=\"token punctuation\">.</span>open <span class=\"token operator\">=</span> <span class=\"token operator\">+</span>d<span class=\"token punctuation\">.</span>open<span class=\"token punctuation\">;</span>\n        d<span class=\"token punctuation\">.</span>high <span class=\"token operator\">=</span> <span class=\"token operator\">+</span>d<span class=\"token punctuation\">.</span>high<span class=\"token punctuation\">;</span>\n        d<span class=\"token punctuation\">.</span>low <span class=\"token operator\">=</span> <span class=\"token operator\">+</span>d<span class=\"token punctuation\">.</span>low<span class=\"token punctuation\">;</span>\n        d<span class=\"token punctuation\">.</span>close <span class=\"token operator\">=</span> <span class=\"token operator\">+</span>d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token operator\">...</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCanvas</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">400</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">margin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>left<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> right<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> bottom<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">seriesName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>MSFT<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">xScaleProvider</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2012</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2012</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span>d<span class=\"token punctuation\">.</span>high<span class=\"token punctuation\">,</span> d<span class=\"token punctuation\">.</span>low<span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>XAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">6</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ChartCanvas</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p>Compare this with the simpler <code>AreaChart</code> example from before</p>\n<pre><code class=\"language-js\">xScaleProvider<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>is the only difference in <code>&lt;ChartCanvas&gt;</code></p>\n<p><code>xScale</code> is replaced with <code>xScaleProvider</code>, <code>discontinuousTimeScaleProvider</code> is a function which takes some pre calculated values and the data array to return a scale that removes the discontinuity, to and show a linear scale</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span>d<span class=\"token punctuation\">.</span>high<span class=\"token punctuation\">,</span> d<span class=\"token punctuation\">.</span>low<span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<ul>\n<li><code>yExtents</code> can accept\n<ul>\n<li>a function which returns a number / an object / an array of numbers. The min and max value of these are used to calculate the y domain</li>\n<li>an array of functions - same as above</li>\n<li>min and max values as number. Say you always want to show the y domain between 0 and 100, you may say <code>yExtents={[0, 100]}</code></li>\n</ul></li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>XAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">6</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p>Same as for <code>AreaChart</code> example.</p>\n";

/***/ },
/* 517 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b13b739458e65ff93f4a\">block</a>, <a href=\"http://plnkr.co/edit/gist:b13b739458e65ff93f4a?p=preview\">plunker</a></p>\n<p>well, that looks ok, but something is not right. Look closer, you will find that the candles are not spread at regular intervals, there is a gap of say 2 candles every so often. That gap is because the data is plot on a continuous time scale, and a continuous time scale has week ends and national holidays, days when trading does not happen. Now we don’t want to show non trading days on the chart. If it is an intra day chart, you want to see only 9:30 AM to 4:00 PM (or 1:00 PM if it is holiday hours)</p>\n<p>What we need here is to show time that is not continuous on the x axis. Enter <strong>financetime scale</strong>.</p>\n";

/***/ },
/* 518 */
/***/ function(module, exports) {

module.exports = "<h2>v0.6.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><code>EventCapture</code> is now removed. This is because starting <code>0.6</code> zoom actions can happen by drag on the x/y axis also, and that is a separate container, so having a single <code>EventCapture</code> is not possible</li>\n<li><code>CurrentCoordinate</code>, <code>MouseCoordinateX</code>, <code>MouseCoordinateY</code> no longer require an <code>id</code> prop</li>\n<li><code>TooltipContainer</code> is removed and all the tooltips (<code>OHLCTooltip</code>, <code>MovingAverageTooltip</code>)  are now moved inside the <code>Chart</code> relative to which you specify the origin. This also makes the <code>forChart</code> prop on the different <code>XXXTooltip</code> unnecessary</li>\n<li><code>ElderRaySeries</code> no longer accepts a <code>calculator</code> prop but instead an <code>accessor</code></li>\n</ol>\n<h4>New features</h4>\n<ol>\n<li>Zoom on y</li>\n<li>Pan on y</li>\n<li>Support for pan to load more data</li>\n<li>Click, Right click, Doubleclick handlers on <code>LineSeries</code> - This can serve as a model for other series</li>\n<li>Add <code>tickStrokeDasharray</code> - <a href=\"https://github.com/rrag/react-stockcharts/pull/183\">#183</a> and <a href=\"http://rrag.github.io/react-stockcharts/documentation.html#/line_scatter\">documentation</a></li>\n<li>Control the number of datapoints/px - <a href=\"https://github.com/rrag/react-stockcharts/pull/192\">#192</a></li>\n<li>Hovertooltip now autosizes based on the content - <a href=\"https://github.com/rrag/react-stockcharts/pull/189\">#189</a></li>\n<li>Smooth zoom - <a href=\"https://github.com/rrag/react-stockcharts/pull/160\">#160</a></li>\n<li>More markers for a scatter chart - <a href=\"https://github.com/rrag/react-stockcharts/pull/172\">#172</a></li>\n</ol>\n<h4>Contributors</h4>\n<p>Please welcome <a href=\"https://github.com/shprink\">@shprink</a> as a new contributor.</p>\n<h4>Internal Changes</h4>\n<ol>\n<li>Upgrade to <code>d3</code> individual modules</li>\n</ol>\n<h2>v0.5.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><p>Removed <code>financeEODDiscontinuousScale</code> and replaced by a new discontinuous scale which supports both eod and intraday - Thank you <a href=\"https://github.com/brobits\">@brobits</a></p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...\n     discontinous xScale={financeEODDiscontinuousScale()}\n     ...&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScaleProvider={discontinuousTimeScaleProvider}\n     ...&gt;\n</code></pre>\n<p><code>discontinous</code> prop is also removed. However should you choose to use any of the scales provided by d3, you can use them without any changes from <code>0.4</code></p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScale={d3.time.scale()}\n     ...&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScale={d3.time.scale()}\n     ...&gt;\n</code></pre>\n<p>no changes here when using an existing d3 scale, <code>xScaleProvider</code> is useful only when you have to work with a discontinuous scale</p></li>\n<li><p>Removed <code>MouseCoordinates</code>, use <code>MouseCoordinateX</code>, <code>MouseCoordinateY</code> and <code>CrossHairCursor</code> together to get similar results. Breaking out one component into multiple gave a lot more flexibility and also helps in removing the awkward props <code>yMousePointerDisplayLocation</code>, <code>yMousePointerDisplayFormat</code> from <code>Chart</code></p></li>\n<li><p>Removed <code>yMousePointerDisplayLocation</code>, <code>yMousePointerDisplayFormat</code> from <code>Chart</code>, Use <code>MouseCoordinateY</code> instead</p></li>\n<li><p>Interactive indicators are <code>svg</code> only. This is most likely a transitional change till they get rewritten again in a future version to support canvas, be on the lookout for another possibly breaking change on interactive indicators</p>\n<p>Interactive indicators are no longer placed inside a <code>Chart</code>, they live inside <code>EventCapture</code>. Placing them on top of the event capture <code>rect</code> has helped in making <a href=\"https://github.com/rrag/react-stockcharts/issues/94\">#94</a> possible</p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...&gt;\n     &lt;Chart id={0} ...&gt;\n         ...\n         &lt;TrendLine ... /&gt;\n         ...\n     &lt;/Chart&gt;\n     ...\n     &lt;EventCapture ... /&gt;\n     ...\n &lt;/ChartCanvas&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...&gt;\n     &lt;Chart id={0} ...&gt;\n         ...\n     &lt;/Chart&gt;\n     ...\n     &lt;EventCapture ... &gt;\n         &lt;TrendLine forChart={0} ... /&gt;\n     &lt;/EventCapture&gt;\n     ...\n &lt;/ChartCanvas&gt;\n</code></pre>\n<p>look for more details in the <a href=\"#/trendline\">documentation</a> page</p></li>\n</ol>\n<h4>New features</h4>\n<ol>\n<li>Support both React <code>0.14</code> and React <code>15</code></li>\n<li>Annotations for events <a href=\"https://github.com/rrag/react-stockcharts/issues/54\">#54</a> - <a href=\"#/annotations\">more details</a></li>\n<li>Buy &amp; sell signals using Annotation - <a href=\"#/ma_crossover_using_text_annotation\">more</a> <a href=\"#/ma_crossover_using_svg_shape\">details</a></li>\n<li>Labels - Look at how Chart title and axis labels <a href=\"#/annotations\">more details</a></li>\n<li>Hover tooltip - <a href=\"#/hover_tooltip\">more details</a></li>\n<li>intraday scale - <a href=\"#/intra_day_with_discontinuous_scale\">more details</a></li>\n<li>Better edge coordinate - <a href=\"https://github.com/rrag/react-stockcharts/pull/79\">#79</a> - Thank you <a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a> -</li>\n<li>Volume profile - Refer to documentation for <a href=\"#/volume_profile\">volume profile</a> and <a href=\"#/volume_profile_by_session\">volume profile by session</a> Thank you <a href=\"https://github.com/aajtodd\">@aajtodd</a> for great documentation references</li>\n</ol>\n<h4>Contributors</h4>\n<p>I thank all the contributors for taking your time to help make this better</p>\n<ol>\n<li><a href=\"https://github.com/akinoniku\">@akinoniku</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/88\">#88</a></li>\n<li><a href=\"https://github.com/brobits\">@brobits</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/69\">#69</a></li>\n<li><a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/79\">#79</a>, <a href=\"https://github.com/rrag/react-stockcharts/pull/97\">#97</a></li>\n</ol>\n<p>Special thanks to\n<a href=\"https://github.com/rsklyar\">@rsklyar</a>\n<a href=\"https://github.com/iNikNik\">@iNikNik</a>\n<a href=\"https://github.com/Pinxie\">@Pinxie</a>\n<a href=\"https://github.com/WaiSiuKei\">@WaiSiuKei</a>\n<a href=\"https://github.com/itsjimbo\">@itsjimbo</a>\n<a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a>\n<a href=\"https://github.com/aajtodd\">@aajtodd</a>\n<a href=\"https://github.com/XmelesX\">@XmelesX</a>\n<a href=\"https://github.com/raptoria\">@raptoria</a>\nfor your constant support, providing ideas for new features, suggestions for improvement and identifying defects</p>\n<h2>v0.4.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><p>Drop support for React <code>0.13.x</code> and make <code>0.14.3</code> the default dependency</p></li>\n<li><p>Major changes to API.</p>\n<ul>\n<li><code>DataSeries</code> is gone</li>\n<li>all <code>indicator</code>s and <code>dataTransform</code>s are now gone, and are replaced by <code>calculator</code></li>\n<li><code>setViewRange</code>, <code>pushData</code>, <code>alterData</code> were methods you could invoke from the ref of <code>ChartCanvas</code>. These are now gone, in favor of react style props for setting them</li>\n<li><code>ChartCanvas</code> now takes (among other things)\n<ul>\n<li><code>xExtents</code> - indicates the domain of the x axis</li>\n<li><code>calculators</code> - indicates the calculators to be calculated on the data</li>\n</ul></li>\n</ul>\n<p>For a summary of changes, refer to <a href=\"https://github.com/rrag/react-stockcharts/issues/48#issuecomment-174184639\">this issue</a>. Compare the examples <a href=\"https://github.com/rrag/react-stockcharts/tree/2af0c6e763ae960d40eb6c5406b4fe0ec8da2ac2/docs/lib/charts\">before (<code>0.3</code>)</a> and <a href=\"https://github.com/rrag/react-stockcharts/tree/8386c424821907512b8e135a8a7fded3e5e09c83/docs/lib/charts\">after(<code>0.4</code></a></p></li>\n<li><p>All the <code>calculator</code>s, are written d3 style. (inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a>)</p></li>\n<li><p><code>CompareSeries</code> is gone in favor of a calculator in its place. Refer to the examples for usage</p></li>\n</ol>\n<h4>New Features</h4>\n<ol>\n<li>Implement touch support, pan and pinch zoom</li>\n<li>New Chart types Scatter, OHLC</li>\n<li>New indicators - Elder impulse, Elder Ray, Force Index, ATR</li>\n<li>Updated <code>TrendLine</code>, <code>FibonacciRetracement</code>, <code>Brush</code> to take <code>type</code> prop</li>\n<li>Change <code>StraightLine</code> to take a prop of type which defaults to <code>horizontal</code></li>\n</ol>\n<h4>Internal Changes</h4>\n<ol>\n<li>Inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a> change some of the internals</li>\n<li>add dependency <code>lodash.fattendeep</code></li>\n<li>remove dependency <code>object-assign</code></li>\n</ol>\n<h2>v0.3.1</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix <a href=\"https://github.com/rrag/react-stockcharts/issues/39\">#39</a></li>\n<li>Add eslint rules to prevent these from happening again</li>\n<li>Change <code>utils.js</code> and <code>ChartDataUtil.js</code> to use es6 exports</li>\n<li>fix <code>svg</code> for <code>Brush</code></li>\n</ol>\n<h2>v0.3.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Changes to <code>Histogram</code> to accept <code>stroke</code> as a boolean param instead of a function. the <code>stroke</code> color cannot be different from <code>fill</code></li>\n<li><code>OHLCTooltip</code> uses <code>d3.format(&quot;.4s&quot;)</code> as the format to show volume. This shows a suffix of M (Mega) for Million and G (Giga) for Billion. These are per the <a href=\"https://en.wikipedia.org/wiki/Metric_prefix\">SI-prefix</a>. You can change it to a different format by passing a prop <code>volumeFormat</code> that accepts a function taking the volume and returning a formatted string</li>\n</ol>\n<h4>Changes</h4>\n<ol>\n<li>Add new methods to <code>ChartCanvas</code></li>\n<li>Add <code>Brush</code> and <code>ClickCallback</code> interactive components</li>\n<li>Fix bug on zoom, for charts not using stockscale</li>\n<li>Change to use ES6 module exports instead of commonjs <code>module.exports = ...</code></li>\n</ol>\n<h2>v0.2.12</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fixed a bug where <code>React</code> was not imported in <code>fitWidth</code></li>\n</ol>\n<h2>v0.2.11</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Opacity works only when using Hex colors, using color names like <code>steelblue</code> <code>red</code> <code>black</code> is not recommended. This is to address #1 in <a href=\"https://github.com/rrag/react-stockcharts/issues/22\">issue #22</a></li>\n</ol>\n<h4>Changes</h4>\n<ol>\n<li>Support for Dark theme</li>\n</ol>\n<h2>v0.2.10</h2>\n<h4>Changes</h4>\n<ol>\n<li>Create interactive indicators\n<ol>\n<li><code>FibonacciRetracement</code></li>\n<li><code>TrendLine</code></li>\n</ol></li>\n<li>Add a new prop <code>widthRatio</code> which takes values from 0 to 1 (defaults to 0.5) for <code>HistogramSeries</code> &amp; <code>CandlestickSeries</code> to control the width</li>\n<li>Add new tooltip <code>SingleValueTooltip</code></li>\n</ol>\n<h2>v0.2.9</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix the moving average stroke color bug that was introduced from <code>v0.2.8</code></li>\n<li>Initial version of Interactive indicator <code>TrendLine</code></li>\n</ol>\n<h2>v0.2.8</h2>\n<h4>Changes</h4>\n<ol>\n<li>Create a pure function instead of React Components extending PureComponent, this way the <code>componentWillReceiveProps</code> will not be called when no props are changed</li>\n<li>Stop mutating the state of <code>EventHandler</code>, instead use a separate mutable state variable to hold a list of callbacks for drawing on canvas</li>\n</ol>\n<h2>v0.2.6</h2>\n<h4>Changes</h4>\n<ol>\n<li>Use <code>save-svg-as-png</code> <code>v1.0.1</code> instead of referring from source</li>\n<li>Add onClick handler for all tooltips</li>\n<li>Change onClick handler of <code>MovingAverageTooltip</code> to provide <code>chartId, dataSeriesId, options</code></li>\n</ol>\n<h2>v0.2.5</h2>\n<h4>Changes</h4>\n<ol>\n<li>Use React 0.14.0 instead of 0.14.0-rc1</li>\n<li>Add default yAccessor to Area &amp; Line Series</li>\n<li>Add checks for defensive iteration of children</li>\n<li>Fix Kagi defect where volume is not reset</li>\n<li>Add utility method to convert hex to rgba</li>\n<li>Fix axes so svg and canvas result in near pixel perfect output</li>\n<li>Round off x of Histogram so svg and canvas look similar</li>\n<li>Change import in examples from ReStock to react-stockcharts</li>\n<li>Add zIndex as property to ChartCanvas</li>\n</ol>\n<h2>v0.2.4</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix updating data for Kagi, Renko, P&amp;F. Add examples <a href=\"https://github.com/rrag/react-stockcharts/issues/17\">#17</a></li>\n</ol>\n<h2>v0.2.3</h2>\n<h4>Changes</h4>\n<ol>\n<li>Make it work with both react 0.13.3 &amp; 0.14.0-rc1 <a href=\"https://github.com/rrag/react-stockcharts/issues/12\">#12</a></li>\n</ol>\n<h2>v0.2.2</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Use react &amp; react-dom 0.14.0-rc1 as dependency, added <code>peerDependency</code> to resolve <a href=\"https://github.com/rrag/react-stockcharts/issues/12\">#12</a></li>\n</ol>\n<h4>Internal changes</h4>\n<ol>\n<li>Change the way chart series are developed so <code>context</code> is not used.</li>\n</ol>\n<h2>v0.2.1</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Use react 0.14.0-beta3 as dependency</li>\n</ol>\n<h4>Other changes</h4>\n<ol>\n<li>Improve the handling of the chart on <a href=\"#/updating_data\">updating data</a>\n<ol>\n<li>provide a new <code>pushData</code> method to push new data points, and another <code>alterData</code> method to modify existing data. By creating these methods, it is easy to identify if a change to the Chart is due to data changes or change of height/width of the chart</li>\n</ol></li>\n<li>Add example for serverside rendering</li>\n<li>Add example for downloading chart as png - works for both canvas &amp; svg</li>\n</ol>\n<h4>Internal changes</h4>\n<ol>\n<li>In an attempt to improve performance of pan actions on firefox, the pan actions when done for canvas now do not update the state during pan. To achieve this the following changes were done\n<ol>\n<li>Create Canvas based X &amp; YAxis</li>\n<li>Canvas based <code>EdgeCoordinates</code> and <code>MouseCoordinates</code> and <code>CurrentCoordinate</code></li>\n<li>Create 2 canvas as against one for each chart.\n<ul>\n<li>One canvas that is redrawn on mouse move, this canvas contains the <code>MouseCoordinates</code>, <code>CurrentCoordinate</code>, and</li>\n<li>One canvas that is drawn on zoom or pan action, this contains everything else, including the <code>XAxis</code>, <code>YAxis</code>, the actual Chart series, <code>EdgeCoordinate</code></li>\n</ul></li>\n</ol></li>\n</ol>\n<h2>v0.2</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><code>&lt;DataTransform&gt;</code> is now removed, Check out examples on how to use the new <code>dataTransform</code> property of <code>ChartCanvas</code></li>\n<li><code>&lt;OverlaySeries&gt;</code> is now removed, and <code>&lt;DataSeries&gt;</code> is used in its place and also it no longer accepts <code>type</code> instead accepts an <code>indicator</code> prop. This will keep the <code>OverlaySeries</code> extensible for custom overlays too. This is a significant change as it combines indicators and overlays to be interchangable. Multiple <code>DataSeries</code> in the same <code>Chart</code> contribute to the same <code>scales</code></li>\n<li><code>DataSeries</code> no longer accepts <code>xAccessor</code> instead, it is moved to <code>Chart</code>. Use of <code>xAccessor</code> on the <code>Chart</code> is for very simple usecases, since it does not benefit from the stock scale</li>\n<li>Simple moving average and Exponential moving average are converted as indicators</li>\n<li>Axes are now accesible via <code>ReStock.axes.XAxis</code>, <code>ReStock.axes.YAxis</code> against <code>ReStock.XAxis</code>, <code>ReStock.YAxis</code> in 0.1.x</li>\n<li>No more <code>react-stockchart.css</code>. The stylesheet is no longer used. All the styling has been moved to the individual components. If you prefer to have different style attributes you can use the style related  properties of the individual components or create a custom stylesheet with the class defined in each component</li>\n</ol>\n<h4>Other changes</h4>\n<ol>\n<li>Pure React based <code>svg</code> axes. Both <code>XAxis</code> and <code>YAxis</code> do not use <code>d3</code> to render inside <code>componentDidMount</code> / <code>componentDidUpdate</code></li>\n<li>Added new indicators/overlays Bollinger band, RSI, MACD</li>\n<li>A new property <code>type</code> is added to <code>ChartCanvas</code> and it takes one of 2 values\n<ul>\n<li><code>svg</code> which creates the chart using pure svg</li>\n<li><code>hybrid</code> which creates the chart using a combination of <code>svg</code> and <code>canvas</code>. <code>canvas</code> is used to draw the different series, like Line, Area, Candlestick, Histogram etc. and <code>svg</code> is used for the <code>XXXTooltip</code>, <code>MousePointer</code>, <code>XAxis</code> <code>YAxis</code> and the <code>EdgeIndicator</code></li>\n</ul></li>\n<li>add <code>jsnext:main</code> to <code>package.json</code> for use with <a href=\"https://github.com/rollup/rollup\">rollup</a></li>\n</ol>\n<hr>\n";

/***/ },
/* 519 */
/***/ function(module, exports) {

module.exports = "<p>Open the dev tools console and see the output of click</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithClickHandlerCallback.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/67894a887e52891aa2a3\">block</a>, <a href=\"http://plnkr.co/edit/gist:67894a887e52891aa2a3?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 520 */
/***/ function(module, exports) {

module.exports = "<h2>v0.7</h2>\n<ol>\n<li><a href=\"http://www.investopedia.com/terms/e/envelope.asp?optm=sa_v2\">Envelope</a></li>\n<li><a href=\"http://www.incrediblecharts.com/indicators/atr_average_true_range_trailing_stops.php\">ATR Trailing stop</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:chandelier_exit\">Chandelier Exit</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:parabolic_sar\">Parabolic SAR</a>\n<ul>\n<li>With mouse hover highlight</li>\n<li>right click context menu</li>\n<li>double click listener</li>\n</ul></li>\n<li>Explore refactoring of interactive indicators to use canvas (again)</li>\n</ol>\n<h4>New Chart types</h4>\n<ol>\n<li>Line break</li>\n<li>Better Renko/Mean Renko (Tentative)</li>\n</ol>\n<h2>v0.8</h2>\n<p>Guess this can be <code>v1.0.0</code></p>\n<ol>\n<li>Explore removal of svg mode &amp; all svg components completely, so this becomes a canvas only library (Tentative)</li>\n<li>Detailed documentation of each component and its props</li>\n<li>Explore splitting project into multiple modules, one for each type of indicator, chart type</li>\n<li>add LineSeries interpolation</li>\n<li>add AreaSeries gradiant</li>\n</ol>\n<h2>Sometime in the future…</h2>\n<h4>Features</h4>\n<ol>\n<li>Volume Profile (Tentative)\n<ul>\n<li>show/hide Point of control</li>\n<li>show/hide value area</li>\n</ul></li>\n<li>Automatic Support &amp; Resistance trendlines (Tentative)</li>\n<li>Add a playground to see live updates (Tentative)</li>\n</ol>\n<h4>New Indicators (in no particular order or priority)</h4>\n<ol>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:average_directional_index_adx\">ADX</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:aroon\">Aroon</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school%3Atechnical_indicators%3Awilliams_r\">Williams %R</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:vwap_intraday\">Volume Weighted Average Price </a></li>\n<li><a href=\"http://www.incrediblecharts.com/indicators/momentum.php\">Momentum</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:money_flow_index_mfi\">Money flow</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:ichimoku_cloud\">Ichimoku Clouds</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:zigzag\">ZigZag</a></li>\n</ol>\n<p><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators\">and more…</a></p>\n";

/***/ },
/* 521 */
/***/ function(module, exports) {

module.exports = "<p>Compare with another stock, zoom and pan to see how the comparison works</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithCompare.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/759f1ada33878e3239a5\">block</a>, <a href=\"http://plnkr.co/edit/gist:759f1ada33878e3239a5?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 522 */
/***/ function(module, exports) {

module.exports = "<p>This section describes how to create a new <code>XXXIndicator</code> yourself.</p>\n<h3>Prerequisites:</h3>\n<ul>\n<li>An indicator is plain old javascript, which follows some conventions, so knowledge of javascript is the only prerequisite</li>\n</ul>\n<hr>\n<p>Now before you begin jumping to write a new indicator yourself, I suggest you look at the <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/indicator\">source of a few</a></p>\n<p>The simplest one is <code>SMAIndicator.js</code></p>\n<p>an indicator has to follow the below structure</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\">import</span> objectAssign <span class=\"token keyword\">from</span> <span class=\"token string\">\"object-assign\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> defaultOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// some</span>\n    <span class=\"token comment\" spellcheck=\"true\">// default options</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">MyOwnIndicator</span><span class=\"token punctuation\">(</span>options<span class=\"token punctuation\">,</span> chartProps<span class=\"token punctuation\">,</span> dataSeriesProps<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// options - The options provided in DataSeries</span>\n    <span class=\"token comment\" spellcheck=\"true\">// chartProps - the props object of the Chart surrounding this element</span>\n    <span class=\"token comment\" spellcheck=\"true\">// dataSeriesProps - the props object of the DataSeries where this indicator is used</span>\n\n    <span class=\"token keyword\">var</span> prefix <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`chart_</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span> chartProps<span class=\"token punctuation\">.</span>id <span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">var</span> key <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`overlay_</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span> dataSeriesProps<span class=\"token punctuation\">.</span>id <span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">var</span> settings <span class=\"token operator\">=</span> <span class=\"token function\">objectAssign</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> defaultOptions<span class=\"token punctuation\">,</span> options<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">function</span> <span class=\"token function\">indicator</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token punctuation\">}</span>\n\n    indicator<span class=\"token punctuation\">.</span>options <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> settings<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n    indicator<span class=\"token punctuation\">.</span>calculate <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// calculate the new values for the data provided</span>\n        <span class=\"token comment\" spellcheck=\"true\">// use prefix &amp; key above to create any new fields under</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      data[i][prefix][key] = ...;</span>\n        <span class=\"token comment\" spellcheck=\"true\">// This is so indicators do not override each other and it is easy to troubleshoot the source of the problem</span>\n\n        <span class=\"token keyword\">return</span> modifiedData<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    indicator<span class=\"token punctuation\">.</span>yAccessor <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// returns a function which is the yAccessor, below is an example</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>d <span class=\"token operator\">&amp;&amp;</span> d<span class=\"token punctuation\">[</span>prefix<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span> <span class=\"token keyword\">return</span> d<span class=\"token punctuation\">[</span>prefix<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    indicator<span class=\"token punctuation\">.</span>stroke <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optional method to return the stroke color</span>\n        <span class=\"token keyword\">return</span> stroke<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    indicator<span class=\"token punctuation\">.</span>domain <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optional method if you want to over ride the domain which react-stockcharts calculates, used in RSI</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    indicator<span class=\"token punctuation\">.</span>yTicks <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optinoal method if you want only certain values to be displayed as yTicks, used inRSI</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">[</span>settings<span class=\"token punctuation\">.</span>overSold<span class=\"token punctuation\">,</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> settings<span class=\"token punctuation\">.</span>overBought<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    indicator<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// if you need add your own functions here</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    indicator<span class=\"token punctuation\">.</span>bar <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// if you need add your own functions here</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    indicator<span class=\"token punctuation\">.</span>isMyOwnIndicator <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// it is also advisable to create this function returning true</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      this can be used by your custom Tooltip to format the values appropriately</span>\n        <span class=\"token keyword\">return</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> indicator<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> MyOwnIndicator<span class=\"token punctuation\">;</span>\n</code></pre>\n";

/***/ },
/* 523 */
/***/ function(module, exports) {

module.exports = "<p>This section describes how to create a new <code>XXXSeries</code> yourself.</p>\n<h3>Prerequisites:</h3>\n<ul>\n<li>good understanding of svg and different shapes</li>\n<li>good understanding of HTML5 canvas api</li>\n<li>Knowledge of d3 scales - the <a href=\"https://github.com/mbostock/d3/wiki/Quantitative-Scales#linear\">linear scale</a> is used heavily</li>\n</ul>\n<h3>Some terminology</h3>\n<h4>xAccessor / yAccessor</h4>\n<p>given a datapoint, <code>xAccessor(dataPoint)</code> returns the xValue</p>\n<h4>xScale / yScale</h4>\n<p>given a xValue <code>xScale(xValue)</code> converts that value to a pixel location on the x scale. A scale converts a domain of say <code>1/1/2010</code> to <code>1/1/2015</code> to a range of say 0 - 500 px. So <code>xScale(new Date(2010, 1, 1))</code> would return <code>0</code> and any date greater that that would return a value above 0 and a date before 1/1/2010 would result in a -ve number on the scale.</p>\n<h4>plotData</h4>\n<p>This is an array of data points which have to be drawn on the chart.</p>\n<h4>ctx</h4>\n<p>This is the HTML5 canvas context, you will have to have a decent understanding of how to use it, teaching that is beyond the scope of this section.</p>\n<h4>indicator</h4>\n<p>For derived Series like say the MACD or RSI, the indicator passed to the <code>DataSeries</code> is available from <code>props</code></p>\n<h4>compareSeries</h4>\n<p>TODO - Write more on how to use <code>compareSeries</code></p>\n<hr>\n<p>Now before you begin jumping to write a new series yourself, I suggest you look at the <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series\">source of a few Series</a></p>\n<ul>\n<li><code>Area.jsx</code></li>\n<li><code>Line.jsx</code></li>\n<li><code>StraightLine.jsx</code></li>\n</ul>\n<p>are not series themselves but are building blocks which are used in other Series. See <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series/StochasticSeries.jsx\">StochasticSeries.jsx</a>, <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series/RSISeries.jsx\">RSISeries.jsx</a> for some examples of how these building blocks are used to create a more complex Series.</p>\n<p>If you build a new Series with just these building blocks, you do not need to handle the drawing of the chart on svg or canvas as these building blocks handle it. But if you are creating a series without these or adding some custom features, the following rules apply</p>\n<p>It is necessary that all Series be Pure, meaning, they have no state and given the same set of <code>props</code> as input the same output is provided on both canvas and svg depending on what is configured.</p>\n<p><del>Since we depend on React 0.14 for the library, we might as well use the <a href=\"https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d\">Components as Functions</a>.</del></p>\n<p>some boilerplate code below</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">\"react\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ReStock <span class=\"token keyword\">from</span> <span class=\"token string\">\"react-stockcharts\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> wrap <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> ReStock<span class=\"token punctuation\">.</span>series<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">MyNewSeries</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">var</span> <span class=\"token punctuation\">{</span> props <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The following are available from props</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// plotData is an array containing the points to be displayed on the screen. This is not the same as the data</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      you provided as input. It is most likely smaller in size since it contains a filtered list of items </span>\n        <span class=\"token comment\" spellcheck=\"true\">//      which are to be displayed for the domain of xScale</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The x &amp; y Accessor are used to get the x &amp; y value for each element in the plotData</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The x &amp; y Scale can be used to get the value in pixels for a x, y value</span>\n\n        <span class=\"token keyword\">var</span> <span class=\"token punctuation\">{</span> xAccessor<span class=\"token punctuation\">,</span> yAccessor<span class=\"token punctuation\">,</span> xScale<span class=\"token punctuation\">,</span> yScale<span class=\"token punctuation\">,</span> plotData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n\n\n        <span class=\"token comment\" spellcheck=\"true\">// In the event there is a CompareSeries in that Chart this is available</span>\n        <span class=\"token comment\" spellcheck=\"true\">// TODO explain more about compare series and why it is special</span>\n\n        <span class=\"token keyword\">var</span> <span class=\"token punctuation\">{</span> compareSeries <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// indicator is available if you have used one on the DataSeries surrounding this Series</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Read more on how to write an indicator in the \"Custom - Create indicator\" section</span>\n\n        <span class=\"token keyword\">var</span> <span class=\"token punctuation\">{</span> indicator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// this is available if there is a stroke / fill defined in the DataSeries surrounding this Series</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      or the stroke / fill defined in the indicator above</span>\n\n        <span class=\"token keyword\">var</span> <span class=\"token punctuation\">{</span> stroke<span class=\"token punctuation\">,</span> fill <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// type is the value you have provided at the ChartCanvas, it can be \"svg\" or \"hybrid\"</span>\n        <span class=\"token comment\" spellcheck=\"true\">// height and width of this Chart</span>\n\n        <span class=\"token keyword\">var</span> <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">,</span> width <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// In addition to the above, any props you define when using this component are also available.</span>\n        <span class=\"token comment\" spellcheck=\"true\">// If say you create a prop called xAccessor, this will override the xAccessor provided by react-stockcharts</span>\n\n        <span class=\"token operator\">...</span>\n        <span class=\"token keyword\">return</span> svg<span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">/* return an svg element */</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nMyNewSeries<span class=\"token punctuation\">.</span>drawOnCanvas <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">,</span> ctx<span class=\"token punctuation\">,</span> xScale<span class=\"token punctuation\">,</span> yScale<span class=\"token punctuation\">,</span> plotData<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// This is an optional method</span>\n    <span class=\"token comment\" spellcheck=\"true\">// having this static method on your component will make</span>\n    <span class=\"token comment\" spellcheck=\"true\">// this method to be called on pan action</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// If you are creating a series based on only the building blocks listed above this method is not needed</span>\n\n    <span class=\"token operator\">...</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var { xAccessor, yAccessor } = props;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.beginPath();</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.strokeStyle = \"red\";</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.lineWidth = 3;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var first = plotData[0];</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var last = plotData[plotData.length - 1];</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.moveTo(xScale(xAccessor(first)), yScale(yAccessor(first)));</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.lineTo(xScale(xAccessor(last)), yScale(yAccessor(last)));</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.stroke();</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// This is very important. You need to wrap your series, so ReStock knows to provide these props</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">wrap</span><span class=\"token punctuation\">(</span>MyNewSeries<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n";

/***/ },
/* 524 */
/***/ function(module, exports) {

module.exports = "<p>Creating a dark background is simply modifying some of the props to use the colors you want. The important thing to note here is that <code>canvas</code> &amp; <code>svg</code> are transparent, so the background is simply controlled by css. For the example below the background is configured as</p>\n<pre><code class=\"language-css\"><span class=\"token selector\">.dark</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> #303030<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>There are multiple other properties which have to be customized to make the chart appear as below. see them all in the <a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithDarkTheme.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/23dd469fe32d7fc1977c\">block</a>, <a href=\"http://plnkr.co/edit/gist:23dd469fe32d7fc1977c?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 525 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithEdge.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/70ea3fe28ad35bf3ed4c\">block</a>, <a href=\"http://plnkr.co/edit/gist:70ea3fe28ad35bf3ed4c?p=preview\">plunker</a></p>\n<p><code>EdgeIndicator</code>s are inside each <code>Chart</code>, can be of type <code>first</code> or <code>last</code>, can be located <code>left</code> or <code>right</code> and orient <code>left</code> or <code>right</code>. Below you see edges <code>first</code> and <code>last</code> for all the overlays and also for the <code>volume</code> histogram.</p>\n<p>The edge values are updated on zoom and pan also</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> format <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-format\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">...</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">...</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">...</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>last<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ema20<span class=\"token punctuation\">.</span><span class=\"token function\">accessor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ema20<span class=\"token punctuation\">.</span><span class=\"token function\">fill</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>last<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ema50<span class=\"token punctuation\">.</span><span class=\"token function\">accessor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ema50<span class=\"token punctuation\">.</span><span class=\"token function\">fill</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>last<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close <span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>open <span class=\"token operator\">?</span> <span class=\"token string\">\"#6BA583\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"#FF0000\"</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>first<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ema20<span class=\"token punctuation\">.</span><span class=\"token function\">accessor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ema20<span class=\"token punctuation\">.</span><span class=\"token function\">fill</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>first<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ema50<span class=\"token punctuation\">.</span><span class=\"token function\">accessor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ema50<span class=\"token punctuation\">.</span><span class=\"token function\">fill</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>first<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close <span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>open <span class=\"token operator\">?</span> <span class=\"token string\">\"#6BA583\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"#FF0000\"</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">...</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">...</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>first<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">displayFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".4s\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#0F0F0F<span class=\"token punctuation\">\"</span>/</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>last<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">displayFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".4s\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#0F0F0F<span class=\"token punctuation\">\"</span>/</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>first<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>smaVolume50<span class=\"token punctuation\">.</span><span class=\"token function\">accessor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">displayFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".4s\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>smaVolume50<span class=\"token punctuation\">.</span><span class=\"token function\">fill</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\">itemType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>last<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">edgeAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>smaVolume50<span class=\"token punctuation\">.</span><span class=\"token function\">accessor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">displayFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".4s\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>smaVolume50<span class=\"token punctuation\">.</span><span class=\"token function\">fill</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n";

/***/ },
/* 526 */
/***/ function(module, exports) {

module.exports = "<p>Elder Impulse Indicator</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:elder_impulse_system\">plot</a> it</p>\n<p>green bars indicate oportunities for long, and red bars for short. Blue bars are neither</p>\n<p>This indicator is a little tricky because the main chart has to be drawn <strong>after</strong> the MACD and the EMA are calculated. The indicator is quite flexible in that, it extends the Elder Impulse system of comparing an <code>EMA</code> and <code>MACD</code> to comparing 2 or more of <em>any</em> indicators. Below example compares <code>EMA(12)</code> with the <code>MACD(26, 12, 9)</code> histogram</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/OHLCChartWithElderImpulseIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d26ef33a49317e2841c9\">block</a>, <a href=\"http://plnkr.co/edit/gist:d26ef33a49317e2841c9?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 527 */
/***/ function(module, exports) {

module.exports = "<p>Elder Ray Indicator</p>\n<p>Learn more about how to <a href=\"http://stockmarketstudent.com/elder-ray-index/\">plot</a> it</p>\n<p>This chart is also an example of OHLC chart</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/OHLCChartWithElderRayIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/0942a5f884a49efa7a14\">block</a>, <a href=\"http://plnkr.co/edit/gist:0942a5f884a49efa7a14?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 528 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>create a Fib retracement - click, mousemove, click</li>\n<li>Once a fib is drawn it gets out of draw mode automatically. To get back into draw mode again - Press D</li>\n<li>Enter draw mode again - Press D</li>\n<li>Get out of draw mode - Press ESC</li>\n<li>Delete the last drawn retracement - Press DEL</li>\n<li>When not in draw mode\n<ul>\n<li>click and drag the fib when you get a move cursor</li>\n<li>click and drag when you get the resize cursor - Work in progress</li>\n</ul></li>\n</ul>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithFibonacciInteractiveIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/82bc46e6566618e429d9\">block</a>, <a href=\"http://plnkr.co/edit/gist:82bc46e6566618e429d9?p=preview\">plunker</a></p>\n";

/***/ },
/* 529 */
/***/ function(module, exports) {

module.exports = "<p>The financetime scale takes the input data and converts to linear and plots time on the axis. The outcome is quite interesting. This scale is particularly of use not just for simple time series data, but more importantly for charts which are dependent on price movement, think Point &amp; Figure, Line break, Kagi, Renko.</p>\n<p>scale provides ticks of the format</p>\n<ul>\n<li>Start of year as <code>YYYY</code> e.g. 2013</li>\n<li>Start of Quarter as <code>mmm YYYY</code> e.g. Oct 2013</li>\n<li>Start of Month <code>as mmm</code> e.g. Nov</li>\n<li>Start of Week as <code>dd mmm</code> e.g. 25 Nov</li>\n<li>day as <code>a dd</code> e.g. Wed 27</li>\n</ul>\n";

/***/ },
/* 530 */
/***/ function(module, exports) {

module.exports = "<p>Force Index Indicator</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:force_index\">plot</a> it</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithForceIndexIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/1741fe3e882f0eb144af\">block</a>, <a href=\"http://plnkr.co/edit/gist:1741fe3e882f0eb144af?p=preview\">plunker</a></p>\n";

/***/ },
/* 531 */
/***/ function(module, exports) {

module.exports = "<pre><code class=\"language-js\"><span class=\"token keyword\">const</span> height <span class=\"token operator\">=</span> <span class=\"token number\">400</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> width <span class=\"token operator\">=</span> <span class=\"token number\">800</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> margin <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>left<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span> right<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span> bottom<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> gridHeight <span class=\"token operator\">=</span> height <span class=\"token operator\">-</span> margin<span class=\"token punctuation\">.</span>top <span class=\"token operator\">-</span> margin<span class=\"token punctuation\">.</span>bottom<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> gridWidth <span class=\"token operator\">=</span> width <span class=\"token operator\">-</span> margin<span class=\"token punctuation\">.</span>left <span class=\"token operator\">-</span> margin<span class=\"token punctuation\">.</span>right<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> showGrid <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> yGrid <span class=\"token operator\">=</span> showGrid <span class=\"token operator\">?</span> <span class=\"token punctuation\">{</span> \n    innerTickSize<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span> <span class=\"token operator\">*</span> gridWidth<span class=\"token punctuation\">,</span>\n    tickStrokeDasharray<span class=\"token punctuation\">:</span> <span class=\"token string\">'Solid'</span><span class=\"token punctuation\">,</span>\n    tickStrokeOpacity<span class=\"token punctuation\">:</span> <span class=\"token number\">0.2</span><span class=\"token punctuation\">,</span>\n    tickStrokeWidth<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>\n<span class=\"token punctuation\">}</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> xGrid <span class=\"token operator\">=</span> showGrid <span class=\"token operator\">?</span> <span class=\"token punctuation\">{</span> \n    innerTickSize<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span> <span class=\"token operator\">*</span> gridHeight\n    tickStrokeDasharray<span class=\"token punctuation\">:</span> <span class=\"token string\">'Solid'</span><span class=\"token punctuation\">,</span>\n    tickStrokeOpacity<span class=\"token punctuation\">:</span> <span class=\"token number\">0.2</span><span class=\"token punctuation\">,</span>\n    tickStrokeWidth<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>\n<span class=\"token punctuation\">}</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCanvas</span> \n    <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span> \n    <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>height<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">margin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>margin<span class=\"token punctuation\">}</span></span>\n<span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>XAxis</span>\n            <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">{...xGrid}</span>\n        <span class=\"token punctuation\">/></span>\n        <span class=\"token attr-name\">&lt;YAxis</span>\n            <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">{...yGrid}</span>\n        <span class=\"token punctuation\">/></span></span>\n</code></pre>\n";

/***/ },
/* 532 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/GroupedBarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/f683b0c93d839ac8af55\">block</a>, <a href=\"http://plnkr.co/edit/gist:f683b0c93d839ac8af55?p=preview\">plunker</a></p>\n";

/***/ },
/* 533 */
/***/ function(module, exports) {

module.exports = "<p>Also known as &quot;average bar&quot;, used to identify trends and filter out noise. Learn more about how to construct one <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:heikin_ashi\">here</a> and <a href=\"http://www.investopedia.com/articles/technical/04/092204.asp\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HeikinAshi.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/51379c24e9751d46dcea\">block</a>, <a href=\"http://plnkr.co/edit/gist:51379c24e9751d46dcea?p=preview\">plunker</a></p>\n";

/***/ },
/* 534 */
/***/ function(module, exports) {

module.exports = "<p>Notice the <code>flipScales</code> on the <code>BarSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HorizontalBarChart.jsx\">source</a></p>\n";

/***/ },
/* 535 */
/***/ function(module, exports) {

module.exports = "<p>Notice the <code>flipScales</code> on the <code>StackedBarSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HorizontalStackedBarChart.jsx\">source</a></p>\n";

/***/ },
/* 536 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithHoverTooltip.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/9a070195e699d133932b3f368fe702d3\">block</a>, <a href=\"http://plnkr.co/edit/gist:9a070195e699d133932b3f368fe702d3?p=preview\">plunker</a></p>\n";

/***/ },
/* 537 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/f11fcc9d0867a34789c2efd346ca112a\">block</a>, <a href=\"http://plnkr.co/edit/gist:f11fcc9d0867a34789c2efd346ca112a?p=preview\">plunker</a></p>\n";

/***/ },
/* 538 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/dc853a365171d1770ada7ecc107d08de\">block</a>, <a href=\"http://plnkr.co/edit/gist:dc853a365171d1770ada7ecc107d08de?p=preview\">plunker</a></p>\n";

/***/ },
/* 539 */
/***/ function(module, exports) {

module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:kagi\">here</a></p>\n<p>Kagi consists of <em>Yin</em> and <em>Yang</em>, which is represented as red and green respectively. An overly simple rule is buy on Yang and sell on Yin.</p>\n<p>ATR(14) is used as the default reversal amount.</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/Kagi.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d1e5b75ac12f754bb21d\">block</a>, <a href=\"http://plnkr.co/edit/gist:d1e5b75ac12f754bb21d?p=preview\">plunker</a></p>\n";

/***/ },
/* 540 */
/***/ function(module, exports) {

module.exports = "<p>The real test in performance is showing a chart with a lot of data points and more than a few indicators.  As an example, let us work with MSFT from 1986-03-13 till 2015-06-05</p>\n<p>That is more than 7000 one day periods, how can all that fit into one screen? Although technically it can be done there are a few problems</p>\n<ol>\n<li>Every time you zoom/pan a chart with that many data points it just does not work. Browsers do not have the power to recalculate the scales for the new domain and appear responsive.</li>\n<li>Even with cross hair and tool tip you could see the lag</li>\n</ol>\n<p>Fortunately seeing end of day data over 30 years on a single chart is not really useful. React stockcharts has sane defaults to show 2 data point per pixel width.</p>\n<p>Let us see all this in action for MSFT 1986-03-13 till 2015-03-26</p>\n";

/***/ },
/* 541 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/MovingAverageCrossOverAlgorithm.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/7feb29450469cf60773c520133a31511\">block</a>, <a href=\"http://plnkr.co/edit/gist:7feb29450469cf60773c520133a31511?p=preview\">plunker</a></p>\n";

/***/ },
/* 542 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/MovingAverageCrossOverAlgorithmV2.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b944f7ef22a42956198d3384c05f1777\">block</a>, <a href=\"http://plnkr.co/edit/gist:b944f7ef22a42956198d3384c05f1777?p=preview\">plunker</a></p>\n";

/***/ },
/* 543 */
/***/ function(module, exports) {

module.exports = "<p>Moving Average Convergence Divergence (MACD) indicator with defaults</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:moving_average_convergence_divergence_macd\">plot</a> it</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithMACDIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/109a2b8021689e1ffc79\">block</a>, <a href=\"http://plnkr.co/edit/gist:109a2b8021689e1ffc79?p=preview\">plunker</a></p>\n";

/***/ },
/* 544 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithCHMousePointer.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/261fa4bc7b67536eb789\">block</a>, <a href=\"http://plnkr.co/edit/gist:261fa4bc7b67536eb789?p=preview\">plunker</a></p>\n<pre><code class=\"language-js\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> timeFormat <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-time-format\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> format <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-format\"</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCanvas</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">400</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">margin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>left<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span> right<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> bottom<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">seriesName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>MSFT<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">xScaleProvider</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2012</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2012</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span>d<span class=\"token punctuation\">.</span>high<span class=\"token punctuation\">,</span> d<span class=\"token punctuation\">.</span>low<span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>XAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span>/</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MouseCoordinateY</span>\n            <span class=\"token attr-name\">at</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">displayFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".2f\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>OHLCTooltip</span> <span class=\"token attr-name\">origin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token operator\">-</span><span class=\"token number\">40</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">150</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">origin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>w<span class=\"token punctuation\">,</span> h<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> h <span class=\"token operator\">-</span> <span class=\"token number\">150</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">tickFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".0s\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MouseCoordinateX</span>\n            <span class=\"token attr-name\">at</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">displayFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">timeFormat</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"%Y-%m-%d\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MouseCoordinateY</span>\n            <span class=\"token attr-name\">at</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">displayFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".4s\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BarSeries</span> <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close <span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>open <span class=\"token operator\">?</span> <span class=\"token string\">\"#6BA583\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"#FF0000\"</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CrossHairCursor</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ChartCanvas</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p><code>EventCapture</code> is used to capture mousemove, scroll/zoom and drag events</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EventCapture</span> <span class=\"token attr-name\">mouseMove</span> <span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p>By default none of the events are captured, and each has to be enabled individually <code>mouseMove</code> is enabled above.</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CrossHairCursor</span> <span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p>Displays the crosshair at the mouse position. If you prefer a different type of cursor, just swap this out with a custom one</p>\n<p>Notice there is a <code>MouseCoordinateY</code> for each <code>Chart</code>, this shows the value of y mouse pointer for each chart. The different props are self explanatory</p>\n<p><code>MouseCoordinateX</code> is also self explanatory, you could have multiple of these with different <code>at</code> and <code>orient</code> values to show the x coordinate multiple times at different places</p>\n<p>And for the tooltip on the top left</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TooltipContainer</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>OHLCTooltip</span> <span class=\"token attr-name\">forChart</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">origin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token operator\">-</span><span class=\"token number\">40</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TooltipContainer</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p>use the <code>origin</code> and <code>margin</code> of <code>ChartCanvas</code> to adjust the position of the tooltip. You can also create your custom tooltip, by swapping out <code>OHLCTooltip</code> with your own</p>\n";

/***/ },
/* 545 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithMA.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/a27298bb7ae613d48ba2\">block</a>, <a href=\"http://plnkr.co/edit/gist:a27298bb7ae613d48ba2?p=preview\">plunker</a></p>\n";

/***/ },
/* 546 */
/***/ function(module, exports) {

module.exports = "<h4>React Stockcharts - Built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></h4>\n<p>React Stockcharts provides a flexible api to create charts that represent time series data. You can</p>\n<ul>\n<li>add custom chart components</li>\n<li>add custom indicators</li>\n<li>access the <code>svg</code> elements and styling with CSS (when using svg)</li>\n<li>get fast performance to pan and zoom actions, when using the hybrid mode</li>\n</ul>\n<p>There are many charting libraries available, but I feel there are very few that provide the features and flexibility to create stock charts that compete with the likes of the ones provided by commercial trading systems. Here is my humble attempt.</p>\n";

/***/ },
/* 547 */
/***/ function(module, exports) {

module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/docs/doku.php?id=other-tools:pnf-charts\">here</a></p>\n<p>default is 3 box reversal.</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/PointAndFigure.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d43ef867bead0f1de663\">block</a>, <a href=\"http://plnkr.co/edit/gist:d43ef867bead0f1de663?p=preview\">plunker</a></p>\n";

/***/ },
/* 548 */
/***/ function(module, exports) {

module.exports = "<p>Similar to Point and Figure charts in that Renko plots the price movement ignoring the time. Each brick is formed on a different column when the price moves beyond a threshold.</p>\n<p>Brick size defaults to ATR (14)</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:renko\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/Renko.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/df51fa445c26e123beb9\">block</a>, <a href=\"http://plnkr.co/edit/gist:df51fa445c26e123beb9?p=preview\">plunker</a></p>\n";

/***/ },
/* 549 */
/***/ function(module, exports) {

module.exports = "<p>The chart below has an RSI and ATR indicator</p>\n<p>Learn more about constructing a RSI <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:relative_strength_index_rsi\">here</a></p>\n<p>Learn more about constructing a ATR <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:average_true_range_atr\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithRSIIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/78817a1ccf0a450eed0c\">block</a>, <a href=\"http://plnkr.co/edit/gist:78817a1ccf0a450eed0c?p=preview\">plunker</a></p>\n";

/***/ },
/* 550 */
/***/ function(module, exports) {

module.exports = "<pre><code class=\"language-js\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ChartCanvas<span class=\"token punctuation\">,</span> Chart<span class=\"token punctuation\">,</span> series <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"react-stockcharts\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> LineSeries<span class=\"token punctuation\">,</span> ScatterSeries<span class=\"token punctuation\">,</span> CircleMarker<span class=\"token punctuation\">,</span> SquareMarker<span class=\"token punctuation\">,</span> TriangleMarker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> series<span class=\"token punctuation\">;</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LineSeries</span>\n    <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>AAPLClose<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">stroke</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#ff7f0e<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">strokeDasharray</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Dot<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ScatterSeries</span>\n    <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>AAPLClose<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">marker</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>SquareMarker<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">markerProps</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> stroke<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#ff7f0e\"</span><span class=\"token punctuation\">,</span> fill<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#ff7f0e\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LineSeries</span>\n    <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>GEClose<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">stroke</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#2ca02c<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ScatterSeries</span>\n    <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>GEClose<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">marker</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>TriangleMarker<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">markerProps</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> stroke<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#2ca02c\"</span><span class=\"token punctuation\">,</span> fill<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#2ca02c\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LineSeries</span>\n    <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">strokeDasharray</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>LongDash<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ScatterSeries</span>\n    <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">marker</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>CircleMarker<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">markerProps</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> r<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n</code></pre>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/LineAndScatterChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/95ffd539fa4e0b4544cf\">block</a>, <a href=\"http://plnkr.co/edit/gist:95ffd539fa4e0b4544cf?p=preview\">plunker</a></p>\n<h3>Props</h3>\n<table>\n<thead>\n<tr><th>props</th><th style=\"text-align:left\">type</th><th style=\"text-align:left\">default</th><th style=\"text-align:left\">Description</th></tr>\n</thead>\n<tbody>\n<tr><td>className</td><td style=\"text-align:left\">string</td><td style=\"text-align:left\">“line”</td></tr>\n<tr><td>strokeWidth</td><td style=\"text-align:left\">number</td><td style=\"text-align:left\">1</td></tr>\n<tr><td>stroke</td><td style=\"text-align:left\">string</td><td style=\"text-align:left\">“#4682B4”</td></tr>\n<tr><td>strokeDasharray</td><td style=\"text-align:left\">string</td><td style=\"text-align:left\">“Solid”</td></tr>\n<tr><td>hoverStrokeWidth</td><td style=\"text-align:left\">number</td><td style=\"text-align:left\">4</td></tr>\n<tr><td>fill</td><td style=\"text-align:left\">string</td><td style=\"text-align:left\">“none”</td></tr>\n<tr><td>hoverTolerance</td><td style=\"text-align:left\">number</td><td style=\"text-align:left\">6</td></tr>\n<tr><td>highlightOnHover</td><td style=\"text-align:left\">boolean</td><td style=\"text-align:left\">false</td></tr>\n<tr><td>connectNulls</td><td style=\"text-align:left\">boolean</td><td style=\"text-align:left\">false</td><td style=\"text-align:left\">Whether to connect a graph line across null points.</td></tr>\n<tr><td>yAccessor</td><td style=\"text-align:left\">function</td><td style=\"text-align:left\"></td></tr>\n<tr><td>onClick</td><td style=\"text-align:left\">function</td><td style=\"text-align:left\"></td></tr>\n<tr><td>onDoubleClick</td><td style=\"text-align:left\">function</td><td style=\"text-align:left\"></td></tr>\n<tr><td>onContextMenu</td><td style=\"text-align:left\">function</td><td style=\"text-align:left\"></td></tr>\n<tr><td>defined</td><td style=\"text-align:left\">function</td><td style=\"text-align:left\"></td></tr>\n</tbody>\n</table>\n<h4>strokeDasharray possible values</h4>\n<p><img width=\"400\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzAAAAK6CAYAAADmVLkRAAAMGWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdUU0kXnldSCAktEAEpoTdBepXeO9LBRkgChBJDIKjYy6KCa0FFBEVFV0BsawFkURG7sghYsG8sqCjrYsGGyj9JAF33L+e/58yb7925985375t5ZwYARXuWQJCNKgGQw88XRgf6MBOTkpkkMSACBpAH9gBlsfME3lFRYQDKaP93eXcDIJL+qqUk1j/H/6soc7h5bACQKIhTOXnsHIiPAIBrsgXCfAAInVBvMCtfIMFvIVYVQoIAEMkSnC7DWhKcKsPWUpvYaF+I/QAgU1ksYToACpL4zAJ2OoyjIIDYms/h8SHeDrEHO4PFgVgM8YScnJkQK1IhNk39Lk7632KmjsVksdLHsCwXqZD9eHmCbNac/7Mc/1tyskWjc+jDRs0QBkVLcoZ1q82aGSrBkDvSwk+NiIRYBeILPI7UXoJvZ4iC4kbs+9l5vrBm8EsDFHBYfqEQw1qiDFFWnPcItmUJpb7QHo3g5QfHjuBU4czokfhoAT87ImwkzooMbvAoruLm+ceM2qTxAoIhhisNPVKYEZsg44meKeDFR0CsAHFnXlZM6Ijv/cIM34hRG6EoWsLZEOK3acKAaJkNpp6TN5oXZsVmSedSh9grPyM2SOaLJXLzEsNGOXC4fv4yDhiHy48b4YbB1eUTPeJbJMiOGrHHqrjZgdGyOmMH8wpiRn278+ECk9UBe5jJComS8cfeCfKjYmXccByEAV/gB5hABFsqmAkyAa+jv7EfvslGAgALCEE64ALLEc2oR4J0hA+fMaAQ/AkRF+SN+flIR7mgAOq/jGllT0uQJh0tkHpkgScQ5+CauAfuhofBpxdstrgz7jLqx1QcnZXoT/QjBhEDiGZjPNiQdTZsQsD7N7pQ2HNhdhIu/NEcvsUjPCF0ER4SrhPEhFsgHjyWRhmxmsFbIvyBOROEAzGMFjCSXSqM2TdqgxtD1g64D+4O+UPuOAPXBJa4PczEG/eEuTlA7fcMRWPcvtXyx/kkrL/PZ0SvYK7gMMIidezL+I5Z/RjF97sacWAf+qMltgI7jJ3HTmEXsRasETCxk1gT1o4dl+CxlfBYuhJGZ4uWcsuCcXijNtb11n3Wn/8xO2uEgVD6vUE+d3a+ZEP4zhTMEfLSM/KZ3vCPzGUG89lWE5i21jaOAEj+77LfxxuG9L+NMC590+W2AuBSDJXp33QsAwCOPQGA/u6bzuA13F5rATjeyRYJC2Q6XPIgAApQhDtDA+gAA2AKc7IFjsANeAF/EAIiQSxIAtNh1TNADmQ9C8wDi0ERKAFrwUZQAbaBnaAW7AOHQCNoAafAOXAZdILr4A5cG73gBRgA78AQgiAkhIbQEQ1EFzFCLBBbxBnxQPyRMCQaSUJSkHSEj4iQechSpAQpRSqQHUgd8ityDDmFXES6kFvIA6QPeY18QjGUiqqi2qgxOhF1Rr3RUDQWnYamo7loIboMXY2Wo9XoXrQBPYVeRq+jYvQFOogBTB5jYHqYJeaM+WKRWDKWhgmxBVgxVoZVY/uxZvitr2JirB/7iBNxOs7ELeH6DMLjcDaeiy/AV+EVeC3egJ/Br+IP8AH8K4FG0CJYEFwJwYREQjphFqGIUEbYTThKOAv3Ti/hHZFIZBBNiE5wbyYRM4lziauIW4kHiK3ELuIj4iCJRNIgWZDcSZEkFimfVETaTNpLOknqJvWSPpDlybpkW3IAOZnMJy8hl5H3kE+Qu8lPyUNySnJGcq5ykXIcuTlya+R2yTXLXZHrlRuiKFNMKO6UWEomZTGlnLKfcpZyl/JGXl5eX95FfrI8T36RfLn8QfkL8g/kP1JVqOZUX+pUqoi6mlpDbaXeor6h0WjGNC9aMi2ftppWRztNu0/7oEBXsFIIVuAoLFSoVGhQ6FZ4qSinaKTorThdsVCxTPGw4hXFfiU5JWMlXyWW0gKlSqVjSj1Kg8p0ZRvlSOUc5VXKe5QvKj9TIakYq/ircFSWqexUOa3yiI7RDei+dDZ9KX0X/Sy9V5WoaqIarJqpWqK6T7VDdUBNRc1eLV5ttlql2nE1MQNjGDOCGdmMNYxDjBuMT+O0x3mP445bOW7/uO5x79XHq3upc9WL1Q+oX1f/pMHU8NfI0lin0ahxTxPXNNecrDlLs0rzrGb/eNXxbuPZ44vHHxp/WwvVMteK1pqrtVOrXWtQW0c7UFugvVn7tHa/DkPHSydTZ4POCZ0+Xbquhy5Pd4PuSd3nTDWmNzObWc48wxzQ09IL0hPp7dDr0BvSN9GP01+if0D/ngHFwNkgzWCDQZvBgKGuYbjhPMN6w9tGckbORhlGm4zOG703NjFOMF5u3Gj8zETdJNik0KTe5K4pzdTTNNe02vSaGdHM2SzLbKtZpzlq7mCeYV5pfsUCtXC04FlsteiaQJjgMoE/oXpCjyXV0tuywLLe8oEVwyrMaolVo9XLiYYTkyeum3h+4ldrB+ts613Wd2xUbEJsltg027y2Nbdl21baXrOj2QXYLbRrsntlb2HPta+yv+lAdwh3WO7Q5vDF0clR6Ljfsc/J0CnFaYtTj7Oqc5TzKucLLgQXH5eFLi0uH10dXfNdD7n+5WbpluW2x+3ZJJNJ3Em7Jj1y13dnue9wF3swPVI8tnuIPfU8WZ7Vng+9DLw4Xru9nnqbeWd67/V+6WPtI/Q56vPe19V3vm+rH+YX6Ffs1+Gv4h/nX+F/P0A/ID2gPmAg0CFwbmBrECEoNGhdUE+wdjA7uC54IMQpZH7ImVBqaExoRejDMPMwYVhzOBoeEr4+/G6EUQQ/ojESRAZHro+8F2USlRv122Ti5KjJlZOfRNtEz4s+H0OPmRGzJ+ZdrE/smtg7caZxori2eMX4qfF18e8T/BJKE8SJExPnJ15O0kziJTUlk5Ljk3cnD07xn7JxSu9Uh6lFU29MM5k2e9rF6ZrTs6cfn6E4gzXjcAohJSFlT8pnViSrmjWYGpy6JXWA7cvexH7B8eJs4PRx3bml3Kdp7mmlac/S3dPXp/dleGaUZfTzfHkVvFeZQZnbMt9nRWbVZA1nJ2QfyCHnpOQc46vws/hnZurMnD2zS2AhKBKIc11zN+YOCEOFu/OQvGl5Tfmq8KjTLjIV/SR6UOBRUFnwYVb8rMOzlWfzZ7fPMZ+zcs7TwoDCX+bic9lz2+bpzVs878F87/k7FiALUhe0LTRYuGxh76LARbWLKYuzFv++xHpJ6ZK3SxOWNi/TXrZo2aOfAn+qL1IoEhb1LHdbvm0FvoK3omOl3crNK78Wc4ovlViXlJV8XsVedelnm5/Lfx5enba6Y43jmqq1xLX8tTfWea6rLVUuLSx9tD58fcMG5obiDW83zth4scy+bNsmyibRJnF5WHnTZsPNazd/rsiouF7pU3lgi9aWlVveb+Vs7a7yqtq/TXtbybZP23nbb+4I3NFQbVxdtpO4s2Dnk13xu87/4vxL3W7N3SW7v9Twa8S10bVn6pzq6vZo7VlTj9aL6vv2Tt3buc9vX9N+y/07DjAOlBwEB0UHn/+a8uuNQ6GH2g47H95/xOjIlqP0o8UNSMOchoHGjEZxU1JT17GQY23Nbs1Hf7P6raZFr6XyuNrxNScoJ5adGD5ZeHKwVdDafyr91KO2GW13TieevnZm8pmOs6FnL5wLOHf6vPf5kxfcL7RcdL147JLzpcbLjpcb2h3aj/7u8PvRDseOhitOV5o6XTqbuyZ1nej27D511e/quWvB1y5fj7jedSPuxs2eqT3im5ybz25l33p1u+D20J1Fdwl3i+8p3Su7r3W/+g+zPw6IHcXHH/g9aH8Y8/DOI/ajF4/zHn/uXfaE9qTsqe7Tume2z1r6Avo6n0953vtC8GKov+hP5T+3vDR9eeQvr7/aBxIHel8JXw2/XvVG403NW/u3bYNRg/ff5bwbel/8QeND7Ufnj+c/JXx6OjTrM+lz+RezL81fQ7/eHc4ZHhawhCzpUQCDDU1LA+B1DQC0JHh2gPc4ioLs/iUVRHZnlCLwn7DsjiYVeHKp8QIgbhEAYfCMUgWbEcRU2EuO37FeALWzG2sjkpdmZyuLRYW3GMKH4eE32gCQmgH4IhweHto6PPxlFyR7C4DWXNm9TyJEeMbfri5B7T24HvhB/gVbrmx+fvmA0gAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAZ1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+ODE2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjY5ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgr8SSkEAAAAHGlET1QAAAACAAAAAAAAAV0AAAAoAAABXQAAAV0AAF8fW90HwQAAQABJREFUeAHs3Qm41dS5+P/3MENBGZzQ8lNkqG2ZJ0VRUEEttyqDgIIM1hkVQaGC1hEVKAoqIJZBQAUElUFA0VtRBAWZWoWK9A+iVVoUUB8UUAb951105a7kZJ8c3Odszg7f3OeenWRlJSuftd3NyxqS8+2u3T8JCwIIIIAAAggggAACCCCQBQI5BDBZUEsUEQEEEEAAAQQQQAABBIwAAQxfBAQQQAABBBBAAAEEEMgaAQKYrKkqCooAAggggAACCCCAAAIEMHwHEEAAAQQQQAABBBBAIGsECGCypqooKAIIIIAAAggggAACCBDA8B1AAAEEEEAAAQQQQACBrBEggMmaqqKgCCCAAAIIIIAAAgggQADDdwABBBBAAAEEEEAAAQSyRoAAJmuqioIigAACCCCAAAIIIIAAAQzfAQQQQAABBBBAAAEEEMgaAQKYrKkqCooAAggggAACCCCAAAIEMHwHEEAAAQQQQAABBBBAIGsECGCypqooKAIIIIAAAggggAACCBDA8B1AAAEEEEAAAQQQQACBrBEggMmaqqKgCCCAAAIIIIAAAgggQADDdwABBBBAAAEEEEAAAQSyRoAAJmuqioIigAACCCCAAAIIIIAAAQzfAQQQQAABBBBAAAEEEMgaAQKYrKkqCooAAggggAACCCCAAAIEMHwHEEAAAQQQQAABBBBAIGsECGCypqooKAIIIIAAAggggAACCBDA8B1AAAEEEEAAAQQQQACBrBEggMmaqqKgCCCAAAIIIIAAAgggQADDdwABBBBAAAEEEEAAAQSyRoAAJmuqioIigAACCCCAAAIIIIAAAQzfAQQQQAABBBBAAAEEEMgaAQKYrKkqCooAAggggAACCCCAAAIEMHwHEEAAAQQQQAABBBBAIGsECGCypqooKAIIIIAAAggggAACCCQ2gNm7d6/89NNPUrp06QKt5R9++MGcr6DPW6CF5GQIIIAAAggggAACCCRUIOMBzM6dO2Xr1q2yf98+KV2mjFQoX14qV6kiJUqUKDDi77//Xs5ucZZ8tH69PDpipFx3/fUFcu6PP/5Y6tetY841eswY6dnrqgI5LydBAAEEEEAAAQQQQACB/AlkLIDZvXu3jHricXlw8ODIkt12e3+57/77JScnJzL9UHZqAHNuy5aybt3aXAHMp59+Kue2ainf79kjr//vX6VO3br5PvXGjRulYf165viCDIzyXQAORAABBBBAAAEEEEDgCBfISACjwUvbiy6U1atXp+Ru27atTHt+hhQvXjzlMflNyCuAcYOQxUuWSqNGjfJ7WnHzEsDkm40DEUAAAQQQQAABBBAoMIGMBDATxo+Xfn1vNYVu3bqNDBs+XE4++WT51utOtmHDBnnppRdly+efy/QZM6VYsWJp31xeAcymTZukQb2DrS7Llr9HC0za2pwAAQQQQAABBBBAAIHMCRR6AKMD6btf2U3mzpkjJ510kix7b4VUqlQp1x0eOHCgQFpf9MR5BTC5LnwIO2iBOQQsDkUAAQQQQAABBBBAoBAECj2A2bVrl7RqeY4ZUF+9enVZteZvUqpUqUO6FZ1RbOWKFfLpvz41+XIkR0779WnSoEHDyDEzeQUweq7PPvvM5DvxxBOljDeRQNTyt7+tkQ0fbZAff/rRm2iggrQ4+2zRrnCn1a5lDqcLWZQa+xBAAAEEEEAAAQQQKFyBQg9gtAWm9w03yHPPPWvuZMzYsdKjR89839W777wjV3otONu+/DJXHm3RmfvyPPnVaacF0vIKYP7pdVlr3KihOf6NN9+SZs2aBfJ+8803cvVVV8nrr78W2F+hQgU5x5sYYMH8+WY/AUyAhw0EEEAAAQQQQAABBDIiUOgBjN6FBi83OlMZX+8FNPfce58cddRRed6kBguXd+nsH3Npu3bStGkzmT9/nixftszf//bSpdKw4f8Nxs8rgHG7gYUH8WtrUevzzjOzl+nJjz3uOLn22mtl0aJFgetpGgGMKrAggAACCCCAAAIIIJBZgYwEMPryxyu7dpWFC18N3N34CROlU+fOkWNfdmzf7gUrTfyWlzkvvyznn9/azz9t2lS53gsudKlVq5asWLXaf5fMzw1gnp44UW7tc4s5Z3evlWjkY4/5L8LULmU9u3eXzZs3m3QCGMPAHwQQQAABBBBAAAEEMiqQkQBG70iDmDv+OEAmTpgQuEFt5Zgzd67Uq1c/sN9ttUkVLNzWr6+MHzfO5Hvt9f+VM886y6z/nADGzaNd0zQgCrcQud3PUpUpcBNsIIAAAggggAACCCCAQIEKZCyAsaV+e/Fi6dWrp9+yYvdPm/68XHzJJWZTx83cfNNN8syUyaJjT95buUqqVatmD/U/V61a5b2w8hyz7QYUbjDi7tcDU3Uhc4OTvn37yeCHHvKvY1fcvOHz2mP4RAABBBBAAAEEEEAAgcITyHgAo7eirTHTvS5gt9x8c+DOFr212Os21tTsG9D/dnnKG/Cf19TL7jtd3IDi5wQwbnAyeswY6dnrqkDZdMM9xr1ergPZgQACCCCAAAIIIIAAAoUicFgCGHsnGoC0v/QSf1zJZZ06ydOTJpspjm0Ao13MVntTL0e9OyZVQJFuAJMqOEl1PXs/fCKAAAIIIIAAAggggEDhChzWAEZvze26dUbz5vLKqwulZMmSYgOYVONRNC8tMKrAggACCCCAAAIIIIDAkSNw2AOYffv2yTktWpipi/VFl+8sW27GvbgD9N9dvlzq1q2Xq1bmz5snV1zexex3W01+TguMG0j16NlLtBtZTk5O4JrrP/xQmnkzo+niXi9wEBsIIIAAAggggAACCCBQaAIZCWC2b9smxxx7bORNuK0obdu2lekzZkqxYsXkTe/dK5dc/HuTR98bM/yRRwMBhY6jubBNa1m9erU5Zs3f3zfTKevGzwlgvvhiqzQ/4wwzuYBOHPD20nekZs2a5tz659NPP5XLOnaQj9avN/sIYHwaVhBAAAEEEEAAAQQQyJhAoQcw+nLI5qc3kxo1aso1110nTZo0lipVjjHByAcfvB94t8pfxo+Xrl27mZvXlpk255/nBygDB90pt/TpI+XKlZNtXkB0c+/e8vrrr5ljwy0mPyeA0RPdc/fdMnLEo+acOvZm8uQpckLVqrLk7bel7619zH77hwDGSvCJAAIIIIAAAggggEDmBDISwLTypjq2LRepbk1bX6Z6UymXKFHCP0RbZ9q0Pj/XlMv+Ad6Kdjt7c/HbXlBUxd+tAczZLc4y1wwHGu5A/MVLlkqjRo38fG4rjL8zxUr4vCkOYzcCCCCAAAIIIIAAAggUoEChBzD79+/33m7fx7zTJarc2l1rxMjHpHOXLqbrWPiYr7/+2msVGeG3jLjpw/48XK659lopVaqUuzvQhWzMk0+KttDYxe2yFjW2RoOYAf37y+xZs2wW8zl+wkTzokwNxrZ9+aW4rUWBA9lAAAEEEEAAAQQQQACBQhMo9ADGlnzv3r2yY8cO2b59m5QqWUq+/uYbqVypkpxao0ag1cUeH/7cuXOnfOPlKVumjOzes0eOP/54KeOtF9aydet/ZPfuPaZsx3ndyQrzWoV1D5wXAQQQQAABBBBAAIGkCWQsgEkaHPeDAAIIIIAAAggggAACmRcggMm8OVdEAAEEEEAAAQQQQACBnylAAPMz4ciGAAIIIIAAAggggAACmRco9ACmwi/KZf6uuCICCCCAAAIIIIAAAggUisC3u3YXynnze1ICmPxKcRwCCCCAAAIIIIAAAggIAQxfAgQQQAABBBBAAAEEEMgaAQKYrKkqCooAAggggAACCCCAAAKJD2CoYgQQQAABBBBAAAEEEECgoAQKfQxMQRWU8yCAAAIIIIAAAggggAACBDB8BxBAAAEEEEAAAQQQQCBrBAhgsqaqKCgCCCCAAAIIIIAAAggQwPAdQAABBBBAAAEEEEAAgawRIIDJmqqioAgggAACCCCAAAIIIEAAw3cAAQQQQAABBBBAAAEEskaAACZrqoqCIoAAAggggAACCCCAAAEM3wEEEEAAAQQQQAABBBDIGgECmKypKgqKAAIIIIAAAggggAACBDB8BxBAAAEEEEAAAQQQQCBrBAhgsqaqKCgCCCCAAAIIIIAAAggQwPAdQAABBBBAAAEEEEAAgawRIIDJmqqioAgggAACCCCAAAIIIEAAw3cAAQQQQAABBBBAAAEEskaAACZrqoqCIoAAAggggAACCCCAAAEM3wEEEEAAAQQQQAABBBDIGgECmKypKgqKAAIIIIAAAggggAACBDB8BxBAAAEEEEAAAQQQQCBrBAhgsqaqKCgCCCCAAAIIIIAAAggQwPAdQAABBBBAAAEEEEAAgawRIIDJmqqioAgggAACCCCAAAIIIEAAw3cAAQQQQAABBBBAAAEEskaAACZrqoqCIoAAAggggAACCCCAAAEM3wEEEEAAAQQQQAABBBDIGgECmKypKgqKAAIIIIAAAggggAACBDB8BxBAAAEEEEAAAQQQQCBrBAhgsqaqKCgCCCCAAAIIIIAAAggQwPAdQAABBBBAAAEEEEAAgawRIIDJmqqioAgggAACCCCAAAIIIEAAw3cAAQQQQAABBBBAAAEEskaAACZrqoqCIoAAAggggAACCCCAQJEOYPbv3y8HDhyQ4sWLS4kSJaitQhbYu3ev/PTTT1K6dOlCvhKnRwABBBBAAAEEEEDg5wlkPIDZuXOnbN26Vfbv2yely5SRCuXLS+UqVSIDlJt695ZnpkyWtm3byvQZM6VYsWI/7y7JFSvw/fffy9ktzpKP1q+XR0eMlOuuvz42DwcggAACCCCAAAIIIJBpgYwFMLt375ZRTzwuDw4eHHmPt93eX+67/37Jycnx0wf0v12eGjtWOnTsKJMmT8m6AGbkiEdlphd4RbUeHXfccXJC1apSu3ZtaX7mmdKoUaPI43yMQl7RAObcli1l3bq1BDCFbM3pEUAAAQQQQAABBH6+QEYCGA1e2l50oaxevTplSbWVZdrzM0x3MXuQDWCytQXmtn59Zfy4cfZ28vw81gto5s2bL7+tUyfP4workQCmsGQ5LwIIIIAAAggggEBBCmQkgJkwfrz063urKXfr1m1k2PDhcvLJJ8u3XneyDRs2yEsvvShbPv88VzexohzAbN36H5k4YaJ89q9/Sddu3eQcr/UivNjyV6hQQcY8OVYqVqxoAjTtRvfJJ5/I4rfekoULXw1kW/TWYmnatGlgXyY2CGAyocw1EEAAAQQQQAABBNIVKPQARgeFd7+ym8ydM0dOOukkWfbeCqlUqVKuctvB+m6CDQCKYgvMpk2bpEG9uqa4qcaM2PLrfa/5+/tSrlw59/bMuo456dzpMtm8ebPZ1paY1Wv+FmmUK3MB7iCAKUBMToUAAggggAACCCBQaAKFHsDs2rVLWrU8xwwOr169uqzyHs5LlSqVrxuyAYANYHR8zIoVK2TTpo0m/yknnyJnNG+e59iYr7/+2svznuzYscPkKVWylDRo2FBq1qwZWQadieuzzz4zY3GqVasmJUuWNGX/8MMPRdPad+hgWo5WrFwpXbzAQ5fuPXrKXX/6k2gQUL78L+T4408w+23544KSL77YKs3POEO2ffmlyfcXr8Wqa9duZt3+0Wtrq83nXtm++uors/voikdLkyZN8wx2tKVo1cpVsvPbnVK6VGnRPNV+WU1q/+pXgfFGUQGMdv1bunSJbN++XXK8/6tbt67U8f6fBQEEEEAAAQQQQACBwyVQ6AGMtsD0vuEGee65Z809jvEG5ffwHvjzs9gAoEfPXvLAAw9Ixw7tc42jadasmcz1xo6U92YzCy9TJk+Sm2+6KbzbbGvQMWToUDn66KMD6f/0urQ1btTQ7Ju/4BWZPXuW11Vsgtm2gUjfW/vIrJdeCuSzG2eedZa88upC01XMlt/mi2p5svlmzpghV//hKrOpgd57XtBRtmxZs/3mokVyycW/t4fm+pzz8sty/vmtA/vVffifh8lgzy28RJXHDWA0gGrUsJE0bdI4nFXuGDhI7rzrrjyDxlyZ2IEAAggggAACCCCAQAEJFHoAo+XU4OVGZ1re672A5p5775Ojjjoqz9uwAUCeB3mJ9953n/Qf8Ef/MH14v8drEXnssZH+vhtuvFGOPfZYeeqpp/yWjqgubRs3bpSG9ev5+dwV++A/4pFHAud2j9Fga9To0eYB35bf5ssrgNGWopZntzBdycLHu8HNpe3aea1HtbwA6kW/25nex8rVa0TH2tglHPT07XebfOu1wrzsBTu6hLupuQGMPUeqTw3sWrZqlSqZ/QgggAACCCCAAAIIFJpARgKYH374Qa7s2jXXgPXx3iD4Tp07B2Yec+/UBgB2n7a2jJ/4tJx66qmybu1ar9vV6SbJdjGz74lZvny5tDn/PJOmD/cLvBaRGjVqmG0tyx1/HOC3qgwcdKfp/mWvEQ5gNJiYNXu21K/fQPbs2eOPY9nw0UfSpHEjk23I0GFy8y232FP4n7b84YDEP8BZ2ee9F0fLrDO16fFLlr5jxgzpIUuXLJFt27ZJ6zZt/CBFg7S77hzkTU39hDnL4iVLzVTM9pTutd9dtkxOOKGqTRINlsLBVFQA07dvP7mtf39z7OxZs6RH9yvNOVKN+fEvwAoCCCCAAAIIIIAAAoUkkJEARsseDhzs/ejD+py5c6Vevfp2l/9pH8J1x0UX/c6bpWyG/64UfYC/4vIusmD+fNEuV+8sW24e7nW/22UtalYvfVi3L23U6y/zAh47bsUNYDRt0ZtvySmnnOKXya64x6V6oLfl1/OEWzzsedxPe7zue8O7rgZseS0LFiyQyzt3Moe4AYwaaNc5fQmoXtsNhlKdLxzAhIMyDXq0a52O09Hud6PHjKEbWSpM9iOAAAIIIIAAAggUmkDGAhh7B28vXiy9evX0u3HZ/dOmPy8XX3KJ3TSf9oFeAxR9QA+3Gth0N0BwJw2oVauWGUuiA/HDizu1sxvkuIHJjBdeFG3diVrc4woqgLHvjdGuYG97LTB5TTSgrU3PTJkit/Y52PLjBjBa3tGjRsmggXeYouv5xo2fIOe3bu2PqwnfkxvARAUobrqahN/ZEz4f2wgggAACCCCAAAIIFIZAxgMYvQltjZk+barccvPNgXtyAwlNsAHKZZ06ycSnJ+X6F3+b7gYw7oN2h44dZdLkKbny6bnneN3CdHpnXdyHfzcweddrmalbN3o8jHtcQQQwbrm129uKVasDY4R0NrFXvLEn06dPk+Vel7Dw4t6Dpm33upydd24rf5yMPX7Yn4dLr6uu8rvC2f3u9bV1pWevgxMKRKWHu+zZY/hEAAEEEEAAAQQQQKCwBQ5LAGNvSt+l0v7SS/yHbA1Unp402Z/e1wYoqR6YbXqqACZVPr1+fgKYcFBgy62fBR3A7PCmKm7atIlpmXLvR6+lXcFu6t1bV82iLSrtO3SUf/5zgx/MRJVVg5hhw4bKU97Mb+6i5w93jXMDmKiAzE3Py9W9DusIIIAAAggggAACCBS0wGENYPRm3GmL9Z0uOgWx7fJlA5RUD8w23X3gdx+0022BiQoKbAUUdADz/PTpcu01V5vTuy1O/1i3Ts44/eBYGL3PmV63tsaNG5sgL9UYGFtG+/n555/LzBnPy7333GN3iU73vOCVV/0xRa4bAYzPxAoCCCCAAAIIIIBAERM47AGMzr51TosWsm7d2sBgfHWyAcqhBjB2gH7U9MLW/27vXSZ2mmU3UHEDE3e/zWc/3eOiHvj1OFt+N8Cy+d1PbX05t1VLvyXqr4velNNPPzjD2sMPPSRDHn7ITFCgExXoeCC7zJ83z0xkoNt5ldUery/C7HRZR/NiznCZCGCsEp8IIIAAAggggAACRVkgIwGMdmU6xnsHS9Si3cga1KtrksKBig0AwvvteWx6+GF86JCH5aEHHzSH6RgYbdFwl08//VTq/ObXZpcGBO5LI93AJK+gwD0uLoCJGtNiy/PR+vXSudNlfvCi92oHyIdnE1uxYmXAcdjQIfLg4MHmVOHxOgcOHIicnlq7otnZydyZ0QhgbI3wiQACCCCAAAIIIFCUBQo9gNFZwZp7XaBq1Kgp11x3nTTx3u5epcoxpgvUBx+8Lz27d/cf3vUN8F27HhxYr2g2QDnUAGbLli1yWu1avvuUZ541M5zl5OTI2rUfBK6ps3Nd4b2jxi5uYJJXAPPxxx9L/bp1TDYNUOa+PE9q1KxptkuUKGE+bfl1zMqzU6dKxYqVRIOSsmXKyFdffSWzZ8+S8ePG2Uub1pW/vrFIjjv+eH+fG4zpSzIHDhok+/fv9yZBmGZaZuyB4WmPNVCpXKmSdPammq5e/VQp411zzZo1cnmXzmacjc7Qpi06ZcuWNacggLGSfCKAAAIIIIAAAggUZYGMBDCtWp5jui3lBaFBylRvKmX78K/H2mmF3VYJ9xw2PdwCo8csXPiqdPJmIctruf6GG0Rn5SpevLh/WH4DGA1EdBazuXPm+Hl1xR2/YssXOCDFhr5Qs/+AAVK6dOnAEe4LMwMJERvudNO2pSXiMLMr3DKlAYztehfVouSmp6qPVNdiPwIIIIAAAggggAACBSVQ6AGMthbc2qeP6bYUVWhtnRgx8jHp3KVLrumO7TiVqPeS6LnuuftuGTniUdNy8e7y96R8+fKBS2gwcnu/frJo0RuB/RrwPOnNzKUvxwwvbpe2cLes8LH6ckcNUl584QU/yW0t0rErOoYl1VKnTl3pcsXl0q5d+8iXZdp8+u6c/2kbLGu/226XOwYOlNdfe016dL/SHOoGctpCc9ddd+Z6344e84zXItXi7LPt6c2n2wIz5sknRVt73EXTL7qgjaxevVo08Bv+yKP+bHHucawjgAACCCCAAAIIIFCYAoUewNjC7927V3bs2CHbt2+TUiVLydfffGO6OJ1ao0ag1cUeX5CfOgZnj/cArq072nJStWrVAn341ne0FMspJgd+/NG8bFO7axX0on5ffPGFKX/lypUDwZpef+/efea9MRUrVgxceufOnfLdd99JSe/e93nB5IknnhhIZwMBBBBAAAEEEEAAgWwSyFgAk00olBUBBBBAAAEEEEAAAQSKpgABTNGsF0qFAAIIIIAAAggggAACEQIEMBEo7EIAAQQQQAABBBBAAIGiKVDoAUyFX5Q7pDv/dtfuwPHkxy/whYjZ4PvDfz/uV4TfD34/3O9D3Dq/H/x+uN8Rfj/4/XC/D3HrR9rvR/h+43wKOp0AJiQarhB+wPgBC31F8tzk+8MDkPsF4feD3w/3+xC3zu8Hvx/ud4TfD34/3O9D3Hqmfz/C14srX0GnE8CERMMVwg8IPyChr0iem3x/eABxvyD8fvD74X4f4tb5/eD3w/2O8PvB74f7fYhbz/TvR/h6ceUr6HQCmJBouEL4AeEHJPQVyXOT7w8PIO4XhN8Pfj/c70PcOr8f/H643xF+P/j9cL8PceuZ/v0IXy+ufAWdXugBTEEXmPMhgAACCCCAAAIIIIDAkStAAHPk1j13jgACCCCAAAIIIIBA1gkQwGRdlVFgBBBAAAEEEEAAAQSOXAECmCO37rlzBBBAAAEEEEAAAQSyToAAJuuqjAIjgAACCCCAAAIIIHDkChDAHLl1z50jgAACCCCAAAIIIJB1AgQwWVdlFBgBBBBAAAEEEEAAgSNXgADmyK177hwBBBBAAAEEEEAAgawTIIDJuiqjwAgggAACCCCAAAIIHLkCBDBHbt1z5wgggAACCCCAAAIIZJ0AAUzWVRkFRgABBBBAAAEEEEDgyBUggDly6547RwABBBBAAAEEEEAg6wQIYLKuyigwAggggAACCCCAAAJHrgABzJFb99w5AggggAACCCCAAAJZJ0AAk3VVRoERQAABBBBAAAEEEDhyBQhgjty6584RQAABBBBAAAEEEMg6AQKYrKsyCowAAggggAACCCCAwJErQABz5NY9d44AAggggAACCCCAQNYJEMBkXZVRYAQQQAABBBBAAAEEjlwBApgjt+65cwQQQAABBBBAAAEEsk6AACbrqowCI4AAAggggAACCCBw5AoQwBy5dc+dI4AAAggggAACCCCQdQIEMFlXZRQYAQQQQAABBBBAAIEjV4AA5site+4cAQQQQAABBBBAAIGsEyCAyboqo8AIIIAAAggggAACCBy5AgQwR27dc+cIIIAAAggggAACCGSdAAFM1lUZBUYAAQQQQAABBBBA4MgVIIA5cuueO0cAAQQQQAABBBBAIOsECGCyrsooMAIIIIAAAggggAACR64AAcyRW/fcOQIIIIAAAggggAACWSdAAJN1VUaBEUAAAQQQQAABBBA4cgUIYI7cuufOEUAAAQQQQAABBBDIOoEiHcDs379fDhw4IMWLF5cSJUpkHS4FRgABBBBAAAEEEEAAgYIVyHgAs3PnTtm6davs37dPSpcpIxXKl5fKVapEBig39e4tz0yZLG3btpXpM2ZKsWLFCvbuORsCCCCAAAIIIIAAAghklUDGApjdu3fLqCcelwcHD44Euu32/nLf/fdLTk6Onz6g/+3y1Nix0qFjR5k0eUrWBTAjRzwqM73AK6r16LjjjpMTqlaV2rVrS/Mzz5RGjRpFHudjsIIAAggggAACCCCAAAKSkQBGg5e2F10oq1evTkmurSzTnp9huovZg2wAk60tMLf16yvjx42zt5Pn57FeQDNv3nz5bZ06eR5HIgIIIIAAAggggAACR7JARgKYCePHS7++txrn1q3byLDhw+Xkk0+Wb73uZBs2bJCX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TAECmGTWK3eFAAIIIIAAAggggEAiBQhgElmt3BQCCCCAAAIIIIAAAskUIIBJZr1yVwgggAACCCCAAAIIJFKAACaR1cpNIYAAAggggAACCCCQTAECmGTWK3eFAAIIIIAAAggggEAiBQhgElmt3BQCCCCAAAIIIIAAAskUIIBJZr1yVwgggAACCCCAAAIIJFKAACaR1cpNIYAAAggggAACCCCQTAECmGTWK3eFAAIIIIAAAggggEAiBQhgElmt3BQCCCCAAAIIIIAAAskUIIBJZr1yVwgggAACCCCAAAIIJFKAACaR1cpNIYAAAggggAACCCCQTAECmGTWK3eFAAIIIIAAAggggEAiBQhgElmt3BQCCCCAAAIIIIAAAskUIIBJZr1yVwgggAACCCCAAAIIJFKAACaR1cpNIYAAAggggAACCCCQTAECmGTWK3eFAAIIIIAAAggggEAiBQhgElmt3BQCCCCAAAIIIIAAAskUIIBJZr1yVwgggAACCCCAAAIIJFKAACaR1cpNIYAAAggggAACCCCQTAECmGTWK3eFAAIIIIAAAggggEAiBQhgElmt3BQCCCCAAAIIIIAAAskUIIBJZr1yVwgggAACCCCAAAIIJFKAACaR1cpNIYAAAggggAACCCCQTAECmGTWK3eFAAIIIIAAAggggEAiBTISwOzbt0+6Xn65bN26NRfiMcccIxWOqiAVK1aUhg0byplnniW/Ou20XMexAwEEEEAAAQQQQAABBBDISACza9cuadXyHPlo/fp8ibfv0EEee/wJqVy5cr6O5yAEEEAAAQQQQAABBBA4MgQyEsB8//33cm7LlrJu3VqpXr26PP7EKKP7008/yTfffCMbN/5/8tyzz8rmzZt99ZNOOkneeXeZVPFaaApi2b9/v0wYP14++WSz1K79K/nD1VcXxGk5BwIIIIAAAggggAACCGRQIOMBzGWdOsnTkyZLTk5OrttcuPBV6dSxo7+/g7c+afIUKVasmL/v565oEHV2i7NMK1Dbtm1l+oyZBXLen1se8iGAAAIIIIAAAggggMChC2Q8gIkLHpYuWSK/u+hC/07eXb5c6tat52/blb1798rKFSvk0399anblSI6c9uvTpEGDhrmCI23l+Zd3XLtLL5VtX35pWoHmvDzP5CtRooT8v//3/+xp+UQAAQQQQAABBBBAAIEiLFDkAhjt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\n\" /></p>\n";

/***/ },
/* 551 */
/***/ function(module, exports) {

module.exports = "<p>An example with <code>SingleValueTooltip</code> &amp; <code>widthRatio</code> prop on <code>HistogramSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/AreaChartWithZoomPan.jsx\">source</a></p>\n";

/***/ },
/* 552 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/StackedBarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/df6a83dce5fdf71fc73e\">block</a>, <a href=\"http://plnkr.co/edit/gist:df6a83dce5fdf71fc73e?p=preview\">plunker</a></p>\n";

/***/ },
/* 553 */
/***/ function(module, exports) {

module.exports = "<p>Learn more about constructing a Stochastic Oscillator <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:stochastic_oscillator_fast_slow_and_full\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithFullStochasticsIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/3957c24595cc025eb3ef\">block</a>, <a href=\"http://plnkr.co/edit/gist:3957c24595cc025eb3ef?p=preview\">plunker</a></p>\n<p>this example also introduces a grid, look for <code>var showGrid = true;</code> in the example source.</p>\n";

/***/ },
/* 554 */
/***/ function(module, exports) {

module.exports = "<h4>SVG vs Canvas</h4>\n<p>When deciding on a web technology for charts - not just any charts, the ones which are highly responsive to interactions -  representing many many data points, the decision of performance is bound to come up, and HTML5 presents options.</p>\n<p>I am not going to debate between the pros and cons between SVG and Canvas. They are discussed at great length <a href=\"http://stackoverflow.com/questions/12310024/fast-and-responsive-interactive-charts-graphs-svg-canvas-other\">here</a> and <a href=\"http://stackoverflow.com/questions/5882716/html5-canvas-vs-svg-vs-div\">here</a>. Needless to say they are both very powerful and for charting, there really is no right answer.</p>\n<p>Using <code>svg</code> is very convenient from a developer standpoint. Easy to debug, even easier to style. Using css to style a chart is just too cool to pass. However there comes a point where performance &amp; memory become a bottleneck, especially in tablets/mobile (well in desktops too). Pan actions lag behind and not so responsive. and when looking at a lot of data points like the chart below, there are approx 300 DOM elements. and on pan action all these are updated to different <code>x</code>, <code>y</code>, <code>height</code> &amp; <code>width</code>. The time taken to calculate the new values on pan is negligible (&lt;10 ms) but when rendering them, you can see for yourself.</p>\n<p>Here is where <code>canvas</code> shines. Given this dilemma react-stockcharts provides 2 options.</p>\n<ul>\n<li>svg only</li>\n<li>svg and canvas</li>\n</ul>\n<p>Except the tooltip everything else, including the crosshair, axes, the chart series are all drawn on canvas. The tooltip I am retaining it in <code>svg</code> because of the ability to attach mouse hover and click event to the <code>svg</code> DOM. If there are better suggestions to use <code>canvas</code> for tooltip and also support click events and mouse hover state please share them.</p>\n<p>The SVG approach is best for server side rendering, while for browser side I recommend using the hybrid mode for improved responsiveness to pan actions.</p>\n<h4>DOM Manipulation</h4>\n<p>All SVG components use ReactJS, to create the svg elements, there is no DOM manipulation. For dealing with Canvas, since canvas is a DOM object, it has to be done via a <code>componentDidMount</code> / <code>componentDidUpdate</code></p>\n<hr>\n<p>Below you can see the improvements in responsiveness to pan actions when using the svg + canvas option</p>\n";

/***/ },
/* 555 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>create a line - click, mousemove, click\n<ul>\n<li>by default the line edge snaps to the nearest high or low, press Shift when you click to disable snap temporarily</li>\n</ul></li>\n<li>Once a line is drawn it gets out of draw mode automatically. To get back into draw mode again - Press D</li>\n<li>Delete the last drawn line - Press DEL</li>\n<li>Get out of draw mode - Press ESC</li>\n<li>When not in draw mode\n<ul>\n<li>click and drag the edges of the trend line, or the trend line itself</li>\n</ul></li>\n</ul>\n<p>More Work in progress to implement - modifying indicators after it is drawn - <a href=\"https://github.com/rrag/react-stockcharts/issues/94\">#94</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithInteractiveIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/63f666ef1159691d76cc\">block</a>, <a href=\"http://plnkr.co/edit/gist:63f666ef1159691d76cc?p=preview\">plunker</a></p>\n";

/***/ },
/* 556 */
/***/ function(module, exports) {

module.exports = "<p>This example illustrates how to push new data points or alter existing data points to a chart after initial render.</p>\n<p>When just update the <code>data={...}</code> on the <code>ChartCanvas</code> and see the new points</p>\n<p>A live example below, Here are a keys to press to see the push and alter data2</p>\n<table>\n<thead>\n<tr><th>key</th><th>outcome</th></tr>\n</thead>\n<tbody>\n<tr><td>1</td><td>push new data points</td></tr>\n<tr><td>0/Esc</td><td>stop all push/alter</td></tr>\n<tr><td>+</td><td>increase the speed</td></tr>\n<tr><td>-</td><td>reduce the speed</td></tr>\n</tbody>\n</table>\n<p>Look for the <a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithUpdatingData.jsx\">source</a></p>\n";

/***/ },
/* 557 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV2.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/0a54ca33b05001f17f8f\">block</a>, <a href=\"http://plnkr.co/edit/gist:0a54ca33b05001f17f8f?p=preview\">plunker</a></p>\n<pre><code class=\"language-js\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> format <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-format\"</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCanvas</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">400</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">margin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>left<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> right<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> bottom<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">seriesName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>MSFT<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">xScaleProvider</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2012</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2012</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span>d<span class=\"token punctuation\">.</span>high<span class=\"token punctuation\">,</span> d<span class=\"token punctuation\">.</span>low<span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>XAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span>/</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">origin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>w<span class=\"token punctuation\">,</span> h<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> h <span class=\"token operator\">-</span> <span class=\"token number\">150</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">150</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">tickFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".0s\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BarSeries</span> <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close <span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>open <span class=\"token operator\">?</span> <span class=\"token string\">\"#6BA583\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"red\"</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ChartCanvas</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p>The portion of interest here is</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">origin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>w<span class=\"token punctuation\">,</span> h<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> h <span class=\"token operator\">-</span> <span class=\"token number\">150</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">150</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p>the chart has a defined <code>height</code> of 150.</p>\n<p><code>origin</code> can be either a coordinate [x, y] or a function which returns a <code>[x, y]</code>, the default value is <code>[0, 0]</code></p>\n<p><code>(w, h) =&gt; [0, h - 150]</code> is the same as <code>function (w, h) { return [0, h - 150]; }</code></p>\n<p>given the <code>width</code> and <code>height</code> available inside the <code>ChartCanvas</code> as input, this function returns an origin of <code>[0, height - 150]</code> to draw the volume histogram</p>\n<p>Similarly the <code>fill</code> of <code>BarSeries</code> accepts either</p>\n<ul>\n<li>a function which returns a string representing the color</li>\n<li>or a string representing the color</li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BarSeries</span> <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fill</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>close <span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>open <span class=\"token operator\">?</span> <span class=\"token string\">\"#6BA583\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"red\"</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n</code></pre>\n<h4>Another Version</h4>\n<p>In this you can see how the volume histogram and the candlestick chart do not overlap.</p>\n";

/***/ },
/* 558 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV3.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/2dc9dd83567cd41c830a\">block</a>, <a href=\"http://plnkr.co/edit/gist:2dc9dd83567cd41c830a?p=preview\">plunker</a></p>\n";

/***/ },
/* 559 */
/***/ function(module, exports) {

module.exports = "<p>There are a couple of ways Volume histogram is usually displayed. Let us see them.</p>\n";

/***/ },
/* 560 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV1.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/88cd65baa331d57caa83\">block</a>, <a href=\"http://plnkr.co/edit/gist:88cd65baa331d57caa83?p=preview\">plunker</a></p>\n<pre><code class=\"language-js\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> format <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"d3-format\"</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCanvas</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">400</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">margin</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>left<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> right<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> bottom<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">seriesName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>MSFT<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">xScaleProvider</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">xExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2012</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token number\">2012</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span>d<span class=\"token punctuation\">.</span>high<span class=\"token punctuation\">,</span> d<span class=\"token punctuation\">.</span>low<span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>XAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span>/</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">id</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">yExtents</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>YAxis</span> <span class=\"token attr-name\">axisAt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">orient</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ticks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">tickFormat</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".0s\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BarSeries</span> <span class=\"token attr-name\">yAccessor</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> d<span class=\"token punctuation\">.</span>volume<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ChartCanvas</span><span class=\"token punctuation\">></span></span>\n\n</code></pre>\n<p>Look!!! there is more than one <code>Chart</code> there. Each <code>Chart</code> has different <code>yExtents</code> to indicate its domain.</p>\n<p>Remember all <code>Chart</code>s use the same <code>data</code> and <code>xScale</code> but each <code>Chart</code> has <code>yScale</code>.</p>\n<p>But… I don’t want the Volume chart to span the whole chart height. I got you covered.</p>\n";

/***/ },
/* 561 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/VolumeProfileBySessionChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/91f4d66273e693b2054161dc8ff170a2\">block</a>, <a href=\"http://plnkr.co/edit/gist:91f4d66273e693b2054161dc8ff170a2?p=preview\">plunker</a></p>\n";

/***/ },
/* 562 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/VolumeProfileChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/7be99030051fc80c070cfe5b7abf8c4f\">block</a>, <a href=\"http://plnkr.co/edit/gist:7be99030051fc80c070cfe5b7abf8c4f?p=preview\">plunker</a></p>\n";

/***/ },
/* 563 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/a8465abe0061df1b7976\">block</a>, <a href=\"http://plnkr.co/edit/gist:a8465abe0061df1b7976?p=preview\">plunker</a></p>\n<p>Click and drag the axis, to zoom on y &amp; x. Once y axis is zoomed you can pan the chart on both x &amp; y axis. Reset the y axis domain with the “Reset y domain” button</p>\n<p><code>mousemove</code>, <code>pan</code> and <code>zoom</code> are enabled by default. To disable them you can use <code>mouseMoveEvent</code>, <code>panEvent</code> and <code>zoomEvent</code> props.</p>\n<p><code>clamp</code> is disabled by default</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCanvas</span> \n    <span class=\"token attr-name\">...</span>\n    <span class=\"token attr-name\">mouseMoveEvent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">panEvent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">zoomEvent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">clamp</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">...</span>\n<span class=\"token punctuation\">/></span></span>\n</code></pre>\n";

/***/ },
/* 564 */,
/* 565 */,
/* 566 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_dsv__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_stylesheets_re_stock__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_stylesheets_re_stock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_stylesheets_re_stock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lib_navbar__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lib_sidebar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lib_main_container__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lib_menu_group__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lib_MenuItem__ = __webpack_require__(161);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var parseDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_time_format__["c" /* timeParse */])("%Y-%m-%d");
var parseDateTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_time_format__["c" /* timeParse */])("%Y-%m-%d %H:%M:%S");









var DOCUMENTATION = {
	head: "Documentation",
	pages: [
	// require("./lib/page/GettingStartedPage").default,
	// require("./lib/page/QuickStartExamplesPage").default,
	__webpack_require__(202).default, __webpack_require__(208).default, __webpack_require__(194).default, __webpack_require__(172).default, __webpack_require__(174).default]
};

var CHART_TYPES = {
	head: "Chart types",
	pages: [__webpack_require__(166).default, __webpack_require__(192).default, __webpack_require__(170).default, __webpack_require__(167).default, __webpack_require__(186).default, __webpack_require__(206).default, __webpack_require__(188).default, __webpack_require__(189).default, __webpack_require__(171).default, __webpack_require__(211).default,
	// TODO add OHLC chart
	__webpack_require__(187).default, __webpack_require__(191).default, __webpack_require__(203).default, __webpack_require__(205).default, __webpack_require__(197).default]
};

var CHART_FEATURES = {
	head: "Chart features",
	pages: [__webpack_require__(199).default, __webpack_require__(214).default, __webpack_require__(190).default, __webpack_require__(182).default, __webpack_require__(179).default, __webpack_require__(165).default, __webpack_require__(198).default, __webpack_require__(210).default, __webpack_require__(193).default, __webpack_require__(178).default, __webpack_require__(185).default]
};

var INDICATORS = {
	head: "Indicators",
	pages: [__webpack_require__(196).default, __webpack_require__(168).default, __webpack_require__(175).default, __webpack_require__(195).default, __webpack_require__(204).default, __webpack_require__(207).default, __webpack_require__(184).default, __webpack_require__(181).default, __webpack_require__(180).default, __webpack_require__(213).default, __webpack_require__(212).default]
};
var ALGORITHMIC_INDICATORS = {
	head: "Algorithmic Indicators",
	pages: [__webpack_require__(200).default, __webpack_require__(201).default]
};

var INTERACTIVE = {
	head: "Interactive",
	pages: [__webpack_require__(209).default, __webpack_require__(183).default, __webpack_require__(173).default, __webpack_require__(169).default]
};

var CUSTOMIZATION = {
	head: "Customization",
	pages: [__webpack_require__(177).default, __webpack_require__(176).default]
};

var ALL_PAGES = [DOCUMENTATION, CHART_TYPES, CHART_FEATURES, INDICATORS, ALGORITHMIC_INDICATORS, INTERACTIVE];

var pages = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_array__["k" /* merge */])(ALL_PAGES.map(function (_) {
	return _.pages;
}));

function compressString(string) {
	string = string.replace(/\s+/g, "_");
	string = string.replace(/[-&]/g, "_");
	string = string.replace(/_+/g, "_");
	string = string.replace(/[.]/g, "");
	string = string.toLowerCase();
	// console.log(string);
	return string;
}

function parseData(parse) {
	return function (d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

if (!window.Modernizr.fetch || !window.Modernizr.promises) {
	__webpack_require__.e/* nsure */(0/* duplicate */).then((function (require) {
		__webpack_require__(25);
		__webpack_require__(26);
		loadPage();
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
} else {
	loadPage();
}

function loadPage() {
	var promiseMSFT = fetch("data/MSFT.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_dsv__["a" /* tsvParse */])(data, parseData(parseDate));
	});
	var promiseMSFTfull = fetch("data/MSFT_full.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_dsv__["a" /* tsvParse */])(data, parseData(parseDate));
	});
	var promiseIntraDayContinuous = fetch("data/bitfinex_xbtusd_1m.csv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_dsv__["b" /* csvParse */])(data, parseData(parseDateTime));
	});
	var promiseIntraDayDiscontinuous = fetch("data/MSFT_INTRA_DAY.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_dsv__["a" /* tsvParse */])(data, parseData(function (d) {
			return new Date(+d);
		}));
	});
	var promiseCompare = fetch("data/comparison.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_dsv__["a" /* tsvParse */])(data, function (d) {
			d = parseData(parseDate)(d);
			d.SP500Close = +d.SP500Close;
			d.AAPLClose = +d.AAPLClose;
			d.GEClose = +d.GEClose;
			return d;
		});
	});
	var promiseBubbleData = fetch("data/bubble.json").then(function (response) {
		return response.json();
	});
	var promiseBarData = fetch("data/barData.json").then(function (response) {
		return response.json();
	});
	var promisegroupedBarData = fetch("data/groupedBarData.json").then(function (response) {
		return response.json();
	});

	Promise.all([promiseMSFT, promiseMSFTfull, promiseIntraDayContinuous, promiseIntraDayDiscontinuous, promiseCompare, promiseBubbleData, promiseBarData, promisegroupedBarData]).then(function (values) {
		var _values = _slicedToArray(values, 8),
		    MSFT = _values[0],
		    MSFTfull = _values[1],
		    intraDayContinuous = _values[2],
		    intraDayDiscontinuous = _values[3],
		    compareData = _values[4],
		    bubbleData = _values[5],
		    barData = _values[6],
		    groupedBarData = _values[7];

		var horizontalBarData = barData.map(function (_ref) {
			var x = _ref.x,
			    y = _ref.y;
			return { x: y, y: x };
		});
		var horizontalGroupedBarData = groupedBarData.map(function (d) {
			return {
				y: d.x,
				x1: d.y1,
				x2: d.y2,
				x3: d.y3,
				x4: d.y4
			};
		});

		renderPage(MSFT, MSFTfull, intraDayContinuous, intraDayDiscontinuous, compareData, bubbleData, barData, groupedBarData, horizontalBarData, horizontalGroupedBarData);
		// renderPartialPage(MSFT, MSFTfull, intraDayContinuous, intraDayDiscontinuous, compareData, bubbleData, barData, groupedBarData, horizontalBarData, horizontalGroupedBarData);
	});
}

function renderPage(data, dataFull, intraDayContinuous, intraDayDiscontinuous, compareData, bubbleData, barData, groupedBarData, horizontalBarData, horizontalGroupedBarData) {
	var selected = location.hash.replace("#/", "");
	var selectedPage = pages.filter(function (page) {
		return compressString(page.title) === compressString(selected);
	});

	var firstPage = selectedPage.length === 0 ? pages[0] : selectedPage[0];

	// console.log(selected, selectedPage, firstPage);

	var ExamplesPage = function (_React$Component) {
		_inherits(ExamplesPage, _React$Component);

		function ExamplesPage(props) {
			_classCallCheck(this, ExamplesPage);

			var _this = _possibleConstructorReturn(this, (ExamplesPage.__proto__ || Object.getPrototypeOf(ExamplesPage)).call(this, props));

			_this.handleRouteChange = _this.handleRouteChange.bind(_this);
			_this.state = {
				selectedPage: firstPage
			};
			return _this;
		}

		_createClass(ExamplesPage, [{
			key: "handleRouteChange",
			value: function handleRouteChange() {
				var selected = location.hash.replace("#/", "");
				var selectedPage = pages.filter(function (page) {
					return compressString(page.title) === compressString(selected);
				});
				if (selectedPage.length > 0) {
					this.setState({
						selectedPage: selectedPage[0]
					}, function (_) {
						return window.scrollTo(0, 0);
					});
				}
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("hashchange", this.handleRouteChange, false);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var Page = this.state.selectedPage;
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_lib_navbar__["a" /* default */], null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_9_lib_main_container__["a" /* default */],
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_8_lib_sidebar__["a" /* default */],
							null,
							ALL_PAGES.map(function (eachGroup, i) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									"div",
									{ key: i },
									__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										"h4",
										null,
										eachGroup.head
									),
									__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_10_lib_menu_group__["a" /* default */],
										null,
										eachGroup.pages.map(function (eachPage, idx) {
											return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_lib_MenuItem__["a" /* default */], { key: idx, current: eachPage === _this2.state.selectedPage, title: eachPage.title, anchor: compressString(eachPage.title) });
										})
									)
								);
							})
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Page, { someData: data,
							intraDayContinuousData: intraDayContinuous,
							intraDayDiscontinuousData: intraDayDiscontinuous,
							lotsOfData: dataFull,
							compareData: compareData,
							bubbleData: bubbleData,
							barData: barData,
							groupedBarData: groupedBarData,
							horizontalBarData: horizontalBarData,
							horizontalGroupedBarData: horizontalGroupedBarData })
					)
				);
			}
		}]);

		return ExamplesPage;
	}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

	__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExamplesPage, null), document.getElementById("chart-goes-here"));
}

function renderPartialPage(data, dataFull, intraDayContinuous, intraDayDiscontinuous, compareData, bubbleData, barData, groupedBarData, horizontalBarData, horizontalGroupedBarData) {

	// var Renko = require("./lib/charts/Renko").init(dataFull);
	// AreaChart
	// AreaChartWithYPercent
	// CandleStickChart
	// CandleStickStockScaleChart
	// CandleStickStockScaleChartWithVolumeBarV1
	// CandleStickStockScaleChartWithVolumeBarV2
	// CandleStickStockScaleChartWithVolumeBarV3
	// CandleStickChartWithCHMousePointer
	// CandleStickChartWithZoomPan
	// CandleStickChartWithMA
	// CandleStickChartWithBollingerBandOverlay
	// CandleStickChartWithEdge
	// CandleStickChartWithCompare
	// CandleStickChartWithEdge  - Lots of data -> data={dataFull}/>
	// CandleStickChartForDiscontinuousIntraDay - intraDayDiscontinuous
	// CandleStickChartWithAnnotation
	// CandleStickChartWithUpdatingData
	// KagiWithUpdatingData
	// RenkoWithUpdatingData
	// PointAndFigureWithUpdatingData
	// CandleStickChartWithMACDIndicator
	// CandleStickChartWithRSIIndicator
	// CandleStickChartWithFullStochasticsIndicator
	// CandleStickChartWithForceIndexIndicator
	// OHLCChartWithElderRayIndicator
	// OHLCChartWithElderImpulseIndicator
	// CandleStickChartWithInteractiveIndicator
	// CandleStickChartWithFibonacciInteractiveIndicator
	// CandleStickChartWithBrush
	// CandleStickChartWithClickHandlerCallback
	// CandleStickChartWithDarkTheme
	// AreaChartWithZoomPan
	// AreaChartWithPointsAndEdge
	// HeikinAshi
	// Kagi
	// PointAndFigure
	// Renko
	var Chart = __webpack_require__(95).default;
	var TypeChooser = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["helper"].TypeChooser;

	// data, dataFull, compareData

	var ExamplesPage = function (_React$Component2) {
		_inherits(ExamplesPage, _React$Component2);

		function ExamplesPage() {
			_classCallCheck(this, ExamplesPage);

			return _possibleConstructorReturn(this, (ExamplesPage.__proto__ || Object.getPrototypeOf(ExamplesPage)).apply(this, arguments));
		}

		_createClass(ExamplesPage, [{
			key: "render",
			value: function render() {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ type: "hybrid" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Chart, { data: intraDayDiscontinuous, type: type });
						}
					)
				);
			}
		}]);

		return ExamplesPage;
	}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

	/*
 				<TypeChooser type="svg">
 					{(type) => <Chart data={data} type={type} />}
 				</TypeChooser>
 */


	__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExamplesPage, null), document.getElementById("chart-goes-here"));
}

/***/ }
],[566]);
});
//# sourceMappingURL=react-stockcharts-documentation.4c2de9eee9e257ee315e.js.map