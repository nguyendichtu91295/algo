// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
	const result = []
	const trackObj = {}

	for (let i = 0; i < nums.length; i++) {
		const item = nums[i];

		const remain = target - item

		if (trackObj[remain] === undefined) {
			trackObj[item] = i
		} else {
			result.push(i)
			result.push(trackObj[remain])
			break;
		}
	}

	return result
}

const run = () => {
    // const result = twoSum([2, 7, 11, 15], 9)
    const result = twoSum([3, 2, 4], 6)
    // const result = twoSum([3, 3], 6)

	console.log(result)
}

export default run
