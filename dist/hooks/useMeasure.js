"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
function useMeasure() {
    var elementRef = react_1.useRef(null);
    var _a = tslib_1.__read(react_1.useState(null), 2), rect = _a[0], setRect = _a[1];
    var handleRef = react_1.useRef(0);
    var measure = react_1.useCallback(function () {
        if (!elementRef.current)
            return;
        handleRef.current || (handleRef.current = requestAnimationFrame(function () {
            var _a;
            setRect(((_a = elementRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || null);
            handleRef.current = 0;
        }));
        return function () { return cancelAnimationFrame(handleRef.current); };
    }, []);
    react_1.useLayoutEffect(function () {
        var cancelMeasure = undefined;
        var resizeObserver = new ResizeObserver(function () { return cancelMeasure = measure(); });
        elementRef.current && (resizeObserver.observe(elementRef.current));
        return function () {
            resizeObserver.disconnect();
            cancelMeasure && cancelMeasure();
        };
    }, [measure]);
    return [elementRef, rect, measure];
}
exports.default = useMeasure;
//# sourceMappingURL=useMeasure.js.map