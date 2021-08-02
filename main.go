package main

import (
	"fmt"

	"github.com/nguyendichtu91295/algo/internal/base"
	"github.com/nguyendichtu91295/algo/internal/leetcode_go_medium"
)

func main() {
	// data := []int{-1, 0, 1, 2, -1, -4}
	// data := []int{-2, 1, 1}
	// data := []int{0, 0, 0, 0}
	// data := []int{-1, 0, 1}
	// data := []int{-1, 1, 0, 0}
	// data := []int{1, -1, -1, 0, 1, 2, -2}
	// data := []int{-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4}
	// data := []int{-2, -1, 0, 1, 2, 3}
	// data := []int{-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4}
	data := &base.ListNode{
		Val: 1,
	}

	// data.Next = &base.ListNode{
	// 	Val: 2,
	// }

	// data.Next.Next = &base.ListNode{
	// 	Val: 3,
	// }

	// data.Next.Next.Next = &base.ListNode{
	// 	Val: 4,
	// }

	// data.Next.Next.Next.Next = &base.ListNode{
	// 	Val: 5,
	// }

	// result := leetcode_go_medium.Three_sum(data)
	result := leetcode_go_medium.RemoveNthFromEnd(data, 1)

	fmt.Println("result: ", result)
}
