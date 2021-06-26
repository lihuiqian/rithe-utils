"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Objects_1 = tslib_1.__importDefault(require("../base/Objects"));
var Arrays_1 = tslib_1.__importDefault(require("../collect/Arrays"));
function shallowEquals(a, b) {
    if (Object.is(a, b))
        return true;
    if (a instanceof Array && b instanceof Array) {
        return Arrays_1.default.shallowEquals(a, b);
    }
    else if (a instanceof Object && b instanceof Object) {
        return Objects_1.default.shallowEquals(a, b);
    }
    return false;
}
exports.default = shallowEquals;
//# sourceMappingURL=shallowEquals.js.map