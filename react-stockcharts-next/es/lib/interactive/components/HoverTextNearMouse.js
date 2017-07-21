var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import GenericChartComponent from "../../GenericChartComponent";
import { getMouseCanvas } from "../../GenericComponent";
import { hexToRGBA } from "../../utils";

var PADDING = 10;

var HoverTextNearMouse = function (_Component) {
	_inherits(HoverTextNearMouse, _Component);

	function HoverTextNearMouse(props) {
		_classCallCheck(this, HoverTextNearMouse);

		var _this = _possibleConstructorReturn(this, (HoverTextNearMouse.__proto__ || Object.getPrototypeOf(HoverTextNearMouse)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		_this.isHover = _this.isHover.bind(_this);
		return _this;
	}

	_createClass(HoverTextNearMouse, [{
		key: "isHover",
		value: function isHover() {
			return false;
		}
	}, {
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props = this.props,
			    show = _props.show,
			    fontFamily = _props.fontFamily,
			    fontSize = _props.fontSize,
			    fill = _props.fill,
			    bgFill = _props.bgFill,
			    bgOpacity = _props.bgOpacity,
			    bgWidth = _props.bgWidth,
			    bgHeight = _props.bgHeight,
			    text = _props.text;
			var mouseXY = moreProps.mouseXY,
			    height = moreProps.height,
			    width = moreProps.width,
			    mouseInsideCanvas = moreProps.show;
			// console.log(moreProps)

			if (show && mouseInsideCanvas) {
				var _mouseXY = _slicedToArray(mouseXY, 2),
				    x = _mouseXY[0],
				    y = _mouseXY[1];

				var cx = x < width / 2 ? x + PADDING : x - bgWidth - PADDING;
				var cy = y < height / 2 ? y + PADDING : y - bgHeight - PADDING;

				ctx.strokeStyle = bgFill;
				ctx.fillStyle = hexToRGBA(bgFill, bgOpacity);
				ctx.beginPath();
				ctx.rect(cx, cy, bgWidth, bgHeight);
				ctx.fill();
				ctx.stroke();

				ctx.font = fontSize + "px " + fontFamily;
				ctx.fillStyle = fill;
				ctx.beginPath();

				ctx.fillText(text, cx + PADDING / 2, cy + fontSize);
			}
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			throw new Error("svg not implemented", moreProps);
		}
	}, {
		key: "render",
		value: function render() {

			return React.createElement(GenericChartComponent, { foo: true,

				svgDraw: this.renderSVG,

				canvasToDraw: getMouseCanvas,
				canvasDraw: this.drawOnCanvas,

				drawOn: ["mousemove"]
			});
		}
	}]);

	return HoverTextNearMouse;
}(Component);

HoverTextNearMouse.propTypes = {
	fontFamily: PropTypes.string.isRequired,
	fontSize: PropTypes.number.isRequired,
	fill: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	bgFill: PropTypes.string.isRequired,
	bgOpacity: PropTypes.number.isRequired,
	bgWidth: PropTypes.number.isRequired,
	bgHeight: PropTypes.number.isRequired,
	show: PropTypes.bool.isRequired
};

HoverTextNearMouse.defaultProps = {
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 12,
	fill: "#000000",
	bgFill: "#FA9325",
	bgOpacity: 0.5
};

export default HoverTextNearMouse;