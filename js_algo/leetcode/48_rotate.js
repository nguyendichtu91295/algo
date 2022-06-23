// https://leetcode.com/problems/rotate-image/

const rotate = (matrix) => {
    const n = matrix.length

    for (let row = 0; row < Math.floor(n / 2); row++) {
        for (let col = row; col < n - row - 1; col++) {
            const temp = matrix[row][col]

            matrix[row][col] = matrix[n - 1 - col][row]
            matrix[n - 1 - col][row] = matrix[n - 1 - row][n - 1 - col]
            matrix[n - 1 - row][n - 1 - col] = matrix[col][n - 1 - row]
            matrix[col][n - 1 - row] = temp
        }
    }
}

const run = () => {
    // const result = rotate([
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    // ])

    // const result = rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9], ])
    // const result = rotate([[1, 2, 3, 4], [5, 6, 7, 8], [9 ,10, 11, 12], [13, 14, 15, 16]])
    const result = rotate([
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25],

    ])

    console.log(result)
}

export default run
