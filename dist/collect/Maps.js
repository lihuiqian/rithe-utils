"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Iterables_1 = tslib_1.__importDefault(require("./Iterables"));
function empty() {
    return new Map();
}
function from(iterable) {
    return new Map(iterable);
}
function concat() {
    var maps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        maps[_i] = arguments[_i];
    }
    return maps.reduce(function (acc, map) { return (map.forEach(function (v, k) { return acc.set(k, v); }), acc); }, new Map());
}
function transform(map, project) {
    return new Map(Iterables_1.default.map(map.entries(), function (_a) {
        var _b = tslib_1.__read(_a, 2), k = _b[0], v = _b[1];
        return [k, project([k, v])];
    }));
}
function filter(map, predicate) {
    return new Map(Iterables_1.default.filter(map, predicate));
}
function elementsEqual(map1, map2) {
    var e_1, _a;
    if (map1.size !== map2.size)
        return false;
    try {
        for (var map1_1 = tslib_1.__values(map1), map1_1_1 = map1_1.next(); !map1_1_1.done; map1_1_1 = map1_1.next()) {
            var _b = tslib_1.__read(map1_1_1.value, 2), key = _b[0], value = _b[1];
            if (map2.get(key) !== value)
                return false;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (map1_1_1 && !map1_1_1.done && (_a = map1_1.return)) _a.call(map1_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
}
function set(map) {
    var entries = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        entries[_i - 1] = arguments[_i];
    }
    var result = new Map(map);
    entries.forEach(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        return result.set(key, value);
    });
    return result;
}
function delete_(map) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var result = new Map(map);
    keys.forEach(function (value) { return result.delete(value); });
    return result;
}
exports.default = {
    empty: empty,
    from: from,
    concat: concat,
    transform: transform,
    filter: filter,
    set: set,
    delete: delete_,
    elementsEqual: elementsEqual,
};
//# sourceMappingURL=Maps.js.map