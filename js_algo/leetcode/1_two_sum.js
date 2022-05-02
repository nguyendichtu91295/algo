// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    // 2 loops ~= brute force
    let head = 0
    let tail = 1
    let temp = 0

    while (head < nums.length) {
        temp += nums[head]

        while (tail < nums.length) {
            temp = nums[head] + nums[tail]

            if (temp === target) {
                return [head, tail]
            }

            temp -= nums[tail]
            tail += 1
        }

        temp -= nums[head]
        head += 1
        tail = head + 1
    }
}

const twoSumV2 = (nums, target) => {
    // using obj/hashmap
    const objIndex = {}

    nums.forEach((item, index) => {
        if (objIndex[item] !== undefined) {
            if (Array.isArray(objIndex[item])) {
                objIndex[item].push(index)
            } else {
                objIndex[item] = [objIndex[item], index]
            }

            return
        }

        objIndex[item] = index
    })

    let key = -1
    let value = -1
    let item = -1

    for (let i = 0; i < nums.length; i++) {
        item = nums[i]
        key = target - item
        value = objIndex[key]

        if (value === undefined) {
            continue
        }

        if (!Array.isArray(value) && i !== value) {
            return [i, value]
        }

        if (Array.isArray(value)) {
            return [i, value.filter((innerItem) => innerItem !== i)[0]]
        }
    }

    return []
}

export { twoSum, twoSumV2 }
