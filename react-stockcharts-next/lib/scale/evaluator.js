"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var xAccessor = _ref.xAccessor,
	    xScale = _ref.xScale,
	    useWholeData = _ref.useWholeData,
	    clamp = _ref.clamp,
	    pointsPerPxThreshold = _ref.pointsPerPxThreshold;

	return extentsWrapper(xAccessor, useWholeData || (0, _utils.isNotDefined)(xScale.invert), clamp, pointsPerPxThreshold);
};

var _utils = require("../utils");

var log = (0, _utils.getLogger)("evaluator");

function extentsWrapper(xAccessor, useWholeData, clamp, pointsPerPxThreshold) {
	function domain(data, inputDomain, xAccessor, initialXScale, currentPlotData, currentDomain) {
		if (useWholeData) {
			return { plotData: data, domain: inputDomain };
		}

		var left = (0, _utils.first)(inputDomain);
		var right = (0, _utils.last)(inputDomain);

		var filteredData = getFilteredResponse(data, left, right, xAccessor);
		var clampedDomain = [Math.max(left, xAccessor((0, _utils.first)(data))), Math.min(right, xAccessor((0, _utils.last)(data)))];

		var realInputDomain = xAccessor === xAccessor ? clamp ? clampedDomain : inputDomain : [xAccessor((0, _utils.first)(filteredData)), xAccessor((0, _utils.last)(filteredData))];

		var xScale = initialXScale.copy().domain(realInputDomain);

		var width = Math.floor(xScale(xAccessor((0, _utils.last)(filteredData))) - xScale(xAccessor((0, _utils.first)(filteredData))));

		var plotData = void 0,
		    domain = void 0;

		var chartWidth = (0, _utils.last)(xScale.range()) - (0, _utils.first)(xScale.range());

		log("Trying to show " + filteredData.length + " in " + width + "px," + (" I can show up to " + showMax(width, pointsPerPxThreshold) + " in that width. ") + ("Also FYI the entire chart width is " + chartWidth + "px and pointsPerPxThreshold is " + pointsPerPxThreshold));

		if (canShowTheseManyPeriods(width, filteredData.length, pointsPerPxThreshold)) {
			plotData = filteredData;
			domain = realInputDomain;
			log("AND IT WORKED");
		} else {
			plotData = currentPlotData || filteredData.slice(filteredData.length - showMax(width, pointsPerPxThreshold));
			domain = currentDomain || [xAccessor((0, _utils.first)(plotData)), xAccessor((0, _utils.last)(plotData))];

			var newXScale = xScale.copy().domain(domain);
			var newWidth = Math.floor(newXScale(xAccessor((0, _utils.last)(plotData))) - newXScale(xAccessor((0, _utils.first)(plotData))));

			log("and ouch, that is too much, so instead showing " + plotData.length + " in " + newWidth + "px");
		}

		return { plotData: plotData, domain: domain };
	}
	return domain;
}

function canShowTheseManyPeriods(width, arrayLength, threshold) {
	return arrayLength > 1 && arrayLength < showMaxThreshold(width, threshold);
}
function showMaxThreshold(width, threshold) {
	return Math.floor(width * threshold);
}

function showMax(width, threshold) {
	return Math.floor(showMaxThreshold(width, threshold) * 0.97);
}

function getFilteredResponse(data, left, right, xAccessor) {
	var newLeftIndex = (0, _utils.getClosestItemIndexes)(data, left, xAccessor).right;
	var newRightIndex = (0, _utils.getClosestItemIndexes)(data, right, xAccessor).left;

	var filteredData = data.slice(newLeftIndex, newRightIndex + 1);
	// console.log(right, newRightIndex, dataForInterval.length);

	return filteredData;
}