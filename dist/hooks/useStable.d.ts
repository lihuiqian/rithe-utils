/// <reference types="react" />
declare function useStable<T>(value: T): import("react").MutableRefObject<T>;
export default useStable;
