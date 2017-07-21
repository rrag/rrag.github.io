var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { noop } from "../../utils";
import { getCurrentItem } from "../../utils/ChartDataUtil";

import HoverTextNearMouse from "../components/HoverTextNearMouse";
import { default as LinearRegressionChannelWithArea, edge1Provider, edge2Provider } from "../components/LinearRegressionChannelWithArea";

import ClickableCircle from "../components/ClickableCircle";

var EachLinearRegressionChannel = function (_Component) {
	_inherits(EachLinearRegressionChannel, _Component);

	function EachLinearRegressionChannel(props) {
		_classCallCheck(this, EachLinearRegressionChannel);

		var _this = _possibleConstructorReturn(this, (EachLinearRegressionChannel.__proto__ || Object.getPrototypeOf(EachLinearRegressionChannel)).call(this, props));

		_this.handleSelect = _this.handleSelect.bind(_this);
		_this.handleUnSelect = _this.handleUnSelect.bind(_this);

		_this.handleEdge1Drag = _this.handleEdge1Drag.bind(_this);
		_this.handleEdge2Drag = _this.handleEdge2Drag.bind(_this);

		_this.handleDragComplete = _this.handleDragComplete.bind(_this);

		_this.handleHover = _this.handleHover.bind(_this);

		_this.state = {
			selected: false,
			hover: false
		};
		return _this;
	}

	_createClass(EachLinearRegressionChannel, [{
		key: "handleSelect",
		value: function handleSelect() {
			this.setState({
				selected: !this.state.selected
			});
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
		key: "handleEdge1Drag",
		value: function handleEdge1Drag(moreProps) {
			var _props = this.props,
			    index = _props.index,
			    onDrag = _props.onDrag,
			    snapTo = _props.snapTo;
			var x2Value = this.props.x2Value;

			var _getNewXY = getNewXY(moreProps, snapTo),
			    _getNewXY2 = _slicedToArray(_getNewXY, 1),
			    x1Value = _getNewXY2[0];

			onDrag(index, {
				x1Value: x1Value,
				x2Value: x2Value
			});
		}
	}, {
		key: "handleEdge2Drag",
		value: function handleEdge2Drag(moreProps) {
			var _props2 = this.props,
			    index = _props2.index,
			    onDrag = _props2.onDrag,
			    snapTo = _props2.snapTo;
			var x1Value = this.props.x1Value;

			var _getNewXY3 = getNewXY(moreProps, snapTo),
			    _getNewXY4 = _slicedToArray(_getNewXY3, 1),
			    x2Value = _getNewXY4[0];

			onDrag(index, {
				x1Value: x1Value,
				x2Value: x2Value
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
		key: "handleHover",
		value: function handleHover(moreProps) {
			if (this.state.hover !== moreProps.hovering) {
				this.setState({
					hover: moreProps.hovering
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props3 = this.props,
			    x1Value = _props3.x1Value,
			    x2Value = _props3.x2Value,
			    stroke = _props3.stroke,
			    strokeWidth = _props3.strokeWidth,
			    fill = _props3.fill,
			    opacity = _props3.opacity,
			    r = _props3.r,
			    edgeStrokeWidth = _props3.edgeStrokeWidth,
			    edgeFill = _props3.edgeFill,
			    edgeStroke = _props3.edgeStroke,
			    edgeInteractiveCursor = _props3.edgeInteractiveCursor,
			    hoverText = _props3.hoverText,
			    interactive = _props3.interactive;
			var _state = this.state,
			    selected = _state.selected,
			    hover = _state.hover;


			var hoverHandler = interactive ? { onHover: this.handleHover, onBlur: this.handleHover } : {};

			var hoverTextEnabled = hoverText.enable,
			    restHoverTextProps = _objectWithoutProperties(hoverText, ["enable"]);

			// console.log("SELECTED ->", selected);


			return React.createElement(
				"g",
				null,
				React.createElement(LinearRegressionChannelWithArea, _extends({
					selected: selected || hover
				}, hoverHandler, {
					onClick: this.handleSelect,
					onClickOutside: this.handleUnSelect,
					x1Value: x1Value,
					x2Value: x2Value,
					fill: fill,
					stroke: stroke,
					strokeWidth: hover || selected ? strokeWidth + 1 : strokeWidth,
					opacity: opacity })),
				React.createElement(ClickableCircle, {
					show: selected || hover,
					xyProvider: edge1Provider(this.props),
					r: r,
					fill: edgeFill,
					stroke: edgeStroke,
					strokeWidth: edgeStrokeWidth,
					opacity: 1,
					interactiveCursorClass: edgeInteractiveCursor,
					onDrag: this.handleEdge1Drag,
					onDragComplete: this.handleDragComplete }),
				React.createElement(ClickableCircle, {
					show: selected || hover,
					xyProvider: edge2Provider(this.props),
					r: r,
					fill: edgeFill,
					stroke: edgeStroke,
					strokeWidth: edgeStrokeWidth,
					opacity: 1,
					interactiveCursorClass: edgeInteractiveCursor,
					onDrag: this.handleEdge2Drag,
					onDragComplete: this.handleDragComplete }),
				React.createElement(HoverTextNearMouse, _extends({
					show: hoverTextEnabled && hover && !selected
				}, restHoverTextProps))
			);
		}
	}]);

	return EachLinearRegressionChannel;
}(Component);

export function getNewXY(moreProps, snapTo) {
	var xScale = moreProps.xScale,
	    xAccessor = moreProps.xAccessor,
	    plotData = moreProps.plotData,
	    mouseXY = moreProps.mouseXY;


	var currentItem = getCurrentItem(xScale, xAccessor, mouseXY, plotData);
	var x = xAccessor(currentItem);
	var y = snapTo(currentItem);

	return [x, y];
}

EachLinearRegressionChannel.propTypes = {
	x1Value: PropTypes.any.isRequired,
	x2Value: PropTypes.any.isRequired,

	index: PropTypes.number,

	stroke: PropTypes.string.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	fill: PropTypes.string.isRequired,
	opacity: PropTypes.number.isRequired,

	onDrag: PropTypes.func.isRequired,
	onDragComplete: PropTypes.func.isRequired,
	snapTo: PropTypes.func,
	interactive: PropTypes.bool.isRequired,

	r: PropTypes.number.isRequired,
	defaultClassName: PropTypes.string,

	edgeStrokeWidth: PropTypes.number.isRequired,
	edgeStroke: PropTypes.string.isRequired,
	edgeInteractiveCursor: PropTypes.string,
	edgeFill: PropTypes.string.isRequired,
	hoverText: PropTypes.object.isRequired
};

EachLinearRegressionChannel.defaultProps = {
	onDrag: noop,
	onDragComplete: noop,
	edgeStroke: "#000000",
	edgeFill: "#FFFFFF",
	edgeStrokeWidth: 2,
	r: 5,
	strokeWidth: 1,
	opacity: 1,
	interactive: true,
	fill: "#8AAFE2",
	hoverText: _extends({}, HoverTextNearMouse.defaultProps, {
		enable: true,
		bgHeight: 18,
		bgWidth: 175,
		text: "Click and drag the edge circles"
	})
};

export default EachLinearRegressionChannel;