

// https://leetcode.com/problems/partition-equal-subset-sum/

const canPartition = (nums) => {
    /*
        Time: O(2^n) cuz each step we have 2 option whether to take the item OR not
    */
    let total = nums.reduce((prev, current) => prev + current, 0)
    if (total % 2) {
        return false
    }
    total /= 2

    const dfs = (sum, index) => {
        if (sum === total) {
            return true
        }

        for (let i = index + 1; i < nums.length; i++) {
            if (dfs(sum + nums[i], i)) {
                return true
            }

            if (dfs(sum, i)) {
                return true
            }
        }

        return false
    }

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        if (dfs(item, i)) {
            return true
        }

        if (dfs(0, i)) {
            return true
        }
    }

    return false
}

const canPartition2 = (nums) => {
    let total = nums.reduce((prev, current) => prev + current, 0)
    if (total % 2) {
        return false
    }
    total /= 2
    let dp = new Set()
    dp.add(0)

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const newSet = new Set()
        newSet.add(element)

        for (const item of dp) {
            if (item + element === total || item === total) {
                return true
            }

            newSet.add(item)
            newSet.add(item + element)
        }

        dp = newSet
    }

    return false
}

const run = () => {
    const result = canPartition2([1,5,11,5])

    console.log(result)
}

export default run
