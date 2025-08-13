//

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let maxSum = 0;
  let windowSum = 0;

  // Initial window
  for (let i = 0; i < n; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide window
  for (let i = n; i < arr.length; i++) {
    windowSum = windowSum - arr[i - n] + arr[i];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum;
}

// console.log(maxSubarraySum([1, 2, 3, 4, 5], 2));

// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
function minSubarrayLen(arr, n) {
  let left = 0;

  let minLen = Infinity;
  currentSum = 0;
  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];
    while (currentSum >= n) {
      minLen = Math.min(minLen, right - left + 1);
      currentSum -= arr[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubarrayLen([1, 1, 1], 3));

function findLongestSubstring(str) {
  let left = 0;
  let maxLen = 0;
  const seen = new Set();

  for (let right = 0; right < str.length; right++) {
    const char = str[right];

    while (seen.has(char)) {
      seen.delete(str[left]);
      left++;
    }

    seen.add(char);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
