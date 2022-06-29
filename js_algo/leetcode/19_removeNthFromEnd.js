// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
import ListNode from '/utils/singleLinkedList'

const removeNthFromEnd = (head, n) => {
	const dummy = new ListNode()
	dummy.next = head
	let left = dummy
	let right = head
	let i = 0

	while (i < n) {
		right = right.next
		i++
	}

	while (right) {
		left = left.next
		right = right.next
	}

	left.next = left.next.next

	return dummy.next
};

const run = () => {
    const result = removeNthFromEnd()

    console.log(result)
}

export default run
