"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _ChartDataUtil = require("../../utils/ChartDataUtil");

var _ClickableCircle = require("../components/ClickableCircle");

var _ClickableCircle2 = _interopRequireDefault(_ClickableCircle);

var _GannFan = require("../components/GannFan");

var _GannFan2 = _interopRequireDefault(_GannFan);

var _HoverTextNearMouse = require("../components/HoverTextNearMouse");

var _HoverTextNearMouse2 = _interopRequireDefault(_HoverTextNearMouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EachGannFan = function (_Component) {
	_inherits(EachGannFan, _Component);

	function EachGannFan(props) {
		_classCallCheck(this, EachGannFan);

		var _this = _possibleConstructorReturn(this, (EachGannFan.__proto__ || Object.getPrototypeOf(EachGannFan)).call(this, props));

		_this.handleLine1Edge1Drag = _this.handleLine1Edge1Drag.bind(_this);
		_this.handleLine1Edge2Drag = _this.handleLine1Edge2Drag.bind(_this);

		_this.handleDragStart = _this.handleDragStart.bind(_this);
		_this.handleChannelDrag = _this.handleChannelDrag.bind(_this);
		_this.handleDragComplete = _this.handleDragComplete.bind(_this);

		_this.handleChannelHeightChange = _this.handleChannelHeightChange.bind(_this);

		_this.handleHover = _this.handleHover.bind(_this);
		_this.handleSelect = _this.handleSelect.bind(_this);
		_this.handleUnSelect = _this.handleUnSelect.bind(_this);

		_this.getEdgeCircle = _this.getEdgeCircle.bind(_this);

		_this.state = {
			selected: false,
			hover: false
		};
		return _this;
	}

	_createClass(EachGannFan, [{
		key: "handleHover",
		value: function handleHover(moreProps) {
			if (this.state.hover !== moreProps.hovering) {
				this.setState({
					hover: moreProps.hovering
				});
			}
		}
	}, {
		key: "handleSelect",
		value: function handleSelect() {
			if (!this.state.selected) {
				this.setState({
					selected: true
				});
			}
		}
	}, {
		key: "handleUnSelect",
		value: function handleUnSelect() {
			if (this.state.selected) {
				this.setState({
					selected: false
				});
			}
		}
	}, {
		key: "handleDragStart",
		value: function handleDragStart() {
			var _props = this.props,
			    startXY = _props.startXY,
			    endXY = _props.endXY,
			    dy = _props.dy;


			this.dragStart = {
				startXY: startXY, endXY: endXY, dy: dy
			};
		}
	}, {
		key: "handleChannelDrag",
		value: function handleChannelDrag(moreProps) {
			var _props2 = this.props,
			    index = _props2.index,
			    onDrag = _props2.onDrag;
			var _dragStart = this.dragStart,
			    startXY = _dragStart.startXY,
			    endXY = _dragStart.endXY;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    xAccessor = moreProps.xAccessor,
			    fullData = moreProps.fullData;
			var startPos = moreProps.startPos,
			    mouseXY = moreProps.mouseXY;


			var x1 = xScale(startXY[0]);
			var y1 = yScale(startXY[1]);
			var x2 = xScale(endXY[0]);
			var y2 = yScale(endXY[1]);

			var dx = startPos[0] - mouseXY[0];
			var dy = startPos[1] - mouseXY[1];

			var newX1Value = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [x1 - dx, y1 - dy], fullData));
			var newY1Value = yScale.invert(y1 - dy);
			var newX2Value = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [x2 - dx, y2 - dy], fullData));
			var newY2Value = yScale.invert(y2 - dy);

			// const newDy = newY2Value - endXY[1] + this.dragStart.dy;

			onDrag(index, {
				startXY: [newX1Value, newY1Value],
				endXY: [newX2Value, newY2Value],
				dy: this.dragStart.dy
			});
		}
	}, {
		key: "handleLine1Edge1Drag",
		value: function handleLine1Edge1Drag(moreProps) {
			var _props3 = this.props,
			    index = _props3.index,
			    onDrag = _props3.onDrag;
			var startXY = this.dragStart.startXY;
			var startPos = moreProps.startPos,
			    mouseXY = moreProps.mouseXY,
			    xAccessor = moreProps.xAccessor,
			    xScale = moreProps.xScale,
			    fullData = moreProps.fullData,
			    yScale = moreProps.chartConfig.yScale;


			var dx = startPos[0] - mouseXY[0];
			var dy = startPos[1] - mouseXY[1];

			var x1 = xScale(startXY[0]);
			var y1 = yScale(startXY[1]);

			var newX1Value = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [x1 - dx, y1 - dy], fullData));
			var newY1Value = yScale.invert(y1 - dy);

			onDrag(index, {
				startXY: [newX1Value, newY1Value],
				endXY: this.dragStart.endXY,
				dy: this.dragStart.dy
			});
		}
	}, {
		key: "handleLine1Edge2Drag",
		value: function handleLine1Edge2Drag(moreProps) {
			var _props4 = this.props,
			    index = _props4.index,
			    onDrag = _props4.onDrag;
			var endXY = this.dragStart.endXY;
			var startPos = moreProps.startPos,
			    mouseXY = moreProps.mouseXY,
			    xAccessor = moreProps.xAccessor,
			    xScale = moreProps.xScale,
			    fullData = moreProps.fullData,
			    yScale = moreProps.chartConfig.yScale;


			var dx = startPos[0] - mouseXY[0];
			var dy = startPos[1] - mouseXY[1];

			var x1 = xScale(endXY[0]);
			var y1 = yScale(endXY[1]);

			var newX1Value = xAccessor((0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, [x1 - dx, y1 - dy], fullData));
			var newY1Value = yScale.invert(y1 - dy);

			onDrag(index, {
				startXY: this.dragStart.startXY,
				endXY: [newX1Value, newY1Value],
				dy: this.dragStart.dy
			});
		}
	}, {
		key: "handleChannelHeightChange",
		value: function handleChannelHeightChange(moreProps) {
			var _props5 = this.props,
			    index = _props5.index,
			    onDrag = _props5.onDrag;
			var _dragStart2 = this.dragStart,
			    startXY = _dragStart2.startXY,
			    endXY = _dragStart2.endXY;
			var yScale = moreProps.chartConfig.yScale;
			var startPos = moreProps.startPos,
			    mouseXY = moreProps.mouseXY;


			var y2 = yScale(endXY[1]);

			var dy = startPos[1] - mouseXY[1];

			var newY2Value = yScale.invert(y2 - dy);

			var newDy = newY2Value - endXY[1] + this.dragStart.dy;

			onDrag(index, {
				startXY: startXY,
				endXY: endXY,
				dy: newDy
			});
		}
	}, {
		key: "handleDragComplete",
		value: function handleDragComplete() {
			var onDragComplete = this.props.onDragComplete;


			if (!this.state.selected) {
				this.setState({
					selected: true
				});
			}
			onDragComplete();
		}
	}, {
		key: "getEdgeCircle",
		value: function getEdgeCircle(_ref) {
			var xy = _ref.xy,
			    dragHandler = _ref.dragHandler,
			    cursor = _ref.cursor,
			    fill = _ref.fill;
			var _state = this.state,
			    selected = _state.selected,
			    hover = _state.hover;
			var _props6 = this.props,
			    edgeStroke = _props6.edgeStroke,
			    edgeStrokeWidth = _props6.edgeStrokeWidth,
			    r = _props6.r;


			return _react2.default.createElement(_ClickableCircle2.default, {
				show: selected || hover,
				cx: xy[0],
				cy: xy[1],
				r: r,
				fill: fill,
				stroke: edgeStroke,
				strokeWidth: edgeStrokeWidth,
				opacity: 1,
				interactiveCursorClass: cursor,

				onDragStart: this.handleDragStart,
				onDrag: dragHandler,
				onDragComplete: this.handleDragComplete });
		}
	}, {
		key: "render",
		value: function render() {
			var _props7 = this.props,
			    startXY = _props7.startXY,
			    endXY = _props7.endXY;
			var _props8 = this.props,
			    interactive = _props8.interactive,
			    edgeFill = _props8.edgeFill;
			var _props9 = this.props,
			    stroke = _props9.stroke,
			    strokeWidth = _props9.strokeWidth,
			    fill = _props9.fill,
			    opacity = _props9.opacity,
			    fillOpacity = _props9.fillOpacity;
			var _props10 = this.props,
			    fontFamily = _props10.fontFamily,
			    fontSize = _props10.fontSize,
			    fontStroke = _props10.fontStroke;
			var hoverText = this.props.hoverText;
			var _state2 = this.state,
			    selected = _state2.selected,
			    hover = _state2.hover;

			var hoverTextEnabled = hoverText.enable,
			    restHoverTextProps = _objectWithoutProperties(hoverText, ["enable"]);

			var hoverHandler = interactive ? { onHover: this.handleHover, onBlur: this.handleHover } : {};

			var line1Edge = (0, _utils.isDefined)(startXY) && (0, _utils.isDefined)(endXY) ? _react2.default.createElement(
				"g",
				null,
				this.getEdgeCircle({
					xy: startXY,
					dragHandler: this.handleLine1Edge1Drag,
					cursor: "react-stockcharts-move-cursor",
					fill: edgeFill
				}),
				this.getEdgeCircle({
					xy: endXY,
					dragHandler: this.handleLine1Edge2Drag,
					cursor: "react-stockcharts-move-cursor",
					fill: edgeFill
				})
			) : null;

			return _react2.default.createElement(
				"g",
				null,
				_react2.default.createElement(_GannFan2.default, _extends({
					selected: hover || selected

				}, hoverHandler, {
					onClick: this.handleSelect,
					onClickOutside: this.handleUnSelect,

					startXY: startXY,
					endXY: endXY,
					stroke: stroke,
					strokeWidth: hover || selected ? strokeWidth + 1 : strokeWidth,
					fill: fill,
					opacity: opacity,
					fillOpacity: fillOpacity,
					fontFamily: fontFamily,
					fontSize: fontSize,
					fontStroke: fontStroke,
					interactiveCursorClass: "react-stockcharts-move-cursor",

					onDragStart: this.handleDragStart,
					onDrag: this.handleChannelDrag,
					onDragComplete: this.handleDragComplete
				})),
				line1Edge,
				_react2.default.createElement(_HoverTextNearMouse2.default, _extends({
					show: hoverTextEnabled && hover && !selected
				}, restHoverTextProps))
			);
		}
	}]);

	return EachGannFan;
}(_react.Component);

