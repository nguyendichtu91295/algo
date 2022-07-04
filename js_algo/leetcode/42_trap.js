// https://leetcode.com/problems/trapping-rain-water/

const trap = (height) => {
    let maxLeft = 0
    let maxRight = height[height.length - 1]
    let left = 0
    let right = height.length - 1
    let current = left
    const ans = []

    while (left < right) {
        const leftValue = height[left]
        const rightValue = height[right]
        const value = height[current]

        const trappedWater = Math.max(Math.min(maxLeft, maxRight) - value, 0)
        ans[current] = trappedWater

        maxLeft = Math.max(maxLeft, leftValue)
        maxRight = Math.max(maxRight, rightValue)

        if (leftValue <= rightValue) {
            left += 1
            current = left
        } else {
            right -= 1
            current = right
        }
    }

    const result = ans.reduce((prev, currentVal) => prev + currentVal, 0)

    return result
}

const run = () => {
    const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) // 6
    // const result = trap([4, 2, 0, 3, 2, 5]) // 9

    console.log(result)
}

export default run
