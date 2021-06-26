"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrx() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return items.filter(function (item) { return item !== null && item !== undefined && item !== true && item !== false; });
}
exports.default = arrx;
//# sourceMappingURL=arrx.js.map