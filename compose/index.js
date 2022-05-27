

const compose = (func1, func2) => (initialValue) => func1(func2(initialValue));

const addOne = (num) => Number(num) + 1;

console.log(compose(addOne, addOne)(5))

const compose2 = (...fns) => (...args) => 
    fns.reduceRight((acc, fn) => fn(acc), args);

console.log(compose2(addOne, addOne, addOne)(5))