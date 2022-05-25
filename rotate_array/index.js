// Given an array, rotate the array to the right by k steps, where k is non-negative.


function rotate(nums, k) {
    for (let i = 0 ; i < k ; i++) {
        let lastNum = nums.pop();
        nums.unshift(lastNum)
    }
    return nums
};