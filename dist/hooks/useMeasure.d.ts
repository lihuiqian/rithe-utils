/// <reference types="react" />
declare function useMeasure<T extends Element>(): [import("react").MutableRefObject<T | null>, DOMRect | null, () => void];
export default useMeasure;
