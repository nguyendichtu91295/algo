// https://leetcode.com/problems/merge-two-sorted-lists/
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode()
    let current = dummy

    while (list1 && list2) {
        if (list1.val > list2.val) {
            current.next = list2
            list2 = list2.next
        } else {
            current.next = list1
            list1 = list1.next
        }

        current = current.next
    }

    if (list1 === null) {
        current.next = list2
    } else if (list2 === null) {
        current.next = list1
    }

    return dummy.next
}

const run = () => {
    const list1 = new ListNode()
    const list2 = new ListNode()
    // const list1 = new ListNode(1)
    // list1.next = new ListNode(2)
    // list1.next.next = new ListNode(4)
    // const list2 = new ListNode(1)
    // list2.next = new ListNode(3)
    // list2.next.next = new ListNode(4)
    const result = mergeTwoLists(list1, list2)
    console.log(result)
}

export default run
