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


function fib3(n, memo={}) {
    // base case
    if (n < 2) return n;
    // handle 
    result = fib3(n-1, memo) + fib3(n-2, memo);
    if (!memo[n]) {
        memo[n] = result
        return result
    } else {
        return memo[n]
    }
}

function fib4(n, memo={}) {
    // base case
    if (n < 2) return n;
    // handle 
    result = fib4(n-1, memo) + fib4(n-2, memo);
    if (!memo[n]) {
        memo[n] = result
        return result
    } else {
        return memo[n]
    }
}

console.time("fib")
console.log(fib(15))
console.timeEnd("fib")

console.time("fib2")
console.log(fib2(15))
console.timeEnd("fib2")

console.time("fib3")
console.log(fib3(15))
console.timeEnd("fib3")

console.time("fib4")
console.log(fib3(15))
console.timeEnd("fib4")

module.exports = fib;
