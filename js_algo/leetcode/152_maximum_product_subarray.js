// explain
// https://www.youtube.com/watch?v=vtJvbRlHqTA

const maxProduct = (nums) => {
	let min = nums[0]
	let max = nums[0]
	let ans = nums[0]


	for (let i = 1; i < nums.length; i++) {
		const element = nums[i];

		const tempMax = Math.max(max * element, min * element, element)
		const tempMin = Math.min(max * element, min * element, element)

		ans = Math.max(ans, tempMax)
		max = tempMax
		min = tempMin
	}

	return ans
}

const run = () => {
    // const data = [2,3,-2,4]
    // const data = [-1, 6, 2, 0, 7, 9]
    const data = [-4, -2, -3]
    const result = maxProduct(data)

    console.log(result)
}

export default run
