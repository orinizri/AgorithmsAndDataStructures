// Given an array, rotate the array to the right by k steps, where k is non-negative.


function rotate(nums, k) {
    for (k--) {
        nums.unshift(nums.pop())
    }
    return nums
};