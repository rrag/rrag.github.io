"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = (0, _calculator.kagi)();

	var indicator = underlyingAlgorithm;

	(0, _d3fcRebind.rebind)(indicator, base, "id", "stroke", "fill", "echo", "type");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator");
	(0, _d3fcRebind.rebind)(indicator, underlyingAlgorithm, "options");

	return indicator;
};

var _d3fcRebind = require("d3fc-rebind");

var _calculator = require("../calculator");

var _baseIndicator = require("./baseIndicator");

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Kagi";