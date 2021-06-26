"use strict";
/* eslint-disable @typescript-eslint/ban-types */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Records_1 = tslib_1.__importDefault(require("./Records"));
var EMPTY = {};
function empty() {
    return EMPTY;
}
function of(object) {
    return tslib_1.__assign({}, object);
}
function concat() {
    var e_1, _a;
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = {};
    try {
        for (var objects_1 = tslib_1.__values(objects), objects_1_1 = objects_1.next(); !objects_1_1.done; objects_1_1 = objects_1.next()) {
            var object = objects_1_1.value;
            Object.assign(result, object);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (objects_1_1 && !objects_1_1.done && (_a = objects_1.return)) _a.call(objects_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
function shallowEquals(object1, object2) {
    return Records_1.default.elementsEqual(object1, object2);
}
function set(object) {
    var e_2, _a;
    var entries = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        entries[_i - 1] = arguments[_i];
    }
    if (entries.length === 0)
        return object;
    var result = of(object);
    try {
        for (var entries_1 = tslib_1.__values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
            var _b = tslib_1.__read(entries_1_1.value, 2), key = _b[0], value = _b[1];
            result[key] = value;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
}
function _delete(object) {
    var e_3, _a;
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    if (keys.length === 0)
        return object;
    var result = of(object);
    try {
        for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            delete result[key];
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
function trim(object) {
    var e_4, _a, e_5, _b;
    var names = Object.getOwnPropertyNames(object);
    var symbols = Object.getOwnPropertySymbols(object);
    var descriptors = Object.getOwnPropertyDescriptors(object);
    var keys = [];
    try {
        for (var names_1 = tslib_1.__values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
            var name_1 = names_1_1.value;
            var descriptor = descriptors[name_1];
            descriptor.enumerable && descriptor.get && object[name_1] === undefined && keys.push(name_1);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var symbols_1 = tslib_1.__values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
            var symbol = symbols_1_1.value;
            var descriptor = descriptors[symbol];
            descriptor.enumerable && descriptor.get && object[symbol] === undefined && keys.push(symbol);
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (symbols_1_1 && !symbols_1_1.done && (_b = symbols_1.return)) _b.call(symbols_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return _delete.apply(void 0, tslib_1.__spreadArray([object], tslib_1.__read(keys)));
}
exports.default = {
    EMPTY: EMPTY,
    empty: empty,
    of: of,
    concat: concat,
    shallowEquals: shallowEquals,
    set: set,
    delete: _delete,
    trim: trim,
};
//# sourceMappingURL=Objects.js.map