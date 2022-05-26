
// write a function that will mimic reduce function behavior

//testing performance 
var startTime = performance.now()

// version 1 - better, dropped the fn.call 
const reduce = (array, fn, initialValue = '') => {
    let result = initialValue || array.shift();
    array.forEach(item =>
        result = fn(result, item));
    return result;
};

// version 2 - a bit slower 
const reduce_v2 = (fn, array, initialValue = 0) => {
    let result = initialValue || array.shift();
    while (array.length > 0) {
        result = fn(result , ...array.splice(0,1))
    } 
    return result;
};

// console.log(reduce([1,2,3], (a,b)=> a+b,0))
// console.log(reduce(["a","b","c"], (a,b)=> a+b))
console.log(reduce_v2((a,b)=> a+b, [1,2,3], 0))
console.log(reduce_v2((a,b)=> a+b, ["a","b","c"]))

var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
