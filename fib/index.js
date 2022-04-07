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
    // base case
    
    // handle 
}

console.log(fib3(4))

module.exports = fib;
