// https://leetcode.com/problems/kth-largest-element-in-an-array/

const findKthLargest = (nums, k) => {
    // const sorted = nums.sort((a, b) => b - a)

    // return sorted[k - 1]

    // quick select === quick sort

    // 2nd largest value from the end of list (sort this by ASC)
    k = nums.length - k
    let temp = 0

    const quickSelect = (l = 0, r = nums.length - 1) => {
        let i = l
        let p = l
        const pivot = nums[r]

        while (i < r) {
            if (nums[i] < nums[r]) {
                temp = nums[p]
                nums[p] = nums[i]
                nums[i] = temp
                p++
            }

            i++
        }

        nums[r] = nums[p]
        nums[p] = pivot

        if (k === p) return nums[p]
        if (k < p) return quickSelect(l, p - 1)
        if (k > p) return quickSelect(p + 1, r)
    }

    return quickSelect()
}

const run = () => {
    const result = findKthLargest([3, 2, 1, 5, 6, 4], 2)

    console.log(result)
}

export default run
