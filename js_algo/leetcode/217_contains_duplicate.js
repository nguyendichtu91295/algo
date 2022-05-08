const containsDuplicate = (nums) => {
	const numsObj = {}

	for (let i = 0; i < nums.length; i++) {
		const item = nums[i];

		if (numsObj[item] !== undefined) {
			return true
		}

		numsObj[item] = 1
	}

	return false
}

const containsDuplicateUsingSet = (nums) => {
	const numsSet = new Set(nums)
	return numsSet.size !== nums.length
}

const run = () => {
    const data = [1,2,3,1]
    // const data = [1,2,3,4]
    // const result = containsDuplicate(data)
    const result = containsDuplicateUsingSet(data)

    console.log(result)
}

export default run
