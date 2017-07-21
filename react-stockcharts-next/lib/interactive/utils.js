"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getValueFromOverride = getValueFromOverride;

var _utils = require("../utils");

function getValueFromOverride(override, index, key, defaultValue) {
	if ((0, _utils.isDefined)(override) && override.index === index) return override[key];
	return defaultValue;
}