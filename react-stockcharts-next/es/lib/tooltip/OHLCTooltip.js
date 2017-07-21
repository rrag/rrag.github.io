"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import GenericChartComponent from "../GenericChartComponent";

import { isDefined, functor } from "../utils";
import ToolTipText from "./ToolTipText";
import ToolTipTSpanLabel from "./ToolTipTSpanLabel";

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

			if (isDefined(currentItem) && isDefined(accessor(currentItem)) && isDefined(accessor(currentItem).close)) {
				var item = accessor(currentItem);
				volume = isDefined(item.volume) ? volumeFormat(item.volume) : "n/a";

				displayDate = xDisplayFormat(displayXAccessor(item));
				open = ohlcFormat(item.open);
				high = ohlcFormat(item.high);
				low = ohlcFormat(item.low);
				close = ohlcFormat(item.close);
			}

			var originProp = this.props.origin;

			var origin = functor(originProp);

			var _origin = origin(width, height),
			    _origin2 = _slicedToArray(_origin, 2),
			    x = _origin2[0],
			    y = _origin2[1];

			return React.createElement(
				"g",
				{ className: "react-stockcharts-tooltip-hover " + className,
					transform: "translate(" + x + ", " + y + ")", onClick: onClick },
				React.createElement(
					ToolTipText,
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					React.createElement(
						ToolTipTSpanLabel,
						{ fill: labelFill, key: "label", x: 0, dy: "5" },
						"Date: "
					),
					React.createElement(
						"tspan",
						{ key: "value", fill: textFill },
						displayDate
					),
					React.createElement(
						ToolTipTSpanLabel,
						{ fill: labelFill, key: "label_O" },
						" O: "
					),
					React.createElement(
						"tspan",
						{ key: "value_O", fill: textFill },
						open
					),
					React.createElement(
						ToolTipTSpanLabel,
						{ fill: labelFill, key: "label_H" },
						" H: "
					),
					React.createElement(
						"tspan",
						{ key: "value_H", fill: textFill },
						high
					),
					React.createElement(
						ToolTipTSpanLabel,
						{ fill: labelFill, key: "label_L" },
						" L: "
					),
					React.createElement(
						"tspan",
						{ key: "value_L", fill: textFill },
						low
					),
					React.createElement(
						ToolTipTSpanLabel,
						{ fill: labelFill, key: "label_C" },
						" C: "
					),
					React.createElement(
						"tspan",
						{ key: "value_C", fill: textFill },
						close
					),
					React.createElement(
						ToolTipTSpanLabel,
						{ fill: labelFill, key: "label_Vol" },
						" Vol: "
					),
					React.createElement(
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
			return React.createElement(GenericChartComponent, {
				clip: false,
				svgDraw: this.renderSVG,
				drawOn: ["mousemove"]
			});
		}
	}]);

	return OHLCTooltip;
}(Component);

OHLCTooltip.propTypes = {
	className: PropTypes.string,
	accessor: PropTypes.func.isRequired,
	xDisplayFormat: PropTypes.func.isRequired,
	ohlcFormat: PropTypes.func.isRequired,
	origin: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	onClick: PropTypes.func,
	volumeFormat: PropTypes.func,
	textFill: PropTypes.string,
	labelFill: PropTypes.string
};

OHLCTooltip.defaultProps = {
	accessor: function accessor(d) {
		return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
	},
	xDisplayFormat: timeFormat("%Y-%m-%d"),
	volumeFormat: format(".4s"),
	ohlcFormat: format(".2f"),
	origin: [0, 0]
};

export default OHLCTooltip;