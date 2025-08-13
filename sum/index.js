// Currying
function sum(a) {
  return function sumb(b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

// console.log(sum(1)(2)(3)())

// Find first pair of values that sums to zero - best for unsorted array
function sumZero(arr) {
  // Create a complement map
  const cMap = new Map();
  // Loop and enter complement to 0 in the map
  for (let element of arr) {
    const complement = 0 - element;
    const complementToZero = cMap.get(element);
    console.log("element", element, "complementToZero", complementToZero);
    if (complementToZero !== undefined) {
      return [element, complementToZero];
    }
    cMap.set(complement, element);
  }
  console.log(cMap);
}

// console.log(sumZero([1, 2, 3, -2]));

// Two Pointers - best for a sorted array 
function sumZeroSortedArray(arr) {
  let right = arr.length - 1;
  for (let left = 0; left < right; left++) {
    if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];
    if (arr[left] + arr[right] > 0) {
      right--
    }
  }
}

// console.log(sumZeroSortedArray([1, 2, 3, -3]));

