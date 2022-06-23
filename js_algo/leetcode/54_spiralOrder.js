// https://leetcode.com/problems/spiral-matrix/

const spiralOrder = (matrix) => {
    const result = []

    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1

    while (left <= right && top <= bottom) {
        // right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }
		top += 1

        // bottom
		for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
		right -= 1

		if (top > bottom || left > right) {
			break
		}

        // left
		for (let i = right; i >= left; i--) {
            result.push(matrix[bottom][i])
        }
		bottom -= 1

        // up
		for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left])
        }
		left += 1
    }

    return result
}

const run = () => {
    const result = spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
    // const result = spiralOrder([[3], [2]])
    // const result = spiralOrder([
    //     [1, 2, 3, 4],
    //     [5, 6, 7, 8],
    //     [9, 10, 11, 12]
    // ])

    console.log(result)
}

export default run
