// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
	let prev = null
	let current = head
	let after = null

	while (current !== null) {
		after = current.next
		current.next = prev
		prev = current

		current = after
	}

	return prev
}

const run = () => {
    const head = new ListNode(1)
    const result = reverseList(head)

    console.log(result)
}

export default run
