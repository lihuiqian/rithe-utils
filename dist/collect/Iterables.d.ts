import Comparator from "../base/Comparator";
declare function empty<T>(): Iterable<T>;
declare function from<T>(iterable: Iterable<T>): Iterable<T>;
declare function range(start: number, count: number, step?: number): Iterable<number>;
declare function repeat<T>(value: T, count: number): Iterable<T>;
declare function concat<T>(...iterables: Iterable<T>[]): Iterable<T>;
declare function zip<T>(...iterables: Iterable<T>[]): Iterable<T[]>;
declare function map<T, R>(iterable: Iterable<T>, project: (value: T, index: number) => R): Iterable<R>;
declare function pairwise<T>(iterable: Iterable<T>): Iterable<[T, T]>;
declare function scan<T>(iterable: Iterable<T>, accumulator: (acc: T, value: T, index: number) => T, initial?: T): Iterable<T>;
declare function scan<T, R>(iterable: Iterable<T>, accumulator: (acc: R, value: T, index: number) => R, initial: R): Iterable<R>;
declare function buffer<T>(iterable: Iterable<T>, count: number, step?: number): Iterable<T[]>;
declare function flatMap<T, R>(iterable: Iterable<T>, project: (value: T, index: number) => R[]): Iterable<R>;
declare function skip<T>(iterable: Iterable<T>, count: number): Iterable<T>;
declare function skipLast<T>(iterable: Iterable<T>, count: number): Iterable<T>;
declare function take<T>(iterable: Iterable<T>, count: number): Iterable<T>;
declare function takeLast<T>(iterable: Iterable<T>, count: number): Iterable<T>;
declare function filter<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): Iterable<T>;
declare function reverse<T>(iterable: Iterable<T>): Iterable<T>;
declare function sort<T>(iterable: Iterable<T>, comparator: Comparator<T>): Iterable<T>;
declare function distinct<T>(iterable: Iterable<T>): Iterable<T>;
declare function partition<T>(iterable: Iterable<T>, size: number): Iterable<T>[];
declare function reduce<T>(iterable: Iterable<T>, accumulator: (acc: T, value: T, index: number) => T): T | undefined;
declare function reduce<T>(iterable: Iterable<T>, accumulator: (acc: T, value: T, index: number) => T, initial: T): T;
declare function size<T>(iterable: Iterable<T>): number;
declare function get<T>(iterable: Iterable<T>, index: number): T | undefined;
declare function indexOf<T>(iterable: Iterable<T>, value: T): number;
declare function lastIndexOf<T>(iterable: Iterable<T>, value: T): number;
declare function first<T>(iterable: Iterable<T>): T | undefined;
declare function first<T>(iterable: Iterable<T>, defaultValue: T): T;
declare function last<T>(iterable: Iterable<T>): T | undefined;
declare function last<T>(iterable: Iterable<T>, defaultValue: T): T;
declare function max<T>(iterable: Iterable<T>, comparator: Comparator<T>): T | undefined;
declare function min<T>(iterable: Iterable<T>, comparator: Comparator<T>): T | undefined;
declare function has<T>(iterable: Iterable<T>, value: T): boolean;
declare function shallowEquals<T>(iterable1: Iterable<T>, iterable2: Iterable<T>): boolean;
declare const _default: {
    EMPTY: Iterable<any>;
    empty: typeof empty;
    from: typeof from;
    range: typeof range;
    repeat: typeof repeat;
    concat: typeof concat;
    zip: typeof zip;
    map: typeof map;
    pairwise: typeof pairwise;
    scan: typeof scan;
    buffer: typeof buffer;
    flatMap: typeof flatMap;
    skip: typeof skip;
    skipLast: typeof skipLast;
    take: typeof take;
    takeLast: typeof takeLast;
    filter: typeof filter;
    reverse: typeof reverse;
    sort: typeof sort;
    distinct: typeof distinct;
    partition: typeof partition;
    reduce: typeof reduce;
    size: typeof size;
    get: typeof get;
    indexOf: typeof indexOf;
    lastIndexOf: typeof lastIndexOf;
    first: typeof first;
    last: typeof last;
    max: typeof max;
    min: typeof min;
    has: typeof has;
    equals: typeof shallowEquals;
};
export default _default;
