

function sum(a) {
    return function sumb(b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)())