// https://leetcode.com/problems/subsets-ii/

const subsetsWithDup = (nums) => {
    const result = []
    const sorted = nums.sort((a, b) => a - b)

    const helper = (current = [], index = 0) => {
        if (index === sorted.length) {
            result.push([...current])
            return
        }

        const value = sorted[index]

        const temp = [...current]
        temp.push(value)
        helper(temp, index + 1)

        while (index < nums.length && sorted[index] === sorted[index + 1]) {
            index++
        }

        temp.pop()
        helper(temp, index + 1)
    }

    helper()

    return result
}

const run = () => {
    const result = subsetsWithDup([1, 2, 2])
    // const result = subsetsWithDup([4, 4, 4, 1, 4])
    // const result = subsetsWithDup([2,2,2,2])

    console.log(result)
}

export default run
