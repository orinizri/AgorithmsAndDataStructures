// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let newArray = [];
    let subArray = [];
    for (let num of array) {
        if (subArray.length < size) {
            subArray.push(num)
        } else {
                newArray.push(subArray);
                subArray = [num];
        }
    }
    if (subArray.length !== 0) newArray.push(subArray) 
    return newArray
}
function chunk2(array, size) {
    let counter = 0;
    let chunked = [];
    for (let num of array) {
        let last = chunked[chunked.length - 1] 
        if (last === undefined || last.length === size) {
            chunked.push([num])
        } else {
            last.push(num)
        }
    }
    return chunked;
}

console.log(chunk2([1,2,3,4,5], 2));

module.exports = chunk;