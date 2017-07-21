"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { first, path } from "../utils";
import { Change as defaultOptions } from "./defaultOptionsForComputation";

export default function () {
	var options = defaultOptions;

	function calculator(data) {
		var _options = options,
		    basePath = _options.basePath,
		    mainKeys = _options.mainKeys,
		    compareKeys = _options.compareKeys;

		var base = path(basePath);

		var f = first(data);
		var b = base(f);
		var compareData = data.map(function (d) {
			// eslint-disable-next-line prefer-const
			var result = {};

			mainKeys.forEach(function (key) {
				if (_typeof(d[key]) === "object") {
					result[key] = {};
					Object.keys(d[key]).forEach(function (subkey) {
						result[key][subkey] = (d[key][subkey] - b) / b;
					});
				} else {
					result[key] = (d[key] - b) / b;
				}
			});

			compareKeys.forEach(function (key) {
				result[key] = (d[key] - f[key]) / f[key];
			});
			return result;
		});
		// console.log(compareData[20]);
		return compareData;
	}
	calculator.options = function (x) {
		if (!arguments.length) {
			return options;
		}
		options = _extends({}, defaultOptions, x);
		return calculator;
	};
	return calculator;
}