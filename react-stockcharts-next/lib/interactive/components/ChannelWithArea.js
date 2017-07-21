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

var _GenericChartComponent = require("../../GenericChartComponent");

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _GenericComponent = require("../../GenericComponent");

var _StraightLine = require("./StraightLine");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChannelWithArea = function (_Component) {
	_inherits(ChannelWithArea, _Component);

	function ChannelWithArea(props) {
		_classCallCheck(this, ChannelWithArea);

		var _this = _possibleConstructorReturn(this, (ChannelWithArea.__proto__ || Object.getPrototypeOf(ChannelWithArea)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		_this.isHover = _this.isHover.bind(_this);
		return _this;
	}

	_createClass(ChannelWithArea, [{
		key: "isHover",
		value: function isHover(moreProps) {
			var _props = this.props,
			    tolerance = _props.tolerance,
			    onHover = _props.onHover;


			if ((0, _utils.isDefined)(onHover)) {
				var _helper = helper(this.props, moreProps),
				    line1 = _helper.line1,
				    line2 = _helper.line2;

				var mouseXY = moreProps.mouseXY;

				var _mouseXY = _slicedToArray(mouseXY, 2),
				    mouseX = _mouseXY[0],
				    mouseY = _mouseXY[1];

				var left = Math.min(line1.x1, line1.x2);
				var right = Math.max(line1.x1, line1.x2);
				var top = Math.min(line1.y1, line1.y2, line2.y1, line2.y2);
				var bottom = Math.max(line1.y1, line1.y2, line2.y1, line2.y2);

				var isWithinLineBounds = mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;

				if (isWithinLineBounds) {
					var line1Hovering = (0, _StraightLine.isHovering)([line1.x1, line1.y1], [line1.x2, line1.y2], mouseXY, tolerance);

					var line2Hovering = (0, _StraightLine.isHovering)([line2.x1, line2.y1], [line2.x2, line2.y2], mouseXY, tolerance);

					// console.log("hovering ->", hovering);

					return line1Hovering || line2Hovering;
				}
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
			    line1 = _helper2.line1,
			    line2 = _helper2.line2;

			if ((0, _utils.isDefined)(line1)) {
				var x1 = line1.x1,
				    y1 = line1.y1,
				    x2 = line1.x2,
				    y2 = line1.y2;


				ctx.lineWidth = strokeWidth;
				ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);

				ctx.beginPath();
				ctx.moveTo(x1, y1);
				ctx.lineTo(x2, y2);
				ctx.stroke();
				if ((0, _utils.isDefined)(line2)) {
					var line2Y1 = line2.y1,
					    line2Y2 = line2.y2;


					ctx.beginPath();
					ctx.moveTo(x1, line2Y1);
					ctx.lineTo(x2, line2Y2);
					ctx.stroke();

					ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
					ctx.beginPath();
					ctx.moveTo(x1, y1);

					ctx.lineTo(x2, y2);
					ctx.lineTo(x2, line2Y2);
					ctx.lineTo(x1, line2Y1);

					ctx.closePath();
					ctx.fill();
				}
			}
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
			    onDragStart = _props4.onDragStart,
			    onDrag = _props4.onDrag,
			    onDragComplete = _props4.onDragComplete,
			    onHover = _props4.onHover,
			    onBlur = _props4.onBlur;


			return _react2.default.createElement(_GenericChartComponent2.default, {
				isHover: this.isHover,

				svgDraw: this.renderSVG,
				canvasToDraw: _GenericComponent.getMouseCanvas,
				canvasDraw: this.drawOnCanvas,

				interactiveCursorClass: interactiveCursorClass,
				selected: selected,

				onClick: onClick,
				onClickOutside: onClickOutside,
				onDragStart: onDragStart,
				onDrag: onDrag,
				onDragComplete: onDragComplete,
				onHover: onHover,
				onBlur: onBlur,

				drawOn: ["mousemove", "mouseleave", "pan", "drag"]
			});
		}
	}]);

	return ChannelWithArea;
}(_react.Component);

function helper(props, moreProps) {
	var startXY = props.startXY,
	    endXY = props.endXY,
	    dy = props.dy,
	    type = props.type;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale;


	if ((0, _utils.isNotDefined)(startXY) || (0, _utils.isNotDefined)(endXY)) {
		return {};
	}
	var modLine = (0, _StraightLine.generateLine)({
		type: type,
		start: startXY,
		end: endXY,
		xScale: xScale
	});

	var x1 = xScale(modLine.x1);
	var y1 = yScale(modLine.y1);
	var x2 = xScale(modLine.x2);
	var y2 = yScale(modLine.y2);

	var line1 = {
		x1: x1, y1: y1, x2: x2, y2: y2
	};
	var line2 = (0, _utils.isDefined)(dy) ? {
		x1: x1,
		y1: yScale(modLine.y1 + dy),
		x2: x2,
		y2: yScale(modLine.y2 + dy)
	} : undefined;

	return { line1: line1, line2: line2 };
}

ChannelWithArea.propTypes = {
	interactiveCursorClass: _propTypes2.default.string,
	stroke: _propTypes2.default.string.isRequired,
	strokeWidth: _propTypes2.default.number.isRequired,
	fill: _propTypes2.default.string.isRequired,
	opacity: _propTypes2.default.number.isRequired,

	type: _propTypes2.default.oneOf(["XLINE", // extends from -Infinity to +Infinity
	"RAY", // extends to +/-Infinity in one direction
	"LINE"]).isRequired,

	onDragStart: _propTypes2.default.func.isRequired,
	onDrag: _propTypes2.default.func.isRequired,
	onDragComplete: _propTypes2.default.func.isRequired,
	onClick: _propTypes2.default.func.isRequired,
	onClickOutside: _propTypes2.default.func.isRequired,
	onHover: _propTypes2.default.func,
	onBlur: _propTypes2.default.func,

	defaultClassName: _propTypes2.default.string,

	tolerance: _propTypes2.default.number.isRequired,
	selected: _propTypes2.default.bool.isRequired
};

ChannelWithArea.defaultProps = {
	onDragStart: _utils.noop,
	onDrag: _utils.noop,
	onDragComplete: _utils.noop,
	type: "LINE",

	onClick: _utils.noop,
	onClickOutside: _utils.noop,

	strokeWidth: 1,
	tolerance: 4,
	selected: false
};

exports.default = ChannelWithArea;