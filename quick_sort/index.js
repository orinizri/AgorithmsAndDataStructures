function swap(arr, el1, el2) {
  [arr[el1], arr[el2]] = [arr[el2], arr[el1]];
  return arr;
}

function pivot(arr, start, end) {
  let swapIdx = start;
  let pivot = arr[start];
  for (let i = start; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, start, end) {
  if (start < end) {
    const iTruePlace = pivot(arr, start, end);
    quickSort(arr, start, iTruePlace - 1);
    quickSort(arr, iTruePlace + 1, end);
  }
  return arr;
}
const arr = [5, 4, 6, 4, 3, 2];
console.log(quickSort(arr, 0, arr.length - 1));
