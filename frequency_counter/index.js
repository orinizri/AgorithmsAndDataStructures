// Return true if arr2 has corresponding elements that are multiples of elements in arr1
function isArrMultiplied(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const fMap = new Map();
  // Get the Map for the needed multipliers for arr2
  for (let element of arr1) {
    const multiplied = element * 2;
    fMap.set(multiplied, fMap.get(multiplied) + 1 || 1);
  }
  // Check arr2
  for (let element of arr2) {
    let occurrences = fMap.get(element);
    if (occurrences > 1) {
      fMap.set(element, occurrences - 1);
    } else if (occurrences === 1) {
      fMap.delete(element);
    } else {
      return false;
    }
  }
  return fMap.size === 0;
}

// console.log(isArrMultiplied([1, -2, 3], [6, -4, 2]));