const maximumSubarray = (nums) => {
    // sliding window
    let sum = 0
	let tempSum = sum
    let i = 0;

    while (i < nums.length) {
		const item = nums[i]
		if (i === 0) {
			sum = item
			tempSum = item
			i++
			continue
		}

        if (tempSum < 0 && item >= tempSum) {
            tempSum = item
        } else {
            tempSum += item;
        }

		if (tempSum > sum) {
			sum = tempSum
		}

        i++
    }

	return sum
}

const run = () => {
    // const data = [-2,1,-3,4,-1,2,1,-5,4]
    // const data = [1]
    const data = [1,2]
    // const data = [5,4,-1,7,8]
    const result = maximumSubarray(data)

	console.log(result)
}

export default run
