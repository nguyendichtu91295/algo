// https://leetcode.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = (nums1, nums2) => {
    // #  [2,5,7,10] [1,3,4,6,7,8]
    let A = nums1
    let B = nums2

    if (A.length > B.length) {
        A = B
        B = nums1
    }

    const total = nums1.length + nums2.length // 10
    const half = Math.floor(total / 2) // 5

    let l = 0
    let r = A.length - 1
    let partA = 0
    let partB = 0

    while (1) {
        partA = Math.floor((l + r) / 2)
        partB = half - partA - 2

        const currentA = partA < 0 ? -Infinity : A[partA]
        const nextA = partA + 1 < A.length ? A[partA + 1] : Infinity
        const currentB = partB < 0 ? -Infinity : B[partB]
        const nextB = partB + 1 < B.length ? B[partB + 1] : Infinity

        if (currentA <= nextB && currentB <= nextA) {
            if (total % 2) {
                // odd
                return Math.min(nextA, nextB)
            }

            // even
            const leftMid = Math.max(currentA, currentB)
            const rightMid = Math.min(nextA, nextB)

            return (leftMid + rightMid) / 2
        }

        if (currentB > nextA) {
            l = partA + 1
        } else {
            r = partA - 1
        }
    }
}

const run = () => {
    // const result = findMedianSortedArrays([2, 5, 7, 10], [1, 3, 4, 6, 7, 8])
    // const result = findMedianSortedArrays([1, 2], [3, 4])
    const result = findMedianSortedArrays([1, 3], [2])
    // const result = findMedianSortedArrays(
    //     [1, 2, 3, 4, 5, 6, 7, 8],
    //     [1, 2, 3, 4]
    // )

    console.log(result)
}

export default run
