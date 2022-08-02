// https://leetcode.com/problems/merge-intervals/

const merge = (intervals) => {
    const ans = []

    const sortedInterval = intervals.sort((a, b) => a[0] - b[0])
    ans.push(sortedInterval[0])

    sortedInterval.forEach((each) => {
        const [start, end] = each
        const lastElementEnd = ans[ans.length - 1][1]

        if (start <= lastElementEnd) {
            ans[ans.length - 1][1] = Math.max(end, lastElementEnd)
        } else {
            ans.push(each)
        }
    })

    return ans
}

const run = () => {
    const result = merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ])

    console.log(result)
}

export default run
