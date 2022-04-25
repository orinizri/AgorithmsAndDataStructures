// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i=0 ; i < arr.length ; i++) {
        for (let j=0 ; j < arr.length - i ; j++) {
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

}

function mergeSort(arr) {

}

function merge(left, right) {

}

console.log(bubbleSort([1,3,2,4,0]));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
