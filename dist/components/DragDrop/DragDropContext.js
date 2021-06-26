"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragDropProvider = exports.useDragDropObserver = exports.DragDropContext = exports.DragDropObserver = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var DragDropObserver = /** @class */ (function () {
    function DragDropObserver() {
        this._payload = null;
        this._subscribers = [];
    }
    DragDropObserver.prototype.start = function (event, payload) {
        this._payload = payload;
        this._publish('drag', event);
    };
    DragDropObserver.prototype.move = function (event) {
        this._publish('move', event);
    };
    DragDropObserver.prototype.end = function (event) {
        this._publish('drop', event);
    };
    DragDropObserver.prototype._publish = function (type, event) {
        var payload = this._payload;
        this._subscribers.forEach(function (next) {
            next(type, event, payload);
        });
    };
    DragDropObserver.prototype.subscribe = function (next) {
        this._subscribers.push(next);
    };
    DragDropObserver.prototype.unsubscribe = function (next) {
        var index = this._subscribers.findIndex(function (subscriber) { return subscriber === next; });
        index >= 0 && this._subscribers.splice(index, 1);
    };
    return DragDropObserver;
}());
exports.DragDropObserver = DragDropObserver;
exports.DragDropContext = react_1.createContext(new DragDropObserver());
var useDragDropObserver = function () { return react_1.useContext(exports.DragDropContext); };
exports.useDragDropObserver = useDragDropObserver;
var DragDropProvider = function (_a) {
    var children = _a.children;
    var ref = react_1.useRef(new DragDropObserver());
    return react_1.default.createElement(exports.DragDropContext.Provider, { value: ref.current }, children);
};
exports.DragDropProvider = DragDropProvider;
//# sourceMappingURL=DragDropContext.js.map