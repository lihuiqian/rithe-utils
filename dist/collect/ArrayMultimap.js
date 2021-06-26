"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Iterables_1 = tslib_1.__importDefault(require("./Iterables"));
var ArrayMultimap = /** @class */ (function () {
    function ArrayMultimap(iterable) {
        var e_1, _a;
        var _this = this;
        this.forEach = function (callbackFn) {
            _this._map.forEach(function (collection, key) { return collection.forEach(function (value) { return callbackFn(value, key, _this); }); });
        };
        this.forEachCollection = function (callbackFn) {
            _this._map.forEach(function (collection, key) { return callbackFn(collection, key, _this); });
        };
        this._size = 0;
        this._keySize = 0;
        this._map = new Map();
        if (iterable) {
            try {
                for (var iterable_1 = tslib_1.__values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                    var _b = tslib_1.__read(iterable_1_1.value, 2), key = _b[0], value = _b[1];
                    this.set(key, value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    Object.defineProperty(ArrayMultimap.prototype, "size", {
        get: function () { return this._size; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMultimap.prototype, "keySize", {
        get: function () { return this._keySize; },
        enumerable: false,
        configurable: true
    });
    ArrayMultimap.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, key, collection, collection_1, collection_1_1, value, e_2_1, e_3_1;
        var e_3, _d, e_2, _e;
        return tslib_1.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 11, 12, 13]);
                    _a = tslib_1.__values(this._map), _b = _a.next();
                    _f.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 10];
                    _c = tslib_1.__read(_b.value, 2), key = _c[0], collection = _c[1];
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 7, 8, 9]);
                    collection_1 = (e_2 = void 0, tslib_1.__values(collection)), collection_1_1 = collection_1.next();
                    _f.label = 3;
                case 3:
                    if (!!collection_1_1.done) return [3 /*break*/, 6];
                    value = collection_1_1.value;
                    return [4 /*yield*/, [key, value]];
                case 4:
                    _f.sent();
                    _f.label = 5;
                case 5:
                    collection_1_1 = collection_1.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_2_1 = _f.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (collection_1_1 && !collection_1_1.done && (_e = collection_1.return)) _e.call(collection_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 9:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_3_1 = _f.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    };
    ArrayMultimap.prototype.asMap = function () {
        return new Map(Iterables_1.default.map(this._map, function (_a) {
            var _b = tslib_1.__read(_a, 2), k = _b[0], vs = _b[1];
            return [k, tslib_1.__spreadArray([], tslib_1.__read(vs))];
        }));
    };
    ArrayMultimap.prototype.set = function (key) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        if (values.length === 0)
            return this;
        var map = this._map;
        var collection = map.get(key);
        if (collection === undefined) {
            collection = [];
            map.set(key, collection);
            this._keySize++;
        }
        collection.push.apply(collection, tslib_1.__spreadArray([], tslib_1.__read(values)));
        this._size += values.length;
        return this;
    };
    ArrayMultimap.prototype.delete = function (key) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        var map = this._map;
        var collection = map.get(key);
        if (collection === undefined)
            return false;
        if (values.length === 0) {
            map.delete(key);
            this._keySize--;
            this._size -= collection.length;
            return true;
        }
        var deleteCount = 0;
        values.forEach(function (value) {
            var index = collection.indexOf(value);
            index >= 0 && (collection.splice(index, 1), deleteCount++);
        });
        this._size -= deleteCount;
        if (collection.length === 0) {
            map.delete(key);
            this._keySize--;
        }
        return deleteCount > 0;
    };
    ArrayMultimap.prototype.clear = function () {
        this._map.clear();
        this._size = 0;
        this._keySize = 0;
    };
    ArrayMultimap.prototype.keys = function () {
        return this._map.keys();
    };
    ArrayMultimap.prototype.values = function () {
        var _a, _b, collection, collection_2, collection_2_1, value, e_4_1, e_5_1;
        var e_5, _c, e_4, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 11, 12, 13]);
                    _a = tslib_1.__values(this._map.values()), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 10];
                    collection = _b.value;
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 7, 8, 9]);
                    collection_2 = (e_4 = void 0, tslib_1.__values(collection)), collection_2_1 = collection_2.next();
                    _e.label = 3;
                case 3:
                    if (!!collection_2_1.done) return [3 /*break*/, 6];
                    value = collection_2_1.value;
                    return [4 /*yield*/, value];
                case 4:
                    _e.sent();
                    _e.label = 5;
                case 5:
                    collection_2_1 = collection_2.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_4_1 = _e.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (collection_2_1 && !collection_2_1.done && (_d = collection_2.return)) _d.call(collection_2);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 9:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_5_1 = _e.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    };
    ArrayMultimap.prototype.collections = function () {
        return this._map.values();
    };
    ArrayMultimap.prototype.entries = function () {
        var _a, _b, _c, key, collection, collection_3, collection_3_1, value, e_6_1, e_7_1;
        var e_7, _d, e_6, _e;
        return tslib_1.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 11, 12, 13]);
                    _a = tslib_1.__values(this._map), _b = _a.next();
                    _f.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 10];
                    _c = tslib_1.__read(_b.value, 2), key = _c[0], collection = _c[1];
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 7, 8, 9]);
                    collection_3 = (e_6 = void 0, tslib_1.__values(collection)), collection_3_1 = collection_3.next();
                    _f.label = 3;
                case 3:
                    if (!!collection_3_1.done) return [3 /*break*/, 6];
                    value = collection_3_1.value;
                    return [4 /*yield*/, [key, value]];
                case 4:
                    _f.sent();
                    _f.label = 5;
                case 5:
                    collection_3_1 = collection_3.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_6_1 = _f.sent();
                    e_6 = { error: e_6_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (collection_3_1 && !collection_3_1.done && (_e = collection_3.return)) _e.call(collection_3);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7 /*endfinally*/];
                case 9:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_7_1 = _f.sent();
                    e_7 = { error: e_7_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_7) throw e_7.error; }
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    };
    ArrayMultimap.prototype.has = function (key) {
        return this._map.has(key);
    };
    ArrayMultimap.prototype.hasEntry = function (key, value) {
        var collection = this._map.get(key);
        if (collection === undefined)
            return false;
        return collection.indexOf(value) >= 0;
    };
    ArrayMultimap.prototype.get = function (key) {
        return this._map.get(key);
    };
    ArrayMultimap.prototype.count = function (key) {
        var collection = this._map.get(key);
        return (collection === null || collection === void 0 ? void 0 : collection.length) || 0;
    };
    return ArrayMultimap;
}());
exports.default = ArrayMultimap;
//# sourceMappingURL=ArrayMultimap.js.map