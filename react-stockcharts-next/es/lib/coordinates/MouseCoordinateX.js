"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { drawOnCanvas as _drawOnCanvas, renderSVG as _renderSVG } from "./EdgeCoordinateV2";
import GenericChartComponent from "../GenericChartComponent";
import { getMouseCanvas } from "../GenericComponent";

import { isNotDefined } from "../utils";

var MouseCoordinateX = function (_Component) {
	_inherits(MouseCoordinateX, _Component);

	function MouseCoordinateX(props) {
		_classCallCheck(this, MouseCoordinateX);

		var _this = _possibleConstructorReturn(this, (MouseCoordinateX.__proto__ || Object.getPrototypeOf(MouseCoordinateX)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		return _this;
	}

	_createClass(MouseCoordinateX, [{
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var props = helper(this.props, moreProps);
			if (isNotDefined(props)) return null;

			_drawOnCanvas(ctx, props);
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var props = helper(this.props, moreProps);
			if (isNotDefined(props)) return null;

			return _renderSVG(props);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(GenericChartComponent, {
				svgDraw: this.renderSVG,
				clip: false,
				canvasDraw: this.drawOnCanvas,
				canvasToDraw: getMouseCanvas,
				drawOn: ["mousemove", "pan" /*  , "mouseleave"*/]
			});
		}
	}]);

	return MouseCoordinateX;
}(Component);

MouseCoordinateX.propTypes = {
	displayFormat: PropTypes.func.isRequired
};

MouseCoordinateX.defaultProps = {
	yAxisPad: 0,
	rectWidth: 80,
	rectHeight: 20,
	orient: "bottom",
	at: "bottom",

	fill: "#525252",
	opacity: 1,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 13,
	textFill: "#FFFFFF",
	snapX: true
};

function helper(props, moreProps) {
	var xAccessor = moreProps.xAccessor,
	    displayXAccessor = moreProps.displayXAccessor;
	var show = moreProps.show,
	    currentItem = moreProps.currentItem,
	    xScale = moreProps.xScale,
	    mouseXY = moreProps.mouseXY;
	var height = moreProps.chartConfig.height;


	if (isNotDefined(currentItem)) return null;

	var snapX = props.snapX;
	var orient = props.orient,
	    at = props.at,
	    rectWidth = props.rectWidth,
	    rectHeight = props.rectHeight,
	    displayFormat = props.displayFormat;
	var fill = props.fill,
	    opacity = props.opacity,
	    fontFamily = props.fontFamily,
	    fontSize = props.fontSize,
	    textFill = props.textFill;


	var x = snapX ? xScale(xAccessor(currentItem)) : mouseXY[0];
	var edgeAt = at === "bottom" ? height : 0;

	var coordinate = snapX ? displayFormat(displayXAccessor(currentItem)) : displayFormat(xScale.invert(x));
	var type = "vertical";
	var y1 = 0,
	    y2 = height;
	var hideLine = true;

	var coordinateProps = {
		coordinate: coordinate,
		show: show,
		type: type,
		orient: orient,
		edgeAt: edgeAt,
		hideLine: hideLine,
		fill: fill, opacity: opacity, fontFamily: fontFamily, fontSize: fontSize, textFill: textFill,
		rectWidth: rectWidth,
		rectHeight: rectHeight,
		arrowWidth: 0,
		x1: x,
		x2: x,
		y1: y1,
		y2: y2
	};
	return coordinateProps;
}

export default MouseCoordinateX;