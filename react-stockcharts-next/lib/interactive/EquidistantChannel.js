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

var _EachEquidistantChannel = require("./hoc/EachEquidistantChannel");

var _EachEquidistantChannel2 = _interopRequireDefault(_EachEquidistantChannel);

var _StraightLine = require("./components/StraightLine");

var _MouseLocationIndicator = require("./components/MouseLocationIndicator");

var _MouseLocationIndicator2 = _interopRequireDefault(_MouseLocationIndicator);

var _HoverTextNearMouse = require("./components/HoverTextNearMouse");

var _HoverTextNearMouse2 = _interopRequireDefault(_HoverTextNearMouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EquidistantChannel = function (_Component) {
	_inherits(EquidistantChannel, _Component);

	function EquidistantChannel(props) {
		_classCallCheck(this, EquidistantChannel);

		var _this = _possibleConstructorReturn(this, (EquidistantChannel.__proto__ || Object.getPrototypeOf(EquidistantChannel)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawChannel = _this.handleDrawChannel.bind(_this);
		_this.handleDragChannel = _this.handleDragChannel.bind(_this);
		_this.handleDragChannelComplete = _this.handleDragChannelComplete.bind(_this);

		_this.state = {};
		return _this;
	}

	_createClass(EquidistantChannel, [{
		key: "terminate",
		value: function terminate() {
			this.setState({
				current: null,
				override: null
			});
		}
	}, {
		key: "handleDragChannel",
		value: function handleDragChannel(index, newXYValue) {
			this.setState({
				override: _extends({
					index: index
				}, newXYValue)
			});
		}
	}, {
		key: "handleDragChannelComplete",
		value: function handleDragChannelComplete() {
			var _this2 = this;

			var override = this.state.override;
			var channels = this.props.channels;

			if ((0, _utils.isDefined)(override)) {
				var index = override.index,
				    rest = _objectWithoutProperties(override, ["index"]);

				var newChannels = channels.map(function (each, idx) {
					return idx === index ? rest : each;
				});
				this.setState({
					override: null
				}, function () {
					_this2.props.onComplete(newChannels);
				});
			}
		}
	}, {
		key: "handleDrawChannel",
		value: function handleDrawChannel(xyValue) {
			var current = this.state.current;


			if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.startXY)) {

				if ((0, _utils.isNotDefined)(current.dy)) {
					this.setState({
						current: {
							startXY: current.startXY,
							endXY: xyValue
						}
					});
				} else {
					var m = (0, _StraightLine.getSlope)(current.startXY, current.endXY);
					var b = (0, _StraightLine.getYIntercept)(m, current.endXY);
					var y = m * xyValue[0] + b;
					var dy = xyValue[1] - y;

					this.setState({
						current: _extends({}, current, {
							dy: dy
						})
					});
				}
			}
		}
	}, {
		key: "handleStartAndEnd",
		value: function handleStartAndEnd(xyValue) {
			var _this3 = this;

			var current = this.state.current;
			var channels = this.props.channels;


			if ((0, _utils.isNotDefined)(current) || (0, _utils.isNotDefined)(current.startXY)) {
				this.setState({
					current: {
						startXY: xyValue,
						endXY: null
					}
				}, function () {
					_this3.props.onStart();
				});
			} else if ((0, _utils.isNotDefined)(current.dy)) {
				this.setState({
					current: _extends({}, current, {
						dy: 0
					})
				});
			} else {
				this.setState({
					current: null
				}, function () {
					var newChannels = channels.concat(current);
					_this3.props.onComplete(newChannels);
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			var _props = this.props,
			    stroke = _props.stroke,
			    opacity = _props.opacity,
			    strokeWidth = _props.strokeWidth,
			    fill = _props.fill;
			var _props2 = this.props,
			    enabled = _props2.enabled,
			    channels = _props2.channels;
			var _props3 = this.props,
			    currentPositionRadius = _props3.currentPositionRadius,
			    currentPositionStroke = _props3.currentPositionStroke;
			var _props4 = this.props,
			    currentPositionOpacity = _props4.currentPositionOpacity,
			    currentPositionStrokeWidth = _props4.currentPositionStrokeWidth;
			var hoverText = this.props.hoverText;
			var _state = this.state,
			    current = _state.current,
			    override = _state.override;

			var overrideIndex = (0, _utils.isDefined)(override) ? override.index : null;

			var tempChannel = (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.endXY) ? _react2.default.createElement(_EachEquidistantChannel2.default, _extends({
				interactive: false
			}, current, {
				stroke: stroke,
				strokeWidth: strokeWidth,
				fill: fill,
				hoverText: hoverText,
				opacity: opacity })) : null;

			return _react2.default.createElement(
				"g",
				null,
				channels.map(function (each, idx) {
					return _react2.default.createElement(_EachEquidistantChannel2.default, _extends({
						key: idx,
						index: idx
					}, idx === overrideIndex ? override : each, {
						stroke: stroke,
						strokeWidth: strokeWidth,
						fill: fill,
						hoverText: hoverText,
						opacity: opacity,
						onDrag: _this4.handleDragChannel,
						onDragComplete: _this4.handleDragChannelComplete
					}));
				}),
				tempChannel,
				_react2.default.createElement(_MouseLocationIndicator2.default, {
					enabled: enabled,
					snap: false,
					r: currentPositionRadius,
					stroke: currentPositionStroke,
					opacity: currentPositionOpacity,
					strokeWidth: currentPositionStrokeWidth,
					onMouseDown: this.handleStartAndEnd,
					onMouseMove: this.handleDrawChannel })
			);
		}
	}]);

	return EquidistantChannel;
}(_react.Component);

EquidistantChannel.propTypes = {
	enabled: _propTypes2.default.bool.isRequired,
	onStart: _propTypes2.default.func.isRequired,
	onComplete: _propTypes2.default.func.isRequired,
	strokeWidth: _propTypes2.default.number.isRequired,
	fill: _propTypes2.default.string,
	currentPositionStroke: _propTypes2.default.string,
	currentPositionStrokeWidth: _propTypes2.default.number,
	currentPositionOpacity: _propTypes2.default.number,
	currentPositionRadius: _propTypes2.default.number,
	stroke: _propTypes2.default.string,
	opacity: _propTypes2.default.number,
	endPointCircleFill: _propTypes2.default.string,
	endPointCircleRadius: _propTypes2.default.number,
	hoverText: _propTypes2.default.object.isRequired,
	channels: _propTypes2.default.array.isRequired
};

EquidistantChannel.defaultProps = {
	stroke: "#000000",
	opacity: 0.7,
	strokeWidth: 1,
	onStart: _utils.noop,
	onComplete: _utils.noop,
	currentPositionStroke: "#000000",
	currentPositionOpacity: 1,
	currentPositionStrokeWidth: 3,
	currentPositionRadius: 4,
	endPointCircleFill: "#000000",
	endPointCircleRadius: 5,
	fill: "#8AAFE2",
	hoverText: _extends({}, _HoverTextNearMouse2.default.defaultProps, {
		enable: true,
		bgHeight: 18,
		bgWidth: 120,
		text: "Click to select object"
	}),
	channels: []
};

exports.default = EquidistantChannel;