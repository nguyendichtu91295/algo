package leetcode_go_medium

import (
	"github.com/nguyendichtu91295/algo/internal/base"
)

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func RemoveNthFromEnd(head *base.ListNode, n int) *base.ListNode {
	list_ref_arr := []*base.ListNode{}
	for c := head; c != nil; c = c.Next {
		list_ref_arr = append(list_ref_arr, c)
	}

	if n > len(list_ref_arr) || n == 0 {
		return head
	}

	prev_index := len(list_ref_arr) - n - 1
	delete_index := prev_index + 1

	if prev_index < 0 {
		if head.Next == nil {
			head = nil
		} else {
			head = head.Next
		}
	} else {
		list_ref_arr[prev_index].Next = list_ref_arr[delete_index].Next
	}

	return head
}
