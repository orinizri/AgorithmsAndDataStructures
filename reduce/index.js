


const reduce = (array, cb, initialValue) => {
    let result = initialValue;
    array.forEach(item =>
        result = cb.call(undefined, result, item));
    return result;
};

console.log(reduce([1,2], (a,b)=> a+b,0))
console.log(reduce(["a","b"], (a,b)=> a+b,''))