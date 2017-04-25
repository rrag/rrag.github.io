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
/* 22 */
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
/* 23 */,
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
/* 43 */
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
/* 44 */
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
/* 45 */,
/* 46 */
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
	var LENGTH = 330;

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
/* 47 */,
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
/* 71 */
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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABQCAQAAADykSIGAAAF1UlEQVR4Ae3df4zXdR3A8cfnvnccd7i7gwMiCCE6BzlwImVFpqgnykANZ66RawHTQJrnVizJymwENKUcJSBjsEqyJrIEQiHQSoutWBA4BYwLGCi/Tu7O7pDv/fj0R2vfHdx9J3ef7925vR9/v/577j6/vrfXO9IjgrhYkb4K0OR9jc4BEMUATHe7z/mEAkF3anLI3/3e85rbRvm4VSr1pOAV9zmUiXK17cq96+de8IbzChQrkdLihLQgSfmGSmlwRiug0Bh3qjJAjZvsJYoZ5W/KbfZVZ2XkGaifFm9rFiTnI4o1OOVCJdaZ5owJjkYx291sszvELjRYP41OCpJSZIgWx7S6WMomU2x1WxTfbqMaFWpdLM/HpJzUKEhGuRJn1WrfcLuVmxrFq822yCPaV6a/ejWCZAzTx3Fp7etjoflWRPEbPunTdnU4NkzacUEyRoocFmtf5FYv2hfFaQWKvN/h2Eixw4LuiJKnwgFNURwjL8vYCK2OCLrn8jVMNf+LUijdCy5f4UZfpn8mSn+14Ubfk4/EmWfdTJQRmbHwSNwjL4+Zt8IT/48yKuvYSUEuP7O0/X7SlPlLyTbWLElBH0OktKjXqIkLvjTGmRt9trGkBfkGKtLWOWc0k4kSZR0LcqFYscJ2fuTKRMk6FnSnTBQfWiHKEP9W7y+e95y0D6LUvab5jGbDnZcDIcr9nga8bYkVmmVzmW97UAngVtvkQIiy2mwZ/1Sl3kRjXWGoQVJa1Kl1yn67xX5sqIzvWSgHQpQtpuisp82RAyHKq67TWevcKwdClM2m6qxlquRAiLLIAp31davkQIgy0xqd9QdTNUlYiDLCHmU67wnzBQlHedFtuqLFp+wRJBjls3bqqvW+JEgwymqzdVXaEGcFiUU5ariuu9NGQUJRStVKwncsFiQUpcJbkrDUtwQJRRltvyQsN0+QUJThjkrCEgsECUXp65wkPOqHgoSi8I4huu4BKwSJRdlqsq4Lvz8mGuVhi3XdYKcFlxylwGilWuRpViCtSKMydQbbKE/XHDRDpEytYucUapKvRUqdg9KCDqOMV60OQLFhykGeRW7QNcs9q1mk1buOawRQapTdgg6jEBmjVEqMBu84BRjpdf103ikV3gMMMlQpYk1qHRDLKvylcFCD9txlvUjnxKZ7QXv6GS22W9DJ/5D8srX6unSt5lkpyEkUxllpoktz2GwvCxKNUmCsY04DmOwbJiv0Qeyy0q+kBQlHqfQSfukh9QBK3WCiq1UYKaWtFsdUe9NOrzksyEkUbvQbg+11vTptPWSpPG21+qYnBTmOwpV2Krno/xwne0nkYrEptgpyHIW5lqPKMhk73KR9fzJJkPMo+Q65HL/wU3vFRrvHo1IAjuJyAK1KNAhyHIUqTwLS6ANIe8YsrJYyE8+6RwpjHBDkPEqBLSpd6BXbLMYKzMUCU12Hq+wT5DwKhR43RwEyfm3fBVHGmdF9UUIU+KhbXKHASc2W9Y4oIUrGOHtDlA9/lCBECVGe0uLBEKWno3zBn7HO6xZjCR7GAmN9Bdd7VdCx9o8gyETJMpTNGjMxX6nvYoG0pVio1hNYa5b2BfnKFWurUY1mmShZhjpymcfNwT9MskElrhLbhx2m+6NrsNJ8/3Epwsav813Z9zXej5ywzQaft12e5ebhKQ9odYvXzHCjQR6x26UIu/GOJLMZ73cq/MwqMSL3qfKWL+qcsEWyuvftkAz7Vo/0vm2rYTPx2d63lzjs8D7f+zZ4hyMIWgkHEPSuKCXqNETxm8YYb084gKBXXL4m2GV/FK/1NY/5Qa+4fIUb/WO+b00U3+05p1Wo7/EbfXgkLvMv5e6K4iJbTLLB3eIefSQOL4+RjabZoTKKucY25dab5b0ee3kMn1lKPWOaGteqjmLyTfJbA5zxE5sc0BQOIOjWD5L9XOkOcw1Qo9Ieohj6mGCRSYKe9LL7M8fUQr6BprjZtUZJCbrTOdX+apNNkIkiHEDQm/wXb4bZSIeJkMcAAAAASUVORK5CYII="

/***/ },
/* 95 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
					xExtents: [new Date(2015, 0, 1), new Date(2015, 2, 1)] },
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;

var CandleStickChartWithZoomPan = function (_React$Component) {
	_inherits(CandleStickChartWithZoomPan, _React$Component);

	function CandleStickChartWithZoomPan() {
		_classCallCheck(this, CandleStickChartWithZoomPan);

		return _possibleConstructorReturn(this, (CandleStickChartWithZoomPan.__proto__ || Object.getPrototypeOf(CandleStickChartWithZoomPan)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithZoomPan, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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

	return CandleStickChartWithZoomPan;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CandleStickChartWithZoomPan.propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	ratio: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
	type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithZoomPan.defaultProps = {
	type: "svg"
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







var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var KagiSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].KagiSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			var kagiCalculator = kagi();
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

var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var PointAndFigureSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].PointAndFigureSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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







var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var RenkoSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].RenkoSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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
/* 159 */
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
/* 160 */
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
/* 162 */
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
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithAnnotation__ = __webpack_require__(235);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(503) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = AnnotationsPage;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_charts_AreaChart__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_AreaChartWithYPercent__ = __webpack_require__(228);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(504) } })
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_BarChart__ = __webpack_require__(230);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(505) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BarChartPage;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithBollingerBandOverlay__ = __webpack_require__(236);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(506) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BollingerBandOverlayPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithBrush__ = __webpack_require__(237);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(507) } })
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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_BubbleChart__ = __webpack_require__(231);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(508) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BubbleChartPage;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickChart__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickStockScaleChart__ = __webpack_require__(249);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(510) } })
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(509) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_lib_row__["a" /* default */],
				{ title: "stocktime scale" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(522) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = CandleStickChartPage;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(511) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = BreakingChangesPage;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithClickHandlerCallback__ = __webpack_require__(239);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(512) } })
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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(513) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = ComingSoonPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithCompare__ = __webpack_require__(240);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(514) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = CompareWithPage;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(516) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = CreatingCustomChartSeriesPage;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(515) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = CreatingCustomIndicatorPage;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithDarkTheme__ = __webpack_require__(59);
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var DarkThemePage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "DarkThemePage",

	statics: {
		title: "Theme - Dark"
	},
	saveChartAsImage: function saveChartAsImage(e) {
		var container = __WEBPACK_IMPORTED_MODULE_0_react___default.a.findDOMNode(this.refs.container);
		SaveChartAsImage.saveChartAsImage(container);
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: DarkThemePage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(517) } })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2, className: "dark" },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithDarkTheme__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = DarkThemePage;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithEdge__ = __webpack_require__(97);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(518) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = EdgeCoordinatesPage;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_OHLCChartWithElderImpulseIndicator__ = __webpack_require__(261);
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
/* 179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_OHLCChartWithElderRayIndicator__ = __webpack_require__(262);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(520) } })
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
/* 180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartForDiscontinuousIntraDay__ = __webpack_require__(95);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(530) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = IntraDayContinuousDataPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithFibonacciInteractiveIndicator__ = __webpack_require__(241);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(521) } })
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
/* 182 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithForceIndexIndicator__ = __webpack_require__(242);
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var ForceIndexIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "ForceIndexIndicatorPage",

	statics: {
		title: "ForceIndex"
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: ForceIndexIndicatorPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(523) } })
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
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithForceIndexIndicator__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = ForceIndexIndicatorPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_GroupedBarChart__ = __webpack_require__(253);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(524) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = GroupedBarChartPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_HeikinAshi__ = __webpack_require__(254);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(525) } })
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
/* 185 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_HorizontalBarChart__ = __webpack_require__(255);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(526) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = HorizontalBarChartPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_HorizontalStackedBarChart__ = __webpack_require__(256);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(527) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = HorizontalBarChartPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartForContinuousIntraDay__ = __webpack_require__(233);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(529) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = IntraDayContinuousDataPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_Kagi__ = __webpack_require__(100);
'use strict';










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var KagiPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "KagiPage",

	statics: {
		title: 'Kagi'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: KagiPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(531) } })
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
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_Kagi__["a" /* default */], { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = KagiPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_LineAndScatterChart__ = __webpack_require__(258);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(542) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = LineAndScatterChartPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartPanToLoadMore__ = __webpack_require__(234);
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
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithEdge__ = __webpack_require__(97);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(532) } })
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
/* 192 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithMACDIndicator__ = __webpack_require__(98);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(535) } })
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
/* 193 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithMA__ = __webpack_require__(246);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(537) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = MAOverlayPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_AreaChartWithZoomPan__ = __webpack_require__(229);
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
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithHoverTooltip__ = __webpack_require__(244);
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var AnnotationsPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "AnnotationsPage",

	statics: {
		title: "Hover Tooltip"
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
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithHoverTooltip__["a" /* default */], { data: _this.props.someData, type: type });
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(528) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = AnnotationsPage;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickChartWithCHMousePointer__ = __webpack_require__(238);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(536) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = MousePointerPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_MovingAverageCrossOverAlgorithmV1__ = __webpack_require__(259);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(533) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = AnnotationsPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_MovingAverageCrossOverAlgorithmV2__ = __webpack_require__(260);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(534) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = MovingAverageCrossoverAlgorithmPage2;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(538) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = OverviewPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_PointAndFigure__ = __webpack_require__(101);
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
/* 201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithRSIIndicator__ = __webpack_require__(247);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(541) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = RSIIndicatorPage;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_Renko__ = __webpack_require__(102);
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
/* 203 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_StackedBarChart__ = __webpack_require__(265);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(544) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = StackedBarChartPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithFullStochasticsIndicator__ = __webpack_require__(243);
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;
var SaveChartAsImage = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].SaveChartAsImage;


var StochasticIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "StochasticIndicatorPage",

	statics: {
		title: "Stochastic Oscillator"
	},
	saveChartAsImage: function saveChartAsImage(e) {
		var container = __WEBPACK_IMPORTED_MODULE_0_react___default.a.findDOMNode(this.refs.container);
		SaveChartAsImage.saveChartAsImage(container);
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: StochasticIndicatorPage.title },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_lib_row__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4_lib_section__["a" /* default */],
					{ colSpan: 2 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"button",
						{ type: "button", className: "btn btn-success btn-lg pull-right", onClick: this.saveChartAsImage },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "glyphicon glyphicon-floppy-save", "aria-hidden": "true" })
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithFullStochasticsIndicator__["a" /* default */], { data: _this.props.someData, type: type });
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

