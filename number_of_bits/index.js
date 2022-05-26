
/**
 * Write a function that takes an unsigned integer 
 * and returns the number of '1' bits it has (also known as the Hamming weight).
 * @param {number} n - a positive integer
 * @return {number}
 */

function hammingWeight (n) {
    let num_of_1s = 0;
    for (let i = 0; i < 32; i++) {
        num_of_1s += n & 1;
        n >>= 1;
    }
    return num_of_1s
};
function hammingWeight2 (n) {
    n.toString(2).match(/1/g)?.length ?? 0;
};