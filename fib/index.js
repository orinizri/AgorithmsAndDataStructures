// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let curr = 1;
    let prev = 0;
    for ( let i = 1 ; i < n ; i++ ) {
        let temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    return curr;
}

function fib2(n) {
    const result = [0,1];
    for (let i = 2 ; i<= n ; i++) {
        result.push(result[i-1] + result[i-2])
    }
    return result[n]
}


function fib3(n) {
    // Base case
    if (n < 2) return n;

    return fib3(n-1) + fib3(n-2);
}

function fib4(n, memo={}) {
    // Base case
    if (n < 2) return n;
    
    if (!memo[n]) {
        memo[n] = fib4(n-1, memo) + fib4(n-2, memo);
        return memo[n]
    } else {
        return memo[n]
    }
}

function memoize(fn) {
    const cache = {};
    return function(...args) { // array of arguments
        if (cache[args]) {
            return cache[args]
        }
    const result = fn.apply(this, args)
    cache[args] = result;

    return result;
    }
}

fib3 = memoize(fib3);
// fib2(30)
// console.time("fib")
// console.log(fib(30))
// console.timeEnd("fib")

console.time("fib2")
console.log(fib2(30))
console.timeEnd("fib2")

console.time("fib3")
console.log(fib3(30))
console.timeEnd("fib3")

console.time("fib4")
console.log(fib4(30))
console.timeEnd("fib4")

module.exports = fib;
