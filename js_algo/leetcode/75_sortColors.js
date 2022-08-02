// https://leetcode.com/problems/sort-colors/

const sortColors = (nums) => {
    /*
        Time: O(n) - 2 pass
        Space: constant (only need array of 3 for all cases)
        // bucket sort
    */
    // const table = [0, 0, 0]

    // nums.forEach((each) => {
    //     table[each] += 1
    // })

    // let orderIndex = 0
    // let i = 0
    // while (i < nums.length) {
    //     if (!table[orderIndex]) {
    //         orderIndex += 1
    //     } else {
    //         nums[i] = orderIndex
    //         table[orderIndex] -= 1
    //         i++
    //     }
    // }
    // return nums

    /*
        Time: O(n) (1 pass)
        Space: O(1)
    */
    let left = 0
    let right = nums.length - 1
    let i = 0
    let temp = 0

    while (i <= right) {
        if (nums[i] === 1) {
            i++
            continue
        }

        if (nums[i] === 2) {
            temp = nums[i]
            nums[i] = nums[right]
            nums[right] = temp
            right -= 1
        } else {
            temp = nums[i]
            nums[i] = nums[left]
            nums[left] = temp
            left += 1
            /*
                only increase i in this case cuz
                so far, everything in front is sorted
                but when swapping to the end of array
                this might cause the item is placed in wrong order
                and increasing i will make us miss this case
            */
            i++
        }
    }

    return nums
}

const run = () => {
    // const result = sortColors([2, 0, 2, 1, 1, 0])
    const result = sortColors([2, 0, 1])
    /*
        1 0 2

    */

    console.log(result)
}

export default run
