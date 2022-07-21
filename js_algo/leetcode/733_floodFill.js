// https://leetcode.com/problems/flood-fill/

const floodFill = (image, sr, sc, color) => {
    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ] // up right down left
    const copy = image.map(item => [...item])
    const ROW = image.length
    const COL = image[0].length
    const visited = {}
    if (image[sr][sc] === color) {
        return copy
    }

    const traverse = (row, col) => {
        visited[`${row}${col}`] = 1
        copy[row][col] = color

        directions.forEach((direction) => {
            const [x, y] = direction
			const nextR = row + x
			const nextC = col + y
            if (
                nextR < ROW &&
                nextR >= 0 &&
                nextC < COL &&
                nextC >= 0 &&
                !visited[`${nextR}${nextC}`] &&
                image[nextR][nextC] === image[sr][sc]
            ) {
                traverse(nextR, nextC)
            }
        })
    }

    traverse(sr, sc)
    return copy
}

const run = () => {
    const result = floodFill(
        [
            [1, 1, 1],
            [1, 1, 1],
            [1, 0, 1]
        ],
        1,
        1,
        2
    )
    // const result = floodFill(
	// 	[[0,0,1],[0,0,0]],
    //     0,
    //     0,
    //     0
    // )
    // const result = floodFill(
    //     [
    //         [1, 1, 1],
    //         [1, 1, 0],
    //         [1, 0, 1]
    //     ],
    //     1,
    //     1,
    //     2
    // )

    console.log(result)
}

export default run
