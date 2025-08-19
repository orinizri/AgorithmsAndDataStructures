function swap(arr, el1, el2) {
  [arr[el1], arr[el2]] = [arr[el2], arr[el1]];
  return arr;
}

function selectionSort(arr) {
  if (!arr.length) return [];
  for (let i = 0; i < arr.length; i++) {
    let minValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValue]) {
        minValue = j;
      }
    }
    if (minValue !== i) {
      swap(arr, i, minValue);
    }
  }
  return arr;
}

console.log(selectionSort([3, 2, 1]));
