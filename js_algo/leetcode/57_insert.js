// https://leetcode.com/problems/insert-interval/

const insert = (intervals, newInterval) => {
    const result = []

    for (let i = 0; i < intervals.length; i++) {
        const each = intervals[i]

        if (each[1] < newInterval[0]) {
            result.push(each)
        } else if (each[0] > newInterval[1]) {
            result.push(newInterval)

            for (let j = i; j < intervals.length; j++) {
                result.push(intervals[j])
            }

            return result
        } else {
            newInterval = [
                Math.min(each[0], newInterval[0]),
                Math.max(each[1], newInterval[1])
            ]
        }
    }

    result.push(newInterval)

    return result
}

const run = () => {
    const result = insert(
        [
            [1, 3],
            [6, 9]
        ],
        [2, 5]
    )
    // const result = insert(
    //     [
    //         [1, 2],
    //         [3, 5],
    //         [6, 7],
    //         [8, 10],
    //         [12, 16]
    //     ],
    //     [4, 8]
    // )

    console.log(result)
}

export default run
