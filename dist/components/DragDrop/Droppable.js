"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Droppable = void 0;
var tslib_1 = require("tslib");
/* eslint-disable react/prop-types */
var react_1 = tslib_1.__importStar(require("react"));
var DragDropContext_1 = require("./DragDropContext");
exports.Droppable = react_1.default.forwardRef(function (props, forwardRef) {
    var onEnter = props.onEnter, onOver = props.onOver, onLeave = props.onLeave, onDrop = props.onDrop, children = props.children;
    var dragDropObserver = DragDropContext_1.useDragDropObserver();
    var ref = react_1.useRef(null);
    var overRef = react_1.useRef(false);
    // over
    react_1.useEffect(function () {
        var element = ref.current;
        if (!element)
            return;
        if (!(element instanceof HTMLElement))
            return;
        var next = function (type, event, payload) {
            var _a = element.getBoundingClientRect(), top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right;
            var clientX = event.clientX, clientY = event.clientY;
            var over = top <= clientY && clientY <= bottom && left <= clientX && clientX <= right;
            if (type === 'drag' && over) {
                onOver && onOver(event, payload);
            }
            else if (type === 'move') {
                if (!overRef.current && over) {
                    onEnter && onEnter(event, payload);
                }
                else if (overRef.current && over) {
                    onOver && onOver(event, payload);
                }
                else if (overRef.current && !over) {
                    onLeave && onLeave(event, payload);
                }
            }
            else if (type === 'drop' && over) {
                onDrop && onDrop(event, payload);
            }
            overRef.current = over;
        };
        dragDropObserver.subscribe(next);
        return function () {
            dragDropObserver.unsubscribe(next);
        };
    }, [dragDropObserver, onDrop, onEnter, onLeave, onOver]);
    return react_1.default.cloneElement(children, {
        ref: function (instance) {
            ref.current = instance;
            if (typeof forwardRef === 'function') {
                forwardRef(ref.current);
            }
            else if (forwardRef !== null) {
                forwardRef.current = ref.current;
            }
        }
    });
});
exports.Droppable.displayName = 'Droppable';
//# sourceMappingURL=Droppable.js.map