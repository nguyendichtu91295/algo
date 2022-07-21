// https://leetcode.com/problems/01-matrix/
import MyQueue from '/utils/queue'

const updateMatrix = (mat) => {
    const zeroQueue = new MyQueue()
    const ROW = mat.length
    const COL = mat[0].length
    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ] // up right down left

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (mat[i][j] === 0) {
                zeroQueue.enqueue([i, j])
            } else {
                mat[i][j] = '#'
            }
        }
    }

    while (zeroQueue.length()) {
        const [i, j] = zeroQueue.dequeue()
        directions.forEach((direction) => {
            const [x, y] = direction
            const nextR = i + x
            const nextC = j + y

            if (
                nextR < ROW &&
                nextR >= 0 &&
                nextC < COL &&
                nextC >= 0 &&
                mat[nextR][nextC] === '#'
            ) {
                mat[nextR][nextC] = mat[i][j] + 1
                zeroQueue.enqueue([nextR, nextC])
            }
        })
    }

    return mat
}

const run = () => {
    const result = updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ])
    // const result = updateMatrix([
    //     [0, 0, 0],
    //     [0, 1, 0],
    //     [0, 0, 0]
    // ])

    console.log(result)
}

export default run
