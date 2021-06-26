"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Iterables_1 = tslib_1.__importDefault(require("../collect/Iterables"));
var EMPTY = {};
function empty() {
    return EMPTY;
}
function of(record) {
    return tslib_1.__assign({}, record);
}
function from(iterable) {
    var e_1, _a;
    var result = {};
    try {
        for (var iterable_1 = tslib_1.__values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
            var _b = tslib_1.__read(iterable_1_1.value, 2), key = _b[0], value = _b[1];
            result[key] = value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
function concat() {
    var e_2, _a;
    var records = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        records[_i] = arguments[_i];
    }
    var result = {};
    try {
        for (var records_1 = tslib_1.__values(records), records_1_1 = records_1.next(); !records_1_1.done; records_1_1 = records_1.next()) {
            var record = records_1_1.value;
            Object.assign(result, record);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (records_1_1 && !records_1_1.done && (_a = records_1.return)) _a.call(records_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
}
function forEach(record, callbackFn) {
    var e_3, _a;
    try {
        for (var _b = tslib_1.__values(keys(record)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            callbackFn(record[key], key, record);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
}
function entries(record) {
    var e_4, _a;
    var result = [];
    try {
        for (var _b = tslib_1.__values(keys(record)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            result.push([key, record[key]]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return result;
}
function keys(record) {
    var e_5, _a, e_6, _b;
    var names = Object.getOwnPropertyNames(record);
    var symbols = Object.getOwnPropertySymbols(record);
    var descriptors = Object.getOwnPropertyDescriptors(record);
    var result = [];
    try {
        for (var names_1 = tslib_1.__values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
            var name_1 = names_1_1.value;
            var descriptor = descriptors[name_1];
            descriptor.enumerable && result.push(name_1);
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    try {
        for (var symbols_1 = tslib_1.__values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
            var symbol = symbols_1_1.value;
            var descriptor = descriptors[symbol];
            descriptor.enumerable && result.push(symbol);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (symbols_1_1 && !symbols_1_1.done && (_b = symbols_1.return)) _b.call(symbols_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return result;
}
function values(record) {
    var e_7, _a;
    var result = [];
    try {
        for (var _b = tslib_1.__values(keys(record)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            result.push(record[key]);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return result;
}
function transform(record, valueProject) {
    var e_8, _a;
    var result = {};
    try {
        for (var _b = tslib_1.__values(keys(record)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            result[key] = valueProject(record[key]);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return result;
}
function filter(record, predicate) {
    var e_9, _a;
    var result = {};
    try {
        for (var _b = tslib_1.__values(entries(record)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var entry = _c.value;
            predicate(entry) && (result[entry[0]] = entry[1]);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return result;
}
function size(record) {
    return Iterables_1.default.size(keys(record));
}
function elementsEqual(record1, record2) {
    var e_10, _a;
    if (size(record1) !== size(record2))
        return false;
    try {
        for (var _b = tslib_1.__values(entries(record1)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = tslib_1.__read(_c.value, 2), key = _d[0], value = _d[1];
            if (record2[key] !== value)
                return false;
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_10) throw e_10.error; }
    }
    return true;
}
function set(record) {
    var e_11, _a;
    var entries = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        entries[_i - 1] = arguments[_i];
    }
    if (entries.length === 0)
        return record;
    var result = of(record);
    try {
        for (var entries_1 = tslib_1.__values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
            var _b = tslib_1.__read(entries_1_1.value, 2), key = _b[0], value = _b[1];
            result[key] = value;
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return result;
}
function _delete(record) {
    var e_12, _a;
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    if (keys.length === 0)
        return record;
    var result = of(record);
    try {
        for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            delete result[key];
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_12) throw e_12.error; }
    }
    return result;
}
exports.default = {
    EMPTY: EMPTY,
    empty: empty,
    of: of,
    from: from,
    concat: concat,
    forEach: forEach,
    entries: entries,
    keys: keys,
    values: values,
    transform: transform,
    filter: filter,
    size: size,
    elementsEqual: elementsEqual,
    set: set,
    delete: _delete,
};
//# sourceMappingURL=Records.js.map