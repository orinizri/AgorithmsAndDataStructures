// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let flag = Math.floor((start + end) / 2);
        if (nums[flag] === target) return flag;
        (target < nums[flag]) ? 
        end = flag :
        start = flag + 1;
    }
    if (start === end) {
        return target <= nums[start] ? start : start + 1;
    }
};