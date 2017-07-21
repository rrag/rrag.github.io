"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { isDefined, isNotDefined, noop } from "../utils";

import { getValueFromOverride } from "./utils";

import EachLinearRegressionChannel from "./hoc/EachLinearRegressionChannel";
import MouseLocationIndicator from "./components/MouseLocationIndicator";
import HoverTextNearMouse from "./components/HoverTextNearMouse";

var StandardDeviationChannel = function (_Component) {
	_inherits(StandardDeviationChannel, _Component);

	function StandardDeviationChannel(props) {
		_classCallCheck(this, StandardDeviationChannel);

		var _this = _possibleConstructorReturn(this, (StandardDeviationChannel.__proto__ || Object.getPrototypeOf(StandardDeviationChannel)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawLine = _this.handleDrawLine.bind(_this);
		_this.handleDragLine = _this.handleDragLine.bind(_this);
		_this.handleDragLineComplete = _this.handleDragLineComplete.bind(_this);

		_this.state = {};
		return _this;
	}

	_createClass(StandardDeviationChannel, [{
		key: "terminate",
		value: function terminate() {
			this.setState({
				current: null,
				override: null
			});
		}
	}, {
		key: "handleDragLine",
		value: function handleDragLine(index, newXYValue) {
			this.setState({
				override: _extends({
					index: index
				}, newXYValue)
			});
		}
	}, {
		key: "handleDragLineComplete",
		value: function handleDragLineComplete() {
			var _this2 = this;

			var override = this.state.override;

			if (isDefined(override)) {
				var channels = this.props.channels;

				var newTrends = channels.map(function (each, idx) {
					return idx === override.index ? {
						start: [override.x1Value, override.y1Value],
						end: [override.x2Value, override.y2Value]
					} : each;
				});
				this.setState({
					override: null
				}, function () {
					_this2.props.onComplete(newTrends);
				});
			}
		}
	}, {
		key: "handleDrawLine",
		value: function handleDrawLine(xyValue) {
			var current = this.state.current;


			if (isDefined(current) && isDefined(current.start)) {
				this.setState({
					current: {
						start: current.start,
						end: xyValue
					}
				});
			}
		}
	}, {
		key: "handleStartAndEnd",
		value: function handleStartAndEnd(xyValue) {
			var _this3 = this;

			var current = this.state.current;
			var channels = this.props.channels;


			if (isNotDefined(current) || isNotDefined(current.start)) {
				this.setState({
					current: {
						start: xyValue,
						end: null
					}
				}, function () {
					_this3.props.onStart();
				});
			} else {
				this.setState({
					current: null
				}, function () {
					var newTrends = channels.concat({ start: current.start, end: xyValue });
					_this3.props.onComplete(newTrends);
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
			    channels = _props.channels;
			var _props2 = this.props,
			    enabled = _props2.enabled,
			    snapTo = _props2.snapTo;
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


			var tempLine = isDefined(current) && isDefined(current.end) ? React.createElement(EachLinearRegressionChannel, {
				interactive: false,
				x1Value: current.start[0],
				x2Value: current.end[0],
				stroke: stroke,
				strokeWidth: strokeWidth,
				hoverText: hoverText,
				opacity: opacity }) : null;

			return React.createElement(
				"g",
				null,
				channels.map(function (each, idx) {
					return React.createElement(EachLinearRegressionChannel, {
						key: idx,
						index: idx,
						x1Value: getValueFromOverride(override, idx, "x1Value", each.start[0]),
						x2Value: getValueFromOverride(override, idx, "x2Value", each.end[0]),
						stroke: stroke,
						strokeWidth: strokeWidth,
						hoverText: hoverText,
						opacity: opacity,
						snapTo: snapTo,
						onDrag: _this4.handleDragLine,
						onDragComplete: _this4.handleDragLineComplete,
						edgeInteractiveCursor: "react-stockcharts-move-cursor"
					});
				}),
				tempLine,
				React.createElement(MouseLocationIndicator, {
					enabled: enabled,
					snap: false,
					r: currentPositionRadius,
					stroke: currentPositionStroke,
					opacity: currentPositionOpacity,
					strokeWidth: currentPositionStrokeWidth,
					onMouseDown: this.handleStartAndEnd,
					onMouseMove: this.handleDrawLine })
			);
		}
	}]);

	return StandardDeviationChannel;
}(Component);

StandardDeviationChannel.propTypes = {
	enabled: PropTypes.bool.isRequired,
	snapTo: PropTypes.func.isRequired,
	onStart: PropTypes.func.isRequired,
	onComplete: PropTypes.func.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	currentPositionStroke: PropTypes.string,
	currentPositionStrokeWidth: PropTypes.number,
	currentPositionOpacity: PropTypes.number,
	currentPositionRadius: PropTypes.number,
	stroke: PropTypes.string,
	opacity: PropTypes.number,
	endPointCircleFill: PropTypes.string,
	endPointCircleRadius: PropTypes.number,
	hoverText: PropTypes.object.isRequired,
	channels: PropTypes.array.isRequired
};

StandardDeviationChannel.defaultProps = {
	stroke: "#000000",
	snapTo: function snapTo(d) {
		return d.close;
	},
	opacity: 0.7,
	strokeWidth: 1,
	onStart: noop,
	onComplete: noop,
	currentPositionStroke: "#000000",
	currentPositionOpacity: 1,
	currentPositionStrokeWidth: 3,
	currentPositionRadius: 4,
	endPointCircleFill: "#000000",
	endPointCircleRadius: 5,
	hoverText: _extends({}, HoverTextNearMouse.defaultProps, {
		enable: true,
		bgHeight: 18,
		bgWidth: 175,
		text: "Click and drag the edge circles"
	}),
	channels: []
};

export default StandardDeviationChannel;