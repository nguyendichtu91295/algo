// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

const findMin = (nums) => {
	if (nums.length === 0 ) {
		return -1
	}

	if (nums.length === 1) {
		return nums[0]
	}

	let l = 0
	let r = nums.length - 1
	let mid = 0

	while (l < r) {
		mid = Math.floor((l + r) / 2)

		if (mid > 0 && nums[mid] < nums[mid - 1]) {
			return nums[mid]
		}

		if (nums[l] <= nums[mid] && nums[mid] > nums[r]) {
			l = mid + 1
		} else {
			r = mid - 1
		}
	}

	return nums[l]
};

const run = () => {
    const result = findMin([3,4,7,8,9,0,1,1,2])
    // const result = findMin([2,1])

    console.log(result)
}

export default run
