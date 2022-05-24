
// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

function search(nums, target) {
    let left = 0
    let right = nums.length - 1;
    let flag;
    while (left <= right) {
        flag = Math.floor((left + right) / 2);
        if (nums[flag] === target) return flag;
        (target < nums[flag]) ?
            right = flag - 1 :
            left = flag + 1;
    }
    return -1;
};