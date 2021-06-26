declare function useMixed<T>(value?: T, onValueChange?: (value: T) => void, defaultValue?: T): [T | undefined, (value: T) => void];
declare function useMixed<T>(value: T | undefined, onValueChange: ((value: T) => void) | undefined, defaultValue: T | undefined, initialValue: T): [T, (value: T) => void];
export default useMixed;
