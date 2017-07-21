"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { isDefined, isNotDefined, noop } from "../utils";

import EachGannFan from "./hoc/EachGannFan";
import MouseLocationIndicator from "./components/MouseLocationIndicator";
import HoverTextNearMouse from "./components/HoverTextNearMouse";

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

			if (isDefined(override)) {
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


			if (isDefined(current) && isDefined(current.startXY)) {

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


			if (isNotDefined(current) || isNotDefined(current.startXY)) {
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

			var overrideIndex = isDefined(override) ? override.index : null;

			var tempChannel = isDefined(current) && isDefined(current.endXY) ? React.createElement(EachGannFan, _extends({
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

			return React.createElement(
				"g",
				null,
				fans.map(function (each, idx) {
					return React.createElement(EachGannFan, _extends({
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
				React.createElement(MouseLocationIndicator, {
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
}(Component);

GannFan.propTypes = {
	enabled: PropTypes.bool.isRequired,
	onStart: PropTypes.func.isRequired,
	onComplete: PropTypes.func.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	fill: PropTypes.arrayOf(PropTypes.string).isRequired,

	fontFamily: PropTypes.string.isRequired,
	fontSize: PropTypes.number.isRequired,
	fontStroke: PropTypes.string,

	currentPositionStroke: PropTypes.string,
	currentPositionStrokeWidth: PropTypes.number,
	currentPositionOpacity: PropTypes.number,
	currentPositionRadius: PropTypes.number,
	stroke: PropTypes.string,
	opacity: PropTypes.number,
	fillOpacity: PropTypes.number,
	endPointCircleFill: PropTypes.string,
	endPointCircleRadius: PropTypes.number,
	hoverText: PropTypes.object.isRequired,

	fans: PropTypes.array.isRequired
};

GannFan.defaultProps = {
	stroke: "#000000",
	opacity: 0.4,
	fillOpacity: 0.2,
	strokeWidth: 1,
	onStart: noop,
	onComplete: noop,

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
	hoverText: _extends({}, HoverTextNearMouse.defaultProps, {
		enable: true,
		bgHeight: 18,
		bgWidth: 120,
		text: "Click to select object"
	}),
	fans: []
};

export default GannFan;