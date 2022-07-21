// https://leetcode.com/problems/pacific-atlantic-water-flow/

const pacificAtlantic = (heights) => {
    const ROW = heights.length
    const COL = heights[0].length
    let visited = {}
    const pacificAble = {}
    const atlanticAble = {}
    const directions = [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0]
    ]
    const queue = []

    const pacificFlow = (r, c) => {
        pacificAble[[r, c]] = 1
        visited[[r, c]] = 1

        for (let i = 0; i < directions.length; i++) {
            const [x, y] = directions[i]
            const nextR = r + x
            const nextC = c + y

            if (
                nextR < 0 ||
                nextR === ROW ||
                nextC < 0 ||
                nextC === COL ||
                visited[[nextR, nextC]] ||
                heights[r][c] > heights[nextR][nextC]
            ) {
                continue
            }

            pacificFlow(nextR, nextC)
        }
    }

    const atlanticFlow = (r, c) => {
        atlanticAble[[r, c]] = 1
        visited[[r, c]] = 1

        for (let i = 0; i < directions.length; i++) {
            const [x, y] = directions[i]
            const nextR = r + x
            const nextC = c + y

            if (
                nextR < 0 ||
                nextR === ROW ||
                nextC < 0 ||
                nextC === COL ||
                visited[[nextR, nextC]] ||
                heights[r][c] > heights[nextR][nextC]
            ) {
                continue
            }

            atlanticFlow(nextR, nextC)
        }
    }

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (i !== 0 && j > 0) {
                break
            }

            queue.push([i, j])
        }
    }

    while (queue.length) {
        const [i, j] = queue.pop()

        pacificFlow(i, j)
    }
    visited = {}

    for (let i = ROW - 1; i >= 0; i--) {
        for (let j = COL - 1; j >= 0; j--) {
            if (i !== ROW - 1 && j < COL - 1) {
                break
            }

            queue.push([i, j])
        }
    }

    while (queue.length) {
        const [i, j] = queue.pop()

        atlanticFlow(i, j)
    }

    const result = []
    Object.keys(pacificAble).forEach((item) => {
        if (atlanticAble[item]) {
            const [i, j] = item.split(',')
            result.push([parseInt(i, 10), parseInt(j, 10)])
        }
    })

    return result
}

const run = () => {
    // const result = pacificAtlantic([
    //     [2, 1],
    //     [1, 2]
    // ])
    const result = pacificAtlantic([
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
    ])
    // const result = pacificAtlantic([
    //     [1, 2, 2, 3, 5],
    //     [3, 2, 3, 4, 4],
    //     [2, 4, 5, 3, 1],
    //     [6, 7, 1, 4, 5],
    //     [5, 1, 1, 2, 4]
    // ])

    console.log(result)
}

export default run
