
// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, 
// formed from three of these lengths. 
// If it is impossible to form any triangle of a non-zero area, return 0.
// A < B + C else 0

function largestPerimeter(nums) {
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }
    return 0;
};