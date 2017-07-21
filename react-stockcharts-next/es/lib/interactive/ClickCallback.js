"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { noop, functor } from "../utils";
import GenericChartComponent from "../GenericChartComponent";

var ClickCallback = function (_Component) {
	_inherits(ClickCallback, _Component);

	function ClickCallback(props) {
		_classCallCheck(this, ClickCallback);

		var _this = _possibleConstructorReturn(this, (ClickCallback.__proto__ || Object.getPrototypeOf(ClickCallback)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleContextMenu = _this.handleContextMenu.bind(_this);
		_this.saveNode = _this.saveNode.bind(_this);
		_this.getClickProps = _this.getClickProps.bind(_this);
		return _this;
	}

	_createClass(ClickCallback, [{
		key: "saveNode",
		value: function saveNode(node) {
			this.node = node;
		}
	}, {
		key: "getClickProps",
		value: function getClickProps() {
			var moreProps = this.node.getMoreProps();

			var mouseXY = moreProps.mouseXY,
			    currentItem = moreProps.currentItem,
			    chartConfig = moreProps.chartConfig,
			    displayXAccessor = moreProps.displayXAccessor;
			var yScale = chartConfig.yScale;


			var yValue = yScale.invert(mouseXY[1]);
			var xValue = displayXAccessor(currentItem);

			return {
				xy: [xValue, yValue],
				mouseXY: mouseXY,
				currentItem: currentItem
			};
		}
	}, {
		key: "handleContextMenu",
		value: function handleContextMenu(e) {
			this.props.onContextMenu(this.getClickProps(), e);
		}
	}, {
		key: "handleClick",
		value: function handleClick(e) {
			this.props.onClick(this.getClickProps(), e);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(GenericChartComponent, { ref: this.saveNode,
				svgDraw: functor(null),
				isHover: functor(true),
				onClick: this.handleClick,
				onContextMenu: this.handleContextMenu
			});
		}
	}]);

	return ClickCallback;
}(Component);

ClickCallback.drawOnCanvas = noop;

ClickCallback.propTypes = {
	onClick: PropTypes.func.isRequired,
	onContextMenu: PropTypes.func.isRequired
};

ClickCallback.defaultProps = {
	onClick: function onClick() {
		for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
			rest[_key] = arguments[_key];
		}

		console.log(rest);
	},
	onContextMenu: function onContextMenu() {
		for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			rest[_key2] = arguments[_key2];
		}

		console.log(rest);
	}
};

export default ClickCallback;