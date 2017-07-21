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

import EachTrendLine from "./hoc/EachTrendLine";
import StraightLine from "./components/StraightLine";
import MouseLocationIndicator from "./components/MouseLocationIndicator";
import HoverTextNearMouse from "./components/HoverTextNearMouse";

var TrendLine = function (_Component) {
	_inherits(TrendLine, _Component);

	function TrendLine(props) {
		_classCallCheck(this, TrendLine);

		var _this = _possibleConstructorReturn(this, (TrendLine.__proto__ || Object.getPrototypeOf(TrendLine)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawLine = _this.handleDrawLine.bind(_this);
		_this.handleDragLine = _this.handleDragLine.bind(_this);
		_this.handleDragLineComplete = _this.handleDragLineComplete.bind(_this);

		_this.state = {};
		return _this;
	}

	_createClass(TrendLine, [{
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
				var trends = this.props.trends;

				var newTrends = trends.map(function (each, idx) {
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
			var trends = this.props.trends;


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
					var newTrends = trends.concat({ start: current.start, end: xyValue });
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
			    trends = _props.trends;
			var _props2 = this.props,
			    enabled = _props2.enabled,
			    snap = _props2.snap,
			    shouldDisableSnap = _props2.shouldDisableSnap,
			    snapTo = _props2.snapTo,
			    type = _props2.type;
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


			var tempLine = isDefined(current) && isDefined(current.end) ? React.createElement(StraightLine, { type: type,
				noHover: true,
				x1Value: current.start[0],
				y1Value: current.start[1],
				x2Value: current.end[0],
				y2Value: current.end[1],
				stroke: stroke,
				strokeWidth: strokeWidth,
				opacity: opacity }) : null;

			return React.createElement(
				"g",
				null,
				trends.map(function (each, idx) {
					return React.createElement(EachTrendLine, {
						key: idx,
						index: idx,
						type: type,
						x1Value: getValueFromOverride(override, idx, "x1Value", each.start[0]),
						y1Value: getValueFromOverride(override, idx, "y1Value", each.start[1]),
						x2Value: getValueFromOverride(override, idx, "x2Value", each.end[0]),
						y2Value: getValueFromOverride(override, idx, "y2Value", each.end[1]),
						stroke: stroke,
						strokeWidth: strokeWidth,
						opacity: opacity,
						hoverText: hoverText,
						onDrag: _this4.handleDragLine,
						onDragComplete: _this4.handleDragLineComplete,
						edgeInteractiveCursor: "react-stockcharts-move-cursor",
						lineInteractiveCursor: "react-stockcharts-move-cursor"
					});
				}),
				tempLine,
				React.createElement(MouseLocationIndicator, {
					enabled: enabled,
					snap: snap,
					shouldDisableSnap: shouldDisableSnap,
					snapTo: snapTo,
					r: currentPositionRadius,
					stroke: currentPositionStroke,
					opacity: currentPositionOpacity,
					strokeWidth: currentPositionStrokeWidth,
					onMouseDown: this.handleStartAndEnd,
					onMouseMove: this.handleDrawLine })
			);
		}
	}]);

	return TrendLine;
}(Component);

TrendLine.propTypes = {
	snap: PropTypes.bool.isRequired,
	enabled: PropTypes.bool.isRequired,
	snapTo: PropTypes.func.isRequired,
	shouldDisableSnap: PropTypes.func.isRequired,
	onStart: PropTypes.func.isRequired,
	onComplete: PropTypes.func.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	currentPositionStroke: PropTypes.string,
	currentPositionStrokeWidth: PropTypes.number,
	currentPositionOpacity: PropTypes.number,
	currentPositionRadius: PropTypes.number,
	stroke: PropTypes.string,
	opacity: PropTypes.number,
	type: PropTypes.oneOf(["XLINE", // extends from -Infinity to +Infinity
	"RAY", // extends to +/-Infinity in one direction
	"LINE"]),
	hoverText: PropTypes.object.isRequired,

	endPointCircleFill: PropTypes.string,
	endPointCircleRadius: PropTypes.number,
	trends: PropTypes.array.isRequired
};

TrendLine.defaultProps = {
	stroke: "#000000",
	type: "XLINE",
	opacity: 0.7,
	strokeWidth: 1,
	onStart: noop,
	onComplete: noop,
	shouldDisableSnap: function shouldDisableSnap(e) {
		return e.button === 2 || e.shiftKey;
	},
	currentPositionStroke: "#000000",
	currentPositionOpacity: 1,
	currentPositionStrokeWidth: 3,
	currentPositionRadius: 4,
	endPointCircleFill: "#000000",
	endPointCircleRadius: 5,
	trends: [],
	hoverText: _extends({}, HoverTextNearMouse.defaultProps, {
		enable: true,
		bgHeight: 18,
		bgWidth: 120,
		text: "Click to select object"
	})
};

export default TrendLine;