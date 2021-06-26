"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
function usePopover(ref) {
    var _a = tslib_1.__read(react_1.useState(null), 2), anchorEl = _a[0], setAnchorEl = _a[1];
    var onOpen = react_1.useCallback(function (e) {
        setAnchorEl(ref && ref.current ? ref.current : e.currentTarget);
    }, [ref]);
    var onClose = react_1.useCallback(function () {
        setAnchorEl(null);
    }, []);
    var onSwitch = react_1.useCallback(function (e) {
        setAnchorEl(function (anchorEl) {
            return anchorEl ? null : (ref && ref.current ? ref.current : e.currentTarget);
        });
    }, [ref]);
    return {
        open: !!anchorEl,
        anchorEl: anchorEl,
        onOpen: onOpen,
        onClose: onClose,
        onSwitch: onSwitch,
    };
}
exports.default = usePopover;
//# sourceMappingURL=usePopover.js.map