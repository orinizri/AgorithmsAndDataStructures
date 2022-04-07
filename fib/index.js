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
    for ( let i = 0 ; i < n ; i++ ) {
        let temp = curr
        curr = curr + prev;
        prev = temp
    }
    return curr
}

function fib2(n) {
    let curr = 1;
    let prev = 0;
    for ( let i = 0 ; i < n ; i++ ) {
        let temp = curr
        curr = curr + prev;
        prev = temp
    }
    return curr
}

console.log(fib(6))

module.exports = fib;
