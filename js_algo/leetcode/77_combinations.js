// https://leetcode.com/problems/combinations/

const combine = (n, k) => {
	const result = []

	const helper = (current = [], start = 1) => {
		if (current.length === k) {
			result.push(current)
			return
		}

		let i = start;
		while (i <= n) {
			const temp = [...current]
			temp.push(i)

			i++
			helper(temp,i)
		}

	}

	helper()

	return result
};

const run = () => {
    const result = combine(4, 2)

    console.log(result)
}

export default run
