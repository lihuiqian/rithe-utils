"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var Objects_1 = tslib_1.__importDefault(require("../base/Objects"));
var Arrays_1 = tslib_1.__importDefault(require("../collect/Arrays"));
function useShallow(value) {
    var ref = react_1.useRef(value);
    if (!Object.is(value, ref.current)) {
        if (value instanceof Array) {
            if (ref.current === undefined || !Arrays_1.default.shallowEquals(value, ref.current)) {
                ref.current = value;
            }
        }
        else if (value instanceof Object) {
            if (ref.current === undefined || !Objects_1.default.shallowEquals(value, ref.current)) {
                ref.current = value;
            }
        }
        else {
            ref.current = value;
        }
    }
    return ref.current;
}
exports.default = useShallow;
//# sourceMappingURL=useShallow.js.map