declare const useAnimationThrottle: <T extends unknown[]>(handler: (...args: T) => void) => (...args: T) => void;
export default useAnimationThrottle;
