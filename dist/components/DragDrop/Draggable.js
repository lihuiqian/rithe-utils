"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Draggable = void 0;
var tslib_1 = require("tslib");
/* eslint-disable react/prop-types */
var react_1 = tslib_1.__importStar(require("react"));
var useShallow_1 = tslib_1.__importDefault(require("../../hooks/useShallow"));
var DragDropContext_1 = require("./DragDropContext");
exports.Draggable = react_1.default.forwardRef(function (props, forwardRef) {
    var _a = props.deadzone, deadzone = _a === void 0 ? 5 : _a, onStart = props.onStart, onMove = props.onMove, onEnd = props.onEnd, children = props.children;
    var payload = useShallow_1.default(props.payload);
    var dragDropObserver = DragDropContext_1.useDragDropObserver();
    var ref = react_1.useRef(null);
    var downRef = react_1.useRef(null);
    var targetRef = react_1.useRef(null);
    var rectRef = react_1.useRef(null);
    var draggingRef = react_1.useRef(false);
    // start
    react_1.useEffect(function () {
        var element = ref.current;
        if (!element)
            return;
        if (!(element instanceof HTMLElement))
            return;
        var listener = function (e) {
            var event = createEvent(e);
            if (deadzone === 0) {
                dragDropObserver.start(event, payload);
                onStart && onStart(event);
                draggingRef.current = true;
            }
            downRef.current = [event.clientX, event.clientY];
            targetRef.current = e.target;
            rectRef.current = event.sourceRect;
        };
        var mouseListener = function (e) { return listener(e); };
        var touchListener = function (e) { return listener(e); };
        element.addEventListener('mousedown', mouseListener, { passive: true });
        element.addEventListener('touchstart', touchListener, { passive: true });
        return function () {
            element.removeEventListener('mousedown', mouseListener);
            element.removeEventListener('touchstart', touchListener);
        };
    }, [deadzone, dragDropObserver, onStart, payload]);
    // move
    react_1.useEffect(function () {
        var listener = function (e) {
            var _a;
            if (!downRef.current || !rectRef.current)
                return;
            (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.empty();
            var event = createEvent(e, downRef.current, targetRef.current, rectRef.current);
            if (!draggingRef.current) {
                if (Math.pow(event.deltaX, 2) + Math.pow(event.deltaY, 2) > Math.pow(deadzone, 2)) {
                    dragDropObserver.start(event, payload);
                    onStart && onStart(event);
                    draggingRef.current = true;
                }
            }
            else {
                dragDropObserver.move(event);
                onMove && onMove(event);
            }
        };
        var mouseListener = function (e) { return listener(e); };
        var touchListener = function (e) { return listener(e); };
        window.addEventListener('mousemove', mouseListener, { passive: true });
        window.addEventListener('touchmove', touchListener, { passive: true });
        return function () {
            window.removeEventListener('mousemove', mouseListener);
            window.removeEventListener('touchmove', touchListener);
        };
    }, [deadzone, dragDropObserver, onMove, onStart, payload]);
    // end
    react_1.useEffect(function () {
        var listener = function (e) {
            if (!downRef.current || !rectRef.current)
                return;
            if (draggingRef.current) {
                var event_1 = createEvent(e, downRef.current, targetRef.current, rectRef.current);
                dragDropObserver.end(event_1);
                onEnd && onEnd(event_1);
                draggingRef.current = false;
            }
            downRef.current = null;
            rectRef.current = null;
        };
        var mouseListener = function (e) { return listener(e); };
        var touchListener = function (e) { return listener(e); };
        window.addEventListener('mouseup', mouseListener, { passive: true });
        window.addEventListener('touchend', touchListener, { passive: true });
        window.addEventListener('touchcancel', touchListener, { passive: true });
        return function () {
            window.removeEventListener('mouseup', mouseListener);
            window.removeEventListener('touchend', touchListener);
            window.removeEventListener('touchcancel', touchListener);
        };
    }, [dragDropObserver, onEnd]);
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
exports.Draggable.displayName = 'Draggable';
function createEvent(e, initClient, source, rect) {
    var _a = e.touches ? e.targetTouches[0] : e, clientX = _a.clientX, clientY = _a.clientY, pageX = _a.pageX, pageY = _a.pageY, screenX = _a.screenX, screenY = _a.screenY;
    var altKey = e.altKey, ctrlKey = e.ctrlKey, metaKey = e.metaKey, shiftKey = e.shiftKey;
    var deltaX = initClient ? clientX - initClient[0] : 0;
    var deltaY = initClient ? clientY - initClient[1] : 0;
    var sourceTarget = source !== null && source !== void 0 ? source : null;
    var sourceRect = rect !== null && rect !== void 0 ? rect : e.currentTarget.getBoundingClientRect();
    return {
        clientX: clientX,
        clientY: clientY,
        pageX: pageX,
        pageY: pageY,
        screenX: screenX,
        screenY: screenY,
        deltaX: deltaX,
        deltaY: deltaY,
        altKey: altKey,
        ctrlKey: ctrlKey,
        metaKey: metaKey,
        shiftKey: shiftKey,
        target: e.target,
        sourceTarget: sourceTarget,
        sourceRect: sourceRect,
    };
}
//# sourceMappingURL=Draggable.js.map