"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Iterables_1 = tslib_1.__importDefault(require("./Iterables"));
var Multiset_1 = tslib_1.__importDefault(require("./Multiset"));
var Multisets_1 = tslib_1.__importDefault(require("./Multisets"));
function empty() {
    return [];
}
function from(iterable) {
    return Array.from(iterable);
}
function range(start, count, step) {
    if (step === void 0) { step = 1; }
    return from(Iterables_1.default.range(start, count, step));
}
function repeat(value, count) {
    var result = new Array(count);
    return result.fill(value);
}
function concat() {
    var arrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrs[_i] = arguments[_i];
    }
    return arrs.reduce(function (acc, cur) { return acc.concat(cur); }, []);
}
function zip() {
    var arrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrs[_i] = arguments[_i];
    }
    return from(Iterables_1.default.zip.apply(Iterables_1.default, tslib_1.__spreadArray([], tslib_1.__read(arrs))));
}
function union(arr1, arr2) {
    var multiset = new Multiset_1.default(arr1);
    return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(arr1)), tslib_1.__read(arr2.filter(function (value) { return !multiset.delete(value); })));
}
function intersection(arr1, arr2) {
    var multiset = new Multiset_1.default(arr2);
    return arr1.filter(function (value) { return multiset.delete(value); });
}
function difference(arr1, arr2) {
    var multiset = new Multiset_1.default(arr2);
    return arr1.filter(function (value) { return !multiset.delete(value); });
}
function symmetricDifference(arr1, arr2) {
    var multiset1 = new Multiset_1.default(arr1), multiset2 = new Multiset_1.default(arr2);
    return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(arr1.filter(function (value) { return !multiset2.delete(value); }))), tslib_1.__read(arr2.filter(function (value) { return !multiset1.delete(value); })));
}
function map(arr, project) {
    return arr.map(project);
}
function pairwise(arr) {
    return from(Iterables_1.default.pairwise(arr));
}
function scan(arr, accumulator, initial) {
    return from(Iterables_1.default.scan(arr, accumulator, initial));
}
function buffer(arr, count, step) {
    if (step === void 0) { step = count; }
    var result = [];
    for (var i = 0; i < arr.length; i += step) {
        result.push(arr.slice(i, i + count));
    }
    return result;
}
function flatMap(arr, project) {
    return from(Iterables_1.default.flatMap(arr, project));
}
function skip(arr, count) {
    return arr.slice(count);
}
function skipLast(arr, count) {
    return arr.slice(0, -count);
}
function take(arr, count) {
    return arr.slice(0, count);
}
function takeLast(arr, count) {
    return arr.slice(-count);
}
function filter(arr, predicate) {
    return arr.filter(predicate);
}
function reverse(arr) {
    return arr.slice().reverse();
}
function sort(arr, comparator) {
    return arr.slice().sort(comparator);
}
function distinct(arr) {
    return from(new Set(arr));
}
function partition(arr, size) {
    var result = [];
    for (var i = 0; i < ((arr.length - 1) / size | 0) + 1; i++) {
        result.push(arr.slice(i * size, (i + 1) * size));
    }
    return result;
}
function reduce(arr, accumulator, initial) {
    return initial === undefined ? arr.length === 0 ? undefined : arr.reduce(accumulator) : arr.reduce(accumulator, initial);
}
function first(arr, defaultValue) {
    var firstValue = arr[0];
    return firstValue === undefined ? defaultValue : firstValue;
}
function last(arr, defaultValue) {
    var lastValue = arr[arr.length - 1];
    return lastValue === undefined ? defaultValue : lastValue;
}
function max(arr, comparator) {
    return Iterables_1.default.max(arr, comparator);
}
function min(arr, comparator) {
    return Iterables_1.default.min(arr, comparator);
}
function has(arr, value) {
    return arr.indexOf(value) >= 0;
}
function elementsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    return Multisets_1.default.elementsEqual(Multisets_1.default.from(arr1), Multisets_1.default.from(arr2));
}
function shallowEquals(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
function fill(arr, item, start, end) {
    var result = arr.slice();
    return result.fill(item, start, end);
}
function push(arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    var result = arr.slice();
    result.push.apply(result, tslib_1.__spreadArray([], tslib_1.__read(items)));
    return result;
}
function pop(arr, size) {
    if (size === void 0) { size = 1; }
    var result = arr.slice();
    for (var i = 0; i < size; i++)
        result.pop();
    return result;
}
function unshift(arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    var result = arr.slice();
    result.unshift.apply(result, tslib_1.__spreadArray([], tslib_1.__read(items)));
    return result;
}
function shift(arr, size) {
    if (size === void 0) { size = 1; }
    var result = arr.slice();
    for (var i = 0; i < size; i++)
        result.shift();
    return result;
}
function slice(arr, start, end) {
    return arr.slice(start, end);
}
function splice(arr, start, deleteCount) {
    if (deleteCount === void 0) { deleteCount = 0; }
    var items = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        items[_i - 3] = arguments[_i];
    }
    var result = arr.slice();
    result.splice.apply(result, tslib_1.__spreadArray([start, deleteCount], tslib_1.__read(items)));
    return result;
}
exports.default = {
    empty: empty,
    from: from,
    range: range,
    repeat: repeat,
    concat: concat,
    zip: zip,
    union: union,
    intersection: intersection,
    difference: difference,
    symmetricDifference: symmetricDifference,
    map: map,
    pairwise: pairwise,
    scan: scan,
    buffer: buffer,
    flatMap: flatMap,
    skip: skip,
    skipLast: skipLast,
    take: take,
    takeLast: takeLast,
    filter: filter,
    reverse: reverse,
    sort: sort,
    distinct: distinct,
    partition: partition,
    reduce: reduce,
    first: first,
    last: last,
    max: max,
    min: min,
    has: has,
    elementsEqual: elementsEqual,
    shallowEquals: shallowEquals,
    fill: fill,
    push: push,
    pop: pop,
    unshift: unshift,
    shift: shift,
    slice: slice,
    splice: splice,
};
//# sourceMappingURL=Arrays.js.map