"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var useAnimationThrottle = function (handler) {
    var ref = react_1.useRef(0);
    return react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        ref.current && cancelAnimationFrame(ref.current);
        ref.current = requestAnimationFrame(function () {
            handler.apply(void 0, tslib_1.__spreadArray([], tslib_1.__read(args)));
            ref.current = 0;
        });
    }, [handler]);
};
exports.default = useAnimationThrottle;
//# sourceMappingURL=useAnimationThrottle.js.map