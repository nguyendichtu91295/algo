// https://leetcode.com/problems/first-missing-positive/

const firstMissingPositive = (nums) => {
    // convert negative to 0
    nums = nums.map((item) => (item < 0 ? 0 : item))

    // mark existing int by reusing nums array
    for (let i = 0; i < nums.length; i++) {
        const value = Math.abs(nums[i])

        const assignIndex = value - 1

        if (assignIndex >= nums.length || assignIndex < 0) {
            continue
        }

        if (nums[assignIndex] === 0) {
            nums[assignIndex] = (nums.length + 1) * -1
        } else {
            nums[assignIndex] =
                nums[assignIndex] < 0
                    ? nums[assignIndex]
                    : nums[assignIndex] * -1
        }
    }

    // check minimum positive number
    let ans = 1

    while (ans <= nums.length) {
        if (nums[ans - 1] >= 0) {
            return ans
        }
        ans++
    }

    return nums.length + 1
}

const run = () => {
    const result = firstMissingPositive([1, 2, 0]) // 3
    // const result = firstMissingPositive([5, 3, 4, -1, 2]) // 1
    // const result = firstMissingPositive([1]) // 2

    console.log(result)
}

export default run
