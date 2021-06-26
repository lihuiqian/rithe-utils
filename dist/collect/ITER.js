"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("..");
var ArrayMultimaps_1 = tslib_1.__importDefault(require("./ArrayMultimaps"));
var Arrays_1 = tslib_1.__importDefault(require("./Arrays"));
var Iterables_1 = tslib_1.__importDefault(require("./Iterables"));
var Maps_1 = tslib_1.__importDefault(require("./Maps"));
var Multiset_1 = tslib_1.__importDefault(require("./Multiset"));
var Multisets_1 = tslib_1.__importDefault(require("./Multisets"));
var SetMultimap_1 = tslib_1.__importDefault(require("./SetMultimap"));
var Sets_1 = tslib_1.__importDefault(require("./Sets"));
function iter(obj) {
    if (obj instanceof Array) {
        return new FluentArray(obj);
    }
    else if (obj instanceof Set) {
        return new FluentSet(obj);
    }
    else if (obj instanceof Multiset_1.default) {
        return new FluentMultiset(obj);
    }
    else if (obj instanceof Map) {
        return new FluentMap(obj);
    }
    else if (obj instanceof __1.ArrayMultimap) {
        return new FluentArrayMultimap(obj);
    }
    else if (obj instanceof SetMultimap_1.default) {
        return new FluentSetMultimap(obj);
    }
    else {
        return new FluentIterable(obj);
    }
}
var FluentIterable = /** @class */ (function () {
    function FluentIterable(iterable) {
        this.value = iterable;
    }
    FluentIterable.prototype._call = function (func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new FluentIterable(func.apply(void 0, tslib_1.__spreadArray([this.value], tslib_1.__read(args))));
    };
    FluentIterable.prototype.concat = function () {
        var iterables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            iterables[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Iterables_1.default.concat], tslib_1.__read(iterables)));
    };
    FluentIterable.prototype.zip = function () {
        var iterables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            iterables[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Iterables_1.default.zip], tslib_1.__read(iterables)));
    };
    FluentIterable.prototype.map = function (project) {
        return this._call(Iterables_1.default.map, project);
    };
    FluentIterable.prototype.pairwise = function () {
        return this._call(Iterables_1.default.pairwise);
    };
    FluentIterable.prototype.scan = function (accumulator, initial) {
        return this._call(Iterables_1.default.scan, accumulator, initial);
    };
    FluentIterable.prototype.buffer = function (count, step) {
        if (step === void 0) { step = count; }
        return this._call(Iterables_1.default.buffer, count, step);
    };
    FluentIterable.prototype.flatMap = function (project) {
        return this._call(Iterables_1.default.flatMap, project);
    };
    FluentIterable.prototype.skip = function (count) {
        return this._call(Iterables_1.default.skip, count);
    };
    FluentIterable.prototype.skipLast = function (count) {
        return this._call(Iterables_1.default.skipLast, count);
    };
    FluentIterable.prototype.take = function (count) {
        return this._call(Iterables_1.default.take, count);
    };
    FluentIterable.prototype.takeLast = function (count) {
        return this._call(Iterables_1.default.takeLast, count);
    };
    FluentIterable.prototype.filter = function (predicate) {
        return this._call(Iterables_1.default.filter, predicate);
    };
    FluentIterable.prototype.reverse = function () {
        return this._call(Iterables_1.default.reverse);
    };
    FluentIterable.prototype.sort = function (comparator) {
        return this._call(Iterables_1.default.sort, comparator);
    };
    FluentIterable.prototype.distinct = function () {
        return this._call(Iterables_1.default.distinct);
    };
    FluentIterable.prototype.partition = function (size) {
        return Iterables_1.default.partition(this.value, size).map(function (i) { return new FluentIterable(i); });
    };
    FluentIterable.prototype.forEach = function (consumer) {
        var e_1, _a;
        var index = 0;
        try {
            for (var _b = tslib_1.__values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                consumer(value, index++);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    FluentIterable.prototype.reduce = function (accumulator, initial) {
        return initial === undefined ? Iterables_1.default.reduce(this.value, accumulator) : Iterables_1.default.reduce(this.value, accumulator, initial);
    };
    FluentIterable.prototype.asArray = function (project) {
        return new FluentArray(Arrays_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentIterable.prototype.asSet = function (project) {
        return new FluentSet(Sets_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentIterable.prototype.asMultiset = function (project) {
        return new FluentMultiset(Multisets_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentIterable.prototype.asMap = function (project) {
        return new FluentMap(Maps_1.default.from(Iterables_1.default.map(this.value, project)));
    };
    FluentIterable.prototype.asArrayMultimap = function (project) {
        return new FluentArrayMultimap(ArrayMultimaps_1.default.from(Iterables_1.default.map(this.value, project)));
    };
    FluentIterable.prototype.asSetMultimap = function (project) {
        return new FluentSetMultimap(__1.SetMultimaps.from(Iterables_1.default.map(this.value, project)));
    };
    return FluentIterable;
}());
var FluentArray = /** @class */ (function () {
    function FluentArray(array) {
        this.value = array;
    }
    FluentArray.prototype._call = function (func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new FluentArray(func.apply(void 0, tslib_1.__spreadArray([this.value], tslib_1.__read(args))));
    };
    FluentArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Arrays_1.default.concat], tslib_1.__read(arrays)));
    };
    FluentArray.prototype.zip = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Arrays_1.default.zip], tslib_1.__read(arrays)));
    };
    FluentArray.prototype.map = function (project) {
        return this._call(Arrays_1.default.map, project);
    };
    FluentArray.prototype.pairwise = function () {
        return this._call(Arrays_1.default.pairwise);
    };
    FluentArray.prototype.scan = function (accumulator, initial) {
        return this._call(Arrays_1.default.scan, accumulator, initial);
    };
    FluentArray.prototype.buffer = function (count, step) {
        if (step === void 0) { step = count; }
        return this._call(Arrays_1.default.buffer, count, step);
    };
    FluentArray.prototype.flatMap = function (project) {
        return this._call(Arrays_1.default.flatMap, project);
    };
    FluentArray.prototype.skip = function (count) {
        return this._call(Arrays_1.default.skip, count);
    };
    FluentArray.prototype.skipLast = function (count) {
        return this._call(Arrays_1.default.skipLast, count);
    };
    FluentArray.prototype.take = function (count) {
        return this._call(Arrays_1.default.take, count);
    };
    FluentArray.prototype.takeLast = function (count) {
        return this._call(Arrays_1.default.takeLast, count);
    };
    FluentArray.prototype.filter = function (predicate) {
        return this._call(Arrays_1.default.filter, predicate);
    };
    FluentArray.prototype.reverse = function () {
        return this._call(Arrays_1.default.reverse);
    };
    FluentArray.prototype.sort = function (comparator) {
        return this._call(Arrays_1.default.sort, comparator);
    };
    FluentArray.prototype.distinct = function () {
        return this._call(Arrays_1.default.distinct);
    };
    FluentArray.prototype.partition = function (size) {
        return Arrays_1.default.partition(this.value, size).map(function (i) { return new FluentArray(i); });
    };
    FluentArray.prototype.forEach = function (consumer) {
        var e_2, _a;
        var index = 0;
        try {
            for (var _b = tslib_1.__values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                consumer(value, index++);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    FluentArray.prototype.reduce = function (accumulator, initial) {
        return initial === undefined ? Iterables_1.default.reduce(this.value, accumulator) : Iterables_1.default.reduce(this.value, accumulator, initial);
    };
    FluentArray.prototype.fill = function (item, start, end) {
        return this._call(Arrays_1.default.fill, item, start, end);
    };
    FluentArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Arrays_1.default.push], tslib_1.__read(items)));
    };
    FluentArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Arrays_1.default.unshift], tslib_1.__read(items)));
    };
    FluentArray.prototype.pop = function (size) {
        if (size === void 0) { size = 1; }
        return this._call(Arrays_1.default.pop, size);
    };
    FluentArray.prototype.shift = function (size) {
        if (size === void 0) { size = 1; }
        return this._call(Arrays_1.default.shift, size);
    };
    FluentArray.prototype.splice = function (start, deleteCount) {
        if (deleteCount === void 0) { deleteCount = 0; }
        var items = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            items[_i - 2] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Arrays_1.default.splice, start, deleteCount], tslib_1.__read(items)));
    };
    FluentArray.prototype.slice = function (start, end) {
        return this._call(Arrays_1.default.slice, start, end);
    };
    FluentArray.prototype.asIterable = function (project) {
        return new FluentIterable(project ? Arrays_1.default.map(this.value, project) : this.value);
    };
    FluentArray.prototype.asSet = function (project) {
        return new FluentSet(Sets_1.default.from(project ? Arrays_1.default.map(this.value, project) : this.value));
    };
    FluentArray.prototype.asMultiset = function (project) {
        return new FluentMultiset(Multisets_1.default.from(project ? Arrays_1.default.map(this.value, project) : this.value));
    };
    FluentArray.prototype.asMap = function (project) {
        return new FluentMap(Maps_1.default.from(Arrays_1.default.map(this.value, project)));
    };
    FluentArray.prototype.asArrayMultimap = function (project) {
        return new FluentArrayMultimap(ArrayMultimaps_1.default.from(Arrays_1.default.map(this.value, project)));
    };
    FluentArray.prototype.asSetMultimap = function (project) {
        return new FluentSetMultimap(__1.SetMultimaps.from(Arrays_1.default.map(this.value, project)));
    };
    return FluentArray;
}());
var FluentSet = /** @class */ (function () {
    function FluentSet(set) {
        this.value = set;
    }
    FluentSet.prototype._call = function (func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new FluentSet(func.apply(void 0, tslib_1.__spreadArray([this.value], tslib_1.__read(args))));
    };
    FluentSet.prototype.concat = function () {
        var sets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sets[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Sets_1.default.concat], tslib_1.__read(sets)));
    };
    FluentSet.prototype.union = function (set) {
        return this._call(Sets_1.default.union, set);
    };
    FluentSet.prototype.intersection = function (set) {
        return this._call(Sets_1.default.intersection, set);
    };
    FluentSet.prototype.difference = function (set) {
        return this._call(Sets_1.default.difference, set);
    };
    FluentSet.prototype.sysmmetricDifference = function (set) {
        return this._call(Sets_1.default.symmetricDifference, set);
    };
    FluentSet.prototype.map = function (project) {
        return this._call(Sets_1.default.map, project);
    };
    FluentSet.prototype.flatMap = function (project) {
        return this._call(Sets_1.default.flatMap, project);
    };
    FluentSet.prototype.filter = function (predicate) {
        return this._call(Sets_1.default.filter, predicate);
    };
    FluentSet.prototype.partition = function (size) {
        return Sets_1.default.partition(this.value, size).map(function (i) { return new FluentSet(i); });
    };
    FluentSet.prototype.forEach = function (consumer) {
        var e_3, _a;
        try {
            for (var _b = tslib_1.__values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                consumer(value);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    FluentSet.prototype.add = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Sets_1.default.add], tslib_1.__read(items)));
    };
    FluentSet.prototype.delete = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Sets_1.default.delete], tslib_1.__read(items)));
    };
    FluentSet.prototype.asIterable = function (project) {
        return new FluentIterable(project ? Sets_1.default.map(this.value, project) : this.value);
    };
    FluentSet.prototype.asArray = function (project) {
        return new FluentArray(Arrays_1.default.from(project ? Sets_1.default.map(this.value, project) : this.value));
    };
    FluentSet.prototype.asMultiset = function (project) {
        return new FluentMultiset(Multisets_1.default.from(project ? Sets_1.default.map(this.value, project) : this.value));
    };
    FluentSet.prototype.asMap = function (project) {
        return new FluentMap(Maps_1.default.from(Sets_1.default.map(this.value, project)));
    };
    FluentSet.prototype.asArrayMultimap = function (project) {
        return new FluentArrayMultimap(ArrayMultimaps_1.default.from(Sets_1.default.map(this.value, project)));
    };
    FluentSet.prototype.asSetMultimap = function (project) {
        return new FluentSetMultimap(__1.SetMultimaps.from(Sets_1.default.map(this.value, project)));
    };
    return FluentSet;
}());
var FluentMultiset = /** @class */ (function () {
    function FluentMultiset(multiset) {
        this.value = multiset;
    }
    FluentMultiset.prototype._call = function (func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new FluentMultiset(func.apply(void 0, tslib_1.__spreadArray([this.value], tslib_1.__read(args))));
    };
    FluentMultiset.prototype.concat = function () {
        var multisets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            multisets[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Multisets_1.default.concat], tslib_1.__read(multisets)));
    };
    FluentMultiset.prototype.union = function (set) {
        return this._call(Multisets_1.default.union, set);
    };
    FluentMultiset.prototype.intersection = function (set) {
        return this._call(Multisets_1.default.intersection, set);
    };
    FluentMultiset.prototype.difference = function (set) {
        return this._call(Multisets_1.default.difference, set);
    };
    FluentMultiset.prototype.sysmmetricDifference = function (set) {
        return this._call(Multisets_1.default.symmetricDifference, set);
    };
    FluentMultiset.prototype.retainOccurrences = function (set) {
        return this._call(Multisets_1.default.retainOccurrences, set);
    };
    FluentMultiset.prototype.map = function (project) {
        return this._call(Multisets_1.default.map, project);
    };
    FluentMultiset.prototype.flatMap = function (project) {
        return this._call(Multisets_1.default.flatMap, project);
    };
    FluentMultiset.prototype.filter = function (predicate) {
        return this._call(Multisets_1.default.filter, predicate);
    };
    FluentMultiset.prototype.filterEntries = function (predicate) {
        return this._call(Multisets_1.default.filterEntries, predicate);
    };
    FluentMultiset.prototype.sortByCount = function (comparator) {
        return this._call(Multisets_1.default.sortByCount, comparator);
    };
    FluentMultiset.prototype.distinct = function () {
        return this._call(Multisets_1.default.distinct);
    };
    FluentMultiset.prototype.partition = function (size) {
        return Multisets_1.default.partition(this.value, size).map(function (i) { return new FluentMultiset(i); });
    };
    FluentMultiset.prototype.forEach = function (consumer) {
        var e_4, _a;
        try {
            for (var _b = tslib_1.__values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                consumer(value);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    FluentMultiset.prototype.add = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Multisets_1.default.add], tslib_1.__read(items)));
    };
    FluentMultiset.prototype.delete = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Multisets_1.default.delete], tslib_1.__read(items)));
    };
    FluentMultiset.prototype.setCount = function (item, count) {
        return this._call(Multisets_1.default.setCount, item, count);
    };
    FluentMultiset.prototype.asIterable = function (project) {
        return new FluentIterable(project ? Multisets_1.default.map(this.value, project) : this.value);
    };
    FluentMultiset.prototype.asArray = function (project) {
        return new FluentArray(Arrays_1.default.from(project ? Multisets_1.default.map(this.value, project) : this.value));
    };
    FluentMultiset.prototype.asSet = function (project) {
        return new FluentSet(Sets_1.default.from(project ? Multisets_1.default.map(this.value, project) : this.value));
    };
    FluentMultiset.prototype.asMap = function (project) {
        return new FluentMap(Maps_1.default.from(Multisets_1.default.map(this.value, project)));
    };
    FluentMultiset.prototype.asArrayMultimap = function (project) {
        return new FluentArrayMultimap(ArrayMultimaps_1.default.from(Multisets_1.default.map(this.value, project)));
    };
    FluentMultiset.prototype.asSetMultimap = function (project) {
        return new FluentSetMultimap(__1.SetMultimaps.from(Multisets_1.default.map(this.value, project)));
    };
    return FluentMultiset;
}());
var FluentMap = /** @class */ (function () {
    function FluentMap(map) {
        this.value = map;
    }
    FluentMap.prototype._call = function (func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new FluentMap(func.apply(void 0, tslib_1.__spreadArray([this.value], tslib_1.__read(args))));
    };
    FluentMap.prototype.concat = function () {
        var maps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            maps[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Maps_1.default.concat], tslib_1.__read(maps)));
    };
    FluentMap.prototype.transform = function (project) {
        return this._call(Maps_1.default.transform, project);
    };
    FluentMap.prototype.filter = function (predicate) {
        return this._call(Maps_1.default.filter, predicate);
    };
    FluentMap.prototype.forEach = function (consumer) {
        var e_5, _a;
        try {
            for (var _b = tslib_1.__values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                consumer(entry);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    FluentMap.prototype.set = function () {
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Maps_1.default.set], tslib_1.__read(entries)));
    };
    FluentMap.prototype.delete = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([Maps_1.default.delete], tslib_1.__read(keys)));
    };
    FluentMap.prototype.asIterable = function (project) {
        return new FluentIterable(project ? Iterables_1.default.map(this.value, project) : this.value);
    };
    FluentMap.prototype.asArray = function (project) {
        return new FluentArray(Arrays_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentMap.prototype.asSet = function (project) {
        return new FluentSet(Sets_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentMap.prototype.asMultiset = function (project) {
        return new FluentMultiset(Multisets_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentMap.prototype.asArrayMultimap = function (project) {
        return new FluentArrayMultimap(ArrayMultimaps_1.default.from(project ? Maps_1.default.transform(this.value, project) : this.value));
    };
    FluentMap.prototype.asSetMultimap = function (project) {
        return new FluentSetMultimap(__1.SetMultimaps.from(project ? Maps_1.default.transform(this.value, project) : this.value));
    };
    return FluentMap;
}());
var FluentArrayMultimap = /** @class */ (function () {
    function FluentArrayMultimap(multimap) {
        this.value = multimap;
    }
    FluentArrayMultimap.prototype._call = function (func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new FluentArrayMultimap(func.apply(void 0, tslib_1.__spreadArray([this.value], tslib_1.__read(args))));
    };
    FluentArrayMultimap.prototype.concat = function () {
        var multimaps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            multimaps[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([ArrayMultimaps_1.default.concat], tslib_1.__read(multimaps)));
    };
    FluentArrayMultimap.prototype.transform = function (project) {
        return this._call(ArrayMultimaps_1.default.transform, project);
    };
    FluentArrayMultimap.prototype.filter = function (predicate) {
        return this._call(ArrayMultimaps_1.default.filter, predicate);
    };
    FluentArrayMultimap.prototype.filterCollections = function (predicate) {
        return this._call(ArrayMultimaps_1.default.filterCollections, predicate);
    };
    FluentArrayMultimap.prototype.forEach = function (consumer) {
        var e_6, _a;
        try {
            for (var _b = tslib_1.__values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                consumer(entry);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    FluentArrayMultimap.prototype.set = function () {
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([ArrayMultimaps_1.default.set], tslib_1.__read(entries)));
    };
    FluentArrayMultimap.prototype.delete = function () {
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([ArrayMultimaps_1.default.delete], tslib_1.__read(entries)));
    };
    FluentArrayMultimap.prototype.asIterable = function (project) {
        return new FluentIterable(project ? Iterables_1.default.map(this.value, project) : this.value);
    };
    FluentArrayMultimap.prototype.asArray = function (project) {
        return new FluentArray(Arrays_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentArrayMultimap.prototype.asSet = function (project) {
        return new FluentSet(Sets_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentArrayMultimap.prototype.asMultiset = function (project) {
        return new FluentMultiset(Multisets_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentArrayMultimap.prototype.asMap = function (project) {
        return new FluentMap(Maps_1.default.from(project ? ArrayMultimaps_1.default.transform(this.value, project) : this.value));
    };
    FluentArrayMultimap.prototype.asSetMultimap = function (project) {
        return new FluentSetMultimap(__1.SetMultimaps.from(project ? ArrayMultimaps_1.default.transform(this.value, project) : this.value));
    };
    return FluentArrayMultimap;
}());
var FluentSetMultimap = /** @class */ (function () {
    function FluentSetMultimap(multimap) {
        this.value = multimap;
    }
    FluentSetMultimap.prototype._call = function (func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new FluentSetMultimap(func.apply(void 0, tslib_1.__spreadArray([this.value], tslib_1.__read(args))));
    };
    FluentSetMultimap.prototype.concat = function () {
        var multimaps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            multimaps[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([__1.SetMultimaps.concat], tslib_1.__read(multimaps)));
    };
    FluentSetMultimap.prototype.transform = function (project) {
        return this._call(__1.SetMultimaps.transform, project);
    };
    FluentSetMultimap.prototype.filter = function (predicate) {
        return this._call(__1.SetMultimaps.filter, predicate);
    };
    FluentSetMultimap.prototype.filterCollections = function (predicate) {
        return this._call(__1.SetMultimaps.filterCollections, predicate);
    };
    FluentSetMultimap.prototype.forEach = function (consumer) {
        var e_7, _a;
        try {
            for (var _b = tslib_1.__values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                consumer(entry);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    FluentSetMultimap.prototype.set = function () {
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([__1.SetMultimaps.set], tslib_1.__read(entries)));
    };
    FluentSetMultimap.prototype.delete = function () {
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        return this._call.apply(this, tslib_1.__spreadArray([__1.SetMultimaps.delete], tslib_1.__read(entries)));
    };
    FluentSetMultimap.prototype.asIterable = function (project) {
        return new FluentIterable(project ? Iterables_1.default.map(this.value, project) : this.value);
    };
    FluentSetMultimap.prototype.asArray = function (project) {
        return new FluentArray(Arrays_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentSetMultimap.prototype.asSet = function (project) {
        return new FluentSet(Sets_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentSetMultimap.prototype.asMultiset = function (project) {
        return new FluentMultiset(Multisets_1.default.from(project ? Iterables_1.default.map(this.value, project) : this.value));
    };
    FluentSetMultimap.prototype.asMap = function (project) {
        return new FluentMap(Maps_1.default.from(project ? __1.SetMultimaps.transform(this.value, project) : this.value));
    };
    FluentSetMultimap.prototype.asArrayMultimap = function (project) {
        return new FluentArrayMultimap(ArrayMultimaps_1.default.from(project ? __1.SetMultimaps.transform(this.value, project) : this.value));
    };
    return FluentSetMultimap;
}());
exports.default = iter;
//# sourceMappingURL=ITER.js.map