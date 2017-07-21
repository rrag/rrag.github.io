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

var _EachGannFan = require("./hoc/EachGannFan");

var _EachGannFan2 = _interopRequireDefault(_EachGannFan);

var _MouseLocationIndicator = require("./components/MouseLocationIndicator");

var _MouseLocationIndicator2 = _interopRequireDefault(_MouseLocationIndicator);

var _HoverTextNearMouse = require("./components/HoverTextNearMouse");

var _HoverTextNearMouse2 = _interopRequireDefault(_HoverTextNearMouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GannFan = function (_Component) {
	_inherits(GannFan, _Component);

	function GannFan(props) {
		_classCallCheck(this, GannFan);

		var _this = _possibleConstructorReturn(this, (GannFan.__proto__ || Object.getPrototypeOf(GannFan)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawFan = _this.handleDrawFan.bind(_this);
		_this.handleDragFan = _this.handleDragFan.bind(_this);
		_this.handleDragFanComplete = _this.handleDragFanComplete.bind(_this);

		_this.state = {};
		return _this;
	}

	_createClass(GannFan, [{
		key: "terminate",
		value: function terminate() {
			this.setState({
				current: null,
				override: null
			});
		}
	}, {
		key: "handleDragFan",
		value: function handleDragFan(index, newXYValue) {
			this.setState({
				override: _extends({
					index: index
				}, newXYValue)
			});
		}
	}, {
		key: "handleDragFanComplete",
		value: function handleDragFanComplete() {
			var _this2 = this;

			var override = this.state.override;
			var fans = this.props.fans;

			if ((0, _utils.isDefined)(override)) {
				var index = override.index,
				    rest = _objectWithoutProperties(override, ["index"]);

				var newfans = fans.map(function (each, idx) {
					return idx === index ? rest : each;
				});
				this.setState({
					override: null
				}, function () {
					_this2.props.onComplete(newfans);
				});
			}
		}
	}, {
		key: "handleDrawFan",
		value: function handleDrawFan(xyValue) {
			var current = this.state.current;


			if ((0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.startXY)) {

				this.setState({
					current: {
						startXY: current.startXY,
						endXY: xyValue
					}
				});
			}
		}
	}, {
		key: "handleStartAndEnd",
		value: function handleStartAndEnd(xyValue) {
			var _this3 = this;

			var current = this.state.current;
			var fans = this.props.fans;


			if ((0, _utils.isNotDefined)(current) || (0, _utils.isNotDefined)(current.startXY)) {
				this.setState({
					current: {
						startXY: xyValue,
						endXY: null
					}
				}, function () {
					_this3.props.onStart();
				});
			} else {
				this.setState({
					current: null
				}, function () {
					var newfans = fans.concat(current);
					_this3.props.onComplete(newfans);
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
			    fill = _props.fill,
			    fillOpacity = _props.fillOpacity;
			var _props2 = this.props,
			    fontFamily = _props2.fontFamily,
			    fontSize = _props2.fontSize,
			    fontStroke = _props2.fontStroke;
			var _props3 = this.props,
			    enabled = _props3.enabled,
			    fans = _props3.fans;
			var _props4 = this.props,
			    currentPositionRadius = _props4.currentPositionRadius,
			    currentPositionStroke = _props4.currentPositionStroke;
			var _props5 = this.props,
			    currentPositionOpacity = _props5.currentPositionOpacity,
			    currentPositionStrokeWidth = _props5.currentPositionStrokeWidth;
			var hoverText = this.props.hoverText;
			var _state = this.state,
			    current = _state.current,
			    override = _state.override;

			var overrideIndex = (0, _utils.isDefined)(override) ? override.index : null;

			var tempChannel = (0, _utils.isDefined)(current) && (0, _utils.isDefined)(current.endXY) ? _react2.default.createElement(_EachGannFan2.default, _extends({
				interactive: false
			}, current, {
				stroke: stroke,
				strokeWidth: strokeWidth,
				fill: fill,
				opacity: opacity,
				fillOpacity: fillOpacity,
				hoverText: hoverText,

				fontFamily: fontFamily,
				fontSize: fontSize,
				fontStroke: fontStroke

			})) : null;

			return _react2.default.createElement(
				"g",
				null,
				fans.map(function (each, idx) {
					return _react2.default.createElement(_EachGannFan2.default, _extends({
						key: idx,
						index: idx
					}, idx === overrideIndex ? override : each, {
						stroke: stroke,
						strokeWidth: strokeWidth,
						fill: fill,
						opacity: opacity,
						fillOpacity: fillOpacity,
						hoverText: hoverText,

						fontFamily: fontFamily,
						fontSize: fontSize,
						fontStroke: fontStroke,

						onDrag: _this4.handleDragFan,
						onDragComplete: _this4.handleDragFanComplete
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
					onMouseMove: this.handleDrawFan })
			);
		}
	}]);

	return GannFan;
}(_react.Component);

GannFan.propTypes = {
	enabled: _propTypes2.default.bool.isRequired,
	onStart: _propTypes2.default.func.isRequired,
	onComplete: _propTypes2.default.func.isRequired,
	strokeWidth: _propTypes2.default.number.isRequired,
	fill: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,

	fontFamily: _propTypes2.default.string.isRequired,
	fontSize: _propTypes2.default.number.isRequired,
	fontStroke: _propTypes2.default.string,

	currentPositionStroke: _propTypes2.default.string,
	currentPositionStrokeWidth: _propTypes2.default.number,
	currentPositionOpacity: _propTypes2.default.number,
	currentPositionRadius: _propTypes2.default.number,
	stroke: _propTypes2.default.string,
	opacity: _propTypes2.default.number,
	fillOpacity: _propTypes2.default.number,
	endPointCircleFill: _propTypes2.default.string,
	endPointCircleRadius: _propTypes2.default.number,
	hoverText: _propTypes2.default.object.isRequired,

	fans: _propTypes2.default.array.isRequired
};

GannFan.defaultProps = {
	stroke: "#000000",
	opacity: 0.4,
	fillOpacity: 0.2,
	strokeWidth: 1,
	onStart: _utils.noop,
	onComplete: _utils.noop,

	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 10,
	fontStroke: "#000000",

	currentPositionStroke: "#000000",
	currentPositionOpacity: 1,
	currentPositionStrokeWidth: 3,
	currentPositionRadius: 4,
	endPointCircleFill: "#000000",
	endPointCircleRadius: 5,
	fill: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f"],
	hoverText: _extends({}, _HoverTextNearMouse2.default.defaultProps, {
		enable: true,
		bgHeight: 18,
		bgWidth: 120,
		text: "Click to select object"
	}),
	fans: []
};

exports.default = GannFan;