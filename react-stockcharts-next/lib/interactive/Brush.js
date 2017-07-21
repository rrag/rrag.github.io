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

var _utils = require("../utils");

var _GenericChartComponent = require("../GenericChartComponent");

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brush = function (_Component) {
	_inherits(Brush, _Component);

	function Brush(props) {
		_classCallCheck(this, Brush);

		var _this = _possibleConstructorReturn(this, (Brush.__proto__ || Object.getPrototypeOf(Brush)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawBrush = _this.handleDrawBrush.bind(_this);
		_this.handleDrawBrushthis = _this.this.bind(_this);
		_this.state = {};
		return _this;
	}

	_createClass(Brush, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.node = node;
		}
	}, {
		key: "terminate",
		value: function terminate() {
			this.setState({
				x1: null, y1: null,
				x2: null, y2: null,
				startItem: null,
				startClick: null,
				rect: null
			});
		}
	}, {
		key: "handleDrawBrush",
		value: function handleDrawBrush() {
			var moreProps = this.node.getMoreProps();

			var xScale = moreProps.xScale,
			    mouseXY = moreProps.mouseXY,
			    currentItem = moreProps.currentItem,
			    chartConfig = moreProps.chartConfig,
			    xAccessor = moreProps.xAccessor;
			var enabled = this.props.enabled;
			var _state = this.state,
			    startClick = _state.startClick,
			    startItem = _state.startItem;


			if (enabled && (0, _utils.isDefined)(startItem)) {
				var yScale = chartConfig.yScale;


				var y1Value = yScale.invert(startClick[1]);
				var y2Value = yScale.invert(mouseXY[1]);

				var x1 = xScale(xAccessor(startItem));
				var y1 = yScale(y1Value);
				var x2 = xScale(xAccessor(currentItem));
				var y2 = yScale(y2Value);

				var height = Math.abs(y2 - y1);
				var width = Math.abs(x2 - x1);

				this.setState({
					rect: {
						x: Math.min(x1, x2),
						y: Math.min(y1, y2),
						height: height,
						width: width
					}
				});
			}
		}
	}, {
		key: "handleStartAndEnd",
		value: function handleStartAndEnd(e) {
			var moreProps = this.node.getMoreProps();

			var mouseXY = moreProps.mouseXY,
			    currentItem = moreProps.currentItem,
			    chartConfig = moreProps.chartConfig,
			    xAccessor = moreProps.xAccessor;
			var _props = this.props,
			    enabled = _props.enabled,
			    onBrush = _props.onBrush;


			if (enabled) {
				var _state2 = this.state,
				    x1 = _state2.x1,
				    y1 = _state2.y1,
				    startItem = _state2.startItem,
				    startClick = _state2.startClick;
				var yScale = chartConfig.yScale;

				var xValue = xAccessor(currentItem);
				var yValue = yScale.invert(mouseXY[1]);

				if ((0, _utils.isDefined)(startItem)) {
					// brush complete
					onBrush({
						x1: x1,
						y1: y1,
						x2: xAccessor(currentItem),
						y2: yValue,
						startItem: startItem,
						currentItem: currentItem,
						startClick: startClick,
						mouseXY: mouseXY
					}, e);
					this.terminate();
				} else {
					// brush start
					this.setState({
						x1: xValue,
						y1: yValue,
						x2: null,
						y2: null,
						startItem: currentItem,
						startClick: mouseXY
					});
				}
			}
		}
	}, {
		key: "render",
		value: function render() {
			var rect = this.state.rect;
			var _props2 = this.props,
			    fill = _props2.fill,
			    stroke = _props2.stroke,
			    opacity = _props2.opacity;

			var rectProps = { fill: fill, stroke: stroke, opacity: opacity };

			return _react2.default.createElement(
				"g",
				null,
				(0, _utils.isDefined)(rect) ? _react2.default.createElement("rect", _extends({}, rect, rectProps)) : null,
				_react2.default.createElement(_GenericChartComponent2.default, { ref: this.saveNode,
					svgDraw: this.renderSVG,
					isHover: (0, _utils.functor)(true),
					onMouseDown: this.handleStartAndEnd,
					onMouseMove: this.handleDrawBrush,
					drawOnMouseExitOfCanvas: true
				})
			);
		}
	}]);

	return Brush;
}(_react.Component);

Brush.propTypes = {
	enabled: _propTypes2.default.bool.isRequired,
	onStart: _propTypes2.default.func.isRequired,
	onBrush: _propTypes2.default.func.isRequired,

	type: _propTypes2.default.oneOf(["1D", "2D"]),
	stroke: _propTypes2.default.string,
	fill: _propTypes2.default.string,
	opacity: _propTypes2.default.number,
	interactiveState: _propTypes2.default.object
};

Brush.defaultProps = {
	type: "2D",
	stroke: "#000000",
	opacity: 0.3,
	fill: "#3h3h3h",
	onBrush: _utils.noop,
	onStart: _utils.noop
};

exports.default = Brush;