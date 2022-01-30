function curry<T>(n: number, f: (...args: any[]) => T): (arg0: any) => any {
    return n > 1
        ? (arg0: any) => curry(n - 1, (...rest: any[]) => f(arg0, ...rest))
        : f;
}

function curry2<S0, S1, T>(
    f: (arg0: S0, arg1: S1) => T
): (arg0: S0) => (arg1: S1) => T {
    return (arg0: S0) => (arg1: S1) => f(arg0, arg1);
}

function curry3<S0, S1, S2, T>(
    f: (arg0: S0, arg1: S1, arg2: S2) => T
): (arg0: S0) => (arg1: S1) => (arg2: S2) => T {
    return (arg0: S0) => curry2((arg1: S1, arg2: S2) => f(arg0, arg1, arg2));
}
