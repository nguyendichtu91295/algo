// https://leetcode.com/problems/reorder-list/
import ListNode from '/utils/singleLinkedList'

const reorderList = (head) => {
    let slow = head
    let fast = head

    // finding mid point
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

	let current = slow.next
	let prev = null
	let after = null
    // reverse the part after mid
    while (current) {
		after = current.next
		current.next = prev
		prev = current
		current = after
	}
	slow.next = prev

	current = head
	fast = slow.next
	slow.next = null
	while(fast) {
		prev = fast
		after = current.next
		current.next = fast
		fast = fast.next
		current.next.next = after
		current = after
	}

	if (prev) {
		prev.next = current
	}

	// return head
};

const run = () => {
	const head = new ListNode(1)
	head.next = new ListNode(2)
	head.next.next = new ListNode(3)
	head.next.next.next = new ListNode(4)
	head.next.next.next.next = new ListNode(5)
	head.next.next.next.next.next = new ListNode(6)
	head.next.next.next.next.next.next = new ListNode(7)
    const result = reorderList(head)

    console.log(result)
}

export default run
