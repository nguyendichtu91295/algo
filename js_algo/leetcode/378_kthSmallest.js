const kthSmallest = (matrix, k) => {
    const n = matrix[0].length
    let l = matrix[0][0]
    let r = matrix[n - 1][n - 1]
    let mid = 0
    let count = 0

    const countIndex = (value) => {
        let row = 0
        let col = n - 1
        let result = 0

        while (row < n && col >= 0) {
            if (value >= matrix[row][col]) {
                row += 1
                result += col + 1
            } else {
                col -= 1
            }
        }

        return result
    }

    while (l < r) {
        mid = Math.floor((l + r) / 2)

        count = countIndex(mid)

        if (count < k) {
            l = mid + 1
        } else {
            r = mid
        }
    }

    return r
}

const run = () => {
    const result = kthSmallest(
        [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15]
        ],
        8
    )

    console.log(result)
}

export default run
