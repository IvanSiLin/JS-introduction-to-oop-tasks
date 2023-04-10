// BEGIN
export default function magic(...args) {

    const sum = args.reduce((acc, arg) => acc + arg, 0);

    const innerFn = (...innerArgs) => magic(sum, ...innerArgs);

    innerFn.valueOf = () => sum;

    return innerFn;
}
// END
