// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i=0 ; i < arr.length ; i++) {
        for (let j=0 ; j < arr.length - i - 1 ; j++) {
            if (arr[j] > arr[j+1]) {
                let element = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = element;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i=0 ; i < arr.length ; i++) {
        let indexOfMin = i;
        for (let j=(i + 1) ; j < arr.length ; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i]
            arr[i] = lesser;
        }
    }
    return arr
}

function mergeSort(arr) {
    // base case - if array length is 1
    if (arr.length === 1) return arr;
    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let results = [];
    while (left.length && right.length) {
        left[0] < right[0] ? 
        results.push(left.shift()) :
        results.push(right.shift());
    }
    return [...results, ...left, ...right]
}

console.log(mergeSort([1,3,0,5]));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
