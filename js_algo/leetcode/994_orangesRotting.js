// https://leetcode.com/problems/rotting-oranges/
import MyQueue from '/utils/queue'

const orangesRotting = (grid) => {
    const rottenQueue = new MyQueue()
    let freshCount = 0
    let minute = -1
    const ROW = grid.length
    const COL = grid[0].length
    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ] // up right down left
    // const visited = {}

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] === 2) {
                // rotten
                rottenQueue.enqueue([i, j])
            } else if (grid[i][j] === 1) {
                freshCount += 1
            }
        }
    }

    if (rottenQueue.length() === 0 && freshCount === 0) {
        return 0
    }

    while (rottenQueue.length()) {
        minute += 1

        const currentRotten = rottenQueue.length()

        for (let i = 0; i < currentRotten; i++) {
            const [r, c] = rottenQueue.dequeue()
            directions.forEach((direction) => {
                const [x, y] = direction
                const nextR = r + x
                const nextC = c + y

                if (
                    nextR >= 0 &&
                    nextR < ROW &&
                    nextC >= 0 &&
                    nextC < COL &&
                    grid[nextR][nextC] === 1
                ) {
                    grid[nextR][nextC] = 2
                    rottenQueue.enqueue([nextR, nextC])
                    freshCount -= 1
                }
            })
        }
    }

    return freshCount > 0 ? -1 : minute
}

const run = () => {
    const result = orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1]
    ])
    // const result = orangesRotting([[0,2]])
    // const result = orangesRotting([
    //     [2, 1, 1],
    //     [1, 1, 0],
    //     [0, 1, 1]
    // ])

    console.log(result)
}

export default run
