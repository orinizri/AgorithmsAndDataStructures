function merge(arr1, arr2) {
  const merged = [];
  let index1 = 0,
    index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      merged.push(arr1[index1]);
      index1++;
    } else {
      merged.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < arr1.length) {
    merged.push(arr1[index1]);
    index1++;
  }
  while (index2 < arr2.length) {
    merged.push(arr2[index2]);
    index2++;
  }
  return merged;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 2, 30, 0, 6, 70]));
