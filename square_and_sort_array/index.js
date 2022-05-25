/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares (nums) {
    if (nums.length < 0) {
        return 0;
    }
    if (nums.length == 1) {
        nums[0] = nums[0] * nums[0];
        return nums;
    }
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i] * nums[i];
        nums[i] = temp;
    }
    nums.sort(function (a, b) { return a - b });
    return nums;
};

function sortedSquares2(nums) {
    return nums.map(num => num*num).sort((a,b)=>a-b);
};