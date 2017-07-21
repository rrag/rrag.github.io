var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { isDefined, head, last, noop } from "../../utils";
import { getCurrentItem } from "../../utils/ChartDataUtil";

import { getNewXY } from "./EachTrendLine";
import StraightLine, { generateLine } from "../components/StraightLine";
import ClickableCircle from "../components/ClickableCircle";
import HoverTextNearMouse from "../components/HoverTextNearMouse";
import Text from "../components/Text";

var EachFibRetracement = function (_Component) {
	_inherits(EachFibRetracement, _Component);

	function EachFibRetracement(props) {
		_classCallCheck(this, EachFibRetracement);

		var _this = _possibleConstructorReturn(this, (EachFibRetracement.__proto__ || Object.getPrototypeOf(EachFibRetracement)).call(this, props));

		_this.handleEdge1Drag = _this.handleEdge1Drag.bind(_this);
		_this.handleEdge2Drag = _this.handleEdge2Drag.bind(_this);

		_this.handleLineNSResizeTop = _this.handleLineNSResizeTop.bind(_this);
		_this.handleLineNSResizeBottom = _this.handleLineNSResizeBottom.bind(_this);
		_this.handleLineMove = _this.handleLineMove.bind(_this);

		_this.handleLineDragStart = _this.handleLineDragStart.bind(_this);
		_this.handleDragComplete = _this.handleDragComplete.bind(_this);

		_this.handleHover = _this.handleHover.bind(_this);
		_this.handleSelect = _this.handleSelect.bind(_this);
		_this.handleUnSelect = _this.handleUnSelect.bind(_this);

		_this.unselectCounter = 0;
		_this.state = {
			selected: false,
			hover: false
		};
		return _this;
	}

	_createClass(EachFibRetracement, [{
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
			this.setState({
				selected: true
			});
		}
	}, {
		key: "handleUnSelect",
		value: function handleUnSelect() {
			var _this2 = this;

			this.unselectCounter++;
			if (this.unselectCounter === 6) {
				this.setState({
					selected: false
				});
			}
			if (isDefined(this.timeoutId)) {
				clearTimeout(this.timeoutId);
			}

			this.timeoutId = setTimeout(function () {
				_this2.unselectCounter = 0;
			}, 100);
		}
	}, {
		key: "handleLineDragStart",
		value: function handleLineDragStart() {
			var _props = this.props,
			    x1 = _props.x1,
			    y1 = _props.y1,
			    x2 = _props.x2,
			    y2 = _props.y2;


			this.dragStart = {
				x1: x1, y1: y1, x2: x2, y2: y2
			};
		}
	}, {
		key: "handleLineMove",
		value: function handleLineMove(moreProps) {
			var _props2 = this.props,
			    index = _props2.index,
			    onDrag = _props2.onDrag;
			var _dragStart = this.dragStart,
			    x1Value = _dragStart.x1,
			    y1Value = _dragStart.y1,
			    x2Value = _dragStart.x2,
			    y2Value = _dragStart.y2;
			var xScale = moreProps.xScale,
			    yScale = moreProps.chartConfig.yScale,
			    xAccessor = moreProps.xAccessor,
			    fullData = moreProps.fullData;
			var startPos = moreProps.startPos,
			    mouseXY = moreProps.mouseXY;


			var x1 = xScale(x1Value);
			var y1 = yScale(y1Value);
			var x2 = xScale(x2Value);
			var y2 = yScale(y2Value);

			var dx = startPos[0] - mouseXY[0];
			var dy = startPos[1] - mouseXY[1];

			var newX1Value = xAccessor(getCurrentItem(xScale, xAccessor, [x1 - dx, y1 - dy], fullData));
			var newY1Value = yScale.invert(y1 - dy);
			var newX2Value = xAccessor(getCurrentItem(xScale, xAccessor, [x2 - dx, y2 - dy], fullData));
			var newY2Value = yScale.invert(y2 - dy);

			onDrag(index, {
				x1: newX1Value,
				y1: newY1Value,
				x2: newX2Value,
				y2: newY2Value
			});
		}
	}, {
		key: "handleLineNSResizeTop",
		value: function handleLineNSResizeTop(moreProps) {
			var _props3 = this.props,
			    index = _props3.index,
			    onDrag = _props3.onDrag;
			var _props4 = this.props,
			    x1 = _props4.x1,
			    x2 = _props4.x2,
			    y2 = _props4.y2;

			var _getNewXY = getNewXY(moreProps),
			    _getNewXY2 = _slicedToArray(_getNewXY, 2),
			    y1 = _getNewXY2[1];

			onDrag(index, {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2
			});
		}
	}, {
		key: "handleLineNSResizeBottom",
		value: function handleLineNSResizeBottom(moreProps) {
			var _props5 = this.props,
			    index = _props5.index,
			    onDrag = _props5.onDrag;
			var _props6 = this.props,
			    x1 = _props6.x1,
			    y1 = _props6.y1,
			    x2 = _props6.x2;

			var _getNewXY3 = getNewXY(moreProps),
			    _getNewXY4 = _slicedToArray(_getNewXY3, 2),
			    y2 = _getNewXY4[1];

			onDrag(index, {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2
			});
		}
	}, {
		key: "handleEdge1Drag",
		value: function handleEdge1Drag(moreProps) {
			var _props7 = this.props,
			    index = _props7.index,
			    onDrag = _props7.onDrag;
			var _props8 = this.props,
			    y1 = _props8.y1,
			    x2 = _props8.x2,
			    y2 = _props8.y2;

			var _getNewXY5 = getNewXY(moreProps),
			    _getNewXY6 = _slicedToArray(_getNewXY5, 1),
			    x1 = _getNewXY6[0];

			onDrag(index, {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2
			});
		}
	}, {
		key: "handleEdge2Drag",
		value: function handleEdge2Drag(moreProps) {
			var _props9 = this.props,
			    index = _props9.index,
			    onDrag = _props9.onDrag;
			var _props10 = this.props,
			    x1 = _props10.x1,
			    y1 = _props10.y1,
			    y2 = _props10.y2;

			var _getNewXY7 = getNewXY(moreProps),
			    _getNewXY8 = _slicedToArray(_getNewXY7, 1),
			    x2 = _getNewXY8[0];

			onDrag(index, {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2
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
		key: "render",
		value: function render() {
			var _this3 = this;

			var _props11 = this.props,
			    x1 = _props11.x1,
			    x2 = _props11.x2,
			    y1 = _props11.y1,
			    y2 = _props11.y2;
			var _props12 = this.props,
			    interactive = _props12.interactive,
			    yDisplayFormat = _props12.yDisplayFormat,
			    type = _props12.type;
			var _props13 = this.props,
			    stroke = _props13.stroke,
			    strokeWidth = _props13.strokeWidth,
			    opacity = _props13.opacity;
			var _props14 = this.props,
			    fontFamily = _props14.fontFamily,
			    fontSize = _props14.fontSize,
			    fontStroke = _props14.fontStroke;
			var _props15 = this.props,
			    edgeStroke = _props15.edgeStroke,
			    edgeFill = _props15.edgeFill,
			    nsEdgeFill = _props15.nsEdgeFill,
			    edgeStrokeWidth = _props15.edgeStrokeWidth,
			    r = _props15.r;
			var hoverText = this.props.hoverText;
			var _state = this.state,
			    selected = _state.selected,
			    hover = _state.hover;

			var lines = helper({ x1: x1, x2: x2, y1: y1, y2: y2 });

			var hoverTextEnabled = hoverText.enable,
			    restHoverTextProps = _objectWithoutProperties(hoverText, ["enable"]);

			var lineType = type === "EXTEND" ? "XLINE" : "LINE";
			var dir = head(lines).y1 > last(lines).y1 ? 3 : -1.3;

			return React.createElement(
				"g",
				null,
				lines.map(function (line, j) {
					var text = yDisplayFormat(line.y) + " (" + line.percent.toFixed(2) + "%)";

					var xyProvider = function xyProvider(_ref) {
						var xScale = _ref.xScale,
						    chartConfig = _ref.chartConfig;

						var _generateLine = generateLine({
							type: lineType,
							start: [line.x1, line.y],
							end: [line.x2, line.y],
							xScale: xScale
						}),
						    x1 = _generateLine.x1,
						    y1 = _generateLine.y1,
						    x2 = _generateLine.x2;

						var x = xScale(Math.min(x1, x2)) + 10;
						var y = chartConfig.yScale(y1) + dir * 4;
						return [x, y];
					};

					var firstOrLast = j === 0 || j === lines.length - 1;

					var interactiveCursorClass = firstOrLast ? "react-stockcharts-ns-resize-cursor" : "react-stockcharts-move-cursor";

					var interactiveEdgeCursorClass = firstOrLast ? "react-stockcharts-ns-resize-cursor" : "react-stockcharts-ew-resize-cursor";

					var dragHandler = j === 0 ? _this3.handleLineNSResizeTop : j === lines.length - 1 ? _this3.handleLineNSResizeBottom : _this3.handleLineMove;

					var edge1DragHandler = j === 0 ? _this3.handleLineNSResizeTop : j === lines.length - 1 ? _this3.handleLineNSResizeBottom : _this3.handleEdge1Drag;
					var edge2DragHandler = j === 0 ? _this3.handleLineNSResizeTop : j === lines.length - 1 ? _this3.handleLineNSResizeBottom : _this3.handleEdge2Drag;

					var hoverHandler = interactive ? { onHover: _this3.handleHover, onBlur: _this3.handleHover } : {};
					return React.createElement(
						"g",
						{ key: j },
						React.createElement(StraightLine, _extends({
							selected: selected || hover

						}, hoverHandler, {
							onClick: _this3.handleSelect,
							onClickOutside: _this3.handleUnSelect,

							type: lineType,
							x1Value: line.x1,
							y1Value: line.y,
							x2Value: line.x2,
							y2Value: line.y,
							stroke: stroke,
							strokeWidth: hover || selected ? strokeWidth + 1 : strokeWidth,
							opacity: opacity,
							interactiveCursorClass: interactiveCursorClass,

							onDragStart: _this3.handleLineDragStart,
							onDrag: dragHandler,
							onDragComplete: _this3.handleDragComplete
						})),
						React.createElement(
							Text,
							{
								selected: selected,
								xyProvider: xyProvider,
								fontFamily: fontFamily,
								fontSize: fontSize,
								fill: fontStroke },
							text
						),
						React.createElement(ClickableCircle, {
							show: selected || hover,
							cx: line.x1,
							cy: line.y,
							r: r,
							fill: firstOrLast ? nsEdgeFill : edgeFill,
							stroke: edgeStroke,
							strokeWidth: edgeStrokeWidth,
							opacity: 1,
							interactiveCursorClass: interactiveEdgeCursorClass,
							onDrag: edge1DragHandler,
							onDragComplete: _this3.handleDragComplete }),
						React.createElement(ClickableCircle, {
							show: selected || hover,
							cx: line.x2,
							cy: line.y,
							r: r,
							fill: firstOrLast ? nsEdgeFill : edgeFill,
							stroke: edgeStroke,
							strokeWidth: edgeStrokeWidth,
							opacity: 1,
							interactiveCursorClass: interactiveEdgeCursorClass,
							onDrag: edge2DragHandler,
							onDragComplete: _this3.handleDragComplete }),
						React.createElement(HoverTextNearMouse, _extends({
							show: hoverTextEnabled && hover && !selected
						}, restHoverTextProps))
					);
				})
			);
		}
	}]);

	return EachFibRetracement;
}(Component);

function helper(_ref2) {
	var x1 = _ref2.x1,
	    y1 = _ref2.y1,
	    x2 = _ref2.x2,
	    y2 = _ref2.y2;

	var dy = y2 - y1;
	var retracements = [100, 61.8, 50, 38.2, 23.6, 0].map(function (each) {
		return {
			percent: each,
			x1: x1,
			x2: x2,
			y: y2 - each / 100 * dy
		};
	});

	return retracements;
}

EachFibRetracement.propTypes = {
	x1: PropTypes.any.isRequired,
	x2: PropTypes.any.isRequired,
	y1: PropTypes.number.isRequired,
	y2: PropTypes.number.isRequired,

	yDisplayFormat: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,

	stroke: PropTypes.string.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	opacity: PropTypes.number.isRequired,

	fontFamily: PropTypes.string.isRequired,
	fontSize: PropTypes.number.isRequired,
	fontStroke: PropTypes.string.isRequired,

	interactive: PropTypes.bool.isRequired,

	r: PropTypes.number.isRequired,
	nsEdgeFill: PropTypes.string.isRequired,
	edgeFill: PropTypes.string.isRequired,
	edgeStroke: PropTypes.string.isRequired,
	edgeStrokeWidth: PropTypes.number.isRequired,
	hoverText: PropTypes.object.isRequired,

	index: PropTypes.number,
	onDrag: PropTypes.func.isRequired,
	onDragComplete: PropTypes.func.isRequired
};

EachFibRetracement.defaultProps = {
	yDisplayFormat: function yDisplayFormat(d) {
		return d.toFixed(2);
	},
	interactive: true,
	edgeStroke: "#000000",
	edgeFill: "#FFFFFF",
	nsEdgeFill: "#000000",
	edgeStrokeWidth: 1,
	r: 5,
	onDrag: noop,
	onDragComplete: noop,

	hoverText: {
		enable: false
	}
};

export default EachFibRetracement;