// https://leetcode.com/problems/linked-list-cycle/

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

const hasCycle = (head) => {
	let fast = head
	let slow = head

	while (slow !== null) {
		slow = slow.next

		if (!fast || !fast.next) {
			break
		}

		fast = fast.next.next

		if (slow === fast) {
			return true
		}
	}

	return false
};

const run = () => {
	const head = new ListNode(1)
    const result = hasCycle(head)

    console.log(result)
}

export default run
