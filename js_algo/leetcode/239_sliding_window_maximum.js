// https://www.youtube.com/watch?v=DfljaUwZsOk

const maxSlidingWindow = (nums, k) => {
    const deque = [] // store index only
    const result = []

    let i = 0
    let l = 0
    let r = 0

    while (i < nums.length) {

        r = deque.length - 1
        while (nums[deque[r]] !== undefined && nums[deque[r]] < nums[i]) {
            deque.pop()
            r = deque.length - 1
        }

        deque.push(i)

        if (i >= k - 1) {
            result.push(nums[deque[0]])
            l++
        }

        if (deque[0] < l) {
            deque.shift()
        }

        i++
    }

    return result
}

const run = () => {
    // const result = maxSlidingWindow([1], 1)
    // const result = maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)
    const result = maxSlidingWindow([1,3,-1,-3,3,3,6,7], 3)
    // const result = maxSlidingWindow([1, -1], 1)

    console.log(result)
}

export default run