/* harmony default export */ exports["default"] = StochasticIndicatorPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithZoomPan__ = __webpack_require__(99);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(546) } })
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
/* 206 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithInteractiveIndicator__ = __webpack_require__(245);
"use strict";










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;
var SaveChartAsImage = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].SaveChartAsImage;


var TrendLineInteractiveIndicatorPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "TrendLineInteractiveIndicatorPage",

	statics: {
		title: "Trendline"
	},
	saveChartAsImage: function saveChartAsImage(e) {
		var container = __WEBPACK_IMPORTED_MODULE_0_react___default.a.findDOMNode(this.refs.container);
		SaveChartAsImage.saveChartAsImage(container);
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: TrendLineInteractiveIndicatorPage.title },
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
						"button",
						{ type: "button", className: "btn btn-success btn-lg pull-right", onClick: this.saveChartAsImage },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "glyphicon glyphicon-floppy-save", "aria-hidden": "true" })
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithInteractiveIndicator__["a" /* default */], { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = TrendLineInteractiveIndicatorPage;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithUpdatingData__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lib_charts_KagiWithUpdatingData__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lib_charts_PointAndFigureWithUpdatingData__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lib_charts_RenkoWithUpdatingData__ = __webpack_require__(264);
'use strict';













var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var UpdatingDataPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "UpdatingDataPage",

	statics: {
		title: 'Updating Data'
	},
	render: function render() {
		var _this = this;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_lib_content_section__["a" /* default */],
			{ title: UpdatingDataPage.title },
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
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_lib_charts_PointAndFigureWithUpdatingData__["a" /* default */], { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = UpdatingDataPage;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_charts_CandleStickStockScaleChartWithVolumeBarV1__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickStockScaleChartWithVolumeBarV2__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lib_charts_CandleStickStockScaleChartWithVolumeBarV3__ = __webpack_require__(252);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(550) } })
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(551) } })
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(548) } })
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(549) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = VolumeBarPage;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_VolumeProfileBySessionChart__ = __webpack_require__(266);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(552) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = VolumeProfileBySessionPage;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_VolumeProfileChart__ = __webpack_require__(267);
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(553) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = VolumeProfilePage;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_content_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_row__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithZoomPan__ = __webpack_require__(99);
'use strict';










var TypeChooser = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["helper"].TypeChooser;


var ZoomAndPanPage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: "ZoomAndPanPage",

	statics: {
		title: 'Zoom and Pan'
	},
	render: function render() {
		var _this = this;

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
						{ ref: "container" },
						function (type) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_lib_charts_CandleStickChartWithZoomPan__["a" /* default */], { data: _this.props.someData, type: type });
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(554) } })
				)
			)
		);
	}
});

/* harmony default export */ exports["default"] = ZoomAndPanPage;

/***/ },
/* 212 */
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
/* 227 */
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
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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
/* 228 */
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
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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
/* 229 */
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







var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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
/* 230 */
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
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var unsortedData = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 231 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(13);
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










var ScatterSeries = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["series"].ScatterSeries;
var CircleMarker = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["series"].CircleMarker;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["coordinates"].MouseCoordinateY;
var XAxis = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var unsortedData = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 232 */
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
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var type = _props.type;
			var width = _props.width;
			var data = _props.data;
			var ratio = _props.ratio;

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
/* 233 */
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









var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["series"].AreaSeries;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 234 */
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








var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProviderBuilder = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProviderBuilder;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;
var head = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["utils"].head;
var last = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["utils"].last;


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

		var _indexCalculator = indexCalculator(calculatedData);

		var index = _indexCalculator.index;
		var interval = _indexCalculator.interval;
		/* SERVER - END */

		var xScaleProvider = discontinuousTimeScaleProviderBuilder().withIndex(index).withInterval(interval);

		var _xScaleProvider = xScaleProvider(calculatedData.slice(-LENGTH_TO_SHOW));

		var linearData = _xScaleProvider.data;
		var xScale = _xScaleProvider.xScale;
		var xAccessor = _xScaleProvider.xAccessor;
		var displayXAccessor = _xScaleProvider.displayXAccessor;

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
			var _state = this.state;
			var prevData = _state.data;
			var ema26 = _state.ema26;
			var ema12 = _state.ema12;
			var macdCalculator = _state.macdCalculator;
			var smaVolume50 = _state.smaVolume50;
			var inputData = this.props.data;


			if (inputData.length === prevData.length) return;

			var rowsToDownload = end - Math.ceil(start);

			var maxWindowSize = getMaxUndefined([ema26, ema12, macdCalculator, smaVolume50]);

			/* SERVER - START */
			var dataToCalculate = inputData.slice(-rowsToDownload - maxWindowSize - prevData.length, -prevData.length);

			var calculatedData = ema26(ema12(macdCalculator(smaVolume50(dataToCalculate))));
			var indexCalculator = discontinuousTimeScaleProviderBuilder().initialIndex(Math.ceil(start)).indexCalculator();

			var _indexCalculator2 = indexCalculator(calculatedData.slice(-rowsToDownload).concat(prevData));

			var index = _indexCalculator2.index;
			var interval = _indexCalculator2.interval;
			/* SERVER - END */

			var xScaleProvider = discontinuousTimeScaleProviderBuilder().initialIndex(Math.ceil(start)).withIndex(index).withInterval(interval);

			var _xScaleProvider2 = xScaleProvider(calculatedData.slice(-rowsToDownload).concat(prevData));

			var linearData = _xScaleProvider2.data;
			var xScale = _xScaleProvider2.xScale;
			var xAccessor = _xScaleProvider2.xAccessor;
			var displayXAccessor = _xScaleProvider2.displayXAccessor;

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
			var _props = this.props;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;
			var _state2 = this.state;
			var data = _state2.data;
			var ema26 = _state2.ema26;
			var ema12 = _state2.ema12;
			var macdCalculator = _state2.macdCalculator;
			var smaVolume50 = _state2.smaVolume50;
			var xScale = _state2.xScale;
			var xAccessor = _state2.xAccessor;
			var displayXAccessor = _state2.displayXAccessor;


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
/* 235 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var Annotate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Annotate;
var LabelAnnotation = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].LabelAnnotation;
var Label = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Label;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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

			var yAxisLabelX = width - margin.left - 40;
			var yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

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
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CrossHairCursor, null)
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
/* 236 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var BollingerSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BollingerSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var BollingerBandTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].BollingerBandTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var bollingerBand = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].bollingerBand;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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
/* 240 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var CompareSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CompareSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var compare = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].compare;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;
var FibonacciRetracement = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].FibonacciRetracement;
var TrendLine = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].TrendLine;

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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var RSISeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].RSISeries;
var StraightLine = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].StraightLine;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip;
var RSITooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].RSITooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
//console.log(indicator);

var forceIndex = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].forceIndex;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 243 */
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
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3__src___["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3__src___["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].MovingAverageTooltip;
var StochasticTooltip = __WEBPACK_IMPORTED_MODULE_3__src___["tooltip"].StochasticTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3__src___["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3__src___["axes"].YAxis;
var stochasticOscillator = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].stochasticOscillator;
var ema = __WEBPACK_IMPORTED_MODULE_3__src___["indicator"].ema;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var HoverTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].HoverTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;


var dateFormat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_time_format__["a" /* timeFormat */])("%Y-%m-%d");
var numberFormat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(".2f");

function tooltipContent(calculators) {
	return function (_ref) {
		var currentItem = _ref.currentItem;
		var xAccessor = _ref.xAccessor;

		return {
			x: dateFormat(xAccessor(currentItem)),
			y: [{ label: "open", value: numberFormat(currentItem.open) }, { label: "high", value: numberFormat(currentItem.high) }, { label: "low", value: numberFormat(currentItem.low) }, { label: "close", value: numberFormat(currentItem.close) }].concat(calculators.map(function (each) {
				return {
					label: each.tooltipLabel(),
					value: numberFormat(each.accessor()(currentItem)),
					stroke: each.stroke()
				};
			}))
		};
	};
}

var CandleStickChartWithHoverTooltip = function (_React$Component) {
	_inherits(CandleStickChartWithHoverTooltip, _React$Component);

	function CandleStickChartWithHoverTooltip() {
		_classCallCheck(this, CandleStickChartWithHoverTooltip);

		return _possibleConstructorReturn(this, (CandleStickChartWithHoverTooltip.__proto__ || Object.getPrototypeOf(CandleStickChartWithHoverTooltip)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithHoverTooltip, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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

			var annotationProps = {
				fontFamily: "Glyphicons Halflings",
				fontSize: 20,
				fill: "#060F8F",
				opacity: 0.8,
				text: "\uE093",
				y: function y(_ref2) {
					var yScale = _ref2.yScale;
					return yScale.range()[0] - 10;
				}
			};

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40;
			var yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
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
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HoverTooltip, { chartId: 1, yAccessor: ema50.accessor(), tooltipContent: tooltipContent([ema20, ema50]), bgwidth: 120, bgheight: 95 })
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var fitWidth = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["helper"].fitWidth;
var Interactive = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].Interactive;
var TrendLine = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["interactive"].TrendLine;

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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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
/* 246 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var RSISeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].RSISeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip;
var RSITooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].RSITooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var rsi = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].rsi;
var atr = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].atr;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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
/* 248 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CandleStickChartWithMACDIndicator__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__ = __webpack_require__(46);
"use strict";




var CandleStickChartWithUpdatingData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__CandleStickChartWithMACDIndicator__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = CandleStickChartWithUpdatingData;

/***/ },
/* 249 */
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
var XAxis = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_1_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var type = _props.type;
			var data = _props.data;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 250 */
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






var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 251 */
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






var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

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
/* 252 */
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






var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["series"].BarSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var XAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_2_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 253 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_collection__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var GroupedBarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].GroupedBarSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 254 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var heikinAshi = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].heikinAshi;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 255 */
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
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 256 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_collection__ = __webpack_require__(13);
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
var XAxis = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_4_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 257 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Kagi__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__ = __webpack_require__(46);
"use strict";




var KagiWithUpdatingData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__Kagi__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = KagiWithUpdatingData;

/***/ },
/* 258 */
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







