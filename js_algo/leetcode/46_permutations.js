// https://leetcode.com/problems/permutations/

const permute = (nums) => {
    const helper = (current = [...nums]) => {
        const result = []

        if (current.length === 1) {
            return [[...current]]
        }

        for (let i = 0; i < current.length; i++) {
            const value = current.shift()

            const perms = helper(current)

            perms.forEach((item) => {
                item.push(value)
                result.push(item)
            })

            current.push(value)
        }

        return result
    }

    return helper()
}

const run = () => {
    const result = permute([1, 2, 3])

    console.log(result)
}

export default run
