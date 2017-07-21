var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { sum, deviation } from "d3-array";

import GenericChartComponent from "../../GenericChartComponent";
import { getMouseCanvas } from "../../GenericComponent";
import { isHovering } from "./StraightLine";

import { isDefined, getClosestItemIndexes, noop, zipper, hexToRGBA } from "../../utils";

var LinearRegressionChannelWithArea = function (_Component) {
	_inherits(LinearRegressionChannelWithArea, _Component);

	function LinearRegressionChannelWithArea(props) {
		_classCallCheck(this, LinearRegressionChannelWithArea);

		var _this = _possibleConstructorReturn(this, (LinearRegressionChannelWithArea.__proto__ || Object.getPrototypeOf(LinearRegressionChannelWithArea)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		_this.isHover = _this.isHover.bind(_this);
		return _this;
	}

	_createClass(LinearRegressionChannelWithArea, [{
		key: "isHover",
		value: function isHover(moreProps) {
			var _props = this.props,
			    tolerance = _props.tolerance,
			    onHover = _props.onHover;


			if (isDefined(onHover)) {
				var mouseXY = moreProps.mouseXY;

				var _helper = helper(this.props, moreProps),
				    x1 = _helper.x1,
				    y1 = _helper.y1,
				    x2 = _helper.x2,
				    y2 = _helper.y2;

				var hovering = isHovering([x1, y1], [x2, y2], mouseXY, tolerance);
				return hovering;
			}
			return false;
		}
	}, {
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props2 = this.props,
			    stroke = _props2.stroke,
			    strokeWidth = _props2.strokeWidth,
			    opacity = _props2.opacity,
			    fill = _props2.fill;

			var _helper2 = helper(this.props, moreProps),
			    x1 = _helper2.x1,
			    y1 = _helper2.y1,
			    x2 = _helper2.x2,
			    y2 = _helper2.y2,
			    dy = _helper2.dy;

			ctx.lineWidth = strokeWidth;
			ctx.strokeStyle = hexToRGBA(stroke, opacity);
			ctx.fillStyle = hexToRGBA(fill, opacity);

			ctx.beginPath();
			ctx.moveTo(x1, y1 - dy);
			ctx.lineTo(x2, y2 - dy);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(x2, y2 + dy);
			ctx.lineTo(x1, y1 + dy);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(x1, y1 - dy);
			ctx.lineTo(x2, y2 - dy);
			ctx.lineTo(x2, y2 + dy);
			ctx.lineTo(x1, y1 + dy);
			ctx.closePath();
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(x2, y2);
			ctx.lineTo(x1, y1);
			ctx.stroke();
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			throw new Error("svg not implemented", moreProps);
		}
	}, {
		key: "render",
		value: function render() {
			var _props3 = this.props,
			    selected = _props3.selected,
			    onClick = _props3.onClick,
			    onClickOutside = _props3.onClickOutside,
			    interactiveCursorClass = _props3.interactiveCursorClass;
			var _props4 = this.props,
			    onHover = _props4.onHover,
			    onBlur = _props4.onBlur;


			return React.createElement(GenericChartComponent, {
				isHover: this.isHover,

				svgDraw: this.renderSVG,
				canvasToDraw: getMouseCanvas,
				canvasDraw: this.drawOnCanvas,

				interactiveCursorClass: interactiveCursorClass,
				selected: selected,

				onClick: onClick,
				onClickOutside: onClickOutside,
				onHover: onHover,
				onBlur: onBlur,

				drawOn: ["mousemove", "mouseleave", "pan", "drag"]
			});
		}
	}]);

	return LinearRegressionChannelWithArea;
}(Component);

export function edge1Provider(props) {
	return function (moreProps) {
		var _helper3 = helper(props, moreProps),
		    x1 = _helper3.x1,
		    y1 = _helper3.y1;

		return [x1, y1];
	};
}

export function edge2Provider(props) {
	return function (moreProps) {
		var _helper4 = helper(props, moreProps),
		    x2 = _helper4.x2,
		    y2 = _helper4.y2;

		return [x2, y2];
	};
}

function helper(props, moreProps) {
	var x1Value = props.x1Value,
	    x2Value = props.x2Value,
	    type = props.type;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale,
	    fullData = moreProps.fullData;
	var xAccessor = moreProps.xAccessor;

	/*
 http://www.metastock.com/Customer/Resources/TAAZ/?p=65
 y = a + bx
 n = length of array
 b = (n * sum(x*y) - sum(xs) * sum(ys)) / (n * sum(xSquareds) - (sum(xs) ^ 2))
 a = (sum of closes)
 */

	var _getClosestItemIndexe = getClosestItemIndexes(fullData, x1Value, xAccessor),
	    left = _getClosestItemIndexe.left;

	var _getClosestItemIndexe2 = getClosestItemIndexes(fullData, x2Value, xAccessor),
	    right = _getClosestItemIndexe2.right;

	var startIndex = Math.min(left, right);
	var endIndex = Math.max(left, right) + 1;

	var array = fullData.slice(startIndex, endIndex);

	var xs = array.map(function (d) {
		return xAccessor(d).valueOf();
	});
	var ys = array.map(function (d) {
		return d.close;
	});
	var n = array.length;

	var combine = zipper().combine(function (x, y) {
		return x * y;
	});

	var xys = combine(xs, ys);
	var xSquareds = xs.map(function (x) {
		return Math.pow(x, 2);
	});

	var b = (n * sum(xys) - sum(xs) * sum(ys)) / (n * sum(xSquareds) - Math.pow(sum(xs), 2));
	var a = (sum(ys) - b * sum(xs)) / n;

	var newy1 = a + b * x1Value;
	var newy2 = a + b * x2Value;

	var x1 = xScale(x1Value);
	var y1 = yScale(newy1);
	var x2 = xScale(x2Value);
	var y2 = yScale(newy2);

	var stdDev = type === "SD" ? deviation(array, function (d) {
		return d.close;
	}) : 0;

	var dy = yScale(newy1 - stdDev) - y1;

	return {
		x1: x1, y1: y1, x2: x2, y2: y2, dy: dy
	};
}

LinearRegressionChannelWithArea.propTypes = {
	x1Value: PropTypes.any.isRequired,
	x2Value: PropTypes.any.isRequired,

	type: PropTypes.oneOf(["SD", // standard deviation channel
	"Raff"]).isRequired,

	interactiveCursorClass: PropTypes.string,
	stroke: PropTypes.string.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	fill: PropTypes.string.isRequired,
	opacity: PropTypes.number.isRequired,

	onDragStart: PropTypes.func.isRequired,
	onDrag: PropTypes.func.isRequired,
	onDragComplete: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
	onClickOutside: PropTypes.func.isRequired,
	onHover: PropTypes.func,
	onBlur: PropTypes.func,

	defaultClassName: PropTypes.string,

	tolerance: PropTypes.number.isRequired,
	selected: PropTypes.bool.isRequired
};

LinearRegressionChannelWithArea.defaultProps = {
	onDragStart: noop,
	onDrag: noop,
	onDragComplete: noop,

	onClick: noop,
	onClickOutside: noop,

	type: "SD", // standard dev

	strokeWidth: 1,
	tolerance: 4,
	selected: false
};

export default LinearRegressionChannelWithArea;