var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var ScatterSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].ScatterSeries;
var CircleMarker = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CircleMarker;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["ChartCanvas"],
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						} }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScatterSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						}, marker: CircleMarker, markerProps: { r: 3 } }),
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
/* 259 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var Annotate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Annotate;
var LabelAnnotation = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].LabelAnnotation;
var Label = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Label;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
				var _ref2 = _slicedToArray(_ref, 2);

				var prev = _ref2[0];
				var now = _ref2[1];
				var prevShortTerm = prev.ema20;
				var prevLongTerm = prev.ema50;
				var nowShortTerm = now.ema20;
				var nowLongTerm = now.ema50;

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
					var yScale = _ref3.yScale;
					var datum = _ref3.datum;
					return yScale(datum.low) + 20;
				},
				tooltip: "Go long"
			});

			var shortAnnotationProps = _extends({}, defaultAnnotationProps, {
				fill: "#E20000",
				text: "\uE094",
				y: function y(_ref4) {
					var yScale = _ref4.yScale;
					var datum = _ref4.datum;
					return yScale(datum.high);
				},
				tooltip: "Go short"
			});

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40;
			var yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

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
/* 260 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var Annotate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Annotate;
var SvgPathAnnotation = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].SvgPathAnnotation;
var Label = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].Label;
var buyPath = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].buyPath;
var sellPath = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["annotation"].sellPath;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
				var _ref2 = _slicedToArray(_ref, 2);

				var prev = _ref2[0];
				var now = _ref2[1];
				var prevShortTerm = prev.ema20;
				var prevLongTerm = prev.ema50;
				var nowShortTerm = now.ema20;
				var nowLongTerm = now.ema50;

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
					var yScale = _ref3.yScale;
					var datum = _ref3.datum;
					return yScale(datum.low);
				},
				fill: "#006517",
				path: buyPath,
				tooltip: "Go long"
			});

			var shortAnnotationProps = _extends({}, defaultAnnotationProps, {
				y: function y(_ref4) {
					var yScale = _ref4.yScale;
					var datum = _ref4.datum;
					return yScale(datum.high);
				},
				fill: "#FF0000",
				path: sellPath,
				tooltip: "Go short"
			});

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40;
			var yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

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







var OHLCSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].OHLCSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var MACDSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].MACDSeries;
var ElderImpulseBackground = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].ElderImpulseBackground;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var MACDTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MACDTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var elderImpulse = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].elderImpulse;
var change = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].change;
var macd = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].macd;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 262 */
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







var OHLCSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].OHLCSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var ElderRaySeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].ElderRaySeries;
var StraightLine = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].StraightLine;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var SingleValueTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].SingleValueTooltip;
var RSITooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].RSITooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var elderRay = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].elderRay;
var change = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].change;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ElderRaySeries, { calculator: elder }),
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
/* 263 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PointAndFigure__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__ = __webpack_require__(46);
"use strict";




var PointAndFigureWithUpdatingData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__PointAndFigure__["a" /* default */]);

/* harmony default export */ exports["a"] = PointAndFigureWithUpdatingData;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Renko__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__ = __webpack_require__(46);
"use strict";




var RenkoWithUpdatingData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__updatingDataWrapper__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__Renko__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = RenkoWithUpdatingData;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_collection__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__ = __webpack_require__(2);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var StackedBarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].StackedBarSeries;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var VolumeProfileSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].VolumeProfileSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var change = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].change;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 267 */
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







var CandlestickSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].CandlestickSeries;
var BarSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].BarSeries;
var LineSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].LineSeries;
var AreaSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].AreaSeries;
var VolumeProfileSeries = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["series"].VolumeProfileSeries;
var discontinuousTimeScaleProvider = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["scale"].discontinuousTimeScaleProvider;
var EdgeIndicator = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].EdgeIndicator;
var CrossHairCursor = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CrossHairCursor;
var MouseCoordinateX = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateX;
var MouseCoordinateY = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].MouseCoordinateY;
var CurrentCoordinate = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["coordinates"].CurrentCoordinate;
var OHLCTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].OHLCTooltip;
var MovingAverageTooltip = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["tooltip"].MovingAverageTooltip;
var XAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].XAxis;
var YAxis = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["axes"].YAxis;
var ema = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].ema;
var sma = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].sma;
var change = __WEBPACK_IMPORTED_MODULE_3_react_stockcharts__["indicator"].change;
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
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


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
/* 503 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithAnnotation.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/46a2db7be6336500bedee27f5fa08713\">block</a>, <a href=\"http://plnkr.co/edit/gist:46a2db7be6336500bedee27f5fa08713?p=preview\">plunker</a></p>\n";

/***/ },
/* 504 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/AreaChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b9658ffa431f1ffb8d6b\">block</a>, <a href=\"http://plnkr.co/edit/gist:b9658ffa431f1ffb8d6b?p=preview\">plunker</a></p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2011-01-24</td><td>5743.25</td></tr>\n<tr><td>2011-01-25</td><td>5687.4</td></tr>\n<tr><td>2011-01-27</td><td>5604.3</td></tr>\n<tr><td>2011-01-28</td><td>5512.15</td></tr>\n<tr><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> timeParse <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-time-format\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> tsv <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-request\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> scaleTime <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-scale\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> format <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-format\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >var</span> parseDate <span class=\"token operator\" >=</span> <span class=\"token function\" >timeParse</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"%Y-%m-%d\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token function\" >tsv</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"path/to/data.tsv\"</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span>err<span class=\"token punctuation\" >,</span> data<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    data<span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >,</span> i<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        d<span class=\"token punctuation\" >.</span>date <span class=\"token operator\" >=</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token function\" >parseDate</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >getTime</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>svg<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScale</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >scaleTime</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2011</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2013</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>AreaSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>Let us review each line</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>svg<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScale</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >scaleTime</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2011</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2013</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>Creates an <code>svg</code> element with the provided <code>height</code> and <code>width</code> and creates a <code>svg:g</code> element with the provided <code>margin</code>. and <code>data</code> is used to plot.</p>\n<ul>\n<li><p><code>xAccessor</code> is self explanatory</p></li>\n<li><p><code>xScale</code> knowledge of d3 <a href=\"https://github.com/mbostock/d3/wiki/Scales\">scales</a> will certainly help. For starters, it is easier to understand scale as a function which converts a <code>domain</code> say 2011-01-01 to 2013-01-02 to a <code>range</code> say 0 to 500 pixels. This scale can now interpolate an input date to a value in pixels. <code>d3.scaleTime()</code> is a linear time scale</p></li>\n<li><p><code>xExtents</code> is the start and end points to show on initial render. This is an optional prop</p></li>\n<li><p><code>seriesName</code> this does not add value to this simple chart, you will see its use explained better later in the <a href=\"#/zoom_and_pan\">zoom and pan</a> section</p></li>\n<li><p><code>type</code> can take 2 values <code>svg</code> or <code>hybrid</code>.</p>\n<p>Choosing <code>svg</code> will create the entire chart using <code>svg</code> elements\nChoosing <code>hybrid</code> will create the contents of the <code>DataSeries</code> using <code>canvas</code> but the axis and other elements are <code>svg</code></p>\n<p>So irrespective of what type you choose, you will have a <code>svg</code> element</p></li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>There can be one or more <code>Chart</code>s in each <code>ChartCanvas</code> and hence the need for an <code>id</code> attribute.</p>\n<p><code>Chart</code> also takes an optional prop <code>yScale</code> which defaults to <code>d3.scaleLinear()</code></p>\n<p>With SVG &amp; Canvas it is important to understand the coordinate system and where the origin <code>(0, 0)</code> is located. for a SVG of size 300x100, the</p>\n<p><img src=\"http://www.w3.org/TR/SVG/images/coords/InitialCoords.png\" alt=\"alt text\" title=\"SVG/Canvas coordinate system\"></p>\n<p>For more details about the coordinate system see <a href=\"http://www.w3.org/TR/SVG/coords.jsx\">here</a></p>\n<p>Back to scales,</p>\n<p>X Axis uses a time scale\nA time scale converts a date/time domain to a range, this is used as the xScale, the xDomain is calculated from the input <code>data</code> and the <code>xExtents</code> prop, and the range is calculated as <code>width - margin.left - margin.right</code>.</p>\n<p>Y Axis uses a linear scale\nA Linear scale converts a <code>domain</code> say 10 - 45 to a <code>range</code> say 0 to 300 pixels. Like the name represents the data in between is interpolated linear.</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>The <code>ticks</code> attribute simple passes on the value to the scale, the <code>XAxis</code> also has the following optional attributes <code>innerTickSize, outerTickSize, tickFormat, tickPadding, tickSize, ticks, tickValues</code> all of which correspond to a function with the same name in <a href=\"https://github.com/d3/d3-axis\">d3-axis</a>.</p>\n<p><code>axisAt</code> takes on possible values as <code>top, middle, bottom</code> for advanced cases, you can also pass in a number indicating the pixel position where the axis has to be drawn.</p>\n<p><code>orient</code> takes on possible values as <code>top, bottom</code>, this orients the axis ticks on the top/bottom</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>Similar to <code>XAxis</code> except left/right instead of top/bottom</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>AreaSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p><code>yAccessor</code> is self explanatory</p>\n<h3>Highly customizable you say, how?</h3>\n<p>So you don’t want to display the <code>YAxis</code> at all, go ahead and just remove that.</p>\n<p>Want to display <code>YAxis</code> on both left and right? add</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>next to the existing <code>YAxis</code></p>\n<p>Want to add a <code>YAxis</code> with a percent scale on the right? add</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percentScale</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >true</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tickFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".0%\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>and you get.</p>\n";

/***/ },
/* 505 */
/***/ function(module, exports) {

module.exports = "<p>and a simple bar chart too</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/BarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b87d124b8879c671f140\">block</a>, <a href=\"http://plnkr.co/edit/gist:b87d124b8879c671f140?p=preview\">plunker</a></p>\n";

/***/ },
/* 506 */
/***/ function(module, exports) {

module.exports = "<p>Learn more about constructing a Bollinger Band <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:bollinger_bands\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithBollingerBandOverlay.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b993d5fcc5c09dd66a6e\">block</a>, <a href=\"http://plnkr.co/edit/gist:b993d5fcc5c09dd66a6e?p=preview\">plunker</a></p>\n";

/***/ },
/* 507 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>click to start, move to the end and click again</li>\n<li>Types of Brush\n<ul>\n<li>1D (default)</li>\n<li>2D</li>\n</ul></li>\n</ul>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithBrush.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/11c28c8e6612055ba8a7\">block</a>, <a href=\"http://plnkr.co/edit/gist:11c28c8e6612055ba8a7?p=preview\">plunker</a> of this example, search for <code>handleBrush</code> to see how to make the chart zoom in on brush complete</p>\n";

/***/ },
/* 508 */
/***/ function(module, exports) {

module.exports = "<p>Inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a> <a href=\"https://d3fc.io/examples/bubble/index.html\">example</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/BubbleChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/cb4bb2831987d787a98c\">block</a>, <a href=\"http://plnkr.co/edit/gist:cb4bb2831987d787a98c?p=preview\">plunker</a></p>\n";

/***/ },
/* 509 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/1eac0cb78f27b31415ac\">block</a>, <a href=\"http://plnkr.co/edit/gist:1eac0cb78f27b31415ac?p=preview\">plunker</a></p>\n<p>That is better. let us see how to create it</p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>open</th><th>high</th><th>low</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2013-08-16</td><td>5705.45</td><td>5716.6</td><td>5496.05</td><td>5507.85</td></tr>\n<tr><td>2013-08-19</td><td>5497.55</td><td>5499.65</td><td>5360.65</td><td>5414.75</td></tr>\n<tr><td>2013-08-20</td><td>5353.45</td><td>5417.8</td><td>5306.35</td><td>5401.45</td></tr>\n<tr><td>…</td><td>…</td><td>…</td><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> timeParse <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-time-format\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> tsv <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-request\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >var</span> parseDate <span class=\"token operator\" >=</span> <span class=\"token function\" >timeParse</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"%Y-%m-%d\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token function\" >tsv</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"path/to/data.tsv\"</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span>err<span class=\"token punctuation\" >,</span> data<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    data<span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >,</span> i<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        d<span class=\"token punctuation\" >.</span>date <span class=\"token operator\" >=</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token function\" >parseDate</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >getTime</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>open<span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>high <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>low <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>type<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScaleProvider</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>Compare this with the simpler <code>AreaChart</code> example from before</p>\n<pre><code class=\"language-js\">xScaleProvider<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span>\n</code></pre>\n<p>is the only difference in <code>&lt;ChartCanvas&gt;</code></p>\n<p><code>xScale</code> is replaced with <code>xScaleProvider</code>, <code>discontinuousTimeScaleProvider</code> is a function which takes some pre calculated values and the data array to return a scale that removes the discontinuity, to and show a linear scale</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<ul>\n<li><code>yExtents</code> can accept\n<ul>\n<li>a function which returns a number / an object / an array of numbers. The min and max value of these are used to calculate the y domain</li>\n<li>an array of functions - same as above</li>\n<li>min and max values as number. Say you always want to show the y domain between 0 and 100, you may say <code>yExtents={[0, 100]}</code></li>\n</ul></li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>Same as for <code>AreaChart</code> example.</p>\n";

/***/ },
/* 510 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b13b739458e65ff93f4a\">block</a>, <a href=\"http://plnkr.co/edit/gist:b13b739458e65ff93f4a?p=preview\">plunker</a></p>\n<p>well, that looks ok, but something is not right. Look closer, you will find that the candles are not spread at regular intervals, there is a gap of say 2 candles every so often. That gap is because the data is plot on a continuous time scale, and a continuous time scale has week ends and national holidays, days when trading does not happen. Now we don’t want to show non trading days on the chart. If it is an intra day chart, you want to see only 9:30 AM to 4:00 PM (or 1:00 PM if it is holiday hours)</p>\n<p>What we need here is to show time that is not continuous on the x axis. Enter <strong>financetime scale</strong>.</p>\n";

/***/ },
/* 511 */
/***/ function(module, exports) {

module.exports = "<h2>v0.6.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><code>EventCapture</code> is now removed. This is because starting <code>0.6</code> zoom actions can happen by drag on the x/y axis also, and that is a separate container, so having a single <code>EventCapture</code> is not possible</li>\n<li><code>CurrentCoordinate</code>, <code>MouseCoordinateX</code>, <code>MouseCoordinateY</code> no longer require an <code>id</code> prop</li>\n<li><code>TooltipContainer</code> is removed and all the tooltips (<code>OHLCTooltip</code>, <code>MovingAverageTooltip</code>)  are now moved inside the <code>Chart</code> relative to which you specify the origin. This also makes the <code>forChart</code> prop on the different <code>XXXTooltip</code> unnecessary</li>\n</ol>\n<h4>New features</h4>\n<ol>\n<li>Zoom on y</li>\n<li>Pan on y</li>\n<li>Support for pan to load more data</li>\n<li>Click, Right click, Doubleclick handlers on <code>LineSeries</code> - This can serve as a model for other series</li>\n</ol>\n<h4>Internal Changes</h4>\n<ol>\n<li>Upgrade to <code>d3</code> individual modules</li>\n</ol>\n<h2>v0.5.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><p>Removed <code>financeEODDiscontinuousScale</code> and replaced by a new discontinuous scale which supports both eod and intraday - Thank you <a href=\"https://github.com/brobits\">@brobits</a></p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...\n     discontinous xScale={financeEODDiscontinuousScale()}\n     ...&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScaleProvider={discontinuousTimeScaleProvider}\n     ...&gt;\n</code></pre>\n<p><code>discontinous</code> prop is also removed. However should you choose to use any of the scales provided by d3, you can use them without any changes from <code>0.4</code></p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScale={d3.time.scale()}\n     ...&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScale={d3.time.scale()}\n     ...&gt;\n</code></pre>\n<p>no changes here when using an existing d3 scale, <code>xScaleProvider</code> is useful only when you have to work with a discontinuous scale</p></li>\n<li><p>Removed <code>MouseCoordinates</code>, use <code>MouseCoordinateX</code>, <code>MouseCoordinateY</code> and <code>CrossHairCursor</code> together to get similar results. Breaking out one component into multiple gave a lot more flexibility and also helps in removing the awkward props <code>yMousePointerDisplayLocation</code>, <code>yMousePointerDisplayFormat</code> from <code>Chart</code></p></li>\n<li><p>Removed <code>yMousePointerDisplayLocation</code>, <code>yMousePointerDisplayFormat</code> from <code>Chart</code>, Use <code>MouseCoordinateY</code> instead</p></li>\n<li><p>Interactive indicators are <code>svg</code> only. This is most likely a transitional change till they get rewritten again in a future version to support canvas, be on the lookout for another possibly breaking change on interactive indicators</p>\n<p>Interactive indicators are no longer placed inside a <code>Chart</code>, they live inside <code>EventCapture</code>. Placing them on top of the event capture <code>rect</code> has helped in making <a href=\"https://github.com/rrag/react-stockcharts/issues/94\">#94</a> possible</p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...&gt;\n     &lt;Chart id={0} ...&gt;\n         ...\n         &lt;TrendLine ... /&gt;\n         ...\n     &lt;/Chart&gt;\n     ...\n     &lt;EventCapture ... /&gt;\n     ...\n &lt;/ChartCanvas&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...&gt;\n     &lt;Chart id={0} ...&gt;\n         ...\n     &lt;/Chart&gt;\n     ...\n     &lt;EventCapture ... &gt;\n         &lt;TrendLine forChart={0} ... /&gt;\n     &lt;/EventCapture&gt;\n     ...\n &lt;/ChartCanvas&gt;\n</code></pre>\n<p>look for more details in the <a href=\"#/trendline\">documentation</a> page</p></li>\n</ol>\n<h4>New features</h4>\n<ol>\n<li>Support both React <code>0.14</code> and React <code>15</code></li>\n<li>Annotations for events <a href=\"https://github.com/rrag/react-stockcharts/issues/54\">#54</a> - <a href=\"#/annotations\">more details</a></li>\n<li>Buy &amp; sell signals using Annotation - <a href=\"#/ma_crossover_using_text_annotation\">more</a> <a href=\"#/ma_crossover_using_svg_shape\">details</a></li>\n<li>Labels - Look at how Chart title and axis labels <a href=\"#/annotations\">more details</a></li>\n<li>Hover tooltip - <a href=\"#/hover_tooltip\">more details</a></li>\n<li>intraday scale - <a href=\"#/intra_day_with_discontinuous_scale\">more details</a></li>\n<li>Better edge coordinate - <a href=\"https://github.com/rrag/react-stockcharts/pull/79\">#79</a> - Thank you <a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a> -</li>\n<li>Volume profile - Refer to documentation for <a href=\"#/volume_profile\">volume profile</a> and <a href=\"#/volume_profile_by_session\">volume profile by session</a> Thank you <a href=\"https://github.com/aajtodd\">@aajtodd</a> for great documentation references</li>\n</ol>\n<h4>Contributors</h4>\n<p>I thank all the contributors for taking your time to help make this better</p>\n<ol>\n<li><a href=\"https://github.com/akinoniku\">@akinoniku</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/88\">#88</a></li>\n<li><a href=\"https://github.com/brobits\">@brobits</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/69\">#69</a></li>\n<li><a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/79\">#79</a>, <a href=\"https://github.com/rrag/react-stockcharts/pull/97\">#97</a></li>\n</ol>\n<p>Special thanks to\n<a href=\"https://github.com/rsklyar\">@rsklyar</a>\n<a href=\"https://github.com/iNikNik\">@iNikNik</a>\n<a href=\"https://github.com/Pinxie\">@Pinxie</a>\n<a href=\"https://github.com/WaiSiuKei\">@WaiSiuKei</a>\n<a href=\"https://github.com/itsjimbo\">@itsjimbo</a>\n<a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a>\n<a href=\"https://github.com/aajtodd\">@aajtodd</a>\n<a href=\"https://github.com/XmelesX\">@XmelesX</a>\n<a href=\"https://github.com/raptoria\">@raptoria</a>\nfor your constant support, providing ideas for new features, suggestions for improvement and identifying defects</p>\n<h2>v0.4.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><p>Drop support for React <code>0.13.x</code> and make <code>0.14.3</code> the default dependency</p></li>\n<li><p>Major changes to API.</p>\n<ul>\n<li><code>DataSeries</code> is gone</li>\n<li>all <code>indicator</code>s and <code>dataTransform</code>s are now gone, and are replaced by <code>calculator</code></li>\n<li><code>setViewRange</code>, <code>pushData</code>, <code>alterData</code> were methods you could invoke from the ref of <code>ChartCanvas</code>. These are now gone, in favor of react style props for setting them</li>\n<li><code>ChartCanvas</code> now takes (among other things)\n<ul>\n<li><code>xExtents</code> - indicates the domain of the x axis</li>\n<li><code>calculators</code> - indicates the calculators to be calculated on the data</li>\n</ul></li>\n</ul>\n<p>For a summary of changes, refer to <a href=\"https://github.com/rrag/react-stockcharts/issues/48#issuecomment-174184639\">this issue</a>. Compare the examples <a href=\"https://github.com/rrag/react-stockcharts/tree/2af0c6e763ae960d40eb6c5406b4fe0ec8da2ac2/docs/lib/charts\">before (<code>0.3</code>)</a> and <a href=\"https://github.com/rrag/react-stockcharts/tree/8386c424821907512b8e135a8a7fded3e5e09c83/docs/lib/charts\">after(<code>0.4</code></a></p></li>\n<li><p>All the <code>calculator</code>s, are written d3 style. (inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a>)</p></li>\n<li><p><code>CompareSeries</code> is gone in favor of a calculator in its place. Refer to the examples for usage</p></li>\n</ol>\n<h4>New Features</h4>\n<ol>\n<li>Implement touch support, pan and pinch zoom</li>\n<li>New Chart types Scatter, OHLC</li>\n<li>New indicators - Elder impulse, Elder Ray, Force Index, ATR</li>\n<li>Updated <code>TrendLine</code>, <code>FibonacciRetracement</code>, <code>Brush</code> to take <code>type</code> prop</li>\n<li>Change <code>StraightLine</code> to take a prop of type which defaults to <code>horizontal</code></li>\n</ol>\n<h4>Internal Changes</h4>\n<ol>\n<li>Inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a> change some of the internals</li>\n<li>add dependency <code>lodash.fattendeep</code></li>\n<li>remove dependency <code>object-assign</code></li>\n</ol>\n<h2>v0.3.1</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix <a href=\"https://github.com/rrag/react-stockcharts/issues/39\">#39</a></li>\n<li>Add eslint rules to prevent these from happening again</li>\n<li>Change <code>utils.js</code> and <code>ChartDataUtil.js</code> to use es6 exports</li>\n<li>fix <code>svg</code> for <code>Brush</code></li>\n</ol>\n<h2>v0.3.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Changes to <code>Histogram</code> to accept <code>stroke</code> as a boolean param instead of a function. the <code>stroke</code> color cannot be different from <code>fill</code></li>\n<li><code>OHLCTooltip</code> uses <code>d3.format(&quot;.4s&quot;)</code> as the format to show volume. This shows a suffix of M (Mega) for Million and G (Giga) for Billion. These are per the <a href=\"https://en.wikipedia.org/wiki/Metric_prefix\">SI-prefix</a>. You can change it to a different format by passing a prop <code>volumeFormat</code> that accepts a function taking the volume and returning a formatted string</li>\n</ol>\n<h4>Changes</h4>\n<ol>\n<li>Add new methods to <code>ChartCanvas</code></li>\n<li>Add <code>Brush</code> and <code>ClickCallback</code> interactive components</li>\n<li>Fix bug on zoom, for charts not using stockscale</li>\n<li>Change to use ES6 module exports instead of commonjs <code>module.exports = ...</code></li>\n</ol>\n<h2>v0.2.12</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fixed a bug where <code>React</code> was not imported in <code>fitWidth</code></li>\n</ol>\n<h2>v0.2.11</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Opacity works only when using Hex colors, using color names like <code>steelblue</code> <code>red</code> <code>black</code> is not recommended. This is to address #1 in <a href=\"https://github.com/rrag/react-stockcharts/issues/22\">issue #22</a></li>\n</ol>\n<h4>Changes</h4>\n<ol>\n<li>Support for Dark theme</li>\n</ol>\n<h2>v0.2.10</h2>\n<h4>Changes</h4>\n<ol>\n<li>Create interactive indicators\n<ol>\n<li><code>FibonacciRetracement</code></li>\n<li><code>TrendLine</code></li>\n</ol></li>\n<li>Add a new prop <code>widthRatio</code> which takes values from 0 to 1 (defaults to 0.5) for <code>HistogramSeries</code> &amp; <code>CandlestickSeries</code> to control the width</li>\n<li>Add new tooltip <code>SingleValueTooltip</code></li>\n</ol>\n<h2>v0.2.9</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix the moving average stroke color bug that was introduced from <code>v0.2.8</code></li>\n<li>Initial version of Interactive indicator <code>TrendLine</code></li>\n</ol>\n<h2>v0.2.8</h2>\n<h4>Changes</h4>\n<ol>\n<li>Create a pure function instead of React Components extending PureComponent, this way the <code>componentWillReceiveProps</code> will not be called when no props are changed</li>\n<li>Stop mutating the state of <code>EventHandler</code>, instead use a separate mutable state variable to hold a list of callbacks for drawing on canvas</li>\n</ol>\n<h2>v0.2.6</h2>\n<h4>Changes</h4>\n<ol>\n<li>Use <code>save-svg-as-png</code> <code>v1.0.1</code> instead of referring from source</li>\n<li>Add onClick handler for all tooltips</li>\n<li>Change onClick handler of <code>MovingAverageTooltip</code> to provide <code>chartId, dataSeriesId, options</code></li>\n</ol>\n<h2>v0.2.5</h2>\n<h4>Changes</h4>\n<ol>\n<li>Use React 0.14.0 instead of 0.14.0-rc1</li>\n<li>Add default yAccessor to Area &amp; Line Series</li>\n<li>Add checks for defensive iteration of children</li>\n<li>Fix Kagi defect where volume is not reset</li>\n<li>Add utility method to convert hex to rgba</li>\n<li>Fix axes so svg and canvas result in near pixel perfect output</li>\n<li>Round off x of Histogram so svg and canvas look similar</li>\n<li>Change import in examples from ReStock to react-stockcharts</li>\n<li>Add zIndex as property to ChartCanvas</li>\n</ol>\n<h2>v0.2.4</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix updating data for Kagi, Renko, P&amp;F. Add examples <a href=\"https://github.com/rrag/react-stockcharts/issues/17\">#17</a></li>\n</ol>\n<h2>v0.2.3</h2>\n<h4>Changes</h4>\n<ol>\n<li>Make it work with both react 0.13.3 &amp; 0.14.0-rc1 <a href=\"https://github.com/rrag/react-stockcharts/issues/12\">#12</a></li>\n</ol>\n<h2>v0.2.2</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Use react &amp; react-dom 0.14.0-rc1 as dependency, added <code>peerDependency</code> to resolve <a href=\"https://github.com/rrag/react-stockcharts/issues/12\">#12</a></li>\n</ol>\n<h4>Internal changes</h4>\n<ol>\n<li>Change the way chart series are developed so <code>context</code> is not used.</li>\n</ol>\n<h2>v0.2.1</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Use react 0.14.0-beta3 as dependency</li>\n</ol>\n<h4>Other changes</h4>\n<ol>\n<li>Improve the handling of the chart on <a href=\"#/updating_data\">updating data</a>\n<ol>\n<li>provide a new <code>pushData</code> method to push new data points, and another <code>alterData</code> method to modify existing data. By creating these methods, it is easy to identify if a change to the Chart is due to data changes or change of height/width of the chart</li>\n</ol></li>\n<li>Add example for serverside rendering</li>\n<li>Add example for downloading chart as png - works for both canvas &amp; svg</li>\n</ol>\n<h4>Internal changes</h4>\n<ol>\n<li>In an attempt to improve performance of pan actions on firefox, the pan actions when done for canvas now do not update the state during pan. To achieve this the following changes were done\n<ol>\n<li>Create Canvas based X &amp; YAxis</li>\n<li>Canvas based <code>EdgeCoordinates</code> and <code>MouseCoordinates</code> and <code>CurrentCoordinate</code></li>\n<li>Create 2 canvas as against one for each chart.\n<ul>\n<li>One canvas that is redrawn on mouse move, this canvas contains the <code>MouseCoordinates</code>, <code>CurrentCoordinate</code>, and</li>\n<li>One canvas that is drawn on zoom or pan action, this contains everything else, including the <code>XAxis</code>, <code>YAxis</code>, the actual Chart series, <code>EdgeCoordinate</code></li>\n</ul></li>\n</ol></li>\n</ol>\n<h2>v0.2</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><code>&lt;DataTransform&gt;</code> is now removed, Check out examples on how to use the new <code>dataTransform</code> property of <code>ChartCanvas</code></li>\n<li><code>&lt;OverlaySeries&gt;</code> is now removed, and <code>&lt;DataSeries&gt;</code> is used in its place and also it no longer accepts <code>type</code> instead accepts an <code>indicator</code> prop. This will keep the <code>OverlaySeries</code> extensible for custom overlays too. This is a significant change as it combines indicators and overlays to be interchangable. Multiple <code>DataSeries</code> in the same <code>Chart</code> contribute to the same <code>scales</code></li>\n<li><code>DataSeries</code> no longer accepts <code>xAccessor</code> instead, it is moved to <code>Chart</code>. Use of <code>xAccessor</code> on the <code>Chart</code> is for very simple usecases, since it does not benefit from the stock scale</li>\n<li>Simple moving average and Exponential moving average are converted as indicators</li>\n<li>Axes are now accesible via <code>ReStock.axes.XAxis</code>, <code>ReStock.axes.YAxis</code> against <code>ReStock.XAxis</code>, <code>ReStock.YAxis</code> in 0.1.x</li>\n<li>No more <code>react-stockchart.css</code>. The stylesheet is no longer used. All the styling has been moved to the individual components. If you prefer to have different style attributes you can use the style related  properties of the individual components or create a custom stylesheet with the class defined in each component</li>\n</ol>\n<h4>Other changes</h4>\n<ol>\n<li>Pure React based <code>svg</code> axes. Both <code>XAxis</code> and <code>YAxis</code> do not use <code>d3</code> to render inside <code>componentDidMount</code> / <code>componentDidUpdate</code></li>\n<li>Added new indicators/overlays Bollinger band, RSI, MACD</li>\n<li>A new property <code>type</code> is added to <code>ChartCanvas</code> and it takes one of 2 values\n<ul>\n<li><code>svg</code> which creates the chart using pure svg</li>\n<li><code>hybrid</code> which creates the chart using a combination of <code>svg</code> and <code>canvas</code>. <code>canvas</code> is used to draw the different series, like Line, Area, Candlestick, Histogram etc. and <code>svg</code> is used for the <code>XXXTooltip</code>, <code>MousePointer</code>, <code>XAxis</code> <code>YAxis</code> and the <code>EdgeIndicator</code></li>\n</ul></li>\n<li>add <code>jsnext:main</code> to <code>package.json</code> for use with <a href=\"https://github.com/rollup/rollup\">rollup</a></li>\n</ol>\n<hr>\n";

/***/ },
/* 512 */
/***/ function(module, exports) {

module.exports = "<p>Open the dev tools console and see the output of click</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithClickHandlerCallback.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/67894a887e52891aa2a3\">block</a>, <a href=\"http://plnkr.co/edit/gist:67894a887e52891aa2a3?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 513 */
/***/ function(module, exports) {

module.exports = "<h2>v0.7</h2>\n<ol>\n<li><a href=\"http://www.investopedia.com/terms/e/envelope.asp?optm=sa_v2\">Envelope</a></li>\n<li><a href=\"http://www.incrediblecharts.com/indicators/atr_average_true_range_trailing_stops.php\">ATR Trailing stop</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:chandelier_exit\">Chandelier Exit</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:parabolic_sar\">Parabolic SAR</a>\n<ul>\n<li>With mouse hover highlight</li>\n<li>right click context menu</li>\n<li>double click listener</li>\n</ul></li>\n<li>Explore refactoring of interactive indicators to use canvas (again)</li>\n</ol>\n<h4>New Chart types</h4>\n<ol>\n<li>Line break</li>\n<li>Better Renko/Mean Renko (Tentative)</li>\n</ol>\n<h2>v0.8</h2>\n<p>Guess this can be <code>v1.0.0</code></p>\n<ol>\n<li>Explore removal of svg mode &amp; all svg components completely, so this becomes a canvas only library (Tentative)</li>\n<li>Detailed documentation of each component and its props</li>\n<li>Explore splitting project into multiple modules, one for each type of indicator, chart type</li>\n<li>add LineSeries interpolation</li>\n<li>add AreaSeries gradiant</li>\n</ol>\n<h2>Sometime in the future…</h2>\n<h4>Features</h4>\n<ol>\n<li>Volume Profile (Tentative)\n<ul>\n<li>show/hide Point of control</li>\n<li>show/hide value area</li>\n</ul></li>\n<li>Automatic Support &amp; Resistance trendlines (Tentative)</li>\n<li>Add a playground to see live updates (Tentative)</li>\n</ol>\n<h4>New Indicators (in no particular order or priority)</h4>\n<ol>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:average_directional_index_adx\">ADX</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:aroon\">Aroon</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school%3Atechnical_indicators%3Awilliams_r\">Williams %R</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:vwap_intraday\">Volume Weighted Average Price </a></li>\n<li><a href=\"http://www.incrediblecharts.com/indicators/momentum.php\">Momentum</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:money_flow_index_mfi\">Money flow</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:ichimoku_cloud\">Ichimoku Clouds</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:zigzag\">ZigZag</a></li>\n</ol>\n<p><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators\">and more…</a></p>\n";

/***/ },
/* 514 */
/***/ function(module, exports) {

module.exports = "<p>Compare with another stock, zoom and pan to see how the comparison works</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithCompare.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/759f1ada33878e3239a5\">block</a>, <a href=\"http://plnkr.co/edit/gist:759f1ada33878e3239a5?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 515 */
/***/ function(module, exports) {

module.exports = "<p>This section describes how to create a new <code>XXXIndicator</code> yourself.</p>\n<h3>Prerequisites:</h3>\n<ul>\n<li>An indicator is plain old javascript, which follows some conventions, so knowledge of javascript is the only prerequisite</li>\n</ul>\n<hr>\n<p>Now before you begin jumping to write a new indicator yourself, I suggest you look at the <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/indicator\">source of a few</a></p>\n<p>The simplest one is <code>SMAIndicator.js</code></p>\n<p>an indicator has to follow the below structure</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\" >import</span> objectAssign <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"object-assign\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >var</span> defaultOptions <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// some</span>\n    <span class=\"token comment\" spellcheck=\"true\">// default options</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >MyOwnIndicator</span><span class=\"token punctuation\" >(</span>options<span class=\"token punctuation\" >,</span> chartProps<span class=\"token punctuation\" >,</span> dataSeriesProps<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// options - The options provided in DataSeries</span>\n    <span class=\"token comment\" spellcheck=\"true\">// chartProps - the props object of the Chart surrounding this element</span>\n    <span class=\"token comment\" spellcheck=\"true\">// dataSeriesProps - the props object of the DataSeries where this indicator is used</span>\n\n    <span class=\"token keyword\" >var</span> prefix <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`chart_</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span> chartProps<span class=\"token punctuation\" >.</span>id <span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >var</span> key <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`overlay_</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span> dataSeriesProps<span class=\"token punctuation\" >.</span>id <span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >var</span> settings <span class=\"token operator\" >=</span> <span class=\"token function\" >objectAssign</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> defaultOptions<span class=\"token punctuation\" >,</span> options<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >function</span> <span class=\"token function\" >indicator</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token punctuation\" >}</span>\n\n    indicator<span class=\"token punctuation\" >.</span>options <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> settings<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n    indicator<span class=\"token punctuation\" >.</span>calculate <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// calculate the new values for the data provided</span>\n        <span class=\"token comment\" spellcheck=\"true\">// use prefix &amp; key above to create any new fields under</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      data[i][prefix][key] = ...;</span>\n        <span class=\"token comment\" spellcheck=\"true\">// This is so indicators do not override each other and it is easy to troubleshoot the source of the problem</span>\n\n        <span class=\"token keyword\" >return</span> modifiedData<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>yAccessor <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// returns a function which is the yAccessor, below is an example</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n            <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>d <span class=\"token operator\" >&amp;&amp;</span> d<span class=\"token punctuation\" >[</span>prefix<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token keyword\" >return</span> d<span class=\"token punctuation\" >[</span>prefix<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>stroke <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optional method to return the stroke color</span>\n        <span class=\"token keyword\" >return</span> stroke<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>domain <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optional method if you want to over ride the domain which react-stockcharts calculates, used in RSI</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>yTicks <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optinoal method if you want only certain values to be displayed as yTicks, used inRSI</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >[</span>settings<span class=\"token punctuation\" >.</span>overSold<span class=\"token punctuation\" >,</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> settings<span class=\"token punctuation\" >.</span>overBought<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>foo <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// if you need add your own functions here</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>bar <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// if you need add your own functions here</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>isMyOwnIndicator <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// it is also advisable to create this function returning true</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      this can be used by your custom Tooltip to format the values appropriately</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> indicator<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >default</span> MyOwnIndicator<span class=\"token punctuation\" >;</span>\n</code></pre>\n";

/***/ },
/* 516 */
/***/ function(module, exports) {

module.exports = "<p>This section describes how to create a new <code>XXXSeries</code> yourself.</p>\n<h3>Prerequisites:</h3>\n<ul>\n<li>good understanding of svg and different shapes</li>\n<li>good understanding of HTML5 canvas api</li>\n<li>Knowledge of d3 scales - the <a href=\"https://github.com/mbostock/d3/wiki/Quantitative-Scales#linear\">linear scale</a> is used heavily</li>\n</ul>\n<h3>Some terminology</h3>\n<h4>xAccessor / yAccessor</h4>\n<p>given a datapoint, <code>xAccessor(dataPoint)</code> returns the xValue</p>\n<h4>xScale / yScale</h4>\n<p>given a xValue <code>xScale(xValue)</code> converts that value to a pixel location on the x scale. A scale converts a domain of say <code>1/1/2010</code> to <code>1/1/2015</code> to a range of say 0 - 500 px. So <code>xScale(new Date(2010, 1, 1))</code> would return <code>0</code> and any date greater that that would return a value above 0 and a date before 1/1/2010 would result in a -ve number on the scale.</p>\n<h4>plotData</h4>\n<p>This is an array of data points which have to be drawn on the chart.</p>\n<h4>ctx</h4>\n<p>This is the HTML5 canvas context, you will have to have a decent understanding of how to use it, teaching that is beyond the scope of this section.</p>\n<h4>indicator</h4>\n<p>For derived Series like say the MACD or RSI, the indicator passed to the <code>DataSeries</code> is available from <code>props</code></p>\n<h4>compareSeries</h4>\n<p>TODO - Write more on how to use <code>compareSeries</code></p>\n<hr>\n<p>Now before you begin jumping to write a new series yourself, I suggest you look at the <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series\">source of a few Series</a></p>\n<ul>\n<li><code>Area.jsx</code></li>\n<li><code>Line.jsx</code></li>\n<li><code>StraightLine.jsx</code></li>\n</ul>\n<p>are not series themselves but are building blocks which are used in other Series. See <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series/StochasticSeries.jsx\">StochasticSeries.jsx</a>, <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series/RSISeries.jsx\">RSISeries.jsx</a> for some examples of how these building blocks are used to create a more complex Series.</p>\n<p>If you build a new Series with just these building blocks, you do not need to handle the drawing of the chart on svg or canvas as these building blocks handle it. But if you are creating a series without these or adding some custom features, the following rules apply</p>\n<p>It is necessary that all Series be Pure, meaning, they have no state and given the same set of <code>props</code> as input the same output is provided on both canvas and svg depending on what is configured.</p>\n<p><del>Since we depend on React 0.14 for the library, we might as well use the <a href=\"https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d\">Components as Functions</a>.</del></p>\n<p>some boilerplate code below</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\" >import</span> React <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"react\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> ReStock <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"react-stockcharts\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> wrap <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> ReStock<span class=\"token punctuation\" >.</span>series<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >MyNewSeries</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> props <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The following are available from props</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// plotData is an array containing the points to be displayed on the screen. This is not the same as the data</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      you provided as input. It is most likely smaller in size since it contains a filtered list of items </span>\n        <span class=\"token comment\" spellcheck=\"true\">//      which are to be displayed for the domain of xScale</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The x &amp; y Accessor are used to get the x &amp; y value for each element in the plotData</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The x &amp; y Scale can be used to get the value in pixels for a x, y value</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> xAccessor<span class=\"token punctuation\" >,</span> yAccessor<span class=\"token punctuation\" >,</span> xScale<span class=\"token punctuation\" >,</span> yScale<span class=\"token punctuation\" >,</span> plotData <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n\n        <span class=\"token comment\" spellcheck=\"true\">// In the event there is a CompareSeries in that Chart this is available</span>\n        <span class=\"token comment\" spellcheck=\"true\">// TODO explain more about compare series and why it is special</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> compareSeries <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// indicator is available if you have used one on the DataSeries surrounding this Series</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Read more on how to write an indicator in the \"Custom - Create indicator\" section</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> indicator <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// this is available if there is a stroke / fill defined in the DataSeries surrounding this Series</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      or the stroke / fill defined in the indicator above</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> stroke<span class=\"token punctuation\" >,</span> fill <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// type is the value you have provided at the ChartCanvas, it can be \"svg\" or \"hybrid\"</span>\n        <span class=\"token comment\" spellcheck=\"true\">// height and width of this Chart</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> type<span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >,</span> width <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// In addition to the above, any props you define when using this component are also available.</span>\n        <span class=\"token comment\" spellcheck=\"true\">// If say you create a prop called xAccessor, this will override the xAccessor provided by react-stockcharts</span>\n\n        <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n        <span class=\"token keyword\" >return</span> svg<span class=\"token punctuation\" >;</span> <span class=\"token comment\" spellcheck=\"true\">/* return an svg element */</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\nMyNewSeries<span class=\"token punctuation\" >.</span>drawOnCanvas <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >,</span> ctx<span class=\"token punctuation\" >,</span> xScale<span class=\"token punctuation\" >,</span> yScale<span class=\"token punctuation\" >,</span> plotData<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// This is an optional method</span>\n    <span class=\"token comment\" spellcheck=\"true\">// having this static method on your component will make</span>\n    <span class=\"token comment\" spellcheck=\"true\">// this method to be called on pan action</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// If you are creating a series based on only the building blocks listed above this method is not needed</span>\n\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var { xAccessor, yAccessor } = props;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.beginPath();</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.strokeStyle = \"red\";</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.lineWidth = 3;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var first = plotData[0];</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var last = plotData[plotData.length - 1];</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.moveTo(xScale(xAccessor(first)), yScale(yAccessor(first)));</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.lineTo(xScale(xAccessor(last)), yScale(yAccessor(last)));</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.stroke();</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// This is very important. You need to wrap your series, so ReStock knows to provide these props</span>\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >default</span> <span class=\"token function\" >wrap</span><span class=\"token punctuation\" >(</span>MyNewSeries<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n";

/***/ },
/* 517 */
/***/ function(module, exports) {

module.exports = "<p>Creating a dark background is simply modifying some of the props to use the colors you want. The important thing to note here is that <code>canvas</code> &amp; <code>svg</code> are transparent, so the background is simply controlled by css. For the example below the background is configured as</p>\n<pre><code class=\"language-css\"><span class=\"token selector\" >.dark</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token property\" >background</span><span class=\"token punctuation\" >:</span> #303030<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n</code></pre>\n<p>There are multiple other properties which have to be customized to make the chart appear as below. see them all in the <a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithDarkTheme.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/23dd469fe32d7fc1977c\">block</a>, <a href=\"http://plnkr.co/edit/gist:23dd469fe32d7fc1977c?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 518 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithEdge.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/70ea3fe28ad35bf3ed4c\">block</a>, <a href=\"http://plnkr.co/edit/gist:70ea3fe28ad35bf3ed4c?p=preview\">plunker</a></p>\n<p><code>EdgeIndicator</code>s are inside each <code>Chart</code>, can be of type <code>first</code> or <code>last</code>, can be located <code>left</code> or <code>right</code> and orient <code>left</code> or <code>right</code>. Below you see edges <code>first</code> and <code>last</code> for all the overlays and also for the <code>volume</code> histogram.</p>\n<p>The edge values are updated on zoom and pan also</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> format <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-format\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >...</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema20<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema20<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema50<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema50<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"#FF0000\"</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema20<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema20<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema50<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema50<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"#FF0000\"</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >...</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#0F0F0F<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#0F0F0F<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>smaVolume50<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>smaVolume50<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>smaVolume50<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>smaVolume50<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n";

/***/ },
/* 519 */
/***/ function(module, exports) {

module.exports = "<p>Elder Impulse Indicator</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:elder_impulse_system\">plot</a> it</p>\n<p>green bars indicate oportunities for long, and red bars for short. Blue bars are neither</p>\n<p>This indicator is a little tricky because the main chart has to be drawn <strong>after</strong> the MACD and the EMA are calculated. The indicator is quite flexible in that, it extends the Elder Impulse system of comparing an <code>EMA</code> and <code>MACD</code> to comparing 2 or more of <em>any</em> indicators. Below example compares <code>EMA(12)</code> with the <code>MACD(26, 12, 9)</code> histogram</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/OHLCChartWithElderImpulseIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d26ef33a49317e2841c9\">block</a>, <a href=\"http://plnkr.co/edit/gist:d26ef33a49317e2841c9?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 520 */
/***/ function(module, exports) {

module.exports = "<p>Elder Ray Indicator</p>\n<p>Learn more about how to <a href=\"http://stockmarketstudent.com/elder-ray-index/\">plot</a> it</p>\n<p>This chart is also an example of OHLC chart</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/OHLCChartWithElderRayIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/0942a5f884a49efa7a14\">block</a>, <a href=\"http://plnkr.co/edit/gist:0942a5f884a49efa7a14?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 521 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>create a Fib retracement - click, mousemove, click</li>\n<li>Once a fib is drawn it gets out of draw mode automatically. To get back into draw mode again - Press D</li>\n<li>Enter draw mode again - Press D</li>\n<li>Get out of draw mode - Press ESC</li>\n<li>Delete the last drawn retracement - Press DEL</li>\n<li>When not in draw mode\n<ul>\n<li>click and drag the fib when you get a move cursor</li>\n<li>click and drag when you get the resize cursor - Work in progress</li>\n</ul></li>\n</ul>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithFibonacciInteractiveIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/82bc46e6566618e429d9\">block</a>, <a href=\"http://plnkr.co/edit/gist:82bc46e6566618e429d9?p=preview\">plunker</a></p>\n";

/***/ },
/* 522 */
/***/ function(module, exports) {

module.exports = "<p>The financetime scale takes the input data and converts to linear and plots time on the axis. The outcome is quite interesting. This scale is particularly of use not just for simple time series data, but more importantly for charts which are dependent on price movement, think Point &amp; Figure, Line break, Kagi, Renko.</p>\n<p>scale provides ticks of the format</p>\n<ul>\n<li>Start of year as <code>YYYY</code> e.g. 2013</li>\n<li>Start of Quarter as <code>mmm YYYY</code> e.g. Oct 2013</li>\n<li>Start of Month <code>as mmm</code> e.g. Nov</li>\n<li>Start of Week as <code>dd mmm</code> e.g. 25 Nov</li>\n<li>day as <code>a dd</code> e.g. Wed 27</li>\n</ul>\n";

/***/ },
/* 523 */
/***/ function(module, exports) {

module.exports = "<p>Force Index Indicator</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:force_index\">plot</a> it</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithForceIndexIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/1741fe3e882f0eb144af\">block</a>, <a href=\"http://plnkr.co/edit/gist:1741fe3e882f0eb144af?p=preview\">plunker</a></p>\n";

/***/ },
/* 524 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/GroupedBarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/f683b0c93d839ac8af55\">block</a>, <a href=\"http://plnkr.co/edit/gist:f683b0c93d839ac8af55?p=preview\">plunker</a></p>\n";

/***/ },
/* 525 */
/***/ function(module, exports) {

module.exports = "<p>Also known as &quot;average bar&quot;, used to identify trends and filter out noise. Learn more about how to construct one <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:heikin_ashi\">here</a> and <a href=\"http://www.investopedia.com/articles/technical/04/092204.asp\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HeikinAshi.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/51379c24e9751d46dcea\">block</a>, <a href=\"http://plnkr.co/edit/gist:51379c24e9751d46dcea?p=preview\">plunker</a></p>\n";

/***/ },
/* 526 */
/***/ function(module, exports) {

module.exports = "<p>Notice the <code>flipScales</code> on the <code>BarSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HorizontalBarChart.jsx\">source</a></p>\n";

/***/ },
/* 527 */
/***/ function(module, exports) {

module.exports = "<p>Notice the <code>flipScales</code> on the <code>StackedBarSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HorizontalStackedBarChart.jsx\">source</a></p>\n";

/***/ },
/* 528 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithHoverTooltip.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/9a070195e699d133932b3f368fe702d3\">block</a>, <a href=\"http://plnkr.co/edit/gist:9a070195e699d133932b3f368fe702d3?p=preview\">plunker</a></p>\n";

/***/ },
/* 529 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/f11fcc9d0867a34789c2efd346ca112a\">block</a>, <a href=\"http://plnkr.co/edit/gist:f11fcc9d0867a34789c2efd346ca112a?p=preview\">plunker</a></p>\n";

/***/ },
/* 530 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/dc853a365171d1770ada7ecc107d08de\">block</a>, <a href=\"http://plnkr.co/edit/gist:dc853a365171d1770ada7ecc107d08de?p=preview\">plunker</a></p>\n";

/***/ },
/* 531 */
/***/ function(module, exports) {

module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:kagi\">here</a></p>\n<p>Kagi consists of <em>Yin</em> and <em>Yang</em>, which is represented as red and green respectively. An overly simple rule is buy on Yang and sell on Yin.</p>\n<p>ATR(14) is used as the default reversal amount.</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/Kagi.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d1e5b75ac12f754bb21d\">block</a>, <a href=\"http://plnkr.co/edit/gist:d1e5b75ac12f754bb21d?p=preview\">plunker</a></p>\n";

/***/ },
/* 532 */
/***/ function(module, exports) {

module.exports = "<p>The real test in performance is showing a chart with a lot of data points and more than a few indicators.  As an example, let us work with MSFT from 1986-03-13 till 2015-06-05</p>\n<p>That is more than 7000 one day periods, how can all that fit into one screen? Although technically it can be done there are a few problems</p>\n<ol>\n<li>Every time you zoom/pan a chart with that many data points it just does not work. Browsers do not have the power to recalculate the scales for the new domain and appear responsive.</li>\n<li>Even with cross hair and tool tip you could see the lag</li>\n</ol>\n<p>Fortunately seeing end of day data over 30 years on a single chart is not really useful. React stockcharts has sane defaults to show 2 data point per pixel width.</p>\n<p>Let us see all this in action for MSFT 1986-03-13 till 2015-03-26</p>\n";

/***/ },
/* 533 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/next/docs/lib/charts/MovingAverageCrossOverAlgorithm.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/7feb29450469cf60773c520133a31511\">block</a>, <a href=\"http://plnkr.co/edit/gist:7feb29450469cf60773c520133a31511?p=preview\">plunker</a></p>\n";

/***/ },
/* 534 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/next/docs/lib/charts/MovingAverageCrossOverAlgorithmV2.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b944f7ef22a42956198d3384c05f1777\">block</a>, <a href=\"http://plnkr.co/edit/gist:b944f7ef22a42956198d3384c05f1777?p=preview\">plunker</a></p>\n";

/***/ },
/* 535 */
/***/ function(module, exports) {

module.exports = "<p>Moving Average Convergence Divergence (MACD) indicator with defaults</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:moving_average_convergence_divergence_macd\">plot</a> it</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithMACDIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/109a2b8021689e1ffc79\">block</a>, <a href=\"http://plnkr.co/edit/gist:109a2b8021689e1ffc79?p=preview\">plunker</a></p>\n";

/***/ },
/* 536 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithCHMousePointer.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/261fa4bc7b67536eb789\">block</a>, <a href=\"http://plnkr.co/edit/gist:261fa4bc7b67536eb789?p=preview\">plunker</a></p>\n<pre><code class=\"language-js\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> timeFormat <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-time-format\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> format <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-format\"</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >70</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >70</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>type<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScaleProvider</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MouseCoordinateY</span>\n            <span class=\"token attr-name\" >at</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".2f\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>OHLCTooltip</span> <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token operator\" >-</span><span class=\"token number\" >40</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >150</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>w<span class=\"token punctuation\" >,</span> h<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> h <span class=\"token operator\" >-</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tickFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".0s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MouseCoordinateX</span>\n            <span class=\"token attr-name\" >at</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >timeFormat</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"%Y-%m-%d\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MouseCoordinateY</span>\n            <span class=\"token attr-name\" >at</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>BarSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"#FF0000\"</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CrossHairCursor</span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p><code>EventCapture</code> is used to capture mousemove, scroll/zoom and drag events</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EventCapture</span> <span class=\"token attr-name\" >mouseMove</span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>By default none of the events are captured, and each has to be enabled individually <code>mouseMove</code> is enabled above.</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CrossHairCursor</span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>Displays the crosshair at the mouse position. If you prefer a different type of cursor, just swap this out with a custom one</p>\n<p>Notice there is a <code>MouseCoordinateY</code> for each <code>Chart</code>, this shows the value of y mouse pointer for each chart. The different props are self explanatory</p>\n<p><code>MouseCoordinateX</code> is also self explanatory, you could have multiple of these with different <code>at</code> and <code>orient</code> values to show the x coordinate multiple times at different places</p>\n<p>And for the tooltip on the top left</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TooltipContainer</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>OHLCTooltip</span> <span class=\"token attr-name\" >forChart</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token operator\" >-</span><span class=\"token number\" >40</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>TooltipContainer</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>use the <code>origin</code> and <code>margin</code> of <code>ChartCanvas</code> to adjust the position of the tooltip. You can also create your custom tooltip, by swapping out <code>OHLCTooltip</code> with your own</p>\n";

/***/ },
/* 537 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithMA.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/a27298bb7ae613d48ba2\">block</a>, <a href=\"http://plnkr.co/edit/gist:a27298bb7ae613d48ba2?p=preview\">plunker</a></p>\n";

/***/ },
/* 538 */
/***/ function(module, exports) {

module.exports = "<h4>React Stockcharts - Built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></h4>\n<p>React Stockcharts provides a flexible api to create charts that represent time series data. You can</p>\n<ul>\n<li>add custom chart components</li>\n<li>add custom indicators</li>\n<li>access the <code>svg</code> elements and styling with CSS (when using svg)</li>\n<li>get fast performance to pan and zoom actions, when using the hybrid mode</li>\n</ul>\n<p>There are many charting libraries available, but I feel there are very few that provide the features and flexibility to create stock charts that compete with the likes of the ones provided by commercial trading systems. Here is my humble attempt.</p>\n";

/***/ },
/* 539 */
/***/ function(module, exports) {

module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/docs/doku.php?id=other-tools:pnf-charts\">here</a></p>\n<p>default is 3 box reversal.</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/PointAndFigure.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d43ef867bead0f1de663\">block</a>, <a href=\"http://plnkr.co/edit/gist:d43ef867bead0f1de663?p=preview\">plunker</a></p>\n";

/***/ },
/* 540 */
/***/ function(module, exports) {

module.exports = "<p>Similar to Point and Figure charts in that Renko plots the price movement ignoring the time. Each brick is formed on a different column when the price moves beyond a threshold.</p>\n<p>Brick size defaults to ATR (14)</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:renko\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/Renko.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/df51fa445c26e123beb9\">block</a>, <a href=\"http://plnkr.co/edit/gist:df51fa445c26e123beb9?p=preview\">plunker</a></p>\n";

/***/ },
/* 541 */
/***/ function(module, exports) {

module.exports = "<p>The chart below has an RSI and ATR indicator</p>\n<p>Learn more about constructing a RSI <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:relative_strength_index_rsi\">here</a></p>\n<p>Learn more about constructing a ATR <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:average_true_range_atr\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithRSIIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/78817a1ccf0a450eed0c\">block</a>, <a href=\"http://plnkr.co/edit/gist:78817a1ccf0a450eed0c?p=preview\">plunker</a></p>\n";

/***/ },
/* 542 */
/***/ function(module, exports) {

module.exports = "<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>LineSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ScatterSeries</span> <span class=\"token attr-name\" >marker</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>Circle<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >markerProps</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> r<span class=\"token punctuation\" >:</span> <span class=\"token number\" >3</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>where</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> LineSeries<span class=\"token punctuation\" >,</span> ScatterSeries<span class=\"token punctuation\" >,</span> Circle <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> ReStock<span class=\"token punctuation\" >.</span>series<span class=\"token punctuation\" >;</span>\n</code></pre>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/LineAndScatterChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/95ffd539fa4e0b4544cf\">block</a>, <a href=\"http://plnkr.co/edit/gist:95ffd539fa4e0b4544cf?p=preview\">plunker</a></p>\n";

/***/ },
/* 543 */
/***/ function(module, exports) {

module.exports = "<p>An example with <code>SingleValueTooltip</code> &amp; <code>widthRatio</code> prop on <code>HistogramSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/AreaChartWithZoomPan.jsx\">source</a></p>\n";

/***/ },
/* 544 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/StackedBarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/df6a83dce5fdf71fc73e\">block</a>, <a href=\"http://plnkr.co/edit/gist:df6a83dce5fdf71fc73e?p=preview\">plunker</a></p>\n";

/***/ },
/* 545 */
/***/ function(module, exports) {

module.exports = "<p>Learn more about constructing a Stochastic Oscillator <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:stochastic_oscillator_fast_slow_and_full\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithFullStochasticsIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/3957c24595cc025eb3ef\">block</a>, <a href=\"http://plnkr.co/edit/gist:3957c24595cc025eb3ef?p=preview\">plunker</a></p>\n<p>this example also introduces a grid, look for <code>var showGrid = true;</code> in the example source.</p>\n";

/***/ },
/* 546 */
/***/ function(module, exports) {

module.exports = "<h4>SVG vs Canvas</h4>\n<p>When deciding on a web technology for charts - not just any charts, the ones which are highly responsive to interactions -  representing many many data points, the decision of performance is bound to come up, and HTML5 presents options.</p>\n<p>I am not going to debate between the pros and cons between SVG and Canvas. They are discussed at great length <a href=\"http://stackoverflow.com/questions/12310024/fast-and-responsive-interactive-charts-graphs-svg-canvas-other\">here</a> and <a href=\"http://stackoverflow.com/questions/5882716/html5-canvas-vs-svg-vs-div\">here</a>. Needless to say they are both very powerful and for charting, there really is no right answer.</p>\n<p>Using <code>svg</code> is very convenient from a developer standpoint. Easy to debug, even easier to style. Using css to style a chart is just too cool to pass. However there comes a point where performance &amp; memory become a bottleneck, especially in tablets/mobile (well in desktops too). Pan actions lag behind and not so responsive. and when looking at a lot of data points like the chart below, there are approx 300 DOM elements. and on pan action all these are updated to different <code>x</code>, <code>y</code>, <code>height</code> &amp; <code>width</code>. The time taken to calculate the new values on pan is negligible (&lt;10 ms) but when rendering them, you can see for yourself.</p>\n<p>Here is where <code>canvas</code> shines. Given this dilemma react-stockcharts provides 2 options.</p>\n<ul>\n<li>svg only</li>\n<li>svg and canvas</li>\n</ul>\n<p>Except the tooltip everything else, including the crosshair, axes, the chart series are all drawn on canvas. The tooltip I am retaining it in <code>svg</code> because of the ability to attach mouse hover and click event to the <code>svg</code> DOM. If there are better suggestions to use <code>canvas</code> for tooltip and also support click events and mouse hover state please share them.</p>\n<p>The SVG approach is best for server side rendering, while for browser side I recommend using the hybrid mode for improved responsiveness to pan actions.</p>\n<h4>DOM Manipulation</h4>\n<p>All SVG components use ReactJS, to create the svg elements, there is no DOM manipulation. For dealing with Canvas, since canvas is a DOM object, it has to be done via a <code>componentDidMount</code> / <code>componentDidUpdate</code></p>\n<hr>\n<p>Below you can see the improvements in responsiveness to pan actions when using the svg + canvas option</p>\n";

/***/ },
/* 547 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>create a line - click, mousemove, click\n<ul>\n<li>by default the line edge snaps to the nearest high or low, press Shift when you click to disable snap temporarily</li>\n</ul></li>\n<li>Once a line is drawn it gets out of draw mode automatically. To get back into draw mode again - Press D</li>\n<li>Delete the last drawn line - Press DEL</li>\n<li>Get out of draw mode - Press ESC</li>\n<li>When not in draw mode\n<ul>\n<li>click and drag the edges of the trend line, or the trend line itself</li>\n</ul></li>\n</ul>\n<p>More Work in progress to implement - modifying indicators after it is drawn - <a href=\"https://github.com/rrag/react-stockcharts/issues/94\">#94</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithInteractiveIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/63f666ef1159691d76cc\">block</a>, <a href=\"http://plnkr.co/edit/gist:63f666ef1159691d76cc?p=preview\">plunker</a></p>\n";

/***/ },
/* 548 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV2.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/0a54ca33b05001f17f8f\">block</a>, <a href=\"http://plnkr.co/edit/gist:0a54ca33b05001f17f8f?p=preview\">plunker</a></p>\n<pre><code class=\"language-js\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> format <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-format\"</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>type<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScaleProvider</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>w<span class=\"token punctuation\" >,</span> h<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> h <span class=\"token operator\" >-</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >150</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tickFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".0s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>BarSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"red\"</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>The portion of interest here is</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>w<span class=\"token punctuation\" >,</span> h<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> h <span class=\"token operator\" >-</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >150</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>the chart has a defined <code>height</code> of 150.</p>\n<p><code>origin</code> can be either a coordinate [x, y] or a function which returns a <code>[x, y]</code>, the default value is <code>[0, 0]</code></p>\n<p><code>(w, h) =&gt; [0, h - 150]</code> is the same as <code>function (w, h) { return [0, h - 150]; }</code></p>\n<p>given the <code>width</code> and <code>height</code> available inside the <code>ChartCanvas</code> as input, this function returns an origin of <code>[0, height - 150]</code> to draw the volume histogram</p>\n<p>Similarly the <code>fill</code> of <code>BarSeries</code> accepts either</p>\n<ul>\n<li>a function which returns a string representing the color</li>\n<li>or a string representing the color</li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>BarSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"red\"</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<h4>Another Version</h4>\n<p>In this you can see how the volume histogram and the candlestick chart do not overlap.</p>\n";

/***/ },
/* 549 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV3.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/2dc9dd83567cd41c830a\">block</a>, <a href=\"http://plnkr.co/edit/gist:2dc9dd83567cd41c830a?p=preview\">plunker</a></p>\n";

/***/ },
/* 550 */
/***/ function(module, exports) {

module.exports = "<p>There are a couple of ways Volume histogram is usually displayed. Let us see them.</p>\n";

/***/ },
/* 551 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV1.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/88cd65baa331d57caa83\">block</a>, <a href=\"http://plnkr.co/edit/gist:88cd65baa331d57caa83?p=preview\">plunker</a></p>\n<pre><code class=\"language-js\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> format <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-format\"</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>type<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScaleProvider</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tickFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".0s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>BarSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n\n</code></pre>\n<p>Look!!! there is more than one <code>Chart</code> there. Each <code>Chart</code> has different <code>yExtents</code> to indicate its domain.</p>\n<p>Remember all <code>Chart</code>s use the same <code>data</code> and <code>xScale</code> but each <code>Chart</code> has <code>yScale</code>.</p>\n<p>But… I don’t want the Volume chart to span the whole chart height. I got you covered.</p>\n";

/***/ },
/* 552 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/VolumeProfileBySessionChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/91f4d66273e693b2054161dc8ff170a2\">block</a>, <a href=\"http://plnkr.co/edit/gist:91f4d66273e693b2054161dc8ff170a2?p=preview\">plunker</a></p>\n";

/***/ },
/* 553 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/VolumeProfileChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/7be99030051fc80c070cfe5b7abf8c4f\">block</a>, <a href=\"http://plnkr.co/edit/gist:7be99030051fc80c070cfe5b7abf8c4f?p=preview\">plunker</a></p>\n";

/***/ },
/* 554 */
/***/ function(module, exports) {

module.exports = "<h2><span style=\"color:steelblue\">Click on the chart to focus it, and then zoom by mouse scroll, pan by dragging the chart</span></h2>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/a8465abe0061df1b7976\">block</a>, <a href=\"http://plnkr.co/edit/gist:a8465abe0061df1b7976?p=preview\">plunker</a></p>\n<p>The only change is enabling <code>zoom</code> and <code>pan</code></p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EventCapture</span> <span class=\"token attr-name\" >mouseMove</span> <span class=\"token attr-name\" >zoom</span> <span class=\"token attr-name\" >pan</span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>enabling <code>zoom</code> and <code>pan</code> to <code>true</code></p>\n<p>By default the chart is not focused. meaning. you have to click on the chart to get focus, and only then will the scroll events trigger a zoom.</p>\n";

/***/ },
/* 555 */,
/* 556 */,
/* 557 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_dsv__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_time_format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_stockcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_stylesheets_re_stock__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_stylesheets_re_stock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_stylesheets_re_stock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lib_navbar__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lib_sidebar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lib_main_container__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lib_menu_group__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lib_MenuItem__ = __webpack_require__(159);
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
	__webpack_require__(199).default, __webpack_require__(205).default, __webpack_require__(191).default, __webpack_require__(170).default, __webpack_require__(172).default]
};

var CHART_TYPES = {
	head: "Chart types",
	pages: [__webpack_require__(164).default, __webpack_require__(189).default, __webpack_require__(168).default, __webpack_require__(165).default, __webpack_require__(183).default, __webpack_require__(203).default, __webpack_require__(185).default, __webpack_require__(186).default, __webpack_require__(169).default, __webpack_require__(208).default,
	// TODO add OHLC chart
	__webpack_require__(184).default, __webpack_require__(188).default, __webpack_require__(200).default, __webpack_require__(202).default, __webpack_require__(194).default]
};

var CHART_FEATURES = {
	head: "Chart features",
	pages: [__webpack_require__(196).default, __webpack_require__(211).default, __webpack_require__(187).default, __webpack_require__(180).default, __webpack_require__(177).default, __webpack_require__(163).default, __webpack_require__(195).default, __webpack_require__(207).default, __webpack_require__(190).default, __webpack_require__(176).default]
};

var INDICATORS = {
	head: "Indicators",
	pages: [__webpack_require__(193).default, __webpack_require__(166).default, __webpack_require__(173).default, __webpack_require__(192).default, __webpack_require__(201).default, __webpack_require__(204).default, __webpack_require__(182).default, __webpack_require__(179).default, __webpack_require__(178).default, __webpack_require__(210).default, __webpack_require__(209).default]
};
var ALGORITHMIC_INDICATORS = {
	head: "Algorithmic Indicators",
	pages: [__webpack_require__(197).default, __webpack_require__(198).default]
};

var INTERACTIVE = {
	head: "Interactive",
	pages: [__webpack_require__(206).default, __webpack_require__(181).default, __webpack_require__(171).default, __webpack_require__(167).default]
};

var CUSTOMIZATION = {
	head: "Customization",
	pages: [__webpack_require__(175).default, __webpack_require__(174).default]
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
	__webpack_require__.e/* nsure */(0/* duplicate */).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
		__webpack_require__(24);
		__webpack_require__(25);
		loadPage();
	}).bind(null, __webpack_require__));
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
		var _values = _slicedToArray(values, 8);

		var MSFT = _values[0];
		var MSFTfull = _values[1];
		var intraDayContinuous = _values[2];
		var intraDayDiscontinuous = _values[3];
		var compareData = _values[4];
		var bubbleData = _values[5];
		var barData = _values[6];
		var groupedBarData = _values[7];

		var horizontalBarData = barData.map(function (_ref) {
			var x = _ref.x;
			var y = _ref.y;
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
],[557])
});
;
//# sourceMappingURL=react-stockcharts-documentation.6536f1cc2390683da0c9.js.map