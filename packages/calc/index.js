"use strict";
exports.__esModule = true;
exports.round = function (value, precision) { return Number(value.toFixed(precision)); };
exports.sum = function (array) { return array.reduce(function (result, value) { return result + value; }, 0); };
exports.average = function (array) { return exports.sum(array) / array.length; };
exports.group = function (array, size) { return array.reduce(function (result, element, index) {
    if (index % size) {
        result[result.length - 1].push(element);
    }
    else {
        result.push([element]);
    }
    return result;
}, []); };
