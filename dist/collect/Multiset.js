"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Multiset = /** @class */ (function () {
    function Multiset(iterable) {
        var e_1, _a;
        var _this = this;
        this.forEach = function (callbackFn) {
            _this._map.forEach(function (count, value) {
                for (var i = 0; i < count; i++) {
                    callbackFn(value, _this);
                }
            });
        };
        this.forEachEntry = function (callbackFn) {
            _this._map.forEach(function (count, value) { return callbackFn(value, count, _this); });
        };
        this._size = 0;
        this._map = new Map();
        if (iterable) {
            try {
                for (var iterable_1 = tslib_1.__values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                    var value = iterable_1_1.value;
                    this.add(value);
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
    Object.defineProperty(Multiset.prototype, "size", {
        get: function () { return this._size; },
        enumerable: false,
        configurable: true
    });
    Multiset.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, value, count, i, e_2_1;
        var e_2, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 7, 8, 9]);
                    _a = tslib_1.__values(this._map.entries()), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 6];
                    _c = tslib_1.__read(_b.value, 2), value = _c[0], count = _c[1];
                    i = 0;
                    _e.label = 2;
                case 2:
                    if (!(i < count)) return [3 /*break*/, 5];
                    return [4 /*yield*/, value];
                case 3:
                    _e.sent();
                    _e.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    };
    Multiset.prototype.asSet = function () {
        return new Set(this._map.keys());
    };
    Multiset.prototype.asMap = function () {
        return new Map(this._map.entries());
    };
    Multiset.prototype.add = function (value, occurrences) {
        var map = this._map;
        var prevCount = map.get(value) || 0;
        var intOccurrences = occurrences === undefined ? 1 : occurrences < 0 ? 0 : occurrences | 0;
        var newCount = prevCount + intOccurrences;
        newCount && map.set(value, newCount);
        this._size += intOccurrences;
        return this;
    };
    Multiset.prototype.delete = function (value, occurrences) {
        var map = this._map;
        var prevCount = map.get(value);
        if (prevCount === undefined)
            return false;
        var intOccurrences = occurrences === undefined ? 1 : occurrences < 0 ? 0 : occurrences | 0;
        var newCount = prevCount >= intOccurrences ? prevCount - intOccurrences : 0;
        var decrement = prevCount - newCount;
        newCount ? map.set(value, newCount) : map.delete(value);
        this._size -= decrement;
        return !!decrement;
    };
    Multiset.prototype.setCount = function (value, count) {
        var map = this._map;
        var prevCount = map.get(value) || 0;
        var newCount = count < 0 ? 0 : count | 0;
        var delta = newCount - prevCount;
        newCount ? map.set(value, newCount) : map.delete(value);
        this._size += delta;
        return this;
    };
    Multiset.prototype.clear = function () {
        this._map.clear();
        this._size = 0;
    };
    Multiset.prototype.entries = function () {
        return this._map.entries();
    };
    Multiset.prototype.values = function () {
        var _a, _b, _c, value, count, i, e_3_1;
        var e_3, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 7, 8, 9]);
                    _a = tslib_1.__values(this._map), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 6];
                    _c = tslib_1.__read(_b.value, 2), value = _c[0], count = _c[1];
                    i = 0;
                    _e.label = 2;
                case 2:
                    if (!(i < count)) return [3 /*break*/, 5];
                    return [4 /*yield*/, value];
                case 3:
                    _e.sent();
                    _e.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_3_1 = _e.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    };
    Multiset.prototype.has = function (value) {
        return this._map.has(value);
    };
    Multiset.prototype.count = function (value) {
        return this._map.get(value) || 0;
    };
    return Multiset;
}());
exports.default = Multiset;
//# sourceMappingURL=Multiset.js.map