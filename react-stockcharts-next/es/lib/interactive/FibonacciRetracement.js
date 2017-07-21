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

import EachFibRetracement from "./hoc/EachFibRetracement";
import MouseLocationIndicator from "./components/MouseLocationIndicator";
import HoverTextNearMouse from "./components/HoverTextNearMouse";

var FibonacciRetracement = function (_Component) {
	_inherits(FibonacciRetracement, _Component);

	function FibonacciRetracement(props) {
		_classCallCheck(this, FibonacciRetracement);

		var _this = _possibleConstructorReturn(this, (FibonacciRetracement.__proto__ || Object.getPrototypeOf(FibonacciRetracement)).call(this, props));

		_this.handleStartAndEnd = _this.handleStartAndEnd.bind(_this);
		_this.handleDrawRetracement = _this.handleDrawRetracement.bind(_this);

		_this.handleEdge1Drag = _this.handleEdge1Drag.bind(_this);
		_this.handleEdge2Drag = _this.handleEdge2Drag.bind(_this);

		_this.handleDrag = _this.handleDrag.bind(_this);
		_this.handleDragComplete = _this.handleDragComplete.bind(_this);

		_this.state = {};
		return _this;
	}

	_createClass(FibonacciRetracement, [{
		key: "terminate",
		value: function terminate() {
			this.setState({
				current: null,
				override: null
			});
		}
	}, {
		key: "handleStartAndEnd",
		value: function handleStartAndEnd(xyValue) {
			var _this2 = this;

			var retracements = this.props.retracements;
			var current = this.state.current;


			if (isNotDefined(current) || isNotDefined(current.x1)) {
				this.setState({
					current: {
						x1: xyValue[0],
						y1: xyValue[1],
						x2: null,
						y2: null
					}
				}, function () {
					_this2.props.onStart();
				});
			} else {
				var newRetracements = retracements.concat(_extends({}, current, { x2: xyValue[0], y2: xyValue[1] }));

				this.setState({
					current: null
				}, function () {
					_this2.props.onComplete(newRetracements);
				});
			}
		}
	}, {
		key: "handleDrawRetracement",
		value: function handleDrawRetracement(xyValue) {
			var current = this.state.current;


			if (isDefined(current) && isDefined(current.x1)) {
				this.setState({
					current: _extends({}, current, {
						x2: xyValue[0],
						y2: xyValue[1]
					})
				});
			}
		}
	}, {
		key: "handleDrag",
		value: function handleDrag(index, xy) {
			this.setState({
				override: _extends({
					index: index
				}, xy)
			});
		}
	}, {
		key: "handleEdge1Drag",
		value: function handleEdge1Drag(echo, newXYValue, origXYValue) {
			var retracements = this.state.retracements;
			var index = echo.index;


			var dx = origXYValue.x1Value - newXYValue.x1Value;

			this.setState({
				override: {
					index: index,
					x1: retracements[index].x1 - dx,
					y1: retracements[index].y1,
					x2: retracements[index].x2,
					y2: retracements[index].y2
				}
			});
		}
	}, {
		key: "handleEdge2Drag",
		value: function handleEdge2Drag(echo, newXYValue, origXYValue) {
			var retracements = this.state.retracements;
			var index = echo.index;


			var dx = origXYValue.x2Value - newXYValue.x2Value;

			this.setState({
				override: {
					index: index,
					x1: retracements[index].x1,
					y1: retracements[index].y1,
					x2: retracements[index].x2 - dx,
					y2: retracements[index].y2
				}
			});
		}
	}, {
		key: "handleDragComplete",
		value: function handleDragComplete() {
			var _this3 = this;

			var retracements = this.props.retracements;
			var override = this.state.override;


			if (isDefined(override)) {
				var index = override.index,
				    rest = _objectWithoutProperties(override, ["index"]);

				var newRetracements = retracements.map(function (each, idx) {
					return idx === index ? rest : each;
				});

				this.setState({
					override: null
				}, function () {
					_this3.props.onComplete(newRetracements);
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    current = _state.current,
			    override = _state.override;
			var retracements = this.props.retracements;
			var _props = this.props,
			    stroke = _props.stroke,
			    strokeWidth = _props.strokeWidth,
			    opacity = _props.opacity,
			    fontFamily = _props.fontFamily,
			    fontSize = _props.fontSize,
			    fontStroke = _props.fontStroke,
			    type = _props.type;
			var _props2 = this.props,
			    currentPositionStroke = _props2.currentPositionStroke,
			    currentPositionOpacity = _props2.currentPositionOpacity,
			    currentPositionStrokeWidth = _props2.currentPositionStrokeWidth,
			    currentPositionRadius = _props2.currentPositionRadius;
			var _props3 = this.props,
			    enabled = _props3.enabled,
			    hoverText = _props3.hoverText;

			var overrideIndex = isDefined(override) ? override.index : null;

			var currentRetracement = isDefined(current) && isDefined(current.x2) ? React.createElement(EachFibRetracement, _extends({
				interactive: false,
				type: type,
				stroke: stroke,
				strokeWidth: strokeWidth,
				opacity: opacity,
				fontFamily: fontFamily,
				fontSize: fontSize,
				fontStroke: fontStroke,
				hoverText: hoverText
			}, current)) : null;

			return React.createElement(
				"g",
				null,
				retracements.map(function (each, idx) {
					return React.createElement(EachFibRetracement, _extends({ key: idx,
						index: idx,
						type: type,
						stroke: stroke,
						strokeWidth: strokeWidth,
						opacity: opacity,
						fontFamily: fontFamily,
						fontSize: fontSize,
						fontStroke: fontStroke,
						hoverText: hoverText
					}, idx === overrideIndex ? override : each, {
						onDrag: _this4.handleDrag,
						onDragComplete: _this4.handleDragComplete
					}));
				}),
				currentRetracement,
				React.createElement(MouseLocationIndicator, {
					enabled: enabled,
					snap: false,
					r: currentPositionRadius,
					stroke: currentPositionStroke,
					opacity: currentPositionOpacity,
					strokeWidth: currentPositionStrokeWidth,
					onMouseDown: this.handleStartAndEnd,
					onMouseMove: this.handleDrawRetracement })
			);
		}
	}]);

	return FibonacciRetracement;
}(Component);

FibonacciRetracement.propTypes = {
	enabled: PropTypes.bool.isRequired,
	fontFamily: PropTypes.string.isRequired,
	fontSize: PropTypes.number.isRequired,
	fontStroke: PropTypes.string,
	chartCanvasType: PropTypes.string,
	width: PropTypes.number,
	strokeWidth: PropTypes.number,
	stroke: PropTypes.string,
	opacity: PropTypes.number,
	onStart: PropTypes.func,
	onComplete: PropTypes.func,
	type: PropTypes.oneOf(["EXTEND", // extends from -Infinity to +Infinity
	"BOUND"]).isRequired,
	hoverText: PropTypes.object.isRequired,

	currentPositionStroke: PropTypes.string,
	currentPositionStrokeWidth: PropTypes.number,
	currentPositionOpacity: PropTypes.number,
	currentPositionRadius: PropTypes.number,

	childProps: PropTypes.any,
	retracements: PropTypes.array.isRequired
};

FibonacciRetracement.defaultProps = {
	enabled: true,
	stroke: "#000000",
	strokeWidth: 1,
	opacity: .9,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 10,
	fontStroke: "#000000",
	type: "EXTEND",
	retracements: [],
	onStart: noop,
	onComplete: noop,
	hoverText: _extends({}, HoverTextNearMouse.defaultProps, {
		enable: true,
		bgHeight: 18,
		bgWidth: 120,
		text: "Click to select object"
	}),
	currentPositionStroke: "#000000",
	currentPositionOpacity: 1,
	currentPositionStrokeWidth: 3,
	currentPositionRadius: 4

};

export default FibonacciRetracement;