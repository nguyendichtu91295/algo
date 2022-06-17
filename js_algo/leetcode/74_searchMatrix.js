// https://leetcode.com/problems/search-a-2d-matrix/

const searchMatrix = (matrix, target) => {
    const ROW = matrix.length - 1
    const COL = matrix[0].length - 1

    let top = 0
    let bot = ROW
    let mid = 0

    while (top < bot) {
        mid = Math.floor((top + bot) / 2)

        if (target <= matrix[mid][COL]) {
            bot = mid
        } else {
            top = mid + 1
        }
    }

    let r = COL
    let l = 0
    // if (r === 0) {
    //     return matrix[top][r] === target
    // }

    while (l <= r) {
        mid = Math.floor((l + r) / 2)

        if (target === matrix[top][mid]) {
            return true
        }

        if (target < matrix[top][mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return false
}

const run = () => {
    // const result = searchMatrix([[1]], 0)
    // const result = searchMatrix(
    //     [
    //         [1, 3, 5, 7],
    //         [10, 11, 16, 20],
    //         [23, 30, 34, 60]
    //     ],
    //     13
    // )
    // const result = searchMatrix([[1]],1)
    const result = searchMatrix([[1,3]], 3)
    // const result = searchMatrix([[1,1]], 2)
    // const result = searchMatrix(
    //     [
    //         [1, 3, 5, 7],
    //         [10, 11, 16, 20],
    //         [23, 30, 34, 60]
    //     ],
    //     1
    // )

    console.log(result)
}

export default run
