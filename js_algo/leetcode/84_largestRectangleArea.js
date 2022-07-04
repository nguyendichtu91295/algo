// https://leetcode.com/problems/largest-rectangle-in-histogram/

const largestRectangleArea = (heights) => {
    let maxRect = 0

    const indexStack = []
    const heightStack = []

    for (let i = 0; i < heights.length; i++) {
        const height = heights[i]

        if (
            !heightStack.length ||
            height >= heightStack[heightStack.length - 1]
        ) {
            indexStack.push(i)
        } else {
            let leftMostIndex = 0
            while (
                heightStack.length &&
                height < heightStack[heightStack.length - 1]
            ) {
                leftMostIndex = indexStack.pop()
                const currentHeight = heightStack.pop()
                const width = i - leftMostIndex

                const area = currentHeight * width

                if (area > maxRect) {
                    maxRect = area
                }
            }

            indexStack.push(leftMostIndex)
        }
        heightStack.push(height)
    }

    while (heightStack.length) {
        const index = indexStack.pop()
        const height = heightStack.pop()

        const width = heights.length - index
        const area = height * width

        if (area > maxRect) {
            maxRect = area
        }
    }

    return maxRect
}

const run = () => {
    const result = largestRectangleArea([2, 1, 5, 6, 2, 3])

    console.log(result)
}

export default run