EachGannFan.propTypes = {
	startXY: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
	endXY: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
	dy: _propTypes2.default.number,

	stroke: _propTypes2.default.string.isRequired,
	strokeWidth: _propTypes2.default.number.isRequired,
	fill: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
	opacity: _propTypes2.default.number.isRequired,
	fillOpacity: _propTypes2.default.number.isRequired,

	fontFamily: _propTypes2.default.string.isRequired,
	fontSize: _propTypes2.default.number.isRequired,
	fontStroke: _propTypes2.default.string.isRequired,

	interactive: _propTypes2.default.bool.isRequired,

	r: _propTypes2.default.number.isRequired,
	edgeFill: _propTypes2.default.string.isRequired,
	edgeStroke: _propTypes2.default.string.isRequired,
	edgeStrokeWidth: _propTypes2.default.number.isRequired,
	hoverText: _propTypes2.default.object.isRequired,

	index: _propTypes2.default.number,
	onDrag: _propTypes2.default.func.isRequired,
	onDragComplete: _propTypes2.default.func.isRequired
};

EachGannFan.defaultProps = {
	yDisplayFormat: function yDisplayFormat(d) {
		return d.toFixed(2);
	},
	interactive: true,
	edgeStroke: "#000000",
	edgeFill: "#FFFFFF",
	edgeStrokeWidth: 1,
	r: 5,
	onDrag: _utils.noop,
	onDragComplete: _utils.noop,

	hoverText: _extends({}, _HoverTextNearMouse2.default.defaultProps, {
		enable: true,
		bgHeight: 18,
		bgWidth: 120,
		text: "Click to select object"
	})
};

exports.default = EachGannFan;