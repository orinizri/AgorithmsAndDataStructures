// return count of unique characters
function counterUniqueValues1(arr) {
  return new Set(arr).size;
}

function counterUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let slow = 0,
    fast = 1;
  const arrLen = arr.length;
  while (fast < arrLen) {
    if (arr[slow] !== arr[fast]) {
      arr[slow] = arr[fast];
      slow++;
    }
    fast++;
  }
  return slow + 1;
}

// console.log(counterUniqueValues([-1, 1, 2, 2]));
