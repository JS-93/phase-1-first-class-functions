const receivesAFunction = (callback) => {
    callback();
}
function returnsANamedFunction() {
    return returnsANamedFunction;
}

const returnsAnAnonymousFunction = () => {
    return function () {
    };
    }
