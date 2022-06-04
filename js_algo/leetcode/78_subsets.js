// https://leetcode.com/problems/subsets/

const subsets = (nums) => {
    const result = []

    const helper = (current = [], index = 0) => {
        if (index === nums.length) {
            result.push([...current])
            return
        }
        const value = nums[index]

        const temp = [...current]
        temp.push(value)
        helper(temp, index + 1)

        temp.pop()
        helper(temp, index + 1)
    }

    helper()

    return result
}

const run = () => {
    const result = subsets([1, 2, 3])

    console.log(result)
}

export default run
