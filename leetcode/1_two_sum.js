// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = [];
    let head = 0;
    let tail = 1;
    let temp = 0;

    while (head < nums.length) {
        temp += nums[head];

        while(tail < nums.length) {
            temp = nums[head] + nums[tail];

            if (temp === target) {
                return [head, tail];
            } else {
                temp -= nums[tail];
                tail += 1;
            }
        }

        temp -= nums[head];
        head += 1;
    }

    
};
