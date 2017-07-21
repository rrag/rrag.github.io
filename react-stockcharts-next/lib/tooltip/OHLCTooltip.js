"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Format = require("d3-format");

var _d3TimeFormat = require("d3-time-format");

var _GenericChartComponent = require("../GenericChartComponent");

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _utils = require("../utils");

var _ToolTipText = require("./ToolTipText");

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = require("./ToolTipTSpanLabel");

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

			if ((0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(accessor(currentItem)) && (0, _utils.isDefined)(accessor(currentItem).close)) {
				var item = accessor(currentItem);
				volume = (0, _utils.isDefined)(item.volume) ? volumeFormat(item.volume) : "n/a";

				displayDate = xDisplayFormat(displayXAccessor(item));
				open = ohlcFormat(item.open);
				high = ohlcFormat(item.high);
				low = ohlcFormat(item.low);
				close = ohlcFormat(item.close);
			}

			var originProp = this.props.origin;

			var origin = (0, _utils.functor)(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-tooltip-hover " + className,
					transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ fill: labelFill, key: "label", x: 0, dy: "5" },
						"Date: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value", fill: textFill },
						displayDate
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ fill: labelFill, key: "label_O" },
						" O: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_O", fill: textFill },
						open
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ fill: labelFill, key: "label_H" },
						" H: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_H", fill: textFill },
						high
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ fill: labelFill, key: "label_L" },
						" L: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_L", fill: textFill },
						low
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ fill: labelFill, key: "label_C" },
						" C: "
					),
					_react2.default.createElement(
						"tspan",
						{ key: "value_C", fill: textFill },
						close
					),
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						{ fill: labelFill, key: "label_Vol" },
						" Vol: "
					),
					_react2.default.createElement(
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
			return _react2.default.createElement(_GenericChartComponent2.default, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return OHLCTooltip;
}(_react.Component);

OHLCTooltip.propTypes = {
	className: _propTypes2.default.string,
	accessor: _propTypes2.default.func.isRequired,
	xDisplayFormat: _propTypes2.default.func.isRequired,
	ohlcFormat: _propTypes2.default.func.isRequired,
	origin: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]).isRequired,
	fontFamily: _propTypes2.default.string,
	fontSize: _propTypes2.default.number,
	onClick: _propTypes2.default.func,
	volumeFormat: _propTypes2.default.func,
	textFill: _propTypes2.default.string,
	labelFill: _propTypes2.default.string
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