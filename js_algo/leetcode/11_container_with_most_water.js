// https://leetcode.com/problems/container-with-most-water/

const maxArea = (height) => {
	let l = 0
	let r = height.length - 1
	let ans = 0
	let temp = 0

	while (l < r) {
		const w = r - l
		const h = Math.min(height[l], height[r])

		temp = w * h

		if (temp > ans) {
			ans = temp
		}

		if (height[l] < height[r]) {
			l++
		} else {
			r--
		}
	}

	return ans
}

const run = () => {
    // const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
    // const result = maxArea([1,1])
    // const result = maxArea([1, 2, 3, 4])
    // const result = maxArea([1, 2, 4, 3])
    // const result = maxArea([1,1,3,1,1,1,1])
    // const result = maxArea([1,0,0,0,0,0,0,2,2])
    const result = maxArea([2,3,4,5,18,17,6])
    console.log(result)
}

export default run
