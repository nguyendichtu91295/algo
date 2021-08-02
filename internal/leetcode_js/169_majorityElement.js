/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);

    let count = -1;
    let value = -1;
    let temp = -1;
    let majority = -1;

    nums.forEach((item) => {
        if (item !== value) {
            temp = 1;
            value = item;
        } else {
            temp += 1;
        }

        if (temp > count) {
            majority = value;
            count = temp;
        }
    })

    return majority;
};

// majorityElement([3,2,3])