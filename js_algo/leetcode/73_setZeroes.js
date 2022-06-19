// https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = (matrix) => {
    let extraRow = 1

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0

				if (row < 1) {
					extraRow = 0
				} else {
                    matrix[row][0] = 0
                }
            }
        }
    }

    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0
        }
    }

    if (extraRow === 0) {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0
        }
    }
}

const run = () => {
    const result = setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ])
    // const result = setZeroes([[1,1,1],[1,0,1],[1,1,1]])
    // const result = setZeroes([[1, 0, 3]])

    console.log(result)
}

export default run
