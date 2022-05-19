const threeSum = (nums) => {
    const result = []

    if (nums.length === 0) {
        return result
    }

    const sorted = nums.sort((a, b) => a - b)

    for (let i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i - 1] === sorted[i]) {
            continue
        }

        let l = i + 1
        let r = sorted.length - 1

        while (l < r) {
            const sum = sorted[i] + sorted[l] + sorted[r]

            if (sum === 0) {
                result.push([sorted[i], sorted[l], sorted[r]])

				l++
				while (sorted[l] === sorted[l - 1] && l < r) {
					l++
				}
            } else if (sum < 0) {
                l++
            } else {
                r--
            }
        }
    }

    return result
}

const run = () => {
    // const result = threeSum([0])
    // const result = threeSum([])
    const result = threeSum([-1, 0, 1, 2, -1, -4])
    // const result = threeSum([-4, -3, -2, -1, -1, -1, 0, 1 ,2 ,3])
    // const result = threeSum([0,0,0])
    // const result = threeSum([0, 0, 0, 0, 0])

    console.log(result)
}

export default run
