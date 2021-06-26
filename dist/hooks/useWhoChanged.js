"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var shallowEquals_1 = tslib_1.__importDefault(require("../functions/shallowEquals"));
var usePrevious_1 = tslib_1.__importDefault(require("./usePrevious"));
function useWhoChanged(name, value) {
    var previous = usePrevious_1.default(value);
    if (previous !== value) {
        if (shallowEquals_1.default(previous, value)) {
            console.log(name, 'container changed', value);
        }
        else {
            console.log(name, 'changed', 'from', previous, 'to', value);
        }
    }
}
exports.default = useWhoChanged;
//# sourceMappingURL=useWhoChanged.js.map