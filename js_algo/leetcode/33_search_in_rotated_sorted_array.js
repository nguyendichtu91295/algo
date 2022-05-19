const search = (nums, target) => {
    let result = -1

    const divideAndConquer = (start, end) => {
        if (start > end) {
            return
        }

        const mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) {
            result = mid
            return
        }

        if (
            nums[start] > nums[mid] ||
            target >= nums[start] &&
            target <= nums[mid]
        ) {
            divideAndConquer(start, mid)
        }

        if (
            nums[mid + 1] > nums[end] ||
            target >= nums[mid + 1] &&
            target <= nums[end]
        ) {
            divideAndConquer(mid + 1, end)
        }
    }

    divideAndConquer(0, nums.length - 1)

    return result
}

const run = () => {
    // const result = search([4, 5, 6, 7, 0, 1, 2], 0)
    // const result = search([4, 5, 6, 7, 0, 1, 2], 3)
    // const result = search([5, 1, 3], 1)
    // const result = search([5, 1, 2, 3, 4], 1)
    const result = search([5, 1, 3], 3)

    console.log(result)
}

export default run
