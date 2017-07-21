"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { set, map } from "d3-collection";
import { bisector, ascending } from "d3-array";
import { scaleLinear } from "d3-scale";

import { isNotDefined, head, last } from "../utils";

var tickLevels = [{ target: 50e2, level: 0 }, { target: 50e3, level: 1 }, { target: 10e4, level: 2 }, { target: 28e4, level: 3 }, { target: 55e4, level: 4 }, { target: 11e5, level: 5 }, { target: 21e5, level: 6 }, { target: 43e5, level: 7 }, { target: 59e5, level: 8 }, // not tested
{ target: 12e6, level: 9 }, // not tested
{ target: 58e6, level: 10 }, // not tested
{ target: 89e6, level: 11 }, { target: 11e7, level: 12 }, { target: 78e7, level: 13 }, { target: 16e8, level: 14 }, { target: 62e8, level: 15 }, { target: 10e20, level: 16 }];

var MAX_LEVEL = 17;

var tickLevelBisector = bisector(function (d) {
	return d.target;
}).left;

export default function financeDiscontinuousScale(index, interval) {
	var backingLinearScale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : scaleLinear();


	if (isNotDefined(index /* || isNotDefined(interval) */)) throw new Error("Use the discontinuousTimeScaleProvider to create financeDiscontinuousScale");

	function scale(x) {
		return backingLinearScale(x);
	}
	scale.invert = function (x) {
		var inverted = backingLinearScale.invert(x);
		return Math.round(inverted * 10000) / 10000;
	};
	scale.domain = function (x) {
		if (!arguments.length) return backingLinearScale.domain();
		backingLinearScale.domain(x);
		return scale;
	};
	scale.range = function (x) {
		if (!arguments.length) return backingLinearScale.range();
		backingLinearScale.range(x);
		return scale;
	};
	scale.rangeRound = function (x) {
		return backingLinearScale.range(x);
	};
	scale.clamp = function (x) {
		if (!arguments.length) return backingLinearScale.clamp();
		backingLinearScale.clamp(x);
		return scale;
	};
	scale.interpolate = function (x) {
		if (!arguments.length) return backingLinearScale.interpolate();
		backingLinearScale.interpolate(x);
		return scale;
	};
	scale.ticks = function (m, flexTicks) {
		var backingTicks = backingLinearScale.ticks(m);
		var ticksMap = map();

		var _backingLinearScale$d = backingLinearScale.domain(),
		    _backingLinearScale$d2 = _slicedToArray(_backingLinearScale$d, 2),
		    domainStart = _backingLinearScale$d2[0],
		    domainEnd = _backingLinearScale$d2[1];

		var start = Math.max(Math.ceil(domainStart), head(index).index) + Math.abs(head(index).index);
		var end = Math.min(Math.floor(domainEnd), last(index).index) + Math.abs(head(index).index);

		var desiredTickCount = Math.ceil((end - start) / (domainEnd - domainStart) * backingTicks.length);

		for (var i = MAX_LEVEL; i >= 0; i--) {
			var ticksAtLevel = ticksMap.get(i);
			var temp = isNotDefined(ticksAtLevel) ? [] : ticksAtLevel.slice();

			for (var j = start; j <= end; j++) {
				if (index[j].level === i) {
					temp.push(index[j]);
				}
			}

			ticksMap.set(i, temp);
		}

		var unsortedTicks = [];
		for (var _i = MAX_LEVEL; _i >= 0; _i--) {
			if (ticksMap.get(_i).length + unsortedTicks.length > desiredTickCount * 1.5) break;
			unsortedTicks = unsortedTicks.concat(ticksMap.get(_i).map(function (d) {
				return d.index;
			}));
		}

		var ticks = unsortedTicks.sort(ascending);

		// console.log(backingTicks.length, desiredTickCount, ticks, ticksMap);

		if (!flexTicks && end - start > ticks.length) {
			var ticksSet = set(ticks);

			var d = Math.abs(head(index).index);

			// ignore ticks within this distance
			var distance = Math.ceil((backingTicks.length > 0 ? (last(backingTicks) - head(backingTicks)) / backingTicks.length / 4 : 1) * 1.5);

			for (var _i2 = 0; _i2 < ticks.length - 1; _i2++) {
				for (var _j = _i2 + 1; _j < ticks.length; _j++) {
					if (ticks[_j] - ticks[_i2] <= distance) {
						ticksSet.remove(index[ticks[_i2] + d].level >= index[ticks[_j] + d].level ? ticks[_j] : ticks[_i2]);
					}
				}
			}

			var tickValues = ticksSet.values().map(function (d) {
				return parseInt(d, 10);
			});

			// console.log(ticks.length, tickValues, level);
			// console.log(ticks, tickValues, distance);

			return tickValues;
		}

		return ticks;
	};
	scale.ticksv1 = function (m) {
		var _backingLinearScale$d3 = backingLinearScale.domain(),
		    _backingLinearScale$d4 = _slicedToArray(_backingLinearScale$d3, 2),
		    domainStart = _backingLinearScale$d4[0],
		    domainEnd = _backingLinearScale$d4[1];

		var start = Math.max(Math.ceil(domainStart), head(index).index) + Math.abs(head(index).index);
		var end = Math.min(Math.floor(domainEnd), last(index).index) + Math.abs(head(index).index);

		// console.log(index.length, domainStart, domainEnd, start, end)

		var newM = (end - start) / (domainEnd - domainStart) * m;
		// newM = newM <= 0 ? m : newM;
		var target = Math.round((end - start + 1) * interval / newM);

		// var subList = index.slice(start, end + 1);
		var levelIndex = tickLevelBisector(tickLevels, target);
		var level = tickLevels[levelIndex].level;
		// console.log(target, level, levelIndex)

		// console.log(target.toExponential(), level);

		var backingTicks = backingLinearScale.ticks(m);

		// console.log(backingTicks.length, ratio, distance, level)

		var ticks = [];
		for (var i = start; i < end + 1; i++) {
			if (index[i].level >= level) ticks.push(index[i].index);
		}

		// subList.filter(each => each.level >= level).map(d => d.index);

		var ticksSet = set(ticks);
		// console.log(ticks);

		var d = Math.abs(head(index).index);

		// ignore ticks within this distance
		var distance = Math.ceil((backingTicks.length > 0 ? (last(backingTicks) - head(backingTicks)) / backingTicks.length / 4 : 1) * 1.5);

		for (var _i3 = 0; _i3 < ticks.length - 1; _i3++) {
			for (var j = _i3 + 1; j < ticks.length; j++) {
				if (ticks[j] - ticks[_i3] < distance) {
					ticksSet.remove(index[ticks[_i3] + d].level >= index[ticks[j] + d].level ? ticks[j] : ticks[_i3]);
				}
			}
		}

		var tickValues = ticksSet.values().map(function (d) {
			return parseInt(d, 10);
		});
		// console.log(ticks.length, tickValues, level, distance);
		return tickValues;
	};
	scale.tickFormat = function () {
		return function (x) {
			// console.log(x)
			var d = Math.abs(head(index).index);
			var _index = index[x + d],
			    format = _index.format,
			    date = _index.date;

			return format(date);
		};
	};
	scale.nice = function (m) {
		backingLinearScale.nice(m);
		return scale;
	};
	scale.copy = function () {
		return financeDiscontinuousScale(index, interval, backingLinearScale.copy());
	};
	return scale;
}