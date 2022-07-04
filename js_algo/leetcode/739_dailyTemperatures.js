// https://leetcode.com/problems/daily-temperatures/

const dailyTemperatures = (temperatures) => {
    const ans = (new Array(temperatures.length)).fill(0)
    const tempStack = []
    const indexStack = []

    for (let i = 0; i < temperatures.length; i++) {
        const value = temperatures[i]

        if (!tempStack.length || value <= tempStack[tempStack.length - 1]) {
            tempStack.push(value)
            indexStack.push(i)
        } else {
            while (
                tempStack.length &&
                tempStack[tempStack.length - 1] < value
            ) {
                tempStack.pop()
                const index = indexStack.pop()

                ans[index] = i - index
            }

            tempStack.push(value)
            indexStack.push(i)
        }
    }

    return ans
}

const run = () => {
    // const result = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
    // const result = dailyTemperatures([30, 40, 50, 60])
    // const result = dailyTemperatures([30, 30, 50, 60])
    const result = dailyTemperatures([34, 80, 80, 34, 34, 80, 80, 80, 80, 34])

    console.log(result)
}

export default run
