"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
exports.timeFrames = exports.frames = exports.group = exports.ofLength = exports.unique = exports.min = exports.max = exports.average = exports.sum = exports.round = void 0;
exports.round = function (value, precision) { return Number(value.toFixed(precision)); };
exports.sum = function (array) { return array.reduce(function (result, value) { return result + value; }, 0); };
exports.average = function (array) { return exports.sum(array) / array.length; };
exports.max = function (array) { return Math.max.apply(Math, __spread(array)); };
exports.min = function (array) { return Math.min.apply(Math, __spread(array)); };
exports.unique = function (array) { return __spread(new Set(array)); };
exports.ofLength = function (length) { return Array.from({ length: length }); };
exports.group = function (array, size) { return array.reduce(function (result, element, index) {
    if (index % size) {
        result[result.length - 1].push(element);
    }
    else {
        result.push([element]);
    }
    return result;
}, []); };
exports.frames = function (start, max, gap, useMaxAsLastItem) {
    var a = [];
    for (var i = start; i < max; i = i + gap) {
        var next = i + gap;
        if (next > max) {
            if (useMaxAsLastItem) {
                a.push([i, max]);
            }
            else {
                continue;
            }
        }
        else {
            a.push([i, next]);
        }
    }
    return a;
};
// alias
exports.timeFrames = exports.frames;
