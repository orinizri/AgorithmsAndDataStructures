
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

function subtractProductAndSum(n) {
    let sum = 0, product = 1
    for (const val of n.toString()) {
        sum += Number(val)
        product *= Number(val)
    }
    return product - sum
};

function subtractProductAndSum2(n) {
    return n.toString().split("").reduce((a,b) => Number(a) * Number(b)) - 
    n.toString().split("").reduce((a,b) =>  Number(a) + Number(b),0)
};