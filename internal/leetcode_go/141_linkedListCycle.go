package leetcode_go

// import "fmt"

// type ListNode struct {
// 	Val  int
// 	Next *ListNode
// }

// func hasCycle(head *ListNode) bool {
// 	current := head
// 	next := head.Next

// 	if next == nil {
// 		return false
// 	}

// 	for {
// 		if current.Next == nil {
// 			return true
// 		}

// 		current.Next = nil
// 		current = next
// 		next = current.Next
// 	}

// 	return false
// }

// func main() {

// 	head := &ListNode{
// 		Val: 3,
// 	}

// 	head.Next = &ListNode{
// 		Val: 2,
// 	}

// 	head.Next.Next = &ListNode{
// 		Val: 0,
// 	}

// 	head.Next.Next.Next = &ListNode{
// 		Val: -4,
// 	}

// 	head.Next.Next.Next.Next = head.Next

// 	result := hasCycle(head)

// 	fmt.Println(result)
// }
