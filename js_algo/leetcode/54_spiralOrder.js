// https://leetcode.com/problems/spiral-matrix/

const spiralOrder = (matrix) => {
    const result = []

    let l = 0
    let r = matrix[0].length - 1
    let t = 0
    let b = matrix.length - 1

    while (l <= r && t <= b) {
        let i = t
        let j = l

        // right
        while (j <= r) {
            result.push(matrix[i][j])
            j++
        }
        j -= 1
        i += 1

        // down
        while (i <= b) {
            result.push(matrix[i][j])
            i += 1
        }
        i -= 1
        j -= 1

        // left
        while (j >= l) {
            result.push(matrix[i][j])
            j -= 1
        }
        j += 1
        i -= 1

        // up
        while (i > t) {
            result.push(matrix[i][j])
            i -= 1
        }

        t += 1
        b -= 1
        l += 1
        r -= 1
    }

    return result
}

const run = () => {
    // const result = spiralOrder([
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    // ])
    const result = spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ])

    console.log(result)
}

export default run
