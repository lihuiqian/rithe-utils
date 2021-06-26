"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
function useMixed(value, onValueChange, defaultValue, initialValue) {
    var initialRef = react_1.useRef(initialValue);
    var _a = tslib_1.__read(react_1.useState(defaultValue), 2), uncontrolled = _a[0], setUncontrolled = _a[1];
    var controlled = value;
    var setControlled = react_1.useCallback(function (value) {
        onValueChange && onValueChange(value);
    }, [onValueChange]);
    var setBoth = react_1.useCallback(function (value) {
        setUncontrolled(value);
        onValueChange && onValueChange(value);
    }, [onValueChange]);
    if (value === undefined && onValueChange === undefined) {
        return [uncontrolled !== null && uncontrolled !== void 0 ? uncontrolled : initialRef.current, setUncontrolled];
    }
    else if (value !== undefined) {
        return [controlled !== null && controlled !== void 0 ? controlled : initialRef.current, setControlled];
    }
    else {
        console.warn(new Error('Component has both controlled and uncontrolled properties.'));
        return [uncontrolled !== null && uncontrolled !== void 0 ? uncontrolled : initialRef.current, setBoth];
    }
}
exports.default = useMixed;
//# sourceMappingURL=useMixed.js.map