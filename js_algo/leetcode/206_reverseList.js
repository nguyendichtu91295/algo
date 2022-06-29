// https://leetcode.com/problems/reverse-linked-list/
import ListNode from '/utils/singleLinkedList'

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
