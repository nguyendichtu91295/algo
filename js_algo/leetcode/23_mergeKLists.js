// https://leetcode.com/problems/merge-k-sorted-lists/

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

const mergeKLists = (lists) => {
    if (lists.length === 0) {
        return new ListNode().next
    }

    const merge = (left, right) => {
        const dummyNode = new ListNode()
        let current = dummyNode

        while(left && right) {
            if (left.val < right.val) {
                current.next = left
                left = left.next
            } else {
                current.next = right
                right = right.next
            }
            current = current.next
        }

        if (!left) {
            current.next = right
        } else if (!right) {
            current.next = left
        }

        return dummyNode.next
    }

    const divide = (start = 0, end = lists.length - 1) => {
        if (start >= end) {
            return lists[start]
        }

        const mid = Math.floor((start + end) / 2)
        const left = divide(start, mid)
        const right = divide(mid + 1, end)

        const node = merge(left, right)

        return node
    }

    return divide()
};

const run = () => {
    const result = mergeKLists('a', 'b')

    console.log(result)
}

export default run
