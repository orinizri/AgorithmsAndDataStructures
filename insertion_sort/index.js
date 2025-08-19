function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[index] = currentValue;
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 1, 2]));
